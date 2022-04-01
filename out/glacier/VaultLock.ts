
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CompleteMultipartUploadInput,
    CreateVaultInput,
    DescribeJobInput,
    DescribeVaultInput,
    GetDataRetrievalPolicyInput,
    GetJobOutputInput,
    GetVaultAccessPolicyInput,
    GetVaultLockInput,
    GetVaultNotificationsInput,
    InitiateJobInput,
    InitiateMultipartUploadInput,
    InitiateVaultLockInput,
    ListJobsInput,
    ListMultipartUploadsInput,
    ListPartsInput,
    ListProvisionedCapacityInput,
    ListTagsForVaultInput,
    ListVaultsInput,
    PurchaseProvisionedCapacityInput,
    UploadArchiveInput,
    UploadMultipartPartInput,
    ArchiveCreationOutput,
    CreateVaultOutput,
    GlacierJobDescription,
    DescribeVaultOutput,
    GetDataRetrievalPolicyOutput,
    GetJobOutputOutput,
    GetVaultAccessPolicyOutput,
    GetVaultLockOutput,
    GetVaultNotificationsOutput,
    InitiateJobOutput,
    InitiateMultipartUploadOutput,
    InitiateVaultLockOutput,
    ListJobsOutput,
    ListMultipartUploadsOutput,
    ListPartsOutput,
    ListProvisionedCapacityOutput,
    ListTagsForVaultOutput,
    ListVaultsOutput,
    PurchaseProvisionedCapacityOutput,
    UploadMultipartPartOutput
} from "aws-sdk/clients/glacier";
const schema = require("../apis/glacier-2012-06-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glacier.VaultLock {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.glacier.VaultLock>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Glacier()
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

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadInput]: (CompleteMultipartUploadInput)[K]
    }>): Request<ArchiveCreationOutput, AWSError> {
        this.boot();
        return this.client.completeMultipartUpload(
          this.ops["CompleteMultipartUpload"].apply(partialParams)
        );
    }

    invokeCreateVault(partialParams: ToOptional<{
      [K in keyof CreateVaultInput]: (CreateVaultInput)[K]
    }>): Request<CreateVaultOutput, AWSError> {
        this.boot();
        return this.client.createVault(
          this.ops["CreateVault"].apply(partialParams)
        );
    }

    invokeDescribeJob(partialParams: ToOptional<{
      [K in keyof DescribeJobInput]: (DescribeJobInput)[K]
    }>): Request<GlacierJobDescription, AWSError> {
        this.boot();
        return this.client.describeJob(
          this.ops["DescribeJob"].apply(partialParams)
        );
    }

    invokeDescribeVault(partialParams: ToOptional<{
      [K in keyof DescribeVaultInput]: (DescribeVaultInput)[K]
    }>): Request<DescribeVaultOutput, AWSError> {
        this.boot();
        return this.client.describeVault(
          this.ops["DescribeVault"].apply(partialParams)
        );
    }

    invokeGetDataRetrievalPolicy(partialParams: ToOptional<{
      [K in keyof GetDataRetrievalPolicyInput]: (GetDataRetrievalPolicyInput)[K]
    }>): Request<GetDataRetrievalPolicyOutput, AWSError> {
        this.boot();
        return this.client.getDataRetrievalPolicy(
          this.ops["GetDataRetrievalPolicy"].apply(partialParams)
        );
    }

    invokeGetJobOutput(partialParams: ToOptional<{
      [K in keyof GetJobOutputInput]: (GetJobOutputInput)[K]
    }>): Request<GetJobOutputOutput, AWSError> {
        this.boot();
        return this.client.getJobOutput(
          this.ops["GetJobOutput"].apply(partialParams)
        );
    }

    invokeGetVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetVaultAccessPolicyInput]: (GetVaultAccessPolicyInput)[K]
    }>): Request<GetVaultAccessPolicyOutput, AWSError> {
        this.boot();
        return this.client.getVaultAccessPolicy(
          this.ops["GetVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeGetVaultLock(partialParams: ToOptional<{
      [K in keyof GetVaultLockInput]: (GetVaultLockInput)[K]
    }>): Request<GetVaultLockOutput, AWSError> {
        this.boot();
        return this.client.getVaultLock(
          this.ops["GetVaultLock"].apply(partialParams)
        );
    }

    invokeGetVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetVaultNotificationsInput]: (GetVaultNotificationsInput)[K]
    }>): Request<GetVaultNotificationsOutput, AWSError> {
        this.boot();
        return this.client.getVaultNotifications(
          this.ops["GetVaultNotifications"].apply(partialParams)
        );
    }

    invokeInitiateJob(partialParams: ToOptional<{
      [K in keyof InitiateJobInput]: (InitiateJobInput)[K]
    }>): Request<InitiateJobOutput, AWSError> {
        this.boot();
        return this.client.initiateJob(
          this.ops["InitiateJob"].apply(partialParams)
        );
    }

    invokeInitiateMultipartUpload(partialParams: ToOptional<{
      [K in keyof InitiateMultipartUploadInput]: (InitiateMultipartUploadInput)[K]
    }>): Request<InitiateMultipartUploadOutput, AWSError> {
        this.boot();
        return this.client.initiateMultipartUpload(
          this.ops["InitiateMultipartUpload"].apply(partialParams)
        );
    }

    invokeInitiateVaultLock(partialParams: ToOptional<{
      [K in keyof InitiateVaultLockInput]: (InitiateVaultLockInput)[K]
    }>): Request<InitiateVaultLockOutput, AWSError> {
        this.boot();
        return this.client.initiateVaultLock(
          this.ops["InitiateVaultLock"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsInput]: (ListJobsInput)[K]
    }>): Request<ListJobsOutput, AWSError> {
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsInput]: (ListMultipartUploadsInput)[K]
    }>): Request<ListMultipartUploadsOutput, AWSError> {
        this.boot();
        return this.client.listMultipartUploads(
          this.ops["ListMultipartUploads"].apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsInput]: (ListPartsInput)[K]
    }>): Request<ListPartsOutput, AWSError> {
        this.boot();
        return this.client.listParts(
          this.ops["ListParts"].apply(partialParams)
        );
    }

    invokeListProvisionedCapacity(partialParams: ToOptional<{
      [K in keyof ListProvisionedCapacityInput]: (ListProvisionedCapacityInput)[K]
    }>): Request<ListProvisionedCapacityOutput, AWSError> {
        this.boot();
        return this.client.listProvisionedCapacity(
          this.ops["ListProvisionedCapacity"].apply(partialParams)
        );
    }

    invokeListTagsForVault(partialParams: ToOptional<{
      [K in keyof ListTagsForVaultInput]: (ListTagsForVaultInput)[K]
    }>): Request<ListTagsForVaultOutput, AWSError> {
        this.boot();
        return this.client.listTagsForVault(
          this.ops["ListTagsForVault"].apply(partialParams)
        );
    }

    invokeListVaults(partialParams: ToOptional<{
      [K in keyof ListVaultsInput]: (ListVaultsInput)[K]
    }>): Request<ListVaultsOutput, AWSError> {
        this.boot();
        return this.client.listVaults(
          this.ops["ListVaults"].apply(partialParams)
        );
    }

    invokePurchaseProvisionedCapacity(partialParams: ToOptional<{
      [K in keyof PurchaseProvisionedCapacityInput]: (PurchaseProvisionedCapacityInput)[K]
    }>): Request<PurchaseProvisionedCapacityOutput, AWSError> {
        this.boot();
        return this.client.purchaseProvisionedCapacity(
          this.ops["PurchaseProvisionedCapacity"].apply(partialParams)
        );
    }

    invokeUploadArchive(partialParams: ToOptional<{
      [K in keyof UploadArchiveInput]: (UploadArchiveInput)[K]
    }>): Request<ArchiveCreationOutput, AWSError> {
        this.boot();
        return this.client.uploadArchive(
          this.ops["UploadArchive"].apply(partialParams)
        );
    }

    invokeUploadMultipartPart(partialParams: ToOptional<{
      [K in keyof UploadMultipartPartInput]: (UploadMultipartPartInput)[K]
    }>): Request<UploadMultipartPartOutput, AWSError> {
        this.boot();
        return this.client.uploadMultipartPart(
          this.ops["UploadMultipartPart"].apply(partialParams)
        );
    }
}