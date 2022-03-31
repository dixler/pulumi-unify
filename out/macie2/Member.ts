
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptInvitationRequest,
    CreateClassificationJobRequest,
    CreateCustomDataIdentifierRequest,
    CreateFindingsFilterRequest,
    CreateInvitationsRequest,
    CreateMemberRequest,
    DeclineInvitationsRequest,
    DeleteCustomDataIdentifierRequest,
    DeleteFindingsFilterRequest,
    DeleteInvitationsRequest,
    DeleteMemberRequest,
    DescribeClassificationJobRequest,
    DisableOrganizationAdminAccountRequest,
    DisassociateMemberRequest,
    EnableOrganizationAdminAccountRequest,
    GetCustomDataIdentifierRequest,
    GetFindingStatisticsRequest,
    GetFindingsRequest,
    GetFindingsFilterRequest,
    GetMemberRequest,
    ListTagsForResourceRequest,
    PutClassificationExportConfigurationRequest,
    TagResourceRequest,
    TestCustomDataIdentifierRequest,
    UntagResourceRequest,
    UpdateClassificationJobRequest,
    UpdateFindingsFilterRequest,
    UpdateMemberSessionRequest,
    UpdateOrganizationConfigurationRequest,
    AcceptInvitationResponse,
    CreateClassificationJobResponse,
    CreateCustomDataIdentifierResponse,
    CreateFindingsFilterResponse,
    CreateInvitationsResponse,
    CreateMemberResponse,
    DeclineInvitationsResponse,
    DeleteCustomDataIdentifierResponse,
    DeleteFindingsFilterResponse,
    DeleteInvitationsResponse,
    DeleteMemberResponse,
    DescribeClassificationJobResponse,
    DisableOrganizationAdminAccountResponse,
    DisassociateMemberResponse,
    EnableOrganizationAdminAccountResponse,
    GetCustomDataIdentifierResponse,
    GetFindingStatisticsResponse,
    GetFindingsResponse,
    GetFindingsFilterResponse,
    GetMemberResponse,
    ListTagsForResourceResponse,
    PutClassificationExportConfigurationResponse,
    TagResourceResponse,
    TestCustomDataIdentifierResponse,
    UntagResourceResponse,
    UpdateClassificationJobResponse,
    UpdateFindingsFilterResponse,
    UpdateMemberSessionResponse,
    UpdateOrganizationConfigurationResponse
} from "aws-sdk/clients/macie2";
const schema = require("../apis/macie2-2020-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.macie2.Member {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.macie2.Member>) {
        super(...args)
        this.client = new awssdk.Macie2()
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

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].applicator.apply(partialParams)
        );
    }

    invokeCreateClassificationJob(partialParams: ToOptional<{
      [K in keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest]: (CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest)[K]
    }>): Request<CreateClassificationJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClassificationJob(
          this.ops["CreateClassificationJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest]: (CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest)[K]
    }>): Request<CreateCustomDataIdentifierResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomDataIdentifier(
          this.ops["CreateCustomDataIdentifier"].applicator.apply(partialParams)
        );
    }

    invokeCreateFindingsFilter(partialParams: ToOptional<{
      [K in keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest]: (CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest)[K]
    }>): Request<CreateFindingsFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFindingsFilter(
          this.ops["CreateFindingsFilter"].applicator.apply(partialParams)
        );
    }

    invokeCreateInvitations(partialParams: ToOptional<{
      [K in keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest]: (CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest)[K]
    }>): Request<CreateInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInvitations(
          this.ops["CreateInvitations"].applicator.apply(partialParams)
        );
    }

    invokeCreateMember(partialParams: ToOptional<{
      [K in keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest]: (CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest)[K]
    }>): Request<CreateMemberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMember(
          this.ops["CreateMember"].applicator.apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest)[K]
    }>): Request<DeclineInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineInvitations(
          this.ops["DeclineInvitations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest]: (DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest)[K]
    }>): Request<DeleteCustomDataIdentifierResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomDataIdentifier(
          this.ops["DeleteCustomDataIdentifier"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFindingsFilter(partialParams: ToOptional<{
      [K in keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest]: (DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest)[K]
    }>): Request<DeleteFindingsFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFindingsFilter(
          this.ops["DeleteFindingsFilter"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest)[K]
    }>): Request<DeleteInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInvitations(
          this.ops["DeleteInvitations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMember(partialParams: ToOptional<{
      [K in keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest]: (DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest)[K]
    }>): Request<DeleteMemberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMember(
          this.ops["DeleteMember"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClassificationJob(partialParams: ToOptional<{
      [K in keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest]: (DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest)[K]
    }>): Request<DescribeClassificationJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClassificationJob(
          this.ops["DescribeClassificationJob"].applicator.apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest)[K]
    }>): Request<DisableOrganizationAdminAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableOrganizationAdminAccount(
          this.ops["DisableOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateMember(partialParams: ToOptional<{
      [K in keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest]: (DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest)[K]
    }>): Request<DisassociateMemberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMember(
          this.ops["DisassociateMember"].applicator.apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): Request<EnableOrganizationAdminAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableOrganizationAdminAccount(
          this.ops["EnableOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest]: (GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest)[K]
    }>): Request<GetCustomDataIdentifierResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCustomDataIdentifier(
          this.ops["GetCustomDataIdentifier"].applicator.apply(partialParams)
        );
    }

    invokeGetFindingStatistics(partialParams: ToOptional<{
      [K in keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest]: (GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest)[K]
    }>): Request<GetFindingStatisticsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindingStatistics(
          this.ops["GetFindingStatistics"].applicator.apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest]: (GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest)[K]
    }>): Request<GetFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindings(
          this.ops["GetFindings"].applicator.apply(partialParams)
        );
    }

    invokeGetFindingsFilter(partialParams: ToOptional<{
      [K in keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest]: (GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest)[K]
    }>): Request<GetFindingsFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindingsFilter(
          this.ops["GetFindingsFilter"].applicator.apply(partialParams)
        );
    }

    invokeGetMember(partialParams: ToOptional<{
      [K in keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest]: (GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest)[K]
    }>): Request<GetMemberResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMember(
          this.ops["GetMember"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutClassificationExportConfiguration(partialParams: ToOptional<{
      [K in keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest]: (PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest)[K]
    }>): Request<PutClassificationExportConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putClassificationExportConfiguration(
          this.ops["PutClassificationExportConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest]: (TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest)[K]
    }>): Request<TestCustomDataIdentifierResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testCustomDataIdentifier(
          this.ops["TestCustomDataIdentifier"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateClassificationJob(partialParams: ToOptional<{
      [K in keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest]: (UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest)[K]
    }>): Request<UpdateClassificationJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateClassificationJob(
          this.ops["UpdateClassificationJob"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFindingsFilter(partialParams: ToOptional<{
      [K in keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest]: (UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest)[K]
    }>): Request<UpdateFindingsFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindingsFilter(
          this.ops["UpdateFindingsFilter"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMemberSession(partialParams: ToOptional<{
      [K in keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof Omit<UpdateMemberSessionRequest, "status"> & keyof UpdateMemberSessionRequest]: (UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & Omit<UpdateMemberSessionRequest, "status"> & UpdateMemberSessionRequest)[K]
    }>): Request<UpdateMemberSessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMemberSession(
          this.ops["UpdateMemberSession"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest)[K]
    }>): Request<UpdateOrganizationConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationConfiguration(
          this.ops["UpdateOrganizationConfiguration"].applicator.apply(partialParams)
        );
    }
}