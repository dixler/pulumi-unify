
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/fms-2018-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.fms.Policy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.fms.Policy>) {
        super(...args)
        this.client = new awssdk.FMS()
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

    invokeAssociateAdminAccount(partialParams: ToOptional<{
      [K in keyof AssociateAdminAccountRequest & keyof AssociateAdminAccountRequest & keyof AssociateAdminAccountRequest & keyof AssociateAdminAccountRequest]: (AssociateAdminAccountRequest & AssociateAdminAccountRequest & AssociateAdminAccountRequest & AssociateAdminAccountRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateAdminAccount(
          this.ops["AssociateAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppsList(partialParams: ToOptional<{
      [K in keyof DeleteAppsListRequest & keyof DeleteAppsListRequest & keyof DeleteAppsListRequest & keyof DeleteAppsListRequest]: (DeleteAppsListRequest & DeleteAppsListRequest & DeleteAppsListRequest & DeleteAppsListRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppsList(
          this.ops["DeleteAppsList"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProtocolsList(partialParams: ToOptional<{
      [K in keyof DeleteProtocolsListRequest & keyof DeleteProtocolsListRequest & keyof DeleteProtocolsListRequest & keyof DeleteProtocolsListRequest]: (DeleteProtocolsListRequest & DeleteProtocolsListRequest & DeleteProtocolsListRequest & DeleteProtocolsListRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProtocolsList(
          this.ops["DeleteProtocolsList"].applicator.apply(partialParams)
        );
    }

    invokeGetAppsList(partialParams: ToOptional<{
      [K in keyof GetAppsListRequest & keyof GetAppsListRequest & keyof GetAppsListRequest & keyof GetAppsListRequest]: (GetAppsListRequest & GetAppsListRequest & GetAppsListRequest & GetAppsListRequest)[K]
    }>): Request<GetAppsListResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAppsList(
          this.ops["GetAppsList"].applicator.apply(partialParams)
        );
    }

    invokeGetComplianceDetail(partialParams: ToOptional<{
      [K in keyof GetComplianceDetailRequest & keyof GetComplianceDetailRequest & keyof GetComplianceDetailRequest & keyof GetComplianceDetailRequest]: (GetComplianceDetailRequest & GetComplianceDetailRequest & GetComplianceDetailRequest & GetComplianceDetailRequest)[K]
    }>): Request<GetComplianceDetailResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComplianceDetail(
          this.ops["GetComplianceDetail"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetProtectionStatus(partialParams: ToOptional<{
      [K in keyof GetProtectionStatusRequest & keyof GetProtectionStatusRequest & keyof GetProtectionStatusRequest & keyof GetProtectionStatusRequest]: (GetProtectionStatusRequest & GetProtectionStatusRequest & GetProtectionStatusRequest & GetProtectionStatusRequest)[K]
    }>): Request<GetProtectionStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProtectionStatus(
          this.ops["GetProtectionStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetProtocolsList(partialParams: ToOptional<{
      [K in keyof GetProtocolsListRequest & keyof GetProtocolsListRequest & keyof GetProtocolsListRequest & keyof GetProtocolsListRequest]: (GetProtocolsListRequest & GetProtocolsListRequest & GetProtocolsListRequest & GetProtocolsListRequest)[K]
    }>): Request<GetProtocolsListResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProtocolsList(
          this.ops["GetProtocolsList"].applicator.apply(partialParams)
        );
    }

    invokeGetViolationDetails(partialParams: ToOptional<{
      [K in keyof GetViolationDetailsRequest & keyof GetViolationDetailsRequest & keyof GetViolationDetailsRequest & keyof GetViolationDetailsRequest]: (GetViolationDetailsRequest & GetViolationDetailsRequest & GetViolationDetailsRequest & GetViolationDetailsRequest)[K]
    }>): Request<GetViolationDetailsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getViolationDetails(
          this.ops["GetViolationDetails"].applicator.apply(partialParams)
        );
    }

    invokeListAppsLists(partialParams: ToOptional<{
      [K in keyof ListAppsListsRequest & keyof ListAppsListsRequest & keyof ListAppsListsRequest & keyof ListAppsListsRequest]: (ListAppsListsRequest & ListAppsListsRequest & ListAppsListsRequest & ListAppsListsRequest)[K]
    }>): Request<ListAppsListsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAppsLists(
          this.ops["ListAppsLists"].applicator.apply(partialParams)
        );
    }

    invokeListComplianceStatus(partialParams: ToOptional<{
      [K in keyof ListComplianceStatusRequest & keyof ListComplianceStatusRequest & keyof ListComplianceStatusRequest & keyof ListComplianceStatusRequest]: (ListComplianceStatusRequest & ListComplianceStatusRequest & ListComplianceStatusRequest & ListComplianceStatusRequest)[K]
    }>): Request<ListComplianceStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listComplianceStatus(
          this.ops["ListComplianceStatus"].applicator.apply(partialParams)
        );
    }

    invokeListProtocolsLists(partialParams: ToOptional<{
      [K in keyof ListProtocolsListsRequest & keyof ListProtocolsListsRequest & keyof ListProtocolsListsRequest & keyof ListProtocolsListsRequest]: (ListProtocolsListsRequest & ListProtocolsListsRequest & ListProtocolsListsRequest & ListProtocolsListsRequest)[K]
    }>): Request<ListProtocolsListsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProtocolsLists(
          this.ops["ListProtocolsLists"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutAppsList(partialParams: ToOptional<{
      [K in keyof PutAppsListRequest & keyof PutAppsListRequest & keyof PutAppsListRequest & keyof PutAppsListRequest]: (PutAppsListRequest & PutAppsListRequest & PutAppsListRequest & PutAppsListRequest)[K]
    }>): Request<PutAppsListResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAppsList(
          this.ops["PutAppsList"].applicator.apply(partialParams)
        );
    }

    invokePutNotificationChannel(partialParams: ToOptional<{
      [K in keyof PutNotificationChannelRequest & keyof PutNotificationChannelRequest & keyof PutNotificationChannelRequest & keyof PutNotificationChannelRequest]: (PutNotificationChannelRequest & PutNotificationChannelRequest & PutNotificationChannelRequest & PutNotificationChannelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putNotificationChannel(
          this.ops["PutNotificationChannel"].applicator.apply(partialParams)
        );
    }

    invokePutPolicy(partialParams: ToOptional<{
      [K in keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest]: (PutPolicyRequest & PutPolicyRequest & PutPolicyRequest & PutPolicyRequest)[K]
    }>): Request<PutPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPolicy(
          this.ops["PutPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutProtocolsList(partialParams: ToOptional<{
      [K in keyof PutProtocolsListRequest & keyof PutProtocolsListRequest & keyof PutProtocolsListRequest & keyof PutProtocolsListRequest]: (PutProtocolsListRequest & PutProtocolsListRequest & PutProtocolsListRequest & PutProtocolsListRequest)[K]
    }>): Request<PutProtocolsListResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putProtocolsList(
          this.ops["PutProtocolsList"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }
}