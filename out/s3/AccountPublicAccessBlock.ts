
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AbortMultipartUploadRequest,
    CompleteMultipartUploadRequest,
    CopyObjectRequest,
    CreateBucketRequest,
    CreateMultipartUploadRequest,
    DeleteBucketRequest,
    DeleteBucketAnalyticsConfigurationRequest,
    DeleteBucketCorsRequest,
    DeleteBucketEncryptionRequest,
    DeleteBucketIntelligentTieringConfigurationRequest,
    DeleteBucketInventoryConfigurationRequest,
    DeleteBucketLifecycleRequest,
    DeleteBucketMetricsConfigurationRequest,
    DeleteBucketOwnershipControlsRequest,
    DeleteBucketPolicyRequest,
    DeleteBucketReplicationRequest,
    DeleteBucketTaggingRequest,
    DeleteBucketWebsiteRequest,
    DeleteObjectRequest,
    DeleteObjectTaggingRequest,
    DeleteObjectsRequest,
    DeletePublicAccessBlockRequest,
    GetBucketAccelerateConfigurationRequest,
    GetBucketAclRequest,
    GetBucketAnalyticsConfigurationRequest,
    GetBucketCorsRequest,
    GetBucketEncryptionRequest,
    GetBucketIntelligentTieringConfigurationRequest,
    GetBucketInventoryConfigurationRequest,
    GetBucketLifecycleRequest,
    GetBucketLifecycleConfigurationRequest,
    GetBucketLocationRequest,
    GetBucketLoggingRequest,
    GetBucketMetricsConfigurationRequest,
    GetBucketNotificationConfigurationRequest,
    GetBucketOwnershipControlsRequest,
    GetBucketPolicyRequest,
    GetBucketPolicyStatusRequest,
    GetBucketReplicationRequest,
    GetBucketRequestPaymentRequest,
    GetBucketTaggingRequest,
    GetBucketVersioningRequest,
    GetBucketWebsiteRequest,
    GetObjectRequest,
    GetObjectAclRequest,
    GetObjectLegalHoldRequest,
    GetObjectLockConfigurationRequest,
    GetObjectRetentionRequest,
    GetObjectTaggingRequest,
    GetObjectTorrentRequest,
    GetPublicAccessBlockRequest,
    HeadBucketRequest,
    HeadObjectRequest,
    ListBucketAnalyticsConfigurationsRequest,
    ListBucketIntelligentTieringConfigurationsRequest,
    ListBucketInventoryConfigurationsRequest,
    ListBucketMetricsConfigurationsRequest,
    ListMultipartUploadsRequest,
    ListObjectVersionsRequest,
    ListObjectsRequest,
    ListObjectsV2Request,
    ListPartsRequest,
    PutBucketAccelerateConfigurationRequest,
    PutBucketAclRequest,
    PutBucketAnalyticsConfigurationRequest,
    PutBucketCorsRequest,
    PutBucketEncryptionRequest,
    PutBucketIntelligentTieringConfigurationRequest,
    PutBucketInventoryConfigurationRequest,
    PutBucketLifecycleRequest,
    PutBucketLifecycleConfigurationRequest,
    PutBucketLoggingRequest,
    PutBucketMetricsConfigurationRequest,
    PutBucketNotificationRequest,
    PutBucketNotificationConfigurationRequest,
    PutBucketOwnershipControlsRequest,
    PutBucketPolicyRequest,
    PutBucketReplicationRequest,
    PutBucketRequestPaymentRequest,
    PutBucketTaggingRequest,
    PutBucketVersioningRequest,
    PutBucketWebsiteRequest,
    PutObjectRequest,
    PutObjectAclRequest,
    PutObjectLegalHoldRequest,
    PutObjectLockConfigurationRequest,
    PutObjectRetentionRequest,
    PutObjectTaggingRequest,
    PutPublicAccessBlockRequest,
    RestoreObjectRequest,
    SelectObjectContentRequest,
    UploadPartRequest,
    UploadPartCopyRequest,
    WriteGetObjectResponseRequest,
    AbortMultipartUploadOutput,
    CompleteMultipartUploadOutput,
    CopyObjectOutput,
    CreateBucketOutput,
    CreateMultipartUploadOutput,
    DeleteObjectOutput,
    DeleteObjectTaggingOutput,
    DeleteObjectsOutput,
    GetBucketAccelerateConfigurationOutput,
    GetBucketAclOutput,
    GetBucketAnalyticsConfigurationOutput,
    GetBucketCorsOutput,
    GetBucketEncryptionOutput,
    GetBucketIntelligentTieringConfigurationOutput,
    GetBucketInventoryConfigurationOutput,
    GetBucketLifecycleOutput,
    GetBucketLifecycleConfigurationOutput,
    GetBucketLocationOutput,
    GetBucketLoggingOutput,
    GetBucketMetricsConfigurationOutput,
    NotificationConfigurationDeprecated,
    NotificationConfiguration,
    GetBucketOwnershipControlsOutput,
    GetBucketPolicyOutput,
    GetBucketPolicyStatusOutput,
    GetBucketReplicationOutput,
    GetBucketRequestPaymentOutput,
    GetBucketTaggingOutput,
    GetBucketVersioningOutput,
    GetBucketWebsiteOutput,
    GetObjectOutput,
    GetObjectAclOutput,
    GetObjectLegalHoldOutput,
    GetObjectLockConfigurationOutput,
    GetObjectRetentionOutput,
    GetObjectTaggingOutput,
    GetObjectTorrentOutput,
    GetPublicAccessBlockOutput,
    HeadObjectOutput,
    ListBucketAnalyticsConfigurationsOutput,
    ListBucketIntelligentTieringConfigurationsOutput,
    ListBucketInventoryConfigurationsOutput,
    ListBucketMetricsConfigurationsOutput,
    ListMultipartUploadsOutput,
    ListObjectVersionsOutput,
    ListObjectsOutput,
    ListObjectsV2Output,
    ListPartsOutput,
    PutObjectOutput,
    PutObjectAclOutput,
    PutObjectLegalHoldOutput,
    PutObjectLockConfigurationOutput,
    PutObjectRetentionOutput,
    PutObjectTaggingOutput,
    RestoreObjectOutput,
    SelectObjectContentOutput,
    UploadPartOutput,
    UploadPartCopyOutput
} from "aws-sdk/clients/s3";
const schema = require("../apis/s3-2006-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.s3.AccountPublicAccessBlock {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.s3.AccountPublicAccessBlock>) {
        super(...args)
        this.client = new awssdk.S3()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAbortMultipartUpload(partialParams: ToOptional<{
      [K in keyof AbortMultipartUploadRequest]: (AbortMultipartUploadRequest)[K]
    }>): Request<AbortMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortMultipartUpload(
          this.ops["AbortMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadRequest]: (CompleteMultipartUploadRequest)[K]
    }>): Request<CompleteMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMultipartUpload(
          this.ops["CompleteMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof CopyObjectRequest]: (CopyObjectRequest)[K]
    }>): Request<CopyObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyObject(
          this.ops["CopyObject"].applicator.apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest]: (CreateBucketRequest)[K]
    }>): Request<CreateBucketOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucket(
          this.ops["CreateBucket"].applicator.apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof CreateMultipartUploadRequest]: (CreateMultipartUploadRequest)[K]
    }>): Request<CreateMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMultipartUpload(
          this.ops["CreateMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof DeleteBucketRequest]: (DeleteBucketRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucket(
          this.ops["DeleteBucket"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketAnalyticsConfigurationRequest]: (DeleteBucketAnalyticsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketAnalyticsConfiguration(
          this.ops["DeleteBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketCors(partialParams: ToOptional<{
      [K in keyof DeleteBucketCorsRequest]: (DeleteBucketCorsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketCors(
          this.ops["DeleteBucketCors"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketEncryption(partialParams: ToOptional<{
      [K in keyof DeleteBucketEncryptionRequest]: (DeleteBucketEncryptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketEncryption(
          this.ops["DeleteBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketIntelligentTieringConfigurationRequest]: (DeleteBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketIntelligentTieringConfiguration(
          this.ops["DeleteBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketInventoryConfigurationRequest]: (DeleteBucketInventoryConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketInventoryConfiguration(
          this.ops["DeleteBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketLifecycle(partialParams: ToOptional<{
      [K in keyof DeleteBucketLifecycleRequest]: (DeleteBucketLifecycleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketLifecycle(
          this.ops["DeleteBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketMetricsConfigurationRequest]: (DeleteBucketMetricsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketMetricsConfiguration(
          this.ops["DeleteBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof DeleteBucketOwnershipControlsRequest]: (DeleteBucketOwnershipControlsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketOwnershipControls(
          this.ops["DeleteBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketPolicy(partialParams: ToOptional<{
      [K in keyof DeleteBucketPolicyRequest]: (DeleteBucketPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketPolicy(
          this.ops["DeleteBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketReplication(partialParams: ToOptional<{
      [K in keyof DeleteBucketReplicationRequest]: (DeleteBucketReplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketReplication(
          this.ops["DeleteBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketTagging(partialParams: ToOptional<{
      [K in keyof DeleteBucketTaggingRequest]: (DeleteBucketTaggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketTagging(
          this.ops["DeleteBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketWebsite(partialParams: ToOptional<{
      [K in keyof DeleteBucketWebsiteRequest]: (DeleteBucketWebsiteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketWebsite(
          this.ops["DeleteBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof DeleteObjectRequest]: (DeleteObjectRequest)[K]
    }>): Request<DeleteObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObject(
          this.ops["DeleteObject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof DeleteObjectTaggingRequest]: (DeleteObjectTaggingRequest)[K]
    }>): Request<DeleteObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjectTagging(
          this.ops["DeleteObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof DeleteObjectsRequest]: (DeleteObjectsRequest)[K]
    }>): Request<DeleteObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjects(
          this.ops["DeleteObjects"].applicator.apply(partialParams)
        );
    }

    invokeDeletePublicAccessBlock(partialParams: ToOptional<{
      [K in keyof DeletePublicAccessBlockRequest]: (DeletePublicAccessBlockRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicAccessBlock(
          this.ops["DeletePublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAccelerateConfigurationRequest]: (GetBucketAccelerateConfigurationRequest)[K]
    }>): Request<GetBucketAccelerateConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAccelerateConfiguration(
          this.ops["GetBucketAccelerateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof GetBucketAclRequest]: (GetBucketAclRequest)[K]
    }>): Request<GetBucketAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAcl(
          this.ops["GetBucketAcl"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAnalyticsConfigurationRequest]: (GetBucketAnalyticsConfigurationRequest)[K]
    }>): Request<GetBucketAnalyticsConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAnalyticsConfiguration(
          this.ops["GetBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof GetBucketCorsRequest]: (GetBucketCorsRequest)[K]
    }>): Request<GetBucketCorsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketCors(
          this.ops["GetBucketCors"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof GetBucketEncryptionRequest]: (GetBucketEncryptionRequest)[K]
    }>): Request<GetBucketEncryptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketEncryption(
          this.ops["GetBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketIntelligentTieringConfigurationRequest]: (GetBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<GetBucketIntelligentTieringConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketIntelligentTieringConfiguration(
          this.ops["GetBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketInventoryConfigurationRequest]: (GetBucketInventoryConfigurationRequest)[K]
    }>): Request<GetBucketInventoryConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketInventoryConfiguration(
          this.ops["GetBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleRequest]: (GetBucketLifecycleRequest)[K]
    }>): Request<GetBucketLifecycleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycle(
          this.ops["GetBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleConfigurationRequest]: (GetBucketLifecycleConfigurationRequest)[K]
    }>): Request<GetBucketLifecycleConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycleConfiguration(
          this.ops["GetBucketLifecycleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof GetBucketLocationRequest]: (GetBucketLocationRequest)[K]
    }>): Request<GetBucketLocationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLocation(
          this.ops["GetBucketLocation"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof GetBucketLoggingRequest]: (GetBucketLoggingRequest)[K]
    }>): Request<GetBucketLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLogging(
          this.ops["GetBucketLogging"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketMetricsConfigurationRequest]: (GetBucketMetricsConfigurationRequest)[K]
    }>): Request<GetBucketMetricsConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketMetricsConfiguration(
          this.ops["GetBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest]: (GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfigurationDeprecated, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotification(
          this.ops["GetBucketNotification"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest]: (GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotificationConfiguration(
          this.ops["GetBucketNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof GetBucketOwnershipControlsRequest]: (GetBucketOwnershipControlsRequest)[K]
    }>): Request<GetBucketOwnershipControlsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketOwnershipControls(
          this.ops["GetBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyRequest]: (GetBucketPolicyRequest)[K]
    }>): Request<GetBucketPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicy(
          this.ops["GetBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyStatusRequest]: (GetBucketPolicyStatusRequest)[K]
    }>): Request<GetBucketPolicyStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicyStatus(
          this.ops["GetBucketPolicyStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof GetBucketReplicationRequest]: (GetBucketReplicationRequest)[K]
    }>): Request<GetBucketReplicationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketReplication(
          this.ops["GetBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof GetBucketRequestPaymentRequest]: (GetBucketRequestPaymentRequest)[K]
    }>): Request<GetBucketRequestPaymentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketRequestPayment(
          this.ops["GetBucketRequestPayment"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof GetBucketTaggingRequest]: (GetBucketTaggingRequest)[K]
    }>): Request<GetBucketTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketTagging(
          this.ops["GetBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof GetBucketVersioningRequest]: (GetBucketVersioningRequest)[K]
    }>): Request<GetBucketVersioningOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketVersioning(
          this.ops["GetBucketVersioning"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof GetBucketWebsiteRequest]: (GetBucketWebsiteRequest)[K]
    }>): Request<GetBucketWebsiteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketWebsite(
          this.ops["GetBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof GetObjectRequest]: (GetObjectRequest)[K]
    }>): Request<GetObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObject(
          this.ops["GetObject"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof GetObjectAclRequest]: (GetObjectAclRequest)[K]
    }>): Request<GetObjectAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectAcl(
          this.ops["GetObjectAcl"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof GetObjectLegalHoldRequest]: (GetObjectLegalHoldRequest)[K]
    }>): Request<GetObjectLegalHoldOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLegalHold(
          this.ops["GetObjectLegalHold"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof GetObjectLockConfigurationRequest]: (GetObjectLockConfigurationRequest)[K]
    }>): Request<GetObjectLockConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLockConfiguration(
          this.ops["GetObjectLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof GetObjectRetentionRequest]: (GetObjectRetentionRequest)[K]
    }>): Request<GetObjectRetentionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectRetention(
          this.ops["GetObjectRetention"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof GetObjectTaggingRequest]: (GetObjectTaggingRequest)[K]
    }>): Request<GetObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTagging(
          this.ops["GetObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof GetObjectTorrentRequest]: (GetObjectTorrentRequest)[K]
    }>): Request<GetObjectTorrentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTorrent(
          this.ops["GetObjectTorrent"].applicator.apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof GetPublicAccessBlockRequest]: (GetPublicAccessBlockRequest)[K]
    }>): Request<GetPublicAccessBlockOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicAccessBlock(
          this.ops["GetPublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeHeadBucket(partialParams: ToOptional<{
      [K in keyof HeadBucketRequest]: (HeadBucketRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headBucket(
          this.ops["HeadBucket"].applicator.apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof HeadObjectRequest]: (HeadObjectRequest)[K]
    }>): Request<HeadObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headObject(
          this.ops["HeadObject"].applicator.apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketAnalyticsConfigurationsRequest]: (ListBucketAnalyticsConfigurationsRequest)[K]
    }>): Request<ListBucketAnalyticsConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketAnalyticsConfigurations(
          this.ops["ListBucketAnalyticsConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketIntelligentTieringConfigurationsRequest]: (ListBucketIntelligentTieringConfigurationsRequest)[K]
    }>): Request<ListBucketIntelligentTieringConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketIntelligentTieringConfigurations(
          this.ops["ListBucketIntelligentTieringConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketInventoryConfigurationsRequest]: (ListBucketInventoryConfigurationsRequest)[K]
    }>): Request<ListBucketInventoryConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketInventoryConfigurations(
          this.ops["ListBucketInventoryConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketMetricsConfigurationsRequest]: (ListBucketMetricsConfigurationsRequest)[K]
    }>): Request<ListBucketMetricsConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketMetricsConfigurations(
          this.ops["ListBucketMetricsConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsRequest]: (ListMultipartUploadsRequest)[K]
    }>): Request<ListMultipartUploadsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMultipartUploads(
          this.ops["ListMultipartUploads"].applicator.apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof ListObjectVersionsRequest]: (ListObjectVersionsRequest)[K]
    }>): Request<ListObjectVersionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectVersions(
          this.ops["ListObjectVersions"].applicator.apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof ListObjectsRequest]: (ListObjectsRequest)[K]
    }>): Request<ListObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjects(
          this.ops["ListObjects"].applicator.apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof ListObjectsV2Request]: (ListObjectsV2Request)[K]
    }>): Request<ListObjectsV2Output, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectsV2(
          this.ops["ListObjectsV2"].applicator.apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsRequest]: (ListPartsRequest)[K]
    }>): Request<ListPartsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParts(
          this.ops["ListParts"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketAccelerateConfigurationRequest]: (PutBucketAccelerateConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAccelerateConfiguration(
          this.ops["PutBucketAccelerateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAcl(partialParams: ToOptional<{
      [K in keyof PutBucketAclRequest]: (PutBucketAclRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAcl(
          this.ops["PutBucketAcl"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketAnalyticsConfigurationRequest]: (PutBucketAnalyticsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAnalyticsConfiguration(
          this.ops["PutBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketCors(partialParams: ToOptional<{
      [K in keyof PutBucketCorsRequest]: (PutBucketCorsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketCors(
          this.ops["PutBucketCors"].applicator.apply(partialParams)
        );
    }

    invokePutBucketEncryption(partialParams: ToOptional<{
      [K in keyof PutBucketEncryptionRequest]: (PutBucketEncryptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketEncryption(
          this.ops["PutBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokePutBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketIntelligentTieringConfigurationRequest]: (PutBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketIntelligentTieringConfiguration(
          this.ops["PutBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketInventoryConfigurationRequest]: (PutBucketInventoryConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketInventoryConfiguration(
          this.ops["PutBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLifecycle(partialParams: ToOptional<{
      [K in keyof PutBucketLifecycleRequest]: (PutBucketLifecycleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycle(
          this.ops["PutBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketLifecycleConfigurationRequest]: (PutBucketLifecycleConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycleConfiguration(
          this.ops["PutBucketLifecycleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLogging(partialParams: ToOptional<{
      [K in keyof PutBucketLoggingRequest]: (PutBucketLoggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLogging(
          this.ops["PutBucketLogging"].applicator.apply(partialParams)
        );
    }

    invokePutBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketMetricsConfigurationRequest]: (PutBucketMetricsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketMetricsConfiguration(
          this.ops["PutBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketNotification(partialParams: ToOptional<{
      [K in keyof PutBucketNotificationRequest]: (PutBucketNotificationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotification(
          this.ops["PutBucketNotification"].applicator.apply(partialParams)
        );
    }

    invokePutBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketNotificationConfigurationRequest]: (PutBucketNotificationConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotificationConfiguration(
          this.ops["PutBucketNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof PutBucketOwnershipControlsRequest]: (PutBucketOwnershipControlsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketOwnershipControls(
          this.ops["PutBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokePutBucketPolicy(partialParams: ToOptional<{
      [K in keyof PutBucketPolicyRequest]: (PutBucketPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketPolicy(
          this.ops["PutBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutBucketReplication(partialParams: ToOptional<{
      [K in keyof PutBucketReplicationRequest]: (PutBucketReplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketReplication(
          this.ops["PutBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokePutBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof PutBucketRequestPaymentRequest]: (PutBucketRequestPaymentRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketRequestPayment(
          this.ops["PutBucketRequestPayment"].applicator.apply(partialParams)
        );
    }

    invokePutBucketTagging(partialParams: ToOptional<{
      [K in keyof PutBucketTaggingRequest]: (PutBucketTaggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketTagging(
          this.ops["PutBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokePutBucketVersioning(partialParams: ToOptional<{
      [K in keyof PutBucketVersioningRequest]: (PutBucketVersioningRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketVersioning(
          this.ops["PutBucketVersioning"].applicator.apply(partialParams)
        );
    }

    invokePutBucketWebsite(partialParams: ToOptional<{
      [K in keyof PutBucketWebsiteRequest]: (PutBucketWebsiteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketWebsite(
          this.ops["PutBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof PutObjectRequest]: (PutObjectRequest)[K]
    }>): Request<PutObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObject(
          this.ops["PutObject"].applicator.apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof PutObjectAclRequest]: (PutObjectAclRequest)[K]
    }>): Request<PutObjectAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectAcl(
          this.ops["PutObjectAcl"].applicator.apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof PutObjectLegalHoldRequest]: (PutObjectLegalHoldRequest)[K]
    }>): Request<PutObjectLegalHoldOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLegalHold(
          this.ops["PutObjectLegalHold"].applicator.apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof PutObjectLockConfigurationRequest]: (PutObjectLockConfigurationRequest)[K]
    }>): Request<PutObjectLockConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLockConfiguration(
          this.ops["PutObjectLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof PutObjectRetentionRequest]: (PutObjectRetentionRequest)[K]
    }>): Request<PutObjectRetentionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectRetention(
          this.ops["PutObjectRetention"].applicator.apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof PutObjectTaggingRequest]: (PutObjectTaggingRequest)[K]
    }>): Request<PutObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectTagging(
          this.ops["PutObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokePutPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof PutPublicAccessBlockRequest]: (PutPublicAccessBlockRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPublicAccessBlock(
          this.ops["PutPublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof RestoreObjectRequest]: (RestoreObjectRequest)[K]
    }>): Request<RestoreObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreObject(
          this.ops["RestoreObject"].applicator.apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof SelectObjectContentRequest]: (SelectObjectContentRequest)[K]
    }>): Request<SelectObjectContentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.selectObjectContent(
          this.ops["SelectObjectContent"].applicator.apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof UploadPartRequest]: (UploadPartRequest)[K]
    }>): Request<UploadPartOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPart(
          this.ops["UploadPart"].applicator.apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof UploadPartCopyRequest]: (UploadPartCopyRequest)[K]
    }>): Request<UploadPartCopyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPartCopy(
          this.ops["UploadPartCopy"].applicator.apply(partialParams)
        );
    }

    invokeWriteGetObjectResponse(partialParams: ToOptional<{
      [K in keyof WriteGetObjectResponseRequest]: (WriteGetObjectResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.writeGetObjectResponse(
          this.ops["WriteGetObjectResponse"].applicator.apply(partialParams)
        );
    }
}