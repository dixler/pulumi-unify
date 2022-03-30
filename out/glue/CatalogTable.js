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
class default_1 extends aws.glue.CatalogTable {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Glue();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/glue-2017-03-31.normal.json"), this.client);
    }
    invokeBatchCreatePartition(partialParams) {
        return this.client.batchCreatePartition(this.ops["BatchCreatePartition"].apply(partialParams));
    }
    invokeBatchDeleteConnection(partialParams) {
        return this.client.batchDeleteConnection(this.ops["BatchDeleteConnection"].apply(partialParams));
    }
    invokeBatchDeletePartition(partialParams) {
        return this.client.batchDeletePartition(this.ops["BatchDeletePartition"].apply(partialParams));
    }
    invokeBatchDeleteTable(partialParams) {
        return this.client.batchDeleteTable(this.ops["BatchDeleteTable"].apply(partialParams));
    }
    invokeBatchDeleteTableVersion(partialParams) {
        return this.client.batchDeleteTableVersion(this.ops["BatchDeleteTableVersion"].apply(partialParams));
    }
    invokeBatchGetBlueprints(partialParams) {
        return this.client.batchGetBlueprints(this.ops["BatchGetBlueprints"].apply(partialParams));
    }
    invokeBatchGetCrawlers(partialParams) {
        return this.client.batchGetCrawlers(this.ops["BatchGetCrawlers"].apply(partialParams));
    }
    invokeBatchGetDevEndpoints(partialParams) {
        return this.client.batchGetDevEndpoints(this.ops["BatchGetDevEndpoints"].apply(partialParams));
    }
    invokeBatchGetJobs(partialParams) {
        return this.client.batchGetJobs(this.ops["BatchGetJobs"].apply(partialParams));
    }
    invokeBatchGetPartition(partialParams) {
        return this.client.batchGetPartition(this.ops["BatchGetPartition"].apply(partialParams));
    }
    invokeBatchGetTriggers(partialParams) {
        return this.client.batchGetTriggers(this.ops["BatchGetTriggers"].apply(partialParams));
    }
    invokeBatchGetWorkflows(partialParams) {
        return this.client.batchGetWorkflows(this.ops["BatchGetWorkflows"].apply(partialParams));
    }
    invokeBatchStopJobRun(partialParams) {
        return this.client.batchStopJobRun(this.ops["BatchStopJobRun"].apply(partialParams));
    }
    invokeBatchUpdatePartition(partialParams) {
        return this.client.batchUpdatePartition(this.ops["BatchUpdatePartition"].apply(partialParams));
    }
    invokeCancelMLTaskRun(partialParams) {
        return this.client.cancelMLTaskRun(this.ops["CancelMLTaskRun"].apply(partialParams));
    }
    invokeCheckSchemaVersionValidity(partialParams) {
        return this.client.checkSchemaVersionValidity(this.ops["CheckSchemaVersionValidity"].apply(partialParams));
    }
    invokeCreateBlueprint(partialParams) {
        return this.client.createBlueprint(this.ops["CreateBlueprint"].apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        return this.client.createConnection(this.ops["CreateConnection"].apply(partialParams));
    }
    invokeCreateCrawler(partialParams) {
        return this.client.createCrawler(this.ops["CreateCrawler"].apply(partialParams));
    }
    invokeCreateDatabase(partialParams) {
        return this.client.createDatabase(this.ops["CreateDatabase"].apply(partialParams));
    }
    invokeCreateDevEndpoint(partialParams) {
        return this.client.createDevEndpoint(this.ops["CreateDevEndpoint"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateMLTransform(partialParams) {
        return this.client.createMLTransform(this.ops["CreateMLTransform"].apply(partialParams));
    }
    invokeCreatePartition(partialParams) {
        return this.client.createPartition(this.ops["CreatePartition"].apply(partialParams));
    }
    invokeCreatePartitionIndex(partialParams) {
        return this.client.createPartitionIndex(this.ops["CreatePartitionIndex"].apply(partialParams));
    }
    invokeCreateRegistry(partialParams) {
        return this.client.createRegistry(this.ops["CreateRegistry"].apply(partialParams));
    }
    invokeCreateSchema(partialParams) {
        return this.client.createSchema(this.ops["CreateSchema"].apply(partialParams));
    }
    invokeCreateSecurityConfiguration(partialParams) {
        return this.client.createSecurityConfiguration(this.ops["CreateSecurityConfiguration"].apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        return this.client.createTable(this.ops["CreateTable"].apply(partialParams));
    }
    invokeCreateTrigger(partialParams) {
        return this.client.createTrigger(this.ops["CreateTrigger"].apply(partialParams));
    }
    invokeCreateUserDefinedFunction(partialParams) {
        return this.client.createUserDefinedFunction(this.ops["CreateUserDefinedFunction"].apply(partialParams));
    }
    invokeCreateWorkflow(partialParams) {
        return this.client.createWorkflow(this.ops["CreateWorkflow"].apply(partialParams));
    }
    invokeDeleteBlueprint(partialParams) {
        return this.client.deleteBlueprint(this.ops["DeleteBlueprint"].apply(partialParams));
    }
    invokeDeleteClassifier(partialParams) {
        return this.client.deleteClassifier(this.ops["DeleteClassifier"].apply(partialParams));
    }
    invokeDeleteColumnStatisticsForPartition(partialParams) {
        return this.client.deleteColumnStatisticsForPartition(this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeDeleteColumnStatisticsForTable(partialParams) {
        return this.client.deleteColumnStatisticsForTable(this.ops["DeleteColumnStatisticsForTable"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteCrawler(partialParams) {
        return this.client.deleteCrawler(this.ops["DeleteCrawler"].apply(partialParams));
    }
    invokeDeleteDatabase(partialParams) {
        return this.client.deleteDatabase(this.ops["DeleteDatabase"].apply(partialParams));
    }
    invokeDeleteDevEndpoint(partialParams) {
        return this.client.deleteDevEndpoint(this.ops["DeleteDevEndpoint"].apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        return this.client.deleteJob(this.ops["DeleteJob"].apply(partialParams));
    }
    invokeDeleteMLTransform(partialParams) {
        return this.client.deleteMLTransform(this.ops["DeleteMLTransform"].apply(partialParams));
    }
    invokeDeletePartition(partialParams) {
        return this.client.deletePartition(this.ops["DeletePartition"].apply(partialParams));
    }
    invokeDeletePartitionIndex(partialParams) {
        return this.client.deletePartitionIndex(this.ops["DeletePartitionIndex"].apply(partialParams));
    }
    invokeDeleteRegistry(partialParams) {
        return this.client.deleteRegistry(this.ops["DeleteRegistry"].apply(partialParams));
    }
    invokeDeleteSchema(partialParams) {
        return this.client.deleteSchema(this.ops["DeleteSchema"].apply(partialParams));
    }
    invokeDeleteSchemaVersions(partialParams) {
        return this.client.deleteSchemaVersions(this.ops["DeleteSchemaVersions"].apply(partialParams));
    }
    invokeDeleteSecurityConfiguration(partialParams) {
        return this.client.deleteSecurityConfiguration(this.ops["DeleteSecurityConfiguration"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDeleteTableVersion(partialParams) {
        return this.client.deleteTableVersion(this.ops["DeleteTableVersion"].apply(partialParams));
    }
    invokeDeleteTrigger(partialParams) {
        return this.client.deleteTrigger(this.ops["DeleteTrigger"].apply(partialParams));
    }
    invokeDeleteUserDefinedFunction(partialParams) {
        return this.client.deleteUserDefinedFunction(this.ops["DeleteUserDefinedFunction"].apply(partialParams));
    }
    invokeDeleteWorkflow(partialParams) {
        return this.client.deleteWorkflow(this.ops["DeleteWorkflow"].apply(partialParams));
    }
    invokeGetBlueprint(partialParams) {
        return this.client.getBlueprint(this.ops["GetBlueprint"].apply(partialParams));
    }
    invokeGetBlueprintRun(partialParams) {
        return this.client.getBlueprintRun(this.ops["GetBlueprintRun"].apply(partialParams));
    }
    invokeGetBlueprintRuns(partialParams) {
        return this.client.getBlueprintRuns(this.ops["GetBlueprintRuns"].apply(partialParams));
    }
    invokeGetClassifier(partialParams) {
        return this.client.getClassifier(this.ops["GetClassifier"].apply(partialParams));
    }
    invokeGetColumnStatisticsForPartition(partialParams) {
        return this.client.getColumnStatisticsForPartition(this.ops["GetColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeGetColumnStatisticsForTable(partialParams) {
        return this.client.getColumnStatisticsForTable(this.ops["GetColumnStatisticsForTable"].apply(partialParams));
    }
    invokeGetConnection(partialParams) {
        return this.client.getConnection(this.ops["GetConnection"].apply(partialParams));
    }
    invokeGetCrawler(partialParams) {
        return this.client.getCrawler(this.ops["GetCrawler"].apply(partialParams));
    }
    invokeGetDatabase(partialParams) {
        return this.client.getDatabase(this.ops["GetDatabase"].apply(partialParams));
    }
    invokeGetDevEndpoint(partialParams) {
        return this.client.getDevEndpoint(this.ops["GetDevEndpoint"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetJobBookmark(partialParams) {
        return this.client.getJobBookmark(this.ops["GetJobBookmark"].apply(partialParams));
    }
    invokeGetJobRun(partialParams) {
        return this.client.getJobRun(this.ops["GetJobRun"].apply(partialParams));
    }
    invokeGetJobRuns(partialParams) {
        return this.client.getJobRuns(this.ops["GetJobRuns"].apply(partialParams));
    }
    invokeGetMLTaskRun(partialParams) {
        return this.client.getMLTaskRun(this.ops["GetMLTaskRun"].apply(partialParams));
    }
    invokeGetMLTaskRuns(partialParams) {
        return this.client.getMLTaskRuns(this.ops["GetMLTaskRuns"].apply(partialParams));
    }
    invokeGetMLTransform(partialParams) {
        return this.client.getMLTransform(this.ops["GetMLTransform"].apply(partialParams));
    }
    invokeGetMapping(partialParams) {
        return this.client.getMapping(this.ops["GetMapping"].apply(partialParams));
    }
    invokeGetPartition(partialParams) {
        return this.client.getPartition(this.ops["GetPartition"].apply(partialParams));
    }
    invokeGetPartitionIndexes(partialParams) {
        return this.client.getPartitionIndexes(this.ops["GetPartitionIndexes"].apply(partialParams));
    }
    invokeGetPartitions(partialParams) {
        return this.client.getPartitions(this.ops["GetPartitions"].apply(partialParams));
    }
    invokeGetPlan(partialParams) {
        return this.client.getPlan(this.ops["GetPlan"].apply(partialParams));
    }
    invokeGetRegistry(partialParams) {
        return this.client.getRegistry(this.ops["GetRegistry"].apply(partialParams));
    }
    invokeGetSchema(partialParams) {
        return this.client.getSchema(this.ops["GetSchema"].apply(partialParams));
    }
    invokeGetSchemaByDefinition(partialParams) {
        return this.client.getSchemaByDefinition(this.ops["GetSchemaByDefinition"].apply(partialParams));
    }
    invokeGetSchemaVersionsDiff(partialParams) {
        return this.client.getSchemaVersionsDiff(this.ops["GetSchemaVersionsDiff"].apply(partialParams));
    }
    invokeGetSecurityConfiguration(partialParams) {
        return this.client.getSecurityConfiguration(this.ops["GetSecurityConfiguration"].apply(partialParams));
    }
    invokeGetTable(partialParams) {
        return this.client.getTable(this.ops["GetTable"].apply(partialParams));
    }
    invokeGetTableVersion(partialParams) {
        return this.client.getTableVersion(this.ops["GetTableVersion"].apply(partialParams));
    }
    invokeGetTableVersions(partialParams) {
        return this.client.getTableVersions(this.ops["GetTableVersions"].apply(partialParams));
    }
    invokeGetTables(partialParams) {
        return this.client.getTables(this.ops["GetTables"].apply(partialParams));
    }
    invokeGetTags(partialParams) {
        return this.client.getTags(this.ops["GetTags"].apply(partialParams));
    }
    invokeGetTrigger(partialParams) {
        return this.client.getTrigger(this.ops["GetTrigger"].apply(partialParams));
    }
    invokeGetUnfilteredPartitionMetadata(partialParams) {
        return this.client.getUnfilteredPartitionMetadata(this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams));
    }
    invokeGetUnfilteredPartitionsMetadata(partialParams) {
        return this.client.getUnfilteredPartitionsMetadata(this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams));
    }
    invokeGetUnfilteredTableMetadata(partialParams) {
        return this.client.getUnfilteredTableMetadata(this.ops["GetUnfilteredTableMetadata"].apply(partialParams));
    }
    invokeGetUserDefinedFunction(partialParams) {
        return this.client.getUserDefinedFunction(this.ops["GetUserDefinedFunction"].apply(partialParams));
    }
    invokeGetUserDefinedFunctions(partialParams) {
        return this.client.getUserDefinedFunctions(this.ops["GetUserDefinedFunctions"].apply(partialParams));
    }
    invokeGetWorkflow(partialParams) {
        return this.client.getWorkflow(this.ops["GetWorkflow"].apply(partialParams));
    }
    invokeGetWorkflowRun(partialParams) {
        return this.client.getWorkflowRun(this.ops["GetWorkflowRun"].apply(partialParams));
    }
    invokeGetWorkflowRunProperties(partialParams) {
        return this.client.getWorkflowRunProperties(this.ops["GetWorkflowRunProperties"].apply(partialParams));
    }
    invokeGetWorkflowRuns(partialParams) {
        return this.client.getWorkflowRuns(this.ops["GetWorkflowRuns"].apply(partialParams));
    }
    invokeListSchemaVersions(partialParams) {
        return this.client.listSchemaVersions(this.ops["ListSchemaVersions"].apply(partialParams));
    }
    invokePutDataCatalogEncryptionSettings(partialParams) {
        return this.client.putDataCatalogEncryptionSettings(this.ops["PutDataCatalogEncryptionSettings"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokePutSchemaVersionMetadata(partialParams) {
        return this.client.putSchemaVersionMetadata(this.ops["PutSchemaVersionMetadata"].apply(partialParams));
    }
    invokePutWorkflowRunProperties(partialParams) {
        return this.client.putWorkflowRunProperties(this.ops["PutWorkflowRunProperties"].apply(partialParams));
    }
    invokeRegisterSchemaVersion(partialParams) {
        return this.client.registerSchemaVersion(this.ops["RegisterSchemaVersion"].apply(partialParams));
    }
    invokeRemoveSchemaVersionMetadata(partialParams) {
        return this.client.removeSchemaVersionMetadata(this.ops["RemoveSchemaVersionMetadata"].apply(partialParams));
    }
    invokeResetJobBookmark(partialParams) {
        return this.client.resetJobBookmark(this.ops["ResetJobBookmark"].apply(partialParams));
    }
    invokeResumeWorkflowRun(partialParams) {
        return this.client.resumeWorkflowRun(this.ops["ResumeWorkflowRun"].apply(partialParams));
    }
    invokeStartBlueprintRun(partialParams) {
        return this.client.startBlueprintRun(this.ops["StartBlueprintRun"].apply(partialParams));
    }
    invokeStartCrawler(partialParams) {
        return this.client.startCrawler(this.ops["StartCrawler"].apply(partialParams));
    }
    invokeStartCrawlerSchedule(partialParams) {
        return this.client.startCrawlerSchedule(this.ops["StartCrawlerSchedule"].apply(partialParams));
    }
    invokeStartExportLabelsTaskRun(partialParams) {
        return this.client.startExportLabelsTaskRun(this.ops["StartExportLabelsTaskRun"].apply(partialParams));
    }
    invokeStartImportLabelsTaskRun(partialParams) {
        return this.client.startImportLabelsTaskRun(this.ops["StartImportLabelsTaskRun"].apply(partialParams));
    }
    invokeStartJobRun(partialParams) {
        return this.client.startJobRun(this.ops["StartJobRun"].apply(partialParams));
    }
    invokeStartMLEvaluationTaskRun(partialParams) {
        return this.client.startMLEvaluationTaskRun(this.ops["StartMLEvaluationTaskRun"].apply(partialParams));
    }
    invokeStartMLLabelingSetGenerationTaskRun(partialParams) {
        return this.client.startMLLabelingSetGenerationTaskRun(this.ops["StartMLLabelingSetGenerationTaskRun"].apply(partialParams));
    }
    invokeStartTrigger(partialParams) {
        return this.client.startTrigger(this.ops["StartTrigger"].apply(partialParams));
    }
    invokeStartWorkflowRun(partialParams) {
        return this.client.startWorkflowRun(this.ops["StartWorkflowRun"].apply(partialParams));
    }
    invokeStopCrawler(partialParams) {
        return this.client.stopCrawler(this.ops["StopCrawler"].apply(partialParams));
    }
    invokeStopCrawlerSchedule(partialParams) {
        return this.client.stopCrawlerSchedule(this.ops["StopCrawlerSchedule"].apply(partialParams));
    }
    invokeStopTrigger(partialParams) {
        return this.client.stopTrigger(this.ops["StopTrigger"].apply(partialParams));
    }
    invokeStopWorkflowRun(partialParams) {
        return this.client.stopWorkflowRun(this.ops["StopWorkflowRun"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateBlueprint(partialParams) {
        return this.client.updateBlueprint(this.ops["UpdateBlueprint"].apply(partialParams));
    }
    invokeUpdateColumnStatisticsForPartition(partialParams) {
        return this.client.updateColumnStatisticsForPartition(this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeUpdateColumnStatisticsForTable(partialParams) {
        return this.client.updateColumnStatisticsForTable(this.ops["UpdateColumnStatisticsForTable"].apply(partialParams));
    }
    invokeUpdateConnection(partialParams) {
        return this.client.updateConnection(this.ops["UpdateConnection"].apply(partialParams));
    }
    invokeUpdateCrawler(partialParams) {
        return this.client.updateCrawler(this.ops["UpdateCrawler"].apply(partialParams));
    }
    invokeUpdateCrawlerSchedule(partialParams) {
        return this.client.updateCrawlerSchedule(this.ops["UpdateCrawlerSchedule"].apply(partialParams));
    }
    invokeUpdateDatabase(partialParams) {
        return this.client.updateDatabase(this.ops["UpdateDatabase"].apply(partialParams));
    }
    invokeUpdateDevEndpoint(partialParams) {
        return this.client.updateDevEndpoint(this.ops["UpdateDevEndpoint"].apply(partialParams));
    }
    invokeUpdateJob(partialParams) {
        return this.client.updateJob(this.ops["UpdateJob"].apply(partialParams));
    }
    invokeUpdateMLTransform(partialParams) {
        return this.client.updateMLTransform(this.ops["UpdateMLTransform"].apply(partialParams));
    }
    invokeUpdatePartition(partialParams) {
        return this.client.updatePartition(this.ops["UpdatePartition"].apply(partialParams));
    }
    invokeUpdateRegistry(partialParams) {
        return this.client.updateRegistry(this.ops["UpdateRegistry"].apply(partialParams));
    }
    invokeUpdateSchema(partialParams) {
        return this.client.updateSchema(this.ops["UpdateSchema"].apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        return this.client.updateTable(this.ops["UpdateTable"].apply(partialParams));
    }
    invokeUpdateTrigger(partialParams) {
        return this.client.updateTrigger(this.ops["UpdateTrigger"].apply(partialParams));
    }
    invokeUpdateUserDefinedFunction(partialParams) {
        return this.client.updateUserDefinedFunction(this.ops["UpdateUserDefinedFunction"].apply(partialParams));
    }
    invokeUpdateWorkflow(partialParams) {
        return this.client.updateWorkflow(this.ops["UpdateWorkflow"].apply(partialParams));
    }
}
exports.default = default_1;
