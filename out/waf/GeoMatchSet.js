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
class default_1 extends aws.waf.GeoMatchSet {
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
    invokeCreateXssMatchSet(partialParams) {
        this.boot();
        return this.client.createXssMatchSet(this.ops["CreateXssMatchSet"].apply(partialParams));
    }
}
exports.default = default_1;
