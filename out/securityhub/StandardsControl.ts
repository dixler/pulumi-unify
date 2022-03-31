
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
const schema = require("../apis/securityhub-2018-10-26.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.securityhub.StandardsControl {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.securityhub.StandardsControl>) {
        super(...args)
        this.client = new awssdk.SecurityHub()
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

    invokeAcceptAdministratorInvitation(partialParams: ToOptional<{
      [K in keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest & keyof AcceptAdministratorInvitationRequest]: (AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest & AcceptAdministratorInvitationRequest)[K]
    }>): Request<AcceptAdministratorInvitationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptAdministratorInvitation(
          this.ops["AcceptAdministratorInvitation"].applicator.apply(partialParams)
        );
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].applicator.apply(partialParams)
        );
    }

    invokeBatchDisableStandards(partialParams: ToOptional<{
      [K in keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest & keyof BatchDisableStandardsRequest]: (BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest & BatchDisableStandardsRequest)[K]
    }>): Request<BatchDisableStandardsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisableStandards(
          this.ops["BatchDisableStandards"].applicator.apply(partialParams)
        );
    }

    invokeBatchEnableStandards(partialParams: ToOptional<{
      [K in keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest & keyof BatchEnableStandardsRequest]: (BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest & BatchEnableStandardsRequest)[K]
    }>): Request<BatchEnableStandardsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchEnableStandards(
          this.ops["BatchEnableStandards"].applicator.apply(partialParams)
        );
    }

    invokeBatchImportFindings(partialParams: ToOptional<{
      [K in keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest & keyof BatchImportFindingsRequest]: (BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest & BatchImportFindingsRequest)[K]
    }>): Request<BatchImportFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchImportFindings(
          this.ops["BatchImportFindings"].applicator.apply(partialParams)
        );
    }

    invokeBatchUpdateFindings(partialParams: ToOptional<{
      [K in keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest & keyof BatchUpdateFindingsRequest]: (BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest & BatchUpdateFindingsRequest)[K]
    }>): Request<BatchUpdateFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdateFindings(
          this.ops["BatchUpdateFindings"].applicator.apply(partialParams)
        );
    }

    invokeCreateActionTarget(partialParams: ToOptional<{
      [K in keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest & keyof CreateActionTargetRequest]: (CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest & CreateActionTargetRequest)[K]
    }>): Request<CreateActionTargetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createActionTarget(
          this.ops["CreateActionTarget"].applicator.apply(partialParams)
        );
    }

    invokeCreateFindingAggregator(partialParams: ToOptional<{
      [K in keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest & keyof CreateFindingAggregatorRequest]: (CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest & CreateFindingAggregatorRequest)[K]
    }>): Request<CreateFindingAggregatorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFindingAggregator(
          this.ops["CreateFindingAggregator"].applicator.apply(partialParams)
        );
    }

    invokeCreateInsight(partialParams: ToOptional<{
      [K in keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest & keyof CreateInsightRequest]: (CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest & CreateInsightRequest)[K]
    }>): Request<CreateInsightResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInsight(
          this.ops["CreateInsight"].applicator.apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest]: (CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest)[K]
    }>): Request<CreateMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMembers(
          this.ops["CreateMembers"].applicator.apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest)[K]
    }>): Request<DeclineInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineInvitations(
          this.ops["DeclineInvitations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteActionTarget(partialParams: ToOptional<{
      [K in keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest & keyof DeleteActionTargetRequest]: (DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest & DeleteActionTargetRequest)[K]
    }>): Request<DeleteActionTargetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteActionTarget(
          this.ops["DeleteActionTarget"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFindingAggregator(partialParams: ToOptional<{
      [K in keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest & keyof DeleteFindingAggregatorRequest]: (DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest & DeleteFindingAggregatorRequest)[K]
    }>): Request<DeleteFindingAggregatorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFindingAggregator(
          this.ops["DeleteFindingAggregator"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInsight(partialParams: ToOptional<{
      [K in keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest & keyof DeleteInsightRequest]: (DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest & DeleteInsightRequest)[K]
    }>): Request<DeleteInsightResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInsight(
          this.ops["DeleteInsight"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest)[K]
    }>): Request<DeleteInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInvitations(
          this.ops["DeleteInvitations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest]: (DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest)[K]
    }>): Request<DeleteMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMembers(
          this.ops["DeleteMembers"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStandardsControls(partialParams: ToOptional<{
      [K in keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest & keyof DescribeStandardsControlsRequest]: (DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest & DescribeStandardsControlsRequest)[K]
    }>): Request<DescribeStandardsControlsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStandardsControls(
          this.ops["DescribeStandardsControls"].applicator.apply(partialParams)
        );
    }

    invokeDisableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest & keyof DisableImportFindingsForProductRequest]: (DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest & DisableImportFindingsForProductRequest)[K]
    }>): Request<DisableImportFindingsForProductResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableImportFindingsForProduct(
          this.ops["DisableImportFindingsForProduct"].applicator.apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest)[K]
    }>): Request<DisableOrganizationAdminAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableOrganizationAdminAccount(
          this.ops["DisableOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof DisassociateMembersRequest]: (DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest & DisassociateMembersRequest)[K]
    }>): Request<DisassociateMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMembers(
          this.ops["DisassociateMembers"].applicator.apply(partialParams)
        );
    }

    invokeEnableImportFindingsForProduct(partialParams: ToOptional<{
      [K in keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest & keyof EnableImportFindingsForProductRequest]: (EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest & EnableImportFindingsForProductRequest)[K]
    }>): Request<EnableImportFindingsForProductResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableImportFindingsForProduct(
          this.ops["EnableImportFindingsForProduct"].applicator.apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): Request<EnableOrganizationAdminAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableOrganizationAdminAccount(
          this.ops["EnableOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetFindingAggregator(partialParams: ToOptional<{
      [K in keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest & keyof GetFindingAggregatorRequest]: (GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest & GetFindingAggregatorRequest)[K]
    }>): Request<GetFindingAggregatorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindingAggregator(
          this.ops["GetFindingAggregator"].applicator.apply(partialParams)
        );
    }

    invokeGetInsightResults(partialParams: ToOptional<{
      [K in keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest & keyof GetInsightResultsRequest]: (GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest & GetInsightResultsRequest)[K]
    }>): Request<GetInsightResultsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsightResults(
          this.ops["GetInsightResults"].applicator.apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest]: (GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest)[K]
    }>): Request<GetMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMembers(
          this.ops["GetMembers"].applicator.apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest & keyof InviteMembersRequest]: (InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest & InviteMembersRequest)[K]
    }>): Request<InviteMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteMembers(
          this.ops["InviteMembers"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateActionTarget(partialParams: ToOptional<{
      [K in keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest & keyof UpdateActionTargetRequest]: (UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest & UpdateActionTargetRequest)[K]
    }>): Request<UpdateActionTargetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateActionTarget(
          this.ops["UpdateActionTarget"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFindingAggregator(partialParams: ToOptional<{
      [K in keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest & keyof UpdateFindingAggregatorRequest]: (UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest & UpdateFindingAggregatorRequest)[K]
    }>): Request<UpdateFindingAggregatorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindingAggregator(
          this.ops["UpdateFindingAggregator"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFindings(partialParams: ToOptional<{
      [K in keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest]: (UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest)[K]
    }>): Request<UpdateFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindings(
          this.ops["UpdateFindings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInsight(partialParams: ToOptional<{
      [K in keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest & keyof UpdateInsightRequest]: (UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest & UpdateInsightRequest)[K]
    }>): Request<UpdateInsightResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInsight(
          this.ops["UpdateInsight"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest)[K]
    }>): Request<UpdateOrganizationConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationConfiguration(
          this.ops["UpdateOrganizationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStandardsControl(partialParams: ToOptional<{
      [K in keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof UpdateStandardsControlRequest & keyof Omit<UpdateStandardsControlRequest, "StandardsControlArn"> & keyof UpdateStandardsControlRequest]: (UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest & UpdateStandardsControlRequest & Omit<UpdateStandardsControlRequest, "StandardsControlArn"> & UpdateStandardsControlRequest)[K]
    }>): Request<UpdateStandardsControlResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStandardsControl(
          this.ops["UpdateStandardsControl"].applicator.apply(partialParams)
        );
    }
}