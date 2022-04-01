
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateFileSystemRequest,
    CreateFileSystemFromBackupRequest,
    CreateVolumeFromBackupRequest,
    DeleteBackupRequest,
    CreateFileSystemResponse,
    CreateFileSystemFromBackupResponse,
    CreateVolumeFromBackupResponse,
    DeleteBackupResponse
} from "aws-sdk/clients/fsx";
const schema = require("../apis/fsx-2018-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.LustreFileSystem {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.fsx.LustreFileSystem>) {
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

    invokeCreateFileSystem(partialParams: ToOptional<{
      [K in keyof CreateFileSystemRequest & keyof Omit<CreateFileSystemRequest, "SubnetIds">]: (CreateFileSystemRequest)[K]
    }>): Request<CreateFileSystemResponse, AWSError> {
        this.boot();
        return this.client.createFileSystem(
          this.ops["CreateFileSystem"].apply(partialParams)
        );
    }

    invokeCreateFileSystemFromBackup(partialParams: ToOptional<{
      [K in keyof CreateFileSystemFromBackupRequest & keyof Omit<CreateFileSystemFromBackupRequest, "BackupId" | "SubnetIds">]: (CreateFileSystemFromBackupRequest)[K]
    }>): Request<CreateFileSystemFromBackupResponse, AWSError> {
        this.boot();
        return this.client.createFileSystemFromBackup(
          this.ops["CreateFileSystemFromBackup"].apply(partialParams)
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
}