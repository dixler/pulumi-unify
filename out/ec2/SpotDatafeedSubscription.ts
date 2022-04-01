
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateRestoreImageTaskRequest,
    CreateSpotDatafeedSubscriptionRequest,
    CreateStoreImageTaskRequest,
    CreateRestoreImageTaskResult,
    CreateSpotDatafeedSubscriptionResult,
    CreateStoreImageTaskResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.SpotDatafeedSubscription {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.SpotDatafeedSubscription>) {
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

    invokeCreateRestoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateRestoreImageTaskRequest & keyof Omit<CreateRestoreImageTaskRequest, "Bucket">]: (CreateRestoreImageTaskRequest)[K]
    }>): Request<CreateRestoreImageTaskResult, AWSError> {
        this.boot();
        return this.client.createRestoreImageTask(
          this.ops["CreateRestoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateSpotDatafeedSubscription(partialParams: ToOptional<{
      [K in keyof CreateSpotDatafeedSubscriptionRequest & keyof Omit<CreateSpotDatafeedSubscriptionRequest, "Bucket">]: (CreateSpotDatafeedSubscriptionRequest)[K]
    }>): Request<CreateSpotDatafeedSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createSpotDatafeedSubscription(
          this.ops["CreateSpotDatafeedSubscription"].apply(partialParams)
        );
    }

    invokeCreateStoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateStoreImageTaskRequest & keyof Omit<CreateStoreImageTaskRequest, "Bucket">]: (CreateStoreImageTaskRequest)[K]
    }>): Request<CreateStoreImageTaskResult, AWSError> {
        this.boot();
        return this.client.createStoreImageTask(
          this.ops["CreateStoreImageTask"].apply(partialParams)
        );
    }
}