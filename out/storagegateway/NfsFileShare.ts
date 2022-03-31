
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
const schema = require("../apis/storagegateway-2013-06-30.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.storagegateway.NfsFileShare {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.storagegateway.NfsFileShare>) {
        super(...args)
        this.client = new awssdk.StorageGateway()
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

    invokeActivateGateway(partialParams: ToOptional<{
      [K in keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput & keyof ActivateGatewayInput]: (ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput & ActivateGatewayInput)[K]
    }>): Request<ActivateGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.activateGateway(
          this.ops["ActivateGateway"].applicator.apply(partialParams)
        );
    }

    invokeAddCache(partialParams: ToOptional<{
      [K in keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput & keyof AddCacheInput]: (AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput & AddCacheInput)[K]
    }>): Request<AddCacheOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addCache(
          this.ops["AddCache"].applicator.apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput & keyof AddTagsToResourceInput]: (AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput & AddTagsToResourceInput)[K]
    }>): Request<AddTagsToResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeAddUploadBuffer(partialParams: ToOptional<{
      [K in keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput & keyof AddUploadBufferInput]: (AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput & AddUploadBufferInput)[K]
    }>): Request<AddUploadBufferOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addUploadBuffer(
          this.ops["AddUploadBuffer"].applicator.apply(partialParams)
        );
    }

    invokeAddWorkingStorage(partialParams: ToOptional<{
      [K in keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput & keyof AddWorkingStorageInput]: (AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput & AddWorkingStorageInput)[K]
    }>): Request<AddWorkingStorageOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addWorkingStorage(
          this.ops["AddWorkingStorage"].applicator.apply(partialParams)
        );
    }

    invokeAssignTapePool(partialParams: ToOptional<{
      [K in keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput & keyof AssignTapePoolInput]: (AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput & AssignTapePoolInput)[K]
    }>): Request<AssignTapePoolOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignTapePool(
          this.ops["AssignTapePool"].applicator.apply(partialParams)
        );
    }

    invokeAssociateFileSystem(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput & keyof AssociateFileSystemInput]: (AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput & AssociateFileSystemInput)[K]
    }>): Request<AssociateFileSystemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateFileSystem(
          this.ops["AssociateFileSystem"].applicator.apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput & keyof AttachVolumeInput]: (AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput & AttachVolumeInput)[K]
    }>): Request<AttachVolumeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].applicator.apply(partialParams)
        );
    }

    invokeCancelArchival(partialParams: ToOptional<{
      [K in keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput & keyof CancelArchivalInput]: (CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput & CancelArchivalInput)[K]
    }>): Request<CancelArchivalOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelArchival(
          this.ops["CancelArchival"].applicator.apply(partialParams)
        );
    }

    invokeCancelRetrieval(partialParams: ToOptional<{
      [K in keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput & keyof CancelRetrievalInput]: (CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput & CancelRetrievalInput)[K]
    }>): Request<CancelRetrievalOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelRetrieval(
          this.ops["CancelRetrieval"].applicator.apply(partialParams)
        );
    }

    invokeCreateCachediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput & keyof CreateCachediSCSIVolumeInput]: (CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput & CreateCachediSCSIVolumeInput)[K]
    }>): Request<CreateCachediSCSIVolumeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCachediSCSIVolume(
          this.ops["CreateCachediSCSIVolume"].applicator.apply(partialParams)
        );
    }

    invokeCreateNFSFileShare(partialParams: ToOptional<{
      [K in keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput & keyof CreateNFSFileShareInput]: (CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput & CreateNFSFileShareInput)[K]
    }>): Request<CreateNFSFileShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNFSFileShare(
          this.ops["CreateNFSFileShare"].applicator.apply(partialParams)
        );
    }

    invokeCreateSMBFileShare(partialParams: ToOptional<{
      [K in keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput & keyof CreateSMBFileShareInput]: (CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput & CreateSMBFileShareInput)[K]
    }>): Request<CreateSMBFileShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSMBFileShare(
          this.ops["CreateSMBFileShare"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput & keyof CreateSnapshotInput]: (CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput & CreateSnapshotInput)[K]
    }>): Request<CreateSnapshotOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshotFromVolumeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput & keyof CreateSnapshotFromVolumeRecoveryPointInput]: (CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput & CreateSnapshotFromVolumeRecoveryPointInput)[K]
    }>): Request<CreateSnapshotFromVolumeRecoveryPointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshotFromVolumeRecoveryPoint(
          this.ops["CreateSnapshotFromVolumeRecoveryPoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateStorediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput & keyof CreateStorediSCSIVolumeInput]: (CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput & CreateStorediSCSIVolumeInput)[K]
    }>): Request<CreateStorediSCSIVolumeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStorediSCSIVolume(
          this.ops["CreateStorediSCSIVolume"].applicator.apply(partialParams)
        );
    }

    invokeCreateTapePool(partialParams: ToOptional<{
      [K in keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput & keyof CreateTapePoolInput]: (CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput & CreateTapePoolInput)[K]
    }>): Request<CreateTapePoolOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTapePool(
          this.ops["CreateTapePool"].applicator.apply(partialParams)
        );
    }

    invokeCreateTapeWithBarcode(partialParams: ToOptional<{
      [K in keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput & keyof CreateTapeWithBarcodeInput]: (CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput & CreateTapeWithBarcodeInput)[K]
    }>): Request<CreateTapeWithBarcodeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTapeWithBarcode(
          this.ops["CreateTapeWithBarcode"].applicator.apply(partialParams)
        );
    }

    invokeCreateTapes(partialParams: ToOptional<{
      [K in keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput & keyof CreateTapesInput]: (CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput & CreateTapesInput)[K]
    }>): Request<CreateTapesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTapes(
          this.ops["CreateTapes"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAutomaticTapeCreationPolicy(partialParams: ToOptional<{
      [K in keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput & keyof DeleteAutomaticTapeCreationPolicyInput]: (DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput & DeleteAutomaticTapeCreationPolicyInput)[K]
    }>): Request<DeleteAutomaticTapeCreationPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutomaticTapeCreationPolicy(
          this.ops["DeleteAutomaticTapeCreationPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput & keyof DeleteBandwidthRateLimitInput]: (DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput & DeleteBandwidthRateLimitInput)[K]
    }>): Request<DeleteBandwidthRateLimitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBandwidthRateLimit(
          this.ops["DeleteBandwidthRateLimit"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChapCredentials(partialParams: ToOptional<{
      [K in keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput & keyof DeleteChapCredentialsInput]: (DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput & DeleteChapCredentialsInput)[K]
    }>): Request<DeleteChapCredentialsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChapCredentials(
          this.ops["DeleteChapCredentials"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFileShare(partialParams: ToOptional<{
      [K in keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput & keyof DeleteFileShareInput]: (DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput & DeleteFileShareInput)[K]
    }>): Request<DeleteFileShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFileShare(
          this.ops["DeleteFileShare"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGateway(partialParams: ToOptional<{
      [K in keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput & keyof DeleteGatewayInput]: (DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput & DeleteGatewayInput)[K]
    }>): Request<DeleteGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGateway(
          this.ops["DeleteGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput & keyof DeleteSnapshotScheduleInput]: (DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput & DeleteSnapshotScheduleInput)[K]
    }>): Request<DeleteSnapshotScheduleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshotSchedule(
          this.ops["DeleteSnapshotSchedule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTape(partialParams: ToOptional<{
      [K in keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput & keyof DeleteTapeInput]: (DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput & DeleteTapeInput)[K]
    }>): Request<DeleteTapeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTape(
          this.ops["DeleteTape"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTapeArchive(partialParams: ToOptional<{
      [K in keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput & keyof DeleteTapeArchiveInput]: (DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput & DeleteTapeArchiveInput)[K]
    }>): Request<DeleteTapeArchiveOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTapeArchive(
          this.ops["DeleteTapeArchive"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTapePool(partialParams: ToOptional<{
      [K in keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput & keyof DeleteTapePoolInput]: (DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput & DeleteTapePoolInput)[K]
    }>): Request<DeleteTapePoolOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTapePool(
          this.ops["DeleteTapePool"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput & keyof DeleteVolumeInput]: (DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput & DeleteVolumeInput)[K]
    }>): Request<DeleteVolumeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVolume(
          this.ops["DeleteVolume"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAvailabilityMonitorTest(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput & keyof DescribeAvailabilityMonitorTestInput]: (DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput & DescribeAvailabilityMonitorTestInput)[K]
    }>): Request<DescribeAvailabilityMonitorTestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAvailabilityMonitorTest(
          this.ops["DescribeAvailabilityMonitorTest"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput & keyof DescribeBandwidthRateLimitInput]: (DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput & DescribeBandwidthRateLimitInput)[K]
    }>): Request<DescribeBandwidthRateLimitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBandwidthRateLimit(
          this.ops["DescribeBandwidthRateLimit"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBandwidthRateLimitSchedule(partialParams: ToOptional<{
      [K in keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput & keyof DescribeBandwidthRateLimitScheduleInput]: (DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput & DescribeBandwidthRateLimitScheduleInput)[K]
    }>): Request<DescribeBandwidthRateLimitScheduleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBandwidthRateLimitSchedule(
          this.ops["DescribeBandwidthRateLimitSchedule"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCache(partialParams: ToOptional<{
      [K in keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput & keyof DescribeCacheInput]: (DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput & DescribeCacheInput)[K]
    }>): Request<DescribeCacheOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCache(
          this.ops["DescribeCache"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCachediSCSIVolumes(partialParams: ToOptional<{
      [K in keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput & keyof DescribeCachediSCSIVolumesInput]: (DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput & DescribeCachediSCSIVolumesInput)[K]
    }>): Request<DescribeCachediSCSIVolumesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCachediSCSIVolumes(
          this.ops["DescribeCachediSCSIVolumes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChapCredentials(partialParams: ToOptional<{
      [K in keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput & keyof DescribeChapCredentialsInput]: (DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput & DescribeChapCredentialsInput)[K]
    }>): Request<DescribeChapCredentialsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChapCredentials(
          this.ops["DescribeChapCredentials"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFileSystemAssociations(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput & keyof DescribeFileSystemAssociationsInput]: (DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput & DescribeFileSystemAssociationsInput)[K]
    }>): Request<DescribeFileSystemAssociationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFileSystemAssociations(
          this.ops["DescribeFileSystemAssociations"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGatewayInformation(partialParams: ToOptional<{
      [K in keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput & keyof DescribeGatewayInformationInput]: (DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput & DescribeGatewayInformationInput)[K]
    }>): Request<DescribeGatewayInformationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGatewayInformation(
          this.ops["DescribeGatewayInformation"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceStartTime(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput & keyof DescribeMaintenanceStartTimeInput]: (DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput & DescribeMaintenanceStartTimeInput)[K]
    }>): Request<DescribeMaintenanceStartTimeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceStartTime(
          this.ops["DescribeMaintenanceStartTime"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNFSFileShares(partialParams: ToOptional<{
      [K in keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput & keyof DescribeNFSFileSharesInput]: (DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput & DescribeNFSFileSharesInput)[K]
    }>): Request<DescribeNFSFileSharesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNFSFileShares(
          this.ops["DescribeNFSFileShares"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSMBFileShares(partialParams: ToOptional<{
      [K in keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput & keyof DescribeSMBFileSharesInput]: (DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput & DescribeSMBFileSharesInput)[K]
    }>): Request<DescribeSMBFileSharesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSMBFileShares(
          this.ops["DescribeSMBFileShares"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSMBSettings(partialParams: ToOptional<{
      [K in keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput & keyof DescribeSMBSettingsInput]: (DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput & DescribeSMBSettingsInput)[K]
    }>): Request<DescribeSMBSettingsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSMBSettings(
          this.ops["DescribeSMBSettings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput & keyof DescribeSnapshotScheduleInput]: (DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput & DescribeSnapshotScheduleInput)[K]
    }>): Request<DescribeSnapshotScheduleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSnapshotSchedule(
          this.ops["DescribeSnapshotSchedule"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStorediSCSIVolumes(partialParams: ToOptional<{
      [K in keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput & keyof DescribeStorediSCSIVolumesInput]: (DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput & DescribeStorediSCSIVolumesInput)[K]
    }>): Request<DescribeStorediSCSIVolumesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStorediSCSIVolumes(
          this.ops["DescribeStorediSCSIVolumes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTapeRecoveryPoints(partialParams: ToOptional<{
      [K in keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput & keyof DescribeTapeRecoveryPointsInput]: (DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput & DescribeTapeRecoveryPointsInput)[K]
    }>): Request<DescribeTapeRecoveryPointsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTapeRecoveryPoints(
          this.ops["DescribeTapeRecoveryPoints"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTapes(partialParams: ToOptional<{
      [K in keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput & keyof DescribeTapesInput]: (DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput & DescribeTapesInput)[K]
    }>): Request<DescribeTapesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTapes(
          this.ops["DescribeTapes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUploadBuffer(partialParams: ToOptional<{
      [K in keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput & keyof DescribeUploadBufferInput]: (DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput & DescribeUploadBufferInput)[K]
    }>): Request<DescribeUploadBufferOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUploadBuffer(
          this.ops["DescribeUploadBuffer"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVTLDevices(partialParams: ToOptional<{
      [K in keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput & keyof DescribeVTLDevicesInput]: (DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput & DescribeVTLDevicesInput)[K]
    }>): Request<DescribeVTLDevicesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVTLDevices(
          this.ops["DescribeVTLDevices"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkingStorage(partialParams: ToOptional<{
      [K in keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput & keyof DescribeWorkingStorageInput]: (DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput & DescribeWorkingStorageInput)[K]
    }>): Request<DescribeWorkingStorageOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkingStorage(
          this.ops["DescribeWorkingStorage"].applicator.apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput & keyof DetachVolumeInput]: (DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput & DetachVolumeInput)[K]
    }>): Request<DetachVolumeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachVolume(
          this.ops["DetachVolume"].applicator.apply(partialParams)
        );
    }

    invokeDisableGateway(partialParams: ToOptional<{
      [K in keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput & keyof DisableGatewayInput]: (DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput & DisableGatewayInput)[K]
    }>): Request<DisableGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableGateway(
          this.ops["DisableGateway"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateFileSystem(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput & keyof DisassociateFileSystemInput]: (DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput & DisassociateFileSystemInput)[K]
    }>): Request<DisassociateFileSystemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFileSystem(
          this.ops["DisassociateFileSystem"].applicator.apply(partialParams)
        );
    }

    invokeJoinDomain(partialParams: ToOptional<{
      [K in keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof Omit<JoinDomainInput, "GatewayARN"> & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput & keyof JoinDomainInput]: (JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & Omit<JoinDomainInput, "GatewayARN"> & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput & JoinDomainInput)[K]
    }>): Request<JoinDomainOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.joinDomain(
          this.ops["JoinDomain"].applicator.apply(partialParams)
        );
    }

    invokeListLocalDisks(partialParams: ToOptional<{
      [K in keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof Omit<ListLocalDisksInput, "GatewayARN"> & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput & keyof ListLocalDisksInput]: (ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & Omit<ListLocalDisksInput, "GatewayARN"> & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput & ListLocalDisksInput)[K]
    }>): Request<ListLocalDisksOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLocalDisks(
          this.ops["ListLocalDisks"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListVolumeInitiators(partialParams: ToOptional<{
      [K in keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput & keyof ListVolumeInitiatorsInput]: (ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput & ListVolumeInitiatorsInput)[K]
    }>): Request<ListVolumeInitiatorsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVolumeInitiators(
          this.ops["ListVolumeInitiators"].applicator.apply(partialParams)
        );
    }

    invokeListVolumeRecoveryPoints(partialParams: ToOptional<{
      [K in keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof Omit<ListVolumeRecoveryPointsInput, "GatewayARN"> & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput & keyof ListVolumeRecoveryPointsInput]: (ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & Omit<ListVolumeRecoveryPointsInput, "GatewayARN"> & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput & ListVolumeRecoveryPointsInput)[K]
    }>): Request<ListVolumeRecoveryPointsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVolumeRecoveryPoints(
          this.ops["ListVolumeRecoveryPoints"].applicator.apply(partialParams)
        );
    }

    invokeNotifyWhenUploaded(partialParams: ToOptional<{
      [K in keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput & keyof NotifyWhenUploadedInput]: (NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput & NotifyWhenUploadedInput)[K]
    }>): Request<NotifyWhenUploadedOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.notifyWhenUploaded(
          this.ops["NotifyWhenUploaded"].applicator.apply(partialParams)
        );
    }

    invokeRefreshCache(partialParams: ToOptional<{
      [K in keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput & keyof RefreshCacheInput]: (RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput & RefreshCacheInput)[K]
    }>): Request<RefreshCacheOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.refreshCache(
          this.ops["RefreshCache"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput & keyof RemoveTagsFromResourceInput]: (RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput & RemoveTagsFromResourceInput)[K]
    }>): Request<RemoveTagsFromResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeResetCache(partialParams: ToOptional<{
      [K in keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof Omit<ResetCacheInput, "GatewayARN"> & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput & keyof ResetCacheInput]: (ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & Omit<ResetCacheInput, "GatewayARN"> & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput & ResetCacheInput)[K]
    }>): Request<ResetCacheOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetCache(
          this.ops["ResetCache"].applicator.apply(partialParams)
        );
    }

    invokeRetrieveTapeArchive(partialParams: ToOptional<{
      [K in keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof Omit<RetrieveTapeArchiveInput, "GatewayARN"> & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput & keyof RetrieveTapeArchiveInput]: (RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & Omit<RetrieveTapeArchiveInput, "GatewayARN"> & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput & RetrieveTapeArchiveInput)[K]
    }>): Request<RetrieveTapeArchiveOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retrieveTapeArchive(
          this.ops["RetrieveTapeArchive"].applicator.apply(partialParams)
        );
    }

    invokeRetrieveTapeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof Omit<RetrieveTapeRecoveryPointInput, "GatewayARN"> & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput & keyof RetrieveTapeRecoveryPointInput]: (RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & Omit<RetrieveTapeRecoveryPointInput, "GatewayARN"> & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput & RetrieveTapeRecoveryPointInput)[K]
    }>): Request<RetrieveTapeRecoveryPointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retrieveTapeRecoveryPoint(
          this.ops["RetrieveTapeRecoveryPoint"].applicator.apply(partialParams)
        );
    }

    invokeSetLocalConsolePassword(partialParams: ToOptional<{
      [K in keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof Omit<SetLocalConsolePasswordInput, "GatewayARN"> & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput & keyof SetLocalConsolePasswordInput]: (SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & Omit<SetLocalConsolePasswordInput, "GatewayARN"> & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput & SetLocalConsolePasswordInput)[K]
    }>): Request<SetLocalConsolePasswordOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setLocalConsolePassword(
          this.ops["SetLocalConsolePassword"].applicator.apply(partialParams)
        );
    }

    invokeSetSMBGuestPassword(partialParams: ToOptional<{
      [K in keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof Omit<SetSMBGuestPasswordInput, "GatewayARN"> & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput & keyof SetSMBGuestPasswordInput]: (SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & Omit<SetSMBGuestPasswordInput, "GatewayARN"> & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput & SetSMBGuestPasswordInput)[K]
    }>): Request<SetSMBGuestPasswordOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSMBGuestPassword(
          this.ops["SetSMBGuestPassword"].applicator.apply(partialParams)
        );
    }

    invokeShutdownGateway(partialParams: ToOptional<{
      [K in keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof Omit<ShutdownGatewayInput, "GatewayARN"> & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput & keyof ShutdownGatewayInput]: (ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & Omit<ShutdownGatewayInput, "GatewayARN"> & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput & ShutdownGatewayInput)[K]
    }>): Request<ShutdownGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.shutdownGateway(
          this.ops["ShutdownGateway"].applicator.apply(partialParams)
        );
    }

    invokeStartAvailabilityMonitorTest(partialParams: ToOptional<{
      [K in keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof Omit<StartAvailabilityMonitorTestInput, "GatewayARN"> & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput & keyof StartAvailabilityMonitorTestInput]: (StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & Omit<StartAvailabilityMonitorTestInput, "GatewayARN"> & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput & StartAvailabilityMonitorTestInput)[K]
    }>): Request<StartAvailabilityMonitorTestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAvailabilityMonitorTest(
          this.ops["StartAvailabilityMonitorTest"].applicator.apply(partialParams)
        );
    }

    invokeStartGateway(partialParams: ToOptional<{
      [K in keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof Omit<StartGatewayInput, "GatewayARN"> & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput & keyof StartGatewayInput]: (StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & Omit<StartGatewayInput, "GatewayARN"> & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput & StartGatewayInput)[K]
    }>): Request<StartGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startGateway(
          this.ops["StartGateway"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAutomaticTapeCreationPolicy(partialParams: ToOptional<{
      [K in keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof Omit<UpdateAutomaticTapeCreationPolicyInput, "GatewayARN"> & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput & keyof UpdateAutomaticTapeCreationPolicyInput]: (UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & Omit<UpdateAutomaticTapeCreationPolicyInput, "GatewayARN"> & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput & UpdateAutomaticTapeCreationPolicyInput)[K]
    }>): Request<UpdateAutomaticTapeCreationPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAutomaticTapeCreationPolicy(
          this.ops["UpdateAutomaticTapeCreationPolicy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBandwidthRateLimit(partialParams: ToOptional<{
      [K in keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof Omit<UpdateBandwidthRateLimitInput, "GatewayARN"> & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput & keyof UpdateBandwidthRateLimitInput]: (UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & Omit<UpdateBandwidthRateLimitInput, "GatewayARN"> & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput & UpdateBandwidthRateLimitInput)[K]
    }>): Request<UpdateBandwidthRateLimitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBandwidthRateLimit(
          this.ops["UpdateBandwidthRateLimit"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBandwidthRateLimitSchedule(partialParams: ToOptional<{
      [K in keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof Omit<UpdateBandwidthRateLimitScheduleInput, "GatewayARN"> & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput & keyof UpdateBandwidthRateLimitScheduleInput]: (UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & Omit<UpdateBandwidthRateLimitScheduleInput, "GatewayARN"> & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput & UpdateBandwidthRateLimitScheduleInput)[K]
    }>): Request<UpdateBandwidthRateLimitScheduleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBandwidthRateLimitSchedule(
          this.ops["UpdateBandwidthRateLimitSchedule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChapCredentials(partialParams: ToOptional<{
      [K in keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput & keyof UpdateChapCredentialsInput]: (UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput & UpdateChapCredentialsInput)[K]
    }>): Request<UpdateChapCredentialsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChapCredentials(
          this.ops["UpdateChapCredentials"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFileSystemAssociation(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput & keyof UpdateFileSystemAssociationInput]: (UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput & UpdateFileSystemAssociationInput)[K]
    }>): Request<UpdateFileSystemAssociationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFileSystemAssociation(
          this.ops["UpdateFileSystemAssociation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGatewayInformation(partialParams: ToOptional<{
      [K in keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof Omit<UpdateGatewayInformationInput, "GatewayARN"> & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput & keyof UpdateGatewayInformationInput]: (UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & Omit<UpdateGatewayInformationInput, "GatewayARN"> & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput & UpdateGatewayInformationInput)[K]
    }>): Request<UpdateGatewayInformationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewayInformation(
          this.ops["UpdateGatewayInformation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGatewaySoftwareNow(partialParams: ToOptional<{
      [K in keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof Omit<UpdateGatewaySoftwareNowInput, "GatewayARN"> & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput & keyof UpdateGatewaySoftwareNowInput]: (UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & Omit<UpdateGatewaySoftwareNowInput, "GatewayARN"> & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput & UpdateGatewaySoftwareNowInput)[K]
    }>): Request<UpdateGatewaySoftwareNowOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewaySoftwareNow(
          this.ops["UpdateGatewaySoftwareNow"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMaintenanceStartTime(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof Omit<UpdateMaintenanceStartTimeInput, "GatewayARN"> & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput & keyof UpdateMaintenanceStartTimeInput]: (UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & Omit<UpdateMaintenanceStartTimeInput, "GatewayARN"> & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput & UpdateMaintenanceStartTimeInput)[K]
    }>): Request<UpdateMaintenanceStartTimeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceStartTime(
          this.ops["UpdateMaintenanceStartTime"].applicator.apply(partialParams)
        );
    }

    invokeUpdateNFSFileShare(partialParams: ToOptional<{
      [K in keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput & keyof UpdateNFSFileShareInput]: (UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput & UpdateNFSFileShareInput)[K]
    }>): Request<UpdateNFSFileShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNFSFileShare(
          this.ops["UpdateNFSFileShare"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSMBFileShare(partialParams: ToOptional<{
      [K in keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput & keyof UpdateSMBFileShareInput]: (UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput & UpdateSMBFileShareInput)[K]
    }>): Request<UpdateSMBFileShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBFileShare(
          this.ops["UpdateSMBFileShare"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSMBFileShareVisibility(partialParams: ToOptional<{
      [K in keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof Omit<UpdateSMBFileShareVisibilityInput, "GatewayARN"> & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput & keyof UpdateSMBFileShareVisibilityInput]: (UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & Omit<UpdateSMBFileShareVisibilityInput, "GatewayARN"> & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput & UpdateSMBFileShareVisibilityInput)[K]
    }>): Request<UpdateSMBFileShareVisibilityOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBFileShareVisibility(
          this.ops["UpdateSMBFileShareVisibility"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSMBLocalGroups(partialParams: ToOptional<{
      [K in keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof Omit<UpdateSMBLocalGroupsInput, "GatewayARN"> & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput & keyof UpdateSMBLocalGroupsInput]: (UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & Omit<UpdateSMBLocalGroupsInput, "GatewayARN"> & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput & UpdateSMBLocalGroupsInput)[K]
    }>): Request<UpdateSMBLocalGroupsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBLocalGroups(
          this.ops["UpdateSMBLocalGroups"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSMBSecurityStrategy(partialParams: ToOptional<{
      [K in keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof Omit<UpdateSMBSecurityStrategyInput, "GatewayARN"> & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput & keyof UpdateSMBSecurityStrategyInput]: (UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & Omit<UpdateSMBSecurityStrategyInput, "GatewayARN"> & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput & UpdateSMBSecurityStrategyInput)[K]
    }>): Request<UpdateSMBSecurityStrategyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBSecurityStrategy(
          this.ops["UpdateSMBSecurityStrategy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput & keyof UpdateSnapshotScheduleInput]: (UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput & UpdateSnapshotScheduleInput)[K]
    }>): Request<UpdateSnapshotScheduleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSnapshotSchedule(
          this.ops["UpdateSnapshotSchedule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVTLDeviceType(partialParams: ToOptional<{
      [K in keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput & keyof UpdateVTLDeviceTypeInput]: (UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput & UpdateVTLDeviceTypeInput)[K]
    }>): Request<UpdateVTLDeviceTypeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVTLDeviceType(
          this.ops["UpdateVTLDeviceType"].applicator.apply(partialParams)
        );
    }
}