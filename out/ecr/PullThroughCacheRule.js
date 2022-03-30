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
class default_1 extends aws.ecr.PullThroughCacheRule {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ECR();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/ecr-2015-09-21.normal.json"), this.client);
    }
    invokeBatchCheckLayerAvailability(partialParams) {
        return this.client.batchCheckLayerAvailability(this.ops["BatchCheckLayerAvailability"].apply(partialParams));
    }
    invokeBatchDeleteImage(partialParams) {
        return this.client.batchDeleteImage(this.ops["BatchDeleteImage"].apply(partialParams));
    }
    invokeBatchGetImage(partialParams) {
        return this.client.batchGetImage(this.ops["BatchGetImage"].apply(partialParams));
    }
    invokeBatchGetRepositoryScanningConfiguration(partialParams) {
        return this.client.batchGetRepositoryScanningConfiguration(this.ops["BatchGetRepositoryScanningConfiguration"].apply(partialParams));
    }
    invokeCompleteLayerUpload(partialParams) {
        return this.client.completeLayerUpload(this.ops["CompleteLayerUpload"].apply(partialParams));
    }
    invokeCreatePullThroughCacheRule(partialParams) {
        return this.client.createPullThroughCacheRule(this.ops["CreatePullThroughCacheRule"].apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        return this.client.createRepository(this.ops["CreateRepository"].apply(partialParams));
    }
    invokeDeleteLifecyclePolicy(partialParams) {
        return this.client.deleteLifecyclePolicy(this.ops["DeleteLifecyclePolicy"].apply(partialParams));
    }
    invokeDeletePullThroughCacheRule(partialParams) {
        return this.client.deletePullThroughCacheRule(this.ops["DeletePullThroughCacheRule"].apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        return this.client.deleteRepository(this.ops["DeleteRepository"].apply(partialParams));
    }
    invokeDeleteRepositoryPolicy(partialParams) {
        return this.client.deleteRepositoryPolicy(this.ops["DeleteRepositoryPolicy"].apply(partialParams));
    }
    invokeDescribeImageReplicationStatus(partialParams) {
        return this.client.describeImageReplicationStatus(this.ops["DescribeImageReplicationStatus"].apply(partialParams));
    }
    invokeDescribeImageScanFindings(partialParams) {
        return this.client.describeImageScanFindings(this.ops["DescribeImageScanFindings"].apply(partialParams));
    }
    invokeDescribeImages(partialParams) {
        return this.client.describeImages(this.ops["DescribeImages"].apply(partialParams));
    }
    invokeGetDownloadUrlForLayer(partialParams) {
        return this.client.getDownloadUrlForLayer(this.ops["GetDownloadUrlForLayer"].apply(partialParams));
    }
    invokeGetLifecyclePolicy(partialParams) {
        return this.client.getLifecyclePolicy(this.ops["GetLifecyclePolicy"].apply(partialParams));
    }
    invokeGetLifecyclePolicyPreview(partialParams) {
        return this.client.getLifecyclePolicyPreview(this.ops["GetLifecyclePolicyPreview"].apply(partialParams));
    }
    invokeGetRepositoryPolicy(partialParams) {
        return this.client.getRepositoryPolicy(this.ops["GetRepositoryPolicy"].apply(partialParams));
    }
    invokeInitiateLayerUpload(partialParams) {
        return this.client.initiateLayerUpload(this.ops["InitiateLayerUpload"].apply(partialParams));
    }
    invokeListImages(partialParams) {
        return this.client.listImages(this.ops["ListImages"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutImage(partialParams) {
        return this.client.putImage(this.ops["PutImage"].apply(partialParams));
    }
    invokePutImageScanningConfiguration(partialParams) {
        return this.client.putImageScanningConfiguration(this.ops["PutImageScanningConfiguration"].apply(partialParams));
    }
    invokePutImageTagMutability(partialParams) {
        return this.client.putImageTagMutability(this.ops["PutImageTagMutability"].apply(partialParams));
    }
    invokePutLifecyclePolicy(partialParams) {
        return this.client.putLifecyclePolicy(this.ops["PutLifecyclePolicy"].apply(partialParams));
    }
    invokePutRegistryPolicy(partialParams) {
        return this.client.putRegistryPolicy(this.ops["PutRegistryPolicy"].apply(partialParams));
    }
    invokePutReplicationConfiguration(partialParams) {
        return this.client.putReplicationConfiguration(this.ops["PutReplicationConfiguration"].apply(partialParams));
    }
    invokeSetRepositoryPolicy(partialParams) {
        return this.client.setRepositoryPolicy(this.ops["SetRepositoryPolicy"].apply(partialParams));
    }
    invokeStartImageScan(partialParams) {
        return this.client.startImageScan(this.ops["StartImageScan"].apply(partialParams));
    }
    invokeStartLifecyclePolicyPreview(partialParams) {
        return this.client.startLifecyclePolicyPreview(this.ops["StartLifecyclePolicyPreview"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUploadLayerPart(partialParams) {
        return this.client.uploadLayerPart(this.ops["UploadLayerPart"].apply(partialParams));
    }
}
exports.default = default_1;
