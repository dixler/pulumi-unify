
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    ListTagsForResourceRequest,
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
    ListTagsForResourceResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.waf.GeoMatchSet {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.waf.GeoMatchSet>) {
        super(...args)
        this.client = new awssdk.WAF()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/waf-2015-08-24.normal.json"), this.client)
    }

    invokeCreateByteMatchSet(partialParams: ToOptional<{
      [K in keyof CreateByteMatchSetRequest & keyof CreateByteMatchSetRequest]: (CreateByteMatchSetRequest & CreateByteMatchSetRequest)[K]
    }>): CreateByteMatchSetResponse {
        return this.client.createByteMatchSet(
            this.ops["CreateByteMatchSet"].apply(partialParams)
        );
    }

    invokeCreateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof CreateGeoMatchSetRequest & keyof CreateGeoMatchSetRequest]: (CreateGeoMatchSetRequest & CreateGeoMatchSetRequest)[K]
    }>): CreateGeoMatchSetResponse {
        return this.client.createGeoMatchSet(
            this.ops["CreateGeoMatchSet"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof CreateIPSetRequest]: (CreateIPSetRequest & CreateIPSetRequest)[K]
    }>): CreateIPSetResponse {
        return this.client.createIPSet(
            this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateRateBasedRule(partialParams: ToOptional<{
      [K in keyof CreateRateBasedRuleRequest & keyof CreateRateBasedRuleRequest]: (CreateRateBasedRuleRequest & CreateRateBasedRuleRequest)[K]
    }>): CreateRateBasedRuleResponse {
        return this.client.createRateBasedRule(
            this.ops["CreateRateBasedRule"].apply(partialParams)
        );
    }

    invokeCreateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof CreateRegexMatchSetRequest & keyof CreateRegexMatchSetRequest]: (CreateRegexMatchSetRequest & CreateRegexMatchSetRequest)[K]
    }>): CreateRegexMatchSetResponse {
        return this.client.createRegexMatchSet(
            this.ops["CreateRegexMatchSet"].apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest & keyof CreateRegexPatternSetRequest]: (CreateRegexPatternSetRequest & CreateRegexPatternSetRequest)[K]
    }>): CreateRegexPatternSetResponse {
        return this.client.createRegexPatternSet(
            this.ops["CreateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeCreateRule(partialParams: ToOptional<{
      [K in keyof CreateRuleRequest & keyof CreateRuleRequest]: (CreateRuleRequest & CreateRuleRequest)[K]
    }>): CreateRuleResponse {
        return this.client.createRule(
            this.ops["CreateRule"].apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest & keyof CreateRuleGroupRequest]: (CreateRuleGroupRequest & CreateRuleGroupRequest)[K]
    }>): CreateRuleGroupResponse {
        return this.client.createRuleGroup(
            this.ops["CreateRuleGroup"].apply(partialParams)
        );
    }

    invokeCreateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof CreateSizeConstraintSetRequest & keyof CreateSizeConstraintSetRequest]: (CreateSizeConstraintSetRequest & CreateSizeConstraintSetRequest)[K]
    }>): CreateSizeConstraintSetResponse {
        return this.client.createSizeConstraintSet(
            this.ops["CreateSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeCreateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof CreateSqlInjectionMatchSetRequest & keyof CreateSqlInjectionMatchSetRequest]: (CreateSqlInjectionMatchSetRequest & CreateSqlInjectionMatchSetRequest)[K]
    }>): CreateSqlInjectionMatchSetResponse {
        return this.client.createSqlInjectionMatchSet(
            this.ops["CreateSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest & keyof CreateWebACLRequest]: (CreateWebACLRequest & CreateWebACLRequest)[K]
    }>): CreateWebACLResponse {
        return this.client.createWebACL(
            this.ops["CreateWebACL"].apply(partialParams)
        );
    }

    invokeCreateWebACLMigrationStack(partialParams: ToOptional<{
      [K in keyof CreateWebACLMigrationStackRequest & keyof CreateWebACLMigrationStackRequest]: (CreateWebACLMigrationStackRequest & CreateWebACLMigrationStackRequest)[K]
    }>): CreateWebACLMigrationStackResponse {
        return this.client.createWebACLMigrationStack(
            this.ops["CreateWebACLMigrationStack"].apply(partialParams)
        );
    }

    invokeCreateXssMatchSet(partialParams: ToOptional<{
      [K in keyof CreateXssMatchSetRequest & keyof CreateXssMatchSetRequest]: (CreateXssMatchSetRequest & CreateXssMatchSetRequest)[K]
    }>): CreateXssMatchSetResponse {
        return this.client.createXssMatchSet(
            this.ops["CreateXssMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteByteMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteByteMatchSetRequest & keyof DeleteByteMatchSetRequest]: (DeleteByteMatchSetRequest & DeleteByteMatchSetRequest)[K]
    }>): DeleteByteMatchSetResponse {
        return this.client.deleteByteMatchSet(
            this.ops["DeleteByteMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteGeoMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteGeoMatchSetRequest & keyof DeleteGeoMatchSetRequest]: (DeleteGeoMatchSetRequest & DeleteGeoMatchSetRequest)[K]
    }>): DeleteGeoMatchSetResponse {
        return this.client.deleteGeoMatchSet(
            this.ops["DeleteGeoMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof DeleteIPSetRequest]: (DeleteIPSetRequest & DeleteIPSetRequest)[K]
    }>): DeleteIPSetResponse {
        return this.client.deleteIPSet(
            this.ops["DeleteIPSet"].apply(partialParams)
        );
    }

    invokeDeleteLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteLoggingConfigurationRequest & keyof DeleteLoggingConfigurationRequest]: (DeleteLoggingConfigurationRequest & DeleteLoggingConfigurationRequest)[K]
    }>): DeleteLoggingConfigurationResponse {
        return this.client.deleteLoggingConfiguration(
            this.ops["DeleteLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeDeletePermissionPolicy(partialParams: ToOptional<{
      [K in keyof DeletePermissionPolicyRequest & keyof DeletePermissionPolicyRequest]: (DeletePermissionPolicyRequest & DeletePermissionPolicyRequest)[K]
    }>): DeletePermissionPolicyResponse {
        return this.client.deletePermissionPolicy(
            this.ops["DeletePermissionPolicy"].apply(partialParams)
        );
    }

    invokeDeleteRateBasedRule(partialParams: ToOptional<{
      [K in keyof DeleteRateBasedRuleRequest & keyof DeleteRateBasedRuleRequest]: (DeleteRateBasedRuleRequest & DeleteRateBasedRuleRequest)[K]
    }>): DeleteRateBasedRuleResponse {
        return this.client.deleteRateBasedRule(
            this.ops["DeleteRateBasedRule"].apply(partialParams)
        );
    }

    invokeDeleteRegexMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexMatchSetRequest & keyof DeleteRegexMatchSetRequest]: (DeleteRegexMatchSetRequest & DeleteRegexMatchSetRequest)[K]
    }>): DeleteRegexMatchSetResponse {
        return this.client.deleteRegexMatchSet(
            this.ops["DeleteRegexMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteRegexPatternSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexPatternSetRequest & keyof DeleteRegexPatternSetRequest]: (DeleteRegexPatternSetRequest & DeleteRegexPatternSetRequest)[K]
    }>): DeleteRegexPatternSetResponse {
        return this.client.deleteRegexPatternSet(
            this.ops["DeleteRegexPatternSet"].apply(partialParams)
        );
    }

    invokeDeleteRule(partialParams: ToOptional<{
      [K in keyof DeleteRuleRequest & keyof DeleteRuleRequest]: (DeleteRuleRequest & DeleteRuleRequest)[K]
    }>): DeleteRuleResponse {
        return this.client.deleteRule(
            this.ops["DeleteRule"].apply(partialParams)
        );
    }

    invokeDeleteRuleGroup(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupRequest & keyof DeleteRuleGroupRequest]: (DeleteRuleGroupRequest & DeleteRuleGroupRequest)[K]
    }>): DeleteRuleGroupResponse {
        return this.client.deleteRuleGroup(
            this.ops["DeleteRuleGroup"].apply(partialParams)
        );
    }

    invokeDeleteSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof DeleteSizeConstraintSetRequest & keyof DeleteSizeConstraintSetRequest]: (DeleteSizeConstraintSetRequest & DeleteSizeConstraintSetRequest)[K]
    }>): DeleteSizeConstraintSetResponse {
        return this.client.deleteSizeConstraintSet(
            this.ops["DeleteSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeDeleteSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteSqlInjectionMatchSetRequest & keyof DeleteSqlInjectionMatchSetRequest]: (DeleteSqlInjectionMatchSetRequest & DeleteSqlInjectionMatchSetRequest)[K]
    }>): DeleteSqlInjectionMatchSetResponse {
        return this.client.deleteSqlInjectionMatchSet(
            this.ops["DeleteSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeDeleteWebACL(partialParams: ToOptional<{
      [K in keyof DeleteWebACLRequest & keyof DeleteWebACLRequest]: (DeleteWebACLRequest & DeleteWebACLRequest)[K]
    }>): DeleteWebACLResponse {
        return this.client.deleteWebACL(
            this.ops["DeleteWebACL"].apply(partialParams)
        );
    }

    invokeDeleteXssMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteXssMatchSetRequest & keyof DeleteXssMatchSetRequest]: (DeleteXssMatchSetRequest & DeleteXssMatchSetRequest)[K]
    }>): DeleteXssMatchSetResponse {
        return this.client.deleteXssMatchSet(
            this.ops["DeleteXssMatchSet"].apply(partialParams)
        );
    }

    invokeGetByteMatchSet(partialParams: ToOptional<{
      [K in keyof GetByteMatchSetRequest & keyof GetByteMatchSetRequest]: (GetByteMatchSetRequest & GetByteMatchSetRequest)[K]
    }>): GetByteMatchSetResponse {
        return this.client.getByteMatchSet(
            this.ops["GetByteMatchSet"].apply(partialParams)
        );
    }

    invokeGetChangeTokenStatus(partialParams: ToOptional<{
      [K in keyof GetChangeTokenStatusRequest & keyof GetChangeTokenStatusRequest]: (GetChangeTokenStatusRequest & GetChangeTokenStatusRequest)[K]
    }>): GetChangeTokenStatusResponse {
        return this.client.getChangeTokenStatus(
            this.ops["GetChangeTokenStatus"].apply(partialParams)
        );
    }

    invokeGetGeoMatchSet(partialParams: ToOptional<{
      [K in keyof GetGeoMatchSetRequest & keyof GetGeoMatchSetRequest]: (GetGeoMatchSetRequest & GetGeoMatchSetRequest)[K]
    }>): GetGeoMatchSetResponse {
        return this.client.getGeoMatchSet(
            this.ops["GetGeoMatchSet"].apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof GetIPSetRequest]: (GetIPSetRequest & GetIPSetRequest)[K]
    }>): GetIPSetResponse {
        return this.client.getIPSet(
            this.ops["GetIPSet"].apply(partialParams)
        );
    }

    invokeGetLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetLoggingConfigurationRequest & keyof GetLoggingConfigurationRequest]: (GetLoggingConfigurationRequest & GetLoggingConfigurationRequest)[K]
    }>): GetLoggingConfigurationResponse {
        return this.client.getLoggingConfiguration(
            this.ops["GetLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetPermissionPolicy(partialParams: ToOptional<{
      [K in keyof GetPermissionPolicyRequest & keyof GetPermissionPolicyRequest]: (GetPermissionPolicyRequest & GetPermissionPolicyRequest)[K]
    }>): GetPermissionPolicyResponse {
        return this.client.getPermissionPolicy(
            this.ops["GetPermissionPolicy"].apply(partialParams)
        );
    }

    invokeGetRateBasedRule(partialParams: ToOptional<{
      [K in keyof GetRateBasedRuleRequest & keyof GetRateBasedRuleRequest]: (GetRateBasedRuleRequest & GetRateBasedRuleRequest)[K]
    }>): GetRateBasedRuleResponse {
        return this.client.getRateBasedRule(
            this.ops["GetRateBasedRule"].apply(partialParams)
        );
    }

    invokeGetRateBasedRuleManagedKeys(partialParams: ToOptional<{
      [K in keyof GetRateBasedRuleManagedKeysRequest & keyof GetRateBasedRuleManagedKeysRequest]: (GetRateBasedRuleManagedKeysRequest & GetRateBasedRuleManagedKeysRequest)[K]
    }>): GetRateBasedRuleManagedKeysResponse {
        return this.client.getRateBasedRuleManagedKeys(
            this.ops["GetRateBasedRuleManagedKeys"].apply(partialParams)
        );
    }

    invokeGetRegexMatchSet(partialParams: ToOptional<{
      [K in keyof GetRegexMatchSetRequest & keyof GetRegexMatchSetRequest]: (GetRegexMatchSetRequest & GetRegexMatchSetRequest)[K]
    }>): GetRegexMatchSetResponse {
        return this.client.getRegexMatchSet(
            this.ops["GetRegexMatchSet"].apply(partialParams)
        );
    }

    invokeGetRegexPatternSet(partialParams: ToOptional<{
      [K in keyof GetRegexPatternSetRequest & keyof GetRegexPatternSetRequest]: (GetRegexPatternSetRequest & GetRegexPatternSetRequest)[K]
    }>): GetRegexPatternSetResponse {
        return this.client.getRegexPatternSet(
            this.ops["GetRegexPatternSet"].apply(partialParams)
        );
    }

    invokeGetRule(partialParams: ToOptional<{
      [K in keyof GetRuleRequest & keyof GetRuleRequest]: (GetRuleRequest & GetRuleRequest)[K]
    }>): GetRuleResponse {
        return this.client.getRule(
            this.ops["GetRule"].apply(partialParams)
        );
    }

    invokeGetRuleGroup(partialParams: ToOptional<{
      [K in keyof GetRuleGroupRequest & keyof GetRuleGroupRequest]: (GetRuleGroupRequest & GetRuleGroupRequest)[K]
    }>): GetRuleGroupResponse {
        return this.client.getRuleGroup(
            this.ops["GetRuleGroup"].apply(partialParams)
        );
    }

    invokeGetSampledRequests(partialParams: ToOptional<{
      [K in keyof GetSampledRequestsRequest & keyof GetSampledRequestsRequest]: (GetSampledRequestsRequest & GetSampledRequestsRequest)[K]
    }>): GetSampledRequestsResponse {
        return this.client.getSampledRequests(
            this.ops["GetSampledRequests"].apply(partialParams)
        );
    }

    invokeGetSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof GetSizeConstraintSetRequest & keyof GetSizeConstraintSetRequest]: (GetSizeConstraintSetRequest & GetSizeConstraintSetRequest)[K]
    }>): GetSizeConstraintSetResponse {
        return this.client.getSizeConstraintSet(
            this.ops["GetSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeGetSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof GetSqlInjectionMatchSetRequest & keyof GetSqlInjectionMatchSetRequest]: (GetSqlInjectionMatchSetRequest & GetSqlInjectionMatchSetRequest)[K]
    }>): GetSqlInjectionMatchSetResponse {
        return this.client.getSqlInjectionMatchSet(
            this.ops["GetSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeGetWebACL(partialParams: ToOptional<{
      [K in keyof GetWebACLRequest & keyof GetWebACLRequest]: (GetWebACLRequest & GetWebACLRequest)[K]
    }>): GetWebACLResponse {
        return this.client.getWebACL(
            this.ops["GetWebACL"].apply(partialParams)
        );
    }

    invokeGetXssMatchSet(partialParams: ToOptional<{
      [K in keyof GetXssMatchSetRequest & keyof GetXssMatchSetRequest]: (GetXssMatchSetRequest & GetXssMatchSetRequest)[K]
    }>): GetXssMatchSetResponse {
        return this.client.getXssMatchSet(
            this.ops["GetXssMatchSet"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutLoggingConfigurationRequest & keyof PutLoggingConfigurationRequest]: (PutLoggingConfigurationRequest & PutLoggingConfigurationRequest)[K]
    }>): PutLoggingConfigurationResponse {
        return this.client.putLoggingConfiguration(
            this.ops["PutLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutPermissionPolicy(partialParams: ToOptional<{
      [K in keyof PutPermissionPolicyRequest & keyof PutPermissionPolicyRequest]: (PutPermissionPolicyRequest & PutPermissionPolicyRequest)[K]
    }>): PutPermissionPolicyResponse {
        return this.client.putPermissionPolicy(
            this.ops["PutPermissionPolicy"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateByteMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateByteMatchSetRequest & keyof UpdateByteMatchSetRequest]: (UpdateByteMatchSetRequest & UpdateByteMatchSetRequest)[K]
    }>): UpdateByteMatchSetResponse {
        return this.client.updateByteMatchSet(
            this.ops["UpdateByteMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateGeoMatchSetRequest & keyof UpdateGeoMatchSetRequest]: (UpdateGeoMatchSetRequest & UpdateGeoMatchSetRequest)[K]
    }>): UpdateGeoMatchSetResponse {
        return this.client.updateGeoMatchSet(
            this.ops["UpdateGeoMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof UpdateIPSetRequest]: (UpdateIPSetRequest & UpdateIPSetRequest)[K]
    }>): UpdateIPSetResponse {
        return this.client.updateIPSet(
            this.ops["UpdateIPSet"].apply(partialParams)
        );
    }

    invokeUpdateRateBasedRule(partialParams: ToOptional<{
      [K in keyof UpdateRateBasedRuleRequest & keyof UpdateRateBasedRuleRequest]: (UpdateRateBasedRuleRequest & UpdateRateBasedRuleRequest)[K]
    }>): UpdateRateBasedRuleResponse {
        return this.client.updateRateBasedRule(
            this.ops["UpdateRateBasedRule"].apply(partialParams)
        );
    }

    invokeUpdateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexMatchSetRequest & keyof UpdateRegexMatchSetRequest]: (UpdateRegexMatchSetRequest & UpdateRegexMatchSetRequest)[K]
    }>): UpdateRegexMatchSetResponse {
        return this.client.updateRegexMatchSet(
            this.ops["UpdateRegexMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexPatternSetRequest & keyof UpdateRegexPatternSetRequest]: (UpdateRegexPatternSetRequest & UpdateRegexPatternSetRequest)[K]
    }>): UpdateRegexPatternSetResponse {
        return this.client.updateRegexPatternSet(
            this.ops["UpdateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeUpdateRule(partialParams: ToOptional<{
      [K in keyof UpdateRuleRequest & keyof UpdateRuleRequest]: (UpdateRuleRequest & UpdateRuleRequest)[K]
    }>): UpdateRuleResponse {
        return this.client.updateRule(
            this.ops["UpdateRule"].apply(partialParams)
        );
    }

    invokeUpdateRuleGroup(partialParams: ToOptional<{
      [K in keyof UpdateRuleGroupRequest & keyof UpdateRuleGroupRequest]: (UpdateRuleGroupRequest & UpdateRuleGroupRequest)[K]
    }>): UpdateRuleGroupResponse {
        return this.client.updateRuleGroup(
            this.ops["UpdateRuleGroup"].apply(partialParams)
        );
    }

    invokeUpdateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof UpdateSizeConstraintSetRequest & keyof UpdateSizeConstraintSetRequest]: (UpdateSizeConstraintSetRequest & UpdateSizeConstraintSetRequest)[K]
    }>): UpdateSizeConstraintSetResponse {
        return this.client.updateSizeConstraintSet(
            this.ops["UpdateSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeUpdateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateSqlInjectionMatchSetRequest & keyof UpdateSqlInjectionMatchSetRequest]: (UpdateSqlInjectionMatchSetRequest & UpdateSqlInjectionMatchSetRequest)[K]
    }>): UpdateSqlInjectionMatchSetResponse {
        return this.client.updateSqlInjectionMatchSet(
            this.ops["UpdateSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeUpdateWebACL(partialParams: ToOptional<{
      [K in keyof UpdateWebACLRequest & keyof UpdateWebACLRequest]: (UpdateWebACLRequest & UpdateWebACLRequest)[K]
    }>): UpdateWebACLResponse {
        return this.client.updateWebACL(
            this.ops["UpdateWebACL"].apply(partialParams)
        );
    }

    invokeUpdateXssMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateXssMatchSetRequest & keyof UpdateXssMatchSetRequest]: (UpdateXssMatchSetRequest & UpdateXssMatchSetRequest)[K]
    }>): UpdateXssMatchSetResponse {
        return this.client.updateXssMatchSet(
            this.ops["UpdateXssMatchSet"].apply(partialParams)
        );
    }
}