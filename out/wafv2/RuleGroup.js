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
class default_1 extends aws.wafv2.RuleGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.WAFV2();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAssociateWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateWebACL(this.ops["AssociateWebACL"].applicator.apply(partialParams));
    }
    invokeCheckCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkCapacity(this.ops["CheckCapacity"].applicator.apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIPSet(this.ops["CreateIPSet"].applicator.apply(partialParams));
    }
    invokeCreateRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegexPatternSet(this.ops["CreateRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeCreateRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRuleGroup(this.ops["CreateRuleGroup"].applicator.apply(partialParams));
    }
    invokeCreateWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebACL(this.ops["CreateWebACL"].applicator.apply(partialParams));
    }
    invokeDeleteFirewallManagerRuleGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFirewallManagerRuleGroups(this.ops["DeleteFirewallManagerRuleGroups"].applicator.apply(partialParams));
    }
    invokeDeleteIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIPSet(this.ops["DeleteIPSet"].applicator.apply(partialParams));
    }
    invokeDeleteLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoggingConfiguration(this.ops["DeleteLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokeDeletePermissionPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePermissionPolicy(this.ops["DeletePermissionPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegexPatternSet(this.ops["DeleteRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeDeleteRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRuleGroup(this.ops["DeleteRuleGroup"].applicator.apply(partialParams));
    }
    invokeDeleteWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebACL(this.ops["DeleteWebACL"].applicator.apply(partialParams));
    }
    invokeDescribeManagedRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeManagedRuleGroup(this.ops["DescribeManagedRuleGroup"].applicator.apply(partialParams));
    }
    invokeDisassociateWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateWebACL(this.ops["DisassociateWebACL"].applicator.apply(partialParams));
    }
    invokeGenerateMobileSdkReleaseUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateMobileSdkReleaseUrl(this.ops["GenerateMobileSdkReleaseUrl"].applicator.apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIPSet(this.ops["GetIPSet"].applicator.apply(partialParams));
    }
    invokeGetLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoggingConfiguration(this.ops["GetLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokeGetManagedRuleSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getManagedRuleSet(this.ops["GetManagedRuleSet"].applicator.apply(partialParams));
    }
    invokeGetMobileSdkRelease(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMobileSdkRelease(this.ops["GetMobileSdkRelease"].applicator.apply(partialParams));
    }
    invokeGetPermissionPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].applicator.apply(partialParams));
    }
    invokeGetRateBasedStatementManagedKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRateBasedStatementManagedKeys(this.ops["GetRateBasedStatementManagedKeys"].applicator.apply(partialParams));
    }
    invokeGetRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegexPatternSet(this.ops["GetRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].applicator.apply(partialParams));
    }
    invokeGetWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebACL(this.ops["GetWebACL"].applicator.apply(partialParams));
    }
    invokeGetWebACLForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebACLForResource(this.ops["GetWebACLForResource"].applicator.apply(partialParams));
    }
    invokeListAvailableManagedRuleGroupVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAvailableManagedRuleGroupVersions(this.ops["ListAvailableManagedRuleGroupVersions"].applicator.apply(partialParams));
    }
    invokeListAvailableManagedRuleGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAvailableManagedRuleGroups(this.ops["ListAvailableManagedRuleGroups"].applicator.apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIPSets(this.ops["ListIPSets"].applicator.apply(partialParams));
    }
    invokeListLoggingConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLoggingConfigurations(this.ops["ListLoggingConfigurations"].applicator.apply(partialParams));
    }
    invokeListManagedRuleSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listManagedRuleSets(this.ops["ListManagedRuleSets"].applicator.apply(partialParams));
    }
    invokeListMobileSdkReleases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMobileSdkReleases(this.ops["ListMobileSdkReleases"].applicator.apply(partialParams));
    }
    invokeListRegexPatternSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRegexPatternSets(this.ops["ListRegexPatternSets"].applicator.apply(partialParams));
    }
    invokeListResourcesForWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourcesForWebACL(this.ops["ListResourcesForWebACL"].applicator.apply(partialParams));
    }
    invokeListRuleGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRuleGroups(this.ops["ListRuleGroups"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListWebACLs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebACLs(this.ops["ListWebACLs"].applicator.apply(partialParams));
    }
    invokePutLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLoggingConfiguration(this.ops["PutLoggingConfiguration"].applicator.apply(partialParams));
    }
    invokePutManagedRuleSetVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putManagedRuleSetVersions(this.ops["PutManagedRuleSetVersions"].applicator.apply(partialParams));
    }
    invokePutPermissionPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPermissionPolicy(this.ops["PutPermissionPolicy"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIPSet(this.ops["UpdateIPSet"].applicator.apply(partialParams));
    }
    invokeUpdateManagedRuleSetVersionExpiryDate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateManagedRuleSetVersionExpiryDate(this.ops["UpdateManagedRuleSetVersionExpiryDate"].applicator.apply(partialParams));
    }
    invokeUpdateRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegexPatternSet(this.ops["UpdateRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeUpdateRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRuleGroup(this.ops["UpdateRuleGroup"].applicator.apply(partialParams));
    }
    invokeUpdateWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebACL(this.ops["UpdateWebACL"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
