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
const schema = require("../apis/codepipeline-2015-07-09.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.codepipeline.Pipeline {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodePipeline();
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
    invokeAcknowledgeJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acknowledgeJob(this.ops["AcknowledgeJob"].applicator.apply(partialParams));
    }
    invokeAcknowledgeThirdPartyJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acknowledgeThirdPartyJob(this.ops["AcknowledgeThirdPartyJob"].applicator.apply(partialParams));
    }
    invokeCreateCustomActionType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomActionType(this.ops["CreateCustomActionType"].applicator.apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].applicator.apply(partialParams));
    }
    invokeDeleteCustomActionType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomActionType(this.ops["DeleteCustomActionType"].applicator.apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(this.ops["DeletePipeline"].applicator.apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].applicator.apply(partialParams));
    }
    invokeDisableStageTransition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableStageTransition(this.ops["DisableStageTransition"].applicator.apply(partialParams));
    }
    invokeEnableStageTransition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableStageTransition(this.ops["EnableStageTransition"].applicator.apply(partialParams));
    }
    invokeGetActionType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getActionType(this.ops["GetActionType"].applicator.apply(partialParams));
    }
    invokeGetJobDetails(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobDetails(this.ops["GetJobDetails"].applicator.apply(partialParams));
    }
    invokeGetPipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipeline(this.ops["GetPipeline"].applicator.apply(partialParams));
    }
    invokeGetPipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipelineExecution(this.ops["GetPipelineExecution"].applicator.apply(partialParams));
    }
    invokeGetPipelineState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipelineState(this.ops["GetPipelineState"].applicator.apply(partialParams));
    }
    invokeGetThirdPartyJobDetails(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getThirdPartyJobDetails(this.ops["GetThirdPartyJobDetails"].applicator.apply(partialParams));
    }
    invokeListActionExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listActionExecutions(this.ops["ListActionExecutions"].applicator.apply(partialParams));
    }
    invokeListPipelineExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPipelineExecutions(this.ops["ListPipelineExecutions"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePollForJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForJobs(this.ops["PollForJobs"].applicator.apply(partialParams));
    }
    invokePollForThirdPartyJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForThirdPartyJobs(this.ops["PollForThirdPartyJobs"].applicator.apply(partialParams));
    }
    invokePutActionRevision(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putActionRevision(this.ops["PutActionRevision"].applicator.apply(partialParams));
    }
    invokePutApprovalResult(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putApprovalResult(this.ops["PutApprovalResult"].applicator.apply(partialParams));
    }
    invokePutJobFailureResult(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putJobFailureResult(this.ops["PutJobFailureResult"].applicator.apply(partialParams));
    }
    invokePutJobSuccessResult(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putJobSuccessResult(this.ops["PutJobSuccessResult"].applicator.apply(partialParams));
    }
    invokePutThirdPartyJobFailureResult(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putThirdPartyJobFailureResult(this.ops["PutThirdPartyJobFailureResult"].applicator.apply(partialParams));
    }
    invokePutThirdPartyJobSuccessResult(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putThirdPartyJobSuccessResult(this.ops["PutThirdPartyJobSuccessResult"].applicator.apply(partialParams));
    }
    invokePutWebhook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putWebhook(this.ops["PutWebhook"].applicator.apply(partialParams));
    }
    invokeRetryStageExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retryStageExecution(this.ops["RetryStageExecution"].applicator.apply(partialParams));
    }
    invokeStartPipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startPipelineExecution(this.ops["StartPipelineExecution"].applicator.apply(partialParams));
    }
    invokeStopPipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopPipelineExecution(this.ops["StopPipelineExecution"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateActionType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateActionType(this.ops["UpdateActionType"].applicator.apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipeline(this.ops["UpdatePipeline"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
