
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateFunctionRequest,
    CreateRealtimeLogConfigRequest,
    DescribeFunctionRequest,
    GetFunctionRequest,
    PublishFunctionRequest,
    TestFunctionRequest,
    UpdateFunctionRequest,
    CreateFunctionResult,
    CreateRealtimeLogConfigResult,
    DescribeFunctionResult,
    GetFunctionResult,
    PublishFunctionResult,
    TestFunctionResult,
    UpdateFunctionResult
} from "aws-sdk/clients/cloudfront";
const schema = require("../apis/cloudfront-2020-05-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudfront.RealtimeLogConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudfront.RealtimeLogConfig>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudFront()
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

    invokeCreateFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof Omit<CreateFunctionRequest, "Name">]: (CreateFunctionRequest)[K]
    }>): Request<CreateFunctionResult, AWSError> {
        this.boot();
        return this.client.createFunction2020_05_31(
          this.ops["CreateFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateRealtimeLogConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateRealtimeLogConfigRequest & keyof Omit<CreateRealtimeLogConfigRequest, "Name">]: (CreateRealtimeLogConfigRequest)[K]
    }>): Request<CreateRealtimeLogConfigResult, AWSError> {
        this.boot();
        return this.client.createRealtimeLogConfig2020_05_31(
          this.ops["CreateRealtimeLogConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeDescribeFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof DescribeFunctionRequest & keyof Omit<DescribeFunctionRequest, "Name">]: (DescribeFunctionRequest)[K]
    }>): Request<DescribeFunctionResult, AWSError> {
        this.boot();
        return this.client.describeFunction2020_05_31(
          this.ops["DescribeFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeGetFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof Omit<GetFunctionRequest, "Name">]: (GetFunctionRequest)[K]
    }>): Request<GetFunctionResult, AWSError> {
        this.boot();
        return this.client.getFunction2020_05_31(
          this.ops["GetFunction2020_05_31"].apply(partialParams)
        );
    }

    invokePublishFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof PublishFunctionRequest & keyof Omit<PublishFunctionRequest, "Name">]: (PublishFunctionRequest)[K]
    }>): Request<PublishFunctionResult, AWSError> {
        this.boot();
        return this.client.publishFunction2020_05_31(
          this.ops["PublishFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeTestFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof TestFunctionRequest & keyof Omit<TestFunctionRequest, "Name">]: (TestFunctionRequest)[K]
    }>): Request<TestFunctionResult, AWSError> {
        this.boot();
        return this.client.testFunction2020_05_31(
          this.ops["TestFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateFunctionRequest & keyof Omit<UpdateFunctionRequest, "Name">]: (UpdateFunctionRequest)[K]
    }>): Request<UpdateFunctionResult, AWSError> {
        this.boot();
        return this.client.updateFunction2020_05_31(
          this.ops["UpdateFunction2020_05_31"].apply(partialParams)
        );
    }
}