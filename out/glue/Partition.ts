
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
const schema = require("../apis/glue-2017-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glue.Partition {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.glue.Partition>) {
        super(...args)
        this.client = new awssdk.Glue()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeBatchCreatePartition(partialParams: ToOptional<{
      [K in keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest & keyof BatchCreatePartitionRequest]: (BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest & BatchCreatePartitionRequest)[K]
    }>): Request<BatchCreatePartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCreatePartition(
          this.ops["BatchCreatePartition"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeleteConnection(partialParams: ToOptional<{
      [K in keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest & keyof BatchDeleteConnectionRequest]: (BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest & BatchDeleteConnectionRequest)[K]
    }>): Request<BatchDeleteConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteConnection(
          this.ops["BatchDeleteConnection"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeletePartition(partialParams: ToOptional<{
      [K in keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest & keyof BatchDeletePartitionRequest]: (BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest & BatchDeletePartitionRequest)[K]
    }>): Request<BatchDeletePartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeletePartition(
          this.ops["BatchDeletePartition"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeleteTable(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest & keyof BatchDeleteTableRequest]: (BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest & BatchDeleteTableRequest)[K]
    }>): Request<BatchDeleteTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteTable(
          this.ops["BatchDeleteTable"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest & keyof BatchDeleteTableVersionRequest]: (BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest & BatchDeleteTableVersionRequest)[K]
    }>): Request<BatchDeleteTableVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteTableVersion(
          this.ops["BatchDeleteTableVersion"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetBlueprints(partialParams: ToOptional<{
      [K in keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest & keyof BatchGetBlueprintsRequest]: (BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest & BatchGetBlueprintsRequest)[K]
    }>): Request<BatchGetBlueprintsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetBlueprints(
          this.ops["BatchGetBlueprints"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetCrawlers(partialParams: ToOptional<{
      [K in keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest & keyof BatchGetCrawlersRequest]: (BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest & BatchGetCrawlersRequest)[K]
    }>): Request<BatchGetCrawlersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetCrawlers(
          this.ops["BatchGetCrawlers"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetDevEndpoints(partialParams: ToOptional<{
      [K in keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest & keyof BatchGetDevEndpointsRequest]: (BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest & BatchGetDevEndpointsRequest)[K]
    }>): Request<BatchGetDevEndpointsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDevEndpoints(
          this.ops["BatchGetDevEndpoints"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetJobs(partialParams: ToOptional<{
      [K in keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest & keyof BatchGetJobsRequest]: (BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest & BatchGetJobsRequest)[K]
    }>): Request<BatchGetJobsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetJobs(
          this.ops["BatchGetJobs"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetPartition(partialParams: ToOptional<{
      [K in keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest & keyof BatchGetPartitionRequest]: (BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest & BatchGetPartitionRequest)[K]
    }>): Request<BatchGetPartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetPartition(
          this.ops["BatchGetPartition"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetTriggers(partialParams: ToOptional<{
      [K in keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest & keyof BatchGetTriggersRequest]: (BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest & BatchGetTriggersRequest)[K]
    }>): Request<BatchGetTriggersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetTriggers(
          this.ops["BatchGetTriggers"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetWorkflows(partialParams: ToOptional<{
      [K in keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest & keyof BatchGetWorkflowsRequest]: (BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest & BatchGetWorkflowsRequest)[K]
    }>): Request<BatchGetWorkflowsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetWorkflows(
          this.ops["BatchGetWorkflows"].applicator.apply(partialParams)
        );
    }

    invokeBatchStopJobRun(partialParams: ToOptional<{
      [K in keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest & keyof BatchStopJobRunRequest]: (BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest & BatchStopJobRunRequest)[K]
    }>): Request<BatchStopJobRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchStopJobRun(
          this.ops["BatchStopJobRun"].applicator.apply(partialParams)
        );
    }

    invokeBatchUpdatePartition(partialParams: ToOptional<{
      [K in keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest & keyof BatchUpdatePartitionRequest]: (BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest & BatchUpdatePartitionRequest)[K]
    }>): Request<BatchUpdatePartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdatePartition(
          this.ops["BatchUpdatePartition"].applicator.apply(partialParams)
        );
    }

    invokeCancelMLTaskRun(partialParams: ToOptional<{
      [K in keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest & keyof CancelMLTaskRunRequest]: (CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest & CancelMLTaskRunRequest)[K]
    }>): Request<CancelMLTaskRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelMLTaskRun(
          this.ops["CancelMLTaskRun"].applicator.apply(partialParams)
        );
    }

    invokeCheckSchemaVersionValidity(partialParams: ToOptional<{
      [K in keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput & keyof CheckSchemaVersionValidityInput]: (CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput & CheckSchemaVersionValidityInput)[K]
    }>): Request<CheckSchemaVersionValidityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkSchemaVersionValidity(
          this.ops["CheckSchemaVersionValidity"].applicator.apply(partialParams)
        );
    }

    invokeCreateBlueprint(partialParams: ToOptional<{
      [K in keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest & keyof CreateBlueprintRequest]: (CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest & CreateBlueprintRequest)[K]
    }>): Request<CreateBlueprintResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBlueprint(
          this.ops["CreateBlueprint"].applicator.apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest]: (CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest)[K]
    }>): Request<CreateConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnection(
          this.ops["CreateConnection"].applicator.apply(partialParams)
        );
    }

    invokeCreateCrawler(partialParams: ToOptional<{
      [K in keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest & keyof CreateCrawlerRequest]: (CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest & CreateCrawlerRequest)[K]
    }>): Request<CreateCrawlerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCrawler(
          this.ops["CreateCrawler"].applicator.apply(partialParams)
        );
    }

    invokeCreateDatabase(partialParams: ToOptional<{
      [K in keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest & keyof CreateDatabaseRequest]: (CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest & CreateDatabaseRequest)[K]
    }>): Request<CreateDatabaseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDatabase(
          this.ops["CreateDatabase"].applicator.apply(partialParams)
        );
    }

    invokeCreateDevEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest & keyof CreateDevEndpointRequest]: (CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest & CreateDevEndpointRequest)[K]
    }>): Request<CreateDevEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDevEndpoint(
          this.ops["CreateDevEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateMLTransform(partialParams: ToOptional<{
      [K in keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest & keyof CreateMLTransformRequest]: (CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest & CreateMLTransformRequest)[K]
    }>): Request<CreateMLTransformResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMLTransform(
          this.ops["CreateMLTransform"].applicator.apply(partialParams)
        );
    }

    invokeCreatePartition(partialParams: ToOptional<{
      [K in keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest & keyof CreatePartitionRequest]: (CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest & CreatePartitionRequest)[K]
    }>): Request<CreatePartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPartition(
          this.ops["CreatePartition"].applicator.apply(partialParams)
        );
    }

    invokeCreatePartitionIndex(partialParams: ToOptional<{
      [K in keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest & keyof CreatePartitionIndexRequest]: (CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest & CreatePartitionIndexRequest)[K]
    }>): Request<CreatePartitionIndexResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPartitionIndex(
          this.ops["CreatePartitionIndex"].applicator.apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput & keyof CreateRegistryInput]: (CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput & CreateRegistryInput)[K]
    }>): Request<CreateRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegistry(
          this.ops["CreateRegistry"].applicator.apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput & keyof CreateSchemaInput]: (CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput & CreateSchemaInput)[K]
    }>): Request<CreateSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSchema(
          this.ops["CreateSchema"].applicator.apply(partialParams)
        );
    }

    invokeCreateSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest & keyof CreateSecurityConfigurationRequest]: (CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest & CreateSecurityConfigurationRequest)[K]
    }>): Request<CreateSecurityConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityConfiguration(
          this.ops["CreateSecurityConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest & keyof CreateTableRequest]: (CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest & CreateTableRequest)[K]
    }>): Request<CreateTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTable(
          this.ops["CreateTable"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrigger(partialParams: ToOptional<{
      [K in keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest & keyof CreateTriggerRequest]: (CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest & CreateTriggerRequest)[K]
    }>): Request<CreateTriggerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrigger(
          this.ops["CreateTrigger"].applicator.apply(partialParams)
        );
    }

    invokeCreateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest & keyof CreateUserDefinedFunctionRequest]: (CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest & CreateUserDefinedFunctionRequest)[K]
    }>): Request<CreateUserDefinedFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserDefinedFunction(
          this.ops["CreateUserDefinedFunction"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest]: (CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest)[K]
    }>): Request<CreateWorkflowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkflow(
          this.ops["CreateWorkflow"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBlueprint(partialParams: ToOptional<{
      [K in keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest & keyof DeleteBlueprintRequest]: (DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest & DeleteBlueprintRequest)[K]
    }>): Request<DeleteBlueprintResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBlueprint(
          this.ops["DeleteBlueprint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClassifier(partialParams: ToOptional<{
      [K in keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest & keyof DeleteClassifierRequest]: (DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest & DeleteClassifierRequest)[K]
    }>): Request<DeleteClassifierResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClassifier(
          this.ops["DeleteClassifier"].applicator.apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest & keyof DeleteColumnStatisticsForPartitionRequest]: (DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest & DeleteColumnStatisticsForPartitionRequest)[K]
    }>): Request<DeleteColumnStatisticsForPartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(
          this.ops["DeleteColumnStatisticsForPartition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest & keyof DeleteColumnStatisticsForTableRequest]: (DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest & DeleteColumnStatisticsForTableRequest)[K]
    }>): Request<DeleteColumnStatisticsForTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteColumnStatisticsForTable(
          this.ops["DeleteColumnStatisticsForTable"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest]: (DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCrawler(partialParams: ToOptional<{
      [K in keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest & keyof DeleteCrawlerRequest]: (DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest & DeleteCrawlerRequest)[K]
    }>): Request<DeleteCrawlerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCrawler(
          this.ops["DeleteCrawler"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDatabase(partialParams: ToOptional<{
      [K in keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest & keyof DeleteDatabaseRequest]: (DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest & DeleteDatabaseRequest)[K]
    }>): Request<DeleteDatabaseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDatabase(
          this.ops["DeleteDatabase"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDevEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest & keyof DeleteDevEndpointRequest]: (DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest & DeleteDevEndpointRequest)[K]
    }>): Request<DeleteDevEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDevEndpoint(
          this.ops["DeleteDevEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest]: (DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest)[K]
    }>): Request<DeleteJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMLTransform(partialParams: ToOptional<{
      [K in keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest & keyof DeleteMLTransformRequest]: (DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest & DeleteMLTransformRequest)[K]
    }>): Request<DeleteMLTransformResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMLTransform(
          this.ops["DeleteMLTransform"].applicator.apply(partialParams)
        );
    }

    invokeDeletePartition(partialParams: ToOptional<{
      [K in keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest & keyof DeletePartitionRequest]: (DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest & DeletePartitionRequest)[K]
    }>): Request<DeletePartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePartition(
          this.ops["DeletePartition"].applicator.apply(partialParams)
        );
    }

    invokeDeletePartitionIndex(partialParams: ToOptional<{
      [K in keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest & keyof DeletePartitionIndexRequest]: (DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest & DeletePartitionIndexRequest)[K]
    }>): Request<DeletePartitionIndexResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePartitionIndex(
          this.ops["DeletePartitionIndex"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRegistry(partialParams: ToOptional<{
      [K in keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput & keyof DeleteRegistryInput]: (DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput & DeleteRegistryInput)[K]
    }>): Request<DeleteRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegistry(
          this.ops["DeleteRegistry"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSchema(partialParams: ToOptional<{
      [K in keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput & keyof DeleteSchemaInput]: (DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput & DeleteSchemaInput)[K]
    }>): Request<DeleteSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchema(
          this.ops["DeleteSchema"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSchemaVersions(partialParams: ToOptional<{
      [K in keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput & keyof DeleteSchemaVersionsInput]: (DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput & DeleteSchemaVersionsInput)[K]
    }>): Request<DeleteSchemaVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchemaVersions(
          this.ops["DeleteSchemaVersions"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest & keyof DeleteSecurityConfigurationRequest]: (DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest & DeleteSecurityConfigurationRequest)[K]
    }>): Request<DeleteSecurityConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecurityConfiguration(
          this.ops["DeleteSecurityConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest & keyof DeleteTableRequest]: (DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest & DeleteTableRequest)[K]
    }>): Request<DeleteTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest & keyof DeleteTableVersionRequest]: (DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest & DeleteTableVersionRequest)[K]
    }>): Request<DeleteTableVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTableVersion(
          this.ops["DeleteTableVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrigger(partialParams: ToOptional<{
      [K in keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest & keyof DeleteTriggerRequest]: (DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest & DeleteTriggerRequest)[K]
    }>): Request<DeleteTriggerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrigger(
          this.ops["DeleteTrigger"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest & keyof DeleteUserDefinedFunctionRequest]: (DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest & DeleteUserDefinedFunctionRequest)[K]
    }>): Request<DeleteUserDefinedFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserDefinedFunction(
          this.ops["DeleteUserDefinedFunction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkflow(partialParams: ToOptional<{
      [K in keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest]: (DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest)[K]
    }>): Request<DeleteWorkflowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkflow(
          this.ops["DeleteWorkflow"].applicator.apply(partialParams)
        );
    }

    invokeGetBlueprint(partialParams: ToOptional<{
      [K in keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest & keyof GetBlueprintRequest]: (GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest & GetBlueprintRequest)[K]
    }>): Request<GetBlueprintResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlueprint(
          this.ops["GetBlueprint"].applicator.apply(partialParams)
        );
    }

    invokeGetBlueprintRun(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest & keyof GetBlueprintRunRequest]: (GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest & GetBlueprintRunRequest)[K]
    }>): Request<GetBlueprintRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlueprintRun(
          this.ops["GetBlueprintRun"].applicator.apply(partialParams)
        );
    }

    invokeGetBlueprintRuns(partialParams: ToOptional<{
      [K in keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest & keyof GetBlueprintRunsRequest]: (GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest & GetBlueprintRunsRequest)[K]
    }>): Request<GetBlueprintRunsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlueprintRuns(
          this.ops["GetBlueprintRuns"].applicator.apply(partialParams)
        );
    }

    invokeGetClassifier(partialParams: ToOptional<{
      [K in keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest & keyof GetClassifierRequest]: (GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest & GetClassifierRequest)[K]
    }>): Request<GetClassifierResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getClassifier(
          this.ops["GetClassifier"].applicator.apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest & keyof GetColumnStatisticsForPartitionRequest]: (GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest & GetColumnStatisticsForPartitionRequest)[K]
    }>): Request<GetColumnStatisticsForPartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getColumnStatisticsForPartition(
          this.ops["GetColumnStatisticsForPartition"].applicator.apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest & keyof GetColumnStatisticsForTableRequest]: (GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest & GetColumnStatisticsForTableRequest)[K]
    }>): Request<GetColumnStatisticsForTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getColumnStatisticsForTable(
          this.ops["GetColumnStatisticsForTable"].applicator.apply(partialParams)
        );
    }

    invokeGetConnection(partialParams: ToOptional<{
      [K in keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest & keyof GetConnectionRequest]: (GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest & GetConnectionRequest)[K]
    }>): Request<GetConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConnection(
          this.ops["GetConnection"].applicator.apply(partialParams)
        );
    }

    invokeGetCrawler(partialParams: ToOptional<{
      [K in keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest & keyof GetCrawlerRequest]: (GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest & GetCrawlerRequest)[K]
    }>): Request<GetCrawlerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCrawler(
          this.ops["GetCrawler"].applicator.apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest & keyof GetDatabaseRequest]: (GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest & GetDatabaseRequest)[K]
    }>): Request<GetDatabaseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDatabase(
          this.ops["GetDatabase"].applicator.apply(partialParams)
        );
    }

    invokeGetDevEndpoint(partialParams: ToOptional<{
      [K in keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest & keyof GetDevEndpointRequest]: (GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest & GetDevEndpointRequest)[K]
    }>): Request<GetDevEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevEndpoint(
          this.ops["GetDevEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].applicator.apply(partialParams)
        );
    }

    invokeGetJobBookmark(partialParams: ToOptional<{
      [K in keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest & keyof GetJobBookmarkRequest]: (GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest & GetJobBookmarkRequest)[K]
    }>): Request<GetJobBookmarkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobBookmark(
          this.ops["GetJobBookmark"].applicator.apply(partialParams)
        );
    }

    invokeGetJobRun(partialParams: ToOptional<{
      [K in keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest & keyof GetJobRunRequest]: (GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest & GetJobRunRequest)[K]
    }>): Request<GetJobRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobRun(
          this.ops["GetJobRun"].applicator.apply(partialParams)
        );
    }

    invokeGetJobRuns(partialParams: ToOptional<{
      [K in keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest & keyof GetJobRunsRequest]: (GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest & GetJobRunsRequest)[K]
    }>): Request<GetJobRunsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobRuns(
          this.ops["GetJobRuns"].applicator.apply(partialParams)
        );
    }

    invokeGetMLTaskRun(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest & keyof GetMLTaskRunRequest]: (GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest & GetMLTaskRunRequest)[K]
    }>): Request<GetMLTaskRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMLTaskRun(
          this.ops["GetMLTaskRun"].applicator.apply(partialParams)
        );
    }

    invokeGetMLTaskRuns(partialParams: ToOptional<{
      [K in keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest & keyof GetMLTaskRunsRequest]: (GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest & GetMLTaskRunsRequest)[K]
    }>): Request<GetMLTaskRunsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMLTaskRuns(
          this.ops["GetMLTaskRuns"].applicator.apply(partialParams)
        );
    }

    invokeGetMLTransform(partialParams: ToOptional<{
      [K in keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest & keyof GetMLTransformRequest]: (GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest & GetMLTransformRequest)[K]
    }>): Request<GetMLTransformResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMLTransform(
          this.ops["GetMLTransform"].applicator.apply(partialParams)
        );
    }

    invokeGetMapping(partialParams: ToOptional<{
      [K in keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest & keyof GetMappingRequest]: (GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest & GetMappingRequest)[K]
    }>): Request<GetMappingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMapping(
          this.ops["GetMapping"].applicator.apply(partialParams)
        );
    }

    invokeGetPartition(partialParams: ToOptional<{
      [K in keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest & keyof GetPartitionRequest]: (GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest & GetPartitionRequest)[K]
    }>): Request<GetPartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPartition(
          this.ops["GetPartition"].applicator.apply(partialParams)
        );
    }

    invokeGetPartitionIndexes(partialParams: ToOptional<{
      [K in keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest & keyof GetPartitionIndexesRequest]: (GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest & GetPartitionIndexesRequest)[K]
    }>): Request<GetPartitionIndexesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPartitionIndexes(
          this.ops["GetPartitionIndexes"].applicator.apply(partialParams)
        );
    }

    invokeGetPartitions(partialParams: ToOptional<{
      [K in keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest & keyof GetPartitionsRequest]: (GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest & GetPartitionsRequest)[K]
    }>): Request<GetPartitionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPartitions(
          this.ops["GetPartitions"].applicator.apply(partialParams)
        );
    }

    invokeGetPlan(partialParams: ToOptional<{
      [K in keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest & keyof GetPlanRequest]: (GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest & GetPlanRequest)[K]
    }>): Request<GetPlanResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPlan(
          this.ops["GetPlan"].applicator.apply(partialParams)
        );
    }

    invokeGetRegistry(partialParams: ToOptional<{
      [K in keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput & keyof GetRegistryInput]: (GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput & GetRegistryInput)[K]
    }>): Request<GetRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRegistry(
          this.ops["GetRegistry"].applicator.apply(partialParams)
        );
    }

    invokeGetSchema(partialParams: ToOptional<{
      [K in keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput & keyof GetSchemaInput]: (GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput & GetSchemaInput)[K]
    }>): Request<GetSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchema(
          this.ops["GetSchema"].applicator.apply(partialParams)
        );
    }

    invokeGetSchemaByDefinition(partialParams: ToOptional<{
      [K in keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput & keyof GetSchemaByDefinitionInput]: (GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput & GetSchemaByDefinitionInput)[K]
    }>): Request<GetSchemaByDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchemaByDefinition(
          this.ops["GetSchemaByDefinition"].applicator.apply(partialParams)
        );
    }

    invokeGetSchemaVersionsDiff(partialParams: ToOptional<{
      [K in keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput & keyof GetSchemaVersionsDiffInput]: (GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput & GetSchemaVersionsDiffInput)[K]
    }>): Request<GetSchemaVersionsDiffResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchemaVersionsDiff(
          this.ops["GetSchemaVersionsDiff"].applicator.apply(partialParams)
        );
    }

    invokeGetSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest & keyof GetSecurityConfigurationRequest]: (GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest & GetSecurityConfigurationRequest)[K]
    }>): Request<GetSecurityConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSecurityConfiguration(
          this.ops["GetSecurityConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetTable(partialParams: ToOptional<{
      [K in keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest & keyof GetTableRequest]: (GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest & GetTableRequest)[K]
    }>): Request<GetTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTable(
          this.ops["GetTable"].applicator.apply(partialParams)
        );
    }

    invokeGetTableVersion(partialParams: ToOptional<{
      [K in keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest & keyof GetTableVersionRequest]: (GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest & GetTableVersionRequest)[K]
    }>): Request<GetTableVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableVersion(
          this.ops["GetTableVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetTableVersions(partialParams: ToOptional<{
      [K in keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest & keyof GetTableVersionsRequest]: (GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest & GetTableVersionsRequest)[K]
    }>): Request<GetTableVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableVersions(
          this.ops["GetTableVersions"].applicator.apply(partialParams)
        );
    }

    invokeGetTables(partialParams: ToOptional<{
      [K in keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest & keyof GetTablesRequest]: (GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest & GetTablesRequest)[K]
    }>): Request<GetTablesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTables(
          this.ops["GetTables"].applicator.apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest]: (GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest)[K]
    }>): Request<GetTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTags(
          this.ops["GetTags"].applicator.apply(partialParams)
        );
    }

    invokeGetTrigger(partialParams: ToOptional<{
      [K in keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest & keyof GetTriggerRequest]: (GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest & GetTriggerRequest)[K]
    }>): Request<GetTriggerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrigger(
          this.ops["GetTrigger"].applicator.apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionMetadata(partialParams: ToOptional<{
      [K in keyof Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId"> & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest & keyof GetUnfilteredPartitionMetadataRequest]: (Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId"> & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest & GetUnfilteredPartitionMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(
          this.ops["GetUnfilteredPartitionMetadata"].applicator.apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionsMetadata(partialParams: ToOptional<{
      [K in keyof Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId"> & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest & keyof GetUnfilteredPartitionsMetadataRequest]: (Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId"> & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest & GetUnfilteredPartitionsMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionsMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(
          this.ops["GetUnfilteredPartitionsMetadata"].applicator.apply(partialParams)
        );
    }

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof Omit<GetUnfilteredTableMetadataRequest, "CatalogId"> & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest & keyof GetUnfilteredTableMetadataRequest]: (Omit<GetUnfilteredTableMetadataRequest, "CatalogId"> & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest & GetUnfilteredTableMetadataRequest)[K]
    }>): Request<GetUnfilteredTableMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUnfilteredTableMetadata(
          this.ops["GetUnfilteredTableMetadata"].applicator.apply(partialParams)
        );
    }

    invokeGetUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest & keyof GetUserDefinedFunctionRequest]: (GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest & GetUserDefinedFunctionRequest)[K]
    }>): Request<GetUserDefinedFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserDefinedFunction(
          this.ops["GetUserDefinedFunction"].applicator.apply(partialParams)
        );
    }

    invokeGetUserDefinedFunctions(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest & keyof GetUserDefinedFunctionsRequest]: (GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest & GetUserDefinedFunctionsRequest)[K]
    }>): Request<GetUserDefinedFunctionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserDefinedFunctions(
          this.ops["GetUserDefinedFunctions"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkflow(partialParams: ToOptional<{
      [K in keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest & keyof GetWorkflowRequest]: (GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest & GetWorkflowRequest)[K]
    }>): Request<GetWorkflowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflow(
          this.ops["GetWorkflow"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkflowRun(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest & keyof GetWorkflowRunRequest]: (GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest & GetWorkflowRunRequest)[K]
    }>): Request<GetWorkflowRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowRun(
          this.ops["GetWorkflowRun"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest & keyof GetWorkflowRunPropertiesRequest]: (GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest & GetWorkflowRunPropertiesRequest)[K]
    }>): Request<GetWorkflowRunPropertiesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowRunProperties(
          this.ops["GetWorkflowRunProperties"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkflowRuns(partialParams: ToOptional<{
      [K in keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest & keyof GetWorkflowRunsRequest]: (GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest & GetWorkflowRunsRequest)[K]
    }>): Request<GetWorkflowRunsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowRuns(
          this.ops["GetWorkflowRuns"].applicator.apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput & keyof ListSchemaVersionsInput]: (ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput & ListSchemaVersionsInput)[K]
    }>): Request<ListSchemaVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSchemaVersions(
          this.ops["ListSchemaVersions"].applicator.apply(partialParams)
        );
    }

    invokePutDataCatalogEncryptionSettings(partialParams: ToOptional<{
      [K in keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest & keyof PutDataCatalogEncryptionSettingsRequest]: (PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest & PutDataCatalogEncryptionSettingsRequest)[K]
    }>): Request<PutDataCatalogEncryptionSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putDataCatalogEncryptionSettings(
          this.ops["PutDataCatalogEncryptionSettings"].applicator.apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest)[K]
    }>): Request<PutResourcePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput & keyof PutSchemaVersionMetadataInput]: (PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput & PutSchemaVersionMetadataInput)[K]
    }>): Request<PutSchemaVersionMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSchemaVersionMetadata(
          this.ops["PutSchemaVersionMetadata"].applicator.apply(partialParams)
        );
    }

    invokePutWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest & keyof PutWorkflowRunPropertiesRequest]: (PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest & PutWorkflowRunPropertiesRequest)[K]
    }>): Request<PutWorkflowRunPropertiesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putWorkflowRunProperties(
          this.ops["PutWorkflowRunProperties"].applicator.apply(partialParams)
        );
    }

    invokeRegisterSchemaVersion(partialParams: ToOptional<{
      [K in keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput & keyof RegisterSchemaVersionInput]: (RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput & RegisterSchemaVersionInput)[K]
    }>): Request<RegisterSchemaVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerSchemaVersion(
          this.ops["RegisterSchemaVersion"].applicator.apply(partialParams)
        );
    }

    invokeRemoveSchemaVersionMetadata(partialParams: ToOptional<{
      [K in keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput & keyof RemoveSchemaVersionMetadataInput]: (RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput & RemoveSchemaVersionMetadataInput)[K]
    }>): Request<RemoveSchemaVersionMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeSchemaVersionMetadata(
          this.ops["RemoveSchemaVersionMetadata"].applicator.apply(partialParams)
        );
    }

    invokeResetJobBookmark(partialParams: ToOptional<{
      [K in keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest & keyof ResetJobBookmarkRequest]: (ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest & ResetJobBookmarkRequest)[K]
    }>): Request<ResetJobBookmarkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetJobBookmark(
          this.ops["ResetJobBookmark"].applicator.apply(partialParams)
        );
    }

    invokeResumeWorkflowRun(partialParams: ToOptional<{
      [K in keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest & keyof ResumeWorkflowRunRequest]: (ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest & ResumeWorkflowRunRequest)[K]
    }>): Request<ResumeWorkflowRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeWorkflowRun(
          this.ops["ResumeWorkflowRun"].applicator.apply(partialParams)
        );
    }

    invokeStartBlueprintRun(partialParams: ToOptional<{
      [K in keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest & keyof StartBlueprintRunRequest]: (StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest & StartBlueprintRunRequest)[K]
    }>): Request<StartBlueprintRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBlueprintRun(
          this.ops["StartBlueprintRun"].applicator.apply(partialParams)
        );
    }

    invokeStartCrawler(partialParams: ToOptional<{
      [K in keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest & keyof StartCrawlerRequest]: (StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest & StartCrawlerRequest)[K]
    }>): Request<StartCrawlerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCrawler(
          this.ops["StartCrawler"].applicator.apply(partialParams)
        );
    }

    invokeStartCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest & keyof StartCrawlerScheduleRequest]: (StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest & StartCrawlerScheduleRequest)[K]
    }>): Request<StartCrawlerScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCrawlerSchedule(
          this.ops["StartCrawlerSchedule"].applicator.apply(partialParams)
        );
    }

    invokeStartExportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest & keyof StartExportLabelsTaskRunRequest]: (StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest & StartExportLabelsTaskRunRequest)[K]
    }>): Request<StartExportLabelsTaskRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startExportLabelsTaskRun(
          this.ops["StartExportLabelsTaskRun"].applicator.apply(partialParams)
        );
    }

    invokeStartImportLabelsTaskRun(partialParams: ToOptional<{
      [K in keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest & keyof StartImportLabelsTaskRunRequest]: (StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest & StartImportLabelsTaskRunRequest)[K]
    }>): Request<StartImportLabelsTaskRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImportLabelsTaskRun(
          this.ops["StartImportLabelsTaskRun"].applicator.apply(partialParams)
        );
    }

    invokeStartJobRun(partialParams: ToOptional<{
      [K in keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest & keyof StartJobRunRequest]: (StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest & StartJobRunRequest)[K]
    }>): Request<StartJobRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startJobRun(
          this.ops["StartJobRun"].applicator.apply(partialParams)
        );
    }

    invokeStartMLEvaluationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest & keyof StartMLEvaluationTaskRunRequest]: (StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest & StartMLEvaluationTaskRunRequest)[K]
    }>): Request<StartMLEvaluationTaskRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMLEvaluationTaskRun(
          this.ops["StartMLEvaluationTaskRun"].applicator.apply(partialParams)
        );
    }

    invokeStartMLLabelingSetGenerationTaskRun(partialParams: ToOptional<{
      [K in keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest & keyof StartMLLabelingSetGenerationTaskRunRequest]: (StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest & StartMLLabelingSetGenerationTaskRunRequest)[K]
    }>): Request<StartMLLabelingSetGenerationTaskRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMLLabelingSetGenerationTaskRun(
          this.ops["StartMLLabelingSetGenerationTaskRun"].applicator.apply(partialParams)
        );
    }

    invokeStartTrigger(partialParams: ToOptional<{
      [K in keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest & keyof StartTriggerRequest]: (StartTriggerRequest & StartTriggerRequest & StartTriggerRequest & StartTriggerRequest & StartTriggerRequest & StartTriggerRequest)[K]
    }>): Request<StartTriggerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startTrigger(
          this.ops["StartTrigger"].applicator.apply(partialParams)
        );
    }

    invokeStartWorkflowRun(partialParams: ToOptional<{
      [K in keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest & keyof StartWorkflowRunRequest]: (StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest & StartWorkflowRunRequest)[K]
    }>): Request<StartWorkflowRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startWorkflowRun(
          this.ops["StartWorkflowRun"].applicator.apply(partialParams)
        );
    }

    invokeStopCrawler(partialParams: ToOptional<{
      [K in keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest & keyof StopCrawlerRequest]: (StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest & StopCrawlerRequest)[K]
    }>): Request<StopCrawlerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCrawler(
          this.ops["StopCrawler"].applicator.apply(partialParams)
        );
    }

    invokeStopCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest & keyof StopCrawlerScheduleRequest]: (StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest & StopCrawlerScheduleRequest)[K]
    }>): Request<StopCrawlerScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCrawlerSchedule(
          this.ops["StopCrawlerSchedule"].applicator.apply(partialParams)
        );
    }

    invokeStopTrigger(partialParams: ToOptional<{
      [K in keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest & keyof StopTriggerRequest]: (StopTriggerRequest & StopTriggerRequest & StopTriggerRequest & StopTriggerRequest & StopTriggerRequest & StopTriggerRequest)[K]
    }>): Request<StopTriggerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTrigger(
          this.ops["StopTrigger"].applicator.apply(partialParams)
        );
    }

    invokeStopWorkflowRun(partialParams: ToOptional<{
      [K in keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest & keyof StopWorkflowRunRequest]: (StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest & StopWorkflowRunRequest)[K]
    }>): Request<StopWorkflowRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopWorkflowRun(
          this.ops["StopWorkflowRun"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBlueprint(partialParams: ToOptional<{
      [K in keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest & keyof UpdateBlueprintRequest]: (UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest & UpdateBlueprintRequest)[K]
    }>): Request<UpdateBlueprintResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBlueprint(
          this.ops["UpdateBlueprint"].applicator.apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest & keyof Omit<UpdateColumnStatisticsForPartitionRequest, "DatabaseName"> & keyof UpdateColumnStatisticsForPartitionRequest & keyof UpdateColumnStatisticsForPartitionRequest & keyof Omit<UpdateColumnStatisticsForPartitionRequest, "TableName">]: (UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest & Omit<UpdateColumnStatisticsForPartitionRequest, "DatabaseName"> & UpdateColumnStatisticsForPartitionRequest & UpdateColumnStatisticsForPartitionRequest & Omit<UpdateColumnStatisticsForPartitionRequest, "TableName">)[K]
    }>): Request<UpdateColumnStatisticsForPartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateColumnStatisticsForPartition(
          this.ops["UpdateColumnStatisticsForPartition"].applicator.apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest & keyof Omit<UpdateColumnStatisticsForTableRequest, "DatabaseName"> & keyof UpdateColumnStatisticsForTableRequest & keyof UpdateColumnStatisticsForTableRequest & keyof Omit<UpdateColumnStatisticsForTableRequest, "TableName">]: (UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest & Omit<UpdateColumnStatisticsForTableRequest, "DatabaseName"> & UpdateColumnStatisticsForTableRequest & UpdateColumnStatisticsForTableRequest & Omit<UpdateColumnStatisticsForTableRequest, "TableName">)[K]
    }>): Request<UpdateColumnStatisticsForTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateColumnStatisticsForTable(
          this.ops["UpdateColumnStatisticsForTable"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest]: (UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest)[K]
    }>): Request<UpdateConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnection(
          this.ops["UpdateConnection"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCrawler(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest & keyof UpdateCrawlerRequest]: (UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest & UpdateCrawlerRequest)[K]
    }>): Request<UpdateCrawlerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCrawler(
          this.ops["UpdateCrawler"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCrawlerSchedule(partialParams: ToOptional<{
      [K in keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest & keyof UpdateCrawlerScheduleRequest]: (UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest & UpdateCrawlerScheduleRequest)[K]
    }>): Request<UpdateCrawlerScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCrawlerSchedule(
          this.ops["UpdateCrawlerSchedule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDatabase(partialParams: ToOptional<{
      [K in keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest & keyof UpdateDatabaseRequest]: (UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest & UpdateDatabaseRequest)[K]
    }>): Request<UpdateDatabaseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDatabase(
          this.ops["UpdateDatabase"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDevEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest & keyof UpdateDevEndpointRequest]: (UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest & UpdateDevEndpointRequest)[K]
    }>): Request<UpdateDevEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevEndpoint(
          this.ops["UpdateDevEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest]: (UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest)[K]
    }>): Request<UpdateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJob(
          this.ops["UpdateJob"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMLTransform(partialParams: ToOptional<{
      [K in keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest & keyof UpdateMLTransformRequest]: (UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest & UpdateMLTransformRequest)[K]
    }>): Request<UpdateMLTransformResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMLTransform(
          this.ops["UpdateMLTransform"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePartition(partialParams: ToOptional<{
      [K in keyof UpdatePartitionRequest & keyof UpdatePartitionRequest & keyof Omit<UpdatePartitionRequest, "DatabaseName"> & keyof UpdatePartitionRequest & keyof UpdatePartitionRequest & keyof Omit<UpdatePartitionRequest, "TableName">]: (UpdatePartitionRequest & UpdatePartitionRequest & Omit<UpdatePartitionRequest, "DatabaseName"> & UpdatePartitionRequest & UpdatePartitionRequest & Omit<UpdatePartitionRequest, "TableName">)[K]
    }>): Request<UpdatePartitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePartition(
          this.ops["UpdatePartition"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput & keyof UpdateRegistryInput]: (UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput & UpdateRegistryInput)[K]
    }>): Request<UpdateRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegistry(
          this.ops["UpdateRegistry"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput & keyof UpdateSchemaInput]: (UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput & UpdateSchemaInput)[K]
    }>): Request<UpdateSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSchema(
          this.ops["UpdateSchema"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableRequest & keyof UpdateTableRequest & keyof Omit<UpdateTableRequest, "DatabaseName"> & keyof UpdateTableRequest & keyof UpdateTableRequest & keyof UpdateTableRequest]: (UpdateTableRequest & UpdateTableRequest & Omit<UpdateTableRequest, "DatabaseName"> & UpdateTableRequest & UpdateTableRequest & UpdateTableRequest)[K]
    }>): Request<UpdateTableResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTable(
          this.ops["UpdateTable"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrigger(partialParams: ToOptional<{
      [K in keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest & keyof UpdateTriggerRequest]: (UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest & UpdateTriggerRequest)[K]
    }>): Request<UpdateTriggerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrigger(
          this.ops["UpdateTrigger"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest & keyof Omit<UpdateUserDefinedFunctionRequest, "DatabaseName"> & keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest & keyof UpdateUserDefinedFunctionRequest]: (UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest & Omit<UpdateUserDefinedFunctionRequest, "DatabaseName"> & UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest & UpdateUserDefinedFunctionRequest)[K]
    }>): Request<UpdateUserDefinedFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserDefinedFunction(
          this.ops["UpdateUserDefinedFunction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWorkflow(partialParams: ToOptional<{
      [K in keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest & keyof UpdateWorkflowRequest]: (UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest & UpdateWorkflowRequest)[K]
    }>): Request<UpdateWorkflowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkflow(
          this.ops["UpdateWorkflow"].applicator.apply(partialParams)
        );
    }
}