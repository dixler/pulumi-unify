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
class default_1 extends aws.inspector.AssessmentTemplate {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Inspector();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/inspector-2016-02-16.normal.json"), this.client);
    }
    invokeAddAttributesToFindings(partialParams) {
        return this.client.addAttributesToFindings(this.ops["AddAttributesToFindings"].apply(partialParams));
    }
    invokeCreateAssessmentTarget(partialParams) {
        return this.client.createAssessmentTarget(this.ops["CreateAssessmentTarget"].apply(partialParams));
    }
    invokeCreateAssessmentTemplate(partialParams) {
        return this.client.createAssessmentTemplate(this.ops["CreateAssessmentTemplate"].apply(partialParams));
    }
    invokeCreateExclusionsPreview(partialParams) {
        return this.client.createExclusionsPreview(this.ops["CreateExclusionsPreview"].apply(partialParams));
    }
    invokeCreateResourceGroup(partialParams) {
        return this.client.createResourceGroup(this.ops["CreateResourceGroup"].apply(partialParams));
    }
    invokeDeleteAssessmentRun(partialParams) {
        return this.client.deleteAssessmentRun(this.ops["DeleteAssessmentRun"].apply(partialParams));
    }
    invokeDeleteAssessmentTarget(partialParams) {
        return this.client.deleteAssessmentTarget(this.ops["DeleteAssessmentTarget"].apply(partialParams));
    }
    invokeDeleteAssessmentTemplate(partialParams) {
        return this.client.deleteAssessmentTemplate(this.ops["DeleteAssessmentTemplate"].apply(partialParams));
    }
    invokeDescribeAssessmentRuns(partialParams) {
        return this.client.describeAssessmentRuns(this.ops["DescribeAssessmentRuns"].apply(partialParams));
    }
    invokeDescribeAssessmentTargets(partialParams) {
        return this.client.describeAssessmentTargets(this.ops["DescribeAssessmentTargets"].apply(partialParams));
    }
    invokeDescribeAssessmentTemplates(partialParams) {
        return this.client.describeAssessmentTemplates(this.ops["DescribeAssessmentTemplates"].apply(partialParams));
    }
    invokeDescribeExclusions(partialParams) {
        return this.client.describeExclusions(this.ops["DescribeExclusions"].apply(partialParams));
    }
    invokeDescribeFindings(partialParams) {
        return this.client.describeFindings(this.ops["DescribeFindings"].apply(partialParams));
    }
    invokeDescribeResourceGroups(partialParams) {
        return this.client.describeResourceGroups(this.ops["DescribeResourceGroups"].apply(partialParams));
    }
    invokeDescribeRulesPackages(partialParams) {
        return this.client.describeRulesPackages(this.ops["DescribeRulesPackages"].apply(partialParams));
    }
    invokeGetAssessmentReport(partialParams) {
        return this.client.getAssessmentReport(this.ops["GetAssessmentReport"].apply(partialParams));
    }
    invokeGetExclusionsPreview(partialParams) {
        return this.client.getExclusionsPreview(this.ops["GetExclusionsPreview"].apply(partialParams));
    }
    invokeGetTelemetryMetadata(partialParams) {
        return this.client.getTelemetryMetadata(this.ops["GetTelemetryMetadata"].apply(partialParams));
    }
    invokeListAssessmentRunAgents(partialParams) {
        return this.client.listAssessmentRunAgents(this.ops["ListAssessmentRunAgents"].apply(partialParams));
    }
    invokeListExclusions(partialParams) {
        return this.client.listExclusions(this.ops["ListExclusions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePreviewAgents(partialParams) {
        return this.client.previewAgents(this.ops["PreviewAgents"].apply(partialParams));
    }
    invokeRegisterCrossAccountAccessRole(partialParams) {
        return this.client.registerCrossAccountAccessRole(this.ops["RegisterCrossAccountAccessRole"].apply(partialParams));
    }
    invokeRemoveAttributesFromFindings(partialParams) {
        return this.client.removeAttributesFromFindings(this.ops["RemoveAttributesFromFindings"].apply(partialParams));
    }
    invokeSetTagsForResource(partialParams) {
        return this.client.setTagsForResource(this.ops["SetTagsForResource"].apply(partialParams));
    }
    invokeStartAssessmentRun(partialParams) {
        return this.client.startAssessmentRun(this.ops["StartAssessmentRun"].apply(partialParams));
    }
    invokeStopAssessmentRun(partialParams) {
        return this.client.stopAssessmentRun(this.ops["StopAssessmentRun"].apply(partialParams));
    }
    invokeSubscribeToEvent(partialParams) {
        return this.client.subscribeToEvent(this.ops["SubscribeToEvent"].apply(partialParams));
    }
    invokeUnsubscribeFromEvent(partialParams) {
        return this.client.unsubscribeFromEvent(this.ops["UnsubscribeFromEvent"].apply(partialParams));
    }
    invokeUpdateAssessmentTarget(partialParams) {
        return this.client.updateAssessmentTarget(this.ops["UpdateAssessmentTarget"].apply(partialParams));
    }
}
exports.default = default_1;
