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
        this.client = new awssdk.Inspector();
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
    invokeAddAttributesToFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addAttributesToFindings(this.ops["AddAttributesToFindings"].applicator.apply(partialParams));
    }
    invokeCreateAssessmentTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssessmentTarget(this.ops["CreateAssessmentTarget"].applicator.apply(partialParams));
    }
    invokeCreateAssessmentTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssessmentTemplate(this.ops["CreateAssessmentTemplate"].applicator.apply(partialParams));
    }
    invokeCreateExclusionsPreview(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createExclusionsPreview(this.ops["CreateExclusionsPreview"].applicator.apply(partialParams));
    }
    invokeCreateResourceGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResourceGroup(this.ops["CreateResourceGroup"].applicator.apply(partialParams));
    }
    invokeDeleteAssessmentRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssessmentRun(this.ops["DeleteAssessmentRun"].applicator.apply(partialParams));
    }
    invokeDeleteAssessmentTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssessmentTarget(this.ops["DeleteAssessmentTarget"].applicator.apply(partialParams));
    }
    invokeDeleteAssessmentTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssessmentTemplate(this.ops["DeleteAssessmentTemplate"].applicator.apply(partialParams));
    }
    invokeDescribeAssessmentRuns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssessmentRuns(this.ops["DescribeAssessmentRuns"].applicator.apply(partialParams));
    }
    invokeDescribeAssessmentTargets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssessmentTargets(this.ops["DescribeAssessmentTargets"].applicator.apply(partialParams));
    }
    invokeDescribeAssessmentTemplates(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssessmentTemplates(this.ops["DescribeAssessmentTemplates"].applicator.apply(partialParams));
    }
    invokeDescribeExclusions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExclusions(this.ops["DescribeExclusions"].applicator.apply(partialParams));
    }
    invokeDescribeFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFindings(this.ops["DescribeFindings"].applicator.apply(partialParams));
    }
    invokeDescribeResourceGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeResourceGroups(this.ops["DescribeResourceGroups"].applicator.apply(partialParams));
    }
    invokeDescribeRulesPackages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRulesPackages(this.ops["DescribeRulesPackages"].applicator.apply(partialParams));
    }
    invokeGetAssessmentReport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAssessmentReport(this.ops["GetAssessmentReport"].applicator.apply(partialParams));
    }
    invokeGetExclusionsPreview(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExclusionsPreview(this.ops["GetExclusionsPreview"].applicator.apply(partialParams));
    }
    invokeGetTelemetryMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTelemetryMetadata(this.ops["GetTelemetryMetadata"].applicator.apply(partialParams));
    }
    invokeListAssessmentRunAgents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssessmentRunAgents(this.ops["ListAssessmentRunAgents"].applicator.apply(partialParams));
    }
    invokeListExclusions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listExclusions(this.ops["ListExclusions"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePreviewAgents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.previewAgents(this.ops["PreviewAgents"].applicator.apply(partialParams));
    }
    invokeRegisterCrossAccountAccessRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCrossAccountAccessRole(this.ops["RegisterCrossAccountAccessRole"].applicator.apply(partialParams));
    }
    invokeRemoveAttributesFromFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeAttributesFromFindings(this.ops["RemoveAttributesFromFindings"].applicator.apply(partialParams));
    }
    invokeSetTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTagsForResource(this.ops["SetTagsForResource"].applicator.apply(partialParams));
    }
    invokeStartAssessmentRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAssessmentRun(this.ops["StartAssessmentRun"].applicator.apply(partialParams));
    }
    invokeStopAssessmentRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAssessmentRun(this.ops["StopAssessmentRun"].applicator.apply(partialParams));
    }
    invokeSubscribeToEvent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.subscribeToEvent(this.ops["SubscribeToEvent"].applicator.apply(partialParams));
    }
    invokeUnsubscribeFromEvent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unsubscribeFromEvent(this.ops["UnsubscribeFromEvent"].applicator.apply(partialParams));
    }
    invokeUpdateAssessmentTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssessmentTarget(this.ops["UpdateAssessmentTarget"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
