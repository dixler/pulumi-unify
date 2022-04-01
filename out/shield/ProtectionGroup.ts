
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateProtectionGroupRequest,
    DeleteProtectionGroupRequest,
    DescribeProtectionGroupRequest,
    ListResourcesInProtectionGroupRequest,
    UpdateProtectionGroupRequest,
    CreateProtectionGroupResponse,
    DeleteProtectionGroupResponse,
    DescribeProtectionGroupResponse,
    ListResourcesInProtectionGroupResponse,
    UpdateProtectionGroupResponse
} from "aws-sdk/clients/shield";
const schema = require("../apis/shield-2016-06-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.shield.ProtectionGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.shield.ProtectionGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Shield()
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

    invokeCreateProtectionGroup(partialParams: ToOptional<{
      [K in keyof CreateProtectionGroupRequest & keyof Omit<CreateProtectionGroupRequest, "ProtectionGroupId" | "Aggregation" | "Pattern">]: (CreateProtectionGroupRequest)[K]
    }>): Request<CreateProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.createProtectionGroup(
          this.ops["CreateProtectionGroup"].apply(partialParams)
        );
    }

    invokeDeleteProtectionGroup(partialParams: ToOptional<{
      [K in keyof DeleteProtectionGroupRequest & keyof Omit<DeleteProtectionGroupRequest, "ProtectionGroupId">]: (DeleteProtectionGroupRequest)[K]
    }>): Request<DeleteProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteProtectionGroup(
          this.ops["DeleteProtectionGroup"].apply(partialParams)
        );
    }

    invokeDescribeProtectionGroup(partialParams: ToOptional<{
      [K in keyof DescribeProtectionGroupRequest & keyof Omit<DescribeProtectionGroupRequest, "ProtectionGroupId">]: (DescribeProtectionGroupRequest)[K]
    }>): Request<DescribeProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.describeProtectionGroup(
          this.ops["DescribeProtectionGroup"].apply(partialParams)
        );
    }

    invokeListResourcesInProtectionGroup(partialParams: ToOptional<{
      [K in keyof ListResourcesInProtectionGroupRequest & keyof Omit<ListResourcesInProtectionGroupRequest, "ProtectionGroupId">]: (ListResourcesInProtectionGroupRequest)[K]
    }>): Request<ListResourcesInProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.listResourcesInProtectionGroup(
          this.ops["ListResourcesInProtectionGroup"].apply(partialParams)
        );
    }

    invokeUpdateProtectionGroup(partialParams: ToOptional<{
      [K in keyof UpdateProtectionGroupRequest & keyof Omit<UpdateProtectionGroupRequest, "ProtectionGroupId" | "Aggregation" | "Pattern">]: (UpdateProtectionGroupRequest)[K]
    }>): Request<UpdateProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.updateProtectionGroup(
          this.ops["UpdateProtectionGroup"].apply(partialParams)
        );
    }
}