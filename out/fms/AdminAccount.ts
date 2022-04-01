
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    GetAdminAccountRequest,
    GetAppsListRequest,
    GetComplianceDetailRequest,
    GetNotificationChannelRequest,
    GetPolicyRequest,
    GetProtectionStatusRequest,
    GetProtocolsListRequest,
    GetViolationDetailsRequest,
    ListAppsListsRequest,
    ListComplianceStatusRequest,
    ListMemberAccountsRequest,
    ListPoliciesRequest,
    ListProtocolsListsRequest,
    ListTagsForResourceRequest,
    PutAppsListRequest,
    PutPolicyRequest,
    PutProtocolsListRequest,
    TagResourceRequest,
    UntagResourceRequest,
    GetAdminAccountResponse,
    GetAppsListResponse,
    GetComplianceDetailResponse,
    GetNotificationChannelResponse,
    GetPolicyResponse,
    GetProtectionStatusResponse,
    GetProtocolsListResponse,
    GetViolationDetailsResponse,
    ListAppsListsResponse,
    ListComplianceStatusResponse,
    ListMemberAccountsResponse,
    ListPoliciesResponse,
    ListProtocolsListsResponse,
    ListTagsForResourceResponse,
    PutAppsListResponse,
    PutPolicyResponse,
    PutProtocolsListResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/fms";
const schema = require("../apis/fms-2018-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fms.AdminAccount {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.fms.AdminAccount>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.FMS()
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

    invokeGetAdminAccount(partialParams: ToOptional<{
      [K in keyof GetAdminAccountRequest]: (GetAdminAccountRequest)[K]
    }>): Request<GetAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.getAdminAccount(
          this.ops["GetAdminAccount"].apply(partialParams)
        );
    }

    invokeGetAppsList(partialParams: ToOptional<{
      [K in keyof GetAppsListRequest]: (GetAppsListRequest)[K]
    }>): Request<GetAppsListResponse, AWSError> {
        this.boot();
        return this.client.getAppsList(
          this.ops["GetAppsList"].apply(partialParams)
        );
    }

    invokeGetComplianceDetail(partialParams: ToOptional<{
      [K in keyof GetComplianceDetailRequest]: (GetComplianceDetailRequest)[K]
    }>): Request<GetComplianceDetailResponse, AWSError> {
        this.boot();
        return this.client.getComplianceDetail(
          this.ops["GetComplianceDetail"].apply(partialParams)
        );
    }

    invokeGetNotificationChannel(partialParams: ToOptional<{
      [K in keyof GetNotificationChannelRequest]: (GetNotificationChannelRequest)[K]
    }>): Request<GetNotificationChannelResponse, AWSError> {
        this.boot();
        return this.client.getNotificationChannel(
          this.ops["GetNotificationChannel"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetProtectionStatus(partialParams: ToOptional<{
      [K in keyof GetProtectionStatusRequest]: (GetProtectionStatusRequest)[K]
    }>): Request<GetProtectionStatusResponse, AWSError> {
        this.boot();
        return this.client.getProtectionStatus(
          this.ops["GetProtectionStatus"].apply(partialParams)
        );
    }

    invokeGetProtocolsList(partialParams: ToOptional<{
      [K in keyof GetProtocolsListRequest]: (GetProtocolsListRequest)[K]
    }>): Request<GetProtocolsListResponse, AWSError> {
        this.boot();
        return this.client.getProtocolsList(
          this.ops["GetProtocolsList"].apply(partialParams)
        );
    }

    invokeGetViolationDetails(partialParams: ToOptional<{
      [K in keyof GetViolationDetailsRequest]: (GetViolationDetailsRequest)[K]
    }>): Request<GetViolationDetailsResponse, AWSError> {
        this.boot();
        return this.client.getViolationDetails(
          this.ops["GetViolationDetails"].apply(partialParams)
        );
    }

    invokeListAppsLists(partialParams: ToOptional<{
      [K in keyof ListAppsListsRequest]: (ListAppsListsRequest)[K]
    }>): Request<ListAppsListsResponse, AWSError> {
        this.boot();
        return this.client.listAppsLists(
          this.ops["ListAppsLists"].apply(partialParams)
        );
    }

    invokeListComplianceStatus(partialParams: ToOptional<{
      [K in keyof ListComplianceStatusRequest]: (ListComplianceStatusRequest)[K]
    }>): Request<ListComplianceStatusResponse, AWSError> {
        this.boot();
        return this.client.listComplianceStatus(
          this.ops["ListComplianceStatus"].apply(partialParams)
        );
    }

    invokeListMemberAccounts(partialParams: ToOptional<{
      [K in keyof ListMemberAccountsRequest]: (ListMemberAccountsRequest)[K]
    }>): Request<ListMemberAccountsResponse, AWSError> {
        this.boot();
        return this.client.listMemberAccounts(
          this.ops["ListMemberAccounts"].apply(partialParams)
        );
    }

    invokeListPolicies(partialParams: ToOptional<{
      [K in keyof ListPoliciesRequest]: (ListPoliciesRequest)[K]
    }>): Request<ListPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listPolicies(
          this.ops["ListPolicies"].apply(partialParams)
        );
    }

    invokeListProtocolsLists(partialParams: ToOptional<{
      [K in keyof ListProtocolsListsRequest]: (ListProtocolsListsRequest)[K]
    }>): Request<ListProtocolsListsResponse, AWSError> {
        this.boot();
        return this.client.listProtocolsLists(
          this.ops["ListProtocolsLists"].apply(partialParams)
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

    invokePutAppsList(partialParams: ToOptional<{
      [K in keyof PutAppsListRequest]: (PutAppsListRequest)[K]
    }>): Request<PutAppsListResponse, AWSError> {
        this.boot();
        return this.client.putAppsList(
          this.ops["PutAppsList"].apply(partialParams)
        );
    }

    invokePutPolicy(partialParams: ToOptional<{
      [K in keyof PutPolicyRequest]: (PutPolicyRequest)[K]
    }>): Request<PutPolicyResponse, AWSError> {
        this.boot();
        return this.client.putPolicy(
          this.ops["PutPolicy"].apply(partialParams)
        );
    }

    invokePutProtocolsList(partialParams: ToOptional<{
      [K in keyof PutProtocolsListRequest]: (PutProtocolsListRequest)[K]
    }>): Request<PutProtocolsListResponse, AWSError> {
        this.boot();
        return this.client.putProtocolsList(
          this.ops["PutProtocolsList"].apply(partialParams)
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
}