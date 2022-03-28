import * as pulumi from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"
import * as awssdk from 'aws-sdk';
import {Service} from 'aws-sdk';
import * as defs from './parsedefs';


type CallSignature = {
  operation: string;
  required: defs.ShapeRef[];
  optional: defs.ShapeRef[];
}
type CallRef = {
  name: defs.ShapeRef;
  type: string;
}

const schema = require('/home/kdixler/Documents/unify/aws-sdk-js/apis/s3-2006-03-01.normal.json')

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
      if (hasMatch[shapeName]) {
        // already seen this
        continue;
      }

      const pType = toPrimitiveShape(shape)
      if (pType && pType === typeof value) {
        typeMatch[shapeName] = true;

        if (key.toLowerCase() !== shapeName.toLowerCase()) {
          continue
        }
        typeOverrides[shapeName] = pType;
        keyMatch[shapeName] = hasMatch[shapeName] = {
          apply: (elem) => elem || value,
        }
        continue
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
        continue;
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
        const omittedFields = overridenFields.map(key => `"${key}"`).join("|")
        typeOverrides[shapeName] = omittedFields ? `Omit<${shapeName}, ${omittedFields}>` : shapeName
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
  applicatorType: string;
  inputShape: string;
  returnType: string;
}

function getOperations(key: string, value: any, schema: Schema, client: Service) {
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
    const s3Method: Method = (opName[0].toLowerCase() + opName.substring(1));
    validOps[opName] = {
      operation: opName,
      applicator: applicators[inputShape],
      applicatorType: tmap[inputShape],
      inputShape: inputShape,
      returnType: outputShape,
    }
  }
  return validOps;
}
export function getResourceOperations(resource: {[key: string]: string}, schema: Schema, client: Service) {
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

      if (curOp.applicatorType === opSpec.applicatorType) {
        continue;
      }
      curOp.applicatorType = `(${curOp.applicatorType} & ${opSpec.applicatorType})`;
    }
  }
  return resourceOps;
}

var resops = getResourceOperations({
  "BucketName": "mybuck",
  "Key": "lekey",
}, schema, new awssdk.S3())

//console.log(resops['PutObject'].applicator.apply({}))

resops = getResourceOperations({
  "Bucket": "mybuck",
  "Key": "lekey",
}, schema, new awssdk.S3())

//console.log(resops['PutObject'].applicator.apply({}))
resops = getResourceOperations({
  "Bucket": "mybuck",
}, schema, new awssdk.S3())
//console.log(resops['PutObject'].applicator.apply({Key: "Wew"}))

type BaseClass = string;
type ServiceClass = string;
type SchemaPath = string;

type ArgName = string;
type ArgType = string;
type Arg = [ArgName, ArgType];

function lowerCamelCase(str: string) {
  return str[0].toLowerCase() + str.substring(1);
}
function upperCamelCase(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}

class MethodFactory {
  //constructor(readonly methodName: string, readonly args: Arg[], readonly returnType: ArgType) {}
  constructor(readonly op: Op) {}
  render() {
    //${this.op.operation}(${this.args.map(([name, type]) =>`${name}: ${type}`).join(', ')}): ${this.returnType} {
    const op = this.op;
    return `
    ${lowerCamelCase(op.operation)}(partialParams: ${op.applicatorType}): ${op.returnType} {
        return this.client.${lowerCamelCase(op.operation)}(
            this.ops["${upperCamelCase(op.operation)}"].apply(partialParams)
        );
    }`
  }
}

class ClassFactory {
  constructor(readonly cls: [BaseClass, any], readonly client: [ServiceClass, any], readonly schemaFile: SchemaPath) {
    //getResourceOperations(this.baseClass, client)
  }
  render() {
    const [clientRef, client] = this.client
    const [classRef, cls] = this.cls

    const serviceId = (client as any).api.serviceId
    const className = `Native${serviceId}`
    
    const ops = getResourceOperations(cls, require(this.schemaFile), client)
    const methods = Object.entries(ops).map(([opName, op]) => {
      return new MethodFactory(op);
    })

    const typeList = methods
      .map((method) => method.op.inputShape)
      .concat(
        methods.map((method) => method.op.returnType))
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
import {
    ${typeImports.join(",\n    ")}
} from "aws-sdk/clients/${serviceId.toLowerCase()}";

import {getResourceOperations} from "./parse";

export class ${className} extends ${classRef} {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof ${classRef}>) {
        super(...args)
        this.client = new ${clientRef}()
        this.ops = getResourceOperations(this as any, require("${this.schemaFile}"), this.client)
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

const pulumiSchema = require('./aws-schema.json')
function schemaToResourceKeys(resourceName: string): any {
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

console.log(new ClassFactory(['aws.s3.Bucket', schemaToResourceKeys('aws:s3/bucket:Bucket')], ['awssdk.S3', new awssdk.S3()], '/home/kdixler/Documents/unify/aws-sdk-js/apis/s3-2006-03-01.normal.json').render())