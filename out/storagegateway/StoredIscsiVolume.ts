
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AttachVolumeInput,
    CreateCachediSCSIVolumeInput,
    CreateStorediSCSIVolumeInput,
    AttachVolumeOutput,
    CreateCachediSCSIVolumeOutput,
    CreateStorediSCSIVolumeOutput
} from "aws-sdk/clients/storagegateway";
const schema = require("../apis/storagegateway-2013-06-30.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.storagegateway.StoredIscsiVolume {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.storagegateway.StoredIscsiVolume>) {
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

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeInput & keyof Omit<AttachVolumeInput, "NetworkInterfaceId">]: (AttachVolumeInput)[K]
    }>): Request<AttachVolumeOutput, AWSError> {
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeCreateCachediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateCachediSCSIVolumeInput & keyof Omit<CreateCachediSCSIVolumeInput, "TargetName" | "NetworkInterfaceId">]: (CreateCachediSCSIVolumeInput)[K]
    }>): Request<CreateCachediSCSIVolumeOutput, AWSError> {
        this.boot();
        return this.client.createCachediSCSIVolume(
          this.ops["CreateCachediSCSIVolume"].apply(partialParams)
        );
    }

    invokeCreateStorediSCSIVolume(partialParams: ToOptional<{
      [K in keyof CreateStorediSCSIVolumeInput & keyof Omit<CreateStorediSCSIVolumeInput, "DiskId" | "TargetName" | "NetworkInterfaceId">]: (CreateStorediSCSIVolumeInput)[K]
    }>): Request<CreateStorediSCSIVolumeOutput, AWSError> {
        this.boot();
        return this.client.createStorediSCSIVolume(
          this.ops["CreateStorediSCSIVolume"].apply(partialParams)
        );
    }
}