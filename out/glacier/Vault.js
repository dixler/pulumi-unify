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
const schema = require("../apis/glacier-2012-06-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.glacier.Vault {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Glacier();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAbortMultipartUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortMultipartUpload(this.ops["AbortMultipartUpload"].applicator.apply(partialParams));
    }
    invokeAbortVaultLock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortVaultLock(this.ops["AbortVaultLock"].applicator.apply(partialParams));
    }
    invokeAddTagsToVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToVault(this.ops["AddTagsToVault"].applicator.apply(partialParams));
    }
    invokeCompleteMultipartUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMultipartUpload(this.ops["CompleteMultipartUpload"].applicator.apply(partialParams));
    }
    invokeCompleteVaultLock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeVaultLock(this.ops["CompleteVaultLock"].applicator.apply(partialParams));
    }
    invokeCreateVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVault(this.ops["CreateVault"].applicator.apply(partialParams));
    }
    invokeDeleteArchive(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteArchive(this.ops["DeleteArchive"].applicator.apply(partialParams));
    }
    invokeDeleteVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVault(this.ops["DeleteVault"].applicator.apply(partialParams));
    }
    invokeDeleteVaultAccessPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVaultAccessPolicy(this.ops["DeleteVaultAccessPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteVaultNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVaultNotifications(this.ops["DeleteVaultNotifications"].applicator.apply(partialParams));
    }
    invokeDescribeJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJob(this.ops["DescribeJob"].applicator.apply(partialParams));
    }
    invokeDescribeVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVault(this.ops["DescribeVault"].applicator.apply(partialParams));
    }
    invokeGetDataRetrievalPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDataRetrievalPolicy(this.ops["GetDataRetrievalPolicy"].applicator.apply(partialParams));
    }
    invokeGetJobOutput(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobOutput(this.ops["GetJobOutput"].applicator.apply(partialParams));
    }
    invokeGetVaultAccessPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVaultAccessPolicy(this.ops["GetVaultAccessPolicy"].applicator.apply(partialParams));
    }
    invokeGetVaultLock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVaultLock(this.ops["GetVaultLock"].applicator.apply(partialParams));
    }
    invokeGetVaultNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVaultNotifications(this.ops["GetVaultNotifications"].applicator.apply(partialParams));
    }
    invokeInitiateJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateJob(this.ops["InitiateJob"].applicator.apply(partialParams));
    }
    invokeInitiateMultipartUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateMultipartUpload(this.ops["InitiateMultipartUpload"].applicator.apply(partialParams));
    }
    invokeInitiateVaultLock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateVaultLock(this.ops["InitiateVaultLock"].applicator.apply(partialParams));
    }
    invokeListJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].applicator.apply(partialParams));
    }
    invokeListMultipartUploads(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMultipartUploads(this.ops["ListMultipartUploads"].applicator.apply(partialParams));
    }
    invokeListParts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParts(this.ops["ListParts"].applicator.apply(partialParams));
    }
    invokeListProvisionedCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisionedCapacity(this.ops["ListProvisionedCapacity"].applicator.apply(partialParams));
    }
    invokeListTagsForVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForVault(this.ops["ListTagsForVault"].applicator.apply(partialParams));
    }
    invokeListVaults(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVaults(this.ops["ListVaults"].applicator.apply(partialParams));
    }
    invokePurchaseProvisionedCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseProvisionedCapacity(this.ops["PurchaseProvisionedCapacity"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromVault(this.ops["RemoveTagsFromVault"].applicator.apply(partialParams));
    }
    invokeSetDataRetrievalPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDataRetrievalPolicy(this.ops["SetDataRetrievalPolicy"].applicator.apply(partialParams));
    }
    invokeSetVaultAccessPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setVaultAccessPolicy(this.ops["SetVaultAccessPolicy"].applicator.apply(partialParams));
    }
    invokeSetVaultNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setVaultNotifications(this.ops["SetVaultNotifications"].applicator.apply(partialParams));
    }
    invokeUploadArchive(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadArchive(this.ops["UploadArchive"].applicator.apply(partialParams));
    }
    invokeUploadMultipartPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadMultipartPart(this.ops["UploadMultipartPart"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
