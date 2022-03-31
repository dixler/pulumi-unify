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
class default_1 extends aws.s3.AccountPublicAccessBlock {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.S3();
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
    invokeCompleteMultipartUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMultipartUpload(this.ops["CompleteMultipartUpload"].applicator.apply(partialParams));
    }
    invokeCopyObject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyObject(this.ops["CopyObject"].applicator.apply(partialParams));
    }
    invokeCreateBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucket(this.ops["CreateBucket"].applicator.apply(partialParams));
    }
    invokeCreateMultipartUpload(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMultipartUpload(this.ops["CreateMultipartUpload"].applicator.apply(partialParams));
    }
    invokeDeleteBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucket(this.ops["DeleteBucket"].applicator.apply(partialParams));
    }
    invokeDeleteBucketAnalyticsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketAnalyticsConfiguration(this.ops["DeleteBucketAnalyticsConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteBucketCors(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketCors(this.ops["DeleteBucketCors"].applicator.apply(partialParams));
    }
    invokeDeleteBucketEncryption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketEncryption(this.ops["DeleteBucketEncryption"].applicator.apply(partialParams));
    }
    invokeDeleteBucketIntelligentTieringConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketIntelligentTieringConfiguration(this.ops["DeleteBucketIntelligentTieringConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteBucketInventoryConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketInventoryConfiguration(this.ops["DeleteBucketInventoryConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteBucketLifecycle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketLifecycle(this.ops["DeleteBucketLifecycle"].applicator.apply(partialParams));
    }
    invokeDeleteBucketMetricsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketMetricsConfiguration(this.ops["DeleteBucketMetricsConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteBucketOwnershipControls(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketOwnershipControls(this.ops["DeleteBucketOwnershipControls"].applicator.apply(partialParams));
    }
    invokeDeleteBucketPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketPolicy(this.ops["DeleteBucketPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteBucketReplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketReplication(this.ops["DeleteBucketReplication"].applicator.apply(partialParams));
    }
    invokeDeleteBucketTagging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketTagging(this.ops["DeleteBucketTagging"].applicator.apply(partialParams));
    }
    invokeDeleteBucketWebsite(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketWebsite(this.ops["DeleteBucketWebsite"].applicator.apply(partialParams));
    }
    invokeDeleteObject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObject(this.ops["DeleteObject"].applicator.apply(partialParams));
    }
    invokeDeleteObjectTagging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjectTagging(this.ops["DeleteObjectTagging"].applicator.apply(partialParams));
    }
    invokeDeleteObjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjects(this.ops["DeleteObjects"].applicator.apply(partialParams));
    }
    invokeDeletePublicAccessBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicAccessBlock(this.ops["DeletePublicAccessBlock"].applicator.apply(partialParams));
    }
    invokeGetBucketAccelerateConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAccelerateConfiguration(this.ops["GetBucketAccelerateConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketAcl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAcl(this.ops["GetBucketAcl"].applicator.apply(partialParams));
    }
    invokeGetBucketAnalyticsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAnalyticsConfiguration(this.ops["GetBucketAnalyticsConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketCors(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketCors(this.ops["GetBucketCors"].applicator.apply(partialParams));
    }
    invokeGetBucketEncryption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketEncryption(this.ops["GetBucketEncryption"].applicator.apply(partialParams));
    }
    invokeGetBucketIntelligentTieringConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketIntelligentTieringConfiguration(this.ops["GetBucketIntelligentTieringConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketInventoryConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketInventoryConfiguration(this.ops["GetBucketInventoryConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketLifecycle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycle(this.ops["GetBucketLifecycle"].applicator.apply(partialParams));
    }
    invokeGetBucketLifecycleConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycleConfiguration(this.ops["GetBucketLifecycleConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketLocation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLocation(this.ops["GetBucketLocation"].applicator.apply(partialParams));
    }
    invokeGetBucketLogging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLogging(this.ops["GetBucketLogging"].applicator.apply(partialParams));
    }
    invokeGetBucketMetricsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketMetricsConfiguration(this.ops["GetBucketMetricsConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketNotification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotification(this.ops["GetBucketNotification"].applicator.apply(partialParams));
    }
    invokeGetBucketNotificationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotificationConfiguration(this.ops["GetBucketNotificationConfiguration"].applicator.apply(partialParams));
    }
    invokeGetBucketOwnershipControls(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketOwnershipControls(this.ops["GetBucketOwnershipControls"].applicator.apply(partialParams));
    }
    invokeGetBucketPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicy(this.ops["GetBucketPolicy"].applicator.apply(partialParams));
    }
    invokeGetBucketPolicyStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicyStatus(this.ops["GetBucketPolicyStatus"].applicator.apply(partialParams));
    }
    invokeGetBucketReplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketReplication(this.ops["GetBucketReplication"].applicator.apply(partialParams));
    }
    invokeGetBucketRequestPayment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketRequestPayment(this.ops["GetBucketRequestPayment"].applicator.apply(partialParams));
    }
    invokeGetBucketTagging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketTagging(this.ops["GetBucketTagging"].applicator.apply(partialParams));
    }
    invokeGetBucketVersioning(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketVersioning(this.ops["GetBucketVersioning"].applicator.apply(partialParams));
    }
    invokeGetBucketWebsite(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketWebsite(this.ops["GetBucketWebsite"].applicator.apply(partialParams));
    }
    invokeGetObject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObject(this.ops["GetObject"].applicator.apply(partialParams));
    }
    invokeGetObjectAcl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectAcl(this.ops["GetObjectAcl"].applicator.apply(partialParams));
    }
    invokeGetObjectLegalHold(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLegalHold(this.ops["GetObjectLegalHold"].applicator.apply(partialParams));
    }
    invokeGetObjectLockConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLockConfiguration(this.ops["GetObjectLockConfiguration"].applicator.apply(partialParams));
    }
    invokeGetObjectRetention(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectRetention(this.ops["GetObjectRetention"].applicator.apply(partialParams));
    }
    invokeGetObjectTagging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTagging(this.ops["GetObjectTagging"].applicator.apply(partialParams));
    }
    invokeGetObjectTorrent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTorrent(this.ops["GetObjectTorrent"].applicator.apply(partialParams));
    }
    invokeGetPublicAccessBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicAccessBlock(this.ops["GetPublicAccessBlock"].applicator.apply(partialParams));
    }
    invokeHeadBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headBucket(this.ops["HeadBucket"].applicator.apply(partialParams));
    }
    invokeHeadObject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headObject(this.ops["HeadObject"].applicator.apply(partialParams));
    }
    invokeListBucketAnalyticsConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketAnalyticsConfigurations(this.ops["ListBucketAnalyticsConfigurations"].applicator.apply(partialParams));
    }
    invokeListBucketIntelligentTieringConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketIntelligentTieringConfigurations(this.ops["ListBucketIntelligentTieringConfigurations"].applicator.apply(partialParams));
    }
    invokeListBucketInventoryConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketInventoryConfigurations(this.ops["ListBucketInventoryConfigurations"].applicator.apply(partialParams));
    }
    invokeListBucketMetricsConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketMetricsConfigurations(this.ops["ListBucketMetricsConfigurations"].applicator.apply(partialParams));
    }
    invokeListMultipartUploads(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMultipartUploads(this.ops["ListMultipartUploads"].applicator.apply(partialParams));
    }
    invokeListObjectVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectVersions(this.ops["ListObjectVersions"].applicator.apply(partialParams));
    }
    invokeListObjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjects(this.ops["ListObjects"].applicator.apply(partialParams));
    }
    invokeListObjectsV2(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectsV2(this.ops["ListObjectsV2"].applicator.apply(partialParams));
    }
    invokeListParts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParts(this.ops["ListParts"].applicator.apply(partialParams));
    }
    invokePutBucketAccelerateConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAccelerateConfiguration(this.ops["PutBucketAccelerateConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketAcl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAcl(this.ops["PutBucketAcl"].applicator.apply(partialParams));
    }
    invokePutBucketAnalyticsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAnalyticsConfiguration(this.ops["PutBucketAnalyticsConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketCors(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketCors(this.ops["PutBucketCors"].applicator.apply(partialParams));
    }
    invokePutBucketEncryption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketEncryption(this.ops["PutBucketEncryption"].applicator.apply(partialParams));
    }
    invokePutBucketIntelligentTieringConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketIntelligentTieringConfiguration(this.ops["PutBucketIntelligentTieringConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketInventoryConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketInventoryConfiguration(this.ops["PutBucketInventoryConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketLifecycle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycle(this.ops["PutBucketLifecycle"].applicator.apply(partialParams));
    }
    invokePutBucketLifecycleConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycleConfiguration(this.ops["PutBucketLifecycleConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketLogging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLogging(this.ops["PutBucketLogging"].applicator.apply(partialParams));
    }
    invokePutBucketMetricsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketMetricsConfiguration(this.ops["PutBucketMetricsConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketNotification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotification(this.ops["PutBucketNotification"].applicator.apply(partialParams));
    }
    invokePutBucketNotificationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotificationConfiguration(this.ops["PutBucketNotificationConfiguration"].applicator.apply(partialParams));
    }
    invokePutBucketOwnershipControls(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketOwnershipControls(this.ops["PutBucketOwnershipControls"].applicator.apply(partialParams));
    }
    invokePutBucketPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketPolicy(this.ops["PutBucketPolicy"].applicator.apply(partialParams));
    }
    invokePutBucketReplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketReplication(this.ops["PutBucketReplication"].applicator.apply(partialParams));
    }
    invokePutBucketRequestPayment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketRequestPayment(this.ops["PutBucketRequestPayment"].applicator.apply(partialParams));
    }
    invokePutBucketTagging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketTagging(this.ops["PutBucketTagging"].applicator.apply(partialParams));
    }
    invokePutBucketVersioning(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketVersioning(this.ops["PutBucketVersioning"].applicator.apply(partialParams));
    }
    invokePutBucketWebsite(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketWebsite(this.ops["PutBucketWebsite"].applicator.apply(partialParams));
    }
    invokePutObject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObject(this.ops["PutObject"].applicator.apply(partialParams));
    }
    invokePutObjectAcl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectAcl(this.ops["PutObjectAcl"].applicator.apply(partialParams));
    }
    invokePutObjectLegalHold(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLegalHold(this.ops["PutObjectLegalHold"].applicator.apply(partialParams));
    }
    invokePutObjectLockConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLockConfiguration(this.ops["PutObjectLockConfiguration"].applicator.apply(partialParams));
    }
    invokePutObjectRetention(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectRetention(this.ops["PutObjectRetention"].applicator.apply(partialParams));
    }
    invokePutObjectTagging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectTagging(this.ops["PutObjectTagging"].applicator.apply(partialParams));
    }
    invokePutPublicAccessBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPublicAccessBlock(this.ops["PutPublicAccessBlock"].applicator.apply(partialParams));
    }
    invokeRestoreObject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreObject(this.ops["RestoreObject"].applicator.apply(partialParams));
    }
    invokeSelectObjectContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.selectObjectContent(this.ops["SelectObjectContent"].applicator.apply(partialParams));
    }
    invokeUploadPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPart(this.ops["UploadPart"].applicator.apply(partialParams));
    }
    invokeUploadPartCopy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPartCopy(this.ops["UploadPartCopy"].applicator.apply(partialParams));
    }
    invokeWriteGetObjectResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.writeGetObjectResponse(this.ops["WriteGetObjectResponse"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
