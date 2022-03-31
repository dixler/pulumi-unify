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
class default_1 extends aws.datapipeline.PipelineDefinition {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DataPipeline();
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
    invokeActivatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.activatePipeline(this.ops["ActivatePipeline"].applicator.apply(partialParams));
    }
    invokeAddTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTags(this.ops["AddTags"].applicator.apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].applicator.apply(partialParams));
    }
    invokeDeactivatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivatePipeline(this.ops["DeactivatePipeline"].applicator.apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(this.ops["DeletePipeline"].applicator.apply(partialParams));
    }
    invokeDescribeObjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeObjects(this.ops["DescribeObjects"].applicator.apply(partialParams));
    }
    invokeDescribePipelines(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipelines(this.ops["DescribePipelines"].applicator.apply(partialParams));
    }
    invokeEvaluateExpression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.evaluateExpression(this.ops["EvaluateExpression"].applicator.apply(partialParams));
    }
    invokeGetPipelineDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipelineDefinition(this.ops["GetPipelineDefinition"].applicator.apply(partialParams));
    }
    invokePollForTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForTask(this.ops["PollForTask"].applicator.apply(partialParams));
    }
    invokePutPipelineDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPipelineDefinition(this.ops["PutPipelineDefinition"].applicator.apply(partialParams));
    }
    invokeQueryObjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.queryObjects(this.ops["QueryObjects"].applicator.apply(partialParams));
    }
    invokeRemoveTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTags(this.ops["RemoveTags"].applicator.apply(partialParams));
    }
    invokeReportTaskProgress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reportTaskProgress(this.ops["ReportTaskProgress"].applicator.apply(partialParams));
    }
    invokeReportTaskRunnerHeartbeat(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reportTaskRunnerHeartbeat(this.ops["ReportTaskRunnerHeartbeat"].applicator.apply(partialParams));
    }
    invokeSetStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setStatus(this.ops["SetStatus"].applicator.apply(partialParams));
    }
    invokeSetTaskStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTaskStatus(this.ops["SetTaskStatus"].applicator.apply(partialParams));
    }
    invokeValidatePipelineDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validatePipelineDefinition(this.ops["ValidatePipelineDefinition"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
