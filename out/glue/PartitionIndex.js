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
class default_1 extends aws.glue.PartitionIndex {
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
    invokeBatchDeleteConnection(partialParams) {
        this.boot();
        return this.client.batchDeleteConnection(this.ops["BatchDeleteConnection"].apply(partialParams));
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
    invokeBatchGetBlueprints(partialParams) {
        this.boot();
        return this.client.batchGetBlueprints(this.ops["BatchGetBlueprints"].apply(partialParams));
    }
    invokeBatchGetCrawlers(partialParams) {
        this.boot();
        return this.client.batchGetCrawlers(this.ops["BatchGetCrawlers"].apply(partialParams));
    }
    invokeBatchGetDevEndpoints(partialParams) {
        this.boot();
        return this.client.batchGetDevEndpoints(this.ops["BatchGetDevEndpoints"].apply(partialParams));
    }
    invokeBatchGetJobs(partialParams) {
        this.boot();
        return this.client.batchGetJobs(this.ops["BatchGetJobs"].apply(partialParams));
    }
    invokeBatchGetPartition(partialParams) {
        this.boot();
        return this.client.batchGetPartition(this.ops["BatchGetPartition"].apply(partialParams));
    }
    invokeBatchGetTriggers(partialParams) {
        this.boot();
        return this.client.batchGetTriggers(this.ops["BatchGetTriggers"].apply(partialParams));
    }
    invokeBatchGetWorkflows(partialParams) {
        this.boot();
        return this.client.batchGetWorkflows(this.ops["BatchGetWorkflows"].apply(partialParams));
    }
    invokeBatchStopJobRun(partialParams) {
        this.boot();
        return this.client.batchStopJobRun(this.ops["BatchStopJobRun"].apply(partialParams));
    }
    invokeBatchUpdatePartition(partialParams) {
        this.boot();
        return this.client.batchUpdatePartition(this.ops["BatchUpdatePartition"].apply(partialParams));
    }
    invokeCancelMLTaskRun(partialParams) {
        this.boot();
        return this.client.cancelMLTaskRun(this.ops["CancelMLTaskRun"].apply(partialParams));
    }
    invokeCheckSchemaVersionValidity(partialParams) {
        this.boot();
        return this.client.checkSchemaVersionValidity(this.ops["CheckSchemaVersionValidity"].apply(partialParams));
    }
    invokeCreateBlueprint(partialParams) {
        this.boot();
        return this.client.createBlueprint(this.ops["CreateBlueprint"].apply(partialParams));
    }
    invokeCreateClassifier(partialParams) {
        this.boot();
        return this.client.createClassifier(this.ops["CreateClassifier"].apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        this.boot();
        return this.client.createConnection(this.ops["CreateConnection"].apply(partialParams));
    }
    invokeCreateCrawler(partialParams) {
        this.boot();
        return this.client.createCrawler(this.ops["CreateCrawler"].apply(partialParams));
    }
    invokeCreateDatabase(partialParams) {
        this.boot();
        return this.client.createDatabase(this.ops["CreateDatabase"].apply(partialParams));
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
    invokeCreatePartition(partialParams) {
        this.boot();
        return this.client.createPartition(this.ops["CreatePartition"].apply(partialParams));
    }
    invokeCreatePartitionIndex(partialParams) {
        this.boot();
        return this.client.createPartitionIndex(this.ops["CreatePartitionIndex"].apply(partialParams));
    }
    invokeCreateRegistry(partialParams) {
        this.boot();
        return this.client.createRegistry(this.ops["CreateRegistry"].apply(partialParams));
    }
    invokeCreateSchema(partialParams) {
        this.boot();
        return this.client.createSchema(this.ops["CreateSchema"].apply(partialParams));
    }
    invokeCreateScript(partialParams) {
        this.boot();
        return this.client.createScript(this.ops["CreateScript"].apply(partialParams));
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
    invokeDeleteConnection(partialParams) {
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteCrawler(partialParams) {
        this.boot();
        return this.client.deleteCrawler(this.ops["DeleteCrawler"].apply(partialParams));
    }
    invokeDeleteDatabase(partialParams) {
        this.boot();
        return this.client.deleteDatabase(this.ops["DeleteDatabase"].apply(partialParams));
    }
    invokeDeleteDevEndpoint(partialParams) {
        this.boot();
        return this.client.deleteDevEndpoint(this.ops["DeleteDevEndpoint"].apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        this.boot();
        return this.client.deleteJob(this.ops["DeleteJob"].apply(partialParams));
    }
    invokeDeleteMLTransform(partialParams) {
        this.boot();
        return this.client.deleteMLTransform(this.ops["DeleteMLTransform"].apply(partialParams));
    }
    invokeDeletePartition(partialParams) {
        this.boot();
        return this.client.deletePartition(this.ops["DeletePartition"].apply(partialParams));
    }
    invokeDeletePartitionIndex(partialParams) {
        this.boot();
        return this.client.deletePartitionIndex(this.ops["DeletePartitionIndex"].apply(partialParams));
    }
    invokeDeleteRegistry(partialParams) {
        this.boot();
        return this.client.deleteRegistry(this.ops["DeleteRegistry"].apply(partialParams));
    }
    invokeDeleteResourcePolicy(partialParams) {
        this.boot();
        return this.client.deleteResourcePolicy(this.ops["DeleteResourcePolicy"].apply(partialParams));
    }
    invokeDeleteSchema(partialParams) {
        this.boot();
        return this.client.deleteSchema(this.ops["DeleteSchema"].apply(partialParams));
    }
    invokeDeleteSchemaVersions(partialParams) {
        this.boot();
        return this.client.deleteSchemaVersions(this.ops["DeleteSchemaVersions"].apply(partialParams));
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
    invokeGetBlueprintRun(partialParams) {
        this.boot();
        return this.client.getBlueprintRun(this.ops["GetBlueprintRun"].apply(partialParams));
    }
    invokeGetBlueprintRuns(partialParams) {
        this.boot();
        return this.client.getBlueprintRuns(this.ops["GetBlueprintRuns"].apply(partialParams));
    }
    invokeGetCatalogImportStatus(partialParams) {
        this.boot();
        return this.client.getCatalogImportStatus(this.ops["GetCatalogImportStatus"].apply(partialParams));
    }
    invokeGetClassifier(partialParams) {
        this.boot();
        return this.client.getClassifier(this.ops["GetClassifier"].apply(partialParams));
    }
    invokeGetClassifiers(partialParams) {
        this.boot();
        return this.client.getClassifiers(this.ops["GetClassifiers"].apply(partialParams));
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
    invokeGetConnections(partialParams) {
        this.boot();
        return this.client.getConnections(this.ops["GetConnections"].apply(partialParams));
    }
    invokeGetCrawler(partialParams) {
        this.boot();
        return this.client.getCrawler(this.ops["GetCrawler"].apply(partialParams));
    }
    invokeGetCrawlerMetrics(partialParams) {
        this.boot();
        return this.client.getCrawlerMetrics(this.ops["GetCrawlerMetrics"].apply(partialParams));
    }
    invokeGetCrawlers(partialParams) {
        this.boot();
        return this.client.getCrawlers(this.ops["GetCrawlers"].apply(partialParams));
    }
    invokeGetDataCatalogEncryptionSettings(partialParams) {
        this.boot();
        return this.client.getDataCatalogEncryptionSettings(this.ops["GetDataCatalogEncryptionSettings"].apply(partialParams));
    }
    invokeGetDatabase(partialParams) {
        this.boot();
        return this.client.getDatabase(this.ops["GetDatabase"].apply(partialParams));
    }
    invokeGetDatabases(partialParams) {
        this.boot();
        return this.client.getDatabases(this.ops["GetDatabases"].apply(partialParams));
    }
    invokeGetDataflowGraph(partialParams) {
        this.boot();
        return this.client.getDataflowGraph(this.ops["GetDataflowGraph"].apply(partialParams));
    }
    invokeGetDevEndpoint(partialParams) {
        this.boot();
        return this.client.getDevEndpoint(this.ops["GetDevEndpoint"].apply(partialParams));
    }
    invokeGetDevEndpoints(partialParams) {
        this.boot();
        return this.client.getDevEndpoints(this.ops["GetDevEndpoints"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        this.boot();
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetJobBookmark(partialParams) {
        this.boot();
        return this.client.getJobBookmark(this.ops["GetJobBookmark"].apply(partialParams));
    }
    invokeGetJobRun(partialParams) {
        this.boot();
        return this.client.getJobRun(this.ops["GetJobRun"].apply(partialParams));
    }
    invokeGetJobRuns(partialParams) {
        this.boot();
        return this.client.getJobRuns(this.ops["GetJobRuns"].apply(partialParams));
    }
    invokeGetJobs(partialParams) {
        this.boot();
        return this.client.getJobs(this.ops["GetJobs"].apply(partialParams));
    }
    invokeGetMLTaskRun(partialParams) {
        this.boot();
        return this.client.getMLTaskRun(this.ops["GetMLTaskRun"].apply(partialParams));
    }
    invokeGetMLTaskRuns(partialParams) {
        this.boot();
        return this.client.getMLTaskRuns(this.ops["GetMLTaskRuns"].apply(partialParams));
    }
    invokeGetMLTransform(partialParams) {
        this.boot();
        return this.client.getMLTransform(this.ops["GetMLTransform"].apply(partialParams));
    }
    invokeGetMLTransforms(partialParams) {
        this.boot();
        return this.client.getMLTransforms(this.ops["GetMLTransforms"].apply(partialParams));
    }
    invokeGetMapping(partialParams) {
        this.boot();
        return this.client.getMapping(this.ops["GetMapping"].apply(partialParams));
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
    invokeGetPlan(partialParams) {
        this.boot();
        return this.client.getPlan(this.ops["GetPlan"].apply(partialParams));
    }
    invokeGetRegistry(partialParams) {
        this.boot();
        return this.client.getRegistry(this.ops["GetRegistry"].apply(partialParams));
    }
    invokeGetResourcePolicies(partialParams) {
        this.boot();
        return this.client.getResourcePolicies(this.ops["GetResourcePolicies"].apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        this.boot();
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].apply(partialParams));
    }
    invokeGetSchema(partialParams) {
        this.boot();
        return this.client.getSchema(this.ops["GetSchema"].apply(partialParams));
    }
    invokeGetSchemaByDefinition(partialParams) {
        this.boot();
        return this.client.getSchemaByDefinition(this.ops["GetSchemaByDefinition"].apply(partialParams));
    }
    invokeGetSchemaVersion(partialParams) {
        this.boot();
        return this.client.getSchemaVersion(this.ops["GetSchemaVersion"].apply(partialParams));
    }
    invokeGetSchemaVersionsDiff(partialParams) {
        this.boot();
        return this.client.getSchemaVersionsDiff(this.ops["GetSchemaVersionsDiff"].apply(partialParams));
    }
    invokeGetSecurityConfiguration(partialParams) {
        this.boot();
        return this.client.getSecurityConfiguration(this.ops["GetSecurityConfiguration"].apply(partialParams));
    }
    invokeGetSecurityConfigurations(partialParams) {
        this.boot();
        return this.client.getSecurityConfigurations(this.ops["GetSecurityConfigurations"].apply(partialParams));
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
    invokeGetTags(partialParams) {
        this.boot();
        return this.client.getTags(this.ops["GetTags"].apply(partialParams));
    }
    invokeGetTrigger(partialParams) {
        this.boot();
        return this.client.getTrigger(this.ops["GetTrigger"].apply(partialParams));
    }
    invokeGetTriggers(partialParams) {
        this.boot();
        return this.client.getTriggers(this.ops["GetTriggers"].apply(partialParams));
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
    invokeGetUserDefinedFunctions(partialParams) {
        this.boot();
        return this.client.getUserDefinedFunctions(this.ops["GetUserDefinedFunctions"].apply(partialParams));
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
    invokeImportCatalogToGlue(partialParams) {
        this.boot();
        return this.client.importCatalogToGlue(this.ops["ImportCatalogToGlue"].apply(partialParams));
    }
    invokeListBlueprints(partialParams) {
        this.boot();
        return this.client.listBlueprints(this.ops["ListBlueprints"].apply(partialParams));
    }
    invokeListCrawlers(partialParams) {
        this.boot();
        return this.client.listCrawlers(this.ops["ListCrawlers"].apply(partialParams));
    }
    invokeListDevEndpoints(partialParams) {
        this.boot();
        return this.client.listDevEndpoints(this.ops["ListDevEndpoints"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListMLTransforms(partialParams) {
        this.boot();
        return this.client.listMLTransforms(this.ops["ListMLTransforms"].apply(partialParams));
    }
    invokeListRegistries(partialParams) {
        this.boot();
        return this.client.listRegistries(this.ops["ListRegistries"].apply(partialParams));
    }
    invokeListSchemaVersions(partialParams) {
        this.boot();
        return this.client.listSchemaVersions(this.ops["ListSchemaVersions"].apply(partialParams));
    }
    invokeListSchemas(partialParams) {
        this.boot();
        return this.client.listSchemas(this.ops["ListSchemas"].apply(partialParams));
    }
    invokeListTriggers(partialParams) {
        this.boot();
        return this.client.listTriggers(this.ops["ListTriggers"].apply(partialParams));
    }
    invokeListWorkflows(partialParams) {
        this.boot();
        return this.client.listWorkflows(this.ops["ListWorkflows"].apply(partialParams));
    }
    invokePutDataCatalogEncryptionSettings(partialParams) {
        this.boot();
        return this.client.putDataCatalogEncryptionSettings(this.ops["PutDataCatalogEncryptionSettings"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        this.boot();
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokePutSchemaVersionMetadata(partialParams) {
        this.boot();
        return this.client.putSchemaVersionMetadata(this.ops["PutSchemaVersionMetadata"].apply(partialParams));
    }
    invokePutWorkflowRunProperties(partialParams) {
        this.boot();
        return this.client.putWorkflowRunProperties(this.ops["PutWorkflowRunProperties"].apply(partialParams));
    }
    invokeQuerySchemaVersionMetadata(partialParams) {
        this.boot();
        return this.client.querySchemaVersionMetadata(this.ops["QuerySchemaVersionMetadata"].apply(partialParams));
    }
    invokeRegisterSchemaVersion(partialParams) {
        this.boot();
        return this.client.registerSchemaVersion(this.ops["RegisterSchemaVersion"].apply(partialParams));
    }
    invokeRemoveSchemaVersionMetadata(partialParams) {
        this.boot();
        return this.client.removeSchemaVersionMetadata(this.ops["RemoveSchemaVersionMetadata"].apply(partialParams));
    }
    invokeResetJobBookmark(partialParams) {
        this.boot();
        return this.client.resetJobBookmark(this.ops["ResetJobBookmark"].apply(partialParams));
    }
    invokeResumeWorkflowRun(partialParams) {
        this.boot();
        return this.client.resumeWorkflowRun(this.ops["ResumeWorkflowRun"].apply(partialParams));
    }
    invokeSearchTables(partialParams) {
        this.boot();
        return this.client.searchTables(this.ops["SearchTables"].apply(partialParams));
    }
    invokeStartBlueprintRun(partialParams) {
        this.boot();
        return this.client.startBlueprintRun(this.ops["StartBlueprintRun"].apply(partialParams));
    }
    invokeStartCrawler(partialParams) {
        this.boot();
        return this.client.startCrawler(this.ops["StartCrawler"].apply(partialParams));
    }
    invokeStartCrawlerSchedule(partialParams) {
        this.boot();
        return this.client.startCrawlerSchedule(this.ops["StartCrawlerSchedule"].apply(partialParams));
    }
    invokeStartExportLabelsTaskRun(partialParams) {
        this.boot();
        return this.client.startExportLabelsTaskRun(this.ops["StartExportLabelsTaskRun"].apply(partialParams));
    }
    invokeStartImportLabelsTaskRun(partialParams) {
        this.boot();
        return this.client.startImportLabelsTaskRun(this.ops["StartImportLabelsTaskRun"].apply(partialParams));
    }
    invokeStartJobRun(partialParams) {
        this.boot();
        return this.client.startJobRun(this.ops["StartJobRun"].apply(partialParams));
    }
    invokeStartMLEvaluationTaskRun(partialParams) {
        this.boot();
        return this.client.startMLEvaluationTaskRun(this.ops["StartMLEvaluationTaskRun"].apply(partialParams));
    }
    invokeStartMLLabelingSetGenerationTaskRun(partialParams) {
        this.boot();
        return this.client.startMLLabelingSetGenerationTaskRun(this.ops["StartMLLabelingSetGenerationTaskRun"].apply(partialParams));
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
    invokeStopCrawlerSchedule(partialParams) {
        this.boot();
        return this.client.stopCrawlerSchedule(this.ops["StopCrawlerSchedule"].apply(partialParams));
    }
    invokeStopTrigger(partialParams) {
        this.boot();
        return this.client.stopTrigger(this.ops["StopTrigger"].apply(partialParams));
    }
    invokeStopWorkflowRun(partialParams) {
        this.boot();
        return this.client.stopWorkflowRun(this.ops["StopWorkflowRun"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateBlueprint(partialParams) {
        this.boot();
        return this.client.updateBlueprint(this.ops["UpdateBlueprint"].apply(partialParams));
    }
    invokeUpdateClassifier(partialParams) {
        this.boot();
        return this.client.updateClassifier(this.ops["UpdateClassifier"].apply(partialParams));
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
    invokeUpdateCrawlerSchedule(partialParams) {
        this.boot();
        return this.client.updateCrawlerSchedule(this.ops["UpdateCrawlerSchedule"].apply(partialParams));
    }
    invokeUpdateDatabase(partialParams) {
        this.boot();
        return this.client.updateDatabase(this.ops["UpdateDatabase"].apply(partialParams));
    }
    invokeUpdateDevEndpoint(partialParams) {
        this.boot();
        return this.client.updateDevEndpoint(this.ops["UpdateDevEndpoint"].apply(partialParams));
    }
    invokeUpdateJob(partialParams) {
        this.boot();
        return this.client.updateJob(this.ops["UpdateJob"].apply(partialParams));
    }
    invokeUpdateMLTransform(partialParams) {
        this.boot();
        return this.client.updateMLTransform(this.ops["UpdateMLTransform"].apply(partialParams));
    }
    invokeUpdatePartition(partialParams) {
        this.boot();
        return this.client.updatePartition(this.ops["UpdatePartition"].apply(partialParams));
    }
    invokeUpdateRegistry(partialParams) {
        this.boot();
        return this.client.updateRegistry(this.ops["UpdateRegistry"].apply(partialParams));
    }
    invokeUpdateSchema(partialParams) {
        this.boot();
        return this.client.updateSchema(this.ops["UpdateSchema"].apply(partialParams));
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
