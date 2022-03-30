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
class default_1 extends aws.memorydb.Cluster {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.MemoryDB();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/memorydb-2021-01-01.normal.json"), this.client);
    }
    invokeBatchUpdateCluster(partialParams) {
        return this.client.batchUpdateCluster(this.ops["BatchUpdateCluster"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateACL(partialParams) {
        return this.client.createACL(this.ops["CreateACL"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateParameterGroup(partialParams) {
        return this.client.createParameterGroup(this.ops["CreateParameterGroup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateSubnetGroup(partialParams) {
        return this.client.createSubnetGroup(this.ops["CreateSubnetGroup"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeDeleteACL(partialParams) {
        return this.client.deleteACL(this.ops["DeleteACL"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteParameterGroup(partialParams) {
        return this.client.deleteParameterGroup(this.ops["DeleteParameterGroup"].apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].apply(partialParams));
    }
    invokeDeleteSubnetGroup(partialParams) {
        return this.client.deleteSubnetGroup(this.ops["DeleteSubnetGroup"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDescribeParameters(partialParams) {
        return this.client.describeParameters(this.ops["DescribeParameters"].apply(partialParams));
    }
    invokeFailoverShard(partialParams) {
        return this.client.failoverShard(this.ops["FailoverShard"].apply(partialParams));
    }
    invokeListAllowedNodeTypeUpdates(partialParams) {
        return this.client.listAllowedNodeTypeUpdates(this.ops["ListAllowedNodeTypeUpdates"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeResetParameterGroup(partialParams) {
        return this.client.resetParameterGroup(this.ops["ResetParameterGroup"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateACL(partialParams) {
        return this.client.updateACL(this.ops["UpdateACL"].apply(partialParams));
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
    invokeUpdateUser(partialParams) {
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
