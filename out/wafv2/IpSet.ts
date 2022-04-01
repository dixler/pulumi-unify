
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CheckCapacityRequest,
    CreateIPSetRequest,
    CreateRegexPatternSetRequest,
    CreateRuleGroupRequest,
    CreateWebACLRequest,
    DeleteIPSetRequest,
    DeleteRegexPatternSetRequest,
    DeleteRuleGroupRequest,
    DeleteWebACLRequest,
    DescribeManagedRuleGroupRequest,
    GetIPSetRequest,
    GetManagedRuleSetRequest,
    GetRateBasedStatementManagedKeysRequest,
    GetRegexPatternSetRequest,
    GetSampledRequestsRequest,
    GetWebACLRequest,
    ListAvailableManagedRuleGroupVersionsRequest,
    ListAvailableManagedRuleGroupsRequest,
    ListIPSetsRequest,
    ListLoggingConfigurationsRequest,
    ListManagedRuleSetsRequest,
    ListRegexPatternSetsRequest,
    ListRuleGroupsRequest,
    ListWebACLsRequest,
    PutManagedRuleSetVersionsRequest,
    UpdateIPSetRequest,
    UpdateManagedRuleSetVersionExpiryDateRequest,
    UpdateRegexPatternSetRequest,
    UpdateRuleGroupRequest,
    UpdateWebACLRequest,
    CheckCapacityResponse,
    CreateIPSetResponse,
    CreateRegexPatternSetResponse,
    CreateRuleGroupResponse,
    CreateWebACLResponse,
    DeleteIPSetResponse,
    DeleteRegexPatternSetResponse,
    DeleteRuleGroupResponse,
    DeleteWebACLResponse,
    DescribeManagedRuleGroupResponse,
    GetIPSetResponse,
    GetManagedRuleSetResponse,
    GetRateBasedStatementManagedKeysResponse,
    GetRegexPatternSetResponse,
    GetSampledRequestsResponse,
    GetWebACLResponse,
    ListAvailableManagedRuleGroupVersionsResponse,
    ListAvailableManagedRuleGroupsResponse,
    ListIPSetsResponse,
    ListLoggingConfigurationsResponse,
    ListManagedRuleSetsResponse,
    ListRegexPatternSetsResponse,
    ListRuleGroupsResponse,
    ListWebACLsResponse,
    PutManagedRuleSetVersionsResponse,
    UpdateIPSetResponse,
    UpdateManagedRuleSetVersionExpiryDateResponse,
    UpdateRegexPatternSetResponse,
    UpdateRuleGroupResponse,
    UpdateWebACLResponse
} from "aws-sdk/clients/wafv2";
const schema = require("../apis/wafv2-2019-07-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.wafv2.IpSet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.wafv2.IpSet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.WAFV2()
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

    invokeCheckCapacity(partialParams: ToOptional<{
      [K in keyof CheckCapacityRequest & keyof Omit<CheckCapacityRequest, "Scope">]: (CheckCapacityRequest)[K]
    }>): Request<CheckCapacityResponse, AWSError> {
        this.boot();
        return this.client.checkCapacity(
          this.ops["CheckCapacity"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof Omit<CreateIPSetRequest, "Name" | "Scope">]: (CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest & keyof Omit<CreateRegexPatternSetRequest, "Name" | "Scope">]: (CreateRegexPatternSetRequest)[K]
    }>): Request<CreateRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.createRegexPatternSet(
          this.ops["CreateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest & keyof Omit<CreateRuleGroupRequest, "Name" | "Scope">]: (CreateRuleGroupRequest)[K]
    }>): Request<CreateRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.createRuleGroup(
          this.ops["CreateRuleGroup"].apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest & keyof Omit<CreateWebACLRequest, "Name" | "Scope">]: (CreateWebACLRequest)[K]
    }>): Request<CreateWebACLResponse, AWSError> {
        this.boot();
        return this.client.createWebACL(
          this.ops["CreateWebACL"].apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof Omit<DeleteIPSetRequest, "Name" | "Scope" | "LockToken">]: (DeleteIPSetRequest)[K]
    }>): Request<DeleteIPSetResponse, AWSError> {
        this.boot();
        return this.client.deleteIPSet(
          this.ops["DeleteIPSet"].apply(partialParams)
        );
    }

    invokeDeleteRegexPatternSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexPatternSetRequest & keyof Omit<DeleteRegexPatternSetRequest, "Name" | "Scope" | "LockToken">]: (DeleteRegexPatternSetRequest)[K]
    }>): Request<DeleteRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.deleteRegexPatternSet(
          this.ops["DeleteRegexPatternSet"].apply(partialParams)
        );
    }

    invokeDeleteRuleGroup(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupRequest & keyof Omit<DeleteRuleGroupRequest, "Name" | "Scope" | "LockToken">]: (DeleteRuleGroupRequest)[K]
    }>): Request<DeleteRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteRuleGroup(
          this.ops["DeleteRuleGroup"].apply(partialParams)
        );
    }

    invokeDeleteWebACL(partialParams: ToOptional<{
      [K in keyof DeleteWebACLRequest & keyof Omit<DeleteWebACLRequest, "Name" | "Scope" | "LockToken">]: (DeleteWebACLRequest)[K]
    }>): Request<DeleteWebACLResponse, AWSError> {
        this.boot();
        return this.client.deleteWebACL(
          this.ops["DeleteWebACL"].apply(partialParams)
        );
    }

    invokeDescribeManagedRuleGroup(partialParams: ToOptional<{
      [K in keyof DescribeManagedRuleGroupRequest & keyof Omit<DescribeManagedRuleGroupRequest, "Name" | "Scope">]: (DescribeManagedRuleGroupRequest)[K]
    }>): Request<DescribeManagedRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.describeManagedRuleGroup(
          this.ops["DescribeManagedRuleGroup"].apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof Omit<GetIPSetRequest, "Name" | "Scope">]: (GetIPSetRequest)[K]
    }>): Request<GetIPSetResponse, AWSError> {
        this.boot();
        return this.client.getIPSet(
          this.ops["GetIPSet"].apply(partialParams)
        );
    }

    invokeGetManagedRuleSet(partialParams: ToOptional<{
      [K in keyof GetManagedRuleSetRequest & keyof Omit<GetManagedRuleSetRequest, "Name" | "Scope">]: (GetManagedRuleSetRequest)[K]
    }>): Request<GetManagedRuleSetResponse, AWSError> {
        this.boot();
        return this.client.getManagedRuleSet(
          this.ops["GetManagedRuleSet"].apply(partialParams)
        );
    }

    invokeGetRateBasedStatementManagedKeys(partialParams: ToOptional<{
      [K in keyof GetRateBasedStatementManagedKeysRequest & keyof Omit<GetRateBasedStatementManagedKeysRequest, "Scope">]: (GetRateBasedStatementManagedKeysRequest)[K]
    }>): Request<GetRateBasedStatementManagedKeysResponse, AWSError> {
        this.boot();
        return this.client.getRateBasedStatementManagedKeys(
          this.ops["GetRateBasedStatementManagedKeys"].apply(partialParams)
        );
    }

    invokeGetRegexPatternSet(partialParams: ToOptional<{
      [K in keyof GetRegexPatternSetRequest & keyof Omit<GetRegexPatternSetRequest, "Name" | "Scope">]: (GetRegexPatternSetRequest)[K]
    }>): Request<GetRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.getRegexPatternSet(
          this.ops["GetRegexPatternSet"].apply(partialParams)
        );
    }

    invokeGetSampledRequests(partialParams: ToOptional<{
      [K in keyof GetSampledRequestsRequest & keyof Omit<GetSampledRequestsRequest, "Scope">]: (GetSampledRequestsRequest)[K]
    }>): Request<GetSampledRequestsResponse, AWSError> {
        this.boot();
        return this.client.getSampledRequests(
          this.ops["GetSampledRequests"].apply(partialParams)
        );
    }

    invokeGetWebACL(partialParams: ToOptional<{
      [K in keyof GetWebACLRequest & keyof Omit<GetWebACLRequest, "Name" | "Scope">]: (GetWebACLRequest)[K]
    }>): Request<GetWebACLResponse, AWSError> {
        this.boot();
        return this.client.getWebACL(
          this.ops["GetWebACL"].apply(partialParams)
        );
    }

    invokeListAvailableManagedRuleGroupVersions(partialParams: ToOptional<{
      [K in keyof ListAvailableManagedRuleGroupVersionsRequest & keyof Omit<ListAvailableManagedRuleGroupVersionsRequest, "Name" | "Scope">]: (ListAvailableManagedRuleGroupVersionsRequest)[K]
    }>): Request<ListAvailableManagedRuleGroupVersionsResponse, AWSError> {
        this.boot();
        return this.client.listAvailableManagedRuleGroupVersions(
          this.ops["ListAvailableManagedRuleGroupVersions"].apply(partialParams)
        );
    }

    invokeListAvailableManagedRuleGroups(partialParams: ToOptional<{
      [K in keyof ListAvailableManagedRuleGroupsRequest & keyof Omit<ListAvailableManagedRuleGroupsRequest, "Scope">]: (ListAvailableManagedRuleGroupsRequest)[K]
    }>): Request<ListAvailableManagedRuleGroupsResponse, AWSError> {
        this.boot();
        return this.client.listAvailableManagedRuleGroups(
          this.ops["ListAvailableManagedRuleGroups"].apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest & keyof Omit<ListIPSetsRequest, "Scope">]: (ListIPSetsRequest)[K]
    }>): Request<ListIPSetsResponse, AWSError> {
        this.boot();
        return this.client.listIPSets(
          this.ops["ListIPSets"].apply(partialParams)
        );
    }

    invokeListLoggingConfigurations(partialParams: ToOptional<{
      [K in keyof ListLoggingConfigurationsRequest & keyof Omit<ListLoggingConfigurationsRequest, "Scope">]: (ListLoggingConfigurationsRequest)[K]
    }>): Request<ListLoggingConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listLoggingConfigurations(
          this.ops["ListLoggingConfigurations"].apply(partialParams)
        );
    }

    invokeListManagedRuleSets(partialParams: ToOptional<{
      [K in keyof ListManagedRuleSetsRequest & keyof Omit<ListManagedRuleSetsRequest, "Scope">]: (ListManagedRuleSetsRequest)[K]
    }>): Request<ListManagedRuleSetsResponse, AWSError> {
        this.boot();
        return this.client.listManagedRuleSets(
          this.ops["ListManagedRuleSets"].apply(partialParams)
        );
    }

    invokeListRegexPatternSets(partialParams: ToOptional<{
      [K in keyof ListRegexPatternSetsRequest & keyof Omit<ListRegexPatternSetsRequest, "Scope">]: (ListRegexPatternSetsRequest)[K]
    }>): Request<ListRegexPatternSetsResponse, AWSError> {
        this.boot();
        return this.client.listRegexPatternSets(
          this.ops["ListRegexPatternSets"].apply(partialParams)
        );
    }

    invokeListRuleGroups(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsRequest & keyof Omit<ListRuleGroupsRequest, "Scope">]: (ListRuleGroupsRequest)[K]
    }>): Request<ListRuleGroupsResponse, AWSError> {
        this.boot();
        return this.client.listRuleGroups(
          this.ops["ListRuleGroups"].apply(partialParams)
        );
    }

    invokeListWebACLs(partialParams: ToOptional<{
      [K in keyof ListWebACLsRequest & keyof Omit<ListWebACLsRequest, "Scope">]: (ListWebACLsRequest)[K]
    }>): Request<ListWebACLsResponse, AWSError> {
        this.boot();
        return this.client.listWebACLs(
          this.ops["ListWebACLs"].apply(partialParams)
        );
    }

    invokePutManagedRuleSetVersions(partialParams: ToOptional<{
      [K in keyof PutManagedRuleSetVersionsRequest & keyof Omit<PutManagedRuleSetVersionsRequest, "Name" | "Scope" | "LockToken">]: (PutManagedRuleSetVersionsRequest)[K]
    }>): Request<PutManagedRuleSetVersionsResponse, AWSError> {
        this.boot();
        return this.client.putManagedRuleSetVersions(
          this.ops["PutManagedRuleSetVersions"].apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof Omit<UpdateIPSetRequest, "Name" | "Scope" | "LockToken">]: (UpdateIPSetRequest)[K]
    }>): Request<UpdateIPSetResponse, AWSError> {
        this.boot();
        return this.client.updateIPSet(
          this.ops["UpdateIPSet"].apply(partialParams)
        );
    }

    invokeUpdateManagedRuleSetVersionExpiryDate(partialParams: ToOptional<{
      [K in keyof UpdateManagedRuleSetVersionExpiryDateRequest & keyof Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "Name" | "Scope" | "LockToken">]: (UpdateManagedRuleSetVersionExpiryDateRequest)[K]
    }>): Request<UpdateManagedRuleSetVersionExpiryDateResponse, AWSError> {
        this.boot();
        return this.client.updateManagedRuleSetVersionExpiryDate(
          this.ops["UpdateManagedRuleSetVersionExpiryDate"].apply(partialParams)
        );
    }

    invokeUpdateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexPatternSetRequest & keyof Omit<UpdateRegexPatternSetRequest, "Name" | "Scope" | "LockToken">]: (UpdateRegexPatternSetRequest)[K]
    }>): Request<UpdateRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.updateRegexPatternSet(
          this.ops["UpdateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeUpdateRuleGroup(partialParams: ToOptional<{
      [K in keyof UpdateRuleGroupRequest & keyof Omit<UpdateRuleGroupRequest, "Name" | "Scope" | "LockToken">]: (UpdateRuleGroupRequest)[K]
    }>): Request<UpdateRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.updateRuleGroup(
          this.ops["UpdateRuleGroup"].apply(partialParams)
        );
    }

    invokeUpdateWebACL(partialParams: ToOptional<{
      [K in keyof UpdateWebACLRequest & keyof Omit<UpdateWebACLRequest, "Name" | "Scope" | "LockToken">]: (UpdateWebACLRequest)[K]
    }>): Request<UpdateWebACLResponse, AWSError> {
        this.boot();
        return this.client.updateWebACL(
          this.ops["UpdateWebACL"].apply(partialParams)
        );
    }
}