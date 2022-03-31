
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateWebACLRequest,
    CheckCapacityRequest,
    CreateIPSetRequest,
    CreateRegexPatternSetRequest,
    CreateRuleGroupRequest,
    CreateWebACLRequest,
    DeleteFirewallManagerRuleGroupsRequest,
    DeleteIPSetRequest,
    DeleteLoggingConfigurationRequest,
    DeletePermissionPolicyRequest,
    DeleteRegexPatternSetRequest,
    DeleteRuleGroupRequest,
    DeleteWebACLRequest,
    DescribeManagedRuleGroupRequest,
    DisassociateWebACLRequest,
    GenerateMobileSdkReleaseUrlRequest,
    GetIPSetRequest,
    GetLoggingConfigurationRequest,
    GetManagedRuleSetRequest,
    GetMobileSdkReleaseRequest,
    GetPermissionPolicyRequest,
    GetRateBasedStatementManagedKeysRequest,
    GetRegexPatternSetRequest,
    GetSampledRequestsRequest,
    GetWebACLRequest,
    GetWebACLForResourceRequest,
    ListAvailableManagedRuleGroupVersionsRequest,
    ListAvailableManagedRuleGroupsRequest,
    ListIPSetsRequest,
    ListLoggingConfigurationsRequest,
    ListManagedRuleSetsRequest,
    ListMobileSdkReleasesRequest,
    ListRegexPatternSetsRequest,
    ListResourcesForWebACLRequest,
    ListRuleGroupsRequest,
    ListTagsForResourceRequest,
    ListWebACLsRequest,
    PutLoggingConfigurationRequest,
    PutManagedRuleSetVersionsRequest,
    PutPermissionPolicyRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateIPSetRequest,
    UpdateManagedRuleSetVersionExpiryDateRequest,
    UpdateRegexPatternSetRequest,
    UpdateRuleGroupRequest,
    UpdateWebACLRequest,
    AssociateWebACLResponse,
    CheckCapacityResponse,
    CreateIPSetResponse,
    CreateRegexPatternSetResponse,
    CreateRuleGroupResponse,
    CreateWebACLResponse,
    DeleteFirewallManagerRuleGroupsResponse,
    DeleteIPSetResponse,
    DeleteLoggingConfigurationResponse,
    DeletePermissionPolicyResponse,
    DeleteRegexPatternSetResponse,
    DeleteRuleGroupResponse,
    DeleteWebACLResponse,
    DescribeManagedRuleGroupResponse,
    DisassociateWebACLResponse,
    GenerateMobileSdkReleaseUrlResponse,
    GetIPSetResponse,
    GetLoggingConfigurationResponse,
    GetManagedRuleSetResponse,
    GetMobileSdkReleaseResponse,
    GetPermissionPolicyResponse,
    GetRateBasedStatementManagedKeysResponse,
    GetRegexPatternSetResponse,
    GetSampledRequestsResponse,
    GetWebACLResponse,
    GetWebACLForResourceResponse,
    ListAvailableManagedRuleGroupVersionsResponse,
    ListAvailableManagedRuleGroupsResponse,
    ListIPSetsResponse,
    ListLoggingConfigurationsResponse,
    ListManagedRuleSetsResponse,
    ListMobileSdkReleasesResponse,
    ListRegexPatternSetsResponse,
    ListResourcesForWebACLResponse,
    ListRuleGroupsResponse,
    ListTagsForResourceResponse,
    ListWebACLsResponse,
    PutLoggingConfigurationResponse,
    PutManagedRuleSetVersionsResponse,
    PutPermissionPolicyResponse,
    TagResourceResponse,
    UntagResourceResponse,
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

export default class extends aws.wafv2.WebAclAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.wafv2.WebAclAssociation>) {
        super(...args)
        this.client = new awssdk.WAFV2()
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

    invokeAssociateWebACL(partialParams: ToOptional<{
      [K in keyof AssociateWebACLRequest & keyof AssociateWebACLRequest]: (AssociateWebACLRequest & AssociateWebACLRequest)[K]
    }>): Request<AssociateWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateWebACL(
          this.ops["AssociateWebACL"].applicator.apply(partialParams)
        );
    }

    invokeCheckCapacity(partialParams: ToOptional<{
      [K in keyof CheckCapacityRequest & keyof CheckCapacityRequest]: (CheckCapacityRequest & CheckCapacityRequest)[K]
    }>): Request<CheckCapacityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkCapacity(
          this.ops["CheckCapacity"].applicator.apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof CreateIPSetRequest]: (CreateIPSetRequest & CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest & keyof CreateRegexPatternSetRequest]: (CreateRegexPatternSetRequest & CreateRegexPatternSetRequest)[K]
    }>): Request<CreateRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegexPatternSet(
          this.ops["CreateRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest & keyof CreateRuleGroupRequest]: (CreateRuleGroupRequest & CreateRuleGroupRequest)[K]
    }>): Request<CreateRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRuleGroup(
          this.ops["CreateRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest & keyof CreateWebACLRequest]: (CreateWebACLRequest & CreateWebACLRequest)[K]
    }>): Request<CreateWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebACL(
          this.ops["CreateWebACL"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFirewallManagerRuleGroups(partialParams: ToOptional<{
      [K in keyof DeleteFirewallManagerRuleGroupsRequest & keyof DeleteFirewallManagerRuleGroupsRequest]: (DeleteFirewallManagerRuleGroupsRequest & DeleteFirewallManagerRuleGroupsRequest)[K]
    }>): Request<DeleteFirewallManagerRuleGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFirewallManagerRuleGroups(
          this.ops["DeleteFirewallManagerRuleGroups"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof DeleteIPSetRequest]: (DeleteIPSetRequest & DeleteIPSetRequest)[K]
    }>): Request<DeleteIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIPSet(
          this.ops["DeleteIPSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteLoggingConfigurationRequest & keyof DeleteLoggingConfigurationRequest]: (DeleteLoggingConfigurationRequest & DeleteLoggingConfigurationRequest)[K]
    }>): Request<DeleteLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoggingConfiguration(
          this.ops["DeleteLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeletePermissionPolicy(partialParams: ToOptional<{
      [K in keyof DeletePermissionPolicyRequest & keyof DeletePermissionPolicyRequest]: (DeletePermissionPolicyRequest & DeletePermissionPolicyRequest)[K]
    }>): Request<DeletePermissionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePermissionPolicy(
          this.ops["DeletePermissionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRegexPatternSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexPatternSetRequest & keyof DeleteRegexPatternSetRequest]: (DeleteRegexPatternSetRequest & DeleteRegexPatternSetRequest)[K]
    }>): Request<DeleteRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegexPatternSet(
          this.ops["DeleteRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRuleGroup(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupRequest & keyof DeleteRuleGroupRequest]: (DeleteRuleGroupRequest & DeleteRuleGroupRequest)[K]
    }>): Request<DeleteRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRuleGroup(
          this.ops["DeleteRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWebACL(partialParams: ToOptional<{
      [K in keyof DeleteWebACLRequest & keyof DeleteWebACLRequest]: (DeleteWebACLRequest & DeleteWebACLRequest)[K]
    }>): Request<DeleteWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebACL(
          this.ops["DeleteWebACL"].applicator.apply(partialParams)
        );
    }

    invokeDescribeManagedRuleGroup(partialParams: ToOptional<{
      [K in keyof DescribeManagedRuleGroupRequest & keyof DescribeManagedRuleGroupRequest]: (DescribeManagedRuleGroupRequest & DescribeManagedRuleGroupRequest)[K]
    }>): Request<DescribeManagedRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeManagedRuleGroup(
          this.ops["DescribeManagedRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateWebACL(partialParams: ToOptional<{
      [K in keyof DisassociateWebACLRequest & keyof DisassociateWebACLRequest]: (DisassociateWebACLRequest & DisassociateWebACLRequest)[K]
    }>): Request<DisassociateWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateWebACL(
          this.ops["DisassociateWebACL"].applicator.apply(partialParams)
        );
    }

    invokeGenerateMobileSdkReleaseUrl(partialParams: ToOptional<{
      [K in keyof GenerateMobileSdkReleaseUrlRequest & keyof GenerateMobileSdkReleaseUrlRequest]: (GenerateMobileSdkReleaseUrlRequest & GenerateMobileSdkReleaseUrlRequest)[K]
    }>): Request<GenerateMobileSdkReleaseUrlResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateMobileSdkReleaseUrl(
          this.ops["GenerateMobileSdkReleaseUrl"].applicator.apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof GetIPSetRequest]: (GetIPSetRequest & GetIPSetRequest)[K]
    }>): Request<GetIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIPSet(
          this.ops["GetIPSet"].applicator.apply(partialParams)
        );
    }

    invokeGetLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetLoggingConfigurationRequest & keyof GetLoggingConfigurationRequest]: (GetLoggingConfigurationRequest & GetLoggingConfigurationRequest)[K]
    }>): Request<GetLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoggingConfiguration(
          this.ops["GetLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetManagedRuleSet(partialParams: ToOptional<{
      [K in keyof GetManagedRuleSetRequest & keyof GetManagedRuleSetRequest]: (GetManagedRuleSetRequest & GetManagedRuleSetRequest)[K]
    }>): Request<GetManagedRuleSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getManagedRuleSet(
          this.ops["GetManagedRuleSet"].applicator.apply(partialParams)
        );
    }

    invokeGetMobileSdkRelease(partialParams: ToOptional<{
      [K in keyof GetMobileSdkReleaseRequest & keyof GetMobileSdkReleaseRequest]: (GetMobileSdkReleaseRequest & GetMobileSdkReleaseRequest)[K]
    }>): Request<GetMobileSdkReleaseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMobileSdkRelease(
          this.ops["GetMobileSdkRelease"].applicator.apply(partialParams)
        );
    }

    invokeGetPermissionPolicy(partialParams: ToOptional<{
      [K in keyof GetPermissionPolicyRequest & keyof GetPermissionPolicyRequest]: (GetPermissionPolicyRequest & GetPermissionPolicyRequest)[K]
    }>): Request<GetPermissionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPermissionPolicy(
          this.ops["GetPermissionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetRateBasedStatementManagedKeys(partialParams: ToOptional<{
      [K in keyof GetRateBasedStatementManagedKeysRequest & keyof GetRateBasedStatementManagedKeysRequest]: (GetRateBasedStatementManagedKeysRequest & GetRateBasedStatementManagedKeysRequest)[K]
    }>): Request<GetRateBasedStatementManagedKeysResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRateBasedStatementManagedKeys(
          this.ops["GetRateBasedStatementManagedKeys"].applicator.apply(partialParams)
        );
    }

    invokeGetRegexPatternSet(partialParams: ToOptional<{
      [K in keyof GetRegexPatternSetRequest & keyof GetRegexPatternSetRequest]: (GetRegexPatternSetRequest & GetRegexPatternSetRequest)[K]
    }>): Request<GetRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegexPatternSet(
          this.ops["GetRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeGetSampledRequests(partialParams: ToOptional<{
      [K in keyof GetSampledRequestsRequest & keyof GetSampledRequestsRequest]: (GetSampledRequestsRequest & GetSampledRequestsRequest)[K]
    }>): Request<GetSampledRequestsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSampledRequests(
          this.ops["GetSampledRequests"].applicator.apply(partialParams)
        );
    }

    invokeGetWebACL(partialParams: ToOptional<{
      [K in keyof GetWebACLRequest & keyof GetWebACLRequest]: (GetWebACLRequest & GetWebACLRequest)[K]
    }>): Request<GetWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebACL(
          this.ops["GetWebACL"].applicator.apply(partialParams)
        );
    }

    invokeGetWebACLForResource(partialParams: ToOptional<{
      [K in keyof GetWebACLForResourceRequest & keyof GetWebACLForResourceRequest]: (GetWebACLForResourceRequest & GetWebACLForResourceRequest)[K]
    }>): Request<GetWebACLForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebACLForResource(
          this.ops["GetWebACLForResource"].applicator.apply(partialParams)
        );
    }

    invokeListAvailableManagedRuleGroupVersions(partialParams: ToOptional<{
      [K in keyof ListAvailableManagedRuleGroupVersionsRequest & keyof ListAvailableManagedRuleGroupVersionsRequest]: (ListAvailableManagedRuleGroupVersionsRequest & ListAvailableManagedRuleGroupVersionsRequest)[K]
    }>): Request<ListAvailableManagedRuleGroupVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAvailableManagedRuleGroupVersions(
          this.ops["ListAvailableManagedRuleGroupVersions"].applicator.apply(partialParams)
        );
    }

    invokeListAvailableManagedRuleGroups(partialParams: ToOptional<{
      [K in keyof ListAvailableManagedRuleGroupsRequest & keyof ListAvailableManagedRuleGroupsRequest]: (ListAvailableManagedRuleGroupsRequest & ListAvailableManagedRuleGroupsRequest)[K]
    }>): Request<ListAvailableManagedRuleGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAvailableManagedRuleGroups(
          this.ops["ListAvailableManagedRuleGroups"].applicator.apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest & keyof ListIPSetsRequest]: (ListIPSetsRequest & ListIPSetsRequest)[K]
    }>): Request<ListIPSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIPSets(
          this.ops["ListIPSets"].applicator.apply(partialParams)
        );
    }

    invokeListLoggingConfigurations(partialParams: ToOptional<{
      [K in keyof ListLoggingConfigurationsRequest & keyof ListLoggingConfigurationsRequest]: (ListLoggingConfigurationsRequest & ListLoggingConfigurationsRequest)[K]
    }>): Request<ListLoggingConfigurationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLoggingConfigurations(
          this.ops["ListLoggingConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeListManagedRuleSets(partialParams: ToOptional<{
      [K in keyof ListManagedRuleSetsRequest & keyof ListManagedRuleSetsRequest]: (ListManagedRuleSetsRequest & ListManagedRuleSetsRequest)[K]
    }>): Request<ListManagedRuleSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listManagedRuleSets(
          this.ops["ListManagedRuleSets"].applicator.apply(partialParams)
        );
    }

    invokeListMobileSdkReleases(partialParams: ToOptional<{
      [K in keyof ListMobileSdkReleasesRequest & keyof ListMobileSdkReleasesRequest]: (ListMobileSdkReleasesRequest & ListMobileSdkReleasesRequest)[K]
    }>): Request<ListMobileSdkReleasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMobileSdkReleases(
          this.ops["ListMobileSdkReleases"].applicator.apply(partialParams)
        );
    }

    invokeListRegexPatternSets(partialParams: ToOptional<{
      [K in keyof ListRegexPatternSetsRequest & keyof ListRegexPatternSetsRequest]: (ListRegexPatternSetsRequest & ListRegexPatternSetsRequest)[K]
    }>): Request<ListRegexPatternSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRegexPatternSets(
          this.ops["ListRegexPatternSets"].applicator.apply(partialParams)
        );
    }

    invokeListResourcesForWebACL(partialParams: ToOptional<{
      [K in keyof ListResourcesForWebACLRequest & keyof ListResourcesForWebACLRequest]: (ListResourcesForWebACLRequest & ListResourcesForWebACLRequest)[K]
    }>): Request<ListResourcesForWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourcesForWebACL(
          this.ops["ListResourcesForWebACL"].applicator.apply(partialParams)
        );
    }

    invokeListRuleGroups(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsRequest & keyof ListRuleGroupsRequest]: (ListRuleGroupsRequest & ListRuleGroupsRequest)[K]
    }>): Request<ListRuleGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRuleGroups(
          this.ops["ListRuleGroups"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListWebACLs(partialParams: ToOptional<{
      [K in keyof ListWebACLsRequest & keyof ListWebACLsRequest]: (ListWebACLsRequest & ListWebACLsRequest)[K]
    }>): Request<ListWebACLsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebACLs(
          this.ops["ListWebACLs"].applicator.apply(partialParams)
        );
    }

    invokePutLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutLoggingConfigurationRequest & keyof PutLoggingConfigurationRequest]: (PutLoggingConfigurationRequest & PutLoggingConfigurationRequest)[K]
    }>): Request<PutLoggingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLoggingConfiguration(
          this.ops["PutLoggingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutManagedRuleSetVersions(partialParams: ToOptional<{
      [K in keyof PutManagedRuleSetVersionsRequest & keyof PutManagedRuleSetVersionsRequest]: (PutManagedRuleSetVersionsRequest & PutManagedRuleSetVersionsRequest)[K]
    }>): Request<PutManagedRuleSetVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putManagedRuleSetVersions(
          this.ops["PutManagedRuleSetVersions"].applicator.apply(partialParams)
        );
    }

    invokePutPermissionPolicy(partialParams: ToOptional<{
      [K in keyof PutPermissionPolicyRequest & keyof PutPermissionPolicyRequest]: (PutPermissionPolicyRequest & PutPermissionPolicyRequest)[K]
    }>): Request<PutPermissionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPermissionPolicy(
          this.ops["PutPermissionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceARN"> & keyof TagResourceRequest]: (Omit<TagResourceRequest, "ResourceARN"> & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceARN"> & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "ResourceARN"> & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof UpdateIPSetRequest]: (UpdateIPSetRequest & UpdateIPSetRequest)[K]
    }>): Request<UpdateIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIPSet(
          this.ops["UpdateIPSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateManagedRuleSetVersionExpiryDate(partialParams: ToOptional<{
      [K in keyof UpdateManagedRuleSetVersionExpiryDateRequest & keyof UpdateManagedRuleSetVersionExpiryDateRequest]: (UpdateManagedRuleSetVersionExpiryDateRequest & UpdateManagedRuleSetVersionExpiryDateRequest)[K]
    }>): Request<UpdateManagedRuleSetVersionExpiryDateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateManagedRuleSetVersionExpiryDate(
          this.ops["UpdateManagedRuleSetVersionExpiryDate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexPatternSetRequest & keyof UpdateRegexPatternSetRequest]: (UpdateRegexPatternSetRequest & UpdateRegexPatternSetRequest)[K]
    }>): Request<UpdateRegexPatternSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegexPatternSet(
          this.ops["UpdateRegexPatternSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRuleGroup(partialParams: ToOptional<{
      [K in keyof UpdateRuleGroupRequest & keyof UpdateRuleGroupRequest]: (UpdateRuleGroupRequest & UpdateRuleGroupRequest)[K]
    }>): Request<UpdateRuleGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRuleGroup(
          this.ops["UpdateRuleGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWebACL(partialParams: ToOptional<{
      [K in keyof UpdateWebACLRequest & keyof UpdateWebACLRequest]: (UpdateWebACLRequest & UpdateWebACLRequest)[K]
    }>): Request<UpdateWebACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebACL(
          this.ops["UpdateWebACL"].applicator.apply(partialParams)
        );
    }
}