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
const schema = require("../apis/accessanalyzer-2019-11-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.accessanalyzer.Analyzer {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AccessAnalyzer();
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
    invokeCancelPolicyGeneration(partialParams) {
        this.boot();
        return this.client.cancelPolicyGeneration(this.ops["CancelPolicyGeneration"].apply(partialParams));
    }
    invokeCreateAccessPreview(partialParams) {
        this.boot();
        return this.client.createAccessPreview(this.ops["CreateAccessPreview"].apply(partialParams));
    }
    invokeCreateAnalyzer(partialParams) {
        this.boot();
        return this.client.createAnalyzer(this.ops["CreateAnalyzer"].apply(partialParams));
    }
    invokeGetAccessPreview(partialParams) {
        this.boot();
        return this.client.getAccessPreview(this.ops["GetAccessPreview"].apply(partialParams));
    }
    invokeGetAnalyzedResource(partialParams) {
        this.boot();
        return this.client.getAnalyzedResource(this.ops["GetAnalyzedResource"].apply(partialParams));
    }
    invokeGetAnalyzer(partialParams) {
        this.boot();
        return this.client.getAnalyzer(this.ops["GetAnalyzer"].apply(partialParams));
    }
    invokeGetArchiveRule(partialParams) {
        this.boot();
        return this.client.getArchiveRule(this.ops["GetArchiveRule"].apply(partialParams));
    }
    invokeGetFinding(partialParams) {
        this.boot();
        return this.client.getFinding(this.ops["GetFinding"].apply(partialParams));
    }
    invokeGetGeneratedPolicy(partialParams) {
        this.boot();
        return this.client.getGeneratedPolicy(this.ops["GetGeneratedPolicy"].apply(partialParams));
    }
    invokeListAccessPreviewFindings(partialParams) {
        this.boot();
        return this.client.listAccessPreviewFindings(this.ops["ListAccessPreviewFindings"].apply(partialParams));
    }
    invokeListAccessPreviews(partialParams) {
        this.boot();
        return this.client.listAccessPreviews(this.ops["ListAccessPreviews"].apply(partialParams));
    }
    invokeListAnalyzedResources(partialParams) {
        this.boot();
        return this.client.listAnalyzedResources(this.ops["ListAnalyzedResources"].apply(partialParams));
    }
    invokeListAnalyzers(partialParams) {
        this.boot();
        return this.client.listAnalyzers(this.ops["ListAnalyzers"].apply(partialParams));
    }
    invokeListArchiveRules(partialParams) {
        this.boot();
        return this.client.listArchiveRules(this.ops["ListArchiveRules"].apply(partialParams));
    }
    invokeListFindings(partialParams) {
        this.boot();
        return this.client.listFindings(this.ops["ListFindings"].apply(partialParams));
    }
    invokeListPolicyGenerations(partialParams) {
        this.boot();
        return this.client.listPolicyGenerations(this.ops["ListPolicyGenerations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartPolicyGeneration(partialParams) {
        this.boot();
        return this.client.startPolicyGeneration(this.ops["StartPolicyGeneration"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeValidatePolicy(partialParams) {
        this.boot();
        return this.client.validatePolicy(this.ops["ValidatePolicy"].apply(partialParams));
    }
}
exports.default = default_1;
