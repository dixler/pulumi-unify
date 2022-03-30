
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.macie2.Member {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.macie2.Member>) {
        super(...args)
        this.client = new awssdk.Macie2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/macie2-2020-01-01.normal.json"), this.client)
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): AcceptInvitationResponse {
        return this.client.acceptInvitation(
            this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeCreateClassificationJob(partialParams: ToOptional<{
      [K in keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest & keyof CreateClassificationJobRequest]: (CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest & CreateClassificationJobRequest)[K]
    }>): CreateClassificationJobResponse {
        return this.client.createClassificationJob(
            this.ops["CreateClassificationJob"].apply(partialParams)
        );
    }

    invokeCreateCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest & keyof CreateCustomDataIdentifierRequest]: (CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest & CreateCustomDataIdentifierRequest)[K]
    }>): CreateCustomDataIdentifierResponse {
        return this.client.createCustomDataIdentifier(
            this.ops["CreateCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeCreateFindingsFilter(partialParams: ToOptional<{
      [K in keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest & keyof CreateFindingsFilterRequest]: (CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest & CreateFindingsFilterRequest)[K]
    }>): CreateFindingsFilterResponse {
        return this.client.createFindingsFilter(
            this.ops["CreateFindingsFilter"].apply(partialParams)
        );
    }

    invokeCreateInvitations(partialParams: ToOptional<{
      [K in keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest & keyof CreateInvitationsRequest]: (CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest & CreateInvitationsRequest)[K]
    }>): CreateInvitationsResponse {
        return this.client.createInvitations(
            this.ops["CreateInvitations"].apply(partialParams)
        );
    }

    invokeCreateMember(partialParams: ToOptional<{
      [K in keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest & keyof CreateMemberRequest]: (CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest & CreateMemberRequest)[K]
    }>): CreateMemberResponse {
        return this.client.createMember(
            this.ops["CreateMember"].apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest)[K]
    }>): DeclineInvitationsResponse {
        return this.client.declineInvitations(
            this.ops["DeclineInvitations"].apply(partialParams)
        );
    }

    invokeDeleteCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest & keyof DeleteCustomDataIdentifierRequest]: (DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest & DeleteCustomDataIdentifierRequest)[K]
    }>): DeleteCustomDataIdentifierResponse {
        return this.client.deleteCustomDataIdentifier(
            this.ops["DeleteCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeDeleteFindingsFilter(partialParams: ToOptional<{
      [K in keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest & keyof DeleteFindingsFilterRequest]: (DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest & DeleteFindingsFilterRequest)[K]
    }>): DeleteFindingsFilterResponse {
        return this.client.deleteFindingsFilter(
            this.ops["DeleteFindingsFilter"].apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest)[K]
    }>): DeleteInvitationsResponse {
        return this.client.deleteInvitations(
            this.ops["DeleteInvitations"].apply(partialParams)
        );
    }

    invokeDeleteMember(partialParams: ToOptional<{
      [K in keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest & keyof DeleteMemberRequest]: (DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest & DeleteMemberRequest)[K]
    }>): DeleteMemberResponse {
        return this.client.deleteMember(
            this.ops["DeleteMember"].apply(partialParams)
        );
    }

    invokeDescribeClassificationJob(partialParams: ToOptional<{
      [K in keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest & keyof DescribeClassificationJobRequest]: (DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest & DescribeClassificationJobRequest)[K]
    }>): DescribeClassificationJobResponse {
        return this.client.describeClassificationJob(
            this.ops["DescribeClassificationJob"].apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest)[K]
    }>): DisableOrganizationAdminAccountResponse {
        return this.client.disableOrganizationAdminAccount(
            this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMember(partialParams: ToOptional<{
      [K in keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest & keyof DisassociateMemberRequest]: (DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest & DisassociateMemberRequest)[K]
    }>): DisassociateMemberResponse {
        return this.client.disassociateMember(
            this.ops["DisassociateMember"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): EnableOrganizationAdminAccountResponse {
        return this.client.enableOrganizationAdminAccount(
            this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest & keyof GetCustomDataIdentifierRequest]: (GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest & GetCustomDataIdentifierRequest)[K]
    }>): GetCustomDataIdentifierResponse {
        return this.client.getCustomDataIdentifier(
            this.ops["GetCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeGetFindingStatistics(partialParams: ToOptional<{
      [K in keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest & keyof GetFindingStatisticsRequest]: (GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest & GetFindingStatisticsRequest)[K]
    }>): GetFindingStatisticsResponse {
        return this.client.getFindingStatistics(
            this.ops["GetFindingStatistics"].apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest & keyof GetFindingsRequest]: (GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest & GetFindingsRequest)[K]
    }>): GetFindingsResponse {
        return this.client.getFindings(
            this.ops["GetFindings"].apply(partialParams)
        );
    }

    invokeGetFindingsFilter(partialParams: ToOptional<{
      [K in keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest & keyof GetFindingsFilterRequest]: (GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest & GetFindingsFilterRequest)[K]
    }>): GetFindingsFilterResponse {
        return this.client.getFindingsFilter(
            this.ops["GetFindingsFilter"].apply(partialParams)
        );
    }

    invokeGetMember(partialParams: ToOptional<{
      [K in keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest & keyof GetMemberRequest]: (GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest & GetMemberRequest)[K]
    }>): GetMemberResponse {
        return this.client.getMember(
            this.ops["GetMember"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutClassificationExportConfiguration(partialParams: ToOptional<{
      [K in keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest & keyof PutClassificationExportConfigurationRequest]: (PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest & PutClassificationExportConfigurationRequest)[K]
    }>): PutClassificationExportConfigurationResponse {
        return this.client.putClassificationExportConfiguration(
            this.ops["PutClassificationExportConfiguration"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest & keyof TestCustomDataIdentifierRequest]: (TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest & TestCustomDataIdentifierRequest)[K]
    }>): TestCustomDataIdentifierResponse {
        return this.client.testCustomDataIdentifier(
            this.ops["TestCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateClassificationJob(partialParams: ToOptional<{
      [K in keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest & keyof UpdateClassificationJobRequest]: (UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest & UpdateClassificationJobRequest)[K]
    }>): UpdateClassificationJobResponse {
        return this.client.updateClassificationJob(
            this.ops["UpdateClassificationJob"].apply(partialParams)
        );
    }

    invokeUpdateFindingsFilter(partialParams: ToOptional<{
      [K in keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest & keyof UpdateFindingsFilterRequest]: (UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest & UpdateFindingsFilterRequest)[K]
    }>): UpdateFindingsFilterResponse {
        return this.client.updateFindingsFilter(
            this.ops["UpdateFindingsFilter"].apply(partialParams)
        );
    }

    invokeUpdateMemberSession(partialParams: ToOptional<{
      [K in keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof UpdateMemberSessionRequest & keyof Omit<UpdateMemberSessionRequest, "status"> & keyof UpdateMemberSessionRequest]: (UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & UpdateMemberSessionRequest & Omit<UpdateMemberSessionRequest, "status"> & UpdateMemberSessionRequest)[K]
    }>): UpdateMemberSessionResponse {
        return this.client.updateMemberSession(
            this.ops["UpdateMemberSession"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest)[K]
    }>): UpdateOrganizationConfigurationResponse {
        return this.client.updateOrganizationConfiguration(
            this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }
}