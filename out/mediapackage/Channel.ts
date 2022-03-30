
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ConfigureLogsRequest,
    CreateChannelRequest,
    CreateHarvestJobRequest,
    CreateOriginEndpointRequest,
    DeleteChannelRequest,
    DeleteOriginEndpointRequest,
    DescribeChannelRequest,
    DescribeHarvestJobRequest,
    DescribeOriginEndpointRequest,
    ListTagsForResourceRequest,
    RotateChannelCredentialsRequest,
    RotateIngestEndpointCredentialsRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateChannelRequest,
    UpdateOriginEndpointRequest,
    ConfigureLogsResponse,
    CreateChannelResponse,
    CreateHarvestJobResponse,
    CreateOriginEndpointResponse,
    DeleteChannelResponse,
    DeleteOriginEndpointResponse,
    DescribeChannelResponse,
    DescribeHarvestJobResponse,
    DescribeOriginEndpointResponse,
    ListTagsForResourceResponse,
    RotateChannelCredentialsResponse,
    RotateIngestEndpointCredentialsResponse,
    UpdateChannelResponse,
    UpdateOriginEndpointResponse
} from "aws-sdk/clients/mediapackage";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediapackage.Channel {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.mediapackage.Channel>) {
        super(...args)
        this.client = new awssdk.MediaPackage()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/mediapackage-2017-10-12.normal.json"), this.client)
    }

    invokeConfigureLogs(partialParams: ToOptional<{
      [K in keyof ConfigureLogsRequest & keyof ConfigureLogsRequest & keyof ConfigureLogsRequest]: (ConfigureLogsRequest & ConfigureLogsRequest & ConfigureLogsRequest)[K]
    }>): ConfigureLogsResponse {
        return this.client.configureLogs(
            this.ops["ConfigureLogs"].apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest & keyof CreateChannelRequest & keyof CreateChannelRequest]: (CreateChannelRequest & CreateChannelRequest & CreateChannelRequest)[K]
    }>): CreateChannelResponse {
        return this.client.createChannel(
            this.ops["CreateChannel"].apply(partialParams)
        );
    }

    invokeCreateHarvestJob(partialParams: ToOptional<{
      [K in keyof CreateHarvestJobRequest & keyof CreateHarvestJobRequest & keyof CreateHarvestJobRequest]: (CreateHarvestJobRequest & CreateHarvestJobRequest & CreateHarvestJobRequest)[K]
    }>): CreateHarvestJobResponse {
        return this.client.createHarvestJob(
            this.ops["CreateHarvestJob"].apply(partialParams)
        );
    }

    invokeCreateOriginEndpoint(partialParams: ToOptional<{
      [K in keyof CreateOriginEndpointRequest & keyof CreateOriginEndpointRequest & keyof CreateOriginEndpointRequest]: (CreateOriginEndpointRequest & CreateOriginEndpointRequest & CreateOriginEndpointRequest)[K]
    }>): CreateOriginEndpointResponse {
        return this.client.createOriginEndpoint(
            this.ops["CreateOriginEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest & keyof DeleteChannelRequest & keyof DeleteChannelRequest]: (DeleteChannelRequest & DeleteChannelRequest & DeleteChannelRequest)[K]
    }>): DeleteChannelResponse {
        return this.client.deleteChannel(
            this.ops["DeleteChannel"].apply(partialParams)
        );
    }

    invokeDeleteOriginEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteOriginEndpointRequest & keyof DeleteOriginEndpointRequest & keyof DeleteOriginEndpointRequest]: (DeleteOriginEndpointRequest & DeleteOriginEndpointRequest & DeleteOriginEndpointRequest)[K]
    }>): DeleteOriginEndpointResponse {
        return this.client.deleteOriginEndpoint(
            this.ops["DeleteOriginEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest & keyof DescribeChannelRequest & keyof DescribeChannelRequest]: (DescribeChannelRequest & DescribeChannelRequest & DescribeChannelRequest)[K]
    }>): DescribeChannelResponse {
        return this.client.describeChannel(
            this.ops["DescribeChannel"].apply(partialParams)
        );
    }

    invokeDescribeHarvestJob(partialParams: ToOptional<{
      [K in keyof DescribeHarvestJobRequest & keyof DescribeHarvestJobRequest & keyof DescribeHarvestJobRequest]: (DescribeHarvestJobRequest & DescribeHarvestJobRequest & DescribeHarvestJobRequest)[K]
    }>): DescribeHarvestJobResponse {
        return this.client.describeHarvestJob(
            this.ops["DescribeHarvestJob"].apply(partialParams)
        );
    }

    invokeDescribeOriginEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeOriginEndpointRequest & keyof DescribeOriginEndpointRequest & keyof DescribeOriginEndpointRequest]: (DescribeOriginEndpointRequest & DescribeOriginEndpointRequest & DescribeOriginEndpointRequest)[K]
    }>): DescribeOriginEndpointResponse {
        return this.client.describeOriginEndpoint(
            this.ops["DescribeOriginEndpoint"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRotateChannelCredentials(partialParams: ToOptional<{
      [K in keyof RotateChannelCredentialsRequest & keyof RotateChannelCredentialsRequest & keyof RotateChannelCredentialsRequest]: (RotateChannelCredentialsRequest & RotateChannelCredentialsRequest & RotateChannelCredentialsRequest)[K]
    }>): RotateChannelCredentialsResponse {
        return this.client.rotateChannelCredentials(
            this.ops["RotateChannelCredentials"].apply(partialParams)
        );
    }

    invokeRotateIngestEndpointCredentials(partialParams: ToOptional<{
      [K in keyof RotateIngestEndpointCredentialsRequest & keyof RotateIngestEndpointCredentialsRequest & keyof RotateIngestEndpointCredentialsRequest]: (RotateIngestEndpointCredentialsRequest & RotateIngestEndpointCredentialsRequest & RotateIngestEndpointCredentialsRequest)[K]
    }>): RotateIngestEndpointCredentialsResponse {
        return this.client.rotateIngestEndpointCredentials(
            this.ops["RotateIngestEndpointCredentials"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest & keyof UpdateChannelRequest & keyof UpdateChannelRequest]: (UpdateChannelRequest & UpdateChannelRequest & UpdateChannelRequest)[K]
    }>): UpdateChannelResponse {
        return this.client.updateChannel(
            this.ops["UpdateChannel"].apply(partialParams)
        );
    }

    invokeUpdateOriginEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateOriginEndpointRequest & keyof UpdateOriginEndpointRequest & keyof UpdateOriginEndpointRequest]: (UpdateOriginEndpointRequest & UpdateOriginEndpointRequest & UpdateOriginEndpointRequest)[K]
    }>): UpdateOriginEndpointResponse {
        return this.client.updateOriginEndpoint(
            this.ops["UpdateOriginEndpoint"].apply(partialParams)
        );
    }
}