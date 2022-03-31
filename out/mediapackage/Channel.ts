
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
    constructor(...args: ConstructorParameters<typeof aws.mediapackage.Channel>) {
        super(...args)
        this.client = new awssdk.MediaPackage()
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

    invokeConfigureLogs(partialParams: ToOptional<{
      [K in keyof ConfigureLogsRequest & keyof ConfigureLogsRequest & keyof ConfigureLogsRequest]: (ConfigureLogsRequest & ConfigureLogsRequest & ConfigureLogsRequest)[K]
    }>): Request<ConfigureLogsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.configureLogs(
          this.ops["ConfigureLogs"].applicator.apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest & keyof CreateChannelRequest & keyof CreateChannelRequest]: (CreateChannelRequest & CreateChannelRequest & CreateChannelRequest)[K]
    }>): Request<CreateChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChannel(
          this.ops["CreateChannel"].applicator.apply(partialParams)
        );
    }

    invokeCreateHarvestJob(partialParams: ToOptional<{
      [K in keyof CreateHarvestJobRequest & keyof CreateHarvestJobRequest & keyof CreateHarvestJobRequest]: (CreateHarvestJobRequest & CreateHarvestJobRequest & CreateHarvestJobRequest)[K]
    }>): Request<CreateHarvestJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHarvestJob(
          this.ops["CreateHarvestJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateOriginEndpoint(partialParams: ToOptional<{
      [K in keyof CreateOriginEndpointRequest & keyof CreateOriginEndpointRequest & keyof CreateOriginEndpointRequest]: (CreateOriginEndpointRequest & CreateOriginEndpointRequest & CreateOriginEndpointRequest)[K]
    }>): Request<CreateOriginEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOriginEndpoint(
          this.ops["CreateOriginEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteChannel(partialParams: ToOptional<{
      [K in keyof DeleteChannelRequest & keyof DeleteChannelRequest & keyof DeleteChannelRequest]: (DeleteChannelRequest & DeleteChannelRequest & DeleteChannelRequest)[K]
    }>): Request<DeleteChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChannel(
          this.ops["DeleteChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOriginEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteOriginEndpointRequest & keyof DeleteOriginEndpointRequest & keyof DeleteOriginEndpointRequest]: (DeleteOriginEndpointRequest & DeleteOriginEndpointRequest & DeleteOriginEndpointRequest)[K]
    }>): Request<DeleteOriginEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOriginEndpoint(
          this.ops["DeleteOriginEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDescribeChannel(partialParams: ToOptional<{
      [K in keyof DescribeChannelRequest & keyof DescribeChannelRequest & keyof DescribeChannelRequest]: (DescribeChannelRequest & DescribeChannelRequest & DescribeChannelRequest)[K]
    }>): Request<DescribeChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChannel(
          this.ops["DescribeChannel"].applicator.apply(partialParams)
        );
    }

    invokeDescribeHarvestJob(partialParams: ToOptional<{
      [K in keyof DescribeHarvestJobRequest & keyof DescribeHarvestJobRequest & keyof DescribeHarvestJobRequest]: (DescribeHarvestJobRequest & DescribeHarvestJobRequest & DescribeHarvestJobRequest)[K]
    }>): Request<DescribeHarvestJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHarvestJob(
          this.ops["DescribeHarvestJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeOriginEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeOriginEndpointRequest & keyof DescribeOriginEndpointRequest & keyof DescribeOriginEndpointRequest]: (DescribeOriginEndpointRequest & DescribeOriginEndpointRequest & DescribeOriginEndpointRequest)[K]
    }>): Request<DescribeOriginEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOriginEndpoint(
          this.ops["DescribeOriginEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeRotateChannelCredentials(partialParams: ToOptional<{
      [K in keyof RotateChannelCredentialsRequest & keyof RotateChannelCredentialsRequest & keyof RotateChannelCredentialsRequest]: (RotateChannelCredentialsRequest & RotateChannelCredentialsRequest & RotateChannelCredentialsRequest)[K]
    }>): Request<RotateChannelCredentialsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rotateChannelCredentials(
          this.ops["RotateChannelCredentials"].applicator.apply(partialParams)
        );
    }

    invokeRotateIngestEndpointCredentials(partialParams: ToOptional<{
      [K in keyof RotateIngestEndpointCredentialsRequest & keyof RotateIngestEndpointCredentialsRequest & keyof RotateIngestEndpointCredentialsRequest]: (RotateIngestEndpointCredentialsRequest & RotateIngestEndpointCredentialsRequest & RotateIngestEndpointCredentialsRequest)[K]
    }>): Request<RotateIngestEndpointCredentialsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rotateIngestEndpointCredentials(
          this.ops["RotateIngestEndpointCredentials"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest & keyof UpdateChannelRequest & keyof UpdateChannelRequest]: (UpdateChannelRequest & UpdateChannelRequest & UpdateChannelRequest)[K]
    }>): Request<UpdateChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChannel(
          this.ops["UpdateChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOriginEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateOriginEndpointRequest & keyof UpdateOriginEndpointRequest & keyof UpdateOriginEndpointRequest]: (UpdateOriginEndpointRequest & UpdateOriginEndpointRequest & UpdateOriginEndpointRequest)[K]
    }>): Request<UpdateOriginEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOriginEndpoint(
          this.ops["UpdateOriginEndpoint"].applicator.apply(partialParams)
        );
    }
}