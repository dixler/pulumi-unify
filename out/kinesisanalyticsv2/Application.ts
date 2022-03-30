
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kinesisanalyticsv2.Application {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.kinesisanalyticsv2.Application>) {
        super(...args)
        this.client = new awssdk.KinesisAnalyticsV2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/kinesisanalyticsv2-2018-05-23.normal.json"), this.client)
    }

    invokeAddApplicationCloudWatchLoggingOption(partialParams: ToOptional<{
      [K in keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest & keyof AddApplicationCloudWatchLoggingOptionRequest]: (AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest & AddApplicationCloudWatchLoggingOptionRequest)[K]
    }>): AddApplicationCloudWatchLoggingOptionResponse {
        return this.client.addApplicationCloudWatchLoggingOption(
            this.ops["AddApplicationCloudWatchLoggingOption"].apply(partialParams)
        );
    }

    invokeAddApplicationInput(partialParams: ToOptional<{
      [K in keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest & keyof AddApplicationInputRequest]: (AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest & AddApplicationInputRequest)[K]
    }>): AddApplicationInputResponse {
        return this.client.addApplicationInput(
            this.ops["AddApplicationInput"].apply(partialParams)
        );
    }

    invokeAddApplicationInputProcessingConfiguration(partialParams: ToOptional<{
      [K in keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest & keyof AddApplicationInputProcessingConfigurationRequest]: (AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest & AddApplicationInputProcessingConfigurationRequest)[K]
    }>): AddApplicationInputProcessingConfigurationResponse {
        return this.client.addApplicationInputProcessingConfiguration(
            this.ops["AddApplicationInputProcessingConfiguration"].apply(partialParams)
        );
    }

    invokeAddApplicationOutput(partialParams: ToOptional<{
      [K in keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest & keyof AddApplicationOutputRequest]: (AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest & AddApplicationOutputRequest)[K]
    }>): AddApplicationOutputResponse {
        return this.client.addApplicationOutput(
            this.ops["AddApplicationOutput"].apply(partialParams)
        );
    }

    invokeAddApplicationReferenceDataSource(partialParams: ToOptional<{
      [K in keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest & keyof AddApplicationReferenceDataSourceRequest]: (AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest & AddApplicationReferenceDataSourceRequest)[K]
    }>): AddApplicationReferenceDataSourceResponse {
        return this.client.addApplicationReferenceDataSource(
            this.ops["AddApplicationReferenceDataSource"].apply(partialParams)
        );
    }

    invokeAddApplicationVpcConfiguration(partialParams: ToOptional<{
      [K in keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest & keyof AddApplicationVpcConfigurationRequest]: (AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest & AddApplicationVpcConfigurationRequest)[K]
    }>): AddApplicationVpcConfigurationResponse {
        return this.client.addApplicationVpcConfiguration(
            this.ops["AddApplicationVpcConfiguration"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): CreateApplicationResponse {
        return this.client.createApplication(
            this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateApplicationPresignedUrl(partialParams: ToOptional<{
      [K in keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest & keyof CreateApplicationPresignedUrlRequest]: (CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest & CreateApplicationPresignedUrlRequest)[K]
    }>): CreateApplicationPresignedUrlResponse {
        return this.client.createApplicationPresignedUrl(
            this.ops["CreateApplicationPresignedUrl"].apply(partialParams)
        );
    }

    invokeCreateApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest & keyof CreateApplicationSnapshotRequest]: (CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest & CreateApplicationSnapshotRequest)[K]
    }>): CreateApplicationSnapshotResponse {
        return this.client.createApplicationSnapshot(
            this.ops["CreateApplicationSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): DeleteApplicationResponse {
        return this.client.deleteApplication(
            this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteApplicationCloudWatchLoggingOption(partialParams: ToOptional<{
      [K in keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest & keyof DeleteApplicationCloudWatchLoggingOptionRequest]: (DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest & DeleteApplicationCloudWatchLoggingOptionRequest)[K]
    }>): DeleteApplicationCloudWatchLoggingOptionResponse {
        return this.client.deleteApplicationCloudWatchLoggingOption(
            this.ops["DeleteApplicationCloudWatchLoggingOption"].apply(partialParams)
        );
    }

    invokeDeleteApplicationInputProcessingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest & keyof DeleteApplicationInputProcessingConfigurationRequest]: (DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest & DeleteApplicationInputProcessingConfigurationRequest)[K]
    }>): DeleteApplicationInputProcessingConfigurationResponse {
        return this.client.deleteApplicationInputProcessingConfiguration(
            this.ops["DeleteApplicationInputProcessingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteApplicationOutput(partialParams: ToOptional<{
      [K in keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest & keyof DeleteApplicationOutputRequest]: (DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest & DeleteApplicationOutputRequest)[K]
    }>): DeleteApplicationOutputResponse {
        return this.client.deleteApplicationOutput(
            this.ops["DeleteApplicationOutput"].apply(partialParams)
        );
    }

    invokeDeleteApplicationReferenceDataSource(partialParams: ToOptional<{
      [K in keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest & keyof DeleteApplicationReferenceDataSourceRequest]: (DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest & DeleteApplicationReferenceDataSourceRequest)[K]
    }>): DeleteApplicationReferenceDataSourceResponse {
        return this.client.deleteApplicationReferenceDataSource(
            this.ops["DeleteApplicationReferenceDataSource"].apply(partialParams)
        );
    }

    invokeDeleteApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest & keyof DeleteApplicationSnapshotRequest]: (DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest & DeleteApplicationSnapshotRequest)[K]
    }>): DeleteApplicationSnapshotResponse {
        return this.client.deleteApplicationSnapshot(
            this.ops["DeleteApplicationSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteApplicationVpcConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest & keyof DeleteApplicationVpcConfigurationRequest]: (DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest & DeleteApplicationVpcConfigurationRequest)[K]
    }>): DeleteApplicationVpcConfigurationResponse {
        return this.client.deleteApplicationVpcConfiguration(
            this.ops["DeleteApplicationVpcConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeApplication(partialParams: ToOptional<{
      [K in keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest & keyof DescribeApplicationRequest]: (DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest & DescribeApplicationRequest)[K]
    }>): DescribeApplicationResponse {
        return this.client.describeApplication(
            this.ops["DescribeApplication"].apply(partialParams)
        );
    }

    invokeDescribeApplicationSnapshot(partialParams: ToOptional<{
      [K in keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest & keyof DescribeApplicationSnapshotRequest]: (DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest & DescribeApplicationSnapshotRequest)[K]
    }>): DescribeApplicationSnapshotResponse {
        return this.client.describeApplicationSnapshot(
            this.ops["DescribeApplicationSnapshot"].apply(partialParams)
        );
    }

    invokeDescribeApplicationVersion(partialParams: ToOptional<{
      [K in keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest & keyof DescribeApplicationVersionRequest]: (DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest & DescribeApplicationVersionRequest)[K]
    }>): DescribeApplicationVersionResponse {
        return this.client.describeApplicationVersion(
            this.ops["DescribeApplicationVersion"].apply(partialParams)
        );
    }

    invokeDiscoverInputSchema(partialParams: ToOptional<{
      [K in keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest & keyof DiscoverInputSchemaRequest]: (DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest & DiscoverInputSchemaRequest)[K]
    }>): DiscoverInputSchemaResponse {
        return this.client.discoverInputSchema(
            this.ops["DiscoverInputSchema"].apply(partialParams)
        );
    }

    invokeListApplicationSnapshots(partialParams: ToOptional<{
      [K in keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest & keyof ListApplicationSnapshotsRequest]: (ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest & ListApplicationSnapshotsRequest)[K]
    }>): ListApplicationSnapshotsResponse {
        return this.client.listApplicationSnapshots(
            this.ops["ListApplicationSnapshots"].apply(partialParams)
        );
    }

    invokeListApplicationVersions(partialParams: ToOptional<{
      [K in keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest & keyof ListApplicationVersionsRequest]: (ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest & ListApplicationVersionsRequest)[K]
    }>): ListApplicationVersionsResponse {
        return this.client.listApplicationVersions(
            this.ops["ListApplicationVersions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRollbackApplication(partialParams: ToOptional<{
      [K in keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest & keyof RollbackApplicationRequest]: (RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest & RollbackApplicationRequest)[K]
    }>): RollbackApplicationResponse {
        return this.client.rollbackApplication(
            this.ops["RollbackApplication"].apply(partialParams)
        );
    }

    invokeStartApplication(partialParams: ToOptional<{
      [K in keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest & keyof StartApplicationRequest]: (StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest & StartApplicationRequest)[K]
    }>): StartApplicationResponse {
        return this.client.startApplication(
            this.ops["StartApplication"].apply(partialParams)
        );
    }

    invokeStopApplication(partialParams: ToOptional<{
      [K in keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest & keyof StopApplicationRequest]: (StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest & StopApplicationRequest)[K]
    }>): StopApplicationResponse {
        return this.client.stopApplication(
            this.ops["StopApplication"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): UpdateApplicationResponse {
        return this.client.updateApplication(
            this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateApplicationMaintenanceConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest & keyof UpdateApplicationMaintenanceConfigurationRequest]: (UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest & UpdateApplicationMaintenanceConfigurationRequest)[K]
    }>): UpdateApplicationMaintenanceConfigurationResponse {
        return this.client.updateApplicationMaintenanceConfiguration(
            this.ops["UpdateApplicationMaintenanceConfiguration"].apply(partialParams)
        );
    }
}