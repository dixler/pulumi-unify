
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
const schema = require("../apis/waf-2015-08-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.waf.SqlInjectionMatchSet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.waf.SqlInjectionMatchSet>) {
        super(...args)
        this.client = new awssdk.WAF()
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

    invokeCreateByteMatchSet(partialParams: ToOptional<{
      [K in keyof CreateByteMatchSetRequest]: (CreateByteMatchSetRequest)[K]
    }>): Request<CreateByteMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createByteMatchSet(
          this.ops["CreateByteMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof CreateGeoMatchSetRequest]: (CreateGeoMatchSetRequest)[K]
    }>): Request<CreateGeoMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGeoMatchSet(
          this.ops["CreateGeoMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest]: (CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateRateBasedRule(partialParams: ToOptional<{
      [K in keyof CreateRateBasedRuleRequest]: (CreateRateBasedRuleRequest)[K]
    }>): Request<CreateRateBasedRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRateBasedRule(
          this.ops["CreateRateBasedRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof CreateRegexMatchSetRequest]: (CreateRegexMatchSetRequest)[K]
    }>): Request<CreateRegexMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegexMatchSet(
          this.ops["CreateRegexMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest]: (CreateRegexPatternSetRequest)[K]
    }>): Request<CreateRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegexPatternSet(
          this.ops["CreateRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateRule(partialParams: ToOptional<{
      [K in keyof CreateRuleRequest]: (CreateRuleRequest)[K]
    }>): Request<CreateRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRule(
          this.ops["CreateRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest]: (CreateRuleGroupRequest)[K]
    }>): Request<CreateRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRuleGroup(
          this.ops["CreateRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof CreateSizeConstraintSetRequest]: (CreateSizeConstraintSetRequest)[K]
    }>): Request<CreateSizeConstraintSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSizeConstraintSet(
          this.ops["CreateSizeConstraintSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof CreateSqlInjectionMatchSetRequest]: (CreateSqlInjectionMatchSetRequest)[K]
    }>): Request<CreateSqlInjectionMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSqlInjectionMatchSet(
          this.ops["CreateSqlInjectionMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest]: (CreateWebACLRequest)[K]
    }>): Request<CreateWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebACL(
          this.ops["CreateWebACL"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebACLMigrationStack(partialParams: ToOptional<{
      [K in keyof CreateWebACLMigrationStackRequest]: (CreateWebACLMigrationStackRequest)[K]
    }>): Request<CreateWebACLMigrationStackResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebACLMigrationStack(
          this.ops["CreateWebACLMigrationStack"].applicator.apply(partialParams)
        );
    }

    invokeCreateXssMatchSet(partialParams: ToOptional<{
      [K in keyof CreateXssMatchSetRequest]: (CreateXssMatchSetRequest)[K]
    }>): Request<CreateXssMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createXssMatchSet(
          this.ops["CreateXssMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteByteMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteByteMatchSetRequest]: (DeleteByteMatchSetRequest)[K]
    }>): Request<DeleteByteMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteByteMatchSet(
          this.ops["DeleteByteMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGeoMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteGeoMatchSetRequest]: (DeleteGeoMatchSetRequest)[K]
    }>): Request<DeleteGeoMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGeoMatchSet(
          this.ops["DeleteGeoMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest]: (DeleteIPSetRequest)[K]
    }>): Request<DeleteIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIPSet(
          this.ops["DeleteIPSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteLoggingConfigurationRequest]: (DeleteLoggingConfigurationRequest)[K]
    }>): Request<DeleteLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoggingConfiguration(
          this.ops["DeleteLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeletePermissionPolicy(partialParams: ToOptional<{
      [K in keyof DeletePermissionPolicyRequest]: (DeletePermissionPolicyRequest)[K]
    }>): Request<DeletePermissionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePermissionPolicy(
          this.ops["DeletePermissionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRateBasedRule(partialParams: ToOptional<{
      [K in keyof DeleteRateBasedRuleRequest]: (DeleteRateBasedRuleRequest)[K]
    }>): Request<DeleteRateBasedRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRateBasedRule(
          this.ops["DeleteRateBasedRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRegexMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexMatchSetRequest]: (DeleteRegexMatchSetRequest)[K]
    }>): Request<DeleteRegexMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegexMatchSet(
          this.ops["DeleteRegexMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRegexPatternSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexPatternSetRequest]: (DeleteRegexPatternSetRequest)[K]
    }>): Request<DeleteRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegexPatternSet(
          this.ops["DeleteRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRule(partialParams: ToOptional<{
      [K in keyof DeleteRuleRequest]: (DeleteRuleRequest)[K]
    }>): Request<DeleteRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRule(
          this.ops["DeleteRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRuleGroup(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupRequest]: (DeleteRuleGroupRequest)[K]
    }>): Request<DeleteRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRuleGroup(
          this.ops["DeleteRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof DeleteSizeConstraintSetRequest]: (DeleteSizeConstraintSetRequest)[K]
    }>): Request<DeleteSizeConstraintSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSizeConstraintSet(
          this.ops["DeleteSizeConstraintSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteSqlInjectionMatchSetRequest]: (DeleteSqlInjectionMatchSetRequest)[K]
    }>): Request<DeleteSqlInjectionMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSqlInjectionMatchSet(
          this.ops["DeleteSqlInjectionMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWebACL(partialParams: ToOptional<{
      [K in keyof DeleteWebACLRequest]: (DeleteWebACLRequest)[K]
    }>): Request<DeleteWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebACL(
          this.ops["DeleteWebACL"].applicator.apply(partialParams)
        );
    }

    invokeDeleteXssMatchSet(partialParams: ToOptional<{
      [K in keyof DeleteXssMatchSetRequest]: (DeleteXssMatchSetRequest)[K]
    }>): Request<DeleteXssMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteXssMatchSet(
          this.ops["DeleteXssMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeGetByteMatchSet(partialParams: ToOptional<{
      [K in keyof GetByteMatchSetRequest]: (GetByteMatchSetRequest)[K]
    }>): Request<GetByteMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getByteMatchSet(
          this.ops["GetByteMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeGetChangeTokenStatus(partialParams: ToOptional<{
      [K in keyof GetChangeTokenStatusRequest]: (GetChangeTokenStatusRequest)[K]
    }>): Request<GetChangeTokenStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChangeTokenStatus(
          this.ops["GetChangeTokenStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetGeoMatchSet(partialParams: ToOptional<{
      [K in keyof GetGeoMatchSetRequest]: (GetGeoMatchSetRequest)[K]
    }>): Request<GetGeoMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGeoMatchSet(
          this.ops["GetGeoMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest]: (GetIPSetRequest)[K]
    }>): Request<GetIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIPSet(
          this.ops["GetIPSet"].applicator.apply(partialParams)
        );
    }

    invokeGetLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetLoggingConfigurationRequest]: (GetLoggingConfigurationRequest)[K]
    }>): Request<GetLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoggingConfiguration(
          this.ops["GetLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetPermissionPolicy(partialParams: ToOptional<{
      [K in keyof GetPermissionPolicyRequest]: (GetPermissionPolicyRequest)[K]
    }>): Request<GetPermissionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPermissionPolicy(
          this.ops["GetPermissionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetRateBasedRule(partialParams: ToOptional<{
      [K in keyof GetRateBasedRuleRequest]: (GetRateBasedRuleRequest)[K]
    }>): Request<GetRateBasedRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRateBasedRule(
          this.ops["GetRateBasedRule"].applicator.apply(partialParams)
        );
    }

    invokeGetRateBasedRuleManagedKeys(partialParams: ToOptional<{
      [K in keyof GetRateBasedRuleManagedKeysRequest]: (GetRateBasedRuleManagedKeysRequest)[K]
    }>): Request<GetRateBasedRuleManagedKeysResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRateBasedRuleManagedKeys(
          this.ops["GetRateBasedRuleManagedKeys"].applicator.apply(partialParams)
        );
    }

    invokeGetRegexMatchSet(partialParams: ToOptional<{
      [K in keyof GetRegexMatchSetRequest]: (GetRegexMatchSetRequest)[K]
    }>): Request<GetRegexMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegexMatchSet(
          this.ops["GetRegexMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeGetRegexPatternSet(partialParams: ToOptional<{
      [K in keyof GetRegexPatternSetRequest]: (GetRegexPatternSetRequest)[K]
    }>): Request<GetRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegexPatternSet(
          this.ops["GetRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeGetRule(partialParams: ToOptional<{
      [K in keyof GetRuleRequest]: (GetRuleRequest)[K]
    }>): Request<GetRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRule(
          this.ops["GetRule"].applicator.apply(partialParams)
        );
    }

    invokeGetRuleGroup(partialParams: ToOptional<{
      [K in keyof GetRuleGroupRequest]: (GetRuleGroupRequest)[K]
    }>): Request<GetRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRuleGroup(
          this.ops["GetRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetSampledRequests(partialParams: ToOptional<{
      [K in keyof GetSampledRequestsRequest]: (GetSampledRequestsRequest)[K]
    }>): Request<GetSampledRequestsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSampledRequests(
          this.ops["GetSampledRequests"].applicator.apply(partialParams)
        );
    }

    invokeGetSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof GetSizeConstraintSetRequest]: (GetSizeConstraintSetRequest)[K]
    }>): Request<GetSizeConstraintSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSizeConstraintSet(
          this.ops["GetSizeConstraintSet"].applicator.apply(partialParams)
        );
    }

    invokeGetSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof GetSqlInjectionMatchSetRequest]: (GetSqlInjectionMatchSetRequest)[K]
    }>): Request<GetSqlInjectionMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSqlInjectionMatchSet(
          this.ops["GetSqlInjectionMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeGetWebACL(partialParams: ToOptional<{
      [K in keyof GetWebACLRequest]: (GetWebACLRequest)[K]
    }>): Request<GetWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebACL(
          this.ops["GetWebACL"].applicator.apply(partialParams)
        );
    }

    invokeGetXssMatchSet(partialParams: ToOptional<{
      [K in keyof GetXssMatchSetRequest]: (GetXssMatchSetRequest)[K]
    }>): Request<GetXssMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getXssMatchSet(
          this.ops["GetXssMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutLoggingConfigurationRequest]: (PutLoggingConfigurationRequest)[K]
    }>): Request<PutLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLoggingConfiguration(
          this.ops["PutLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutPermissionPolicy(partialParams: ToOptional<{
      [K in keyof PutPermissionPolicyRequest]: (PutPermissionPolicyRequest)[K]
    }>): Request<PutPermissionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPermissionPolicy(
          this.ops["PutPermissionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateByteMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateByteMatchSetRequest]: (UpdateByteMatchSetRequest)[K]
    }>): Request<UpdateByteMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateByteMatchSet(
          this.ops["UpdateByteMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateGeoMatchSetRequest]: (UpdateGeoMatchSetRequest)[K]
    }>): Request<UpdateGeoMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGeoMatchSet(
          this.ops["UpdateGeoMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest]: (UpdateIPSetRequest)[K]
    }>): Request<UpdateIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIPSet(
          this.ops["UpdateIPSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRateBasedRule(partialParams: ToOptional<{
      [K in keyof UpdateRateBasedRuleRequest]: (UpdateRateBasedRuleRequest)[K]
    }>): Request<UpdateRateBasedRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRateBasedRule(
          this.ops["UpdateRateBasedRule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexMatchSetRequest]: (UpdateRegexMatchSetRequest)[K]
    }>): Request<UpdateRegexMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegexMatchSet(
          this.ops["UpdateRegexMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexPatternSetRequest]: (UpdateRegexPatternSetRequest)[K]
    }>): Request<UpdateRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegexPatternSet(
          this.ops["UpdateRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRule(partialParams: ToOptional<{
      [K in keyof UpdateRuleRequest]: (UpdateRuleRequest)[K]
    }>): Request<UpdateRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRule(
          this.ops["UpdateRule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRuleGroup(partialParams: ToOptional<{
      [K in keyof UpdateRuleGroupRequest]: (UpdateRuleGroupRequest)[K]
    }>): Request<UpdateRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRuleGroup(
          this.ops["UpdateRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof UpdateSizeConstraintSetRequest]: (UpdateSizeConstraintSetRequest)[K]
    }>): Request<UpdateSizeConstraintSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSizeConstraintSet(
          this.ops["UpdateSizeConstraintSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateSqlInjectionMatchSetRequest]: (UpdateSqlInjectionMatchSetRequest)[K]
    }>): Request<UpdateSqlInjectionMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSqlInjectionMatchSet(
          this.ops["UpdateSqlInjectionMatchSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWebACL(partialParams: ToOptional<{
      [K in keyof UpdateWebACLRequest]: (UpdateWebACLRequest)[K]
    }>): Request<UpdateWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebACL(
          this.ops["UpdateWebACL"].applicator.apply(partialParams)
        );
    }

    invokeUpdateXssMatchSet(partialParams: ToOptional<{
      [K in keyof UpdateXssMatchSetRequest]: (UpdateXssMatchSetRequest)[K]
    }>): Request<UpdateXssMatchSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateXssMatchSet(
          this.ops["UpdateXssMatchSet"].applicator.apply(partialParams)
        );
    }
}