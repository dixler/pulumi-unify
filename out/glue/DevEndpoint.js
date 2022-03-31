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
        this.client = new awssdk.Glue();
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
    invokeBatchCreatePartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreatePartition(this.ops["BatchCreatePartition"].applicator.apply(partialParams));
    }
    invokeBatchDeleteConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteConnection(this.ops["BatchDeleteConnection"].applicator.apply(partialParams));
    }
    invokeBatchDeletePartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeletePartition(this.ops["BatchDeletePartition"].applicator.apply(partialParams));
    }
    invokeBatchDeleteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteTable(this.ops["BatchDeleteTable"].applicator.apply(partialParams));
    }
    invokeBatchDeleteTableVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteTableVersion(this.ops["BatchDeleteTableVersion"].applicator.apply(partialParams));
    }
    invokeBatchGetBlueprints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetBlueprints(this.ops["BatchGetBlueprints"].applicator.apply(partialParams));
    }
    invokeBatchGetCrawlers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetCrawlers(this.ops["BatchGetCrawlers"].applicator.apply(partialParams));
    }
    invokeBatchGetDevEndpoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDevEndpoints(this.ops["BatchGetDevEndpoints"].applicator.apply(partialParams));
    }
    invokeBatchGetJobs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetJobs(this.ops["BatchGetJobs"].applicator.apply(partialParams));
    }
    invokeBatchGetPartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetPartition(this.ops["BatchGetPartition"].applicator.apply(partialParams));
    }
    invokeBatchGetTriggers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetTriggers(this.ops["BatchGetTriggers"].applicator.apply(partialParams));
    }
    invokeBatchGetWorkflows(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetWorkflows(this.ops["BatchGetWorkflows"].applicator.apply(partialParams));
    }
    invokeBatchStopJobRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchStopJobRun(this.ops["BatchStopJobRun"].applicator.apply(partialParams));
    }
    invokeBatchUpdatePartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdatePartition(this.ops["BatchUpdatePartition"].applicator.apply(partialParams));
    }
    invokeCancelMLTaskRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelMLTaskRun(this.ops["CancelMLTaskRun"].applicator.apply(partialParams));
    }
    invokeCheckSchemaVersionValidity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkSchemaVersionValidity(this.ops["CheckSchemaVersionValidity"].applicator.apply(partialParams));
    }
    invokeCreateBlueprint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBlueprint(this.ops["CreateBlueprint"].applicator.apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnection(this.ops["CreateConnection"].applicator.apply(partialParams));
    }
    invokeCreateCrawler(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCrawler(this.ops["CreateCrawler"].applicator.apply(partialParams));
    }
    invokeCreateDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDatabase(this.ops["CreateDatabase"].applicator.apply(partialParams));
    }
    invokeCreateDevEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDevEndpoint(this.ops["CreateDevEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].applicator.apply(partialParams));
    }
    invokeCreateMLTransform(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMLTransform(this.ops["CreateMLTransform"].applicator.apply(partialParams));
    }
    invokeCreatePartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPartition(this.ops["CreatePartition"].applicator.apply(partialParams));
    }
    invokeCreatePartitionIndex(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPartitionIndex(this.ops["CreatePartitionIndex"].applicator.apply(partialParams));
    }
    invokeCreateRegistry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegistry(this.ops["CreateRegistry"].applicator.apply(partialParams));
    }
    invokeCreateSchema(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSchema(this.ops["CreateSchema"].applicator.apply(partialParams));
    }
    invokeCreateSecurityConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityConfiguration(this.ops["CreateSecurityConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTable(this.ops["CreateTable"].applicator.apply(partialParams));
    }
    invokeCreateTrigger(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrigger(this.ops["CreateTrigger"].applicator.apply(partialParams));
    }
    invokeCreateUserDefinedFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserDefinedFunction(this.ops["CreateUserDefinedFunction"].applicator.apply(partialParams));
    }
    invokeCreateWorkflow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkflow(this.ops["CreateWorkflow"].applicator.apply(partialParams));
    }
    invokeDeleteBlueprint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBlueprint(this.ops["DeleteBlueprint"].applicator.apply(partialParams));
    }
    invokeDeleteClassifier(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClassifier(this.ops["DeleteClassifier"].applicator.apply(partialParams));
    }
    invokeDeleteColumnStatisticsForPartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(this.ops["DeleteColumnStatisticsForPartition"].applicator.apply(partialParams));
    }
    invokeDeleteColumnStatisticsForTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteColumnStatisticsForTable(this.ops["DeleteColumnStatisticsForTable"].applicator.apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].applicator.apply(partialParams));
    }
    invokeDeleteCrawler(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCrawler(this.ops["DeleteCrawler"].applicator.apply(partialParams));
    }
    invokeDeleteDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDatabase(this.ops["DeleteDatabase"].applicator.apply(partialParams));
    }
    invokeDeleteDevEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDevEndpoint(this.ops["DeleteDevEndpoint"].applicator.apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJob(this.ops["DeleteJob"].applicator.apply(partialParams));
    }
    invokeDeleteMLTransform(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMLTransform(this.ops["DeleteMLTransform"].applicator.apply(partialParams));
    }
    invokeDeletePartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePartition(this.ops["DeletePartition"].applicator.apply(partialParams));
    }
    invokeDeletePartitionIndex(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePartitionIndex(this.ops["DeletePartitionIndex"].applicator.apply(partialParams));
    }
    invokeDeleteRegistry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegistry(this.ops["DeleteRegistry"].applicator.apply(partialParams));
    }
    invokeDeleteSchema(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchema(this.ops["DeleteSchema"].applicator.apply(partialParams));
    }
    invokeDeleteSchemaVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchemaVersions(this.ops["DeleteSchemaVersions"].applicator.apply(partialParams));
    }
    invokeDeleteSecurityConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecurityConfiguration(this.ops["DeleteSecurityConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].applicator.apply(partialParams));
    }
    invokeDeleteTableVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTableVersion(this.ops["DeleteTableVersion"].applicator.apply(partialParams));
    }
    invokeDeleteTrigger(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrigger(this.ops["DeleteTrigger"].applicator.apply(partialParams));
    }
    invokeDeleteUserDefinedFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserDefinedFunction(this.ops["DeleteUserDefinedFunction"].applicator.apply(partialParams));
    }
    invokeDeleteWorkflow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkflow(this.ops["DeleteWorkflow"].applicator.apply(partialParams));
    }
    invokeGetBlueprint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlueprint(this.ops["GetBlueprint"].applicator.apply(partialParams));
    }
    invokeGetBlueprintRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlueprintRun(this.ops["GetBlueprintRun"].applicator.apply(partialParams));
    }
    invokeGetBlueprintRuns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlueprintRuns(this.ops["GetBlueprintRuns"].applicator.apply(partialParams));
    }
    invokeGetClassifier(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getClassifier(this.ops["GetClassifier"].applicator.apply(partialParams));
    }
    invokeGetColumnStatisticsForPartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getColumnStatisticsForPartition(this.ops["GetColumnStatisticsForPartition"].applicator.apply(partialParams));
    }
    invokeGetColumnStatisticsForTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getColumnStatisticsForTable(this.ops["GetColumnStatisticsForTable"].applicator.apply(partialParams));
    }
    invokeGetConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConnection(this.ops["GetConnection"].applicator.apply(partialParams));
    }
    invokeGetCrawler(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCrawler(this.ops["GetCrawler"].applicator.apply(partialParams));
    }
    invokeGetDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDatabase(this.ops["GetDatabase"].applicator.apply(partialParams));
    }
    invokeGetDevEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevEndpoint(this.ops["GetDevEndpoint"].applicator.apply(partialParams));
    }
    invokeGetJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(this.ops["GetJob"].applicator.apply(partialParams));
    }
    invokeGetJobBookmark(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobBookmark(this.ops["GetJobBookmark"].applicator.apply(partialParams));
    }
    invokeGetJobRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobRun(this.ops["GetJobRun"].applicator.apply(partialParams));
    }
    invokeGetJobRuns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobRuns(this.ops["GetJobRuns"].applicator.apply(partialParams));
    }
    invokeGetMLTaskRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMLTaskRun(this.ops["GetMLTaskRun"].applicator.apply(partialParams));
    }
    invokeGetMLTaskRuns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMLTaskRuns(this.ops["GetMLTaskRuns"].applicator.apply(partialParams));
    }
    invokeGetMLTransform(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMLTransform(this.ops["GetMLTransform"].applicator.apply(partialParams));
    }
    invokeGetMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMapping(this.ops["GetMapping"].applicator.apply(partialParams));
    }
    invokeGetPartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPartition(this.ops["GetPartition"].applicator.apply(partialParams));
    }
    invokeGetPartitionIndexes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPartitionIndexes(this.ops["GetPartitionIndexes"].applicator.apply(partialParams));
    }
    invokeGetPartitions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPartitions(this.ops["GetPartitions"].applicator.apply(partialParams));
    }
    invokeGetPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPlan(this.ops["GetPlan"].applicator.apply(partialParams));
    }
    invokeGetRegistry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegistry(this.ops["GetRegistry"].applicator.apply(partialParams));
    }
    invokeGetSchema(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchema(this.ops["GetSchema"].applicator.apply(partialParams));
    }
    invokeGetSchemaByDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchemaByDefinition(this.ops["GetSchemaByDefinition"].applicator.apply(partialParams));
    }
    invokeGetSchemaVersionsDiff(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchemaVersionsDiff(this.ops["GetSchemaVersionsDiff"].applicator.apply(partialParams));
    }
    invokeGetSecurityConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSecurityConfiguration(this.ops["GetSecurityConfiguration"].applicator.apply(partialParams));
    }
    invokeGetTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTable(this.ops["GetTable"].applicator.apply(partialParams));
    }
    invokeGetTableVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableVersion(this.ops["GetTableVersion"].applicator.apply(partialParams));
    }
    invokeGetTableVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableVersions(this.ops["GetTableVersions"].applicator.apply(partialParams));
    }
    invokeGetTables(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTables(this.ops["GetTables"].applicator.apply(partialParams));
    }
    invokeGetTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTags(this.ops["GetTags"].applicator.apply(partialParams));
    }
    invokeGetTrigger(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrigger(this.ops["GetTrigger"].applicator.apply(partialParams));
    }
    invokeGetUnfilteredPartitionMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(this.ops["GetUnfilteredPartitionMetadata"].applicator.apply(partialParams));
    }
    invokeGetUnfilteredPartitionsMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(this.ops["GetUnfilteredPartitionsMetadata"].applicator.apply(partialParams));
    }
    invokeGetUnfilteredTableMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUnfilteredTableMetadata(this.ops["GetUnfilteredTableMetadata"].applicator.apply(partialParams));
    }
    invokeGetUserDefinedFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserDefinedFunction(this.ops["GetUserDefinedFunction"].applicator.apply(partialParams));
    }
    invokeGetUserDefinedFunctions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserDefinedFunctions(this.ops["GetUserDefinedFunctions"].applicator.apply(partialParams));
    }
    invokeGetWorkflow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflow(this.ops["GetWorkflow"].applicator.apply(partialParams));
    }
    invokeGetWorkflowRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowRun(this.ops["GetWorkflowRun"].applicator.apply(partialParams));
    }
    invokeGetWorkflowRunProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowRunProperties(this.ops["GetWorkflowRunProperties"].applicator.apply(partialParams));
    }
    invokeGetWorkflowRuns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowRuns(this.ops["GetWorkflowRuns"].applicator.apply(partialParams));
    }
    invokeListSchemaVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSchemaVersions(this.ops["ListSchemaVersions"].applicator.apply(partialParams));
    }
    invokePutDataCatalogEncryptionSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putDataCatalogEncryptionSettings(this.ops["PutDataCatalogEncryptionSettings"].applicator.apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].applicator.apply(partialParams));
    }
    invokePutSchemaVersionMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSchemaVersionMetadata(this.ops["PutSchemaVersionMetadata"].applicator.apply(partialParams));
    }
    invokePutWorkflowRunProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putWorkflowRunProperties(this.ops["PutWorkflowRunProperties"].applicator.apply(partialParams));
    }
    invokeRegisterSchemaVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerSchemaVersion(this.ops["RegisterSchemaVersion"].applicator.apply(partialParams));
    }
    invokeRemoveSchemaVersionMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeSchemaVersionMetadata(this.ops["RemoveSchemaVersionMetadata"].applicator.apply(partialParams));
    }
    invokeResetJobBookmark(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetJobBookmark(this.ops["ResetJobBookmark"].applicator.apply(partialParams));
    }
    invokeResumeWorkflowRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeWorkflowRun(this.ops["ResumeWorkflowRun"].applicator.apply(partialParams));
    }
    invokeStartBlueprintRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBlueprintRun(this.ops["StartBlueprintRun"].applicator.apply(partialParams));
    }
    invokeStartCrawler(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCrawler(this.ops["StartCrawler"].applicator.apply(partialParams));
    }
    invokeStartCrawlerSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCrawlerSchedule(this.ops["StartCrawlerSchedule"].applicator.apply(partialParams));
    }
    invokeStartExportLabelsTaskRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startExportLabelsTaskRun(this.ops["StartExportLabelsTaskRun"].applicator.apply(partialParams));
    }
    invokeStartImportLabelsTaskRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImportLabelsTaskRun(this.ops["StartImportLabelsTaskRun"].applicator.apply(partialParams));
    }
    invokeStartJobRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startJobRun(this.ops["StartJobRun"].applicator.apply(partialParams));
    }
    invokeStartMLEvaluationTaskRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMLEvaluationTaskRun(this.ops["StartMLEvaluationTaskRun"].applicator.apply(partialParams));
    }
    invokeStartMLLabelingSetGenerationTaskRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMLLabelingSetGenerationTaskRun(this.ops["StartMLLabelingSetGenerationTaskRun"].applicator.apply(partialParams));
    }
    invokeStartTrigger(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startTrigger(this.ops["StartTrigger"].applicator.apply(partialParams));
    }
    invokeStartWorkflowRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startWorkflowRun(this.ops["StartWorkflowRun"].applicator.apply(partialParams));
    }
    invokeStopCrawler(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCrawler(this.ops["StopCrawler"].applicator.apply(partialParams));
    }
    invokeStopCrawlerSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCrawlerSchedule(this.ops["StopCrawlerSchedule"].applicator.apply(partialParams));
    }
    invokeStopTrigger(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTrigger(this.ops["StopTrigger"].applicator.apply(partialParams));
    }
    invokeStopWorkflowRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopWorkflowRun(this.ops["StopWorkflowRun"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateBlueprint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBlueprint(this.ops["UpdateBlueprint"].applicator.apply(partialParams));
    }
    invokeUpdateColumnStatisticsForPartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateColumnStatisticsForPartition(this.ops["UpdateColumnStatisticsForPartition"].applicator.apply(partialParams));
    }
    invokeUpdateColumnStatisticsForTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateColumnStatisticsForTable(this.ops["UpdateColumnStatisticsForTable"].applicator.apply(partialParams));
    }
    invokeUpdateConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnection(this.ops["UpdateConnection"].applicator.apply(partialParams));
    }
    invokeUpdateCrawler(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCrawler(this.ops["UpdateCrawler"].applicator.apply(partialParams));
    }
    invokeUpdateCrawlerSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCrawlerSchedule(this.ops["UpdateCrawlerSchedule"].applicator.apply(partialParams));
    }
    invokeUpdateDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDatabase(this.ops["UpdateDatabase"].applicator.apply(partialParams));
    }
    invokeUpdateDevEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevEndpoint(this.ops["UpdateDevEndpoint"].applicator.apply(partialParams));
    }
    invokeUpdateJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJob(this.ops["UpdateJob"].applicator.apply(partialParams));
    }
    invokeUpdateMLTransform(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMLTransform(this.ops["UpdateMLTransform"].applicator.apply(partialParams));
    }
    invokeUpdatePartition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePartition(this.ops["UpdatePartition"].applicator.apply(partialParams));
    }
    invokeUpdateRegistry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegistry(this.ops["UpdateRegistry"].applicator.apply(partialParams));
    }
    invokeUpdateSchema(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSchema(this.ops["UpdateSchema"].applicator.apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTable(this.ops["UpdateTable"].applicator.apply(partialParams));
    }
    invokeUpdateTrigger(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrigger(this.ops["UpdateTrigger"].applicator.apply(partialParams));
    }
    invokeUpdateUserDefinedFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserDefinedFunction(this.ops["UpdateUserDefinedFunction"].applicator.apply(partialParams));
    }
    invokeUpdateWorkflow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkflow(this.ops["UpdateWorkflow"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
