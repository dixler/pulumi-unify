
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glacier.Vault {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.glacier.Vault>) {
        super(...args)
        this.client = new awssdk.Glacier()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/glacier-2012-06-01.normal.json"), this.client)
    }

    invokeAbortMultipartUpload(partialParams: ToOptional<{
      [K in keyof AbortMultipartUploadInput & keyof AbortMultipartUploadInput & keyof AbortMultipartUploadInput & keyof AbortMultipartUploadInput]: (AbortMultipartUploadInput & AbortMultipartUploadInput & AbortMultipartUploadInput & AbortMultipartUploadInput)[K]
    }>): void {
        return this.client.abortMultipartUpload(
            this.ops["AbortMultipartUpload"].apply(partialParams)
        );
    }

    invokeAbortVaultLock(partialParams: ToOptional<{
      [K in keyof AbortVaultLockInput & keyof AbortVaultLockInput & keyof AbortVaultLockInput & keyof AbortVaultLockInput]: (AbortVaultLockInput & AbortVaultLockInput & AbortVaultLockInput & AbortVaultLockInput)[K]
    }>): void {
        return this.client.abortVaultLock(
            this.ops["AbortVaultLock"].apply(partialParams)
        );
    }

    invokeAddTagsToVault(partialParams: ToOptional<{
      [K in keyof AddTagsToVaultInput & keyof AddTagsToVaultInput & keyof AddTagsToVaultInput & keyof AddTagsToVaultInput]: (AddTagsToVaultInput & AddTagsToVaultInput & AddTagsToVaultInput & AddTagsToVaultInput)[K]
    }>): void {
        return this.client.addTagsToVault(
            this.ops["AddTagsToVault"].apply(partialParams)
        );
    }

    invokeCompleteMultipartUpload(partialParams: ToOptional<{
      [K in keyof CompleteMultipartUploadInput & keyof CompleteMultipartUploadInput & keyof CompleteMultipartUploadInput & keyof CompleteMultipartUploadInput]: (CompleteMultipartUploadInput & CompleteMultipartUploadInput & CompleteMultipartUploadInput & CompleteMultipartUploadInput)[K]
    }>): ArchiveCreationOutput {
        return this.client.completeMultipartUpload(
            this.ops["CompleteMultipartUpload"].apply(partialParams)
        );
    }

    invokeCompleteVaultLock(partialParams: ToOptional<{
      [K in keyof CompleteVaultLockInput & keyof CompleteVaultLockInput & keyof CompleteVaultLockInput & keyof CompleteVaultLockInput]: (CompleteVaultLockInput & CompleteVaultLockInput & CompleteVaultLockInput & CompleteVaultLockInput)[K]
    }>): void {
        return this.client.completeVaultLock(
            this.ops["CompleteVaultLock"].apply(partialParams)
        );
    }

    invokeCreateVault(partialParams: ToOptional<{
      [K in keyof CreateVaultInput & keyof CreateVaultInput & keyof CreateVaultInput & keyof CreateVaultInput]: (CreateVaultInput & CreateVaultInput & CreateVaultInput & CreateVaultInput)[K]
    }>): CreateVaultOutput {
        return this.client.createVault(
            this.ops["CreateVault"].apply(partialParams)
        );
    }

    invokeDeleteArchive(partialParams: ToOptional<{
      [K in keyof DeleteArchiveInput & keyof DeleteArchiveInput & keyof DeleteArchiveInput & keyof DeleteArchiveInput]: (DeleteArchiveInput & DeleteArchiveInput & DeleteArchiveInput & DeleteArchiveInput)[K]
    }>): void {
        return this.client.deleteArchive(
            this.ops["DeleteArchive"].apply(partialParams)
        );
    }

    invokeDeleteVault(partialParams: ToOptional<{
      [K in keyof DeleteVaultInput & keyof DeleteVaultInput & keyof DeleteVaultInput & keyof DeleteVaultInput]: (DeleteVaultInput & DeleteVaultInput & DeleteVaultInput & DeleteVaultInput)[K]
    }>): void {
        return this.client.deleteVault(
            this.ops["DeleteVault"].apply(partialParams)
        );
    }

    invokeDeleteVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof DeleteVaultAccessPolicyInput & keyof DeleteVaultAccessPolicyInput & keyof DeleteVaultAccessPolicyInput & keyof DeleteVaultAccessPolicyInput]: (DeleteVaultAccessPolicyInput & DeleteVaultAccessPolicyInput & DeleteVaultAccessPolicyInput & DeleteVaultAccessPolicyInput)[K]
    }>): void {
        return this.client.deleteVaultAccessPolicy(
            this.ops["DeleteVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeDeleteVaultNotifications(partialParams: ToOptional<{
      [K in keyof DeleteVaultNotificationsInput & keyof DeleteVaultNotificationsInput & keyof DeleteVaultNotificationsInput & keyof DeleteVaultNotificationsInput]: (DeleteVaultNotificationsInput & DeleteVaultNotificationsInput & DeleteVaultNotificationsInput & DeleteVaultNotificationsInput)[K]
    }>): void {
        return this.client.deleteVaultNotifications(
            this.ops["DeleteVaultNotifications"].apply(partialParams)
        );
    }

    invokeDescribeJob(partialParams: ToOptional<{
      [K in keyof DescribeJobInput & keyof DescribeJobInput & keyof DescribeJobInput & keyof DescribeJobInput]: (DescribeJobInput & DescribeJobInput & DescribeJobInput & DescribeJobInput)[K]
    }>): GlacierJobDescription {
        return this.client.describeJob(
            this.ops["DescribeJob"].apply(partialParams)
        );
    }

    invokeDescribeVault(partialParams: ToOptional<{
      [K in keyof DescribeVaultInput & keyof DescribeVaultInput & keyof DescribeVaultInput & keyof DescribeVaultInput]: (DescribeVaultInput & DescribeVaultInput & DescribeVaultInput & DescribeVaultInput)[K]
    }>): DescribeVaultOutput {
        return this.client.describeVault(
            this.ops["DescribeVault"].apply(partialParams)
        );
    }

    invokeGetDataRetrievalPolicy(partialParams: ToOptional<{
      [K in keyof GetDataRetrievalPolicyInput & keyof GetDataRetrievalPolicyInput & keyof GetDataRetrievalPolicyInput & keyof GetDataRetrievalPolicyInput]: (GetDataRetrievalPolicyInput & GetDataRetrievalPolicyInput & GetDataRetrievalPolicyInput & GetDataRetrievalPolicyInput)[K]
    }>): GetDataRetrievalPolicyOutput {
        return this.client.getDataRetrievalPolicy(
            this.ops["GetDataRetrievalPolicy"].apply(partialParams)
        );
    }

    invokeGetJobOutput(partialParams: ToOptional<{
      [K in keyof GetJobOutputInput & keyof GetJobOutputInput & keyof GetJobOutputInput & keyof GetJobOutputInput]: (GetJobOutputInput & GetJobOutputInput & GetJobOutputInput & GetJobOutputInput)[K]
    }>): GetJobOutputOutput {
        return this.client.getJobOutput(
            this.ops["GetJobOutput"].apply(partialParams)
        );
    }

    invokeGetVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetVaultAccessPolicyInput & keyof GetVaultAccessPolicyInput & keyof GetVaultAccessPolicyInput & keyof GetVaultAccessPolicyInput]: (GetVaultAccessPolicyInput & GetVaultAccessPolicyInput & GetVaultAccessPolicyInput & GetVaultAccessPolicyInput)[K]
    }>): GetVaultAccessPolicyOutput {
        return this.client.getVaultAccessPolicy(
            this.ops["GetVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeGetVaultLock(partialParams: ToOptional<{
      [K in keyof GetVaultLockInput & keyof GetVaultLockInput & keyof GetVaultLockInput & keyof GetVaultLockInput]: (GetVaultLockInput & GetVaultLockInput & GetVaultLockInput & GetVaultLockInput)[K]
    }>): GetVaultLockOutput {
        return this.client.getVaultLock(
            this.ops["GetVaultLock"].apply(partialParams)
        );
    }

    invokeGetVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetVaultNotificationsInput & keyof GetVaultNotificationsInput & keyof GetVaultNotificationsInput & keyof GetVaultNotificationsInput]: (GetVaultNotificationsInput & GetVaultNotificationsInput & GetVaultNotificationsInput & GetVaultNotificationsInput)[K]
    }>): GetVaultNotificationsOutput {
        return this.client.getVaultNotifications(
            this.ops["GetVaultNotifications"].apply(partialParams)
        );
    }

    invokeInitiateJob(partialParams: ToOptional<{
      [K in keyof InitiateJobInput & keyof InitiateJobInput & keyof InitiateJobInput & keyof InitiateJobInput]: (InitiateJobInput & InitiateJobInput & InitiateJobInput & InitiateJobInput)[K]
    }>): InitiateJobOutput {
        return this.client.initiateJob(
            this.ops["InitiateJob"].apply(partialParams)
        );
    }

    invokeInitiateMultipartUpload(partialParams: ToOptional<{
      [K in keyof InitiateMultipartUploadInput & keyof InitiateMultipartUploadInput & keyof InitiateMultipartUploadInput & keyof InitiateMultipartUploadInput]: (InitiateMultipartUploadInput & InitiateMultipartUploadInput & InitiateMultipartUploadInput & InitiateMultipartUploadInput)[K]
    }>): InitiateMultipartUploadOutput {
        return this.client.initiateMultipartUpload(
            this.ops["InitiateMultipartUpload"].apply(partialParams)
        );
    }

    invokeInitiateVaultLock(partialParams: ToOptional<{
      [K in keyof InitiateVaultLockInput & keyof InitiateVaultLockInput & keyof InitiateVaultLockInput & keyof InitiateVaultLockInput]: (InitiateVaultLockInput & InitiateVaultLockInput & InitiateVaultLockInput & InitiateVaultLockInput)[K]
    }>): InitiateVaultLockOutput {
        return this.client.initiateVaultLock(
            this.ops["InitiateVaultLock"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsInput & keyof ListJobsInput & keyof ListJobsInput & keyof ListJobsInput]: (ListJobsInput & ListJobsInput & ListJobsInput & ListJobsInput)[K]
    }>): ListJobsOutput {
        return this.client.listJobs(
            this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListMultipartUploads(partialParams: ToOptional<{
      [K in keyof ListMultipartUploadsInput & keyof ListMultipartUploadsInput & keyof ListMultipartUploadsInput & keyof ListMultipartUploadsInput]: (ListMultipartUploadsInput & ListMultipartUploadsInput & ListMultipartUploadsInput & ListMultipartUploadsInput)[K]
    }>): ListMultipartUploadsOutput {
        return this.client.listMultipartUploads(
            this.ops["ListMultipartUploads"].apply(partialParams)
        );
    }

    invokeListParts(partialParams: ToOptional<{
      [K in keyof ListPartsInput & keyof ListPartsInput & keyof ListPartsInput & keyof ListPartsInput]: (ListPartsInput & ListPartsInput & ListPartsInput & ListPartsInput)[K]
    }>): ListPartsOutput {
        return this.client.listParts(
            this.ops["ListParts"].apply(partialParams)
        );
    }

    invokeListProvisionedCapacity(partialParams: ToOptional<{
      [K in keyof ListProvisionedCapacityInput & keyof ListProvisionedCapacityInput & keyof ListProvisionedCapacityInput & keyof ListProvisionedCapacityInput]: (ListProvisionedCapacityInput & ListProvisionedCapacityInput & ListProvisionedCapacityInput & ListProvisionedCapacityInput)[K]
    }>): ListProvisionedCapacityOutput {
        return this.client.listProvisionedCapacity(
            this.ops["ListProvisionedCapacity"].apply(partialParams)
        );
    }

    invokeListTagsForVault(partialParams: ToOptional<{
      [K in keyof ListTagsForVaultInput & keyof ListTagsForVaultInput & keyof ListTagsForVaultInput & keyof ListTagsForVaultInput]: (ListTagsForVaultInput & ListTagsForVaultInput & ListTagsForVaultInput & ListTagsForVaultInput)[K]
    }>): ListTagsForVaultOutput {
        return this.client.listTagsForVault(
            this.ops["ListTagsForVault"].apply(partialParams)
        );
    }

    invokeListVaults(partialParams: ToOptional<{
      [K in keyof ListVaultsInput & keyof ListVaultsInput & keyof ListVaultsInput & keyof ListVaultsInput]: (ListVaultsInput & ListVaultsInput & ListVaultsInput & ListVaultsInput)[K]
    }>): ListVaultsOutput {
        return this.client.listVaults(
            this.ops["ListVaults"].apply(partialParams)
        );
    }

    invokePurchaseProvisionedCapacity(partialParams: ToOptional<{
      [K in keyof PurchaseProvisionedCapacityInput & keyof PurchaseProvisionedCapacityInput & keyof PurchaseProvisionedCapacityInput & keyof PurchaseProvisionedCapacityInput]: (PurchaseProvisionedCapacityInput & PurchaseProvisionedCapacityInput & PurchaseProvisionedCapacityInput & PurchaseProvisionedCapacityInput)[K]
    }>): PurchaseProvisionedCapacityOutput {
        return this.client.purchaseProvisionedCapacity(
            this.ops["PurchaseProvisionedCapacity"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromVault(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromVaultInput & keyof RemoveTagsFromVaultInput & keyof RemoveTagsFromVaultInput & keyof RemoveTagsFromVaultInput]: (RemoveTagsFromVaultInput & RemoveTagsFromVaultInput & RemoveTagsFromVaultInput & RemoveTagsFromVaultInput)[K]
    }>): void {
        return this.client.removeTagsFromVault(
            this.ops["RemoveTagsFromVault"].apply(partialParams)
        );
    }

    invokeSetDataRetrievalPolicy(partialParams: ToOptional<{
      [K in keyof SetDataRetrievalPolicyInput & keyof SetDataRetrievalPolicyInput & keyof SetDataRetrievalPolicyInput & keyof SetDataRetrievalPolicyInput]: (SetDataRetrievalPolicyInput & SetDataRetrievalPolicyInput & SetDataRetrievalPolicyInput & SetDataRetrievalPolicyInput)[K]
    }>): void {
        return this.client.setDataRetrievalPolicy(
            this.ops["SetDataRetrievalPolicy"].apply(partialParams)
        );
    }

    invokeSetVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof SetVaultAccessPolicyInput & keyof SetVaultAccessPolicyInput & keyof SetVaultAccessPolicyInput & keyof SetVaultAccessPolicyInput]: (SetVaultAccessPolicyInput & SetVaultAccessPolicyInput & SetVaultAccessPolicyInput & SetVaultAccessPolicyInput)[K]
    }>): void {
        return this.client.setVaultAccessPolicy(
            this.ops["SetVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeSetVaultNotifications(partialParams: ToOptional<{
      [K in keyof SetVaultNotificationsInput & keyof SetVaultNotificationsInput & keyof SetVaultNotificationsInput & keyof SetVaultNotificationsInput]: (SetVaultNotificationsInput & SetVaultNotificationsInput & SetVaultNotificationsInput & SetVaultNotificationsInput)[K]
    }>): void {
        return this.client.setVaultNotifications(
            this.ops["SetVaultNotifications"].apply(partialParams)
        );
    }

    invokeUploadArchive(partialParams: ToOptional<{
      [K in keyof UploadArchiveInput & keyof UploadArchiveInput & keyof UploadArchiveInput & keyof UploadArchiveInput]: (UploadArchiveInput & UploadArchiveInput & UploadArchiveInput & UploadArchiveInput)[K]
    }>): ArchiveCreationOutput {
        return this.client.uploadArchive(
            this.ops["UploadArchive"].apply(partialParams)
        );
    }

    invokeUploadMultipartPart(partialParams: ToOptional<{
      [K in keyof UploadMultipartPartInput & keyof UploadMultipartPartInput & keyof UploadMultipartPartInput & keyof UploadMultipartPartInput]: (UploadMultipartPartInput & UploadMultipartPartInput & UploadMultipartPartInput & UploadMultipartPartInput)[K]
    }>): UploadMultipartPartOutput {
        return this.client.uploadMultipartPart(
            this.ops["UploadMultipartPart"].apply(partialParams)
        );
    }
}