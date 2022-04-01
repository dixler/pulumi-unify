
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateApplicationFleetRequest,
    AssociateApplicationToEntitlementRequest,
    AssociateFleetRequest,
    BatchAssociateUserStackRequest,
    BatchDisassociateUserStackRequest,
    CopyImageRequest,
    CreateAppBlockRequest,
    CreateApplicationRequest,
    CreateDirectoryConfigRequest,
    CreateEntitlementRequest,
    CreateFleetRequest,
    CreateImageBuilderRequest,
    CreateImageBuilderStreamingURLRequest,
    CreateStackRequest,
    CreateStreamingURLRequest,
    CreateUpdatedImageRequest,
    CreateUsageReportSubscriptionRequest,
    CreateUserRequest,
    DeleteAppBlockRequest,
    DeleteApplicationRequest,
    DeleteDirectoryConfigRequest,
    DeleteEntitlementRequest,
    DeleteFleetRequest,
    DeleteImageRequest,
    DeleteImageBuilderRequest,
    DeleteImagePermissionsRequest,
    DeleteStackRequest,
    DeleteUsageReportSubscriptionRequest,
    DeleteUserRequest,
    DescribeAppBlocksRequest,
    DescribeApplicationFleetAssociationsRequest,
    DescribeApplicationsRequest,
    DescribeDirectoryConfigsRequest,
    DescribeEntitlementsRequest,
    DescribeFleetsRequest,
    DescribeImageBuildersRequest,
    DescribeImagePermissionsRequest,
    DescribeImagesRequest,
    DescribeSessionsRequest,
    DescribeStacksRequest,
    DescribeUsageReportSubscriptionsRequest,
    DescribeUserStackAssociationsRequest,
    DescribeUsersRequest,
    DisableUserRequest,
    DisassociateApplicationFleetRequest,
    DisassociateApplicationFromEntitlementRequest,
    DisassociateFleetRequest,
    EnableUserRequest,
    ExpireSessionRequest,
    ListAssociatedFleetsRequest,
    ListAssociatedStacksRequest,
    ListEntitledApplicationsRequest,
    ListTagsForResourceRequest,
    StartFleetRequest,
    StartImageBuilderRequest,
    StopFleetRequest,
    StopImageBuilderRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApplicationRequest,
    UpdateDirectoryConfigRequest,
    UpdateEntitlementRequest,
    UpdateFleetRequest,
    UpdateImagePermissionsRequest,
    UpdateStackRequest,
    AssociateApplicationFleetResult,
    AssociateApplicationToEntitlementResult,
    AssociateFleetResult,
    BatchAssociateUserStackResult,
    BatchDisassociateUserStackResult,
    CopyImageResponse,
    CreateAppBlockResult,
    CreateApplicationResult,
    CreateDirectoryConfigResult,
    CreateEntitlementResult,
    CreateFleetResult,
    CreateImageBuilderResult,
    CreateImageBuilderStreamingURLResult,
    CreateStackResult,
    CreateStreamingURLResult,
    CreateUpdatedImageResult,
    CreateUsageReportSubscriptionResult,
    CreateUserResult,
    DeleteAppBlockResult,
    DeleteApplicationResult,
    DeleteDirectoryConfigResult,
    DeleteEntitlementResult,
    DeleteFleetResult,
    DeleteImageResult,
    DeleteImageBuilderResult,
    DeleteImagePermissionsResult,
    DeleteStackResult,
    DeleteUsageReportSubscriptionResult,
    DeleteUserResult,
    DescribeAppBlocksResult,
    DescribeApplicationFleetAssociationsResult,
    DescribeApplicationsResult,
    DescribeDirectoryConfigsResult,
    DescribeEntitlementsResult,
    DescribeFleetsResult,
    DescribeImageBuildersResult,
    DescribeImagePermissionsResult,
    DescribeImagesResult,
    DescribeSessionsResult,
    DescribeStacksResult,
    DescribeUsageReportSubscriptionsResult,
    DescribeUserStackAssociationsResult,
    DescribeUsersResult,
    DisableUserResult,
    DisassociateApplicationFleetResult,
    DisassociateApplicationFromEntitlementResult,
    DisassociateFleetResult,
    EnableUserResult,
    ExpireSessionResult,
    ListAssociatedFleetsResult,
    ListAssociatedStacksResult,
    ListEntitledApplicationsResult,
    ListTagsForResourceResponse,
    StartFleetResult,
    StartImageBuilderResult,
    StopFleetResult,
    StopImageBuilderResult,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateApplicationResult,
    UpdateDirectoryConfigResult,
    UpdateEntitlementResult,
    UpdateFleetResult,
    UpdateImagePermissionsResult,
    UpdateStackResult
} from "aws-sdk/clients/appstream";
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.ImageBuilder {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appstream.ImageBuilder>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppStream()
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

    invokeAssociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof AssociateApplicationFleetRequest]: (AssociateApplicationFleetRequest)[K]
    }>): Request<AssociateApplicationFleetResult, AWSError> {
        this.boot();
        return this.client.associateApplicationFleet(
          this.ops["AssociateApplicationFleet"].apply(partialParams)
        );
    }

    invokeAssociateApplicationToEntitlement(partialParams: ToOptional<{
      [K in keyof AssociateApplicationToEntitlementRequest]: (AssociateApplicationToEntitlementRequest)[K]
    }>): Request<AssociateApplicationToEntitlementResult, AWSError> {
        this.boot();
        return this.client.associateApplicationToEntitlement(
          this.ops["AssociateApplicationToEntitlement"].apply(partialParams)
        );
    }

    invokeAssociateFleet(partialParams: ToOptional<{
      [K in keyof AssociateFleetRequest]: (AssociateFleetRequest)[K]
    }>): Request<AssociateFleetResult, AWSError> {
        this.boot();
        return this.client.associateFleet(
          this.ops["AssociateFleet"].apply(partialParams)
        );
    }

    invokeBatchAssociateUserStack(partialParams: ToOptional<{
      [K in keyof BatchAssociateUserStackRequest]: (BatchAssociateUserStackRequest)[K]
    }>): Request<BatchAssociateUserStackResult, AWSError> {
        this.boot();
        return this.client.batchAssociateUserStack(
          this.ops["BatchAssociateUserStack"].apply(partialParams)
        );
    }

    invokeBatchDisassociateUserStack(partialParams: ToOptional<{
      [K in keyof BatchDisassociateUserStackRequest]: (BatchDisassociateUserStackRequest)[K]
    }>): Request<BatchDisassociateUserStackResult, AWSError> {
        this.boot();
        return this.client.batchDisassociateUserStack(
          this.ops["BatchDisassociateUserStack"].apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest]: (CopyImageRequest)[K]
    }>): Request<CopyImageResponse, AWSError> {
        this.boot();
        return this.client.copyImage(
          this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCreateAppBlock(partialParams: ToOptional<{
      [K in keyof CreateAppBlockRequest & keyof Omit<CreateAppBlockRequest, "Name">]: (CreateAppBlockRequest)[K]
    }>): Request<CreateAppBlockResult, AWSError> {
        this.boot();
        return this.client.createAppBlock(
          this.ops["CreateAppBlock"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof Omit<CreateApplicationRequest, "Name">]: (CreateApplicationRequest)[K]
    }>): Request<CreateApplicationResult, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof CreateDirectoryConfigRequest]: (CreateDirectoryConfigRequest)[K]
    }>): Request<CreateDirectoryConfigResult, AWSError> {
        this.boot();
        return this.client.createDirectoryConfig(
          this.ops["CreateDirectoryConfig"].apply(partialParams)
        );
    }

    invokeCreateEntitlement(partialParams: ToOptional<{
      [K in keyof CreateEntitlementRequest & keyof Omit<CreateEntitlementRequest, "Name">]: (CreateEntitlementRequest)[K]
    }>): Request<CreateEntitlementResult, AWSError> {
        this.boot();
        return this.client.createEntitlement(
          this.ops["CreateEntitlement"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof Omit<CreateFleetRequest, "Name" | "InstanceType">]: (CreateFleetRequest)[K]
    }>): Request<CreateFleetResult, AWSError> {
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateImageBuilder(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderRequest & keyof Omit<CreateImageBuilderRequest, "Name" | "InstanceType">]: (CreateImageBuilderRequest)[K]
    }>): Request<CreateImageBuilderResult, AWSError> {
        this.boot();
        return this.client.createImageBuilder(
          this.ops["CreateImageBuilder"].apply(partialParams)
        );
    }

    invokeCreateImageBuilderStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderStreamingURLRequest & keyof Omit<CreateImageBuilderStreamingURLRequest, "Name">]: (CreateImageBuilderStreamingURLRequest)[K]
    }>): Request<CreateImageBuilderStreamingURLResult, AWSError> {
        this.boot();
        return this.client.createImageBuilderStreamingURL(
          this.ops["CreateImageBuilderStreamingURL"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof Omit<CreateStackRequest, "Name">]: (CreateStackRequest)[K]
    }>): Request<CreateStackResult, AWSError> {
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeCreateStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateStreamingURLRequest]: (CreateStreamingURLRequest)[K]
    }>): Request<CreateStreamingURLResult, AWSError> {
        this.boot();
        return this.client.createStreamingURL(
          this.ops["CreateStreamingURL"].apply(partialParams)
        );
    }

    invokeCreateUpdatedImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedImageRequest]: (CreateUpdatedImageRequest)[K]
    }>): Request<CreateUpdatedImageResult, AWSError> {
        this.boot();
        return this.client.createUpdatedImage(
          this.ops["CreateUpdatedImage"].apply(partialParams)
        );
    }

    invokeCreateUsageReportSubscription(partialParams: ToOptional<{
      [K in keyof CreateUsageReportSubscriptionRequest]: (CreateUsageReportSubscriptionRequest)[K]
    }>): Request<CreateUsageReportSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createUsageReportSubscription(
          this.ops["CreateUsageReportSubscription"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): Request<CreateUserResult, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteAppBlock(partialParams: ToOptional<{
      [K in keyof DeleteAppBlockRequest & keyof Omit<DeleteAppBlockRequest, "Name">]: (DeleteAppBlockRequest)[K]
    }>): Request<DeleteAppBlockResult, AWSError> {
        this.boot();
        return this.client.deleteAppBlock(
          this.ops["DeleteAppBlock"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof Omit<DeleteApplicationRequest, "Name">]: (DeleteApplicationRequest)[K]
    }>): Request<DeleteApplicationResult, AWSError> {
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteDirectoryConfig(partialParams: ToOptional<{
      [K in keyof DeleteDirectoryConfigRequest]: (DeleteDirectoryConfigRequest)[K]
    }>): Request<DeleteDirectoryConfigResult, AWSError> {
        this.boot();
        return this.client.deleteDirectoryConfig(
          this.ops["DeleteDirectoryConfig"].apply(partialParams)
        );
    }

    invokeDeleteEntitlement(partialParams: ToOptional<{
      [K in keyof DeleteEntitlementRequest & keyof Omit<DeleteEntitlementRequest, "Name">]: (DeleteEntitlementRequest)[K]
    }>): Request<DeleteEntitlementResult, AWSError> {
        this.boot();
        return this.client.deleteEntitlement(
          this.ops["DeleteEntitlement"].apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof Omit<DeleteFleetRequest, "Name">]: (DeleteFleetRequest)[K]
    }>): Request<DeleteFleetResult, AWSError> {
        this.boot();
        return this.client.deleteFleet(
          this.ops["DeleteFleet"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof Omit<DeleteImageRequest, "Name">]: (DeleteImageRequest)[K]
    }>): Request<DeleteImageResult, AWSError> {
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImageBuilder(partialParams: ToOptional<{
      [K in keyof DeleteImageBuilderRequest & keyof Omit<DeleteImageBuilderRequest, "Name">]: (DeleteImageBuilderRequest)[K]
    }>): Request<DeleteImageBuilderResult, AWSError> {
        this.boot();
        return this.client.deleteImageBuilder(
          this.ops["DeleteImageBuilder"].apply(partialParams)
        );
    }

    invokeDeleteImagePermissions(partialParams: ToOptional<{
      [K in keyof DeleteImagePermissionsRequest & keyof Omit<DeleteImagePermissionsRequest, "Name">]: (DeleteImagePermissionsRequest)[K]
    }>): Request<DeleteImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.deleteImagePermissions(
          this.ops["DeleteImagePermissions"].apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackRequest & keyof Omit<DeleteStackRequest, "Name">]: (DeleteStackRequest)[K]
    }>): Request<DeleteStackResult, AWSError> {
        this.boot();
        return this.client.deleteStack(
          this.ops["DeleteStack"].apply(partialParams)
        );
    }

    invokeDeleteUsageReportSubscription(partialParams: ToOptional<{
      [K in keyof DeleteUsageReportSubscriptionRequest]: (DeleteUsageReportSubscriptionRequest)[K]
    }>): Request<DeleteUsageReportSubscriptionResult, AWSError> {
        this.boot();
        return this.client.deleteUsageReportSubscription(
          this.ops["DeleteUsageReportSubscription"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest]: (DeleteUserRequest)[K]
    }>): Request<DeleteUserResult, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeAppBlocks(partialParams: ToOptional<{
      [K in keyof DescribeAppBlocksRequest]: (DescribeAppBlocksRequest)[K]
    }>): Request<DescribeAppBlocksResult, AWSError> {
        this.boot();
        return this.client.describeAppBlocks(
          this.ops["DescribeAppBlocks"].apply(partialParams)
        );
    }

    invokeDescribeApplicationFleetAssociations(partialParams: ToOptional<{
      [K in keyof DescribeApplicationFleetAssociationsRequest]: (DescribeApplicationFleetAssociationsRequest)[K]
    }>): Request<DescribeApplicationFleetAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeApplicationFleetAssociations(
          this.ops["DescribeApplicationFleetAssociations"].apply(partialParams)
        );
    }

    invokeDescribeApplications(partialParams: ToOptional<{
      [K in keyof DescribeApplicationsRequest]: (DescribeApplicationsRequest)[K]
    }>): Request<DescribeApplicationsResult, AWSError> {
        this.boot();
        return this.client.describeApplications(
          this.ops["DescribeApplications"].apply(partialParams)
        );
    }

    invokeDescribeDirectoryConfigs(partialParams: ToOptional<{
      [K in keyof DescribeDirectoryConfigsRequest]: (DescribeDirectoryConfigsRequest)[K]
    }>): Request<DescribeDirectoryConfigsResult, AWSError> {
        this.boot();
        return this.client.describeDirectoryConfigs(
          this.ops["DescribeDirectoryConfigs"].apply(partialParams)
        );
    }

    invokeDescribeEntitlements(partialParams: ToOptional<{
      [K in keyof DescribeEntitlementsRequest]: (DescribeEntitlementsRequest)[K]
    }>): Request<DescribeEntitlementsResult, AWSError> {
        this.boot();
        return this.client.describeEntitlements(
          this.ops["DescribeEntitlements"].apply(partialParams)
        );
    }

    invokeDescribeFleets(partialParams: ToOptional<{
      [K in keyof DescribeFleetsRequest]: (DescribeFleetsRequest)[K]
    }>): Request<DescribeFleetsResult, AWSError> {
        this.boot();
        return this.client.describeFleets(
          this.ops["DescribeFleets"].apply(partialParams)
        );
    }

    invokeDescribeImageBuilders(partialParams: ToOptional<{
      [K in keyof DescribeImageBuildersRequest]: (DescribeImageBuildersRequest)[K]
    }>): Request<DescribeImageBuildersResult, AWSError> {
        this.boot();
        return this.client.describeImageBuilders(
          this.ops["DescribeImageBuilders"].apply(partialParams)
        );
    }

    invokeDescribeImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeImagePermissionsRequest & keyof Omit<DescribeImagePermissionsRequest, "Name">]: (DescribeImagePermissionsRequest)[K]
    }>): Request<DescribeImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.describeImagePermissions(
          this.ops["DescribeImagePermissions"].apply(partialParams)
        );
    }

    invokeDescribeImages(partialParams: ToOptional<{
      [K in keyof DescribeImagesRequest]: (DescribeImagesRequest)[K]
    }>): Request<DescribeImagesResult, AWSError> {
        this.boot();
        return this.client.describeImages(
          this.ops["DescribeImages"].apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest]: (DescribeSessionsRequest)[K]
    }>): Request<DescribeSessionsResult, AWSError> {
        this.boot();
        return this.client.describeSessions(
          this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDescribeStacks(partialParams: ToOptional<{
      [K in keyof DescribeStacksRequest]: (DescribeStacksRequest)[K]
    }>): Request<DescribeStacksResult, AWSError> {
        this.boot();
        return this.client.describeStacks(
          this.ops["DescribeStacks"].apply(partialParams)
        );
    }

    invokeDescribeUsageReportSubscriptions(partialParams: ToOptional<{
      [K in keyof DescribeUsageReportSubscriptionsRequest]: (DescribeUsageReportSubscriptionsRequest)[K]
    }>): Request<DescribeUsageReportSubscriptionsResult, AWSError> {
        this.boot();
        return this.client.describeUsageReportSubscriptions(
          this.ops["DescribeUsageReportSubscriptions"].apply(partialParams)
        );
    }

    invokeDescribeUserStackAssociations(partialParams: ToOptional<{
      [K in keyof DescribeUserStackAssociationsRequest]: (DescribeUserStackAssociationsRequest)[K]
    }>): Request<DescribeUserStackAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeUserStackAssociations(
          this.ops["DescribeUserStackAssociations"].apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersRequest]: (DescribeUsersRequest)[K]
    }>): Request<DescribeUsersResult, AWSError> {
        this.boot();
        return this.client.describeUsers(
          this.ops["DescribeUsers"].apply(partialParams)
        );
    }

    invokeDisableUser(partialParams: ToOptional<{
      [K in keyof DisableUserRequest]: (DisableUserRequest)[K]
    }>): Request<DisableUserResult, AWSError> {
        this.boot();
        return this.client.disableUser(
          this.ops["DisableUser"].apply(partialParams)
        );
    }

    invokeDisassociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFleetRequest]: (DisassociateApplicationFleetRequest)[K]
    }>): Request<DisassociateApplicationFleetResult, AWSError> {
        this.boot();
        return this.client.disassociateApplicationFleet(
          this.ops["DisassociateApplicationFleet"].apply(partialParams)
        );
    }

    invokeDisassociateApplicationFromEntitlement(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFromEntitlementRequest]: (DisassociateApplicationFromEntitlementRequest)[K]
    }>): Request<DisassociateApplicationFromEntitlementResult, AWSError> {
        this.boot();
        return this.client.disassociateApplicationFromEntitlement(
          this.ops["DisassociateApplicationFromEntitlement"].apply(partialParams)
        );
    }

    invokeDisassociateFleet(partialParams: ToOptional<{
      [K in keyof DisassociateFleetRequest]: (DisassociateFleetRequest)[K]
    }>): Request<DisassociateFleetResult, AWSError> {
        this.boot();
        return this.client.disassociateFleet(
          this.ops["DisassociateFleet"].apply(partialParams)
        );
    }

    invokeEnableUser(partialParams: ToOptional<{
      [K in keyof EnableUserRequest]: (EnableUserRequest)[K]
    }>): Request<EnableUserResult, AWSError> {
        this.boot();
        return this.client.enableUser(
          this.ops["EnableUser"].apply(partialParams)
        );
    }

    invokeExpireSession(partialParams: ToOptional<{
      [K in keyof ExpireSessionRequest]: (ExpireSessionRequest)[K]
    }>): Request<ExpireSessionResult, AWSError> {
        this.boot();
        return this.client.expireSession(
          this.ops["ExpireSession"].apply(partialParams)
        );
    }

    invokeListAssociatedFleets(partialParams: ToOptional<{
      [K in keyof ListAssociatedFleetsRequest]: (ListAssociatedFleetsRequest)[K]
    }>): Request<ListAssociatedFleetsResult, AWSError> {
        this.boot();
        return this.client.listAssociatedFleets(
          this.ops["ListAssociatedFleets"].apply(partialParams)
        );
    }

    invokeListAssociatedStacks(partialParams: ToOptional<{
      [K in keyof ListAssociatedStacksRequest]: (ListAssociatedStacksRequest)[K]
    }>): Request<ListAssociatedStacksResult, AWSError> {
        this.boot();
        return this.client.listAssociatedStacks(
          this.ops["ListAssociatedStacks"].apply(partialParams)
        );
    }

    invokeListEntitledApplications(partialParams: ToOptional<{
      [K in keyof ListEntitledApplicationsRequest]: (ListEntitledApplicationsRequest)[K]
    }>): Request<ListEntitledApplicationsResult, AWSError> {
        this.boot();
        return this.client.listEntitledApplications(
          this.ops["ListEntitledApplications"].apply(partialParams)
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

    invokeStartFleet(partialParams: ToOptional<{
      [K in keyof StartFleetRequest & keyof Omit<StartFleetRequest, "Name">]: (StartFleetRequest)[K]
    }>): Request<StartFleetResult, AWSError> {
        this.boot();
        return this.client.startFleet(
          this.ops["StartFleet"].apply(partialParams)
        );
    }

    invokeStartImageBuilder(partialParams: ToOptional<{
      [K in keyof StartImageBuilderRequest & keyof Omit<StartImageBuilderRequest, "Name">]: (StartImageBuilderRequest)[K]
    }>): Request<StartImageBuilderResult, AWSError> {
        this.boot();
        return this.client.startImageBuilder(
          this.ops["StartImageBuilder"].apply(partialParams)
        );
    }

    invokeStopFleet(partialParams: ToOptional<{
      [K in keyof StopFleetRequest & keyof Omit<StopFleetRequest, "Name">]: (StopFleetRequest)[K]
    }>): Request<StopFleetResult, AWSError> {
        this.boot();
        return this.client.stopFleet(
          this.ops["StopFleet"].apply(partialParams)
        );
    }

    invokeStopImageBuilder(partialParams: ToOptional<{
      [K in keyof StopImageBuilderRequest & keyof Omit<StopImageBuilderRequest, "Name">]: (StopImageBuilderRequest)[K]
    }>): Request<StopImageBuilderResult, AWSError> {
        this.boot();
        return this.client.stopImageBuilder(
          this.ops["StopImageBuilder"].apply(partialParams)
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
      [K in keyof UpdateApplicationRequest & keyof Omit<UpdateApplicationRequest, "Name">]: (UpdateApplicationRequest)[K]
    }>): Request<UpdateApplicationResult, AWSError> {
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof UpdateDirectoryConfigRequest]: (UpdateDirectoryConfigRequest)[K]
    }>): Request<UpdateDirectoryConfigResult, AWSError> {
        this.boot();
        return this.client.updateDirectoryConfig(
          this.ops["UpdateDirectoryConfig"].apply(partialParams)
        );
    }

    invokeUpdateEntitlement(partialParams: ToOptional<{
      [K in keyof UpdateEntitlementRequest & keyof Omit<UpdateEntitlementRequest, "Name">]: (UpdateEntitlementRequest)[K]
    }>): Request<UpdateEntitlementResult, AWSError> {
        this.boot();
        return this.client.updateEntitlement(
          this.ops["UpdateEntitlement"].apply(partialParams)
        );
    }

    invokeUpdateFleet(partialParams: ToOptional<{
      [K in keyof UpdateFleetRequest]: (UpdateFleetRequest)[K]
    }>): Request<UpdateFleetResult, AWSError> {
        this.boot();
        return this.client.updateFleet(
          this.ops["UpdateFleet"].apply(partialParams)
        );
    }

    invokeUpdateImagePermissions(partialParams: ToOptional<{
      [K in keyof UpdateImagePermissionsRequest & keyof Omit<UpdateImagePermissionsRequest, "Name">]: (UpdateImagePermissionsRequest)[K]
    }>): Request<UpdateImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.updateImagePermissions(
          this.ops["UpdateImagePermissions"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackRequest & keyof Omit<UpdateStackRequest, "Name">]: (UpdateStackRequest)[K]
    }>): Request<UpdateStackResult, AWSError> {
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].apply(partialParams)
        );
    }
}