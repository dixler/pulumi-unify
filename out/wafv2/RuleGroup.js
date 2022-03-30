"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.wafv2.RuleGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.WAFV2();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/wafv2-2019-07-29.normal.json"), this.client);
    }
    invokeAssociateWebACL(partialParams) {
        return this.client.associateWebACL(this.ops["AssociateWebACL"].apply(partialParams));
    }
    invokeCheckCapacity(partialParams) {
        return this.client.checkCapacity(this.ops["CheckCapacity"].apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        return this.client.createIPSet(this.ops["CreateIPSet"].apply(partialParams));
    }
    invokeCreateRegexPatternSet(partialParams) {
        return this.client.createRegexPatternSet(this.ops["CreateRegexPatternSet"].apply(partialParams));
    }
    invokeCreateRuleGroup(partialParams) {
        return this.client.createRuleGroup(this.ops["CreateRuleGroup"].apply(partialParams));
    }
    invokeCreateWebACL(partialParams) {
        return this.client.createWebACL(this.ops["CreateWebACL"].apply(partialParams));
    }
    invokeDeleteFirewallManagerRuleGroups(partialParams) {
        return this.client.deleteFirewallManagerRuleGroups(this.ops["DeleteFirewallManagerRuleGroups"].apply(partialParams));
    }
    invokeDeleteIPSet(partialParams) {
        return this.client.deleteIPSet(this.ops["DeleteIPSet"].apply(partialParams));
    }
    invokeDeleteLoggingConfiguration(partialParams) {
        return this.client.deleteLoggingConfiguration(this.ops["DeleteLoggingConfiguration"].apply(partialParams));
    }
    invokeDeletePermissionPolicy(partialParams) {
        return this.client.deletePermissionPolicy(this.ops["DeletePermissionPolicy"].apply(partialParams));
    }
    invokeDeleteRegexPatternSet(partialParams) {
        return this.client.deleteRegexPatternSet(this.ops["DeleteRegexPatternSet"].apply(partialParams));
    }
    invokeDeleteRuleGroup(partialParams) {
        return this.client.deleteRuleGroup(this.ops["DeleteRuleGroup"].apply(partialParams));
    }
    invokeDeleteWebACL(partialParams) {
        return this.client.deleteWebACL(this.ops["DeleteWebACL"].apply(partialParams));
    }
    invokeDescribeManagedRuleGroup(partialParams) {
        return this.client.describeManagedRuleGroup(this.ops["DescribeManagedRuleGroup"].apply(partialParams));
    }
    invokeDisassociateWebACL(partialParams) {
        return this.client.disassociateWebACL(this.ops["DisassociateWebACL"].apply(partialParams));
    }
    invokeGenerateMobileSdkReleaseUrl(partialParams) {
        return this.client.generateMobileSdkReleaseUrl(this.ops["GenerateMobileSdkReleaseUrl"].apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        return this.client.getIPSet(this.ops["GetIPSet"].apply(partialParams));
    }
    invokeGetLoggingConfiguration(partialParams) {
        return this.client.getLoggingConfiguration(this.ops["GetLoggingConfiguration"].apply(partialParams));
    }
    invokeGetManagedRuleSet(partialParams) {
        return this.client.getManagedRuleSet(this.ops["GetManagedRuleSet"].apply(partialParams));
    }
    invokeGetMobileSdkRelease(partialParams) {
        return this.client.getMobileSdkRelease(this.ops["GetMobileSdkRelease"].apply(partialParams));
    }
    invokeGetPermissionPolicy(partialParams) {
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].apply(partialParams));
    }
    invokeGetRateBasedStatementManagedKeys(partialParams) {
        return this.client.getRateBasedStatementManagedKeys(this.ops["GetRateBasedStatementManagedKeys"].apply(partialParams));
    }
    invokeGetRegexPatternSet(partialParams) {
        return this.client.getRegexPatternSet(this.ops["GetRegexPatternSet"].apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].apply(partialParams));
    }
    invokeGetWebACL(partialParams) {
        return this.client.getWebACL(this.ops["GetWebACL"].apply(partialParams));
    }
    invokeGetWebACLForResource(partialParams) {
        return this.client.getWebACLForResource(this.ops["GetWebACLForResource"].apply(partialParams));
    }
    invokeListAvailableManagedRuleGroupVersions(partialParams) {
        return this.client.listAvailableManagedRuleGroupVersions(this.ops["ListAvailableManagedRuleGroupVersions"].apply(partialParams));
    }
    invokeListAvailableManagedRuleGroups(partialParams) {
        return this.client.listAvailableManagedRuleGroups(this.ops["ListAvailableManagedRuleGroups"].apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        return this.client.listIPSets(this.ops["ListIPSets"].apply(partialParams));
    }
    invokeListLoggingConfigurations(partialParams) {
        return this.client.listLoggingConfigurations(this.ops["ListLoggingConfigurations"].apply(partialParams));
    }
    invokeListManagedRuleSets(partialParams) {
        return this.client.listManagedRuleSets(this.ops["ListManagedRuleSets"].apply(partialParams));
    }
    invokeListMobileSdkReleases(partialParams) {
        return this.client.listMobileSdkReleases(this.ops["ListMobileSdkReleases"].apply(partialParams));
    }
    invokeListRegexPatternSets(partialParams) {
        return this.client.listRegexPatternSets(this.ops["ListRegexPatternSets"].apply(partialParams));
    }
    invokeListResourcesForWebACL(partialParams) {
        return this.client.listResourcesForWebACL(this.ops["ListResourcesForWebACL"].apply(partialParams));
    }
    invokeListRuleGroups(partialParams) {
        return this.client.listRuleGroups(this.ops["ListRuleGroups"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebACLs(partialParams) {
        return this.client.listWebACLs(this.ops["ListWebACLs"].apply(partialParams));
    }
    invokePutLoggingConfiguration(partialParams) {
        return this.client.putLoggingConfiguration(this.ops["PutLoggingConfiguration"].apply(partialParams));
    }
    invokePutManagedRuleSetVersions(partialParams) {
        return this.client.putManagedRuleSetVersions(this.ops["PutManagedRuleSetVersions"].apply(partialParams));
    }
    invokePutPermissionPolicy(partialParams) {
        return this.client.putPermissionPolicy(this.ops["PutPermissionPolicy"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        return this.client.updateIPSet(this.ops["UpdateIPSet"].apply(partialParams));
    }
    invokeUpdateManagedRuleSetVersionExpiryDate(partialParams) {
        return this.client.updateManagedRuleSetVersionExpiryDate(this.ops["UpdateManagedRuleSetVersionExpiryDate"].apply(partialParams));
    }
    invokeUpdateRegexPatternSet(partialParams) {
        return this.client.updateRegexPatternSet(this.ops["UpdateRegexPatternSet"].apply(partialParams));
    }
    invokeUpdateRuleGroup(partialParams) {
        return this.client.updateRuleGroup(this.ops["UpdateRuleGroup"].apply(partialParams));
    }
    invokeUpdateWebACL(partialParams) {
        return this.client.updateWebACL(this.ops["UpdateWebACL"].apply(partialParams));
    }
}
exports.default = default_1;
