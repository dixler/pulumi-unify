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
const schema = require("../apis/batch-2016-08-10.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.batch.JobDefinition {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Batch();
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
    invokeCancelJob(partialParams) {
        this.boot();
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateComputeEnvironment(partialParams) {
        this.boot();
        return this.client.createComputeEnvironment(this.ops["CreateComputeEnvironment"].apply(partialParams));
    }
    invokeCreateJobQueue(partialParams) {
        this.boot();
        return this.client.createJobQueue(this.ops["CreateJobQueue"].apply(partialParams));
    }
    invokeCreateSchedulingPolicy(partialParams) {
        this.boot();
        return this.client.createSchedulingPolicy(this.ops["CreateSchedulingPolicy"].apply(partialParams));
    }
    invokeDeleteComputeEnvironment(partialParams) {
        this.boot();
        return this.client.deleteComputeEnvironment(this.ops["DeleteComputeEnvironment"].apply(partialParams));
    }
    invokeDeleteJobQueue(partialParams) {
        this.boot();
        return this.client.deleteJobQueue(this.ops["DeleteJobQueue"].apply(partialParams));
    }
    invokeDeleteSchedulingPolicy(partialParams) {
        this.boot();
        return this.client.deleteSchedulingPolicy(this.ops["DeleteSchedulingPolicy"].apply(partialParams));
    }
    invokeDeregisterJobDefinition(partialParams) {
        this.boot();
        return this.client.deregisterJobDefinition(this.ops["DeregisterJobDefinition"].apply(partialParams));
    }
    invokeDescribeComputeEnvironments(partialParams) {
        this.boot();
        return this.client.describeComputeEnvironments(this.ops["DescribeComputeEnvironments"].apply(partialParams));
    }
    invokeDescribeJobDefinitions(partialParams) {
        this.boot();
        return this.client.describeJobDefinitions(this.ops["DescribeJobDefinitions"].apply(partialParams));
    }
    invokeDescribeJobQueues(partialParams) {
        this.boot();
        return this.client.describeJobQueues(this.ops["DescribeJobQueues"].apply(partialParams));
    }
    invokeDescribeJobs(partialParams) {
        this.boot();
        return this.client.describeJobs(this.ops["DescribeJobs"].apply(partialParams));
    }
    invokeDescribeSchedulingPolicies(partialParams) {
        this.boot();
        return this.client.describeSchedulingPolicies(this.ops["DescribeSchedulingPolicies"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListSchedulingPolicies(partialParams) {
        this.boot();
        return this.client.listSchedulingPolicies(this.ops["ListSchedulingPolicies"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRegisterJobDefinition(partialParams) {
        this.boot();
        return this.client.registerJobDefinition(this.ops["RegisterJobDefinition"].apply(partialParams));
    }
    invokeSubmitJob(partialParams) {
        this.boot();
        return this.client.submitJob(this.ops["SubmitJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTerminateJob(partialParams) {
        this.boot();
        return this.client.terminateJob(this.ops["TerminateJob"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateComputeEnvironment(partialParams) {
        this.boot();
        return this.client.updateComputeEnvironment(this.ops["UpdateComputeEnvironment"].apply(partialParams));
    }
    invokeUpdateJobQueue(partialParams) {
        this.boot();
        return this.client.updateJobQueue(this.ops["UpdateJobQueue"].apply(partialParams));
    }
    invokeUpdateSchedulingPolicy(partialParams) {
        this.boot();
        return this.client.updateSchedulingPolicy(this.ops["UpdateSchedulingPolicy"].apply(partialParams));
    }
}
exports.default = default_1;
