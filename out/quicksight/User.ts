
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelIngestionRequest,
    CreateAccountCustomizationRequest,
    CreateAnalysisRequest,
    CreateDashboardRequest,
    CreateDataSetRequest,
    CreateDataSourceRequest,
    CreateFolderRequest,
    CreateFolderMembershipRequest,
    CreateGroupRequest,
    CreateGroupMembershipRequest,
    CreateIAMPolicyAssignmentRequest,
    CreateIngestionRequest,
    CreateNamespaceRequest,
    CreateTemplateRequest,
    CreateTemplateAliasRequest,
    CreateThemeRequest,
    CreateThemeAliasRequest,
    DeleteAccountCustomizationRequest,
    DeleteAnalysisRequest,
    DeleteDashboardRequest,
    DeleteDataSetRequest,
    DeleteDataSourceRequest,
    DeleteFolderRequest,
    DeleteFolderMembershipRequest,
    DeleteGroupRequest,
    DeleteGroupMembershipRequest,
    DeleteIAMPolicyAssignmentRequest,
    DeleteNamespaceRequest,
    DeleteTemplateRequest,
    DeleteTemplateAliasRequest,
    DeleteThemeRequest,
    DeleteThemeAliasRequest,
    DeleteUserRequest,
    DeleteUserByPrincipalIdRequest,
    DescribeAccountCustomizationRequest,
    DescribeAccountSettingsRequest,
    DescribeAnalysisRequest,
    DescribeAnalysisPermissionsRequest,
    DescribeDashboardRequest,
    DescribeDashboardPermissionsRequest,
    DescribeDataSetRequest,
    DescribeDataSetPermissionsRequest,
    DescribeDataSourceRequest,
    DescribeDataSourcePermissionsRequest,
    DescribeFolderRequest,
    DescribeFolderPermissionsRequest,
    DescribeFolderResolvedPermissionsRequest,
    DescribeGroupRequest,
    DescribeIAMPolicyAssignmentRequest,
    DescribeIngestionRequest,
    DescribeIpRestrictionRequest,
    DescribeNamespaceRequest,
    DescribeTemplateRequest,
    DescribeTemplateAliasRequest,
    DescribeTemplatePermissionsRequest,
    DescribeThemeRequest,
    DescribeThemeAliasRequest,
    DescribeThemePermissionsRequest,
    DescribeUserRequest,
    GenerateEmbedUrlForAnonymousUserRequest,
    GenerateEmbedUrlForRegisteredUserRequest,
    GetDashboardEmbedUrlRequest,
    GetSessionEmbedUrlRequest,
    ListAnalysesRequest,
    ListDashboardVersionsRequest,
    ListDashboardsRequest,
    ListDataSetsRequest,
    ListDataSourcesRequest,
    ListFolderMembersRequest,
    ListFoldersRequest,
    ListGroupMembershipsRequest,
    ListGroupsRequest,
    ListIAMPolicyAssignmentsRequest,
    ListIAMPolicyAssignmentsForUserRequest,
    ListIngestionsRequest,
    ListNamespacesRequest,
    ListTagsForResourceRequest,
    ListTemplateAliasesRequest,
    ListTemplateVersionsRequest,
    ListTemplatesRequest,
    ListThemeAliasesRequest,
    ListThemeVersionsRequest,
    ListThemesRequest,
    ListUserGroupsRequest,
    ListUsersRequest,
    RegisterUserRequest,
    RestoreAnalysisRequest,
    SearchAnalysesRequest,
    SearchDashboardsRequest,
    SearchFoldersRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAccountCustomizationRequest,
    UpdateAccountSettingsRequest,
    UpdateAnalysisRequest,
    UpdateAnalysisPermissionsRequest,
    UpdateDashboardRequest,
    UpdateDashboardPermissionsRequest,
    UpdateDashboardPublishedVersionRequest,
    UpdateDataSetRequest,
    UpdateDataSetPermissionsRequest,
    UpdateDataSourceRequest,
    UpdateDataSourcePermissionsRequest,
    UpdateFolderRequest,
    UpdateFolderPermissionsRequest,
    UpdateGroupRequest,
    UpdateIAMPolicyAssignmentRequest,
    UpdateIpRestrictionRequest,
    UpdateTemplateRequest,
    UpdateTemplateAliasRequest,
    UpdateTemplatePermissionsRequest,
    UpdateThemeRequest,
    UpdateThemeAliasRequest,
    UpdateThemePermissionsRequest,
    UpdateUserRequest,
    CancelIngestionResponse,
    CreateAccountCustomizationResponse,
    CreateAnalysisResponse,
    CreateDashboardResponse,
    CreateDataSetResponse,
    CreateDataSourceResponse,
    CreateFolderResponse,
    CreateFolderMembershipResponse,
    CreateGroupResponse,
    CreateGroupMembershipResponse,
    CreateIAMPolicyAssignmentResponse,
    CreateIngestionResponse,
    CreateNamespaceResponse,
    CreateTemplateResponse,
    CreateTemplateAliasResponse,
    CreateThemeResponse,
    CreateThemeAliasResponse,
    DeleteAccountCustomizationResponse,
    DeleteAnalysisResponse,
    DeleteDashboardResponse,
    DeleteDataSetResponse,
    DeleteDataSourceResponse,
    DeleteFolderResponse,
    DeleteFolderMembershipResponse,
    DeleteGroupResponse,
    DeleteGroupMembershipResponse,
    DeleteIAMPolicyAssignmentResponse,
    DeleteNamespaceResponse,
    DeleteTemplateResponse,
    DeleteTemplateAliasResponse,
    DeleteThemeResponse,
    DeleteThemeAliasResponse,
    DeleteUserResponse,
    DeleteUserByPrincipalIdResponse,
    DescribeAccountCustomizationResponse,
    DescribeAccountSettingsResponse,
    DescribeAnalysisResponse,
    DescribeAnalysisPermissionsResponse,
    DescribeDashboardResponse,
    DescribeDashboardPermissionsResponse,
    DescribeDataSetResponse,
    DescribeDataSetPermissionsResponse,
    DescribeDataSourceResponse,
    DescribeDataSourcePermissionsResponse,
    DescribeFolderResponse,
    DescribeFolderPermissionsResponse,
    DescribeFolderResolvedPermissionsResponse,
    DescribeGroupResponse,
    DescribeIAMPolicyAssignmentResponse,
    DescribeIngestionResponse,
    DescribeIpRestrictionResponse,
    DescribeNamespaceResponse,
    DescribeTemplateResponse,
    DescribeTemplateAliasResponse,
    DescribeTemplatePermissionsResponse,
    DescribeThemeResponse,
    DescribeThemeAliasResponse,
    DescribeThemePermissionsResponse,
    DescribeUserResponse,
    GenerateEmbedUrlForAnonymousUserResponse,
    GenerateEmbedUrlForRegisteredUserResponse,
    GetDashboardEmbedUrlResponse,
    GetSessionEmbedUrlResponse,
    ListAnalysesResponse,
    ListDashboardVersionsResponse,
    ListDashboardsResponse,
    ListDataSetsResponse,
    ListDataSourcesResponse,
    ListFolderMembersResponse,
    ListFoldersResponse,
    ListGroupMembershipsResponse,
    ListGroupsResponse,
    ListIAMPolicyAssignmentsResponse,
    ListIAMPolicyAssignmentsForUserResponse,
    ListIngestionsResponse,
    ListNamespacesResponse,
    ListTagsForResourceResponse,
    ListTemplateAliasesResponse,
    ListTemplateVersionsResponse,
    ListTemplatesResponse,
    ListThemeAliasesResponse,
    ListThemeVersionsResponse,
    ListThemesResponse,
    ListUserGroupsResponse,
    ListUsersResponse,
    RegisterUserResponse,
    RestoreAnalysisResponse,
    SearchAnalysesResponse,
    SearchDashboardsResponse,
    SearchFoldersResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAccountCustomizationResponse,
    UpdateAccountSettingsResponse,
    UpdateAnalysisResponse,
    UpdateAnalysisPermissionsResponse,
    UpdateDashboardResponse,
    UpdateDashboardPermissionsResponse,
    UpdateDashboardPublishedVersionResponse,
    UpdateDataSetResponse,
    UpdateDataSetPermissionsResponse,
    UpdateDataSourceResponse,
    UpdateDataSourcePermissionsResponse,
    UpdateFolderResponse,
    UpdateFolderPermissionsResponse,
    UpdateGroupResponse,
    UpdateIAMPolicyAssignmentResponse,
    UpdateIpRestrictionResponse,
    UpdateTemplateResponse,
    UpdateTemplateAliasResponse,
    UpdateTemplatePermissionsResponse,
    UpdateThemeResponse,
    UpdateThemeAliasResponse,
    UpdateThemePermissionsResponse,
    UpdateUserResponse
} from "aws-sdk/clients/quicksight";
const schema = require("../apis/quicksight-2018-04-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.quicksight.User {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.quicksight.User>) {
        super(...args)
        this.client = new awssdk.QuickSight()
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

    invokeCancelIngestion(partialParams: ToOptional<{
      [K in keyof CancelIngestionRequest & keyof Omit<CancelIngestionRequest, "AwsAccountId"> & keyof CancelIngestionRequest & keyof CancelIngestionRequest & keyof CancelIngestionRequest & keyof CancelIngestionRequest & keyof CancelIngestionRequest & keyof CancelIngestionRequest & keyof CancelIngestionRequest]: (CancelIngestionRequest & Omit<CancelIngestionRequest, "AwsAccountId"> & CancelIngestionRequest & CancelIngestionRequest & CancelIngestionRequest & CancelIngestionRequest & CancelIngestionRequest & CancelIngestionRequest & CancelIngestionRequest)[K]
    }>): Request<CancelIngestionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelIngestion(
          this.ops["CancelIngestion"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccountCustomization(partialParams: ToOptional<{
      [K in keyof CreateAccountCustomizationRequest & keyof Omit<CreateAccountCustomizationRequest, "AwsAccountId"> & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest]: (CreateAccountCustomizationRequest & Omit<CreateAccountCustomizationRequest, "AwsAccountId"> & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest)[K]
    }>): Request<CreateAccountCustomizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccountCustomization(
          this.ops["CreateAccountCustomization"].applicator.apply(partialParams)
        );
    }

    invokeCreateAnalysis(partialParams: ToOptional<{
      [K in keyof CreateAnalysisRequest & keyof Omit<CreateAnalysisRequest, "AwsAccountId"> & keyof CreateAnalysisRequest & keyof CreateAnalysisRequest & keyof CreateAnalysisRequest & keyof CreateAnalysisRequest & keyof CreateAnalysisRequest & keyof CreateAnalysisRequest & keyof CreateAnalysisRequest]: (CreateAnalysisRequest & Omit<CreateAnalysisRequest, "AwsAccountId"> & CreateAnalysisRequest & CreateAnalysisRequest & CreateAnalysisRequest & CreateAnalysisRequest & CreateAnalysisRequest & CreateAnalysisRequest & CreateAnalysisRequest)[K]
    }>): Request<CreateAnalysisResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAnalysis(
          this.ops["CreateAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeCreateDashboard(partialParams: ToOptional<{
      [K in keyof CreateDashboardRequest & keyof Omit<CreateDashboardRequest, "AwsAccountId"> & keyof CreateDashboardRequest & keyof CreateDashboardRequest & keyof CreateDashboardRequest & keyof CreateDashboardRequest & keyof CreateDashboardRequest & keyof CreateDashboardRequest & keyof CreateDashboardRequest]: (CreateDashboardRequest & Omit<CreateDashboardRequest, "AwsAccountId"> & CreateDashboardRequest & CreateDashboardRequest & CreateDashboardRequest & CreateDashboardRequest & CreateDashboardRequest & CreateDashboardRequest & CreateDashboardRequest)[K]
    }>): Request<CreateDashboardResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDashboard(
          this.ops["CreateDashboard"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AwsAccountId"> & keyof CreateDataSetRequest & keyof CreateDataSetRequest & keyof CreateDataSetRequest & keyof CreateDataSetRequest & keyof CreateDataSetRequest & keyof CreateDataSetRequest & keyof CreateDataSetRequest]: (CreateDataSetRequest & Omit<CreateDataSetRequest, "AwsAccountId"> & CreateDataSetRequest & CreateDataSetRequest & CreateDataSetRequest & CreateDataSetRequest & CreateDataSetRequest & CreateDataSetRequest & CreateDataSetRequest)[K]
    }>): Request<CreateDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataSet(
          this.ops["CreateDataSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataSource(partialParams: ToOptional<{
      [K in keyof CreateDataSourceRequest & keyof Omit<CreateDataSourceRequest, "AwsAccountId"> & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest]: (CreateDataSourceRequest & Omit<CreateDataSourceRequest, "AwsAccountId"> & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest)[K]
    }>): Request<CreateDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataSource(
          this.ops["CreateDataSource"].applicator.apply(partialParams)
        );
    }

    invokeCreateFolder(partialParams: ToOptional<{
      [K in keyof CreateFolderRequest & keyof Omit<CreateFolderRequest, "AwsAccountId"> & keyof CreateFolderRequest & keyof CreateFolderRequest & keyof CreateFolderRequest & keyof CreateFolderRequest & keyof CreateFolderRequest & keyof CreateFolderRequest & keyof CreateFolderRequest]: (CreateFolderRequest & Omit<CreateFolderRequest, "AwsAccountId"> & CreateFolderRequest & CreateFolderRequest & CreateFolderRequest & CreateFolderRequest & CreateFolderRequest & CreateFolderRequest & CreateFolderRequest)[K]
    }>): Request<CreateFolderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFolder(
          this.ops["CreateFolder"].applicator.apply(partialParams)
        );
    }

    invokeCreateFolderMembership(partialParams: ToOptional<{
      [K in keyof CreateFolderMembershipRequest & keyof Omit<CreateFolderMembershipRequest, "AwsAccountId"> & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest]: (CreateFolderMembershipRequest & Omit<CreateFolderMembershipRequest, "AwsAccountId"> & CreateFolderMembershipRequest & CreateFolderMembershipRequest & CreateFolderMembershipRequest & CreateFolderMembershipRequest & CreateFolderMembershipRequest & CreateFolderMembershipRequest & CreateFolderMembershipRequest)[K]
    }>): Request<CreateFolderMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFolderMembership(
          this.ops["CreateFolderMembership"].applicator.apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof Omit<CreateGroupRequest, "AwsAccountId"> & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest]: (CreateGroupRequest & Omit<CreateGroupRequest, "AwsAccountId"> & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest)[K]
    }>): Request<CreateGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateGroupMembership(partialParams: ToOptional<{
      [K in keyof CreateGroupMembershipRequest & keyof Omit<CreateGroupMembershipRequest, "AwsAccountId"> & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest]: (CreateGroupMembershipRequest & Omit<CreateGroupMembershipRequest, "AwsAccountId"> & CreateGroupMembershipRequest & CreateGroupMembershipRequest & CreateGroupMembershipRequest & CreateGroupMembershipRequest & CreateGroupMembershipRequest & CreateGroupMembershipRequest & CreateGroupMembershipRequest)[K]
    }>): Request<CreateGroupMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroupMembership(
          this.ops["CreateGroupMembership"].applicator.apply(partialParams)
        );
    }

    invokeCreateIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof CreateIAMPolicyAssignmentRequest & keyof Omit<CreateIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest]: (CreateIAMPolicyAssignmentRequest & Omit<CreateIAMPolicyAssignmentRequest, "AwsAccountId"> & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest)[K]
    }>): Request<CreateIAMPolicyAssignmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIAMPolicyAssignment(
          this.ops["CreateIAMPolicyAssignment"].applicator.apply(partialParams)
        );
    }

    invokeCreateIngestion(partialParams: ToOptional<{
      [K in keyof CreateIngestionRequest & keyof Omit<CreateIngestionRequest, "AwsAccountId"> & keyof CreateIngestionRequest & keyof CreateIngestionRequest & keyof CreateIngestionRequest & keyof CreateIngestionRequest & keyof CreateIngestionRequest & keyof CreateIngestionRequest & keyof CreateIngestionRequest]: (CreateIngestionRequest & Omit<CreateIngestionRequest, "AwsAccountId"> & CreateIngestionRequest & CreateIngestionRequest & CreateIngestionRequest & CreateIngestionRequest & CreateIngestionRequest & CreateIngestionRequest & CreateIngestionRequest)[K]
    }>): Request<CreateIngestionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIngestion(
          this.ops["CreateIngestion"].applicator.apply(partialParams)
        );
    }

    invokeCreateNamespace(partialParams: ToOptional<{
      [K in keyof CreateNamespaceRequest & keyof Omit<CreateNamespaceRequest, "AwsAccountId"> & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest]: (CreateNamespaceRequest & Omit<CreateNamespaceRequest, "AwsAccountId"> & CreateNamespaceRequest & CreateNamespaceRequest & CreateNamespaceRequest & CreateNamespaceRequest & CreateNamespaceRequest & CreateNamespaceRequest & CreateNamespaceRequest)[K]
    }>): Request<CreateNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNamespace(
          this.ops["CreateNamespace"].applicator.apply(partialParams)
        );
    }

    invokeCreateTemplate(partialParams: ToOptional<{
      [K in keyof CreateTemplateRequest & keyof Omit<CreateTemplateRequest, "AwsAccountId"> & keyof CreateTemplateRequest & keyof CreateTemplateRequest & keyof CreateTemplateRequest & keyof CreateTemplateRequest & keyof CreateTemplateRequest & keyof CreateTemplateRequest & keyof CreateTemplateRequest]: (CreateTemplateRequest & Omit<CreateTemplateRequest, "AwsAccountId"> & CreateTemplateRequest & CreateTemplateRequest & CreateTemplateRequest & CreateTemplateRequest & CreateTemplateRequest & CreateTemplateRequest & CreateTemplateRequest)[K]
    }>): Request<CreateTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTemplate(
          this.ops["CreateTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateTemplateAlias(partialParams: ToOptional<{
      [K in keyof CreateTemplateAliasRequest & keyof Omit<CreateTemplateAliasRequest, "AwsAccountId"> & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest]: (CreateTemplateAliasRequest & Omit<CreateTemplateAliasRequest, "AwsAccountId"> & CreateTemplateAliasRequest & CreateTemplateAliasRequest & CreateTemplateAliasRequest & CreateTemplateAliasRequest & CreateTemplateAliasRequest & CreateTemplateAliasRequest & CreateTemplateAliasRequest)[K]
    }>): Request<CreateTemplateAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTemplateAlias(
          this.ops["CreateTemplateAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateTheme(partialParams: ToOptional<{
      [K in keyof CreateThemeRequest & keyof Omit<CreateThemeRequest, "AwsAccountId"> & keyof CreateThemeRequest & keyof CreateThemeRequest & keyof CreateThemeRequest & keyof CreateThemeRequest & keyof CreateThemeRequest & keyof CreateThemeRequest & keyof CreateThemeRequest]: (CreateThemeRequest & Omit<CreateThemeRequest, "AwsAccountId"> & CreateThemeRequest & CreateThemeRequest & CreateThemeRequest & CreateThemeRequest & CreateThemeRequest & CreateThemeRequest & CreateThemeRequest)[K]
    }>): Request<CreateThemeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTheme(
          this.ops["CreateTheme"].applicator.apply(partialParams)
        );
    }

    invokeCreateThemeAlias(partialParams: ToOptional<{
      [K in keyof CreateThemeAliasRequest & keyof Omit<CreateThemeAliasRequest, "AwsAccountId"> & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest]: (CreateThemeAliasRequest & Omit<CreateThemeAliasRequest, "AwsAccountId"> & CreateThemeAliasRequest & CreateThemeAliasRequest & CreateThemeAliasRequest & CreateThemeAliasRequest & CreateThemeAliasRequest & CreateThemeAliasRequest & CreateThemeAliasRequest)[K]
    }>): Request<CreateThemeAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThemeAlias(
          this.ops["CreateThemeAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccountCustomization(partialParams: ToOptional<{
      [K in keyof DeleteAccountCustomizationRequest & keyof Omit<DeleteAccountCustomizationRequest, "AwsAccountId"> & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest]: (DeleteAccountCustomizationRequest & Omit<DeleteAccountCustomizationRequest, "AwsAccountId"> & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest)[K]
    }>): Request<DeleteAccountCustomizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccountCustomization(
          this.ops["DeleteAccountCustomization"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteAnalysisRequest & keyof Omit<DeleteAnalysisRequest, "AwsAccountId"> & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest]: (DeleteAnalysisRequest & Omit<DeleteAnalysisRequest, "AwsAccountId"> & DeleteAnalysisRequest & DeleteAnalysisRequest & DeleteAnalysisRequest & DeleteAnalysisRequest & DeleteAnalysisRequest & DeleteAnalysisRequest & DeleteAnalysisRequest)[K]
    }>): Request<DeleteAnalysisResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAnalysis(
          this.ops["DeleteAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDashboard(partialParams: ToOptional<{
      [K in keyof DeleteDashboardRequest & keyof Omit<DeleteDashboardRequest, "AwsAccountId"> & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest]: (DeleteDashboardRequest & Omit<DeleteDashboardRequest, "AwsAccountId"> & DeleteDashboardRequest & DeleteDashboardRequest & DeleteDashboardRequest & DeleteDashboardRequest & DeleteDashboardRequest & DeleteDashboardRequest & DeleteDashboardRequest)[K]
    }>): Request<DeleteDashboardResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDashboard(
          this.ops["DeleteDashboard"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataSet(partialParams: ToOptional<{
      [K in keyof DeleteDataSetRequest & keyof Omit<DeleteDataSetRequest, "AwsAccountId"> & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest]: (DeleteDataSetRequest & Omit<DeleteDataSetRequest, "AwsAccountId"> & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest)[K]
    }>): Request<DeleteDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataSet(
          this.ops["DeleteDataSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataSource(partialParams: ToOptional<{
      [K in keyof DeleteDataSourceRequest & keyof Omit<DeleteDataSourceRequest, "AwsAccountId"> & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest]: (DeleteDataSourceRequest & Omit<DeleteDataSourceRequest, "AwsAccountId"> & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest)[K]
    }>): Request<DeleteDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataSource(
          this.ops["DeleteDataSource"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFolder(partialParams: ToOptional<{
      [K in keyof DeleteFolderRequest & keyof Omit<DeleteFolderRequest, "AwsAccountId"> & keyof DeleteFolderRequest & keyof DeleteFolderRequest & keyof DeleteFolderRequest & keyof DeleteFolderRequest & keyof DeleteFolderRequest & keyof DeleteFolderRequest & keyof DeleteFolderRequest]: (DeleteFolderRequest & Omit<DeleteFolderRequest, "AwsAccountId"> & DeleteFolderRequest & DeleteFolderRequest & DeleteFolderRequest & DeleteFolderRequest & DeleteFolderRequest & DeleteFolderRequest & DeleteFolderRequest)[K]
    }>): Request<DeleteFolderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFolder(
          this.ops["DeleteFolder"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFolderMembership(partialParams: ToOptional<{
      [K in keyof DeleteFolderMembershipRequest & keyof Omit<DeleteFolderMembershipRequest, "AwsAccountId"> & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest]: (DeleteFolderMembershipRequest & Omit<DeleteFolderMembershipRequest, "AwsAccountId"> & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest)[K]
    }>): Request<DeleteFolderMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFolderMembership(
          this.ops["DeleteFolderMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest & keyof Omit<DeleteGroupRequest, "AwsAccountId"> & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest]: (DeleteGroupRequest & Omit<DeleteGroupRequest, "AwsAccountId"> & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest)[K]
    }>): Request<DeleteGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroup(
          this.ops["DeleteGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGroupMembership(partialParams: ToOptional<{
      [K in keyof DeleteGroupMembershipRequest & keyof Omit<DeleteGroupMembershipRequest, "AwsAccountId"> & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest]: (DeleteGroupMembershipRequest & Omit<DeleteGroupMembershipRequest, "AwsAccountId"> & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest)[K]
    }>): Request<DeleteGroupMembershipResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroupMembership(
          this.ops["DeleteGroupMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof DeleteIAMPolicyAssignmentRequest & keyof Omit<DeleteIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest]: (DeleteIAMPolicyAssignmentRequest & Omit<DeleteIAMPolicyAssignmentRequest, "AwsAccountId"> & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest)[K]
    }>): Request<DeleteIAMPolicyAssignmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIAMPolicyAssignment(
          this.ops["DeleteIAMPolicyAssignment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNamespace(partialParams: ToOptional<{
      [K in keyof DeleteNamespaceRequest & keyof Omit<DeleteNamespaceRequest, "AwsAccountId"> & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest]: (DeleteNamespaceRequest & Omit<DeleteNamespaceRequest, "AwsAccountId"> & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest)[K]
    }>): Request<DeleteNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNamespace(
          this.ops["DeleteNamespace"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTemplate(partialParams: ToOptional<{
      [K in keyof DeleteTemplateRequest & keyof Omit<DeleteTemplateRequest, "AwsAccountId"> & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest]: (DeleteTemplateRequest & Omit<DeleteTemplateRequest, "AwsAccountId"> & DeleteTemplateRequest & DeleteTemplateRequest & DeleteTemplateRequest & DeleteTemplateRequest & DeleteTemplateRequest & DeleteTemplateRequest & DeleteTemplateRequest)[K]
    }>): Request<DeleteTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTemplate(
          this.ops["DeleteTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTemplateAlias(partialParams: ToOptional<{
      [K in keyof DeleteTemplateAliasRequest & keyof Omit<DeleteTemplateAliasRequest, "AwsAccountId"> & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest]: (DeleteTemplateAliasRequest & Omit<DeleteTemplateAliasRequest, "AwsAccountId"> & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest)[K]
    }>): Request<DeleteTemplateAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTemplateAlias(
          this.ops["DeleteTemplateAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTheme(partialParams: ToOptional<{
      [K in keyof DeleteThemeRequest & keyof Omit<DeleteThemeRequest, "AwsAccountId"> & keyof DeleteThemeRequest & keyof DeleteThemeRequest & keyof DeleteThemeRequest & keyof DeleteThemeRequest & keyof DeleteThemeRequest & keyof DeleteThemeRequest & keyof DeleteThemeRequest]: (DeleteThemeRequest & Omit<DeleteThemeRequest, "AwsAccountId"> & DeleteThemeRequest & DeleteThemeRequest & DeleteThemeRequest & DeleteThemeRequest & DeleteThemeRequest & DeleteThemeRequest & DeleteThemeRequest)[K]
    }>): Request<DeleteThemeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTheme(
          this.ops["DeleteTheme"].applicator.apply(partialParams)
        );
    }

    invokeDeleteThemeAlias(partialParams: ToOptional<{
      [K in keyof DeleteThemeAliasRequest & keyof Omit<DeleteThemeAliasRequest, "AwsAccountId"> & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest]: (DeleteThemeAliasRequest & Omit<DeleteThemeAliasRequest, "AwsAccountId"> & DeleteThemeAliasRequest & DeleteThemeAliasRequest & DeleteThemeAliasRequest & DeleteThemeAliasRequest & DeleteThemeAliasRequest & DeleteThemeAliasRequest & DeleteThemeAliasRequest)[K]
    }>): Request<DeleteThemeAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThemeAlias(
          this.ops["DeleteThemeAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof Omit<DeleteUserRequest, "AwsAccountId"> & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & Omit<DeleteUserRequest, "AwsAccountId"> & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): Request<DeleteUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserByPrincipalId(partialParams: ToOptional<{
      [K in keyof DeleteUserByPrincipalIdRequest & keyof Omit<DeleteUserByPrincipalIdRequest, "AwsAccountId"> & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest]: (DeleteUserByPrincipalIdRequest & Omit<DeleteUserByPrincipalIdRequest, "AwsAccountId"> & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest)[K]
    }>): Request<DeleteUserByPrincipalIdResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserByPrincipalId(
          this.ops["DeleteUserByPrincipalId"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAccountCustomization(partialParams: ToOptional<{
      [K in keyof DescribeAccountCustomizationRequest & keyof Omit<DescribeAccountCustomizationRequest, "AwsAccountId"> & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest]: (DescribeAccountCustomizationRequest & Omit<DescribeAccountCustomizationRequest, "AwsAccountId"> & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest)[K]
    }>): Request<DescribeAccountCustomizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccountCustomization(
          this.ops["DescribeAccountCustomization"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAccountSettings(partialParams: ToOptional<{
      [K in keyof DescribeAccountSettingsRequest & keyof Omit<DescribeAccountSettingsRequest, "AwsAccountId"> & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest]: (DescribeAccountSettingsRequest & Omit<DescribeAccountSettingsRequest, "AwsAccountId"> & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest)[K]
    }>): Request<DescribeAccountSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccountSettings(
          this.ops["DescribeAccountSettings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAnalysis(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisRequest & keyof Omit<DescribeAnalysisRequest, "AwsAccountId"> & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest]: (DescribeAnalysisRequest & Omit<DescribeAnalysisRequest, "AwsAccountId"> & DescribeAnalysisRequest & DescribeAnalysisRequest & DescribeAnalysisRequest & DescribeAnalysisRequest & DescribeAnalysisRequest & DescribeAnalysisRequest & DescribeAnalysisRequest)[K]
    }>): Request<DescribeAnalysisResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAnalysis(
          this.ops["DescribeAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAnalysisPermissions(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisPermissionsRequest & keyof Omit<DescribeAnalysisPermissionsRequest, "AwsAccountId"> & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest]: (DescribeAnalysisPermissionsRequest & Omit<DescribeAnalysisPermissionsRequest, "AwsAccountId"> & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest)[K]
    }>): Request<DescribeAnalysisPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAnalysisPermissions(
          this.ops["DescribeAnalysisPermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDashboard(partialParams: ToOptional<{
      [K in keyof DescribeDashboardRequest & keyof Omit<DescribeDashboardRequest, "AwsAccountId"> & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest]: (DescribeDashboardRequest & Omit<DescribeDashboardRequest, "AwsAccountId"> & DescribeDashboardRequest & DescribeDashboardRequest & DescribeDashboardRequest & DescribeDashboardRequest & DescribeDashboardRequest & DescribeDashboardRequest & DescribeDashboardRequest)[K]
    }>): Request<DescribeDashboardResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDashboard(
          this.ops["DescribeDashboard"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDashboardPermissions(partialParams: ToOptional<{
      [K in keyof DescribeDashboardPermissionsRequest & keyof Omit<DescribeDashboardPermissionsRequest, "AwsAccountId"> & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest]: (DescribeDashboardPermissionsRequest & Omit<DescribeDashboardPermissionsRequest, "AwsAccountId"> & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest)[K]
    }>): Request<DescribeDashboardPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDashboardPermissions(
          this.ops["DescribeDashboardPermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDataSet(partialParams: ToOptional<{
      [K in keyof DescribeDataSetRequest & keyof Omit<DescribeDataSetRequest, "AwsAccountId"> & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest]: (DescribeDataSetRequest & Omit<DescribeDataSetRequest, "AwsAccountId"> & DescribeDataSetRequest & DescribeDataSetRequest & DescribeDataSetRequest & DescribeDataSetRequest & DescribeDataSetRequest & DescribeDataSetRequest & DescribeDataSetRequest)[K]
    }>): Request<DescribeDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSet(
          this.ops["DescribeDataSet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDataSetPermissions(partialParams: ToOptional<{
      [K in keyof DescribeDataSetPermissionsRequest & keyof Omit<DescribeDataSetPermissionsRequest, "AwsAccountId"> & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest]: (DescribeDataSetPermissionsRequest & Omit<DescribeDataSetPermissionsRequest, "AwsAccountId"> & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest)[K]
    }>): Request<DescribeDataSetPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSetPermissions(
          this.ops["DescribeDataSetPermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDataSource(partialParams: ToOptional<{
      [K in keyof DescribeDataSourceRequest & keyof Omit<DescribeDataSourceRequest, "AwsAccountId"> & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest]: (DescribeDataSourceRequest & Omit<DescribeDataSourceRequest, "AwsAccountId"> & DescribeDataSourceRequest & DescribeDataSourceRequest & DescribeDataSourceRequest & DescribeDataSourceRequest & DescribeDataSourceRequest & DescribeDataSourceRequest & DescribeDataSourceRequest)[K]
    }>): Request<DescribeDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSource(
          this.ops["DescribeDataSource"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDataSourcePermissions(partialParams: ToOptional<{
      [K in keyof DescribeDataSourcePermissionsRequest & keyof Omit<DescribeDataSourcePermissionsRequest, "AwsAccountId"> & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest]: (DescribeDataSourcePermissionsRequest & Omit<DescribeDataSourcePermissionsRequest, "AwsAccountId"> & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest)[K]
    }>): Request<DescribeDataSourcePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSourcePermissions(
          this.ops["DescribeDataSourcePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFolder(partialParams: ToOptional<{
      [K in keyof DescribeFolderRequest & keyof Omit<DescribeFolderRequest, "AwsAccountId"> & keyof DescribeFolderRequest & keyof DescribeFolderRequest & keyof DescribeFolderRequest & keyof DescribeFolderRequest & keyof DescribeFolderRequest & keyof DescribeFolderRequest & keyof DescribeFolderRequest]: (DescribeFolderRequest & Omit<DescribeFolderRequest, "AwsAccountId"> & DescribeFolderRequest & DescribeFolderRequest & DescribeFolderRequest & DescribeFolderRequest & DescribeFolderRequest & DescribeFolderRequest & DescribeFolderRequest)[K]
    }>): Request<DescribeFolderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFolder(
          this.ops["DescribeFolder"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFolderPermissions(partialParams: ToOptional<{
      [K in keyof DescribeFolderPermissionsRequest & keyof Omit<DescribeFolderPermissionsRequest, "AwsAccountId"> & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest]: (DescribeFolderPermissionsRequest & Omit<DescribeFolderPermissionsRequest, "AwsAccountId"> & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest)[K]
    }>): Request<DescribeFolderPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFolderPermissions(
          this.ops["DescribeFolderPermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFolderResolvedPermissions(partialParams: ToOptional<{
      [K in keyof DescribeFolderResolvedPermissionsRequest & keyof Omit<DescribeFolderResolvedPermissionsRequest, "AwsAccountId"> & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest]: (DescribeFolderResolvedPermissionsRequest & Omit<DescribeFolderResolvedPermissionsRequest, "AwsAccountId"> & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest)[K]
    }>): Request<DescribeFolderResolvedPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFolderResolvedPermissions(
          this.ops["DescribeFolderResolvedPermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGroup(partialParams: ToOptional<{
      [K in keyof DescribeGroupRequest & keyof Omit<DescribeGroupRequest, "AwsAccountId"> & keyof DescribeGroupRequest & keyof DescribeGroupRequest & keyof DescribeGroupRequest & keyof DescribeGroupRequest & keyof DescribeGroupRequest & keyof DescribeGroupRequest & keyof DescribeGroupRequest]: (DescribeGroupRequest & Omit<DescribeGroupRequest, "AwsAccountId"> & DescribeGroupRequest & DescribeGroupRequest & DescribeGroupRequest & DescribeGroupRequest & DescribeGroupRequest & DescribeGroupRequest & DescribeGroupRequest)[K]
    }>): Request<DescribeGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGroup(
          this.ops["DescribeGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof DescribeIAMPolicyAssignmentRequest & keyof Omit<DescribeIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest]: (DescribeIAMPolicyAssignmentRequest & Omit<DescribeIAMPolicyAssignmentRequest, "AwsAccountId"> & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest)[K]
    }>): Request<DescribeIAMPolicyAssignmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIAMPolicyAssignment(
          this.ops["DescribeIAMPolicyAssignment"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIngestion(partialParams: ToOptional<{
      [K in keyof DescribeIngestionRequest & keyof Omit<DescribeIngestionRequest, "AwsAccountId"> & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest]: (DescribeIngestionRequest & Omit<DescribeIngestionRequest, "AwsAccountId"> & DescribeIngestionRequest & DescribeIngestionRequest & DescribeIngestionRequest & DescribeIngestionRequest & DescribeIngestionRequest & DescribeIngestionRequest & DescribeIngestionRequest)[K]
    }>): Request<DescribeIngestionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIngestion(
          this.ops["DescribeIngestion"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIpRestriction(partialParams: ToOptional<{
      [K in keyof DescribeIpRestrictionRequest & keyof Omit<DescribeIpRestrictionRequest, "AwsAccountId"> & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest]: (DescribeIpRestrictionRequest & Omit<DescribeIpRestrictionRequest, "AwsAccountId"> & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest)[K]
    }>): Request<DescribeIpRestrictionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIpRestriction(
          this.ops["DescribeIpRestriction"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNamespace(partialParams: ToOptional<{
      [K in keyof DescribeNamespaceRequest & keyof Omit<DescribeNamespaceRequest, "AwsAccountId"> & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest]: (DescribeNamespaceRequest & Omit<DescribeNamespaceRequest, "AwsAccountId"> & DescribeNamespaceRequest & DescribeNamespaceRequest & DescribeNamespaceRequest & DescribeNamespaceRequest & DescribeNamespaceRequest & DescribeNamespaceRequest & DescribeNamespaceRequest)[K]
    }>): Request<DescribeNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNamespace(
          this.ops["DescribeNamespace"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTemplate(partialParams: ToOptional<{
      [K in keyof DescribeTemplateRequest & keyof Omit<DescribeTemplateRequest, "AwsAccountId"> & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest]: (DescribeTemplateRequest & Omit<DescribeTemplateRequest, "AwsAccountId"> & DescribeTemplateRequest & DescribeTemplateRequest & DescribeTemplateRequest & DescribeTemplateRequest & DescribeTemplateRequest & DescribeTemplateRequest & DescribeTemplateRequest)[K]
    }>): Request<DescribeTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTemplate(
          this.ops["DescribeTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTemplateAlias(partialParams: ToOptional<{
      [K in keyof DescribeTemplateAliasRequest & keyof Omit<DescribeTemplateAliasRequest, "AwsAccountId"> & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest]: (DescribeTemplateAliasRequest & Omit<DescribeTemplateAliasRequest, "AwsAccountId"> & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest)[K]
    }>): Request<DescribeTemplateAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTemplateAlias(
          this.ops["DescribeTemplateAlias"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTemplatePermissions(partialParams: ToOptional<{
      [K in keyof DescribeTemplatePermissionsRequest & keyof Omit<DescribeTemplatePermissionsRequest, "AwsAccountId"> & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest]: (DescribeTemplatePermissionsRequest & Omit<DescribeTemplatePermissionsRequest, "AwsAccountId"> & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest)[K]
    }>): Request<DescribeTemplatePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTemplatePermissions(
          this.ops["DescribeTemplatePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTheme(partialParams: ToOptional<{
      [K in keyof DescribeThemeRequest & keyof Omit<DescribeThemeRequest, "AwsAccountId"> & keyof DescribeThemeRequest & keyof DescribeThemeRequest & keyof DescribeThemeRequest & keyof DescribeThemeRequest & keyof DescribeThemeRequest & keyof DescribeThemeRequest & keyof DescribeThemeRequest]: (DescribeThemeRequest & Omit<DescribeThemeRequest, "AwsAccountId"> & DescribeThemeRequest & DescribeThemeRequest & DescribeThemeRequest & DescribeThemeRequest & DescribeThemeRequest & DescribeThemeRequest & DescribeThemeRequest)[K]
    }>): Request<DescribeThemeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTheme(
          this.ops["DescribeTheme"].applicator.apply(partialParams)
        );
    }

    invokeDescribeThemeAlias(partialParams: ToOptional<{
      [K in keyof DescribeThemeAliasRequest & keyof Omit<DescribeThemeAliasRequest, "AwsAccountId"> & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest]: (DescribeThemeAliasRequest & Omit<DescribeThemeAliasRequest, "AwsAccountId"> & DescribeThemeAliasRequest & DescribeThemeAliasRequest & DescribeThemeAliasRequest & DescribeThemeAliasRequest & DescribeThemeAliasRequest & DescribeThemeAliasRequest & DescribeThemeAliasRequest)[K]
    }>): Request<DescribeThemeAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThemeAlias(
          this.ops["DescribeThemeAlias"].applicator.apply(partialParams)
        );
    }

    invokeDescribeThemePermissions(partialParams: ToOptional<{
      [K in keyof DescribeThemePermissionsRequest & keyof Omit<DescribeThemePermissionsRequest, "AwsAccountId"> & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest]: (DescribeThemePermissionsRequest & Omit<DescribeThemePermissionsRequest, "AwsAccountId"> & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest)[K]
    }>): Request<DescribeThemePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThemePermissions(
          this.ops["DescribeThemePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof Omit<DescribeUserRequest, "AwsAccountId"> & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & Omit<DescribeUserRequest, "AwsAccountId"> & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].applicator.apply(partialParams)
        );
    }

    invokeGenerateEmbedUrlForAnonymousUser(partialParams: ToOptional<{
      [K in keyof GenerateEmbedUrlForAnonymousUserRequest & keyof Omit<GenerateEmbedUrlForAnonymousUserRequest, "AwsAccountId"> & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest]: (GenerateEmbedUrlForAnonymousUserRequest & Omit<GenerateEmbedUrlForAnonymousUserRequest, "AwsAccountId"> & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest)[K]
    }>): Request<GenerateEmbedUrlForAnonymousUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateEmbedUrlForAnonymousUser(
          this.ops["GenerateEmbedUrlForAnonymousUser"].applicator.apply(partialParams)
        );
    }

    invokeGenerateEmbedUrlForRegisteredUser(partialParams: ToOptional<{
      [K in keyof Omit<GenerateEmbedUrlForRegisteredUserRequest, "UserArn"> & keyof Omit<GenerateEmbedUrlForRegisteredUserRequest, "AwsAccountId"> & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest]: (Omit<GenerateEmbedUrlForRegisteredUserRequest, "UserArn"> & Omit<GenerateEmbedUrlForRegisteredUserRequest, "AwsAccountId"> & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest)[K]
    }>): Request<GenerateEmbedUrlForRegisteredUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateEmbedUrlForRegisteredUser(
          this.ops["GenerateEmbedUrlForRegisteredUser"].applicator.apply(partialParams)
        );
    }

    invokeGetDashboardEmbedUrl(partialParams: ToOptional<{
      [K in keyof GetDashboardEmbedUrlRequest & keyof Omit<GetDashboardEmbedUrlRequest, "AwsAccountId"> & keyof GetDashboardEmbedUrlRequest & keyof GetDashboardEmbedUrlRequest & keyof Omit<GetDashboardEmbedUrlRequest, "IdentityType"> & keyof GetDashboardEmbedUrlRequest & keyof GetDashboardEmbedUrlRequest & keyof GetDashboardEmbedUrlRequest & keyof GetDashboardEmbedUrlRequest]: (GetDashboardEmbedUrlRequest & Omit<GetDashboardEmbedUrlRequest, "AwsAccountId"> & GetDashboardEmbedUrlRequest & GetDashboardEmbedUrlRequest & Omit<GetDashboardEmbedUrlRequest, "IdentityType"> & GetDashboardEmbedUrlRequest & GetDashboardEmbedUrlRequest & GetDashboardEmbedUrlRequest & GetDashboardEmbedUrlRequest)[K]
    }>): Request<GetDashboardEmbedUrlResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDashboardEmbedUrl(
          this.ops["GetDashboardEmbedUrl"].applicator.apply(partialParams)
        );
    }

    invokeGetSessionEmbedUrl(partialParams: ToOptional<{
      [K in keyof GetSessionEmbedUrlRequest & keyof Omit<GetSessionEmbedUrlRequest, "AwsAccountId"> & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest]: (GetSessionEmbedUrlRequest & Omit<GetSessionEmbedUrlRequest, "AwsAccountId"> & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest)[K]
    }>): Request<GetSessionEmbedUrlResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSessionEmbedUrl(
          this.ops["GetSessionEmbedUrl"].applicator.apply(partialParams)
        );
    }

    invokeListAnalyses(partialParams: ToOptional<{
      [K in keyof ListAnalysesRequest & keyof Omit<ListAnalysesRequest, "AwsAccountId"> & keyof ListAnalysesRequest & keyof ListAnalysesRequest & keyof ListAnalysesRequest & keyof ListAnalysesRequest & keyof ListAnalysesRequest & keyof ListAnalysesRequest & keyof ListAnalysesRequest]: (ListAnalysesRequest & Omit<ListAnalysesRequest, "AwsAccountId"> & ListAnalysesRequest & ListAnalysesRequest & ListAnalysesRequest & ListAnalysesRequest & ListAnalysesRequest & ListAnalysesRequest & ListAnalysesRequest)[K]
    }>): Request<ListAnalysesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAnalyses(
          this.ops["ListAnalyses"].applicator.apply(partialParams)
        );
    }

    invokeListDashboardVersions(partialParams: ToOptional<{
      [K in keyof ListDashboardVersionsRequest & keyof Omit<ListDashboardVersionsRequest, "AwsAccountId"> & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest]: (ListDashboardVersionsRequest & Omit<ListDashboardVersionsRequest, "AwsAccountId"> & ListDashboardVersionsRequest & ListDashboardVersionsRequest & ListDashboardVersionsRequest & ListDashboardVersionsRequest & ListDashboardVersionsRequest & ListDashboardVersionsRequest & ListDashboardVersionsRequest)[K]
    }>): Request<ListDashboardVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDashboardVersions(
          this.ops["ListDashboardVersions"].applicator.apply(partialParams)
        );
    }

    invokeListDashboards(partialParams: ToOptional<{
      [K in keyof ListDashboardsRequest & keyof Omit<ListDashboardsRequest, "AwsAccountId"> & keyof ListDashboardsRequest & keyof ListDashboardsRequest & keyof ListDashboardsRequest & keyof ListDashboardsRequest & keyof ListDashboardsRequest & keyof ListDashboardsRequest & keyof ListDashboardsRequest]: (ListDashboardsRequest & Omit<ListDashboardsRequest, "AwsAccountId"> & ListDashboardsRequest & ListDashboardsRequest & ListDashboardsRequest & ListDashboardsRequest & ListDashboardsRequest & ListDashboardsRequest & ListDashboardsRequest)[K]
    }>): Request<ListDashboardsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDashboards(
          this.ops["ListDashboards"].applicator.apply(partialParams)
        );
    }

    invokeListDataSets(partialParams: ToOptional<{
      [K in keyof ListDataSetsRequest & keyof Omit<ListDataSetsRequest, "AwsAccountId"> & keyof ListDataSetsRequest & keyof ListDataSetsRequest & keyof ListDataSetsRequest & keyof ListDataSetsRequest & keyof ListDataSetsRequest & keyof ListDataSetsRequest & keyof ListDataSetsRequest]: (ListDataSetsRequest & Omit<ListDataSetsRequest, "AwsAccountId"> & ListDataSetsRequest & ListDataSetsRequest & ListDataSetsRequest & ListDataSetsRequest & ListDataSetsRequest & ListDataSetsRequest & ListDataSetsRequest)[K]
    }>): Request<ListDataSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDataSets(
          this.ops["ListDataSets"].applicator.apply(partialParams)
        );
    }

    invokeListDataSources(partialParams: ToOptional<{
      [K in keyof ListDataSourcesRequest & keyof Omit<ListDataSourcesRequest, "AwsAccountId"> & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest]: (ListDataSourcesRequest & Omit<ListDataSourcesRequest, "AwsAccountId"> & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest)[K]
    }>): Request<ListDataSourcesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDataSources(
          this.ops["ListDataSources"].applicator.apply(partialParams)
        );
    }

    invokeListFolderMembers(partialParams: ToOptional<{
      [K in keyof ListFolderMembersRequest & keyof Omit<ListFolderMembersRequest, "AwsAccountId"> & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest]: (ListFolderMembersRequest & Omit<ListFolderMembersRequest, "AwsAccountId"> & ListFolderMembersRequest & ListFolderMembersRequest & ListFolderMembersRequest & ListFolderMembersRequest & ListFolderMembersRequest & ListFolderMembersRequest & ListFolderMembersRequest)[K]
    }>): Request<ListFolderMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFolderMembers(
          this.ops["ListFolderMembers"].applicator.apply(partialParams)
        );
    }

    invokeListFolders(partialParams: ToOptional<{
      [K in keyof ListFoldersRequest & keyof Omit<ListFoldersRequest, "AwsAccountId"> & keyof ListFoldersRequest & keyof ListFoldersRequest & keyof ListFoldersRequest & keyof ListFoldersRequest & keyof ListFoldersRequest & keyof ListFoldersRequest & keyof ListFoldersRequest]: (ListFoldersRequest & Omit<ListFoldersRequest, "AwsAccountId"> & ListFoldersRequest & ListFoldersRequest & ListFoldersRequest & ListFoldersRequest & ListFoldersRequest & ListFoldersRequest & ListFoldersRequest)[K]
    }>): Request<ListFoldersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFolders(
          this.ops["ListFolders"].applicator.apply(partialParams)
        );
    }

    invokeListGroupMemberships(partialParams: ToOptional<{
      [K in keyof ListGroupMembershipsRequest & keyof Omit<ListGroupMembershipsRequest, "AwsAccountId"> & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest]: (ListGroupMembershipsRequest & Omit<ListGroupMembershipsRequest, "AwsAccountId"> & ListGroupMembershipsRequest & ListGroupMembershipsRequest & ListGroupMembershipsRequest & ListGroupMembershipsRequest & ListGroupMembershipsRequest & ListGroupMembershipsRequest & ListGroupMembershipsRequest)[K]
    }>): Request<ListGroupMembershipsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupMemberships(
          this.ops["ListGroupMemberships"].applicator.apply(partialParams)
        );
    }

    invokeListGroups(partialParams: ToOptional<{
      [K in keyof ListGroupsRequest & keyof Omit<ListGroupsRequest, "AwsAccountId"> & keyof ListGroupsRequest & keyof ListGroupsRequest & keyof ListGroupsRequest & keyof ListGroupsRequest & keyof ListGroupsRequest & keyof ListGroupsRequest & keyof ListGroupsRequest]: (ListGroupsRequest & Omit<ListGroupsRequest, "AwsAccountId"> & ListGroupsRequest & ListGroupsRequest & ListGroupsRequest & ListGroupsRequest & ListGroupsRequest & ListGroupsRequest & ListGroupsRequest)[K]
    }>): Request<ListGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroups(
          this.ops["ListGroups"].applicator.apply(partialParams)
        );
    }

    invokeListIAMPolicyAssignments(partialParams: ToOptional<{
      [K in keyof ListIAMPolicyAssignmentsRequest & keyof Omit<ListIAMPolicyAssignmentsRequest, "AwsAccountId"> & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest]: (ListIAMPolicyAssignmentsRequest & Omit<ListIAMPolicyAssignmentsRequest, "AwsAccountId"> & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest)[K]
    }>): Request<ListIAMPolicyAssignmentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIAMPolicyAssignments(
          this.ops["ListIAMPolicyAssignments"].applicator.apply(partialParams)
        );
    }

    invokeListIAMPolicyAssignmentsForUser(partialParams: ToOptional<{
      [K in keyof ListIAMPolicyAssignmentsForUserRequest & keyof Omit<ListIAMPolicyAssignmentsForUserRequest, "AwsAccountId"> & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest]: (ListIAMPolicyAssignmentsForUserRequest & Omit<ListIAMPolicyAssignmentsForUserRequest, "AwsAccountId"> & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest)[K]
    }>): Request<ListIAMPolicyAssignmentsForUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIAMPolicyAssignmentsForUser(
          this.ops["ListIAMPolicyAssignmentsForUser"].applicator.apply(partialParams)
        );
    }

    invokeListIngestions(partialParams: ToOptional<{
      [K in keyof ListIngestionsRequest & keyof Omit<ListIngestionsRequest, "AwsAccountId"> & keyof ListIngestionsRequest & keyof ListIngestionsRequest & keyof ListIngestionsRequest & keyof ListIngestionsRequest & keyof ListIngestionsRequest & keyof ListIngestionsRequest & keyof ListIngestionsRequest]: (ListIngestionsRequest & Omit<ListIngestionsRequest, "AwsAccountId"> & ListIngestionsRequest & ListIngestionsRequest & ListIngestionsRequest & ListIngestionsRequest & ListIngestionsRequest & ListIngestionsRequest & ListIngestionsRequest)[K]
    }>): Request<ListIngestionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIngestions(
          this.ops["ListIngestions"].applicator.apply(partialParams)
        );
    }

    invokeListNamespaces(partialParams: ToOptional<{
      [K in keyof ListNamespacesRequest & keyof Omit<ListNamespacesRequest, "AwsAccountId"> & keyof ListNamespacesRequest & keyof ListNamespacesRequest & keyof ListNamespacesRequest & keyof ListNamespacesRequest & keyof ListNamespacesRequest & keyof ListNamespacesRequest & keyof ListNamespacesRequest]: (ListNamespacesRequest & Omit<ListNamespacesRequest, "AwsAccountId"> & ListNamespacesRequest & ListNamespacesRequest & ListNamespacesRequest & ListNamespacesRequest & ListNamespacesRequest & ListNamespacesRequest & ListNamespacesRequest)[K]
    }>): Request<ListNamespacesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listNamespaces(
          this.ops["ListNamespaces"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTemplateAliases(partialParams: ToOptional<{
      [K in keyof ListTemplateAliasesRequest & keyof Omit<ListTemplateAliasesRequest, "AwsAccountId"> & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest]: (ListTemplateAliasesRequest & Omit<ListTemplateAliasesRequest, "AwsAccountId"> & ListTemplateAliasesRequest & ListTemplateAliasesRequest & ListTemplateAliasesRequest & ListTemplateAliasesRequest & ListTemplateAliasesRequest & ListTemplateAliasesRequest & ListTemplateAliasesRequest)[K]
    }>): Request<ListTemplateAliasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplateAliases(
          this.ops["ListTemplateAliases"].applicator.apply(partialParams)
        );
    }

    invokeListTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListTemplateVersionsRequest & keyof Omit<ListTemplateVersionsRequest, "AwsAccountId"> & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest]: (ListTemplateVersionsRequest & Omit<ListTemplateVersionsRequest, "AwsAccountId"> & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest)[K]
    }>): Request<ListTemplateVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplateVersions(
          this.ops["ListTemplateVersions"].applicator.apply(partialParams)
        );
    }

    invokeListTemplates(partialParams: ToOptional<{
      [K in keyof ListTemplatesRequest & keyof Omit<ListTemplatesRequest, "AwsAccountId"> & keyof ListTemplatesRequest & keyof ListTemplatesRequest & keyof ListTemplatesRequest & keyof ListTemplatesRequest & keyof ListTemplatesRequest & keyof ListTemplatesRequest & keyof ListTemplatesRequest]: (ListTemplatesRequest & Omit<ListTemplatesRequest, "AwsAccountId"> & ListTemplatesRequest & ListTemplatesRequest & ListTemplatesRequest & ListTemplatesRequest & ListTemplatesRequest & ListTemplatesRequest & ListTemplatesRequest)[K]
    }>): Request<ListTemplatesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplates(
          this.ops["ListTemplates"].applicator.apply(partialParams)
        );
    }

    invokeListThemeAliases(partialParams: ToOptional<{
      [K in keyof ListThemeAliasesRequest & keyof Omit<ListThemeAliasesRequest, "AwsAccountId"> & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest]: (ListThemeAliasesRequest & Omit<ListThemeAliasesRequest, "AwsAccountId"> & ListThemeAliasesRequest & ListThemeAliasesRequest & ListThemeAliasesRequest & ListThemeAliasesRequest & ListThemeAliasesRequest & ListThemeAliasesRequest & ListThemeAliasesRequest)[K]
    }>): Request<ListThemeAliasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThemeAliases(
          this.ops["ListThemeAliases"].applicator.apply(partialParams)
        );
    }

    invokeListThemeVersions(partialParams: ToOptional<{
      [K in keyof ListThemeVersionsRequest & keyof Omit<ListThemeVersionsRequest, "AwsAccountId"> & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest]: (ListThemeVersionsRequest & Omit<ListThemeVersionsRequest, "AwsAccountId"> & ListThemeVersionsRequest & ListThemeVersionsRequest & ListThemeVersionsRequest & ListThemeVersionsRequest & ListThemeVersionsRequest & ListThemeVersionsRequest & ListThemeVersionsRequest)[K]
    }>): Request<ListThemeVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThemeVersions(
          this.ops["ListThemeVersions"].applicator.apply(partialParams)
        );
    }

    invokeListThemes(partialParams: ToOptional<{
      [K in keyof ListThemesRequest & keyof Omit<ListThemesRequest, "AwsAccountId"> & keyof ListThemesRequest & keyof ListThemesRequest & keyof ListThemesRequest & keyof ListThemesRequest & keyof ListThemesRequest & keyof ListThemesRequest & keyof ListThemesRequest]: (ListThemesRequest & Omit<ListThemesRequest, "AwsAccountId"> & ListThemesRequest & ListThemesRequest & ListThemesRequest & ListThemesRequest & ListThemesRequest & ListThemesRequest & ListThemesRequest)[K]
    }>): Request<ListThemesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThemes(
          this.ops["ListThemes"].applicator.apply(partialParams)
        );
    }

    invokeListUserGroups(partialParams: ToOptional<{
      [K in keyof ListUserGroupsRequest & keyof Omit<ListUserGroupsRequest, "AwsAccountId"> & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest]: (ListUserGroupsRequest & Omit<ListUserGroupsRequest, "AwsAccountId"> & ListUserGroupsRequest & ListUserGroupsRequest & ListUserGroupsRequest & ListUserGroupsRequest & ListUserGroupsRequest & ListUserGroupsRequest & ListUserGroupsRequest)[K]
    }>): Request<ListUserGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserGroups(
          this.ops["ListUserGroups"].applicator.apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof Omit<ListUsersRequest, "AwsAccountId"> & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & Omit<ListUsersRequest, "AwsAccountId"> & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].applicator.apply(partialParams)
        );
    }

    invokeRegisterUser(partialParams: ToOptional<{
      [K in keyof RegisterUserRequest & keyof Omit<RegisterUserRequest, "AwsAccountId"> & keyof RegisterUserRequest & keyof RegisterUserRequest & keyof Omit<RegisterUserRequest, "IdentityType"> & keyof Omit<RegisterUserRequest, "Namespace"> & keyof RegisterUserRequest & keyof RegisterUserRequest & keyof RegisterUserRequest]: (RegisterUserRequest & Omit<RegisterUserRequest, "AwsAccountId"> & RegisterUserRequest & RegisterUserRequest & Omit<RegisterUserRequest, "IdentityType"> & Omit<RegisterUserRequest, "Namespace"> & RegisterUserRequest & RegisterUserRequest & RegisterUserRequest)[K]
    }>): Request<RegisterUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerUser(
          this.ops["RegisterUser"].applicator.apply(partialParams)
        );
    }

    invokeRestoreAnalysis(partialParams: ToOptional<{
      [K in keyof RestoreAnalysisRequest & keyof Omit<RestoreAnalysisRequest, "AwsAccountId"> & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest]: (RestoreAnalysisRequest & Omit<RestoreAnalysisRequest, "AwsAccountId"> & RestoreAnalysisRequest & RestoreAnalysisRequest & RestoreAnalysisRequest & RestoreAnalysisRequest & RestoreAnalysisRequest & RestoreAnalysisRequest & RestoreAnalysisRequest)[K]
    }>): Request<RestoreAnalysisResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreAnalysis(
          this.ops["RestoreAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeSearchAnalyses(partialParams: ToOptional<{
      [K in keyof SearchAnalysesRequest & keyof Omit<SearchAnalysesRequest, "AwsAccountId"> & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest]: (SearchAnalysesRequest & Omit<SearchAnalysesRequest, "AwsAccountId"> & SearchAnalysesRequest & SearchAnalysesRequest & SearchAnalysesRequest & SearchAnalysesRequest & SearchAnalysesRequest & SearchAnalysesRequest & SearchAnalysesRequest)[K]
    }>): Request<SearchAnalysesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchAnalyses(
          this.ops["SearchAnalyses"].applicator.apply(partialParams)
        );
    }

    invokeSearchDashboards(partialParams: ToOptional<{
      [K in keyof SearchDashboardsRequest & keyof Omit<SearchDashboardsRequest, "AwsAccountId"> & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest]: (SearchDashboardsRequest & Omit<SearchDashboardsRequest, "AwsAccountId"> & SearchDashboardsRequest & SearchDashboardsRequest & SearchDashboardsRequest & SearchDashboardsRequest & SearchDashboardsRequest & SearchDashboardsRequest & SearchDashboardsRequest)[K]
    }>): Request<SearchDashboardsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchDashboards(
          this.ops["SearchDashboards"].applicator.apply(partialParams)
        );
    }

    invokeSearchFolders(partialParams: ToOptional<{
      [K in keyof SearchFoldersRequest & keyof Omit<SearchFoldersRequest, "AwsAccountId"> & keyof SearchFoldersRequest & keyof SearchFoldersRequest & keyof SearchFoldersRequest & keyof SearchFoldersRequest & keyof SearchFoldersRequest & keyof SearchFoldersRequest & keyof SearchFoldersRequest]: (SearchFoldersRequest & Omit<SearchFoldersRequest, "AwsAccountId"> & SearchFoldersRequest & SearchFoldersRequest & SearchFoldersRequest & SearchFoldersRequest & SearchFoldersRequest & SearchFoldersRequest & SearchFoldersRequest)[K]
    }>): Request<SearchFoldersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchFolders(
          this.ops["SearchFolders"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccountCustomization(partialParams: ToOptional<{
      [K in keyof UpdateAccountCustomizationRequest & keyof Omit<UpdateAccountCustomizationRequest, "AwsAccountId"> & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest]: (UpdateAccountCustomizationRequest & Omit<UpdateAccountCustomizationRequest, "AwsAccountId"> & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest)[K]
    }>): Request<UpdateAccountCustomizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountCustomization(
          this.ops["UpdateAccountCustomization"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest & keyof Omit<UpdateAccountSettingsRequest, "AwsAccountId"> & keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest & keyof Omit<UpdateAccountSettingsRequest, "DefaultNamespace"> & keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest & Omit<UpdateAccountSettingsRequest, "AwsAccountId"> & UpdateAccountSettingsRequest & UpdateAccountSettingsRequest & UpdateAccountSettingsRequest & Omit<UpdateAccountSettingsRequest, "DefaultNamespace"> & UpdateAccountSettingsRequest & UpdateAccountSettingsRequest & UpdateAccountSettingsRequest)[K]
    }>): Request<UpdateAccountSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountSettings(
          this.ops["UpdateAccountSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAnalysis(partialParams: ToOptional<{
      [K in keyof UpdateAnalysisRequest & keyof Omit<UpdateAnalysisRequest, "AwsAccountId"> & keyof UpdateAnalysisRequest & keyof UpdateAnalysisRequest & keyof UpdateAnalysisRequest & keyof UpdateAnalysisRequest & keyof UpdateAnalysisRequest & keyof UpdateAnalysisRequest & keyof UpdateAnalysisRequest]: (UpdateAnalysisRequest & Omit<UpdateAnalysisRequest, "AwsAccountId"> & UpdateAnalysisRequest & UpdateAnalysisRequest & UpdateAnalysisRequest & UpdateAnalysisRequest & UpdateAnalysisRequest & UpdateAnalysisRequest & UpdateAnalysisRequest)[K]
    }>): Request<UpdateAnalysisResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAnalysis(
          this.ops["UpdateAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAnalysisPermissions(partialParams: ToOptional<{
      [K in keyof UpdateAnalysisPermissionsRequest & keyof Omit<UpdateAnalysisPermissionsRequest, "AwsAccountId"> & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest]: (UpdateAnalysisPermissionsRequest & Omit<UpdateAnalysisPermissionsRequest, "AwsAccountId"> & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest)[K]
    }>): Request<UpdateAnalysisPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAnalysisPermissions(
          this.ops["UpdateAnalysisPermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDashboard(partialParams: ToOptional<{
      [K in keyof UpdateDashboardRequest & keyof Omit<UpdateDashboardRequest, "AwsAccountId"> & keyof UpdateDashboardRequest & keyof UpdateDashboardRequest & keyof UpdateDashboardRequest & keyof UpdateDashboardRequest & keyof UpdateDashboardRequest & keyof UpdateDashboardRequest & keyof UpdateDashboardRequest]: (UpdateDashboardRequest & Omit<UpdateDashboardRequest, "AwsAccountId"> & UpdateDashboardRequest & UpdateDashboardRequest & UpdateDashboardRequest & UpdateDashboardRequest & UpdateDashboardRequest & UpdateDashboardRequest & UpdateDashboardRequest)[K]
    }>): Request<UpdateDashboardResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDashboard(
          this.ops["UpdateDashboard"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDashboardPermissions(partialParams: ToOptional<{
      [K in keyof UpdateDashboardPermissionsRequest & keyof Omit<UpdateDashboardPermissionsRequest, "AwsAccountId"> & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest]: (UpdateDashboardPermissionsRequest & Omit<UpdateDashboardPermissionsRequest, "AwsAccountId"> & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest)[K]
    }>): Request<UpdateDashboardPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDashboardPermissions(
          this.ops["UpdateDashboardPermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDashboardPublishedVersion(partialParams: ToOptional<{
      [K in keyof UpdateDashboardPublishedVersionRequest & keyof Omit<UpdateDashboardPublishedVersionRequest, "AwsAccountId"> & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest]: (UpdateDashboardPublishedVersionRequest & Omit<UpdateDashboardPublishedVersionRequest, "AwsAccountId"> & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest)[K]
    }>): Request<UpdateDashboardPublishedVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDashboardPublishedVersion(
          this.ops["UpdateDashboardPublishedVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataSet(partialParams: ToOptional<{
      [K in keyof UpdateDataSetRequest & keyof Omit<UpdateDataSetRequest, "AwsAccountId"> & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest]: (UpdateDataSetRequest & Omit<UpdateDataSetRequest, "AwsAccountId"> & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest)[K]
    }>): Request<UpdateDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSet(
          this.ops["UpdateDataSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataSetPermissions(partialParams: ToOptional<{
      [K in keyof UpdateDataSetPermissionsRequest & keyof Omit<UpdateDataSetPermissionsRequest, "AwsAccountId"> & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest]: (UpdateDataSetPermissionsRequest & Omit<UpdateDataSetPermissionsRequest, "AwsAccountId"> & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest)[K]
    }>): Request<UpdateDataSetPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSetPermissions(
          this.ops["UpdateDataSetPermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataSource(partialParams: ToOptional<{
      [K in keyof UpdateDataSourceRequest & keyof Omit<UpdateDataSourceRequest, "AwsAccountId"> & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest]: (UpdateDataSourceRequest & Omit<UpdateDataSourceRequest, "AwsAccountId"> & UpdateDataSourceRequest & UpdateDataSourceRequest & UpdateDataSourceRequest & UpdateDataSourceRequest & UpdateDataSourceRequest & UpdateDataSourceRequest & UpdateDataSourceRequest)[K]
    }>): Request<UpdateDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSource(
          this.ops["UpdateDataSource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataSourcePermissions(partialParams: ToOptional<{
      [K in keyof UpdateDataSourcePermissionsRequest & keyof Omit<UpdateDataSourcePermissionsRequest, "AwsAccountId"> & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest]: (UpdateDataSourcePermissionsRequest & Omit<UpdateDataSourcePermissionsRequest, "AwsAccountId"> & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest)[K]
    }>): Request<UpdateDataSourcePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSourcePermissions(
          this.ops["UpdateDataSourcePermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFolder(partialParams: ToOptional<{
      [K in keyof UpdateFolderRequest & keyof Omit<UpdateFolderRequest, "AwsAccountId"> & keyof UpdateFolderRequest & keyof UpdateFolderRequest & keyof UpdateFolderRequest & keyof UpdateFolderRequest & keyof UpdateFolderRequest & keyof UpdateFolderRequest & keyof UpdateFolderRequest]: (UpdateFolderRequest & Omit<UpdateFolderRequest, "AwsAccountId"> & UpdateFolderRequest & UpdateFolderRequest & UpdateFolderRequest & UpdateFolderRequest & UpdateFolderRequest & UpdateFolderRequest & UpdateFolderRequest)[K]
    }>): Request<UpdateFolderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFolder(
          this.ops["UpdateFolder"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFolderPermissions(partialParams: ToOptional<{
      [K in keyof UpdateFolderPermissionsRequest & keyof Omit<UpdateFolderPermissionsRequest, "AwsAccountId"> & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest]: (UpdateFolderPermissionsRequest & Omit<UpdateFolderPermissionsRequest, "AwsAccountId"> & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest)[K]
    }>): Request<UpdateFolderPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFolderPermissions(
          this.ops["UpdateFolderPermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest & keyof Omit<UpdateGroupRequest, "AwsAccountId"> & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof Omit<UpdateGroupRequest, "Namespace"> & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest]: (UpdateGroupRequest & Omit<UpdateGroupRequest, "AwsAccountId"> & UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest & Omit<UpdateGroupRequest, "Namespace"> & UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest)[K]
    }>): Request<UpdateGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGroup(
          this.ops["UpdateGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof UpdateIAMPolicyAssignmentRequest & keyof Omit<UpdateIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof UpdateIAMPolicyAssignmentRequest & keyof UpdateIAMPolicyAssignmentRequest & keyof UpdateIAMPolicyAssignmentRequest & keyof Omit<UpdateIAMPolicyAssignmentRequest, "Namespace"> & keyof UpdateIAMPolicyAssignmentRequest & keyof UpdateIAMPolicyAssignmentRequest & keyof UpdateIAMPolicyAssignmentRequest]: (UpdateIAMPolicyAssignmentRequest & Omit<UpdateIAMPolicyAssignmentRequest, "AwsAccountId"> & UpdateIAMPolicyAssignmentRequest & UpdateIAMPolicyAssignmentRequest & UpdateIAMPolicyAssignmentRequest & Omit<UpdateIAMPolicyAssignmentRequest, "Namespace"> & UpdateIAMPolicyAssignmentRequest & UpdateIAMPolicyAssignmentRequest & UpdateIAMPolicyAssignmentRequest)[K]
    }>): Request<UpdateIAMPolicyAssignmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIAMPolicyAssignment(
          this.ops["UpdateIAMPolicyAssignment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIpRestriction(partialParams: ToOptional<{
      [K in keyof UpdateIpRestrictionRequest & keyof Omit<UpdateIpRestrictionRequest, "AwsAccountId"> & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest]: (UpdateIpRestrictionRequest & Omit<UpdateIpRestrictionRequest, "AwsAccountId"> & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest)[K]
    }>): Request<UpdateIpRestrictionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIpRestriction(
          this.ops["UpdateIpRestriction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTemplate(partialParams: ToOptional<{
      [K in keyof UpdateTemplateRequest & keyof Omit<UpdateTemplateRequest, "AwsAccountId"> & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest]: (UpdateTemplateRequest & Omit<UpdateTemplateRequest, "AwsAccountId"> & UpdateTemplateRequest & UpdateTemplateRequest & UpdateTemplateRequest & UpdateTemplateRequest & UpdateTemplateRequest & UpdateTemplateRequest & UpdateTemplateRequest)[K]
    }>): Request<UpdateTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplate(
          this.ops["UpdateTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTemplateAlias(partialParams: ToOptional<{
      [K in keyof UpdateTemplateAliasRequest & keyof Omit<UpdateTemplateAliasRequest, "AwsAccountId"> & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest]: (UpdateTemplateAliasRequest & Omit<UpdateTemplateAliasRequest, "AwsAccountId"> & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest)[K]
    }>): Request<UpdateTemplateAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplateAlias(
          this.ops["UpdateTemplateAlias"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTemplatePermissions(partialParams: ToOptional<{
      [K in keyof UpdateTemplatePermissionsRequest & keyof Omit<UpdateTemplatePermissionsRequest, "AwsAccountId"> & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest]: (UpdateTemplatePermissionsRequest & Omit<UpdateTemplatePermissionsRequest, "AwsAccountId"> & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest)[K]
    }>): Request<UpdateTemplatePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplatePermissions(
          this.ops["UpdateTemplatePermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTheme(partialParams: ToOptional<{
      [K in keyof UpdateThemeRequest & keyof Omit<UpdateThemeRequest, "AwsAccountId"> & keyof UpdateThemeRequest & keyof UpdateThemeRequest & keyof UpdateThemeRequest & keyof UpdateThemeRequest & keyof UpdateThemeRequest & keyof UpdateThemeRequest & keyof UpdateThemeRequest]: (UpdateThemeRequest & Omit<UpdateThemeRequest, "AwsAccountId"> & UpdateThemeRequest & UpdateThemeRequest & UpdateThemeRequest & UpdateThemeRequest & UpdateThemeRequest & UpdateThemeRequest & UpdateThemeRequest)[K]
    }>): Request<UpdateThemeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTheme(
          this.ops["UpdateTheme"].applicator.apply(partialParams)
        );
    }

    invokeUpdateThemeAlias(partialParams: ToOptional<{
      [K in keyof UpdateThemeAliasRequest & keyof Omit<UpdateThemeAliasRequest, "AwsAccountId"> & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest]: (UpdateThemeAliasRequest & Omit<UpdateThemeAliasRequest, "AwsAccountId"> & UpdateThemeAliasRequest & UpdateThemeAliasRequest & UpdateThemeAliasRequest & UpdateThemeAliasRequest & UpdateThemeAliasRequest & UpdateThemeAliasRequest & UpdateThemeAliasRequest)[K]
    }>): Request<UpdateThemeAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThemeAlias(
          this.ops["UpdateThemeAlias"].applicator.apply(partialParams)
        );
    }

    invokeUpdateThemePermissions(partialParams: ToOptional<{
      [K in keyof UpdateThemePermissionsRequest & keyof Omit<UpdateThemePermissionsRequest, "AwsAccountId"> & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest]: (UpdateThemePermissionsRequest & Omit<UpdateThemePermissionsRequest, "AwsAccountId"> & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest)[K]
    }>): Request<UpdateThemePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThemePermissions(
          this.ops["UpdateThemePermissions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "AwsAccountId"> & keyof Omit<UpdateUserRequest, "Email"> & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "Namespace"> & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & Omit<UpdateUserRequest, "AwsAccountId"> & Omit<UpdateUserRequest, "Email"> & UpdateUserRequest & UpdateUserRequest & Omit<UpdateUserRequest, "Namespace"> & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }
}