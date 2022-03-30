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
class default_1 extends aws.codepipeline.Pipeline {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodePipeline();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/codepipeline-2015-07-09.normal.json"), this.client);
    }
    invokeAcknowledgeJob(partialParams) {
        return this.client.acknowledgeJob(this.ops["AcknowledgeJob"].apply(partialParams));
    }
    invokeAcknowledgeThirdPartyJob(partialParams) {
        return this.client.acknowledgeThirdPartyJob(this.ops["AcknowledgeThirdPartyJob"].apply(partialParams));
    }
    invokeCreateCustomActionType(partialParams) {
        return this.client.createCustomActionType(this.ops["CreateCustomActionType"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeDeleteCustomActionType(partialParams) {
        return this.client.deleteCustomActionType(this.ops["DeleteCustomActionType"].apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        return this.client.deletePipeline(this.ops["DeletePipeline"].apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].apply(partialParams));
    }
    invokeDisableStageTransition(partialParams) {
        return this.client.disableStageTransition(this.ops["DisableStageTransition"].apply(partialParams));
    }
    invokeEnableStageTransition(partialParams) {
        return this.client.enableStageTransition(this.ops["EnableStageTransition"].apply(partialParams));
    }
    invokeGetActionType(partialParams) {
        return this.client.getActionType(this.ops["GetActionType"].apply(partialParams));
    }
    invokeGetJobDetails(partialParams) {
        return this.client.getJobDetails(this.ops["GetJobDetails"].apply(partialParams));
    }
    invokeGetPipeline(partialParams) {
        return this.client.getPipeline(this.ops["GetPipeline"].apply(partialParams));
    }
    invokeGetPipelineExecution(partialParams) {
        return this.client.getPipelineExecution(this.ops["GetPipelineExecution"].apply(partialParams));
    }
    invokeGetPipelineState(partialParams) {
        return this.client.getPipelineState(this.ops["GetPipelineState"].apply(partialParams));
    }
    invokeGetThirdPartyJobDetails(partialParams) {
        return this.client.getThirdPartyJobDetails(this.ops["GetThirdPartyJobDetails"].apply(partialParams));
    }
    invokeListActionExecutions(partialParams) {
        return this.client.listActionExecutions(this.ops["ListActionExecutions"].apply(partialParams));
    }
    invokeListPipelineExecutions(partialParams) {
        return this.client.listPipelineExecutions(this.ops["ListPipelineExecutions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePollForJobs(partialParams) {
        return this.client.pollForJobs(this.ops["PollForJobs"].apply(partialParams));
    }
    invokePollForThirdPartyJobs(partialParams) {
        return this.client.pollForThirdPartyJobs(this.ops["PollForThirdPartyJobs"].apply(partialParams));
    }
    invokePutActionRevision(partialParams) {
        return this.client.putActionRevision(this.ops["PutActionRevision"].apply(partialParams));
    }
    invokePutApprovalResult(partialParams) {
        return this.client.putApprovalResult(this.ops["PutApprovalResult"].apply(partialParams));
    }
    invokePutJobFailureResult(partialParams) {
        return this.client.putJobFailureResult(this.ops["PutJobFailureResult"].apply(partialParams));
    }
    invokePutJobSuccessResult(partialParams) {
        return this.client.putJobSuccessResult(this.ops["PutJobSuccessResult"].apply(partialParams));
    }
    invokePutThirdPartyJobFailureResult(partialParams) {
        return this.client.putThirdPartyJobFailureResult(this.ops["PutThirdPartyJobFailureResult"].apply(partialParams));
    }
    invokePutThirdPartyJobSuccessResult(partialParams) {
        return this.client.putThirdPartyJobSuccessResult(this.ops["PutThirdPartyJobSuccessResult"].apply(partialParams));
    }
    invokePutWebhook(partialParams) {
        return this.client.putWebhook(this.ops["PutWebhook"].apply(partialParams));
    }
    invokeRetryStageExecution(partialParams) {
        return this.client.retryStageExecution(this.ops["RetryStageExecution"].apply(partialParams));
    }
    invokeStartPipelineExecution(partialParams) {
        return this.client.startPipelineExecution(this.ops["StartPipelineExecution"].apply(partialParams));
    }
    invokeStopPipelineExecution(partialParams) {
        return this.client.stopPipelineExecution(this.ops["StopPipelineExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateActionType(partialParams) {
        return this.client.updateActionType(this.ops["UpdateActionType"].apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        return this.client.updatePipeline(this.ops["UpdatePipeline"].apply(partialParams));
    }
}
exports.default = default_1;
