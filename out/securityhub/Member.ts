
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

export default class extends aws.securityhub.Member {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.securityhub.Member>) {
        super(...args)
        this.client = new awssdk.SecurityHub()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/securityhub-2018-10-26.normal.json"), this.client)
    }

    invokeAcceptAdministratorInvitation(partialParams: ToOptional<{
      [K in keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest]: (AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest)[K]
    }>): AcceptAdministratorInvitationResponse {
        return this.client.acceptAdministratorInvitation(
            this.ops["AcceptAdministratorInvitation"].apply(partialParams)
        );
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): AcceptInvitationResponse {
        return this.client.acceptInvitation(
            this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeBatchDisableStandards(partialParams: ToOptional<{
      [K in keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest]: (BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest)[K]
    }>): BatchDisableStandardsResponse {
        return this.client.batchDisableStandards(
            this.ops["BatchDisableStandards"].apply(partialParams)
        );
    }

    invokeBatchEnableStandards(partialParams: ToOptional<{
      [K in keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest]: (BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest)[K]
    }>): BatchEnableStandardsResponse {
        return this.client.batchEnableStandards(
            this.ops["BatchEnableStandards"].apply(partialParams)
        );
    }

    invokeBatchImportFindings(partialParams: ToOptional<{
      [K in keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest]: (BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest)[K]
    }>): BatchImportFindingsResponse {
        return this.client.batchImportFindings(
            this.ops["BatchImportFindings"].apply(partialParams)
        );
    }

    invokeBatchUpdateFindings(partialParams: ToOptional<{
      [K in keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest]: (BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest)[K]
    }>): BatchUpdateFindingsResponse {
        return this.client.batchUpdateFindings(
            this.ops["BatchUpdateFindings"].apply(partialParams)
        );
    }

    invokeCreateActionTarget(partialParams: ToOptional<{
      [K in keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest]: (CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest)[K]
    }>): CreateActionTargetResponse {
        return this.client.createActionTarget(
            this.ops["CreateActionTarget"].apply(partialParams)
        );
    }

    invokeCreateFindingAggregator(partialParams: ToOptional<{
      [K in keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest]: (CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest)[K]
    }>): CreateFindingAggregatorResponse {
        return this.client.createFindingAggregator(
            this.ops["CreateFindingAggregator"].apply(partialParams)
        );
    }

    invokeCreateInsight(partialParams: ToOptional<{
      [K in keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest]: (CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest)[K]
    }>): CreateInsightResponse {
        return this.client.createInsight(
            this.ops["CreateInsight"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest]: (CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest)[K]
    }>): CreateMembersResponse {
        return this.client.createMembers(
            this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest)[K]
    }>): DeclineInvitationsResponse {
        return this.client.declineInvitations(
            this.ops["DeclineInvitations"].apply(partialParams)
        );
    }

    invokeDeleteActionTarget(partialParams: ToOptional<{
      [K in keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest]: (DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest)[K]
    }>): DeleteActionTargetResponse {
        return this.client.deleteActionTarget(
            this.ops["DeleteActionTarget"].apply(partialParams)
        );
    }

    invokeDeleteFindingAggregator(partialParams: ToOptional<{
      [K in keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest]: (DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest)[K]
    }>): DeleteFindingAggregatorResponse {
        return this.client.deleteFindingAggregator(
            this.ops["DeleteFindingAggregator"].apply(partialParams)
        );
    }

    invokeDeleteInsight(partialParams: ToOptional<{
      [K in keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest]: (DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest)[K]
    }>): DeleteInsightResponse {
        return this.client.deleteInsight(
            this.ops["DeleteInsight"].apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest)[K]
    }>): DeleteInvitationsResponse {
        return this.client.deleteInvitations(
            this.ops["DeleteInvitations"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest]: (DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest)[K]
    }>): DeleteMembersResponse {
        return this.client.deleteMembers(
            this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDescribeStandardsControls(partialParams: ToOptional<{
      [K in keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest]: (DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest)[K]
    }>): DescribeStandardsControlsResponse {
        return this.client.describeStandardsControls(
            this.ops["DescribeStandardsControls"].apply(partialParams)
        );
    }

    invokeDisableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest]: (DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest)[K]
    }>): DisableImportFindingsForProductResponse {
        return this.client.disableImportFindingsForProduct(
            this.ops["DisableImportFindingsForProduct"].apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest)[K]
    }>): DisableOrganizationAdminAccountResponse {
        return this.client.disableOrganizationAdminAccount(
            this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest]: (DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest)[K]
    }>): DisassociateMembersResponse {
        return this.client.disassociateMembers(
            this.ops["DisassociateMembers"].apply(partialParams)
        );
    }

    invokeEnableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest]: (EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest)[K]
    }>): EnableImportFindingsForProductResponse {
        return this.client.enableImportFindingsForProduct(
            this.ops["EnableImportFindingsForProduct"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): EnableOrganizationAdminAccountResponse {
        return this.client.enableOrganizationAdminAccount(
            this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetFindingAggregator(partialParams: ToOptional<{
      [K in keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest]: (GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest)[K]
    }>): GetFindingAggregatorResponse {
        return this.client.getFindingAggregator(
            this.ops["GetFindingAggregator"].apply(partialParams)
        );
    }

    invokeGetInsightResults(partialParams: ToOptional<{
      [K in keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest]: (GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest)[K]
    }>): GetInsightResultsResponse {
        return this.client.getInsightResults(
            this.ops["GetInsightResults"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest]: (GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest)[K]
    }>): GetMembersResponse {
        return this.client.getMembers(
            this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest]: (InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest)[K]
    }>): InviteMembersResponse {
        return this.client.inviteMembers(
            this.ops["InviteMembers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateActionTarget(partialParams: ToOptional<{
      [K in keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest]: (UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest)[K]
    }>): UpdateActionTargetResponse {
        return this.client.updateActionTarget(
            this.ops["UpdateActionTarget"].apply(partialParams)
        );
    }

    invokeUpdateFindingAggregator(partialParams: ToOptional<{
      [K in keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest]: (UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest)[K]
    }>): UpdateFindingAggregatorResponse {
        return this.client.updateFindingAggregator(
            this.ops["UpdateFindingAggregator"].apply(partialParams)
        );
    }

    invokeUpdateFindings(partialParams: ToOptional<{
      [K in keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest]: (UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest)[K]
    }>): UpdateFindingsResponse {
        return this.client.updateFindings(
            this.ops["UpdateFindings"].apply(partialParams)
        );
    }

    invokeUpdateInsight(partialParams: ToOptional<{
      [K in keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest]: (UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest)[K]
    }>): UpdateInsightResponse {
        return this.client.updateInsight(
            this.ops["UpdateInsight"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest)[K]
    }>): UpdateOrganizationConfigurationResponse {
        return this.client.updateOrganizationConfiguration(
            this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateStandardsControl(partialParams: ToOptional<{
      [K in keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest]: (UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest)[K]
    }>): UpdateStandardsControlResponse {
        return this.client.updateStandardsControl(
            this.ops["UpdateStandardsControl"].apply(partialParams)
        );
    }
}