
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateFileSystemAliasesRequest,
    CreateDataRepositoryAssociationRequest,
    CreateDataRepositoryTaskRequest,
    CreateStorageVirtualMachineRequest,
    DeleteDataRepositoryAssociationRequest,
    DeleteFileSystemRequest,
    DescribeFileSystemAliasesRequest,
    DisassociateFileSystemAliasesRequest,
    ReleaseFileSystemNfsV3LocksRequest,
    UpdateDataRepositoryAssociationRequest,
    UpdateFileSystemRequest,
    AssociateFileSystemAliasesResponse,
    CreateDataRepositoryAssociationResponse,
    CreateDataRepositoryTaskResponse,
    CreateStorageVirtualMachineResponse,
    DeleteDataRepositoryAssociationResponse,
    DeleteFileSystemResponse,
    DescribeFileSystemAliasesResponse,
    DisassociateFileSystemAliasesResponse,
    ReleaseFileSystemNfsV3LocksResponse,
    UpdateDataRepositoryAssociationResponse,
    UpdateFileSystemResponse
} from "aws-sdk/clients/fsx";
const schema = require("../apis/fsx-2018-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.DataRepositoryAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.fsx.DataRepositoryAssociation>) {
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
      [K in keyof CreateDataRepositoryAssociationRequest & keyof Omit<CreateDataRepositoryAssociationRequest, "FileSystemId" | "FileSystemPath" | "DataRepositoryPath">]: (CreateDataRepositoryAssociationRequest)[K]
    }>): Request<CreateDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.createDataRepositoryAssociation(
          this.ops["CreateDataRepositoryAssociation"].apply(partialParams)
        );
    }

    invokeCreateDataRepositoryTask(partialParams: ToOptional<{
      [K in keyof CreateDataRepositoryTaskRequest & keyof Omit<CreateDataRepositoryTaskRequest, "FileSystemId">]: (CreateDataRepositoryTaskRequest)[K]
    }>): Request<CreateDataRepositoryTaskResponse, AWSError> {
        this.boot();
        return this.client.createDataRepositoryTask(
          this.ops["CreateDataRepositoryTask"].apply(partialParams)
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

    invokeDeleteDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDataRepositoryAssociationRequest & keyof Omit<DeleteDataRepositoryAssociationRequest, "AssociationId">]: (DeleteDataRepositoryAssociationRequest)[K]
    }>): Request<DeleteDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.deleteDataRepositoryAssociation(
          this.ops["DeleteDataRepositoryAssociation"].apply(partialParams)
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

    invokeUpdateDataRepositoryAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDataRepositoryAssociationRequest & keyof Omit<UpdateDataRepositoryAssociationRequest, "AssociationId">]: (UpdateDataRepositoryAssociationRequest)[K]
    }>): Request<UpdateDataRepositoryAssociationResponse, AWSError> {
        this.boot();
        return this.client.updateDataRepositoryAssociation(
          this.ops["UpdateDataRepositoryAssociation"].apply(partialParams)
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
}