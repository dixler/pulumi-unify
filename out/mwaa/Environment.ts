
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCliTokenRequest,
    CreateEnvironmentInput,
    CreateWebLoginTokenRequest,
    DeleteEnvironmentInput,
    GetEnvironmentInput,
    PublishMetricsInput,
    UpdateEnvironmentInput,
    CreateCliTokenResponse,
    CreateEnvironmentOutput,
    CreateWebLoginTokenResponse,
    DeleteEnvironmentOutput,
    GetEnvironmentOutput,
    PublishMetricsOutput,
    UpdateEnvironmentOutput
} from "aws-sdk/clients/mwaa";
const schema = require("../apis/mwaa-2020-07-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mwaa.Environment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.mwaa.Environment>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MWAA()
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

    invokeCreateCliToken(partialParams: ToOptional<{
      [K in keyof CreateCliTokenRequest & keyof Omit<CreateCliTokenRequest, "Name">]: (CreateCliTokenRequest)[K]
    }>): Request<CreateCliTokenResponse, AWSError> {
        this.boot();
        return this.client.createCliToken(
          this.ops["CreateCliToken"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentInput & keyof Omit<CreateEnvironmentInput, "DagS3Path" | "ExecutionRoleArn" | "Name" | "SourceBucketArn">]: (CreateEnvironmentInput)[K]
    }>): Request<CreateEnvironmentOutput, AWSError> {
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreateWebLoginToken(partialParams: ToOptional<{
      [K in keyof CreateWebLoginTokenRequest & keyof Omit<CreateWebLoginTokenRequest, "Name">]: (CreateWebLoginTokenRequest)[K]
    }>): Request<CreateWebLoginTokenResponse, AWSError> {
        this.boot();
        return this.client.createWebLoginToken(
          this.ops["CreateWebLoginToken"].apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentInput & keyof Omit<DeleteEnvironmentInput, "Name">]: (DeleteEnvironmentInput)[K]
    }>): Request<DeleteEnvironmentOutput, AWSError> {
        this.boot();
        return this.client.deleteEnvironment(
          this.ops["DeleteEnvironment"].apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentInput & keyof Omit<GetEnvironmentInput, "Name">]: (GetEnvironmentInput)[K]
    }>): Request<GetEnvironmentOutput, AWSError> {
        this.boot();
        return this.client.getEnvironment(
          this.ops["GetEnvironment"].apply(partialParams)
        );
    }

    invokePublishMetrics(partialParams: ToOptional<{
      [K in keyof PublishMetricsInput & keyof Omit<PublishMetricsInput, "EnvironmentName">]: (PublishMetricsInput)[K]
    }>): Request<PublishMetricsOutput, AWSError> {
        this.boot();
        return this.client.publishMetrics(
          this.ops["PublishMetrics"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentInput & keyof Omit<UpdateEnvironmentInput, "Name">]: (UpdateEnvironmentInput)[K]
    }>): Request<UpdateEnvironmentOutput, AWSError> {
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }
}