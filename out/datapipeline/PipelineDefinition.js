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
class default_1 extends aws.datapipeline.PipelineDefinition {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DataPipeline();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/datapipeline-2012-10-29.normal.json"), this.client);
    }
    invokeActivatePipeline(partialParams) {
        return this.client.activatePipeline(this.ops["ActivatePipeline"].apply(partialParams));
    }
    invokeAddTags(partialParams) {
        return this.client.addTags(this.ops["AddTags"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeDeactivatePipeline(partialParams) {
        return this.client.deactivatePipeline(this.ops["DeactivatePipeline"].apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        return this.client.deletePipeline(this.ops["DeletePipeline"].apply(partialParams));
    }
    invokeDescribeObjects(partialParams) {
        return this.client.describeObjects(this.ops["DescribeObjects"].apply(partialParams));
    }
    invokeDescribePipelines(partialParams) {
        return this.client.describePipelines(this.ops["DescribePipelines"].apply(partialParams));
    }
    invokeEvaluateExpression(partialParams) {
        return this.client.evaluateExpression(this.ops["EvaluateExpression"].apply(partialParams));
    }
    invokeGetPipelineDefinition(partialParams) {
        return this.client.getPipelineDefinition(this.ops["GetPipelineDefinition"].apply(partialParams));
    }
    invokePollForTask(partialParams) {
        return this.client.pollForTask(this.ops["PollForTask"].apply(partialParams));
    }
    invokePutPipelineDefinition(partialParams) {
        return this.client.putPipelineDefinition(this.ops["PutPipelineDefinition"].apply(partialParams));
    }
    invokeQueryObjects(partialParams) {
        return this.client.queryObjects(this.ops["QueryObjects"].apply(partialParams));
    }
    invokeRemoveTags(partialParams) {
        return this.client.removeTags(this.ops["RemoveTags"].apply(partialParams));
    }
    invokeReportTaskProgress(partialParams) {
        return this.client.reportTaskProgress(this.ops["ReportTaskProgress"].apply(partialParams));
    }
    invokeReportTaskRunnerHeartbeat(partialParams) {
        return this.client.reportTaskRunnerHeartbeat(this.ops["ReportTaskRunnerHeartbeat"].apply(partialParams));
    }
    invokeSetStatus(partialParams) {
        return this.client.setStatus(this.ops["SetStatus"].apply(partialParams));
    }
    invokeSetTaskStatus(partialParams) {
        return this.client.setTaskStatus(this.ops["SetTaskStatus"].apply(partialParams));
    }
    invokeValidatePipelineDefinition(partialParams) {
        return this.client.validatePipelineDefinition(this.ops["ValidatePipelineDefinition"].apply(partialParams));
    }
}
exports.default = default_1;
