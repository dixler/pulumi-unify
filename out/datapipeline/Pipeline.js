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
const schema = require("../apis/datapipeline-2012-10-29.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.datapipeline.Pipeline {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DataPipeline();
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
    invokeActivatePipeline(partialParams) {
        this.boot();
        return this.client.activatePipeline(this.ops["ActivatePipeline"].apply(partialParams));
    }
    invokeAddTags(partialParams) {
        this.boot();
        return this.client.addTags(this.ops["AddTags"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeDeactivatePipeline(partialParams) {
        this.boot();
        return this.client.deactivatePipeline(this.ops["DeactivatePipeline"].apply(partialParams));
    }
    invokeDescribeObjects(partialParams) {
        this.boot();
        return this.client.describeObjects(this.ops["DescribeObjects"].apply(partialParams));
    }
    invokeDescribePipelines(partialParams) {
        this.boot();
        return this.client.describePipelines(this.ops["DescribePipelines"].apply(partialParams));
    }
    invokeEvaluateExpression(partialParams) {
        this.boot();
        return this.client.evaluateExpression(this.ops["EvaluateExpression"].apply(partialParams));
    }
    invokeGetPipelineDefinition(partialParams) {
        this.boot();
        return this.client.getPipelineDefinition(this.ops["GetPipelineDefinition"].apply(partialParams));
    }
    invokeListPipelines(partialParams) {
        this.boot();
        return this.client.listPipelines(this.ops["ListPipelines"].apply(partialParams));
    }
    invokePollForTask(partialParams) {
        this.boot();
        return this.client.pollForTask(this.ops["PollForTask"].apply(partialParams));
    }
    invokePutPipelineDefinition(partialParams) {
        this.boot();
        return this.client.putPipelineDefinition(this.ops["PutPipelineDefinition"].apply(partialParams));
    }
    invokeQueryObjects(partialParams) {
        this.boot();
        return this.client.queryObjects(this.ops["QueryObjects"].apply(partialParams));
    }
    invokeRemoveTags(partialParams) {
        this.boot();
        return this.client.removeTags(this.ops["RemoveTags"].apply(partialParams));
    }
    invokeReportTaskProgress(partialParams) {
        this.boot();
        return this.client.reportTaskProgress(this.ops["ReportTaskProgress"].apply(partialParams));
    }
    invokeReportTaskRunnerHeartbeat(partialParams) {
        this.boot();
        return this.client.reportTaskRunnerHeartbeat(this.ops["ReportTaskRunnerHeartbeat"].apply(partialParams));
    }
    invokeSetTaskStatus(partialParams) {
        this.boot();
        return this.client.setTaskStatus(this.ops["SetTaskStatus"].apply(partialParams));
    }
    invokeValidatePipelineDefinition(partialParams) {
        this.boot();
        return this.client.validatePipelineDefinition(this.ops["ValidatePipelineDefinition"].apply(partialParams));
    }
}
exports.default = default_1;
