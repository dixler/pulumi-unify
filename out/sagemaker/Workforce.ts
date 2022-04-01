
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateWorkforceRequest,
    DeleteWorkforceRequest,
    DescribeWorkforceRequest,
    UpdateWorkforceRequest,
    CreateWorkforceResponse,
    DeleteWorkforceResponse,
    DescribeWorkforceResponse,
    UpdateWorkforceResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.Workforce {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.Workforce>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateWorkforce(partialParams: ToOptional<{
      [K in keyof CreateWorkforceRequest & keyof Omit<CreateWorkforceRequest, "WorkforceName">]: (CreateWorkforceRequest)[K]
    }>): Request<CreateWorkforceResponse, AWSError> {
        this.boot();
        return this.client.createWorkforce(
          this.ops["CreateWorkforce"].apply(partialParams)
        );
    }

    invokeDeleteWorkforce(partialParams: ToOptional<{
      [K in keyof DeleteWorkforceRequest & keyof Omit<DeleteWorkforceRequest, "WorkforceName">]: (DeleteWorkforceRequest)[K]
    }>): Request<DeleteWorkforceResponse, AWSError> {
        this.boot();
        return this.client.deleteWorkforce(
          this.ops["DeleteWorkforce"].apply(partialParams)
        );
    }

    invokeDescribeWorkforce(partialParams: ToOptional<{
      [K in keyof DescribeWorkforceRequest & keyof Omit<DescribeWorkforceRequest, "WorkforceName">]: (DescribeWorkforceRequest)[K]
    }>): Request<DescribeWorkforceResponse, AWSError> {
        this.boot();
        return this.client.describeWorkforce(
          this.ops["DescribeWorkforce"].apply(partialParams)
        );
    }

    invokeUpdateWorkforce(partialParams: ToOptional<{
      [K in keyof UpdateWorkforceRequest & keyof Omit<UpdateWorkforceRequest, "WorkforceName">]: (UpdateWorkforceRequest)[K]
    }>): Request<UpdateWorkforceResponse, AWSError> {
        this.boot();
        return this.client.updateWorkforce(
          this.ops["UpdateWorkforce"].apply(partialParams)
        );
    }
}