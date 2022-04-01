
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateByteMatchSetRequest,
    CreateGeoMatchSetRequest,
    CreateIPSetRequest,
    CreateRateBasedRuleRequest,
    CreateRegexMatchSetRequest,
    CreateRegexPatternSetRequest,
    CreateRuleRequest,
    CreateRuleGroupRequest,
    CreateSizeConstraintSetRequest,
    CreateSqlInjectionMatchSetRequest,
    CreateWebACLRequest,
    CreateWebACLMigrationStackRequest,
    CreateXssMatchSetRequest,
    DeleteByteMatchSetRequest,
    DeleteGeoMatchSetRequest,
    DeleteIPSetRequest,
    DeleteLoggingConfigurationRequest,
    DeletePermissionPolicyRequest,
    DeleteRateBasedRuleRequest,
    DeleteRegexMatchSetRequest,
    DeleteRegexPatternSetRequest,
    DeleteRuleRequest,
    DeleteRuleGroupRequest,
    DeleteSizeConstraintSetRequest,
    DeleteSqlInjectionMatchSetRequest,
    DeleteWebACLRequest,
    DeleteXssMatchSetRequest,
    GetByteMatchSetRequest,
    GetChangeTokenRequest,
    GetChangeTokenStatusRequest,
    GetGeoMatchSetRequest,
    GetIPSetRequest,
    GetLoggingConfigurationRequest,
    GetPermissionPolicyRequest,
    GetRateBasedRuleRequest,
    GetRateBasedRuleManagedKeysRequest,
    GetRegexMatchSetRequest,
    GetRegexPatternSetRequest,
    GetRuleRequest,
    GetRuleGroupRequest,
    GetSampledRequestsRequest,
    GetSizeConstraintSetRequest,
    GetSqlInjectionMatchSetRequest,
    GetWebACLRequest,
    GetXssMatchSetRequest,
    ListActivatedRulesInRuleGroupRequest,
    ListByteMatchSetsRequest,
    ListGeoMatchSetsRequest,
    ListIPSetsRequest,
    ListLoggingConfigurationsRequest,
    ListRateBasedRulesRequest,
    ListRegexMatchSetsRequest,
    ListRegexPatternSetsRequest,
    ListRuleGroupsRequest,
    ListRulesRequest,
    ListSizeConstraintSetsRequest,
    ListSqlInjectionMatchSetsRequest,
    ListSubscribedRuleGroupsRequest,
    ListTagsForResourceRequest,
    ListWebACLsRequest,
    ListXssMatchSetsRequest,
    PutLoggingConfigurationRequest,
    PutPermissionPolicyRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateByteMatchSetRequest,
    UpdateGeoMatchSetRequest,
    UpdateIPSetRequest,
    UpdateRateBasedRuleRequest,
    UpdateRegexMatchSetRequest,
    UpdateRegexPatternSetRequest,
    UpdateRuleRequest,
    UpdateRuleGroupRequest,
    UpdateSizeConstraintSetRequest,
    UpdateSqlInjectionMatchSetRequest,
    UpdateWebACLRequest,
    UpdateXssMatchSetRequest,
    CreateByteMatchSetResponse,
    CreateGeoMatchSetResponse,
    CreateIPSetResponse,
    CreateRateBasedRuleResponse,
    CreateRegexMatchSetResponse,
    CreateRegexPatternSetResponse,
    CreateRuleResponse,
    CreateRuleGroupResponse,
    CreateSizeConstraintSetResponse,
    CreateSqlInjectionMatchSetResponse,
    CreateWebACLResponse,
    CreateWebACLMigrationStackResponse,
    CreateXssMatchSetResponse,
    DeleteByteMatchSetResponse,
    DeleteGeoMatchSetResponse,
    DeleteIPSetResponse,
    DeleteLoggingConfigurationResponse,
    DeletePermissionPolicyResponse,
    DeleteRateBasedRuleResponse,
    DeleteRegexMatchSetResponse,
    DeleteRegexPatternSetResponse,
    DeleteRuleResponse,
    DeleteRuleGroupResponse,
    DeleteSizeConstraintSetResponse,
    DeleteSqlInjectionMatchSetResponse,
    DeleteWebACLResponse,
    DeleteXssMatchSetResponse,
    GetByteMatchSetResponse,
    GetChangeTokenResponse,
    GetChangeTokenStatusResponse,
    GetGeoMatchSetResponse,
    GetIPSetResponse,
    GetLoggingConfigurationResponse,
    GetPermissionPolicyResponse,
    GetRateBasedRuleResponse,
    GetRateBasedRuleManagedKeysResponse,
    GetRegexMatchSetResponse,
    GetRegexPatternSetResponse,
    GetRuleResponse,
    GetRuleGroupResponse,
    GetSampledRequestsResponse,
    GetSizeConstraintSetResponse,
    GetSqlInjectionMatchSetResponse,
    GetWebACLResponse,
    GetXssMatchSetResponse,
    ListActivatedRulesInRuleGroupResponse,
    ListByteMatchSetsResponse,
    ListGeoMatchSetsResponse,
    ListIPSetsResponse,
    ListLoggingConfigurationsResponse,
    ListRateBasedRulesResponse,
    ListRegexMatchSetsResponse,
    ListRegexPatternSetsResponse,
    ListRuleGroupsResponse,
    ListRulesResponse,
    ListSizeConstraintSetsResponse,
    ListSqlInjectionMatchSetsResponse,
    ListSubscribedRuleGroupsResponse,
    ListTagsForResourceResponse,
    ListWebACLsResponse,
    ListXssMatchSetsResponse,
    PutLoggingConfigurationResponse,
    PutPermissionPolicyResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateByteMatchSetResponse,
    UpdateGeoMatchSetResponse,
    UpdateIPSetResponse,
    UpdateRateBasedRuleResponse,
    UpdateRegexMatchSetResponse,
    UpdateRegexPatternSetResponse,
    UpdateRuleResponse,
    UpdateRuleGroupResponse,
    UpdateSizeConstraintSetResponse,
    UpdateSqlInjectionMatchSetResponse,
    UpdateWebACLResponse,
    UpdateXssMatchSetResponse
} from "aws-sdk/clients/waf";
const schema = require("../apis/waf-2015-08-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.waf.WebAcl {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.waf.WebAcl>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.WAF()
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

    invokeCreateByteMatchSet(partialParams: ToOptional<{
      [K in keyof CreateByteMatchSetRequest & keyof Omit<CreateByteMatchSetRequest, "Name">]: (CreateByteMatchSetRequest)[K]
    }>): Request<CreateByteMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createByteMatchSet(
          this.ops["CreateByteMatchSet"].apply(partialParams)
        );
    }

    invokeCreateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof CreateGeoMatchSetRequest & keyof Omit<CreateGeoMatchSetRequest, "Name">]: (CreateGeoMatchSetRequest)[K]
    }>): Request<CreateGeoMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createGeoMatchSet(
          this.ops["CreateGeoMatchSet"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof Omit<CreateIPSetRequest, "Name">]: (CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateRateBasedRule(partialParams: ToOptional<{
      [K in keyof CreateRateBasedRuleRequest & keyof Omit<CreateRateBasedRuleRequest, "Name" | "MetricName">]: (CreateRateBasedRuleRequest)[K]
    }>): Request<CreateRateBasedRuleResponse, AWSError> {
        this.boot();
        return this.client.createRateBasedRule(
          this.ops["CreateRateBasedRule"].apply(partialParams)
        );
    }

    invokeCreateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof CreateRegexMatchSetRequest & keyof Omit<CreateRegexMatchSetRequest, "Name">]: (CreateRegexMatchSetRequest)[K]
    }>): Request<CreateRegexMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createRegexMatchSet(
          this.ops["CreateRegexMatchSet"].apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest & keyof Omit<CreateRegexPatternSetRequest, "Name">]: (CreateRegexPatternSetRequest)[K]
    }>): Request<CreateRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.createRegexPatternSet(
          this.ops["CreateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeCreateRule(partialParams: ToOptional<{
      [K in keyof CreateRuleRequest & keyof Omit<CreateRuleRequest, "Name" | "MetricName">]: (CreateRuleRequest)[K]
    }>): Request<CreateRuleResponse, AWSError> {
        this.boot();
        return this.client.createRule(
          this.ops["CreateRule"].apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest & keyof Omit<CreateRuleGroupRequest, "Name" | "MetricName">]: (CreateRuleGroupRequest)[K]
    }>): Request<CreateRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.createRuleGroup(
          this.ops["CreateRuleGroup"].apply(partialParams)
        );
    }

    invokeCreateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof CreateSizeConstraintSetRequest & keyof Omit<CreateSizeConstraintSetRequest, "Name">]: (CreateSizeConstraintSetRequest)[K]
    }>): Request<CreateSizeConstraintSetResponse, AWSError> {
        this.boot();
        return this.client.createSizeConstraintSet(
          this.ops["CreateSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeCreateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof CreateSqlInjectionMatchSetRequest & keyof Omit<CreateSqlInjectionMatchSetRequest, "Name">]: (CreateSqlInjectionMatchSetRequest)[K]
    }>): Request<CreateSqlInjectionMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createSqlInjectionMatchSet(
          this.ops["CreateSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest & keyof Omit<CreateWebACLRequest, "Name" | "MetricName">]: (CreateWebACLRequest)[K]
    }>): Request<CreateWebACLResponse, AWSError> {
        this.boot();
        return this.client.createWebACL(
          this.ops["CreateWebACL"].apply(partialParams)
        );
    }

    invokeCreateWebACLMigrationStack(partialParams: ToOptional<{
      [K in keyof CreateWebACLMigrationStackRequest]: (CreateWebACLMigrationStackRequest)[K]
    }>): Request<CreateWebACLMigrationStackResponse, AWSError> {
        this.boot();
        return this.client.createWebACLMigrationStack(
          this.ops["CreateWebACLMigrationStack"].apply(partialParams)
        );
    }

    invokeCreateXssMatchSet(partialParams: ToOptional<{
      [K in keyof CreateXssMatchSetRequest & keyof Omit<CreateXssMatchSetRequest, "Name">]: (CreateXssMatchSetRequest)[K]
    }>): Request<CreateXssMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createXssMatchSet(
          this.ops["CreateXssMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteByteMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteByteMatchSetRequest]: (DeleteByteMatchSetRequest)[K]
    }>): Request<DeleteByteMatchSetResponse, AWSError> {
        this.boot();
        return this.client.deleteByteMatchSet(
          this.ops["DeleteByteMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteGeoMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteGeoMatchSetRequest]: (DeleteGeoMatchSetRequest)[K]
    }>): Request<DeleteGeoMatchSetResponse, AWSError> {
        this.boot();
        return this.client.deleteGeoMatchSet(
          this.ops["DeleteGeoMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest]: (DeleteIPSetRequest)[K]
    }>): Request<DeleteIPSetResponse, AWSError> {
        this.boot();
        return this.client.deleteIPSet(
          this.ops["DeleteIPSet"].apply(partialParams)
        );
    }

    invokeDeleteLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteLoggingConfigurationRequest]: (DeleteLoggingConfigurationRequest)[K]
    }>): Request<DeleteLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteLoggingConfiguration(
          this.ops["DeleteLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeDeletePermissionPolicy(partialParams: ToOptional<{
      [K in keyof DeletePermissionPolicyRequest]: (DeletePermissionPolicyRequest)[K]
    }>): Request<DeletePermissionPolicyResponse, AWSError> {
        this.boot();
        return this.client.deletePermissionPolicy(
          this.ops["DeletePermissionPolicy"].apply(partialParams)
        );
    }

    invokeDeleteRateBasedRule(partialParams: ToOptional<{
      [K in keyof DeleteRateBasedRuleRequest]: (DeleteRateBasedRuleRequest)[K]
    }>): Request<DeleteRateBasedRuleResponse, AWSError> {
        this.boot();
        return this.client.deleteRateBasedRule(
          this.ops["DeleteRateBasedRule"].apply(partialParams)
        );
    }

    invokeDeleteRegexMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexMatchSetRequest]: (DeleteRegexMatchSetRequest)[K]
    }>): Request<DeleteRegexMatchSetResponse, AWSError> {
        this.boot();
        return this.client.deleteRegexMatchSet(
          this.ops["DeleteRegexMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteRegexPatternSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexPatternSetRequest]: (DeleteRegexPatternSetRequest)[K]
    }>): Request<DeleteRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.deleteRegexPatternSet(
          this.ops["DeleteRegexPatternSet"].apply(partialParams)
        );
    }

    invokeDeleteRule(partialParams: ToOptional<{
      [K in keyof DeleteRuleRequest]: (DeleteRuleRequest)[K]
    }>): Request<DeleteRuleResponse, AWSError> {
        this.boot();
        return this.client.deleteRule(
          this.ops["DeleteRule"].apply(partialParams)
        );
    }

    invokeDeleteRuleGroup(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupRequest]: (DeleteRuleGroupRequest)[K]
    }>): Request<DeleteRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteRuleGroup(
          this.ops["DeleteRuleGroup"].apply(partialParams)
        );
    }

    invokeDeleteSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof DeleteSizeConstraintSetRequest]: (DeleteSizeConstraintSetRequest)[K]
    }>): Request<DeleteSizeConstraintSetResponse, AWSError> {
        this.boot();
        return this.client.deleteSizeConstraintSet(
          this.ops["DeleteSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeDeleteSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteSqlInjectionMatchSetRequest]: (DeleteSqlInjectionMatchSetRequest)[K]
    }>): Request<DeleteSqlInjectionMatchSetResponse, AWSError> {
        this.boot();
        return this.client.deleteSqlInjectionMatchSet(
          this.ops["DeleteSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteWebACL(partialParams: ToOptional<{
      [K in keyof DeleteWebACLRequest]: (DeleteWebACLRequest)[K]
    }>): Request<DeleteWebACLResponse, AWSError> {
        this.boot();
        return this.client.deleteWebACL(
          this.ops["DeleteWebACL"].apply(partialParams)
        );
    }

    invokeDeleteXssMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteXssMatchSetRequest]: (DeleteXssMatchSetRequest)[K]
    }>): Request<DeleteXssMatchSetResponse, AWSError> {
        this.boot();
        return this.client.deleteXssMatchSet(
          this.ops["DeleteXssMatchSet"].apply(partialParams)
        );
    }

    invokeGetByteMatchSet(partialParams: ToOptional<{
      [K in keyof GetByteMatchSetRequest]: (GetByteMatchSetRequest)[K]
    }>): Request<GetByteMatchSetResponse, AWSError> {
        this.boot();
        return this.client.getByteMatchSet(
          this.ops["GetByteMatchSet"].apply(partialParams)
        );
    }

    invokeGetChangeToken(partialParams: ToOptional<{
      [K in keyof GetChangeTokenRequest]: (GetChangeTokenRequest)[K]
    }>): Request<GetChangeTokenResponse, AWSError> {
        this.boot();
        return this.client.getChangeToken(
          this.ops["GetChangeToken"].apply(partialParams)
        );
    }

    invokeGetChangeTokenStatus(partialParams: ToOptional<{
      [K in keyof GetChangeTokenStatusRequest]: (GetChangeTokenStatusRequest)[K]
    }>): Request<GetChangeTokenStatusResponse, AWSError> {
        this.boot();
        return this.client.getChangeTokenStatus(
          this.ops["GetChangeTokenStatus"].apply(partialParams)
        );
    }

    invokeGetGeoMatchSet(partialParams: ToOptional<{
      [K in keyof GetGeoMatchSetRequest]: (GetGeoMatchSetRequest)[K]
    }>): Request<GetGeoMatchSetResponse, AWSError> {
        this.boot();
        return this.client.getGeoMatchSet(
          this.ops["GetGeoMatchSet"].apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest]: (GetIPSetRequest)[K]
    }>): Request<GetIPSetResponse, AWSError> {
        this.boot();
        return this.client.getIPSet(
          this.ops["GetIPSet"].apply(partialParams)
        );
    }

    invokeGetLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetLoggingConfigurationRequest]: (GetLoggingConfigurationRequest)[K]
    }>): Request<GetLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getLoggingConfiguration(
          this.ops["GetLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetPermissionPolicy(partialParams: ToOptional<{
      [K in keyof GetPermissionPolicyRequest]: (GetPermissionPolicyRequest)[K]
    }>): Request<GetPermissionPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPermissionPolicy(
          this.ops["GetPermissionPolicy"].apply(partialParams)
        );
    }

    invokeGetRateBasedRule(partialParams: ToOptional<{
      [K in keyof GetRateBasedRuleRequest]: (GetRateBasedRuleRequest)[K]
    }>): Request<GetRateBasedRuleResponse, AWSError> {
        this.boot();
        return this.client.getRateBasedRule(
          this.ops["GetRateBasedRule"].apply(partialParams)
        );
    }

    invokeGetRateBasedRuleManagedKeys(partialParams: ToOptional<{
      [K in keyof GetRateBasedRuleManagedKeysRequest]: (GetRateBasedRuleManagedKeysRequest)[K]
    }>): Request<GetRateBasedRuleManagedKeysResponse, AWSError> {
        this.boot();
        return this.client.getRateBasedRuleManagedKeys(
          this.ops["GetRateBasedRuleManagedKeys"].apply(partialParams)
        );
    }

    invokeGetRegexMatchSet(partialParams: ToOptional<{
      [K in keyof GetRegexMatchSetRequest]: (GetRegexMatchSetRequest)[K]
    }>): Request<GetRegexMatchSetResponse, AWSError> {
        this.boot();
        return this.client.getRegexMatchSet(
          this.ops["GetRegexMatchSet"].apply(partialParams)
        );
    }

    invokeGetRegexPatternSet(partialParams: ToOptional<{
      [K in keyof GetRegexPatternSetRequest]: (GetRegexPatternSetRequest)[K]
    }>): Request<GetRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.getRegexPatternSet(
          this.ops["GetRegexPatternSet"].apply(partialParams)
        );
    }

    invokeGetRule(partialParams: ToOptional<{
      [K in keyof GetRuleRequest]: (GetRuleRequest)[K]
    }>): Request<GetRuleResponse, AWSError> {
        this.boot();
        return this.client.getRule(
          this.ops["GetRule"].apply(partialParams)
        );
    }

    invokeGetRuleGroup(partialParams: ToOptional<{
      [K in keyof GetRuleGroupRequest]: (GetRuleGroupRequest)[K]
    }>): Request<GetRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.getRuleGroup(
          this.ops["GetRuleGroup"].apply(partialParams)
        );
    }

    invokeGetSampledRequests(partialParams: ToOptional<{
      [K in keyof GetSampledRequestsRequest]: (GetSampledRequestsRequest)[K]
    }>): Request<GetSampledRequestsResponse, AWSError> {
        this.boot();
        return this.client.getSampledRequests(
          this.ops["GetSampledRequests"].apply(partialParams)
        );
    }

    invokeGetSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof GetSizeConstraintSetRequest]: (GetSizeConstraintSetRequest)[K]
    }>): Request<GetSizeConstraintSetResponse, AWSError> {
        this.boot();
        return this.client.getSizeConstraintSet(
          this.ops["GetSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeGetSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof GetSqlInjectionMatchSetRequest]: (GetSqlInjectionMatchSetRequest)[K]
    }>): Request<GetSqlInjectionMatchSetResponse, AWSError> {
        this.boot();
        return this.client.getSqlInjectionMatchSet(
          this.ops["GetSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeGetWebACL(partialParams: ToOptional<{
      [K in keyof GetWebACLRequest]: (GetWebACLRequest)[K]
    }>): Request<GetWebACLResponse, AWSError> {
        this.boot();
        return this.client.getWebACL(
          this.ops["GetWebACL"].apply(partialParams)
        );
    }

    invokeGetXssMatchSet(partialParams: ToOptional<{
      [K in keyof GetXssMatchSetRequest]: (GetXssMatchSetRequest)[K]
    }>): Request<GetXssMatchSetResponse, AWSError> {
        this.boot();
        return this.client.getXssMatchSet(
          this.ops["GetXssMatchSet"].apply(partialParams)
        );
    }

    invokeListActivatedRulesInRuleGroup(partialParams: ToOptional<{
      [K in keyof ListActivatedRulesInRuleGroupRequest]: (ListActivatedRulesInRuleGroupRequest)[K]
    }>): Request<ListActivatedRulesInRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.listActivatedRulesInRuleGroup(
          this.ops["ListActivatedRulesInRuleGroup"].apply(partialParams)
        );
    }

    invokeListByteMatchSets(partialParams: ToOptional<{
      [K in keyof ListByteMatchSetsRequest]: (ListByteMatchSetsRequest)[K]
    }>): Request<ListByteMatchSetsResponse, AWSError> {
        this.boot();
        return this.client.listByteMatchSets(
          this.ops["ListByteMatchSets"].apply(partialParams)
        );
    }

    invokeListGeoMatchSets(partialParams: ToOptional<{
      [K in keyof ListGeoMatchSetsRequest]: (ListGeoMatchSetsRequest)[K]
    }>): Request<ListGeoMatchSetsResponse, AWSError> {
        this.boot();
        return this.client.listGeoMatchSets(
          this.ops["ListGeoMatchSets"].apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest]: (ListIPSetsRequest)[K]
    }>): Request<ListIPSetsResponse, AWSError> {
        this.boot();
        return this.client.listIPSets(
          this.ops["ListIPSets"].apply(partialParams)
        );
    }

    invokeListLoggingConfigurations(partialParams: ToOptional<{
      [K in keyof ListLoggingConfigurationsRequest]: (ListLoggingConfigurationsRequest)[K]
    }>): Request<ListLoggingConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listLoggingConfigurations(
          this.ops["ListLoggingConfigurations"].apply(partialParams)
        );
    }

    invokeListRateBasedRules(partialParams: ToOptional<{
      [K in keyof ListRateBasedRulesRequest]: (ListRateBasedRulesRequest)[K]
    }>): Request<ListRateBasedRulesResponse, AWSError> {
        this.boot();
        return this.client.listRateBasedRules(
          this.ops["ListRateBasedRules"].apply(partialParams)
        );
    }

    invokeListRegexMatchSets(partialParams: ToOptional<{
      [K in keyof ListRegexMatchSetsRequest]: (ListRegexMatchSetsRequest)[K]
    }>): Request<ListRegexMatchSetsResponse, AWSError> {
        this.boot();
        return this.client.listRegexMatchSets(
          this.ops["ListRegexMatchSets"].apply(partialParams)
        );
    }

    invokeListRegexPatternSets(partialParams: ToOptional<{
      [K in keyof ListRegexPatternSetsRequest]: (ListRegexPatternSetsRequest)[K]
    }>): Request<ListRegexPatternSetsResponse, AWSError> {
        this.boot();
        return this.client.listRegexPatternSets(
          this.ops["ListRegexPatternSets"].apply(partialParams)
        );
    }

    invokeListRuleGroups(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsRequest]: (ListRuleGroupsRequest)[K]
    }>): Request<ListRuleGroupsResponse, AWSError> {
        this.boot();
        return this.client.listRuleGroups(
          this.ops["ListRuleGroups"].apply(partialParams)
        );
    }

    invokeListRules(partialParams: ToOptional<{
      [K in keyof ListRulesRequest]: (ListRulesRequest)[K]
    }>): Request<ListRulesResponse, AWSError> {
        this.boot();
        return this.client.listRules(
          this.ops["ListRules"].apply(partialParams)
        );
    }

    invokeListSizeConstraintSets(partialParams: ToOptional<{
      [K in keyof ListSizeConstraintSetsRequest]: (ListSizeConstraintSetsRequest)[K]
    }>): Request<ListSizeConstraintSetsResponse, AWSError> {
        this.boot();
        return this.client.listSizeConstraintSets(
          this.ops["ListSizeConstraintSets"].apply(partialParams)
        );
    }

    invokeListSqlInjectionMatchSets(partialParams: ToOptional<{
      [K in keyof ListSqlInjectionMatchSetsRequest]: (ListSqlInjectionMatchSetsRequest)[K]
    }>): Request<ListSqlInjectionMatchSetsResponse, AWSError> {
        this.boot();
        return this.client.listSqlInjectionMatchSets(
          this.ops["ListSqlInjectionMatchSets"].apply(partialParams)
        );
    }

    invokeListSubscribedRuleGroups(partialParams: ToOptional<{
      [K in keyof ListSubscribedRuleGroupsRequest]: (ListSubscribedRuleGroupsRequest)[K]
    }>): Request<ListSubscribedRuleGroupsResponse, AWSError> {
        this.boot();
        return this.client.listSubscribedRuleGroups(
          this.ops["ListSubscribedRuleGroups"].apply(partialParams)
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

    invokeListWebACLs(partialParams: ToOptional<{
      [K in keyof ListWebACLsRequest]: (ListWebACLsRequest)[K]
    }>): Request<ListWebACLsResponse, AWSError> {
        this.boot();
        return this.client.listWebACLs(
          this.ops["ListWebACLs"].apply(partialParams)
        );
    }

    invokeListXssMatchSets(partialParams: ToOptional<{
      [K in keyof ListXssMatchSetsRequest]: (ListXssMatchSetsRequest)[K]
    }>): Request<ListXssMatchSetsResponse, AWSError> {
        this.boot();
        return this.client.listXssMatchSets(
          this.ops["ListXssMatchSets"].apply(partialParams)
        );
    }

    invokePutLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutLoggingConfigurationRequest]: (PutLoggingConfigurationRequest)[K]
    }>): Request<PutLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putLoggingConfiguration(
          this.ops["PutLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutPermissionPolicy(partialParams: ToOptional<{
      [K in keyof PutPermissionPolicyRequest]: (PutPermissionPolicyRequest)[K]
    }>): Request<PutPermissionPolicyResponse, AWSError> {
        this.boot();
        return this.client.putPermissionPolicy(
          this.ops["PutPermissionPolicy"].apply(partialParams)
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

    invokeUpdateByteMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateByteMatchSetRequest]: (UpdateByteMatchSetRequest)[K]
    }>): Request<UpdateByteMatchSetResponse, AWSError> {
        this.boot();
        return this.client.updateByteMatchSet(
          this.ops["UpdateByteMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateGeoMatchSetRequest]: (UpdateGeoMatchSetRequest)[K]
    }>): Request<UpdateGeoMatchSetResponse, AWSError> {
        this.boot();
        return this.client.updateGeoMatchSet(
          this.ops["UpdateGeoMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest]: (UpdateIPSetRequest)[K]
    }>): Request<UpdateIPSetResponse, AWSError> {
        this.boot();
        return this.client.updateIPSet(
          this.ops["UpdateIPSet"].apply(partialParams)
        );
    }

    invokeUpdateRateBasedRule(partialParams: ToOptional<{
      [K in keyof UpdateRateBasedRuleRequest]: (UpdateRateBasedRuleRequest)[K]
    }>): Request<UpdateRateBasedRuleResponse, AWSError> {
        this.boot();
        return this.client.updateRateBasedRule(
          this.ops["UpdateRateBasedRule"].apply(partialParams)
        );
    }

    invokeUpdateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexMatchSetRequest]: (UpdateRegexMatchSetRequest)[K]
    }>): Request<UpdateRegexMatchSetResponse, AWSError> {
        this.boot();
        return this.client.updateRegexMatchSet(
          this.ops["UpdateRegexMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexPatternSetRequest]: (UpdateRegexPatternSetRequest)[K]
    }>): Request<UpdateRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.updateRegexPatternSet(
          this.ops["UpdateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeUpdateRule(partialParams: ToOptional<{
      [K in keyof UpdateRuleRequest]: (UpdateRuleRequest)[K]
    }>): Request<UpdateRuleResponse, AWSError> {
        this.boot();
        return this.client.updateRule(
          this.ops["UpdateRule"].apply(partialParams)
        );
    }

    invokeUpdateRuleGroup(partialParams: ToOptional<{
      [K in keyof UpdateRuleGroupRequest]: (UpdateRuleGroupRequest)[K]
    }>): Request<UpdateRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.updateRuleGroup(
          this.ops["UpdateRuleGroup"].apply(partialParams)
        );
    }

    invokeUpdateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof UpdateSizeConstraintSetRequest]: (UpdateSizeConstraintSetRequest)[K]
    }>): Request<UpdateSizeConstraintSetResponse, AWSError> {
        this.boot();
        return this.client.updateSizeConstraintSet(
          this.ops["UpdateSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeUpdateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateSqlInjectionMatchSetRequest]: (UpdateSqlInjectionMatchSetRequest)[K]
    }>): Request<UpdateSqlInjectionMatchSetResponse, AWSError> {
        this.boot();
        return this.client.updateSqlInjectionMatchSet(
          this.ops["UpdateSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateWebACL(partialParams: ToOptional<{
      [K in keyof UpdateWebACLRequest]: (UpdateWebACLRequest)[K]
    }>): Request<UpdateWebACLResponse, AWSError> {
        this.boot();
        return this.client.updateWebACL(
          this.ops["UpdateWebACL"].apply(partialParams)
        );
    }

    invokeUpdateXssMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateXssMatchSetRequest]: (UpdateXssMatchSetRequest)[K]
    }>): Request<UpdateXssMatchSetResponse, AWSError> {
        this.boot();
        return this.client.updateXssMatchSet(
          this.ops["UpdateXssMatchSet"].apply(partialParams)
        );
    }
}