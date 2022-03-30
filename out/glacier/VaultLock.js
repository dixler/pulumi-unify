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
class default_1 extends aws.glacier.VaultLock {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Glacier();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/glacier-2012-06-01.normal.json"), this.client);
    }
    invokeAbortMultipartUpload(partialParams) {
        return this.client.abortMultipartUpload(this.ops["AbortMultipartUpload"].apply(partialParams));
    }
    invokeAbortVaultLock(partialParams) {
        return this.client.abortVaultLock(this.ops["AbortVaultLock"].apply(partialParams));
    }
    invokeAddTagsToVault(partialParams) {
        return this.client.addTagsToVault(this.ops["AddTagsToVault"].apply(partialParams));
    }
    invokeCompleteMultipartUpload(partialParams) {
        return this.client.completeMultipartUpload(this.ops["CompleteMultipartUpload"].apply(partialParams));
    }
    invokeCompleteVaultLock(partialParams) {
        return this.client.completeVaultLock(this.ops["CompleteVaultLock"].apply(partialParams));
    }
    invokeCreateVault(partialParams) {
        return this.client.createVault(this.ops["CreateVault"].apply(partialParams));
    }
    invokeDeleteArchive(partialParams) {
        return this.client.deleteArchive(this.ops["DeleteArchive"].apply(partialParams));
    }
    invokeDeleteVault(partialParams) {
        return this.client.deleteVault(this.ops["DeleteVault"].apply(partialParams));
    }
    invokeDeleteVaultAccessPolicy(partialParams) {
        return this.client.deleteVaultAccessPolicy(this.ops["DeleteVaultAccessPolicy"].apply(partialParams));
    }
    invokeDeleteVaultNotifications(partialParams) {
        return this.client.deleteVaultNotifications(this.ops["DeleteVaultNotifications"].apply(partialParams));
    }
    invokeDescribeJob(partialParams) {
        return this.client.describeJob(this.ops["DescribeJob"].apply(partialParams));
    }
    invokeDescribeVault(partialParams) {
        return this.client.describeVault(this.ops["DescribeVault"].apply(partialParams));
    }
    invokeGetDataRetrievalPolicy(partialParams) {
        return this.client.getDataRetrievalPolicy(this.ops["GetDataRetrievalPolicy"].apply(partialParams));
    }
    invokeGetJobOutput(partialParams) {
        return this.client.getJobOutput(this.ops["GetJobOutput"].apply(partialParams));
    }
    invokeGetVaultAccessPolicy(partialParams) {
        return this.client.getVaultAccessPolicy(this.ops["GetVaultAccessPolicy"].apply(partialParams));
    }
    invokeGetVaultLock(partialParams) {
        return this.client.getVaultLock(this.ops["GetVaultLock"].apply(partialParams));
    }
    invokeGetVaultNotifications(partialParams) {
        return this.client.getVaultNotifications(this.ops["GetVaultNotifications"].apply(partialParams));
    }
    invokeInitiateJob(partialParams) {
        return this.client.initiateJob(this.ops["InitiateJob"].apply(partialParams));
    }
    invokeInitiateMultipartUpload(partialParams) {
        return this.client.initiateMultipartUpload(this.ops["InitiateMultipartUpload"].apply(partialParams));
    }
    invokeInitiateVaultLock(partialParams) {
        return this.client.initiateVaultLock(this.ops["InitiateVaultLock"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListMultipartUploads(partialParams) {
        return this.client.listMultipartUploads(this.ops["ListMultipartUploads"].apply(partialParams));
    }
    invokeListParts(partialParams) {
        return this.client.listParts(this.ops["ListParts"].apply(partialParams));
    }
    invokeListProvisionedCapacity(partialParams) {
        return this.client.listProvisionedCapacity(this.ops["ListProvisionedCapacity"].apply(partialParams));
    }
    invokeListTagsForVault(partialParams) {
        return this.client.listTagsForVault(this.ops["ListTagsForVault"].apply(partialParams));
    }
    invokeListVaults(partialParams) {
        return this.client.listVaults(this.ops["ListVaults"].apply(partialParams));
    }
    invokePurchaseProvisionedCapacity(partialParams) {
        return this.client.purchaseProvisionedCapacity(this.ops["PurchaseProvisionedCapacity"].apply(partialParams));
    }
    invokeRemoveTagsFromVault(partialParams) {
        return this.client.removeTagsFromVault(this.ops["RemoveTagsFromVault"].apply(partialParams));
    }
    invokeSetDataRetrievalPolicy(partialParams) {
        return this.client.setDataRetrievalPolicy(this.ops["SetDataRetrievalPolicy"].apply(partialParams));
    }
    invokeSetVaultAccessPolicy(partialParams) {
        return this.client.setVaultAccessPolicy(this.ops["SetVaultAccessPolicy"].apply(partialParams));
    }
    invokeSetVaultNotifications(partialParams) {
        return this.client.setVaultNotifications(this.ops["SetVaultNotifications"].apply(partialParams));
    }
    invokeUploadArchive(partialParams) {
        return this.client.uploadArchive(this.ops["UploadArchive"].apply(partialParams));
    }
    invokeUploadMultipartPart(partialParams) {
        return this.client.uploadMultipartPart(this.ops["UploadMultipartPart"].apply(partialParams));
    }
}
exports.default = default_1;
