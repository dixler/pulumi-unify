
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AcceptInvitationRequest,
    CreateMembersRequest,
    DeleteGraphRequest,
    DeleteMembersRequest,
    DescribeOrganizationConfigurationRequest,
    DisassociateMembershipRequest,
    EnableOrganizationAdminAccountRequest,
    GetMembersRequest,
    ListMembersRequest,
    ListTagsForResourceRequest,
    RejectInvitationRequest,
    StartMonitoringMemberRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateOrganizationConfigurationRequest,
    CreateMembersResponse,
    DeleteMembersResponse,
    DescribeOrganizationConfigurationResponse,
    GetMembersResponse,
    ListMembersResponse,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/detective";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.detective.Member {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.detective.Member>) {
        super(...args)
        this.client = new awssdk.Detective()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/detective-2018-10-26.normal.json"), this.client)
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): void {
        return this.client.acceptInvitation(
            this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest]: (CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest)[K]
    }>): CreateMembersResponse {
        return this.client.createMembers(
            this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeDeleteGraph(partialParams: ToOptional<{
      [K in keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest & keyof DeleteGraphRequest]: (DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest & DeleteGraphRequest)[K]
    }>): void {
        return this.client.deleteGraph(
            this.ops["DeleteGraph"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest]: (DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest)[K]
    }>): DeleteMembersResponse {
        return this.client.deleteMembers(
            this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest]: (DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest)[K]
    }>): DescribeOrganizationConfigurationResponse {
        return this.client.describeOrganizationConfiguration(
            this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeDisassociateMembership(partialParams: ToOptional<{
      [K in keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest & keyof DisassociateMembershipRequest]: (DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest & DisassociateMembershipRequest)[K]
    }>): void {
        return this.client.disassociateMembership(
            this.ops["DisassociateMembership"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof Omit<EnableOrganizationAdminAccountRequest, "AccountId"> & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (Omit<EnableOrganizationAdminAccountRequest, "AccountId"> & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): void {
        return this.client.enableOrganizationAdminAccount(
            this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest & keyof GetMembersRequest]: (GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest & GetMembersRequest)[K]
    }>): GetMembersResponse {
        return this.client.getMembers(
            this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest & keyof ListMembersRequest & keyof ListMembersRequest & keyof ListMembersRequest & keyof Omit<ListMembersRequest, "GraphArn"> & keyof ListMembersRequest & keyof ListMembersRequest & keyof ListMembersRequest & keyof ListMembersRequest & keyof ListMembersRequest]: (ListMembersRequest & ListMembersRequest & ListMembersRequest & ListMembersRequest & Omit<ListMembersRequest, "GraphArn"> & ListMembersRequest & ListMembersRequest & ListMembersRequest & ListMembersRequest & ListMembersRequest)[K]
    }>): ListMembersResponse {
        return this.client.listMembers(
            this.ops["ListMembers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRejectInvitation(partialParams: ToOptional<{
      [K in keyof RejectInvitationRequest & keyof RejectInvitationRequest & keyof RejectInvitationRequest & keyof RejectInvitationRequest & keyof Omit<RejectInvitationRequest, "GraphArn"> & keyof RejectInvitationRequest & keyof RejectInvitationRequest & keyof RejectInvitationRequest & keyof RejectInvitationRequest & keyof RejectInvitationRequest]: (RejectInvitationRequest & RejectInvitationRequest & RejectInvitationRequest & RejectInvitationRequest & Omit<RejectInvitationRequest, "GraphArn"> & RejectInvitationRequest & RejectInvitationRequest & RejectInvitationRequest & RejectInvitationRequest & RejectInvitationRequest)[K]
    }>): void {
        return this.client.rejectInvitation(
            this.ops["RejectInvitation"].apply(partialParams)
        );
    }

    invokeStartMonitoringMember(partialParams: ToOptional<{
      [K in keyof Omit<StartMonitoringMemberRequest, "AccountId"> & keyof StartMonitoringMemberRequest & keyof StartMonitoringMemberRequest & keyof StartMonitoringMemberRequest & keyof Omit<StartMonitoringMemberRequest, "GraphArn"> & keyof StartMonitoringMemberRequest & keyof StartMonitoringMemberRequest & keyof StartMonitoringMemberRequest & keyof StartMonitoringMemberRequest & keyof StartMonitoringMemberRequest]: (Omit<StartMonitoringMemberRequest, "AccountId"> & StartMonitoringMemberRequest & StartMonitoringMemberRequest & StartMonitoringMemberRequest & Omit<StartMonitoringMemberRequest, "GraphArn"> & StartMonitoringMemberRequest & StartMonitoringMemberRequest & StartMonitoringMemberRequest & StartMonitoringMemberRequest & StartMonitoringMemberRequest)[K]
    }>): void {
        return this.client.startMonitoringMember(
            this.ops["StartMonitoringMember"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof Omit<UpdateOrganizationConfigurationRequest, "GraphArn"> & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & Omit<UpdateOrganizationConfigurationRequest, "GraphArn"> & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest)[K]
    }>): void {
        return this.client.updateOrganizationConfiguration(
            this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }
}