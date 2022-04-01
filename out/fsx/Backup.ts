
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateFileSystemAliasesRequest,
    CreateDataRepositoryAssociationRequest,
    CreateDataRepositoryTaskRequest,
    CreateSnapshotRequest,
    CreateStorageVirtualMachineRequest,
    DeleteFileSystemRequest,
    DeleteVolumeRequest,
    DescribeFileSystemAliasesRequest,
    DisassociateFileSystemAliasesRequest,
    ReleaseFileSystemNfsV3LocksRequest,
    RestoreVolumeFromSnapshotRequest,
    UpdateFileSystemRequest,
    UpdateVolumeRequest,
    AssociateFileSystemAliasesResponse,
    CreateDataRepositoryAssociationResponse,
    CreateDataRepositoryTaskResponse,
    CreateSnapshotResponse,
    CreateStorageVirtualMachineResponse,
    DeleteFileSystemResponse,
    DeleteVolumeResponse,
    DescribeFileSystemAliasesResponse,
    DisassociateFileSystemAliasesResponse,
    ReleaseFileSystemNfsV3LocksResponse,
    RestoreVolumeFromSnapshotResponse,
    UpdateFileSystemResponse,
    UpdateVolumeResponse
} from "aws-sdk/clients/fsx";
const schema = require("../apis/fsx-2018-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.Backup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.fsx.Backup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.FSx()
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

    invokeAssociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemAliasesRequest & keyof Omit<AssociateFileSystemAliasesRequest, "FileSystemId">]: (AssociateFileSystemAliasesRequest)[K]
    }>): Request<AssociateFileSystemAliasesResponse, AWSError> {
        this.boot();
        return this.client.associateFileSystemAliases(
          this.ops["AssociateFileSystemAliases"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryAssociationRequest & keyof Omit<CreateDataRepositoryAssociationRequest, "FileSystemId">]: (CreateDataRepositoryAssociationRequest)[K]
    }>): Request<CreateDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.createDataRepositoryAssociation(
          this.ops["CreateDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryTaskRequest & keyof Omit<CreateDataRepositoryTaskRequest, "Type" | "FileSystemId">]: (CreateDataRepositoryTaskRequest)[K]
    }>): Request<CreateDataRepositoryTaskResponse, AWSError> {
        this.boot();
        return this.client.createDataRepositoryTask(
          this.ops["CreateDataRepositoryTask"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof Omit<CreateSnapshotRequest, "VolumeId">]: (CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof CreateStorageVirtualMachineRequest & keyof Omit<CreateStorageVirtualMachineRequest, "FileSystemId">]: (CreateStorageVirtualMachineRequest)[K]
    }>): Request<CreateStorageVirtualMachineResponse, AWSError> {
        this.boot();
        return this.client.createStorageVirtualMachine(
          this.ops["CreateStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeDeleteFileSystem(partialParams: ToOptional<{
      [K in keyof DeleteFileSystemRequest & keyof Omit<DeleteFileSystemRequest, "FileSystemId">]: (DeleteFileSystemRequest)[K]
    }>): Request<DeleteFileSystemResponse, AWSError> {
        this.boot();
        return this.client.deleteFileSystem(
          this.ops["DeleteFileSystem"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest & keyof Omit<DeleteVolumeRequest, "VolumeId">]: (DeleteVolumeRequest)[K]
    }>): Request<DeleteVolumeResponse, AWSError> {
        this.boot();
        return this.client.deleteVolume(
          this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDescribeFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DescribeFileSystemAliasesRequest & keyof Omit<DescribeFileSystemAliasesRequest, "FileSystemId">]: (DescribeFileSystemAliasesRequest)[K]
    }>): Request<DescribeFileSystemAliasesResponse, AWSError> {
        this.boot();
        return this.client.describeFileSystemAliases(
          this.ops["DescribeFileSystemAliases"].apply(partialParams)
        );
    }

    invokeDisassociateFileSystemAliases(partialParams: ToOptional<{
      [K in keyof DisassociateFileSystemAliasesRequest & keyof Omit<DisassociateFileSystemAliasesRequest, "FileSystemId">]: (DisassociateFileSystemAliasesRequest)[K]
    }>): Request<DisassociateFileSystemAliasesResponse, AWSError> {
        this.boot();
        return this.client.disassociateFileSystemAliases(
          this.ops["DisassociateFileSystemAliases"].apply(partialParams)
        );
    }

    invokeReleaseFileSystemNfsV3Locks(partialParams: ToOptional<{
      [K in keyof ReleaseFileSystemNfsV3LocksRequest & keyof Omit<ReleaseFileSystemNfsV3LocksRequest, "FileSystemId">]: (ReleaseFileSystemNfsV3LocksRequest)[K]
    }>): Request<ReleaseFileSystemNfsV3LocksResponse, AWSError> {
        this.boot();
        return this.client.releaseFileSystemNfsV3Locks(
          this.ops["ReleaseFileSystemNfsV3Locks"].apply(partialParams)
        );
    }

    invokeRestoreVolumeFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreVolumeFromSnapshotRequest & keyof Omit<RestoreVolumeFromSnapshotRequest, "VolumeId">]: (RestoreVolumeFromSnapshotRequest)[K]
    }>): Request<RestoreVolumeFromSnapshotResponse, AWSError> {
        this.boot();
        return this.client.restoreVolumeFromSnapshot(
          this.ops["RestoreVolumeFromSnapshot"].apply(partialParams)
        );
    }

    invokeUpdateFileSystem(partialParams: ToOptional<{
      [K in keyof UpdateFileSystemRequest & keyof Omit<UpdateFileSystemRequest, "FileSystemId">]: (UpdateFileSystemRequest)[K]
    }>): Request<UpdateFileSystemResponse, AWSError> {
        this.boot();
        return this.client.updateFileSystem(
          this.ops["UpdateFileSystem"].apply(partialParams)
        );
    }

    invokeUpdateVolume(partialParams: ToOptional<{
      [K in keyof UpdateVolumeRequest & keyof Omit<UpdateVolumeRequest, "VolumeId">]: (UpdateVolumeRequest)[K]
    }>): Request<UpdateVolumeResponse, AWSError> {
        this.boot();
        return this.client.updateVolume(
          this.ops["UpdateVolume"].apply(partialParams)
        );
    }
}