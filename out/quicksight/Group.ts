
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

export default class extends aws.quicksight.Group {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.quicksight.Group>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.QuickSight()
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

    invokeCancelIngestion(partialParams: ToOptional<{
      [K in keyof CancelIngestionRequest & keyof Omit<CancelIngestionRequest, "AwsAccountId">]: (CancelIngestionRequest)[K]
    }>): Request<CancelIngestionResponse, AWSError> {
        this.boot();
        return this.client.cancelIngestion(
          this.ops["CancelIngestion"].apply(partialParams)
        );
    }

    invokeCreateAccountCustomization(partialParams: ToOptional<{
      [K in keyof CreateAccountCustomizationRequest & keyof Omit<CreateAccountCustomizationRequest, "AwsAccountId">]: (CreateAccountCustomizationRequest)[K]
    }>): Request<CreateAccountCustomizationResponse, AWSError> {
        this.boot();
        return this.client.createAccountCustomization(
          this.ops["CreateAccountCustomization"].apply(partialParams)
        );
    }

    invokeCreateAnalysis(partialParams: ToOptional<{
      [K in keyof CreateAnalysisRequest & keyof Omit<CreateAnalysisRequest, "AwsAccountId">]: (CreateAnalysisRequest)[K]
    }>): Request<CreateAnalysisResponse, AWSError> {
        this.boot();
        return this.client.createAnalysis(
          this.ops["CreateAnalysis"].apply(partialParams)
        );
    }

    invokeCreateDashboard(partialParams: ToOptional<{
      [K in keyof CreateDashboardRequest & keyof Omit<CreateDashboardRequest, "AwsAccountId">]: (CreateDashboardRequest)[K]
    }>): Request<CreateDashboardResponse, AWSError> {
        this.boot();
        return this.client.createDashboard(
          this.ops["CreateDashboard"].apply(partialParams)
        );
    }

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AwsAccountId">]: (CreateDataSetRequest)[K]
    }>): Request<CreateDataSetResponse, AWSError> {
        this.boot();
        return this.client.createDataSet(
          this.ops["CreateDataSet"].apply(partialParams)
        );
    }

    invokeCreateDataSource(partialParams: ToOptional<{
      [K in keyof CreateDataSourceRequest & keyof Omit<CreateDataSourceRequest, "AwsAccountId">]: (CreateDataSourceRequest)[K]
    }>): Request<CreateDataSourceResponse, AWSError> {
        this.boot();
        return this.client.createDataSource(
          this.ops["CreateDataSource"].apply(partialParams)
        );
    }

    invokeCreateFolder(partialParams: ToOptional<{
      [K in keyof CreateFolderRequest & keyof Omit<CreateFolderRequest, "AwsAccountId">]: (CreateFolderRequest)[K]
    }>): Request<CreateFolderResponse, AWSError> {
        this.boot();
        return this.client.createFolder(
          this.ops["CreateFolder"].apply(partialParams)
        );
    }

    invokeCreateFolderMembership(partialParams: ToOptional<{
      [K in keyof CreateFolderMembershipRequest & keyof Omit<CreateFolderMembershipRequest, "AwsAccountId">]: (CreateFolderMembershipRequest)[K]
    }>): Request<CreateFolderMembershipResponse, AWSError> {
        this.boot();
        return this.client.createFolderMembership(
          this.ops["CreateFolderMembership"].apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof Omit<CreateGroupRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (CreateGroupRequest)[K]
    }>): Request<CreateGroupResponse, AWSError> {
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateGroupMembership(partialParams: ToOptional<{
      [K in keyof CreateGroupMembershipRequest & keyof Omit<CreateGroupMembershipRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (CreateGroupMembershipRequest)[K]
    }>): Request<CreateGroupMembershipResponse, AWSError> {
        this.boot();
        return this.client.createGroupMembership(
          this.ops["CreateGroupMembership"].apply(partialParams)
        );
    }

    invokeCreateIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof CreateIAMPolicyAssignmentRequest & keyof Omit<CreateIAMPolicyAssignmentRequest, "AwsAccountId" | "Namespace">]: (CreateIAMPolicyAssignmentRequest)[K]
    }>): Request<CreateIAMPolicyAssignmentResponse, AWSError> {
        this.boot();
        return this.client.createIAMPolicyAssignment(
          this.ops["CreateIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeCreateIngestion(partialParams: ToOptional<{
      [K in keyof CreateIngestionRequest & keyof Omit<CreateIngestionRequest, "AwsAccountId">]: (CreateIngestionRequest)[K]
    }>): Request<CreateIngestionResponse, AWSError> {
        this.boot();
        return this.client.createIngestion(
          this.ops["CreateIngestion"].apply(partialParams)
        );
    }

    invokeCreateNamespace(partialParams: ToOptional<{
      [K in keyof CreateNamespaceRequest & keyof Omit<CreateNamespaceRequest, "AwsAccountId" | "Namespace">]: (CreateNamespaceRequest)[K]
    }>): Request<CreateNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createNamespace(
          this.ops["CreateNamespace"].apply(partialParams)
        );
    }

    invokeCreateTemplate(partialParams: ToOptional<{
      [K in keyof CreateTemplateRequest & keyof Omit<CreateTemplateRequest, "AwsAccountId">]: (CreateTemplateRequest)[K]
    }>): Request<CreateTemplateResponse, AWSError> {
        this.boot();
        return this.client.createTemplate(
          this.ops["CreateTemplate"].apply(partialParams)
        );
    }

    invokeCreateTemplateAlias(partialParams: ToOptional<{
      [K in keyof CreateTemplateAliasRequest & keyof Omit<CreateTemplateAliasRequest, "AwsAccountId">]: (CreateTemplateAliasRequest)[K]
    }>): Request<CreateTemplateAliasResponse, AWSError> {
        this.boot();
        return this.client.createTemplateAlias(
          this.ops["CreateTemplateAlias"].apply(partialParams)
        );
    }

    invokeCreateTheme(partialParams: ToOptional<{
      [K in keyof CreateThemeRequest & keyof Omit<CreateThemeRequest, "AwsAccountId">]: (CreateThemeRequest)[K]
    }>): Request<CreateThemeResponse, AWSError> {
        this.boot();
        return this.client.createTheme(
          this.ops["CreateTheme"].apply(partialParams)
        );
    }

    invokeCreateThemeAlias(partialParams: ToOptional<{
      [K in keyof CreateThemeAliasRequest & keyof Omit<CreateThemeAliasRequest, "AwsAccountId">]: (CreateThemeAliasRequest)[K]
    }>): Request<CreateThemeAliasResponse, AWSError> {
        this.boot();
        return this.client.createThemeAlias(
          this.ops["CreateThemeAlias"].apply(partialParams)
        );
    }

    invokeDeleteAccountCustomization(partialParams: ToOptional<{
      [K in keyof DeleteAccountCustomizationRequest & keyof Omit<DeleteAccountCustomizationRequest, "AwsAccountId">]: (DeleteAccountCustomizationRequest)[K]
    }>): Request<DeleteAccountCustomizationResponse, AWSError> {
        this.boot();
        return this.client.deleteAccountCustomization(
          this.ops["DeleteAccountCustomization"].apply(partialParams)
        );
    }

    invokeDeleteAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteAnalysisRequest & keyof Omit<DeleteAnalysisRequest, "AwsAccountId">]: (DeleteAnalysisRequest)[K]
    }>): Request<DeleteAnalysisResponse, AWSError> {
        this.boot();
        return this.client.deleteAnalysis(
          this.ops["DeleteAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteDashboard(partialParams: ToOptional<{
      [K in keyof DeleteDashboardRequest & keyof Omit<DeleteDashboardRequest, "AwsAccountId">]: (DeleteDashboardRequest)[K]
    }>): Request<DeleteDashboardResponse, AWSError> {
        this.boot();
        return this.client.deleteDashboard(
          this.ops["DeleteDashboard"].apply(partialParams)
        );
    }

    invokeDeleteDataSet(partialParams: ToOptional<{
      [K in keyof DeleteDataSetRequest & keyof Omit<DeleteDataSetRequest, "AwsAccountId">]: (DeleteDataSetRequest)[K]
    }>): Request<DeleteDataSetResponse, AWSError> {
        this.boot();
        return this.client.deleteDataSet(
          this.ops["DeleteDataSet"].apply(partialParams)
        );
    }

    invokeDeleteDataSource(partialParams: ToOptional<{
      [K in keyof DeleteDataSourceRequest & keyof Omit<DeleteDataSourceRequest, "AwsAccountId">]: (DeleteDataSourceRequest)[K]
    }>): Request<DeleteDataSourceResponse, AWSError> {
        this.boot();
        return this.client.deleteDataSource(
          this.ops["DeleteDataSource"].apply(partialParams)
        );
    }

    invokeDeleteFolder(partialParams: ToOptional<{
      [K in keyof DeleteFolderRequest & keyof Omit<DeleteFolderRequest, "AwsAccountId">]: (DeleteFolderRequest)[K]
    }>): Request<DeleteFolderResponse, AWSError> {
        this.boot();
        return this.client.deleteFolder(
          this.ops["DeleteFolder"].apply(partialParams)
        );
    }

    invokeDeleteFolderMembership(partialParams: ToOptional<{
      [K in keyof DeleteFolderMembershipRequest & keyof Omit<DeleteFolderMembershipRequest, "AwsAccountId">]: (DeleteFolderMembershipRequest)[K]
    }>): Request<DeleteFolderMembershipResponse, AWSError> {
        this.boot();
        return this.client.deleteFolderMembership(
          this.ops["DeleteFolderMembership"].apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest & keyof Omit<DeleteGroupRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (DeleteGroupRequest)[K]
    }>): Request<DeleteGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteGroup(
          this.ops["DeleteGroup"].apply(partialParams)
        );
    }

    invokeDeleteGroupMembership(partialParams: ToOptional<{
      [K in keyof DeleteGroupMembershipRequest & keyof Omit<DeleteGroupMembershipRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (DeleteGroupMembershipRequest)[K]
    }>): Request<DeleteGroupMembershipResponse, AWSError> {
        this.boot();
        return this.client.deleteGroupMembership(
          this.ops["DeleteGroupMembership"].apply(partialParams)
        );
    }

    invokeDeleteIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof DeleteIAMPolicyAssignmentRequest & keyof Omit<DeleteIAMPolicyAssignmentRequest, "AwsAccountId" | "Namespace">]: (DeleteIAMPolicyAssignmentRequest)[K]
    }>): Request<DeleteIAMPolicyAssignmentResponse, AWSError> {
        this.boot();
        return this.client.deleteIAMPolicyAssignment(
          this.ops["DeleteIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeDeleteNamespace(partialParams: ToOptional<{
      [K in keyof DeleteNamespaceRequest & keyof Omit<DeleteNamespaceRequest, "AwsAccountId" | "Namespace">]: (DeleteNamespaceRequest)[K]
    }>): Request<DeleteNamespaceResponse, AWSError> {
        this.boot();
        return this.client.deleteNamespace(
          this.ops["DeleteNamespace"].apply(partialParams)
        );
    }

    invokeDeleteTemplate(partialParams: ToOptional<{
      [K in keyof DeleteTemplateRequest & keyof Omit<DeleteTemplateRequest, "AwsAccountId">]: (DeleteTemplateRequest)[K]
    }>): Request<DeleteTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteTemplate(
          this.ops["DeleteTemplate"].apply(partialParams)
        );
    }

    invokeDeleteTemplateAlias(partialParams: ToOptional<{
      [K in keyof DeleteTemplateAliasRequest & keyof Omit<DeleteTemplateAliasRequest, "AwsAccountId">]: (DeleteTemplateAliasRequest)[K]
    }>): Request<DeleteTemplateAliasResponse, AWSError> {
        this.boot();
        return this.client.deleteTemplateAlias(
          this.ops["DeleteTemplateAlias"].apply(partialParams)
        );
    }

    invokeDeleteTheme(partialParams: ToOptional<{
      [K in keyof DeleteThemeRequest & keyof Omit<DeleteThemeRequest, "AwsAccountId">]: (DeleteThemeRequest)[K]
    }>): Request<DeleteThemeResponse, AWSError> {
        this.boot();
        return this.client.deleteTheme(
          this.ops["DeleteTheme"].apply(partialParams)
        );
    }

    invokeDeleteThemeAlias(partialParams: ToOptional<{
      [K in keyof DeleteThemeAliasRequest & keyof Omit<DeleteThemeAliasRequest, "AwsAccountId">]: (DeleteThemeAliasRequest)[K]
    }>): Request<DeleteThemeAliasResponse, AWSError> {
        this.boot();
        return this.client.deleteThemeAlias(
          this.ops["DeleteThemeAlias"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof Omit<DeleteUserRequest, "AwsAccountId" | "Namespace">]: (DeleteUserRequest)[K]
    }>): Request<DeleteUserResponse, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserByPrincipalId(partialParams: ToOptional<{
      [K in keyof DeleteUserByPrincipalIdRequest & keyof Omit<DeleteUserByPrincipalIdRequest, "AwsAccountId" | "Namespace">]: (DeleteUserByPrincipalIdRequest)[K]
    }>): Request<DeleteUserByPrincipalIdResponse, AWSError> {
        this.boot();
        return this.client.deleteUserByPrincipalId(
          this.ops["DeleteUserByPrincipalId"].apply(partialParams)
        );
    }

    invokeDescribeAccountCustomization(partialParams: ToOptional<{
      [K in keyof DescribeAccountCustomizationRequest & keyof Omit<DescribeAccountCustomizationRequest, "AwsAccountId">]: (DescribeAccountCustomizationRequest)[K]
    }>): Request<DescribeAccountCustomizationResponse, AWSError> {
        this.boot();
        return this.client.describeAccountCustomization(
          this.ops["DescribeAccountCustomization"].apply(partialParams)
        );
    }

    invokeDescribeAccountSettings(partialParams: ToOptional<{
      [K in keyof DescribeAccountSettingsRequest & keyof Omit<DescribeAccountSettingsRequest, "AwsAccountId">]: (DescribeAccountSettingsRequest)[K]
    }>): Request<DescribeAccountSettingsResponse, AWSError> {
        this.boot();
        return this.client.describeAccountSettings(
          this.ops["DescribeAccountSettings"].apply(partialParams)
        );
    }

    invokeDescribeAnalysis(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisRequest & keyof Omit<DescribeAnalysisRequest, "AwsAccountId">]: (DescribeAnalysisRequest)[K]
    }>): Request<DescribeAnalysisResponse, AWSError> {
        this.boot();
        return this.client.describeAnalysis(
          this.ops["DescribeAnalysis"].apply(partialParams)
        );
    }

    invokeDescribeAnalysisPermissions(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisPermissionsRequest & keyof Omit<DescribeAnalysisPermissionsRequest, "AwsAccountId">]: (DescribeAnalysisPermissionsRequest)[K]
    }>): Request<DescribeAnalysisPermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeAnalysisPermissions(
          this.ops["DescribeAnalysisPermissions"].apply(partialParams)
        );
    }

    invokeDescribeDashboard(partialParams: ToOptional<{
      [K in keyof DescribeDashboardRequest & keyof Omit<DescribeDashboardRequest, "AwsAccountId">]: (DescribeDashboardRequest)[K]
    }>): Request<DescribeDashboardResponse, AWSError> {
        this.boot();
        return this.client.describeDashboard(
          this.ops["DescribeDashboard"].apply(partialParams)
        );
    }

    invokeDescribeDashboardPermissions(partialParams: ToOptional<{
      [K in keyof DescribeDashboardPermissionsRequest & keyof Omit<DescribeDashboardPermissionsRequest, "AwsAccountId">]: (DescribeDashboardPermissionsRequest)[K]
    }>): Request<DescribeDashboardPermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeDashboardPermissions(
          this.ops["DescribeDashboardPermissions"].apply(partialParams)
        );
    }

    invokeDescribeDataSet(partialParams: ToOptional<{
      [K in keyof DescribeDataSetRequest & keyof Omit<DescribeDataSetRequest, "AwsAccountId">]: (DescribeDataSetRequest)[K]
    }>): Request<DescribeDataSetResponse, AWSError> {
        this.boot();
        return this.client.describeDataSet(
          this.ops["DescribeDataSet"].apply(partialParams)
        );
    }

    invokeDescribeDataSetPermissions(partialParams: ToOptional<{
      [K in keyof DescribeDataSetPermissionsRequest & keyof Omit<DescribeDataSetPermissionsRequest, "AwsAccountId">]: (DescribeDataSetPermissionsRequest)[K]
    }>): Request<DescribeDataSetPermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeDataSetPermissions(
          this.ops["DescribeDataSetPermissions"].apply(partialParams)
        );
    }

    invokeDescribeDataSource(partialParams: ToOptional<{
      [K in keyof DescribeDataSourceRequest & keyof Omit<DescribeDataSourceRequest, "AwsAccountId">]: (DescribeDataSourceRequest)[K]
    }>): Request<DescribeDataSourceResponse, AWSError> {
        this.boot();
        return this.client.describeDataSource(
          this.ops["DescribeDataSource"].apply(partialParams)
        );
    }

    invokeDescribeDataSourcePermissions(partialParams: ToOptional<{
      [K in keyof DescribeDataSourcePermissionsRequest & keyof Omit<DescribeDataSourcePermissionsRequest, "AwsAccountId">]: (DescribeDataSourcePermissionsRequest)[K]
    }>): Request<DescribeDataSourcePermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeDataSourcePermissions(
          this.ops["DescribeDataSourcePermissions"].apply(partialParams)
        );
    }

    invokeDescribeFolder(partialParams: ToOptional<{
      [K in keyof DescribeFolderRequest & keyof Omit<DescribeFolderRequest, "AwsAccountId">]: (DescribeFolderRequest)[K]
    }>): Request<DescribeFolderResponse, AWSError> {
        this.boot();
        return this.client.describeFolder(
          this.ops["DescribeFolder"].apply(partialParams)
        );
    }

    invokeDescribeFolderPermissions(partialParams: ToOptional<{
      [K in keyof DescribeFolderPermissionsRequest & keyof Omit<DescribeFolderPermissionsRequest, "AwsAccountId">]: (DescribeFolderPermissionsRequest)[K]
    }>): Request<DescribeFolderPermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeFolderPermissions(
          this.ops["DescribeFolderPermissions"].apply(partialParams)
        );
    }

    invokeDescribeFolderResolvedPermissions(partialParams: ToOptional<{
      [K in keyof DescribeFolderResolvedPermissionsRequest & keyof Omit<DescribeFolderResolvedPermissionsRequest, "AwsAccountId">]: (DescribeFolderResolvedPermissionsRequest)[K]
    }>): Request<DescribeFolderResolvedPermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeFolderResolvedPermissions(
          this.ops["DescribeFolderResolvedPermissions"].apply(partialParams)
        );
    }

    invokeDescribeGroup(partialParams: ToOptional<{
      [K in keyof DescribeGroupRequest & keyof Omit<DescribeGroupRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (DescribeGroupRequest)[K]
    }>): Request<DescribeGroupResponse, AWSError> {
        this.boot();
        return this.client.describeGroup(
          this.ops["DescribeGroup"].apply(partialParams)
        );
    }

    invokeDescribeIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof DescribeIAMPolicyAssignmentRequest & keyof Omit<DescribeIAMPolicyAssignmentRequest, "AwsAccountId" | "Namespace">]: (DescribeIAMPolicyAssignmentRequest)[K]
    }>): Request<DescribeIAMPolicyAssignmentResponse, AWSError> {
        this.boot();
        return this.client.describeIAMPolicyAssignment(
          this.ops["DescribeIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeDescribeIngestion(partialParams: ToOptional<{
      [K in keyof DescribeIngestionRequest & keyof Omit<DescribeIngestionRequest, "AwsAccountId">]: (DescribeIngestionRequest)[K]
    }>): Request<DescribeIngestionResponse, AWSError> {
        this.boot();
        return this.client.describeIngestion(
          this.ops["DescribeIngestion"].apply(partialParams)
        );
    }

    invokeDescribeIpRestriction(partialParams: ToOptional<{
      [K in keyof DescribeIpRestrictionRequest & keyof Omit<DescribeIpRestrictionRequest, "AwsAccountId">]: (DescribeIpRestrictionRequest)[K]
    }>): Request<DescribeIpRestrictionResponse, AWSError> {
        this.boot();
        return this.client.describeIpRestriction(
          this.ops["DescribeIpRestriction"].apply(partialParams)
        );
    }

    invokeDescribeNamespace(partialParams: ToOptional<{
      [K in keyof DescribeNamespaceRequest & keyof Omit<DescribeNamespaceRequest, "AwsAccountId" | "Namespace">]: (DescribeNamespaceRequest)[K]
    }>): Request<DescribeNamespaceResponse, AWSError> {
        this.boot();
        return this.client.describeNamespace(
          this.ops["DescribeNamespace"].apply(partialParams)
        );
    }

    invokeDescribeTemplate(partialParams: ToOptional<{
      [K in keyof DescribeTemplateRequest & keyof Omit<DescribeTemplateRequest, "AwsAccountId">]: (DescribeTemplateRequest)[K]
    }>): Request<DescribeTemplateResponse, AWSError> {
        this.boot();
        return this.client.describeTemplate(
          this.ops["DescribeTemplate"].apply(partialParams)
        );
    }

    invokeDescribeTemplateAlias(partialParams: ToOptional<{
      [K in keyof DescribeTemplateAliasRequest & keyof Omit<DescribeTemplateAliasRequest, "AwsAccountId">]: (DescribeTemplateAliasRequest)[K]
    }>): Request<DescribeTemplateAliasResponse, AWSError> {
        this.boot();
        return this.client.describeTemplateAlias(
          this.ops["DescribeTemplateAlias"].apply(partialParams)
        );
    }

    invokeDescribeTemplatePermissions(partialParams: ToOptional<{
      [K in keyof DescribeTemplatePermissionsRequest & keyof Omit<DescribeTemplatePermissionsRequest, "AwsAccountId">]: (DescribeTemplatePermissionsRequest)[K]
    }>): Request<DescribeTemplatePermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeTemplatePermissions(
          this.ops["DescribeTemplatePermissions"].apply(partialParams)
        );
    }

    invokeDescribeTheme(partialParams: ToOptional<{
      [K in keyof DescribeThemeRequest & keyof Omit<DescribeThemeRequest, "AwsAccountId">]: (DescribeThemeRequest)[K]
    }>): Request<DescribeThemeResponse, AWSError> {
        this.boot();
        return this.client.describeTheme(
          this.ops["DescribeTheme"].apply(partialParams)
        );
    }

    invokeDescribeThemeAlias(partialParams: ToOptional<{
      [K in keyof DescribeThemeAliasRequest & keyof Omit<DescribeThemeAliasRequest, "AwsAccountId">]: (DescribeThemeAliasRequest)[K]
    }>): Request<DescribeThemeAliasResponse, AWSError> {
        this.boot();
        return this.client.describeThemeAlias(
          this.ops["DescribeThemeAlias"].apply(partialParams)
        );
    }

    invokeDescribeThemePermissions(partialParams: ToOptional<{
      [K in keyof DescribeThemePermissionsRequest & keyof Omit<DescribeThemePermissionsRequest, "AwsAccountId">]: (DescribeThemePermissionsRequest)[K]
    }>): Request<DescribeThemePermissionsResponse, AWSError> {
        this.boot();
        return this.client.describeThemePermissions(
          this.ops["DescribeThemePermissions"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof Omit<DescribeUserRequest, "AwsAccountId" | "Namespace">]: (DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeGenerateEmbedUrlForAnonymousUser(partialParams: ToOptional<{
      [K in keyof GenerateEmbedUrlForAnonymousUserRequest & keyof Omit<GenerateEmbedUrlForAnonymousUserRequest, "AwsAccountId" | "Namespace">]: (GenerateEmbedUrlForAnonymousUserRequest)[K]
    }>): Request<GenerateEmbedUrlForAnonymousUserResponse, AWSError> {
        this.boot();
        return this.client.generateEmbedUrlForAnonymousUser(
          this.ops["GenerateEmbedUrlForAnonymousUser"].apply(partialParams)
        );
    }

    invokeGenerateEmbedUrlForRegisteredUser(partialParams: ToOptional<{
      [K in keyof GenerateEmbedUrlForRegisteredUserRequest & keyof Omit<GenerateEmbedUrlForRegisteredUserRequest, "AwsAccountId">]: (GenerateEmbedUrlForRegisteredUserRequest)[K]
    }>): Request<GenerateEmbedUrlForRegisteredUserResponse, AWSError> {
        this.boot();
        return this.client.generateEmbedUrlForRegisteredUser(
          this.ops["GenerateEmbedUrlForRegisteredUser"].apply(partialParams)
        );
    }

    invokeGetDashboardEmbedUrl(partialParams: ToOptional<{
      [K in keyof GetDashboardEmbedUrlRequest & keyof Omit<GetDashboardEmbedUrlRequest, "AwsAccountId">]: (GetDashboardEmbedUrlRequest)[K]
    }>): Request<GetDashboardEmbedUrlResponse, AWSError> {
        this.boot();
        return this.client.getDashboardEmbedUrl(
          this.ops["GetDashboardEmbedUrl"].apply(partialParams)
        );
    }

    invokeGetSessionEmbedUrl(partialParams: ToOptional<{
      [K in keyof GetSessionEmbedUrlRequest & keyof Omit<GetSessionEmbedUrlRequest, "AwsAccountId">]: (GetSessionEmbedUrlRequest)[K]
    }>): Request<GetSessionEmbedUrlResponse, AWSError> {
        this.boot();
        return this.client.getSessionEmbedUrl(
          this.ops["GetSessionEmbedUrl"].apply(partialParams)
        );
    }

    invokeListAnalyses(partialParams: ToOptional<{
      [K in keyof ListAnalysesRequest & keyof Omit<ListAnalysesRequest, "AwsAccountId">]: (ListAnalysesRequest)[K]
    }>): Request<ListAnalysesResponse, AWSError> {
        this.boot();
        return this.client.listAnalyses(
          this.ops["ListAnalyses"].apply(partialParams)
        );
    }

    invokeListDashboardVersions(partialParams: ToOptional<{
      [K in keyof ListDashboardVersionsRequest & keyof Omit<ListDashboardVersionsRequest, "AwsAccountId">]: (ListDashboardVersionsRequest)[K]
    }>): Request<ListDashboardVersionsResponse, AWSError> {
        this.boot();
        return this.client.listDashboardVersions(
          this.ops["ListDashboardVersions"].apply(partialParams)
        );
    }

    invokeListDashboards(partialParams: ToOptional<{
      [K in keyof ListDashboardsRequest & keyof Omit<ListDashboardsRequest, "AwsAccountId">]: (ListDashboardsRequest)[K]
    }>): Request<ListDashboardsResponse, AWSError> {
        this.boot();
        return this.client.listDashboards(
          this.ops["ListDashboards"].apply(partialParams)
        );
    }

    invokeListDataSets(partialParams: ToOptional<{
      [K in keyof ListDataSetsRequest & keyof Omit<ListDataSetsRequest, "AwsAccountId">]: (ListDataSetsRequest)[K]
    }>): Request<ListDataSetsResponse, AWSError> {
        this.boot();
        return this.client.listDataSets(
          this.ops["ListDataSets"].apply(partialParams)
        );
    }

    invokeListDataSources(partialParams: ToOptional<{
      [K in keyof ListDataSourcesRequest & keyof Omit<ListDataSourcesRequest, "AwsAccountId">]: (ListDataSourcesRequest)[K]
    }>): Request<ListDataSourcesResponse, AWSError> {
        this.boot();
        return this.client.listDataSources(
          this.ops["ListDataSources"].apply(partialParams)
        );
    }

    invokeListFolderMembers(partialParams: ToOptional<{
      [K in keyof ListFolderMembersRequest & keyof Omit<ListFolderMembersRequest, "AwsAccountId">]: (ListFolderMembersRequest)[K]
    }>): Request<ListFolderMembersResponse, AWSError> {
        this.boot();
        return this.client.listFolderMembers(
          this.ops["ListFolderMembers"].apply(partialParams)
        );
    }

    invokeListFolders(partialParams: ToOptional<{
      [K in keyof ListFoldersRequest & keyof Omit<ListFoldersRequest, "AwsAccountId">]: (ListFoldersRequest)[K]
    }>): Request<ListFoldersResponse, AWSError> {
        this.boot();
        return this.client.listFolders(
          this.ops["ListFolders"].apply(partialParams)
        );
    }

    invokeListGroupMemberships(partialParams: ToOptional<{
      [K in keyof ListGroupMembershipsRequest & keyof Omit<ListGroupMembershipsRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (ListGroupMembershipsRequest)[K]
    }>): Request<ListGroupMembershipsResponse, AWSError> {
        this.boot();
        return this.client.listGroupMemberships(
          this.ops["ListGroupMemberships"].apply(partialParams)
        );
    }

    invokeListGroups(partialParams: ToOptional<{
      [K in keyof ListGroupsRequest & keyof Omit<ListGroupsRequest, "AwsAccountId" | "Namespace">]: (ListGroupsRequest)[K]
    }>): Request<ListGroupsResponse, AWSError> {
        this.boot();
        return this.client.listGroups(
          this.ops["ListGroups"].apply(partialParams)
        );
    }

    invokeListIAMPolicyAssignments(partialParams: ToOptional<{
      [K in keyof ListIAMPolicyAssignmentsRequest & keyof Omit<ListIAMPolicyAssignmentsRequest, "AwsAccountId" | "Namespace">]: (ListIAMPolicyAssignmentsRequest)[K]
    }>): Request<ListIAMPolicyAssignmentsResponse, AWSError> {
        this.boot();
        return this.client.listIAMPolicyAssignments(
          this.ops["ListIAMPolicyAssignments"].apply(partialParams)
        );
    }

    invokeListIAMPolicyAssignmentsForUser(partialParams: ToOptional<{
      [K in keyof ListIAMPolicyAssignmentsForUserRequest & keyof Omit<ListIAMPolicyAssignmentsForUserRequest, "AwsAccountId" | "Namespace">]: (ListIAMPolicyAssignmentsForUserRequest)[K]
    }>): Request<ListIAMPolicyAssignmentsForUserResponse, AWSError> {
        this.boot();
        return this.client.listIAMPolicyAssignmentsForUser(
          this.ops["ListIAMPolicyAssignmentsForUser"].apply(partialParams)
        );
    }

    invokeListIngestions(partialParams: ToOptional<{
      [K in keyof ListIngestionsRequest & keyof Omit<ListIngestionsRequest, "AwsAccountId">]: (ListIngestionsRequest)[K]
    }>): Request<ListIngestionsResponse, AWSError> {
        this.boot();
        return this.client.listIngestions(
          this.ops["ListIngestions"].apply(partialParams)
        );
    }

    invokeListNamespaces(partialParams: ToOptional<{
      [K in keyof ListNamespacesRequest & keyof Omit<ListNamespacesRequest, "AwsAccountId">]: (ListNamespacesRequest)[K]
    }>): Request<ListNamespacesResponse, AWSError> {
        this.boot();
        return this.client.listNamespaces(
          this.ops["ListNamespaces"].apply(partialParams)
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

    invokeListTemplateAliases(partialParams: ToOptional<{
      [K in keyof ListTemplateAliasesRequest & keyof Omit<ListTemplateAliasesRequest, "AwsAccountId">]: (ListTemplateAliasesRequest)[K]
    }>): Request<ListTemplateAliasesResponse, AWSError> {
        this.boot();
        return this.client.listTemplateAliases(
          this.ops["ListTemplateAliases"].apply(partialParams)
        );
    }

    invokeListTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListTemplateVersionsRequest & keyof Omit<ListTemplateVersionsRequest, "AwsAccountId">]: (ListTemplateVersionsRequest)[K]
    }>): Request<ListTemplateVersionsResponse, AWSError> {
        this.boot();
        return this.client.listTemplateVersions(
          this.ops["ListTemplateVersions"].apply(partialParams)
        );
    }

    invokeListTemplates(partialParams: ToOptional<{
      [K in keyof ListTemplatesRequest & keyof Omit<ListTemplatesRequest, "AwsAccountId">]: (ListTemplatesRequest)[K]
    }>): Request<ListTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listTemplates(
          this.ops["ListTemplates"].apply(partialParams)
        );
    }

    invokeListThemeAliases(partialParams: ToOptional<{
      [K in keyof ListThemeAliasesRequest & keyof Omit<ListThemeAliasesRequest, "AwsAccountId">]: (ListThemeAliasesRequest)[K]
    }>): Request<ListThemeAliasesResponse, AWSError> {
        this.boot();
        return this.client.listThemeAliases(
          this.ops["ListThemeAliases"].apply(partialParams)
        );
    }

    invokeListThemeVersions(partialParams: ToOptional<{
      [K in keyof ListThemeVersionsRequest & keyof Omit<ListThemeVersionsRequest, "AwsAccountId">]: (ListThemeVersionsRequest)[K]
    }>): Request<ListThemeVersionsResponse, AWSError> {
        this.boot();
        return this.client.listThemeVersions(
          this.ops["ListThemeVersions"].apply(partialParams)
        );
    }

    invokeListThemes(partialParams: ToOptional<{
      [K in keyof ListThemesRequest & keyof Omit<ListThemesRequest, "AwsAccountId">]: (ListThemesRequest)[K]
    }>): Request<ListThemesResponse, AWSError> {
        this.boot();
        return this.client.listThemes(
          this.ops["ListThemes"].apply(partialParams)
        );
    }

    invokeListUserGroups(partialParams: ToOptional<{
      [K in keyof ListUserGroupsRequest & keyof Omit<ListUserGroupsRequest, "AwsAccountId" | "Namespace">]: (ListUserGroupsRequest)[K]
    }>): Request<ListUserGroupsResponse, AWSError> {
        this.boot();
        return this.client.listUserGroups(
          this.ops["ListUserGroups"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof Omit<ListUsersRequest, "AwsAccountId" | "Namespace">]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeRegisterUser(partialParams: ToOptional<{
      [K in keyof RegisterUserRequest & keyof Omit<RegisterUserRequest, "AwsAccountId" | "Namespace">]: (RegisterUserRequest)[K]
    }>): Request<RegisterUserResponse, AWSError> {
        this.boot();
        return this.client.registerUser(
          this.ops["RegisterUser"].apply(partialParams)
        );
    }

    invokeRestoreAnalysis(partialParams: ToOptional<{
      [K in keyof RestoreAnalysisRequest & keyof Omit<RestoreAnalysisRequest, "AwsAccountId">]: (RestoreAnalysisRequest)[K]
    }>): Request<RestoreAnalysisResponse, AWSError> {
        this.boot();
        return this.client.restoreAnalysis(
          this.ops["RestoreAnalysis"].apply(partialParams)
        );
    }

    invokeSearchAnalyses(partialParams: ToOptional<{
      [K in keyof SearchAnalysesRequest & keyof Omit<SearchAnalysesRequest, "AwsAccountId">]: (SearchAnalysesRequest)[K]
    }>): Request<SearchAnalysesResponse, AWSError> {
        this.boot();
        return this.client.searchAnalyses(
          this.ops["SearchAnalyses"].apply(partialParams)
        );
    }

    invokeSearchDashboards(partialParams: ToOptional<{
      [K in keyof SearchDashboardsRequest & keyof Omit<SearchDashboardsRequest, "AwsAccountId">]: (SearchDashboardsRequest)[K]
    }>): Request<SearchDashboardsResponse, AWSError> {
        this.boot();
        return this.client.searchDashboards(
          this.ops["SearchDashboards"].apply(partialParams)
        );
    }

    invokeSearchFolders(partialParams: ToOptional<{
      [K in keyof SearchFoldersRequest & keyof Omit<SearchFoldersRequest, "AwsAccountId">]: (SearchFoldersRequest)[K]
    }>): Request<SearchFoldersResponse, AWSError> {
        this.boot();
        return this.client.searchFolders(
          this.ops["SearchFolders"].apply(partialParams)
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

    invokeUpdateAccountCustomization(partialParams: ToOptional<{
      [K in keyof UpdateAccountCustomizationRequest & keyof Omit<UpdateAccountCustomizationRequest, "AwsAccountId">]: (UpdateAccountCustomizationRequest)[K]
    }>): Request<UpdateAccountCustomizationResponse, AWSError> {
        this.boot();
        return this.client.updateAccountCustomization(
          this.ops["UpdateAccountCustomization"].apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest & keyof Omit<UpdateAccountSettingsRequest, "AwsAccountId">]: (UpdateAccountSettingsRequest)[K]
    }>): Request<UpdateAccountSettingsResponse, AWSError> {
        this.boot();
        return this.client.updateAccountSettings(
          this.ops["UpdateAccountSettings"].apply(partialParams)
        );
    }

    invokeUpdateAnalysis(partialParams: ToOptional<{
      [K in keyof UpdateAnalysisRequest & keyof Omit<UpdateAnalysisRequest, "AwsAccountId">]: (UpdateAnalysisRequest)[K]
    }>): Request<UpdateAnalysisResponse, AWSError> {
        this.boot();
        return this.client.updateAnalysis(
          this.ops["UpdateAnalysis"].apply(partialParams)
        );
    }

    invokeUpdateAnalysisPermissions(partialParams: ToOptional<{
      [K in keyof UpdateAnalysisPermissionsRequest & keyof Omit<UpdateAnalysisPermissionsRequest, "AwsAccountId">]: (UpdateAnalysisPermissionsRequest)[K]
    }>): Request<UpdateAnalysisPermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateAnalysisPermissions(
          this.ops["UpdateAnalysisPermissions"].apply(partialParams)
        );
    }

    invokeUpdateDashboard(partialParams: ToOptional<{
      [K in keyof UpdateDashboardRequest & keyof Omit<UpdateDashboardRequest, "AwsAccountId">]: (UpdateDashboardRequest)[K]
    }>): Request<UpdateDashboardResponse, AWSError> {
        this.boot();
        return this.client.updateDashboard(
          this.ops["UpdateDashboard"].apply(partialParams)
        );
    }

    invokeUpdateDashboardPermissions(partialParams: ToOptional<{
      [K in keyof UpdateDashboardPermissionsRequest & keyof Omit<UpdateDashboardPermissionsRequest, "AwsAccountId">]: (UpdateDashboardPermissionsRequest)[K]
    }>): Request<UpdateDashboardPermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateDashboardPermissions(
          this.ops["UpdateDashboardPermissions"].apply(partialParams)
        );
    }

    invokeUpdateDashboardPublishedVersion(partialParams: ToOptional<{
      [K in keyof UpdateDashboardPublishedVersionRequest & keyof Omit<UpdateDashboardPublishedVersionRequest, "AwsAccountId">]: (UpdateDashboardPublishedVersionRequest)[K]
    }>): Request<UpdateDashboardPublishedVersionResponse, AWSError> {
        this.boot();
        return this.client.updateDashboardPublishedVersion(
          this.ops["UpdateDashboardPublishedVersion"].apply(partialParams)
        );
    }

    invokeUpdateDataSet(partialParams: ToOptional<{
      [K in keyof UpdateDataSetRequest & keyof Omit<UpdateDataSetRequest, "AwsAccountId">]: (UpdateDataSetRequest)[K]
    }>): Request<UpdateDataSetResponse, AWSError> {
        this.boot();
        return this.client.updateDataSet(
          this.ops["UpdateDataSet"].apply(partialParams)
        );
    }

    invokeUpdateDataSetPermissions(partialParams: ToOptional<{
      [K in keyof UpdateDataSetPermissionsRequest & keyof Omit<UpdateDataSetPermissionsRequest, "AwsAccountId">]: (UpdateDataSetPermissionsRequest)[K]
    }>): Request<UpdateDataSetPermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateDataSetPermissions(
          this.ops["UpdateDataSetPermissions"].apply(partialParams)
        );
    }

    invokeUpdateDataSource(partialParams: ToOptional<{
      [K in keyof UpdateDataSourceRequest & keyof Omit<UpdateDataSourceRequest, "AwsAccountId">]: (UpdateDataSourceRequest)[K]
    }>): Request<UpdateDataSourceResponse, AWSError> {
        this.boot();
        return this.client.updateDataSource(
          this.ops["UpdateDataSource"].apply(partialParams)
        );
    }

    invokeUpdateDataSourcePermissions(partialParams: ToOptional<{
      [K in keyof UpdateDataSourcePermissionsRequest & keyof Omit<UpdateDataSourcePermissionsRequest, "AwsAccountId">]: (UpdateDataSourcePermissionsRequest)[K]
    }>): Request<UpdateDataSourcePermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateDataSourcePermissions(
          this.ops["UpdateDataSourcePermissions"].apply(partialParams)
        );
    }

    invokeUpdateFolder(partialParams: ToOptional<{
      [K in keyof UpdateFolderRequest & keyof Omit<UpdateFolderRequest, "AwsAccountId">]: (UpdateFolderRequest)[K]
    }>): Request<UpdateFolderResponse, AWSError> {
        this.boot();
        return this.client.updateFolder(
          this.ops["UpdateFolder"].apply(partialParams)
        );
    }

    invokeUpdateFolderPermissions(partialParams: ToOptional<{
      [K in keyof UpdateFolderPermissionsRequest & keyof Omit<UpdateFolderPermissionsRequest, "AwsAccountId">]: (UpdateFolderPermissionsRequest)[K]
    }>): Request<UpdateFolderPermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateFolderPermissions(
          this.ops["UpdateFolderPermissions"].apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest & keyof Omit<UpdateGroupRequest, "GroupName" | "AwsAccountId" | "Namespace">]: (UpdateGroupRequest)[K]
    }>): Request<UpdateGroupResponse, AWSError> {
        this.boot();
        return this.client.updateGroup(
          this.ops["UpdateGroup"].apply(partialParams)
        );
    }

    invokeUpdateIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof UpdateIAMPolicyAssignmentRequest & keyof Omit<UpdateIAMPolicyAssignmentRequest, "AwsAccountId" | "Namespace">]: (UpdateIAMPolicyAssignmentRequest)[K]
    }>): Request<UpdateIAMPolicyAssignmentResponse, AWSError> {
        this.boot();
        return this.client.updateIAMPolicyAssignment(
          this.ops["UpdateIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeUpdateIpRestriction(partialParams: ToOptional<{
      [K in keyof UpdateIpRestrictionRequest & keyof Omit<UpdateIpRestrictionRequest, "AwsAccountId">]: (UpdateIpRestrictionRequest)[K]
    }>): Request<UpdateIpRestrictionResponse, AWSError> {
        this.boot();
        return this.client.updateIpRestriction(
          this.ops["UpdateIpRestriction"].apply(partialParams)
        );
    }

    invokeUpdateTemplate(partialParams: ToOptional<{
      [K in keyof UpdateTemplateRequest & keyof Omit<UpdateTemplateRequest, "AwsAccountId">]: (UpdateTemplateRequest)[K]
    }>): Request<UpdateTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateTemplate(
          this.ops["UpdateTemplate"].apply(partialParams)
        );
    }

    invokeUpdateTemplateAlias(partialParams: ToOptional<{
      [K in keyof UpdateTemplateAliasRequest & keyof Omit<UpdateTemplateAliasRequest, "AwsAccountId">]: (UpdateTemplateAliasRequest)[K]
    }>): Request<UpdateTemplateAliasResponse, AWSError> {
        this.boot();
        return this.client.updateTemplateAlias(
          this.ops["UpdateTemplateAlias"].apply(partialParams)
        );
    }

    invokeUpdateTemplatePermissions(partialParams: ToOptional<{
      [K in keyof UpdateTemplatePermissionsRequest & keyof Omit<UpdateTemplatePermissionsRequest, "AwsAccountId">]: (UpdateTemplatePermissionsRequest)[K]
    }>): Request<UpdateTemplatePermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateTemplatePermissions(
          this.ops["UpdateTemplatePermissions"].apply(partialParams)
        );
    }

    invokeUpdateTheme(partialParams: ToOptional<{
      [K in keyof UpdateThemeRequest & keyof Omit<UpdateThemeRequest, "AwsAccountId">]: (UpdateThemeRequest)[K]
    }>): Request<UpdateThemeResponse, AWSError> {
        this.boot();
        return this.client.updateTheme(
          this.ops["UpdateTheme"].apply(partialParams)
        );
    }

    invokeUpdateThemeAlias(partialParams: ToOptional<{
      [K in keyof UpdateThemeAliasRequest & keyof Omit<UpdateThemeAliasRequest, "AwsAccountId">]: (UpdateThemeAliasRequest)[K]
    }>): Request<UpdateThemeAliasResponse, AWSError> {
        this.boot();
        return this.client.updateThemeAlias(
          this.ops["UpdateThemeAlias"].apply(partialParams)
        );
    }

    invokeUpdateThemePermissions(partialParams: ToOptional<{
      [K in keyof UpdateThemePermissionsRequest & keyof Omit<UpdateThemePermissionsRequest, "AwsAccountId">]: (UpdateThemePermissionsRequest)[K]
    }>): Request<UpdateThemePermissionsResponse, AWSError> {
        this.boot();
        return this.client.updateThemePermissions(
          this.ops["UpdateThemePermissions"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "AwsAccountId" | "Namespace">]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].apply(partialParams)
        );
    }
}