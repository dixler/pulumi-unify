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
class default_1 extends aws.accessanalyzer.Analyzer {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AccessAnalyzer();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/accessanalyzer-2019-11-01.normal.json"), this.client);
    }
    invokeApplyArchiveRule(partialParams) {
        return this.client.applyArchiveRule(this.ops["ApplyArchiveRule"].apply(partialParams));
    }
    invokeCancelPolicyGeneration(partialParams) {
        return this.client.cancelPolicyGeneration(this.ops["CancelPolicyGeneration"].apply(partialParams));
    }
    invokeCreateAccessPreview(partialParams) {
        return this.client.createAccessPreview(this.ops["CreateAccessPreview"].apply(partialParams));
    }
    invokeCreateAnalyzer(partialParams) {
        return this.client.createAnalyzer(this.ops["CreateAnalyzer"].apply(partialParams));
    }
    invokeCreateArchiveRule(partialParams) {
        return this.client.createArchiveRule(this.ops["CreateArchiveRule"].apply(partialParams));
    }
    invokeDeleteAnalyzer(partialParams) {
        return this.client.deleteAnalyzer(this.ops["DeleteAnalyzer"].apply(partialParams));
    }
    invokeDeleteArchiveRule(partialParams) {
        return this.client.deleteArchiveRule(this.ops["DeleteArchiveRule"].apply(partialParams));
    }
    invokeGetAccessPreview(partialParams) {
        return this.client.getAccessPreview(this.ops["GetAccessPreview"].apply(partialParams));
    }
    invokeGetAnalyzedResource(partialParams) {
        return this.client.getAnalyzedResource(this.ops["GetAnalyzedResource"].apply(partialParams));
    }
    invokeGetAnalyzer(partialParams) {
        return this.client.getAnalyzer(this.ops["GetAnalyzer"].apply(partialParams));
    }
    invokeGetArchiveRule(partialParams) {
        return this.client.getArchiveRule(this.ops["GetArchiveRule"].apply(partialParams));
    }
    invokeGetFinding(partialParams) {
        return this.client.getFinding(this.ops["GetFinding"].apply(partialParams));
    }
    invokeGetGeneratedPolicy(partialParams) {
        return this.client.getGeneratedPolicy(this.ops["GetGeneratedPolicy"].apply(partialParams));
    }
    invokeListAccessPreviewFindings(partialParams) {
        return this.client.listAccessPreviewFindings(this.ops["ListAccessPreviewFindings"].apply(partialParams));
    }
    invokeListAccessPreviews(partialParams) {
        return this.client.listAccessPreviews(this.ops["ListAccessPreviews"].apply(partialParams));
    }
    invokeListAnalyzedResources(partialParams) {
        return this.client.listAnalyzedResources(this.ops["ListAnalyzedResources"].apply(partialParams));
    }
    invokeListArchiveRules(partialParams) {
        return this.client.listArchiveRules(this.ops["ListArchiveRules"].apply(partialParams));
    }
    invokeListFindings(partialParams) {
        return this.client.listFindings(this.ops["ListFindings"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartPolicyGeneration(partialParams) {
        return this.client.startPolicyGeneration(this.ops["StartPolicyGeneration"].apply(partialParams));
    }
    invokeStartResourceScan(partialParams) {
        return this.client.startResourceScan(this.ops["StartResourceScan"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateArchiveRule(partialParams) {
        return this.client.updateArchiveRule(this.ops["UpdateArchiveRule"].apply(partialParams));
    }
    invokeUpdateFindings(partialParams) {
        return this.client.updateFindings(this.ops["UpdateFindings"].apply(partialParams));
    }
    invokeValidatePolicy(partialParams) {
        return this.client.validatePolicy(this.ops["ValidatePolicy"].apply(partialParams));
    }
}
exports.default = default_1;
