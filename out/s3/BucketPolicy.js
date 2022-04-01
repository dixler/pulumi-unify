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
const schema = require("../apis/s3-2006-03-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.s3.BucketPolicy {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.S3();
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
    invokeAbortMultipartUpload(partialParams) {
        this.boot();
        return this.client.abortMultipartUpload(this.ops["AbortMultipartUpload"].apply(partialParams));
    }
    invokeCompleteMultipartUpload(partialParams) {
        this.boot();
        return this.client.completeMultipartUpload(this.ops["CompleteMultipartUpload"].apply(partialParams));
    }
    invokeCopyObject(partialParams) {
        this.boot();
        return this.client.copyObject(this.ops["CopyObject"].apply(partialParams));
    }
    invokeCreateBucket(partialParams) {
        this.boot();
        return this.client.createBucket(this.ops["CreateBucket"].apply(partialParams));
    }
    invokeCreateMultipartUpload(partialParams) {
        this.boot();
        return this.client.createMultipartUpload(this.ops["CreateMultipartUpload"].apply(partialParams));
    }
    invokeDeleteObject(partialParams) {
        this.boot();
        return this.client.deleteObject(this.ops["DeleteObject"].apply(partialParams));
    }
    invokeDeleteObjectTagging(partialParams) {
        this.boot();
        return this.client.deleteObjectTagging(this.ops["DeleteObjectTagging"].apply(partialParams));
    }
    invokeDeleteObjects(partialParams) {
        this.boot();
        return this.client.deleteObjects(this.ops["DeleteObjects"].apply(partialParams));
    }
    invokeGetBucketAccelerateConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketAccelerateConfiguration(this.ops["GetBucketAccelerateConfiguration"].apply(partialParams));
    }
    invokeGetBucketAcl(partialParams) {
        this.boot();
        return this.client.getBucketAcl(this.ops["GetBucketAcl"].apply(partialParams));
    }
    invokeGetBucketAnalyticsConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketAnalyticsConfiguration(this.ops["GetBucketAnalyticsConfiguration"].apply(partialParams));
    }
    invokeGetBucketCors(partialParams) {
        this.boot();
        return this.client.getBucketCors(this.ops["GetBucketCors"].apply(partialParams));
    }
    invokeGetBucketEncryption(partialParams) {
        this.boot();
        return this.client.getBucketEncryption(this.ops["GetBucketEncryption"].apply(partialParams));
    }
    invokeGetBucketIntelligentTieringConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketIntelligentTieringConfiguration(this.ops["GetBucketIntelligentTieringConfiguration"].apply(partialParams));
    }
    invokeGetBucketInventoryConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketInventoryConfiguration(this.ops["GetBucketInventoryConfiguration"].apply(partialParams));
    }
    invokeGetBucketLifecycle(partialParams) {
        this.boot();
        return this.client.getBucketLifecycle(this.ops["GetBucketLifecycle"].apply(partialParams));
    }
    invokeGetBucketLifecycleConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketLifecycleConfiguration(this.ops["GetBucketLifecycleConfiguration"].apply(partialParams));
    }
    invokeGetBucketLocation(partialParams) {
        this.boot();
        return this.client.getBucketLocation(this.ops["GetBucketLocation"].apply(partialParams));
    }
    invokeGetBucketLogging(partialParams) {
        this.boot();
        return this.client.getBucketLogging(this.ops["GetBucketLogging"].apply(partialParams));
    }
    invokeGetBucketMetricsConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketMetricsConfiguration(this.ops["GetBucketMetricsConfiguration"].apply(partialParams));
    }
    invokeGetBucketNotification(partialParams) {
        this.boot();
        return this.client.getBucketNotification(this.ops["GetBucketNotification"].apply(partialParams));
    }
    invokeGetBucketNotificationConfiguration(partialParams) {
        this.boot();
        return this.client.getBucketNotificationConfiguration(this.ops["GetBucketNotificationConfiguration"].apply(partialParams));
    }
    invokeGetBucketOwnershipControls(partialParams) {
        this.boot();
        return this.client.getBucketOwnershipControls(this.ops["GetBucketOwnershipControls"].apply(partialParams));
    }
    invokeGetBucketPolicy(partialParams) {
        this.boot();
        return this.client.getBucketPolicy(this.ops["GetBucketPolicy"].apply(partialParams));
    }
    invokeGetBucketPolicyStatus(partialParams) {
        this.boot();
        return this.client.getBucketPolicyStatus(this.ops["GetBucketPolicyStatus"].apply(partialParams));
    }
    invokeGetBucketReplication(partialParams) {
        this.boot();
        return this.client.getBucketReplication(this.ops["GetBucketReplication"].apply(partialParams));
    }
    invokeGetBucketRequestPayment(partialParams) {
        this.boot();
        return this.client.getBucketRequestPayment(this.ops["GetBucketRequestPayment"].apply(partialParams));
    }
    invokeGetBucketTagging(partialParams) {
        this.boot();
        return this.client.getBucketTagging(this.ops["GetBucketTagging"].apply(partialParams));
    }
    invokeGetBucketVersioning(partialParams) {
        this.boot();
        return this.client.getBucketVersioning(this.ops["GetBucketVersioning"].apply(partialParams));
    }
    invokeGetBucketWebsite(partialParams) {
        this.boot();
        return this.client.getBucketWebsite(this.ops["GetBucketWebsite"].apply(partialParams));
    }
    invokeGetObject(partialParams) {
        this.boot();
        return this.client.getObject(this.ops["GetObject"].apply(partialParams));
    }
    invokeGetObjectAcl(partialParams) {
        this.boot();
        return this.client.getObjectAcl(this.ops["GetObjectAcl"].apply(partialParams));
    }
    invokeGetObjectLegalHold(partialParams) {
        this.boot();
        return this.client.getObjectLegalHold(this.ops["GetObjectLegalHold"].apply(partialParams));
    }
    invokeGetObjectLockConfiguration(partialParams) {
        this.boot();
        return this.client.getObjectLockConfiguration(this.ops["GetObjectLockConfiguration"].apply(partialParams));
    }
    invokeGetObjectRetention(partialParams) {
        this.boot();
        return this.client.getObjectRetention(this.ops["GetObjectRetention"].apply(partialParams));
    }
    invokeGetObjectTagging(partialParams) {
        this.boot();
        return this.client.getObjectTagging(this.ops["GetObjectTagging"].apply(partialParams));
    }
    invokeGetObjectTorrent(partialParams) {
        this.boot();
        return this.client.getObjectTorrent(this.ops["GetObjectTorrent"].apply(partialParams));
    }
    invokeGetPublicAccessBlock(partialParams) {
        this.boot();
        return this.client.getPublicAccessBlock(this.ops["GetPublicAccessBlock"].apply(partialParams));
    }
    invokeHeadObject(partialParams) {
        this.boot();
        return this.client.headObject(this.ops["HeadObject"].apply(partialParams));
    }
    invokeListBucketAnalyticsConfigurations(partialParams) {
        this.boot();
        return this.client.listBucketAnalyticsConfigurations(this.ops["ListBucketAnalyticsConfigurations"].apply(partialParams));
    }
    invokeListBucketIntelligentTieringConfigurations(partialParams) {
        this.boot();
        return this.client.listBucketIntelligentTieringConfigurations(this.ops["ListBucketIntelligentTieringConfigurations"].apply(partialParams));
    }
    invokeListBucketInventoryConfigurations(partialParams) {
        this.boot();
        return this.client.listBucketInventoryConfigurations(this.ops["ListBucketInventoryConfigurations"].apply(partialParams));
    }
    invokeListBucketMetricsConfigurations(partialParams) {
        this.boot();
        return this.client.listBucketMetricsConfigurations(this.ops["ListBucketMetricsConfigurations"].apply(partialParams));
    }
    invokeListMultipartUploads(partialParams) {
        this.boot();
        return this.client.listMultipartUploads(this.ops["ListMultipartUploads"].apply(partialParams));
    }
    invokeListObjectVersions(partialParams) {
        this.boot();
        return this.client.listObjectVersions(this.ops["ListObjectVersions"].apply(partialParams));
    }
    invokeListObjects(partialParams) {
        this.boot();
        return this.client.listObjects(this.ops["ListObjects"].apply(partialParams));
    }
    invokeListObjectsV2(partialParams) {
        this.boot();
        return this.client.listObjectsV2(this.ops["ListObjectsV2"].apply(partialParams));
    }
    invokeListParts(partialParams) {
        this.boot();
        return this.client.listParts(this.ops["ListParts"].apply(partialParams));
    }
    invokePutObject(partialParams) {
        this.boot();
        return this.client.putObject(this.ops["PutObject"].apply(partialParams));
    }
    invokePutObjectAcl(partialParams) {
        this.boot();
        return this.client.putObjectAcl(this.ops["PutObjectAcl"].apply(partialParams));
    }
    invokePutObjectLegalHold(partialParams) {
        this.boot();
        return this.client.putObjectLegalHold(this.ops["PutObjectLegalHold"].apply(partialParams));
    }
    invokePutObjectLockConfiguration(partialParams) {
        this.boot();
        return this.client.putObjectLockConfiguration(this.ops["PutObjectLockConfiguration"].apply(partialParams));
    }
    invokePutObjectRetention(partialParams) {
        this.boot();
        return this.client.putObjectRetention(this.ops["PutObjectRetention"].apply(partialParams));
    }
    invokePutObjectTagging(partialParams) {
        this.boot();
        return this.client.putObjectTagging(this.ops["PutObjectTagging"].apply(partialParams));
    }
    invokeRestoreObject(partialParams) {
        this.boot();
        return this.client.restoreObject(this.ops["RestoreObject"].apply(partialParams));
    }
    invokeSelectObjectContent(partialParams) {
        this.boot();
        return this.client.selectObjectContent(this.ops["SelectObjectContent"].apply(partialParams));
    }
    invokeUploadPart(partialParams) {
        this.boot();
        return this.client.uploadPart(this.ops["UploadPart"].apply(partialParams));
    }
    invokeUploadPartCopy(partialParams) {
        this.boot();
        return this.client.uploadPartCopy(this.ops["UploadPartCopy"].apply(partialParams));
    }
}
exports.default = default_1;
