"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const parse_1 = require("../parse");
class default_1 extends aws.schemas.Registry {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Schemas();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/schemas-2019-12-02.normal.json"), this.client);
    }
    invokeCreateDiscoverer(partialParams) {
        return this.client.createDiscoverer(this.ops["CreateDiscoverer"].apply(partialParams));
    }
    invokeCreateRegistry(partialParams) {
        return this.client.createRegistry(this.ops["CreateRegistry"].apply(partialParams));
    }
    invokeCreateSchema(partialParams) {
        return this.client.createSchema(this.ops["CreateSchema"].apply(partialParams));
    }
    invokeDeleteDiscoverer(partialParams) {
        return this.client.deleteDiscoverer(this.ops["DeleteDiscoverer"].apply(partialParams));
    }
    invokeDeleteRegistry(partialParams) {
        return this.client.deleteRegistry(this.ops["DeleteRegistry"].apply(partialParams));
    }
    invokeDeleteSchema(partialParams) {
        return this.client.deleteSchema(this.ops["DeleteSchema"].apply(partialParams));
    }
    invokeDeleteSchemaVersion(partialParams) {
        return this.client.deleteSchemaVersion(this.ops["DeleteSchemaVersion"].apply(partialParams));
    }
    invokeDescribeCodeBinding(partialParams) {
        return this.client.describeCodeBinding(this.ops["DescribeCodeBinding"].apply(partialParams));
    }
    invokeDescribeDiscoverer(partialParams) {
        return this.client.describeDiscoverer(this.ops["DescribeDiscoverer"].apply(partialParams));
    }
    invokeDescribeRegistry(partialParams) {
        return this.client.describeRegistry(this.ops["DescribeRegistry"].apply(partialParams));
    }
    invokeDescribeSchema(partialParams) {
        return this.client.describeSchema(this.ops["DescribeSchema"].apply(partialParams));
    }
    invokeExportSchema(partialParams) {
        return this.client.exportSchema(this.ops["ExportSchema"].apply(partialParams));
    }
    invokeGetCodeBindingSource(partialParams) {
        return this.client.getCodeBindingSource(this.ops["GetCodeBindingSource"].apply(partialParams));
    }
    invokeGetDiscoveredSchema(partialParams) {
        return this.client.getDiscoveredSchema(this.ops["GetDiscoveredSchema"].apply(partialParams));
    }
    invokeListSchemaVersions(partialParams) {
        return this.client.listSchemaVersions(this.ops["ListSchemaVersions"].apply(partialParams));
    }
    invokeListSchemas(partialParams) {
        return this.client.listSchemas(this.ops["ListSchemas"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutCodeBinding(partialParams) {
        return this.client.putCodeBinding(this.ops["PutCodeBinding"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokeSearchSchemas(partialParams) {
        return this.client.searchSchemas(this.ops["SearchSchemas"].apply(partialParams));
    }
    invokeStartDiscoverer(partialParams) {
        return this.client.startDiscoverer(this.ops["StartDiscoverer"].apply(partialParams));
    }
    invokeStopDiscoverer(partialParams) {
        return this.client.stopDiscoverer(this.ops["StopDiscoverer"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDiscoverer(partialParams) {
        return this.client.updateDiscoverer(this.ops["UpdateDiscoverer"].apply(partialParams));
    }
    invokeUpdateRegistry(partialParams) {
        return this.client.updateRegistry(this.ops["UpdateRegistry"].apply(partialParams));
    }
    invokeUpdateSchema(partialParams) {
        return this.client.updateSchema(this.ops["UpdateSchema"].apply(partialParams));
    }
}
exports.default = default_1;
