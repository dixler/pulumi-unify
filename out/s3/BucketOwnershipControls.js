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
class default_1 extends aws.s3.BucketOwnershipControls {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.S3();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/s3-2006-03-01.normal.json"), this.client);
    }
    invokeAbortMultipartUpload(partialParams) {
        return this.client.abortMultipartUpload(this.ops["AbortMultipartUpload"].apply(partialParams));
    }
    invokeCompleteMultipartUpload(partialParams) {
        return this.client.completeMultipartUpload(this.ops["CompleteMultipartUpload"].apply(partialParams));
    }
    invokeCopyObject(partialParams) {
        return this.client.copyObject(this.ops["CopyObject"].apply(partialParams));
    }
    invokeCreateBucket(partialParams) {
        return this.client.createBucket(this.ops["CreateBucket"].apply(partialParams));
    }
    invokeCreateMultipartUpload(partialParams) {
        return this.client.createMultipartUpload(this.ops["CreateMultipartUpload"].apply(partialParams));
    }
    invokeDeleteBucket(partialParams) {
        return this.client.deleteBucket(this.ops["DeleteBucket"].apply(partialParams));
    }
    invokeDeleteBucketAnalyticsConfiguration(partialParams) {
        return this.client.deleteBucketAnalyticsConfiguration(this.ops["DeleteBucketAnalyticsConfiguration"].apply(partialParams));
    }
    invokeDeleteBucketCors(partialParams) {
        return this.client.deleteBucketCors(this.ops["DeleteBucketCors"].apply(partialParams));
    }
    invokeDeleteBucketEncryption(partialParams) {
        return this.client.deleteBucketEncryption(this.ops["DeleteBucketEncryption"].apply(partialParams));
    }
    invokeDeleteBucketIntelligentTieringConfiguration(partialParams) {
        return this.client.deleteBucketIntelligentTieringConfiguration(this.ops["DeleteBucketIntelligentTieringConfiguration"].apply(partialParams));
    }
    invokeDeleteBucketInventoryConfiguration(partialParams) {
        return this.client.deleteBucketInventoryConfiguration(this.ops["DeleteBucketInventoryConfiguration"].apply(partialParams));
    }
    invokeDeleteBucketLifecycle(partialParams) {
        return this.client.deleteBucketLifecycle(this.ops["DeleteBucketLifecycle"].apply(partialParams));
    }
    invokeDeleteBucketMetricsConfiguration(partialParams) {
        return this.client.deleteBucketMetricsConfiguration(this.ops["DeleteBucketMetricsConfiguration"].apply(partialParams));
    }
    invokeDeleteBucketOwnershipControls(partialParams) {
        return this.client.deleteBucketOwnershipControls(this.ops["DeleteBucketOwnershipControls"].apply(partialParams));
    }
    invokeDeleteBucketPolicy(partialParams) {
        return this.client.deleteBucketPolicy(this.ops["DeleteBucketPolicy"].apply(partialParams));
    }
    invokeDeleteBucketReplication(partialParams) {
        return this.client.deleteBucketReplication(this.ops["DeleteBucketReplication"].apply(partialParams));
    }
    invokeDeleteBucketTagging(partialParams) {
        return this.client.deleteBucketTagging(this.ops["DeleteBucketTagging"].apply(partialParams));
    }
    invokeDeleteBucketWebsite(partialParams) {
        return this.client.deleteBucketWebsite(this.ops["DeleteBucketWebsite"].apply(partialParams));
    }
    invokeDeleteObject(partialParams) {
        return this.client.deleteObject(this.ops["DeleteObject"].apply(partialParams));
    }
    invokeDeleteObjectTagging(partialParams) {
        return this.client.deleteObjectTagging(this.ops["DeleteObjectTagging"].apply(partialParams));
    }
    invokeDeleteObjects(partialParams) {
        return this.client.deleteObjects(this.ops["DeleteObjects"].apply(partialParams));
    }
    invokeDeletePublicAccessBlock(partialParams) {
        return this.client.deletePublicAccessBlock(this.ops["DeletePublicAccessBlock"].apply(partialParams));
    }
    invokeGetBucketAccelerateConfiguration(partialParams) {
        return this.client.getBucketAccelerateConfiguration(this.ops["GetBucketAccelerateConfiguration"].apply(partialParams));
    }
    invokeGetBucketAcl(partialParams) {
        return this.client.getBucketAcl(this.ops["GetBucketAcl"].apply(partialParams));
    }
    invokeGetBucketAnalyticsConfiguration(partialParams) {
        return this.client.getBucketAnalyticsConfiguration(this.ops["GetBucketAnalyticsConfiguration"].apply(partialParams));
    }
    invokeGetBucketCors(partialParams) {
        return this.client.getBucketCors(this.ops["GetBucketCors"].apply(partialParams));
    }
    invokeGetBucketEncryption(partialParams) {
        return this.client.getBucketEncryption(this.ops["GetBucketEncryption"].apply(partialParams));
    }
    invokeGetBucketIntelligentTieringConfiguration(partialParams) {
        return this.client.getBucketIntelligentTieringConfiguration(this.ops["GetBucketIntelligentTieringConfiguration"].apply(partialParams));
    }
    invokeGetBucketInventoryConfiguration(partialParams) {
        return this.client.getBucketInventoryConfiguration(this.ops["GetBucketInventoryConfiguration"].apply(partialParams));
    }
    invokeGetBucketLifecycle(partialParams) {
        return this.client.getBucketLifecycle(this.ops["GetBucketLifecycle"].apply(partialParams));
    }
    invokeGetBucketLifecycleConfiguration(partialParams) {
        return this.client.getBucketLifecycleConfiguration(this.ops["GetBucketLifecycleConfiguration"].apply(partialParams));
    }
    invokeGetBucketLocation(partialParams) {
        return this.client.getBucketLocation(this.ops["GetBucketLocation"].apply(partialParams));
    }
    invokeGetBucketLogging(partialParams) {
        return this.client.getBucketLogging(this.ops["GetBucketLogging"].apply(partialParams));
    }
    invokeGetBucketMetricsConfiguration(partialParams) {
        return this.client.getBucketMetricsConfiguration(this.ops["GetBucketMetricsConfiguration"].apply(partialParams));
    }
    invokeGetBucketNotification(partialParams) {
        return this.client.getBucketNotification(this.ops["GetBucketNotification"].apply(partialParams));
    }
    invokeGetBucketNotificationConfiguration(partialParams) {
        return this.client.getBucketNotificationConfiguration(this.ops["GetBucketNotificationConfiguration"].apply(partialParams));
    }
    invokeGetBucketOwnershipControls(partialParams) {
        return this.client.getBucketOwnershipControls(this.ops["GetBucketOwnershipControls"].apply(partialParams));
    }
    invokeGetBucketPolicy(partialParams) {
        return this.client.getBucketPolicy(this.ops["GetBucketPolicy"].apply(partialParams));
    }
    invokeGetBucketPolicyStatus(partialParams) {
        return this.client.getBucketPolicyStatus(this.ops["GetBucketPolicyStatus"].apply(partialParams));
    }
    invokeGetBucketReplication(partialParams) {
        return this.client.getBucketReplication(this.ops["GetBucketReplication"].apply(partialParams));
    }
    invokeGetBucketRequestPayment(partialParams) {
        return this.client.getBucketRequestPayment(this.ops["GetBucketRequestPayment"].apply(partialParams));
    }
    invokeGetBucketTagging(partialParams) {
        return this.client.getBucketTagging(this.ops["GetBucketTagging"].apply(partialParams));
    }
    invokeGetBucketVersioning(partialParams) {
        return this.client.getBucketVersioning(this.ops["GetBucketVersioning"].apply(partialParams));
    }
    invokeGetBucketWebsite(partialParams) {
        return this.client.getBucketWebsite(this.ops["GetBucketWebsite"].apply(partialParams));
    }
    invokeGetObject(partialParams) {
        return this.client.getObject(this.ops["GetObject"].apply(partialParams));
    }
    invokeGetObjectAcl(partialParams) {
        return this.client.getObjectAcl(this.ops["GetObjectAcl"].apply(partialParams));
    }
    invokeGetObjectLegalHold(partialParams) {
        return this.client.getObjectLegalHold(this.ops["GetObjectLegalHold"].apply(partialParams));
    }
    invokeGetObjectLockConfiguration(partialParams) {
        return this.client.getObjectLockConfiguration(this.ops["GetObjectLockConfiguration"].apply(partialParams));
    }
    invokeGetObjectRetention(partialParams) {
        return this.client.getObjectRetention(this.ops["GetObjectRetention"].apply(partialParams));
    }
    invokeGetObjectTagging(partialParams) {
        return this.client.getObjectTagging(this.ops["GetObjectTagging"].apply(partialParams));
    }
    invokeGetObjectTorrent(partialParams) {
        return this.client.getObjectTorrent(this.ops["GetObjectTorrent"].apply(partialParams));
    }
    invokeGetPublicAccessBlock(partialParams) {
        return this.client.getPublicAccessBlock(this.ops["GetPublicAccessBlock"].apply(partialParams));
    }
    invokeHeadBucket(partialParams) {
        return this.client.headBucket(this.ops["HeadBucket"].apply(partialParams));
    }
    invokeHeadObject(partialParams) {
        return this.client.headObject(this.ops["HeadObject"].apply(partialParams));
    }
    invokeListBucketAnalyticsConfigurations(partialParams) {
        return this.client.listBucketAnalyticsConfigurations(this.ops["ListBucketAnalyticsConfigurations"].apply(partialParams));
    }
    invokeListBucketIntelligentTieringConfigurations(partialParams) {
        return this.client.listBucketIntelligentTieringConfigurations(this.ops["ListBucketIntelligentTieringConfigurations"].apply(partialParams));
    }
    invokeListBucketInventoryConfigurations(partialParams) {
        return this.client.listBucketInventoryConfigurations(this.ops["ListBucketInventoryConfigurations"].apply(partialParams));
    }
    invokeListBucketMetricsConfigurations(partialParams) {
        return this.client.listBucketMetricsConfigurations(this.ops["ListBucketMetricsConfigurations"].apply(partialParams));
    }
    invokeListMultipartUploads(partialParams) {
        return this.client.listMultipartUploads(this.ops["ListMultipartUploads"].apply(partialParams));
    }
    invokeListObjectVersions(partialParams) {
        return this.client.listObjectVersions(this.ops["ListObjectVersions"].apply(partialParams));
    }
    invokeListObjects(partialParams) {
        return this.client.listObjects(this.ops["ListObjects"].apply(partialParams));
    }
    invokeListObjectsV2(partialParams) {
        return this.client.listObjectsV2(this.ops["ListObjectsV2"].apply(partialParams));
    }
    invokeListParts(partialParams) {
        return this.client.listParts(this.ops["ListParts"].apply(partialParams));
    }
    invokePutBucketAccelerateConfiguration(partialParams) {
        return this.client.putBucketAccelerateConfiguration(this.ops["PutBucketAccelerateConfiguration"].apply(partialParams));
    }
    invokePutBucketAcl(partialParams) {
        return this.client.putBucketAcl(this.ops["PutBucketAcl"].apply(partialParams));
    }
    invokePutBucketAnalyticsConfiguration(partialParams) {
        return this.client.putBucketAnalyticsConfiguration(this.ops["PutBucketAnalyticsConfiguration"].apply(partialParams));
    }
    invokePutBucketCors(partialParams) {
        return this.client.putBucketCors(this.ops["PutBucketCors"].apply(partialParams));
    }
    invokePutBucketEncryption(partialParams) {
        return this.client.putBucketEncryption(this.ops["PutBucketEncryption"].apply(partialParams));
    }
    invokePutBucketIntelligentTieringConfiguration(partialParams) {
        return this.client.putBucketIntelligentTieringConfiguration(this.ops["PutBucketIntelligentTieringConfiguration"].apply(partialParams));
    }
    invokePutBucketInventoryConfiguration(partialParams) {
        return this.client.putBucketInventoryConfiguration(this.ops["PutBucketInventoryConfiguration"].apply(partialParams));
    }
    invokePutBucketLifecycle(partialParams) {
        return this.client.putBucketLifecycle(this.ops["PutBucketLifecycle"].apply(partialParams));
    }
    invokePutBucketLifecycleConfiguration(partialParams) {
        return this.client.putBucketLifecycleConfiguration(this.ops["PutBucketLifecycleConfiguration"].apply(partialParams));
    }
    invokePutBucketLogging(partialParams) {
        return this.client.putBucketLogging(this.ops["PutBucketLogging"].apply(partialParams));
    }
    invokePutBucketMetricsConfiguration(partialParams) {
        return this.client.putBucketMetricsConfiguration(this.ops["PutBucketMetricsConfiguration"].apply(partialParams));
    }
    invokePutBucketNotification(partialParams) {
        return this.client.putBucketNotification(this.ops["PutBucketNotification"].apply(partialParams));
    }
    invokePutBucketNotificationConfiguration(partialParams) {
        return this.client.putBucketNotificationConfiguration(this.ops["PutBucketNotificationConfiguration"].apply(partialParams));
    }
    invokePutBucketOwnershipControls(partialParams) {
        return this.client.putBucketOwnershipControls(this.ops["PutBucketOwnershipControls"].apply(partialParams));
    }
    invokePutBucketPolicy(partialParams) {
        return this.client.putBucketPolicy(this.ops["PutBucketPolicy"].apply(partialParams));
    }
    invokePutBucketReplication(partialParams) {
        return this.client.putBucketReplication(this.ops["PutBucketReplication"].apply(partialParams));
    }
    invokePutBucketRequestPayment(partialParams) {
        return this.client.putBucketRequestPayment(this.ops["PutBucketRequestPayment"].apply(partialParams));
    }
    invokePutBucketTagging(partialParams) {
        return this.client.putBucketTagging(this.ops["PutBucketTagging"].apply(partialParams));
    }
    invokePutBucketVersioning(partialParams) {
        return this.client.putBucketVersioning(this.ops["PutBucketVersioning"].apply(partialParams));
    }
    invokePutBucketWebsite(partialParams) {
        return this.client.putBucketWebsite(this.ops["PutBucketWebsite"].apply(partialParams));
    }
    invokePutObject(partialParams) {
        return this.client.putObject(this.ops["PutObject"].apply(partialParams));
    }
    invokePutObjectAcl(partialParams) {
        return this.client.putObjectAcl(this.ops["PutObjectAcl"].apply(partialParams));
    }
    invokePutObjectLegalHold(partialParams) {
        return this.client.putObjectLegalHold(this.ops["PutObjectLegalHold"].apply(partialParams));
    }
    invokePutObjectLockConfiguration(partialParams) {
        return this.client.putObjectLockConfiguration(this.ops["PutObjectLockConfiguration"].apply(partialParams));
    }
    invokePutObjectRetention(partialParams) {
        return this.client.putObjectRetention(this.ops["PutObjectRetention"].apply(partialParams));
    }
    invokePutObjectTagging(partialParams) {
        return this.client.putObjectTagging(this.ops["PutObjectTagging"].apply(partialParams));
    }
    invokePutPublicAccessBlock(partialParams) {
        return this.client.putPublicAccessBlock(this.ops["PutPublicAccessBlock"].apply(partialParams));
    }
    invokeRestoreObject(partialParams) {
        return this.client.restoreObject(this.ops["RestoreObject"].apply(partialParams));
    }
    invokeSelectObjectContent(partialParams) {
        return this.client.selectObjectContent(this.ops["SelectObjectContent"].apply(partialParams));
    }
    invokeUploadPart(partialParams) {
        return this.client.uploadPart(this.ops["UploadPart"].apply(partialParams));
    }
    invokeUploadPartCopy(partialParams) {
        return this.client.uploadPartCopy(this.ops["UploadPartCopy"].apply(partialParams));
    }
    invokeWriteGetObjectResponse(partialParams) {
        return this.client.writeGetObjectResponse(this.ops["WriteGetObjectResponse"].apply(partialParams));
    }
}
exports.default = default_1;
