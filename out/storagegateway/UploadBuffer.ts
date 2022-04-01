
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    DescribeTapeArchivesInput,
    DescribeTapeRecoveryPointsInput,
    DescribeTapesInput,
    DescribeUploadBufferInput,
    DescribeVTLDevicesInput,
    DescribeWorkingStorageInput,
    DetachVolumeInput,
    DisableGatewayInput,
    DisassociateFileSystemInput,
    JoinDomainInput,
    ListAutomaticTapeCreationPoliciesInput,
    ListFileSharesInput,
    ListFileSystemAssociationsInput,
    ListGatewaysInput,
    ListLocalDisksInput,
    ListTagsForResourceInput,
    ListTapePoolsInput,
    ListTapesInput,
    ListVolumeInitiatorsInput,
    ListVolumeRecoveryPointsInput,
    ListVolumesInput,
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
    DescribeTapeArchivesOutput,
    DescribeTapeRecoveryPointsOutput,
    DescribeTapesOutput,
    DescribeUploadBufferOutput,
    DescribeVTLDevicesOutput,
    DescribeWorkingStorageOutput,
    DetachVolumeOutput,
    DisableGatewayOutput,
    DisassociateFileSystemOutput,
    JoinDomainOutput,
    ListAutomaticTapeCreationPoliciesOutput,
    ListFileSharesOutput,
    ListFileSystemAssociationsOutput,
    ListGatewaysOutput,
    ListLocalDisksOutput,
    ListTagsForResourceOutput,
    ListTapePoolsOutput,
    ListTapesOutput,
    ListVolumeInitiatorsOutput,
    ListVolumeRecoveryPointsOutput,
    ListVolumesOutput,
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
const schema = require("../apis/storagegateway-2013-06-30.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.storagegateway.UploadBuffer {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.storagegateway.UploadBuffer>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.StorageGateway()
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

    invokeActivateGateway(partialParams: ToOptional<{
      [K in keyof ActivateGatewayInput]: (ActivateGatewayInput)[K]
    }>): Request<ActivateGatewayOutput, AWSError> {
        this.boot();
        return this.client.activateGateway(
          this.ops["ActivateGateway"].apply(partialParams)
        );
    }

    invokeAddCache(partialParams: ToOptional<{
      [K in keyof AddCacheInput]: (AddCacheInput)[K]
    }>): Request<AddCacheOutput, AWSError> {
        this.boot();
        return this.client.addCache(
          this.ops["AddCache"].apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceInput]: (AddTagsToResourceInput)[K]
    }>): Request<AddTagsToResourceOutput, AWSError> {
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAddUploadBuffer(partialParams: ToOptional<{
      [K in keyof AddUploadBufferInput]: (AddUploadBufferInput)[K]
    }>): Request<AddUploadBufferOutput, AWSError> {
        this.boot();
        return this.client.addUploadBuffer(
          this.ops["AddUploadBuffer"].apply(partialParams)
        );
    }

    invokeAddWorkingStorage(partialParams: ToOptional<{
      [K in keyof AddWorkingStorageInput]: (AddWorkingStorageInput)[K]
    }>): Request<AddWorkingStorageOutput, AWSError> {
        this.boot();
        return this.client.addWorkingStorage(
          this.ops["AddWorkingStorage"].apply(partialParams)
        );
    }

    invokeAssignTapePool(partialParams: ToOptional<{
      [K in keyof AssignTapePoolInput]: (AssignTapePoolInput)[K]
    }>): Request<AssignTapePoolOutput, AWSError> {
        this.boot();
        return this.client.assignTapePool(
          this.ops["AssignTapePool"].apply(partialParams)
        );
    }

    invokeAssociateFileSystem(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemInput]: (AssociateFileSystemInput)[K]
    }>): Request<AssociateFileSystemOutput, AWSError> {
        this.boot();
        return this.client.associateFileSystem(
          this.ops["AssociateFileSystem"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeInput]: (AttachVolumeInput)[K]
    }>): Request<AttachVolumeOutput, AWSError> {
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeCancelArchival(partialParams: ToOptional<{
      [K in keyof CancelArchivalInput]: (CancelArchivalInput)[K]
    }>): Request<CancelArchivalOutput, AWSError> {
        this.boot();
        return this.client.cancelArchival(
          this.ops["CancelArchival"].apply(partialParams)
        );
    }

    invokeCancelRetrieval(partialParams: ToOptional<{
      [K in keyof CancelRetrievalInput]: (CancelRetrievalInput)[K]
    }>): Request<CancelRetrievalOutput, AWSError> {
        this.boot();
        return this.client.cancelRetrieval(
          this.ops["CancelRetrieval"].apply(partialParams)
        );
    }

    invokeCreateCachediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateCachediSCSIVolumeInput]: (CreateCachediSCSIVolumeInput)[K]
    }>): Request<CreateCachediSCSIVolumeOutput, AWSError> {
        this.boot();
        return this.client.createCachediSCSIVolume(
          this.ops["CreateCachediSCSIVolume"].apply(partialParams)
        );
    }

    invokeCreateNFSFileShare(partialParams: ToOptional<{
      [K in keyof CreateNFSFileShareInput]: (CreateNFSFileShareInput)[K]
    }>): Request<CreateNFSFileShareOutput, AWSError> {
        this.boot();
        return this.client.createNFSFileShare(
          this.ops["CreateNFSFileShare"].apply(partialParams)
        );
    }

    invokeCreateSMBFileShare(partialParams: ToOptional<{
      [K in keyof CreateSMBFileShareInput]: (CreateSMBFileShareInput)[K]
    }>): Request<CreateSMBFileShareOutput, AWSError> {
        this.boot();
        return this.client.createSMBFileShare(
          this.ops["CreateSMBFileShare"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotInput]: (CreateSnapshotInput)[K]
    }>): Request<CreateSnapshotOutput, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSnapshotFromVolumeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof CreateSnapshotFromVolumeRecoveryPointInput]: (CreateSnapshotFromVolumeRecoveryPointInput)[K]
    }>): Request<CreateSnapshotFromVolumeRecoveryPointOutput, AWSError> {
        this.boot();
        return this.client.createSnapshotFromVolumeRecoveryPoint(
          this.ops["CreateSnapshotFromVolumeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeCreateStorediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateStorediSCSIVolumeInput & keyof Omit<CreateStorediSCSIVolumeInput, "DiskId">]: (CreateStorediSCSIVolumeInput)[K]
    }>): Request<CreateStorediSCSIVolumeOutput, AWSError> {
        this.boot();
        return this.client.createStorediSCSIVolume(
          this.ops["CreateStorediSCSIVolume"].apply(partialParams)
        );
    }

    invokeCreateTapePool(partialParams: ToOptional<{
      [K in keyof CreateTapePoolInput]: (CreateTapePoolInput)[K]
    }>): Request<CreateTapePoolOutput, AWSError> {
        this.boot();
        return this.client.createTapePool(
          this.ops["CreateTapePool"].apply(partialParams)
        );
    }

    invokeCreateTapeWithBarcode(partialParams: ToOptional<{
      [K in keyof CreateTapeWithBarcodeInput]: (CreateTapeWithBarcodeInput)[K]
    }>): Request<CreateTapeWithBarcodeOutput, AWSError> {
        this.boot();
        return this.client.createTapeWithBarcode(
          this.ops["CreateTapeWithBarcode"].apply(partialParams)
        );
    }

    invokeCreateTapes(partialParams: ToOptional<{
      [K in keyof CreateTapesInput]: (CreateTapesInput)[K]
    }>): Request<CreateTapesOutput, AWSError> {
        this.boot();
        return this.client.createTapes(
          this.ops["CreateTapes"].apply(partialParams)
        );
    }

    invokeDeleteAutomaticTapeCreationPolicy(partialParams: ToOptional<{
      [K in keyof DeleteAutomaticTapeCreationPolicyInput]: (DeleteAutomaticTapeCreationPolicyInput)[K]
    }>): Request<DeleteAutomaticTapeCreationPolicyOutput, AWSError> {
        this.boot();
        return this.client.deleteAutomaticTapeCreationPolicy(
          this.ops["DeleteAutomaticTapeCreationPolicy"].apply(partialParams)
        );
    }

    invokeDeleteBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof DeleteBandwidthRateLimitInput]: (DeleteBandwidthRateLimitInput)[K]
    }>): Request<DeleteBandwidthRateLimitOutput, AWSError> {
        this.boot();
        return this.client.deleteBandwidthRateLimit(
          this.ops["DeleteBandwidthRateLimit"].apply(partialParams)
        );
    }

    invokeDeleteChapCredentials(partialParams: ToOptional<{
      [K in keyof DeleteChapCredentialsInput]: (DeleteChapCredentialsInput)[K]
    }>): Request<DeleteChapCredentialsOutput, AWSError> {
        this.boot();
        return this.client.deleteChapCredentials(
          this.ops["DeleteChapCredentials"].apply(partialParams)
        );
    }

    invokeDeleteFileShare(partialParams: ToOptional<{
      [K in keyof DeleteFileShareInput]: (DeleteFileShareInput)[K]
    }>): Request<DeleteFileShareOutput, AWSError> {
        this.boot();
        return this.client.deleteFileShare(
          this.ops["DeleteFileShare"].apply(partialParams)
        );
    }

    invokeDeleteGateway(partialParams: ToOptional<{
      [K in keyof DeleteGatewayInput]: (DeleteGatewayInput)[K]
    }>): Request<DeleteGatewayOutput, AWSError> {
        this.boot();
        return this.client.deleteGateway(
          this.ops["DeleteGateway"].apply(partialParams)
        );
    }

    invokeDeleteSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotScheduleInput]: (DeleteSnapshotScheduleInput)[K]
    }>): Request<DeleteSnapshotScheduleOutput, AWSError> {
        this.boot();
        return this.client.deleteSnapshotSchedule(
          this.ops["DeleteSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeDeleteTape(partialParams: ToOptional<{
      [K in keyof DeleteTapeInput]: (DeleteTapeInput)[K]
    }>): Request<DeleteTapeOutput, AWSError> {
        this.boot();
        return this.client.deleteTape(
          this.ops["DeleteTape"].apply(partialParams)
        );
    }

    invokeDeleteTapeArchive(partialParams: ToOptional<{
      [K in keyof DeleteTapeArchiveInput]: (DeleteTapeArchiveInput)[K]
    }>): Request<DeleteTapeArchiveOutput, AWSError> {
        this.boot();
        return this.client.deleteTapeArchive(
          this.ops["DeleteTapeArchive"].apply(partialParams)
        );
    }

    invokeDeleteTapePool(partialParams: ToOptional<{
      [K in keyof DeleteTapePoolInput]: (DeleteTapePoolInput)[K]
    }>): Request<DeleteTapePoolOutput, AWSError> {
        this.boot();
        return this.client.deleteTapePool(
          this.ops["DeleteTapePool"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeInput]: (DeleteVolumeInput)[K]
    }>): Request<DeleteVolumeOutput, AWSError> {
        this.boot();
        return this.client.deleteVolume(
          this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDescribeAvailabilityMonitorTest(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityMonitorTestInput]: (DescribeAvailabilityMonitorTestInput)[K]
    }>): Request<DescribeAvailabilityMonitorTestOutput, AWSError> {
        this.boot();
        return this.client.describeAvailabilityMonitorTest(
          this.ops["DescribeAvailabilityMonitorTest"].apply(partialParams)
        );
    }

    invokeDescribeBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof DescribeBandwidthRateLimitInput]: (DescribeBandwidthRateLimitInput)[K]
    }>): Request<DescribeBandwidthRateLimitOutput, AWSError> {
        this.boot();
        return this.client.describeBandwidthRateLimit(
          this.ops["DescribeBandwidthRateLimit"].apply(partialParams)
        );
    }

    invokeDescribeBandwidthRateLimitSchedule(partialParams: ToOptional<{
      [K in keyof DescribeBandwidthRateLimitScheduleInput]: (DescribeBandwidthRateLimitScheduleInput)[K]
    }>): Request<DescribeBandwidthRateLimitScheduleOutput, AWSError> {
        this.boot();
        return this.client.describeBandwidthRateLimitSchedule(
          this.ops["DescribeBandwidthRateLimitSchedule"].apply(partialParams)
        );
    }

    invokeDescribeCache(partialParams: ToOptional<{
      [K in keyof DescribeCacheInput]: (DescribeCacheInput)[K]
    }>): Request<DescribeCacheOutput, AWSError> {
        this.boot();
        return this.client.describeCache(
          this.ops["DescribeCache"].apply(partialParams)
        );
    }

    invokeDescribeCachediSCSIVolumes(partialParams: ToOptional<{
      [K in keyof DescribeCachediSCSIVolumesInput]: (DescribeCachediSCSIVolumesInput)[K]
    }>): Request<DescribeCachediSCSIVolumesOutput, AWSError> {
        this.boot();
        return this.client.describeCachediSCSIVolumes(
          this.ops["DescribeCachediSCSIVolumes"].apply(partialParams)
        );
    }

    invokeDescribeChapCredentials(partialParams: ToOptional<{
      [K in keyof DescribeChapCredentialsInput]: (DescribeChapCredentialsInput)[K]
    }>): Request<DescribeChapCredentialsOutput, AWSError> {
        this.boot();
        return this.client.describeChapCredentials(
          this.ops["DescribeChapCredentials"].apply(partialParams)
        );
    }

    invokeDescribeFileSystemAssociations(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAssociationsInput]: (DescribeFileSystemAssociationsInput)[K]
    }>): Request<DescribeFileSystemAssociationsOutput, AWSError> {
        this.boot();
        return this.client.describeFileSystemAssociations(
          this.ops["DescribeFileSystemAssociations"].apply(partialParams)
        );
    }

    invokeDescribeGatewayInformation(partialParams: ToOptional<{
      [K in keyof DescribeGatewayInformationInput]: (DescribeGatewayInformationInput)[K]
    }>): Request<DescribeGatewayInformationOutput, AWSError> {
        this.boot();
        return this.client.describeGatewayInformation(
          this.ops["DescribeGatewayInformation"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceStartTime(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceStartTimeInput]: (DescribeMaintenanceStartTimeInput)[K]
    }>): Request<DescribeMaintenanceStartTimeOutput, AWSError> {
        this.boot();
        return this.client.describeMaintenanceStartTime(
          this.ops["DescribeMaintenanceStartTime"].apply(partialParams)
        );
    }

    invokeDescribeNFSFileShares(partialParams: ToOptional<{
      [K in keyof DescribeNFSFileSharesInput]: (DescribeNFSFileSharesInput)[K]
    }>): Request<DescribeNFSFileSharesOutput, AWSError> {
        this.boot();
        return this.client.describeNFSFileShares(
          this.ops["DescribeNFSFileShares"].apply(partialParams)
        );
    }

    invokeDescribeSMBFileShares(partialParams: ToOptional<{
      [K in keyof DescribeSMBFileSharesInput]: (DescribeSMBFileSharesInput)[K]
    }>): Request<DescribeSMBFileSharesOutput, AWSError> {
        this.boot();
        return this.client.describeSMBFileShares(
          this.ops["DescribeSMBFileShares"].apply(partialParams)
        );
    }

    invokeDescribeSMBSettings(partialParams: ToOptional<{
      [K in keyof DescribeSMBSettingsInput]: (DescribeSMBSettingsInput)[K]
    }>): Request<DescribeSMBSettingsOutput, AWSError> {
        this.boot();
        return this.client.describeSMBSettings(
          this.ops["DescribeSMBSettings"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotScheduleInput]: (DescribeSnapshotScheduleInput)[K]
    }>): Request<DescribeSnapshotScheduleOutput, AWSError> {
        this.boot();
        return this.client.describeSnapshotSchedule(
          this.ops["DescribeSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeDescribeStorediSCSIVolumes(partialParams: ToOptional<{
      [K in keyof DescribeStorediSCSIVolumesInput]: (DescribeStorediSCSIVolumesInput)[K]
    }>): Request<DescribeStorediSCSIVolumesOutput, AWSError> {
        this.boot();
        return this.client.describeStorediSCSIVolumes(
          this.ops["DescribeStorediSCSIVolumes"].apply(partialParams)
        );
    }

    invokeDescribeTapeArchives(partialParams: ToOptional<{
      [K in keyof DescribeTapeArchivesInput]: (DescribeTapeArchivesInput)[K]
    }>): Request<DescribeTapeArchivesOutput, AWSError> {
        this.boot();
        return this.client.describeTapeArchives(
          this.ops["DescribeTapeArchives"].apply(partialParams)
        );
    }

    invokeDescribeTapeRecoveryPoints(partialParams: ToOptional<{
      [K in keyof DescribeTapeRecoveryPointsInput]: (DescribeTapeRecoveryPointsInput)[K]
    }>): Request<DescribeTapeRecoveryPointsOutput, AWSError> {
        this.boot();
        return this.client.describeTapeRecoveryPoints(
          this.ops["DescribeTapeRecoveryPoints"].apply(partialParams)
        );
    }

    invokeDescribeTapes(partialParams: ToOptional<{
      [K in keyof DescribeTapesInput]: (DescribeTapesInput)[K]
    }>): Request<DescribeTapesOutput, AWSError> {
        this.boot();
        return this.client.describeTapes(
          this.ops["DescribeTapes"].apply(partialParams)
        );
    }

    invokeDescribeUploadBuffer(partialParams: ToOptional<{
      [K in keyof DescribeUploadBufferInput]: (DescribeUploadBufferInput)[K]
    }>): Request<DescribeUploadBufferOutput, AWSError> {
        this.boot();
        return this.client.describeUploadBuffer(
          this.ops["DescribeUploadBuffer"].apply(partialParams)
        );
    }

    invokeDescribeVTLDevices(partialParams: ToOptional<{
      [K in keyof DescribeVTLDevicesInput]: (DescribeVTLDevicesInput)[K]
    }>): Request<DescribeVTLDevicesOutput, AWSError> {
        this.boot();
        return this.client.describeVTLDevices(
          this.ops["DescribeVTLDevices"].apply(partialParams)
        );
    }

    invokeDescribeWorkingStorage(partialParams: ToOptional<{
      [K in keyof DescribeWorkingStorageInput]: (DescribeWorkingStorageInput)[K]
    }>): Request<DescribeWorkingStorageOutput, AWSError> {
        this.boot();
        return this.client.describeWorkingStorage(
          this.ops["DescribeWorkingStorage"].apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeInput]: (DetachVolumeInput)[K]
    }>): Request<DetachVolumeOutput, AWSError> {
        this.boot();
        return this.client.detachVolume(
          this.ops["DetachVolume"].apply(partialParams)
        );
    }

    invokeDisableGateway(partialParams: ToOptional<{
      [K in keyof DisableGatewayInput]: (DisableGatewayInput)[K]
    }>): Request<DisableGatewayOutput, AWSError> {
        this.boot();
        return this.client.disableGateway(
          this.ops["DisableGateway"].apply(partialParams)
        );
    }

    invokeDisassociateFileSystem(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemInput]: (DisassociateFileSystemInput)[K]
    }>): Request<DisassociateFileSystemOutput, AWSError> {
        this.boot();
        return this.client.disassociateFileSystem(
          this.ops["DisassociateFileSystem"].apply(partialParams)
        );
    }

    invokeJoinDomain(partialParams: ToOptional<{
      [K in keyof JoinDomainInput]: (JoinDomainInput)[K]
    }>): Request<JoinDomainOutput, AWSError> {
        this.boot();
        return this.client.joinDomain(
          this.ops["JoinDomain"].apply(partialParams)
        );
    }

    invokeListAutomaticTapeCreationPolicies(partialParams: ToOptional<{
      [K in keyof ListAutomaticTapeCreationPoliciesInput]: (ListAutomaticTapeCreationPoliciesInput)[K]
    }>): Request<ListAutomaticTapeCreationPoliciesOutput, AWSError> {
        this.boot();
        return this.client.listAutomaticTapeCreationPolicies(
          this.ops["ListAutomaticTapeCreationPolicies"].apply(partialParams)
        );
    }

    invokeListFileShares(partialParams: ToOptional<{
      [K in keyof ListFileSharesInput]: (ListFileSharesInput)[K]
    }>): Request<ListFileSharesOutput, AWSError> {
        this.boot();
        return this.client.listFileShares(
          this.ops["ListFileShares"].apply(partialParams)
        );
    }

    invokeListFileSystemAssociations(partialParams: ToOptional<{
      [K in keyof ListFileSystemAssociationsInput]: (ListFileSystemAssociationsInput)[K]
    }>): Request<ListFileSystemAssociationsOutput, AWSError> {
        this.boot();
        return this.client.listFileSystemAssociations(
          this.ops["ListFileSystemAssociations"].apply(partialParams)
        );
    }

    invokeListGateways(partialParams: ToOptional<{
      [K in keyof ListGatewaysInput]: (ListGatewaysInput)[K]
    }>): Request<ListGatewaysOutput, AWSError> {
        this.boot();
        return this.client.listGateways(
          this.ops["ListGateways"].apply(partialParams)
        );
    }

    invokeListLocalDisks(partialParams: ToOptional<{
      [K in keyof ListLocalDisksInput]: (ListLocalDisksInput)[K]
    }>): Request<ListLocalDisksOutput, AWSError> {
        this.boot();
        return this.client.listLocalDisks(
          this.ops["ListLocalDisks"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTapePools(partialParams: ToOptional<{
      [K in keyof ListTapePoolsInput]: (ListTapePoolsInput)[K]
    }>): Request<ListTapePoolsOutput, AWSError> {
        this.boot();
        return this.client.listTapePools(
          this.ops["ListTapePools"].apply(partialParams)
        );
    }

    invokeListTapes(partialParams: ToOptional<{
      [K in keyof ListTapesInput]: (ListTapesInput)[K]
    }>): Request<ListTapesOutput, AWSError> {
        this.boot();
        return this.client.listTapes(
          this.ops["ListTapes"].apply(partialParams)
        );
    }

    invokeListVolumeInitiators(partialParams: ToOptional<{
      [K in keyof ListVolumeInitiatorsInput]: (ListVolumeInitiatorsInput)[K]
    }>): Request<ListVolumeInitiatorsOutput, AWSError> {
        this.boot();
        return this.client.listVolumeInitiators(
          this.ops["ListVolumeInitiators"].apply(partialParams)
        );
    }

    invokeListVolumeRecoveryPoints(partialParams: ToOptional<{
      [K in keyof ListVolumeRecoveryPointsInput]: (ListVolumeRecoveryPointsInput)[K]
    }>): Request<ListVolumeRecoveryPointsOutput, AWSError> {
        this.boot();
        return this.client.listVolumeRecoveryPoints(
          this.ops["ListVolumeRecoveryPoints"].apply(partialParams)
        );
    }

    invokeListVolumes(partialParams: ToOptional<{
      [K in keyof ListVolumesInput]: (ListVolumesInput)[K]
    }>): Request<ListVolumesOutput, AWSError> {
        this.boot();
        return this.client.listVolumes(
          this.ops["ListVolumes"].apply(partialParams)
        );
    }

    invokeNotifyWhenUploaded(partialParams: ToOptional<{
      [K in keyof NotifyWhenUploadedInput]: (NotifyWhenUploadedInput)[K]
    }>): Request<NotifyWhenUploadedOutput, AWSError> {
        this.boot();
        return this.client.notifyWhenUploaded(
          this.ops["NotifyWhenUploaded"].apply(partialParams)
        );
    }

    invokeRefreshCache(partialParams: ToOptional<{
      [K in keyof RefreshCacheInput]: (RefreshCacheInput)[K]
    }>): Request<RefreshCacheOutput, AWSError> {
        this.boot();
        return this.client.refreshCache(
          this.ops["RefreshCache"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceInput]: (RemoveTagsFromResourceInput)[K]
    }>): Request<RemoveTagsFromResourceOutput, AWSError> {
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetCache(partialParams: ToOptional<{
      [K in keyof ResetCacheInput]: (ResetCacheInput)[K]
    }>): Request<ResetCacheOutput, AWSError> {
        this.boot();
        return this.client.resetCache(
          this.ops["ResetCache"].apply(partialParams)
        );
    }

    invokeRetrieveTapeArchive(partialParams: ToOptional<{
      [K in keyof RetrieveTapeArchiveInput]: (RetrieveTapeArchiveInput)[K]
    }>): Request<RetrieveTapeArchiveOutput, AWSError> {
        this.boot();
        return this.client.retrieveTapeArchive(
          this.ops["RetrieveTapeArchive"].apply(partialParams)
        );
    }

    invokeRetrieveTapeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof RetrieveTapeRecoveryPointInput]: (RetrieveTapeRecoveryPointInput)[K]
    }>): Request<RetrieveTapeRecoveryPointOutput, AWSError> {
        this.boot();
        return this.client.retrieveTapeRecoveryPoint(
          this.ops["RetrieveTapeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeSetLocalConsolePassword(partialParams: ToOptional<{
      [K in keyof SetLocalConsolePasswordInput]: (SetLocalConsolePasswordInput)[K]
    }>): Request<SetLocalConsolePasswordOutput, AWSError> {
        this.boot();
        return this.client.setLocalConsolePassword(
          this.ops["SetLocalConsolePassword"].apply(partialParams)
        );
    }

    invokeSetSMBGuestPassword(partialParams: ToOptional<{
      [K in keyof SetSMBGuestPasswordInput]: (SetSMBGuestPasswordInput)[K]
    }>): Request<SetSMBGuestPasswordOutput, AWSError> {
        this.boot();
        return this.client.setSMBGuestPassword(
          this.ops["SetSMBGuestPassword"].apply(partialParams)
        );
    }

    invokeShutdownGateway(partialParams: ToOptional<{
      [K in keyof ShutdownGatewayInput]: (ShutdownGatewayInput)[K]
    }>): Request<ShutdownGatewayOutput, AWSError> {
        this.boot();
        return this.client.shutdownGateway(
          this.ops["ShutdownGateway"].apply(partialParams)
        );
    }

    invokeStartAvailabilityMonitorTest(partialParams: ToOptional<{
      [K in keyof StartAvailabilityMonitorTestInput]: (StartAvailabilityMonitorTestInput)[K]
    }>): Request<StartAvailabilityMonitorTestOutput, AWSError> {
        this.boot();
        return this.client.startAvailabilityMonitorTest(
          this.ops["StartAvailabilityMonitorTest"].apply(partialParams)
        );
    }

    invokeStartGateway(partialParams: ToOptional<{
      [K in keyof StartGatewayInput]: (StartGatewayInput)[K]
    }>): Request<StartGatewayOutput, AWSError> {
        this.boot();
        return this.client.startGateway(
          this.ops["StartGateway"].apply(partialParams)
        );
    }

    invokeUpdateAutomaticTapeCreationPolicy(partialParams: ToOptional<{
      [K in keyof UpdateAutomaticTapeCreationPolicyInput]: (UpdateAutomaticTapeCreationPolicyInput)[K]
    }>): Request<UpdateAutomaticTapeCreationPolicyOutput, AWSError> {
        this.boot();
        return this.client.updateAutomaticTapeCreationPolicy(
          this.ops["UpdateAutomaticTapeCreationPolicy"].apply(partialParams)
        );
    }

    invokeUpdateBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof UpdateBandwidthRateLimitInput]: (UpdateBandwidthRateLimitInput)[K]
    }>): Request<UpdateBandwidthRateLimitOutput, AWSError> {
        this.boot();
        return this.client.updateBandwidthRateLimit(
          this.ops["UpdateBandwidthRateLimit"].apply(partialParams)
        );
    }

    invokeUpdateBandwidthRateLimitSchedule(partialParams: ToOptional<{
      [K in keyof UpdateBandwidthRateLimitScheduleInput]: (UpdateBandwidthRateLimitScheduleInput)[K]
    }>): Request<UpdateBandwidthRateLimitScheduleOutput, AWSError> {
        this.boot();
        return this.client.updateBandwidthRateLimitSchedule(
          this.ops["UpdateBandwidthRateLimitSchedule"].apply(partialParams)
        );
    }

    invokeUpdateChapCredentials(partialParams: ToOptional<{
      [K in keyof UpdateChapCredentialsInput]: (UpdateChapCredentialsInput)[K]
    }>): Request<UpdateChapCredentialsOutput, AWSError> {
        this.boot();
        return this.client.updateChapCredentials(
          this.ops["UpdateChapCredentials"].apply(partialParams)
        );
    }

    invokeUpdateFileSystemAssociation(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemAssociationInput]: (UpdateFileSystemAssociationInput)[K]
    }>): Request<UpdateFileSystemAssociationOutput, AWSError> {
        this.boot();
        return this.client.updateFileSystemAssociation(
          this.ops["UpdateFileSystemAssociation"].apply(partialParams)
        );
    }

    invokeUpdateGatewayInformation(partialParams: ToOptional<{
      [K in keyof UpdateGatewayInformationInput]: (UpdateGatewayInformationInput)[K]
    }>): Request<UpdateGatewayInformationOutput, AWSError> {
        this.boot();
        return this.client.updateGatewayInformation(
          this.ops["UpdateGatewayInformation"].apply(partialParams)
        );
    }

    invokeUpdateGatewaySoftwareNow(partialParams: ToOptional<{
      [K in keyof UpdateGatewaySoftwareNowInput]: (UpdateGatewaySoftwareNowInput)[K]
    }>): Request<UpdateGatewaySoftwareNowOutput, AWSError> {
        this.boot();
        return this.client.updateGatewaySoftwareNow(
          this.ops["UpdateGatewaySoftwareNow"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceStartTime(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceStartTimeInput]: (UpdateMaintenanceStartTimeInput)[K]
    }>): Request<UpdateMaintenanceStartTimeOutput, AWSError> {
        this.boot();
        return this.client.updateMaintenanceStartTime(
          this.ops["UpdateMaintenanceStartTime"].apply(partialParams)
        );
    }

    invokeUpdateNFSFileShare(partialParams: ToOptional<{
      [K in keyof UpdateNFSFileShareInput]: (UpdateNFSFileShareInput)[K]
    }>): Request<UpdateNFSFileShareOutput, AWSError> {
        this.boot();
        return this.client.updateNFSFileShare(
          this.ops["UpdateNFSFileShare"].apply(partialParams)
        );
    }

    invokeUpdateSMBFileShare(partialParams: ToOptional<{
      [K in keyof UpdateSMBFileShareInput]: (UpdateSMBFileShareInput)[K]
    }>): Request<UpdateSMBFileShareOutput, AWSError> {
        this.boot();
        return this.client.updateSMBFileShare(
          this.ops["UpdateSMBFileShare"].apply(partialParams)
        );
    }

    invokeUpdateSMBFileShareVisibility(partialParams: ToOptional<{
      [K in keyof UpdateSMBFileShareVisibilityInput]: (UpdateSMBFileShareVisibilityInput)[K]
    }>): Request<UpdateSMBFileShareVisibilityOutput, AWSError> {
        this.boot();
        return this.client.updateSMBFileShareVisibility(
          this.ops["UpdateSMBFileShareVisibility"].apply(partialParams)
        );
    }

    invokeUpdateSMBLocalGroups(partialParams: ToOptional<{
      [K in keyof UpdateSMBLocalGroupsInput]: (UpdateSMBLocalGroupsInput)[K]
    }>): Request<UpdateSMBLocalGroupsOutput, AWSError> {
        this.boot();
        return this.client.updateSMBLocalGroups(
          this.ops["UpdateSMBLocalGroups"].apply(partialParams)
        );
    }

    invokeUpdateSMBSecurityStrategy(partialParams: ToOptional<{
      [K in keyof UpdateSMBSecurityStrategyInput]: (UpdateSMBSecurityStrategyInput)[K]
    }>): Request<UpdateSMBSecurityStrategyOutput, AWSError> {
        this.boot();
        return this.client.updateSMBSecurityStrategy(
          this.ops["UpdateSMBSecurityStrategy"].apply(partialParams)
        );
    }

    invokeUpdateSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotScheduleInput]: (UpdateSnapshotScheduleInput)[K]
    }>): Request<UpdateSnapshotScheduleOutput, AWSError> {
        this.boot();
        return this.client.updateSnapshotSchedule(
          this.ops["UpdateSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeUpdateVTLDeviceType(partialParams: ToOptional<{
      [K in keyof UpdateVTLDeviceTypeInput]: (UpdateVTLDeviceTypeInput)[K]
    }>): Request<UpdateVTLDeviceTypeOutput, AWSError> {
        this.boot();
        return this.client.updateVTLDeviceType(
          this.ops["UpdateVTLDeviceType"].apply(partialParams)
        );
    }
}