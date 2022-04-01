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
const schema = require("../apis/ecr-2015-09-21.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ecr.RegistryScanningConfiguration {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ECR();
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
    invokeBatchCheckLayerAvailability(partialParams) {
        this.boot();
        return this.client.batchCheckLayerAvailability(this.ops["BatchCheckLayerAvailability"].apply(partialParams));
    }
    invokeBatchDeleteImage(partialParams) {
        this.boot();
        return this.client.batchDeleteImage(this.ops["BatchDeleteImage"].apply(partialParams));
    }
    invokeBatchGetImage(partialParams) {
        this.boot();
        return this.client.batchGetImage(this.ops["BatchGetImage"].apply(partialParams));
    }
    invokeBatchGetRepositoryScanningConfiguration(partialParams) {
        this.boot();
        return this.client.batchGetRepositoryScanningConfiguration(this.ops["BatchGetRepositoryScanningConfiguration"].apply(partialParams));
    }
    invokeCompleteLayerUpload(partialParams) {
        this.boot();
        return this.client.completeLayerUpload(this.ops["CompleteLayerUpload"].apply(partialParams));
    }
    invokeCreatePullThroughCacheRule(partialParams) {
        this.boot();
        return this.client.createPullThroughCacheRule(this.ops["CreatePullThroughCacheRule"].apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        this.boot();
        return this.client.createRepository(this.ops["CreateRepository"].apply(partialParams));
    }
    invokeDeleteLifecyclePolicy(partialParams) {
        this.boot();
        return this.client.deleteLifecyclePolicy(this.ops["DeleteLifecyclePolicy"].apply(partialParams));
    }
    invokeDeletePullThroughCacheRule(partialParams) {
        this.boot();
        return this.client.deletePullThroughCacheRule(this.ops["DeletePullThroughCacheRule"].apply(partialParams));
    }
    invokeDeleteRegistryPolicy(partialParams) {
        this.boot();
        return this.client.deleteRegistryPolicy(this.ops["DeleteRegistryPolicy"].apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        this.boot();
        return this.client.deleteRepository(this.ops["DeleteRepository"].apply(partialParams));
    }
    invokeDeleteRepositoryPolicy(partialParams) {
        this.boot();
        return this.client.deleteRepositoryPolicy(this.ops["DeleteRepositoryPolicy"].apply(partialParams));
    }
    invokeDescribeImageReplicationStatus(partialParams) {
        this.boot();
        return this.client.describeImageReplicationStatus(this.ops["DescribeImageReplicationStatus"].apply(partialParams));
    }
    invokeDescribeImageScanFindings(partialParams) {
        this.boot();
        return this.client.describeImageScanFindings(this.ops["DescribeImageScanFindings"].apply(partialParams));
    }
    invokeDescribeImages(partialParams) {
        this.boot();
        return this.client.describeImages(this.ops["DescribeImages"].apply(partialParams));
    }
    invokeDescribePullThroughCacheRules(partialParams) {
        this.boot();
        return this.client.describePullThroughCacheRules(this.ops["DescribePullThroughCacheRules"].apply(partialParams));
    }
    invokeDescribeRegistry(partialParams) {
        this.boot();
        return this.client.describeRegistry(this.ops["DescribeRegistry"].apply(partialParams));
    }
    invokeDescribeRepositories(partialParams) {
        this.boot();
        return this.client.describeRepositories(this.ops["DescribeRepositories"].apply(partialParams));
    }
    invokeGetAuthorizationToken(partialParams) {
        this.boot();
        return this.client.getAuthorizationToken(this.ops["GetAuthorizationToken"].apply(partialParams));
    }
    invokeGetDownloadUrlForLayer(partialParams) {
        this.boot();
        return this.client.getDownloadUrlForLayer(this.ops["GetDownloadUrlForLayer"].apply(partialParams));
    }
    invokeGetLifecyclePolicy(partialParams) {
        this.boot();
        return this.client.getLifecyclePolicy(this.ops["GetLifecyclePolicy"].apply(partialParams));
    }
    invokeGetLifecyclePolicyPreview(partialParams) {
        this.boot();
        return this.client.getLifecyclePolicyPreview(this.ops["GetLifecyclePolicyPreview"].apply(partialParams));
    }
    invokeGetRegistryPolicy(partialParams) {
        this.boot();
        return this.client.getRegistryPolicy(this.ops["GetRegistryPolicy"].apply(partialParams));
    }
    invokeGetRegistryScanningConfiguration(partialParams) {
        this.boot();
        return this.client.getRegistryScanningConfiguration(this.ops["GetRegistryScanningConfiguration"].apply(partialParams));
    }
    invokeGetRepositoryPolicy(partialParams) {
        this.boot();
        return this.client.getRepositoryPolicy(this.ops["GetRepositoryPolicy"].apply(partialParams));
    }
    invokeInitiateLayerUpload(partialParams) {
        this.boot();
        return this.client.initiateLayerUpload(this.ops["InitiateLayerUpload"].apply(partialParams));
    }
    invokeListImages(partialParams) {
        this.boot();
        return this.client.listImages(this.ops["ListImages"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutImage(partialParams) {
        this.boot();
        return this.client.putImage(this.ops["PutImage"].apply(partialParams));
    }
    invokePutImageScanningConfiguration(partialParams) {
        this.boot();
        return this.client.putImageScanningConfiguration(this.ops["PutImageScanningConfiguration"].apply(partialParams));
    }
    invokePutImageTagMutability(partialParams) {
        this.boot();
        return this.client.putImageTagMutability(this.ops["PutImageTagMutability"].apply(partialParams));
    }
    invokePutLifecyclePolicy(partialParams) {
        this.boot();
        return this.client.putLifecyclePolicy(this.ops["PutLifecyclePolicy"].apply(partialParams));
    }
    invokePutRegistryPolicy(partialParams) {
        this.boot();
        return this.client.putRegistryPolicy(this.ops["PutRegistryPolicy"].apply(partialParams));
    }
    invokePutRegistryScanningConfiguration(partialParams) {
        this.boot();
        return this.client.putRegistryScanningConfiguration(this.ops["PutRegistryScanningConfiguration"].apply(partialParams));
    }
    invokePutReplicationConfiguration(partialParams) {
        this.boot();
        return this.client.putReplicationConfiguration(this.ops["PutReplicationConfiguration"].apply(partialParams));
    }
    invokeSetRepositoryPolicy(partialParams) {
        this.boot();
        return this.client.setRepositoryPolicy(this.ops["SetRepositoryPolicy"].apply(partialParams));
    }
    invokeStartImageScan(partialParams) {
        this.boot();
        return this.client.startImageScan(this.ops["StartImageScan"].apply(partialParams));
    }
    invokeStartLifecyclePolicyPreview(partialParams) {
        this.boot();
        return this.client.startLifecyclePolicyPreview(this.ops["StartLifecyclePolicyPreview"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUploadLayerPart(partialParams) {
        this.boot();
        return this.client.uploadLayerPart(this.ops["UploadLayerPart"].apply(partialParams));
    }
}
exports.default = default_1;
