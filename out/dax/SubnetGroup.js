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
class default_1 extends aws.dax.SubnetGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DAX();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/dax-2017-04-19.normal.json"), this.client);
    }
    invokeCreateCluster(partialParams) {
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateParameterGroup(partialParams) {
        return this.client.createParameterGroup(this.ops["CreateParameterGroup"].apply(partialParams));
    }
    invokeCreateSubnetGroup(partialParams) {
        return this.client.createSubnetGroup(this.ops["CreateSubnetGroup"].apply(partialParams));
    }
    invokeDecreaseReplicationFactor(partialParams) {
        return this.client.decreaseReplicationFactor(this.ops["DecreaseReplicationFactor"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteParameterGroup(partialParams) {
        return this.client.deleteParameterGroup(this.ops["DeleteParameterGroup"].apply(partialParams));
    }
    invokeDeleteSubnetGroup(partialParams) {
        return this.client.deleteSubnetGroup(this.ops["DeleteSubnetGroup"].apply(partialParams));
    }
    invokeDescribeParameters(partialParams) {
        return this.client.describeParameters(this.ops["DescribeParameters"].apply(partialParams));
    }
    invokeIncreaseReplicationFactor(partialParams) {
        return this.client.increaseReplicationFactor(this.ops["IncreaseReplicationFactor"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeRebootNode(partialParams) {
        return this.client.rebootNode(this.ops["RebootNode"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateCluster(partialParams) {
        return this.client.updateCluster(this.ops["UpdateCluster"].apply(partialParams));
    }
    invokeUpdateParameterGroup(partialParams) {
        return this.client.updateParameterGroup(this.ops["UpdateParameterGroup"].apply(partialParams));
    }
    invokeUpdateSubnetGroup(partialParams) {
        return this.client.updateSubnetGroup(this.ops["UpdateSubnetGroup"].apply(partialParams));
    }
}
exports.default = default_1;
