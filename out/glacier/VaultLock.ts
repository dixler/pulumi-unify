
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AbortMultipartUploadInput,
    AbortVaultLockInput,
    AddTagsToVaultInput,
    CompleteMultipartUploadInput,
    CompleteVaultLockInput,
    CreateVaultInput,
    DeleteArchiveInput,
    DeleteVaultInput,
    DeleteVaultAccessPolicyInput,
    DeleteVaultNotificationsInput,
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
    RemoveTagsFromVaultInput,
    SetDataRetrievalPolicyInput,
    SetVaultAccessPolicyInput,
    SetVaultNotificationsInput,
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
    constructor(...args: ConstructorParameters<typeof aws.glacier.VaultLock>) {
        super(...args)
        this.client = new awssdk.Glacier()
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
      [K in keyof AbortMultipartUploadInput & keyof AbortMultipartUploadInput]: (AbortMultipartUploadInput & AbortMultipartUploadInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortMultipartUpload(
          this.ops["AbortMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeAbortVaultLock(partialParams: ToOptional<{
      [K in keyof AbortVaultLockInput & keyof AbortVaultLockInput]: (AbortVaultLockInput & AbortVaultLockInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.abortVaultLock(
          this.ops["AbortVaultLock"].applicator.apply(partialParams)
        );
    }

    invokeAddTagsToVault(partialParams: ToOptional<{
      [K in keyof AddTagsToVaultInput & keyof AddTagsToVaultInput]: (AddTagsToVaultInput & AddTagsToVaultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToVault(
          this.ops["AddTagsToVault"].applicator.apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadInput & keyof CompleteMultipartUploadInput]: (CompleteMultipartUploadInput & CompleteMultipartUploadInput)[K]
    }>): Request<ArchiveCreationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMultipartUpload(
          this.ops["CompleteMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeCompleteVaultLock(partialParams: ToOptional<{
      [K in keyof CompleteVaultLockInput & keyof CompleteVaultLockInput]: (CompleteVaultLockInput & CompleteVaultLockInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeVaultLock(
          this.ops["CompleteVaultLock"].applicator.apply(partialParams)
        );
    }

    invokeCreateVault(partialParams: ToOptional<{
      [K in keyof CreateVaultInput & keyof CreateVaultInput]: (CreateVaultInput & CreateVaultInput)[K]
    }>): Request<CreateVaultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVault(
          this.ops["CreateVault"].applicator.apply(partialParams)
        );
    }

    invokeDeleteArchive(partialParams: ToOptional<{
      [K in keyof DeleteArchiveInput & keyof DeleteArchiveInput]: (DeleteArchiveInput & DeleteArchiveInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteArchive(
          this.ops["DeleteArchive"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVault(partialParams: ToOptional<{
      [K in keyof DeleteVaultInput & keyof DeleteVaultInput]: (DeleteVaultInput & DeleteVaultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVault(
          this.ops["DeleteVault"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof DeleteVaultAccessPolicyInput & keyof DeleteVaultAccessPolicyInput]: (DeleteVaultAccessPolicyInput & DeleteVaultAccessPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVaultAccessPolicy(
          this.ops["DeleteVaultAccessPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVaultNotifications(partialParams: ToOptional<{
      [K in keyof DeleteVaultNotificationsInput & keyof DeleteVaultNotificationsInput]: (DeleteVaultNotificationsInput & DeleteVaultNotificationsInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVaultNotifications(
          this.ops["DeleteVaultNotifications"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJob(partialParams: ToOptional<{
      [K in keyof DescribeJobInput & keyof DescribeJobInput]: (DescribeJobInput & DescribeJobInput)[K]
    }>): Request<GlacierJobDescription, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJob(
          this.ops["DescribeJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVault(partialParams: ToOptional<{
      [K in keyof DescribeVaultInput & keyof DescribeVaultInput]: (DescribeVaultInput & DescribeVaultInput)[K]
    }>): Request<DescribeVaultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVault(
          this.ops["DescribeVault"].applicator.apply(partialParams)
        );
    }

    invokeGetDataRetrievalPolicy(partialParams: ToOptional<{
      [K in keyof GetDataRetrievalPolicyInput & keyof GetDataRetrievalPolicyInput]: (GetDataRetrievalPolicyInput & GetDataRetrievalPolicyInput)[K]
    }>): Request<GetDataRetrievalPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDataRetrievalPolicy(
          this.ops["GetDataRetrievalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetJobOutput(partialParams: ToOptional<{
      [K in keyof GetJobOutputInput & keyof GetJobOutputInput]: (GetJobOutputInput & GetJobOutputInput)[K]
    }>): Request<GetJobOutputOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobOutput(
          this.ops["GetJobOutput"].applicator.apply(partialParams)
        );
    }

    invokeGetVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetVaultAccessPolicyInput & keyof GetVaultAccessPolicyInput]: (GetVaultAccessPolicyInput & GetVaultAccessPolicyInput)[K]
    }>): Request<GetVaultAccessPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVaultAccessPolicy(
          this.ops["GetVaultAccessPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetVaultLock(partialParams: ToOptional<{
      [K in keyof GetVaultLockInput & keyof GetVaultLockInput]: (GetVaultLockInput & GetVaultLockInput)[K]
    }>): Request<GetVaultLockOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVaultLock(
          this.ops["GetVaultLock"].applicator.apply(partialParams)
        );
    }

    invokeGetVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetVaultNotificationsInput & keyof GetVaultNotificationsInput]: (GetVaultNotificationsInput & GetVaultNotificationsInput)[K]
    }>): Request<GetVaultNotificationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVaultNotifications(
          this.ops["GetVaultNotifications"].applicator.apply(partialParams)
        );
    }

    invokeInitiateJob(partialParams: ToOptional<{
      [K in keyof InitiateJobInput & keyof InitiateJobInput]: (InitiateJobInput & InitiateJobInput)[K]
    }>): Request<InitiateJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateJob(
          this.ops["InitiateJob"].applicator.apply(partialParams)
        );
    }

    invokeInitiateMultipartUpload(partialParams: ToOptional<{
      [K in keyof InitiateMultipartUploadInput & keyof InitiateMultipartUploadInput]: (InitiateMultipartUploadInput & InitiateMultipartUploadInput)[K]
    }>): Request<InitiateMultipartUploadOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateMultipartUpload(
          this.ops["InitiateMultipartUpload"].applicator.apply(partialParams)
        );
    }

    invokeInitiateVaultLock(partialParams: ToOptional<{
      [K in keyof InitiateVaultLockInput & keyof InitiateVaultLockInput]: (InitiateVaultLockInput & InitiateVaultLockInput)[K]
    }>): Request<InitiateVaultLockOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateVaultLock(
          this.ops["InitiateVaultLock"].applicator.apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsInput & keyof ListJobsInput]: (ListJobsInput & ListJobsInput)[K]
    }>): Request<ListJobsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].applicator.apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsInput & keyof ListMultipartUploadsInput]: (ListMultipartUploadsInput & ListMultipartUploadsInput)[K]
    }>): Request<ListMultipartUploadsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMultipartUploads(
          this.ops["ListMultipartUploads"].applicator.apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsInput & keyof ListPartsInput]: (ListPartsInput & ListPartsInput)[K]
    }>): Request<ListPartsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParts(
          this.ops["ListParts"].applicator.apply(partialParams)
        );
    }

    invokeListProvisionedCapacity(partialParams: ToOptional<{
      [K in keyof ListProvisionedCapacityInput & keyof ListProvisionedCapacityInput]: (ListProvisionedCapacityInput & ListProvisionedCapacityInput)[K]
    }>): Request<ListProvisionedCapacityOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisionedCapacity(
          this.ops["ListProvisionedCapacity"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForVault(partialParams: ToOptional<{
      [K in keyof ListTagsForVaultInput & keyof ListTagsForVaultInput]: (ListTagsForVaultInput & ListTagsForVaultInput)[K]
    }>): Request<ListTagsForVaultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForVault(
          this.ops["ListTagsForVault"].applicator.apply(partialParams)
        );
    }

    invokeListVaults(partialParams: ToOptional<{
      [K in keyof ListVaultsInput & keyof ListVaultsInput]: (ListVaultsInput & ListVaultsInput)[K]
    }>): Request<ListVaultsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVaults(
          this.ops["ListVaults"].applicator.apply(partialParams)
        );
    }

    invokePurchaseProvisionedCapacity(partialParams: ToOptional<{
      [K in keyof PurchaseProvisionedCapacityInput & keyof PurchaseProvisionedCapacityInput]: (PurchaseProvisionedCapacityInput & PurchaseProvisionedCapacityInput)[K]
    }>): Request<PurchaseProvisionedCapacityOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseProvisionedCapacity(
          this.ops["PurchaseProvisionedCapacity"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromVault(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromVaultInput & keyof RemoveTagsFromVaultInput]: (RemoveTagsFromVaultInput & RemoveTagsFromVaultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromVault(
          this.ops["RemoveTagsFromVault"].applicator.apply(partialParams)
        );
    }

    invokeSetDataRetrievalPolicy(partialParams: ToOptional<{
      [K in keyof SetDataRetrievalPolicyInput & keyof SetDataRetrievalPolicyInput]: (SetDataRetrievalPolicyInput & SetDataRetrievalPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDataRetrievalPolicy(
          this.ops["SetDataRetrievalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeSetVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof SetVaultAccessPolicyInput & keyof SetVaultAccessPolicyInput]: (SetVaultAccessPolicyInput & SetVaultAccessPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setVaultAccessPolicy(
          this.ops["SetVaultAccessPolicy"].applicator.apply(partialParams)
        );
    }

    invokeSetVaultNotifications(partialParams: ToOptional<{
      [K in keyof SetVaultNotificationsInput & keyof SetVaultNotificationsInput]: (SetVaultNotificationsInput & SetVaultNotificationsInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setVaultNotifications(
          this.ops["SetVaultNotifications"].applicator.apply(partialParams)
        );
    }

    invokeUploadArchive(partialParams: ToOptional<{
      [K in keyof UploadArchiveInput & keyof UploadArchiveInput]: (UploadArchiveInput & UploadArchiveInput)[K]
    }>): Request<ArchiveCreationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadArchive(
          this.ops["UploadArchive"].applicator.apply(partialParams)
        );
    }

    invokeUploadMultipartPart(partialParams: ToOptional<{
      [K in keyof UploadMultipartPartInput & keyof UploadMultipartPartInput]: (UploadMultipartPartInput & UploadMultipartPartInput)[K]
    }>): Request<UploadMultipartPartOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadMultipartPart(
          this.ops["UploadMultipartPart"].applicator.apply(partialParams)
        );
    }
}