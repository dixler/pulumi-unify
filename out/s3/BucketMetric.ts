
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

export default class extends aws.s3.BucketMetric {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.s3.BucketMetric>) {
        super(...args)
        this.client = new awssdk.S3()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/s3-2006-03-01.normal.json"), this.client)
    }

    invokeAbortMultipartUpload(partialParams: ToOptional<{
      [K in keyof AbortMultipartUploadRequest & keyof AbortMultipartUploadRequest]: (AbortMultipartUploadRequest & AbortMultipartUploadRequest)[K]
    }>): AbortMultipartUploadOutput {
        return this.client.abortMultipartUpload(
            this.ops["AbortMultipartUpload"].apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof Omit<CompleteMultipartUploadRequest, "Bucket"> & keyof CompleteMultipartUploadRequest]: (Omit<CompleteMultipartUploadRequest, "Bucket"> & CompleteMultipartUploadRequest)[K]
    }>): CompleteMultipartUploadOutput {
        return this.client.completeMultipartUpload(
            this.ops["CompleteMultipartUpload"].apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof Omit<CopyObjectRequest, "Bucket"> & keyof CopyObjectRequest]: (Omit<CopyObjectRequest, "Bucket"> & CopyObjectRequest)[K]
    }>): CopyObjectOutput {
        return this.client.copyObject(
            this.ops["CopyObject"].apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof Omit<CreateBucketRequest, "Bucket"> & keyof CreateBucketRequest]: (Omit<CreateBucketRequest, "Bucket"> & CreateBucketRequest)[K]
    }>): CreateBucketOutput {
        return this.client.createBucket(
            this.ops["CreateBucket"].apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof Omit<CreateMultipartUploadRequest, "Bucket"> & keyof CreateMultipartUploadRequest]: (Omit<CreateMultipartUploadRequest, "Bucket"> & CreateMultipartUploadRequest)[K]
    }>): CreateMultipartUploadOutput {
        return this.client.createMultipartUpload(
            this.ops["CreateMultipartUpload"].apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketRequest, "Bucket"> & keyof DeleteBucketRequest]: (Omit<DeleteBucketRequest, "Bucket"> & DeleteBucketRequest)[K]
    }>): void {
        return this.client.deleteBucket(
            this.ops["DeleteBucket"].apply(partialParams)
        );
    }

    invokeDeleteBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & keyof DeleteBucketAnalyticsConfigurationRequest]: (Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket"> & DeleteBucketAnalyticsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketAnalyticsConfiguration(
            this.ops["DeleteBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketCorsRequest, "Bucket"> & keyof DeleteBucketCorsRequest]: (Omit<DeleteBucketCorsRequest, "Bucket"> & DeleteBucketCorsRequest)[K]
    }>): void {
        return this.client.deleteBucketCors(
            this.ops["DeleteBucketCors"].apply(partialParams)
        );
    }

    invokeDeleteBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketEncryptionRequest, "Bucket"> & keyof DeleteBucketEncryptionRequest]: (Omit<DeleteBucketEncryptionRequest, "Bucket"> & DeleteBucketEncryptionRequest)[K]
    }>): void {
        return this.client.deleteBucketEncryption(
            this.ops["DeleteBucketEncryption"].apply(partialParams)
        );
    }

    invokeDeleteBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof DeleteBucketIntelligentTieringConfigurationRequest]: (Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket"> & DeleteBucketIntelligentTieringConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketIntelligentTieringConfiguration(
            this.ops["DeleteBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & keyof DeleteBucketInventoryConfigurationRequest]: (Omit<DeleteBucketInventoryConfigurationRequest, "Bucket"> & DeleteBucketInventoryConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketInventoryConfiguration(
            this.ops["DeleteBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketLifecycleRequest, "Bucket"> & keyof DeleteBucketLifecycleRequest]: (Omit<DeleteBucketLifecycleRequest, "Bucket"> & DeleteBucketLifecycleRequest)[K]
    }>): void {
        return this.client.deleteBucketLifecycle(
            this.ops["DeleteBucketLifecycle"].apply(partialParams)
        );
    }

    invokeDeleteBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & keyof DeleteBucketMetricsConfigurationRequest]: (Omit<DeleteBucketMetricsConfigurationRequest, "Bucket"> & DeleteBucketMetricsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteBucketMetricsConfiguration(
            this.ops["DeleteBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & keyof DeleteBucketOwnershipControlsRequest]: (Omit<DeleteBucketOwnershipControlsRequest, "Bucket"> & DeleteBucketOwnershipControlsRequest)[K]
    }>): void {
        return this.client.deleteBucketOwnershipControls(
            this.ops["DeleteBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeDeleteBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketPolicyRequest, "Bucket"> & keyof DeleteBucketPolicyRequest]: (Omit<DeleteBucketPolicyRequest, "Bucket"> & DeleteBucketPolicyRequest)[K]
    }>): void {
        return this.client.deleteBucketPolicy(
            this.ops["DeleteBucketPolicy"].apply(partialParams)
        );
    }

    invokeDeleteBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketReplicationRequest, "Bucket"> & keyof DeleteBucketReplicationRequest]: (Omit<DeleteBucketReplicationRequest, "Bucket"> & DeleteBucketReplicationRequest)[K]
    }>): void {
        return this.client.deleteBucketReplication(
            this.ops["DeleteBucketReplication"].apply(partialParams)
        );
    }

    invokeDeleteBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketTaggingRequest, "Bucket"> & keyof DeleteBucketTaggingRequest]: (Omit<DeleteBucketTaggingRequest, "Bucket"> & DeleteBucketTaggingRequest)[K]
    }>): void {
        return this.client.deleteBucketTagging(
            this.ops["DeleteBucketTagging"].apply(partialParams)
        );
    }

    invokeDeleteBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketWebsiteRequest, "Bucket"> & keyof DeleteBucketWebsiteRequest]: (Omit<DeleteBucketWebsiteRequest, "Bucket"> & DeleteBucketWebsiteRequest)[K]
    }>): void {
        return this.client.deleteBucketWebsite(
            this.ops["DeleteBucketWebsite"].apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectRequest, "Bucket"> & keyof DeleteObjectRequest]: (Omit<DeleteObjectRequest, "Bucket"> & DeleteObjectRequest)[K]
    }>): DeleteObjectOutput {
        return this.client.deleteObject(
            this.ops["DeleteObject"].apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectTaggingRequest, "Bucket"> & keyof DeleteObjectTaggingRequest]: (Omit<DeleteObjectTaggingRequest, "Bucket"> & DeleteObjectTaggingRequest)[K]
    }>): DeleteObjectTaggingOutput {
        return this.client.deleteObjectTagging(
            this.ops["DeleteObjectTagging"].apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectsRequest, "Bucket"> & keyof DeleteObjectsRequest]: (Omit<DeleteObjectsRequest, "Bucket"> & DeleteObjectsRequest)[K]
    }>): DeleteObjectsOutput {
        return this.client.deleteObjects(
            this.ops["DeleteObjects"].apply(partialParams)
        );
    }

    invokeDeletePublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<DeletePublicAccessBlockRequest, "Bucket"> & keyof DeletePublicAccessBlockRequest]: (Omit<DeletePublicAccessBlockRequest, "Bucket"> & DeletePublicAccessBlockRequest)[K]
    }>): void {
        return this.client.deletePublicAccessBlock(
            this.ops["DeletePublicAccessBlock"].apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & keyof GetBucketAccelerateConfigurationRequest]: (Omit<GetBucketAccelerateConfigurationRequest, "Bucket"> & GetBucketAccelerateConfigurationRequest)[K]
    }>): GetBucketAccelerateConfigurationOutput {
        return this.client.getBucketAccelerateConfiguration(
            this.ops["GetBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAclRequest, "Bucket"> & keyof GetBucketAclRequest]: (Omit<GetBucketAclRequest, "Bucket"> & GetBucketAclRequest)[K]
    }>): GetBucketAclOutput {
        return this.client.getBucketAcl(
            this.ops["GetBucketAcl"].apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & keyof GetBucketAnalyticsConfigurationRequest]: (Omit<GetBucketAnalyticsConfigurationRequest, "Bucket"> & GetBucketAnalyticsConfigurationRequest)[K]
    }>): GetBucketAnalyticsConfigurationOutput {
        return this.client.getBucketAnalyticsConfiguration(
            this.ops["GetBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketCorsRequest, "Bucket"> & keyof GetBucketCorsRequest]: (Omit<GetBucketCorsRequest, "Bucket"> & GetBucketCorsRequest)[K]
    }>): GetBucketCorsOutput {
        return this.client.getBucketCors(
            this.ops["GetBucketCors"].apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketEncryptionRequest, "Bucket"> & keyof GetBucketEncryptionRequest]: (Omit<GetBucketEncryptionRequest, "Bucket"> & GetBucketEncryptionRequest)[K]
    }>): GetBucketEncryptionOutput {
        return this.client.getBucketEncryption(
            this.ops["GetBucketEncryption"].apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof GetBucketIntelligentTieringConfigurationRequest]: (Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket"> & GetBucketIntelligentTieringConfigurationRequest)[K]
    }>): GetBucketIntelligentTieringConfigurationOutput {
        return this.client.getBucketIntelligentTieringConfiguration(
            this.ops["GetBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & keyof GetBucketInventoryConfigurationRequest]: (Omit<GetBucketInventoryConfigurationRequest, "Bucket"> & GetBucketInventoryConfigurationRequest)[K]
    }>): GetBucketInventoryConfigurationOutput {
        return this.client.getBucketInventoryConfiguration(
            this.ops["GetBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLifecycleRequest, "Bucket"> & keyof GetBucketLifecycleRequest]: (Omit<GetBucketLifecycleRequest, "Bucket"> & GetBucketLifecycleRequest)[K]
    }>): GetBucketLifecycleOutput {
        return this.client.getBucketLifecycle(
            this.ops["GetBucketLifecycle"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & keyof GetBucketLifecycleConfigurationRequest]: (Omit<GetBucketLifecycleConfigurationRequest, "Bucket"> & GetBucketLifecycleConfigurationRequest)[K]
    }>): GetBucketLifecycleConfigurationOutput {
        return this.client.getBucketLifecycleConfiguration(
            this.ops["GetBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLocationRequest, "Bucket"> & keyof GetBucketLocationRequest]: (Omit<GetBucketLocationRequest, "Bucket"> & GetBucketLocationRequest)[K]
    }>): GetBucketLocationOutput {
        return this.client.getBucketLocation(
            this.ops["GetBucketLocation"].apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLoggingRequest, "Bucket"> & keyof GetBucketLoggingRequest]: (Omit<GetBucketLoggingRequest, "Bucket"> & GetBucketLoggingRequest)[K]
    }>): GetBucketLoggingOutput {
        return this.client.getBucketLogging(
            this.ops["GetBucketLogging"].apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & keyof GetBucketMetricsConfigurationRequest]: (Omit<GetBucketMetricsConfigurationRequest, "Bucket"> & GetBucketMetricsConfigurationRequest)[K]
    }>): GetBucketMetricsConfigurationOutput {
        return this.client.getBucketMetricsConfiguration(
            this.ops["GetBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest]: (Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest)[K]
    }>): NotificationConfigurationDeprecated {
        return this.client.getBucketNotification(
            this.ops["GetBucketNotification"].apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & keyof GetBucketNotificationConfigurationRequest]: (Omit<GetBucketNotificationConfigurationRequest, "Bucket"> & GetBucketNotificationConfigurationRequest)[K]
    }>): NotificationConfiguration {
        return this.client.getBucketNotificationConfiguration(
            this.ops["GetBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketOwnershipControlsRequest, "Bucket"> & keyof GetBucketOwnershipControlsRequest]: (Omit<GetBucketOwnershipControlsRequest, "Bucket"> & GetBucketOwnershipControlsRequest)[K]
    }>): GetBucketOwnershipControlsOutput {
        return this.client.getBucketOwnershipControls(
            this.ops["GetBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketPolicyRequest, "Bucket"> & keyof GetBucketPolicyRequest]: (Omit<GetBucketPolicyRequest, "Bucket"> & GetBucketPolicyRequest)[K]
    }>): GetBucketPolicyOutput {
        return this.client.getBucketPolicy(
            this.ops["GetBucketPolicy"].apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketPolicyStatusRequest, "Bucket"> & keyof GetBucketPolicyStatusRequest]: (Omit<GetBucketPolicyStatusRequest, "Bucket"> & GetBucketPolicyStatusRequest)[K]
    }>): GetBucketPolicyStatusOutput {
        return this.client.getBucketPolicyStatus(
            this.ops["GetBucketPolicyStatus"].apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketReplicationRequest, "Bucket"> & keyof GetBucketReplicationRequest]: (Omit<GetBucketReplicationRequest, "Bucket"> & GetBucketReplicationRequest)[K]
    }>): GetBucketReplicationOutput {
        return this.client.getBucketReplication(
            this.ops["GetBucketReplication"].apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketRequestPaymentRequest, "Bucket"> & keyof GetBucketRequestPaymentRequest]: (Omit<GetBucketRequestPaymentRequest, "Bucket"> & GetBucketRequestPaymentRequest)[K]
    }>): GetBucketRequestPaymentOutput {
        return this.client.getBucketRequestPayment(
            this.ops["GetBucketRequestPayment"].apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketTaggingRequest, "Bucket"> & keyof GetBucketTaggingRequest]: (Omit<GetBucketTaggingRequest, "Bucket"> & GetBucketTaggingRequest)[K]
    }>): GetBucketTaggingOutput {
        return this.client.getBucketTagging(
            this.ops["GetBucketTagging"].apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketVersioningRequest, "Bucket"> & keyof GetBucketVersioningRequest]: (Omit<GetBucketVersioningRequest, "Bucket"> & GetBucketVersioningRequest)[K]
    }>): GetBucketVersioningOutput {
        return this.client.getBucketVersioning(
            this.ops["GetBucketVersioning"].apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketWebsiteRequest, "Bucket"> & keyof GetBucketWebsiteRequest]: (Omit<GetBucketWebsiteRequest, "Bucket"> & GetBucketWebsiteRequest)[K]
    }>): GetBucketWebsiteOutput {
        return this.client.getBucketWebsite(
            this.ops["GetBucketWebsite"].apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectRequest, "Bucket"> & keyof GetObjectRequest]: (Omit<GetObjectRequest, "Bucket"> & GetObjectRequest)[K]
    }>): GetObjectOutput {
        return this.client.getObject(
            this.ops["GetObject"].apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectAclRequest, "Bucket"> & keyof GetObjectAclRequest]: (Omit<GetObjectAclRequest, "Bucket"> & GetObjectAclRequest)[K]
    }>): GetObjectAclOutput {
        return this.client.getObjectAcl(
            this.ops["GetObjectAcl"].apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectLegalHoldRequest, "Bucket"> & keyof GetObjectLegalHoldRequest]: (Omit<GetObjectLegalHoldRequest, "Bucket"> & GetObjectLegalHoldRequest)[K]
    }>): GetObjectLegalHoldOutput {
        return this.client.getObjectLegalHold(
            this.ops["GetObjectLegalHold"].apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectLockConfigurationRequest, "Bucket"> & keyof GetObjectLockConfigurationRequest]: (Omit<GetObjectLockConfigurationRequest, "Bucket"> & GetObjectLockConfigurationRequest)[K]
    }>): GetObjectLockConfigurationOutput {
        return this.client.getObjectLockConfiguration(
            this.ops["GetObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectRetentionRequest, "Bucket"> & keyof GetObjectRetentionRequest]: (Omit<GetObjectRetentionRequest, "Bucket"> & GetObjectRetentionRequest)[K]
    }>): GetObjectRetentionOutput {
        return this.client.getObjectRetention(
            this.ops["GetObjectRetention"].apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectTaggingRequest, "Bucket"> & keyof GetObjectTaggingRequest]: (Omit<GetObjectTaggingRequest, "Bucket"> & GetObjectTaggingRequest)[K]
    }>): GetObjectTaggingOutput {
        return this.client.getObjectTagging(
            this.ops["GetObjectTagging"].apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectTorrentRequest, "Bucket"> & keyof GetObjectTorrentRequest]: (Omit<GetObjectTorrentRequest, "Bucket"> & GetObjectTorrentRequest)[K]
    }>): GetObjectTorrentOutput {
        return this.client.getObjectTorrent(
            this.ops["GetObjectTorrent"].apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<GetPublicAccessBlockRequest, "Bucket"> & keyof GetPublicAccessBlockRequest]: (Omit<GetPublicAccessBlockRequest, "Bucket"> & GetPublicAccessBlockRequest)[K]
    }>): GetPublicAccessBlockOutput {
        return this.client.getPublicAccessBlock(
            this.ops["GetPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeHeadBucket(partialParams: ToOptional<{
      [K in keyof Omit<HeadBucketRequest, "Bucket"> & keyof HeadBucketRequest]: (Omit<HeadBucketRequest, "Bucket"> & HeadBucketRequest)[K]
    }>): void {
        return this.client.headBucket(
            this.ops["HeadBucket"].apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof Omit<HeadObjectRequest, "Bucket"> & keyof HeadObjectRequest]: (Omit<HeadObjectRequest, "Bucket"> & HeadObjectRequest)[K]
    }>): HeadObjectOutput {
        return this.client.headObject(
            this.ops["HeadObject"].apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & keyof ListBucketAnalyticsConfigurationsRequest]: (Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket"> & ListBucketAnalyticsConfigurationsRequest)[K]
    }>): ListBucketAnalyticsConfigurationsOutput {
        return this.client.listBucketAnalyticsConfigurations(
            this.ops["ListBucketAnalyticsConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & keyof ListBucketIntelligentTieringConfigurationsRequest]: (Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket"> & ListBucketIntelligentTieringConfigurationsRequest)[K]
    }>): ListBucketIntelligentTieringConfigurationsOutput {
        return this.client.listBucketIntelligentTieringConfigurations(
            this.ops["ListBucketIntelligentTieringConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & keyof ListBucketInventoryConfigurationsRequest]: (Omit<ListBucketInventoryConfigurationsRequest, "Bucket"> & ListBucketInventoryConfigurationsRequest)[K]
    }>): ListBucketInventoryConfigurationsOutput {
        return this.client.listBucketInventoryConfigurations(
            this.ops["ListBucketInventoryConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & keyof ListBucketMetricsConfigurationsRequest]: (Omit<ListBucketMetricsConfigurationsRequest, "Bucket"> & ListBucketMetricsConfigurationsRequest)[K]
    }>): ListBucketMetricsConfigurationsOutput {
        return this.client.listBucketMetricsConfigurations(
            this.ops["ListBucketMetricsConfigurations"].apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof Omit<ListMultipartUploadsRequest, "Bucket"> & keyof ListMultipartUploadsRequest]: (Omit<ListMultipartUploadsRequest, "Bucket"> & ListMultipartUploadsRequest)[K]
    }>): ListMultipartUploadsOutput {
        return this.client.listMultipartUploads(
            this.ops["ListMultipartUploads"].apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectVersionsRequest, "Bucket"> & keyof ListObjectVersionsRequest]: (Omit<ListObjectVersionsRequest, "Bucket"> & ListObjectVersionsRequest)[K]
    }>): ListObjectVersionsOutput {
        return this.client.listObjectVersions(
            this.ops["ListObjectVersions"].apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectsRequest, "Bucket"> & keyof ListObjectsRequest]: (Omit<ListObjectsRequest, "Bucket"> & ListObjectsRequest)[K]
    }>): ListObjectsOutput {
        return this.client.listObjects(
            this.ops["ListObjects"].apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectsV2Request, "Bucket"> & keyof ListObjectsV2Request]: (Omit<ListObjectsV2Request, "Bucket"> & ListObjectsV2Request)[K]
    }>): ListObjectsV2Output {
        return this.client.listObjectsV2(
            this.ops["ListObjectsV2"].apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof Omit<ListPartsRequest, "Bucket"> & keyof ListPartsRequest]: (Omit<ListPartsRequest, "Bucket"> & ListPartsRequest)[K]
    }>): ListPartsOutput {
        return this.client.listParts(
            this.ops["ListParts"].apply(partialParams)
        );
    }

    invokePutBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & keyof PutBucketAccelerateConfigurationRequest]: (Omit<PutBucketAccelerateConfigurationRequest, "Bucket"> & PutBucketAccelerateConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketAccelerateConfiguration(
            this.ops["PutBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketAcl(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAclRequest, "Bucket"> & keyof PutBucketAclRequest]: (Omit<PutBucketAclRequest, "Bucket"> & PutBucketAclRequest)[K]
    }>): void {
        return this.client.putBucketAcl(
            this.ops["PutBucketAcl"].apply(partialParams)
        );
    }

    invokePutBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & keyof PutBucketAnalyticsConfigurationRequest]: (Omit<PutBucketAnalyticsConfigurationRequest, "Bucket"> & PutBucketAnalyticsConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketAnalyticsConfiguration(
            this.ops["PutBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketCorsRequest, "Bucket"> & keyof PutBucketCorsRequest]: (Omit<PutBucketCorsRequest, "Bucket"> & PutBucketCorsRequest)[K]
    }>): void {
        return this.client.putBucketCors(
            this.ops["PutBucketCors"].apply(partialParams)
        );
    }

    invokePutBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketEncryptionRequest, "Bucket"> & keyof PutBucketEncryptionRequest]: (Omit<PutBucketEncryptionRequest, "Bucket"> & PutBucketEncryptionRequest)[K]
    }>): void {
        return this.client.putBucketEncryption(
            this.ops["PutBucketEncryption"].apply(partialParams)
        );
    }

    invokePutBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & keyof PutBucketIntelligentTieringConfigurationRequest]: (Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket"> & PutBucketIntelligentTieringConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketIntelligentTieringConfiguration(
            this.ops["PutBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & keyof PutBucketInventoryConfigurationRequest]: (Omit<PutBucketInventoryConfigurationRequest, "Bucket"> & PutBucketInventoryConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketInventoryConfiguration(
            this.ops["PutBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLifecycleRequest, "Bucket"> & keyof PutBucketLifecycleRequest]: (Omit<PutBucketLifecycleRequest, "Bucket"> & PutBucketLifecycleRequest)[K]
    }>): void {
        return this.client.putBucketLifecycle(
            this.ops["PutBucketLifecycle"].apply(partialParams)
        );
    }

    invokePutBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & keyof PutBucketLifecycleConfigurationRequest]: (Omit<PutBucketLifecycleConfigurationRequest, "Bucket"> & PutBucketLifecycleConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketLifecycleConfiguration(
            this.ops["PutBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketLogging(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLoggingRequest, "Bucket"> & keyof PutBucketLoggingRequest]: (Omit<PutBucketLoggingRequest, "Bucket"> & PutBucketLoggingRequest)[K]
    }>): void {
        return this.client.putBucketLogging(
            this.ops["PutBucketLogging"].apply(partialParams)
        );
    }

    invokePutBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & keyof PutBucketMetricsConfigurationRequest]: (Omit<PutBucketMetricsConfigurationRequest, "Bucket"> & PutBucketMetricsConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketMetricsConfiguration(
            this.ops["PutBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketNotification(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketNotificationRequest, "Bucket"> & keyof PutBucketNotificationRequest]: (Omit<PutBucketNotificationRequest, "Bucket"> & PutBucketNotificationRequest)[K]
    }>): void {
        return this.client.putBucketNotification(
            this.ops["PutBucketNotification"].apply(partialParams)
        );
    }

    invokePutBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & keyof PutBucketNotificationConfigurationRequest]: (Omit<PutBucketNotificationConfigurationRequest, "Bucket"> & PutBucketNotificationConfigurationRequest)[K]
    }>): void {
        return this.client.putBucketNotificationConfiguration(
            this.ops["PutBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketOwnershipControlsRequest, "Bucket"> & keyof PutBucketOwnershipControlsRequest]: (Omit<PutBucketOwnershipControlsRequest, "Bucket"> & PutBucketOwnershipControlsRequest)[K]
    }>): void {
        return this.client.putBucketOwnershipControls(
            this.ops["PutBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokePutBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketPolicyRequest, "Bucket"> & keyof PutBucketPolicyRequest]: (Omit<PutBucketPolicyRequest, "Bucket"> & PutBucketPolicyRequest)[K]
    }>): void {
        return this.client.putBucketPolicy(
            this.ops["PutBucketPolicy"].apply(partialParams)
        );
    }

    invokePutBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketReplicationRequest, "Bucket"> & keyof PutBucketReplicationRequest]: (Omit<PutBucketReplicationRequest, "Bucket"> & PutBucketReplicationRequest)[K]
    }>): void {
        return this.client.putBucketReplication(
            this.ops["PutBucketReplication"].apply(partialParams)
        );
    }

    invokePutBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketRequestPaymentRequest, "Bucket"> & keyof PutBucketRequestPaymentRequest]: (Omit<PutBucketRequestPaymentRequest, "Bucket"> & PutBucketRequestPaymentRequest)[K]
    }>): void {
        return this.client.putBucketRequestPayment(
            this.ops["PutBucketRequestPayment"].apply(partialParams)
        );
    }

    invokePutBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketTaggingRequest, "Bucket"> & keyof PutBucketTaggingRequest]: (Omit<PutBucketTaggingRequest, "Bucket"> & PutBucketTaggingRequest)[K]
    }>): void {
        return this.client.putBucketTagging(
            this.ops["PutBucketTagging"].apply(partialParams)
        );
    }

    invokePutBucketVersioning(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketVersioningRequest, "Bucket"> & keyof PutBucketVersioningRequest]: (Omit<PutBucketVersioningRequest, "Bucket"> & PutBucketVersioningRequest)[K]
    }>): void {
        return this.client.putBucketVersioning(
            this.ops["PutBucketVersioning"].apply(partialParams)
        );
    }

    invokePutBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketWebsiteRequest, "Bucket"> & keyof PutBucketWebsiteRequest]: (Omit<PutBucketWebsiteRequest, "Bucket"> & PutBucketWebsiteRequest)[K]
    }>): void {
        return this.client.putBucketWebsite(
            this.ops["PutBucketWebsite"].apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectRequest, "Bucket"> & keyof PutObjectRequest]: (Omit<PutObjectRequest, "Bucket"> & PutObjectRequest)[K]
    }>): PutObjectOutput {
        return this.client.putObject(
            this.ops["PutObject"].apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectAclRequest, "Bucket"> & keyof PutObjectAclRequest]: (Omit<PutObjectAclRequest, "Bucket"> & PutObjectAclRequest)[K]
    }>): PutObjectAclOutput {
        return this.client.putObjectAcl(
            this.ops["PutObjectAcl"].apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectLegalHoldRequest, "Bucket"> & keyof PutObjectLegalHoldRequest]: (Omit<PutObjectLegalHoldRequest, "Bucket"> & PutObjectLegalHoldRequest)[K]
    }>): PutObjectLegalHoldOutput {
        return this.client.putObjectLegalHold(
            this.ops["PutObjectLegalHold"].apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectLockConfigurationRequest, "Bucket"> & keyof PutObjectLockConfigurationRequest]: (Omit<PutObjectLockConfigurationRequest, "Bucket"> & PutObjectLockConfigurationRequest)[K]
    }>): PutObjectLockConfigurationOutput {
        return this.client.putObjectLockConfiguration(
            this.ops["PutObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectRetentionRequest, "Bucket"> & keyof PutObjectRetentionRequest]: (Omit<PutObjectRetentionRequest, "Bucket"> & PutObjectRetentionRequest)[K]
    }>): PutObjectRetentionOutput {
        return this.client.putObjectRetention(
            this.ops["PutObjectRetention"].apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectTaggingRequest, "Bucket"> & keyof PutObjectTaggingRequest]: (Omit<PutObjectTaggingRequest, "Bucket"> & PutObjectTaggingRequest)[K]
    }>): PutObjectTaggingOutput {
        return this.client.putObjectTagging(
            this.ops["PutObjectTagging"].apply(partialParams)
        );
    }

    invokePutPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<PutPublicAccessBlockRequest, "Bucket"> & keyof PutPublicAccessBlockRequest]: (Omit<PutPublicAccessBlockRequest, "Bucket"> & PutPublicAccessBlockRequest)[K]
    }>): void {
        return this.client.putPublicAccessBlock(
            this.ops["PutPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof Omit<RestoreObjectRequest, "Bucket"> & keyof RestoreObjectRequest]: (Omit<RestoreObjectRequest, "Bucket"> & RestoreObjectRequest)[K]
    }>): RestoreObjectOutput {
        return this.client.restoreObject(
            this.ops["RestoreObject"].apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof Omit<SelectObjectContentRequest, "Bucket"> & keyof SelectObjectContentRequest]: (Omit<SelectObjectContentRequest, "Bucket"> & SelectObjectContentRequest)[K]
    }>): SelectObjectContentOutput {
        return this.client.selectObjectContent(
            this.ops["SelectObjectContent"].apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof Omit<UploadPartRequest, "Bucket"> & keyof UploadPartRequest]: (Omit<UploadPartRequest, "Bucket"> & UploadPartRequest)[K]
    }>): UploadPartOutput {
        return this.client.uploadPart(
            this.ops["UploadPart"].apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof Omit<UploadPartCopyRequest, "Bucket"> & keyof UploadPartCopyRequest]: (Omit<UploadPartCopyRequest, "Bucket"> & UploadPartCopyRequest)[K]
    }>): UploadPartCopyOutput {
        return this.client.uploadPartCopy(
            this.ops["UploadPartCopy"].apply(partialParams)
        );
    }

    invokeWriteGetObjectResponse(partialParams: ToOptional<{
      [K in keyof WriteGetObjectResponseRequest & keyof WriteGetObjectResponseRequest]: (WriteGetObjectResponseRequest & WriteGetObjectResponseRequest)[K]
    }>): void {
        return this.client.writeGetObjectResponse(
            this.ops["WriteGetObjectResponse"].apply(partialParams)
        );
    }
}