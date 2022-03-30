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
class default_1 extends aws.xray.Group {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.XRay();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/xray-2016-04-12.normal.json"), this.client);
    }
    invokeBatchGetTraces(partialParams) {
        return this.client.batchGetTraces(this.ops["BatchGetTraces"].apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        return this.client.createGroup(this.ops["CreateGroup"].apply(partialParams));
    }
    invokeCreateSamplingRule(partialParams) {
        return this.client.createSamplingRule(this.ops["CreateSamplingRule"].apply(partialParams));
    }
    invokeGetInsight(partialParams) {
        return this.client.getInsight(this.ops["GetInsight"].apply(partialParams));
    }
    invokeGetInsightEvents(partialParams) {
        return this.client.getInsightEvents(this.ops["GetInsightEvents"].apply(partialParams));
    }
    invokeGetInsightImpactGraph(partialParams) {
        return this.client.getInsightImpactGraph(this.ops["GetInsightImpactGraph"].apply(partialParams));
    }
    invokeGetInsightSummaries(partialParams) {
        return this.client.getInsightSummaries(this.ops["GetInsightSummaries"].apply(partialParams));
    }
    invokeGetSamplingTargets(partialParams) {
        return this.client.getSamplingTargets(this.ops["GetSamplingTargets"].apply(partialParams));
    }
    invokeGetServiceGraph(partialParams) {
        return this.client.getServiceGraph(this.ops["GetServiceGraph"].apply(partialParams));
    }
    invokeGetTimeSeriesServiceStatistics(partialParams) {
        return this.client.getTimeSeriesServiceStatistics(this.ops["GetTimeSeriesServiceStatistics"].apply(partialParams));
    }
    invokeGetTraceGraph(partialParams) {
        return this.client.getTraceGraph(this.ops["GetTraceGraph"].apply(partialParams));
    }
    invokeGetTraceSummaries(partialParams) {
        return this.client.getTraceSummaries(this.ops["GetTraceSummaries"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutEncryptionConfig(partialParams) {
        return this.client.putEncryptionConfig(this.ops["PutEncryptionConfig"].apply(partialParams));
    }
    invokePutTelemetryRecords(partialParams) {
        return this.client.putTelemetryRecords(this.ops["PutTelemetryRecords"].apply(partialParams));
    }
    invokePutTraceSegments(partialParams) {
        return this.client.putTraceSegments(this.ops["PutTraceSegments"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateSamplingRule(partialParams) {
        return this.client.updateSamplingRule(this.ops["UpdateSamplingRule"].apply(partialParams));
    }
}
exports.default = default_1;
