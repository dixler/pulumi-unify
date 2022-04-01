
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DescribeSnapshotAttributeRequest,
    ModifySnapshotTierRequest,
    RestoreSnapshotFromRecycleBinRequest,
    RestoreSnapshotTierRequest,
    DescribeSnapshotAttributeResult,
    ModifySnapshotTierResult,
    RestoreSnapshotFromRecycleBinResult,
    RestoreSnapshotTierResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.SnapshotCreateVolumePermission {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.SnapshotCreateVolumePermission>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeDescribeSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotAttributeRequest & keyof Omit<DescribeSnapshotAttributeRequest, "SnapshotId">]: (DescribeSnapshotAttributeRequest)[K]
    }>): Request<DescribeSnapshotAttributeResult, AWSError> {
        this.boot();
        return this.client.describeSnapshotAttribute(
          this.ops["DescribeSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifySnapshotTier(partialParams: ToOptional<{
      [K in keyof ModifySnapshotTierRequest & keyof Omit<ModifySnapshotTierRequest, "SnapshotId">]: (ModifySnapshotTierRequest)[K]
    }>): Request<ModifySnapshotTierResult, AWSError> {
        this.boot();
        return this.client.modifySnapshotTier(
          this.ops["ModifySnapshotTier"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotFromRecycleBinRequest & keyof Omit<RestoreSnapshotFromRecycleBinRequest, "SnapshotId">]: (RestoreSnapshotFromRecycleBinRequest)[K]
    }>): Request<RestoreSnapshotFromRecycleBinResult, AWSError> {
        this.boot();
        return this.client.restoreSnapshotFromRecycleBin(
          this.ops["RestoreSnapshotFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotTier(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotTierRequest & keyof Omit<RestoreSnapshotTierRequest, "SnapshotId">]: (RestoreSnapshotTierRequest)[K]
    }>): Request<RestoreSnapshotTierResult, AWSError> {
        this.boot();
        return this.client.restoreSnapshotTier(
          this.ops["RestoreSnapshotTier"].apply(partialParams)
        );
    }
}