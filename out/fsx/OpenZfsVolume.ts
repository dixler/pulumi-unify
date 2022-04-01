
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateSnapshotRequest,
    CreateStorageVirtualMachineRequest,
    CreateVolumeRequest,
    CreateVolumeFromBackupRequest,
    UpdateSnapshotRequest,
    CreateSnapshotResponse,
    CreateStorageVirtualMachineResponse,
    CreateVolumeResponse,
    CreateVolumeFromBackupResponse,
    UpdateSnapshotResponse
} from "aws-sdk/clients/fsx";
const schema = require("../apis/fsx-2018-03-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fsx.OpenZfsVolume {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.fsx.OpenZfsVolume>) {
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

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof Omit<CreateSnapshotRequest, "Name">]: (CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateStorageVirtualMachine(partialParams: ToOptional<{
      [K in keyof CreateStorageVirtualMachineRequest & keyof Omit<CreateStorageVirtualMachineRequest, "Name">]: (CreateStorageVirtualMachineRequest)[K]
    }>): Request<CreateStorageVirtualMachineResponse, AWSError> {
        this.boot();
        return this.client.createStorageVirtualMachine(
          this.ops["CreateStorageVirtualMachine"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest & keyof Omit<CreateVolumeRequest, "VolumeType" | "Name">]: (CreateVolumeRequest)[K]
    }>): Request<CreateVolumeResponse, AWSError> {
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeCreateVolumeFromBackup(partialParams: ToOptional<{
      [K in keyof CreateVolumeFromBackupRequest & keyof Omit<CreateVolumeFromBackupRequest, "Name">]: (CreateVolumeFromBackupRequest)[K]
    }>): Request<CreateVolumeFromBackupResponse, AWSError> {
        this.boot();
        return this.client.createVolumeFromBackup(
          this.ops["CreateVolumeFromBackup"].apply(partialParams)
        );
    }

    invokeUpdateSnapshot(partialParams: ToOptional<{
      [K in keyof UpdateSnapshotRequest & keyof Omit<UpdateSnapshotRequest, "Name">]: (UpdateSnapshotRequest)[K]
    }>): Request<UpdateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.updateSnapshot(
          this.ops["UpdateSnapshot"].apply(partialParams)
        );
    }
}