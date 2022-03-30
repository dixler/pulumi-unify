
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateAdminAccountRequest,
    DeleteAppsListRequest,
    DeletePolicyRequest,
    DeleteProtocolsListRequest,
    GetAppsListRequest,
    GetComplianceDetailRequest,
    GetPolicyRequest,
    GetProtectionStatusRequest,
    GetProtocolsListRequest,
    GetViolationDetailsRequest,
    ListAppsListsRequest,
    ListComplianceStatusRequest,
    ListProtocolsListsRequest,
    ListTagsForResourceRequest,
    PutAppsListRequest,
    PutNotificationChannelRequest,
    PutPolicyRequest,
    PutProtocolsListRequest,
    TagResourceRequest,
    UntagResourceRequest,
    GetAppsListResponse,
    GetComplianceDetailResponse,
    GetPolicyResponse,
    GetProtectionStatusResponse,
    GetProtocolsListResponse,
    GetViolationDetailsResponse,
    ListAppsListsResponse,
    ListComplianceStatusResponse,
    ListProtocolsListsResponse,
    ListTagsForResourceResponse,
    PutAppsListResponse,
    PutPolicyResponse,
    PutProtocolsListResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/fms";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fms.AdminAccount {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.fms.AdminAccount>) {
        super(...args)
        this.client = new awssdk.FMS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/fms-2018-01-01.normal.json"), this.client)
    }

    invokeAssociateAdminAccount(partialParams: ToOptional<{
      [K in keyof AssociateAdminAccountRequest]: (AssociateAdminAccountRequest)[K]
    }>): void {
        return this.client.associateAdminAccount(
            this.ops["AssociateAdminAccount"].apply(partialParams)
        );
    }

    invokeDeleteAppsList(partialParams: ToOptional<{
      [K in keyof DeleteAppsListRequest]: (DeleteAppsListRequest)[K]
    }>): void {
        return this.client.deleteAppsList(
            this.ops["DeleteAppsList"].apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest]: (DeletePolicyRequest)[K]
    }>): void {
        return this.client.deletePolicy(
            this.ops["DeletePolicy"].apply(partialParams)
        );
    }

    invokeDeleteProtocolsList(partialParams: ToOptional<{
      [K in keyof DeleteProtocolsListRequest]: (DeleteProtocolsListRequest)[K]
    }>): void {
        return this.client.deleteProtocolsList(
            this.ops["DeleteProtocolsList"].apply(partialParams)
        );
    }

    invokeGetAppsList(partialParams: ToOptional<{
      [K in keyof GetAppsListRequest]: (GetAppsListRequest)[K]
    }>): GetAppsListResponse {
        return this.client.getAppsList(
            this.ops["GetAppsList"].apply(partialParams)
        );
    }

    invokeGetComplianceDetail(partialParams: ToOptional<{
      [K in keyof GetComplianceDetailRequest]: (GetComplianceDetailRequest)[K]
    }>): GetComplianceDetailResponse {
        return this.client.getComplianceDetail(
            this.ops["GetComplianceDetail"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest]: (GetPolicyRequest)[K]
    }>): GetPolicyResponse {
        return this.client.getPolicy(
            this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetProtectionStatus(partialParams: ToOptional<{
      [K in keyof GetProtectionStatusRequest]: (GetProtectionStatusRequest)[K]
    }>): GetProtectionStatusResponse {
        return this.client.getProtectionStatus(
            this.ops["GetProtectionStatus"].apply(partialParams)
        );
    }

    invokeGetProtocolsList(partialParams: ToOptional<{
      [K in keyof GetProtocolsListRequest]: (GetProtocolsListRequest)[K]
    }>): GetProtocolsListResponse {
        return this.client.getProtocolsList(
            this.ops["GetProtocolsList"].apply(partialParams)
        );
    }

    invokeGetViolationDetails(partialParams: ToOptional<{
      [K in keyof GetViolationDetailsRequest]: (GetViolationDetailsRequest)[K]
    }>): GetViolationDetailsResponse {
        return this.client.getViolationDetails(
            this.ops["GetViolationDetails"].apply(partialParams)
        );
    }

    invokeListAppsLists(partialParams: ToOptional<{
      [K in keyof ListAppsListsRequest]: (ListAppsListsRequest)[K]
    }>): ListAppsListsResponse {
        return this.client.listAppsLists(
            this.ops["ListAppsLists"].apply(partialParams)
        );
    }

    invokeListComplianceStatus(partialParams: ToOptional<{
      [K in keyof ListComplianceStatusRequest]: (ListComplianceStatusRequest)[K]
    }>): ListComplianceStatusResponse {
        return this.client.listComplianceStatus(
            this.ops["ListComplianceStatus"].apply(partialParams)
        );
    }

    invokeListProtocolsLists(partialParams: ToOptional<{
      [K in keyof ListProtocolsListsRequest]: (ListProtocolsListsRequest)[K]
    }>): ListProtocolsListsResponse {
        return this.client.listProtocolsLists(
            this.ops["ListProtocolsLists"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutAppsList(partialParams: ToOptional<{
      [K in keyof PutAppsListRequest]: (PutAppsListRequest)[K]
    }>): PutAppsListResponse {
        return this.client.putAppsList(
            this.ops["PutAppsList"].apply(partialParams)
        );
    }

    invokePutNotificationChannel(partialParams: ToOptional<{
      [K in keyof PutNotificationChannelRequest]: (PutNotificationChannelRequest)[K]
    }>): void {
        return this.client.putNotificationChannel(
            this.ops["PutNotificationChannel"].apply(partialParams)
        );
    }

    invokePutPolicy(partialParams: ToOptional<{
      [K in keyof PutPolicyRequest]: (PutPolicyRequest)[K]
    }>): PutPolicyResponse {
        return this.client.putPolicy(
            this.ops["PutPolicy"].apply(partialParams)
        );
    }

    invokePutProtocolsList(partialParams: ToOptional<{
      [K in keyof PutProtocolsListRequest]: (PutProtocolsListRequest)[K]
    }>): PutProtocolsListResponse {
        return this.client.putProtocolsList(
            this.ops["PutProtocolsList"].apply(partialParams)
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
}