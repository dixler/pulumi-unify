
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
    ListApplicationsRequest,
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
    ListApplicationsResponse,
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

export default class extends aws.kinesisanalyticsv2.ApplicationSnapshot {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.kinesisanalyticsv2.ApplicationSnapshot>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.KinesisAnalyticsV2()
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

    invokeAddApplicationCloudWatchLoggingOption(partialParams: ToOptional<{
      [K in keyof AddApplicationCloudWatchLoggingOptionRequest & keyof Omit<AddApplicationCloudWatchLoggingOptionRequest, "ApplicationName">]: (AddApplicationCloudWatchLoggingOptionRequest)[K]
    }>): Request<AddApplicationCloudWatchLoggingOptionResponse, AWSError> {
        this.boot();
        return this.client.addApplicationCloudWatchLoggingOption(
          this.ops["AddApplicationCloudWatchLoggingOption"].apply(partialParams)
        );
    }

    invokeAddApplicationInput(partialParams: ToOptional<{
      [K in keyof AddApplicationInputRequest & keyof Omit<AddApplicationInputRequest, "ApplicationName">]: (AddApplicationInputRequest)[K]
    }>): Request<AddApplicationInputResponse, AWSError> {
        this.boot();
        return this.client.addApplicationInput(
          this.ops["AddApplicationInput"].apply(partialParams)
        );
    }

    invokeAddApplicationInputProcessingConfiguration(partialParams: ToOptional<{
      [K in keyof AddApplicationInputProcessingConfigurationRequest & keyof Omit<AddApplicationInputProcessingConfigurationRequest, "ApplicationName">]: (AddApplicationInputProcessingConfigurationRequest)[K]
    }>): Request<AddApplicationInputProcessingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.addApplicationInputProcessingConfiguration(
          this.ops["AddApplicationInputProcessingConfiguration"].apply(partialParams)
        );
    }

    invokeAddApplicationOutput(partialParams: ToOptional<{
      [K in keyof AddApplicationOutputRequest & keyof Omit<AddApplicationOutputRequest, "ApplicationName">]: (AddApplicationOutputRequest)[K]
    }>): Request<AddApplicationOutputResponse, AWSError> {
        this.boot();
        return this.client.addApplicationOutput(
          this.ops["AddApplicationOutput"].apply(partialParams)
        );
    }

    invokeAddApplicationReferenceDataSource(partialParams: ToOptional<{
      [K in keyof AddApplicationReferenceDataSourceRequest & keyof Omit<AddApplicationReferenceDataSourceRequest, "ApplicationName">]: (AddApplicationReferenceDataSourceRequest)[K]
    }>): Request<AddApplicationReferenceDataSourceResponse, AWSError> {
        this.boot();
        return this.client.addApplicationReferenceDataSource(
          this.ops["AddApplicationReferenceDataSource"].apply(partialParams)
        );
    }

    invokeAddApplicationVpcConfiguration(partialParams: ToOptional<{
      [K in keyof AddApplicationVpcConfigurationRequest & keyof Omit<AddApplicationVpcConfigurationRequest, "ApplicationName">]: (AddApplicationVpcConfigurationRequest)[K]
    }>): Request<AddApplicationVpcConfigurationResponse, AWSError> {
        this.boot();
        return this.client.addApplicationVpcConfiguration(
          this.ops["AddApplicationVpcConfiguration"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof Omit<CreateApplicationRequest, "ApplicationName">]: (CreateApplicationRequest)[K]
    }>): Request<CreateApplicationResponse, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateApplicationPresignedUrl(partialParams: ToOptional<{
      [K in keyof CreateApplicationPresignedUrlRequest & keyof Omit<CreateApplicationPresignedUrlRequest, "ApplicationName">]: (CreateApplicationPresignedUrlRequest)[K]
    }>): Request<CreateApplicationPresignedUrlResponse, AWSError> {
        this.boot();
        return this.client.createApplicationPresignedUrl(
          this.ops["CreateApplicationPresignedUrl"].apply(partialParams)
        );
    }

    invokeCreateApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof CreateApplicationSnapshotRequest & keyof Omit<CreateApplicationSnapshotRequest, "ApplicationName" | "SnapshotName">]: (CreateApplicationSnapshotRequest)[K]
    }>): Request<CreateApplicationSnapshotResponse, AWSError> {
        this.boot();
        return this.client.createApplicationSnapshot(
          this.ops["CreateApplicationSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof Omit<DeleteApplicationRequest, "ApplicationName">]: (DeleteApplicationRequest)[K]
    }>): Request<DeleteApplicationResponse, AWSError> {
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteApplicationCloudWatchLoggingOption(partialParams: ToOptional<{
      [K in keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof Omit<DeleteApplicationCloudWatchLoggingOptionRequest, "ApplicationName">]: (DeleteApplicationCloudWatchLoggingOptionRequest)[K]
    }>): Request<DeleteApplicationCloudWatchLoggingOptionResponse, AWSError> {
        this.boot();
        return this.client.deleteApplicationCloudWatchLoggingOption(
          this.ops["DeleteApplicationCloudWatchLoggingOption"].apply(partialParams)
        );
    }

    invokeDeleteApplicationInputProcessingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteApplicationInputProcessingConfigurationRequest & keyof Omit<DeleteApplicationInputProcessingConfigurationRequest, "ApplicationName">]: (DeleteApplicationInputProcessingConfigurationRequest)[K]
    }>): Request<DeleteApplicationInputProcessingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteApplicationInputProcessingConfiguration(
          this.ops["DeleteApplicationInputProcessingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteApplicationOutput(partialParams: ToOptional<{
      [K in keyof DeleteApplicationOutputRequest & keyof Omit<DeleteApplicationOutputRequest, "ApplicationName">]: (DeleteApplicationOutputRequest)[K]
    }>): Request<DeleteApplicationOutputResponse, AWSError> {
        this.boot();
        return this.client.deleteApplicationOutput(
          this.ops["DeleteApplicationOutput"].apply(partialParams)
        );
    }

    invokeDeleteApplicationReferenceDataSource(partialParams: ToOptional<{
      [K in keyof DeleteApplicationReferenceDataSourceRequest & keyof Omit<DeleteApplicationReferenceDataSourceRequest, "ApplicationName">]: (DeleteApplicationReferenceDataSourceRequest)[K]
    }>): Request<DeleteApplicationReferenceDataSourceResponse, AWSError> {
        this.boot();
        return this.client.deleteApplicationReferenceDataSource(
          this.ops["DeleteApplicationReferenceDataSource"].apply(partialParams)
        );
    }

    invokeDeleteApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteApplicationSnapshotRequest & keyof Omit<DeleteApplicationSnapshotRequest, "ApplicationName" | "SnapshotName" | "SnapshotCreationTimestamp">]: (DeleteApplicationSnapshotRequest)[K]
    }>): Request<DeleteApplicationSnapshotResponse, AWSError> {
        this.boot();
        return this.client.deleteApplicationSnapshot(
          this.ops["DeleteApplicationSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteApplicationVpcConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteApplicationVpcConfigurationRequest & keyof Omit<DeleteApplicationVpcConfigurationRequest, "ApplicationName">]: (DeleteApplicationVpcConfigurationRequest)[K]
    }>): Request<DeleteApplicationVpcConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteApplicationVpcConfiguration(
          this.ops["DeleteApplicationVpcConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeApplication(partialParams: ToOptional<{
      [K in keyof DescribeApplicationRequest & keyof Omit<DescribeApplicationRequest, "ApplicationName">]: (DescribeApplicationRequest)[K]
    }>): Request<DescribeApplicationResponse, AWSError> {
        this.boot();
        return this.client.describeApplication(
          this.ops["DescribeApplication"].apply(partialParams)
        );
    }

    invokeDescribeApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof DescribeApplicationSnapshotRequest & keyof Omit<DescribeApplicationSnapshotRequest, "ApplicationName" | "SnapshotName">]: (DescribeApplicationSnapshotRequest)[K]
    }>): Request<DescribeApplicationSnapshotResponse, AWSError> {
        this.boot();
        return this.client.describeApplicationSnapshot(
          this.ops["DescribeApplicationSnapshot"].apply(partialParams)
        );
    }

    invokeDescribeApplicationVersion(partialParams: ToOptional<{
      [K in keyof DescribeApplicationVersionRequest & keyof Omit<DescribeApplicationVersionRequest, "ApplicationName">]: (DescribeApplicationVersionRequest)[K]
    }>): Request<DescribeApplicationVersionResponse, AWSError> {
        this.boot();
        return this.client.describeApplicationVersion(
          this.ops["DescribeApplicationVersion"].apply(partialParams)
        );
    }

    invokeDiscoverInputSchema(partialParams: ToOptional<{
      [K in keyof DiscoverInputSchemaRequest]: (DiscoverInputSchemaRequest)[K]
    }>): Request<DiscoverInputSchemaResponse, AWSError> {
        this.boot();
        return this.client.discoverInputSchema(
          this.ops["DiscoverInputSchema"].apply(partialParams)
        );
    }

    invokeListApplicationSnapshots(partialParams: ToOptional<{
      [K in keyof ListApplicationSnapshotsRequest & keyof Omit<ListApplicationSnapshotsRequest, "ApplicationName">]: (ListApplicationSnapshotsRequest)[K]
    }>): Request<ListApplicationSnapshotsResponse, AWSError> {
        this.boot();
        return this.client.listApplicationSnapshots(
          this.ops["ListApplicationSnapshots"].apply(partialParams)
        );
    }

    invokeListApplicationVersions(partialParams: ToOptional<{
      [K in keyof ListApplicationVersionsRequest & keyof Omit<ListApplicationVersionsRequest, "ApplicationName">]: (ListApplicationVersionsRequest)[K]
    }>): Request<ListApplicationVersionsResponse, AWSError> {
        this.boot();
        return this.client.listApplicationVersions(
          this.ops["ListApplicationVersions"].apply(partialParams)
        );
    }

    invokeListApplications(partialParams: ToOptional<{
      [K in keyof ListApplicationsRequest]: (ListApplicationsRequest)[K]
    }>): Request<ListApplicationsResponse, AWSError> {
        this.boot();
        return this.client.listApplications(
          this.ops["ListApplications"].apply(partialParams)
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

    invokeRollbackApplication(partialParams: ToOptional<{
      [K in keyof RollbackApplicationRequest & keyof Omit<RollbackApplicationRequest, "ApplicationName">]: (RollbackApplicationRequest)[K]
    }>): Request<RollbackApplicationResponse, AWSError> {
        this.boot();
        return this.client.rollbackApplication(
          this.ops["RollbackApplication"].apply(partialParams)
        );
    }

    invokeStartApplication(partialParams: ToOptional<{
      [K in keyof StartApplicationRequest & keyof Omit<StartApplicationRequest, "ApplicationName">]: (StartApplicationRequest)[K]
    }>): Request<StartApplicationResponse, AWSError> {
        this.boot();
        return this.client.startApplication(
          this.ops["StartApplication"].apply(partialParams)
        );
    }

    invokeStopApplication(partialParams: ToOptional<{
      [K in keyof StopApplicationRequest & keyof Omit<StopApplicationRequest, "ApplicationName">]: (StopApplicationRequest)[K]
    }>): Request<StopApplicationResponse, AWSError> {
        this.boot();
        return this.client.stopApplication(
          this.ops["StopApplication"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof Omit<UpdateApplicationRequest, "ApplicationName">]: (UpdateApplicationRequest)[K]
    }>): Request<UpdateApplicationResponse, AWSError> {
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateApplicationMaintenanceConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMaintenanceConfigurationRequest & keyof Omit<UpdateApplicationMaintenanceConfigurationRequest, "ApplicationName">]: (UpdateApplicationMaintenanceConfigurationRequest)[K]
    }>): Request<UpdateApplicationMaintenanceConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateApplicationMaintenanceConfiguration(
          this.ops["UpdateApplicationMaintenanceConfiguration"].apply(partialParams)
        );
    }
}