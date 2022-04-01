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
const schema = require("../apis/inspector-2016-02-16.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.inspector.AssessmentTarget {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Inspector();
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
    invokeAddAttributesToFindings(partialParams) {
        this.boot();
        return this.client.addAttributesToFindings(this.ops["AddAttributesToFindings"].apply(partialParams));
    }
    invokeCreateAssessmentTarget(partialParams) {
        this.boot();
        return this.client.createAssessmentTarget(this.ops["CreateAssessmentTarget"].apply(partialParams));
    }
    invokeCreateAssessmentTemplate(partialParams) {
        this.boot();
        return this.client.createAssessmentTemplate(this.ops["CreateAssessmentTemplate"].apply(partialParams));
    }
    invokeCreateExclusionsPreview(partialParams) {
        this.boot();
        return this.client.createExclusionsPreview(this.ops["CreateExclusionsPreview"].apply(partialParams));
    }
    invokeCreateResourceGroup(partialParams) {
        this.boot();
        return this.client.createResourceGroup(this.ops["CreateResourceGroup"].apply(partialParams));
    }
    invokeDescribeAssessmentRuns(partialParams) {
        this.boot();
        return this.client.describeAssessmentRuns(this.ops["DescribeAssessmentRuns"].apply(partialParams));
    }
    invokeDescribeAssessmentTargets(partialParams) {
        this.boot();
        return this.client.describeAssessmentTargets(this.ops["DescribeAssessmentTargets"].apply(partialParams));
    }
    invokeDescribeAssessmentTemplates(partialParams) {
        this.boot();
        return this.client.describeAssessmentTemplates(this.ops["DescribeAssessmentTemplates"].apply(partialParams));
    }
    invokeDescribeExclusions(partialParams) {
        this.boot();
        return this.client.describeExclusions(this.ops["DescribeExclusions"].apply(partialParams));
    }
    invokeDescribeFindings(partialParams) {
        this.boot();
        return this.client.describeFindings(this.ops["DescribeFindings"].apply(partialParams));
    }
    invokeDescribeResourceGroups(partialParams) {
        this.boot();
        return this.client.describeResourceGroups(this.ops["DescribeResourceGroups"].apply(partialParams));
    }
    invokeDescribeRulesPackages(partialParams) {
        this.boot();
        return this.client.describeRulesPackages(this.ops["DescribeRulesPackages"].apply(partialParams));
    }
    invokeGetAssessmentReport(partialParams) {
        this.boot();
        return this.client.getAssessmentReport(this.ops["GetAssessmentReport"].apply(partialParams));
    }
    invokeGetExclusionsPreview(partialParams) {
        this.boot();
        return this.client.getExclusionsPreview(this.ops["GetExclusionsPreview"].apply(partialParams));
    }
    invokeGetTelemetryMetadata(partialParams) {
        this.boot();
        return this.client.getTelemetryMetadata(this.ops["GetTelemetryMetadata"].apply(partialParams));
    }
    invokeListAssessmentRunAgents(partialParams) {
        this.boot();
        return this.client.listAssessmentRunAgents(this.ops["ListAssessmentRunAgents"].apply(partialParams));
    }
    invokeListAssessmentRuns(partialParams) {
        this.boot();
        return this.client.listAssessmentRuns(this.ops["ListAssessmentRuns"].apply(partialParams));
    }
    invokeListAssessmentTargets(partialParams) {
        this.boot();
        return this.client.listAssessmentTargets(this.ops["ListAssessmentTargets"].apply(partialParams));
    }
    invokeListAssessmentTemplates(partialParams) {
        this.boot();
        return this.client.listAssessmentTemplates(this.ops["ListAssessmentTemplates"].apply(partialParams));
    }
    invokeListEventSubscriptions(partialParams) {
        this.boot();
        return this.client.listEventSubscriptions(this.ops["ListEventSubscriptions"].apply(partialParams));
    }
    invokeListExclusions(partialParams) {
        this.boot();
        return this.client.listExclusions(this.ops["ListExclusions"].apply(partialParams));
    }
    invokeListFindings(partialParams) {
        this.boot();
        return this.client.listFindings(this.ops["ListFindings"].apply(partialParams));
    }
    invokeListRulesPackages(partialParams) {
        this.boot();
        return this.client.listRulesPackages(this.ops["ListRulesPackages"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePreviewAgents(partialParams) {
        this.boot();
        return this.client.previewAgents(this.ops["PreviewAgents"].apply(partialParams));
    }
    invokeRemoveAttributesFromFindings(partialParams) {
        this.boot();
        return this.client.removeAttributesFromFindings(this.ops["RemoveAttributesFromFindings"].apply(partialParams));
    }
    invokeStartAssessmentRun(partialParams) {
        this.boot();
        return this.client.startAssessmentRun(this.ops["StartAssessmentRun"].apply(partialParams));
    }
}
exports.default = default_1;
