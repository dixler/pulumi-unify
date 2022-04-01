import * as pulumi from '@pulumi/pulumi';
import * as awsSDK from 'aws-sdk';
import {Service} from 'aws-sdk';
import * as defs from './parsedefs';
import * as fs from "fs";
import path from "path";
import { serializeFunction } from '@pulumi/pulumi/runtime';
import { PassThrough } from 'stream';
import { setSyntheticLeadingComments } from 'typescript';


type CallSignature = {
  operation: string;
  required: defs.ShapeRef[];
  optional: defs.ShapeRef[];
}
type CallRef = {
  name: defs.ShapeRef;
  type: string;
}

type ShapeMap = {[key: string]: defs.Shape};
type OperationMap = {[key: string]: defs.Operation};

type Schema = {
  shapes: ShapeMap,
  operations: OperationMap,
}

function toPrimitiveShape(shape: defs.Shape) {
  const shapeType = shape.type;
  switch (shapeType) {
    case 'blob':
    case 'string':
      return 'string';
    case 'boolean':
      return 'boolean'
    case 'integer':
    case 'long':
      return 'number'
    case 'list':
    case 'map':
    case 'structure':
      return undefined;
  }
}

type PulumiType = 
| PulumiType[]
| {[key: string]: PulumiType}
| "string" | "number" | "boolean"

type Applicator = {
  apply: (elem: any) => any;
}

type ApplicatorMap = {[key: string]: Applicator};
type TypeMap = {[key: string]: string};

function getMatchApplicator(key: string, value: any, shapes: ShapeMap): [ApplicatorMap, TypeMap] {
    const types: TypeMap = {}
    const applicators: ApplicatorMap = {}
    if (shapes[key] === undefined) {
      return [applicators, types];
    }
    const shape = shapes[key];
    
    applicators[key] = {
      apply: (args) => 1,
    };
    return [applicators, types];
}

function _getMatchApplicator(key: string, value: any, shapes: ShapeMap): [ApplicatorMap, TypeMap] {
  const typeMatch: {[key: string]: true} = {}
  const typeOverrides: TypeMap = {}
  const hasMatch: ApplicatorMap = {}
  const keyMatch: ApplicatorMap = {}
  let lastTypeNum = 0;
  let lastKeyNum = 0;
  do {
    lastTypeNum = Object.keys(typeMatch).length;
    lastKeyNum = Object.keys(hasMatch).length;
    for (const [shapeName, shape] of Object.entries(shapes)) {
      if (key === "TableName" && shapeName === "TableName") {
          console.log(1);
      }
      if (hasMatch[shapeName]) {
        // already seen this
        continue;
      }

      const pType = toPrimitiveShape(shape)
      if (pType && pType === value) { // Possibly bugged it
        typeMatch[shapeName] = true;

        if (key.toLowerCase() !== shapeName.toLowerCase()) { // Same CamelCase these
          continue
        }
        typeOverrides[shapeName] = pType;
        keyMatch[shapeName] = hasMatch[shapeName] = {
          apply: (elem) => {
            return elem || value;
          },
        }
        //continue
      }

      if (shape.type === "list") {
        if (!hasMatch[shape.member.shape]) {
          continue;
        }
        typeOverrides[shapeName] = `${typeOverrides[shape.member.shape]}[]`; // replace this
        hasMatch[shapeName] = {
          apply: (list: any[]) => {
            return list.map((item) => hasMatch[shape.member.shape].apply(item));
          }
        }
        //continue;
      }
      if (shape.type === "structure" && shape.required) {
        const overridenFields: string[] = [];
        const applicator: {[key: string]: (elem: any) => any} = {}
        for (const subShapeName of shape.required) {
          const subShape = shape.members[subShapeName];
          if (!subShape) {
            throw new Error("error in schema");
          }
          applicator[subShapeName] = (item) => item; // set default
          if (hasMatch[subShapeName]) {
            applicator[subShapeName] = hasMatch[subShapeName].apply;
          }
          if (subShapeName.toLowerCase() === key.toLowerCase() || subShape.shape.toLocaleLowerCase() === key.toLowerCase()) {
            if (!typeMatch[subShape.shape]) {
              continue;
            }
            applicator[subShapeName] = (item) => item || value; // set override
            overridenFields.push(subShapeName);
          }
        }
        if (typeOverrides[shapeName] === undefined) {
          typeOverrides[shapeName] = shapeName;
        }
        const omittedFields = overridenFields.map(key => `"${key}"`).join("|")
        typeOverrides[shapeName] = omittedFields ? `Omit<${typeOverrides[shapeName]}, ${omittedFields}>` : typeOverrides[shapeName]
        keyMatch[shapeName] = hasMatch[shapeName] = {
          apply: (item) => {
            if (shape.required) {
              for (const [key, value] of Object.entries(item)) {
                if (!applicator[key]) {
                  continue;
                }
                item[key] = applicator[key](value);
              }
              // add default requireds
              for (const req of shape.required) {
                item[req] = item[req] || applicator[req](item[req]);
              }
            }
            return item;
          }
        }
      }
    }
  } while (
    Object.keys(hasMatch).length > lastKeyNum ||
    Object.keys(typeMatch).length > lastTypeNum
  );
  return [hasMatch, typeOverrides];
}

type Op = {
  operation: string;
  applicator: Applicator;
  applicatorType: string[];
  inputShape: string;
  returnType: string;
}

function getOperations(key: string, value: any, schema: Schema) {
  if (key === "TableName") {
    console.log("TABLE");
  }
  const [applicators, tmap] = getMatchApplicator(key, value, schema.shapes)
  const operations = schema.operations;
  const validOps: {[key: string]: Op} = {};
  for (const [opName, body] of Object.entries(operations)) {
    if (!body.input) {
      continue;
    }
    if (!applicators[body.input.shape]) {
      continue;
    }
    const inputShape = body.input.shape
    const outputShape = body.output ? body.output.shape : "void"

    type Method = string
    const s3Method: Method = lowerCamelCase(opName);

    validOps[opName] = {
      operation: opName,
      applicator: applicators[inputShape],
      applicatorType: [tmap[inputShape]],
      inputShape: inputShape,
      returnType: outputShape,
    }
  }
  return validOps;
}

type NewApplicator = {
  op: NewOp;
  apply: Applicator['apply'];
  omittedFields?: string[];
}

export function getResourceOperations(resource: {[key: string]: string}, schema: Schema) {
  const resourceOps: {[key: string]: NewApplicator} = { };

  for (const op of getInputOps(schema)) {
    const shapeName = op.inputShapeName;
    const shape = op.shape;

    resourceOps[op.name] = {
      op: op,
      apply: (a) => a,
    }
    if (shape.type !== "structure") {
      continue;
    }
    if (!shape.required) {
      continue;
    }
    const liftedValues: {[key: string]: any} = {}
    for (const field of shape.required) {
      if (resource[field] === undefined) {
        continue;
      }
      // common field between resource and operation
      liftedValues[field] = resource[field];
    }
    resourceOps[op.name] = {
      op: op,
      apply: (partial) => {
        return {...partial, ...liftedValues};
      },
      omittedFields: Object.keys(liftedValues),
    }
  }
  return resourceOps;
}

type NewOp = {
  name: string;
  inputShapeName: string;
  outputShapeName: string;
  shape: defs.Shape;
}

function getInputOps(schema: Schema): NewOp[] {
  return Object.values(schema.operations)
  .filter((op) => {
    if (op.input === undefined) return false;

    if (op.output === undefined) return false; // TODO test this

    const shape = schema.shapes[op.input.shape];
    if (shape.type !== "structure") return false;

    return true;
  })
  .map((op): NewOp => {
    const shape = schema.shapes[op.input!.shape];
    return {
      name: op.name,
      inputShapeName: op.input!.shape,
      outputShapeName: op.output!.shape,
      shape: schema.shapes[op.input!.shape],
    }
  })
}

/*
export function _getResourceOperations(resource: {[key: string]: string}, schema: Schema, client: Service) {
  const resourceOps: {[key: string]: Op} = {};
  for (const [key, value] of Object.entries(resource)) {
    const ops = getOperations(key, value, schema, client)
    for (const [op, opSpec] of Object.entries(ops))  {
      if (!resourceOps[op]) {
        resourceOps[op] = opSpec
        continue;
      }
      const curOp = resourceOps[op];
      curOp.applicator = {
        apply: ((newApplicator, oldApplicator): Applicator['apply'] => {
          return (elem) => newApplicator.apply(oldApplicator.apply(elem))
        })(curOp.applicator, opSpec.applicator),
      }

      curOp.applicatorType = curOp.applicatorType.concat(opSpec.applicatorType);
      //curOp.applicatorType = `(${curOp.applicatorType} | ${opSpec.applicatorType})`;
    }
  }
  return resourceOps;
}
*/

type BaseClass = string;
type ServiceClass = string;
type SchemaPath = string;

type ArgName = string;
type ArgType = string;
type Arg = [ArgName, ArgType];

export function lowerCamelCase(str: string) {
  return str[0].toLowerCase() + str.substring(1);
}
export function upperCamelCase(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}

class MethodFactory {
  //constructor(readonly methodName: string, readonly args: Arg[], readonly returnType: ArgType) {}
  constructor(readonly op: NewApplicator) {}
  render() {
    //${this.op.operation}(${this.args.map(([name, type]) =>`${name}: ${type}`).join(', ')}): ${this.returnType} {
    const op = this.op;
    let omitType = "";
    if (op.omittedFields !== undefined && op.omittedFields.length > 0) {
        omitType = ` & keyof Omit<${op.op.inputShapeName}, ${(op.omittedFields || []).map(field => `"${field}"`).join(" | ")}>`;
    }
    return `
    invoke${upperCamelCase(op.op.name)}(partialParams: ToOptional<{
      [K in keyof ${op.op.inputShapeName}${omitType}]: (${op.op.inputShapeName})[K]
    }>): Request<${op.op.outputShapeName}, AWSError> {
        this.boot();
        return this.client.${lowerCamelCase(op.op.name)}(
          this.ops["${upperCamelCase(op.op.name)}"].apply(partialParams)
        );
    }`
  }
}

class ClassFactory {
  constructor(readonly cls: [BaseClass, any, string], readonly client: [ServiceClass, any, string], readonly schemaFile: SchemaPath) {
    //getResourceOperations(this.baseClass, client)
  }
  render() {
    const [clientRef, client, serviceId] = this.client
    const [classRef, cls, resource] = this.cls

    const params: {[key: string]: any} = {}
    Object.entries(cls).forEach(([key, value]: [string, any]) => {
        params[upperCamelCase(key)] = value;
        if (cls[upperCamelCase(resource)+upperCamelCase(key)] === undefined
            && params[upperCamelCase(resource)+upperCamelCase(key)] === undefined) {
            params[upperCamelCase(resource)+upperCamelCase(key)] = value
        }
    })
    if (resource === "Table") {
      console.log("TABLE", params);
    }
    const ops = getResourceOperations(params, require(this.schemaFile))
    const methods = Object.entries(ops).map(([opName, op]) => {
      return new MethodFactory(op);
    })

    const typeList = methods
      .map((method) => method.op.op.inputShapeName)
      .concat(
        methods.map((method) => method.op.op.outputShapeName))
      .filter((type) => {
        const filterList = [
          "void",
        ]
        return !filterList.includes(type);
      })
    const typeSet: {[key: string]: true} = {};
    typeList.forEach((type) => {
      typeSet[type] = true;
    })
    const typeImports = Object.keys(typeSet);

    return `
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ${typeImports.join(",\n    ")}
} from "aws-sdk/clients/${serviceId.toLowerCase()}";
const schema = require("${path.join("../apis", path.basename(this.schemaFile))}")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends ${classRef} {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof ${classRef}>) {
        super(...args)
        this.booted = false;
        this.client = new ${clientRef}()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }
${methods.map(method => method.render()).join('\n')}
}`
  }
}

interface Field {
  description: string;
  language?: {
    nodejs?: {
      name?: string;
    }
  }
}

interface RefField extends Field {
  $ref: string;
}
interface BasicField extends Field {
  type: "string";
}

function schemaToResourceKeys(resourceName: string): any {
    const pulumiSchema = require('./aws-schema.json')
    const resourceSchema: {[key: string]: BasicField | RefField} = pulumiSchema['resources'][resourceName].properties
    const resource: {[key: string]: string} = {

    }
    Object.entries(resourceSchema).forEach(([key, val]: [string, any]) => {
      if (val.type !== "string") {
        return;
      }
      const basicField: BasicField = val;
      resource[key] = basicField.type;
    })
    return resource;
}

function findAWSSchema(service: string) {
  const prefix = "./aws-sdk-js/apis/";
  const files = fs.readdirSync(prefix)
  const choices = files
  .filter((filename) => {
    const [prefix, suffix] = filename.split('-20', 2); // TODO fix parser
    if (prefix.toLowerCase() != service.toLowerCase()) {
      return false
    }
    if (!suffix.endsWith(".normal.json")) {
      return false
    }
    return true
  })
  .sort();
  if (choices.length === 0) {
    return undefined;
  }
  return "./" + path.join(prefix, choices[choices.length - 1])
}
function main() {
  const pulumiSchema = require('./aws-schema.json')
  const awsSDK = require('aws-sdk');
  const aws = require("@pulumi/aws");
  fs.rmSync("./out", {
    recursive: true,
    force: true,
  });
  fs.mkdirSync('./out');
  fs.copyFileSync('parse.ts', './out/parse.ts')

  for (const key of Object.keys(pulumiSchema['resources'])) {
      const [cloud, path, resource] = key.split(':');
      const [service, _] = path.split('/', 2)
      
      const awsServiceNames = Object.keys(awsSDK)
      .filter(key => key.toLowerCase() == service.toLowerCase())
      .sort();
      let awsServiceName: string = "";
      try {
        fs.mkdirSync(`out/${service}`)
      } catch (e) {}
      try {
        awsServiceName = awsServiceNames[awsServiceNames.length-1];
        const schema = findAWSSchema(service)
        if (schema === undefined) {
          console.error(`no schema found processing [key=${key}]`);
          continue;
        }
        
        if (!aws[service] || !aws[service][resource]) {
          console.error(`no resource found processing [key=${key}]`);
          continue;
        }
        fs.writeFileSync(
          `out/${service}/${resource}.ts`, 
          (new ClassFactory(
            [`${cloud}.${service}.${resource}`, schemaToResourceKeys(key), resource],
            [`awssdk.${awsServiceName}`, new (awsSDK[awsServiceName] as any)(), awsServiceName],
            schema,
          ).render()))
        } catch (e: any) {
          console.error(`error processing [key=${key}] ${e}`)
          console.log(e.stack)
      }
  }
}
if (require.main === module) {
    main();
    /*
    const schema = require(findAWSSchema('dynamodb')!)
    const awsSDK = require('aws-sdk');
    console.log(new ClassFactory(
      [`aws.dynamodb.Table`, schemaToResourceKeys("aws:dynamodb/table:Table"), "Table"],
      [`awssdk.DynamoDB`, new (awsSDK['DynamoDB'] as any)(), 'DynamoDB'],
      schema,
    ).render())
    //});
    ///*
    const awsSDK = require('aws-sdk');
    const schema = require(findAWSSchema('s3')!)
    //serializeFunction(() => {
      const resops = getResourceOperations({
        "Bucket": "mybuck",
      }, schema)
      console.log(resops['PutObject'].apply({Key: "Wew"}))
    //});
    //*/
}