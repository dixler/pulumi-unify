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
class default_1 extends aws.batch.SchedulingPolicy {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Batch();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/batch-2016-08-10.normal.json"), this.client);
    }
    invokeCancelJob(partialParams) {
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateComputeEnvironment(partialParams) {
        return this.client.createComputeEnvironment(this.ops["CreateComputeEnvironment"].apply(partialParams));
    }
    invokeCreateJobQueue(partialParams) {
        return this.client.createJobQueue(this.ops["CreateJobQueue"].apply(partialParams));
    }
    invokeCreateSchedulingPolicy(partialParams) {
        return this.client.createSchedulingPolicy(this.ops["CreateSchedulingPolicy"].apply(partialParams));
    }
    invokeDeleteComputeEnvironment(partialParams) {
        return this.client.deleteComputeEnvironment(this.ops["DeleteComputeEnvironment"].apply(partialParams));
    }
    invokeDeleteJobQueue(partialParams) {
        return this.client.deleteJobQueue(this.ops["DeleteJobQueue"].apply(partialParams));
    }
    invokeDeleteSchedulingPolicy(partialParams) {
        return this.client.deleteSchedulingPolicy(this.ops["DeleteSchedulingPolicy"].apply(partialParams));
    }
    invokeDeregisterJobDefinition(partialParams) {
        return this.client.deregisterJobDefinition(this.ops["DeregisterJobDefinition"].apply(partialParams));
    }
    invokeDescribeJobs(partialParams) {
        return this.client.describeJobs(this.ops["DescribeJobs"].apply(partialParams));
    }
    invokeDescribeSchedulingPolicies(partialParams) {
        return this.client.describeSchedulingPolicies(this.ops["DescribeSchedulingPolicies"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRegisterJobDefinition(partialParams) {
        return this.client.registerJobDefinition(this.ops["RegisterJobDefinition"].apply(partialParams));
    }
    invokeSubmitJob(partialParams) {
        return this.client.submitJob(this.ops["SubmitJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTerminateJob(partialParams) {
        return this.client.terminateJob(this.ops["TerminateJob"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateComputeEnvironment(partialParams) {
        return this.client.updateComputeEnvironment(this.ops["UpdateComputeEnvironment"].apply(partialParams));
    }
    invokeUpdateJobQueue(partialParams) {
        return this.client.updateJobQueue(this.ops["UpdateJobQueue"].apply(partialParams));
    }
    invokeUpdateSchedulingPolicy(partialParams) {
        return this.client.updateSchedulingPolicy(this.ops["UpdateSchedulingPolicy"].apply(partialParams));
    }
}
exports.default = default_1;
