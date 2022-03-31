
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
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.FleetStackAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.appstream.FleetStackAssociation>) {
        super(...args)
        this.client = new awssdk.AppStream()
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

    invokeAssociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof AssociateApplicationFleetRequest & keyof AssociateApplicationFleetRequest]: (AssociateApplicationFleetRequest & AssociateApplicationFleetRequest)[K]
    }>): Request<AssociateApplicationFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApplicationFleet(
          this.ops["AssociateApplicationFleet"].applicator.apply(partialParams)
        );
    }

    invokeAssociateApplicationToEntitlement(partialParams: ToOptional<{
      [K in keyof AssociateApplicationToEntitlementRequest & keyof AssociateApplicationToEntitlementRequest]: (AssociateApplicationToEntitlementRequest & AssociateApplicationToEntitlementRequest)[K]
    }>): Request<AssociateApplicationToEntitlementResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApplicationToEntitlement(
          this.ops["AssociateApplicationToEntitlement"].applicator.apply(partialParams)
        );
    }

    invokeAssociateFleet(partialParams: ToOptional<{
      [K in keyof AssociateFleetRequest & keyof AssociateFleetRequest]: (AssociateFleetRequest & AssociateFleetRequest)[K]
    }>): Request<AssociateFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateFleet(
          this.ops["AssociateFleet"].applicator.apply(partialParams)
        );
    }

    invokeBatchAssociateUserStack(partialParams: ToOptional<{
      [K in keyof BatchAssociateUserStackRequest & keyof BatchAssociateUserStackRequest]: (BatchAssociateUserStackRequest & BatchAssociateUserStackRequest)[K]
    }>): Request<BatchAssociateUserStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchAssociateUserStack(
          this.ops["BatchAssociateUserStack"].applicator.apply(partialParams)
        );
    }

    invokeBatchDisassociateUserStack(partialParams: ToOptional<{
      [K in keyof BatchDisassociateUserStackRequest & keyof BatchDisassociateUserStackRequest]: (BatchDisassociateUserStackRequest & BatchDisassociateUserStackRequest)[K]
    }>): Request<BatchDisassociateUserStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisassociateUserStack(
          this.ops["BatchDisassociateUserStack"].applicator.apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest & keyof CopyImageRequest]: (CopyImageRequest & CopyImageRequest)[K]
    }>): Request<CopyImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyImage(
          this.ops["CopyImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppBlock(partialParams: ToOptional<{
      [K in keyof CreateAppBlockRequest & keyof CreateAppBlockRequest]: (CreateAppBlockRequest & CreateAppBlockRequest)[K]
    }>): Request<CreateAppBlockResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppBlock(
          this.ops["CreateAppBlock"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): Request<CreateApplicationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof CreateDirectoryConfigRequest & keyof CreateDirectoryConfigRequest]: (CreateDirectoryConfigRequest & CreateDirectoryConfigRequest)[K]
    }>): Request<CreateDirectoryConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectoryConfig(
          this.ops["CreateDirectoryConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateEntitlement(partialParams: ToOptional<{
      [K in keyof CreateEntitlementRequest & keyof CreateEntitlementRequest]: (CreateEntitlementRequest & CreateEntitlementRequest)[K]
    }>): Request<CreateEntitlementResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEntitlement(
          this.ops["CreateEntitlement"].applicator.apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof CreateFleetRequest]: (CreateFleetRequest & CreateFleetRequest)[K]
    }>): Request<CreateFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].applicator.apply(partialParams)
        );
    }

    invokeCreateImageBuilder(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderRequest & keyof CreateImageBuilderRequest]: (CreateImageBuilderRequest & CreateImageBuilderRequest)[K]
    }>): Request<CreateImageBuilderResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImageBuilder(
          this.ops["CreateImageBuilder"].applicator.apply(partialParams)
        );
    }

    invokeCreateImageBuilderStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderStreamingURLRequest & keyof CreateImageBuilderStreamingURLRequest]: (CreateImageBuilderStreamingURLRequest & CreateImageBuilderStreamingURLRequest)[K]
    }>): Request<CreateImageBuilderStreamingURLResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImageBuilderStreamingURL(
          this.ops["CreateImageBuilderStreamingURL"].applicator.apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof CreateStackRequest]: (CreateStackRequest & CreateStackRequest)[K]
    }>): Request<CreateStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].applicator.apply(partialParams)
        );
    }

    invokeCreateStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateStreamingURLRequest & keyof CreateStreamingURLRequest]: (CreateStreamingURLRequest & CreateStreamingURLRequest)[K]
    }>): Request<CreateStreamingURLResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStreamingURL(
          this.ops["CreateStreamingURL"].applicator.apply(partialParams)
        );
    }

    invokeCreateUpdatedImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedImageRequest & keyof CreateUpdatedImageRequest]: (CreateUpdatedImageRequest & CreateUpdatedImageRequest)[K]
    }>): Request<CreateUpdatedImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUpdatedImage(
          this.ops["CreateUpdatedImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest)[K]
    }>): Request<CreateUserResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppBlock(partialParams: ToOptional<{
      [K in keyof DeleteAppBlockRequest & keyof DeleteAppBlockRequest]: (DeleteAppBlockRequest & DeleteAppBlockRequest)[K]
    }>): Request<DeleteAppBlockResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppBlock(
          this.ops["DeleteAppBlock"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): Request<DeleteApplicationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDirectoryConfig(partialParams: ToOptional<{
      [K in keyof DeleteDirectoryConfigRequest & keyof DeleteDirectoryConfigRequest]: (DeleteDirectoryConfigRequest & DeleteDirectoryConfigRequest)[K]
    }>): Request<DeleteDirectoryConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDirectoryConfig(
          this.ops["DeleteDirectoryConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEntitlement(partialParams: ToOptional<{
      [K in keyof DeleteEntitlementRequest & keyof DeleteEntitlementRequest]: (DeleteEntitlementRequest & DeleteEntitlementRequest)[K]
    }>): Request<DeleteEntitlementResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEntitlement(
          this.ops["DeleteEntitlement"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof DeleteFleetRequest]: (DeleteFleetRequest & DeleteFleetRequest)[K]
    }>): Request<DeleteFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleet(
          this.ops["DeleteFleet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof DeleteImageRequest]: (DeleteImageRequest & DeleteImageRequest)[K]
    }>): Request<DeleteImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImageBuilder(partialParams: ToOptional<{
      [K in keyof DeleteImageBuilderRequest & keyof DeleteImageBuilderRequest]: (DeleteImageBuilderRequest & DeleteImageBuilderRequest)[K]
    }>): Request<DeleteImageBuilderResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImageBuilder(
          this.ops["DeleteImageBuilder"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImagePermissions(partialParams: ToOptional<{
      [K in keyof DeleteImagePermissionsRequest & keyof DeleteImagePermissionsRequest]: (DeleteImagePermissionsRequest & DeleteImagePermissionsRequest)[K]
    }>): Request<DeleteImagePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImagePermissions(
          this.ops["DeleteImagePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackRequest & keyof DeleteStackRequest]: (DeleteStackRequest & DeleteStackRequest)[K]
    }>): Request<DeleteStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStack(
          this.ops["DeleteStack"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest)[K]
    }>): Request<DeleteUserResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEntitlements(partialParams: ToOptional<{
      [K in keyof DescribeEntitlementsRequest & keyof DescribeEntitlementsRequest]: (DescribeEntitlementsRequest & DescribeEntitlementsRequest)[K]
    }>): Request<DescribeEntitlementsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEntitlements(
          this.ops["DescribeEntitlements"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeImagePermissionsRequest & keyof DescribeImagePermissionsRequest]: (DescribeImagePermissionsRequest & DescribeImagePermissionsRequest)[K]
    }>): Request<DescribeImagePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImagePermissions(
          this.ops["DescribeImagePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest & keyof DescribeSessionsRequest]: (DescribeSessionsRequest & DescribeSessionsRequest)[K]
    }>): Request<DescribeSessionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSessions(
          this.ops["DescribeSessions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersRequest & keyof DescribeUsersRequest]: (DescribeUsersRequest & DescribeUsersRequest)[K]
    }>): Request<DescribeUsersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUsers(
          this.ops["DescribeUsers"].applicator.apply(partialParams)
        );
    }

    invokeDisableUser(partialParams: ToOptional<{
      [K in keyof DisableUserRequest & keyof DisableUserRequest]: (DisableUserRequest & DisableUserRequest)[K]
    }>): Request<DisableUserResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableUser(
          this.ops["DisableUser"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFleetRequest & keyof DisassociateApplicationFleetRequest]: (DisassociateApplicationFleetRequest & DisassociateApplicationFleetRequest)[K]
    }>): Request<DisassociateApplicationFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApplicationFleet(
          this.ops["DisassociateApplicationFleet"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateApplicationFromEntitlement(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFromEntitlementRequest & keyof DisassociateApplicationFromEntitlementRequest]: (DisassociateApplicationFromEntitlementRequest & DisassociateApplicationFromEntitlementRequest)[K]
    }>): Request<DisassociateApplicationFromEntitlementResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApplicationFromEntitlement(
          this.ops["DisassociateApplicationFromEntitlement"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateFleet(partialParams: ToOptional<{
      [K in keyof DisassociateFleetRequest & keyof DisassociateFleetRequest]: (DisassociateFleetRequest & DisassociateFleetRequest)[K]
    }>): Request<DisassociateFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFleet(
          this.ops["DisassociateFleet"].applicator.apply(partialParams)
        );
    }

    invokeEnableUser(partialParams: ToOptional<{
      [K in keyof EnableUserRequest & keyof EnableUserRequest]: (EnableUserRequest & EnableUserRequest)[K]
    }>): Request<EnableUserResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableUser(
          this.ops["EnableUser"].applicator.apply(partialParams)
        );
    }

    invokeExpireSession(partialParams: ToOptional<{
      [K in keyof ExpireSessionRequest & keyof ExpireSessionRequest]: (ExpireSessionRequest & ExpireSessionRequest)[K]
    }>): Request<ExpireSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.expireSession(
          this.ops["ExpireSession"].applicator.apply(partialParams)
        );
    }

    invokeListAssociatedFleets(partialParams: ToOptional<{
      [K in keyof ListAssociatedFleetsRequest & keyof ListAssociatedFleetsRequest]: (ListAssociatedFleetsRequest & ListAssociatedFleetsRequest)[K]
    }>): Request<ListAssociatedFleetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssociatedFleets(
          this.ops["ListAssociatedFleets"].applicator.apply(partialParams)
        );
    }

    invokeListAssociatedStacks(partialParams: ToOptional<{
      [K in keyof ListAssociatedStacksRequest & keyof ListAssociatedStacksRequest]: (ListAssociatedStacksRequest & ListAssociatedStacksRequest)[K]
    }>): Request<ListAssociatedStacksResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssociatedStacks(
          this.ops["ListAssociatedStacks"].applicator.apply(partialParams)
        );
    }

    invokeListEntitledApplications(partialParams: ToOptional<{
      [K in keyof ListEntitledApplicationsRequest & keyof ListEntitledApplicationsRequest]: (ListEntitledApplicationsRequest & ListEntitledApplicationsRequest)[K]
    }>): Request<ListEntitledApplicationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEntitledApplications(
          this.ops["ListEntitledApplications"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeStartFleet(partialParams: ToOptional<{
      [K in keyof StartFleetRequest & keyof StartFleetRequest]: (StartFleetRequest & StartFleetRequest)[K]
    }>): Request<StartFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startFleet(
          this.ops["StartFleet"].applicator.apply(partialParams)
        );
    }

    invokeStartImageBuilder(partialParams: ToOptional<{
      [K in keyof StartImageBuilderRequest & keyof StartImageBuilderRequest]: (StartImageBuilderRequest & StartImageBuilderRequest)[K]
    }>): Request<StartImageBuilderResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImageBuilder(
          this.ops["StartImageBuilder"].applicator.apply(partialParams)
        );
    }

    invokeStopFleet(partialParams: ToOptional<{
      [K in keyof StopFleetRequest & keyof StopFleetRequest]: (StopFleetRequest & StopFleetRequest)[K]
    }>): Request<StopFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopFleet(
          this.ops["StopFleet"].applicator.apply(partialParams)
        );
    }

    invokeStopImageBuilder(partialParams: ToOptional<{
      [K in keyof StopImageBuilderRequest & keyof StopImageBuilderRequest]: (StopImageBuilderRequest & StopImageBuilderRequest)[K]
    }>): Request<StopImageBuilderResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopImageBuilder(
          this.ops["StopImageBuilder"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): Request<UpdateApplicationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof UpdateDirectoryConfigRequest & keyof UpdateDirectoryConfigRequest]: (UpdateDirectoryConfigRequest & UpdateDirectoryConfigRequest)[K]
    }>): Request<UpdateDirectoryConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDirectoryConfig(
          this.ops["UpdateDirectoryConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEntitlement(partialParams: ToOptional<{
      [K in keyof UpdateEntitlementRequest & keyof Omit<UpdateEntitlementRequest, "StackName">]: (UpdateEntitlementRequest & Omit<UpdateEntitlementRequest, "StackName">)[K]
    }>): Request<UpdateEntitlementResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEntitlement(
          this.ops["UpdateEntitlement"].applicator.apply(partialParams)
        );
    }

    invokeUpdateImagePermissions(partialParams: ToOptional<{
      [K in keyof UpdateImagePermissionsRequest & keyof UpdateImagePermissionsRequest]: (UpdateImagePermissionsRequest & UpdateImagePermissionsRequest)[K]
    }>): Request<UpdateImagePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateImagePermissions(
          this.ops["UpdateImagePermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackRequest & keyof UpdateStackRequest]: (UpdateStackRequest & UpdateStackRequest)[K]
    }>): Request<UpdateStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].applicator.apply(partialParams)
        );
    }
}