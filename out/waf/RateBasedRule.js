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
class default_1 extends aws.waf.RateBasedRule {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.WAF();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/waf-2015-08-24.normal.json"), this.client);
    }
    invokeCreateByteMatchSet(partialParams) {
        return this.client.createByteMatchSet(this.ops["CreateByteMatchSet"].apply(partialParams));
    }
    invokeCreateGeoMatchSet(partialParams) {
        return this.client.createGeoMatchSet(this.ops["CreateGeoMatchSet"].apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        return this.client.createIPSet(this.ops["CreateIPSet"].apply(partialParams));
    }
    invokeCreateRateBasedRule(partialParams) {
        return this.client.createRateBasedRule(this.ops["CreateRateBasedRule"].apply(partialParams));
    }
    invokeCreateRegexMatchSet(partialParams) {
        return this.client.createRegexMatchSet(this.ops["CreateRegexMatchSet"].apply(partialParams));
    }
    invokeCreateRegexPatternSet(partialParams) {
        return this.client.createRegexPatternSet(this.ops["CreateRegexPatternSet"].apply(partialParams));
    }
    invokeCreateRule(partialParams) {
        return this.client.createRule(this.ops["CreateRule"].apply(partialParams));
    }
    invokeCreateRuleGroup(partialParams) {
        return this.client.createRuleGroup(this.ops["CreateRuleGroup"].apply(partialParams));
    }
    invokeCreateSizeConstraintSet(partialParams) {
        return this.client.createSizeConstraintSet(this.ops["CreateSizeConstraintSet"].apply(partialParams));
    }
    invokeCreateSqlInjectionMatchSet(partialParams) {
        return this.client.createSqlInjectionMatchSet(this.ops["CreateSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeCreateWebACL(partialParams) {
        return this.client.createWebACL(this.ops["CreateWebACL"].apply(partialParams));
    }
    invokeCreateWebACLMigrationStack(partialParams) {
        return this.client.createWebACLMigrationStack(this.ops["CreateWebACLMigrationStack"].apply(partialParams));
    }
    invokeCreateXssMatchSet(partialParams) {
        return this.client.createXssMatchSet(this.ops["CreateXssMatchSet"].apply(partialParams));
    }
    invokeDeleteByteMatchSet(partialParams) {
        return this.client.deleteByteMatchSet(this.ops["DeleteByteMatchSet"].apply(partialParams));
    }
    invokeDeleteGeoMatchSet(partialParams) {
        return this.client.deleteGeoMatchSet(this.ops["DeleteGeoMatchSet"].apply(partialParams));
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
    invokeDeleteRateBasedRule(partialParams) {
        return this.client.deleteRateBasedRule(this.ops["DeleteRateBasedRule"].apply(partialParams));
    }
    invokeDeleteRegexMatchSet(partialParams) {
        return this.client.deleteRegexMatchSet(this.ops["DeleteRegexMatchSet"].apply(partialParams));
    }
    invokeDeleteRegexPatternSet(partialParams) {
        return this.client.deleteRegexPatternSet(this.ops["DeleteRegexPatternSet"].apply(partialParams));
    }
    invokeDeleteRule(partialParams) {
        return this.client.deleteRule(this.ops["DeleteRule"].apply(partialParams));
    }
    invokeDeleteRuleGroup(partialParams) {
        return this.client.deleteRuleGroup(this.ops["DeleteRuleGroup"].apply(partialParams));
    }
    invokeDeleteSizeConstraintSet(partialParams) {
        return this.client.deleteSizeConstraintSet(this.ops["DeleteSizeConstraintSet"].apply(partialParams));
    }
    invokeDeleteSqlInjectionMatchSet(partialParams) {
        return this.client.deleteSqlInjectionMatchSet(this.ops["DeleteSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeDeleteWebACL(partialParams) {
        return this.client.deleteWebACL(this.ops["DeleteWebACL"].apply(partialParams));
    }
    invokeDeleteXssMatchSet(partialParams) {
        return this.client.deleteXssMatchSet(this.ops["DeleteXssMatchSet"].apply(partialParams));
    }
    invokeGetByteMatchSet(partialParams) {
        return this.client.getByteMatchSet(this.ops["GetByteMatchSet"].apply(partialParams));
    }
    invokeGetChangeTokenStatus(partialParams) {
        return this.client.getChangeTokenStatus(this.ops["GetChangeTokenStatus"].apply(partialParams));
    }
    invokeGetGeoMatchSet(partialParams) {
        return this.client.getGeoMatchSet(this.ops["GetGeoMatchSet"].apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        return this.client.getIPSet(this.ops["GetIPSet"].apply(partialParams));
    }
    invokeGetLoggingConfiguration(partialParams) {
        return this.client.getLoggingConfiguration(this.ops["GetLoggingConfiguration"].apply(partialParams));
    }
    invokeGetPermissionPolicy(partialParams) {
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].apply(partialParams));
    }
    invokeGetRateBasedRule(partialParams) {
        return this.client.getRateBasedRule(this.ops["GetRateBasedRule"].apply(partialParams));
    }
    invokeGetRateBasedRuleManagedKeys(partialParams) {
        return this.client.getRateBasedRuleManagedKeys(this.ops["GetRateBasedRuleManagedKeys"].apply(partialParams));
    }
    invokeGetRegexMatchSet(partialParams) {
        return this.client.getRegexMatchSet(this.ops["GetRegexMatchSet"].apply(partialParams));
    }
    invokeGetRegexPatternSet(partialParams) {
        return this.client.getRegexPatternSet(this.ops["GetRegexPatternSet"].apply(partialParams));
    }
    invokeGetRule(partialParams) {
        return this.client.getRule(this.ops["GetRule"].apply(partialParams));
    }
    invokeGetRuleGroup(partialParams) {
        return this.client.getRuleGroup(this.ops["GetRuleGroup"].apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].apply(partialParams));
    }
    invokeGetSizeConstraintSet(partialParams) {
        return this.client.getSizeConstraintSet(this.ops["GetSizeConstraintSet"].apply(partialParams));
    }
    invokeGetSqlInjectionMatchSet(partialParams) {
        return this.client.getSqlInjectionMatchSet(this.ops["GetSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeGetWebACL(partialParams) {
        return this.client.getWebACL(this.ops["GetWebACL"].apply(partialParams));
    }
    invokeGetXssMatchSet(partialParams) {
        return this.client.getXssMatchSet(this.ops["GetXssMatchSet"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutLoggingConfiguration(partialParams) {
        return this.client.putLoggingConfiguration(this.ops["PutLoggingConfiguration"].apply(partialParams));
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
    invokeUpdateByteMatchSet(partialParams) {
        return this.client.updateByteMatchSet(this.ops["UpdateByteMatchSet"].apply(partialParams));
    }
    invokeUpdateGeoMatchSet(partialParams) {
        return this.client.updateGeoMatchSet(this.ops["UpdateGeoMatchSet"].apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        return this.client.updateIPSet(this.ops["UpdateIPSet"].apply(partialParams));
    }
    invokeUpdateRateBasedRule(partialParams) {
        return this.client.updateRateBasedRule(this.ops["UpdateRateBasedRule"].apply(partialParams));
    }
    invokeUpdateRegexMatchSet(partialParams) {
        return this.client.updateRegexMatchSet(this.ops["UpdateRegexMatchSet"].apply(partialParams));
    }
    invokeUpdateRegexPatternSet(partialParams) {
        return this.client.updateRegexPatternSet(this.ops["UpdateRegexPatternSet"].apply(partialParams));
    }
    invokeUpdateRule(partialParams) {
        return this.client.updateRule(this.ops["UpdateRule"].apply(partialParams));
    }
    invokeUpdateRuleGroup(partialParams) {
        return this.client.updateRuleGroup(this.ops["UpdateRuleGroup"].apply(partialParams));
    }
    invokeUpdateSizeConstraintSet(partialParams) {
        return this.client.updateSizeConstraintSet(this.ops["UpdateSizeConstraintSet"].apply(partialParams));
    }
    invokeUpdateSqlInjectionMatchSet(partialParams) {
        return this.client.updateSqlInjectionMatchSet(this.ops["UpdateSqlInjectionMatchSet"].apply(partialParams));
    }
    invokeUpdateWebACL(partialParams) {
        return this.client.updateWebACL(this.ops["UpdateWebACL"].apply(partialParams));
    }
    invokeUpdateXssMatchSet(partialParams) {
        return this.client.updateXssMatchSet(this.ops["UpdateXssMatchSet"].apply(partialParams));
    }
}
exports.default = default_1;
