
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    DescribeActionTargetsRequest,
    DescribeHubRequest,
    DescribeOrganizationConfigurationRequest,
    DescribeProductsRequest,
    DescribeStandardsRequest,
    DescribeStandardsControlsRequest,
    DisableImportFindingsForProductRequest,
    DisableOrganizationAdminAccountRequest,
    DisableSecurityHubRequest,
    DisassociateFromAdministratorAccountRequest,
    DisassociateFromMasterAccountRequest,
    DisassociateMembersRequest,
    EnableImportFindingsForProductRequest,
    EnableOrganizationAdminAccountRequest,
    EnableSecurityHubRequest,
    GetAdministratorAccountRequest,
    GetEnabledStandardsRequest,
    GetFindingAggregatorRequest,
    GetFindingsRequest,
    GetInsightResultsRequest,
    GetInsightsRequest,
    GetInvitationsCountRequest,
    GetMasterAccountRequest,
    GetMembersRequest,
    InviteMembersRequest,
    ListEnabledProductsForImportRequest,
    ListFindingAggregatorsRequest,
    ListInvitationsRequest,
    ListMembersRequest,
    ListOrganizationAdminAccountsRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateActionTargetRequest,
    UpdateFindingAggregatorRequest,
    UpdateFindingsRequest,
    UpdateInsightRequest,
    UpdateOrganizationConfigurationRequest,
    UpdateSecurityHubConfigurationRequest,
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
    DescribeActionTargetsResponse,
    DescribeHubResponse,
    DescribeOrganizationConfigurationResponse,
    DescribeProductsResponse,
    DescribeStandardsResponse,
    DescribeStandardsControlsResponse,
    DisableImportFindingsForProductResponse,
    DisableOrganizationAdminAccountResponse,
    DisableSecurityHubResponse,
    DisassociateFromAdministratorAccountResponse,
    DisassociateFromMasterAccountResponse,
    DisassociateMembersResponse,
    EnableImportFindingsForProductResponse,
    EnableOrganizationAdminAccountResponse,
    EnableSecurityHubResponse,
    GetAdministratorAccountResponse,
    GetEnabledStandardsResponse,
    GetFindingAggregatorResponse,
    GetFindingsResponse,
    GetInsightResultsResponse,
    GetInsightsResponse,
    GetInvitationsCountResponse,
    GetMasterAccountResponse,
    GetMembersResponse,
    InviteMembersResponse,
    ListEnabledProductsForImportResponse,
    ListFindingAggregatorsResponse,
    ListInvitationsResponse,
    ListMembersResponse,
    ListOrganizationAdminAccountsResponse,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateActionTargetResponse,
    UpdateFindingAggregatorResponse,
    UpdateFindingsResponse,
    UpdateInsightResponse,
    UpdateOrganizationConfigurationResponse,
    UpdateSecurityHubConfigurationResponse,
    UpdateStandardsControlResponse
} from "aws-sdk/clients/securityhub";
const schema = require("../apis/securityhub-2018-10-26.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.securityhub.OrganizationConfiguration {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.securityhub.OrganizationConfiguration>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SecurityHub()
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

    invokeAcceptAdministratorInvitation(partialParams: ToOptional<{
      [K in keyof AcceptAdministratorInvitationRequest]: (AcceptAdministratorInvitationRequest)[K]
    }>): Request<AcceptAdministratorInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptAdministratorInvitation(
          this.ops["AcceptAdministratorInvitation"].apply(partialParams)
        );
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest]: (AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeBatchDisableStandards(partialParams: ToOptional<{
      [K in keyof BatchDisableStandardsRequest]: (BatchDisableStandardsRequest)[K]
    }>): Request<BatchDisableStandardsResponse, AWSError> {
        this.boot();
        return this.client.batchDisableStandards(
          this.ops["BatchDisableStandards"].apply(partialParams)
        );
    }

    invokeBatchEnableStandards(partialParams: ToOptional<{
      [K in keyof BatchEnableStandardsRequest]: (BatchEnableStandardsRequest)[K]
    }>): Request<BatchEnableStandardsResponse, AWSError> {
        this.boot();
        return this.client.batchEnableStandards(
          this.ops["BatchEnableStandards"].apply(partialParams)
        );
    }

    invokeBatchImportFindings(partialParams: ToOptional<{
      [K in keyof BatchImportFindingsRequest]: (BatchImportFindingsRequest)[K]
    }>): Request<BatchImportFindingsResponse, AWSError> {
        this.boot();
        return this.client.batchImportFindings(
          this.ops["BatchImportFindings"].apply(partialParams)
        );
    }

    invokeBatchUpdateFindings(partialParams: ToOptional<{
      [K in keyof BatchUpdateFindingsRequest]: (BatchUpdateFindingsRequest)[K]
    }>): Request<BatchUpdateFindingsResponse, AWSError> {
        this.boot();
        return this.client.batchUpdateFindings(
          this.ops["BatchUpdateFindings"].apply(partialParams)
        );
    }

    invokeCreateActionTarget(partialParams: ToOptional<{
      [K in keyof CreateActionTargetRequest]: (CreateActionTargetRequest)[K]
    }>): Request<CreateActionTargetResponse, AWSError> {
        this.boot();
        return this.client.createActionTarget(
          this.ops["CreateActionTarget"].apply(partialParams)
        );
    }

    invokeCreateFindingAggregator(partialParams: ToOptional<{
      [K in keyof CreateFindingAggregatorRequest]: (CreateFindingAggregatorRequest)[K]
    }>): Request<CreateFindingAggregatorResponse, AWSError> {
        this.boot();
        return this.client.createFindingAggregator(
          this.ops["CreateFindingAggregator"].apply(partialParams)
        );
    }

    invokeCreateInsight(partialParams: ToOptional<{
      [K in keyof CreateInsightRequest]: (CreateInsightRequest)[K]
    }>): Request<CreateInsightResponse, AWSError> {
        this.boot();
        return this.client.createInsight(
          this.ops["CreateInsight"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest]: (CreateMembersRequest)[K]
    }>): Request<CreateMembersResponse, AWSError> {
        this.boot();
        return this.client.createMembers(
          this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest)[K]
    }>): Request<DeclineInvitationsResponse, AWSError> {
        this.boot();
        return this.client.declineInvitations(
          this.ops["DeclineInvitations"].apply(partialParams)
        );
    }

    invokeDeleteActionTarget(partialParams: ToOptional<{
      [K in keyof DeleteActionTargetRequest]: (DeleteActionTargetRequest)[K]
    }>): Request<DeleteActionTargetResponse, AWSError> {
        this.boot();
        return this.client.deleteActionTarget(
          this.ops["DeleteActionTarget"].apply(partialParams)
        );
    }

    invokeDeleteFindingAggregator(partialParams: ToOptional<{
      [K in keyof DeleteFindingAggregatorRequest]: (DeleteFindingAggregatorRequest)[K]
    }>): Request<DeleteFindingAggregatorResponse, AWSError> {
        this.boot();
        return this.client.deleteFindingAggregator(
          this.ops["DeleteFindingAggregator"].apply(partialParams)
        );
    }

    invokeDeleteInsight(partialParams: ToOptional<{
      [K in keyof DeleteInsightRequest]: (DeleteInsightRequest)[K]
    }>): Request<DeleteInsightResponse, AWSError> {
        this.boot();
        return this.client.deleteInsight(
          this.ops["DeleteInsight"].apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest)[K]
    }>): Request<DeleteInvitationsResponse, AWSError> {
        this.boot();
        return this.client.deleteInvitations(
          this.ops["DeleteInvitations"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest]: (DeleteMembersRequest)[K]
    }>): Request<DeleteMembersResponse, AWSError> {
        this.boot();
        return this.client.deleteMembers(
          this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDescribeActionTargets(partialParams: ToOptional<{
      [K in keyof DescribeActionTargetsRequest]: (DescribeActionTargetsRequest)[K]
    }>): Request<DescribeActionTargetsResponse, AWSError> {
        this.boot();
        return this.client.describeActionTargets(
          this.ops["DescribeActionTargets"].apply(partialParams)
        );
    }

    invokeDescribeHub(partialParams: ToOptional<{
      [K in keyof DescribeHubRequest]: (DescribeHubRequest)[K]
    }>): Request<DescribeHubResponse, AWSError> {
        this.boot();
        return this.client.describeHub(
          this.ops["DescribeHub"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest]: (DescribeOrganizationConfigurationRequest)[K]
    }>): Request<DescribeOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeOrganizationConfiguration(
          this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeProducts(partialParams: ToOptional<{
      [K in keyof DescribeProductsRequest]: (DescribeProductsRequest)[K]
    }>): Request<DescribeProductsResponse, AWSError> {
        this.boot();
        return this.client.describeProducts(
          this.ops["DescribeProducts"].apply(partialParams)
        );
    }

    invokeDescribeStandards(partialParams: ToOptional<{
      [K in keyof DescribeStandardsRequest]: (DescribeStandardsRequest)[K]
    }>): Request<DescribeStandardsResponse, AWSError> {
        this.boot();
        return this.client.describeStandards(
          this.ops["DescribeStandards"].apply(partialParams)
        );
    }

    invokeDescribeStandardsControls(partialParams: ToOptional<{
      [K in keyof DescribeStandardsControlsRequest]: (DescribeStandardsControlsRequest)[K]
    }>): Request<DescribeStandardsControlsResponse, AWSError> {
        this.boot();
        return this.client.describeStandardsControls(
          this.ops["DescribeStandardsControls"].apply(partialParams)
        );
    }

    invokeDisableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof DisableImportFindingsForProductRequest]: (DisableImportFindingsForProductRequest)[K]
    }>): Request<DisableImportFindingsForProductResponse, AWSError> {
        this.boot();
        return this.client.disableImportFindingsForProduct(
          this.ops["DisableImportFindingsForProduct"].apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest)[K]
    }>): Request<DisableOrganizationAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.disableOrganizationAdminAccount(
          this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisableSecurityHub(partialParams: ToOptional<{
      [K in keyof DisableSecurityHubRequest]: (DisableSecurityHubRequest)[K]
    }>): Request<DisableSecurityHubResponse, AWSError> {
        this.boot();
        return this.client.disableSecurityHub(
          this.ops["DisableSecurityHub"].apply(partialParams)
        );
    }

    invokeDisassociateFromAdministratorAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromAdministratorAccountRequest]: (DisassociateFromAdministratorAccountRequest)[K]
    }>): Request<DisassociateFromAdministratorAccountResponse, AWSError> {
        this.boot();
        return this.client.disassociateFromAdministratorAccount(
          this.ops["DisassociateFromAdministratorAccount"].apply(partialParams)
        );
    }

    invokeDisassociateFromMasterAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromMasterAccountRequest]: (DisassociateFromMasterAccountRequest)[K]
    }>): Request<DisassociateFromMasterAccountResponse, AWSError> {
        this.boot();
        return this.client.disassociateFromMasterAccount(
          this.ops["DisassociateFromMasterAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest]: (DisassociateMembersRequest)[K]
    }>): Request<DisassociateMembersResponse, AWSError> {
        this.boot();
        return this.client.disassociateMembers(
          this.ops["DisassociateMembers"].apply(partialParams)
        );
    }

    invokeEnableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof EnableImportFindingsForProductRequest]: (EnableImportFindingsForProductRequest)[K]
    }>): Request<EnableImportFindingsForProductResponse, AWSError> {
        this.boot();
        return this.client.enableImportFindingsForProduct(
          this.ops["EnableImportFindingsForProduct"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest)[K]
    }>): Request<EnableOrganizationAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.enableOrganizationAdminAccount(
          this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeEnableSecurityHub(partialParams: ToOptional<{
      [K in keyof EnableSecurityHubRequest]: (EnableSecurityHubRequest)[K]
    }>): Request<EnableSecurityHubResponse, AWSError> {
        this.boot();
        return this.client.enableSecurityHub(
          this.ops["EnableSecurityHub"].apply(partialParams)
        );
    }

    invokeGetAdministratorAccount(partialParams: ToOptional<{
      [K in keyof GetAdministratorAccountRequest]: (GetAdministratorAccountRequest)[K]
    }>): Request<GetAdministratorAccountResponse, AWSError> {
        this.boot();
        return this.client.getAdministratorAccount(
          this.ops["GetAdministratorAccount"].apply(partialParams)
        );
    }

    invokeGetEnabledStandards(partialParams: ToOptional<{
      [K in keyof GetEnabledStandardsRequest]: (GetEnabledStandardsRequest)[K]
    }>): Request<GetEnabledStandardsResponse, AWSError> {
        this.boot();
        return this.client.getEnabledStandards(
          this.ops["GetEnabledStandards"].apply(partialParams)
        );
    }

    invokeGetFindingAggregator(partialParams: ToOptional<{
      [K in keyof GetFindingAggregatorRequest]: (GetFindingAggregatorRequest)[K]
    }>): Request<GetFindingAggregatorResponse, AWSError> {
        this.boot();
        return this.client.getFindingAggregator(
          this.ops["GetFindingAggregator"].apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest]: (GetFindingsRequest)[K]
    }>): Request<GetFindingsResponse, AWSError> {
        this.boot();
        return this.client.getFindings(
          this.ops["GetFindings"].apply(partialParams)
        );
    }

    invokeGetInsightResults(partialParams: ToOptional<{
      [K in keyof GetInsightResultsRequest]: (GetInsightResultsRequest)[K]
    }>): Request<GetInsightResultsResponse, AWSError> {
        this.boot();
        return this.client.getInsightResults(
          this.ops["GetInsightResults"].apply(partialParams)
        );
    }

    invokeGetInsights(partialParams: ToOptional<{
      [K in keyof GetInsightsRequest]: (GetInsightsRequest)[K]
    }>): Request<GetInsightsResponse, AWSError> {
        this.boot();
        return this.client.getInsights(
          this.ops["GetInsights"].apply(partialParams)
        );
    }

    invokeGetInvitationsCount(partialParams: ToOptional<{
      [K in keyof GetInvitationsCountRequest]: (GetInvitationsCountRequest)[K]
    }>): Request<GetInvitationsCountResponse, AWSError> {
        this.boot();
        return this.client.getInvitationsCount(
          this.ops["GetInvitationsCount"].apply(partialParams)
        );
    }

    invokeGetMasterAccount(partialParams: ToOptional<{
      [K in keyof GetMasterAccountRequest]: (GetMasterAccountRequest)[K]
    }>): Request<GetMasterAccountResponse, AWSError> {
        this.boot();
        return this.client.getMasterAccount(
          this.ops["GetMasterAccount"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest]: (GetMembersRequest)[K]
    }>): Request<GetMembersResponse, AWSError> {
        this.boot();
        return this.client.getMembers(
          this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest]: (InviteMembersRequest)[K]
    }>): Request<InviteMembersResponse, AWSError> {
        this.boot();
        return this.client.inviteMembers(
          this.ops["InviteMembers"].apply(partialParams)
        );
    }

    invokeListEnabledProductsForImport(partialParams: ToOptional<{
      [K in keyof ListEnabledProductsForImportRequest]: (ListEnabledProductsForImportRequest)[K]
    }>): Request<ListEnabledProductsForImportResponse, AWSError> {
        this.boot();
        return this.client.listEnabledProductsForImport(
          this.ops["ListEnabledProductsForImport"].apply(partialParams)
        );
    }

    invokeListFindingAggregators(partialParams: ToOptional<{
      [K in keyof ListFindingAggregatorsRequest]: (ListFindingAggregatorsRequest)[K]
    }>): Request<ListFindingAggregatorsResponse, AWSError> {
        this.boot();
        return this.client.listFindingAggregators(
          this.ops["ListFindingAggregators"].apply(partialParams)
        );
    }

    invokeListInvitations(partialParams: ToOptional<{
      [K in keyof ListInvitationsRequest]: (ListInvitationsRequest)[K]
    }>): Request<ListInvitationsResponse, AWSError> {
        this.boot();
        return this.client.listInvitations(
          this.ops["ListInvitations"].apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest]: (ListMembersRequest)[K]
    }>): Request<ListMembersResponse, AWSError> {
        this.boot();
        return this.client.listMembers(
          this.ops["ListMembers"].apply(partialParams)
        );
    }

    invokeListOrganizationAdminAccounts(partialParams: ToOptional<{
      [K in keyof ListOrganizationAdminAccountsRequest]: (ListOrganizationAdminAccountsRequest)[K]
    }>): Request<ListOrganizationAdminAccountsResponse, AWSError> {
        this.boot();
        return this.client.listOrganizationAdminAccounts(
          this.ops["ListOrganizationAdminAccounts"].apply(partialParams)
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

    invokeUpdateActionTarget(partialParams: ToOptional<{
      [K in keyof UpdateActionTargetRequest]: (UpdateActionTargetRequest)[K]
    }>): Request<UpdateActionTargetResponse, AWSError> {
        this.boot();
        return this.client.updateActionTarget(
          this.ops["UpdateActionTarget"].apply(partialParams)
        );
    }

    invokeUpdateFindingAggregator(partialParams: ToOptional<{
      [K in keyof UpdateFindingAggregatorRequest]: (UpdateFindingAggregatorRequest)[K]
    }>): Request<UpdateFindingAggregatorResponse, AWSError> {
        this.boot();
        return this.client.updateFindingAggregator(
          this.ops["UpdateFindingAggregator"].apply(partialParams)
        );
    }

    invokeUpdateFindings(partialParams: ToOptional<{
      [K in keyof UpdateFindingsRequest]: (UpdateFindingsRequest)[K]
    }>): Request<UpdateFindingsResponse, AWSError> {
        this.boot();
        return this.client.updateFindings(
          this.ops["UpdateFindings"].apply(partialParams)
        );
    }

    invokeUpdateInsight(partialParams: ToOptional<{
      [K in keyof UpdateInsightRequest]: (UpdateInsightRequest)[K]
    }>): Request<UpdateInsightResponse, AWSError> {
        this.boot();
        return this.client.updateInsight(
          this.ops["UpdateInsight"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest)[K]
    }>): Request<UpdateOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateOrganizationConfiguration(
          this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateSecurityHubConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateSecurityHubConfigurationRequest]: (UpdateSecurityHubConfigurationRequest)[K]
    }>): Request<UpdateSecurityHubConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateSecurityHubConfiguration(
          this.ops["UpdateSecurityHubConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateStandardsControl(partialParams: ToOptional<{
      [K in keyof UpdateStandardsControlRequest]: (UpdateStandardsControlRequest)[K]
    }>): Request<UpdateStandardsControlResponse, AWSError> {
        this.boot();
        return this.client.updateStandardsControl(
          this.ops["UpdateStandardsControl"].apply(partialParams)
        );
    }
}