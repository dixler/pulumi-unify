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
const schema = require("../apis/xray-2016-04-12.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.xray.EncryptionConfig {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.XRay();
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
    invokeBatchGetTraces(partialParams) {
        this.boot();
        return this.client.batchGetTraces(this.ops["BatchGetTraces"].apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        this.boot();
        return this.client.createGroup(this.ops["CreateGroup"].apply(partialParams));
    }
    invokeCreateSamplingRule(partialParams) {
        this.boot();
        return this.client.createSamplingRule(this.ops["CreateSamplingRule"].apply(partialParams));
    }
    invokeDeleteGroup(partialParams) {
        this.boot();
        return this.client.deleteGroup(this.ops["DeleteGroup"].apply(partialParams));
    }
    invokeDeleteSamplingRule(partialParams) {
        this.boot();
        return this.client.deleteSamplingRule(this.ops["DeleteSamplingRule"].apply(partialParams));
    }
    invokeGetEncryptionConfig(partialParams) {
        this.boot();
        return this.client.getEncryptionConfig(this.ops["GetEncryptionConfig"].apply(partialParams));
    }
    invokeGetGroup(partialParams) {
        this.boot();
        return this.client.getGroup(this.ops["GetGroup"].apply(partialParams));
    }
    invokeGetGroups(partialParams) {
        this.boot();
        return this.client.getGroups(this.ops["GetGroups"].apply(partialParams));
    }
    invokeGetInsight(partialParams) {
        this.boot();
        return this.client.getInsight(this.ops["GetInsight"].apply(partialParams));
    }
    invokeGetInsightEvents(partialParams) {
        this.boot();
        return this.client.getInsightEvents(this.ops["GetInsightEvents"].apply(partialParams));
    }
    invokeGetInsightImpactGraph(partialParams) {
        this.boot();
        return this.client.getInsightImpactGraph(this.ops["GetInsightImpactGraph"].apply(partialParams));
    }
    invokeGetInsightSummaries(partialParams) {
        this.boot();
        return this.client.getInsightSummaries(this.ops["GetInsightSummaries"].apply(partialParams));
    }
    invokeGetSamplingRules(partialParams) {
        this.boot();
        return this.client.getSamplingRules(this.ops["GetSamplingRules"].apply(partialParams));
    }
    invokeGetSamplingStatisticSummaries(partialParams) {
        this.boot();
        return this.client.getSamplingStatisticSummaries(this.ops["GetSamplingStatisticSummaries"].apply(partialParams));
    }
    invokeGetSamplingTargets(partialParams) {
        this.boot();
        return this.client.getSamplingTargets(this.ops["GetSamplingTargets"].apply(partialParams));
    }
    invokeGetServiceGraph(partialParams) {
        this.boot();
        return this.client.getServiceGraph(this.ops["GetServiceGraph"].apply(partialParams));
    }
    invokeGetTimeSeriesServiceStatistics(partialParams) {
        this.boot();
        return this.client.getTimeSeriesServiceStatistics(this.ops["GetTimeSeriesServiceStatistics"].apply(partialParams));
    }
    invokeGetTraceGraph(partialParams) {
        this.boot();
        return this.client.getTraceGraph(this.ops["GetTraceGraph"].apply(partialParams));
    }
    invokeGetTraceSummaries(partialParams) {
        this.boot();
        return this.client.getTraceSummaries(this.ops["GetTraceSummaries"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutEncryptionConfig(partialParams) {
        this.boot();
        return this.client.putEncryptionConfig(this.ops["PutEncryptionConfig"].apply(partialParams));
    }
    invokePutTelemetryRecords(partialParams) {
        this.boot();
        return this.client.putTelemetryRecords(this.ops["PutTelemetryRecords"].apply(partialParams));
    }
    invokePutTraceSegments(partialParams) {
        this.boot();
        return this.client.putTraceSegments(this.ops["PutTraceSegments"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateGroup(partialParams) {
        this.boot();
        return this.client.updateGroup(this.ops["UpdateGroup"].apply(partialParams));
    }
    invokeUpdateSamplingRule(partialParams) {
        this.boot();
        return this.client.updateSamplingRule(this.ops["UpdateSamplingRule"].apply(partialParams));
    }
}
exports.default = default_1;
