
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    ListChannelsRequest,
    ListHarvestJobsRequest,
    ListOriginEndpointsRequest,
    ListTagsForResourceRequest,
    RotateChannelCredentialsRequest,
    RotateIngestEndpointCredentialsRequest,
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
    ListChannelsResponse,
    ListHarvestJobsResponse,
    ListOriginEndpointsResponse,
    ListTagsForResourceResponse,
    RotateChannelCredentialsResponse,
    RotateIngestEndpointCredentialsResponse,
    UpdateChannelResponse,
    UpdateOriginEndpointResponse
} from "aws-sdk/clients/mediapackage";
const schema = require("../apis/mediapackage-2017-10-12.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediapackage.Channel {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.mediapackage.Channel>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MediaPackage()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeConfigureLogs(partialParams: ToOptional<{
      [K in keyof ConfigureLogsRequest]: (ConfigureLogsRequest)[K]
    }>): Request<ConfigureLogsResponse, AWSError> {
        this.boot();
        return this.client.configureLogs(
          this.ops["ConfigureLogs"].apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest]: (CreateChannelRequest)[K]
    }>): Request<CreateChannelResponse, AWSError> {
        this.boot();
        return this.client.createChannel(
          this.ops["CreateChannel"].apply(partialParams)
        );
    }

    invokeCreateHarvestJob(partialParams: ToOptional<{
      [K in keyof CreateHarvestJobRequest]: (CreateHarvestJobRequest)[K]
    }>): Request<CreateHarvestJobResponse, AWSError> {
        this.boot();
        return this.client.createHarvestJob(
          this.ops["CreateHarvestJob"].apply(partialParams)
        );
    }

    invokeCreateOriginEndpoint(partialParams: ToOptional<{
      [K in keyof CreateOriginEndpointRequest & keyof Omit<CreateOriginEndpointRequest, "ChannelId">]: (CreateOriginEndpointRequest)[K]
    }>): Request<CreateOriginEndpointResponse, AWSError> {
        this.boot();
        return this.client.createOriginEndpoint(
          this.ops["CreateOriginEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest]: (DeleteChannelRequest)[K]
    }>): Request<DeleteChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteChannel(
          this.ops["DeleteChannel"].apply(partialParams)
        );
    }

    invokeDeleteOriginEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteOriginEndpointRequest]: (DeleteOriginEndpointRequest)[K]
    }>): Request<DeleteOriginEndpointResponse, AWSError> {
        this.boot();
        return this.client.deleteOriginEndpoint(
          this.ops["DeleteOriginEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest]: (DescribeChannelRequest)[K]
    }>): Request<DescribeChannelResponse, AWSError> {
        this.boot();
        return this.client.describeChannel(
          this.ops["DescribeChannel"].apply(partialParams)
        );
    }

    invokeDescribeHarvestJob(partialParams: ToOptional<{
      [K in keyof DescribeHarvestJobRequest]: (DescribeHarvestJobRequest)[K]
    }>): Request<DescribeHarvestJobResponse, AWSError> {
        this.boot();
        return this.client.describeHarvestJob(
          this.ops["DescribeHarvestJob"].apply(partialParams)
        );
    }

    invokeDescribeOriginEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeOriginEndpointRequest]: (DescribeOriginEndpointRequest)[K]
    }>): Request<DescribeOriginEndpointResponse, AWSError> {
        this.boot();
        return this.client.describeOriginEndpoint(
          this.ops["DescribeOriginEndpoint"].apply(partialParams)
        );
    }

    invokeListChannels(partialParams: ToOptional<{
      [K in keyof ListChannelsRequest]: (ListChannelsRequest)[K]
    }>): Request<ListChannelsResponse, AWSError> {
        this.boot();
        return this.client.listChannels(
          this.ops["ListChannels"].apply(partialParams)
        );
    }

    invokeListHarvestJobs(partialParams: ToOptional<{
      [K in keyof ListHarvestJobsRequest]: (ListHarvestJobsRequest)[K]
    }>): Request<ListHarvestJobsResponse, AWSError> {
        this.boot();
        return this.client.listHarvestJobs(
          this.ops["ListHarvestJobs"].apply(partialParams)
        );
    }

    invokeListOriginEndpoints(partialParams: ToOptional<{
      [K in keyof ListOriginEndpointsRequest]: (ListOriginEndpointsRequest)[K]
    }>): Request<ListOriginEndpointsResponse, AWSError> {
        this.boot();
        return this.client.listOriginEndpoints(
          this.ops["ListOriginEndpoints"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRotateChannelCredentials(partialParams: ToOptional<{
      [K in keyof RotateChannelCredentialsRequest]: (RotateChannelCredentialsRequest)[K]
    }>): Request<RotateChannelCredentialsResponse, AWSError> {
        this.boot();
        return this.client.rotateChannelCredentials(
          this.ops["RotateChannelCredentials"].apply(partialParams)
        );
    }

    invokeRotateIngestEndpointCredentials(partialParams: ToOptional<{
      [K in keyof RotateIngestEndpointCredentialsRequest]: (RotateIngestEndpointCredentialsRequest)[K]
    }>): Request<RotateIngestEndpointCredentialsResponse, AWSError> {
        this.boot();
        return this.client.rotateIngestEndpointCredentials(
          this.ops["RotateIngestEndpointCredentials"].apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest]: (UpdateChannelRequest)[K]
    }>): Request<UpdateChannelResponse, AWSError> {
        this.boot();
        return this.client.updateChannel(
          this.ops["UpdateChannel"].apply(partialParams)
        );
    }

    invokeUpdateOriginEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateOriginEndpointRequest]: (UpdateOriginEndpointRequest)[K]
    }>): Request<UpdateOriginEndpointResponse, AWSError> {
        this.boot();
        return this.client.updateOriginEndpoint(
          this.ops["UpdateOriginEndpoint"].apply(partialParams)
        );
    }
}