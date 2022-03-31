
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

export default class extends aws.s3.AccessPoint {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.s3.AccessPoint>) {
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
      [K in keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest]: (AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest)[K]
    }>): Request<AbortMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortMultipartUpload(
          this.ops["AbortMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof Omit<CompleteMultipartUploadRequest, "Bucket"> & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest]: (CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & Omit<CompleteMultipartUploadRequest, "Bucket"> & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest)[K]
    }>): Request<CompleteMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMultipartUpload(
          this.ops["CompleteMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof Omit<CopyObjectRequest, "Bucket"> & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest]: (CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & Omit<CopyObjectRequest, "Bucket"> & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest)[K]
    }>): Request<CopyObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyObject(
          this.ops["CopyObject"].applicator.apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof Omit<CreateBucketRequest, "Bucket"> & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest]: (CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & Omit<CreateBucketRequest, "Bucket"> & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest)[K]
    }>): Request<CreateBucketOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucket(
          this.ops["CreateBucket"].applicator.apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof Omit<CreateMultipartUploadRequest, "Bucket"> & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest]: (CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & Omit<CreateMultipartUploadRequest, "Bucket"> & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest)[K]
    }>): Request<CreateMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMultipartUpload(
          this.ops["CreateMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof Omit<DeleteBucketRequest, "Bucket"> & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest]: (DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & Omit<DeleteBucketRequest, "Bucket"> & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucket(
          this.ops["DeleteBucket"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest]: (DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketAnalyticsConfiguration(
          this.ops["DeleteBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketCors(partialParams: ToOptional<{
      [K in keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof Omit<DeleteBucketCorsRequest, "Bucket"> & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest]: (DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & Omit<DeleteBucketCorsRequest, "Bucket"> & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketCors(
          this.ops["DeleteBucketCors"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketEncryption(partialParams: ToOptional<{
      [K in keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof Omit<DeleteBucketEncryptionRequest, "Bucket"> & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest]: (DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & Omit<DeleteBucketEncryptionRequest, "Bucket"> & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketEncryption(
          this.ops["DeleteBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest]: (DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketIntelligentTieringConfiguration(
          this.ops["DeleteBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest]: (DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketInventoryConfiguration(
          this.ops["DeleteBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketLifecycle(partialParams: ToOptional<{
      [K in keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof Omit<DeleteBucketLifecycleRequest, "Bucket"> & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest]: (DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & Omit<DeleteBucketLifecycleRequest, "Bucket"> & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketLifecycle(
          this.ops["DeleteBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest]: (DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketMetricsConfiguration(
          this.ops["DeleteBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest]: (DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketOwnershipControls(
          this.ops["DeleteBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketPolicy(partialParams: ToOptional<{
      [K in keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof Omit<DeleteBucketPolicyRequest, "Bucket"> & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest]: (DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & Omit<DeleteBucketPolicyRequest, "Bucket"> & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketPolicy(
          this.ops["DeleteBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketReplication(partialParams: ToOptional<{
      [K in keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof Omit<DeleteBucketReplicationRequest, "Bucket"> & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest]: (DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & Omit<DeleteBucketReplicationRequest, "Bucket"> & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketReplication(
          this.ops["DeleteBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketTagging(partialParams: ToOptional<{
      [K in keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof Omit<DeleteBucketTaggingRequest, "Bucket"> & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest]: (DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & Omit<DeleteBucketTaggingRequest, "Bucket"> & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketTagging(
          this.ops["DeleteBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketWebsite(partialParams: ToOptional<{
      [K in keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof Omit<DeleteBucketWebsiteRequest, "Bucket"> & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest]: (DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & Omit<DeleteBucketWebsiteRequest, "Bucket"> & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketWebsite(
          this.ops["DeleteBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof Omit<DeleteObjectRequest, "Bucket"> & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest]: (DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & Omit<DeleteObjectRequest, "Bucket"> & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest)[K]
    }>): Request<DeleteObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObject(
          this.ops["DeleteObject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof Omit<DeleteObjectTaggingRequest, "Bucket"> & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest]: (DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & Omit<DeleteObjectTaggingRequest, "Bucket"> & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest)[K]
    }>): Request<DeleteObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjectTagging(
          this.ops["DeleteObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof Omit<DeleteObjectsRequest, "Bucket"> & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest]: (DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & Omit<DeleteObjectsRequest, "Bucket"> & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest)[K]
    }>): Request<DeleteObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjects(
          this.ops["DeleteObjects"].applicator.apply(partialParams)
        );
    }

    invokeDeletePublicAccessBlock(partialParams: ToOptional<{
      [K in keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof Omit<DeletePublicAccessBlockRequest, "Bucket"> & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest]: (DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & Omit<DeletePublicAccessBlockRequest, "Bucket"> & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicAccessBlock(
          this.ops["DeletePublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest]: (GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest)[K]
    }>): Request<GetBucketAccelerateConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAccelerateConfiguration(
          this.ops["GetBucketAccelerateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof Omit<GetBucketAclRequest, "Bucket"> & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest]: (GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & Omit<GetBucketAclRequest, "Bucket"> & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest)[K]
    }>): Request<GetBucketAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAcl(
          this.ops["GetBucketAcl"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest]: (GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest)[K]
    }>): Request<GetBucketAnalyticsConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAnalyticsConfiguration(
          this.ops["GetBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof Omit<GetBucketCorsRequest, "Bucket"> & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest]: (GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & Omit<GetBucketCorsRequest, "Bucket"> & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest)[K]
    }>): Request<GetBucketCorsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketCors(
          this.ops["GetBucketCors"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof Omit<GetBucketEncryptionRequest, "Bucket"> & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest]: (GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & Omit<GetBucketEncryptionRequest, "Bucket"> & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest)[K]
    }>): Request<GetBucketEncryptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketEncryption(
          this.ops["GetBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest]: (GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<GetBucketIntelligentTieringConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketIntelligentTieringConfiguration(
          this.ops["GetBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest]: (GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest)[K]
    }>): Request<GetBucketInventoryConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketInventoryConfiguration(
          this.ops["GetBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof Omit<GetBucketLifecycleRequest, "Bucket"> & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest]: (GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & Omit<GetBucketLifecycleRequest, "Bucket"> & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest)[K]
    }>): Request<GetBucketLifecycleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycle(
          this.ops["GetBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest]: (GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest)[K]
    }>): Request<GetBucketLifecycleConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycleConfiguration(
          this.ops["GetBucketLifecycleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof Omit<GetBucketLocationRequest, "Bucket"> & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest]: (GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & Omit<GetBucketLocationRequest, "Bucket"> & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest)[K]
    }>): Request<GetBucketLocationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLocation(
          this.ops["GetBucketLocation"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof Omit<GetBucketLoggingRequest, "Bucket"> & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest]: (GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & Omit<GetBucketLoggingRequest, "Bucket"> & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest)[K]
    }>): Request<GetBucketLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLogging(
          this.ops["GetBucketLogging"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest]: (GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest)[K]
    }>): Request<GetBucketMetricsConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketMetricsConfiguration(
          this.ops["GetBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest]: (GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfigurationDeprecated, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotification(
          this.ops["GetBucketNotification"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest]: (GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotificationConfiguration(
          this.ops["GetBucketNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof Omit<GetBucketOwnershipControlsRequest, "Bucket"> & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest]: (GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & Omit<GetBucketOwnershipControlsRequest, "Bucket"> & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest)[K]
    }>): Request<GetBucketOwnershipControlsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketOwnershipControls(
          this.ops["GetBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof Omit<GetBucketPolicyRequest, "Bucket"> & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest]: (GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & Omit<GetBucketPolicyRequest, "Bucket"> & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest)[K]
    }>): Request<GetBucketPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicy(
          this.ops["GetBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof Omit<GetBucketPolicyStatusRequest, "Bucket"> & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest]: (GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & Omit<GetBucketPolicyStatusRequest, "Bucket"> & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest)[K]
    }>): Request<GetBucketPolicyStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicyStatus(
          this.ops["GetBucketPolicyStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof Omit<GetBucketReplicationRequest, "Bucket"> & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest]: (GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & Omit<GetBucketReplicationRequest, "Bucket"> & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest)[K]
    }>): Request<GetBucketReplicationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketReplication(
          this.ops["GetBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof Omit<GetBucketRequestPaymentRequest, "Bucket"> & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest]: (GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & Omit<GetBucketRequestPaymentRequest, "Bucket"> & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest)[K]
    }>): Request<GetBucketRequestPaymentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketRequestPayment(
          this.ops["GetBucketRequestPayment"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof Omit<GetBucketTaggingRequest, "Bucket"> & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest]: (GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & Omit<GetBucketTaggingRequest, "Bucket"> & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest)[K]
    }>): Request<GetBucketTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketTagging(
          this.ops["GetBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof Omit<GetBucketVersioningRequest, "Bucket"> & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest]: (GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & Omit<GetBucketVersioningRequest, "Bucket"> & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest)[K]
    }>): Request<GetBucketVersioningOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketVersioning(
          this.ops["GetBucketVersioning"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof Omit<GetBucketWebsiteRequest, "Bucket"> & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest]: (GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & Omit<GetBucketWebsiteRequest, "Bucket"> & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest)[K]
    }>): Request<GetBucketWebsiteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketWebsite(
          this.ops["GetBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof Omit<GetObjectRequest, "Bucket"> & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest]: (GetObjectRequest & GetObjectRequest & GetObjectRequest & Omit<GetObjectRequest, "Bucket"> & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest)[K]
    }>): Request<GetObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObject(
          this.ops["GetObject"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof Omit<GetObjectAclRequest, "Bucket"> & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest]: (GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & Omit<GetObjectAclRequest, "Bucket"> & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest)[K]
    }>): Request<GetObjectAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectAcl(
          this.ops["GetObjectAcl"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof Omit<GetObjectLegalHoldRequest, "Bucket"> & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest]: (GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & Omit<GetObjectLegalHoldRequest, "Bucket"> & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest)[K]
    }>): Request<GetObjectLegalHoldOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLegalHold(
          this.ops["GetObjectLegalHold"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof Omit<GetObjectLockConfigurationRequest, "Bucket"> & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest]: (GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & Omit<GetObjectLockConfigurationRequest, "Bucket"> & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest)[K]
    }>): Request<GetObjectLockConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLockConfiguration(
          this.ops["GetObjectLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof Omit<GetObjectRetentionRequest, "Bucket"> & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest]: (GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & Omit<GetObjectRetentionRequest, "Bucket"> & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest)[K]
    }>): Request<GetObjectRetentionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectRetention(
          this.ops["GetObjectRetention"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof Omit<GetObjectTaggingRequest, "Bucket"> & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest]: (GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & Omit<GetObjectTaggingRequest, "Bucket"> & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest)[K]
    }>): Request<GetObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTagging(
          this.ops["GetObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof Omit<GetObjectTorrentRequest, "Bucket"> & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest]: (GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & Omit<GetObjectTorrentRequest, "Bucket"> & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest)[K]
    }>): Request<GetObjectTorrentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTorrent(
          this.ops["GetObjectTorrent"].applicator.apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof Omit<GetPublicAccessBlockRequest, "Bucket"> & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest]: (GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & Omit<GetPublicAccessBlockRequest, "Bucket"> & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest)[K]
    }>): Request<GetPublicAccessBlockOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicAccessBlock(
          this.ops["GetPublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeHeadBucket(partialParams: ToOptional<{
      [K in keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof Omit<HeadBucketRequest, "Bucket"> & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest]: (HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & Omit<HeadBucketRequest, "Bucket"> & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headBucket(
          this.ops["HeadBucket"].applicator.apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof Omit<HeadObjectRequest, "Bucket"> & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest]: (HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & Omit<HeadObjectRequest, "Bucket"> & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest)[K]
    }>): Request<HeadObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headObject(
          this.ops["HeadObject"].applicator.apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest]: (ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest)[K]
    }>): Request<ListBucketAnalyticsConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketAnalyticsConfigurations(
          this.ops["ListBucketAnalyticsConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest]: (ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest)[K]
    }>): Request<ListBucketIntelligentTieringConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketIntelligentTieringConfigurations(
          this.ops["ListBucketIntelligentTieringConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest]: (ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest)[K]
    }>): Request<ListBucketInventoryConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketInventoryConfigurations(
          this.ops["ListBucketInventoryConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest]: (ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest)[K]
    }>): Request<ListBucketMetricsConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketMetricsConfigurations(
          this.ops["ListBucketMetricsConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof Omit<ListMultipartUploadsRequest, "Bucket"> & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest]: (ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & Omit<ListMultipartUploadsRequest, "Bucket"> & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest)[K]
    }>): Request<ListMultipartUploadsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMultipartUploads(
          this.ops["ListMultipartUploads"].applicator.apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof Omit<ListObjectVersionsRequest, "Bucket"> & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest]: (ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & Omit<ListObjectVersionsRequest, "Bucket"> & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest)[K]
    }>): Request<ListObjectVersionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectVersions(
          this.ops["ListObjectVersions"].applicator.apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof Omit<ListObjectsRequest, "Bucket"> & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest]: (ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & Omit<ListObjectsRequest, "Bucket"> & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest)[K]
    }>): Request<ListObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjects(
          this.ops["ListObjects"].applicator.apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof Omit<ListObjectsV2Request, "Bucket"> & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request]: (ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & Omit<ListObjectsV2Request, "Bucket"> & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request)[K]
    }>): Request<ListObjectsV2Output, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectsV2(
          this.ops["ListObjectsV2"].applicator.apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof Omit<ListPartsRequest, "Bucket"> & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest]: (ListPartsRequest & ListPartsRequest & ListPartsRequest & Omit<ListPartsRequest, "Bucket"> & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest)[K]
    }>): Request<ListPartsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParts(
          this.ops["ListParts"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest]: (PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAccelerateConfiguration(
          this.ops["PutBucketAccelerateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAcl(partialParams: ToOptional<{
      [K in keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof Omit<PutBucketAclRequest, "Bucket"> & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest]: (PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & Omit<PutBucketAclRequest, "Bucket"> & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAcl(
          this.ops["PutBucketAcl"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest]: (PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAnalyticsConfiguration(
          this.ops["PutBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketCors(partialParams: ToOptional<{
      [K in keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof Omit<PutBucketCorsRequest, "Bucket"> & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest]: (PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & Omit<PutBucketCorsRequest, "Bucket"> & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketCors(
          this.ops["PutBucketCors"].applicator.apply(partialParams)
        );
    }

    invokePutBucketEncryption(partialParams: ToOptional<{
      [K in keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof Omit<PutBucketEncryptionRequest, "Bucket"> & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest]: (PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & Omit<PutBucketEncryptionRequest, "Bucket"> & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketEncryption(
          this.ops["PutBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokePutBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest]: (PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketIntelligentTieringConfiguration(
          this.ops["PutBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest]: (PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketInventoryConfiguration(
          this.ops["PutBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLifecycle(partialParams: ToOptional<{
      [K in keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof Omit<PutBucketLifecycleRequest, "Bucket"> & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest]: (PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & Omit<PutBucketLifecycleRequest, "Bucket"> & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycle(
          this.ops["PutBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest]: (PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycleConfiguration(
          this.ops["PutBucketLifecycleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLogging(partialParams: ToOptional<{
      [K in keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof Omit<PutBucketLoggingRequest, "Bucket"> & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest]: (PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & Omit<PutBucketLoggingRequest, "Bucket"> & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLogging(
          this.ops["PutBucketLogging"].applicator.apply(partialParams)
        );
    }

    invokePutBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest]: (PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketMetricsConfiguration(
          this.ops["PutBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketNotification(partialParams: ToOptional<{
      [K in keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof Omit<PutBucketNotificationRequest, "Bucket"> & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest]: (PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & Omit<PutBucketNotificationRequest, "Bucket"> & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotification(
          this.ops["PutBucketNotification"].applicator.apply(partialParams)
        );
    }

    invokePutBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest]: (PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotificationConfiguration(
          this.ops["PutBucketNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof Omit<PutBucketOwnershipControlsRequest, "Bucket"> & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest]: (PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & Omit<PutBucketOwnershipControlsRequest, "Bucket"> & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketOwnershipControls(
          this.ops["PutBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokePutBucketPolicy(partialParams: ToOptional<{
      [K in keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof Omit<PutBucketPolicyRequest, "Bucket"> & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof Omit<PutBucketPolicyRequest, "Policy">]: (PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & Omit<PutBucketPolicyRequest, "Bucket"> & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & Omit<PutBucketPolicyRequest, "Policy">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketPolicy(
          this.ops["PutBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutBucketReplication(partialParams: ToOptional<{
      [K in keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof Omit<PutBucketReplicationRequest, "Bucket"> & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest]: (PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & Omit<PutBucketReplicationRequest, "Bucket"> & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketReplication(
          this.ops["PutBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokePutBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof Omit<PutBucketRequestPaymentRequest, "Bucket"> & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest]: (PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & Omit<PutBucketRequestPaymentRequest, "Bucket"> & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketRequestPayment(
          this.ops["PutBucketRequestPayment"].applicator.apply(partialParams)
        );
    }

    invokePutBucketTagging(partialParams: ToOptional<{
      [K in keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof Omit<PutBucketTaggingRequest, "Bucket"> & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest]: (PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & Omit<PutBucketTaggingRequest, "Bucket"> & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketTagging(
          this.ops["PutBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokePutBucketVersioning(partialParams: ToOptional<{
      [K in keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof Omit<PutBucketVersioningRequest, "Bucket"> & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest]: (PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & Omit<PutBucketVersioningRequest, "Bucket"> & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketVersioning(
          this.ops["PutBucketVersioning"].applicator.apply(partialParams)
        );
    }

    invokePutBucketWebsite(partialParams: ToOptional<{
      [K in keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof Omit<PutBucketWebsiteRequest, "Bucket"> & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest]: (PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & Omit<PutBucketWebsiteRequest, "Bucket"> & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketWebsite(
          this.ops["PutBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof Omit<PutObjectRequest, "Bucket"> & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest]: (PutObjectRequest & PutObjectRequest & PutObjectRequest & Omit<PutObjectRequest, "Bucket"> & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest)[K]
    }>): Request<PutObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObject(
          this.ops["PutObject"].applicator.apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof Omit<PutObjectAclRequest, "Bucket"> & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest]: (PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & Omit<PutObjectAclRequest, "Bucket"> & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest)[K]
    }>): Request<PutObjectAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectAcl(
          this.ops["PutObjectAcl"].applicator.apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof Omit<PutObjectLegalHoldRequest, "Bucket"> & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest]: (PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & Omit<PutObjectLegalHoldRequest, "Bucket"> & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest)[K]
    }>): Request<PutObjectLegalHoldOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLegalHold(
          this.ops["PutObjectLegalHold"].applicator.apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof Omit<PutObjectLockConfigurationRequest, "Bucket"> & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest]: (PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & Omit<PutObjectLockConfigurationRequest, "Bucket"> & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest)[K]
    }>): Request<PutObjectLockConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLockConfiguration(
          this.ops["PutObjectLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof Omit<PutObjectRetentionRequest, "Bucket"> & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest]: (PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & Omit<PutObjectRetentionRequest, "Bucket"> & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest)[K]
    }>): Request<PutObjectRetentionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectRetention(
          this.ops["PutObjectRetention"].applicator.apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof Omit<PutObjectTaggingRequest, "Bucket"> & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest]: (PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & Omit<PutObjectTaggingRequest, "Bucket"> & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest)[K]
    }>): Request<PutObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectTagging(
          this.ops["PutObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokePutPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof Omit<PutPublicAccessBlockRequest, "Bucket"> & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest]: (PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & Omit<PutPublicAccessBlockRequest, "Bucket"> & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPublicAccessBlock(
          this.ops["PutPublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof Omit<RestoreObjectRequest, "Bucket"> & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest]: (RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & Omit<RestoreObjectRequest, "Bucket"> & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest)[K]
    }>): Request<RestoreObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreObject(
          this.ops["RestoreObject"].applicator.apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof Omit<SelectObjectContentRequest, "Bucket"> & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest]: (SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & Omit<SelectObjectContentRequest, "Bucket"> & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest)[K]
    }>): Request<SelectObjectContentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.selectObjectContent(
          this.ops["SelectObjectContent"].applicator.apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof Omit<UploadPartRequest, "Bucket"> & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest]: (UploadPartRequest & UploadPartRequest & UploadPartRequest & Omit<UploadPartRequest, "Bucket"> & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest)[K]
    }>): Request<UploadPartOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPart(
          this.ops["UploadPart"].applicator.apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof Omit<UploadPartCopyRequest, "Bucket"> & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest]: (UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & Omit<UploadPartCopyRequest, "Bucket"> & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest)[K]
    }>): Request<UploadPartCopyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPartCopy(
          this.ops["UploadPartCopy"].applicator.apply(partialParams)
        );
    }

    invokeWriteGetObjectResponse(partialParams: ToOptional<{
      [K in keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest]: (WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.writeGetObjectResponse(
          this.ops["WriteGetObjectResponse"].applicator.apply(partialParams)
        );
    }
}