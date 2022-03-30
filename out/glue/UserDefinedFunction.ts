
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

export default class extends aws.glue.UserDefinedFunction {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.glue.UserDefinedFunction>) {
        super(...args)
        this.client = new awssdk.Glue()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/glue-2017-03-31.normal.json"), this.client)
    }

    invokeBatchCreatePartition(partialParams: ToOptional<{
      [K in keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest]: (BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest)[K]
    }>): BatchCreatePartitionResponse {
        return this.client.batchCreatePartition(
            this.ops["BatchCreatePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteConnection(partialParams: ToOptional<{
      [K in keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest]: (BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest)[K]
    }>): BatchDeleteConnectionResponse {
        return this.client.batchDeleteConnection(
            this.ops["BatchDeleteConnection"].apply(partialParams)
        );
    }

    invokeBatchDeletePartition(partialParams: ToOptional<{
      [K in keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest]: (BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest)[K]
    }>): BatchDeletePartitionResponse {
        return this.client.batchDeletePartition(
            this.ops["BatchDeletePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteTable(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest]: (BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest)[K]
    }>): BatchDeleteTableResponse {
        return this.client.batchDeleteTable(
            this.ops["BatchDeleteTable"].apply(partialParams)
        );
    }

    invokeBatchDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest]: (BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest)[K]
    }>): BatchDeleteTableVersionResponse {
        return this.client.batchDeleteTableVersion(
            this.ops["BatchDeleteTableVersion"].apply(partialParams)
        );
    }

    invokeBatchGetBlueprints(partialParams: ToOptional<{
      [K in keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest]: (BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest)[K]
    }>): BatchGetBlueprintsResponse {
        return this.client.batchGetBlueprints(
            this.ops["BatchGetBlueprints"].apply(partialParams)
        );
    }

    invokeBatchGetCrawlers(partialParams: ToOptional<{
      [K in keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest]: (BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest)[K]
    }>): BatchGetCrawlersResponse {
        return this.client.batchGetCrawlers(
            this.ops["BatchGetCrawlers"].apply(partialParams)
        );
    }

    invokeBatchGetDevEndpoints(partialParams: ToOptional<{
      [K in keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest]: (BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest)[K]
    }>): BatchGetDevEndpointsResponse {
        return this.client.batchGetDevEndpoints(
            this.ops["BatchGetDevEndpoints"].apply(partialParams)
        );
    }

    invokeBatchGetJobs(partialParams: ToOptional<{
      [K in keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest]: (BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest)[K]
    }>): BatchGetJobsResponse {
        return this.client.batchGetJobs(
            this.ops["BatchGetJobs"].apply(partialParams)
        );
    }

    invokeBatchGetPartition(partialParams: ToOptional<{
      [K in keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest]: (BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest)[K]
    }>): BatchGetPartitionResponse {
        return this.client.batchGetPartition(
            this.ops["BatchGetPartition"].apply(partialParams)
        );
    }

    invokeBatchGetTriggers(partialParams: ToOptional<{
      [K in keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest]: (BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest)[K]
    }>): BatchGetTriggersResponse {
        return this.client.batchGetTriggers(
            this.ops["BatchGetTriggers"].apply(partialParams)
        );
    }

    invokeBatchGetWorkflows(partialParams: ToOptional<{
      [K in keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest]: (BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest)[K]
    }>): BatchGetWorkflowsResponse {
        return this.client.batchGetWorkflows(
            this.ops["BatchGetWorkflows"].apply(partialParams)
        );
    }

    invokeBatchStopJobRun(partialParams: ToOptional<{
      [K in keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest]: (BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest)[K]
    }>): BatchStopJobRunResponse {
        return this.client.batchStopJobRun(
            this.ops["BatchStopJobRun"].apply(partialParams)
        );
    }

    invokeBatchUpdatePartition(partialParams: ToOptional<{
      [K in keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest]: (BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest)[K]
    }>): BatchUpdatePartitionResponse {
        return this.client.batchUpdatePartition(
            this.ops["BatchUpdatePartition"].apply(partialParams)
        );
    }

    invokeCancelMLTaskRun(partialParams: ToOptional<{
      [K in keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest]: (CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest)[K]
    }>): CancelMLTaskRunResponse {
        return this.client.cancelMLTaskRun(
            this.ops["CancelMLTaskRun"].apply(partialParams)
        );
    }

    invokeCheckSchemaVersionValidity(partialParams: ToOptional<{
      [K in keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput]: (CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput)[K]
    }>): CheckSchemaVersionValidityResponse {
        return this.client.checkSchemaVersionValidity(
            this.ops["CheckSchemaVersionValidity"].apply(partialParams)
        );
    }

    invokeCreateBlueprint(partialParams: ToOptional<{
      [K in keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest]: (CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest)[K]
    }>): CreateBlueprintResponse {
        return this.client.createBlueprint(
            this.ops["CreateBlueprint"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest]: (CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest)[K]
    }>): CreateConnectionResponse {
        return this.client.createConnection(
            this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateCrawler(partialParams: ToOptional<{
      [K in keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest]: (CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest)[K]
    }>): CreateCrawlerResponse {
        return this.client.createCrawler(
            this.ops["CreateCrawler"].apply(partialParams)
        );
    }

    invokeCreateDatabase(partialParams: ToOptional<{
      [K in keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest]: (CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest)[K]
    }>): CreateDatabaseResponse {
        return this.client.createDatabase(
            this.ops["CreateDatabase"].apply(partialParams)
        );
    }

    invokeCreateDevEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest]: (CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest)[K]
    }>): CreateDevEndpointResponse {
        return this.client.createDevEndpoint(
            this.ops["CreateDevEndpoint"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): CreateJobResponse {
        return this.client.createJob(
            this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateMLTransform(partialParams: ToOptional<{
      [K in keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest]: (CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest)[K]
    }>): CreateMLTransformResponse {
        return this.client.createMLTransform(
            this.ops["CreateMLTransform"].apply(partialParams)
        );
    }

    invokeCreatePartition(partialParams: ToOptional<{
      [K in keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest]: (CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest)[K]
    }>): CreatePartitionResponse {
        return this.client.createPartition(
            this.ops["CreatePartition"].apply(partialParams)
        );
    }

    invokeCreatePartitionIndex(partialParams: ToOptional<{
      [K in keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest]: (CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest)[K]
    }>): CreatePartitionIndexResponse {
        return this.client.createPartitionIndex(
            this.ops["CreatePartitionIndex"].apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput]: (CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput)[K]
    }>): CreateRegistryResponse {
        return this.client.createRegistry(
            this.ops["CreateRegistry"].apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput]: (CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput)[K]
    }>): CreateSchemaResponse {
        return this.client.createSchema(
            this.ops["CreateSchema"].apply(partialParams)
        );
    }

    invokeCreateSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest]: (CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest)[K]
    }>): CreateSecurityConfigurationResponse {
        return this.client.createSecurityConfiguration(
            this.ops["CreateSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest]: (CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest)[K]
    }>): CreateTableResponse {
        return this.client.createTable(
            this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeCreateTrigger(partialParams: ToOptional<{
      [K in keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest]: (CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest)[K]
    }>): CreateTriggerResponse {
        return this.client.createTrigger(
            this.ops["CreateTrigger"].apply(partialParams)
        );
    }

    invokeCreateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest]: (CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest)[K]
    }>): CreateUserDefinedFunctionResponse {
        return this.client.createUserDefinedFunction(
            this.ops["CreateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest]: (CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest)[K]
    }>): CreateWorkflowResponse {
        return this.client.createWorkflow(
            this.ops["CreateWorkflow"].apply(partialParams)
        );
    }

    invokeDeleteBlueprint(partialParams: ToOptional<{
      [K in keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest]: (DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest)[K]
    }>): DeleteBlueprintResponse {
        return this.client.deleteBlueprint(
            this.ops["DeleteBlueprint"].apply(partialParams)
        );
    }

    invokeDeleteClassifier(partialParams: ToOptional<{
      [K in keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest]: (DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest)[K]
    }>): DeleteClassifierResponse {
        return this.client.deleteClassifier(
            this.ops["DeleteClassifier"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest]: (DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest)[K]
    }>): DeleteColumnStatisticsForPartitionResponse {
        return this.client.deleteColumnStatisticsForPartition(
            this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest]: (DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest)[K]
    }>): DeleteColumnStatisticsForTableResponse {
        return this.client.deleteColumnStatisticsForTable(
            this.ops["DeleteColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest]: (DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest)[K]
    }>): DeleteConnectionResponse {
        return this.client.deleteConnection(
            this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteCrawler(partialParams: ToOptional<{
      [K in keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest]: (DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest)[K]
    }>): DeleteCrawlerResponse {
        return this.client.deleteCrawler(
            this.ops["DeleteCrawler"].apply(partialParams)
        );
    }

    invokeDeleteDatabase(partialParams: ToOptional<{
      [K in keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest]: (DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest)[K]
    }>): DeleteDatabaseResponse {
        return this.client.deleteDatabase(
            this.ops["DeleteDatabase"].apply(partialParams)
        );
    }

    invokeDeleteDevEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest]: (DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest)[K]
    }>): DeleteDevEndpointResponse {
        return this.client.deleteDevEndpoint(
            this.ops["DeleteDevEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest]: (DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest)[K]
    }>): DeleteJobResponse {
        return this.client.deleteJob(
            this.ops["DeleteJob"].apply(partialParams)
        );
    }

    invokeDeleteMLTransform(partialParams: ToOptional<{
      [K in keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest]: (DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest)[K]
    }>): DeleteMLTransformResponse {
        return this.client.deleteMLTransform(
            this.ops["DeleteMLTransform"].apply(partialParams)
        );
    }

    invokeDeletePartition(partialParams: ToOptional<{
      [K in keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest]: (DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest)[K]
    }>): DeletePartitionResponse {
        return this.client.deletePartition(
            this.ops["DeletePartition"].apply(partialParams)
        );
    }

    invokeDeletePartitionIndex(partialParams: ToOptional<{
      [K in keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest]: (DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest)[K]
    }>): DeletePartitionIndexResponse {
        return this.client.deletePartitionIndex(
            this.ops["DeletePartitionIndex"].apply(partialParams)
        );
    }

    invokeDeleteRegistry(partialParams: ToOptional<{
      [K in keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput]: (DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput)[K]
    }>): DeleteRegistryResponse {
        return this.client.deleteRegistry(
            this.ops["DeleteRegistry"].apply(partialParams)
        );
    }

    invokeDeleteSchema(partialParams: ToOptional<{
      [K in keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput]: (DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput)[K]
    }>): DeleteSchemaResponse {
        return this.client.deleteSchema(
            this.ops["DeleteSchema"].apply(partialParams)
        );
    }

    invokeDeleteSchemaVersions(partialParams: ToOptional<{
      [K in keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput]: (DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput)[K]
    }>): DeleteSchemaVersionsResponse {
        return this.client.deleteSchemaVersions(
            this.ops["DeleteSchemaVersions"].apply(partialParams)
        );
    }

    invokeDeleteSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest]: (DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest)[K]
    }>): DeleteSecurityConfigurationResponse {
        return this.client.deleteSecurityConfiguration(
            this.ops["DeleteSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest]: (DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest)[K]
    }>): DeleteTableResponse {
        return this.client.deleteTable(
            this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest]: (DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest)[K]
    }>): DeleteTableVersionResponse {
        return this.client.deleteTableVersion(
            this.ops["DeleteTableVersion"].apply(partialParams)
        );
    }

    invokeDeleteTrigger(partialParams: ToOptional<{
      [K in keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest]: (DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest)[K]
    }>): DeleteTriggerResponse {
        return this.client.deleteTrigger(
            this.ops["DeleteTrigger"].apply(partialParams)
        );
    }

    invokeDeleteUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest]: (DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest)[K]
    }>): DeleteUserDefinedFunctionResponse {
        return this.client.deleteUserDefinedFunction(
            this.ops["DeleteUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeDeleteWorkflow(partialParams: ToOptional<{
      [K in keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest]: (DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest)[K]
    }>): DeleteWorkflowResponse {
        return this.client.deleteWorkflow(
            this.ops["DeleteWorkflow"].apply(partialParams)
        );
    }

    invokeGetBlueprint(partialParams: ToOptional<{
      [K in keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest]: (GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest)[K]
    }>): GetBlueprintResponse {
        return this.client.getBlueprint(
            this.ops["GetBlueprint"].apply(partialParams)
        );
    }

    invokeGetBlueprintRun(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest]: (GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest)[K]
    }>): GetBlueprintRunResponse {
        return this.client.getBlueprintRun(
            this.ops["GetBlueprintRun"].apply(partialParams)
        );
    }

    invokeGetBlueprintRuns(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest]: (GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest)[K]
    }>): GetBlueprintRunsResponse {
        return this.client.getBlueprintRuns(
            this.ops["GetBlueprintRuns"].apply(partialParams)
        );
    }

    invokeGetClassifier(partialParams: ToOptional<{
      [K in keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest]: (GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest)[K]
    }>): GetClassifierResponse {
        return this.client.getClassifier(
            this.ops["GetClassifier"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest]: (GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest)[K]
    }>): GetColumnStatisticsForPartitionResponse {
        return this.client.getColumnStatisticsForPartition(
            this.ops["GetColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest]: (GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest)[K]
    }>): GetColumnStatisticsForTableResponse {
        return this.client.getColumnStatisticsForTable(
            this.ops["GetColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeGetConnection(partialParams: ToOptional<{
      [K in keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest]: (GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest)[K]
    }>): GetConnectionResponse {
        return this.client.getConnection(
            this.ops["GetConnection"].apply(partialParams)
        );
    }

    invokeGetCrawler(partialParams: ToOptional<{
      [K in keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest]: (GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest)[K]
    }>): GetCrawlerResponse {
        return this.client.getCrawler(
            this.ops["GetCrawler"].apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest]: (GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest)[K]
    }>): GetDatabaseResponse {
        return this.client.getDatabase(
            this.ops["GetDatabase"].apply(partialParams)
        );
    }

    invokeGetDevEndpoint(partialParams: ToOptional<{
      [K in keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest]: (GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest)[K]
    }>): GetDevEndpointResponse {
        return this.client.getDevEndpoint(
            this.ops["GetDevEndpoint"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): GetJobResponse {
        return this.client.getJob(
            this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetJobBookmark(partialParams: ToOptional<{
      [K in keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest]: (GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest)[K]
    }>): GetJobBookmarkResponse {
        return this.client.getJobBookmark(
            this.ops["GetJobBookmark"].apply(partialParams)
        );
    }

    invokeGetJobRun(partialParams: ToOptional<{
      [K in keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest]: (GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest)[K]
    }>): GetJobRunResponse {
        return this.client.getJobRun(
            this.ops["GetJobRun"].apply(partialParams)
        );
    }

    invokeGetJobRuns(partialParams: ToOptional<{
      [K in keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest]: (GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest)[K]
    }>): GetJobRunsResponse {
        return this.client.getJobRuns(
            this.ops["GetJobRuns"].apply(partialParams)
        );
    }

    invokeGetMLTaskRun(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest]: (GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest)[K]
    }>): GetMLTaskRunResponse {
        return this.client.getMLTaskRun(
            this.ops["GetMLTaskRun"].apply(partialParams)
        );
    }

    invokeGetMLTaskRuns(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest]: (GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest)[K]
    }>): GetMLTaskRunsResponse {
        return this.client.getMLTaskRuns(
            this.ops["GetMLTaskRuns"].apply(partialParams)
        );
    }

    invokeGetMLTransform(partialParams: ToOptional<{
      [K in keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest]: (GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest)[K]
    }>): GetMLTransformResponse {
        return this.client.getMLTransform(
            this.ops["GetMLTransform"].apply(partialParams)
        );
    }

    invokeGetMapping(partialParams: ToOptional<{
      [K in keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest]: (GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest)[K]
    }>): GetMappingResponse {
        return this.client.getMapping(
            this.ops["GetMapping"].apply(partialParams)
        );
    }

    invokeGetPartition(partialParams: ToOptional<{
      [K in keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest]: (GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest)[K]
    }>): GetPartitionResponse {
        return this.client.getPartition(
            this.ops["GetPartition"].apply(partialParams)
        );
    }

    invokeGetPartitionIndexes(partialParams: ToOptional<{
      [K in keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest]: (GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest)[K]
    }>): GetPartitionIndexesResponse {
        return this.client.getPartitionIndexes(
            this.ops["GetPartitionIndexes"].apply(partialParams)
        );
    }

    invokeGetPartitions(partialParams: ToOptional<{
      [K in keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest]: (GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest)[K]
    }>): GetPartitionsResponse {
        return this.client.getPartitions(
            this.ops["GetPartitions"].apply(partialParams)
        );
    }

    invokeGetPlan(partialParams: ToOptional<{
      [K in keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest]: (GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest)[K]
    }>): GetPlanResponse {
        return this.client.getPlan(
            this.ops["GetPlan"].apply(partialParams)
        );
    }

    invokeGetRegistry(partialParams: ToOptional<{
      [K in keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput]: (GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput)[K]
    }>): GetRegistryResponse {
        return this.client.getRegistry(
            this.ops["GetRegistry"].apply(partialParams)
        );
    }

    invokeGetSchema(partialParams: ToOptional<{
      [K in keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput]: (GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput)[K]
    }>): GetSchemaResponse {
        return this.client.getSchema(
            this.ops["GetSchema"].apply(partialParams)
        );
    }

    invokeGetSchemaByDefinition(partialParams: ToOptional<{
      [K in keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput]: (GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput)[K]
    }>): GetSchemaByDefinitionResponse {
        return this.client.getSchemaByDefinition(
            this.ops["GetSchemaByDefinition"].apply(partialParams)
        );
    }

    invokeGetSchemaVersionsDiff(partialParams: ToOptional<{
      [K in keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput]: (GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput)[K]
    }>): GetSchemaVersionsDiffResponse {
        return this.client.getSchemaVersionsDiff(
            this.ops["GetSchemaVersionsDiff"].apply(partialParams)
        );
    }

    invokeGetSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest]: (GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest)[K]
    }>): GetSecurityConfigurationResponse {
        return this.client.getSecurityConfiguration(
            this.ops["GetSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeGetTable(partialParams: ToOptional<{
      [K in keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest]: (GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest)[K]
    }>): GetTableResponse {
        return this.client.getTable(
            this.ops["GetTable"].apply(partialParams)
        );
    }

    invokeGetTableVersion(partialParams: ToOptional<{
      [K in keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest]: (GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest)[K]
    }>): GetTableVersionResponse {
        return this.client.getTableVersion(
            this.ops["GetTableVersion"].apply(partialParams)
        );
    }

    invokeGetTableVersions(partialParams: ToOptional<{
      [K in keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest]: (GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest)[K]
    }>): GetTableVersionsResponse {
        return this.client.getTableVersions(
            this.ops["GetTableVersions"].apply(partialParams)
        );
    }

    invokeGetTables(partialParams: ToOptional<{
      [K in keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest]: (GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest)[K]
    }>): GetTablesResponse {
        return this.client.getTables(
            this.ops["GetTables"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest]: (GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest)[K]
    }>): GetTagsResponse {
        return this.client.getTags(
            this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetTrigger(partialParams: ToOptional<{
      [K in keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest]: (GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest)[K]
    }>): GetTriggerResponse {
        return this.client.getTrigger(
            this.ops["GetTrigger"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionMetadataRequest & keyof Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId"> & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest]: (GetUnfilteredPartitionMetadataRequest & Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId"> & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest)[K]
    }>): GetUnfilteredPartitionMetadataResponse {
        return this.client.getUnfilteredPartitionMetadata(
            this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionsMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionsMetadataRequest & keyof Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId"> & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest]: (GetUnfilteredPartitionsMetadataRequest & Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId"> & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest)[K]
    }>): GetUnfilteredPartitionsMetadataResponse {
        return this.client.getUnfilteredPartitionsMetadata(
            this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredTableMetadataRequest & keyof Omit<GetUnfilteredTableMetadataRequest, "CatalogId"> & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest]: (GetUnfilteredTableMetadataRequest & Omit<GetUnfilteredTableMetadataRequest, "CatalogId"> & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest)[K]
    }>): GetUnfilteredTableMetadataResponse {
        return this.client.getUnfilteredTableMetadata(
            this.ops["GetUnfilteredTableMetadata"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest]: (GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest)[K]
    }>): GetUserDefinedFunctionResponse {
        return this.client.getUserDefinedFunction(
            this.ops["GetUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunctions(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest]: (GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest)[K]
    }>): GetUserDefinedFunctionsResponse {
        return this.client.getUserDefinedFunctions(
            this.ops["GetUserDefinedFunctions"].apply(partialParams)
        );
    }

    invokeGetWorkflow(partialParams: ToOptional<{
      [K in keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest]: (GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest)[K]
    }>): GetWorkflowResponse {
        return this.client.getWorkflow(
            this.ops["GetWorkflow"].apply(partialParams)
        );
    }

    invokeGetWorkflowRun(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest]: (GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest)[K]
    }>): GetWorkflowRunResponse {
        return this.client.getWorkflowRun(
            this.ops["GetWorkflowRun"].apply(partialParams)
        );
    }

    invokeGetWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest]: (GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest)[K]
    }>): GetWorkflowRunPropertiesResponse {
        return this.client.getWorkflowRunProperties(
            this.ops["GetWorkflowRunProperties"].apply(partialParams)
        );
    }

    invokeGetWorkflowRuns(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest]: (GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest)[K]
    }>): GetWorkflowRunsResponse {
        return this.client.getWorkflowRuns(
            this.ops["GetWorkflowRuns"].apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput]: (ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput)[K]
    }>): ListSchemaVersionsResponse {
        return this.client.listSchemaVersions(
            this.ops["ListSchemaVersions"].apply(partialParams)
        );
    }

    invokePutDataCatalogEncryptionSettings(partialParams: ToOptional<{
      [K in keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest]: (PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest)[K]
    }>): PutDataCatalogEncryptionSettingsResponse {
        return this.client.putDataCatalogEncryptionSettings(
            this.ops["PutDataCatalogEncryptionSettings"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest)[K]
    }>): PutResourcePolicyResponse {
        return this.client.putResourcePolicy(
            this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokePutSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput]: (PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput)[K]
    }>): PutSchemaVersionMetadataResponse {
        return this.client.putSchemaVersionMetadata(
            this.ops["PutSchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokePutWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof Omit<PutWorkflowRunPropertiesRequest, "Name"> & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest]: (PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & Omit<PutWorkflowRunPropertiesRequest, "Name"> & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest)[K]
    }>): PutWorkflowRunPropertiesResponse {
        return this.client.putWorkflowRunProperties(
            this.ops["PutWorkflowRunProperties"].apply(partialParams)
        );
    }

    invokeRegisterSchemaVersion(partialParams: ToOptional<{
      [K in keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput]: (RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput)[K]
    }>): RegisterSchemaVersionResponse {
        return this.client.registerSchemaVersion(
            this.ops["RegisterSchemaVersion"].apply(partialParams)
        );
    }

    invokeRemoveSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput]: (RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput)[K]
    }>): RemoveSchemaVersionMetadataResponse {
        return this.client.removeSchemaVersionMetadata(
            this.ops["RemoveSchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokeResetJobBookmark(partialParams: ToOptional<{
      [K in keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest]: (ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest)[K]
    }>): ResetJobBookmarkResponse {
        return this.client.resetJobBookmark(
            this.ops["ResetJobBookmark"].apply(partialParams)
        );
    }

    invokeResumeWorkflowRun(partialParams: ToOptional<{
      [K in keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof Omit<ResumeWorkflowRunRequest, "Name"> & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest]: (ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & Omit<ResumeWorkflowRunRequest, "Name"> & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest)[K]
    }>): ResumeWorkflowRunResponse {
        return this.client.resumeWorkflowRun(
            this.ops["ResumeWorkflowRun"].apply(partialParams)
        );
    }

    invokeStartBlueprintRun(partialParams: ToOptional<{
      [K in keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest]: (StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest)[K]
    }>): StartBlueprintRunResponse {
        return this.client.startBlueprintRun(
            this.ops["StartBlueprintRun"].apply(partialParams)
        );
    }

    invokeStartCrawler(partialParams: ToOptional<{
      [K in keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof Omit<StartCrawlerRequest, "Name"> & keyof StartCrawlerRequest & keyof StartCrawlerRequest]: (StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest & Omit<StartCrawlerRequest, "Name"> & StartCrawlerRequest & StartCrawlerRequest)[K]
    }>): StartCrawlerResponse {
        return this.client.startCrawler(
            this.ops["StartCrawler"].apply(partialParams)
        );
    }

    invokeStartCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest]: (StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest)[K]
    }>): StartCrawlerScheduleResponse {
        return this.client.startCrawlerSchedule(
            this.ops["StartCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeStartExportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest]: (StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest)[K]
    }>): StartExportLabelsTaskRunResponse {
        return this.client.startExportLabelsTaskRun(
            this.ops["StartExportLabelsTaskRun"].apply(partialParams)
        );
    }

    invokeStartImportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest]: (StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest)[K]
    }>): StartImportLabelsTaskRunResponse {
        return this.client.startImportLabelsTaskRun(
            this.ops["StartImportLabelsTaskRun"].apply(partialParams)
        );
    }

    invokeStartJobRun(partialParams: ToOptional<{
      [K in keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest]: (StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest)[K]
    }>): StartJobRunResponse {
        return this.client.startJobRun(
            this.ops["StartJobRun"].apply(partialParams)
        );
    }

    invokeStartMLEvaluationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest]: (StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest)[K]
    }>): StartMLEvaluationTaskRunResponse {
        return this.client.startMLEvaluationTaskRun(
            this.ops["StartMLEvaluationTaskRun"].apply(partialParams)
        );
    }

    invokeStartMLLabelingSetGenerationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest]: (StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest)[K]
    }>): StartMLLabelingSetGenerationTaskRunResponse {
        return this.client.startMLLabelingSetGenerationTaskRun(
            this.ops["StartMLLabelingSetGenerationTaskRun"].apply(partialParams)
        );
    }

    invokeStartTrigger(partialParams: ToOptional<{
      [K in keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest & keyof Omit<StartTriggerRequest, "Name"> & keyof StartTriggerRequest & keyof StartTriggerRequest]: (StartTriggerRequest & StartTriggerRequest & StartTriggerRequest & StartTriggerRequest & StartTriggerRequest & Omit<StartTriggerRequest, "Name"> & StartTriggerRequest & StartTriggerRequest)[K]
    }>): StartTriggerResponse {
        return this.client.startTrigger(
            this.ops["StartTrigger"].apply(partialParams)
        );
    }

    invokeStartWorkflowRun(partialParams: ToOptional<{
      [K in keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof Omit<StartWorkflowRunRequest, "Name"> & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest]: (StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest & Omit<StartWorkflowRunRequest, "Name"> & StartWorkflowRunRequest & StartWorkflowRunRequest)[K]
    }>): StartWorkflowRunResponse {
        return this.client.startWorkflowRun(
            this.ops["StartWorkflowRun"].apply(partialParams)
        );
    }

    invokeStopCrawler(partialParams: ToOptional<{
      [K in keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof Omit<StopCrawlerRequest, "Name"> & keyof StopCrawlerRequest & keyof StopCrawlerRequest]: (StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest & Omit<StopCrawlerRequest, "Name"> & StopCrawlerRequest & StopCrawlerRequest)[K]
    }>): StopCrawlerResponse {
        return this.client.stopCrawler(
            this.ops["StopCrawler"].apply(partialParams)
        );
    }

    invokeStopCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest]: (StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest)[K]
    }>): StopCrawlerScheduleResponse {
        return this.client.stopCrawlerSchedule(
            this.ops["StopCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeStopTrigger(partialParams: ToOptional<{
      [K in keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest & keyof Omit<StopTriggerRequest, "Name"> & keyof StopTriggerRequest & keyof StopTriggerRequest]: (StopTriggerRequest & StopTriggerRequest & StopTriggerRequest & StopTriggerRequest & StopTriggerRequest & Omit<StopTriggerRequest, "Name"> & StopTriggerRequest & StopTriggerRequest)[K]
    }>): StopTriggerResponse {
        return this.client.stopTrigger(
            this.ops["StopTrigger"].apply(partialParams)
        );
    }

    invokeStopWorkflowRun(partialParams: ToOptional<{
      [K in keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof Omit<StopWorkflowRunRequest, "Name"> & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest]: (StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest & Omit<StopWorkflowRunRequest, "Name"> & StopWorkflowRunRequest & StopWorkflowRunRequest)[K]
    }>): StopWorkflowRunResponse {
        return this.client.stopWorkflowRun(
            this.ops["StopWorkflowRun"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateBlueprint(partialParams: ToOptional<{
      [K in keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof Omit<UpdateBlueprintRequest, "Name"> & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest]: (UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest & Omit<UpdateBlueprintRequest, "Name"> & UpdateBlueprintRequest & UpdateBlueprintRequest)[K]
    }>): UpdateBlueprintResponse {
        return this.client.updateBlueprint(
            this.ops["UpdateBlueprint"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest & keyof Omit<UpdateColumnStatisticsForPartitionRequest, "DatabaseName"> & keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest]: (UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest & Omit<UpdateColumnStatisticsForPartitionRequest, "DatabaseName"> & UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest)[K]
    }>): UpdateColumnStatisticsForPartitionResponse {
        return this.client.updateColumnStatisticsForPartition(
            this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest & keyof Omit<UpdateColumnStatisticsForTableRequest, "DatabaseName"> & keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest]: (UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest & Omit<UpdateColumnStatisticsForTableRequest, "DatabaseName"> & UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest)[K]
    }>): UpdateColumnStatisticsForTableResponse {
        return this.client.updateColumnStatisticsForTable(
            this.ops["UpdateColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof Omit<UpdateConnectionRequest, "Name"> & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest]: (UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & Omit<UpdateConnectionRequest, "Name"> & UpdateConnectionRequest & UpdateConnectionRequest)[K]
    }>): UpdateConnectionResponse {
        return this.client.updateConnection(
            this.ops["UpdateConnection"].apply(partialParams)
        );
    }

    invokeUpdateCrawler(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof Omit<UpdateCrawlerRequest, "Name"> & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest]: (UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest & Omit<UpdateCrawlerRequest, "Name"> & UpdateCrawlerRequest & UpdateCrawlerRequest)[K]
    }>): UpdateCrawlerResponse {
        return this.client.updateCrawler(
            this.ops["UpdateCrawler"].apply(partialParams)
        );
    }

    invokeUpdateCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest]: (UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest)[K]
    }>): UpdateCrawlerScheduleResponse {
        return this.client.updateCrawlerSchedule(
            this.ops["UpdateCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeUpdateDatabase(partialParams: ToOptional<{
      [K in keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof Omit<UpdateDatabaseRequest, "Name"> & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest]: (UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest & Omit<UpdateDatabaseRequest, "Name"> & UpdateDatabaseRequest & UpdateDatabaseRequest)[K]
    }>): UpdateDatabaseResponse {
        return this.client.updateDatabase(
            this.ops["UpdateDatabase"].apply(partialParams)
        );
    }

    invokeUpdateDevEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest]: (UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest)[K]
    }>): UpdateDevEndpointResponse {
        return this.client.updateDevEndpoint(
            this.ops["UpdateDevEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest]: (UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest)[K]
    }>): UpdateJobResponse {
        return this.client.updateJob(
            this.ops["UpdateJob"].apply(partialParams)
        );
    }

    invokeUpdateMLTransform(partialParams: ToOptional<{
      [K in keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest]: (UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest)[K]
    }>): UpdateMLTransformResponse {
        return this.client.updateMLTransform(
            this.ops["UpdateMLTransform"].apply(partialParams)
        );
    }

    invokeUpdatePartition(partialParams: ToOptional<{
      [K in keyof UpdatePartitionRequest & keyof UpdatePartitionRequest & keyof UpdatePartitionRequest & keyof UpdatePartitionRequest & keyof Omit<UpdatePartitionRequest, "DatabaseName"> & keyof UpdatePartitionRequest & keyof UpdatePartitionRequest & keyof UpdatePartitionRequest]: (UpdatePartitionRequest & UpdatePartitionRequest & UpdatePartitionRequest & UpdatePartitionRequest & Omit<UpdatePartitionRequest, "DatabaseName"> & UpdatePartitionRequest & UpdatePartitionRequest & UpdatePartitionRequest)[K]
    }>): UpdatePartitionResponse {
        return this.client.updatePartition(
            this.ops["UpdatePartition"].apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput]: (UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput)[K]
    }>): UpdateRegistryResponse {
        return this.client.updateRegistry(
            this.ops["UpdateRegistry"].apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput]: (UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput)[K]
    }>): UpdateSchemaResponse {
        return this.client.updateSchema(
            this.ops["UpdateSchema"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableRequest & keyof UpdateTableRequest & keyof UpdateTableRequest & keyof UpdateTableRequest & keyof Omit<UpdateTableRequest, "DatabaseName"> & keyof UpdateTableRequest & keyof UpdateTableRequest & keyof UpdateTableRequest]: (UpdateTableRequest & UpdateTableRequest & UpdateTableRequest & UpdateTableRequest & Omit<UpdateTableRequest, "DatabaseName"> & UpdateTableRequest & UpdateTableRequest & UpdateTableRequest)[K]
    }>): UpdateTableResponse {
        return this.client.updateTable(
            this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateTrigger(partialParams: ToOptional<{
      [K in keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof Omit<UpdateTriggerRequest, "Name"> & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest]: (UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest & Omit<UpdateTriggerRequest, "Name"> & UpdateTriggerRequest & UpdateTriggerRequest)[K]
    }>): UpdateTriggerResponse {
        return this.client.updateTrigger(
            this.ops["UpdateTrigger"].apply(partialParams)
        );
    }

    invokeUpdateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest & keyof Omit<UpdateUserDefinedFunctionRequest, "DatabaseName"> & keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest]: (UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest & Omit<UpdateUserDefinedFunctionRequest, "DatabaseName"> & UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest)[K]
    }>): UpdateUserDefinedFunctionResponse {
        return this.client.updateUserDefinedFunction(
            this.ops["UpdateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeUpdateWorkflow(partialParams: ToOptional<{
      [K in keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof Omit<UpdateWorkflowRequest, "Name"> & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest]: (UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest & Omit<UpdateWorkflowRequest, "Name"> & UpdateWorkflowRequest & UpdateWorkflowRequest)[K]
    }>): UpdateWorkflowResponse {
        return this.client.updateWorkflow(
            this.ops["UpdateWorkflow"].apply(partialParams)
        );
    }
}