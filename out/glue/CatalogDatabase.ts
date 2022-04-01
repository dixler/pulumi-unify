
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    CreateClassifierRequest,
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
    CreateScriptRequest,
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
    DeleteResourcePolicyRequest,
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
    GetCatalogImportStatusRequest,
    GetClassifierRequest,
    GetClassifiersRequest,
    GetColumnStatisticsForPartitionRequest,
    GetColumnStatisticsForTableRequest,
    GetConnectionRequest,
    GetConnectionsRequest,
    GetCrawlerRequest,
    GetCrawlerMetricsRequest,
    GetCrawlersRequest,
    GetDataCatalogEncryptionSettingsRequest,
    GetDatabaseRequest,
    GetDatabasesRequest,
    GetDataflowGraphRequest,
    GetDevEndpointRequest,
    GetDevEndpointsRequest,
    GetJobRequest,
    GetJobBookmarkRequest,
    GetJobRunRequest,
    GetJobRunsRequest,
    GetJobsRequest,
    GetMLTaskRunRequest,
    GetMLTaskRunsRequest,
    GetMLTransformRequest,
    GetMLTransformsRequest,
    GetMappingRequest,
    GetPartitionRequest,
    GetPartitionIndexesRequest,
    GetPartitionsRequest,
    GetPlanRequest,
    GetRegistryInput,
    GetResourcePoliciesRequest,
    GetResourcePolicyRequest,
    GetSchemaInput,
    GetSchemaByDefinitionInput,
    GetSchemaVersionInput,
    GetSchemaVersionsDiffInput,
    GetSecurityConfigurationRequest,
    GetSecurityConfigurationsRequest,
    GetTableRequest,
    GetTableVersionRequest,
    GetTableVersionsRequest,
    GetTablesRequest,
    GetTagsRequest,
    GetTriggerRequest,
    GetTriggersRequest,
    GetUnfilteredPartitionMetadataRequest,
    GetUnfilteredPartitionsMetadataRequest,
    GetUnfilteredTableMetadataRequest,
    GetUserDefinedFunctionRequest,
    GetUserDefinedFunctionsRequest,
    GetWorkflowRequest,
    GetWorkflowRunRequest,
    GetWorkflowRunPropertiesRequest,
    GetWorkflowRunsRequest,
    ImportCatalogToGlueRequest,
    ListBlueprintsRequest,
    ListCrawlersRequest,
    ListDevEndpointsRequest,
    ListJobsRequest,
    ListMLTransformsRequest,
    ListRegistriesInput,
    ListSchemaVersionsInput,
    ListSchemasInput,
    ListTriggersRequest,
    ListWorkflowsRequest,
    PutDataCatalogEncryptionSettingsRequest,
    PutResourcePolicyRequest,
    PutSchemaVersionMetadataInput,
    PutWorkflowRunPropertiesRequest,
    QuerySchemaVersionMetadataInput,
    RegisterSchemaVersionInput,
    RemoveSchemaVersionMetadataInput,
    ResetJobBookmarkRequest,
    ResumeWorkflowRunRequest,
    SearchTablesRequest,
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
    UpdateClassifierRequest,
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
    CreateClassifierResponse,
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
    CreateScriptResponse,
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
    DeleteResourcePolicyResponse,
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
    GetCatalogImportStatusResponse,
    GetClassifierResponse,
    GetClassifiersResponse,
    GetColumnStatisticsForPartitionResponse,
    GetColumnStatisticsForTableResponse,
    GetConnectionResponse,
    GetConnectionsResponse,
    GetCrawlerResponse,
    GetCrawlerMetricsResponse,
    GetCrawlersResponse,
    GetDataCatalogEncryptionSettingsResponse,
    GetDatabaseResponse,
    GetDatabasesResponse,
    GetDataflowGraphResponse,
    GetDevEndpointResponse,
    GetDevEndpointsResponse,
    GetJobResponse,
    GetJobBookmarkResponse,
    GetJobRunResponse,
    GetJobRunsResponse,
    GetJobsResponse,
    GetMLTaskRunResponse,
    GetMLTaskRunsResponse,
    GetMLTransformResponse,
    GetMLTransformsResponse,
    GetMappingResponse,
    GetPartitionResponse,
    GetPartitionIndexesResponse,
    GetPartitionsResponse,
    GetPlanResponse,
    GetRegistryResponse,
    GetResourcePoliciesResponse,
    GetResourcePolicyResponse,
    GetSchemaResponse,
    GetSchemaByDefinitionResponse,
    GetSchemaVersionResponse,
    GetSchemaVersionsDiffResponse,
    GetSecurityConfigurationResponse,
    GetSecurityConfigurationsResponse,
    GetTableResponse,
    GetTableVersionResponse,
    GetTableVersionsResponse,
    GetTablesResponse,
    GetTagsResponse,
    GetTriggerResponse,
    GetTriggersResponse,
    GetUnfilteredPartitionMetadataResponse,
    GetUnfilteredPartitionsMetadataResponse,
    GetUnfilteredTableMetadataResponse,
    GetUserDefinedFunctionResponse,
    GetUserDefinedFunctionsResponse,
    GetWorkflowResponse,
    GetWorkflowRunResponse,
    GetWorkflowRunPropertiesResponse,
    GetWorkflowRunsResponse,
    ImportCatalogToGlueResponse,
    ListBlueprintsResponse,
    ListCrawlersResponse,
    ListDevEndpointsResponse,
    ListJobsResponse,
    ListMLTransformsResponse,
    ListRegistriesResponse,
    ListSchemaVersionsResponse,
    ListSchemasResponse,
    ListTriggersResponse,
    ListWorkflowsResponse,
    PutDataCatalogEncryptionSettingsResponse,
    PutResourcePolicyResponse,
    PutSchemaVersionMetadataResponse,
    PutWorkflowRunPropertiesResponse,
    QuerySchemaVersionMetadataResponse,
    RegisterSchemaVersionResponse,
    RemoveSchemaVersionMetadataResponse,
    ResetJobBookmarkResponse,
    ResumeWorkflowRunResponse,
    SearchTablesResponse,
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
    UpdateClassifierResponse,
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
const schema = require("../apis/glue-2017-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glue.CatalogDatabase {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.glue.CatalogDatabase>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Glue()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeBatchCreatePartition(partialParams: ToOptional<{
      [K in keyof BatchCreatePartitionRequest]: (BatchCreatePartitionRequest)[K]
    }>): Request<BatchCreatePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchCreatePartition(
          this.ops["BatchCreatePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteConnection(partialParams: ToOptional<{
      [K in keyof BatchDeleteConnectionRequest]: (BatchDeleteConnectionRequest)[K]
    }>): Request<BatchDeleteConnectionResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteConnection(
          this.ops["BatchDeleteConnection"].apply(partialParams)
        );
    }

    invokeBatchDeletePartition(partialParams: ToOptional<{
      [K in keyof BatchDeletePartitionRequest]: (BatchDeletePartitionRequest)[K]
    }>): Request<BatchDeletePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchDeletePartition(
          this.ops["BatchDeletePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteTable(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableRequest]: (BatchDeleteTableRequest)[K]
    }>): Request<BatchDeleteTableResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteTable(
          this.ops["BatchDeleteTable"].apply(partialParams)
        );
    }

    invokeBatchDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableVersionRequest]: (BatchDeleteTableVersionRequest)[K]
    }>): Request<BatchDeleteTableVersionResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteTableVersion(
          this.ops["BatchDeleteTableVersion"].apply(partialParams)
        );
    }

    invokeBatchGetBlueprints(partialParams: ToOptional<{
      [K in keyof BatchGetBlueprintsRequest]: (BatchGetBlueprintsRequest)[K]
    }>): Request<BatchGetBlueprintsResponse, AWSError> {
        this.boot();
        return this.client.batchGetBlueprints(
          this.ops["BatchGetBlueprints"].apply(partialParams)
        );
    }

    invokeBatchGetCrawlers(partialParams: ToOptional<{
      [K in keyof BatchGetCrawlersRequest]: (BatchGetCrawlersRequest)[K]
    }>): Request<BatchGetCrawlersResponse, AWSError> {
        this.boot();
        return this.client.batchGetCrawlers(
          this.ops["BatchGetCrawlers"].apply(partialParams)
        );
    }

    invokeBatchGetDevEndpoints(partialParams: ToOptional<{
      [K in keyof BatchGetDevEndpointsRequest]: (BatchGetDevEndpointsRequest)[K]
    }>): Request<BatchGetDevEndpointsResponse, AWSError> {
        this.boot();
        return this.client.batchGetDevEndpoints(
          this.ops["BatchGetDevEndpoints"].apply(partialParams)
        );
    }

    invokeBatchGetJobs(partialParams: ToOptional<{
      [K in keyof BatchGetJobsRequest]: (BatchGetJobsRequest)[K]
    }>): Request<BatchGetJobsResponse, AWSError> {
        this.boot();
        return this.client.batchGetJobs(
          this.ops["BatchGetJobs"].apply(partialParams)
        );
    }

    invokeBatchGetPartition(partialParams: ToOptional<{
      [K in keyof BatchGetPartitionRequest]: (BatchGetPartitionRequest)[K]
    }>): Request<BatchGetPartitionResponse, AWSError> {
        this.boot();
        return this.client.batchGetPartition(
          this.ops["BatchGetPartition"].apply(partialParams)
        );
    }

    invokeBatchGetTriggers(partialParams: ToOptional<{
      [K in keyof BatchGetTriggersRequest]: (BatchGetTriggersRequest)[K]
    }>): Request<BatchGetTriggersResponse, AWSError> {
        this.boot();
        return this.client.batchGetTriggers(
          this.ops["BatchGetTriggers"].apply(partialParams)
        );
    }

    invokeBatchGetWorkflows(partialParams: ToOptional<{
      [K in keyof BatchGetWorkflowsRequest]: (BatchGetWorkflowsRequest)[K]
    }>): Request<BatchGetWorkflowsResponse, AWSError> {
        this.boot();
        return this.client.batchGetWorkflows(
          this.ops["BatchGetWorkflows"].apply(partialParams)
        );
    }

    invokeBatchStopJobRun(partialParams: ToOptional<{
      [K in keyof BatchStopJobRunRequest]: (BatchStopJobRunRequest)[K]
    }>): Request<BatchStopJobRunResponse, AWSError> {
        this.boot();
        return this.client.batchStopJobRun(
          this.ops["BatchStopJobRun"].apply(partialParams)
        );
    }

    invokeBatchUpdatePartition(partialParams: ToOptional<{
      [K in keyof BatchUpdatePartitionRequest]: (BatchUpdatePartitionRequest)[K]
    }>): Request<BatchUpdatePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchUpdatePartition(
          this.ops["BatchUpdatePartition"].apply(partialParams)
        );
    }

    invokeCancelMLTaskRun(partialParams: ToOptional<{
      [K in keyof CancelMLTaskRunRequest]: (CancelMLTaskRunRequest)[K]
    }>): Request<CancelMLTaskRunResponse, AWSError> {
        this.boot();
        return this.client.cancelMLTaskRun(
          this.ops["CancelMLTaskRun"].apply(partialParams)
        );
    }

    invokeCheckSchemaVersionValidity(partialParams: ToOptional<{
      [K in keyof CheckSchemaVersionValidityInput]: (CheckSchemaVersionValidityInput)[K]
    }>): Request<CheckSchemaVersionValidityResponse, AWSError> {
        this.boot();
        return this.client.checkSchemaVersionValidity(
          this.ops["CheckSchemaVersionValidity"].apply(partialParams)
        );
    }

    invokeCreateBlueprint(partialParams: ToOptional<{
      [K in keyof CreateBlueprintRequest & keyof Omit<CreateBlueprintRequest, "Name">]: (CreateBlueprintRequest)[K]
    }>): Request<CreateBlueprintResponse, AWSError> {
        this.boot();
        return this.client.createBlueprint(
          this.ops["CreateBlueprint"].apply(partialParams)
        );
    }

    invokeCreateClassifier(partialParams: ToOptional<{
      [K in keyof CreateClassifierRequest]: (CreateClassifierRequest)[K]
    }>): Request<CreateClassifierResponse, AWSError> {
        this.boot();
        return this.client.createClassifier(
          this.ops["CreateClassifier"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest]: (CreateConnectionRequest)[K]
    }>): Request<CreateConnectionResponse, AWSError> {
        this.boot();
        return this.client.createConnection(
          this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateCrawler(partialParams: ToOptional<{
      [K in keyof CreateCrawlerRequest & keyof Omit<CreateCrawlerRequest, "Name">]: (CreateCrawlerRequest)[K]
    }>): Request<CreateCrawlerResponse, AWSError> {
        this.boot();
        return this.client.createCrawler(
          this.ops["CreateCrawler"].apply(partialParams)
        );
    }

    invokeCreateDatabase(partialParams: ToOptional<{
      [K in keyof CreateDatabaseRequest]: (CreateDatabaseRequest)[K]
    }>): Request<CreateDatabaseResponse, AWSError> {
        this.boot();
        return this.client.createDatabase(
          this.ops["CreateDatabase"].apply(partialParams)
        );
    }

    invokeCreateDevEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDevEndpointRequest]: (CreateDevEndpointRequest)[K]
    }>): Request<CreateDevEndpointResponse, AWSError> {
        this.boot();
        return this.client.createDevEndpoint(
          this.ops["CreateDevEndpoint"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof Omit<CreateJobRequest, "Name">]: (CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateMLTransform(partialParams: ToOptional<{
      [K in keyof CreateMLTransformRequest & keyof Omit<CreateMLTransformRequest, "Name">]: (CreateMLTransformRequest)[K]
    }>): Request<CreateMLTransformResponse, AWSError> {
        this.boot();
        return this.client.createMLTransform(
          this.ops["CreateMLTransform"].apply(partialParams)
        );
    }

    invokeCreatePartition(partialParams: ToOptional<{
      [K in keyof CreatePartitionRequest]: (CreatePartitionRequest)[K]
    }>): Request<CreatePartitionResponse, AWSError> {
        this.boot();
        return this.client.createPartition(
          this.ops["CreatePartition"].apply(partialParams)
        );
    }

    invokeCreatePartitionIndex(partialParams: ToOptional<{
      [K in keyof CreatePartitionIndexRequest]: (CreatePartitionIndexRequest)[K]
    }>): Request<CreatePartitionIndexResponse, AWSError> {
        this.boot();
        return this.client.createPartitionIndex(
          this.ops["CreatePartitionIndex"].apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryInput]: (CreateRegistryInput)[K]
    }>): Request<CreateRegistryResponse, AWSError> {
        this.boot();
        return this.client.createRegistry(
          this.ops["CreateRegistry"].apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaInput]: (CreateSchemaInput)[K]
    }>): Request<CreateSchemaResponse, AWSError> {
        this.boot();
        return this.client.createSchema(
          this.ops["CreateSchema"].apply(partialParams)
        );
    }

    invokeCreateScript(partialParams: ToOptional<{
      [K in keyof CreateScriptRequest]: (CreateScriptRequest)[K]
    }>): Request<CreateScriptResponse, AWSError> {
        this.boot();
        return this.client.createScript(
          this.ops["CreateScript"].apply(partialParams)
        );
    }

    invokeCreateSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof CreateSecurityConfigurationRequest & keyof Omit<CreateSecurityConfigurationRequest, "Name">]: (CreateSecurityConfigurationRequest)[K]
    }>): Request<CreateSecurityConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createSecurityConfiguration(
          this.ops["CreateSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableRequest]: (CreateTableRequest)[K]
    }>): Request<CreateTableResponse, AWSError> {
        this.boot();
        return this.client.createTable(
          this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeCreateTrigger(partialParams: ToOptional<{
      [K in keyof CreateTriggerRequest & keyof Omit<CreateTriggerRequest, "Name">]: (CreateTriggerRequest)[K]
    }>): Request<CreateTriggerResponse, AWSError> {
        this.boot();
        return this.client.createTrigger(
          this.ops["CreateTrigger"].apply(partialParams)
        );
    }

    invokeCreateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof CreateUserDefinedFunctionRequest]: (CreateUserDefinedFunctionRequest)[K]
    }>): Request<CreateUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.createUserDefinedFunction(
          this.ops["CreateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest & keyof Omit<CreateWorkflowRequest, "Name">]: (CreateWorkflowRequest)[K]
    }>): Request<CreateWorkflowResponse, AWSError> {
        this.boot();
        return this.client.createWorkflow(
          this.ops["CreateWorkflow"].apply(partialParams)
        );
    }

    invokeDeleteBlueprint(partialParams: ToOptional<{
      [K in keyof DeleteBlueprintRequest & keyof Omit<DeleteBlueprintRequest, "Name">]: (DeleteBlueprintRequest)[K]
    }>): Request<DeleteBlueprintResponse, AWSError> {
        this.boot();
        return this.client.deleteBlueprint(
          this.ops["DeleteBlueprint"].apply(partialParams)
        );
    }

    invokeDeleteClassifier(partialParams: ToOptional<{
      [K in keyof DeleteClassifierRequest & keyof Omit<DeleteClassifierRequest, "Name">]: (DeleteClassifierRequest)[K]
    }>): Request<DeleteClassifierResponse, AWSError> {
        this.boot();
        return this.client.deleteClassifier(
          this.ops["DeleteClassifier"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForPartitionRequest]: (DeleteColumnStatisticsForPartitionRequest)[K]
    }>): Request<DeleteColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(
          this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForTableRequest]: (DeleteColumnStatisticsForTableRequest)[K]
    }>): Request<DeleteColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.deleteColumnStatisticsForTable(
          this.ops["DeleteColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest]: (DeleteConnectionRequest)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteCrawler(partialParams: ToOptional<{
      [K in keyof DeleteCrawlerRequest & keyof Omit<DeleteCrawlerRequest, "Name">]: (DeleteCrawlerRequest)[K]
    }>): Request<DeleteCrawlerResponse, AWSError> {
        this.boot();
        return this.client.deleteCrawler(
          this.ops["DeleteCrawler"].apply(partialParams)
        );
    }

    invokeDeleteDatabase(partialParams: ToOptional<{
      [K in keyof DeleteDatabaseRequest & keyof Omit<DeleteDatabaseRequest, "Name">]: (DeleteDatabaseRequest)[K]
    }>): Request<DeleteDatabaseResponse, AWSError> {
        this.boot();
        return this.client.deleteDatabase(
          this.ops["DeleteDatabase"].apply(partialParams)
        );
    }

    invokeDeleteDevEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDevEndpointRequest]: (DeleteDevEndpointRequest)[K]
    }>): Request<DeleteDevEndpointResponse, AWSError> {
        this.boot();
        return this.client.deleteDevEndpoint(
          this.ops["DeleteDevEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest]: (DeleteJobRequest)[K]
    }>): Request<DeleteJobResponse, AWSError> {
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].apply(partialParams)
        );
    }

    invokeDeleteMLTransform(partialParams: ToOptional<{
      [K in keyof DeleteMLTransformRequest]: (DeleteMLTransformRequest)[K]
    }>): Request<DeleteMLTransformResponse, AWSError> {
        this.boot();
        return this.client.deleteMLTransform(
          this.ops["DeleteMLTransform"].apply(partialParams)
        );
    }

    invokeDeletePartition(partialParams: ToOptional<{
      [K in keyof DeletePartitionRequest]: (DeletePartitionRequest)[K]
    }>): Request<DeletePartitionResponse, AWSError> {
        this.boot();
        return this.client.deletePartition(
          this.ops["DeletePartition"].apply(partialParams)
        );
    }

    invokeDeletePartitionIndex(partialParams: ToOptional<{
      [K in keyof DeletePartitionIndexRequest]: (DeletePartitionIndexRequest)[K]
    }>): Request<DeletePartitionIndexResponse, AWSError> {
        this.boot();
        return this.client.deletePartitionIndex(
          this.ops["DeletePartitionIndex"].apply(partialParams)
        );
    }

    invokeDeleteRegistry(partialParams: ToOptional<{
      [K in keyof DeleteRegistryInput]: (DeleteRegistryInput)[K]
    }>): Request<DeleteRegistryResponse, AWSError> {
        this.boot();
        return this.client.deleteRegistry(
          this.ops["DeleteRegistry"].apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyRequest]: (DeleteResourcePolicyRequest)[K]
    }>): Request<DeleteResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteResourcePolicy(
          this.ops["DeleteResourcePolicy"].apply(partialParams)
        );
    }

    invokeDeleteSchema(partialParams: ToOptional<{
      [K in keyof DeleteSchemaInput]: (DeleteSchemaInput)[K]
    }>): Request<DeleteSchemaResponse, AWSError> {
        this.boot();
        return this.client.deleteSchema(
          this.ops["DeleteSchema"].apply(partialParams)
        );
    }

    invokeDeleteSchemaVersions(partialParams: ToOptional<{
      [K in keyof DeleteSchemaVersionsInput]: (DeleteSchemaVersionsInput)[K]
    }>): Request<DeleteSchemaVersionsResponse, AWSError> {
        this.boot();
        return this.client.deleteSchemaVersions(
          this.ops["DeleteSchemaVersions"].apply(partialParams)
        );
    }

    invokeDeleteSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteSecurityConfigurationRequest & keyof Omit<DeleteSecurityConfigurationRequest, "Name">]: (DeleteSecurityConfigurationRequest)[K]
    }>): Request<DeleteSecurityConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteSecurityConfiguration(
          this.ops["DeleteSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableRequest & keyof Omit<DeleteTableRequest, "Name">]: (DeleteTableRequest)[K]
    }>): Request<DeleteTableResponse, AWSError> {
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof DeleteTableVersionRequest]: (DeleteTableVersionRequest)[K]
    }>): Request<DeleteTableVersionResponse, AWSError> {
        this.boot();
        return this.client.deleteTableVersion(
          this.ops["DeleteTableVersion"].apply(partialParams)
        );
    }

    invokeDeleteTrigger(partialParams: ToOptional<{
      [K in keyof DeleteTriggerRequest & keyof Omit<DeleteTriggerRequest, "Name">]: (DeleteTriggerRequest)[K]
    }>): Request<DeleteTriggerResponse, AWSError> {
        this.boot();
        return this.client.deleteTrigger(
          this.ops["DeleteTrigger"].apply(partialParams)
        );
    }

    invokeDeleteUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof DeleteUserDefinedFunctionRequest]: (DeleteUserDefinedFunctionRequest)[K]
    }>): Request<DeleteUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.deleteUserDefinedFunction(
          this.ops["DeleteUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeDeleteWorkflow(partialParams: ToOptional<{
      [K in keyof DeleteWorkflowRequest & keyof Omit<DeleteWorkflowRequest, "Name">]: (DeleteWorkflowRequest)[K]
    }>): Request<DeleteWorkflowResponse, AWSError> {
        this.boot();
        return this.client.deleteWorkflow(
          this.ops["DeleteWorkflow"].apply(partialParams)
        );
    }

    invokeGetBlueprint(partialParams: ToOptional<{
      [K in keyof GetBlueprintRequest & keyof Omit<GetBlueprintRequest, "Name">]: (GetBlueprintRequest)[K]
    }>): Request<GetBlueprintResponse, AWSError> {
        this.boot();
        return this.client.getBlueprint(
          this.ops["GetBlueprint"].apply(partialParams)
        );
    }

    invokeGetBlueprintRun(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunRequest]: (GetBlueprintRunRequest)[K]
    }>): Request<GetBlueprintRunResponse, AWSError> {
        this.boot();
        return this.client.getBlueprintRun(
          this.ops["GetBlueprintRun"].apply(partialParams)
        );
    }

    invokeGetBlueprintRuns(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunsRequest]: (GetBlueprintRunsRequest)[K]
    }>): Request<GetBlueprintRunsResponse, AWSError> {
        this.boot();
        return this.client.getBlueprintRuns(
          this.ops["GetBlueprintRuns"].apply(partialParams)
        );
    }

    invokeGetCatalogImportStatus(partialParams: ToOptional<{
      [K in keyof GetCatalogImportStatusRequest]: (GetCatalogImportStatusRequest)[K]
    }>): Request<GetCatalogImportStatusResponse, AWSError> {
        this.boot();
        return this.client.getCatalogImportStatus(
          this.ops["GetCatalogImportStatus"].apply(partialParams)
        );
    }

    invokeGetClassifier(partialParams: ToOptional<{
      [K in keyof GetClassifierRequest & keyof Omit<GetClassifierRequest, "Name">]: (GetClassifierRequest)[K]
    }>): Request<GetClassifierResponse, AWSError> {
        this.boot();
        return this.client.getClassifier(
          this.ops["GetClassifier"].apply(partialParams)
        );
    }

    invokeGetClassifiers(partialParams: ToOptional<{
      [K in keyof GetClassifiersRequest]: (GetClassifiersRequest)[K]
    }>): Request<GetClassifiersResponse, AWSError> {
        this.boot();
        return this.client.getClassifiers(
          this.ops["GetClassifiers"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForPartitionRequest]: (GetColumnStatisticsForPartitionRequest)[K]
    }>): Request<GetColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.getColumnStatisticsForPartition(
          this.ops["GetColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForTableRequest]: (GetColumnStatisticsForTableRequest)[K]
    }>): Request<GetColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.getColumnStatisticsForTable(
          this.ops["GetColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeGetConnection(partialParams: ToOptional<{
      [K in keyof GetConnectionRequest & keyof Omit<GetConnectionRequest, "Name">]: (GetConnectionRequest)[K]
    }>): Request<GetConnectionResponse, AWSError> {
        this.boot();
        return this.client.getConnection(
          this.ops["GetConnection"].apply(partialParams)
        );
    }

    invokeGetConnections(partialParams: ToOptional<{
      [K in keyof GetConnectionsRequest]: (GetConnectionsRequest)[K]
    }>): Request<GetConnectionsResponse, AWSError> {
        this.boot();
        return this.client.getConnections(
          this.ops["GetConnections"].apply(partialParams)
        );
    }

    invokeGetCrawler(partialParams: ToOptional<{
      [K in keyof GetCrawlerRequest & keyof Omit<GetCrawlerRequest, "Name">]: (GetCrawlerRequest)[K]
    }>): Request<GetCrawlerResponse, AWSError> {
        this.boot();
        return this.client.getCrawler(
          this.ops["GetCrawler"].apply(partialParams)
        );
    }

    invokeGetCrawlerMetrics(partialParams: ToOptional<{
      [K in keyof GetCrawlerMetricsRequest]: (GetCrawlerMetricsRequest)[K]
    }>): Request<GetCrawlerMetricsResponse, AWSError> {
        this.boot();
        return this.client.getCrawlerMetrics(
          this.ops["GetCrawlerMetrics"].apply(partialParams)
        );
    }

    invokeGetCrawlers(partialParams: ToOptional<{
      [K in keyof GetCrawlersRequest]: (GetCrawlersRequest)[K]
    }>): Request<GetCrawlersResponse, AWSError> {
        this.boot();
        return this.client.getCrawlers(
          this.ops["GetCrawlers"].apply(partialParams)
        );
    }

    invokeGetDataCatalogEncryptionSettings(partialParams: ToOptional<{
      [K in keyof GetDataCatalogEncryptionSettingsRequest]: (GetDataCatalogEncryptionSettingsRequest)[K]
    }>): Request<GetDataCatalogEncryptionSettingsResponse, AWSError> {
        this.boot();
        return this.client.getDataCatalogEncryptionSettings(
          this.ops["GetDataCatalogEncryptionSettings"].apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseRequest & keyof Omit<GetDatabaseRequest, "Name">]: (GetDatabaseRequest)[K]
    }>): Request<GetDatabaseResponse, AWSError> {
        this.boot();
        return this.client.getDatabase(
          this.ops["GetDatabase"].apply(partialParams)
        );
    }

    invokeGetDatabases(partialParams: ToOptional<{
      [K in keyof GetDatabasesRequest]: (GetDatabasesRequest)[K]
    }>): Request<GetDatabasesResponse, AWSError> {
        this.boot();
        return this.client.getDatabases(
          this.ops["GetDatabases"].apply(partialParams)
        );
    }

    invokeGetDataflowGraph(partialParams: ToOptional<{
      [K in keyof GetDataflowGraphRequest]: (GetDataflowGraphRequest)[K]
    }>): Request<GetDataflowGraphResponse, AWSError> {
        this.boot();
        return this.client.getDataflowGraph(
          this.ops["GetDataflowGraph"].apply(partialParams)
        );
    }

    invokeGetDevEndpoint(partialParams: ToOptional<{
      [K in keyof GetDevEndpointRequest]: (GetDevEndpointRequest)[K]
    }>): Request<GetDevEndpointResponse, AWSError> {
        this.boot();
        return this.client.getDevEndpoint(
          this.ops["GetDevEndpoint"].apply(partialParams)
        );
    }

    invokeGetDevEndpoints(partialParams: ToOptional<{
      [K in keyof GetDevEndpointsRequest]: (GetDevEndpointsRequest)[K]
    }>): Request<GetDevEndpointsResponse, AWSError> {
        this.boot();
        return this.client.getDevEndpoints(
          this.ops["GetDevEndpoints"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest]: (GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetJobBookmark(partialParams: ToOptional<{
      [K in keyof GetJobBookmarkRequest]: (GetJobBookmarkRequest)[K]
    }>): Request<GetJobBookmarkResponse, AWSError> {
        this.boot();
        return this.client.getJobBookmark(
          this.ops["GetJobBookmark"].apply(partialParams)
        );
    }

    invokeGetJobRun(partialParams: ToOptional<{
      [K in keyof GetJobRunRequest]: (GetJobRunRequest)[K]
    }>): Request<GetJobRunResponse, AWSError> {
        this.boot();
        return this.client.getJobRun(
          this.ops["GetJobRun"].apply(partialParams)
        );
    }

    invokeGetJobRuns(partialParams: ToOptional<{
      [K in keyof GetJobRunsRequest]: (GetJobRunsRequest)[K]
    }>): Request<GetJobRunsResponse, AWSError> {
        this.boot();
        return this.client.getJobRuns(
          this.ops["GetJobRuns"].apply(partialParams)
        );
    }

    invokeGetJobs(partialParams: ToOptional<{
      [K in keyof GetJobsRequest]: (GetJobsRequest)[K]
    }>): Request<GetJobsResponse, AWSError> {
        this.boot();
        return this.client.getJobs(
          this.ops["GetJobs"].apply(partialParams)
        );
    }

    invokeGetMLTaskRun(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunRequest]: (GetMLTaskRunRequest)[K]
    }>): Request<GetMLTaskRunResponse, AWSError> {
        this.boot();
        return this.client.getMLTaskRun(
          this.ops["GetMLTaskRun"].apply(partialParams)
        );
    }

    invokeGetMLTaskRuns(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunsRequest]: (GetMLTaskRunsRequest)[K]
    }>): Request<GetMLTaskRunsResponse, AWSError> {
        this.boot();
        return this.client.getMLTaskRuns(
          this.ops["GetMLTaskRuns"].apply(partialParams)
        );
    }

    invokeGetMLTransform(partialParams: ToOptional<{
      [K in keyof GetMLTransformRequest]: (GetMLTransformRequest)[K]
    }>): Request<GetMLTransformResponse, AWSError> {
        this.boot();
        return this.client.getMLTransform(
          this.ops["GetMLTransform"].apply(partialParams)
        );
    }

    invokeGetMLTransforms(partialParams: ToOptional<{
      [K in keyof GetMLTransformsRequest]: (GetMLTransformsRequest)[K]
    }>): Request<GetMLTransformsResponse, AWSError> {
        this.boot();
        return this.client.getMLTransforms(
          this.ops["GetMLTransforms"].apply(partialParams)
        );
    }

    invokeGetMapping(partialParams: ToOptional<{
      [K in keyof GetMappingRequest]: (GetMappingRequest)[K]
    }>): Request<GetMappingResponse, AWSError> {
        this.boot();
        return this.client.getMapping(
          this.ops["GetMapping"].apply(partialParams)
        );
    }

    invokeGetPartition(partialParams: ToOptional<{
      [K in keyof GetPartitionRequest]: (GetPartitionRequest)[K]
    }>): Request<GetPartitionResponse, AWSError> {
        this.boot();
        return this.client.getPartition(
          this.ops["GetPartition"].apply(partialParams)
        );
    }

    invokeGetPartitionIndexes(partialParams: ToOptional<{
      [K in keyof GetPartitionIndexesRequest]: (GetPartitionIndexesRequest)[K]
    }>): Request<GetPartitionIndexesResponse, AWSError> {
        this.boot();
        return this.client.getPartitionIndexes(
          this.ops["GetPartitionIndexes"].apply(partialParams)
        );
    }

    invokeGetPartitions(partialParams: ToOptional<{
      [K in keyof GetPartitionsRequest]: (GetPartitionsRequest)[K]
    }>): Request<GetPartitionsResponse, AWSError> {
        this.boot();
        return this.client.getPartitions(
          this.ops["GetPartitions"].apply(partialParams)
        );
    }

    invokeGetPlan(partialParams: ToOptional<{
      [K in keyof GetPlanRequest]: (GetPlanRequest)[K]
    }>): Request<GetPlanResponse, AWSError> {
        this.boot();
        return this.client.getPlan(
          this.ops["GetPlan"].apply(partialParams)
        );
    }

    invokeGetRegistry(partialParams: ToOptional<{
      [K in keyof GetRegistryInput]: (GetRegistryInput)[K]
    }>): Request<GetRegistryResponse, AWSError> {
        this.boot();
        return this.client.getRegistry(
          this.ops["GetRegistry"].apply(partialParams)
        );
    }

    invokeGetResourcePolicies(partialParams: ToOptional<{
      [K in keyof GetResourcePoliciesRequest]: (GetResourcePoliciesRequest)[K]
    }>): Request<GetResourcePoliciesResponse, AWSError> {
        this.boot();
        return this.client.getResourcePolicies(
          this.ops["GetResourcePolicies"].apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyRequest]: (GetResourcePolicyRequest)[K]
    }>): Request<GetResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.getResourcePolicy(
          this.ops["GetResourcePolicy"].apply(partialParams)
        );
    }

    invokeGetSchema(partialParams: ToOptional<{
      [K in keyof GetSchemaInput]: (GetSchemaInput)[K]
    }>): Request<GetSchemaResponse, AWSError> {
        this.boot();
        return this.client.getSchema(
          this.ops["GetSchema"].apply(partialParams)
        );
    }

    invokeGetSchemaByDefinition(partialParams: ToOptional<{
      [K in keyof GetSchemaByDefinitionInput]: (GetSchemaByDefinitionInput)[K]
    }>): Request<GetSchemaByDefinitionResponse, AWSError> {
        this.boot();
        return this.client.getSchemaByDefinition(
          this.ops["GetSchemaByDefinition"].apply(partialParams)
        );
    }

    invokeGetSchemaVersion(partialParams: ToOptional<{
      [K in keyof GetSchemaVersionInput]: (GetSchemaVersionInput)[K]
    }>): Request<GetSchemaVersionResponse, AWSError> {
        this.boot();
        return this.client.getSchemaVersion(
          this.ops["GetSchemaVersion"].apply(partialParams)
        );
    }

    invokeGetSchemaVersionsDiff(partialParams: ToOptional<{
      [K in keyof GetSchemaVersionsDiffInput]: (GetSchemaVersionsDiffInput)[K]
    }>): Request<GetSchemaVersionsDiffResponse, AWSError> {
        this.boot();
        return this.client.getSchemaVersionsDiff(
          this.ops["GetSchemaVersionsDiff"].apply(partialParams)
        );
    }

    invokeGetSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof GetSecurityConfigurationRequest & keyof Omit<GetSecurityConfigurationRequest, "Name">]: (GetSecurityConfigurationRequest)[K]
    }>): Request<GetSecurityConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getSecurityConfiguration(
          this.ops["GetSecurityConfiguration"].apply(partialParams)
        );
    }

    invokeGetSecurityConfigurations(partialParams: ToOptional<{
      [K in keyof GetSecurityConfigurationsRequest]: (GetSecurityConfigurationsRequest)[K]
    }>): Request<GetSecurityConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.getSecurityConfigurations(
          this.ops["GetSecurityConfigurations"].apply(partialParams)
        );
    }

    invokeGetTable(partialParams: ToOptional<{
      [K in keyof GetTableRequest & keyof Omit<GetTableRequest, "Name">]: (GetTableRequest)[K]
    }>): Request<GetTableResponse, AWSError> {
        this.boot();
        return this.client.getTable(
          this.ops["GetTable"].apply(partialParams)
        );
    }

    invokeGetTableVersion(partialParams: ToOptional<{
      [K in keyof GetTableVersionRequest]: (GetTableVersionRequest)[K]
    }>): Request<GetTableVersionResponse, AWSError> {
        this.boot();
        return this.client.getTableVersion(
          this.ops["GetTableVersion"].apply(partialParams)
        );
    }

    invokeGetTableVersions(partialParams: ToOptional<{
      [K in keyof GetTableVersionsRequest]: (GetTableVersionsRequest)[K]
    }>): Request<GetTableVersionsResponse, AWSError> {
        this.boot();
        return this.client.getTableVersions(
          this.ops["GetTableVersions"].apply(partialParams)
        );
    }

    invokeGetTables(partialParams: ToOptional<{
      [K in keyof GetTablesRequest]: (GetTablesRequest)[K]
    }>): Request<GetTablesResponse, AWSError> {
        this.boot();
        return this.client.getTables(
          this.ops["GetTables"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest]: (GetTagsRequest)[K]
    }>): Request<GetTagsResponse, AWSError> {
        this.boot();
        return this.client.getTags(
          this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetTrigger(partialParams: ToOptional<{
      [K in keyof GetTriggerRequest & keyof Omit<GetTriggerRequest, "Name">]: (GetTriggerRequest)[K]
    }>): Request<GetTriggerResponse, AWSError> {
        this.boot();
        return this.client.getTrigger(
          this.ops["GetTrigger"].apply(partialParams)
        );
    }

    invokeGetTriggers(partialParams: ToOptional<{
      [K in keyof GetTriggersRequest]: (GetTriggersRequest)[K]
    }>): Request<GetTriggersResponse, AWSError> {
        this.boot();
        return this.client.getTriggers(
          this.ops["GetTriggers"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionMetadataRequest & keyof Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId">]: (GetUnfilteredPartitionMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(
          this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionsMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionsMetadataRequest & keyof Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId">]: (GetUnfilteredPartitionsMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionsMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(
          this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredTableMetadataRequest & keyof Omit<GetUnfilteredTableMetadataRequest, "CatalogId" | "Name">]: (GetUnfilteredTableMetadataRequest)[K]
    }>): Request<GetUnfilteredTableMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredTableMetadata(
          this.ops["GetUnfilteredTableMetadata"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionRequest]: (GetUserDefinedFunctionRequest)[K]
    }>): Request<GetUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.getUserDefinedFunction(
          this.ops["GetUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunctions(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionsRequest]: (GetUserDefinedFunctionsRequest)[K]
    }>): Request<GetUserDefinedFunctionsResponse, AWSError> {
        this.boot();
        return this.client.getUserDefinedFunctions(
          this.ops["GetUserDefinedFunctions"].apply(partialParams)
        );
    }

    invokeGetWorkflow(partialParams: ToOptional<{
      [K in keyof GetWorkflowRequest & keyof Omit<GetWorkflowRequest, "Name">]: (GetWorkflowRequest)[K]
    }>): Request<GetWorkflowResponse, AWSError> {
        this.boot();
        return this.client.getWorkflow(
          this.ops["GetWorkflow"].apply(partialParams)
        );
    }

    invokeGetWorkflowRun(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunRequest & keyof Omit<GetWorkflowRunRequest, "Name">]: (GetWorkflowRunRequest)[K]
    }>): Request<GetWorkflowRunResponse, AWSError> {
        this.boot();
        return this.client.getWorkflowRun(
          this.ops["GetWorkflowRun"].apply(partialParams)
        );
    }

    invokeGetWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunPropertiesRequest & keyof Omit<GetWorkflowRunPropertiesRequest, "Name">]: (GetWorkflowRunPropertiesRequest)[K]
    }>): Request<GetWorkflowRunPropertiesResponse, AWSError> {
        this.boot();
        return this.client.getWorkflowRunProperties(
          this.ops["GetWorkflowRunProperties"].apply(partialParams)
        );
    }

    invokeGetWorkflowRuns(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunsRequest & keyof Omit<GetWorkflowRunsRequest, "Name">]: (GetWorkflowRunsRequest)[K]
    }>): Request<GetWorkflowRunsResponse, AWSError> {
        this.boot();
        return this.client.getWorkflowRuns(
          this.ops["GetWorkflowRuns"].apply(partialParams)
        );
    }

    invokeImportCatalogToGlue(partialParams: ToOptional<{
      [K in keyof ImportCatalogToGlueRequest]: (ImportCatalogToGlueRequest)[K]
    }>): Request<ImportCatalogToGlueResponse, AWSError> {
        this.boot();
        return this.client.importCatalogToGlue(
          this.ops["ImportCatalogToGlue"].apply(partialParams)
        );
    }

    invokeListBlueprints(partialParams: ToOptional<{
      [K in keyof ListBlueprintsRequest]: (ListBlueprintsRequest)[K]
    }>): Request<ListBlueprintsResponse, AWSError> {
        this.boot();
        return this.client.listBlueprints(
          this.ops["ListBlueprints"].apply(partialParams)
        );
    }

    invokeListCrawlers(partialParams: ToOptional<{
      [K in keyof ListCrawlersRequest]: (ListCrawlersRequest)[K]
    }>): Request<ListCrawlersResponse, AWSError> {
        this.boot();
        return this.client.listCrawlers(
          this.ops["ListCrawlers"].apply(partialParams)
        );
    }

    invokeListDevEndpoints(partialParams: ToOptional<{
      [K in keyof ListDevEndpointsRequest]: (ListDevEndpointsRequest)[K]
    }>): Request<ListDevEndpointsResponse, AWSError> {
        this.boot();
        return this.client.listDevEndpoints(
          this.ops["ListDevEndpoints"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest]: (ListJobsRequest)[K]
    }>): Request<ListJobsResponse, AWSError> {
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListMLTransforms(partialParams: ToOptional<{
      [K in keyof ListMLTransformsRequest]: (ListMLTransformsRequest)[K]
    }>): Request<ListMLTransformsResponse, AWSError> {
        this.boot();
        return this.client.listMLTransforms(
          this.ops["ListMLTransforms"].apply(partialParams)
        );
    }

    invokeListRegistries(partialParams: ToOptional<{
      [K in keyof ListRegistriesInput]: (ListRegistriesInput)[K]
    }>): Request<ListRegistriesResponse, AWSError> {
        this.boot();
        return this.client.listRegistries(
          this.ops["ListRegistries"].apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsInput]: (ListSchemaVersionsInput)[K]
    }>): Request<ListSchemaVersionsResponse, AWSError> {
        this.boot();
        return this.client.listSchemaVersions(
          this.ops["ListSchemaVersions"].apply(partialParams)
        );
    }

    invokeListSchemas(partialParams: ToOptional<{
      [K in keyof ListSchemasInput]: (ListSchemasInput)[K]
    }>): Request<ListSchemasResponse, AWSError> {
        this.boot();
        return this.client.listSchemas(
          this.ops["ListSchemas"].apply(partialParams)
        );
    }

    invokeListTriggers(partialParams: ToOptional<{
      [K in keyof ListTriggersRequest]: (ListTriggersRequest)[K]
    }>): Request<ListTriggersResponse, AWSError> {
        this.boot();
        return this.client.listTriggers(
          this.ops["ListTriggers"].apply(partialParams)
        );
    }

    invokeListWorkflows(partialParams: ToOptional<{
      [K in keyof ListWorkflowsRequest]: (ListWorkflowsRequest)[K]
    }>): Request<ListWorkflowsResponse, AWSError> {
        this.boot();
        return this.client.listWorkflows(
          this.ops["ListWorkflows"].apply(partialParams)
        );
    }

    invokePutDataCatalogEncryptionSettings(partialParams: ToOptional<{
      [K in keyof PutDataCatalogEncryptionSettingsRequest]: (PutDataCatalogEncryptionSettingsRequest)[K]
    }>): Request<PutDataCatalogEncryptionSettingsResponse, AWSError> {
        this.boot();
        return this.client.putDataCatalogEncryptionSettings(
          this.ops["PutDataCatalogEncryptionSettings"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest)[K]
    }>): Request<PutResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokePutSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof PutSchemaVersionMetadataInput]: (PutSchemaVersionMetadataInput)[K]
    }>): Request<PutSchemaVersionMetadataResponse, AWSError> {
        this.boot();
        return this.client.putSchemaVersionMetadata(
          this.ops["PutSchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokePutWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof PutWorkflowRunPropertiesRequest & keyof Omit<PutWorkflowRunPropertiesRequest, "Name">]: (PutWorkflowRunPropertiesRequest)[K]
    }>): Request<PutWorkflowRunPropertiesResponse, AWSError> {
        this.boot();
        return this.client.putWorkflowRunProperties(
          this.ops["PutWorkflowRunProperties"].apply(partialParams)
        );
    }

    invokeQuerySchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof QuerySchemaVersionMetadataInput]: (QuerySchemaVersionMetadataInput)[K]
    }>): Request<QuerySchemaVersionMetadataResponse, AWSError> {
        this.boot();
        return this.client.querySchemaVersionMetadata(
          this.ops["QuerySchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokeRegisterSchemaVersion(partialParams: ToOptional<{
      [K in keyof RegisterSchemaVersionInput]: (RegisterSchemaVersionInput)[K]
    }>): Request<RegisterSchemaVersionResponse, AWSError> {
        this.boot();
        return this.client.registerSchemaVersion(
          this.ops["RegisterSchemaVersion"].apply(partialParams)
        );
    }

    invokeRemoveSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof RemoveSchemaVersionMetadataInput]: (RemoveSchemaVersionMetadataInput)[K]
    }>): Request<RemoveSchemaVersionMetadataResponse, AWSError> {
        this.boot();
        return this.client.removeSchemaVersionMetadata(
          this.ops["RemoveSchemaVersionMetadata"].apply(partialParams)
        );
    }

    invokeResetJobBookmark(partialParams: ToOptional<{
      [K in keyof ResetJobBookmarkRequest]: (ResetJobBookmarkRequest)[K]
    }>): Request<ResetJobBookmarkResponse, AWSError> {
        this.boot();
        return this.client.resetJobBookmark(
          this.ops["ResetJobBookmark"].apply(partialParams)
        );
    }

    invokeResumeWorkflowRun(partialParams: ToOptional<{
      [K in keyof ResumeWorkflowRunRequest & keyof Omit<ResumeWorkflowRunRequest, "Name">]: (ResumeWorkflowRunRequest)[K]
    }>): Request<ResumeWorkflowRunResponse, AWSError> {
        this.boot();
        return this.client.resumeWorkflowRun(
          this.ops["ResumeWorkflowRun"].apply(partialParams)
        );
    }

    invokeSearchTables(partialParams: ToOptional<{
      [K in keyof SearchTablesRequest]: (SearchTablesRequest)[K]
    }>): Request<SearchTablesResponse, AWSError> {
        this.boot();
        return this.client.searchTables(
          this.ops["SearchTables"].apply(partialParams)
        );
    }

    invokeStartBlueprintRun(partialParams: ToOptional<{
      [K in keyof StartBlueprintRunRequest]: (StartBlueprintRunRequest)[K]
    }>): Request<StartBlueprintRunResponse, AWSError> {
        this.boot();
        return this.client.startBlueprintRun(
          this.ops["StartBlueprintRun"].apply(partialParams)
        );
    }

    invokeStartCrawler(partialParams: ToOptional<{
      [K in keyof StartCrawlerRequest & keyof Omit<StartCrawlerRequest, "Name">]: (StartCrawlerRequest)[K]
    }>): Request<StartCrawlerResponse, AWSError> {
        this.boot();
        return this.client.startCrawler(
          this.ops["StartCrawler"].apply(partialParams)
        );
    }

    invokeStartCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StartCrawlerScheduleRequest]: (StartCrawlerScheduleRequest)[K]
    }>): Request<StartCrawlerScheduleResponse, AWSError> {
        this.boot();
        return this.client.startCrawlerSchedule(
          this.ops["StartCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeStartExportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartExportLabelsTaskRunRequest]: (StartExportLabelsTaskRunRequest)[K]
    }>): Request<StartExportLabelsTaskRunResponse, AWSError> {
        this.boot();
        return this.client.startExportLabelsTaskRun(
          this.ops["StartExportLabelsTaskRun"].apply(partialParams)
        );
    }

    invokeStartImportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartImportLabelsTaskRunRequest]: (StartImportLabelsTaskRunRequest)[K]
    }>): Request<StartImportLabelsTaskRunResponse, AWSError> {
        this.boot();
        return this.client.startImportLabelsTaskRun(
          this.ops["StartImportLabelsTaskRun"].apply(partialParams)
        );
    }

    invokeStartJobRun(partialParams: ToOptional<{
      [K in keyof StartJobRunRequest]: (StartJobRunRequest)[K]
    }>): Request<StartJobRunResponse, AWSError> {
        this.boot();
        return this.client.startJobRun(
          this.ops["StartJobRun"].apply(partialParams)
        );
    }

    invokeStartMLEvaluationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLEvaluationTaskRunRequest]: (StartMLEvaluationTaskRunRequest)[K]
    }>): Request<StartMLEvaluationTaskRunResponse, AWSError> {
        this.boot();
        return this.client.startMLEvaluationTaskRun(
          this.ops["StartMLEvaluationTaskRun"].apply(partialParams)
        );
    }

    invokeStartMLLabelingSetGenerationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLLabelingSetGenerationTaskRunRequest]: (StartMLLabelingSetGenerationTaskRunRequest)[K]
    }>): Request<StartMLLabelingSetGenerationTaskRunResponse, AWSError> {
        this.boot();
        return this.client.startMLLabelingSetGenerationTaskRun(
          this.ops["StartMLLabelingSetGenerationTaskRun"].apply(partialParams)
        );
    }

    invokeStartTrigger(partialParams: ToOptional<{
      [K in keyof StartTriggerRequest & keyof Omit<StartTriggerRequest, "Name">]: (StartTriggerRequest)[K]
    }>): Request<StartTriggerResponse, AWSError> {
        this.boot();
        return this.client.startTrigger(
          this.ops["StartTrigger"].apply(partialParams)
        );
    }

    invokeStartWorkflowRun(partialParams: ToOptional<{
      [K in keyof StartWorkflowRunRequest & keyof Omit<StartWorkflowRunRequest, "Name">]: (StartWorkflowRunRequest)[K]
    }>): Request<StartWorkflowRunResponse, AWSError> {
        this.boot();
        return this.client.startWorkflowRun(
          this.ops["StartWorkflowRun"].apply(partialParams)
        );
    }

    invokeStopCrawler(partialParams: ToOptional<{
      [K in keyof StopCrawlerRequest & keyof Omit<StopCrawlerRequest, "Name">]: (StopCrawlerRequest)[K]
    }>): Request<StopCrawlerResponse, AWSError> {
        this.boot();
        return this.client.stopCrawler(
          this.ops["StopCrawler"].apply(partialParams)
        );
    }

    invokeStopCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StopCrawlerScheduleRequest]: (StopCrawlerScheduleRequest)[K]
    }>): Request<StopCrawlerScheduleResponse, AWSError> {
        this.boot();
        return this.client.stopCrawlerSchedule(
          this.ops["StopCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeStopTrigger(partialParams: ToOptional<{
      [K in keyof StopTriggerRequest & keyof Omit<StopTriggerRequest, "Name">]: (StopTriggerRequest)[K]
    }>): Request<StopTriggerResponse, AWSError> {
        this.boot();
        return this.client.stopTrigger(
          this.ops["StopTrigger"].apply(partialParams)
        );
    }

    invokeStopWorkflowRun(partialParams: ToOptional<{
      [K in keyof StopWorkflowRunRequest & keyof Omit<StopWorkflowRunRequest, "Name">]: (StopWorkflowRunRequest)[K]
    }>): Request<StopWorkflowRunResponse, AWSError> {
        this.boot();
        return this.client.stopWorkflowRun(
          this.ops["StopWorkflowRun"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateBlueprint(partialParams: ToOptional<{
      [K in keyof UpdateBlueprintRequest & keyof Omit<UpdateBlueprintRequest, "Name">]: (UpdateBlueprintRequest)[K]
    }>): Request<UpdateBlueprintResponse, AWSError> {
        this.boot();
        return this.client.updateBlueprint(
          this.ops["UpdateBlueprint"].apply(partialParams)
        );
    }

    invokeUpdateClassifier(partialParams: ToOptional<{
      [K in keyof UpdateClassifierRequest]: (UpdateClassifierRequest)[K]
    }>): Request<UpdateClassifierResponse, AWSError> {
        this.boot();
        return this.client.updateClassifier(
          this.ops["UpdateClassifier"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForPartitionRequest]: (UpdateColumnStatisticsForPartitionRequest)[K]
    }>): Request<UpdateColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.updateColumnStatisticsForPartition(
          this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForTableRequest]: (UpdateColumnStatisticsForTableRequest)[K]
    }>): Request<UpdateColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.updateColumnStatisticsForTable(
          this.ops["UpdateColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof UpdateConnectionRequest & keyof Omit<UpdateConnectionRequest, "Name">]: (UpdateConnectionRequest)[K]
    }>): Request<UpdateConnectionResponse, AWSError> {
        this.boot();
        return this.client.updateConnection(
          this.ops["UpdateConnection"].apply(partialParams)
        );
    }

    invokeUpdateCrawler(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerRequest & keyof Omit<UpdateCrawlerRequest, "Name">]: (UpdateCrawlerRequest)[K]
    }>): Request<UpdateCrawlerResponse, AWSError> {
        this.boot();
        return this.client.updateCrawler(
          this.ops["UpdateCrawler"].apply(partialParams)
        );
    }

    invokeUpdateCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerScheduleRequest]: (UpdateCrawlerScheduleRequest)[K]
    }>): Request<UpdateCrawlerScheduleResponse, AWSError> {
        this.boot();
        return this.client.updateCrawlerSchedule(
          this.ops["UpdateCrawlerSchedule"].apply(partialParams)
        );
    }

    invokeUpdateDatabase(partialParams: ToOptional<{
      [K in keyof UpdateDatabaseRequest & keyof Omit<UpdateDatabaseRequest, "Name">]: (UpdateDatabaseRequest)[K]
    }>): Request<UpdateDatabaseResponse, AWSError> {
        this.boot();
        return this.client.updateDatabase(
          this.ops["UpdateDatabase"].apply(partialParams)
        );
    }

    invokeUpdateDevEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateDevEndpointRequest]: (UpdateDevEndpointRequest)[K]
    }>): Request<UpdateDevEndpointResponse, AWSError> {
        this.boot();
        return this.client.updateDevEndpoint(
          this.ops["UpdateDevEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest]: (UpdateJobRequest)[K]
    }>): Request<UpdateJobResponse, AWSError> {
        this.boot();
        return this.client.updateJob(
          this.ops["UpdateJob"].apply(partialParams)
        );
    }

    invokeUpdateMLTransform(partialParams: ToOptional<{
      [K in keyof UpdateMLTransformRequest]: (UpdateMLTransformRequest)[K]
    }>): Request<UpdateMLTransformResponse, AWSError> {
        this.boot();
        return this.client.updateMLTransform(
          this.ops["UpdateMLTransform"].apply(partialParams)
        );
    }

    invokeUpdatePartition(partialParams: ToOptional<{
      [K in keyof UpdatePartitionRequest]: (UpdatePartitionRequest)[K]
    }>): Request<UpdatePartitionResponse, AWSError> {
        this.boot();
        return this.client.updatePartition(
          this.ops["UpdatePartition"].apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryInput & keyof Omit<UpdateRegistryInput, "Description">]: (UpdateRegistryInput)[K]
    }>): Request<UpdateRegistryResponse, AWSError> {
        this.boot();
        return this.client.updateRegistry(
          this.ops["UpdateRegistry"].apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaInput]: (UpdateSchemaInput)[K]
    }>): Request<UpdateSchemaResponse, AWSError> {
        this.boot();
        return this.client.updateSchema(
          this.ops["UpdateSchema"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableRequest]: (UpdateTableRequest)[K]
    }>): Request<UpdateTableResponse, AWSError> {
        this.boot();
        return this.client.updateTable(
          this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateTrigger(partialParams: ToOptional<{
      [K in keyof UpdateTriggerRequest & keyof Omit<UpdateTriggerRequest, "Name">]: (UpdateTriggerRequest)[K]
    }>): Request<UpdateTriggerResponse, AWSError> {
        this.boot();
        return this.client.updateTrigger(
          this.ops["UpdateTrigger"].apply(partialParams)
        );
    }

    invokeUpdateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof UpdateUserDefinedFunctionRequest]: (UpdateUserDefinedFunctionRequest)[K]
    }>): Request<UpdateUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.updateUserDefinedFunction(
          this.ops["UpdateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeUpdateWorkflow(partialParams: ToOptional<{
      [K in keyof UpdateWorkflowRequest & keyof Omit<UpdateWorkflowRequest, "Name">]: (UpdateWorkflowRequest)[K]
    }>): Request<UpdateWorkflowResponse, AWSError> {
        this.boot();
        return this.client.updateWorkflow(
          this.ops["UpdateWorkflow"].apply(partialParams)
        );
    }
}