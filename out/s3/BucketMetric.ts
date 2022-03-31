
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

export default class extends aws.s3.BucketMetric {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.s3.BucketMetric>) {
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
      [K in keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest]: (AbortMultipartUploadRequest & AbortMultipartUploadRequest)[K]
    }>): Request<AbortMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortMultipartUpload(
          this.ops["AbortMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof Omit<CompleteMultipartUploadRequest, "Bucket"> & keyof CompleteMultipartUploadRequest]: (Omit<CompleteMultipartUploadRequest, "Bucket"> & CompleteMultipartUploadRequest)[K]
    }>): Request<CompleteMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMultipartUpload(
          this.ops["CompleteMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof Omit<CopyObjectRequest, "Bucket"> & keyof CopyObjectRequest]: (Omit<CopyObjectRequest, "Bucket"> & CopyObjectRequest)[K]
    }>): Request<CopyObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyObject(
          this.ops["CopyObject"].applicator.apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof Omit<CreateBucketRequest, "Bucket"> & keyof CreateBucketRequest]: (Omit<CreateBucketRequest, "Bucket"> & CreateBucketRequest)[K]
    }>): Request<CreateBucketOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucket(
          this.ops["CreateBucket"].applicator.apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof Omit<CreateMultipartUploadRequest, "Bucket"> & keyof CreateMultipartUploadRequest]: (Omit<CreateMultipartUploadRequest, "Bucket"> & CreateMultipartUploadRequest)[K]
    }>): Request<CreateMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMultipartUpload(
          this.ops["CreateMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketRequest, "Bucket"> & keyof DeleteBucketRequest]: (Omit<DeleteBucketRequest, "Bucket"> & DeleteBucketRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucket(
          this.ops["DeleteBucket"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & keyof DeleteBucketAnalyticsConfigurationRequest]: (Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & DeleteBucketAnalyticsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketAnalyticsConfiguration(
          this.ops["DeleteBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketCorsRequest, "Bucket"> & keyof DeleteBucketCorsRequest]: (Omit<DeleteBucketCorsRequest, "Bucket"> & DeleteBucketCorsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketCors(
          this.ops["DeleteBucketCors"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketEncryptionRequest, "Bucket"> & keyof DeleteBucketEncryptionRequest]: (Omit<DeleteBucketEncryptionRequest, "Bucket"> & DeleteBucketEncryptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketEncryption(
          this.ops["DeleteBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof DeleteBucketIntelligentTieringConfigurationRequest]: (Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & DeleteBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketIntelligentTieringConfiguration(
          this.ops["DeleteBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & keyof DeleteBucketInventoryConfigurationRequest]: (Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & DeleteBucketInventoryConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketInventoryConfiguration(
          this.ops["DeleteBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketLifecycleRequest, "Bucket"> & keyof DeleteBucketLifecycleRequest]: (Omit<DeleteBucketLifecycleRequest, "Bucket"> & DeleteBucketLifecycleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketLifecycle(
          this.ops["DeleteBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & keyof DeleteBucketMetricsConfigurationRequest]: (Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & DeleteBucketMetricsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketMetricsConfiguration(
          this.ops["DeleteBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & keyof DeleteBucketOwnershipControlsRequest]: (Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & DeleteBucketOwnershipControlsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketOwnershipControls(
          this.ops["DeleteBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketPolicyRequest, "Bucket"> & keyof DeleteBucketPolicyRequest]: (Omit<DeleteBucketPolicyRequest, "Bucket"> & DeleteBucketPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketPolicy(
          this.ops["DeleteBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketReplicationRequest, "Bucket"> & keyof DeleteBucketReplicationRequest]: (Omit<DeleteBucketReplicationRequest, "Bucket"> & DeleteBucketReplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketReplication(
          this.ops["DeleteBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketTaggingRequest, "Bucket"> & keyof DeleteBucketTaggingRequest]: (Omit<DeleteBucketTaggingRequest, "Bucket"> & DeleteBucketTaggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketTagging(
          this.ops["DeleteBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketWebsiteRequest, "Bucket"> & keyof DeleteBucketWebsiteRequest]: (Omit<DeleteBucketWebsiteRequest, "Bucket"> & DeleteBucketWebsiteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketWebsite(
          this.ops["DeleteBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectRequest, "Bucket"> & keyof DeleteObjectRequest]: (Omit<DeleteObjectRequest, "Bucket"> & DeleteObjectRequest)[K]
    }>): Request<DeleteObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObject(
          this.ops["DeleteObject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectTaggingRequest, "Bucket"> & keyof DeleteObjectTaggingRequest]: (Omit<DeleteObjectTaggingRequest, "Bucket"> & DeleteObjectTaggingRequest)[K]
    }>): Request<DeleteObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjectTagging(
          this.ops["DeleteObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectsRequest, "Bucket"> & keyof DeleteObjectsRequest]: (Omit<DeleteObjectsRequest, "Bucket"> & DeleteObjectsRequest)[K]
    }>): Request<DeleteObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjects(
          this.ops["DeleteObjects"].applicator.apply(partialParams)
        );
    }

    invokeDeletePublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<DeletePublicAccessBlockRequest, "Bucket"> & keyof DeletePublicAccessBlockRequest]: (Omit<DeletePublicAccessBlockRequest, "Bucket"> & DeletePublicAccessBlockRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicAccessBlock(
          this.ops["DeletePublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & keyof GetBucketAccelerateConfigurationRequest]: (Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & GetBucketAccelerateConfigurationRequest)[K]
    }>): Request<GetBucketAccelerateConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAccelerateConfiguration(
          this.ops["GetBucketAccelerateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAclRequest, "Bucket"> & keyof GetBucketAclRequest]: (Omit<GetBucketAclRequest, "Bucket"> & GetBucketAclRequest)[K]
    }>): Request<GetBucketAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAcl(
          this.ops["GetBucketAcl"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & keyof GetBucketAnalyticsConfigurationRequest]: (Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & GetBucketAnalyticsConfigurationRequest)[K]
    }>): Request<GetBucketAnalyticsConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAnalyticsConfiguration(
          this.ops["GetBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketCorsRequest, "Bucket"> & keyof GetBucketCorsRequest]: (Omit<GetBucketCorsRequest, "Bucket"> & GetBucketCorsRequest)[K]
    }>): Request<GetBucketCorsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketCors(
          this.ops["GetBucketCors"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketEncryptionRequest, "Bucket"> & keyof GetBucketEncryptionRequest]: (Omit<GetBucketEncryptionRequest, "Bucket"> & GetBucketEncryptionRequest)[K]
    }>): Request<GetBucketEncryptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketEncryption(
          this.ops["GetBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof GetBucketIntelligentTieringConfigurationRequest]: (Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & GetBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<GetBucketIntelligentTieringConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketIntelligentTieringConfiguration(
          this.ops["GetBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & keyof GetBucketInventoryConfigurationRequest]: (Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & GetBucketInventoryConfigurationRequest)[K]
    }>): Request<GetBucketInventoryConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketInventoryConfiguration(
          this.ops["GetBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLifecycleRequest, "Bucket"> & keyof GetBucketLifecycleRequest]: (Omit<GetBucketLifecycleRequest, "Bucket"> & GetBucketLifecycleRequest)[K]
    }>): Request<GetBucketLifecycleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycle(
          this.ops["GetBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & keyof GetBucketLifecycleConfigurationRequest]: (Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & GetBucketLifecycleConfigurationRequest)[K]
    }>): Request<GetBucketLifecycleConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLifecycleConfiguration(
          this.ops["GetBucketLifecycleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLocationRequest, "Bucket"> & keyof GetBucketLocationRequest]: (Omit<GetBucketLocationRequest, "Bucket"> & GetBucketLocationRequest)[K]
    }>): Request<GetBucketLocationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLocation(
          this.ops["GetBucketLocation"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLoggingRequest, "Bucket"> & keyof GetBucketLoggingRequest]: (Omit<GetBucketLoggingRequest, "Bucket"> & GetBucketLoggingRequest)[K]
    }>): Request<GetBucketLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketLogging(
          this.ops["GetBucketLogging"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & keyof GetBucketMetricsConfigurationRequest]: (Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & GetBucketMetricsConfigurationRequest)[K]
    }>): Request<GetBucketMetricsConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketMetricsConfiguration(
          this.ops["GetBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest]: (Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfigurationDeprecated, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotification(
          this.ops["GetBucketNotification"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest]: (Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketNotificationConfiguration(
          this.ops["GetBucketNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketOwnershipControlsRequest, "Bucket"> & keyof GetBucketOwnershipControlsRequest]: (Omit<GetBucketOwnershipControlsRequest, "Bucket"> & GetBucketOwnershipControlsRequest)[K]
    }>): Request<GetBucketOwnershipControlsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketOwnershipControls(
          this.ops["GetBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketPolicyRequest, "Bucket"> & keyof GetBucketPolicyRequest]: (Omit<GetBucketPolicyRequest, "Bucket"> & GetBucketPolicyRequest)[K]
    }>): Request<GetBucketPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicy(
          this.ops["GetBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketPolicyStatusRequest, "Bucket"> & keyof GetBucketPolicyStatusRequest]: (Omit<GetBucketPolicyStatusRequest, "Bucket"> & GetBucketPolicyStatusRequest)[K]
    }>): Request<GetBucketPolicyStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketPolicyStatus(
          this.ops["GetBucketPolicyStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketReplicationRequest, "Bucket"> & keyof GetBucketReplicationRequest]: (Omit<GetBucketReplicationRequest, "Bucket"> & GetBucketReplicationRequest)[K]
    }>): Request<GetBucketReplicationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketReplication(
          this.ops["GetBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketRequestPaymentRequest, "Bucket"> & keyof GetBucketRequestPaymentRequest]: (Omit<GetBucketRequestPaymentRequest, "Bucket"> & GetBucketRequestPaymentRequest)[K]
    }>): Request<GetBucketRequestPaymentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketRequestPayment(
          this.ops["GetBucketRequestPayment"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketTaggingRequest, "Bucket"> & keyof GetBucketTaggingRequest]: (Omit<GetBucketTaggingRequest, "Bucket"> & GetBucketTaggingRequest)[K]
    }>): Request<GetBucketTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketTagging(
          this.ops["GetBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketVersioningRequest, "Bucket"> & keyof GetBucketVersioningRequest]: (Omit<GetBucketVersioningRequest, "Bucket"> & GetBucketVersioningRequest)[K]
    }>): Request<GetBucketVersioningOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketVersioning(
          this.ops["GetBucketVersioning"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketWebsiteRequest, "Bucket"> & keyof GetBucketWebsiteRequest]: (Omit<GetBucketWebsiteRequest, "Bucket"> & GetBucketWebsiteRequest)[K]
    }>): Request<GetBucketWebsiteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketWebsite(
          this.ops["GetBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectRequest, "Bucket"> & keyof GetObjectRequest]: (Omit<GetObjectRequest, "Bucket"> & GetObjectRequest)[K]
    }>): Request<GetObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObject(
          this.ops["GetObject"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectAclRequest, "Bucket"> & keyof GetObjectAclRequest]: (Omit<GetObjectAclRequest, "Bucket"> & GetObjectAclRequest)[K]
    }>): Request<GetObjectAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectAcl(
          this.ops["GetObjectAcl"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectLegalHoldRequest, "Bucket"> & keyof GetObjectLegalHoldRequest]: (Omit<GetObjectLegalHoldRequest, "Bucket"> & GetObjectLegalHoldRequest)[K]
    }>): Request<GetObjectLegalHoldOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLegalHold(
          this.ops["GetObjectLegalHold"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectLockConfigurationRequest, "Bucket"> & keyof GetObjectLockConfigurationRequest]: (Omit<GetObjectLockConfigurationRequest, "Bucket"> & GetObjectLockConfigurationRequest)[K]
    }>): Request<GetObjectLockConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectLockConfiguration(
          this.ops["GetObjectLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectRetentionRequest, "Bucket"> & keyof GetObjectRetentionRequest]: (Omit<GetObjectRetentionRequest, "Bucket"> & GetObjectRetentionRequest)[K]
    }>): Request<GetObjectRetentionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectRetention(
          this.ops["GetObjectRetention"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectTaggingRequest, "Bucket"> & keyof GetObjectTaggingRequest]: (Omit<GetObjectTaggingRequest, "Bucket"> & GetObjectTaggingRequest)[K]
    }>): Request<GetObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTagging(
          this.ops["GetObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectTorrentRequest, "Bucket"> & keyof GetObjectTorrentRequest]: (Omit<GetObjectTorrentRequest, "Bucket"> & GetObjectTorrentRequest)[K]
    }>): Request<GetObjectTorrentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getObjectTorrent(
          this.ops["GetObjectTorrent"].applicator.apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<GetPublicAccessBlockRequest, "Bucket"> & keyof GetPublicAccessBlockRequest]: (Omit<GetPublicAccessBlockRequest, "Bucket"> & GetPublicAccessBlockRequest)[K]
    }>): Request<GetPublicAccessBlockOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicAccessBlock(
          this.ops["GetPublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeHeadBucket(partialParams: ToOptional<{
      [K in keyof Omit<HeadBucketRequest, "Bucket"> & keyof HeadBucketRequest]: (Omit<HeadBucketRequest, "Bucket"> & HeadBucketRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headBucket(
          this.ops["HeadBucket"].applicator.apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof Omit<HeadObjectRequest, "Bucket"> & keyof HeadObjectRequest]: (Omit<HeadObjectRequest, "Bucket"> & HeadObjectRequest)[K]
    }>): Request<HeadObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.headObject(
          this.ops["HeadObject"].applicator.apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & keyof ListBucketAnalyticsConfigurationsRequest]: (Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & ListBucketAnalyticsConfigurationsRequest)[K]
    }>): Request<ListBucketAnalyticsConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketAnalyticsConfigurations(
          this.ops["ListBucketAnalyticsConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & keyof ListBucketIntelligentTieringConfigurationsRequest]: (Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & ListBucketIntelligentTieringConfigurationsRequest)[K]
    }>): Request<ListBucketIntelligentTieringConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketIntelligentTieringConfigurations(
          this.ops["ListBucketIntelligentTieringConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & keyof ListBucketInventoryConfigurationsRequest]: (Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & ListBucketInventoryConfigurationsRequest)[K]
    }>): Request<ListBucketInventoryConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketInventoryConfigurations(
          this.ops["ListBucketInventoryConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & keyof ListBucketMetricsConfigurationsRequest]: (Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & ListBucketMetricsConfigurationsRequest)[K]
    }>): Request<ListBucketMetricsConfigurationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBucketMetricsConfigurations(
          this.ops["ListBucketMetricsConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof Omit<ListMultipartUploadsRequest, "Bucket"> & keyof ListMultipartUploadsRequest]: (Omit<ListMultipartUploadsRequest, "Bucket"> & ListMultipartUploadsRequest)[K]
    }>): Request<ListMultipartUploadsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMultipartUploads(
          this.ops["ListMultipartUploads"].applicator.apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectVersionsRequest, "Bucket"> & keyof ListObjectVersionsRequest]: (Omit<ListObjectVersionsRequest, "Bucket"> & ListObjectVersionsRequest)[K]
    }>): Request<ListObjectVersionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectVersions(
          this.ops["ListObjectVersions"].applicator.apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectsRequest, "Bucket"> & keyof ListObjectsRequest]: (Omit<ListObjectsRequest, "Bucket"> & ListObjectsRequest)[K]
    }>): Request<ListObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjects(
          this.ops["ListObjects"].applicator.apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectsV2Request, "Bucket"> & keyof ListObjectsV2Request]: (Omit<ListObjectsV2Request, "Bucket"> & ListObjectsV2Request)[K]
    }>): Request<ListObjectsV2Output, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listObjectsV2(
          this.ops["ListObjectsV2"].applicator.apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof Omit<ListPartsRequest, "Bucket"> & keyof ListPartsRequest]: (Omit<ListPartsRequest, "Bucket"> & ListPartsRequest)[K]
    }>): Request<ListPartsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParts(
          this.ops["ListParts"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & keyof PutBucketAccelerateConfigurationRequest]: (Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & PutBucketAccelerateConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAccelerateConfiguration(
          this.ops["PutBucketAccelerateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAcl(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAclRequest, "Bucket"> & keyof PutBucketAclRequest]: (Omit<PutBucketAclRequest, "Bucket"> & PutBucketAclRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAcl(
          this.ops["PutBucketAcl"].applicator.apply(partialParams)
        );
    }

    invokePutBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & keyof PutBucketAnalyticsConfigurationRequest]: (Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & PutBucketAnalyticsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketAnalyticsConfiguration(
          this.ops["PutBucketAnalyticsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketCorsRequest, "Bucket"> & keyof PutBucketCorsRequest]: (Omit<PutBucketCorsRequest, "Bucket"> & PutBucketCorsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketCors(
          this.ops["PutBucketCors"].applicator.apply(partialParams)
        );
    }

    invokePutBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketEncryptionRequest, "Bucket"> & keyof PutBucketEncryptionRequest]: (Omit<PutBucketEncryptionRequest, "Bucket"> & PutBucketEncryptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketEncryption(
          this.ops["PutBucketEncryption"].applicator.apply(partialParams)
        );
    }

    invokePutBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof PutBucketIntelligentTieringConfigurationRequest]: (Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & PutBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketIntelligentTieringConfiguration(
          this.ops["PutBucketIntelligentTieringConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & keyof PutBucketInventoryConfigurationRequest]: (Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & PutBucketInventoryConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketInventoryConfiguration(
          this.ops["PutBucketInventoryConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLifecycleRequest, "Bucket"> & keyof PutBucketLifecycleRequest]: (Omit<PutBucketLifecycleRequest, "Bucket"> & PutBucketLifecycleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycle(
          this.ops["PutBucketLifecycle"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & keyof PutBucketLifecycleConfigurationRequest]: (Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & PutBucketLifecycleConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLifecycleConfiguration(
          this.ops["PutBucketLifecycleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketLogging(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLoggingRequest, "Bucket"> & keyof PutBucketLoggingRequest]: (Omit<PutBucketLoggingRequest, "Bucket"> & PutBucketLoggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketLogging(
          this.ops["PutBucketLogging"].applicator.apply(partialParams)
        );
    }

    invokePutBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & keyof PutBucketMetricsConfigurationRequest]: (Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & PutBucketMetricsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketMetricsConfiguration(
          this.ops["PutBucketMetricsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketNotification(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketNotificationRequest, "Bucket"> & keyof PutBucketNotificationRequest]: (Omit<PutBucketNotificationRequest, "Bucket"> & PutBucketNotificationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotification(
          this.ops["PutBucketNotification"].applicator.apply(partialParams)
        );
    }

    invokePutBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & keyof PutBucketNotificationConfigurationRequest]: (Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & PutBucketNotificationConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketNotificationConfiguration(
          this.ops["PutBucketNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketOwnershipControlsRequest, "Bucket"> & keyof PutBucketOwnershipControlsRequest]: (Omit<PutBucketOwnershipControlsRequest, "Bucket"> & PutBucketOwnershipControlsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketOwnershipControls(
          this.ops["PutBucketOwnershipControls"].applicator.apply(partialParams)
        );
    }

    invokePutBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketPolicyRequest, "Bucket"> & keyof PutBucketPolicyRequest]: (Omit<PutBucketPolicyRequest, "Bucket"> & PutBucketPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketPolicy(
          this.ops["PutBucketPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketReplicationRequest, "Bucket"> & keyof PutBucketReplicationRequest]: (Omit<PutBucketReplicationRequest, "Bucket"> & PutBucketReplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketReplication(
          this.ops["PutBucketReplication"].applicator.apply(partialParams)
        );
    }

    invokePutBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketRequestPaymentRequest, "Bucket"> & keyof PutBucketRequestPaymentRequest]: (Omit<PutBucketRequestPaymentRequest, "Bucket"> & PutBucketRequestPaymentRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketRequestPayment(
          this.ops["PutBucketRequestPayment"].applicator.apply(partialParams)
        );
    }

    invokePutBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketTaggingRequest, "Bucket"> & keyof PutBucketTaggingRequest]: (Omit<PutBucketTaggingRequest, "Bucket"> & PutBucketTaggingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketTagging(
          this.ops["PutBucketTagging"].applicator.apply(partialParams)
        );
    }

    invokePutBucketVersioning(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketVersioningRequest, "Bucket"> & keyof PutBucketVersioningRequest]: (Omit<PutBucketVersioningRequest, "Bucket"> & PutBucketVersioningRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketVersioning(
          this.ops["PutBucketVersioning"].applicator.apply(partialParams)
        );
    }

    invokePutBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketWebsiteRequest, "Bucket"> & keyof PutBucketWebsiteRequest]: (Omit<PutBucketWebsiteRequest, "Bucket"> & PutBucketWebsiteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBucketWebsite(
          this.ops["PutBucketWebsite"].applicator.apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectRequest, "Bucket"> & keyof PutObjectRequest]: (Omit<PutObjectRequest, "Bucket"> & PutObjectRequest)[K]
    }>): Request<PutObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObject(
          this.ops["PutObject"].applicator.apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectAclRequest, "Bucket"> & keyof PutObjectAclRequest]: (Omit<PutObjectAclRequest, "Bucket"> & PutObjectAclRequest)[K]
    }>): Request<PutObjectAclOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectAcl(
          this.ops["PutObjectAcl"].applicator.apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectLegalHoldRequest, "Bucket"> & keyof PutObjectLegalHoldRequest]: (Omit<PutObjectLegalHoldRequest, "Bucket"> & PutObjectLegalHoldRequest)[K]
    }>): Request<PutObjectLegalHoldOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLegalHold(
          this.ops["PutObjectLegalHold"].applicator.apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectLockConfigurationRequest, "Bucket"> & keyof PutObjectLockConfigurationRequest]: (Omit<PutObjectLockConfigurationRequest, "Bucket"> & PutObjectLockConfigurationRequest)[K]
    }>): Request<PutObjectLockConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectLockConfiguration(
          this.ops["PutObjectLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectRetentionRequest, "Bucket"> & keyof PutObjectRetentionRequest]: (Omit<PutObjectRetentionRequest, "Bucket"> & PutObjectRetentionRequest)[K]
    }>): Request<PutObjectRetentionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectRetention(
          this.ops["PutObjectRetention"].applicator.apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectTaggingRequest, "Bucket"> & keyof PutObjectTaggingRequest]: (Omit<PutObjectTaggingRequest, "Bucket"> & PutObjectTaggingRequest)[K]
    }>): Request<PutObjectTaggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putObjectTagging(
          this.ops["PutObjectTagging"].applicator.apply(partialParams)
        );
    }

    invokePutPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<PutPublicAccessBlockRequest, "Bucket"> & keyof PutPublicAccessBlockRequest]: (Omit<PutPublicAccessBlockRequest, "Bucket"> & PutPublicAccessBlockRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPublicAccessBlock(
          this.ops["PutPublicAccessBlock"].applicator.apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof Omit<RestoreObjectRequest, "Bucket"> & keyof RestoreObjectRequest]: (Omit<RestoreObjectRequest, "Bucket"> & RestoreObjectRequest)[K]
    }>): Request<RestoreObjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreObject(
          this.ops["RestoreObject"].applicator.apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof Omit<SelectObjectContentRequest, "Bucket"> & keyof SelectObjectContentRequest]: (Omit<SelectObjectContentRequest, "Bucket"> & SelectObjectContentRequest)[K]
    }>): Request<SelectObjectContentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.selectObjectContent(
          this.ops["SelectObjectContent"].applicator.apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof Omit<UploadPartRequest, "Bucket"> & keyof UploadPartRequest]: (Omit<UploadPartRequest, "Bucket"> & UploadPartRequest)[K]
    }>): Request<UploadPartOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPart(
          this.ops["UploadPart"].applicator.apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof Omit<UploadPartCopyRequest, "Bucket"> & keyof UploadPartCopyRequest]: (Omit<UploadPartCopyRequest, "Bucket"> & UploadPartCopyRequest)[K]
    }>): Request<UploadPartCopyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadPartCopy(
          this.ops["UploadPartCopy"].applicator.apply(partialParams)
        );
    }

    invokeWriteGetObjectResponse(partialParams: ToOptional<{
      [K in keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest]: (WriteGetObjectResponseRequest & WriteGetObjectResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.writeGetObjectResponse(
          this.ops["WriteGetObjectResponse"].applicator.apply(partialParams)
        );
    }
}