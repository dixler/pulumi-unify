
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

export default class extends aws.s3.BucketPublicAccessBlock {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.s3.BucketPublicAccessBlock>) {
        super(...args)
        this.client = new awssdk.S3()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/s3-2006-03-01.normal.json"), this.client)
    }

    invokeAbortMultipartUpload(partialParams: ToOptional<{
      [K in keyof AbortMultipartUploadRequest]: (AbortMultipartUploadRequest)[K]
    }>): AbortMultipartUploadOutput {
        return this.client.abortMultipartUpload(
            this.ops["AbortMultipartUpload"].apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof Omit<CompleteMultipartUploadRequest, "Bucket">]: (Omit<CompleteMultipartUploadRequest, "Bucket">)[K]
    }>): CompleteMultipartUploadOutput {
        return this.client.completeMultipartUpload(
            this.ops["CompleteMultipartUpload"].apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof Omit<CopyObjectRequest, "Bucket">]: (Omit<CopyObjectRequest, "Bucket">)[K]
    }>): CopyObjectOutput {
        return this.client.copyObject(
            this.ops["CopyObject"].apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof Omit<CreateBucketRequest, "Bucket">]: (Omit<CreateBucketRequest, "Bucket">)[K]
    }>): CreateBucketOutput {
        return this.client.createBucket(
            this.ops["CreateBucket"].apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof Omit<CreateMultipartUploadRequest, "Bucket">]: (Omit<CreateMultipartUploadRequest, "Bucket">)[K]
    }>): CreateMultipartUploadOutput {
        return this.client.createMultipartUpload(
            this.ops["CreateMultipartUpload"].apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketRequest, "Bucket">]: (Omit<DeleteBucketRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucket(
            this.ops["DeleteBucket"].apply(partialParams)
        );
    }

    invokeDeleteBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket">]: (Omit<DeleteBucketAnalyticsConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketAnalyticsConfiguration(
            this.ops["DeleteBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketCorsRequest, "Bucket">]: (Omit<DeleteBucketCorsRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketCors(
            this.ops["DeleteBucketCors"].apply(partialParams)
        );
    }

    invokeDeleteBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketEncryptionRequest, "Bucket">]: (Omit<DeleteBucketEncryptionRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketEncryption(
            this.ops["DeleteBucketEncryption"].apply(partialParams)
        );
    }

    invokeDeleteBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket">]: (Omit<DeleteBucketIntelligentTieringConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketIntelligentTieringConfiguration(
            this.ops["DeleteBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketInventoryConfigurationRequest, "Bucket">]: (Omit<DeleteBucketInventoryConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketInventoryConfiguration(
            this.ops["DeleteBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketLifecycleRequest, "Bucket">]: (Omit<DeleteBucketLifecycleRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketLifecycle(
            this.ops["DeleteBucketLifecycle"].apply(partialParams)
        );
    }

    invokeDeleteBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketMetricsConfigurationRequest, "Bucket">]: (Omit<DeleteBucketMetricsConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketMetricsConfiguration(
            this.ops["DeleteBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketOwnershipControlsRequest, "Bucket">]: (Omit<DeleteBucketOwnershipControlsRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketOwnershipControls(
            this.ops["DeleteBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeDeleteBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketPolicyRequest, "Bucket">]: (Omit<DeleteBucketPolicyRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketPolicy(
            this.ops["DeleteBucketPolicy"].apply(partialParams)
        );
    }

    invokeDeleteBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketReplicationRequest, "Bucket">]: (Omit<DeleteBucketReplicationRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketReplication(
            this.ops["DeleteBucketReplication"].apply(partialParams)
        );
    }

    invokeDeleteBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketTaggingRequest, "Bucket">]: (Omit<DeleteBucketTaggingRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketTagging(
            this.ops["DeleteBucketTagging"].apply(partialParams)
        );
    }

    invokeDeleteBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBucketWebsiteRequest, "Bucket">]: (Omit<DeleteBucketWebsiteRequest, "Bucket">)[K]
    }>): void {
        return this.client.deleteBucketWebsite(
            this.ops["DeleteBucketWebsite"].apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectRequest, "Bucket">]: (Omit<DeleteObjectRequest, "Bucket">)[K]
    }>): DeleteObjectOutput {
        return this.client.deleteObject(
            this.ops["DeleteObject"].apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectTaggingRequest, "Bucket">]: (Omit<DeleteObjectTaggingRequest, "Bucket">)[K]
    }>): DeleteObjectTaggingOutput {
        return this.client.deleteObjectTagging(
            this.ops["DeleteObjectTagging"].apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof Omit<DeleteObjectsRequest, "Bucket">]: (Omit<DeleteObjectsRequest, "Bucket">)[K]
    }>): DeleteObjectsOutput {
        return this.client.deleteObjects(
            this.ops["DeleteObjects"].apply(partialParams)
        );
    }

    invokeDeletePublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<DeletePublicAccessBlockRequest, "Bucket">]: (Omit<DeletePublicAccessBlockRequest, "Bucket">)[K]
    }>): void {
        return this.client.deletePublicAccessBlock(
            this.ops["DeletePublicAccessBlock"].apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAccelerateConfigurationRequest, "Bucket">]: (Omit<GetBucketAccelerateConfigurationRequest, "Bucket">)[K]
    }>): GetBucketAccelerateConfigurationOutput {
        return this.client.getBucketAccelerateConfiguration(
            this.ops["GetBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAclRequest, "Bucket">]: (Omit<GetBucketAclRequest, "Bucket">)[K]
    }>): GetBucketAclOutput {
        return this.client.getBucketAcl(
            this.ops["GetBucketAcl"].apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketAnalyticsConfigurationRequest, "Bucket">]: (Omit<GetBucketAnalyticsConfigurationRequest, "Bucket">)[K]
    }>): GetBucketAnalyticsConfigurationOutput {
        return this.client.getBucketAnalyticsConfiguration(
            this.ops["GetBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketCorsRequest, "Bucket">]: (Omit<GetBucketCorsRequest, "Bucket">)[K]
    }>): GetBucketCorsOutput {
        return this.client.getBucketCors(
            this.ops["GetBucketCors"].apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketEncryptionRequest, "Bucket">]: (Omit<GetBucketEncryptionRequest, "Bucket">)[K]
    }>): GetBucketEncryptionOutput {
        return this.client.getBucketEncryption(
            this.ops["GetBucketEncryption"].apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket">]: (Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket">)[K]
    }>): GetBucketIntelligentTieringConfigurationOutput {
        return this.client.getBucketIntelligentTieringConfiguration(
            this.ops["GetBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketInventoryConfigurationRequest, "Bucket">]: (Omit<GetBucketInventoryConfigurationRequest, "Bucket">)[K]
    }>): GetBucketInventoryConfigurationOutput {
        return this.client.getBucketInventoryConfiguration(
            this.ops["GetBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLifecycleRequest, "Bucket">]: (Omit<GetBucketLifecycleRequest, "Bucket">)[K]
    }>): GetBucketLifecycleOutput {
        return this.client.getBucketLifecycle(
            this.ops["GetBucketLifecycle"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLifecycleConfigurationRequest, "Bucket">]: (Omit<GetBucketLifecycleConfigurationRequest, "Bucket">)[K]
    }>): GetBucketLifecycleConfigurationOutput {
        return this.client.getBucketLifecycleConfiguration(
            this.ops["GetBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLocationRequest, "Bucket">]: (Omit<GetBucketLocationRequest, "Bucket">)[K]
    }>): GetBucketLocationOutput {
        return this.client.getBucketLocation(
            this.ops["GetBucketLocation"].apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketLoggingRequest, "Bucket">]: (Omit<GetBucketLoggingRequest, "Bucket">)[K]
    }>): GetBucketLoggingOutput {
        return this.client.getBucketLogging(
            this.ops["GetBucketLogging"].apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketMetricsConfigurationRequest, "Bucket">]: (Omit<GetBucketMetricsConfigurationRequest, "Bucket">)[K]
    }>): GetBucketMetricsConfigurationOutput {
        return this.client.getBucketMetricsConfiguration(
            this.ops["GetBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket">]: (Omit<GetBucketNotificationConfigurationRequest, "Bucket">)[K]
    }>): NotificationConfigurationDeprecated {
        return this.client.getBucketNotification(
            this.ops["GetBucketNotification"].apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket">]: (Omit<GetBucketNotificationConfigurationRequest, "Bucket">)[K]
    }>): NotificationConfiguration {
        return this.client.getBucketNotificationConfiguration(
            this.ops["GetBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketOwnershipControlsRequest, "Bucket">]: (Omit<GetBucketOwnershipControlsRequest, "Bucket">)[K]
    }>): GetBucketOwnershipControlsOutput {
        return this.client.getBucketOwnershipControls(
            this.ops["GetBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketPolicyRequest, "Bucket">]: (Omit<GetBucketPolicyRequest, "Bucket">)[K]
    }>): GetBucketPolicyOutput {
        return this.client.getBucketPolicy(
            this.ops["GetBucketPolicy"].apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketPolicyStatusRequest, "Bucket">]: (Omit<GetBucketPolicyStatusRequest, "Bucket">)[K]
    }>): GetBucketPolicyStatusOutput {
        return this.client.getBucketPolicyStatus(
            this.ops["GetBucketPolicyStatus"].apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketReplicationRequest, "Bucket">]: (Omit<GetBucketReplicationRequest, "Bucket">)[K]
    }>): GetBucketReplicationOutput {
        return this.client.getBucketReplication(
            this.ops["GetBucketReplication"].apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketRequestPaymentRequest, "Bucket">]: (Omit<GetBucketRequestPaymentRequest, "Bucket">)[K]
    }>): GetBucketRequestPaymentOutput {
        return this.client.getBucketRequestPayment(
            this.ops["GetBucketRequestPayment"].apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketTaggingRequest, "Bucket">]: (Omit<GetBucketTaggingRequest, "Bucket">)[K]
    }>): GetBucketTaggingOutput {
        return this.client.getBucketTagging(
            this.ops["GetBucketTagging"].apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketVersioningRequest, "Bucket">]: (Omit<GetBucketVersioningRequest, "Bucket">)[K]
    }>): GetBucketVersioningOutput {
        return this.client.getBucketVersioning(
            this.ops["GetBucketVersioning"].apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<GetBucketWebsiteRequest, "Bucket">]: (Omit<GetBucketWebsiteRequest, "Bucket">)[K]
    }>): GetBucketWebsiteOutput {
        return this.client.getBucketWebsite(
            this.ops["GetBucketWebsite"].apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectRequest, "Bucket">]: (Omit<GetObjectRequest, "Bucket">)[K]
    }>): GetObjectOutput {
        return this.client.getObject(
            this.ops["GetObject"].apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectAclRequest, "Bucket">]: (Omit<GetObjectAclRequest, "Bucket">)[K]
    }>): GetObjectAclOutput {
        return this.client.getObjectAcl(
            this.ops["GetObjectAcl"].apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectLegalHoldRequest, "Bucket">]: (Omit<GetObjectLegalHoldRequest, "Bucket">)[K]
    }>): GetObjectLegalHoldOutput {
        return this.client.getObjectLegalHold(
            this.ops["GetObjectLegalHold"].apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectLockConfigurationRequest, "Bucket">]: (Omit<GetObjectLockConfigurationRequest, "Bucket">)[K]
    }>): GetObjectLockConfigurationOutput {
        return this.client.getObjectLockConfiguration(
            this.ops["GetObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectRetentionRequest, "Bucket">]: (Omit<GetObjectRetentionRequest, "Bucket">)[K]
    }>): GetObjectRetentionOutput {
        return this.client.getObjectRetention(
            this.ops["GetObjectRetention"].apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectTaggingRequest, "Bucket">]: (Omit<GetObjectTaggingRequest, "Bucket">)[K]
    }>): GetObjectTaggingOutput {
        return this.client.getObjectTagging(
            this.ops["GetObjectTagging"].apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof Omit<GetObjectTorrentRequest, "Bucket">]: (Omit<GetObjectTorrentRequest, "Bucket">)[K]
    }>): GetObjectTorrentOutput {
        return this.client.getObjectTorrent(
            this.ops["GetObjectTorrent"].apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<GetPublicAccessBlockRequest, "Bucket">]: (Omit<GetPublicAccessBlockRequest, "Bucket">)[K]
    }>): GetPublicAccessBlockOutput {
        return this.client.getPublicAccessBlock(
            this.ops["GetPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeHeadBucket(partialParams: ToOptional<{
      [K in keyof Omit<HeadBucketRequest, "Bucket">]: (Omit<HeadBucketRequest, "Bucket">)[K]
    }>): void {
        return this.client.headBucket(
            this.ops["HeadBucket"].apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof Omit<HeadObjectRequest, "Bucket">]: (Omit<HeadObjectRequest, "Bucket">)[K]
    }>): HeadObjectOutput {
        return this.client.headObject(
            this.ops["HeadObject"].apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket">]: (Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket">)[K]
    }>): ListBucketAnalyticsConfigurationsOutput {
        return this.client.listBucketAnalyticsConfigurations(
            this.ops["ListBucketAnalyticsConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket">]: (Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket">)[K]
    }>): ListBucketIntelligentTieringConfigurationsOutput {
        return this.client.listBucketIntelligentTieringConfigurations(
            this.ops["ListBucketIntelligentTieringConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketInventoryConfigurationsRequest, "Bucket">]: (Omit<ListBucketInventoryConfigurationsRequest, "Bucket">)[K]
    }>): ListBucketInventoryConfigurationsOutput {
        return this.client.listBucketInventoryConfigurations(
            this.ops["ListBucketInventoryConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof Omit<ListBucketMetricsConfigurationsRequest, "Bucket">]: (Omit<ListBucketMetricsConfigurationsRequest, "Bucket">)[K]
    }>): ListBucketMetricsConfigurationsOutput {
        return this.client.listBucketMetricsConfigurations(
            this.ops["ListBucketMetricsConfigurations"].apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof Omit<ListMultipartUploadsRequest, "Bucket">]: (Omit<ListMultipartUploadsRequest, "Bucket">)[K]
    }>): ListMultipartUploadsOutput {
        return this.client.listMultipartUploads(
            this.ops["ListMultipartUploads"].apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectVersionsRequest, "Bucket">]: (Omit<ListObjectVersionsRequest, "Bucket">)[K]
    }>): ListObjectVersionsOutput {
        return this.client.listObjectVersions(
            this.ops["ListObjectVersions"].apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectsRequest, "Bucket">]: (Omit<ListObjectsRequest, "Bucket">)[K]
    }>): ListObjectsOutput {
        return this.client.listObjects(
            this.ops["ListObjects"].apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof Omit<ListObjectsV2Request, "Bucket">]: (Omit<ListObjectsV2Request, "Bucket">)[K]
    }>): ListObjectsV2Output {
        return this.client.listObjectsV2(
            this.ops["ListObjectsV2"].apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof Omit<ListPartsRequest, "Bucket">]: (Omit<ListPartsRequest, "Bucket">)[K]
    }>): ListPartsOutput {
        return this.client.listParts(
            this.ops["ListParts"].apply(partialParams)
        );
    }

    invokePutBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAccelerateConfigurationRequest, "Bucket">]: (Omit<PutBucketAccelerateConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketAccelerateConfiguration(
            this.ops["PutBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketAcl(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAclRequest, "Bucket">]: (Omit<PutBucketAclRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketAcl(
            this.ops["PutBucketAcl"].apply(partialParams)
        );
    }

    invokePutBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketAnalyticsConfigurationRequest, "Bucket">]: (Omit<PutBucketAnalyticsConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketAnalyticsConfiguration(
            this.ops["PutBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketCors(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketCorsRequest, "Bucket">]: (Omit<PutBucketCorsRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketCors(
            this.ops["PutBucketCors"].apply(partialParams)
        );
    }

    invokePutBucketEncryption(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketEncryptionRequest, "Bucket">]: (Omit<PutBucketEncryptionRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketEncryption(
            this.ops["PutBucketEncryption"].apply(partialParams)
        );
    }

    invokePutBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket">]: (Omit<PutBucketIntelligentTieringConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketIntelligentTieringConfiguration(
            this.ops["PutBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketInventoryConfigurationRequest, "Bucket">]: (Omit<PutBucketInventoryConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketInventoryConfiguration(
            this.ops["PutBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketLifecycle(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLifecycleRequest, "Bucket">]: (Omit<PutBucketLifecycleRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketLifecycle(
            this.ops["PutBucketLifecycle"].apply(partialParams)
        );
    }

    invokePutBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLifecycleConfigurationRequest, "Bucket">]: (Omit<PutBucketLifecycleConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketLifecycleConfiguration(
            this.ops["PutBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketLogging(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketLoggingRequest, "Bucket">]: (Omit<PutBucketLoggingRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketLogging(
            this.ops["PutBucketLogging"].apply(partialParams)
        );
    }

    invokePutBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketMetricsConfigurationRequest, "Bucket">]: (Omit<PutBucketMetricsConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketMetricsConfiguration(
            this.ops["PutBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketNotification(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketNotificationRequest, "Bucket">]: (Omit<PutBucketNotificationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketNotification(
            this.ops["PutBucketNotification"].apply(partialParams)
        );
    }

    invokePutBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketNotificationConfigurationRequest, "Bucket">]: (Omit<PutBucketNotificationConfigurationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketNotificationConfiguration(
            this.ops["PutBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokePutBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketOwnershipControlsRequest, "Bucket">]: (Omit<PutBucketOwnershipControlsRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketOwnershipControls(
            this.ops["PutBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokePutBucketPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketPolicyRequest, "Bucket">]: (Omit<PutBucketPolicyRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketPolicy(
            this.ops["PutBucketPolicy"].apply(partialParams)
        );
    }

    invokePutBucketReplication(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketReplicationRequest, "Bucket">]: (Omit<PutBucketReplicationRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketReplication(
            this.ops["PutBucketReplication"].apply(partialParams)
        );
    }

    invokePutBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketRequestPaymentRequest, "Bucket">]: (Omit<PutBucketRequestPaymentRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketRequestPayment(
            this.ops["PutBucketRequestPayment"].apply(partialParams)
        );
    }

    invokePutBucketTagging(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketTaggingRequest, "Bucket">]: (Omit<PutBucketTaggingRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketTagging(
            this.ops["PutBucketTagging"].apply(partialParams)
        );
    }

    invokePutBucketVersioning(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketVersioningRequest, "Bucket">]: (Omit<PutBucketVersioningRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketVersioning(
            this.ops["PutBucketVersioning"].apply(partialParams)
        );
    }

    invokePutBucketWebsite(partialParams: ToOptional<{
      [K in keyof Omit<PutBucketWebsiteRequest, "Bucket">]: (Omit<PutBucketWebsiteRequest, "Bucket">)[K]
    }>): void {
        return this.client.putBucketWebsite(
            this.ops["PutBucketWebsite"].apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectRequest, "Bucket">]: (Omit<PutObjectRequest, "Bucket">)[K]
    }>): PutObjectOutput {
        return this.client.putObject(
            this.ops["PutObject"].apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectAclRequest, "Bucket">]: (Omit<PutObjectAclRequest, "Bucket">)[K]
    }>): PutObjectAclOutput {
        return this.client.putObjectAcl(
            this.ops["PutObjectAcl"].apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectLegalHoldRequest, "Bucket">]: (Omit<PutObjectLegalHoldRequest, "Bucket">)[K]
    }>): PutObjectLegalHoldOutput {
        return this.client.putObjectLegalHold(
            this.ops["PutObjectLegalHold"].apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectLockConfigurationRequest, "Bucket">]: (Omit<PutObjectLockConfigurationRequest, "Bucket">)[K]
    }>): PutObjectLockConfigurationOutput {
        return this.client.putObjectLockConfiguration(
            this.ops["PutObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectRetentionRequest, "Bucket">]: (Omit<PutObjectRetentionRequest, "Bucket">)[K]
    }>): PutObjectRetentionOutput {
        return this.client.putObjectRetention(
            this.ops["PutObjectRetention"].apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof Omit<PutObjectTaggingRequest, "Bucket">]: (Omit<PutObjectTaggingRequest, "Bucket">)[K]
    }>): PutObjectTaggingOutput {
        return this.client.putObjectTagging(
            this.ops["PutObjectTagging"].apply(partialParams)
        );
    }

    invokePutPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof Omit<PutPublicAccessBlockRequest, "Bucket">]: (Omit<PutPublicAccessBlockRequest, "Bucket">)[K]
    }>): void {
        return this.client.putPublicAccessBlock(
            this.ops["PutPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof Omit<RestoreObjectRequest, "Bucket">]: (Omit<RestoreObjectRequest, "Bucket">)[K]
    }>): RestoreObjectOutput {
        return this.client.restoreObject(
            this.ops["RestoreObject"].apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof Omit<SelectObjectContentRequest, "Bucket">]: (Omit<SelectObjectContentRequest, "Bucket">)[K]
    }>): SelectObjectContentOutput {
        return this.client.selectObjectContent(
            this.ops["SelectObjectContent"].apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof Omit<UploadPartRequest, "Bucket">]: (Omit<UploadPartRequest, "Bucket">)[K]
    }>): UploadPartOutput {
        return this.client.uploadPart(
            this.ops["UploadPart"].apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof Omit<UploadPartCopyRequest, "Bucket">]: (Omit<UploadPartCopyRequest, "Bucket">)[K]
    }>): UploadPartCopyOutput {
        return this.client.uploadPartCopy(
            this.ops["UploadPartCopy"].apply(partialParams)
        );
    }

    invokeWriteGetObjectResponse(partialParams: ToOptional<{
      [K in keyof WriteGetObjectResponseRequest]: (WriteGetObjectResponseRequest)[K]
    }>): void {
        return this.client.writeGetObjectResponse(
            this.ops["WriteGetObjectResponse"].apply(partialParams)
        );
    }
}