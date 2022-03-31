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
const schema = require("../apis/swf-2012-01-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.swf.Domain {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SWF();
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
    invokeCountClosedWorkflowExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countClosedWorkflowExecutions(this.ops["CountClosedWorkflowExecutions"].applicator.apply(partialParams));
    }
    invokeCountOpenWorkflowExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countOpenWorkflowExecutions(this.ops["CountOpenWorkflowExecutions"].applicator.apply(partialParams));
    }
    invokeCountPendingActivityTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countPendingActivityTasks(this.ops["CountPendingActivityTasks"].applicator.apply(partialParams));
    }
    invokeCountPendingDecisionTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countPendingDecisionTasks(this.ops["CountPendingDecisionTasks"].applicator.apply(partialParams));
    }
    invokeDeprecateActivityType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateActivityType(this.ops["DeprecateActivityType"].applicator.apply(partialParams));
    }
    invokeDeprecateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateDomain(this.ops["DeprecateDomain"].applicator.apply(partialParams));
    }
    invokeDeprecateWorkflowType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateWorkflowType(this.ops["DeprecateWorkflowType"].applicator.apply(partialParams));
    }
    invokeDescribeActivityType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeActivityType(this.ops["DescribeActivityType"].applicator.apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].applicator.apply(partialParams));
    }
    invokeDescribeWorkflowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkflowExecution(this.ops["DescribeWorkflowExecution"].applicator.apply(partialParams));
    }
    invokeDescribeWorkflowType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkflowType(this.ops["DescribeWorkflowType"].applicator.apply(partialParams));
    }
    invokeGetWorkflowExecutionHistory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowExecutionHistory(this.ops["GetWorkflowExecutionHistory"].applicator.apply(partialParams));
    }
    invokeListActivityTypes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listActivityTypes(this.ops["ListActivityTypes"].applicator.apply(partialParams));
    }
    invokeListClosedWorkflowExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listClosedWorkflowExecutions(this.ops["ListClosedWorkflowExecutions"].applicator.apply(partialParams));
    }
    invokeListDomains(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDomains(this.ops["ListDomains"].applicator.apply(partialParams));
    }
    invokeListOpenWorkflowExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOpenWorkflowExecutions(this.ops["ListOpenWorkflowExecutions"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListWorkflowTypes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWorkflowTypes(this.ops["ListWorkflowTypes"].applicator.apply(partialParams));
    }
    invokePollForActivityTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForActivityTask(this.ops["PollForActivityTask"].applicator.apply(partialParams));
    }
    invokePollForDecisionTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForDecisionTask(this.ops["PollForDecisionTask"].applicator.apply(partialParams));
    }
    invokeRecordActivityTaskHeartbeat(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.recordActivityTaskHeartbeat(this.ops["RecordActivityTaskHeartbeat"].applicator.apply(partialParams));
    }
    invokeRegisterActivityType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerActivityType(this.ops["RegisterActivityType"].applicator.apply(partialParams));
    }
    invokeRegisterDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDomain(this.ops["RegisterDomain"].applicator.apply(partialParams));
    }
    invokeRegisterWorkflowType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerWorkflowType(this.ops["RegisterWorkflowType"].applicator.apply(partialParams));
    }
    invokeRequestCancelWorkflowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestCancelWorkflowExecution(this.ops["RequestCancelWorkflowExecution"].applicator.apply(partialParams));
    }
    invokeRespondActivityTaskCanceled(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondActivityTaskCanceled(this.ops["RespondActivityTaskCanceled"].applicator.apply(partialParams));
    }
    invokeRespondActivityTaskCompleted(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondActivityTaskCompleted(this.ops["RespondActivityTaskCompleted"].applicator.apply(partialParams));
    }
    invokeRespondActivityTaskFailed(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondActivityTaskFailed(this.ops["RespondActivityTaskFailed"].applicator.apply(partialParams));
    }
    invokeRespondDecisionTaskCompleted(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondDecisionTaskCompleted(this.ops["RespondDecisionTaskCompleted"].applicator.apply(partialParams));
    }
    invokeSignalWorkflowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.signalWorkflowExecution(this.ops["SignalWorkflowExecution"].applicator.apply(partialParams));
    }
    invokeStartWorkflowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startWorkflowExecution(this.ops["StartWorkflowExecution"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTerminateWorkflowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateWorkflowExecution(this.ops["TerminateWorkflowExecution"].applicator.apply(partialParams));
    }
    invokeUndeprecateActivityType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.undeprecateActivityType(this.ops["UndeprecateActivityType"].applicator.apply(partialParams));
    }
    invokeUndeprecateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.undeprecateDomain(this.ops["UndeprecateDomain"].applicator.apply(partialParams));
    }
    invokeUndeprecateWorkflowType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.undeprecateWorkflowType(this.ops["UndeprecateWorkflowType"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
