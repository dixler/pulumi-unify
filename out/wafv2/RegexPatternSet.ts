
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.wafv2.RegexPatternSet {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.wafv2.RegexPatternSet>) {
        super(...args)
        this.client = new awssdk.WAFV2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/wafv2-2019-07-29.normal.json"), this.client)
    }

    invokeAssociateWebACL(partialParams: ToOptional<{
      [K in keyof AssociateWebACLRequest & keyof AssociateWebACLRequest & keyof AssociateWebACLRequest & keyof AssociateWebACLRequest & keyof AssociateWebACLRequest]: (AssociateWebACLRequest & AssociateWebACLRequest & AssociateWebACLRequest & AssociateWebACLRequest & AssociateWebACLRequest)[K]
    }>): AssociateWebACLResponse {
        return this.client.associateWebACL(
            this.ops["AssociateWebACL"].apply(partialParams)
        );
    }

    invokeCheckCapacity(partialParams: ToOptional<{
      [K in keyof CheckCapacityRequest & keyof CheckCapacityRequest & keyof CheckCapacityRequest & keyof CheckCapacityRequest & keyof CheckCapacityRequest]: (CheckCapacityRequest & CheckCapacityRequest & CheckCapacityRequest & CheckCapacityRequest & CheckCapacityRequest)[K]
    }>): CheckCapacityResponse {
        return this.client.checkCapacity(
            this.ops["CheckCapacity"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest]: (CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest)[K]
    }>): CreateIPSetResponse {
        return this.client.createIPSet(
            this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest & keyof CreateRegexPatternSetRequest & keyof CreateRegexPatternSetRequest & keyof CreateRegexPatternSetRequest & keyof CreateRegexPatternSetRequest]: (CreateRegexPatternSetRequest & CreateRegexPatternSetRequest & CreateRegexPatternSetRequest & CreateRegexPatternSetRequest & CreateRegexPatternSetRequest)[K]
    }>): CreateRegexPatternSetResponse {
        return this.client.createRegexPatternSet(
            this.ops["CreateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest & keyof CreateRuleGroupRequest & keyof CreateRuleGroupRequest & keyof CreateRuleGroupRequest & keyof CreateRuleGroupRequest]: (CreateRuleGroupRequest & CreateRuleGroupRequest & CreateRuleGroupRequest & CreateRuleGroupRequest & CreateRuleGroupRequest)[K]
    }>): CreateRuleGroupResponse {
        return this.client.createRuleGroup(
            this.ops["CreateRuleGroup"].apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest & keyof CreateWebACLRequest & keyof CreateWebACLRequest & keyof CreateWebACLRequest & keyof CreateWebACLRequest]: (CreateWebACLRequest & CreateWebACLRequest & CreateWebACLRequest & CreateWebACLRequest & CreateWebACLRequest)[K]
    }>): CreateWebACLResponse {
        return this.client.createWebACL(
            this.ops["CreateWebACL"].apply(partialParams)
        );
    }

    invokeDeleteFirewallManagerRuleGroups(partialParams: ToOptional<{
      [K in keyof DeleteFirewallManagerRuleGroupsRequest & keyof DeleteFirewallManagerRuleGroupsRequest & keyof DeleteFirewallManagerRuleGroupsRequest & keyof DeleteFirewallManagerRuleGroupsRequest & keyof DeleteFirewallManagerRuleGroupsRequest]: (DeleteFirewallManagerRuleGroupsRequest & DeleteFirewallManagerRuleGroupsRequest & DeleteFirewallManagerRuleGroupsRequest & DeleteFirewallManagerRuleGroupsRequest & DeleteFirewallManagerRuleGroupsRequest)[K]
    }>): DeleteFirewallManagerRuleGroupsResponse {
        return this.client.deleteFirewallManagerRuleGroups(
            this.ops["DeleteFirewallManagerRuleGroups"].apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest]: (DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest)[K]
    }>): DeleteIPSetResponse {
        return this.client.deleteIPSet(
            this.ops["DeleteIPSet"].apply(partialParams)
        );
    }

    invokeDeleteLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteLoggingConfigurationRequest & keyof DeleteLoggingConfigurationRequest & keyof DeleteLoggingConfigurationRequest & keyof DeleteLoggingConfigurationRequest & keyof DeleteLoggingConfigurationRequest]: (DeleteLoggingConfigurationRequest & DeleteLoggingConfigurationRequest & DeleteLoggingConfigurationRequest & DeleteLoggingConfigurationRequest & DeleteLoggingConfigurationRequest)[K]
    }>): DeleteLoggingConfigurationResponse {
        return this.client.deleteLoggingConfiguration(
            this.ops["DeleteLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeDeletePermissionPolicy(partialParams: ToOptional<{
      [K in keyof DeletePermissionPolicyRequest & keyof DeletePermissionPolicyRequest & keyof DeletePermissionPolicyRequest & keyof DeletePermissionPolicyRequest & keyof DeletePermissionPolicyRequest]: (DeletePermissionPolicyRequest & DeletePermissionPolicyRequest & DeletePermissionPolicyRequest & DeletePermissionPolicyRequest & DeletePermissionPolicyRequest)[K]
    }>): DeletePermissionPolicyResponse {
        return this.client.deletePermissionPolicy(
            this.ops["DeletePermissionPolicy"].apply(partialParams)
        );
    }

    invokeDeleteRegexPatternSet(partialParams: ToOptional<{
      [K in keyof DeleteRegexPatternSetRequest & keyof DeleteRegexPatternSetRequest & keyof DeleteRegexPatternSetRequest & keyof DeleteRegexPatternSetRequest & keyof DeleteRegexPatternSetRequest]: (DeleteRegexPatternSetRequest & DeleteRegexPatternSetRequest & DeleteRegexPatternSetRequest & DeleteRegexPatternSetRequest & DeleteRegexPatternSetRequest)[K]
    }>): DeleteRegexPatternSetResponse {
        return this.client.deleteRegexPatternSet(
            this.ops["DeleteRegexPatternSet"].apply(partialParams)
        );
    }

    invokeDeleteRuleGroup(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupRequest & keyof DeleteRuleGroupRequest & keyof DeleteRuleGroupRequest & keyof DeleteRuleGroupRequest & keyof DeleteRuleGroupRequest]: (DeleteRuleGroupRequest & DeleteRuleGroupRequest & DeleteRuleGroupRequest & DeleteRuleGroupRequest & DeleteRuleGroupRequest)[K]
    }>): DeleteRuleGroupResponse {
        return this.client.deleteRuleGroup(
            this.ops["DeleteRuleGroup"].apply(partialParams)
        );
    }

    invokeDeleteWebACL(partialParams: ToOptional<{
      [K in keyof DeleteWebACLRequest & keyof DeleteWebACLRequest & keyof DeleteWebACLRequest & keyof DeleteWebACLRequest & keyof DeleteWebACLRequest]: (DeleteWebACLRequest & DeleteWebACLRequest & DeleteWebACLRequest & DeleteWebACLRequest & DeleteWebACLRequest)[K]
    }>): DeleteWebACLResponse {
        return this.client.deleteWebACL(
            this.ops["DeleteWebACL"].apply(partialParams)
        );
    }

    invokeDescribeManagedRuleGroup(partialParams: ToOptional<{
      [K in keyof DescribeManagedRuleGroupRequest & keyof DescribeManagedRuleGroupRequest & keyof DescribeManagedRuleGroupRequest & keyof DescribeManagedRuleGroupRequest & keyof DescribeManagedRuleGroupRequest]: (DescribeManagedRuleGroupRequest & DescribeManagedRuleGroupRequest & DescribeManagedRuleGroupRequest & DescribeManagedRuleGroupRequest & DescribeManagedRuleGroupRequest)[K]
    }>): DescribeManagedRuleGroupResponse {
        return this.client.describeManagedRuleGroup(
            this.ops["DescribeManagedRuleGroup"].apply(partialParams)
        );
    }

    invokeDisassociateWebACL(partialParams: ToOptional<{
      [K in keyof DisassociateWebACLRequest & keyof DisassociateWebACLRequest & keyof DisassociateWebACLRequest & keyof DisassociateWebACLRequest & keyof DisassociateWebACLRequest]: (DisassociateWebACLRequest & DisassociateWebACLRequest & DisassociateWebACLRequest & DisassociateWebACLRequest & DisassociateWebACLRequest)[K]
    }>): DisassociateWebACLResponse {
        return this.client.disassociateWebACL(
            this.ops["DisassociateWebACL"].apply(partialParams)
        );
    }

    invokeGenerateMobileSdkReleaseUrl(partialParams: ToOptional<{
      [K in keyof GenerateMobileSdkReleaseUrlRequest & keyof GenerateMobileSdkReleaseUrlRequest & keyof GenerateMobileSdkReleaseUrlRequest & keyof GenerateMobileSdkReleaseUrlRequest & keyof GenerateMobileSdkReleaseUrlRequest]: (GenerateMobileSdkReleaseUrlRequest & GenerateMobileSdkReleaseUrlRequest & GenerateMobileSdkReleaseUrlRequest & GenerateMobileSdkReleaseUrlRequest & GenerateMobileSdkReleaseUrlRequest)[K]
    }>): GenerateMobileSdkReleaseUrlResponse {
        return this.client.generateMobileSdkReleaseUrl(
            this.ops["GenerateMobileSdkReleaseUrl"].apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof GetIPSetRequest & keyof GetIPSetRequest & keyof Omit<GetIPSetRequest, "Name"> & keyof GetIPSetRequest]: (GetIPSetRequest & GetIPSetRequest & GetIPSetRequest & Omit<GetIPSetRequest, "Name"> & GetIPSetRequest)[K]
    }>): GetIPSetResponse {
        return this.client.getIPSet(
            this.ops["GetIPSet"].apply(partialParams)
        );
    }

    invokeGetLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetLoggingConfigurationRequest & keyof GetLoggingConfigurationRequest & keyof GetLoggingConfigurationRequest & keyof GetLoggingConfigurationRequest & keyof GetLoggingConfigurationRequest]: (GetLoggingConfigurationRequest & GetLoggingConfigurationRequest & GetLoggingConfigurationRequest & GetLoggingConfigurationRequest & GetLoggingConfigurationRequest)[K]
    }>): GetLoggingConfigurationResponse {
        return this.client.getLoggingConfiguration(
            this.ops["GetLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetManagedRuleSet(partialParams: ToOptional<{
      [K in keyof GetManagedRuleSetRequest & keyof GetManagedRuleSetRequest & keyof GetManagedRuleSetRequest & keyof Omit<GetManagedRuleSetRequest, "Name"> & keyof GetManagedRuleSetRequest]: (GetManagedRuleSetRequest & GetManagedRuleSetRequest & GetManagedRuleSetRequest & Omit<GetManagedRuleSetRequest, "Name"> & GetManagedRuleSetRequest)[K]
    }>): GetManagedRuleSetResponse {
        return this.client.getManagedRuleSet(
            this.ops["GetManagedRuleSet"].apply(partialParams)
        );
    }

    invokeGetMobileSdkRelease(partialParams: ToOptional<{
      [K in keyof GetMobileSdkReleaseRequest & keyof GetMobileSdkReleaseRequest & keyof GetMobileSdkReleaseRequest & keyof GetMobileSdkReleaseRequest & keyof GetMobileSdkReleaseRequest]: (GetMobileSdkReleaseRequest & GetMobileSdkReleaseRequest & GetMobileSdkReleaseRequest & GetMobileSdkReleaseRequest & GetMobileSdkReleaseRequest)[K]
    }>): GetMobileSdkReleaseResponse {
        return this.client.getMobileSdkRelease(
            this.ops["GetMobileSdkRelease"].apply(partialParams)
        );
    }

    invokeGetPermissionPolicy(partialParams: ToOptional<{
      [K in keyof GetPermissionPolicyRequest & keyof GetPermissionPolicyRequest & keyof GetPermissionPolicyRequest & keyof GetPermissionPolicyRequest & keyof GetPermissionPolicyRequest]: (GetPermissionPolicyRequest & GetPermissionPolicyRequest & GetPermissionPolicyRequest & GetPermissionPolicyRequest & GetPermissionPolicyRequest)[K]
    }>): GetPermissionPolicyResponse {
        return this.client.getPermissionPolicy(
            this.ops["GetPermissionPolicy"].apply(partialParams)
        );
    }

    invokeGetRateBasedStatementManagedKeys(partialParams: ToOptional<{
      [K in keyof GetRateBasedStatementManagedKeysRequest & keyof GetRateBasedStatementManagedKeysRequest & keyof GetRateBasedStatementManagedKeysRequest & keyof GetRateBasedStatementManagedKeysRequest & keyof GetRateBasedStatementManagedKeysRequest]: (GetRateBasedStatementManagedKeysRequest & GetRateBasedStatementManagedKeysRequest & GetRateBasedStatementManagedKeysRequest & GetRateBasedStatementManagedKeysRequest & GetRateBasedStatementManagedKeysRequest)[K]
    }>): GetRateBasedStatementManagedKeysResponse {
        return this.client.getRateBasedStatementManagedKeys(
            this.ops["GetRateBasedStatementManagedKeys"].apply(partialParams)
        );
    }

    invokeGetRegexPatternSet(partialParams: ToOptional<{
      [K in keyof GetRegexPatternSetRequest & keyof GetRegexPatternSetRequest & keyof GetRegexPatternSetRequest & keyof Omit<GetRegexPatternSetRequest, "Name"> & keyof GetRegexPatternSetRequest]: (GetRegexPatternSetRequest & GetRegexPatternSetRequest & GetRegexPatternSetRequest & Omit<GetRegexPatternSetRequest, "Name"> & GetRegexPatternSetRequest)[K]
    }>): GetRegexPatternSetResponse {
        return this.client.getRegexPatternSet(
            this.ops["GetRegexPatternSet"].apply(partialParams)
        );
    }

    invokeGetSampledRequests(partialParams: ToOptional<{
      [K in keyof GetSampledRequestsRequest & keyof GetSampledRequestsRequest & keyof GetSampledRequestsRequest & keyof GetSampledRequestsRequest & keyof GetSampledRequestsRequest]: (GetSampledRequestsRequest & GetSampledRequestsRequest & GetSampledRequestsRequest & GetSampledRequestsRequest & GetSampledRequestsRequest)[K]
    }>): GetSampledRequestsResponse {
        return this.client.getSampledRequests(
            this.ops["GetSampledRequests"].apply(partialParams)
        );
    }

    invokeGetWebACL(partialParams: ToOptional<{
      [K in keyof GetWebACLRequest & keyof GetWebACLRequest & keyof GetWebACLRequest & keyof Omit<GetWebACLRequest, "Name"> & keyof GetWebACLRequest]: (GetWebACLRequest & GetWebACLRequest & GetWebACLRequest & Omit<GetWebACLRequest, "Name"> & GetWebACLRequest)[K]
    }>): GetWebACLResponse {
        return this.client.getWebACL(
            this.ops["GetWebACL"].apply(partialParams)
        );
    }

    invokeGetWebACLForResource(partialParams: ToOptional<{
      [K in keyof GetWebACLForResourceRequest & keyof GetWebACLForResourceRequest & keyof GetWebACLForResourceRequest & keyof GetWebACLForResourceRequest & keyof GetWebACLForResourceRequest]: (GetWebACLForResourceRequest & GetWebACLForResourceRequest & GetWebACLForResourceRequest & GetWebACLForResourceRequest & GetWebACLForResourceRequest)[K]
    }>): GetWebACLForResourceResponse {
        return this.client.getWebACLForResource(
            this.ops["GetWebACLForResource"].apply(partialParams)
        );
    }

    invokeListAvailableManagedRuleGroupVersions(partialParams: ToOptional<{
      [K in keyof ListAvailableManagedRuleGroupVersionsRequest & keyof ListAvailableManagedRuleGroupVersionsRequest & keyof ListAvailableManagedRuleGroupVersionsRequest & keyof Omit<ListAvailableManagedRuleGroupVersionsRequest, "Name"> & keyof ListAvailableManagedRuleGroupVersionsRequest]: (ListAvailableManagedRuleGroupVersionsRequest & ListAvailableManagedRuleGroupVersionsRequest & ListAvailableManagedRuleGroupVersionsRequest & Omit<ListAvailableManagedRuleGroupVersionsRequest, "Name"> & ListAvailableManagedRuleGroupVersionsRequest)[K]
    }>): ListAvailableManagedRuleGroupVersionsResponse {
        return this.client.listAvailableManagedRuleGroupVersions(
            this.ops["ListAvailableManagedRuleGroupVersions"].apply(partialParams)
        );
    }

    invokeListAvailableManagedRuleGroups(partialParams: ToOptional<{
      [K in keyof ListAvailableManagedRuleGroupsRequest & keyof ListAvailableManagedRuleGroupsRequest & keyof ListAvailableManagedRuleGroupsRequest & keyof ListAvailableManagedRuleGroupsRequest & keyof ListAvailableManagedRuleGroupsRequest]: (ListAvailableManagedRuleGroupsRequest & ListAvailableManagedRuleGroupsRequest & ListAvailableManagedRuleGroupsRequest & ListAvailableManagedRuleGroupsRequest & ListAvailableManagedRuleGroupsRequest)[K]
    }>): ListAvailableManagedRuleGroupsResponse {
        return this.client.listAvailableManagedRuleGroups(
            this.ops["ListAvailableManagedRuleGroups"].apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest & keyof ListIPSetsRequest & keyof ListIPSetsRequest & keyof ListIPSetsRequest & keyof ListIPSetsRequest]: (ListIPSetsRequest & ListIPSetsRequest & ListIPSetsRequest & ListIPSetsRequest & ListIPSetsRequest)[K]
    }>): ListIPSetsResponse {
        return this.client.listIPSets(
            this.ops["ListIPSets"].apply(partialParams)
        );
    }

    invokeListLoggingConfigurations(partialParams: ToOptional<{
      [K in keyof ListLoggingConfigurationsRequest & keyof ListLoggingConfigurationsRequest & keyof ListLoggingConfigurationsRequest & keyof ListLoggingConfigurationsRequest & keyof ListLoggingConfigurationsRequest]: (ListLoggingConfigurationsRequest & ListLoggingConfigurationsRequest & ListLoggingConfigurationsRequest & ListLoggingConfigurationsRequest & ListLoggingConfigurationsRequest)[K]
    }>): ListLoggingConfigurationsResponse {
        return this.client.listLoggingConfigurations(
            this.ops["ListLoggingConfigurations"].apply(partialParams)
        );
    }

    invokeListManagedRuleSets(partialParams: ToOptional<{
      [K in keyof ListManagedRuleSetsRequest & keyof ListManagedRuleSetsRequest & keyof ListManagedRuleSetsRequest & keyof ListManagedRuleSetsRequest & keyof ListManagedRuleSetsRequest]: (ListManagedRuleSetsRequest & ListManagedRuleSetsRequest & ListManagedRuleSetsRequest & ListManagedRuleSetsRequest & ListManagedRuleSetsRequest)[K]
    }>): ListManagedRuleSetsResponse {
        return this.client.listManagedRuleSets(
            this.ops["ListManagedRuleSets"].apply(partialParams)
        );
    }

    invokeListMobileSdkReleases(partialParams: ToOptional<{
      [K in keyof ListMobileSdkReleasesRequest & keyof ListMobileSdkReleasesRequest & keyof ListMobileSdkReleasesRequest & keyof ListMobileSdkReleasesRequest & keyof ListMobileSdkReleasesRequest]: (ListMobileSdkReleasesRequest & ListMobileSdkReleasesRequest & ListMobileSdkReleasesRequest & ListMobileSdkReleasesRequest & ListMobileSdkReleasesRequest)[K]
    }>): ListMobileSdkReleasesResponse {
        return this.client.listMobileSdkReleases(
            this.ops["ListMobileSdkReleases"].apply(partialParams)
        );
    }

    invokeListRegexPatternSets(partialParams: ToOptional<{
      [K in keyof ListRegexPatternSetsRequest & keyof ListRegexPatternSetsRequest & keyof ListRegexPatternSetsRequest & keyof ListRegexPatternSetsRequest & keyof ListRegexPatternSetsRequest]: (ListRegexPatternSetsRequest & ListRegexPatternSetsRequest & ListRegexPatternSetsRequest & ListRegexPatternSetsRequest & ListRegexPatternSetsRequest)[K]
    }>): ListRegexPatternSetsResponse {
        return this.client.listRegexPatternSets(
            this.ops["ListRegexPatternSets"].apply(partialParams)
        );
    }

    invokeListResourcesForWebACL(partialParams: ToOptional<{
      [K in keyof ListResourcesForWebACLRequest & keyof ListResourcesForWebACLRequest & keyof ListResourcesForWebACLRequest & keyof ListResourcesForWebACLRequest & keyof ListResourcesForWebACLRequest]: (ListResourcesForWebACLRequest & ListResourcesForWebACLRequest & ListResourcesForWebACLRequest & ListResourcesForWebACLRequest & ListResourcesForWebACLRequest)[K]
    }>): ListResourcesForWebACLResponse {
        return this.client.listResourcesForWebACL(
            this.ops["ListResourcesForWebACL"].apply(partialParams)
        );
    }

    invokeListRuleGroups(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsRequest & keyof ListRuleGroupsRequest & keyof ListRuleGroupsRequest & keyof ListRuleGroupsRequest & keyof ListRuleGroupsRequest]: (ListRuleGroupsRequest & ListRuleGroupsRequest & ListRuleGroupsRequest & ListRuleGroupsRequest & ListRuleGroupsRequest)[K]
    }>): ListRuleGroupsResponse {
        return this.client.listRuleGroups(
            this.ops["ListRuleGroups"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWebACLs(partialParams: ToOptional<{
      [K in keyof ListWebACLsRequest & keyof ListWebACLsRequest & keyof ListWebACLsRequest & keyof ListWebACLsRequest & keyof ListWebACLsRequest]: (ListWebACLsRequest & ListWebACLsRequest & ListWebACLsRequest & ListWebACLsRequest & ListWebACLsRequest)[K]
    }>): ListWebACLsResponse {
        return this.client.listWebACLs(
            this.ops["ListWebACLs"].apply(partialParams)
        );
    }

    invokePutLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutLoggingConfigurationRequest & keyof PutLoggingConfigurationRequest & keyof PutLoggingConfigurationRequest & keyof PutLoggingConfigurationRequest & keyof PutLoggingConfigurationRequest]: (PutLoggingConfigurationRequest & PutLoggingConfigurationRequest & PutLoggingConfigurationRequest & PutLoggingConfigurationRequest & PutLoggingConfigurationRequest)[K]
    }>): PutLoggingConfigurationResponse {
        return this.client.putLoggingConfiguration(
            this.ops["PutLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutManagedRuleSetVersions(partialParams: ToOptional<{
      [K in keyof PutManagedRuleSetVersionsRequest & keyof PutManagedRuleSetVersionsRequest & keyof Omit<PutManagedRuleSetVersionsRequest, "LockToken"> & keyof Omit<PutManagedRuleSetVersionsRequest, "Name"> & keyof PutManagedRuleSetVersionsRequest]: (PutManagedRuleSetVersionsRequest & PutManagedRuleSetVersionsRequest & Omit<PutManagedRuleSetVersionsRequest, "LockToken"> & Omit<PutManagedRuleSetVersionsRequest, "Name"> & PutManagedRuleSetVersionsRequest)[K]
    }>): PutManagedRuleSetVersionsResponse {
        return this.client.putManagedRuleSetVersions(
            this.ops["PutManagedRuleSetVersions"].apply(partialParams)
        );
    }

    invokePutPermissionPolicy(partialParams: ToOptional<{
      [K in keyof PutPermissionPolicyRequest & keyof PutPermissionPolicyRequest & keyof PutPermissionPolicyRequest & keyof PutPermissionPolicyRequest & keyof PutPermissionPolicyRequest]: (PutPermissionPolicyRequest & PutPermissionPolicyRequest & PutPermissionPolicyRequest & PutPermissionPolicyRequest & PutPermissionPolicyRequest)[K]
    }>): PutPermissionPolicyResponse {
        return this.client.putPermissionPolicy(
            this.ops["PutPermissionPolicy"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof UpdateIPSetRequest & keyof Omit<UpdateIPSetRequest, "LockToken"> & keyof Omit<UpdateIPSetRequest, "Name"> & keyof Omit<UpdateIPSetRequest, "Scope">]: (UpdateIPSetRequest & UpdateIPSetRequest & Omit<UpdateIPSetRequest, "LockToken"> & Omit<UpdateIPSetRequest, "Name"> & Omit<UpdateIPSetRequest, "Scope">)[K]
    }>): UpdateIPSetResponse {
        return this.client.updateIPSet(
            this.ops["UpdateIPSet"].apply(partialParams)
        );
    }

    invokeUpdateManagedRuleSetVersionExpiryDate(partialParams: ToOptional<{
      [K in keyof UpdateManagedRuleSetVersionExpiryDateRequest & keyof UpdateManagedRuleSetVersionExpiryDateRequest & keyof Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "LockToken"> & keyof Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "Name"> & keyof Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "Scope">]: (UpdateManagedRuleSetVersionExpiryDateRequest & UpdateManagedRuleSetVersionExpiryDateRequest & Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "LockToken"> & Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "Name"> & Omit<UpdateManagedRuleSetVersionExpiryDateRequest, "Scope">)[K]
    }>): UpdateManagedRuleSetVersionExpiryDateResponse {
        return this.client.updateManagedRuleSetVersionExpiryDate(
            this.ops["UpdateManagedRuleSetVersionExpiryDate"].apply(partialParams)
        );
    }

    invokeUpdateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof UpdateRegexPatternSetRequest & keyof UpdateRegexPatternSetRequest & keyof Omit<UpdateRegexPatternSetRequest, "LockToken"> & keyof Omit<UpdateRegexPatternSetRequest, "Name"> & keyof Omit<UpdateRegexPatternSetRequest, "Scope">]: (UpdateRegexPatternSetRequest & UpdateRegexPatternSetRequest & Omit<UpdateRegexPatternSetRequest, "LockToken"> & Omit<UpdateRegexPatternSetRequest, "Name"> & Omit<UpdateRegexPatternSetRequest, "Scope">)[K]
    }>): UpdateRegexPatternSetResponse {
        return this.client.updateRegexPatternSet(
            this.ops["UpdateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeUpdateRuleGroup(partialParams: ToOptional<{
      [K in keyof UpdateRuleGroupRequest & keyof UpdateRuleGroupRequest & keyof Omit<UpdateRuleGroupRequest, "LockToken"> & keyof Omit<UpdateRuleGroupRequest, "Name"> & keyof Omit<UpdateRuleGroupRequest, "Scope">]: (UpdateRuleGroupRequest & UpdateRuleGroupRequest & Omit<UpdateRuleGroupRequest, "LockToken"> & Omit<UpdateRuleGroupRequest, "Name"> & Omit<UpdateRuleGroupRequest, "Scope">)[K]
    }>): UpdateRuleGroupResponse {
        return this.client.updateRuleGroup(
            this.ops["UpdateRuleGroup"].apply(partialParams)
        );
    }

    invokeUpdateWebACL(partialParams: ToOptional<{
      [K in keyof UpdateWebACLRequest & keyof UpdateWebACLRequest & keyof Omit<UpdateWebACLRequest, "LockToken"> & keyof Omit<UpdateWebACLRequest, "Name"> & keyof Omit<UpdateWebACLRequest, "Scope">]: (UpdateWebACLRequest & UpdateWebACLRequest & Omit<UpdateWebACLRequest, "LockToken"> & Omit<UpdateWebACLRequest, "Name"> & Omit<UpdateWebACLRequest, "Scope">)[K]
    }>): UpdateWebACLResponse {
        return this.client.updateWebACL(
            this.ops["UpdateWebACL"].apply(partialParams)
        );
    }
}