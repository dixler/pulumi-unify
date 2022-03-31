
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
    ListTagsForResourceInput,
    PublishMetricsInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateEnvironmentInput,
    CreateCliTokenResponse,
    CreateEnvironmentOutput,
    CreateWebLoginTokenResponse,
    DeleteEnvironmentOutput,
    GetEnvironmentOutput,
    ListTagsForResourceOutput,
    PublishMetricsOutput,
    TagResourceOutput,
    UntagResourceOutput,
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
    constructor(...args: ConstructorParameters<typeof aws.mwaa.Environment>) {
        super(...args)
        this.client = new awssdk.MWAA()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCreateCliToken(partialParams: ToOptional<{
      [K in keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest]: (CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest)[K]
    }>): Request<CreateCliTokenResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCliToken(
          this.ops["CreateCliToken"].applicator.apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput]: (CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput)[K]
    }>): Request<CreateEnvironmentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebLoginToken(partialParams: ToOptional<{
      [K in keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest]: (CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest)[K]
    }>): Request<CreateWebLoginTokenResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebLoginToken(
          this.ops["CreateWebLoginToken"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput]: (DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput)[K]
    }>): Request<DeleteEnvironmentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEnvironment(
          this.ops["DeleteEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof Omit<GetEnvironmentInput, "Name"> & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput]: (GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & Omit<GetEnvironmentInput, "Name"> & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput)[K]
    }>): Request<GetEnvironmentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEnvironment(
          this.ops["GetEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePublishMetrics(partialParams: ToOptional<{
      [K in keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput]: (PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput)[K]
    }>): Request<PublishMetricsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishMetrics(
          this.ops["PublishMetrics"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof Omit<UpdateEnvironmentInput, "Name"> & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput]: (UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & Omit<UpdateEnvironmentInput, "Name"> & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput)[K]
    }>): Request<UpdateEnvironmentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].applicator.apply(partialParams)
        );
    }
}