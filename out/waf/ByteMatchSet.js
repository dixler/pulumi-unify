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
class default_1 extends aws.waf.ByteMatchSet {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.WAF();
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
    invokeCreateByteMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createByteMatchSet(this.ops["CreateByteMatchSet"].applicator.apply(partialParams));
    }
    invokeCreateGeoMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGeoMatchSet(this.ops["CreateGeoMatchSet"].applicator.apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIPSet(this.ops["CreateIPSet"].applicator.apply(partialParams));
    }
    invokeCreateRateBasedRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRateBasedRule(this.ops["CreateRateBasedRule"].applicator.apply(partialParams));
    }
    invokeCreateRegexMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegexMatchSet(this.ops["CreateRegexMatchSet"].applicator.apply(partialParams));
    }
    invokeCreateRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegexPatternSet(this.ops["CreateRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeCreateRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRule(this.ops["CreateRule"].applicator.apply(partialParams));
    }
    invokeCreateRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRuleGroup(this.ops["CreateRuleGroup"].applicator.apply(partialParams));
    }
    invokeCreateSizeConstraintSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSizeConstraintSet(this.ops["CreateSizeConstraintSet"].applicator.apply(partialParams));
    }
    invokeCreateSqlInjectionMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSqlInjectionMatchSet(this.ops["CreateSqlInjectionMatchSet"].applicator.apply(partialParams));
    }
    invokeCreateWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebACL(this.ops["CreateWebACL"].applicator.apply(partialParams));
    }
    invokeCreateWebACLMigrationStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebACLMigrationStack(this.ops["CreateWebACLMigrationStack"].applicator.apply(partialParams));
    }
    invokeCreateXssMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createXssMatchSet(this.ops["CreateXssMatchSet"].applicator.apply(partialParams));
    }
    invokeDeleteByteMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteByteMatchSet(this.ops["DeleteByteMatchSet"].applicator.apply(partialParams));
    }
    invokeDeleteGeoMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGeoMatchSet(this.ops["DeleteGeoMatchSet"].applicator.apply(partialParams));
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
    invokeDeleteRateBasedRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRateBasedRule(this.ops["DeleteRateBasedRule"].applicator.apply(partialParams));
    }
    invokeDeleteRegexMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegexMatchSet(this.ops["DeleteRegexMatchSet"].applicator.apply(partialParams));
    }
    invokeDeleteRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegexPatternSet(this.ops["DeleteRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeDeleteRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRule(this.ops["DeleteRule"].applicator.apply(partialParams));
    }
    invokeDeleteRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRuleGroup(this.ops["DeleteRuleGroup"].applicator.apply(partialParams));
    }
    invokeDeleteSizeConstraintSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSizeConstraintSet(this.ops["DeleteSizeConstraintSet"].applicator.apply(partialParams));
    }
    invokeDeleteSqlInjectionMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSqlInjectionMatchSet(this.ops["DeleteSqlInjectionMatchSet"].applicator.apply(partialParams));
    }
    invokeDeleteWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebACL(this.ops["DeleteWebACL"].applicator.apply(partialParams));
    }
    invokeDeleteXssMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteXssMatchSet(this.ops["DeleteXssMatchSet"].applicator.apply(partialParams));
    }
    invokeGetByteMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getByteMatchSet(this.ops["GetByteMatchSet"].applicator.apply(partialParams));
    }
    invokeGetChangeTokenStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChangeTokenStatus(this.ops["GetChangeTokenStatus"].applicator.apply(partialParams));
    }
    invokeGetGeoMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGeoMatchSet(this.ops["GetGeoMatchSet"].applicator.apply(partialParams));
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
    invokeGetPermissionPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].applicator.apply(partialParams));
    }
    invokeGetRateBasedRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRateBasedRule(this.ops["GetRateBasedRule"].applicator.apply(partialParams));
    }
    invokeGetRateBasedRuleManagedKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRateBasedRuleManagedKeys(this.ops["GetRateBasedRuleManagedKeys"].applicator.apply(partialParams));
    }
    invokeGetRegexMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegexMatchSet(this.ops["GetRegexMatchSet"].applicator.apply(partialParams));
    }
    invokeGetRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegexPatternSet(this.ops["GetRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeGetRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRule(this.ops["GetRule"].applicator.apply(partialParams));
    }
    invokeGetRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRuleGroup(this.ops["GetRuleGroup"].applicator.apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].applicator.apply(partialParams));
    }
    invokeGetSizeConstraintSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSizeConstraintSet(this.ops["GetSizeConstraintSet"].applicator.apply(partialParams));
    }
    invokeGetSqlInjectionMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSqlInjectionMatchSet(this.ops["GetSqlInjectionMatchSet"].applicator.apply(partialParams));
    }
    invokeGetWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebACL(this.ops["GetWebACL"].applicator.apply(partialParams));
    }
    invokeGetXssMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getXssMatchSet(this.ops["GetXssMatchSet"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePutLoggingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLoggingConfiguration(this.ops["PutLoggingConfiguration"].applicator.apply(partialParams));
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
    invokeUpdateByteMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateByteMatchSet(this.ops["UpdateByteMatchSet"].applicator.apply(partialParams));
    }
    invokeUpdateGeoMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGeoMatchSet(this.ops["UpdateGeoMatchSet"].applicator.apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIPSet(this.ops["UpdateIPSet"].applicator.apply(partialParams));
    }
    invokeUpdateRateBasedRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRateBasedRule(this.ops["UpdateRateBasedRule"].applicator.apply(partialParams));
    }
    invokeUpdateRegexMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegexMatchSet(this.ops["UpdateRegexMatchSet"].applicator.apply(partialParams));
    }
    invokeUpdateRegexPatternSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegexPatternSet(this.ops["UpdateRegexPatternSet"].applicator.apply(partialParams));
    }
    invokeUpdateRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRule(this.ops["UpdateRule"].applicator.apply(partialParams));
    }
    invokeUpdateRuleGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRuleGroup(this.ops["UpdateRuleGroup"].applicator.apply(partialParams));
    }
    invokeUpdateSizeConstraintSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSizeConstraintSet(this.ops["UpdateSizeConstraintSet"].applicator.apply(partialParams));
    }
    invokeUpdateSqlInjectionMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSqlInjectionMatchSet(this.ops["UpdateSqlInjectionMatchSet"].applicator.apply(partialParams));
    }
    invokeUpdateWebACL(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebACL(this.ops["UpdateWebACL"].applicator.apply(partialParams));
    }
    invokeUpdateXssMatchSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateXssMatchSet(this.ops["UpdateXssMatchSet"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
