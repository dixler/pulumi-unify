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
class default_1 extends aws.glue.UserDefinedFunction {
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
    invokeBatchCreatePartition(partialParams) {
        this.boot();
        return this.client.batchCreatePartition(this.ops["BatchCreatePartition"].apply(partialParams));
    }
    invokeBatchDeletePartition(partialParams) {
        this.boot();
        return this.client.batchDeletePartition(this.ops["BatchDeletePartition"].apply(partialParams));
    }
    invokeBatchDeleteTable(partialParams) {
        this.boot();
        return this.client.batchDeleteTable(this.ops["BatchDeleteTable"].apply(partialParams));
    }
    invokeBatchDeleteTableVersion(partialParams) {
        this.boot();
        return this.client.batchDeleteTableVersion(this.ops["BatchDeleteTableVersion"].apply(partialParams));
    }
    invokeBatchGetPartition(partialParams) {
        this.boot();
        return this.client.batchGetPartition(this.ops["BatchGetPartition"].apply(partialParams));
    }
    invokeBatchUpdatePartition(partialParams) {
        this.boot();
        return this.client.batchUpdatePartition(this.ops["BatchUpdatePartition"].apply(partialParams));
    }
    invokeCreateBlueprint(partialParams) {
        this.boot();
        return this.client.createBlueprint(this.ops["CreateBlueprint"].apply(partialParams));
    }
    invokeCreateCrawler(partialParams) {
        this.boot();
        return this.client.createCrawler(this.ops["CreateCrawler"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateMLTransform(partialParams) {
        this.boot();
        return this.client.createMLTransform(this.ops["CreateMLTransform"].apply(partialParams));
    }
    invokeCreatePartition(partialParams) {
        this.boot();
        return this.client.createPartition(this.ops["CreatePartition"].apply(partialParams));
    }
    invokeCreatePartitionIndex(partialParams) {
        this.boot();
        return this.client.createPartitionIndex(this.ops["CreatePartitionIndex"].apply(partialParams));
    }
    invokeCreateSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.createSecurityConfiguration(this.ops["CreateSecurityConfiguration"].apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        this.boot();
        return this.client.createTable(this.ops["CreateTable"].apply(partialParams));
    }
    invokeCreateTrigger(partialParams) {
        this.boot();
        return this.client.createTrigger(this.ops["CreateTrigger"].apply(partialParams));
    }
    invokeCreateUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.createUserDefinedFunction(this.ops["CreateUserDefinedFunction"].apply(partialParams));
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
    invokeDeleteColumnStatisticsForPartition(partialParams) {
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeDeleteColumnStatisticsForTable(partialParams) {
        this.boot();
        return this.client.deleteColumnStatisticsForTable(this.ops["DeleteColumnStatisticsForTable"].apply(partialParams));
    }
    invokeDeleteCrawler(partialParams) {
        this.boot();
        return this.client.deleteCrawler(this.ops["DeleteCrawler"].apply(partialParams));
    }
    invokeDeleteDatabase(partialParams) {
        this.boot();
        return this.client.deleteDatabase(this.ops["DeleteDatabase"].apply(partialParams));
    }
    invokeDeletePartition(partialParams) {
        this.boot();
        return this.client.deletePartition(this.ops["DeletePartition"].apply(partialParams));
    }
    invokeDeletePartitionIndex(partialParams) {
        this.boot();
        return this.client.deletePartitionIndex(this.ops["DeletePartitionIndex"].apply(partialParams));
    }
    invokeDeleteSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.deleteSecurityConfiguration(this.ops["DeleteSecurityConfiguration"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDeleteTableVersion(partialParams) {
        this.boot();
        return this.client.deleteTableVersion(this.ops["DeleteTableVersion"].apply(partialParams));
    }
    invokeDeleteTrigger(partialParams) {
        this.boot();
        return this.client.deleteTrigger(this.ops["DeleteTrigger"].apply(partialParams));
    }
    invokeDeleteUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.deleteUserDefinedFunction(this.ops["DeleteUserDefinedFunction"].apply(partialParams));
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
    invokeGetColumnStatisticsForPartition(partialParams) {
        this.boot();
        return this.client.getColumnStatisticsForPartition(this.ops["GetColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeGetColumnStatisticsForTable(partialParams) {
        this.boot();
        return this.client.getColumnStatisticsForTable(this.ops["GetColumnStatisticsForTable"].apply(partialParams));
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
    invokeGetPartition(partialParams) {
        this.boot();
        return this.client.getPartition(this.ops["GetPartition"].apply(partialParams));
    }
    invokeGetPartitionIndexes(partialParams) {
        this.boot();
        return this.client.getPartitionIndexes(this.ops["GetPartitionIndexes"].apply(partialParams));
    }
    invokeGetPartitions(partialParams) {
        this.boot();
        return this.client.getPartitions(this.ops["GetPartitions"].apply(partialParams));
    }
    invokeGetSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.getSecurityConfiguration(this.ops["GetSecurityConfiguration"].apply(partialParams));
    }
    invokeGetTable(partialParams) {
        this.boot();
        return this.client.getTable(this.ops["GetTable"].apply(partialParams));
    }
    invokeGetTableVersion(partialParams) {
        this.boot();
        return this.client.getTableVersion(this.ops["GetTableVersion"].apply(partialParams));
    }
    invokeGetTableVersions(partialParams) {
        this.boot();
        return this.client.getTableVersions(this.ops["GetTableVersions"].apply(partialParams));
    }
    invokeGetTables(partialParams) {
        this.boot();
        return this.client.getTables(this.ops["GetTables"].apply(partialParams));
    }
    invokeGetTrigger(partialParams) {
        this.boot();
        return this.client.getTrigger(this.ops["GetTrigger"].apply(partialParams));
    }
    invokeGetUnfilteredPartitionMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams));
    }
    invokeGetUnfilteredPartitionsMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams));
    }
    invokeGetUnfilteredTableMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredTableMetadata(this.ops["GetUnfilteredTableMetadata"].apply(partialParams));
    }
    invokeGetUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.getUserDefinedFunction(this.ops["GetUserDefinedFunction"].apply(partialParams));
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
    invokeUpdateColumnStatisticsForPartition(partialParams) {
        this.boot();
        return this.client.updateColumnStatisticsForPartition(this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeUpdateColumnStatisticsForTable(partialParams) {
        this.boot();
        return this.client.updateColumnStatisticsForTable(this.ops["UpdateColumnStatisticsForTable"].apply(partialParams));
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
    invokeUpdatePartition(partialParams) {
        this.boot();
        return this.client.updatePartition(this.ops["UpdatePartition"].apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        this.boot();
        return this.client.updateTable(this.ops["UpdateTable"].apply(partialParams));
    }
    invokeUpdateTrigger(partialParams) {
        this.boot();
        return this.client.updateTrigger(this.ops["UpdateTrigger"].apply(partialParams));
    }
    invokeUpdateUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.updateUserDefinedFunction(this.ops["UpdateUserDefinedFunction"].apply(partialParams));
    }
    invokeUpdateWorkflow(partialParams) {
        this.boot();
        return this.client.updateWorkflow(this.ops["UpdateWorkflow"].apply(partialParams));
    }
}
exports.default = default_1;
