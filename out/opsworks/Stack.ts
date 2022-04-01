
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CloneStackRequest,
    CreateAppRequest,
    CreateLayerRequest,
    CreateStackRequest,
    CloneStackResult,
    CreateAppResult,
    CreateLayerResult,
    CreateStackResult
} from "aws-sdk/clients/opsworks";
const schema = require("../apis/opsworks-2013-02-18.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.opsworks.Stack {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.opsworks.Stack>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.OpsWorks()
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

    invokeCloneStack(partialParams: ToOptional<{
      [K in keyof CloneStackRequest & keyof Omit<CloneStackRequest, "ServiceRoleArn">]: (CloneStackRequest)[K]
    }>): Request<CloneStackResult, AWSError> {
        this.boot();
        return this.client.cloneStack(
          this.ops["CloneStack"].apply(partialParams)
        );
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof Omit<CreateAppRequest, "Name">]: (CreateAppRequest)[K]
    }>): Request<CreateAppResult, AWSError> {
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateLayer(partialParams: ToOptional<{
      [K in keyof CreateLayerRequest & keyof Omit<CreateLayerRequest, "Name">]: (CreateLayerRequest)[K]
    }>): Request<CreateLayerResult, AWSError> {
        this.boot();
        return this.client.createLayer(
          this.ops["CreateLayer"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof Omit<CreateStackRequest, "Name" | "Region" | "ServiceRoleArn" | "DefaultInstanceProfileArn">]: (CreateStackRequest)[K]
    }>): Request<CreateStackResult, AWSError> {
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].apply(partialParams)
        );
    }
}