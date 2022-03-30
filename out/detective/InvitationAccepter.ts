
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

export default class extends aws.detective.InvitationAccepter {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.detective.InvitationAccepter>) {
        super(...args)
        this.client = new awssdk.Detective()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/detective-2018-10-26.normal.json"), this.client)
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest]: (AcceptInvitationRequest)[K]
    }>): void {
        return this.client.acceptInvitation(
            this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest]: (CreateMembersRequest)[K]
    }>): CreateMembersResponse {
        return this.client.createMembers(
            this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeDeleteGraph(partialParams: ToOptional<{
      [K in keyof DeleteGraphRequest]: (DeleteGraphRequest)[K]
    }>): void {
        return this.client.deleteGraph(
            this.ops["DeleteGraph"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest]: (DeleteMembersRequest)[K]
    }>): DeleteMembersResponse {
        return this.client.deleteMembers(
            this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest]: (DescribeOrganizationConfigurationRequest)[K]
    }>): DescribeOrganizationConfigurationResponse {
        return this.client.describeOrganizationConfiguration(
            this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeDisassociateMembership(partialParams: ToOptional<{
      [K in keyof DisassociateMembershipRequest]: (DisassociateMembershipRequest)[K]
    }>): void {
        return this.client.disassociateMembership(
            this.ops["DisassociateMembership"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest)[K]
    }>): void {
        return this.client.enableOrganizationAdminAccount(
            this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest]: (GetMembersRequest)[K]
    }>): GetMembersResponse {
        return this.client.getMembers(
            this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof Omit<ListMembersRequest, "GraphArn">]: (Omit<ListMembersRequest, "GraphArn">)[K]
    }>): ListMembersResponse {
        return this.client.listMembers(
            this.ops["ListMembers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "ResourceArn">]: (Omit<ListTagsForResourceRequest, "ResourceArn">)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRejectInvitation(partialParams: ToOptional<{
      [K in keyof Omit<RejectInvitationRequest, "GraphArn">]: (Omit<RejectInvitationRequest, "GraphArn">)[K]
    }>): void {
        return this.client.rejectInvitation(
            this.ops["RejectInvitation"].apply(partialParams)
        );
    }

    invokeStartMonitoringMember(partialParams: ToOptional<{
      [K in keyof Omit<StartMonitoringMemberRequest, "GraphArn">]: (Omit<StartMonitoringMemberRequest, "GraphArn">)[K]
    }>): void {
        return this.client.startMonitoringMember(
            this.ops["StartMonitoringMember"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceArn">]: (Omit<TagResourceRequest, "ResourceArn">)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceArn">]: (Omit<UntagResourceRequest, "ResourceArn">)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<UpdateOrganizationConfigurationRequest, "GraphArn">]: (Omit<UpdateOrganizationConfigurationRequest, "GraphArn">)[K]
    }>): void {
        return this.client.updateOrganizationConfiguration(
            this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }
}