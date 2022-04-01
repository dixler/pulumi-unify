
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreatePipelineRequest,
    CreatePresetRequest,
    TestRoleRequest,
    CreatePipelineResponse,
    CreatePresetResponse,
    TestRoleResponse
} from "aws-sdk/clients/elastictranscoder";
const schema = require("../apis/elastictranscoder-2012-09-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elastictranscoder.Pipeline {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elastictranscoder.Pipeline>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ElasticTranscoder()
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

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof Omit<CreatePipelineRequest, "Name" | "InputBucket" | "Role">]: (CreatePipelineRequest)[K]
    }>): Request<CreatePipelineResponse, AWSError> {
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof Omit<CreatePresetRequest, "Name">]: (CreatePresetRequest)[K]
    }>): Request<CreatePresetResponse, AWSError> {
        this.boot();
        return this.client.createPreset(
          this.ops["CreatePreset"].apply(partialParams)
        );
    }

    invokeTestRole(partialParams: ToOptional<{
      [K in keyof TestRoleRequest & keyof Omit<TestRoleRequest, "Role" | "InputBucket" | "OutputBucket">]: (TestRoleRequest)[K]
    }>): Request<TestRoleResponse, AWSError> {
        this.boot();
        return this.client.testRole(
          this.ops["TestRole"].apply(partialParams)
        );
    }
}