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
        this.booted = false;
        this.client = new awssdk.SWF();
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
    invokeCountClosedWorkflowExecutions(partialParams) {
        this.boot();
        return this.client.countClosedWorkflowExecutions(this.ops["CountClosedWorkflowExecutions"].apply(partialParams));
    }
    invokeCountOpenWorkflowExecutions(partialParams) {
        this.boot();
        return this.client.countOpenWorkflowExecutions(this.ops["CountOpenWorkflowExecutions"].apply(partialParams));
    }
    invokeCountPendingActivityTasks(partialParams) {
        this.boot();
        return this.client.countPendingActivityTasks(this.ops["CountPendingActivityTasks"].apply(partialParams));
    }
    invokeCountPendingDecisionTasks(partialParams) {
        this.boot();
        return this.client.countPendingDecisionTasks(this.ops["CountPendingDecisionTasks"].apply(partialParams));
    }
    invokeDescribeActivityType(partialParams) {
        this.boot();
        return this.client.describeActivityType(this.ops["DescribeActivityType"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeWorkflowExecution(partialParams) {
        this.boot();
        return this.client.describeWorkflowExecution(this.ops["DescribeWorkflowExecution"].apply(partialParams));
    }
    invokeDescribeWorkflowType(partialParams) {
        this.boot();
        return this.client.describeWorkflowType(this.ops["DescribeWorkflowType"].apply(partialParams));
    }
    invokeGetWorkflowExecutionHistory(partialParams) {
        this.boot();
        return this.client.getWorkflowExecutionHistory(this.ops["GetWorkflowExecutionHistory"].apply(partialParams));
    }
    invokeListActivityTypes(partialParams) {
        this.boot();
        return this.client.listActivityTypes(this.ops["ListActivityTypes"].apply(partialParams));
    }
    invokeListClosedWorkflowExecutions(partialParams) {
        this.boot();
        return this.client.listClosedWorkflowExecutions(this.ops["ListClosedWorkflowExecutions"].apply(partialParams));
    }
    invokeListDomains(partialParams) {
        this.boot();
        return this.client.listDomains(this.ops["ListDomains"].apply(partialParams));
    }
    invokeListOpenWorkflowExecutions(partialParams) {
        this.boot();
        return this.client.listOpenWorkflowExecutions(this.ops["ListOpenWorkflowExecutions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWorkflowTypes(partialParams) {
        this.boot();
        return this.client.listWorkflowTypes(this.ops["ListWorkflowTypes"].apply(partialParams));
    }
    invokePollForActivityTask(partialParams) {
        this.boot();
        return this.client.pollForActivityTask(this.ops["PollForActivityTask"].apply(partialParams));
    }
    invokePollForDecisionTask(partialParams) {
        this.boot();
        return this.client.pollForDecisionTask(this.ops["PollForDecisionTask"].apply(partialParams));
    }
    invokeRecordActivityTaskHeartbeat(partialParams) {
        this.boot();
        return this.client.recordActivityTaskHeartbeat(this.ops["RecordActivityTaskHeartbeat"].apply(partialParams));
    }
    invokeStartWorkflowExecution(partialParams) {
        this.boot();
        return this.client.startWorkflowExecution(this.ops["StartWorkflowExecution"].apply(partialParams));
    }
}
exports.default = default_1;
