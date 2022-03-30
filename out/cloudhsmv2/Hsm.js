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
class default_1 extends aws.cloudhsmv2.Hsm {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudHSMV2();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloudhsmv2-2017-04-28.normal.json"), this.client);
    }
    invokeCopyBackupToRegion(partialParams) {
        return this.client.copyBackupToRegion(this.ops["CopyBackupToRegion"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateHsm(partialParams) {
        return this.client.createHsm(this.ops["CreateHsm"].apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        return this.client.deleteBackup(this.ops["DeleteBackup"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteHsm(partialParams) {
        return this.client.deleteHsm(this.ops["DeleteHsm"].apply(partialParams));
    }
    invokeInitializeCluster(partialParams) {
        return this.client.initializeCluster(this.ops["InitializeCluster"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeModifyBackupAttributes(partialParams) {
        return this.client.modifyBackupAttributes(this.ops["ModifyBackupAttributes"].apply(partialParams));
    }
    invokeModifyCluster(partialParams) {
        return this.client.modifyCluster(this.ops["ModifyCluster"].apply(partialParams));
    }
    invokeRestoreBackup(partialParams) {
        return this.client.restoreBackup(this.ops["RestoreBackup"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
