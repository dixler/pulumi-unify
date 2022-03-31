
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/fsx-2018-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.OntapVolume {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.fsx.OntapVolume>) {
        super(...args)
        this.client = new awssdk.FSx()
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

    invokeAssociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest & keyof AssociateFileSystemAliasesRequest]: (AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest & AssociateFileSystemAliasesRequest)[K]
    }>): Request<AssociateFileSystemAliasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateFileSystemAliases(
          this.ops["AssociateFileSystemAliases"].applicator.apply(partialParams)
        );
    }

    invokeCancelDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest & keyof CancelDataRepositoryTaskRequest]: (CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest & CancelDataRepositoryTaskRequest)[K]
    }>): Request<CancelDataRepositoryTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelDataRepositoryTask(
          this.ops["CancelDataRepositoryTask"].applicator.apply(partialParams)
        );
    }

    invokeCopyBackup(partialParams: ToOptional<{
      [K in keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest & keyof CopyBackupRequest]: (CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest & CopyBackupRequest)[K]
    }>): Request<CopyBackupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyBackup(
          this.ops["CopyBackup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest & keyof CreateDataRepositoryAssociationRequest]: (CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest & CreateDataRepositoryAssociationRequest)[K]
    }>): Request<CreateDataRepositoryAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataRepositoryAssociation(
          this.ops["CreateDataRepositoryAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest & keyof CreateDataRepositoryTaskRequest]: (CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest & CreateDataRepositoryTaskRequest)[K]
    }>): Request<CreateDataRepositoryTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataRepositoryTask(
          this.ops["CreateDataRepositoryTask"].applicator.apply(partialParams)
        );
    }

    invokeCreateFileSystem(partialParams: ToOptional<{
      [K in keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest & keyof CreateFileSystemRequest]: (CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest & CreateFileSystemRequest)[K]
    }>): Request<CreateFileSystemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFileSystem(
          this.ops["CreateFileSystem"].applicator.apply(partialParams)
        );
    }

    invokeCreateFileSystemFromBackup(partialParams: ToOptional<{
      [K in keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest & keyof CreateFileSystemFromBackupRequest]: (CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest & CreateFileSystemFromBackupRequest)[K]
    }>): Request<CreateFileSystemFromBackupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFileSystemFromBackup(
          this.ops["CreateFileSystemFromBackup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest]: (CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest & keyof CreateStorageVirtualMachineRequest]: (CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest & CreateStorageVirtualMachineRequest)[K]
    }>): Request<CreateStorageVirtualMachineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStorageVirtualMachine(
          this.ops["CreateStorageVirtualMachine"].applicator.apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest]: (CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest)[K]
    }>): Request<CreateVolumeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].applicator.apply(partialParams)
        );
    }

    invokeCreateVolumeFromBackup(partialParams: ToOptional<{
      [K in keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest & keyof CreateVolumeFromBackupRequest]: (CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest & CreateVolumeFromBackupRequest)[K]
    }>): Request<CreateVolumeFromBackupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVolumeFromBackup(
          this.ops["CreateVolumeFromBackup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest]: (DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest)[K]
    }>): Request<DeleteBackupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackup(
          this.ops["DeleteBackup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest & keyof DeleteDataRepositoryAssociationRequest]: (DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest & DeleteDataRepositoryAssociationRequest)[K]
    }>): Request<DeleteDataRepositoryAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataRepositoryAssociation(
          this.ops["DeleteDataRepositoryAssociation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFileSystem(partialParams: ToOptional<{
      [K in keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest & keyof DeleteFileSystemRequest]: (DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest & DeleteFileSystemRequest)[K]
    }>): Request<DeleteFileSystemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFileSystem(
          this.ops["DeleteFileSystem"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest)[K]
    }>): Request<DeleteSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest & keyof DeleteStorageVirtualMachineRequest]: (DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest & DeleteStorageVirtualMachineRequest)[K]
    }>): Request<DeleteStorageVirtualMachineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStorageVirtualMachine(
          this.ops["DeleteStorageVirtualMachine"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest]: (DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest)[K]
    }>): Request<DeleteVolumeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVolume(
          this.ops["DeleteVolume"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest & keyof DescribeFileSystemAliasesRequest]: (DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest & DescribeFileSystemAliasesRequest)[K]
    }>): Request<DescribeFileSystemAliasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFileSystemAliases(
          this.ops["DescribeFileSystemAliases"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest & keyof DisassociateFileSystemAliasesRequest]: (DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest & DisassociateFileSystemAliasesRequest)[K]
    }>): Request<DisassociateFileSystemAliasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFileSystemAliases(
          this.ops["DisassociateFileSystemAliases"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeReleaseFileSystemNfsV3Locks(partialParams: ToOptional<{
      [K in keyof ReleaseFileSystemNfsV3LocksRequest & keyof Omit<ReleaseFileSystemNfsV3LocksRequest, "FileSystemId"> & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest & keyof ReleaseFileSystemNfsV3LocksRequest]: (ReleaseFileSystemNfsV3LocksRequest & Omit<ReleaseFileSystemNfsV3LocksRequest, "FileSystemId"> & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest & ReleaseFileSystemNfsV3LocksRequest)[K]
    }>): Request<ReleaseFileSystemNfsV3LocksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseFileSystemNfsV3Locks(
          this.ops["ReleaseFileSystemNfsV3Locks"].applicator.apply(partialParams)
        );
    }

    invokeRestoreVolumeFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest & keyof RestoreVolumeFromSnapshotRequest]: (RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest & RestoreVolumeFromSnapshotRequest)[K]
    }>): Request<RestoreVolumeFromSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreVolumeFromSnapshot(
          this.ops["RestoreVolumeFromSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest & keyof UpdateDataRepositoryAssociationRequest]: (UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest & UpdateDataRepositoryAssociationRequest)[K]
    }>): Request<UpdateDataRepositoryAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataRepositoryAssociation(
          this.ops["UpdateDataRepositoryAssociation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFileSystem(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemRequest & keyof Omit<UpdateFileSystemRequest, "FileSystemId"> & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest & keyof UpdateFileSystemRequest]: (UpdateFileSystemRequest & Omit<UpdateFileSystemRequest, "FileSystemId"> & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest & UpdateFileSystemRequest)[K]
    }>): Request<UpdateFileSystemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFileSystem(
          this.ops["UpdateFileSystem"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSnapshot(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof Omit<UpdateSnapshotRequest, "Name"> & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest & keyof UpdateSnapshotRequest]: (UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest & Omit<UpdateSnapshotRequest, "Name"> & UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest & UpdateSnapshotRequest)[K]
    }>): Request<UpdateSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSnapshot(
          this.ops["UpdateSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest & keyof Omit<UpdateStorageVirtualMachineRequest, "StorageVirtualMachineId"> & keyof UpdateStorageVirtualMachineRequest & keyof UpdateStorageVirtualMachineRequest]: (UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest & Omit<UpdateStorageVirtualMachineRequest, "StorageVirtualMachineId"> & UpdateStorageVirtualMachineRequest & UpdateStorageVirtualMachineRequest)[K]
    }>): Request<UpdateStorageVirtualMachineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStorageVirtualMachine(
          this.ops["UpdateStorageVirtualMachine"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVolume(partialParams: ToOptional<{
      [K in keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest]: (UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest)[K]
    }>): Request<UpdateVolumeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVolume(
          this.ops["UpdateVolume"].applicator.apply(partialParams)
        );
    }
}