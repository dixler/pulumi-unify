
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    DeleteUserRequest,
    DescribeEntitlementsRequest,
    DescribeImagePermissionsRequest,
    DescribeSessionsRequest,
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
    DeleteUserResult,
    DescribeEntitlementsResult,
    DescribeImagePermissionsResult,
    DescribeSessionsResult,
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
    UpdateImagePermissionsResult,
    UpdateStackResult
} from "aws-sdk/clients/appstream";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.DirectoryConfig {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.appstream.DirectoryConfig>) {
        super(...args)
        this.client = new awssdk.AppStream()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/appstream-2016-12-01.normal.json"), this.client)
    }

    invokeAssociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof AssociateApplicationFleetRequest & keyof AssociateApplicationFleetRequest]: (AssociateApplicationFleetRequest & AssociateApplicationFleetRequest)[K]
    }>): AssociateApplicationFleetResult {
        return this.client.associateApplicationFleet(
            this.ops["AssociateApplicationFleet"].apply(partialParams)
        );
    }

    invokeAssociateApplicationToEntitlement(partialParams: ToOptional<{
      [K in keyof AssociateApplicationToEntitlementRequest & keyof AssociateApplicationToEntitlementRequest]: (AssociateApplicationToEntitlementRequest & AssociateApplicationToEntitlementRequest)[K]
    }>): AssociateApplicationToEntitlementResult {
        return this.client.associateApplicationToEntitlement(
            this.ops["AssociateApplicationToEntitlement"].apply(partialParams)
        );
    }

    invokeAssociateFleet(partialParams: ToOptional<{
      [K in keyof AssociateFleetRequest & keyof AssociateFleetRequest]: (AssociateFleetRequest & AssociateFleetRequest)[K]
    }>): AssociateFleetResult {
        return this.client.associateFleet(
            this.ops["AssociateFleet"].apply(partialParams)
        );
    }

    invokeBatchAssociateUserStack(partialParams: ToOptional<{
      [K in keyof BatchAssociateUserStackRequest & keyof BatchAssociateUserStackRequest]: (BatchAssociateUserStackRequest & BatchAssociateUserStackRequest)[K]
    }>): BatchAssociateUserStackResult {
        return this.client.batchAssociateUserStack(
            this.ops["BatchAssociateUserStack"].apply(partialParams)
        );
    }

    invokeBatchDisassociateUserStack(partialParams: ToOptional<{
      [K in keyof BatchDisassociateUserStackRequest & keyof BatchDisassociateUserStackRequest]: (BatchDisassociateUserStackRequest & BatchDisassociateUserStackRequest)[K]
    }>): BatchDisassociateUserStackResult {
        return this.client.batchDisassociateUserStack(
            this.ops["BatchDisassociateUserStack"].apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest & keyof CopyImageRequest]: (CopyImageRequest & CopyImageRequest)[K]
    }>): CopyImageResponse {
        return this.client.copyImage(
            this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCreateAppBlock(partialParams: ToOptional<{
      [K in keyof CreateAppBlockRequest & keyof CreateAppBlockRequest]: (CreateAppBlockRequest & CreateAppBlockRequest)[K]
    }>): CreateAppBlockResult {
        return this.client.createAppBlock(
            this.ops["CreateAppBlock"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): CreateApplicationResult {
        return this.client.createApplication(
            this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof CreateDirectoryConfigRequest & keyof CreateDirectoryConfigRequest]: (CreateDirectoryConfigRequest & CreateDirectoryConfigRequest)[K]
    }>): CreateDirectoryConfigResult {
        return this.client.createDirectoryConfig(
            this.ops["CreateDirectoryConfig"].apply(partialParams)
        );
    }

    invokeCreateEntitlement(partialParams: ToOptional<{
      [K in keyof CreateEntitlementRequest & keyof CreateEntitlementRequest]: (CreateEntitlementRequest & CreateEntitlementRequest)[K]
    }>): CreateEntitlementResult {
        return this.client.createEntitlement(
            this.ops["CreateEntitlement"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof CreateFleetRequest]: (CreateFleetRequest & CreateFleetRequest)[K]
    }>): CreateFleetResult {
        return this.client.createFleet(
            this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateImageBuilder(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderRequest & keyof CreateImageBuilderRequest]: (CreateImageBuilderRequest & CreateImageBuilderRequest)[K]
    }>): CreateImageBuilderResult {
        return this.client.createImageBuilder(
            this.ops["CreateImageBuilder"].apply(partialParams)
        );
    }

    invokeCreateImageBuilderStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderStreamingURLRequest & keyof CreateImageBuilderStreamingURLRequest]: (CreateImageBuilderStreamingURLRequest & CreateImageBuilderStreamingURLRequest)[K]
    }>): CreateImageBuilderStreamingURLResult {
        return this.client.createImageBuilderStreamingURL(
            this.ops["CreateImageBuilderStreamingURL"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof CreateStackRequest]: (CreateStackRequest & CreateStackRequest)[K]
    }>): CreateStackResult {
        return this.client.createStack(
            this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeCreateStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateStreamingURLRequest & keyof CreateStreamingURLRequest]: (CreateStreamingURLRequest & CreateStreamingURLRequest)[K]
    }>): CreateStreamingURLResult {
        return this.client.createStreamingURL(
            this.ops["CreateStreamingURL"].apply(partialParams)
        );
    }

    invokeCreateUpdatedImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedImageRequest & keyof CreateUpdatedImageRequest]: (CreateUpdatedImageRequest & CreateUpdatedImageRequest)[K]
    }>): CreateUpdatedImageResult {
        return this.client.createUpdatedImage(
            this.ops["CreateUpdatedImage"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResult {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteAppBlock(partialParams: ToOptional<{
      [K in keyof DeleteAppBlockRequest & keyof DeleteAppBlockRequest]: (DeleteAppBlockRequest & DeleteAppBlockRequest)[K]
    }>): DeleteAppBlockResult {
        return this.client.deleteAppBlock(
            this.ops["DeleteAppBlock"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): DeleteApplicationResult {
        return this.client.deleteApplication(
            this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteDirectoryConfig(partialParams: ToOptional<{
      [K in keyof DeleteDirectoryConfigRequest & keyof DeleteDirectoryConfigRequest]: (DeleteDirectoryConfigRequest & DeleteDirectoryConfigRequest)[K]
    }>): DeleteDirectoryConfigResult {
        return this.client.deleteDirectoryConfig(
            this.ops["DeleteDirectoryConfig"].apply(partialParams)
        );
    }

    invokeDeleteEntitlement(partialParams: ToOptional<{
      [K in keyof DeleteEntitlementRequest & keyof DeleteEntitlementRequest]: (DeleteEntitlementRequest & DeleteEntitlementRequest)[K]
    }>): DeleteEntitlementResult {
        return this.client.deleteEntitlement(
            this.ops["DeleteEntitlement"].apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof DeleteFleetRequest]: (DeleteFleetRequest & DeleteFleetRequest)[K]
    }>): DeleteFleetResult {
        return this.client.deleteFleet(
            this.ops["DeleteFleet"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof DeleteImageRequest]: (DeleteImageRequest & DeleteImageRequest)[K]
    }>): DeleteImageResult {
        return this.client.deleteImage(
            this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImageBuilder(partialParams: ToOptional<{
      [K in keyof DeleteImageBuilderRequest & keyof DeleteImageBuilderRequest]: (DeleteImageBuilderRequest & DeleteImageBuilderRequest)[K]
    }>): DeleteImageBuilderResult {
        return this.client.deleteImageBuilder(
            this.ops["DeleteImageBuilder"].apply(partialParams)
        );
    }

    invokeDeleteImagePermissions(partialParams: ToOptional<{
      [K in keyof DeleteImagePermissionsRequest & keyof DeleteImagePermissionsRequest]: (DeleteImagePermissionsRequest & DeleteImagePermissionsRequest)[K]
    }>): DeleteImagePermissionsResult {
        return this.client.deleteImagePermissions(
            this.ops["DeleteImagePermissions"].apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackRequest & keyof DeleteStackRequest]: (DeleteStackRequest & DeleteStackRequest)[K]
    }>): DeleteStackResult {
        return this.client.deleteStack(
            this.ops["DeleteStack"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest)[K]
    }>): DeleteUserResult {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeEntitlements(partialParams: ToOptional<{
      [K in keyof DescribeEntitlementsRequest & keyof DescribeEntitlementsRequest]: (DescribeEntitlementsRequest & DescribeEntitlementsRequest)[K]
    }>): DescribeEntitlementsResult {
        return this.client.describeEntitlements(
            this.ops["DescribeEntitlements"].apply(partialParams)
        );
    }

    invokeDescribeImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeImagePermissionsRequest & keyof DescribeImagePermissionsRequest]: (DescribeImagePermissionsRequest & DescribeImagePermissionsRequest)[K]
    }>): DescribeImagePermissionsResult {
        return this.client.describeImagePermissions(
            this.ops["DescribeImagePermissions"].apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest & keyof DescribeSessionsRequest]: (DescribeSessionsRequest & DescribeSessionsRequest)[K]
    }>): DescribeSessionsResult {
        return this.client.describeSessions(
            this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersRequest & keyof DescribeUsersRequest]: (DescribeUsersRequest & DescribeUsersRequest)[K]
    }>): DescribeUsersResult {
        return this.client.describeUsers(
            this.ops["DescribeUsers"].apply(partialParams)
        );
    }

    invokeDisableUser(partialParams: ToOptional<{
      [K in keyof DisableUserRequest & keyof DisableUserRequest]: (DisableUserRequest & DisableUserRequest)[K]
    }>): DisableUserResult {
        return this.client.disableUser(
            this.ops["DisableUser"].apply(partialParams)
        );
    }

    invokeDisassociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFleetRequest & keyof DisassociateApplicationFleetRequest]: (DisassociateApplicationFleetRequest & DisassociateApplicationFleetRequest)[K]
    }>): DisassociateApplicationFleetResult {
        return this.client.disassociateApplicationFleet(
            this.ops["DisassociateApplicationFleet"].apply(partialParams)
        );
    }

    invokeDisassociateApplicationFromEntitlement(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFromEntitlementRequest & keyof DisassociateApplicationFromEntitlementRequest]: (DisassociateApplicationFromEntitlementRequest & DisassociateApplicationFromEntitlementRequest)[K]
    }>): DisassociateApplicationFromEntitlementResult {
        return this.client.disassociateApplicationFromEntitlement(
            this.ops["DisassociateApplicationFromEntitlement"].apply(partialParams)
        );
    }

    invokeDisassociateFleet(partialParams: ToOptional<{
      [K in keyof DisassociateFleetRequest & keyof DisassociateFleetRequest]: (DisassociateFleetRequest & DisassociateFleetRequest)[K]
    }>): DisassociateFleetResult {
        return this.client.disassociateFleet(
            this.ops["DisassociateFleet"].apply(partialParams)
        );
    }

    invokeEnableUser(partialParams: ToOptional<{
      [K in keyof EnableUserRequest & keyof EnableUserRequest]: (EnableUserRequest & EnableUserRequest)[K]
    }>): EnableUserResult {
        return this.client.enableUser(
            this.ops["EnableUser"].apply(partialParams)
        );
    }

    invokeExpireSession(partialParams: ToOptional<{
      [K in keyof ExpireSessionRequest & keyof ExpireSessionRequest]: (ExpireSessionRequest & ExpireSessionRequest)[K]
    }>): ExpireSessionResult {
        return this.client.expireSession(
            this.ops["ExpireSession"].apply(partialParams)
        );
    }

    invokeListAssociatedFleets(partialParams: ToOptional<{
      [K in keyof ListAssociatedFleetsRequest & keyof ListAssociatedFleetsRequest]: (ListAssociatedFleetsRequest & ListAssociatedFleetsRequest)[K]
    }>): ListAssociatedFleetsResult {
        return this.client.listAssociatedFleets(
            this.ops["ListAssociatedFleets"].apply(partialParams)
        );
    }

    invokeListAssociatedStacks(partialParams: ToOptional<{
      [K in keyof ListAssociatedStacksRequest & keyof ListAssociatedStacksRequest]: (ListAssociatedStacksRequest & ListAssociatedStacksRequest)[K]
    }>): ListAssociatedStacksResult {
        return this.client.listAssociatedStacks(
            this.ops["ListAssociatedStacks"].apply(partialParams)
        );
    }

    invokeListEntitledApplications(partialParams: ToOptional<{
      [K in keyof ListEntitledApplicationsRequest & keyof ListEntitledApplicationsRequest]: (ListEntitledApplicationsRequest & ListEntitledApplicationsRequest)[K]
    }>): ListEntitledApplicationsResult {
        return this.client.listEntitledApplications(
            this.ops["ListEntitledApplications"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartFleet(partialParams: ToOptional<{
      [K in keyof StartFleetRequest & keyof StartFleetRequest]: (StartFleetRequest & StartFleetRequest)[K]
    }>): StartFleetResult {
        return this.client.startFleet(
            this.ops["StartFleet"].apply(partialParams)
        );
    }

    invokeStartImageBuilder(partialParams: ToOptional<{
      [K in keyof StartImageBuilderRequest & keyof StartImageBuilderRequest]: (StartImageBuilderRequest & StartImageBuilderRequest)[K]
    }>): StartImageBuilderResult {
        return this.client.startImageBuilder(
            this.ops["StartImageBuilder"].apply(partialParams)
        );
    }

    invokeStopFleet(partialParams: ToOptional<{
      [K in keyof StopFleetRequest & keyof StopFleetRequest]: (StopFleetRequest & StopFleetRequest)[K]
    }>): StopFleetResult {
        return this.client.stopFleet(
            this.ops["StopFleet"].apply(partialParams)
        );
    }

    invokeStopImageBuilder(partialParams: ToOptional<{
      [K in keyof StopImageBuilderRequest & keyof StopImageBuilderRequest]: (StopImageBuilderRequest & StopImageBuilderRequest)[K]
    }>): StopImageBuilderResult {
        return this.client.stopImageBuilder(
            this.ops["StopImageBuilder"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): UpdateApplicationResult {
        return this.client.updateApplication(
            this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof UpdateDirectoryConfigRequest & keyof Omit<UpdateDirectoryConfigRequest, "DirectoryName">]: (UpdateDirectoryConfigRequest & Omit<UpdateDirectoryConfigRequest, "DirectoryName">)[K]
    }>): UpdateDirectoryConfigResult {
        return this.client.updateDirectoryConfig(
            this.ops["UpdateDirectoryConfig"].apply(partialParams)
        );
    }

    invokeUpdateEntitlement(partialParams: ToOptional<{
      [K in keyof UpdateEntitlementRequest & keyof UpdateEntitlementRequest]: (UpdateEntitlementRequest & UpdateEntitlementRequest)[K]
    }>): UpdateEntitlementResult {
        return this.client.updateEntitlement(
            this.ops["UpdateEntitlement"].apply(partialParams)
        );
    }

    invokeUpdateImagePermissions(partialParams: ToOptional<{
      [K in keyof UpdateImagePermissionsRequest & keyof UpdateImagePermissionsRequest]: (UpdateImagePermissionsRequest & UpdateImagePermissionsRequest)[K]
    }>): UpdateImagePermissionsResult {
        return this.client.updateImagePermissions(
            this.ops["UpdateImagePermissions"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackRequest & keyof UpdateStackRequest]: (UpdateStackRequest & UpdateStackRequest)[K]
    }>): UpdateStackResult {
        return this.client.updateStack(
            this.ops["UpdateStack"].apply(partialParams)
        );
    }
}