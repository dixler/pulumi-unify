
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateFileSystemAliasesRequest,
    CancelDataRepositoryTaskRequest,
    CopyBackupRequest,
    CreateBackupRequest,
    CreateDataRepositoryAssociationRequest,
    CreateDataRepositoryTaskRequest,
    CreateFileSystemRequest,
    CreateFileSystemFromBackupRequest,
    CreateSnapshotRequest,
    CreateStorageVirtualMachineRequest,
    CreateVolumeRequest,
    CreateVolumeFromBackupRequest,
    DeleteBackupRequest,
    DeleteDataRepositoryAssociationRequest,
    DeleteFileSystemRequest,
    DeleteSnapshotRequest,
    DeleteStorageVirtualMachineRequest,
    DeleteVolumeRequest,
    DescribeBackupsRequest,
    DescribeDataRepositoryAssociationsRequest,
    DescribeDataRepositoryTasksRequest,
    DescribeFileSystemAliasesRequest,
    DescribeFileSystemsRequest,
    DescribeSnapshotsRequest,
    DescribeStorageVirtualMachinesRequest,
    DescribeVolumesRequest,
    DisassociateFileSystemAliasesRequest,
    ListTagsForResourceRequest,
    ReleaseFileSystemNfsV3LocksRequest,
    RestoreVolumeFromSnapshotRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateDataRepositoryAssociationRequest,
    UpdateFileSystemRequest,
    UpdateSnapshotRequest,
    UpdateStorageVirtualMachineRequest,
    UpdateVolumeRequest,
    AssociateFileSystemAliasesResponse,
    CancelDataRepositoryTaskResponse,
    CopyBackupResponse,
    CreateBackupResponse,
    CreateDataRepositoryAssociationResponse,
    CreateDataRepositoryTaskResponse,
    CreateFileSystemResponse,
    CreateFileSystemFromBackupResponse,
    CreateSnapshotResponse,
    CreateStorageVirtualMachineResponse,
    CreateVolumeResponse,
    CreateVolumeFromBackupResponse,
    DeleteBackupResponse,
    DeleteDataRepositoryAssociationResponse,
    DeleteFileSystemResponse,
    DeleteSnapshotResponse,
    DeleteStorageVirtualMachineResponse,
    DeleteVolumeResponse,
    DescribeBackupsResponse,
    DescribeDataRepositoryAssociationsResponse,
    DescribeDataRepositoryTasksResponse,
    DescribeFileSystemAliasesResponse,
    DescribeFileSystemsResponse,
    DescribeSnapshotsResponse,
    DescribeStorageVirtualMachinesResponse,
    DescribeVolumesResponse,
    DisassociateFileSystemAliasesResponse,
    ListTagsForResourceResponse,
    ReleaseFileSystemNfsV3LocksResponse,
    RestoreVolumeFromSnapshotResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateDataRepositoryAssociationResponse,
    UpdateFileSystemResponse,
    UpdateSnapshotResponse,
    UpdateStorageVirtualMachineResponse,
    UpdateVolumeResponse
} from "aws-sdk/clients/fsx";
const schema = require("../apis/fsx-2018-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.WindowsFileSystem {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.fsx.WindowsFileSystem>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.FSx()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAssociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemAliasesRequest]: (AssociateFileSystemAliasesRequest)[K]
    }>): Request<AssociateFileSystemAliasesResponse, AWSError> {
        this.boot();
        return this.client.associateFileSystemAliases(
          this.ops["AssociateFileSystemAliases"].apply(partialParams)
        );
    }

    invokeCancelDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CancelDataRepositoryTaskRequest]: (CancelDataRepositoryTaskRequest)[K]
    }>): Request<CancelDataRepositoryTaskResponse, AWSError> {
        this.boot();
        return this.client.cancelDataRepositoryTask(
          this.ops["CancelDataRepositoryTask"].apply(partialParams)
        );
    }

    invokeCopyBackup(partialParams: ToOptional<{
      [K in keyof CopyBackupRequest]: (CopyBackupRequest)[K]
    }>): Request<CopyBackupResponse, AWSError> {
        this.boot();
        return this.client.copyBackup(
          this.ops["CopyBackup"].apply(partialParams)
        );
    }

    invokeCreateBackup(partialParams: ToOptional<{
      [K in keyof CreateBackupRequest]: (CreateBackupRequest)[K]
    }>): Request<CreateBackupResponse, AWSError> {
        this.boot();
        return this.client.createBackup(
          this.ops["CreateBackup"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryAssociationRequest]: (CreateDataRepositoryAssociationRequest)[K]
    }>): Request<CreateDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.createDataRepositoryAssociation(
          this.ops["CreateDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryTaskRequest]: (CreateDataRepositoryTaskRequest)[K]
    }>): Request<CreateDataRepositoryTaskResponse, AWSError> {
        this.boot();
        return this.client.createDataRepositoryTask(
          this.ops["CreateDataRepositoryTask"].apply(partialParams)
        );
    }

    invokeCreateFileSystem(partialParams: ToOptional<{
      [K in keyof CreateFileSystemRequest]: (CreateFileSystemRequest)[K]
    }>): Request<CreateFileSystemResponse, AWSError> {
        this.boot();
        return this.client.createFileSystem(
          this.ops["CreateFileSystem"].apply(partialParams)
        );
    }

    invokeCreateFileSystemFromBackup(partialParams: ToOptional<{
      [K in keyof CreateFileSystemFromBackupRequest & keyof Omit<CreateFileSystemFromBackupRequest, "BackupId">]: (CreateFileSystemFromBackupRequest)[K]
    }>): Request<CreateFileSystemFromBackupResponse, AWSError> {
        this.boot();
        return this.client.createFileSystemFromBackup(
          this.ops["CreateFileSystemFromBackup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest]: (CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof CreateStorageVirtualMachineRequest]: (CreateStorageVirtualMachineRequest)[K]
    }>): Request<CreateStorageVirtualMachineResponse, AWSError> {
        this.boot();
        return this.client.createStorageVirtualMachine(
          this.ops["CreateStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest]: (CreateVolumeRequest)[K]
    }>): Request<CreateVolumeResponse, AWSError> {
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeCreateVolumeFromBackup(partialParams: ToOptional<{
      [K in keyof CreateVolumeFromBackupRequest & keyof Omit<CreateVolumeFromBackupRequest, "BackupId">]: (CreateVolumeFromBackupRequest)[K]
    }>): Request<CreateVolumeFromBackupResponse, AWSError> {
        this.boot();
        return this.client.createVolumeFromBackup(
          this.ops["CreateVolumeFromBackup"].apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupRequest & keyof Omit<DeleteBackupRequest, "BackupId">]: (DeleteBackupRequest)[K]
    }>): Request<DeleteBackupResponse, AWSError> {
        this.boot();
        return this.client.deleteBackup(
          this.ops["DeleteBackup"].apply(partialParams)
        );
    }

    invokeDeleteDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDataRepositoryAssociationRequest]: (DeleteDataRepositoryAssociationRequest)[K]
    }>): Request<DeleteDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.deleteDataRepositoryAssociation(
          this.ops["DeleteDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeDeleteFileSystem(partialParams: ToOptional<{
      [K in keyof DeleteFileSystemRequest]: (DeleteFileSystemRequest)[K]
    }>): Request<DeleteFileSystemResponse, AWSError> {
        this.boot();
        return this.client.deleteFileSystem(
          this.ops["DeleteFileSystem"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest)[K]
    }>): Request<DeleteSnapshotResponse, AWSError> {
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof DeleteStorageVirtualMachineRequest]: (DeleteStorageVirtualMachineRequest)[K]
    }>): Request<DeleteStorageVirtualMachineResponse, AWSError> {
        this.boot();
        return this.client.deleteStorageVirtualMachine(
          this.ops["DeleteStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest]: (DeleteVolumeRequest)[K]
    }>): Request<DeleteVolumeResponse, AWSError> {
        this.boot();
        return this.client.deleteVolume(
          this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDescribeBackups(partialParams: ToOptional<{
      [K in keyof DescribeBackupsRequest]: (DescribeBackupsRequest)[K]
    }>): Request<DescribeBackupsResponse, AWSError> {
        this.boot();
        return this.client.describeBackups(
          this.ops["DescribeBackups"].apply(partialParams)
        );
    }

    invokeDescribeDataRepositoryAssociations(partialParams: ToOptional<{
      [K in keyof DescribeDataRepositoryAssociationsRequest]: (DescribeDataRepositoryAssociationsRequest)[K]
    }>): Request<DescribeDataRepositoryAssociationsResponse, AWSError> {
        this.boot();
        return this.client.describeDataRepositoryAssociations(
          this.ops["DescribeDataRepositoryAssociations"].apply(partialParams)
        );
    }

    invokeDescribeDataRepositoryTasks(partialParams: ToOptional<{
      [K in keyof DescribeDataRepositoryTasksRequest]: (DescribeDataRepositoryTasksRequest)[K]
    }>): Request<DescribeDataRepositoryTasksResponse, AWSError> {
        this.boot();
        return this.client.describeDataRepositoryTasks(
          this.ops["DescribeDataRepositoryTasks"].apply(partialParams)
        );
    }

    invokeDescribeFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAliasesRequest]: (DescribeFileSystemAliasesRequest)[K]
    }>): Request<DescribeFileSystemAliasesResponse, AWSError> {
        this.boot();
        return this.client.describeFileSystemAliases(
          this.ops["DescribeFileSystemAliases"].apply(partialParams)
        );
    }

    invokeDescribeFileSystems(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemsRequest]: (DescribeFileSystemsRequest)[K]
    }>): Request<DescribeFileSystemsResponse, AWSError> {
        this.boot();
        return this.client.describeFileSystems(
          this.ops["DescribeFileSystems"].apply(partialParams)
        );
    }

    invokeDescribeSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotsRequest]: (DescribeSnapshotsRequest)[K]
    }>): Request<DescribeSnapshotsResponse, AWSError> {
        this.boot();
        return this.client.describeSnapshots(
          this.ops["DescribeSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeStorageVirtualMachines(partialParams: ToOptional<{
      [K in keyof DescribeStorageVirtualMachinesRequest]: (DescribeStorageVirtualMachinesRequest)[K]
    }>): Request<DescribeStorageVirtualMachinesResponse, AWSError> {
        this.boot();
        return this.client.describeStorageVirtualMachines(
          this.ops["DescribeStorageVirtualMachines"].apply(partialParams)
        );
    }

    invokeDescribeVolumes(partialParams: ToOptional<{
      [K in keyof DescribeVolumesRequest]: (DescribeVolumesRequest)[K]
    }>): Request<DescribeVolumesResponse, AWSError> {
        this.boot();
        return this.client.describeVolumes(
          this.ops["DescribeVolumes"].apply(partialParams)
        );
    }

    invokeDisassociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemAliasesRequest]: (DisassociateFileSystemAliasesRequest)[K]
    }>): Request<DisassociateFileSystemAliasesResponse, AWSError> {
        this.boot();
        return this.client.disassociateFileSystemAliases(
          this.ops["DisassociateFileSystemAliases"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeReleaseFileSystemNfsV3Locks(partialParams: ToOptional<{
      [K in keyof ReleaseFileSystemNfsV3LocksRequest]: (ReleaseFileSystemNfsV3LocksRequest)[K]
    }>): Request<ReleaseFileSystemNfsV3LocksResponse, AWSError> {
        this.boot();
        return this.client.releaseFileSystemNfsV3Locks(
          this.ops["ReleaseFileSystemNfsV3Locks"].apply(partialParams)
        );
    }

    invokeRestoreVolumeFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreVolumeFromSnapshotRequest]: (RestoreVolumeFromSnapshotRequest)[K]
    }>): Request<RestoreVolumeFromSnapshotResponse, AWSError> {
        this.boot();
        return this.client.restoreVolumeFromSnapshot(
          this.ops["RestoreVolumeFromSnapshot"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDataRepositoryAssociationRequest]: (UpdateDataRepositoryAssociationRequest)[K]
    }>): Request<UpdateDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.updateDataRepositoryAssociation(
          this.ops["UpdateDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeUpdateFileSystem(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemRequest]: (UpdateFileSystemRequest)[K]
    }>): Request<UpdateFileSystemResponse, AWSError> {
        this.boot();
        return this.client.updateFileSystem(
          this.ops["UpdateFileSystem"].apply(partialParams)
        );
    }

    invokeUpdateSnapshot(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotRequest]: (UpdateSnapshotRequest)[K]
    }>): Request<UpdateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.updateSnapshot(
          this.ops["UpdateSnapshot"].apply(partialParams)
        );
    }

    invokeUpdateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof UpdateStorageVirtualMachineRequest]: (UpdateStorageVirtualMachineRequest)[K]
    }>): Request<UpdateStorageVirtualMachineResponse, AWSError> {
        this.boot();
        return this.client.updateStorageVirtualMachine(
          this.ops["UpdateStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeUpdateVolume(partialParams: ToOptional<{
      [K in keyof UpdateVolumeRequest]: (UpdateVolumeRequest)[K]
    }>): Request<UpdateVolumeResponse, AWSError> {
        this.boot();
        return this.client.updateVolume(
          this.ops["UpdateVolume"].apply(partialParams)
        );
    }
}