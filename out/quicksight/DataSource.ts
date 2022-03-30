
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.quicksight.DataSource {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.quicksight.DataSource>) {
        super(...args)
        this.client = new awssdk.QuickSight()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/quicksight-2018-04-01.normal.json"), this.client)
    }

    invokeCancelIngestion(partialParams: ToOptional<{
      [K in keyof CancelIngestionRequest & keyof Omit<CancelIngestionRequest, "AwsAccountId"> & keyof CancelIngestionRequest & keyof CancelIngestionRequest & keyof CancelIngestionRequest]: (CancelIngestionRequest & Omit<CancelIngestionRequest, "AwsAccountId"> & CancelIngestionRequest & CancelIngestionRequest & CancelIngestionRequest)[K]
    }>): CancelIngestionResponse {
        return this.client.cancelIngestion(
            this.ops["CancelIngestion"].apply(partialParams)
        );
    }

    invokeCreateAccountCustomization(partialParams: ToOptional<{
      [K in keyof CreateAccountCustomizationRequest & keyof Omit<CreateAccountCustomizationRequest, "AwsAccountId"> & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest & keyof CreateAccountCustomizationRequest]: (CreateAccountCustomizationRequest & Omit<CreateAccountCustomizationRequest, "AwsAccountId"> & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest & CreateAccountCustomizationRequest)[K]
    }>): CreateAccountCustomizationResponse {
        return this.client.createAccountCustomization(
            this.ops["CreateAccountCustomization"].apply(partialParams)
        );
    }

    invokeCreateAnalysis(partialParams: ToOptional<{
      [K in keyof CreateAnalysisRequest & keyof Omit<CreateAnalysisRequest, "AwsAccountId"> & keyof CreateAnalysisRequest & keyof Omit<CreateAnalysisRequest, "Name"> & keyof CreateAnalysisRequest]: (CreateAnalysisRequest & Omit<CreateAnalysisRequest, "AwsAccountId"> & CreateAnalysisRequest & Omit<CreateAnalysisRequest, "Name"> & CreateAnalysisRequest)[K]
    }>): CreateAnalysisResponse {
        return this.client.createAnalysis(
            this.ops["CreateAnalysis"].apply(partialParams)
        );
    }

    invokeCreateDashboard(partialParams: ToOptional<{
      [K in keyof CreateDashboardRequest & keyof Omit<CreateDashboardRequest, "AwsAccountId"> & keyof CreateDashboardRequest & keyof CreateDashboardRequest & keyof CreateDashboardRequest]: (CreateDashboardRequest & Omit<CreateDashboardRequest, "AwsAccountId"> & CreateDashboardRequest & CreateDashboardRequest & CreateDashboardRequest)[K]
    }>): CreateDashboardResponse {
        return this.client.createDashboard(
            this.ops["CreateDashboard"].apply(partialParams)
        );
    }

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AwsAccountId"> & keyof CreateDataSetRequest & keyof CreateDataSetRequest & keyof CreateDataSetRequest]: (CreateDataSetRequest & Omit<CreateDataSetRequest, "AwsAccountId"> & CreateDataSetRequest & CreateDataSetRequest & CreateDataSetRequest)[K]
    }>): CreateDataSetResponse {
        return this.client.createDataSet(
            this.ops["CreateDataSet"].apply(partialParams)
        );
    }

    invokeCreateDataSource(partialParams: ToOptional<{
      [K in keyof CreateDataSourceRequest & keyof Omit<CreateDataSourceRequest, "AwsAccountId"> & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest]: (CreateDataSourceRequest & Omit<CreateDataSourceRequest, "AwsAccountId"> & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest)[K]
    }>): CreateDataSourceResponse {
        return this.client.createDataSource(
            this.ops["CreateDataSource"].apply(partialParams)
        );
    }

    invokeCreateFolder(partialParams: ToOptional<{
      [K in keyof CreateFolderRequest & keyof Omit<CreateFolderRequest, "AwsAccountId"> & keyof CreateFolderRequest & keyof CreateFolderRequest & keyof CreateFolderRequest]: (CreateFolderRequest & Omit<CreateFolderRequest, "AwsAccountId"> & CreateFolderRequest & CreateFolderRequest & CreateFolderRequest)[K]
    }>): CreateFolderResponse {
        return this.client.createFolder(
            this.ops["CreateFolder"].apply(partialParams)
        );
    }

    invokeCreateFolderMembership(partialParams: ToOptional<{
      [K in keyof CreateFolderMembershipRequest & keyof Omit<CreateFolderMembershipRequest, "AwsAccountId"> & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest & keyof CreateFolderMembershipRequest]: (CreateFolderMembershipRequest & Omit<CreateFolderMembershipRequest, "AwsAccountId"> & CreateFolderMembershipRequest & CreateFolderMembershipRequest & CreateFolderMembershipRequest)[K]
    }>): CreateFolderMembershipResponse {
        return this.client.createFolderMembership(
            this.ops["CreateFolderMembership"].apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof Omit<CreateGroupRequest, "AwsAccountId"> & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest]: (CreateGroupRequest & Omit<CreateGroupRequest, "AwsAccountId"> & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest)[K]
    }>): CreateGroupResponse {
        return this.client.createGroup(
            this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateGroupMembership(partialParams: ToOptional<{
      [K in keyof CreateGroupMembershipRequest & keyof Omit<CreateGroupMembershipRequest, "AwsAccountId"> & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest & keyof CreateGroupMembershipRequest]: (CreateGroupMembershipRequest & Omit<CreateGroupMembershipRequest, "AwsAccountId"> & CreateGroupMembershipRequest & CreateGroupMembershipRequest & CreateGroupMembershipRequest)[K]
    }>): CreateGroupMembershipResponse {
        return this.client.createGroupMembership(
            this.ops["CreateGroupMembership"].apply(partialParams)
        );
    }

    invokeCreateIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof CreateIAMPolicyAssignmentRequest & keyof Omit<CreateIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest & keyof CreateIAMPolicyAssignmentRequest]: (CreateIAMPolicyAssignmentRequest & Omit<CreateIAMPolicyAssignmentRequest, "AwsAccountId"> & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest & CreateIAMPolicyAssignmentRequest)[K]
    }>): CreateIAMPolicyAssignmentResponse {
        return this.client.createIAMPolicyAssignment(
            this.ops["CreateIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeCreateIngestion(partialParams: ToOptional<{
      [K in keyof CreateIngestionRequest & keyof Omit<CreateIngestionRequest, "AwsAccountId"> & keyof CreateIngestionRequest & keyof CreateIngestionRequest & keyof CreateIngestionRequest]: (CreateIngestionRequest & Omit<CreateIngestionRequest, "AwsAccountId"> & CreateIngestionRequest & CreateIngestionRequest & CreateIngestionRequest)[K]
    }>): CreateIngestionResponse {
        return this.client.createIngestion(
            this.ops["CreateIngestion"].apply(partialParams)
        );
    }

    invokeCreateNamespace(partialParams: ToOptional<{
      [K in keyof CreateNamespaceRequest & keyof Omit<CreateNamespaceRequest, "AwsAccountId"> & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest & keyof CreateNamespaceRequest]: (CreateNamespaceRequest & Omit<CreateNamespaceRequest, "AwsAccountId"> & CreateNamespaceRequest & CreateNamespaceRequest & CreateNamespaceRequest)[K]
    }>): CreateNamespaceResponse {
        return this.client.createNamespace(
            this.ops["CreateNamespace"].apply(partialParams)
        );
    }

    invokeCreateTemplate(partialParams: ToOptional<{
      [K in keyof CreateTemplateRequest & keyof Omit<CreateTemplateRequest, "AwsAccountId"> & keyof CreateTemplateRequest & keyof CreateTemplateRequest & keyof CreateTemplateRequest]: (CreateTemplateRequest & Omit<CreateTemplateRequest, "AwsAccountId"> & CreateTemplateRequest & CreateTemplateRequest & CreateTemplateRequest)[K]
    }>): CreateTemplateResponse {
        return this.client.createTemplate(
            this.ops["CreateTemplate"].apply(partialParams)
        );
    }

    invokeCreateTemplateAlias(partialParams: ToOptional<{
      [K in keyof CreateTemplateAliasRequest & keyof Omit<CreateTemplateAliasRequest, "AwsAccountId"> & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest & keyof CreateTemplateAliasRequest]: (CreateTemplateAliasRequest & Omit<CreateTemplateAliasRequest, "AwsAccountId"> & CreateTemplateAliasRequest & CreateTemplateAliasRequest & CreateTemplateAliasRequest)[K]
    }>): CreateTemplateAliasResponse {
        return this.client.createTemplateAlias(
            this.ops["CreateTemplateAlias"].apply(partialParams)
        );
    }

    invokeCreateTheme(partialParams: ToOptional<{
      [K in keyof CreateThemeRequest & keyof Omit<CreateThemeRequest, "AwsAccountId"> & keyof CreateThemeRequest & keyof CreateThemeRequest & keyof CreateThemeRequest]: (CreateThemeRequest & Omit<CreateThemeRequest, "AwsAccountId"> & CreateThemeRequest & CreateThemeRequest & CreateThemeRequest)[K]
    }>): CreateThemeResponse {
        return this.client.createTheme(
            this.ops["CreateTheme"].apply(partialParams)
        );
    }

    invokeCreateThemeAlias(partialParams: ToOptional<{
      [K in keyof CreateThemeAliasRequest & keyof Omit<CreateThemeAliasRequest, "AwsAccountId"> & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest & keyof CreateThemeAliasRequest]: (CreateThemeAliasRequest & Omit<CreateThemeAliasRequest, "AwsAccountId"> & CreateThemeAliasRequest & CreateThemeAliasRequest & CreateThemeAliasRequest)[K]
    }>): CreateThemeAliasResponse {
        return this.client.createThemeAlias(
            this.ops["CreateThemeAlias"].apply(partialParams)
        );
    }

    invokeDeleteAccountCustomization(partialParams: ToOptional<{
      [K in keyof DeleteAccountCustomizationRequest & keyof Omit<DeleteAccountCustomizationRequest, "AwsAccountId"> & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest & keyof DeleteAccountCustomizationRequest]: (DeleteAccountCustomizationRequest & Omit<DeleteAccountCustomizationRequest, "AwsAccountId"> & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest & DeleteAccountCustomizationRequest)[K]
    }>): DeleteAccountCustomizationResponse {
        return this.client.deleteAccountCustomization(
            this.ops["DeleteAccountCustomization"].apply(partialParams)
        );
    }

    invokeDeleteAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteAnalysisRequest & keyof Omit<DeleteAnalysisRequest, "AwsAccountId"> & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest & keyof DeleteAnalysisRequest]: (DeleteAnalysisRequest & Omit<DeleteAnalysisRequest, "AwsAccountId"> & DeleteAnalysisRequest & DeleteAnalysisRequest & DeleteAnalysisRequest)[K]
    }>): DeleteAnalysisResponse {
        return this.client.deleteAnalysis(
            this.ops["DeleteAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteDashboard(partialParams: ToOptional<{
      [K in keyof DeleteDashboardRequest & keyof Omit<DeleteDashboardRequest, "AwsAccountId"> & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest & keyof DeleteDashboardRequest]: (DeleteDashboardRequest & Omit<DeleteDashboardRequest, "AwsAccountId"> & DeleteDashboardRequest & DeleteDashboardRequest & DeleteDashboardRequest)[K]
    }>): DeleteDashboardResponse {
        return this.client.deleteDashboard(
            this.ops["DeleteDashboard"].apply(partialParams)
        );
    }

    invokeDeleteDataSet(partialParams: ToOptional<{
      [K in keyof DeleteDataSetRequest & keyof Omit<DeleteDataSetRequest, "AwsAccountId"> & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest]: (DeleteDataSetRequest & Omit<DeleteDataSetRequest, "AwsAccountId"> & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest)[K]
    }>): DeleteDataSetResponse {
        return this.client.deleteDataSet(
            this.ops["DeleteDataSet"].apply(partialParams)
        );
    }

    invokeDeleteDataSource(partialParams: ToOptional<{
      [K in keyof DeleteDataSourceRequest & keyof Omit<DeleteDataSourceRequest, "AwsAccountId"> & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest]: (DeleteDataSourceRequest & Omit<DeleteDataSourceRequest, "AwsAccountId"> & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest)[K]
    }>): DeleteDataSourceResponse {
        return this.client.deleteDataSource(
            this.ops["DeleteDataSource"].apply(partialParams)
        );
    }

    invokeDeleteFolder(partialParams: ToOptional<{
      [K in keyof DeleteFolderRequest & keyof Omit<DeleteFolderRequest, "AwsAccountId"> & keyof DeleteFolderRequest & keyof DeleteFolderRequest & keyof DeleteFolderRequest]: (DeleteFolderRequest & Omit<DeleteFolderRequest, "AwsAccountId"> & DeleteFolderRequest & DeleteFolderRequest & DeleteFolderRequest)[K]
    }>): DeleteFolderResponse {
        return this.client.deleteFolder(
            this.ops["DeleteFolder"].apply(partialParams)
        );
    }

    invokeDeleteFolderMembership(partialParams: ToOptional<{
      [K in keyof DeleteFolderMembershipRequest & keyof Omit<DeleteFolderMembershipRequest, "AwsAccountId"> & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest & keyof DeleteFolderMembershipRequest]: (DeleteFolderMembershipRequest & Omit<DeleteFolderMembershipRequest, "AwsAccountId"> & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest & DeleteFolderMembershipRequest)[K]
    }>): DeleteFolderMembershipResponse {
        return this.client.deleteFolderMembership(
            this.ops["DeleteFolderMembership"].apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest & keyof Omit<DeleteGroupRequest, "AwsAccountId"> & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest]: (DeleteGroupRequest & Omit<DeleteGroupRequest, "AwsAccountId"> & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest)[K]
    }>): DeleteGroupResponse {
        return this.client.deleteGroup(
            this.ops["DeleteGroup"].apply(partialParams)
        );
    }

    invokeDeleteGroupMembership(partialParams: ToOptional<{
      [K in keyof DeleteGroupMembershipRequest & keyof Omit<DeleteGroupMembershipRequest, "AwsAccountId"> & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest & keyof DeleteGroupMembershipRequest]: (DeleteGroupMembershipRequest & Omit<DeleteGroupMembershipRequest, "AwsAccountId"> & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest & DeleteGroupMembershipRequest)[K]
    }>): DeleteGroupMembershipResponse {
        return this.client.deleteGroupMembership(
            this.ops["DeleteGroupMembership"].apply(partialParams)
        );
    }

    invokeDeleteIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof DeleteIAMPolicyAssignmentRequest & keyof Omit<DeleteIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest & keyof DeleteIAMPolicyAssignmentRequest]: (DeleteIAMPolicyAssignmentRequest & Omit<DeleteIAMPolicyAssignmentRequest, "AwsAccountId"> & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest & DeleteIAMPolicyAssignmentRequest)[K]
    }>): DeleteIAMPolicyAssignmentResponse {
        return this.client.deleteIAMPolicyAssignment(
            this.ops["DeleteIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeDeleteNamespace(partialParams: ToOptional<{
      [K in keyof DeleteNamespaceRequest & keyof Omit<DeleteNamespaceRequest, "AwsAccountId"> & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest]: (DeleteNamespaceRequest & Omit<DeleteNamespaceRequest, "AwsAccountId"> & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest)[K]
    }>): DeleteNamespaceResponse {
        return this.client.deleteNamespace(
            this.ops["DeleteNamespace"].apply(partialParams)
        );
    }

    invokeDeleteTemplate(partialParams: ToOptional<{
      [K in keyof DeleteTemplateRequest & keyof Omit<DeleteTemplateRequest, "AwsAccountId"> & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest & keyof DeleteTemplateRequest]: (DeleteTemplateRequest & Omit<DeleteTemplateRequest, "AwsAccountId"> & DeleteTemplateRequest & DeleteTemplateRequest & DeleteTemplateRequest)[K]
    }>): DeleteTemplateResponse {
        return this.client.deleteTemplate(
            this.ops["DeleteTemplate"].apply(partialParams)
        );
    }

    invokeDeleteTemplateAlias(partialParams: ToOptional<{
      [K in keyof DeleteTemplateAliasRequest & keyof Omit<DeleteTemplateAliasRequest, "AwsAccountId"> & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest & keyof DeleteTemplateAliasRequest]: (DeleteTemplateAliasRequest & Omit<DeleteTemplateAliasRequest, "AwsAccountId"> & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest & DeleteTemplateAliasRequest)[K]
    }>): DeleteTemplateAliasResponse {
        return this.client.deleteTemplateAlias(
            this.ops["DeleteTemplateAlias"].apply(partialParams)
        );
    }

    invokeDeleteTheme(partialParams: ToOptional<{
      [K in keyof DeleteThemeRequest & keyof Omit<DeleteThemeRequest, "AwsAccountId"> & keyof DeleteThemeRequest & keyof DeleteThemeRequest & keyof DeleteThemeRequest]: (DeleteThemeRequest & Omit<DeleteThemeRequest, "AwsAccountId"> & DeleteThemeRequest & DeleteThemeRequest & DeleteThemeRequest)[K]
    }>): DeleteThemeResponse {
        return this.client.deleteTheme(
            this.ops["DeleteTheme"].apply(partialParams)
        );
    }

    invokeDeleteThemeAlias(partialParams: ToOptional<{
      [K in keyof DeleteThemeAliasRequest & keyof Omit<DeleteThemeAliasRequest, "AwsAccountId"> & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest & keyof DeleteThemeAliasRequest]: (DeleteThemeAliasRequest & Omit<DeleteThemeAliasRequest, "AwsAccountId"> & DeleteThemeAliasRequest & DeleteThemeAliasRequest & DeleteThemeAliasRequest)[K]
    }>): DeleteThemeAliasResponse {
        return this.client.deleteThemeAlias(
            this.ops["DeleteThemeAlias"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof Omit<DeleteUserRequest, "AwsAccountId"> & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & Omit<DeleteUserRequest, "AwsAccountId"> & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): DeleteUserResponse {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserByPrincipalId(partialParams: ToOptional<{
      [K in keyof DeleteUserByPrincipalIdRequest & keyof Omit<DeleteUserByPrincipalIdRequest, "AwsAccountId"> & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest & keyof DeleteUserByPrincipalIdRequest]: (DeleteUserByPrincipalIdRequest & Omit<DeleteUserByPrincipalIdRequest, "AwsAccountId"> & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest & DeleteUserByPrincipalIdRequest)[K]
    }>): DeleteUserByPrincipalIdResponse {
        return this.client.deleteUserByPrincipalId(
            this.ops["DeleteUserByPrincipalId"].apply(partialParams)
        );
    }

    invokeDescribeAccountCustomization(partialParams: ToOptional<{
      [K in keyof DescribeAccountCustomizationRequest & keyof Omit<DescribeAccountCustomizationRequest, "AwsAccountId"> & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest & keyof DescribeAccountCustomizationRequest]: (DescribeAccountCustomizationRequest & Omit<DescribeAccountCustomizationRequest, "AwsAccountId"> & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest & DescribeAccountCustomizationRequest)[K]
    }>): DescribeAccountCustomizationResponse {
        return this.client.describeAccountCustomization(
            this.ops["DescribeAccountCustomization"].apply(partialParams)
        );
    }

    invokeDescribeAccountSettings(partialParams: ToOptional<{
      [K in keyof DescribeAccountSettingsRequest & keyof Omit<DescribeAccountSettingsRequest, "AwsAccountId"> & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest & keyof DescribeAccountSettingsRequest]: (DescribeAccountSettingsRequest & Omit<DescribeAccountSettingsRequest, "AwsAccountId"> & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest & DescribeAccountSettingsRequest)[K]
    }>): DescribeAccountSettingsResponse {
        return this.client.describeAccountSettings(
            this.ops["DescribeAccountSettings"].apply(partialParams)
        );
    }

    invokeDescribeAnalysis(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisRequest & keyof Omit<DescribeAnalysisRequest, "AwsAccountId"> & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest & keyof DescribeAnalysisRequest]: (DescribeAnalysisRequest & Omit<DescribeAnalysisRequest, "AwsAccountId"> & DescribeAnalysisRequest & DescribeAnalysisRequest & DescribeAnalysisRequest)[K]
    }>): DescribeAnalysisResponse {
        return this.client.describeAnalysis(
            this.ops["DescribeAnalysis"].apply(partialParams)
        );
    }

    invokeDescribeAnalysisPermissions(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisPermissionsRequest & keyof Omit<DescribeAnalysisPermissionsRequest, "AwsAccountId"> & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest & keyof DescribeAnalysisPermissionsRequest]: (DescribeAnalysisPermissionsRequest & Omit<DescribeAnalysisPermissionsRequest, "AwsAccountId"> & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest & DescribeAnalysisPermissionsRequest)[K]
    }>): DescribeAnalysisPermissionsResponse {
        return this.client.describeAnalysisPermissions(
            this.ops["DescribeAnalysisPermissions"].apply(partialParams)
        );
    }

    invokeDescribeDashboard(partialParams: ToOptional<{
      [K in keyof DescribeDashboardRequest & keyof Omit<DescribeDashboardRequest, "AwsAccountId"> & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest & keyof DescribeDashboardRequest]: (DescribeDashboardRequest & Omit<DescribeDashboardRequest, "AwsAccountId"> & DescribeDashboardRequest & DescribeDashboardRequest & DescribeDashboardRequest)[K]
    }>): DescribeDashboardResponse {
        return this.client.describeDashboard(
            this.ops["DescribeDashboard"].apply(partialParams)
        );
    }

    invokeDescribeDashboardPermissions(partialParams: ToOptional<{
      [K in keyof DescribeDashboardPermissionsRequest & keyof Omit<DescribeDashboardPermissionsRequest, "AwsAccountId"> & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest & keyof DescribeDashboardPermissionsRequest]: (DescribeDashboardPermissionsRequest & Omit<DescribeDashboardPermissionsRequest, "AwsAccountId"> & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest & DescribeDashboardPermissionsRequest)[K]
    }>): DescribeDashboardPermissionsResponse {
        return this.client.describeDashboardPermissions(
            this.ops["DescribeDashboardPermissions"].apply(partialParams)
        );
    }

    invokeDescribeDataSet(partialParams: ToOptional<{
      [K in keyof DescribeDataSetRequest & keyof Omit<DescribeDataSetRequest, "AwsAccountId"> & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest & keyof DescribeDataSetRequest]: (DescribeDataSetRequest & Omit<DescribeDataSetRequest, "AwsAccountId"> & DescribeDataSetRequest & DescribeDataSetRequest & DescribeDataSetRequest)[K]
    }>): DescribeDataSetResponse {
        return this.client.describeDataSet(
            this.ops["DescribeDataSet"].apply(partialParams)
        );
    }

    invokeDescribeDataSetPermissions(partialParams: ToOptional<{
      [K in keyof DescribeDataSetPermissionsRequest & keyof Omit<DescribeDataSetPermissionsRequest, "AwsAccountId"> & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest & keyof DescribeDataSetPermissionsRequest]: (DescribeDataSetPermissionsRequest & Omit<DescribeDataSetPermissionsRequest, "AwsAccountId"> & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest & DescribeDataSetPermissionsRequest)[K]
    }>): DescribeDataSetPermissionsResponse {
        return this.client.describeDataSetPermissions(
            this.ops["DescribeDataSetPermissions"].apply(partialParams)
        );
    }

    invokeDescribeDataSource(partialParams: ToOptional<{
      [K in keyof DescribeDataSourceRequest & keyof Omit<DescribeDataSourceRequest, "AwsAccountId"> & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest & keyof DescribeDataSourceRequest]: (DescribeDataSourceRequest & Omit<DescribeDataSourceRequest, "AwsAccountId"> & DescribeDataSourceRequest & DescribeDataSourceRequest & DescribeDataSourceRequest)[K]
    }>): DescribeDataSourceResponse {
        return this.client.describeDataSource(
            this.ops["DescribeDataSource"].apply(partialParams)
        );
    }

    invokeDescribeDataSourcePermissions(partialParams: ToOptional<{
      [K in keyof DescribeDataSourcePermissionsRequest & keyof Omit<DescribeDataSourcePermissionsRequest, "AwsAccountId"> & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest & keyof DescribeDataSourcePermissionsRequest]: (DescribeDataSourcePermissionsRequest & Omit<DescribeDataSourcePermissionsRequest, "AwsAccountId"> & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest & DescribeDataSourcePermissionsRequest)[K]
    }>): DescribeDataSourcePermissionsResponse {
        return this.client.describeDataSourcePermissions(
            this.ops["DescribeDataSourcePermissions"].apply(partialParams)
        );
    }

    invokeDescribeFolder(partialParams: ToOptional<{
      [K in keyof DescribeFolderRequest & keyof Omit<DescribeFolderRequest, "AwsAccountId"> & keyof DescribeFolderRequest & keyof DescribeFolderRequest & keyof DescribeFolderRequest]: (DescribeFolderRequest & Omit<DescribeFolderRequest, "AwsAccountId"> & DescribeFolderRequest & DescribeFolderRequest & DescribeFolderRequest)[K]
    }>): DescribeFolderResponse {
        return this.client.describeFolder(
            this.ops["DescribeFolder"].apply(partialParams)
        );
    }

    invokeDescribeFolderPermissions(partialParams: ToOptional<{
      [K in keyof DescribeFolderPermissionsRequest & keyof Omit<DescribeFolderPermissionsRequest, "AwsAccountId"> & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest & keyof DescribeFolderPermissionsRequest]: (DescribeFolderPermissionsRequest & Omit<DescribeFolderPermissionsRequest, "AwsAccountId"> & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest & DescribeFolderPermissionsRequest)[K]
    }>): DescribeFolderPermissionsResponse {
        return this.client.describeFolderPermissions(
            this.ops["DescribeFolderPermissions"].apply(partialParams)
        );
    }

    invokeDescribeFolderResolvedPermissions(partialParams: ToOptional<{
      [K in keyof DescribeFolderResolvedPermissionsRequest & keyof Omit<DescribeFolderResolvedPermissionsRequest, "AwsAccountId"> & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest & keyof DescribeFolderResolvedPermissionsRequest]: (DescribeFolderResolvedPermissionsRequest & Omit<DescribeFolderResolvedPermissionsRequest, "AwsAccountId"> & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest & DescribeFolderResolvedPermissionsRequest)[K]
    }>): DescribeFolderResolvedPermissionsResponse {
        return this.client.describeFolderResolvedPermissions(
            this.ops["DescribeFolderResolvedPermissions"].apply(partialParams)
        );
    }

    invokeDescribeGroup(partialParams: ToOptional<{
      [K in keyof DescribeGroupRequest & keyof Omit<DescribeGroupRequest, "AwsAccountId"> & keyof DescribeGroupRequest & keyof DescribeGroupRequest & keyof DescribeGroupRequest]: (DescribeGroupRequest & Omit<DescribeGroupRequest, "AwsAccountId"> & DescribeGroupRequest & DescribeGroupRequest & DescribeGroupRequest)[K]
    }>): DescribeGroupResponse {
        return this.client.describeGroup(
            this.ops["DescribeGroup"].apply(partialParams)
        );
    }

    invokeDescribeIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof DescribeIAMPolicyAssignmentRequest & keyof Omit<DescribeIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest & keyof DescribeIAMPolicyAssignmentRequest]: (DescribeIAMPolicyAssignmentRequest & Omit<DescribeIAMPolicyAssignmentRequest, "AwsAccountId"> & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest & DescribeIAMPolicyAssignmentRequest)[K]
    }>): DescribeIAMPolicyAssignmentResponse {
        return this.client.describeIAMPolicyAssignment(
            this.ops["DescribeIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeDescribeIngestion(partialParams: ToOptional<{
      [K in keyof DescribeIngestionRequest & keyof Omit<DescribeIngestionRequest, "AwsAccountId"> & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest & keyof DescribeIngestionRequest]: (DescribeIngestionRequest & Omit<DescribeIngestionRequest, "AwsAccountId"> & DescribeIngestionRequest & DescribeIngestionRequest & DescribeIngestionRequest)[K]
    }>): DescribeIngestionResponse {
        return this.client.describeIngestion(
            this.ops["DescribeIngestion"].apply(partialParams)
        );
    }

    invokeDescribeIpRestriction(partialParams: ToOptional<{
      [K in keyof DescribeIpRestrictionRequest & keyof Omit<DescribeIpRestrictionRequest, "AwsAccountId"> & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest & keyof DescribeIpRestrictionRequest]: (DescribeIpRestrictionRequest & Omit<DescribeIpRestrictionRequest, "AwsAccountId"> & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest & DescribeIpRestrictionRequest)[K]
    }>): DescribeIpRestrictionResponse {
        return this.client.describeIpRestriction(
            this.ops["DescribeIpRestriction"].apply(partialParams)
        );
    }

    invokeDescribeNamespace(partialParams: ToOptional<{
      [K in keyof DescribeNamespaceRequest & keyof Omit<DescribeNamespaceRequest, "AwsAccountId"> & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest & keyof DescribeNamespaceRequest]: (DescribeNamespaceRequest & Omit<DescribeNamespaceRequest, "AwsAccountId"> & DescribeNamespaceRequest & DescribeNamespaceRequest & DescribeNamespaceRequest)[K]
    }>): DescribeNamespaceResponse {
        return this.client.describeNamespace(
            this.ops["DescribeNamespace"].apply(partialParams)
        );
    }

    invokeDescribeTemplate(partialParams: ToOptional<{
      [K in keyof DescribeTemplateRequest & keyof Omit<DescribeTemplateRequest, "AwsAccountId"> & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest & keyof DescribeTemplateRequest]: (DescribeTemplateRequest & Omit<DescribeTemplateRequest, "AwsAccountId"> & DescribeTemplateRequest & DescribeTemplateRequest & DescribeTemplateRequest)[K]
    }>): DescribeTemplateResponse {
        return this.client.describeTemplate(
            this.ops["DescribeTemplate"].apply(partialParams)
        );
    }

    invokeDescribeTemplateAlias(partialParams: ToOptional<{
      [K in keyof DescribeTemplateAliasRequest & keyof Omit<DescribeTemplateAliasRequest, "AwsAccountId"> & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest & keyof DescribeTemplateAliasRequest]: (DescribeTemplateAliasRequest & Omit<DescribeTemplateAliasRequest, "AwsAccountId"> & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest & DescribeTemplateAliasRequest)[K]
    }>): DescribeTemplateAliasResponse {
        return this.client.describeTemplateAlias(
            this.ops["DescribeTemplateAlias"].apply(partialParams)
        );
    }

    invokeDescribeTemplatePermissions(partialParams: ToOptional<{
      [K in keyof DescribeTemplatePermissionsRequest & keyof Omit<DescribeTemplatePermissionsRequest, "AwsAccountId"> & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest & keyof DescribeTemplatePermissionsRequest]: (DescribeTemplatePermissionsRequest & Omit<DescribeTemplatePermissionsRequest, "AwsAccountId"> & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest & DescribeTemplatePermissionsRequest)[K]
    }>): DescribeTemplatePermissionsResponse {
        return this.client.describeTemplatePermissions(
            this.ops["DescribeTemplatePermissions"].apply(partialParams)
        );
    }

    invokeDescribeTheme(partialParams: ToOptional<{
      [K in keyof DescribeThemeRequest & keyof Omit<DescribeThemeRequest, "AwsAccountId"> & keyof DescribeThemeRequest & keyof DescribeThemeRequest & keyof DescribeThemeRequest]: (DescribeThemeRequest & Omit<DescribeThemeRequest, "AwsAccountId"> & DescribeThemeRequest & DescribeThemeRequest & DescribeThemeRequest)[K]
    }>): DescribeThemeResponse {
        return this.client.describeTheme(
            this.ops["DescribeTheme"].apply(partialParams)
        );
    }

    invokeDescribeThemeAlias(partialParams: ToOptional<{
      [K in keyof DescribeThemeAliasRequest & keyof Omit<DescribeThemeAliasRequest, "AwsAccountId"> & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest & keyof DescribeThemeAliasRequest]: (DescribeThemeAliasRequest & Omit<DescribeThemeAliasRequest, "AwsAccountId"> & DescribeThemeAliasRequest & DescribeThemeAliasRequest & DescribeThemeAliasRequest)[K]
    }>): DescribeThemeAliasResponse {
        return this.client.describeThemeAlias(
            this.ops["DescribeThemeAlias"].apply(partialParams)
        );
    }

    invokeDescribeThemePermissions(partialParams: ToOptional<{
      [K in keyof DescribeThemePermissionsRequest & keyof Omit<DescribeThemePermissionsRequest, "AwsAccountId"> & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest & keyof DescribeThemePermissionsRequest]: (DescribeThemePermissionsRequest & Omit<DescribeThemePermissionsRequest, "AwsAccountId"> & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest & DescribeThemePermissionsRequest)[K]
    }>): DescribeThemePermissionsResponse {
        return this.client.describeThemePermissions(
            this.ops["DescribeThemePermissions"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof Omit<DescribeUserRequest, "AwsAccountId"> & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & Omit<DescribeUserRequest, "AwsAccountId"> & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): DescribeUserResponse {
        return this.client.describeUser(
            this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeGenerateEmbedUrlForAnonymousUser(partialParams: ToOptional<{
      [K in keyof GenerateEmbedUrlForAnonymousUserRequest & keyof Omit<GenerateEmbedUrlForAnonymousUserRequest, "AwsAccountId"> & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest & keyof GenerateEmbedUrlForAnonymousUserRequest]: (GenerateEmbedUrlForAnonymousUserRequest & Omit<GenerateEmbedUrlForAnonymousUserRequest, "AwsAccountId"> & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest & GenerateEmbedUrlForAnonymousUserRequest)[K]
    }>): GenerateEmbedUrlForAnonymousUserResponse {
        return this.client.generateEmbedUrlForAnonymousUser(
            this.ops["GenerateEmbedUrlForAnonymousUser"].apply(partialParams)
        );
    }

    invokeGenerateEmbedUrlForRegisteredUser(partialParams: ToOptional<{
      [K in keyof Omit<GenerateEmbedUrlForRegisteredUserRequest, "UserArn"> & keyof Omit<GenerateEmbedUrlForRegisteredUserRequest, "AwsAccountId"> & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest & keyof GenerateEmbedUrlForRegisteredUserRequest]: (Omit<GenerateEmbedUrlForRegisteredUserRequest, "UserArn"> & Omit<GenerateEmbedUrlForRegisteredUserRequest, "AwsAccountId"> & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest & GenerateEmbedUrlForRegisteredUserRequest)[K]
    }>): GenerateEmbedUrlForRegisteredUserResponse {
        return this.client.generateEmbedUrlForRegisteredUser(
            this.ops["GenerateEmbedUrlForRegisteredUser"].apply(partialParams)
        );
    }

    invokeGetDashboardEmbedUrl(partialParams: ToOptional<{
      [K in keyof GetDashboardEmbedUrlRequest & keyof Omit<GetDashboardEmbedUrlRequest, "AwsAccountId"> & keyof GetDashboardEmbedUrlRequest & keyof GetDashboardEmbedUrlRequest & keyof GetDashboardEmbedUrlRequest]: (GetDashboardEmbedUrlRequest & Omit<GetDashboardEmbedUrlRequest, "AwsAccountId"> & GetDashboardEmbedUrlRequest & GetDashboardEmbedUrlRequest & GetDashboardEmbedUrlRequest)[K]
    }>): GetDashboardEmbedUrlResponse {
        return this.client.getDashboardEmbedUrl(
            this.ops["GetDashboardEmbedUrl"].apply(partialParams)
        );
    }

    invokeGetSessionEmbedUrl(partialParams: ToOptional<{
      [K in keyof GetSessionEmbedUrlRequest & keyof Omit<GetSessionEmbedUrlRequest, "AwsAccountId"> & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest & keyof GetSessionEmbedUrlRequest]: (GetSessionEmbedUrlRequest & Omit<GetSessionEmbedUrlRequest, "AwsAccountId"> & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest & GetSessionEmbedUrlRequest)[K]
    }>): GetSessionEmbedUrlResponse {
        return this.client.getSessionEmbedUrl(
            this.ops["GetSessionEmbedUrl"].apply(partialParams)
        );
    }

    invokeListAnalyses(partialParams: ToOptional<{
      [K in keyof ListAnalysesRequest & keyof Omit<ListAnalysesRequest, "AwsAccountId"> & keyof ListAnalysesRequest & keyof ListAnalysesRequest & keyof ListAnalysesRequest]: (ListAnalysesRequest & Omit<ListAnalysesRequest, "AwsAccountId"> & ListAnalysesRequest & ListAnalysesRequest & ListAnalysesRequest)[K]
    }>): ListAnalysesResponse {
        return this.client.listAnalyses(
            this.ops["ListAnalyses"].apply(partialParams)
        );
    }

    invokeListDashboardVersions(partialParams: ToOptional<{
      [K in keyof ListDashboardVersionsRequest & keyof Omit<ListDashboardVersionsRequest, "AwsAccountId"> & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest & keyof ListDashboardVersionsRequest]: (ListDashboardVersionsRequest & Omit<ListDashboardVersionsRequest, "AwsAccountId"> & ListDashboardVersionsRequest & ListDashboardVersionsRequest & ListDashboardVersionsRequest)[K]
    }>): ListDashboardVersionsResponse {
        return this.client.listDashboardVersions(
            this.ops["ListDashboardVersions"].apply(partialParams)
        );
    }

    invokeListDashboards(partialParams: ToOptional<{
      [K in keyof ListDashboardsRequest & keyof Omit<ListDashboardsRequest, "AwsAccountId"> & keyof ListDashboardsRequest & keyof ListDashboardsRequest & keyof ListDashboardsRequest]: (ListDashboardsRequest & Omit<ListDashboardsRequest, "AwsAccountId"> & ListDashboardsRequest & ListDashboardsRequest & ListDashboardsRequest)[K]
    }>): ListDashboardsResponse {
        return this.client.listDashboards(
            this.ops["ListDashboards"].apply(partialParams)
        );
    }

    invokeListDataSets(partialParams: ToOptional<{
      [K in keyof ListDataSetsRequest & keyof Omit<ListDataSetsRequest, "AwsAccountId"> & keyof ListDataSetsRequest & keyof ListDataSetsRequest & keyof ListDataSetsRequest]: (ListDataSetsRequest & Omit<ListDataSetsRequest, "AwsAccountId"> & ListDataSetsRequest & ListDataSetsRequest & ListDataSetsRequest)[K]
    }>): ListDataSetsResponse {
        return this.client.listDataSets(
            this.ops["ListDataSets"].apply(partialParams)
        );
    }

    invokeListDataSources(partialParams: ToOptional<{
      [K in keyof ListDataSourcesRequest & keyof Omit<ListDataSourcesRequest, "AwsAccountId"> & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest]: (ListDataSourcesRequest & Omit<ListDataSourcesRequest, "AwsAccountId"> & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest)[K]
    }>): ListDataSourcesResponse {
        return this.client.listDataSources(
            this.ops["ListDataSources"].apply(partialParams)
        );
    }

    invokeListFolderMembers(partialParams: ToOptional<{
      [K in keyof ListFolderMembersRequest & keyof Omit<ListFolderMembersRequest, "AwsAccountId"> & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest & keyof ListFolderMembersRequest]: (ListFolderMembersRequest & Omit<ListFolderMembersRequest, "AwsAccountId"> & ListFolderMembersRequest & ListFolderMembersRequest & ListFolderMembersRequest)[K]
    }>): ListFolderMembersResponse {
        return this.client.listFolderMembers(
            this.ops["ListFolderMembers"].apply(partialParams)
        );
    }

    invokeListFolders(partialParams: ToOptional<{
      [K in keyof ListFoldersRequest & keyof Omit<ListFoldersRequest, "AwsAccountId"> & keyof ListFoldersRequest & keyof ListFoldersRequest & keyof ListFoldersRequest]: (ListFoldersRequest & Omit<ListFoldersRequest, "AwsAccountId"> & ListFoldersRequest & ListFoldersRequest & ListFoldersRequest)[K]
    }>): ListFoldersResponse {
        return this.client.listFolders(
            this.ops["ListFolders"].apply(partialParams)
        );
    }

    invokeListGroupMemberships(partialParams: ToOptional<{
      [K in keyof ListGroupMembershipsRequest & keyof Omit<ListGroupMembershipsRequest, "AwsAccountId"> & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest & keyof ListGroupMembershipsRequest]: (ListGroupMembershipsRequest & Omit<ListGroupMembershipsRequest, "AwsAccountId"> & ListGroupMembershipsRequest & ListGroupMembershipsRequest & ListGroupMembershipsRequest)[K]
    }>): ListGroupMembershipsResponse {
        return this.client.listGroupMemberships(
            this.ops["ListGroupMemberships"].apply(partialParams)
        );
    }

    invokeListGroups(partialParams: ToOptional<{
      [K in keyof ListGroupsRequest & keyof Omit<ListGroupsRequest, "AwsAccountId"> & keyof ListGroupsRequest & keyof ListGroupsRequest & keyof ListGroupsRequest]: (ListGroupsRequest & Omit<ListGroupsRequest, "AwsAccountId"> & ListGroupsRequest & ListGroupsRequest & ListGroupsRequest)[K]
    }>): ListGroupsResponse {
        return this.client.listGroups(
            this.ops["ListGroups"].apply(partialParams)
        );
    }

    invokeListIAMPolicyAssignments(partialParams: ToOptional<{
      [K in keyof ListIAMPolicyAssignmentsRequest & keyof Omit<ListIAMPolicyAssignmentsRequest, "AwsAccountId"> & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest & keyof ListIAMPolicyAssignmentsRequest]: (ListIAMPolicyAssignmentsRequest & Omit<ListIAMPolicyAssignmentsRequest, "AwsAccountId"> & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest & ListIAMPolicyAssignmentsRequest)[K]
    }>): ListIAMPolicyAssignmentsResponse {
        return this.client.listIAMPolicyAssignments(
            this.ops["ListIAMPolicyAssignments"].apply(partialParams)
        );
    }

    invokeListIAMPolicyAssignmentsForUser(partialParams: ToOptional<{
      [K in keyof ListIAMPolicyAssignmentsForUserRequest & keyof Omit<ListIAMPolicyAssignmentsForUserRequest, "AwsAccountId"> & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest & keyof ListIAMPolicyAssignmentsForUserRequest]: (ListIAMPolicyAssignmentsForUserRequest & Omit<ListIAMPolicyAssignmentsForUserRequest, "AwsAccountId"> & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest & ListIAMPolicyAssignmentsForUserRequest)[K]
    }>): ListIAMPolicyAssignmentsForUserResponse {
        return this.client.listIAMPolicyAssignmentsForUser(
            this.ops["ListIAMPolicyAssignmentsForUser"].apply(partialParams)
        );
    }

    invokeListIngestions(partialParams: ToOptional<{
      [K in keyof ListIngestionsRequest & keyof Omit<ListIngestionsRequest, "AwsAccountId"> & keyof ListIngestionsRequest & keyof ListIngestionsRequest & keyof ListIngestionsRequest]: (ListIngestionsRequest & Omit<ListIngestionsRequest, "AwsAccountId"> & ListIngestionsRequest & ListIngestionsRequest & ListIngestionsRequest)[K]
    }>): ListIngestionsResponse {
        return this.client.listIngestions(
            this.ops["ListIngestions"].apply(partialParams)
        );
    }

    invokeListNamespaces(partialParams: ToOptional<{
      [K in keyof ListNamespacesRequest & keyof Omit<ListNamespacesRequest, "AwsAccountId"> & keyof ListNamespacesRequest & keyof ListNamespacesRequest & keyof ListNamespacesRequest]: (ListNamespacesRequest & Omit<ListNamespacesRequest, "AwsAccountId"> & ListNamespacesRequest & ListNamespacesRequest & ListNamespacesRequest)[K]
    }>): ListNamespacesResponse {
        return this.client.listNamespaces(
            this.ops["ListNamespaces"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTemplateAliases(partialParams: ToOptional<{
      [K in keyof ListTemplateAliasesRequest & keyof Omit<ListTemplateAliasesRequest, "AwsAccountId"> & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest & keyof ListTemplateAliasesRequest]: (ListTemplateAliasesRequest & Omit<ListTemplateAliasesRequest, "AwsAccountId"> & ListTemplateAliasesRequest & ListTemplateAliasesRequest & ListTemplateAliasesRequest)[K]
    }>): ListTemplateAliasesResponse {
        return this.client.listTemplateAliases(
            this.ops["ListTemplateAliases"].apply(partialParams)
        );
    }

    invokeListTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListTemplateVersionsRequest & keyof Omit<ListTemplateVersionsRequest, "AwsAccountId"> & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest]: (ListTemplateVersionsRequest & Omit<ListTemplateVersionsRequest, "AwsAccountId"> & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest)[K]
    }>): ListTemplateVersionsResponse {
        return this.client.listTemplateVersions(
            this.ops["ListTemplateVersions"].apply(partialParams)
        );
    }

    invokeListTemplates(partialParams: ToOptional<{
      [K in keyof ListTemplatesRequest & keyof Omit<ListTemplatesRequest, "AwsAccountId"> & keyof ListTemplatesRequest & keyof ListTemplatesRequest & keyof ListTemplatesRequest]: (ListTemplatesRequest & Omit<ListTemplatesRequest, "AwsAccountId"> & ListTemplatesRequest & ListTemplatesRequest & ListTemplatesRequest)[K]
    }>): ListTemplatesResponse {
        return this.client.listTemplates(
            this.ops["ListTemplates"].apply(partialParams)
        );
    }

    invokeListThemeAliases(partialParams: ToOptional<{
      [K in keyof ListThemeAliasesRequest & keyof Omit<ListThemeAliasesRequest, "AwsAccountId"> & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest & keyof ListThemeAliasesRequest]: (ListThemeAliasesRequest & Omit<ListThemeAliasesRequest, "AwsAccountId"> & ListThemeAliasesRequest & ListThemeAliasesRequest & ListThemeAliasesRequest)[K]
    }>): ListThemeAliasesResponse {
        return this.client.listThemeAliases(
            this.ops["ListThemeAliases"].apply(partialParams)
        );
    }

    invokeListThemeVersions(partialParams: ToOptional<{
      [K in keyof ListThemeVersionsRequest & keyof Omit<ListThemeVersionsRequest, "AwsAccountId"> & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest & keyof ListThemeVersionsRequest]: (ListThemeVersionsRequest & Omit<ListThemeVersionsRequest, "AwsAccountId"> & ListThemeVersionsRequest & ListThemeVersionsRequest & ListThemeVersionsRequest)[K]
    }>): ListThemeVersionsResponse {
        return this.client.listThemeVersions(
            this.ops["ListThemeVersions"].apply(partialParams)
        );
    }

    invokeListThemes(partialParams: ToOptional<{
      [K in keyof ListThemesRequest & keyof Omit<ListThemesRequest, "AwsAccountId"> & keyof ListThemesRequest & keyof ListThemesRequest & keyof ListThemesRequest]: (ListThemesRequest & Omit<ListThemesRequest, "AwsAccountId"> & ListThemesRequest & ListThemesRequest & ListThemesRequest)[K]
    }>): ListThemesResponse {
        return this.client.listThemes(
            this.ops["ListThemes"].apply(partialParams)
        );
    }

    invokeListUserGroups(partialParams: ToOptional<{
      [K in keyof ListUserGroupsRequest & keyof Omit<ListUserGroupsRequest, "AwsAccountId"> & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest & keyof ListUserGroupsRequest]: (ListUserGroupsRequest & Omit<ListUserGroupsRequest, "AwsAccountId"> & ListUserGroupsRequest & ListUserGroupsRequest & ListUserGroupsRequest)[K]
    }>): ListUserGroupsResponse {
        return this.client.listUserGroups(
            this.ops["ListUserGroups"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof Omit<ListUsersRequest, "AwsAccountId"> & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & Omit<ListUsersRequest, "AwsAccountId"> & ListUsersRequest & ListUsersRequest & ListUsersRequest)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeRegisterUser(partialParams: ToOptional<{
      [K in keyof RegisterUserRequest & keyof Omit<RegisterUserRequest, "AwsAccountId"> & keyof RegisterUserRequest & keyof RegisterUserRequest & keyof RegisterUserRequest]: (RegisterUserRequest & Omit<RegisterUserRequest, "AwsAccountId"> & RegisterUserRequest & RegisterUserRequest & RegisterUserRequest)[K]
    }>): RegisterUserResponse {
        return this.client.registerUser(
            this.ops["RegisterUser"].apply(partialParams)
        );
    }

    invokeRestoreAnalysis(partialParams: ToOptional<{
      [K in keyof RestoreAnalysisRequest & keyof Omit<RestoreAnalysisRequest, "AwsAccountId"> & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest & keyof RestoreAnalysisRequest]: (RestoreAnalysisRequest & Omit<RestoreAnalysisRequest, "AwsAccountId"> & RestoreAnalysisRequest & RestoreAnalysisRequest & RestoreAnalysisRequest)[K]
    }>): RestoreAnalysisResponse {
        return this.client.restoreAnalysis(
            this.ops["RestoreAnalysis"].apply(partialParams)
        );
    }

    invokeSearchAnalyses(partialParams: ToOptional<{
      [K in keyof SearchAnalysesRequest & keyof Omit<SearchAnalysesRequest, "AwsAccountId"> & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest & keyof SearchAnalysesRequest]: (SearchAnalysesRequest & Omit<SearchAnalysesRequest, "AwsAccountId"> & SearchAnalysesRequest & SearchAnalysesRequest & SearchAnalysesRequest)[K]
    }>): SearchAnalysesResponse {
        return this.client.searchAnalyses(
            this.ops["SearchAnalyses"].apply(partialParams)
        );
    }

    invokeSearchDashboards(partialParams: ToOptional<{
      [K in keyof SearchDashboardsRequest & keyof Omit<SearchDashboardsRequest, "AwsAccountId"> & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest & keyof SearchDashboardsRequest]: (SearchDashboardsRequest & Omit<SearchDashboardsRequest, "AwsAccountId"> & SearchDashboardsRequest & SearchDashboardsRequest & SearchDashboardsRequest)[K]
    }>): SearchDashboardsResponse {
        return this.client.searchDashboards(
            this.ops["SearchDashboards"].apply(partialParams)
        );
    }

    invokeSearchFolders(partialParams: ToOptional<{
      [K in keyof SearchFoldersRequest & keyof Omit<SearchFoldersRequest, "AwsAccountId"> & keyof SearchFoldersRequest & keyof SearchFoldersRequest & keyof SearchFoldersRequest]: (SearchFoldersRequest & Omit<SearchFoldersRequest, "AwsAccountId"> & SearchFoldersRequest & SearchFoldersRequest & SearchFoldersRequest)[K]
    }>): SearchFoldersResponse {
        return this.client.searchFolders(
            this.ops["SearchFolders"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccountCustomization(partialParams: ToOptional<{
      [K in keyof UpdateAccountCustomizationRequest & keyof Omit<UpdateAccountCustomizationRequest, "AwsAccountId"> & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest & keyof UpdateAccountCustomizationRequest]: (UpdateAccountCustomizationRequest & Omit<UpdateAccountCustomizationRequest, "AwsAccountId"> & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest & UpdateAccountCustomizationRequest)[K]
    }>): UpdateAccountCustomizationResponse {
        return this.client.updateAccountCustomization(
            this.ops["UpdateAccountCustomization"].apply(partialParams)
        );
    }

    invokeUpdateAccountSettings(partialParams: ToOptional<{
      [K in keyof UpdateAccountSettingsRequest & keyof Omit<UpdateAccountSettingsRequest, "AwsAccountId"> & keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest & keyof UpdateAccountSettingsRequest]: (UpdateAccountSettingsRequest & Omit<UpdateAccountSettingsRequest, "AwsAccountId"> & UpdateAccountSettingsRequest & UpdateAccountSettingsRequest & UpdateAccountSettingsRequest)[K]
    }>): UpdateAccountSettingsResponse {
        return this.client.updateAccountSettings(
            this.ops["UpdateAccountSettings"].apply(partialParams)
        );
    }

    invokeUpdateAnalysis(partialParams: ToOptional<{
      [K in keyof UpdateAnalysisRequest & keyof Omit<UpdateAnalysisRequest, "AwsAccountId"> & keyof UpdateAnalysisRequest & keyof Omit<UpdateAnalysisRequest, "Name"> & keyof UpdateAnalysisRequest]: (UpdateAnalysisRequest & Omit<UpdateAnalysisRequest, "AwsAccountId"> & UpdateAnalysisRequest & Omit<UpdateAnalysisRequest, "Name"> & UpdateAnalysisRequest)[K]
    }>): UpdateAnalysisResponse {
        return this.client.updateAnalysis(
            this.ops["UpdateAnalysis"].apply(partialParams)
        );
    }

    invokeUpdateAnalysisPermissions(partialParams: ToOptional<{
      [K in keyof UpdateAnalysisPermissionsRequest & keyof Omit<UpdateAnalysisPermissionsRequest, "AwsAccountId"> & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest & keyof UpdateAnalysisPermissionsRequest]: (UpdateAnalysisPermissionsRequest & Omit<UpdateAnalysisPermissionsRequest, "AwsAccountId"> & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest & UpdateAnalysisPermissionsRequest)[K]
    }>): UpdateAnalysisPermissionsResponse {
        return this.client.updateAnalysisPermissions(
            this.ops["UpdateAnalysisPermissions"].apply(partialParams)
        );
    }

    invokeUpdateDashboard(partialParams: ToOptional<{
      [K in keyof UpdateDashboardRequest & keyof Omit<UpdateDashboardRequest, "AwsAccountId"> & keyof UpdateDashboardRequest & keyof Omit<UpdateDashboardRequest, "Name"> & keyof UpdateDashboardRequest]: (UpdateDashboardRequest & Omit<UpdateDashboardRequest, "AwsAccountId"> & UpdateDashboardRequest & Omit<UpdateDashboardRequest, "Name"> & UpdateDashboardRequest)[K]
    }>): UpdateDashboardResponse {
        return this.client.updateDashboard(
            this.ops["UpdateDashboard"].apply(partialParams)
        );
    }

    invokeUpdateDashboardPermissions(partialParams: ToOptional<{
      [K in keyof UpdateDashboardPermissionsRequest & keyof Omit<UpdateDashboardPermissionsRequest, "AwsAccountId"> & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest & keyof UpdateDashboardPermissionsRequest]: (UpdateDashboardPermissionsRequest & Omit<UpdateDashboardPermissionsRequest, "AwsAccountId"> & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest & UpdateDashboardPermissionsRequest)[K]
    }>): UpdateDashboardPermissionsResponse {
        return this.client.updateDashboardPermissions(
            this.ops["UpdateDashboardPermissions"].apply(partialParams)
        );
    }

    invokeUpdateDashboardPublishedVersion(partialParams: ToOptional<{
      [K in keyof UpdateDashboardPublishedVersionRequest & keyof Omit<UpdateDashboardPublishedVersionRequest, "AwsAccountId"> & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest & keyof UpdateDashboardPublishedVersionRequest]: (UpdateDashboardPublishedVersionRequest & Omit<UpdateDashboardPublishedVersionRequest, "AwsAccountId"> & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest & UpdateDashboardPublishedVersionRequest)[K]
    }>): UpdateDashboardPublishedVersionResponse {
        return this.client.updateDashboardPublishedVersion(
            this.ops["UpdateDashboardPublishedVersion"].apply(partialParams)
        );
    }

    invokeUpdateDataSet(partialParams: ToOptional<{
      [K in keyof UpdateDataSetRequest & keyof Omit<UpdateDataSetRequest, "AwsAccountId"> & keyof UpdateDataSetRequest & keyof Omit<UpdateDataSetRequest, "Name"> & keyof UpdateDataSetRequest]: (UpdateDataSetRequest & Omit<UpdateDataSetRequest, "AwsAccountId"> & UpdateDataSetRequest & Omit<UpdateDataSetRequest, "Name"> & UpdateDataSetRequest)[K]
    }>): UpdateDataSetResponse {
        return this.client.updateDataSet(
            this.ops["UpdateDataSet"].apply(partialParams)
        );
    }

    invokeUpdateDataSetPermissions(partialParams: ToOptional<{
      [K in keyof UpdateDataSetPermissionsRequest & keyof Omit<UpdateDataSetPermissionsRequest, "AwsAccountId"> & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest & keyof UpdateDataSetPermissionsRequest]: (UpdateDataSetPermissionsRequest & Omit<UpdateDataSetPermissionsRequest, "AwsAccountId"> & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest & UpdateDataSetPermissionsRequest)[K]
    }>): UpdateDataSetPermissionsResponse {
        return this.client.updateDataSetPermissions(
            this.ops["UpdateDataSetPermissions"].apply(partialParams)
        );
    }

    invokeUpdateDataSource(partialParams: ToOptional<{
      [K in keyof UpdateDataSourceRequest & keyof Omit<UpdateDataSourceRequest, "AwsAccountId"> & keyof Omit<UpdateDataSourceRequest, "DataSourceId"> & keyof Omit<UpdateDataSourceRequest, "Name"> & keyof UpdateDataSourceRequest]: (UpdateDataSourceRequest & Omit<UpdateDataSourceRequest, "AwsAccountId"> & Omit<UpdateDataSourceRequest, "DataSourceId"> & Omit<UpdateDataSourceRequest, "Name"> & UpdateDataSourceRequest)[K]
    }>): UpdateDataSourceResponse {
        return this.client.updateDataSource(
            this.ops["UpdateDataSource"].apply(partialParams)
        );
    }

    invokeUpdateDataSourcePermissions(partialParams: ToOptional<{
      [K in keyof UpdateDataSourcePermissionsRequest & keyof Omit<UpdateDataSourcePermissionsRequest, "AwsAccountId"> & keyof Omit<UpdateDataSourcePermissionsRequest, "DataSourceId"> & keyof UpdateDataSourcePermissionsRequest & keyof UpdateDataSourcePermissionsRequest]: (UpdateDataSourcePermissionsRequest & Omit<UpdateDataSourcePermissionsRequest, "AwsAccountId"> & Omit<UpdateDataSourcePermissionsRequest, "DataSourceId"> & UpdateDataSourcePermissionsRequest & UpdateDataSourcePermissionsRequest)[K]
    }>): UpdateDataSourcePermissionsResponse {
        return this.client.updateDataSourcePermissions(
            this.ops["UpdateDataSourcePermissions"].apply(partialParams)
        );
    }

    invokeUpdateFolder(partialParams: ToOptional<{
      [K in keyof UpdateFolderRequest & keyof Omit<UpdateFolderRequest, "AwsAccountId"> & keyof UpdateFolderRequest & keyof Omit<UpdateFolderRequest, "Name"> & keyof UpdateFolderRequest]: (UpdateFolderRequest & Omit<UpdateFolderRequest, "AwsAccountId"> & UpdateFolderRequest & Omit<UpdateFolderRequest, "Name"> & UpdateFolderRequest)[K]
    }>): UpdateFolderResponse {
        return this.client.updateFolder(
            this.ops["UpdateFolder"].apply(partialParams)
        );
    }

    invokeUpdateFolderPermissions(partialParams: ToOptional<{
      [K in keyof UpdateFolderPermissionsRequest & keyof Omit<UpdateFolderPermissionsRequest, "AwsAccountId"> & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest & keyof UpdateFolderPermissionsRequest]: (UpdateFolderPermissionsRequest & Omit<UpdateFolderPermissionsRequest, "AwsAccountId"> & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest & UpdateFolderPermissionsRequest)[K]
    }>): UpdateFolderPermissionsResponse {
        return this.client.updateFolderPermissions(
            this.ops["UpdateFolderPermissions"].apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest & keyof Omit<UpdateGroupRequest, "AwsAccountId"> & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest]: (UpdateGroupRequest & Omit<UpdateGroupRequest, "AwsAccountId"> & UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest)[K]
    }>): UpdateGroupResponse {
        return this.client.updateGroup(
            this.ops["UpdateGroup"].apply(partialParams)
        );
    }

    invokeUpdateIAMPolicyAssignment(partialParams: ToOptional<{
      [K in keyof UpdateIAMPolicyAssignmentRequest & keyof Omit<UpdateIAMPolicyAssignmentRequest, "AwsAccountId"> & keyof UpdateIAMPolicyAssignmentRequest & keyof UpdateIAMPolicyAssignmentRequest & keyof UpdateIAMPolicyAssignmentRequest]: (UpdateIAMPolicyAssignmentRequest & Omit<UpdateIAMPolicyAssignmentRequest, "AwsAccountId"> & UpdateIAMPolicyAssignmentRequest & UpdateIAMPolicyAssignmentRequest & UpdateIAMPolicyAssignmentRequest)[K]
    }>): UpdateIAMPolicyAssignmentResponse {
        return this.client.updateIAMPolicyAssignment(
            this.ops["UpdateIAMPolicyAssignment"].apply(partialParams)
        );
    }

    invokeUpdateIpRestriction(partialParams: ToOptional<{
      [K in keyof UpdateIpRestrictionRequest & keyof Omit<UpdateIpRestrictionRequest, "AwsAccountId"> & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest & keyof UpdateIpRestrictionRequest]: (UpdateIpRestrictionRequest & Omit<UpdateIpRestrictionRequest, "AwsAccountId"> & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest & UpdateIpRestrictionRequest)[K]
    }>): UpdateIpRestrictionResponse {
        return this.client.updateIpRestriction(
            this.ops["UpdateIpRestriction"].apply(partialParams)
        );
    }

    invokeUpdateTemplate(partialParams: ToOptional<{
      [K in keyof UpdateTemplateRequest & keyof Omit<UpdateTemplateRequest, "AwsAccountId"> & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest & keyof UpdateTemplateRequest]: (UpdateTemplateRequest & Omit<UpdateTemplateRequest, "AwsAccountId"> & UpdateTemplateRequest & UpdateTemplateRequest & UpdateTemplateRequest)[K]
    }>): UpdateTemplateResponse {
        return this.client.updateTemplate(
            this.ops["UpdateTemplate"].apply(partialParams)
        );
    }

    invokeUpdateTemplateAlias(partialParams: ToOptional<{
      [K in keyof UpdateTemplateAliasRequest & keyof Omit<UpdateTemplateAliasRequest, "AwsAccountId"> & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest & keyof UpdateTemplateAliasRequest]: (UpdateTemplateAliasRequest & Omit<UpdateTemplateAliasRequest, "AwsAccountId"> & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest & UpdateTemplateAliasRequest)[K]
    }>): UpdateTemplateAliasResponse {
        return this.client.updateTemplateAlias(
            this.ops["UpdateTemplateAlias"].apply(partialParams)
        );
    }

    invokeUpdateTemplatePermissions(partialParams: ToOptional<{
      [K in keyof UpdateTemplatePermissionsRequest & keyof Omit<UpdateTemplatePermissionsRequest, "AwsAccountId"> & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest & keyof UpdateTemplatePermissionsRequest]: (UpdateTemplatePermissionsRequest & Omit<UpdateTemplatePermissionsRequest, "AwsAccountId"> & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest & UpdateTemplatePermissionsRequest)[K]
    }>): UpdateTemplatePermissionsResponse {
        return this.client.updateTemplatePermissions(
            this.ops["UpdateTemplatePermissions"].apply(partialParams)
        );
    }

    invokeUpdateTheme(partialParams: ToOptional<{
      [K in keyof UpdateThemeRequest & keyof Omit<UpdateThemeRequest, "AwsAccountId"> & keyof UpdateThemeRequest & keyof UpdateThemeRequest & keyof UpdateThemeRequest]: (UpdateThemeRequest & Omit<UpdateThemeRequest, "AwsAccountId"> & UpdateThemeRequest & UpdateThemeRequest & UpdateThemeRequest)[K]
    }>): UpdateThemeResponse {
        return this.client.updateTheme(
            this.ops["UpdateTheme"].apply(partialParams)
        );
    }

    invokeUpdateThemeAlias(partialParams: ToOptional<{
      [K in keyof UpdateThemeAliasRequest & keyof Omit<UpdateThemeAliasRequest, "AwsAccountId"> & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest & keyof UpdateThemeAliasRequest]: (UpdateThemeAliasRequest & Omit<UpdateThemeAliasRequest, "AwsAccountId"> & UpdateThemeAliasRequest & UpdateThemeAliasRequest & UpdateThemeAliasRequest)[K]
    }>): UpdateThemeAliasResponse {
        return this.client.updateThemeAlias(
            this.ops["UpdateThemeAlias"].apply(partialParams)
        );
    }

    invokeUpdateThemePermissions(partialParams: ToOptional<{
      [K in keyof UpdateThemePermissionsRequest & keyof Omit<UpdateThemePermissionsRequest, "AwsAccountId"> & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest & keyof UpdateThemePermissionsRequest]: (UpdateThemePermissionsRequest & Omit<UpdateThemePermissionsRequest, "AwsAccountId"> & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest & UpdateThemePermissionsRequest)[K]
    }>): UpdateThemePermissionsResponse {
        return this.client.updateThemePermissions(
            this.ops["UpdateThemePermissions"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "AwsAccountId"> & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & Omit<UpdateUserRequest, "AwsAccountId"> & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): UpdateUserResponse {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }
}