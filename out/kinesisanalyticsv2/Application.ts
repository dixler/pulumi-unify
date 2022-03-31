
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddApplicationCloudWatchLoggingOptionRequest,
    AddApplicationInputRequest,
    AddApplicationInputProcessingConfigurationRequest,
    AddApplicationOutputRequest,
    AddApplicationReferenceDataSourceRequest,
    AddApplicationVpcConfigurationRequest,
    CreateApplicationRequest,
    CreateApplicationPresignedUrlRequest,
    CreateApplicationSnapshotRequest,
    DeleteApplicationRequest,
    DeleteApplicationCloudWatchLoggingOptionRequest,
    DeleteApplicationInputProcessingConfigurationRequest,
    DeleteApplicationOutputRequest,
    DeleteApplicationReferenceDataSourceRequest,
    DeleteApplicationSnapshotRequest,
    DeleteApplicationVpcConfigurationRequest,
    DescribeApplicationRequest,
    DescribeApplicationSnapshotRequest,
    DescribeApplicationVersionRequest,
    DiscoverInputSchemaRequest,
    ListApplicationSnapshotsRequest,
    ListApplicationVersionsRequest,
    ListTagsForResourceRequest,
    RollbackApplicationRequest,
    StartApplicationRequest,
    StopApplicationRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApplicationRequest,
    UpdateApplicationMaintenanceConfigurationRequest,
    AddApplicationCloudWatchLoggingOptionResponse,
    AddApplicationInputResponse,
    AddApplicationInputProcessingConfigurationResponse,
    AddApplicationOutputResponse,
    AddApplicationReferenceDataSourceResponse,
    AddApplicationVpcConfigurationResponse,
    CreateApplicationResponse,
    CreateApplicationPresignedUrlResponse,
    CreateApplicationSnapshotResponse,
    DeleteApplicationResponse,
    DeleteApplicationCloudWatchLoggingOptionResponse,
    DeleteApplicationInputProcessingConfigurationResponse,
    DeleteApplicationOutputResponse,
    DeleteApplicationReferenceDataSourceResponse,
    DeleteApplicationSnapshotResponse,
    DeleteApplicationVpcConfigurationResponse,
    DescribeApplicationResponse,
    DescribeApplicationSnapshotResponse,
    DescribeApplicationVersionResponse,
    DiscoverInputSchemaResponse,
    ListApplicationSnapshotsResponse,
    ListApplicationVersionsResponse,
    ListTagsForResourceResponse,
    RollbackApplicationResponse,
    StartApplicationResponse,
    StopApplicationResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateApplicationResponse,
    UpdateApplicationMaintenanceConfigurationResponse
} from "aws-sdk/clients/kinesisanalyticsv2";
const schema = require("../apis/kinesisanalyticsv2-2018-05-23.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kinesisanalyticsv2.Application {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.kinesisanalyticsv2.Application>) {
        super(...args)
        this.client = new awssdk.KinesisAnalyticsV2()
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

    invokeAddApplicationCloudWatchLoggingOption(partialParams: ToOptional<{
      [K in keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest]: (AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest)[K]
    }>): Request<AddApplicationCloudWatchLoggingOptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addApplicationCloudWatchLoggingOption(
          this.ops["AddApplicationCloudWatchLoggingOption"].applicator.apply(partialParams)
        );
    }

    invokeAddApplicationInput(partialParams: ToOptional<{
      [K in keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest]: (AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest)[K]
    }>): Request<AddApplicationInputResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addApplicationInput(
          this.ops["AddApplicationInput"].applicator.apply(partialParams)
        );
    }

    invokeAddApplicationInputProcessingConfiguration(partialParams: ToOptional<{
      [K in keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest]: (AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest)[K]
    }>): Request<AddApplicationInputProcessingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addApplicationInputProcessingConfiguration(
          this.ops["AddApplicationInputProcessingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeAddApplicationOutput(partialParams: ToOptional<{
      [K in keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest]: (AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest)[K]
    }>): Request<AddApplicationOutputResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addApplicationOutput(
          this.ops["AddApplicationOutput"].applicator.apply(partialParams)
        );
    }

    invokeAddApplicationReferenceDataSource(partialParams: ToOptional<{
      [K in keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest]: (AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest)[K]
    }>): Request<AddApplicationReferenceDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addApplicationReferenceDataSource(
          this.ops["AddApplicationReferenceDataSource"].applicator.apply(partialParams)
        );
    }

    invokeAddApplicationVpcConfiguration(partialParams: ToOptional<{
      [K in keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest]: (AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest)[K]
    }>): Request<AddApplicationVpcConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addApplicationVpcConfiguration(
          this.ops["AddApplicationVpcConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): Request<CreateApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplicationPresignedUrl(partialParams: ToOptional<{
      [K in keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest]: (CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest)[K]
    }>): Request<CreateApplicationPresignedUrlResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplicationPresignedUrl(
          this.ops["CreateApplicationPresignedUrl"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest]: (CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest)[K]
    }>): Request<CreateApplicationSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplicationSnapshot(
          this.ops["CreateApplicationSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): Request<DeleteApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationCloudWatchLoggingOption(partialParams: ToOptional<{
      [K in keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest]: (DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest)[K]
    }>): Request<DeleteApplicationCloudWatchLoggingOptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationCloudWatchLoggingOption(
          this.ops["DeleteApplicationCloudWatchLoggingOption"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationInputProcessingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest]: (DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest)[K]
    }>): Request<DeleteApplicationInputProcessingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationInputProcessingConfiguration(
          this.ops["DeleteApplicationInputProcessingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationOutput(partialParams: ToOptional<{
      [K in keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest]: (DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest)[K]
    }>): Request<DeleteApplicationOutputResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationOutput(
          this.ops["DeleteApplicationOutput"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationReferenceDataSource(partialParams: ToOptional<{
      [K in keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest]: (DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest)[K]
    }>): Request<DeleteApplicationReferenceDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationReferenceDataSource(
          this.ops["DeleteApplicationReferenceDataSource"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest]: (DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest)[K]
    }>): Request<DeleteApplicationSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationSnapshot(
          this.ops["DeleteApplicationSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationVpcConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest]: (DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest)[K]
    }>): Request<DeleteApplicationVpcConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationVpcConfiguration(
          this.ops["DeleteApplicationVpcConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeApplication(partialParams: ToOptional<{
      [K in keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest]: (DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest)[K]
    }>): Request<DescribeApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeApplication(
          this.ops["DescribeApplication"].applicator.apply(partialParams)
        );
    }

    invokeDescribeApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest]: (DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest)[K]
    }>): Request<DescribeApplicationSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeApplicationSnapshot(
          this.ops["DescribeApplicationSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDescribeApplicationVersion(partialParams: ToOptional<{
      [K in keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest]: (DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest)[K]
    }>): Request<DescribeApplicationVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeApplicationVersion(
          this.ops["DescribeApplicationVersion"].applicator.apply(partialParams)
        );
    }

    invokeDiscoverInputSchema(partialParams: ToOptional<{
      [K in keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest]: (DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest)[K]
    }>): Request<DiscoverInputSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.discoverInputSchema(
          this.ops["DiscoverInputSchema"].applicator.apply(partialParams)
        );
    }

    invokeListApplicationSnapshots(partialParams: ToOptional<{
      [K in keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest]: (ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest)[K]
    }>): Request<ListApplicationSnapshotsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApplicationSnapshots(
          this.ops["ListApplicationSnapshots"].applicator.apply(partialParams)
        );
    }

    invokeListApplicationVersions(partialParams: ToOptional<{
      [K in keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest]: (ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest)[K]
    }>): Request<ListApplicationVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApplicationVersions(
          this.ops["ListApplicationVersions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeRollbackApplication(partialParams: ToOptional<{
      [K in keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest]: (RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest)[K]
    }>): Request<RollbackApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rollbackApplication(
          this.ops["RollbackApplication"].applicator.apply(partialParams)
        );
    }

    invokeStartApplication(partialParams: ToOptional<{
      [K in keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest]: (StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest)[K]
    }>): Request<StartApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startApplication(
          this.ops["StartApplication"].applicator.apply(partialParams)
        );
    }

    invokeStopApplication(partialParams: ToOptional<{
      [K in keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest]: (StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest)[K]
    }>): Request<StopApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopApplication(
          this.ops["StopApplication"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): Request<UpdateApplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplicationMaintenanceConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest]: (UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest)[K]
    }>): Request<UpdateApplicationMaintenanceConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplicationMaintenanceConfiguration(
          this.ops["UpdateApplicationMaintenanceConfiguration"].applicator.apply(partialParams)
        );
    }
}