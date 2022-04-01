
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateParameterGroupRequest,
    DeleteParameterGroupRequest,
    DescribeParametersRequest,
    ResetParameterGroupRequest,
    UpdateParameterGroupRequest,
    CreateParameterGroupResponse,
    DeleteParameterGroupResponse,
    DescribeParametersResponse,
    ResetParameterGroupResponse,
    UpdateParameterGroupResponse
} from "aws-sdk/clients/memorydb";
const schema = require("../apis/memorydb-2021-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.memorydb.ParameterGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.memorydb.ParameterGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MemoryDB()
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

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest & keyof Omit<CreateParameterGroupRequest, "ParameterGroupName" | "Family">]: (CreateParameterGroupRequest)[K]
    }>): Request<CreateParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.createParameterGroup(
          this.ops["CreateParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest & keyof Omit<DeleteParameterGroupRequest, "ParameterGroupName">]: (DeleteParameterGroupRequest)[K]
    }>): Request<DeleteParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteParameterGroup(
          this.ops["DeleteParameterGroup"].apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest & keyof Omit<DescribeParametersRequest, "ParameterGroupName">]: (DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResponse, AWSError> {
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].apply(partialParams)
        );
    }

    invokeResetParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetParameterGroupRequest & keyof Omit<ResetParameterGroupRequest, "ParameterGroupName">]: (ResetParameterGroupRequest)[K]
    }>): Request<ResetParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.resetParameterGroup(
          this.ops["ResetParameterGroup"].apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest & keyof Omit<UpdateParameterGroupRequest, "ParameterGroupName">]: (UpdateParameterGroupRequest)[K]
    }>): Request<UpdateParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.updateParameterGroup(
          this.ops["UpdateParameterGroup"].apply(partialParams)
        );
    }
}