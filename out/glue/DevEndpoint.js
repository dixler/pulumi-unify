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
const schema = require("../apis/glue-2017-03-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.glue.DevEndpoint {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Glue();
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
    invokeCreateBlueprint(partialParams) {
        this.boot();
        return this.client.createBlueprint(this.ops["CreateBlueprint"].apply(partialParams));
    }
    invokeCreateCrawler(partialParams) {
        this.boot();
        return this.client.createCrawler(this.ops["CreateCrawler"].apply(partialParams));
    }
    invokeCreateDevEndpoint(partialParams) {
        this.boot();
        return this.client.createDevEndpoint(this.ops["CreateDevEndpoint"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateMLTransform(partialParams) {
        this.boot();
        return this.client.createMLTransform(this.ops["CreateMLTransform"].apply(partialParams));
    }
    invokeCreateSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.createSecurityConfiguration(this.ops["CreateSecurityConfiguration"].apply(partialParams));
    }
    invokeCreateTrigger(partialParams) {
        this.boot();
        return this.client.createTrigger(this.ops["CreateTrigger"].apply(partialParams));
    }
    invokeCreateWorkflow(partialParams) {
        this.boot();
        return this.client.createWorkflow(this.ops["CreateWorkflow"].apply(partialParams));
    }
    invokeDeleteBlueprint(partialParams) {
        this.boot();
        return this.client.deleteBlueprint(this.ops["DeleteBlueprint"].apply(partialParams));
    }
    invokeDeleteClassifier(partialParams) {
        this.boot();
        return this.client.deleteClassifier(this.ops["DeleteClassifier"].apply(partialParams));
    }
    invokeDeleteCrawler(partialParams) {
        this.boot();
        return this.client.deleteCrawler(this.ops["DeleteCrawler"].apply(partialParams));
    }
    invokeDeleteDatabase(partialParams) {
        this.boot();
        return this.client.deleteDatabase(this.ops["DeleteDatabase"].apply(partialParams));
    }
    invokeDeleteSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.deleteSecurityConfiguration(this.ops["DeleteSecurityConfiguration"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDeleteTrigger(partialParams) {
        this.boot();
        return this.client.deleteTrigger(this.ops["DeleteTrigger"].apply(partialParams));
    }
    invokeDeleteWorkflow(partialParams) {
        this.boot();
        return this.client.deleteWorkflow(this.ops["DeleteWorkflow"].apply(partialParams));
    }
    invokeGetBlueprint(partialParams) {
        this.boot();
        return this.client.getBlueprint(this.ops["GetBlueprint"].apply(partialParams));
    }
    invokeGetClassifier(partialParams) {
        this.boot();
        return this.client.getClassifier(this.ops["GetClassifier"].apply(partialParams));
    }
    invokeGetConnection(partialParams) {
        this.boot();
        return this.client.getConnection(this.ops["GetConnection"].apply(partialParams));
    }
    invokeGetCrawler(partialParams) {
        this.boot();
        return this.client.getCrawler(this.ops["GetCrawler"].apply(partialParams));
    }
    invokeGetDatabase(partialParams) {
        this.boot();
        return this.client.getDatabase(this.ops["GetDatabase"].apply(partialParams));
    }
    invokeGetSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.getSecurityConfiguration(this.ops["GetSecurityConfiguration"].apply(partialParams));
    }
    invokeGetTable(partialParams) {
        this.boot();
        return this.client.getTable(this.ops["GetTable"].apply(partialParams));
    }
    invokeGetTrigger(partialParams) {
        this.boot();
        return this.client.getTrigger(this.ops["GetTrigger"].apply(partialParams));
    }
    invokeGetUnfilteredTableMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredTableMetadata(this.ops["GetUnfilteredTableMetadata"].apply(partialParams));
    }
    invokeGetWorkflow(partialParams) {
        this.boot();
        return this.client.getWorkflow(this.ops["GetWorkflow"].apply(partialParams));
    }
    invokeGetWorkflowRun(partialParams) {
        this.boot();
        return this.client.getWorkflowRun(this.ops["GetWorkflowRun"].apply(partialParams));
    }
    invokeGetWorkflowRunProperties(partialParams) {
        this.boot();
        return this.client.getWorkflowRunProperties(this.ops["GetWorkflowRunProperties"].apply(partialParams));
    }
    invokeGetWorkflowRuns(partialParams) {
        this.boot();
        return this.client.getWorkflowRuns(this.ops["GetWorkflowRuns"].apply(partialParams));
    }
    invokePutWorkflowRunProperties(partialParams) {
        this.boot();
        return this.client.putWorkflowRunProperties(this.ops["PutWorkflowRunProperties"].apply(partialParams));
    }
    invokeResumeWorkflowRun(partialParams) {
        this.boot();
        return this.client.resumeWorkflowRun(this.ops["ResumeWorkflowRun"].apply(partialParams));
    }
    invokeStartBlueprintRun(partialParams) {
        this.boot();
        return this.client.startBlueprintRun(this.ops["StartBlueprintRun"].apply(partialParams));
    }
    invokeStartCrawler(partialParams) {
        this.boot();
        return this.client.startCrawler(this.ops["StartCrawler"].apply(partialParams));
    }
    invokeStartTrigger(partialParams) {
        this.boot();
        return this.client.startTrigger(this.ops["StartTrigger"].apply(partialParams));
    }
    invokeStartWorkflowRun(partialParams) {
        this.boot();
        return this.client.startWorkflowRun(this.ops["StartWorkflowRun"].apply(partialParams));
    }
    invokeStopCrawler(partialParams) {
        this.boot();
        return this.client.stopCrawler(this.ops["StopCrawler"].apply(partialParams));
    }
    invokeStopTrigger(partialParams) {
        this.boot();
        return this.client.stopTrigger(this.ops["StopTrigger"].apply(partialParams));
    }
    invokeStopWorkflowRun(partialParams) {
        this.boot();
        return this.client.stopWorkflowRun(this.ops["StopWorkflowRun"].apply(partialParams));
    }
    invokeUpdateBlueprint(partialParams) {
        this.boot();
        return this.client.updateBlueprint(this.ops["UpdateBlueprint"].apply(partialParams));
    }
    invokeUpdateConnection(partialParams) {
        this.boot();
        return this.client.updateConnection(this.ops["UpdateConnection"].apply(partialParams));
    }
    invokeUpdateCrawler(partialParams) {
        this.boot();
        return this.client.updateCrawler(this.ops["UpdateCrawler"].apply(partialParams));
    }
    invokeUpdateDatabase(partialParams) {
        this.boot();
        return this.client.updateDatabase(this.ops["UpdateDatabase"].apply(partialParams));
    }
    invokeUpdateTrigger(partialParams) {
        this.boot();
        return this.client.updateTrigger(this.ops["UpdateTrigger"].apply(partialParams));
    }
    invokeUpdateWorkflow(partialParams) {
        this.boot();
        return this.client.updateWorkflow(this.ops["UpdateWorkflow"].apply(partialParams));
    }
}
exports.default = default_1;
