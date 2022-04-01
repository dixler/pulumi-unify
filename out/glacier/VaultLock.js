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
class default_1 extends aws.glacier.VaultLock {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Glacier();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeCompleteMultipartUpload(partialParams) {
        this.boot();
        return this.client.completeMultipartUpload(this.ops["CompleteMultipartUpload"].apply(partialParams));
    }
    invokeCreateVault(partialParams) {
        this.boot();
        return this.client.createVault(this.ops["CreateVault"].apply(partialParams));
    }
    invokeDescribeJob(partialParams) {
        this.boot();
        return this.client.describeJob(this.ops["DescribeJob"].apply(partialParams));
    }
    invokeDescribeVault(partialParams) {
        this.boot();
        return this.client.describeVault(this.ops["DescribeVault"].apply(partialParams));
    }
    invokeGetDataRetrievalPolicy(partialParams) {
        this.boot();
        return this.client.getDataRetrievalPolicy(this.ops["GetDataRetrievalPolicy"].apply(partialParams));
    }
    invokeGetJobOutput(partialParams) {
        this.boot();
        return this.client.getJobOutput(this.ops["GetJobOutput"].apply(partialParams));
    }
    invokeGetVaultAccessPolicy(partialParams) {
        this.boot();
        return this.client.getVaultAccessPolicy(this.ops["GetVaultAccessPolicy"].apply(partialParams));
    }
    invokeGetVaultLock(partialParams) {
        this.boot();
        return this.client.getVaultLock(this.ops["GetVaultLock"].apply(partialParams));
    }
    invokeGetVaultNotifications(partialParams) {
        this.boot();
        return this.client.getVaultNotifications(this.ops["GetVaultNotifications"].apply(partialParams));
    }
    invokeInitiateJob(partialParams) {
        this.boot();
        return this.client.initiateJob(this.ops["InitiateJob"].apply(partialParams));
    }
    invokeInitiateMultipartUpload(partialParams) {
        this.boot();
        return this.client.initiateMultipartUpload(this.ops["InitiateMultipartUpload"].apply(partialParams));
    }
    invokeInitiateVaultLock(partialParams) {
        this.boot();
        return this.client.initiateVaultLock(this.ops["InitiateVaultLock"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListMultipartUploads(partialParams) {
        this.boot();
        return this.client.listMultipartUploads(this.ops["ListMultipartUploads"].apply(partialParams));
    }
    invokeListParts(partialParams) {
        this.boot();
        return this.client.listParts(this.ops["ListParts"].apply(partialParams));
    }
    invokeListProvisionedCapacity(partialParams) {
        this.boot();
        return this.client.listProvisionedCapacity(this.ops["ListProvisionedCapacity"].apply(partialParams));
    }
    invokeListTagsForVault(partialParams) {
        this.boot();
        return this.client.listTagsForVault(this.ops["ListTagsForVault"].apply(partialParams));
    }
    invokeListVaults(partialParams) {
        this.boot();
        return this.client.listVaults(this.ops["ListVaults"].apply(partialParams));
    }
    invokePurchaseProvisionedCapacity(partialParams) {
        this.boot();
        return this.client.purchaseProvisionedCapacity(this.ops["PurchaseProvisionedCapacity"].apply(partialParams));
    }
    invokeUploadArchive(partialParams) {
        this.boot();
        return this.client.uploadArchive(this.ops["UploadArchive"].apply(partialParams));
    }
    invokeUploadMultipartPart(partialParams) {
        this.boot();
        return this.client.uploadMultipartPart(this.ops["UploadMultipartPart"].apply(partialParams));
    }
}
exports.default = default_1;
