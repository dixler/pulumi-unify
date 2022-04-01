
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
    DeleteObjectRequest,
    DeleteObjectTaggingRequest,
    DeleteObjectsRequest,
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
    PutObjectRequest,
    PutObjectAclRequest,
    PutObjectLegalHoldRequest,
    PutObjectLockConfigurationRequest,
    PutObjectRetentionRequest,
    PutObjectTaggingRequest,
    RestoreObjectRequest,
    SelectObjectContentRequest,
    UploadPartRequest,
    UploadPartCopyRequest,
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

export default class extends aws.s3.AnalyticsConfiguration {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.s3.AnalyticsConfiguration>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.S3()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeAbortMultipartUpload(partialParams: ToOptional<{
      [K in keyof AbortMultipartUploadRequest & keyof Omit<AbortMultipartUploadRequest, "Bucket">]: (AbortMultipartUploadRequest)[K]
    }>): Request<AbortMultipartUploadOutput, AWSError> {
        this.boot();
        return this.client.abortMultipartUpload(
          this.ops["AbortMultipartUpload"].apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadRequest & keyof Omit<CompleteMultipartUploadRequest, "Bucket">]: (CompleteMultipartUploadRequest)[K]
    }>): Request<CompleteMultipartUploadOutput, AWSError> {
        this.boot();
        return this.client.completeMultipartUpload(
          this.ops["CompleteMultipartUpload"].apply(partialParams)
        );
    }

    invokeCopyObject(partialParams: ToOptional<{
      [K in keyof CopyObjectRequest & keyof Omit<CopyObjectRequest, "Bucket">]: (CopyObjectRequest)[K]
    }>): Request<CopyObjectOutput, AWSError> {
        this.boot();
        return this.client.copyObject(
          this.ops["CopyObject"].apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest & keyof Omit<CreateBucketRequest, "Bucket">]: (CreateBucketRequest)[K]
    }>): Request<CreateBucketOutput, AWSError> {
        this.boot();
        return this.client.createBucket(
          this.ops["CreateBucket"].apply(partialParams)
        );
    }

    invokeCreateMultipartUpload(partialParams: ToOptional<{
      [K in keyof CreateMultipartUploadRequest & keyof Omit<CreateMultipartUploadRequest, "Bucket">]: (CreateMultipartUploadRequest)[K]
    }>): Request<CreateMultipartUploadOutput, AWSError> {
        this.boot();
        return this.client.createMultipartUpload(
          this.ops["CreateMultipartUpload"].apply(partialParams)
        );
    }

    invokeDeleteObject(partialParams: ToOptional<{
      [K in keyof DeleteObjectRequest & keyof Omit<DeleteObjectRequest, "Bucket">]: (DeleteObjectRequest)[K]
    }>): Request<DeleteObjectOutput, AWSError> {
        this.boot();
        return this.client.deleteObject(
          this.ops["DeleteObject"].apply(partialParams)
        );
    }

    invokeDeleteObjectTagging(partialParams: ToOptional<{
      [K in keyof DeleteObjectTaggingRequest & keyof Omit<DeleteObjectTaggingRequest, "Bucket">]: (DeleteObjectTaggingRequest)[K]
    }>): Request<DeleteObjectTaggingOutput, AWSError> {
        this.boot();
        return this.client.deleteObjectTagging(
          this.ops["DeleteObjectTagging"].apply(partialParams)
        );
    }

    invokeDeleteObjects(partialParams: ToOptional<{
      [K in keyof DeleteObjectsRequest & keyof Omit<DeleteObjectsRequest, "Bucket">]: (DeleteObjectsRequest)[K]
    }>): Request<DeleteObjectsOutput, AWSError> {
        this.boot();
        return this.client.deleteObjects(
          this.ops["DeleteObjects"].apply(partialParams)
        );
    }

    invokeGetBucketAccelerateConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAccelerateConfigurationRequest & keyof Omit<GetBucketAccelerateConfigurationRequest, "Bucket">]: (GetBucketAccelerateConfigurationRequest)[K]
    }>): Request<GetBucketAccelerateConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getBucketAccelerateConfiguration(
          this.ops["GetBucketAccelerateConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketAcl(partialParams: ToOptional<{
      [K in keyof GetBucketAclRequest & keyof Omit<GetBucketAclRequest, "Bucket">]: (GetBucketAclRequest)[K]
    }>): Request<GetBucketAclOutput, AWSError> {
        this.boot();
        return this.client.getBucketAcl(
          this.ops["GetBucketAcl"].apply(partialParams)
        );
    }

    invokeGetBucketAnalyticsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketAnalyticsConfigurationRequest & keyof Omit<GetBucketAnalyticsConfigurationRequest, "Bucket">]: (GetBucketAnalyticsConfigurationRequest)[K]
    }>): Request<GetBucketAnalyticsConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getBucketAnalyticsConfiguration(
          this.ops["GetBucketAnalyticsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketCors(partialParams: ToOptional<{
      [K in keyof GetBucketCorsRequest & keyof Omit<GetBucketCorsRequest, "Bucket">]: (GetBucketCorsRequest)[K]
    }>): Request<GetBucketCorsOutput, AWSError> {
        this.boot();
        return this.client.getBucketCors(
          this.ops["GetBucketCors"].apply(partialParams)
        );
    }

    invokeGetBucketEncryption(partialParams: ToOptional<{
      [K in keyof GetBucketEncryptionRequest & keyof Omit<GetBucketEncryptionRequest, "Bucket">]: (GetBucketEncryptionRequest)[K]
    }>): Request<GetBucketEncryptionOutput, AWSError> {
        this.boot();
        return this.client.getBucketEncryption(
          this.ops["GetBucketEncryption"].apply(partialParams)
        );
    }

    invokeGetBucketIntelligentTieringConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketIntelligentTieringConfigurationRequest & keyof Omit<GetBucketIntelligentTieringConfigurationRequest, "Bucket">]: (GetBucketIntelligentTieringConfigurationRequest)[K]
    }>): Request<GetBucketIntelligentTieringConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getBucketIntelligentTieringConfiguration(
          this.ops["GetBucketIntelligentTieringConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketInventoryConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketInventoryConfigurationRequest & keyof Omit<GetBucketInventoryConfigurationRequest, "Bucket">]: (GetBucketInventoryConfigurationRequest)[K]
    }>): Request<GetBucketInventoryConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getBucketInventoryConfiguration(
          this.ops["GetBucketInventoryConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycle(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleRequest & keyof Omit<GetBucketLifecycleRequest, "Bucket">]: (GetBucketLifecycleRequest)[K]
    }>): Request<GetBucketLifecycleOutput, AWSError> {
        this.boot();
        return this.client.getBucketLifecycle(
          this.ops["GetBucketLifecycle"].apply(partialParams)
        );
    }

    invokeGetBucketLifecycleConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketLifecycleConfigurationRequest & keyof Omit<GetBucketLifecycleConfigurationRequest, "Bucket">]: (GetBucketLifecycleConfigurationRequest)[K]
    }>): Request<GetBucketLifecycleConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getBucketLifecycleConfiguration(
          this.ops["GetBucketLifecycleConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketLocation(partialParams: ToOptional<{
      [K in keyof GetBucketLocationRequest & keyof Omit<GetBucketLocationRequest, "Bucket">]: (GetBucketLocationRequest)[K]
    }>): Request<GetBucketLocationOutput, AWSError> {
        this.boot();
        return this.client.getBucketLocation(
          this.ops["GetBucketLocation"].apply(partialParams)
        );
    }

    invokeGetBucketLogging(partialParams: ToOptional<{
      [K in keyof GetBucketLoggingRequest & keyof Omit<GetBucketLoggingRequest, "Bucket">]: (GetBucketLoggingRequest)[K]
    }>): Request<GetBucketLoggingOutput, AWSError> {
        this.boot();
        return this.client.getBucketLogging(
          this.ops["GetBucketLogging"].apply(partialParams)
        );
    }

    invokeGetBucketMetricsConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketMetricsConfigurationRequest & keyof Omit<GetBucketMetricsConfigurationRequest, "Bucket">]: (GetBucketMetricsConfigurationRequest)[K]
    }>): Request<GetBucketMetricsConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getBucketMetricsConfiguration(
          this.ops["GetBucketMetricsConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketNotification(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest & keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket">]: (GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfigurationDeprecated, AWSError> {
        this.boot();
        return this.client.getBucketNotification(
          this.ops["GetBucketNotification"].apply(partialParams)
        );
    }

    invokeGetBucketNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof GetBucketNotificationConfigurationRequest & keyof Omit<GetBucketNotificationConfigurationRequest, "Bucket">]: (GetBucketNotificationConfigurationRequest)[K]
    }>): Request<NotificationConfiguration, AWSError> {
        this.boot();
        return this.client.getBucketNotificationConfiguration(
          this.ops["GetBucketNotificationConfiguration"].apply(partialParams)
        );
    }

    invokeGetBucketOwnershipControls(partialParams: ToOptional<{
      [K in keyof GetBucketOwnershipControlsRequest & keyof Omit<GetBucketOwnershipControlsRequest, "Bucket">]: (GetBucketOwnershipControlsRequest)[K]
    }>): Request<GetBucketOwnershipControlsOutput, AWSError> {
        this.boot();
        return this.client.getBucketOwnershipControls(
          this.ops["GetBucketOwnershipControls"].apply(partialParams)
        );
    }

    invokeGetBucketPolicy(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyRequest & keyof Omit<GetBucketPolicyRequest, "Bucket">]: (GetBucketPolicyRequest)[K]
    }>): Request<GetBucketPolicyOutput, AWSError> {
        this.boot();
        return this.client.getBucketPolicy(
          this.ops["GetBucketPolicy"].apply(partialParams)
        );
    }

    invokeGetBucketPolicyStatus(partialParams: ToOptional<{
      [K in keyof GetBucketPolicyStatusRequest & keyof Omit<GetBucketPolicyStatusRequest, "Bucket">]: (GetBucketPolicyStatusRequest)[K]
    }>): Request<GetBucketPolicyStatusOutput, AWSError> {
        this.boot();
        return this.client.getBucketPolicyStatus(
          this.ops["GetBucketPolicyStatus"].apply(partialParams)
        );
    }

    invokeGetBucketReplication(partialParams: ToOptional<{
      [K in keyof GetBucketReplicationRequest & keyof Omit<GetBucketReplicationRequest, "Bucket">]: (GetBucketReplicationRequest)[K]
    }>): Request<GetBucketReplicationOutput, AWSError> {
        this.boot();
        return this.client.getBucketReplication(
          this.ops["GetBucketReplication"].apply(partialParams)
        );
    }

    invokeGetBucketRequestPayment(partialParams: ToOptional<{
      [K in keyof GetBucketRequestPaymentRequest & keyof Omit<GetBucketRequestPaymentRequest, "Bucket">]: (GetBucketRequestPaymentRequest)[K]
    }>): Request<GetBucketRequestPaymentOutput, AWSError> {
        this.boot();
        return this.client.getBucketRequestPayment(
          this.ops["GetBucketRequestPayment"].apply(partialParams)
        );
    }

    invokeGetBucketTagging(partialParams: ToOptional<{
      [K in keyof GetBucketTaggingRequest & keyof Omit<GetBucketTaggingRequest, "Bucket">]: (GetBucketTaggingRequest)[K]
    }>): Request<GetBucketTaggingOutput, AWSError> {
        this.boot();
        return this.client.getBucketTagging(
          this.ops["GetBucketTagging"].apply(partialParams)
        );
    }

    invokeGetBucketVersioning(partialParams: ToOptional<{
      [K in keyof GetBucketVersioningRequest & keyof Omit<GetBucketVersioningRequest, "Bucket">]: (GetBucketVersioningRequest)[K]
    }>): Request<GetBucketVersioningOutput, AWSError> {
        this.boot();
        return this.client.getBucketVersioning(
          this.ops["GetBucketVersioning"].apply(partialParams)
        );
    }

    invokeGetBucketWebsite(partialParams: ToOptional<{
      [K in keyof GetBucketWebsiteRequest & keyof Omit<GetBucketWebsiteRequest, "Bucket">]: (GetBucketWebsiteRequest)[K]
    }>): Request<GetBucketWebsiteOutput, AWSError> {
        this.boot();
        return this.client.getBucketWebsite(
          this.ops["GetBucketWebsite"].apply(partialParams)
        );
    }

    invokeGetObject(partialParams: ToOptional<{
      [K in keyof GetObjectRequest & keyof Omit<GetObjectRequest, "Bucket">]: (GetObjectRequest)[K]
    }>): Request<GetObjectOutput, AWSError> {
        this.boot();
        return this.client.getObject(
          this.ops["GetObject"].apply(partialParams)
        );
    }

    invokeGetObjectAcl(partialParams: ToOptional<{
      [K in keyof GetObjectAclRequest & keyof Omit<GetObjectAclRequest, "Bucket">]: (GetObjectAclRequest)[K]
    }>): Request<GetObjectAclOutput, AWSError> {
        this.boot();
        return this.client.getObjectAcl(
          this.ops["GetObjectAcl"].apply(partialParams)
        );
    }

    invokeGetObjectLegalHold(partialParams: ToOptional<{
      [K in keyof GetObjectLegalHoldRequest & keyof Omit<GetObjectLegalHoldRequest, "Bucket">]: (GetObjectLegalHoldRequest)[K]
    }>): Request<GetObjectLegalHoldOutput, AWSError> {
        this.boot();
        return this.client.getObjectLegalHold(
          this.ops["GetObjectLegalHold"].apply(partialParams)
        );
    }

    invokeGetObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof GetObjectLockConfigurationRequest & keyof Omit<GetObjectLockConfigurationRequest, "Bucket">]: (GetObjectLockConfigurationRequest)[K]
    }>): Request<GetObjectLockConfigurationOutput, AWSError> {
        this.boot();
        return this.client.getObjectLockConfiguration(
          this.ops["GetObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokeGetObjectRetention(partialParams: ToOptional<{
      [K in keyof GetObjectRetentionRequest & keyof Omit<GetObjectRetentionRequest, "Bucket">]: (GetObjectRetentionRequest)[K]
    }>): Request<GetObjectRetentionOutput, AWSError> {
        this.boot();
        return this.client.getObjectRetention(
          this.ops["GetObjectRetention"].apply(partialParams)
        );
    }

    invokeGetObjectTagging(partialParams: ToOptional<{
      [K in keyof GetObjectTaggingRequest & keyof Omit<GetObjectTaggingRequest, "Bucket">]: (GetObjectTaggingRequest)[K]
    }>): Request<GetObjectTaggingOutput, AWSError> {
        this.boot();
        return this.client.getObjectTagging(
          this.ops["GetObjectTagging"].apply(partialParams)
        );
    }

    invokeGetObjectTorrent(partialParams: ToOptional<{
      [K in keyof GetObjectTorrentRequest & keyof Omit<GetObjectTorrentRequest, "Bucket">]: (GetObjectTorrentRequest)[K]
    }>): Request<GetObjectTorrentOutput, AWSError> {
        this.boot();
        return this.client.getObjectTorrent(
          this.ops["GetObjectTorrent"].apply(partialParams)
        );
    }

    invokeGetPublicAccessBlock(partialParams: ToOptional<{
      [K in keyof GetPublicAccessBlockRequest & keyof Omit<GetPublicAccessBlockRequest, "Bucket">]: (GetPublicAccessBlockRequest)[K]
    }>): Request<GetPublicAccessBlockOutput, AWSError> {
        this.boot();
        return this.client.getPublicAccessBlock(
          this.ops["GetPublicAccessBlock"].apply(partialParams)
        );
    }

    invokeHeadObject(partialParams: ToOptional<{
      [K in keyof HeadObjectRequest & keyof Omit<HeadObjectRequest, "Bucket">]: (HeadObjectRequest)[K]
    }>): Request<HeadObjectOutput, AWSError> {
        this.boot();
        return this.client.headObject(
          this.ops["HeadObject"].apply(partialParams)
        );
    }

    invokeListBucketAnalyticsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketAnalyticsConfigurationsRequest & keyof Omit<ListBucketAnalyticsConfigurationsRequest, "Bucket">]: (ListBucketAnalyticsConfigurationsRequest)[K]
    }>): Request<ListBucketAnalyticsConfigurationsOutput, AWSError> {
        this.boot();
        return this.client.listBucketAnalyticsConfigurations(
          this.ops["ListBucketAnalyticsConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketIntelligentTieringConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketIntelligentTieringConfigurationsRequest & keyof Omit<ListBucketIntelligentTieringConfigurationsRequest, "Bucket">]: (ListBucketIntelligentTieringConfigurationsRequest)[K]
    }>): Request<ListBucketIntelligentTieringConfigurationsOutput, AWSError> {
        this.boot();
        return this.client.listBucketIntelligentTieringConfigurations(
          this.ops["ListBucketIntelligentTieringConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketInventoryConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketInventoryConfigurationsRequest & keyof Omit<ListBucketInventoryConfigurationsRequest, "Bucket">]: (ListBucketInventoryConfigurationsRequest)[K]
    }>): Request<ListBucketInventoryConfigurationsOutput, AWSError> {
        this.boot();
        return this.client.listBucketInventoryConfigurations(
          this.ops["ListBucketInventoryConfigurations"].apply(partialParams)
        );
    }

    invokeListBucketMetricsConfigurations(partialParams: ToOptional<{
      [K in keyof ListBucketMetricsConfigurationsRequest & keyof Omit<ListBucketMetricsConfigurationsRequest, "Bucket">]: (ListBucketMetricsConfigurationsRequest)[K]
    }>): Request<ListBucketMetricsConfigurationsOutput, AWSError> {
        this.boot();
        return this.client.listBucketMetricsConfigurations(
          this.ops["ListBucketMetricsConfigurations"].apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsRequest & keyof Omit<ListMultipartUploadsRequest, "Bucket">]: (ListMultipartUploadsRequest)[K]
    }>): Request<ListMultipartUploadsOutput, AWSError> {
        this.boot();
        return this.client.listMultipartUploads(
          this.ops["ListMultipartUploads"].apply(partialParams)
        );
    }

    invokeListObjectVersions(partialParams: ToOptional<{
      [K in keyof ListObjectVersionsRequest & keyof Omit<ListObjectVersionsRequest, "Bucket">]: (ListObjectVersionsRequest)[K]
    }>): Request<ListObjectVersionsOutput, AWSError> {
        this.boot();
        return this.client.listObjectVersions(
          this.ops["ListObjectVersions"].apply(partialParams)
        );
    }

    invokeListObjects(partialParams: ToOptional<{
      [K in keyof ListObjectsRequest & keyof Omit<ListObjectsRequest, "Bucket">]: (ListObjectsRequest)[K]
    }>): Request<ListObjectsOutput, AWSError> {
        this.boot();
        return this.client.listObjects(
          this.ops["ListObjects"].apply(partialParams)
        );
    }

    invokeListObjectsV2(partialParams: ToOptional<{
      [K in keyof ListObjectsV2Request & keyof Omit<ListObjectsV2Request, "Bucket">]: (ListObjectsV2Request)[K]
    }>): Request<ListObjectsV2Output, AWSError> {
        this.boot();
        return this.client.listObjectsV2(
          this.ops["ListObjectsV2"].apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsRequest & keyof Omit<ListPartsRequest, "Bucket">]: (ListPartsRequest)[K]
    }>): Request<ListPartsOutput, AWSError> {
        this.boot();
        return this.client.listParts(
          this.ops["ListParts"].apply(partialParams)
        );
    }

    invokePutObject(partialParams: ToOptional<{
      [K in keyof PutObjectRequest & keyof Omit<PutObjectRequest, "Bucket">]: (PutObjectRequest)[K]
    }>): Request<PutObjectOutput, AWSError> {
        this.boot();
        return this.client.putObject(
          this.ops["PutObject"].apply(partialParams)
        );
    }

    invokePutObjectAcl(partialParams: ToOptional<{
      [K in keyof PutObjectAclRequest & keyof Omit<PutObjectAclRequest, "Bucket">]: (PutObjectAclRequest)[K]
    }>): Request<PutObjectAclOutput, AWSError> {
        this.boot();
        return this.client.putObjectAcl(
          this.ops["PutObjectAcl"].apply(partialParams)
        );
    }

    invokePutObjectLegalHold(partialParams: ToOptional<{
      [K in keyof PutObjectLegalHoldRequest & keyof Omit<PutObjectLegalHoldRequest, "Bucket">]: (PutObjectLegalHoldRequest)[K]
    }>): Request<PutObjectLegalHoldOutput, AWSError> {
        this.boot();
        return this.client.putObjectLegalHold(
          this.ops["PutObjectLegalHold"].apply(partialParams)
        );
    }

    invokePutObjectLockConfiguration(partialParams: ToOptional<{
      [K in keyof PutObjectLockConfigurationRequest & keyof Omit<PutObjectLockConfigurationRequest, "Bucket">]: (PutObjectLockConfigurationRequest)[K]
    }>): Request<PutObjectLockConfigurationOutput, AWSError> {
        this.boot();
        return this.client.putObjectLockConfiguration(
          this.ops["PutObjectLockConfiguration"].apply(partialParams)
        );
    }

    invokePutObjectRetention(partialParams: ToOptional<{
      [K in keyof PutObjectRetentionRequest & keyof Omit<PutObjectRetentionRequest, "Bucket">]: (PutObjectRetentionRequest)[K]
    }>): Request<PutObjectRetentionOutput, AWSError> {
        this.boot();
        return this.client.putObjectRetention(
          this.ops["PutObjectRetention"].apply(partialParams)
        );
    }

    invokePutObjectTagging(partialParams: ToOptional<{
      [K in keyof PutObjectTaggingRequest & keyof Omit<PutObjectTaggingRequest, "Bucket">]: (PutObjectTaggingRequest)[K]
    }>): Request<PutObjectTaggingOutput, AWSError> {
        this.boot();
        return this.client.putObjectTagging(
          this.ops["PutObjectTagging"].apply(partialParams)
        );
    }

    invokeRestoreObject(partialParams: ToOptional<{
      [K in keyof RestoreObjectRequest & keyof Omit<RestoreObjectRequest, "Bucket">]: (RestoreObjectRequest)[K]
    }>): Request<RestoreObjectOutput, AWSError> {
        this.boot();
        return this.client.restoreObject(
          this.ops["RestoreObject"].apply(partialParams)
        );
    }

    invokeSelectObjectContent(partialParams: ToOptional<{
      [K in keyof SelectObjectContentRequest & keyof Omit<SelectObjectContentRequest, "Bucket">]: (SelectObjectContentRequest)[K]
    }>): Request<SelectObjectContentOutput, AWSError> {
        this.boot();
        return this.client.selectObjectContent(
          this.ops["SelectObjectContent"].apply(partialParams)
        );
    }

    invokeUploadPart(partialParams: ToOptional<{
      [K in keyof UploadPartRequest & keyof Omit<UploadPartRequest, "Bucket">]: (UploadPartRequest)[K]
    }>): Request<UploadPartOutput, AWSError> {
        this.boot();
        return this.client.uploadPart(
          this.ops["UploadPart"].apply(partialParams)
        );
    }

    invokeUploadPartCopy(partialParams: ToOptional<{
      [K in keyof UploadPartCopyRequest & keyof Omit<UploadPartCopyRequest, "Bucket">]: (UploadPartCopyRequest)[K]
    }>): Request<UploadPartCopyOutput, AWSError> {
        this.boot();
        return this.client.uploadPartCopy(
          this.ops["UploadPartCopy"].apply(partialParams)
        );
    }
}