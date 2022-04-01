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
const schema = require("../apis/waf-2015-08-24.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.waf.RegexPatternSet {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.WAF();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
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
    invokeCreateByteMatchSet(partialParams) {
        this.boot();
        return this.client.createByteMatchSet(this.ops["CreateByteMatchSet"].apply(partialParams));
    }
    invokeCreateGeoMatchSet(partialParams) {
        this.boot();
        return this.client.createGeoMatchSet(this.ops["CreateGeoMatchSet"].apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        this.boot();
        return this.client.createIPSet(this.ops["CreateIPSet"].apply(partialParams));
    }
    invokeCreateRateBasedRule(partialParams) {
        this.boot();
        return this.client.createRateBasedRule(this.ops["CreateRateBasedRule"].apply(partialParams));
    }
    invokeCreateRegexMatchSet(partialParams) {
        this.boot();
        return this.client.createRegexMatchSet(this.ops["CreateRegexMatchSet"].apply(partialParams));
    }
    invokeCreateRegexPatternSet(partialParams) {
        this.boot();
        return this.client.createRegexPatternSet(this.ops["CreateRegexPatternSet"].apply(partialParams));
    }
    invokeCreateRule(partialParams) {
        this.boot();
        return this.client.createRule(this.ops["CreateRule"].apply(partialParams));
    }
    invokeCreateRuleGroup(partialParams) {
        this.boot();
        return this.client.createRuleGroup(this.ops["CreateRuleGroup"].apply(partialParams));
    }
    invokeCreateSizeConstraintSet(partialParams) {
        this.boot();
        return this.client.createSizeConstraintSet(this.ops["CreateSizeConstraintSet"].apply(partialParams));
    }
    invokeCreateSqlInjectionMatchSet(partialParams) {
        this.boot();
        return this.client.createSqlInjectionMatchSet(this.ops["CreateSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeCreateWebACL(partialParams) {
        this.boot();
        return this.client.createWebACL(this.ops["CreateWebACL"].apply(partialParams));
    }
    invokeCreateWebACLMigrationStack(partialParams) {
        this.boot();
        return this.client.createWebACLMigrationStack(this.ops["CreateWebACLMigrationStack"].apply(partialParams));
    }
    invokeCreateXssMatchSet(partialParams) {
        this.boot();
        return this.client.createXssMatchSet(this.ops["CreateXssMatchSet"].apply(partialParams));
    }
    invokeDeleteByteMatchSet(partialParams) {
        this.boot();
        return this.client.deleteByteMatchSet(this.ops["DeleteByteMatchSet"].apply(partialParams));
    }
    invokeDeleteGeoMatchSet(partialParams) {
        this.boot();
        return this.client.deleteGeoMatchSet(this.ops["DeleteGeoMatchSet"].apply(partialParams));
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
    invokeDeleteRateBasedRule(partialParams) {
        this.boot();
        return this.client.deleteRateBasedRule(this.ops["DeleteRateBasedRule"].apply(partialParams));
    }
    invokeDeleteRegexMatchSet(partialParams) {
        this.boot();
        return this.client.deleteRegexMatchSet(this.ops["DeleteRegexMatchSet"].apply(partialParams));
    }
    invokeDeleteRegexPatternSet(partialParams) {
        this.boot();
        return this.client.deleteRegexPatternSet(this.ops["DeleteRegexPatternSet"].apply(partialParams));
    }
    invokeDeleteRule(partialParams) {
        this.boot();
        return this.client.deleteRule(this.ops["DeleteRule"].apply(partialParams));
    }
    invokeDeleteRuleGroup(partialParams) {
        this.boot();
        return this.client.deleteRuleGroup(this.ops["DeleteRuleGroup"].apply(partialParams));
    }
    invokeDeleteSizeConstraintSet(partialParams) {
        this.boot();
        return this.client.deleteSizeConstraintSet(this.ops["DeleteSizeConstraintSet"].apply(partialParams));
    }
    invokeDeleteSqlInjectionMatchSet(partialParams) {
        this.boot();
        return this.client.deleteSqlInjectionMatchSet(this.ops["DeleteSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeDeleteWebACL(partialParams) {
        this.boot();
        return this.client.deleteWebACL(this.ops["DeleteWebACL"].apply(partialParams));
    }
    invokeDeleteXssMatchSet(partialParams) {
        this.boot();
        return this.client.deleteXssMatchSet(this.ops["DeleteXssMatchSet"].apply(partialParams));
    }
    invokeGetByteMatchSet(partialParams) {
        this.boot();
        return this.client.getByteMatchSet(this.ops["GetByteMatchSet"].apply(partialParams));
    }
    invokeGetChangeToken(partialParams) {
        this.boot();
        return this.client.getChangeToken(this.ops["GetChangeToken"].apply(partialParams));
    }
    invokeGetChangeTokenStatus(partialParams) {
        this.boot();
        return this.client.getChangeTokenStatus(this.ops["GetChangeTokenStatus"].apply(partialParams));
    }
    invokeGetGeoMatchSet(partialParams) {
        this.boot();
        return this.client.getGeoMatchSet(this.ops["GetGeoMatchSet"].apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        this.boot();
        return this.client.getIPSet(this.ops["GetIPSet"].apply(partialParams));
    }
    invokeGetLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.getLoggingConfiguration(this.ops["GetLoggingConfiguration"].apply(partialParams));
    }
    invokeGetPermissionPolicy(partialParams) {
        this.boot();
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].apply(partialParams));
    }
    invokeGetRateBasedRule(partialParams) {
        this.boot();
        return this.client.getRateBasedRule(this.ops["GetRateBasedRule"].apply(partialParams));
    }
    invokeGetRateBasedRuleManagedKeys(partialParams) {
        this.boot();
        return this.client.getRateBasedRuleManagedKeys(this.ops["GetRateBasedRuleManagedKeys"].apply(partialParams));
    }
    invokeGetRegexMatchSet(partialParams) {
        this.boot();
        return this.client.getRegexMatchSet(this.ops["GetRegexMatchSet"].apply(partialParams));
    }
    invokeGetRegexPatternSet(partialParams) {
        this.boot();
        return this.client.getRegexPatternSet(this.ops["GetRegexPatternSet"].apply(partialParams));
    }
    invokeGetRule(partialParams) {
        this.boot();
        return this.client.getRule(this.ops["GetRule"].apply(partialParams));
    }
    invokeGetRuleGroup(partialParams) {
        this.boot();
        return this.client.getRuleGroup(this.ops["GetRuleGroup"].apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        this.boot();
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].apply(partialParams));
    }
    invokeGetSizeConstraintSet(partialParams) {
        this.boot();
        return this.client.getSizeConstraintSet(this.ops["GetSizeConstraintSet"].apply(partialParams));
    }
    invokeGetSqlInjectionMatchSet(partialParams) {
        this.boot();
        return this.client.getSqlInjectionMatchSet(this.ops["GetSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeGetWebACL(partialParams) {
        this.boot();
        return this.client.getWebACL(this.ops["GetWebACL"].apply(partialParams));
    }
    invokeGetXssMatchSet(partialParams) {
        this.boot();
        return this.client.getXssMatchSet(this.ops["GetXssMatchSet"].apply(partialParams));
    }
    invokeListActivatedRulesInRuleGroup(partialParams) {
        this.boot();
        return this.client.listActivatedRulesInRuleGroup(this.ops["ListActivatedRulesInRuleGroup"].apply(partialParams));
    }
    invokeListByteMatchSets(partialParams) {
        this.boot();
        return this.client.listByteMatchSets(this.ops["ListByteMatchSets"].apply(partialParams));
    }
    invokeListGeoMatchSets(partialParams) {
        this.boot();
        return this.client.listGeoMatchSets(this.ops["ListGeoMatchSets"].apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        this.boot();
        return this.client.listIPSets(this.ops["ListIPSets"].apply(partialParams));
    }
    invokeListLoggingConfigurations(partialParams) {
        this.boot();
        return this.client.listLoggingConfigurations(this.ops["ListLoggingConfigurations"].apply(partialParams));
    }
    invokeListRateBasedRules(partialParams) {
        this.boot();
        return this.client.listRateBasedRules(this.ops["ListRateBasedRules"].apply(partialParams));
    }
    invokeListRegexMatchSets(partialParams) {
        this.boot();
        return this.client.listRegexMatchSets(this.ops["ListRegexMatchSets"].apply(partialParams));
    }
    invokeListRegexPatternSets(partialParams) {
        this.boot();
        return this.client.listRegexPatternSets(this.ops["ListRegexPatternSets"].apply(partialParams));
    }
    invokeListRuleGroups(partialParams) {
        this.boot();
        return this.client.listRuleGroups(this.ops["ListRuleGroups"].apply(partialParams));
    }
    invokeListRules(partialParams) {
        this.boot();
        return this.client.listRules(this.ops["ListRules"].apply(partialParams));
    }
    invokeListSizeConstraintSets(partialParams) {
        this.boot();
        return this.client.listSizeConstraintSets(this.ops["ListSizeConstraintSets"].apply(partialParams));
    }
    invokeListSqlInjectionMatchSets(partialParams) {
        this.boot();
        return this.client.listSqlInjectionMatchSets(this.ops["ListSqlInjectionMatchSets"].apply(partialParams));
    }
    invokeListSubscribedRuleGroups(partialParams) {
        this.boot();
        return this.client.listSubscribedRuleGroups(this.ops["ListSubscribedRuleGroups"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebACLs(partialParams) {
        this.boot();
        return this.client.listWebACLs(this.ops["ListWebACLs"].apply(partialParams));
    }
    invokeListXssMatchSets(partialParams) {
        this.boot();
        return this.client.listXssMatchSets(this.ops["ListXssMatchSets"].apply(partialParams));
    }
    invokePutLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.putLoggingConfiguration(this.ops["PutLoggingConfiguration"].apply(partialParams));
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
    invokeUpdateByteMatchSet(partialParams) {
        this.boot();
        return this.client.updateByteMatchSet(this.ops["UpdateByteMatchSet"].apply(partialParams));
    }
    invokeUpdateGeoMatchSet(partialParams) {
        this.boot();
        return this.client.updateGeoMatchSet(this.ops["UpdateGeoMatchSet"].apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        this.boot();
        return this.client.updateIPSet(this.ops["UpdateIPSet"].apply(partialParams));
    }
    invokeUpdateRateBasedRule(partialParams) {
        this.boot();
        return this.client.updateRateBasedRule(this.ops["UpdateRateBasedRule"].apply(partialParams));
    }
    invokeUpdateRegexMatchSet(partialParams) {
        this.boot();
        return this.client.updateRegexMatchSet(this.ops["UpdateRegexMatchSet"].apply(partialParams));
    }
    invokeUpdateRegexPatternSet(partialParams) {
        this.boot();
        return this.client.updateRegexPatternSet(this.ops["UpdateRegexPatternSet"].apply(partialParams));
    }
    invokeUpdateRule(partialParams) {
        this.boot();
        return this.client.updateRule(this.ops["UpdateRule"].apply(partialParams));
    }
    invokeUpdateRuleGroup(partialParams) {
        this.boot();
        return this.client.updateRuleGroup(this.ops["UpdateRuleGroup"].apply(partialParams));
    }
    invokeUpdateSizeConstraintSet(partialParams) {
        this.boot();
        return this.client.updateSizeConstraintSet(this.ops["UpdateSizeConstraintSet"].apply(partialParams));
    }
    invokeUpdateSqlInjectionMatchSet(partialParams) {
        this.boot();
        return this.client.updateSqlInjectionMatchSet(this.ops["UpdateSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeUpdateWebACL(partialParams) {
        this.boot();
        return this.client.updateWebACL(this.ops["UpdateWebACL"].apply(partialParams));
    }
    invokeUpdateXssMatchSet(partialParams) {
        this.boot();
        return this.client.updateXssMatchSet(this.ops["UpdateXssMatchSet"].apply(partialParams));
    }
}
exports.default = default_1;
