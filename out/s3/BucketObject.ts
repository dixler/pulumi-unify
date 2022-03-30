
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.s3.BucketObject {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.s3.BucketObject>) {
        super(...args)
        this.client = new awssdk.S3()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/s3-2006-03-01.normal.json"), this.client)
    }

    invokeAbortMultipartUpload(partialParams: ToOptional<{
      [K in keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest]: (AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest & AbortMultipartUploadRequest)[K]
    }>): AbortMultipartUploadOutput {
        return this.client.abortMultipartUpload(
            this.ops["AbortMultipartUpload"].apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadRequest & keyof Omit<CompleteMultipartUploadRequest, "Bucket"> & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest & keyof CompleteMultipartUploadRequest]: (CompleteMultipartUploadRequest & Omit<CompleteMultipartUploadRequest, "Bucket"> & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest & CompleteMultipartUploadRequest)[K]
    }>): CompleteMultipartUploadOutput {
        return this.client.completeMultipartUpload(
            this.ops["CompleteMultipartUpload"].apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof CopyObjectRequest & keyof Omit<CopyObjectRequest, "Bucket"> & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest & keyof CopyObjectRequest]: (CopyObjectRequest & Omit<CopyObjectRequest, "Bucket"> & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest & CopyObjectRequest)[K]
    }>): CopyObjectOutput {
        return this.client.copyObject(
            this.ops["CopyObject"].apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest & keyof Omit<CreateBucketRequest, "Bucket"> & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest]: (CreateBucketRequest & Omit<CreateBucketRequest, "Bucket"> & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest)[K]
    }>): CreateBucketOutput {
        return this.client.createBucket(
            this.ops["CreateBucket"].apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof CreateMultipartUploadRequest & keyof Omit<CreateMultipartUploadRequest, "Bucket"> & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest & keyof CreateMultipartUploadRequest]: (CreateMultipartUploadRequest & Omit<CreateMultipartUploadRequest, "Bucket"> & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest & CreateMultipartUploadRequest)[K]
    }>): CreateMultipartUploadOutput {
        return this.client.createMultipartUpload(
            this.ops["CreateMultipartUpload"].apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof DeleteBucketRequest & keyof Omit<DeleteBucketRequest, "Bucket"> & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest]: (DeleteBucketRequest & Omit<DeleteBucketRequest, "Bucket"> & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest)[K]
    }>): void {
        return this.client.deleteBucket(
            this.ops["DeleteBucket"].apply(partialParams)
        );
    }

    invokeDeleteBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketAnalyticsConfigurationRequest & keyof Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest & keyof DeleteBucketAnalyticsConfigurationRequest]: (DeleteBucketAnalyticsConfigurationRequest & Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest & DeleteBucketAnalyticsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketAnalyticsConfiguration(
            this.ops["DeleteBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketCors(partialParams: ToOptional<{
      [K in keyof DeleteBucketCorsRequest & keyof Omit<DeleteBucketCorsRequest, "Bucket"> & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest & keyof DeleteBucketCorsRequest]: (DeleteBucketCorsRequest & Omit<DeleteBucketCorsRequest, "Bucket"> & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest & DeleteBucketCorsRequest)[K]
    }>): void {
        return this.client.deleteBucketCors(
            this.ops["DeleteBucketCors"].apply(partialParams)
        );
    }

    invokeDeleteBucketEncryption(partialParams: ToOptional<{
      [K in keyof DeleteBucketEncryptionRequest & keyof Omit<DeleteBucketEncryptionRequest, "Bucket"> & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest & keyof DeleteBucketEncryptionRequest]: (DeleteBucketEncryptionRequest & Omit<DeleteBucketEncryptionRequest, "Bucket"> & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest & DeleteBucketEncryptionRequest)[K]
    }>): void {
        return this.client.deleteBucketEncryption(
            this.ops["DeleteBucketEncryption"].apply(partialParams)
        );
    }

    invokeDeleteBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest & keyof DeleteBucketIntelligentTieringConfigurationRequest]: (DeleteBucketIntelligentTieringConfigurationRequest & Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest & DeleteBucketIntelligentTieringConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketIntelligentTieringConfiguration(
            this.ops["DeleteBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketInventoryConfigurationRequest & keyof Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest & keyof DeleteBucketInventoryConfigurationRequest]: (DeleteBucketInventoryConfigurationRequest & Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest & DeleteBucketInventoryConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketInventoryConfiguration(
            this.ops["DeleteBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketLifecycle(partialParams: ToOptional<{
      [K in keyof DeleteBucketLifecycleRequest & keyof Omit<DeleteBucketLifecycleRequest, "Bucket"> & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest & keyof DeleteBucketLifecycleRequest]: (DeleteBucketLifecycleRequest & Omit<DeleteBucketLifecycleRequest, "Bucket"> & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest & DeleteBucketLifecycleRequest)[K]
    }>): void {
        return this.client.deleteBucketLifecycle(
            this.ops["DeleteBucketLifecycle"].apply(partialParams)
        );
    }

    invokeDeleteBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBucketMetricsConfigurationRequest & keyof Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest & keyof DeleteBucketMetricsConfigurationRequest]: (DeleteBucketMetricsConfigurationRequest & Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest & DeleteBucketMetricsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketMetricsConfiguration(
            this.ops["DeleteBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof DeleteBucketOwnershipControlsRequest & keyof Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest & keyof DeleteBucketOwnershipControlsRequest]: (DeleteBucketOwnershipControlsRequest & Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest & DeleteBucketOwnershipControlsRequest)[K]
    }>): void {
        return this.client.deleteBucketOwnershipControls(
            this.ops["DeleteBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeDeleteBucketPolicy(partialParams: ToOptional<{
      [K in keyof DeleteBucketPolicyRequest & keyof Omit<DeleteBucketPolicyRequest, "Bucket"> & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest & keyof DeleteBucketPolicyRequest]: (DeleteBucketPolicyRequest & Omit<DeleteBucketPolicyRequest, "Bucket"> & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest & DeleteBucketPolicyRequest)[K]
    }>): void {
        return this.client.deleteBucketPolicy(
            this.ops["DeleteBucketPolicy"].apply(partialParams)
        );
    }

    invokeDeleteBucketReplication(partialParams: ToOptional<{
      [K in keyof DeleteBucketReplicationRequest & keyof Omit<DeleteBucketReplicationRequest, "Bucket"> & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest & keyof DeleteBucketReplicationRequest]: (DeleteBucketReplicationRequest & Omit<DeleteBucketReplicationRequest, "Bucket"> & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest & DeleteBucketReplicationRequest)[K]
    }>): void {
        return this.client.deleteBucketReplication(
            this.ops["DeleteBucketReplication"].apply(partialParams)
        );
    }

    invokeDeleteBucketTagging(partialParams: ToOptional<{
      [K in keyof DeleteBucketTaggingRequest & keyof Omit<DeleteBucketTaggingRequest, "Bucket"> & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest & keyof DeleteBucketTaggingRequest]: (DeleteBucketTaggingRequest & Omit<DeleteBucketTaggingRequest, "Bucket"> & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest & DeleteBucketTaggingRequest)[K]
    }>): void {
        return this.client.deleteBucketTagging(
            this.ops["DeleteBucketTagging"].apply(partialParams)
        );
    }

    invokeDeleteBucketWebsite(partialParams: ToOptional<{
      [K in keyof DeleteBucketWebsiteRequest & keyof Omit<DeleteBucketWebsiteRequest, "Bucket"> & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest & keyof DeleteBucketWebsiteRequest]: (DeleteBucketWebsiteRequest & Omit<DeleteBucketWebsiteRequest, "Bucket"> & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest & DeleteBucketWebsiteRequest)[K]
    }>): void {
        return this.client.deleteBucketWebsite(
            this.ops["DeleteBucketWebsite"].apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof DeleteObjectRequest & keyof Omit<DeleteObjectRequest, "Bucket"> & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest & keyof DeleteObjectRequest]: (DeleteObjectRequest & Omit<DeleteObjectRequest, "Bucket"> & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest & DeleteObjectRequest)[K]
    }>): DeleteObjectOutput {
        return this.client.deleteObject(
            this.ops["DeleteObject"].apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof DeleteObjectTaggingRequest & keyof Omit<DeleteObjectTaggingRequest, "Bucket"> & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest & keyof DeleteObjectTaggingRequest]: (DeleteObjectTaggingRequest & Omit<DeleteObjectTaggingRequest, "Bucket"> & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest & DeleteObjectTaggingRequest)[K]
    }>): DeleteObjectTaggingOutput {
        return this.client.deleteObjectTagging(
            this.ops["DeleteObjectTagging"].apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof DeleteObjectsRequest & keyof Omit<DeleteObjectsRequest, "Bucket"> & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest & keyof DeleteObjectsRequest]: (DeleteObjectsRequest & Omit<DeleteObjectsRequest, "Bucket"> & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest & DeleteObjectsRequest)[K]
    }>): DeleteObjectsOutput {
        return this.client.deleteObjects(
            this.ops["DeleteObjects"].apply(partialParams)
        );
    }

    invokeDeletePublicAccessBlock(partialParams: ToOptional<{
      [K in keyof DeletePublicAccessBlockRequest & keyof Omit<DeletePublicAccessBlockRequest, "Bucket"> & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest & keyof DeletePublicAccessBlockRequest]: (DeletePublicAccessBlockRequest & Omit<DeletePublicAccessBlockRequest, "Bucket"> & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest & DeletePublicAccessBlockRequest)[K]
    }>): void {
        return this.client.deletePublicAccessBlock(
            this.ops["DeletePublicAccessBlock"].apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAccelerateConfigurationRequest & keyof Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest & keyof GetBucketAccelerateConfigurationRequest]: (GetBucketAccelerateConfigurationRequest & Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest & GetBucketAccelerateConfigurationRequest)[K]
    }>): GetBucketAccelerateConfigurationOutput {
        return this.client.getBucketAccelerateConfiguration(
            this.ops["GetBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof GetBucketAclRequest & keyof Omit<GetBucketAclRequest, "Bucket"> & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest & keyof GetBucketAclRequest]: (GetBucketAclRequest & Omit<GetBucketAclRequest, "Bucket"> & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest & GetBucketAclRequest)[K]
    }>): GetBucketAclOutput {
        return this.client.getBucketAcl(
            this.ops["GetBucketAcl"].apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAnalyticsConfigurationRequest & keyof Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest & keyof GetBucketAnalyticsConfigurationRequest]: (GetBucketAnalyticsConfigurationRequest & Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest & GetBucketAnalyticsConfigurationRequest)[K]
    }>): GetBucketAnalyticsConfigurationOutput {
        return this.client.getBucketAnalyticsConfiguration(
            this.ops["GetBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof GetBucketCorsRequest & keyof Omit<GetBucketCorsRequest, "Bucket"> & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest & keyof GetBucketCorsRequest]: (GetBucketCorsRequest & Omit<GetBucketCorsRequest, "Bucket"> & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest & GetBucketCorsRequest)[K]
    }>): GetBucketCorsOutput {
        return this.client.getBucketCors(
            this.ops["GetBucketCors"].apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof GetBucketEncryptionRequest & keyof Omit<GetBucketEncryptionRequest, "Bucket"> & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest & keyof GetBucketEncryptionRequest]: (GetBucketEncryptionRequest & Omit<GetBucketEncryptionRequest, "Bucket"> & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest & GetBucketEncryptionRequest)[K]
    }>): GetBucketEncryptionOutput {
        return this.client.getBucketEncryption(
            this.ops["GetBucketEncryption"].apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketIntelligentTieringConfigurationRequest & keyof Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest & keyof GetBucketIntelligentTieringConfigurationRequest]: (GetBucketIntelligentTieringConfigurationRequest & Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest & GetBucketIntelligentTieringConfigurationRequest)[K]
    }>): GetBucketIntelligentTieringConfigurationOutput {
        return this.client.getBucketIntelligentTieringConfiguration(
            this.ops["GetBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketInventoryConfigurationRequest & keyof Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest & keyof GetBucketInventoryConfigurationRequest]: (GetBucketInventoryConfigurationRequest & Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest & GetBucketInventoryConfigurationRequest)[K]
    }>): GetBucketInventoryConfigurationOutput {
        return this.client.getBucketInventoryConfiguration(
            this.ops["GetBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleRequest & keyof Omit<GetBucketLifecycleRequest, "Bucket"> & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest & keyof GetBucketLifecycleRequest]: (GetBucketLifecycleRequest & Omit<GetBucketLifecycleRequest, "Bucket"> & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest & GetBucketLifecycleRequest)[K]
    }>): GetBucketLifecycleOutput {
        return this.client.getBucketLifecycle(
            this.ops["GetBucketLifecycle"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleConfigurationRequest & keyof Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest & keyof GetBucketLifecycleConfigurationRequest]: (GetBucketLifecycleConfigurationRequest & Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest & GetBucketLifecycleConfigurationRequest)[K]
    }>): GetBucketLifecycleConfigurationOutput {
        return this.client.getBucketLifecycleConfiguration(
            this.ops["GetBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof GetBucketLocationRequest & keyof Omit<GetBucketLocationRequest, "Bucket"> & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest & keyof GetBucketLocationRequest]: (GetBucketLocationRequest & Omit<GetBucketLocationRequest, "Bucket"> & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest & GetBucketLocationRequest)[K]
    }>): GetBucketLocationOutput {
        return this.client.getBucketLocation(
            this.ops["GetBucketLocation"].apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof GetBucketLoggingRequest & keyof Omit<GetBucketLoggingRequest, "Bucket"> & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest & keyof GetBucketLoggingRequest]: (GetBucketLoggingRequest & Omit<GetBucketLoggingRequest, "Bucket"> & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest & GetBucketLoggingRequest)[K]
    }>): GetBucketLoggingOutput {
        return this.client.getBucketLogging(
            this.ops["GetBucketLogging"].apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketMetricsConfigurationRequest & keyof Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest & keyof GetBucketMetricsConfigurationRequest]: (GetBucketMetricsConfigurationRequest & Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest & GetBucketMetricsConfigurationRequest)[K]
    }>): GetBucketMetricsConfigurationOutput {
        return this.client.getBucketMetricsConfiguration(
            this.ops["GetBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest & keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest]: (GetBucketNotificationConfigurationRequest & Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest)[K]
    }>): NotificationConfigurationDeprecated {
        return this.client.getBucketNotification(
            this.ops["GetBucketNotification"].apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest & keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest & keyof GetBucketNotificationConfigurationRequest]: (GetBucketNotificationConfigurationRequest & Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest & GetBucketNotificationConfigurationRequest)[K]
    }>): NotificationConfiguration {
        return this.client.getBucketNotificationConfiguration(
            this.ops["GetBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof GetBucketOwnershipControlsRequest & keyof Omit<GetBucketOwnershipControlsRequest, "Bucket"> & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest & keyof GetBucketOwnershipControlsRequest]: (GetBucketOwnershipControlsRequest & Omit<GetBucketOwnershipControlsRequest, "Bucket"> & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest & GetBucketOwnershipControlsRequest)[K]
    }>): GetBucketOwnershipControlsOutput {
        return this.client.getBucketOwnershipControls(
            this.ops["GetBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyRequest & keyof Omit<GetBucketPolicyRequest, "Bucket"> & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest & keyof GetBucketPolicyRequest]: (GetBucketPolicyRequest & Omit<GetBucketPolicyRequest, "Bucket"> & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest & GetBucketPolicyRequest)[K]
    }>): GetBucketPolicyOutput {
        return this.client.getBucketPolicy(
            this.ops["GetBucketPolicy"].apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyStatusRequest & keyof Omit<GetBucketPolicyStatusRequest, "Bucket"> & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest & keyof GetBucketPolicyStatusRequest]: (GetBucketPolicyStatusRequest & Omit<GetBucketPolicyStatusRequest, "Bucket"> & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest & GetBucketPolicyStatusRequest)[K]
    }>): GetBucketPolicyStatusOutput {
        return this.client.getBucketPolicyStatus(
            this.ops["GetBucketPolicyStatus"].apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof GetBucketReplicationRequest & keyof Omit<GetBucketReplicationRequest, "Bucket"> & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest & keyof GetBucketReplicationRequest]: (GetBucketReplicationRequest & Omit<GetBucketReplicationRequest, "Bucket"> & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest & GetBucketReplicationRequest)[K]
    }>): GetBucketReplicationOutput {
        return this.client.getBucketReplication(
            this.ops["GetBucketReplication"].apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof GetBucketRequestPaymentRequest & keyof Omit<GetBucketRequestPaymentRequest, "Bucket"> & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest & keyof GetBucketRequestPaymentRequest]: (GetBucketRequestPaymentRequest & Omit<GetBucketRequestPaymentRequest, "Bucket"> & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest & GetBucketRequestPaymentRequest)[K]
    }>): GetBucketRequestPaymentOutput {
        return this.client.getBucketRequestPayment(
            this.ops["GetBucketRequestPayment"].apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof GetBucketTaggingRequest & keyof Omit<GetBucketTaggingRequest, "Bucket"> & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest & keyof GetBucketTaggingRequest]: (GetBucketTaggingRequest & Omit<GetBucketTaggingRequest, "Bucket"> & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest & GetBucketTaggingRequest)[K]
    }>): GetBucketTaggingOutput {
        return this.client.getBucketTagging(
            this.ops["GetBucketTagging"].apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof GetBucketVersioningRequest & keyof Omit<GetBucketVersioningRequest, "Bucket"> & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest & keyof GetBucketVersioningRequest]: (GetBucketVersioningRequest & Omit<GetBucketVersioningRequest, "Bucket"> & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest & GetBucketVersioningRequest)[K]
    }>): GetBucketVersioningOutput {
        return this.client.getBucketVersioning(
            this.ops["GetBucketVersioning"].apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof GetBucketWebsiteRequest & keyof Omit<GetBucketWebsiteRequest, "Bucket"> & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest & keyof GetBucketWebsiteRequest]: (GetBucketWebsiteRequest & Omit<GetBucketWebsiteRequest, "Bucket"> & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest & GetBucketWebsiteRequest)[K]
    }>): GetBucketWebsiteOutput {
        return this.client.getBucketWebsite(
            this.ops["GetBucketWebsite"].apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof GetObjectRequest & keyof Omit<GetObjectRequest, "Bucket"> & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest & keyof GetObjectRequest]: (GetObjectRequest & Omit<GetObjectRequest, "Bucket"> & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest & GetObjectRequest)[K]
    }>): GetObjectOutput {
        return this.client.getObject(
            this.ops["GetObject"].apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof GetObjectAclRequest & keyof Omit<GetObjectAclRequest, "Bucket"> & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest & keyof GetObjectAclRequest]: (GetObjectAclRequest & Omit<GetObjectAclRequest, "Bucket"> & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest & GetObjectAclRequest)[K]
    }>): GetObjectAclOutput {
        return this.client.getObjectAcl(
            this.ops["GetObjectAcl"].apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof GetObjectLegalHoldRequest & keyof Omit<GetObjectLegalHoldRequest, "Bucket"> & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest & keyof GetObjectLegalHoldRequest]: (GetObjectLegalHoldRequest & Omit<GetObjectLegalHoldRequest, "Bucket"> & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest & GetObjectLegalHoldRequest)[K]
    }>): GetObjectLegalHoldOutput {
        return this.client.getObjectLegalHold(
            this.ops["GetObjectLegalHold"].apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof GetObjectLockConfigurationRequest & keyof Omit<GetObjectLockConfigurationRequest, "Bucket"> & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest & keyof GetObjectLockConfigurationRequest]: (GetObjectLockConfigurationRequest & Omit<GetObjectLockConfigurationRequest, "Bucket"> & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest & GetObjectLockConfigurationRequest)[K]
    }>): GetObjectLockConfigurationOutput {
        return this.client.getObjectLockConfiguration(
            this.ops["GetObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof GetObjectRetentionRequest & keyof Omit<GetObjectRetentionRequest, "Bucket"> & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest & keyof GetObjectRetentionRequest]: (GetObjectRetentionRequest & Omit<GetObjectRetentionRequest, "Bucket"> & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest & GetObjectRetentionRequest)[K]
    }>): GetObjectRetentionOutput {
        return this.client.getObjectRetention(
            this.ops["GetObjectRetention"].apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof GetObjectTaggingRequest & keyof Omit<GetObjectTaggingRequest, "Bucket"> & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest & keyof GetObjectTaggingRequest]: (GetObjectTaggingRequest & Omit<GetObjectTaggingRequest, "Bucket"> & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest & GetObjectTaggingRequest)[K]
    }>): GetObjectTaggingOutput {
        return this.client.getObjectTagging(
            this.ops["GetObjectTagging"].apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof GetObjectTorrentRequest & keyof Omit<GetObjectTorrentRequest, "Bucket"> & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest & keyof GetObjectTorrentRequest]: (GetObjectTorrentRequest & Omit<GetObjectTorrentRequest, "Bucket"> & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest & GetObjectTorrentRequest)[K]
    }>): GetObjectTorrentOutput {
        return this.client.getObjectTorrent(
            this.ops["GetObjectTorrent"].apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof GetPublicAccessBlockRequest & keyof Omit<GetPublicAccessBlockRequest, "Bucket"> & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest & keyof GetPublicAccessBlockRequest]: (GetPublicAccessBlockRequest & Omit<GetPublicAccessBlockRequest, "Bucket"> & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest & GetPublicAccessBlockRequest)[K]
    }>): GetPublicAccessBlockOutput {
        return this.client.getPublicAccessBlock(
            this.ops["GetPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeHeadBucket(partialParams: ToOptional<{
      [K in keyof HeadBucketRequest & keyof Omit<HeadBucketRequest, "Bucket"> & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest & keyof HeadBucketRequest]: (HeadBucketRequest & Omit<HeadBucketRequest, "Bucket"> & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest & HeadBucketRequest)[K]
    }>): void {
        return this.client.headBucket(
            this.ops["HeadBucket"].apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof HeadObjectRequest & keyof Omit<HeadObjectRequest, "Bucket"> & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest & keyof HeadObjectRequest]: (HeadObjectRequest & Omit<HeadObjectRequest, "Bucket"> & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest & HeadObjectRequest)[K]
    }>): HeadObjectOutput {
        return this.client.headObject(
            this.ops["HeadObject"].apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketAnalyticsConfigurationsRequest & keyof Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest & keyof ListBucketAnalyticsConfigurationsRequest]: (ListBucketAnalyticsConfigurationsRequest & Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest & ListBucketAnalyticsConfigurationsRequest)[K]
    }>): ListBucketAnalyticsConfigurationsOutput {
        return this.client.listBucketAnalyticsConfigurations(
            this.ops["ListBucketAnalyticsConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketIntelligentTieringConfigurationsRequest & keyof Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest & keyof ListBucketIntelligentTieringConfigurationsRequest]: (ListBucketIntelligentTieringConfigurationsRequest & Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest & ListBucketIntelligentTieringConfigurationsRequest)[K]
    }>): ListBucketIntelligentTieringConfigurationsOutput {
        return this.client.listBucketIntelligentTieringConfigurations(
            this.ops["ListBucketIntelligentTieringConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketInventoryConfigurationsRequest & keyof Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest & keyof ListBucketInventoryConfigurationsRequest]: (ListBucketInventoryConfigurationsRequest & Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest & ListBucketInventoryConfigurationsRequest)[K]
    }>): ListBucketInventoryConfigurationsOutput {
        return this.client.listBucketInventoryConfigurations(
            this.ops["ListBucketInventoryConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketMetricsConfigurationsRequest & keyof Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest & keyof ListBucketMetricsConfigurationsRequest]: (ListBucketMetricsConfigurationsRequest & Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest & ListBucketMetricsConfigurationsRequest)[K]
    }>): ListBucketMetricsConfigurationsOutput {
        return this.client.listBucketMetricsConfigurations(
            this.ops["ListBucketMetricsConfigurations"].apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsRequest & keyof Omit<ListMultipartUploadsRequest, "Bucket"> & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest & keyof ListMultipartUploadsRequest]: (ListMultipartUploadsRequest & Omit<ListMultipartUploadsRequest, "Bucket"> & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest & ListMultipartUploadsRequest)[K]
    }>): ListMultipartUploadsOutput {
        return this.client.listMultipartUploads(
            this.ops["ListMultipartUploads"].apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof ListObjectVersionsRequest & keyof Omit<ListObjectVersionsRequest, "Bucket"> & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest & keyof ListObjectVersionsRequest]: (ListObjectVersionsRequest & Omit<ListObjectVersionsRequest, "Bucket"> & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest & ListObjectVersionsRequest)[K]
    }>): ListObjectVersionsOutput {
        return this.client.listObjectVersions(
            this.ops["ListObjectVersions"].apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof ListObjectsRequest & keyof Omit<ListObjectsRequest, "Bucket"> & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest & keyof ListObjectsRequest]: (ListObjectsRequest & Omit<ListObjectsRequest, "Bucket"> & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest & ListObjectsRequest)[K]
    }>): ListObjectsOutput {
        return this.client.listObjects(
            this.ops["ListObjects"].apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof ListObjectsV2Request & keyof Omit<ListObjectsV2Request, "Bucket"> & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request & keyof ListObjectsV2Request]: (ListObjectsV2Request & Omit<ListObjectsV2Request, "Bucket"> & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request & ListObjectsV2Request)[K]
    }>): ListObjectsV2Output {
        return this.client.listObjectsV2(
            this.ops["ListObjectsV2"].apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsRequest & keyof Omit<ListPartsRequest, "Bucket"> & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest & keyof ListPartsRequest]: (ListPartsRequest & Omit<ListPartsRequest, "Bucket"> & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest & ListPartsRequest)[K]
    }>): ListPartsOutput {
        return this.client.listParts(
            this.ops["ListParts"].apply(partialParams)
        );
    }

    invokePutBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketAccelerateConfigurationRequest & keyof Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest & keyof PutBucketAccelerateConfigurationRequest]: (PutBucketAccelerateConfigurationRequest & Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest & PutBucketAccelerateConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketAccelerateConfiguration(
            this.ops["PutBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketAcl(partialParams: ToOptional<{
      [K in keyof PutBucketAclRequest & keyof Omit<PutBucketAclRequest, "Bucket"> & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest & keyof PutBucketAclRequest]: (PutBucketAclRequest & Omit<PutBucketAclRequest, "Bucket"> & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest & PutBucketAclRequest)[K]
    }>): void {
        return this.client.putBucketAcl(
            this.ops["PutBucketAcl"].apply(partialParams)
        );
    }

    invokePutBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketAnalyticsConfigurationRequest & keyof Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest & keyof PutBucketAnalyticsConfigurationRequest]: (PutBucketAnalyticsConfigurationRequest & Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest & PutBucketAnalyticsConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketAnalyticsConfiguration(
            this.ops["PutBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketCors(partialParams: ToOptional<{
      [K in keyof PutBucketCorsRequest & keyof Omit<PutBucketCorsRequest, "Bucket"> & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest & keyof PutBucketCorsRequest]: (PutBucketCorsRequest & Omit<PutBucketCorsRequest, "Bucket"> & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest & PutBucketCorsRequest)[K]
    }>): void {
        return this.client.putBucketCors(
            this.ops["PutBucketCors"].apply(partialParams)
        );
    }

    invokePutBucketEncryption(partialParams: ToOptional<{
      [K in keyof PutBucketEncryptionRequest & keyof Omit<PutBucketEncryptionRequest, "Bucket"> & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest & keyof PutBucketEncryptionRequest]: (PutBucketEncryptionRequest & Omit<PutBucketEncryptionRequest, "Bucket"> & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest & PutBucketEncryptionRequest)[K]
    }>): void {
        return this.client.putBucketEncryption(
            this.ops["PutBucketEncryption"].apply(partialParams)
        );
    }

    invokePutBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketIntelligentTieringConfigurationRequest & keyof Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest & keyof PutBucketIntelligentTieringConfigurationRequest]: (PutBucketIntelligentTieringConfigurationRequest & Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest & PutBucketIntelligentTieringConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketIntelligentTieringConfiguration(
            this.ops["PutBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketInventoryConfigurationRequest & keyof Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest & keyof PutBucketInventoryConfigurationRequest]: (PutBucketInventoryConfigurationRequest & Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest & PutBucketInventoryConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketInventoryConfiguration(
            this.ops["PutBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketLifecycle(partialParams: ToOptional<{
      [K in keyof PutBucketLifecycleRequest & keyof Omit<PutBucketLifecycleRequest, "Bucket"> & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest & keyof PutBucketLifecycleRequest]: (PutBucketLifecycleRequest & Omit<PutBucketLifecycleRequest, "Bucket"> & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest & PutBucketLifecycleRequest)[K]
    }>): void {
        return this.client.putBucketLifecycle(
            this.ops["PutBucketLifecycle"].apply(partialParams)
        );
    }

    invokePutBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketLifecycleConfigurationRequest & keyof Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest & keyof PutBucketLifecycleConfigurationRequest]: (PutBucketLifecycleConfigurationRequest & Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest & PutBucketLifecycleConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketLifecycleConfiguration(
            this.ops["PutBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketLogging(partialParams: ToOptional<{
      [K in keyof PutBucketLoggingRequest & keyof Omit<PutBucketLoggingRequest, "Bucket"> & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest & keyof PutBucketLoggingRequest]: (PutBucketLoggingRequest & Omit<PutBucketLoggingRequest, "Bucket"> & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest & PutBucketLoggingRequest)[K]
    }>): void {
        return this.client.putBucketLogging(
            this.ops["PutBucketLogging"].apply(partialParams)
        );
    }

    invokePutBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketMetricsConfigurationRequest & keyof Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest & keyof PutBucketMetricsConfigurationRequest]: (PutBucketMetricsConfigurationRequest & Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest & PutBucketMetricsConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketMetricsConfiguration(
            this.ops["PutBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketNotification(partialParams: ToOptional<{
      [K in keyof PutBucketNotificationRequest & keyof Omit<PutBucketNotificationRequest, "Bucket"> & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest & keyof PutBucketNotificationRequest]: (PutBucketNotificationRequest & Omit<PutBucketNotificationRequest, "Bucket"> & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest & PutBucketNotificationRequest)[K]
    }>): void {
        return this.client.putBucketNotification(
            this.ops["PutBucketNotification"].apply(partialParams)
        );
    }

    invokePutBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof PutBucketNotificationConfigurationRequest & keyof Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest & keyof PutBucketNotificationConfigurationRequest]: (PutBucketNotificationConfigurationRequest & Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest & PutBucketNotificationConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketNotificationConfiguration(
            this.ops["PutBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof PutBucketOwnershipControlsRequest & keyof Omit<PutBucketOwnershipControlsRequest, "Bucket"> & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest & keyof PutBucketOwnershipControlsRequest]: (PutBucketOwnershipControlsRequest & Omit<PutBucketOwnershipControlsRequest, "Bucket"> & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest & PutBucketOwnershipControlsRequest)[K]
    }>): void {
        return this.client.putBucketOwnershipControls(
            this.ops["PutBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokePutBucketPolicy(partialParams: ToOptional<{
      [K in keyof PutBucketPolicyRequest & keyof Omit<PutBucketPolicyRequest, "Bucket"> & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest & keyof PutBucketPolicyRequest]: (PutBucketPolicyRequest & Omit<PutBucketPolicyRequest, "Bucket"> & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest & PutBucketPolicyRequest)[K]
    }>): void {
        return this.client.putBucketPolicy(
            this.ops["PutBucketPolicy"].apply(partialParams)
        );
    }

    invokePutBucketReplication(partialParams: ToOptional<{
      [K in keyof PutBucketReplicationRequest & keyof Omit<PutBucketReplicationRequest, "Bucket"> & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest & keyof PutBucketReplicationRequest]: (PutBucketReplicationRequest & Omit<PutBucketReplicationRequest, "Bucket"> & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest & PutBucketReplicationRequest)[K]
    }>): void {
        return this.client.putBucketReplication(
            this.ops["PutBucketReplication"].apply(partialParams)
        );
    }

    invokePutBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof PutBucketRequestPaymentRequest & keyof Omit<PutBucketRequestPaymentRequest, "Bucket"> & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest & keyof PutBucketRequestPaymentRequest]: (PutBucketRequestPaymentRequest & Omit<PutBucketRequestPaymentRequest, "Bucket"> & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest & PutBucketRequestPaymentRequest)[K]
    }>): void {
        return this.client.putBucketRequestPayment(
            this.ops["PutBucketRequestPayment"].apply(partialParams)
        );
    }

    invokePutBucketTagging(partialParams: ToOptional<{
      [K in keyof PutBucketTaggingRequest & keyof Omit<PutBucketTaggingRequest, "Bucket"> & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest & keyof PutBucketTaggingRequest]: (PutBucketTaggingRequest & Omit<PutBucketTaggingRequest, "Bucket"> & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest & PutBucketTaggingRequest)[K]
    }>): void {
        return this.client.putBucketTagging(
            this.ops["PutBucketTagging"].apply(partialParams)
        );
    }

    invokePutBucketVersioning(partialParams: ToOptional<{
      [K in keyof PutBucketVersioningRequest & keyof Omit<PutBucketVersioningRequest, "Bucket"> & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest & keyof PutBucketVersioningRequest]: (PutBucketVersioningRequest & Omit<PutBucketVersioningRequest, "Bucket"> & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest & PutBucketVersioningRequest)[K]
    }>): void {
        return this.client.putBucketVersioning(
            this.ops["PutBucketVersioning"].apply(partialParams)
        );
    }

    invokePutBucketWebsite(partialParams: ToOptional<{
      [K in keyof PutBucketWebsiteRequest & keyof Omit<PutBucketWebsiteRequest, "Bucket"> & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest & keyof PutBucketWebsiteRequest]: (PutBucketWebsiteRequest & Omit<PutBucketWebsiteRequest, "Bucket"> & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest & PutBucketWebsiteRequest)[K]
    }>): void {
        return this.client.putBucketWebsite(
            this.ops["PutBucketWebsite"].apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof PutObjectRequest & keyof Omit<PutObjectRequest, "Bucket"> & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof Omit<PutObjectRequest, "Key"> & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest & keyof PutObjectRequest]: (PutObjectRequest & Omit<PutObjectRequest, "Bucket"> & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & Omit<PutObjectRequest, "Key"> & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest & PutObjectRequest)[K]
    }>): PutObjectOutput {
        return this.client.putObject(
            this.ops["PutObject"].apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof PutObjectAclRequest & keyof Omit<PutObjectAclRequest, "Bucket"> & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof Omit<PutObjectAclRequest, "Key"> & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest & keyof PutObjectAclRequest]: (PutObjectAclRequest & Omit<PutObjectAclRequest, "Bucket"> & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & Omit<PutObjectAclRequest, "Key"> & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest & PutObjectAclRequest)[K]
    }>): PutObjectAclOutput {
        return this.client.putObjectAcl(
            this.ops["PutObjectAcl"].apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof PutObjectLegalHoldRequest & keyof Omit<PutObjectLegalHoldRequest, "Bucket"> & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof Omit<PutObjectLegalHoldRequest, "Key"> & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest & keyof PutObjectLegalHoldRequest]: (PutObjectLegalHoldRequest & Omit<PutObjectLegalHoldRequest, "Bucket"> & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & Omit<PutObjectLegalHoldRequest, "Key"> & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest & PutObjectLegalHoldRequest)[K]
    }>): PutObjectLegalHoldOutput {
        return this.client.putObjectLegalHold(
            this.ops["PutObjectLegalHold"].apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof PutObjectLockConfigurationRequest & keyof Omit<PutObjectLockConfigurationRequest, "Bucket"> & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest & keyof PutObjectLockConfigurationRequest]: (PutObjectLockConfigurationRequest & Omit<PutObjectLockConfigurationRequest, "Bucket"> & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest & PutObjectLockConfigurationRequest)[K]
    }>): PutObjectLockConfigurationOutput {
        return this.client.putObjectLockConfiguration(
            this.ops["PutObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof PutObjectRetentionRequest & keyof Omit<PutObjectRetentionRequest, "Bucket"> & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof Omit<PutObjectRetentionRequest, "Key"> & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest & keyof PutObjectRetentionRequest]: (PutObjectRetentionRequest & Omit<PutObjectRetentionRequest, "Bucket"> & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & Omit<PutObjectRetentionRequest, "Key"> & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest & PutObjectRetentionRequest)[K]
    }>): PutObjectRetentionOutput {
        return this.client.putObjectRetention(
            this.ops["PutObjectRetention"].apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof PutObjectTaggingRequest & keyof Omit<PutObjectTaggingRequest, "Bucket"> & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof Omit<PutObjectTaggingRequest, "Key"> & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest & keyof PutObjectTaggingRequest]: (PutObjectTaggingRequest & Omit<PutObjectTaggingRequest, "Bucket"> & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & Omit<PutObjectTaggingRequest, "Key"> & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest & PutObjectTaggingRequest)[K]
    }>): PutObjectTaggingOutput {
        return this.client.putObjectTagging(
            this.ops["PutObjectTagging"].apply(partialParams)
        );
    }

    invokePutPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof PutPublicAccessBlockRequest & keyof Omit<PutPublicAccessBlockRequest, "Bucket"> & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest & keyof PutPublicAccessBlockRequest]: (PutPublicAccessBlockRequest & Omit<PutPublicAccessBlockRequest, "Bucket"> & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest & PutPublicAccessBlockRequest)[K]
    }>): void {
        return this.client.putPublicAccessBlock(
            this.ops["PutPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof RestoreObjectRequest & keyof Omit<RestoreObjectRequest, "Bucket"> & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof Omit<RestoreObjectRequest, "Key"> & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest & keyof RestoreObjectRequest]: (RestoreObjectRequest & Omit<RestoreObjectRequest, "Bucket"> & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & Omit<RestoreObjectRequest, "Key"> & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest & RestoreObjectRequest)[K]
    }>): RestoreObjectOutput {
        return this.client.restoreObject(
            this.ops["RestoreObject"].apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof SelectObjectContentRequest & keyof Omit<SelectObjectContentRequest, "Bucket"> & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof Omit<SelectObjectContentRequest, "Key"> & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest & keyof SelectObjectContentRequest]: (SelectObjectContentRequest & Omit<SelectObjectContentRequest, "Bucket"> & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & Omit<SelectObjectContentRequest, "Key"> & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest & SelectObjectContentRequest)[K]
    }>): SelectObjectContentOutput {
        return this.client.selectObjectContent(
            this.ops["SelectObjectContent"].apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof UploadPartRequest & keyof Omit<UploadPartRequest, "Bucket"> & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof Omit<UploadPartRequest, "Key"> & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest & keyof UploadPartRequest]: (UploadPartRequest & Omit<UploadPartRequest, "Bucket"> & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & Omit<UploadPartRequest, "Key"> & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest & UploadPartRequest)[K]
    }>): UploadPartOutput {
        return this.client.uploadPart(
            this.ops["UploadPart"].apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof UploadPartCopyRequest & keyof Omit<UploadPartCopyRequest, "Bucket"> & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof Omit<UploadPartCopyRequest, "Key"> & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest & keyof UploadPartCopyRequest]: (UploadPartCopyRequest & Omit<UploadPartCopyRequest, "Bucket"> & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & Omit<UploadPartCopyRequest, "Key"> & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest & UploadPartCopyRequest)[K]
    }>): UploadPartCopyOutput {
        return this.client.uploadPartCopy(
            this.ops["UploadPartCopy"].apply(partialParams)
        );
    }

    invokeWriteGetObjectResponse(partialParams: ToOptional<{
      [K in keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest]: (WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest & WriteGetObjectResponseRequest)[K]
    }>): void {
        return this.client.writeGetObjectResponse(
            this.ops["WriteGetObjectResponse"].apply(partialParams)
        );
    }
}