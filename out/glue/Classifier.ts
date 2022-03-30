
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchCreatePartitionRequest,
    BatchDeleteConnectionRequest,
    BatchDeletePartitionRequest,
    BatchDeleteTableRequest,
    BatchDeleteTableVersionRequest,
    BatchGetBlueprintsRequest,
    BatchGetCrawlersRequest,
    BatchGetDevEndpointsRequest,
    BatchGetJobsRequest,
    BatchGetPartitionRequest,
    BatchGetTriggersRequest,
    BatchGetWorkflowsRequest,
    BatchStopJobRunRequest,
    BatchUpdatePartitionRequest,
    CancelMLTaskRunRequest,
    CheckSchemaVersionValidityInput,
    CreateBlueprintRequest,
    CreateConnectionRequest,
    CreateCrawlerRequest,
    CreateDatabaseRequest,
    CreateDevEndpointRequest,
    CreateJobRequest,
    CreateMLTransformRequest,
    CreatePartitionRequest,
    CreatePartitionIndexRequest,
    CreateRegistryInput,
    CreateSchemaInput,
    CreateSecurityConfigurationRequest,
    CreateTableRequest,
    CreateTriggerRequest,
    CreateUserDefinedFunctionRequest,
    CreateWorkflowRequest,
    DeleteBlueprintRequest,
    DeleteClassifierRequest,
    DeleteColumnStatisticsForPartitionRequest,
    DeleteColumnStatisticsForTableRequest,
    DeleteConnectionRequest,
    DeleteCrawlerRequest,
    DeleteDatabaseRequest,
    DeleteDevEndpointRequest,
    DeleteJobRequest,
    DeleteMLTransformRequest,
    DeletePartitionRequest,
    DeletePartitionIndexRequest,
    DeleteRegistryInput,
    DeleteSchemaInput,
    DeleteSchemaVersionsInput,
    DeleteSecurityConfigurationRequest,
    DeleteTableRequest,
    DeleteTableVersionRequest,
    DeleteTriggerRequest,
    DeleteUserDefinedFunctionRequest,
    DeleteWorkflowRequest,
    GetBlueprintRequest,
    GetBlueprintRunRequest,
    GetBlueprintRunsRequest,
    GetClassifierRequest,
    GetColumnStatisticsForPartitionRequest,
    GetColumnStatisticsForTableRequest,
    GetConnectionRequest,
    GetCrawlerRequest,
    GetDatabaseRequest,
    GetDevEndpointRequest,
    GetJobRequest,
    GetJobBookmarkRequest,
    GetJobRunRequest,
    GetJobRunsRequest,
    GetMLTaskRunRequest,
    GetMLTaskRunsRequest,
    GetMLTransformRequest,
    GetMappingRequest,
    GetPartitionRequest,
    GetPartitionIndexesRequest,
    GetPartitionsRequest,
    GetPlanRequest,
    GetRegistryInput,
    GetSchemaInput,
    GetSchemaByDefinitionInput,
    GetSchemaVersionsDiffInput,
    GetSecurityConfigurationRequest,
    GetTableRequest,
    GetTableVersionRequest,
    GetTableVersionsRequest,
    GetTablesRequest,
    GetTagsRequest,
    GetTriggerRequest,
    GetUnfilteredPartitionMetadataRequest,
    GetUnfilteredPartitionsMetadataRequest,
    GetUnfilteredTableMetadataRequest,
    GetUserDefinedFunctionRequest,
    GetUserDefinedFunctionsRequest,
    GetWorkflowRequest,
    GetWorkflowRunRequest,
    GetWorkflowRunPropertiesRequest,
    GetWorkflowRunsRequest,
    ListSchemaVersionsInput,
    PutDataCatalogEncryptionSettingsRequest,
    PutResourcePolicyRequest,
    PutSchemaVersionMetadataInput,
    PutWorkflowRunPropertiesRequest,
    RegisterSchemaVersionInput,
    RemoveSchemaVersionMetadataInput,
    ResetJobBookmarkRequest,
    ResumeWorkflowRunRequest,
    StartBlueprintRunRequest,
    StartCrawlerRequest,
    StartCrawlerScheduleRequest,
    StartExportLabelsTaskRunRequest,
    StartImportLabelsTaskRunRequest,
    StartJobRunRequest,
    StartMLEvaluationTaskRunRequest,
    StartMLLabelingSetGenerationTaskRunRequest,
    StartTriggerRequest,
    StartWorkflowRunRequest,
    StopCrawlerRequest,
    StopCrawlerScheduleRequest,
    StopTriggerRequest,
    StopWorkflowRunRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateBlueprintRequest,
    UpdateColumnStatisticsForPartitionRequest,
    UpdateColumnStatisticsForTableRequest,
    UpdateConnectionRequest,
    UpdateCrawlerRequest,
    UpdateCrawlerScheduleRequest,
    UpdateDatabaseRequest,
    UpdateDevEndpointRequest,
    UpdateJobRequest,
    UpdateMLTransformRequest,
    UpdatePartitionRequest,
    UpdateRegistryInput,
    UpdateSchemaInput,
    UpdateTableRequest,
    UpdateTriggerRequest,
    UpdateUserDefinedFunctionRequest,
    UpdateWorkflowRequest,
    BatchCreatePartitionResponse,
    BatchDeleteConnectionResponse,
    BatchDeletePartitionResponse,
    BatchDeleteTableResponse,
    BatchDeleteTableVersionResponse,
    BatchGetBlueprintsResponse,
    BatchGetCrawlersResponse,
    BatchGetDevEndpointsResponse,
    BatchGetJobsResponse,
    BatchGetPartitionResponse,
    BatchGetTriggersResponse,
    BatchGetWorkflowsResponse,
    BatchStopJobRunResponse,
    BatchUpdatePartitionResponse,
    CancelMLTaskRunResponse,
    CheckSchemaVersionValidityResponse,
    CreateBlueprintResponse,
    CreateConnectionResponse,
    CreateCrawlerResponse,
    CreateDatabaseResponse,
    CreateDevEndpointResponse,
    CreateJobResponse,
    CreateMLTransformResponse,
    CreatePartitionResponse,
    CreatePartitionIndexResponse,
    CreateRegistryResponse,
    CreateSchemaResponse,
    CreateSecurityConfigurationResponse,
    CreateTableResponse,
    CreateTriggerResponse,
    CreateUserDefinedFunctionResponse,
    CreateWorkflowResponse,
    DeleteBlueprintResponse,
    DeleteClassifierResponse,
    DeleteColumnStatisticsForPartitionResponse,
    DeleteColumnStatisticsForTableResponse,
    DeleteConnectionResponse,
    DeleteCrawlerResponse,
    DeleteDatabaseResponse,
    DeleteDevEndpointResponse,
    DeleteJobResponse,
    DeleteMLTransformResponse,
    DeletePartitionResponse,
    DeletePartitionIndexResponse,
    DeleteRegistryResponse,
    DeleteSchemaResponse,
    DeleteSchemaVersionsResponse,
    DeleteSecurityConfigurationResponse,
    DeleteTableResponse,
    DeleteTableVersionResponse,
    DeleteTriggerResponse,
    DeleteUserDefinedFunctionResponse,
    DeleteWorkflowResponse,
    GetBlueprintResponse,
    GetBlueprintRunResponse,
    GetBlueprintRunsResponse,
    GetClassifierResponse,
    GetColumnStatisticsForPartitionResponse,
    GetColumnStatisticsForTableResponse,
    GetConnectionResponse,
    GetCrawlerResponse,
    GetDatabaseResponse,
    GetDevEndpointResponse,
    GetJobResponse,
    GetJobBookmarkResponse,
    GetJobRunResponse,
    GetJobRunsResponse,
    GetMLTaskRunResponse,
    GetMLTaskRunsResponse,
    GetMLTransformResponse,
    GetMappingResponse,
    GetPartitionResponse,
    GetPartitionIndexesResponse,
    GetPartitionsResponse,
    GetPlanResponse,
    GetRegistryResponse,
    GetSchemaResponse,
    GetSchemaByDefinitionResponse,
    GetSchemaVersionsDiffResponse,
    GetSecurityConfigurationResponse,
    GetTableResponse,
    GetTableVersionResponse,
    GetTableVersionsResponse,
    GetTablesResponse,
    GetTagsResponse,
    GetTriggerResponse,
    GetUnfilteredPartitionMetadataResponse,
    GetUnfilteredPartitionsMetadataResponse,
    GetUnfilteredTableMetadataResponse,
    GetUserDefinedFunctionResponse,
    GetUserDefinedFunctionsResponse,
    GetWorkflowResponse,
    GetWorkflowRunResponse,
    GetWorkflowRunPropertiesResponse,
    GetWorkflowRunsResponse,
    ListSchemaVersionsResponse,
    PutDataCatalogEncryptionSettingsResponse,
    PutResourcePolicyResponse,
    PutSchemaVersionMetadataResponse,
    PutWorkflowRunPropertiesResponse,
    RegisterSchemaVersionResponse,
    RemoveSchemaVersionMetadataResponse,
    ResetJobBookmarkResponse,
    ResumeWorkflowRunResponse,
    StartBlueprintRunResponse,
    StartCrawlerResponse,
    StartCrawlerScheduleResponse,
    StartExportLabelsTaskRunResponse,
    StartImportLabelsTaskRunResponse,
    StartJobRunResponse,
    StartMLEvaluationTaskRunResponse,
    StartMLLabelingSetGenerationTaskRunResponse,
    StartTriggerResponse,
    StartWorkflowRunResponse,
    StopCrawlerResponse,
    StopCrawlerScheduleResponse,
    StopTriggerResponse,
    StopWorkflowRunResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateBlueprintResponse,
    UpdateColumnStatisticsForPartitionResponse,
    UpdateColumnStatisticsForTableResponse,
    UpdateConnectionResponse,
    UpdateCrawlerResponse,
    UpdateCrawlerScheduleResponse,
    UpdateDatabaseResponse,
    UpdateDevEndpointResponse,
    UpdateJobResponse,
    UpdateMLTransformResponse,
    UpdatePartitionResponse,
    UpdateRegistryResponse,
    UpdateSchemaResponse,
    UpdateTableResponse,
    UpdateTriggerResponse,
    UpdateUserDefinedFunctionResponse,
    UpdateWorkflowResponse
} from "aws-sdk/clients/glue";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glue.Classifier {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.glue.Classifier>) {
        super(...args)
        this.client = new awssdk.Glue()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/glue-2017-03-31.normal.json"), this.client)
    }

    invokeBatchCreatePartition(partialParams: ToOptional<{
      [K in keyof BatchCreatePartitionRequest]: (BatchCreatePartitionRequest)[K]
    }>): BatchCreatePartitionResponse {
        return this.client.batchCreatePartition(
            this.ops["BatchCreatePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteConnection(partialParams: ToOptional<{
      [K in keyof BatchDeleteConnectionRequest]: (BatchDeleteConnectionRequest)[K]
    }>): BatchDeleteConnectionResponse {
        return this.client.batchDeleteConnection(
            this.ops["BatchDeleteConnection"].apply(partialParams)
        );
    }

    invokeBatchDeletePartition(partialParams: ToOptional<{
      [K in keyof BatchDeletePartitionRequest]: (BatchDeletePartitionRequest)[K]
    }>): BatchDeletePartitionResponse {
        return this.client.batchDeletePartition(
            this.ops["BatchDeletePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteTable(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableRequest]: (BatchDeleteTableRequest)[K]
    }>): BatchDeleteTableResponse {
        return this.client.batchDeleteTable(
            this.ops["BatchDeleteTable"].apply(partialParams)
        );
    }

    invokeBatchDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableVersionRequest]: (BatchDeleteTableVersionRequest)[K]
    }>): BatchDeleteTableVersionResponse {
        return this.client.batchDeleteTableVersion(
            this.ops["BatchDeleteTableVersion"].apply(partialParams)
        );
    }

    invokeBatchGetBlueprints(partialParams: ToOptional<{
      [K in keyof BatchGetBlueprintsRequest]: (BatchGetBlueprintsRequest)[K]
    }>): BatchGetBlueprintsResponse {
        return this.client.batchGetBlueprints(
            this.ops["BatchGetBlueprints"].apply(partialParams)
        );
    }

    invokeBatchGetCrawlers(partialParams: ToOptional<{
      [K in keyof BatchGetCrawlersRequest]: (BatchGetCrawlersRequest)[K]
    }>): BatchGetCrawlersResponse {
        return this.client.batchGetCrawlers(
            this.ops["BatchGetCrawlers"].apply(partialParams)
        );
    }

    invokeBatchGetDevEndpoints(partialParams: ToOptional<{
      [K in keyof BatchGetDevEndpointsRequest]: (BatchGetDevEndpointsRequest)[K]
    }>): BatchGetDevEndpointsResponse {
        return this.client.batchGetDevEndpoints(
            this.ops["BatchGetDevEndpoints"].apply(partialParams)
        );
    }

    invokeBatchGetJobs(partialParams: ToOptional<{
      [K in keyof BatchGetJobsRequest]: (BatchGetJobsRequest)[K]
    }>): BatchGetJobsResponse {
        return this.client.batchGetJobs(
            this.ops["BatchGetJobs"].apply(partialParams)
        );
    }

    invokeBatchGetPartition(partialParams: ToOptional<{
      [K in keyof BatchGetPartitionRequest]: (BatchGetPartitionRequest)[K]
    }>): BatchGetPartitionResponse {
        return this.client.batchGetPartition(
            this.ops["BatchGetPartition"].apply(partialParams)
        );
    }

    invokeBatchGetTriggers(partialParams: ToOptional<{
      [K in keyof BatchGetTriggersRequest]: (BatchGetTriggersRequest)[K]
    }>): BatchGetTriggersResponse {
        return this.client.batchGetTriggers(
            this.ops["BatchGetTriggers"].apply(partialParams)
        );
    }

    invokeBatchGetWorkflows(partialParams: ToOptional<{
      [K in keyof BatchGetWorkflowsRequest]: (BatchGetWorkflowsRequest)[K]
    }>): BatchGetWorkflowsResponse {
        return this.client.batchGetWorkflows(
            this.ops["BatchGetWorkflows"].apply(partialParams)
        );
    }

    invokeBatchStopJobRun(partialParams: ToOptional<{
      [K in keyof BatchStopJobRunRequest]: (BatchStopJobRunRequest)[K]
    }>): BatchStopJobRunResponse {
        return this.client.batchStopJobRun(
            this.ops["BatchStopJobRun"].apply(partialParams)
        );
    }

    invokeBatchUpdatePartition(partialParams: ToOptional<{
      [K in keyof BatchUpdatePartitionRequest]: (BatchUpdatePartitionRequest)[K]
    }>): BatchUpdatePartitionResponse {
        return this.client.batchUpdatePartition(
            this.ops["BatchUpdatePartition"].apply(partialParams)
        );
    }

    invokeCancelMLTaskRun(partialParams: ToOptional<{
      [K in keyof CancelMLTaskRunRequest]: (CancelMLTaskRunRequest)[K]
    }>): CancelMLTaskRunResponse {
        return this.client.cancelMLTaskRun(
            this.ops["CancelMLTaskRun"].apply(partialParams)
        );
    }

    invokeCheckSchemaVersionValidity(partialParams: ToOptional<{
      [K in keyof CheckSchemaVersionValidityInput]: (CheckSchemaVersionValidityInput)[K]
    }>): CheckSchemaVersionValidityResponse {
        return this.client.checkSchemaVersionValidity(
            this.ops["CheckSchemaVersionValidity"].apply(partialParams)
        );
    }

    invokeCreateBlueprint(partialParams: ToOptional<{
      [K in keyof CreateBlueprintRequest]: (CreateBlueprintRequest)[K]
    }>): CreateBlueprintResponse {
        return this.client.createBlueprint(
            this.ops["CreateBlueprint"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest]: (CreateConnectionRequest)[K]
    }>): CreateConnectionResponse {
        return this.client.createConnection(
            this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateCrawler(partialParams: ToOptional<{
      [K in keyof CreateCrawlerRequest]: (CreateCrawlerRequest)[K]
    }>): CreateCrawlerResponse {
        return this.client.createCrawler(
            this.ops["CreateCrawler"].apply(partialParams)
        );
    }

    invokeCreateDatabase(partialParams: ToOptional<{
      [K in keyof CreateDatabaseRequest]: (CreateDatabaseRequest)[K]
    }>): CreateDatabaseResponse {
        return this.client.createDatabase(
            this.ops["CreateDatabase"].apply(partialParams)
        );
    }

    invokeCreateDevEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDevEndpointRequest]: (CreateDevEndpointRequest)[K]
    }>): CreateDevEndpointResponse {
        return this.client.createDevEndpoint(
            this.ops["CreateDevEndpoint"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest]: (CreateJobRequest)[K]
    }>): CreateJobResponse {
        return this.client.createJob(
            this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateMLTransform(partialParams: ToOptional<{
      [K in keyof CreateMLTransformRequest]: (CreateMLTransformRequest)[K]
    }>): CreateMLTransformResponse {
        return this.client.createMLTransform(
            this.ops["CreateMLTransform"].apply(partialParams)
        );
    }

    invokeCreatePartition(partialParams: ToOptional<{
      [K in keyof CreatePartitionRequest]: (CreatePartitionRequest)[K]
    }>): CreatePartitionResponse {
        return this.client.createPartition(
            this.ops["CreatePartition"].apply(partialParams)
        );
    }

    invokeCreatePartitionIndex(partialParams: ToOptional<{
      [K in keyof CreatePartitionIndexRequest]: (CreatePartitionIndexRequest)[K]
    }>): CreatePartitionIndexResponse {
        return this.client.createPartitionIndex(
            this.ops["CreatePartitionIndex"].apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryInput]: (CreateRegistryInput)[K]
    }>): CreateRegistryResponse {
        return this.client.createRegistry(
            this.ops["CreateRegistry"].apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaInput]: (CreateSchemaInput)[K]
    }>): CreateSchemaResponse {
        return this.client.createSchema(
            this.ops["CreateSchema"].apply(partialParams)
        );
    }

    invokeCreateSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof CreateSecurityConfigurationRequest]: (CreateSecurityConfigurationRequest)[K]
    }>): CreateSecurityConfigurationResponse {
        return this.client.createSecurityConfiguration(
            this.ops["CreateSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableRequest]: (CreateTableRequest)[K]
    }>): CreateTableResponse {
        return this.client.createTable(
            this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeCreateTrigger(partialParams: ToOptional<{
      [K in keyof CreateTriggerRequest]: (CreateTriggerRequest)[K]
    }>): CreateTriggerResponse {
        return this.client.createTrigger(
            this.ops["CreateTrigger"].apply(partialParams)
        );
    }

    invokeCreateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof CreateUserDefinedFunctionRequest]: (CreateUserDefinedFunctionRequest)[K]
    }>): CreateUserDefinedFunctionResponse {
        return this.client.createUserDefinedFunction(
            this.ops["CreateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest]: (CreateWorkflowRequest)[K]
    }>): CreateWorkflowResponse {
        return this.client.createWorkflow(
            this.ops["CreateWorkflow"].apply(partialParams)
        );
    }

    invokeDeleteBlueprint(partialParams: ToOptional<{
      [K in keyof DeleteBlueprintRequest]: (DeleteBlueprintRequest)[K]
    }>): DeleteBlueprintResponse {
        return this.client.deleteBlueprint(
            this.ops["DeleteBlueprint"].apply(partialParams)
        );
    }

    invokeDeleteClassifier(partialParams: ToOptional<{
      [K in keyof DeleteClassifierRequest]: (DeleteClassifierRequest)[K]
    }>): DeleteClassifierResponse {
        return this.client.deleteClassifier(
            this.ops["DeleteClassifier"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForPartitionRequest]: (DeleteColumnStatisticsForPartitionRequest)[K]
    }>): DeleteColumnStatisticsForPartitionResponse {
        return this.client.deleteColumnStatisticsForPartition(
            this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForTableRequest]: (DeleteColumnStatisticsForTableRequest)[K]
    }>): DeleteColumnStatisticsForTableResponse {
        return this.client.deleteColumnStatisticsForTable(
            this.ops["DeleteColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest]: (DeleteConnectionRequest)[K]
    }>): DeleteConnectionResponse {
        return this.client.deleteConnection(
            this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteCrawler(partialParams: ToOptional<{
      [K in keyof DeleteCrawlerRequest]: (DeleteCrawlerRequest)[K]
    }>): DeleteCrawlerResponse {
        return this.client.deleteCrawler(
            this.ops["DeleteCrawler"].apply(partialParams)
        );
    }

    invokeDeleteDatabase(partialParams: ToOptional<{
      [K in keyof DeleteDatabaseRequest]: (DeleteDatabaseRequest)[K]
    }>): DeleteDatabaseResponse {
        return this.client.deleteDatabase(
            this.ops["DeleteDatabase"].apply(partialParams)
        );
    }

    invokeDeleteDevEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDevEndpointRequest]: (DeleteDevEndpointRequest)[K]
    }>): DeleteDevEndpointResponse {
        return this.client.deleteDevEndpoint(
            this.ops["DeleteDevEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest]: (DeleteJobRequest)[K]
    }>): DeleteJobResponse {
        return this.client.deleteJob(
            this.ops["DeleteJob"].apply(partialParams)
        );
    }

    invokeDeleteMLTransform(partialParams: ToOptional<{
      [K in keyof DeleteMLTransformRequest]: (DeleteMLTransformRequest)[K]
    }>): DeleteMLTransformResponse {
        return this.client.deleteMLTransform(
            this.ops["DeleteMLTransform"].apply(partialParams)
        );
    }

    invokeDeletePartition(partialParams: ToOptional<{
      [K in keyof DeletePartitionRequest]: (DeletePartitionRequest)[K]
    }>): DeletePartitionResponse {
        return this.client.deletePartition(
            this.ops["DeletePartition"].apply(partialParams)
        );
    }

    invokeDeletePartitionIndex(partialParams: ToOptional<{
      [K in keyof DeletePartitionIndexRequest]: (DeletePartitionIndexRequest)[K]
    }>): DeletePartitionIndexResponse {
        return this.client.deletePartitionIndex(
            this.ops["DeletePartitionIndex"].apply(partialParams)
        );
    }

    invokeDeleteRegistry(partialParams: ToOptional<{
      [K in keyof DeleteRegistryInput]: (DeleteRegistryInput)[K]
    }>): DeleteRegistryResponse {
        return this.client.deleteRegistry(
            this.ops["DeleteRegistry"].apply(partialParams)
        );
    }

    invokeDeleteSchema(partialParams: ToOptional<{
      [K in keyof DeleteSchemaInput]: (DeleteSchemaInput)[K]
    }>): DeleteSchemaResponse {
        return this.client.deleteSchema(
            this.ops["DeleteSchema"].apply(partialParams)
        );
    }

    invokeDeleteSchemaVersions(partialParams: ToOptional<{
      [K in keyof DeleteSchemaVersionsInput]: (DeleteSchemaVersionsInput)[K]
    }>): DeleteSchemaVersionsResponse {
        return this.client.deleteSchemaVersions(
            this.ops["DeleteSchemaVersions"].apply(partialParams)
        );
    }

    invokeDeleteSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteSecurityConfigurationRequest]: (DeleteSecurityConfigurationRequest)[K]
    }>): DeleteSecurityConfigurationResponse {
        return this.client.deleteSecurityConfiguration(
            this.ops["DeleteSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableRequest]: (DeleteTableRequest)[K]
    }>): DeleteTableResponse {
        return this.client.deleteTable(
            this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof DeleteTableVersionRequest]: (DeleteTableVersionRequest)[K]
    }>): DeleteTableVersionResponse {
        return this.client.deleteTableVersion(
            this.ops["DeleteTableVersion"].apply(partialParams)
        );
    }

    invokeDeleteTrigger(partialParams: ToOptional<{
      [K in keyof DeleteTriggerRequest]: (DeleteTriggerRequest)[K]
    }>): DeleteTriggerResponse {
        return this.client.deleteTrigger(
            this.ops["DeleteTrigger"].apply(partialParams)
        );
    }

    invokeDeleteUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof DeleteUserDefinedFunctionRequest]: (DeleteUserDefinedFunctionRequest)[K]
    }>): DeleteUserDefinedFunctionResponse {
        return this.client.deleteUserDefinedFunction(
            this.ops["DeleteUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeDeleteWorkflow(partialParams: ToOptional<{
      [K in keyof DeleteWorkflowRequest]: (DeleteWorkflowRequest)[K]
    }>): DeleteWorkflowResponse {
        return this.client.deleteWorkflow(
            this.ops["DeleteWorkflow"].apply(partialParams)
        );
    }

    invokeGetBlueprint(partialParams: ToOptional<{
      [K in keyof GetBlueprintRequest]: (GetBlueprintRequest)[K]
    }>): GetBlueprintResponse {
        return this.client.getBlueprint(
            this.ops["GetBlueprint"].apply(partialParams)
        );
    }

    invokeGetBlueprintRun(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunRequest]: (GetBlueprintRunRequest)[K]
    }>): GetBlueprintRunResponse {
        return this.client.getBlueprintRun(
            this.ops["GetBlueprintRun"].apply(partialParams)
        );
    }

    invokeGetBlueprintRuns(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunsRequest]: (GetBlueprintRunsRequest)[K]
    }>): GetBlueprintRunsResponse {
        return this.client.getBlueprintRuns(
            this.ops["GetBlueprintRuns"].apply(partialParams)
        );
    }

    invokeGetClassifier(partialParams: ToOptional<{
      [K in keyof GetClassifierRequest]: (GetClassifierRequest)[K]
    }>): GetClassifierResponse {
        return this.client.getClassifier(
            this.ops["GetClassifier"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForPartitionRequest]: (GetColumnStatisticsForPartitionRequest)[K]
    }>): GetColumnStatisticsForPartitionResponse {
        return this.client.getColumnStatisticsForPartition(
            this.ops["GetColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForTableRequest]: (GetColumnStatisticsForTableRequest)[K]
    }>): GetColumnStatisticsForTableResponse {
        return this.client.getColumnStatisticsForTable(
            this.ops["GetColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeGetConnection(partialParams: ToOptional<{
      [K in keyof GetConnectionRequest]: (GetConnectionRequest)[K]
    }>): GetConnectionResponse {
        return this.client.getConnection(
            this.ops["GetConnection"].apply(partialParams)
        );
    }

    invokeGetCrawler(partialParams: ToOptional<{
      [K in keyof GetCrawlerRequest]: (GetCrawlerRequest)[K]
    }>): GetCrawlerResponse {
        return this.client.getCrawler(
            this.ops["GetCrawler"].apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseRequest]: (GetDatabaseRequest)[K]
    }>): GetDatabaseResponse {
        return this.client.getDatabase(
            this.ops["GetDatabase"].apply(partialParams)
        );
    }

    invokeGetDevEndpoint(partialParams: ToOptional<{
      [K in keyof GetDevEndpointRequest]: (GetDevEndpointRequest)[K]
    }>): GetDevEndpointResponse {
        return this.client.getDevEndpoint(
            this.ops["GetDevEndpoint"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest]: (GetJobRequest)[K]
    }>): GetJobResponse {
        return this.client.getJob(
            this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetJobBookmark(partialParams: ToOptional<{
      [K in keyof GetJobBookmarkRequest]: (GetJobBookmarkRequest)[K]
    }>): GetJobBookmarkResponse {
        return this.client.getJobBookmark(
            this.ops["GetJobBookmark"].apply(partialParams)
        );
    }

    invokeGetJobRun(partialParams: ToOptional<{
      [K in keyof GetJobRunRequest]: (GetJobRunRequest)[K]
    }>): GetJobRunResponse {
        return this.client.getJobRun(
            this.ops["GetJobRun"].apply(partialParams)
        );
    }

    invokeGetJobRuns(partialParams: ToOptional<{
      [K in keyof GetJobRunsRequest]: (GetJobRunsRequest)[K]
    }>): GetJobRunsResponse {
        return this.client.getJobRuns(
            this.ops["GetJobRuns"].apply(partialParams)
        );
    }

    invokeGetMLTaskRun(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunRequest]: (GetMLTaskRunRequest)[K]
    }>): GetMLTaskRunResponse {
        return this.client.getMLTaskRun(
            this.ops["GetMLTaskRun"].apply(partialParams)
        );
    }

    invokeGetMLTaskRuns(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunsRequest]: (GetMLTaskRunsRequest)[K]
    }>): GetMLTaskRunsResponse {
        return this.client.getMLTaskRuns(
            this.ops["GetMLTaskRuns"].apply(partialParams)
        );
    }

    invokeGetMLTransform(partialParams: ToOptional<{
      [K in keyof GetMLTransformRequest]: (GetMLTransformRequest)[K]
    }>): GetMLTransformResponse {
        return this.client.getMLTransform(
            this.ops["GetMLTransform"].apply(partialParams)
        );
    }

    invokeGetMapping(partialParams: ToOptional<{
      [K in keyof GetMappingRequest]: (GetMappingRequest)[K]
    }>): GetMappingResponse {
        return this.client.getMapping(
            this.ops["GetMapping"].apply(partialParams)
        );
    }

    invokeGetPartition(partialParams: ToOptional<{
      [K in keyof GetPartitionRequest]: (GetPartitionRequest)[K]
    }>): GetPartitionResponse {
        return this.client.getPartition(
            this.ops["GetPartition"].apply(partialParams)
        );
    }

    invokeGetPartitionIndexes(partialParams: ToOptional<{
      [K in keyof GetPartitionIndexesRequest]: (GetPartitionIndexesRequest)[K]
    }>): GetPartitionIndexesResponse {
        return this.client.getPartitionIndexes(
            this.ops["GetPartitionIndexes"].apply(partialParams)
        );
    }

    invokeGetPartitions(partialParams: ToOptional<{
      [K in keyof GetPartitionsRequest]: (GetPartitionsRequest)[K]
    }>): GetPartitionsResponse {
        return this.client.getPartitions(
            this.ops["GetPartitions"].apply(partialParams)
        );
    }

    invokeGetPlan(partialParams: ToOptional<{
      [K in keyof GetPlanRequest]: (GetPlanRequest)[K]
    }>): GetPlanResponse {
        return this.client.getPlan(
            this.ops["GetPlan"].apply(partialParams)
        );
    }

    invokeGetRegistry(partialParams: ToOptional<{
      [K in keyof GetRegistryInput]: (GetRegistryInput)[K]
    }>): GetRegistryResponse {
        return this.client.getRegistry(
            this.ops["GetRegistry"].apply(partialParams)
        );
    }

    invokeGetSchema(partialParams: ToOptional<{
      [K in keyof GetSchemaInput]: (GetSchemaInput)[K]
    }>): GetSchemaResponse {
        return this.client.getSchema(
            this.ops["GetSchema"].apply(partialParams)
        );
    }

    invokeGetSchemaByDefinition(partialParams: ToOptional<{
      [K in keyof GetSchemaByDefinitionInput]: (GetSchemaByDefinitionInput)[K]
    }>): GetSchemaByDefinitionResponse {
        return this.client.getSchemaByDefinition(
            this.ops["GetSchemaByDefinition"].apply(partialParams)
        );
    }

    invokeGetSchemaVersionsDiff(partialParams: ToOptional<{
      [K in keyof GetSchemaVersionsDiffInput]: (GetSchemaVersionsDiffInput)[K]
    }>): GetSchemaVersionsDiffResponse {
        return this.client.getSchemaVersionsDiff(
            this.ops["GetSchemaVersionsDiff"].apply(partialParams)
        );
    }

    invokeGetSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof GetSecurityConfigurationRequest]: (GetSecurityConfigurationRequest)[K]
    }>): GetSecurityConfigurationResponse {
        return this.client.getSecurityConfiguration(
            this.ops["GetSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeGetTable(partialParams: ToOptional<{
      [K in keyof GetTableRequest]: (GetTableRequest)[K]
    }>): GetTableResponse {
        return this.client.getTable(
            this.ops["GetTable"].apply(partialParams)
        );
    }

    invokeGetTableVersion(partialParams: ToOptional<{
      [K in keyof GetTableVersionRequest]: (GetTableVersionRequest)[K]
    }>): GetTableVersionResponse {
        return this.client.getTableVersion(
            this.ops["GetTableVersion"].apply(partialParams)
        );
    }

    invokeGetTableVersions(partialParams: ToOptional<{
      [K in keyof GetTableVersionsRequest]: (GetTableVersionsRequest)[K]
    }>): GetTableVersionsResponse {
        return this.client.getTableVersions(
            this.ops["GetTableVersions"].apply(partialParams)
        );
    }

    invokeGetTables(partialParams: ToOptional<{
      [K in keyof GetTablesRequest]: (GetTablesRequest)[K]
    }>): GetTablesResponse {
        return this.client.getTables(
            this.ops["GetTables"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest]: (GetTagsRequest)[K]
    }>): GetTagsResponse {
        return this.client.getTags(
            this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetTrigger(partialParams: ToOptional<{
      [K in keyof GetTriggerRequest]: (GetTriggerRequest)[K]
    }>): GetTriggerResponse {
        return this.client.getTrigger(
            this.ops["GetTrigger"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionMetadataRequest]: (GetUnfilteredPartitionMetadataRequest)[K]
    }>): GetUnfilteredPartitionMetadataResponse {
        return this.client.getUnfilteredPartitionMetadata(
            this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionsMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionsMetadataRequest]: (GetUnfilteredPartitionsMetadataRequest)[K]
    }>): GetUnfilteredPartitionsMetadataResponse {
        return this.client.getUnfilteredPartitionsMetadata(
            this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredTableMetadataRequest]: (GetUnfilteredTableMetadataRequest)[K]
    }>): GetUnfilteredTableMetadataResponse {
        return this.client.getUnfilteredTableMetadata(
            this.ops["GetUnfilteredTableMetadata"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionRequest]: (GetUserDefinedFunctionRequest)[K]
    }>): GetUserDefinedFunctionResponse {
        return this.client.getUserDefinedFunction(
            this.ops["GetUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunctions(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionsRequest]: (GetUserDefinedFunctionsRequest)[K]
    }>): GetUserDefinedFunctionsResponse {
        return this.client.getUserDefinedFunctions(
            this.ops["GetUserDefinedFunctions"].apply(partialParams)
        );
    }

    invokeGetWorkflow(partialParams: ToOptional<{
      [K in keyof GetWorkflowRequest]: (GetWorkflowRequest)[K]
    }>): GetWorkflowResponse {
        return this.client.getWorkflow(
            this.ops["GetWorkflow"].apply(partialParams)
        );
    }

    invokeGetWorkflowRun(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunRequest]: (GetWorkflowRunRequest)[K]
    }>): GetWorkflowRunResponse {
        return this.client.getWorkflowRun(
            this.ops["GetWorkflowRun"].apply(partialParams)
        );
    }

    invokeGetWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunPropertiesRequest]: (GetWorkflowRunPropertiesRequest)[K]
    }>): GetWorkflowRunPropertiesResponse {
        return this.client.getWorkflowRunProperties(
            this.ops["GetWorkflowRunProperties"].apply(partialParams)
        );
    }

    invokeGetWorkflowRuns(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunsRequest]: (GetWorkflowRunsRequest)[K]
    }>): GetWorkflowRunsResponse {
        return this.client.getWorkflowRuns(
            this.ops["GetWorkflowRuns"].apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsInput]: (ListSchemaVersionsInput)[K]
    }>): ListSchemaVersionsResponse {
        return this.client.listSchemaVersions(
            this.ops["ListSchemaVersions"].apply(partialParams)
        );
    }

    invokePutDataCatalogEncryptionSettings(partialParams: ToOptional<{
      [K in keyof PutDataCatalogEncryptionSettingsRequest]: (PutDataCatalogEncryptionSettingsRequest)[K]
    }>): PutDataCatalogEncryptionSettingsResponse {
        return this.client.putDataCatalogEncryptionSettings(
            this.ops["PutDataCatalogEncryptionSettings"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest)[K]
    }>): PutResourcePolicyResponse {
        return this.client.putResourcePolicy(
            this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokePutSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof PutSchemaVersionMetadataInput]: (PutSchemaVersionMetadataInput)[K]
    }>): PutSchemaVersionMetadataResponse {
        return this.client.putSchemaVersionMetadata(
            this.ops["PutSchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokePutWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof Omit<PutWorkflowRunPropertiesRequest, "Name">]: (Omit<PutWorkflowRunPropertiesRequest, "Name">)[K]
    }>): PutWorkflowRunPropertiesResponse {
        return this.client.putWorkflowRunProperties(
            this.ops["PutWorkflowRunProperties"].apply(partialParams)
        );
    }

    invokeRegisterSchemaVersion(partialParams: ToOptional<{
      [K in keyof RegisterSchemaVersionInput]: (RegisterSchemaVersionInput)[K]
    }>): RegisterSchemaVersionResponse {
        return this.client.registerSchemaVersion(
            this.ops["RegisterSchemaVersion"].apply(partialParams)
        );
    }

    invokeRemoveSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof RemoveSchemaVersionMetadataInput]: (RemoveSchemaVersionMetadataInput)[K]
    }>): RemoveSchemaVersionMetadataResponse {
        return this.client.removeSchemaVersionMetadata(
            this.ops["RemoveSchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokeResetJobBookmark(partialParams: ToOptional<{
      [K in keyof ResetJobBookmarkRequest]: (ResetJobBookmarkRequest)[K]
    }>): ResetJobBookmarkResponse {
        return this.client.resetJobBookmark(
            this.ops["ResetJobBookmark"].apply(partialParams)
        );
    }

    invokeResumeWorkflowRun(partialParams: ToOptional<{
      [K in keyof Omit<ResumeWorkflowRunRequest, "Name">]: (Omit<ResumeWorkflowRunRequest, "Name">)[K]
    }>): ResumeWorkflowRunResponse {
        return this.client.resumeWorkflowRun(
            this.ops["ResumeWorkflowRun"].apply(partialParams)
        );
    }

    invokeStartBlueprintRun(partialParams: ToOptional<{
      [K in keyof StartBlueprintRunRequest]: (StartBlueprintRunRequest)[K]
    }>): StartBlueprintRunResponse {
        return this.client.startBlueprintRun(
            this.ops["StartBlueprintRun"].apply(partialParams)
        );
    }

    invokeStartCrawler(partialParams: ToOptional<{
      [K in keyof Omit<StartCrawlerRequest, "Name">]: (Omit<StartCrawlerRequest, "Name">)[K]
    }>): StartCrawlerResponse {
        return this.client.startCrawler(
            this.ops["StartCrawler"].apply(partialParams)
        );
    }

    invokeStartCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StartCrawlerScheduleRequest]: (StartCrawlerScheduleRequest)[K]
    }>): StartCrawlerScheduleResponse {
        return this.client.startCrawlerSchedule(
            this.ops["StartCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeStartExportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartExportLabelsTaskRunRequest]: (StartExportLabelsTaskRunRequest)[K]
    }>): StartExportLabelsTaskRunResponse {
        return this.client.startExportLabelsTaskRun(
            this.ops["StartExportLabelsTaskRun"].apply(partialParams)
        );
    }

    invokeStartImportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartImportLabelsTaskRunRequest]: (StartImportLabelsTaskRunRequest)[K]
    }>): StartImportLabelsTaskRunResponse {
        return this.client.startImportLabelsTaskRun(
            this.ops["StartImportLabelsTaskRun"].apply(partialParams)
        );
    }

    invokeStartJobRun(partialParams: ToOptional<{
      [K in keyof StartJobRunRequest]: (StartJobRunRequest)[K]
    }>): StartJobRunResponse {
        return this.client.startJobRun(
            this.ops["StartJobRun"].apply(partialParams)
        );
    }

    invokeStartMLEvaluationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLEvaluationTaskRunRequest]: (StartMLEvaluationTaskRunRequest)[K]
    }>): StartMLEvaluationTaskRunResponse {
        return this.client.startMLEvaluationTaskRun(
            this.ops["StartMLEvaluationTaskRun"].apply(partialParams)
        );
    }

    invokeStartMLLabelingSetGenerationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLLabelingSetGenerationTaskRunRequest]: (StartMLLabelingSetGenerationTaskRunRequest)[K]
    }>): StartMLLabelingSetGenerationTaskRunResponse {
        return this.client.startMLLabelingSetGenerationTaskRun(
            this.ops["StartMLLabelingSetGenerationTaskRun"].apply(partialParams)
        );
    }

    invokeStartTrigger(partialParams: ToOptional<{
      [K in keyof Omit<StartTriggerRequest, "Name">]: (Omit<StartTriggerRequest, "Name">)[K]
    }>): StartTriggerResponse {
        return this.client.startTrigger(
            this.ops["StartTrigger"].apply(partialParams)
        );
    }

    invokeStartWorkflowRun(partialParams: ToOptional<{
      [K in keyof Omit<StartWorkflowRunRequest, "Name">]: (Omit<StartWorkflowRunRequest, "Name">)[K]
    }>): StartWorkflowRunResponse {
        return this.client.startWorkflowRun(
            this.ops["StartWorkflowRun"].apply(partialParams)
        );
    }

    invokeStopCrawler(partialParams: ToOptional<{
      [K in keyof Omit<StopCrawlerRequest, "Name">]: (Omit<StopCrawlerRequest, "Name">)[K]
    }>): StopCrawlerResponse {
        return this.client.stopCrawler(
            this.ops["StopCrawler"].apply(partialParams)
        );
    }

    invokeStopCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StopCrawlerScheduleRequest]: (StopCrawlerScheduleRequest)[K]
    }>): StopCrawlerScheduleResponse {
        return this.client.stopCrawlerSchedule(
            this.ops["StopCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeStopTrigger(partialParams: ToOptional<{
      [K in keyof Omit<StopTriggerRequest, "Name">]: (Omit<StopTriggerRequest, "Name">)[K]
    }>): StopTriggerResponse {
        return this.client.stopTrigger(
            this.ops["StopTrigger"].apply(partialParams)
        );
    }

    invokeStopWorkflowRun(partialParams: ToOptional<{
      [K in keyof Omit<StopWorkflowRunRequest, "Name">]: (Omit<StopWorkflowRunRequest, "Name">)[K]
    }>): StopWorkflowRunResponse {
        return this.client.stopWorkflowRun(
            this.ops["StopWorkflowRun"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateBlueprint(partialParams: ToOptional<{
      [K in keyof Omit<UpdateBlueprintRequest, "Name">]: (Omit<UpdateBlueprintRequest, "Name">)[K]
    }>): UpdateBlueprintResponse {
        return this.client.updateBlueprint(
            this.ops["UpdateBlueprint"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForPartitionRequest]: (UpdateColumnStatisticsForPartitionRequest)[K]
    }>): UpdateColumnStatisticsForPartitionResponse {
        return this.client.updateColumnStatisticsForPartition(
            this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForTableRequest]: (UpdateColumnStatisticsForTableRequest)[K]
    }>): UpdateColumnStatisticsForTableResponse {
        return this.client.updateColumnStatisticsForTable(
            this.ops["UpdateColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof Omit<UpdateConnectionRequest, "Name">]: (Omit<UpdateConnectionRequest, "Name">)[K]
    }>): UpdateConnectionResponse {
        return this.client.updateConnection(
            this.ops["UpdateConnection"].apply(partialParams)
        );
    }

    invokeUpdateCrawler(partialParams: ToOptional<{
      [K in keyof Omit<UpdateCrawlerRequest, "Name">]: (Omit<UpdateCrawlerRequest, "Name">)[K]
    }>): UpdateCrawlerResponse {
        return this.client.updateCrawler(
            this.ops["UpdateCrawler"].apply(partialParams)
        );
    }

    invokeUpdateCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerScheduleRequest]: (UpdateCrawlerScheduleRequest)[K]
    }>): UpdateCrawlerScheduleResponse {
        return this.client.updateCrawlerSchedule(
            this.ops["UpdateCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeUpdateDatabase(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDatabaseRequest, "Name">]: (Omit<UpdateDatabaseRequest, "Name">)[K]
    }>): UpdateDatabaseResponse {
        return this.client.updateDatabase(
            this.ops["UpdateDatabase"].apply(partialParams)
        );
    }

    invokeUpdateDevEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateDevEndpointRequest]: (UpdateDevEndpointRequest)[K]
    }>): UpdateDevEndpointResponse {
        return this.client.updateDevEndpoint(
            this.ops["UpdateDevEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest]: (UpdateJobRequest)[K]
    }>): UpdateJobResponse {
        return this.client.updateJob(
            this.ops["UpdateJob"].apply(partialParams)
        );
    }

    invokeUpdateMLTransform(partialParams: ToOptional<{
      [K in keyof UpdateMLTransformRequest]: (UpdateMLTransformRequest)[K]
    }>): UpdateMLTransformResponse {
        return this.client.updateMLTransform(
            this.ops["UpdateMLTransform"].apply(partialParams)
        );
    }

    invokeUpdatePartition(partialParams: ToOptional<{
      [K in keyof UpdatePartitionRequest]: (UpdatePartitionRequest)[K]
    }>): UpdatePartitionResponse {
        return this.client.updatePartition(
            this.ops["UpdatePartition"].apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryInput]: (UpdateRegistryInput)[K]
    }>): UpdateRegistryResponse {
        return this.client.updateRegistry(
            this.ops["UpdateRegistry"].apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaInput]: (UpdateSchemaInput)[K]
    }>): UpdateSchemaResponse {
        return this.client.updateSchema(
            this.ops["UpdateSchema"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableRequest]: (UpdateTableRequest)[K]
    }>): UpdateTableResponse {
        return this.client.updateTable(
            this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateTrigger(partialParams: ToOptional<{
      [K in keyof Omit<UpdateTriggerRequest, "Name">]: (Omit<UpdateTriggerRequest, "Name">)[K]
    }>): UpdateTriggerResponse {
        return this.client.updateTrigger(
            this.ops["UpdateTrigger"].apply(partialParams)
        );
    }

    invokeUpdateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof UpdateUserDefinedFunctionRequest]: (UpdateUserDefinedFunctionRequest)[K]
    }>): UpdateUserDefinedFunctionResponse {
        return this.client.updateUserDefinedFunction(
            this.ops["UpdateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeUpdateWorkflow(partialParams: ToOptional<{
      [K in keyof Omit<UpdateWorkflowRequest, "Name">]: (Omit<UpdateWorkflowRequest, "Name">)[K]
    }>): UpdateWorkflowResponse {
        return this.client.updateWorkflow(
            this.ops["UpdateWorkflow"].apply(partialParams)
        );
    }
}