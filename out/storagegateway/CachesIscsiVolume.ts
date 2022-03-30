
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ActivateGatewayInput,
    AddCacheInput,
    AddTagsToResourceInput,
    AddUploadBufferInput,
    AddWorkingStorageInput,
    AssignTapePoolInput,
    AssociateFileSystemInput,
    AttachVolumeInput,
    CancelArchivalInput,
    CancelRetrievalInput,
    CreateCachediSCSIVolumeInput,
    CreateNFSFileShareInput,
    CreateSMBFileShareInput,
    CreateSnapshotInput,
    CreateSnapshotFromVolumeRecoveryPointInput,
    CreateStorediSCSIVolumeInput,
    CreateTapePoolInput,
    CreateTapeWithBarcodeInput,
    CreateTapesInput,
    DeleteAutomaticTapeCreationPolicyInput,
    DeleteBandwidthRateLimitInput,
    DeleteChapCredentialsInput,
    DeleteFileShareInput,
    DeleteGatewayInput,
    DeleteSnapshotScheduleInput,
    DeleteTapeInput,
    DeleteTapeArchiveInput,
    DeleteTapePoolInput,
    DeleteVolumeInput,
    DescribeAvailabilityMonitorTestInput,
    DescribeBandwidthRateLimitInput,
    DescribeBandwidthRateLimitScheduleInput,
    DescribeCacheInput,
    DescribeCachediSCSIVolumesInput,
    DescribeChapCredentialsInput,
    DescribeFileSystemAssociationsInput,
    DescribeGatewayInformationInput,
    DescribeMaintenanceStartTimeInput,
    DescribeNFSFileSharesInput,
    DescribeSMBFileSharesInput,
    DescribeSMBSettingsInput,
    DescribeSnapshotScheduleInput,
    DescribeStorediSCSIVolumesInput,
    DescribeTapeRecoveryPointsInput,
    DescribeTapesInput,
    DescribeUploadBufferInput,
    DescribeVTLDevicesInput,
    DescribeWorkingStorageInput,
    DetachVolumeInput,
    DisableGatewayInput,
    DisassociateFileSystemInput,
    JoinDomainInput,
    ListLocalDisksInput,
    ListTagsForResourceInput,
    ListVolumeInitiatorsInput,
    ListVolumeRecoveryPointsInput,
    NotifyWhenUploadedInput,
    RefreshCacheInput,
    RemoveTagsFromResourceInput,
    ResetCacheInput,
    RetrieveTapeArchiveInput,
    RetrieveTapeRecoveryPointInput,
    SetLocalConsolePasswordInput,
    SetSMBGuestPasswordInput,
    ShutdownGatewayInput,
    StartAvailabilityMonitorTestInput,
    StartGatewayInput,
    UpdateAutomaticTapeCreationPolicyInput,
    UpdateBandwidthRateLimitInput,
    UpdateBandwidthRateLimitScheduleInput,
    UpdateChapCredentialsInput,
    UpdateFileSystemAssociationInput,
    UpdateGatewayInformationInput,
    UpdateGatewaySoftwareNowInput,
    UpdateMaintenanceStartTimeInput,
    UpdateNFSFileShareInput,
    UpdateSMBFileShareInput,
    UpdateSMBFileShareVisibilityInput,
    UpdateSMBLocalGroupsInput,
    UpdateSMBSecurityStrategyInput,
    UpdateSnapshotScheduleInput,
    UpdateVTLDeviceTypeInput,
    ActivateGatewayOutput,
    AddCacheOutput,
    AddTagsToResourceOutput,
    AddUploadBufferOutput,
    AddWorkingStorageOutput,
    AssignTapePoolOutput,
    AssociateFileSystemOutput,
    AttachVolumeOutput,
    CancelArchivalOutput,
    CancelRetrievalOutput,
    CreateCachediSCSIVolumeOutput,
    CreateNFSFileShareOutput,
    CreateSMBFileShareOutput,
    CreateSnapshotOutput,
    CreateSnapshotFromVolumeRecoveryPointOutput,
    CreateStorediSCSIVolumeOutput,
    CreateTapePoolOutput,
    CreateTapeWithBarcodeOutput,
    CreateTapesOutput,
    DeleteAutomaticTapeCreationPolicyOutput,
    DeleteBandwidthRateLimitOutput,
    DeleteChapCredentialsOutput,
    DeleteFileShareOutput,
    DeleteGatewayOutput,
    DeleteSnapshotScheduleOutput,
    DeleteTapeOutput,
    DeleteTapeArchiveOutput,
    DeleteTapePoolOutput,
    DeleteVolumeOutput,
    DescribeAvailabilityMonitorTestOutput,
    DescribeBandwidthRateLimitOutput,
    DescribeBandwidthRateLimitScheduleOutput,
    DescribeCacheOutput,
    DescribeCachediSCSIVolumesOutput,
    DescribeChapCredentialsOutput,
    DescribeFileSystemAssociationsOutput,
    DescribeGatewayInformationOutput,
    DescribeMaintenanceStartTimeOutput,
    DescribeNFSFileSharesOutput,
    DescribeSMBFileSharesOutput,
    DescribeSMBSettingsOutput,
    DescribeSnapshotScheduleOutput,
    DescribeStorediSCSIVolumesOutput,
    DescribeTapeRecoveryPointsOutput,
    DescribeTapesOutput,
    DescribeUploadBufferOutput,
    DescribeVTLDevicesOutput,
    DescribeWorkingStorageOutput,
    DetachVolumeOutput,
    DisableGatewayOutput,
    DisassociateFileSystemOutput,
    JoinDomainOutput,
    ListLocalDisksOutput,
    ListTagsForResourceOutput,
    ListVolumeInitiatorsOutput,
    ListVolumeRecoveryPointsOutput,
    NotifyWhenUploadedOutput,
    RefreshCacheOutput,
    RemoveTagsFromResourceOutput,
    ResetCacheOutput,
    RetrieveTapeArchiveOutput,
    RetrieveTapeRecoveryPointOutput,
    SetLocalConsolePasswordOutput,
    SetSMBGuestPasswordOutput,
    ShutdownGatewayOutput,
    StartAvailabilityMonitorTestOutput,
    StartGatewayOutput,
    UpdateAutomaticTapeCreationPolicyOutput,
    UpdateBandwidthRateLimitOutput,
    UpdateBandwidthRateLimitScheduleOutput,
    UpdateChapCredentialsOutput,
    UpdateFileSystemAssociationOutput,
    UpdateGatewayInformationOutput,
    UpdateGatewaySoftwareNowOutput,
    UpdateMaintenanceStartTimeOutput,
    UpdateNFSFileShareOutput,
    UpdateSMBFileShareOutput,
    UpdateSMBFileShareVisibilityOutput,
    UpdateSMBLocalGroupsOutput,
    UpdateSMBSecurityStrategyOutput,
    UpdateSnapshotScheduleOutput,
    UpdateVTLDeviceTypeOutput
} from "aws-sdk/clients/storagegateway";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.storagegateway.CachesIscsiVolume {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.storagegateway.CachesIscsiVolume>) {
        super(...args)
        this.client = new awssdk.StorageGateway()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/storagegateway-2013-06-30.normal.json"), this.client)
    }

    invokeActivateGateway(partialParams: ToOptional<{
      [K in keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput]: (ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput)[K]
    }>): ActivateGatewayOutput {
        return this.client.activateGateway(
            this.ops["ActivateGateway"].apply(partialParams)
        );
    }

    invokeAddCache(partialParams: ToOptional<{
      [K in keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput]: (AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput)[K]
    }>): AddCacheOutput {
        return this.client.addCache(
            this.ops["AddCache"].apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput]: (AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput)[K]
    }>): AddTagsToResourceOutput {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAddUploadBuffer(partialParams: ToOptional<{
      [K in keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput]: (AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput)[K]
    }>): AddUploadBufferOutput {
        return this.client.addUploadBuffer(
            this.ops["AddUploadBuffer"].apply(partialParams)
        );
    }

    invokeAddWorkingStorage(partialParams: ToOptional<{
      [K in keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput]: (AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput)[K]
    }>): AddWorkingStorageOutput {
        return this.client.addWorkingStorage(
            this.ops["AddWorkingStorage"].apply(partialParams)
        );
    }

    invokeAssignTapePool(partialParams: ToOptional<{
      [K in keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput]: (AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput)[K]
    }>): AssignTapePoolOutput {
        return this.client.assignTapePool(
            this.ops["AssignTapePool"].apply(partialParams)
        );
    }

    invokeAssociateFileSystem(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput]: (AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput)[K]
    }>): AssociateFileSystemOutput {
        return this.client.associateFileSystem(
            this.ops["AssociateFileSystem"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput]: (AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput)[K]
    }>): AttachVolumeOutput {
        return this.client.attachVolume(
            this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeCancelArchival(partialParams: ToOptional<{
      [K in keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput]: (CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput)[K]
    }>): CancelArchivalOutput {
        return this.client.cancelArchival(
            this.ops["CancelArchival"].apply(partialParams)
        );
    }

    invokeCancelRetrieval(partialParams: ToOptional<{
      [K in keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput]: (CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput)[K]
    }>): CancelRetrievalOutput {
        return this.client.cancelRetrieval(
            this.ops["CancelRetrieval"].apply(partialParams)
        );
    }

    invokeCreateCachediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput]: (CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput)[K]
    }>): CreateCachediSCSIVolumeOutput {
        return this.client.createCachediSCSIVolume(
            this.ops["CreateCachediSCSIVolume"].apply(partialParams)
        );
    }

    invokeCreateNFSFileShare(partialParams: ToOptional<{
      [K in keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput]: (CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput)[K]
    }>): CreateNFSFileShareOutput {
        return this.client.createNFSFileShare(
            this.ops["CreateNFSFileShare"].apply(partialParams)
        );
    }

    invokeCreateSMBFileShare(partialParams: ToOptional<{
      [K in keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput]: (CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput)[K]
    }>): CreateSMBFileShareOutput {
        return this.client.createSMBFileShare(
            this.ops["CreateSMBFileShare"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput]: (CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput)[K]
    }>): CreateSnapshotOutput {
        return this.client.createSnapshot(
            this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSnapshotFromVolumeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput]: (CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput)[K]
    }>): CreateSnapshotFromVolumeRecoveryPointOutput {
        return this.client.createSnapshotFromVolumeRecoveryPoint(
            this.ops["CreateSnapshotFromVolumeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeCreateStorediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput]: (CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput)[K]
    }>): CreateStorediSCSIVolumeOutput {
        return this.client.createStorediSCSIVolume(
            this.ops["CreateStorediSCSIVolume"].apply(partialParams)
        );
    }

    invokeCreateTapePool(partialParams: ToOptional<{
      [K in keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput]: (CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput)[K]
    }>): CreateTapePoolOutput {
        return this.client.createTapePool(
            this.ops["CreateTapePool"].apply(partialParams)
        );
    }

    invokeCreateTapeWithBarcode(partialParams: ToOptional<{
      [K in keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput]: (CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput)[K]
    }>): CreateTapeWithBarcodeOutput {
        return this.client.createTapeWithBarcode(
            this.ops["CreateTapeWithBarcode"].apply(partialParams)
        );
    }

    invokeCreateTapes(partialParams: ToOptional<{
      [K in keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput]: (CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput)[K]
    }>): CreateTapesOutput {
        return this.client.createTapes(
            this.ops["CreateTapes"].apply(partialParams)
        );
    }

    invokeDeleteAutomaticTapeCreationPolicy(partialParams: ToOptional<{
      [K in keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput]: (DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput)[K]
    }>): DeleteAutomaticTapeCreationPolicyOutput {
        return this.client.deleteAutomaticTapeCreationPolicy(
            this.ops["DeleteAutomaticTapeCreationPolicy"].apply(partialParams)
        );
    }

    invokeDeleteBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput]: (DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput)[K]
    }>): DeleteBandwidthRateLimitOutput {
        return this.client.deleteBandwidthRateLimit(
            this.ops["DeleteBandwidthRateLimit"].apply(partialParams)
        );
    }

    invokeDeleteChapCredentials(partialParams: ToOptional<{
      [K in keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput]: (DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput)[K]
    }>): DeleteChapCredentialsOutput {
        return this.client.deleteChapCredentials(
            this.ops["DeleteChapCredentials"].apply(partialParams)
        );
    }

    invokeDeleteFileShare(partialParams: ToOptional<{
      [K in keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput]: (DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput)[K]
    }>): DeleteFileShareOutput {
        return this.client.deleteFileShare(
            this.ops["DeleteFileShare"].apply(partialParams)
        );
    }

    invokeDeleteGateway(partialParams: ToOptional<{
      [K in keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput]: (DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput)[K]
    }>): DeleteGatewayOutput {
        return this.client.deleteGateway(
            this.ops["DeleteGateway"].apply(partialParams)
        );
    }

    invokeDeleteSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput]: (DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput)[K]
    }>): DeleteSnapshotScheduleOutput {
        return this.client.deleteSnapshotSchedule(
            this.ops["DeleteSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeDeleteTape(partialParams: ToOptional<{
      [K in keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput]: (DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput)[K]
    }>): DeleteTapeOutput {
        return this.client.deleteTape(
            this.ops["DeleteTape"].apply(partialParams)
        );
    }

    invokeDeleteTapeArchive(partialParams: ToOptional<{
      [K in keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput]: (DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput)[K]
    }>): DeleteTapeArchiveOutput {
        return this.client.deleteTapeArchive(
            this.ops["DeleteTapeArchive"].apply(partialParams)
        );
    }

    invokeDeleteTapePool(partialParams: ToOptional<{
      [K in keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput]: (DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput)[K]
    }>): DeleteTapePoolOutput {
        return this.client.deleteTapePool(
            this.ops["DeleteTapePool"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput]: (DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput)[K]
    }>): DeleteVolumeOutput {
        return this.client.deleteVolume(
            this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDescribeAvailabilityMonitorTest(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput]: (DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput)[K]
    }>): DescribeAvailabilityMonitorTestOutput {
        return this.client.describeAvailabilityMonitorTest(
            this.ops["DescribeAvailabilityMonitorTest"].apply(partialParams)
        );
    }

    invokeDescribeBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput]: (DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput)[K]
    }>): DescribeBandwidthRateLimitOutput {
        return this.client.describeBandwidthRateLimit(
            this.ops["DescribeBandwidthRateLimit"].apply(partialParams)
        );
    }

    invokeDescribeBandwidthRateLimitSchedule(partialParams: ToOptional<{
      [K in keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput]: (DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput)[K]
    }>): DescribeBandwidthRateLimitScheduleOutput {
        return this.client.describeBandwidthRateLimitSchedule(
            this.ops["DescribeBandwidthRateLimitSchedule"].apply(partialParams)
        );
    }

    invokeDescribeCache(partialParams: ToOptional<{
      [K in keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput]: (DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput)[K]
    }>): DescribeCacheOutput {
        return this.client.describeCache(
            this.ops["DescribeCache"].apply(partialParams)
        );
    }

    invokeDescribeCachediSCSIVolumes(partialParams: ToOptional<{
      [K in keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput]: (DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput)[K]
    }>): DescribeCachediSCSIVolumesOutput {
        return this.client.describeCachediSCSIVolumes(
            this.ops["DescribeCachediSCSIVolumes"].apply(partialParams)
        );
    }

    invokeDescribeChapCredentials(partialParams: ToOptional<{
      [K in keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput]: (DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput)[K]
    }>): DescribeChapCredentialsOutput {
        return this.client.describeChapCredentials(
            this.ops["DescribeChapCredentials"].apply(partialParams)
        );
    }

    invokeDescribeFileSystemAssociations(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput]: (DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput)[K]
    }>): DescribeFileSystemAssociationsOutput {
        return this.client.describeFileSystemAssociations(
            this.ops["DescribeFileSystemAssociations"].apply(partialParams)
        );
    }

    invokeDescribeGatewayInformation(partialParams: ToOptional<{
      [K in keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput]: (DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput)[K]
    }>): DescribeGatewayInformationOutput {
        return this.client.describeGatewayInformation(
            this.ops["DescribeGatewayInformation"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceStartTime(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput]: (DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput)[K]
    }>): DescribeMaintenanceStartTimeOutput {
        return this.client.describeMaintenanceStartTime(
            this.ops["DescribeMaintenanceStartTime"].apply(partialParams)
        );
    }

    invokeDescribeNFSFileShares(partialParams: ToOptional<{
      [K in keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput]: (DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput)[K]
    }>): DescribeNFSFileSharesOutput {
        return this.client.describeNFSFileShares(
            this.ops["DescribeNFSFileShares"].apply(partialParams)
        );
    }

    invokeDescribeSMBFileShares(partialParams: ToOptional<{
      [K in keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput]: (DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput)[K]
    }>): DescribeSMBFileSharesOutput {
        return this.client.describeSMBFileShares(
            this.ops["DescribeSMBFileShares"].apply(partialParams)
        );
    }

    invokeDescribeSMBSettings(partialParams: ToOptional<{
      [K in keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput]: (DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput)[K]
    }>): DescribeSMBSettingsOutput {
        return this.client.describeSMBSettings(
            this.ops["DescribeSMBSettings"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput]: (DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput)[K]
    }>): DescribeSnapshotScheduleOutput {
        return this.client.describeSnapshotSchedule(
            this.ops["DescribeSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeDescribeStorediSCSIVolumes(partialParams: ToOptional<{
      [K in keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput]: (DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput)[K]
    }>): DescribeStorediSCSIVolumesOutput {
        return this.client.describeStorediSCSIVolumes(
            this.ops["DescribeStorediSCSIVolumes"].apply(partialParams)
        );
    }

    invokeDescribeTapeRecoveryPoints(partialParams: ToOptional<{
      [K in keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput]: (DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput)[K]
    }>): DescribeTapeRecoveryPointsOutput {
        return this.client.describeTapeRecoveryPoints(
            this.ops["DescribeTapeRecoveryPoints"].apply(partialParams)
        );
    }

    invokeDescribeTapes(partialParams: ToOptional<{
      [K in keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput]: (DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput)[K]
    }>): DescribeTapesOutput {
        return this.client.describeTapes(
            this.ops["DescribeTapes"].apply(partialParams)
        );
    }

    invokeDescribeUploadBuffer(partialParams: ToOptional<{
      [K in keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput]: (DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput)[K]
    }>): DescribeUploadBufferOutput {
        return this.client.describeUploadBuffer(
            this.ops["DescribeUploadBuffer"].apply(partialParams)
        );
    }

    invokeDescribeVTLDevices(partialParams: ToOptional<{
      [K in keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput]: (DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput)[K]
    }>): DescribeVTLDevicesOutput {
        return this.client.describeVTLDevices(
            this.ops["DescribeVTLDevices"].apply(partialParams)
        );
    }

    invokeDescribeWorkingStorage(partialParams: ToOptional<{
      [K in keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput]: (DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput)[K]
    }>): DescribeWorkingStorageOutput {
        return this.client.describeWorkingStorage(
            this.ops["DescribeWorkingStorage"].apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput]: (DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput)[K]
    }>): DetachVolumeOutput {
        return this.client.detachVolume(
            this.ops["DetachVolume"].apply(partialParams)
        );
    }

    invokeDisableGateway(partialParams: ToOptional<{
      [K in keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput]: (DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput)[K]
    }>): DisableGatewayOutput {
        return this.client.disableGateway(
            this.ops["DisableGateway"].apply(partialParams)
        );
    }

    invokeDisassociateFileSystem(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput]: (DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput)[K]
    }>): DisassociateFileSystemOutput {
        return this.client.disassociateFileSystem(
            this.ops["DisassociateFileSystem"].apply(partialParams)
        );
    }

    invokeJoinDomain(partialParams: ToOptional<{
      [K in keyof JoinDomainInput & keyof Omit<JoinDomainInput, "GatewayARN"> & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput]: (JoinDomainInput & Omit<JoinDomainInput, "GatewayARN"> & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput)[K]
    }>): JoinDomainOutput {
        return this.client.joinDomain(
            this.ops["JoinDomain"].apply(partialParams)
        );
    }

    invokeListLocalDisks(partialParams: ToOptional<{
      [K in keyof ListLocalDisksInput & keyof Omit<ListLocalDisksInput, "GatewayARN"> & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput]: (ListLocalDisksInput & Omit<ListLocalDisksInput, "GatewayARN"> & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput)[K]
    }>): ListLocalDisksOutput {
        return this.client.listLocalDisks(
            this.ops["ListLocalDisks"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListVolumeInitiators(partialParams: ToOptional<{
      [K in keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput]: (ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput)[K]
    }>): ListVolumeInitiatorsOutput {
        return this.client.listVolumeInitiators(
            this.ops["ListVolumeInitiators"].apply(partialParams)
        );
    }

    invokeListVolumeRecoveryPoints(partialParams: ToOptional<{
      [K in keyof ListVolumeRecoveryPointsInput & keyof Omit<ListVolumeRecoveryPointsInput, "GatewayARN"> & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput]: (ListVolumeRecoveryPointsInput & Omit<ListVolumeRecoveryPointsInput, "GatewayARN"> & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput)[K]
    }>): ListVolumeRecoveryPointsOutput {
        return this.client.listVolumeRecoveryPoints(
            this.ops["ListVolumeRecoveryPoints"].apply(partialParams)
        );
    }

    invokeNotifyWhenUploaded(partialParams: ToOptional<{
      [K in keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput]: (NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput)[K]
    }>): NotifyWhenUploadedOutput {
        return this.client.notifyWhenUploaded(
            this.ops["NotifyWhenUploaded"].apply(partialParams)
        );
    }

    invokeRefreshCache(partialParams: ToOptional<{
      [K in keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput]: (RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput)[K]
    }>): RefreshCacheOutput {
        return this.client.refreshCache(
            this.ops["RefreshCache"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput]: (RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput)[K]
    }>): RemoveTagsFromResourceOutput {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetCache(partialParams: ToOptional<{
      [K in keyof ResetCacheInput & keyof Omit<ResetCacheInput, "GatewayARN"> & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput]: (ResetCacheInput & Omit<ResetCacheInput, "GatewayARN"> & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput)[K]
    }>): ResetCacheOutput {
        return this.client.resetCache(
            this.ops["ResetCache"].apply(partialParams)
        );
    }

    invokeRetrieveTapeArchive(partialParams: ToOptional<{
      [K in keyof RetrieveTapeArchiveInput & keyof Omit<RetrieveTapeArchiveInput, "GatewayARN"> & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput]: (RetrieveTapeArchiveInput & Omit<RetrieveTapeArchiveInput, "GatewayARN"> & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput)[K]
    }>): RetrieveTapeArchiveOutput {
        return this.client.retrieveTapeArchive(
            this.ops["RetrieveTapeArchive"].apply(partialParams)
        );
    }

    invokeRetrieveTapeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof RetrieveTapeRecoveryPointInput & keyof Omit<RetrieveTapeRecoveryPointInput, "GatewayARN"> & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput]: (RetrieveTapeRecoveryPointInput & Omit<RetrieveTapeRecoveryPointInput, "GatewayARN"> & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput)[K]
    }>): RetrieveTapeRecoveryPointOutput {
        return this.client.retrieveTapeRecoveryPoint(
            this.ops["RetrieveTapeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeSetLocalConsolePassword(partialParams: ToOptional<{
      [K in keyof SetLocalConsolePasswordInput & keyof Omit<SetLocalConsolePasswordInput, "GatewayARN"> & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput]: (SetLocalConsolePasswordInput & Omit<SetLocalConsolePasswordInput, "GatewayARN"> & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput)[K]
    }>): SetLocalConsolePasswordOutput {
        return this.client.setLocalConsolePassword(
            this.ops["SetLocalConsolePassword"].apply(partialParams)
        );
    }

    invokeSetSMBGuestPassword(partialParams: ToOptional<{
      [K in keyof SetSMBGuestPasswordInput & keyof Omit<SetSMBGuestPasswordInput, "GatewayARN"> & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput]: (SetSMBGuestPasswordInput & Omit<SetSMBGuestPasswordInput, "GatewayARN"> & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput)[K]
    }>): SetSMBGuestPasswordOutput {
        return this.client.setSMBGuestPassword(
            this.ops["SetSMBGuestPassword"].apply(partialParams)
        );
    }

    invokeShutdownGateway(partialParams: ToOptional<{
      [K in keyof ShutdownGatewayInput & keyof Omit<ShutdownGatewayInput, "GatewayARN"> & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput]: (ShutdownGatewayInput & Omit<ShutdownGatewayInput, "GatewayARN"> & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput)[K]
    }>): ShutdownGatewayOutput {
        return this.client.shutdownGateway(
            this.ops["ShutdownGateway"].apply(partialParams)
        );
    }

    invokeStartAvailabilityMonitorTest(partialParams: ToOptional<{
      [K in keyof StartAvailabilityMonitorTestInput & keyof Omit<StartAvailabilityMonitorTestInput, "GatewayARN"> & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput]: (StartAvailabilityMonitorTestInput & Omit<StartAvailabilityMonitorTestInput, "GatewayARN"> & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput)[K]
    }>): StartAvailabilityMonitorTestOutput {
        return this.client.startAvailabilityMonitorTest(
            this.ops["StartAvailabilityMonitorTest"].apply(partialParams)
        );
    }

    invokeStartGateway(partialParams: ToOptional<{
      [K in keyof StartGatewayInput & keyof Omit<StartGatewayInput, "GatewayARN"> & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput]: (StartGatewayInput & Omit<StartGatewayInput, "GatewayARN"> & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput)[K]
    }>): StartGatewayOutput {
        return this.client.startGateway(
            this.ops["StartGateway"].apply(partialParams)
        );
    }

    invokeUpdateAutomaticTapeCreationPolicy(partialParams: ToOptional<{
      [K in keyof UpdateAutomaticTapeCreationPolicyInput & keyof Omit<UpdateAutomaticTapeCreationPolicyInput, "GatewayARN"> & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput]: (UpdateAutomaticTapeCreationPolicyInput & Omit<UpdateAutomaticTapeCreationPolicyInput, "GatewayARN"> & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput)[K]
    }>): UpdateAutomaticTapeCreationPolicyOutput {
        return this.client.updateAutomaticTapeCreationPolicy(
            this.ops["UpdateAutomaticTapeCreationPolicy"].apply(partialParams)
        );
    }

    invokeUpdateBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof UpdateBandwidthRateLimitInput & keyof Omit<UpdateBandwidthRateLimitInput, "GatewayARN"> & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput]: (UpdateBandwidthRateLimitInput & Omit<UpdateBandwidthRateLimitInput, "GatewayARN"> & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput)[K]
    }>): UpdateBandwidthRateLimitOutput {
        return this.client.updateBandwidthRateLimit(
            this.ops["UpdateBandwidthRateLimit"].apply(partialParams)
        );
    }

    invokeUpdateBandwidthRateLimitSchedule(partialParams: ToOptional<{
      [K in keyof UpdateBandwidthRateLimitScheduleInput & keyof Omit<UpdateBandwidthRateLimitScheduleInput, "GatewayARN"> & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput]: (UpdateBandwidthRateLimitScheduleInput & Omit<UpdateBandwidthRateLimitScheduleInput, "GatewayARN"> & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput)[K]
    }>): UpdateBandwidthRateLimitScheduleOutput {
        return this.client.updateBandwidthRateLimitSchedule(
            this.ops["UpdateBandwidthRateLimitSchedule"].apply(partialParams)
        );
    }

    invokeUpdateChapCredentials(partialParams: ToOptional<{
      [K in keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof Omit<UpdateChapCredentialsInput, "TargetARN"> & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput]: (UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & Omit<UpdateChapCredentialsInput, "TargetARN"> & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput)[K]
    }>): UpdateChapCredentialsOutput {
        return this.client.updateChapCredentials(
            this.ops["UpdateChapCredentials"].apply(partialParams)
        );
    }

    invokeUpdateFileSystemAssociation(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput]: (UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput)[K]
    }>): UpdateFileSystemAssociationOutput {
        return this.client.updateFileSystemAssociation(
            this.ops["UpdateFileSystemAssociation"].apply(partialParams)
        );
    }

    invokeUpdateGatewayInformation(partialParams: ToOptional<{
      [K in keyof UpdateGatewayInformationInput & keyof Omit<UpdateGatewayInformationInput, "GatewayARN"> & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput]: (UpdateGatewayInformationInput & Omit<UpdateGatewayInformationInput, "GatewayARN"> & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput)[K]
    }>): UpdateGatewayInformationOutput {
        return this.client.updateGatewayInformation(
            this.ops["UpdateGatewayInformation"].apply(partialParams)
        );
    }

    invokeUpdateGatewaySoftwareNow(partialParams: ToOptional<{
      [K in keyof UpdateGatewaySoftwareNowInput & keyof Omit<UpdateGatewaySoftwareNowInput, "GatewayARN"> & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput]: (UpdateGatewaySoftwareNowInput & Omit<UpdateGatewaySoftwareNowInput, "GatewayARN"> & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput)[K]
    }>): UpdateGatewaySoftwareNowOutput {
        return this.client.updateGatewaySoftwareNow(
            this.ops["UpdateGatewaySoftwareNow"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceStartTime(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceStartTimeInput & keyof Omit<UpdateMaintenanceStartTimeInput, "GatewayARN"> & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput]: (UpdateMaintenanceStartTimeInput & Omit<UpdateMaintenanceStartTimeInput, "GatewayARN"> & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput)[K]
    }>): UpdateMaintenanceStartTimeOutput {
        return this.client.updateMaintenanceStartTime(
            this.ops["UpdateMaintenanceStartTime"].apply(partialParams)
        );
    }

    invokeUpdateNFSFileShare(partialParams: ToOptional<{
      [K in keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput]: (UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput)[K]
    }>): UpdateNFSFileShareOutput {
        return this.client.updateNFSFileShare(
            this.ops["UpdateNFSFileShare"].apply(partialParams)
        );
    }

    invokeUpdateSMBFileShare(partialParams: ToOptional<{
      [K in keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput]: (UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput)[K]
    }>): UpdateSMBFileShareOutput {
        return this.client.updateSMBFileShare(
            this.ops["UpdateSMBFileShare"].apply(partialParams)
        );
    }

    invokeUpdateSMBFileShareVisibility(partialParams: ToOptional<{
      [K in keyof UpdateSMBFileShareVisibilityInput & keyof Omit<UpdateSMBFileShareVisibilityInput, "GatewayARN"> & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput]: (UpdateSMBFileShareVisibilityInput & Omit<UpdateSMBFileShareVisibilityInput, "GatewayARN"> & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput)[K]
    }>): UpdateSMBFileShareVisibilityOutput {
        return this.client.updateSMBFileShareVisibility(
            this.ops["UpdateSMBFileShareVisibility"].apply(partialParams)
        );
    }

    invokeUpdateSMBLocalGroups(partialParams: ToOptional<{
      [K in keyof UpdateSMBLocalGroupsInput & keyof Omit<UpdateSMBLocalGroupsInput, "GatewayARN"> & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput]: (UpdateSMBLocalGroupsInput & Omit<UpdateSMBLocalGroupsInput, "GatewayARN"> & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput)[K]
    }>): UpdateSMBLocalGroupsOutput {
        return this.client.updateSMBLocalGroups(
            this.ops["UpdateSMBLocalGroups"].apply(partialParams)
        );
    }

    invokeUpdateSMBSecurityStrategy(partialParams: ToOptional<{
      [K in keyof UpdateSMBSecurityStrategyInput & keyof Omit<UpdateSMBSecurityStrategyInput, "GatewayARN"> & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput]: (UpdateSMBSecurityStrategyInput & Omit<UpdateSMBSecurityStrategyInput, "GatewayARN"> & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput)[K]
    }>): UpdateSMBSecurityStrategyOutput {
        return this.client.updateSMBSecurityStrategy(
            this.ops["UpdateSMBSecurityStrategy"].apply(partialParams)
        );
    }

    invokeUpdateSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput]: (UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput)[K]
    }>): UpdateSnapshotScheduleOutput {
        return this.client.updateSnapshotSchedule(
            this.ops["UpdateSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeUpdateVTLDeviceType(partialParams: ToOptional<{
      [K in keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput]: (UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput)[K]
    }>): UpdateVTLDeviceTypeOutput {
        return this.client.updateVTLDeviceType(
            this.ops["UpdateVTLDeviceType"].apply(partialParams)
        );
    }
}