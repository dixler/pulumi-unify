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
class default_1 extends aws.ecr.Repository {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ECR();
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
    invokeBatchCheckLayerAvailability(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCheckLayerAvailability(this.ops["BatchCheckLayerAvailability"].applicator.apply(partialParams));
    }
    invokeBatchDeleteImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteImage(this.ops["BatchDeleteImage"].applicator.apply(partialParams));
    }
    invokeBatchGetImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetImage(this.ops["BatchGetImage"].applicator.apply(partialParams));
    }
    invokeBatchGetRepositoryScanningConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetRepositoryScanningConfiguration(this.ops["BatchGetRepositoryScanningConfiguration"].applicator.apply(partialParams));
    }
    invokeCompleteLayerUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeLayerUpload(this.ops["CompleteLayerUpload"].applicator.apply(partialParams));
    }
    invokeCreatePullThroughCacheRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPullThroughCacheRule(this.ops["CreatePullThroughCacheRule"].applicator.apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRepository(this.ops["CreateRepository"].applicator.apply(partialParams));
    }
    invokeDeleteLifecyclePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecyclePolicy(this.ops["DeleteLifecyclePolicy"].applicator.apply(partialParams));
    }
    invokeDeletePullThroughCacheRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePullThroughCacheRule(this.ops["DeletePullThroughCacheRule"].applicator.apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepository(this.ops["DeleteRepository"].applicator.apply(partialParams));
    }
    invokeDeleteRepositoryPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepositoryPolicy(this.ops["DeleteRepositoryPolicy"].applicator.apply(partialParams));
    }
    invokeDescribeImageReplicationStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageReplicationStatus(this.ops["DescribeImageReplicationStatus"].applicator.apply(partialParams));
    }
    invokeDescribeImageScanFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageScanFindings(this.ops["DescribeImageScanFindings"].applicator.apply(partialParams));
    }
    invokeDescribeImages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImages(this.ops["DescribeImages"].applicator.apply(partialParams));
    }
    invokeGetDownloadUrlForLayer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDownloadUrlForLayer(this.ops["GetDownloadUrlForLayer"].applicator.apply(partialParams));
    }
    invokeGetLifecyclePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicy(this.ops["GetLifecyclePolicy"].applicator.apply(partialParams));
    }
    invokeGetLifecyclePolicyPreview(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicyPreview(this.ops["GetLifecyclePolicyPreview"].applicator.apply(partialParams));
    }
    invokeGetRepositoryPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepositoryPolicy(this.ops["GetRepositoryPolicy"].applicator.apply(partialParams));
    }
    invokeInitiateLayerUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateLayerUpload(this.ops["InitiateLayerUpload"].applicator.apply(partialParams));
    }
    invokeListImages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImages(this.ops["ListImages"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePutImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImage(this.ops["PutImage"].applicator.apply(partialParams));
    }
    invokePutImageScanningConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImageScanningConfiguration(this.ops["PutImageScanningConfiguration"].applicator.apply(partialParams));
    }
    invokePutImageTagMutability(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImageTagMutability(this.ops["PutImageTagMutability"].applicator.apply(partialParams));
    }
    invokePutLifecyclePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLifecyclePolicy(this.ops["PutLifecyclePolicy"].applicator.apply(partialParams));
    }
    invokePutRegistryPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRegistryPolicy(this.ops["PutRegistryPolicy"].applicator.apply(partialParams));
    }
    invokePutReplicationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putReplicationConfiguration(this.ops["PutReplicationConfiguration"].applicator.apply(partialParams));
    }
    invokeSetRepositoryPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setRepositoryPolicy(this.ops["SetRepositoryPolicy"].applicator.apply(partialParams));
    }
    invokeStartImageScan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImageScan(this.ops["StartImageScan"].applicator.apply(partialParams));
    }
    invokeStartLifecyclePolicyPreview(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startLifecyclePolicyPreview(this.ops["StartLifecyclePolicyPreview"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUploadLayerPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadLayerPart(this.ops["UploadLayerPart"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
