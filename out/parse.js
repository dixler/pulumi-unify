"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperCamelCase = exports.lowerCamelCase = exports.getResourceOperations = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
function getResourceOperations(resource, schema) {
    const resourceOps = {};
    for (const op of getInputOps(schema)) {
        const shape = op.shape;
        resourceOps[op.name] = {
            op: op,
            apply: (a) => a,
        };
        if (shape.type !== "structure") {
            continue;
        }
        if (!shape.required) {
            continue;
        }
        const liftedValues = {};
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
                return Object.assign(Object.assign({}, partial), liftedValues);
            },
            omittedFields: Object.keys(liftedValues),
        };
    }
    return resourceOps;
}
exports.getResourceOperations = getResourceOperations;
function getInputOps(schema) {
    return Object.values(schema.operations)
        .filter((op) => {
        if (op.input === undefined)
            return false;
        if (op.output === undefined)
            return false; // TODO test this
        const shape = schema.shapes[op.input.shape];
        if (shape.type !== "structure")
            return false;
        return true;
    })
        .map((op) => {
        return {
            name: op.name,
            inputShapeName: op.input.shape,
            outputShapeName: op.output.shape,
            shape: schema.shapes[op.input.shape],
        };
    });
}
function lowerCamelCase(str) {
    return str[0].toLowerCase() + str.substring(1);
}
exports.lowerCamelCase = lowerCamelCase;
function upperCamelCase(str) {
    return str[0].toUpperCase() + str.substring(1);
}
exports.upperCamelCase = upperCamelCase;
class MethodFactory {
    //constructor(readonly methodName: string, readonly args: Arg[], readonly returnType: ArgType) {}
    constructor(op) {
        this.op = op;
    }
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
    }`;
    }
}
class ClassFactory {
    constructor(cls, client, schemaFile) {
        this.cls = cls;
        this.client = client;
        this.schemaFile = schemaFile;
        //getResourceOperations(this.baseClass, client)
    }
    render() {
        const [clientRef, client, serviceId] = this.client;
        const [classRef, cls, resource] = this.cls;
        const params = {};
        Object.entries(cls).forEach(([key, value]) => {
            params[upperCamelCase(key)] = value;
            if (cls[upperCamelCase(resource) + upperCamelCase(key)] === undefined
                && params[upperCamelCase(resource) + upperCamelCase(key)] === undefined) {
                params[upperCamelCase(resource) + upperCamelCase(key)] = value;
            }
        });
        const ops = getResourceOperations(params, require(this.schemaFile));
        const methods = Object.entries(ops)
            .filter(([opName, op]) => op.omittedFields !== undefined && op.omittedFields.length > 0)
            .map(([opName, op]) => {
            return new MethodFactory(op);
        });
        const typeList = methods
            .map((method) => method.op.op.inputShapeName)
            .concat(methods.map((method) => method.op.op.outputShapeName))
            .filter((type) => {
            const filterList = [
                "void",
            ];
            return !filterList.includes(type);
        });
        const typeSet = {};
        typeList.forEach((type) => {
            typeSet[type] = true;
        });
        const typeImports = Object.keys(typeSet);
        return `
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ${typeImports.join(",\n    ")}
} from "aws-sdk/clients/${serviceId.toLowerCase()}";
const schema = require("${path_1.default.join("../apis", path_1.default.basename(this.schemaFile))}")
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
}`;
    }
}
function schemaToResourceKeys(resourceName) {
    const pulumiSchema = require('./aws-schema.json');
    const resourceSchema = pulumiSchema['resources'][resourceName].properties;
    const resource = {};
    Object.entries(resourceSchema).forEach(([key, val]) => {
        if (val.type !== "string") {
            return;
        }
        const basicField = val;
        resource[key] = basicField.type;
    });
    return resource;
}
function findAWSSchema(service) {
    const prefix = "./aws-sdk-js/apis/";
    const files = fs.readdirSync(prefix);
    const choices = files
        .filter((filename) => {
        const [prefix, suffix] = filename.split('-20', 2); // TODO fix parser
        if (prefix.toLowerCase() != service.toLowerCase()) {
            return false;
        }
        if (!suffix.endsWith(".normal.json")) {
            return false;
        }
        return true;
    })
        .sort();
    if (choices.length === 0) {
        return undefined;
    }
    return "./" + path_1.default.join(prefix, choices[choices.length - 1]);
}
function main() {
    const pulumiSchema = require('./aws-schema.json');
    const awsSDK = require('aws-sdk');
    const aws = require("@pulumi/aws");
    fs.rmSync("./out", {
        recursive: true,
        force: true,
    });
    fs.mkdirSync('./out');
    fs.copyFileSync('parse.ts', './out/parse.ts');
    for (const key of Object.keys(pulumiSchema['resources'])) {
        const [cloud, path, resource] = key.split(':');
        const [service, _] = path.split('/', 2);
        const awsServiceNames = Object.keys(awsSDK)
            .filter(key => key.toLowerCase() == service.toLowerCase())
            .sort();
        let awsServiceName = "";
        try {
            fs.mkdirSync(`out/${service}`);
        }
        catch (e) { }
        try {
            awsServiceName = awsServiceNames[awsServiceNames.length - 1];
            const schema = findAWSSchema(service);
            if (schema === undefined) {
                console.error(`no schema found processing [key=${key}]`);
                continue;
            }
            if (!aws[service] || !aws[service][resource]) {
                console.error(`no resource found processing [key=${key}]`);
                continue;
            }
            fs.writeFileSync(`out/${service}/${resource}.ts`, (new ClassFactory([`${cloud}.${service}.${resource}`, schemaToResourceKeys(key), resource], [`awssdk.${awsServiceName}`, new awsSDK[awsServiceName](), awsServiceName], schema).render()));
        }
        catch (e) {
            console.error(`error processing [key=${key}] ${e}`);
            console.log(e.stack);
        }
    }
}
if (require.main === module) {
    main();
}
