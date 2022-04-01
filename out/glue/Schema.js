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
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const schema = require("../apis/glue-2017-03-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.glue.Schema {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Glue();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeCheckSchemaVersionValidity(partialParams) {
        this.boot();
        return this.client.checkSchemaVersionValidity(this.ops["CheckSchemaVersionValidity"].apply(partialParams));
    }
    invokeCreateRegistry(partialParams) {
        this.boot();
        return this.client.createRegistry(this.ops["CreateRegistry"].apply(partialParams));
    }
    invokeCreateSchema(partialParams) {
        this.boot();
        return this.client.createSchema(this.ops["CreateSchema"].apply(partialParams));
    }
    invokeGetSchemaByDefinition(partialParams) {
        this.boot();
        return this.client.getSchemaByDefinition(this.ops["GetSchemaByDefinition"].apply(partialParams));
    }
    invokeRegisterSchemaVersion(partialParams) {
        this.boot();
        return this.client.registerSchemaVersion(this.ops["RegisterSchemaVersion"].apply(partialParams));
    }
    invokeUpdateRegistry(partialParams) {
        this.boot();
        return this.client.updateRegistry(this.ops["UpdateRegistry"].apply(partialParams));
    }
}
exports.default = default_1;
