"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/wafv2-2019-07-29.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.wafv2.IpSet {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.WAFV2();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAssociateWebACL(partialParams) {
        this.boot();
        return this.client.associateWebACL(this.ops["AssociateWebACL"].apply(partialParams));
    }
    invokeCheckCapacity(partialParams) {
        this.boot();
        return this.client.checkCapacity(this.ops["CheckCapacity"].apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        this.boot();
        return this.client.createIPSet(this.ops["CreateIPSet"].apply(partialParams));
    }
    invokeCreateRegexPatternSet(partialParams) {
        this.boot();
        return this.client.createRegexPatternSet(this.ops["CreateRegexPatternSet"].apply(partialParams));
    }
    invokeCreateRuleGroup(partialParams) {
        this.boot();
        return this.client.createRuleGroup(this.ops["CreateRuleGroup"].apply(partialParams));
    }
    invokeCreateWebACL(partialParams) {
        this.boot();
        return this.client.createWebACL(this.ops["CreateWebACL"].apply(partialParams));
    }
    invokeDeleteFirewallManagerRuleGroups(partialParams) {
        this.boot();
        return this.client.deleteFirewallManagerRuleGroups(this.ops["DeleteFirewallManagerRuleGroups"].apply(partialParams));
    }
    invokeDeleteIPSet(partialParams) {
        this.boot();
        return this.client.deleteIPSet(this.ops["DeleteIPSet"].apply(partialParams));
    }
    invokeDeleteLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.deleteLoggingConfiguration(this.ops["DeleteLoggingConfiguration"].apply(partialParams));
    }
    invokeDeletePermissionPolicy(partialParams) {
        this.boot();
        return this.client.deletePermissionPolicy(this.ops["DeletePermissionPolicy"].apply(partialParams));
    }
    invokeDeleteRegexPatternSet(partialParams) {
        this.boot();
        return this.client.deleteRegexPatternSet(this.ops["DeleteRegexPatternSet"].apply(partialParams));
    }
    invokeDeleteRuleGroup(partialParams) {
        this.boot();
        return this.client.deleteRuleGroup(this.ops["DeleteRuleGroup"].apply(partialParams));
    }
    invokeDeleteWebACL(partialParams) {
        this.boot();
        return this.client.deleteWebACL(this.ops["DeleteWebACL"].apply(partialParams));
    }
    invokeDescribeManagedRuleGroup(partialParams) {
        this.boot();
        return this.client.describeManagedRuleGroup(this.ops["DescribeManagedRuleGroup"].apply(partialParams));
    }
    invokeDisassociateWebACL(partialParams) {
        this.boot();
        return this.client.disassociateWebACL(this.ops["DisassociateWebACL"].apply(partialParams));
    }
    invokeGenerateMobileSdkReleaseUrl(partialParams) {
        this.boot();
        return this.client.generateMobileSdkReleaseUrl(this.ops["GenerateMobileSdkReleaseUrl"].apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        this.boot();
        return this.client.getIPSet(this.ops["GetIPSet"].apply(partialParams));
    }
    invokeGetLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.getLoggingConfiguration(this.ops["GetLoggingConfiguration"].apply(partialParams));
    }
    invokeGetManagedRuleSet(partialParams) {
        this.boot();
        return this.client.getManagedRuleSet(this.ops["GetManagedRuleSet"].apply(partialParams));
    }
    invokeGetMobileSdkRelease(partialParams) {
        this.boot();
        return this.client.getMobileSdkRelease(this.ops["GetMobileSdkRelease"].apply(partialParams));
    }
    invokeGetPermissionPolicy(partialParams) {
        this.boot();
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].apply(partialParams));
    }
    invokeGetRateBasedStatementManagedKeys(partialParams) {
        this.boot();
        return this.client.getRateBasedStatementManagedKeys(this.ops["GetRateBasedStatementManagedKeys"].apply(partialParams));
    }
    invokeGetRegexPatternSet(partialParams) {
        this.boot();
        return this.client.getRegexPatternSet(this.ops["GetRegexPatternSet"].apply(partialParams));
    }
    invokeGetRuleGroup(partialParams) {
        this.boot();
        return this.client.getRuleGroup(this.ops["GetRuleGroup"].apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        this.boot();
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].apply(partialParams));
    }
    invokeGetWebACL(partialParams) {
        this.boot();
        return this.client.getWebACL(this.ops["GetWebACL"].apply(partialParams));
    }
    invokeGetWebACLForResource(partialParams) {
        this.boot();
        return this.client.getWebACLForResource(this.ops["GetWebACLForResource"].apply(partialParams));
    }
    invokeListAvailableManagedRuleGroupVersions(partialParams) {
        this.boot();
        return this.client.listAvailableManagedRuleGroupVersions(this.ops["ListAvailableManagedRuleGroupVersions"].apply(partialParams));
    }
    invokeListAvailableManagedRuleGroups(partialParams) {
        this.boot();
        return this.client.listAvailableManagedRuleGroups(this.ops["ListAvailableManagedRuleGroups"].apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        this.boot();
        return this.client.listIPSets(this.ops["ListIPSets"].apply(partialParams));
    }
    invokeListLoggingConfigurations(partialParams) {
        this.boot();
        return this.client.listLoggingConfigurations(this.ops["ListLoggingConfigurations"].apply(partialParams));
    }
    invokeListManagedRuleSets(partialParams) {
        this.boot();
        return this.client.listManagedRuleSets(this.ops["ListManagedRuleSets"].apply(partialParams));
    }
    invokeListMobileSdkReleases(partialParams) {
        this.boot();
        return this.client.listMobileSdkReleases(this.ops["ListMobileSdkReleases"].apply(partialParams));
    }
    invokeListRegexPatternSets(partialParams) {
        this.boot();
        return this.client.listRegexPatternSets(this.ops["ListRegexPatternSets"].apply(partialParams));
    }
    invokeListResourcesForWebACL(partialParams) {
        this.boot();
        return this.client.listResourcesForWebACL(this.ops["ListResourcesForWebACL"].apply(partialParams));
    }
    invokeListRuleGroups(partialParams) {
        this.boot();
        return this.client.listRuleGroups(this.ops["ListRuleGroups"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebACLs(partialParams) {
        this.boot();
        return this.client.listWebACLs(this.ops["ListWebACLs"].apply(partialParams));
    }
    invokePutLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.putLoggingConfiguration(this.ops["PutLoggingConfiguration"].apply(partialParams));
    }
    invokePutManagedRuleSetVersions(partialParams) {
        this.boot();
        return this.client.putManagedRuleSetVersions(this.ops["PutManagedRuleSetVersions"].apply(partialParams));
    }
    invokePutPermissionPolicy(partialParams) {
        this.boot();
        return this.client.putPermissionPolicy(this.ops["PutPermissionPolicy"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        this.boot();
        return this.client.updateIPSet(this.ops["UpdateIPSet"].apply(partialParams));
    }
    invokeUpdateManagedRuleSetVersionExpiryDate(partialParams) {
        this.boot();
        return this.client.updateManagedRuleSetVersionExpiryDate(this.ops["UpdateManagedRuleSetVersionExpiryDate"].apply(partialParams));
    }
    invokeUpdateRegexPatternSet(partialParams) {
        this.boot();
        return this.client.updateRegexPatternSet(this.ops["UpdateRegexPatternSet"].apply(partialParams));
    }
    invokeUpdateRuleGroup(partialParams) {
        this.boot();
        return this.client.updateRuleGroup(this.ops["UpdateRuleGroup"].apply(partialParams));
    }
    invokeUpdateWebACL(partialParams) {
        this.boot();
        return this.client.updateWebACL(this.ops["UpdateWebACL"].apply(partialParams));
    }
}
exports.default = default_1;
