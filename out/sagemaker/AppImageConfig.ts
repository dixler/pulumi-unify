
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAppImageConfigRequest,
    DescribeAppImageConfigRequest,
    UpdateAppImageConfigRequest,
    CreateAppImageConfigResponse,
    DescribeAppImageConfigResponse,
    UpdateAppImageConfigResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.AppImageConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.AppImageConfig>) {
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

    invokeCreateAppImageConfig(partialParams: ToOptional<{
      [K in keyof CreateAppImageConfigRequest & keyof Omit<CreateAppImageConfigRequest, "AppImageConfigName">]: (CreateAppImageConfigRequest)[K]
    }>): Request<CreateAppImageConfigResponse, AWSError> {
        this.boot();
        return this.client.createAppImageConfig(
          this.ops["CreateAppImageConfig"].apply(partialParams)
        );
    }

    invokeDescribeAppImageConfig(partialParams: ToOptional<{
      [K in keyof DescribeAppImageConfigRequest & keyof Omit<DescribeAppImageConfigRequest, "AppImageConfigName">]: (DescribeAppImageConfigRequest)[K]
    }>): Request<DescribeAppImageConfigResponse, AWSError> {
        this.boot();
        return this.client.describeAppImageConfig(
          this.ops["DescribeAppImageConfig"].apply(partialParams)
        );
    }

    invokeUpdateAppImageConfig(partialParams: ToOptional<{
      [K in keyof UpdateAppImageConfigRequest & keyof Omit<UpdateAppImageConfigRequest, "AppImageConfigName">]: (UpdateAppImageConfigRequest)[K]
    }>): Request<UpdateAppImageConfigResponse, AWSError> {
        this.boot();
        return this.client.updateAppImageConfig(
          this.ops["UpdateAppImageConfig"].apply(partialParams)
        );
    }
}