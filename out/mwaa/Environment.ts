
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mwaa.Environment {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.mwaa.Environment>) {
        super(...args)
        this.client = new awssdk.MWAA()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/mwaa-2020-07-01.normal.json"), this.client)
    }

    invokeCreateCliToken(partialParams: ToOptional<{
      [K in keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest & keyof CreateCliTokenRequest]: (CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest & CreateCliTokenRequest)[K]
    }>): CreateCliTokenResponse {
        return this.client.createCliToken(
            this.ops["CreateCliToken"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput & keyof CreateEnvironmentInput]: (CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput & CreateEnvironmentInput)[K]
    }>): CreateEnvironmentOutput {
        return this.client.createEnvironment(
            this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreateWebLoginToken(partialParams: ToOptional<{
      [K in keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest & keyof CreateWebLoginTokenRequest]: (CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest & CreateWebLoginTokenRequest)[K]
    }>): CreateWebLoginTokenResponse {
        return this.client.createWebLoginToken(
            this.ops["CreateWebLoginToken"].apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput & keyof DeleteEnvironmentInput]: (DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput & DeleteEnvironmentInput)[K]
    }>): DeleteEnvironmentOutput {
        return this.client.deleteEnvironment(
            this.ops["DeleteEnvironment"].apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof Omit<GetEnvironmentInput, "Name"> & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput & keyof GetEnvironmentInput]: (GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & Omit<GetEnvironmentInput, "Name"> & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput & GetEnvironmentInput)[K]
    }>): GetEnvironmentOutput {
        return this.client.getEnvironment(
            this.ops["GetEnvironment"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePublishMetrics(partialParams: ToOptional<{
      [K in keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput & keyof PublishMetricsInput]: (PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput & PublishMetricsInput)[K]
    }>): PublishMetricsOutput {
        return this.client.publishMetrics(
            this.ops["PublishMetrics"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof Omit<UpdateEnvironmentInput, "Name"> & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput & keyof UpdateEnvironmentInput]: (UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & Omit<UpdateEnvironmentInput, "Name"> & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput & UpdateEnvironmentInput)[K]
    }>): UpdateEnvironmentOutput {
        return this.client.updateEnvironment(
            this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }
}