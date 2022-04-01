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
class default_1 extends aws.codepipeline.Webhook {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CodePipeline();
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
    invokeAcknowledgeJob(partialParams) {
        this.boot();
        return this.client.acknowledgeJob(this.ops["AcknowledgeJob"].apply(partialParams));
    }
    invokeAcknowledgeThirdPartyJob(partialParams) {
        this.boot();
        return this.client.acknowledgeThirdPartyJob(this.ops["AcknowledgeThirdPartyJob"].apply(partialParams));
    }
    invokeCreateCustomActionType(partialParams) {
        this.boot();
        return this.client.createCustomActionType(this.ops["CreateCustomActionType"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        this.boot();
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].apply(partialParams));
    }
    invokeDeregisterWebhookWithThirdParty(partialParams) {
        this.boot();
        return this.client.deregisterWebhookWithThirdParty(this.ops["DeregisterWebhookWithThirdParty"].apply(partialParams));
    }
    invokeGetActionType(partialParams) {
        this.boot();
        return this.client.getActionType(this.ops["GetActionType"].apply(partialParams));
    }
    invokeGetJobDetails(partialParams) {
        this.boot();
        return this.client.getJobDetails(this.ops["GetJobDetails"].apply(partialParams));
    }
    invokeGetPipeline(partialParams) {
        this.boot();
        return this.client.getPipeline(this.ops["GetPipeline"].apply(partialParams));
    }
    invokeGetPipelineExecution(partialParams) {
        this.boot();
        return this.client.getPipelineExecution(this.ops["GetPipelineExecution"].apply(partialParams));
    }
    invokeGetPipelineState(partialParams) {
        this.boot();
        return this.client.getPipelineState(this.ops["GetPipelineState"].apply(partialParams));
    }
    invokeGetThirdPartyJobDetails(partialParams) {
        this.boot();
        return this.client.getThirdPartyJobDetails(this.ops["GetThirdPartyJobDetails"].apply(partialParams));
    }
    invokeListActionExecutions(partialParams) {
        this.boot();
        return this.client.listActionExecutions(this.ops["ListActionExecutions"].apply(partialParams));
    }
    invokeListActionTypes(partialParams) {
        this.boot();
        return this.client.listActionTypes(this.ops["ListActionTypes"].apply(partialParams));
    }
    invokeListPipelineExecutions(partialParams) {
        this.boot();
        return this.client.listPipelineExecutions(this.ops["ListPipelineExecutions"].apply(partialParams));
    }
    invokeListPipelines(partialParams) {
        this.boot();
        return this.client.listPipelines(this.ops["ListPipelines"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebhooks(partialParams) {
        this.boot();
        return this.client.listWebhooks(this.ops["ListWebhooks"].apply(partialParams));
    }
    invokePollForJobs(partialParams) {
        this.boot();
        return this.client.pollForJobs(this.ops["PollForJobs"].apply(partialParams));
    }
    invokePollForThirdPartyJobs(partialParams) {
        this.boot();
        return this.client.pollForThirdPartyJobs(this.ops["PollForThirdPartyJobs"].apply(partialParams));
    }
    invokePutActionRevision(partialParams) {
        this.boot();
        return this.client.putActionRevision(this.ops["PutActionRevision"].apply(partialParams));
    }
    invokePutApprovalResult(partialParams) {
        this.boot();
        return this.client.putApprovalResult(this.ops["PutApprovalResult"].apply(partialParams));
    }
    invokePutWebhook(partialParams) {
        this.boot();
        return this.client.putWebhook(this.ops["PutWebhook"].apply(partialParams));
    }
    invokeRegisterWebhookWithThirdParty(partialParams) {
        this.boot();
        return this.client.registerWebhookWithThirdParty(this.ops["RegisterWebhookWithThirdParty"].apply(partialParams));
    }
    invokeRetryStageExecution(partialParams) {
        this.boot();
        return this.client.retryStageExecution(this.ops["RetryStageExecution"].apply(partialParams));
    }
    invokeStartPipelineExecution(partialParams) {
        this.boot();
        return this.client.startPipelineExecution(this.ops["StartPipelineExecution"].apply(partialParams));
    }
    invokeStopPipelineExecution(partialParams) {
        this.boot();
        return this.client.stopPipelineExecution(this.ops["StopPipelineExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        this.boot();
        return this.client.updatePipeline(this.ops["UpdatePipeline"].apply(partialParams));
    }
}
exports.default = default_1;
