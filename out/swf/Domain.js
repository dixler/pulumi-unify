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
class default_1 extends aws.swf.Domain {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SWF();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/swf-2012-01-25.normal.json"), this.client);
    }
    invokeCountClosedWorkflowExecutions(partialParams) {
        return this.client.countClosedWorkflowExecutions(this.ops["CountClosedWorkflowExecutions"].apply(partialParams));
    }
    invokeCountOpenWorkflowExecutions(partialParams) {
        return this.client.countOpenWorkflowExecutions(this.ops["CountOpenWorkflowExecutions"].apply(partialParams));
    }
    invokeCountPendingActivityTasks(partialParams) {
        return this.client.countPendingActivityTasks(this.ops["CountPendingActivityTasks"].apply(partialParams));
    }
    invokeCountPendingDecisionTasks(partialParams) {
        return this.client.countPendingDecisionTasks(this.ops["CountPendingDecisionTasks"].apply(partialParams));
    }
    invokeDeprecateActivityType(partialParams) {
        return this.client.deprecateActivityType(this.ops["DeprecateActivityType"].apply(partialParams));
    }
    invokeDeprecateDomain(partialParams) {
        return this.client.deprecateDomain(this.ops["DeprecateDomain"].apply(partialParams));
    }
    invokeDeprecateWorkflowType(partialParams) {
        return this.client.deprecateWorkflowType(this.ops["DeprecateWorkflowType"].apply(partialParams));
    }
    invokeDescribeActivityType(partialParams) {
        return this.client.describeActivityType(this.ops["DescribeActivityType"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeWorkflowExecution(partialParams) {
        return this.client.describeWorkflowExecution(this.ops["DescribeWorkflowExecution"].apply(partialParams));
    }
    invokeDescribeWorkflowType(partialParams) {
        return this.client.describeWorkflowType(this.ops["DescribeWorkflowType"].apply(partialParams));
    }
    invokeGetWorkflowExecutionHistory(partialParams) {
        return this.client.getWorkflowExecutionHistory(this.ops["GetWorkflowExecutionHistory"].apply(partialParams));
    }
    invokeListActivityTypes(partialParams) {
        return this.client.listActivityTypes(this.ops["ListActivityTypes"].apply(partialParams));
    }
    invokeListClosedWorkflowExecutions(partialParams) {
        return this.client.listClosedWorkflowExecutions(this.ops["ListClosedWorkflowExecutions"].apply(partialParams));
    }
    invokeListDomains(partialParams) {
        return this.client.listDomains(this.ops["ListDomains"].apply(partialParams));
    }
    invokeListOpenWorkflowExecutions(partialParams) {
        return this.client.listOpenWorkflowExecutions(this.ops["ListOpenWorkflowExecutions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWorkflowTypes(partialParams) {
        return this.client.listWorkflowTypes(this.ops["ListWorkflowTypes"].apply(partialParams));
    }
    invokePollForActivityTask(partialParams) {
        return this.client.pollForActivityTask(this.ops["PollForActivityTask"].apply(partialParams));
    }
    invokePollForDecisionTask(partialParams) {
        return this.client.pollForDecisionTask(this.ops["PollForDecisionTask"].apply(partialParams));
    }
    invokeRecordActivityTaskHeartbeat(partialParams) {
        return this.client.recordActivityTaskHeartbeat(this.ops["RecordActivityTaskHeartbeat"].apply(partialParams));
    }
    invokeRegisterActivityType(partialParams) {
        return this.client.registerActivityType(this.ops["RegisterActivityType"].apply(partialParams));
    }
    invokeRegisterDomain(partialParams) {
        return this.client.registerDomain(this.ops["RegisterDomain"].apply(partialParams));
    }
    invokeRegisterWorkflowType(partialParams) {
        return this.client.registerWorkflowType(this.ops["RegisterWorkflowType"].apply(partialParams));
    }
    invokeRequestCancelWorkflowExecution(partialParams) {
        return this.client.requestCancelWorkflowExecution(this.ops["RequestCancelWorkflowExecution"].apply(partialParams));
    }
    invokeRespondActivityTaskCanceled(partialParams) {
        return this.client.respondActivityTaskCanceled(this.ops["RespondActivityTaskCanceled"].apply(partialParams));
    }
    invokeRespondActivityTaskCompleted(partialParams) {
        return this.client.respondActivityTaskCompleted(this.ops["RespondActivityTaskCompleted"].apply(partialParams));
    }
    invokeRespondActivityTaskFailed(partialParams) {
        return this.client.respondActivityTaskFailed(this.ops["RespondActivityTaskFailed"].apply(partialParams));
    }
    invokeRespondDecisionTaskCompleted(partialParams) {
        return this.client.respondDecisionTaskCompleted(this.ops["RespondDecisionTaskCompleted"].apply(partialParams));
    }
    invokeSignalWorkflowExecution(partialParams) {
        return this.client.signalWorkflowExecution(this.ops["SignalWorkflowExecution"].apply(partialParams));
    }
    invokeStartWorkflowExecution(partialParams) {
        return this.client.startWorkflowExecution(this.ops["StartWorkflowExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTerminateWorkflowExecution(partialParams) {
        return this.client.terminateWorkflowExecution(this.ops["TerminateWorkflowExecution"].apply(partialParams));
    }
    invokeUndeprecateActivityType(partialParams) {
        return this.client.undeprecateActivityType(this.ops["UndeprecateActivityType"].apply(partialParams));
    }
    invokeUndeprecateDomain(partialParams) {
        return this.client.undeprecateDomain(this.ops["UndeprecateDomain"].apply(partialParams));
    }
    invokeUndeprecateWorkflowType(partialParams) {
        return this.client.undeprecateWorkflowType(this.ops["UndeprecateWorkflowType"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
