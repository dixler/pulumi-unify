
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AcceptAdministratorInvitationRequest,
    AcceptInvitationRequest,
    BatchDisableStandardsRequest,
    BatchEnableStandardsRequest,
    BatchImportFindingsRequest,
    BatchUpdateFindingsRequest,
    CreateActionTargetRequest,
    CreateFindingAggregatorRequest,
    CreateInsightRequest,
    CreateMembersRequest,
    DeclineInvitationsRequest,
    DeleteActionTargetRequest,
    DeleteFindingAggregatorRequest,
    DeleteInsightRequest,
    DeleteInvitationsRequest,
    DeleteMembersRequest,
    DescribeStandardsControlsRequest,
    DisableImportFindingsForProductRequest,
    DisableOrganizationAdminAccountRequest,
    DisassociateMembersRequest,
    EnableImportFindingsForProductRequest,
    EnableOrganizationAdminAccountRequest,
    GetFindingAggregatorRequest,
    GetInsightResultsRequest,
    GetMembersRequest,
    InviteMembersRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateActionTargetRequest,
    UpdateFindingAggregatorRequest,
    UpdateFindingsRequest,
    UpdateInsightRequest,
    UpdateOrganizationConfigurationRequest,
    UpdateStandardsControlRequest,
    AcceptAdministratorInvitationResponse,
    AcceptInvitationResponse,
    BatchDisableStandardsResponse,
    BatchEnableStandardsResponse,
    BatchImportFindingsResponse,
    BatchUpdateFindingsResponse,
    CreateActionTargetResponse,
    CreateFindingAggregatorResponse,
    CreateInsightResponse,
    CreateMembersResponse,
    DeclineInvitationsResponse,
    DeleteActionTargetResponse,
    DeleteFindingAggregatorResponse,
    DeleteInsightResponse,
    DeleteInvitationsResponse,
    DeleteMembersResponse,
    DescribeStandardsControlsResponse,
    DisableImportFindingsForProductResponse,
    DisableOrganizationAdminAccountResponse,
    DisassociateMembersResponse,
    EnableImportFindingsForProductResponse,
    EnableOrganizationAdminAccountResponse,
    GetFindingAggregatorResponse,
    GetInsightResultsResponse,
    GetMembersResponse,
    InviteMembersResponse,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateActionTargetResponse,
    UpdateFindingAggregatorResponse,
    UpdateFindingsResponse,
    UpdateInsightResponse,
    UpdateOrganizationConfigurationResponse,
    UpdateStandardsControlResponse
} from "aws-sdk/clients/securityhub";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.securityhub.StandardsSubscription {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.securityhub.StandardsSubscription>) {
        super(...args)
        this.client = new awssdk.SecurityHub()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/securityhub-2018-10-26.normal.json"), this.client)
    }

    invokeAcceptAdministratorInvitation(partialParams: ToOptional<{
      [K in keyof AcceptAdministratorInvitationRequest]: (AcceptAdministratorInvitationRequest)[K]
    }>): AcceptAdministratorInvitationResponse {
        return this.client.acceptAdministratorInvitation(
            this.ops["AcceptAdministratorInvitation"].apply(partialParams)
        );
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest]: (AcceptInvitationRequest)[K]
    }>): AcceptInvitationResponse {
        return this.client.acceptInvitation(
            this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeBatchDisableStandards(partialParams: ToOptional<{
      [K in keyof BatchDisableStandardsRequest]: (BatchDisableStandardsRequest)[K]
    }>): BatchDisableStandardsResponse {
        return this.client.batchDisableStandards(
            this.ops["BatchDisableStandards"].apply(partialParams)
        );
    }

    invokeBatchEnableStandards(partialParams: ToOptional<{
      [K in keyof BatchEnableStandardsRequest]: (BatchEnableStandardsRequest)[K]
    }>): BatchEnableStandardsResponse {
        return this.client.batchEnableStandards(
            this.ops["BatchEnableStandards"].apply(partialParams)
        );
    }

    invokeBatchImportFindings(partialParams: ToOptional<{
      [K in keyof BatchImportFindingsRequest]: (BatchImportFindingsRequest)[K]
    }>): BatchImportFindingsResponse {
        return this.client.batchImportFindings(
            this.ops["BatchImportFindings"].apply(partialParams)
        );
    }

    invokeBatchUpdateFindings(partialParams: ToOptional<{
      [K in keyof BatchUpdateFindingsRequest]: (BatchUpdateFindingsRequest)[K]
    }>): BatchUpdateFindingsResponse {
        return this.client.batchUpdateFindings(
            this.ops["BatchUpdateFindings"].apply(partialParams)
        );
    }

    invokeCreateActionTarget(partialParams: ToOptional<{
      [K in keyof CreateActionTargetRequest]: (CreateActionTargetRequest)[K]
    }>): CreateActionTargetResponse {
        return this.client.createActionTarget(
            this.ops["CreateActionTarget"].apply(partialParams)
        );
    }

    invokeCreateFindingAggregator(partialParams: ToOptional<{
      [K in keyof CreateFindingAggregatorRequest]: (CreateFindingAggregatorRequest)[K]
    }>): CreateFindingAggregatorResponse {
        return this.client.createFindingAggregator(
            this.ops["CreateFindingAggregator"].apply(partialParams)
        );
    }

    invokeCreateInsight(partialParams: ToOptional<{
      [K in keyof CreateInsightRequest]: (CreateInsightRequest)[K]
    }>): CreateInsightResponse {
        return this.client.createInsight(
            this.ops["CreateInsight"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest]: (CreateMembersRequest)[K]
    }>): CreateMembersResponse {
        return this.client.createMembers(
            this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest)[K]
    }>): DeclineInvitationsResponse {
        return this.client.declineInvitations(
            this.ops["DeclineInvitations"].apply(partialParams)
        );
    }

    invokeDeleteActionTarget(partialParams: ToOptional<{
      [K in keyof DeleteActionTargetRequest]: (DeleteActionTargetRequest)[K]
    }>): DeleteActionTargetResponse {
        return this.client.deleteActionTarget(
            this.ops["DeleteActionTarget"].apply(partialParams)
        );
    }

    invokeDeleteFindingAggregator(partialParams: ToOptional<{
      [K in keyof DeleteFindingAggregatorRequest]: (DeleteFindingAggregatorRequest)[K]
    }>): DeleteFindingAggregatorResponse {
        return this.client.deleteFindingAggregator(
            this.ops["DeleteFindingAggregator"].apply(partialParams)
        );
    }

    invokeDeleteInsight(partialParams: ToOptional<{
      [K in keyof DeleteInsightRequest]: (DeleteInsightRequest)[K]
    }>): DeleteInsightResponse {
        return this.client.deleteInsight(
            this.ops["DeleteInsight"].apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest)[K]
    }>): DeleteInvitationsResponse {
        return this.client.deleteInvitations(
            this.ops["DeleteInvitations"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest]: (DeleteMembersRequest)[K]
    }>): DeleteMembersResponse {
        return this.client.deleteMembers(
            this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDescribeStandardsControls(partialParams: ToOptional<{
      [K in keyof DescribeStandardsControlsRequest]: (DescribeStandardsControlsRequest)[K]
    }>): DescribeStandardsControlsResponse {
        return this.client.describeStandardsControls(
            this.ops["DescribeStandardsControls"].apply(partialParams)
        );
    }

    invokeDisableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof DisableImportFindingsForProductRequest]: (DisableImportFindingsForProductRequest)[K]
    }>): DisableImportFindingsForProductResponse {
        return this.client.disableImportFindingsForProduct(
            this.ops["DisableImportFindingsForProduct"].apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest)[K]
    }>): DisableOrganizationAdminAccountResponse {
        return this.client.disableOrganizationAdminAccount(
            this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest]: (DisassociateMembersRequest)[K]
    }>): DisassociateMembersResponse {
        return this.client.disassociateMembers(
            this.ops["DisassociateMembers"].apply(partialParams)
        );
    }

    invokeEnableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof EnableImportFindingsForProductRequest]: (EnableImportFindingsForProductRequest)[K]
    }>): EnableImportFindingsForProductResponse {
        return this.client.enableImportFindingsForProduct(
            this.ops["EnableImportFindingsForProduct"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest)[K]
    }>): EnableOrganizationAdminAccountResponse {
        return this.client.enableOrganizationAdminAccount(
            this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetFindingAggregator(partialParams: ToOptional<{
      [K in keyof GetFindingAggregatorRequest]: (GetFindingAggregatorRequest)[K]
    }>): GetFindingAggregatorResponse {
        return this.client.getFindingAggregator(
            this.ops["GetFindingAggregator"].apply(partialParams)
        );
    }

    invokeGetInsightResults(partialParams: ToOptional<{
      [K in keyof GetInsightResultsRequest]: (GetInsightResultsRequest)[K]
    }>): GetInsightResultsResponse {
        return this.client.getInsightResults(
            this.ops["GetInsightResults"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest]: (GetMembersRequest)[K]
    }>): GetMembersResponse {
        return this.client.getMembers(
            this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest]: (InviteMembersRequest)[K]
    }>): InviteMembersResponse {
        return this.client.inviteMembers(
            this.ops["InviteMembers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateActionTarget(partialParams: ToOptional<{
      [K in keyof UpdateActionTargetRequest]: (UpdateActionTargetRequest)[K]
    }>): UpdateActionTargetResponse {
        return this.client.updateActionTarget(
            this.ops["UpdateActionTarget"].apply(partialParams)
        );
    }

    invokeUpdateFindingAggregator(partialParams: ToOptional<{
      [K in keyof UpdateFindingAggregatorRequest]: (UpdateFindingAggregatorRequest)[K]
    }>): UpdateFindingAggregatorResponse {
        return this.client.updateFindingAggregator(
            this.ops["UpdateFindingAggregator"].apply(partialParams)
        );
    }

    invokeUpdateFindings(partialParams: ToOptional<{
      [K in keyof UpdateFindingsRequest]: (UpdateFindingsRequest)[K]
    }>): UpdateFindingsResponse {
        return this.client.updateFindings(
            this.ops["UpdateFindings"].apply(partialParams)
        );
    }

    invokeUpdateInsight(partialParams: ToOptional<{
      [K in keyof UpdateInsightRequest]: (UpdateInsightRequest)[K]
    }>): UpdateInsightResponse {
        return this.client.updateInsight(
            this.ops["UpdateInsight"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest)[K]
    }>): UpdateOrganizationConfigurationResponse {
        return this.client.updateOrganizationConfiguration(
            this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateStandardsControl(partialParams: ToOptional<{
      [K in keyof UpdateStandardsControlRequest]: (UpdateStandardsControlRequest)[K]
    }>): UpdateStandardsControlResponse {
        return this.client.updateStandardsControl(
            this.ops["UpdateStandardsControl"].apply(partialParams)
        );
    }
}