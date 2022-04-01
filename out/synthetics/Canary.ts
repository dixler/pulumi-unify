
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCanaryRequest,
    DeleteCanaryRequest,
    GetCanaryRequest,
    GetCanaryRunsRequest,
    StartCanaryRequest,
    StopCanaryRequest,
    UpdateCanaryRequest,
    CreateCanaryResponse,
    DeleteCanaryResponse,
    GetCanaryResponse,
    GetCanaryRunsResponse,
    StartCanaryResponse,
    StopCanaryResponse,
    UpdateCanaryResponse
} from "aws-sdk/clients/synthetics";
const schema = require("../apis/synthetics-2017-10-11.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.synthetics.Canary {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.synthetics.Canary>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Synthetics()
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

    invokeCreateCanary(partialParams: ToOptional<{
      [K in keyof CreateCanaryRequest & keyof Omit<CreateCanaryRequest, "Name" | "ArtifactS3Location" | "ExecutionRoleArn" | "RuntimeVersion">]: (CreateCanaryRequest)[K]
    }>): Request<CreateCanaryResponse, AWSError> {
        this.boot();
        return this.client.createCanary(
          this.ops["CreateCanary"].apply(partialParams)
        );
    }

    invokeDeleteCanary(partialParams: ToOptional<{
      [K in keyof DeleteCanaryRequest & keyof Omit<DeleteCanaryRequest, "Name">]: (DeleteCanaryRequest)[K]
    }>): Request<DeleteCanaryResponse, AWSError> {
        this.boot();
        return this.client.deleteCanary(
          this.ops["DeleteCanary"].apply(partialParams)
        );
    }

    invokeGetCanary(partialParams: ToOptional<{
      [K in keyof GetCanaryRequest & keyof Omit<GetCanaryRequest, "Name">]: (GetCanaryRequest)[K]
    }>): Request<GetCanaryResponse, AWSError> {
        this.boot();
        return this.client.getCanary(
          this.ops["GetCanary"].apply(partialParams)
        );
    }

    invokeGetCanaryRuns(partialParams: ToOptional<{
      [K in keyof GetCanaryRunsRequest & keyof Omit<GetCanaryRunsRequest, "Name">]: (GetCanaryRunsRequest)[K]
    }>): Request<GetCanaryRunsResponse, AWSError> {
        this.boot();
        return this.client.getCanaryRuns(
          this.ops["GetCanaryRuns"].apply(partialParams)
        );
    }

    invokeStartCanary(partialParams: ToOptional<{
      [K in keyof StartCanaryRequest & keyof Omit<StartCanaryRequest, "Name">]: (StartCanaryRequest)[K]
    }>): Request<StartCanaryResponse, AWSError> {
        this.boot();
        return this.client.startCanary(
          this.ops["StartCanary"].apply(partialParams)
        );
    }

    invokeStopCanary(partialParams: ToOptional<{
      [K in keyof StopCanaryRequest & keyof Omit<StopCanaryRequest, "Name">]: (StopCanaryRequest)[K]
    }>): Request<StopCanaryResponse, AWSError> {
        this.boot();
        return this.client.stopCanary(
          this.ops["StopCanary"].apply(partialParams)
        );
    }

    invokeUpdateCanary(partialParams: ToOptional<{
      [K in keyof UpdateCanaryRequest & keyof Omit<UpdateCanaryRequest, "Name">]: (UpdateCanaryRequest)[K]
    }>): Request<UpdateCanaryResponse, AWSError> {
        this.boot();
        return this.client.updateCanary(
          this.ops["UpdateCanary"].apply(partialParams)
        );
    }
}