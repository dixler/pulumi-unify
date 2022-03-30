
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateFileSystemAliasesRequest,
    CancelDataRepositoryTaskRequest,
    CopyBackupRequest,
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
    DescribeFileSystemAliasesRequest,
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
    DescribeFileSystemAliasesResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.OntapStorageVirtualMachine {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.fsx.OntapStorageVirtualMachine>) {
        super(...args)
        this.client = new awssdk.FSx()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/fsx-2018-03-01.normal.json"), this.client)
    }

    invokeAssociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest]: (AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest)[K]
    }>): AssociateFileSystemAliasesResponse {
        return this.client.associateFileSystemAliases(
            this.ops["AssociateFileSystemAliases"].apply(partialParams)
        );
    }

    invokeCancelDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest]: (CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest)[K]
    }>): CancelDataRepositoryTaskResponse {
        return this.client.cancelDataRepositoryTask(
            this.ops["CancelDataRepositoryTask"].apply(partialParams)
        );
    }

    invokeCopyBackup(partialParams: ToOptional<{
      [K in keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest]: (CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest)[K]
    }>): CopyBackupResponse {
        return this.client.copyBackup(
            this.ops["CopyBackup"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest]: (CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest)[K]
    }>): CreateDataRepositoryAssociationResponse {
        return this.client.createDataRepositoryAssociation(
            this.ops["CreateDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest]: (CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest)[K]
    }>): CreateDataRepositoryTaskResponse {
        return this.client.createDataRepositoryTask(
            this.ops["CreateDataRepositoryTask"].apply(partialParams)
        );
    }

    invokeCreateFileSystem(partialParams: ToOptional<{
      [K in keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest]: (CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest)[K]
    }>): CreateFileSystemResponse {
        return this.client.createFileSystem(
            this.ops["CreateFileSystem"].apply(partialParams)
        );
    }

    invokeCreateFileSystemFromBackup(partialParams: ToOptional<{
      [K in keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest]: (CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest)[K]
    }>): CreateFileSystemFromBackupResponse {
        return this.client.createFileSystemFromBackup(
            this.ops["CreateFileSystemFromBackup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest]: (CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest)[K]
    }>): CreateSnapshotResponse {
        return this.client.createSnapshot(
            this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest]: (CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest)[K]
    }>): CreateStorageVirtualMachineResponse {
        return this.client.createStorageVirtualMachine(
            this.ops["CreateStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest]: (CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest)[K]
    }>): CreateVolumeResponse {
        return this.client.createVolume(
            this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeCreateVolumeFromBackup(partialParams: ToOptional<{
      [K in keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest]: (CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest)[K]
    }>): CreateVolumeFromBackupResponse {
        return this.client.createVolumeFromBackup(
            this.ops["CreateVolumeFromBackup"].apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest]: (DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest)[K]
    }>): DeleteBackupResponse {
        return this.client.deleteBackup(
            this.ops["DeleteBackup"].apply(partialParams)
        );
    }

    invokeDeleteDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest]: (DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest)[K]
    }>): DeleteDataRepositoryAssociationResponse {
        return this.client.deleteDataRepositoryAssociation(
            this.ops["DeleteDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeDeleteFileSystem(partialParams: ToOptional<{
      [K in keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest]: (DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest)[K]
    }>): DeleteFileSystemResponse {
        return this.client.deleteFileSystem(
            this.ops["DeleteFileSystem"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest)[K]
    }>): DeleteSnapshotResponse {
        return this.client.deleteSnapshot(
            this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest]: (DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest)[K]
    }>): DeleteStorageVirtualMachineResponse {
        return this.client.deleteStorageVirtualMachine(
            this.ops["DeleteStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest]: (DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest)[K]
    }>): DeleteVolumeResponse {
        return this.client.deleteVolume(
            this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDescribeFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest]: (DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest)[K]
    }>): DescribeFileSystemAliasesResponse {
        return this.client.describeFileSystemAliases(
            this.ops["DescribeFileSystemAliases"].apply(partialParams)
        );
    }

    invokeDisassociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest]: (DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest)[K]
    }>): DisassociateFileSystemAliasesResponse {
        return this.client.disassociateFileSystemAliases(
            this.ops["DisassociateFileSystemAliases"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeReleaseFileSystemNfsV3Locks(partialParams: ToOptional<{
      [K in keyof ReleaseFileSystemNfsV3LocksRequest & keyof Omit<ReleaseFileSystemNfsV3LocksRequest, "FileSystemId"> & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest]: (ReleaseFileSystemNfsV3LocksRequest & Omit<ReleaseFileSystemNfsV3LocksRequest, "FileSystemId"> & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest)[K]
    }>): ReleaseFileSystemNfsV3LocksResponse {
        return this.client.releaseFileSystemNfsV3Locks(
            this.ops["ReleaseFileSystemNfsV3Locks"].apply(partialParams)
        );
    }

    invokeRestoreVolumeFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest]: (RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest)[K]
    }>): RestoreVolumeFromSnapshotResponse {
        return this.client.restoreVolumeFromSnapshot(
            this.ops["RestoreVolumeFromSnapshot"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest]: (UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest)[K]
    }>): UpdateDataRepositoryAssociationResponse {
        return this.client.updateDataRepositoryAssociation(
            this.ops["UpdateDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeUpdateFileSystem(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemRequest & keyof Omit<UpdateFileSystemRequest, "FileSystemId"> & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest]: (UpdateFileSystemRequest & Omit<UpdateFileSystemRequest, "FileSystemId"> & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest)[K]
    }>): UpdateFileSystemResponse {
        return this.client.updateFileSystem(
            this.ops["UpdateFileSystem"].apply(partialParams)
        );
    }

    invokeUpdateSnapshot(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof Omit<UpdateSnapshotRequest, "Name"> & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest]: (UpdateSnapshotRequest & UpdateSnapshotRequest & Omit<UpdateSnapshotRequest, "Name"> & UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest)[K]
    }>): UpdateSnapshotResponse {
        return this.client.updateSnapshot(
            this.ops["UpdateSnapshot"].apply(partialParams)
        );
    }

    invokeUpdateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest]: (UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest)[K]
    }>): UpdateStorageVirtualMachineResponse {
        return this.client.updateStorageVirtualMachine(
            this.ops["UpdateStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeUpdateVolume(partialParams: ToOptional<{
      [K in keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest]: (UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest)[K]
    }>): UpdateVolumeResponse {
        return this.client.updateVolume(
            this.ops["UpdateVolume"].apply(partialParams)
        );
    }
}