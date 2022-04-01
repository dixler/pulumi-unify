
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchCreatePartitionRequest,
    BatchDeletePartitionRequest,
    BatchDeleteTableRequest,
    BatchDeleteTableVersionRequest,
    BatchGetPartitionRequest,
    BatchUpdatePartitionRequest,
    CreateBlueprintRequest,
    CreateCrawlerRequest,
    CreateJobRequest,
    CreateMLTransformRequest,
    CreatePartitionRequest,
    CreatePartitionIndexRequest,
    CreateSecurityConfigurationRequest,
    CreateTableRequest,
    CreateTriggerRequest,
    CreateUserDefinedFunctionRequest,
    CreateWorkflowRequest,
    DeleteBlueprintRequest,
    DeleteClassifierRequest,
    DeleteColumnStatisticsForPartitionRequest,
    DeleteColumnStatisticsForTableRequest,
    DeleteCrawlerRequest,
    DeleteDatabaseRequest,
    DeletePartitionRequest,
    DeletePartitionIndexRequest,
    DeleteSecurityConfigurationRequest,
    DeleteTableRequest,
    DeleteTableVersionRequest,
    DeleteTriggerRequest,
    DeleteUserDefinedFunctionRequest,
    DeleteWorkflowRequest,
    GetBlueprintRequest,
    GetClassifierRequest,
    GetColumnStatisticsForPartitionRequest,
    GetColumnStatisticsForTableRequest,
    GetConnectionRequest,
    GetCrawlerRequest,
    GetDatabaseRequest,
    GetPartitionRequest,
    GetPartitionIndexesRequest,
    GetPartitionsRequest,
    GetSecurityConfigurationRequest,
    GetTableRequest,
    GetTableVersionRequest,
    GetTableVersionsRequest,
    GetTablesRequest,
    GetTriggerRequest,
    GetUnfilteredPartitionMetadataRequest,
    GetUnfilteredPartitionsMetadataRequest,
    GetUnfilteredTableMetadataRequest,
    GetUserDefinedFunctionRequest,
    GetWorkflowRequest,
    GetWorkflowRunRequest,
    GetWorkflowRunPropertiesRequest,
    GetWorkflowRunsRequest,
    PutWorkflowRunPropertiesRequest,
    ResumeWorkflowRunRequest,
    StartCrawlerRequest,
    StartTriggerRequest,
    StartWorkflowRunRequest,
    StopCrawlerRequest,
    StopTriggerRequest,
    StopWorkflowRunRequest,
    UpdateBlueprintRequest,
    UpdateColumnStatisticsForPartitionRequest,
    UpdateColumnStatisticsForTableRequest,
    UpdateConnectionRequest,
    UpdateCrawlerRequest,
    UpdateDatabaseRequest,
    UpdatePartitionRequest,
    UpdateTableRequest,
    UpdateTriggerRequest,
    UpdateUserDefinedFunctionRequest,
    UpdateWorkflowRequest,
    BatchCreatePartitionResponse,
    BatchDeletePartitionResponse,
    BatchDeleteTableResponse,
    BatchDeleteTableVersionResponse,
    BatchGetPartitionResponse,
    BatchUpdatePartitionResponse,
    CreateBlueprintResponse,
    CreateCrawlerResponse,
    CreateJobResponse,
    CreateMLTransformResponse,
    CreatePartitionResponse,
    CreatePartitionIndexResponse,
    CreateSecurityConfigurationResponse,
    CreateTableResponse,
    CreateTriggerResponse,
    CreateUserDefinedFunctionResponse,
    CreateWorkflowResponse,
    DeleteBlueprintResponse,
    DeleteClassifierResponse,
    DeleteColumnStatisticsForPartitionResponse,
    DeleteColumnStatisticsForTableResponse,
    DeleteCrawlerResponse,
    DeleteDatabaseResponse,
    DeletePartitionResponse,
    DeletePartitionIndexResponse,
    DeleteSecurityConfigurationResponse,
    DeleteTableResponse,
    DeleteTableVersionResponse,
    DeleteTriggerResponse,
    DeleteUserDefinedFunctionResponse,
    DeleteWorkflowResponse,
    GetBlueprintResponse,
    GetClassifierResponse,
    GetColumnStatisticsForPartitionResponse,
    GetColumnStatisticsForTableResponse,
    GetConnectionResponse,
    GetCrawlerResponse,
    GetDatabaseResponse,
    GetPartitionResponse,
    GetPartitionIndexesResponse,
    GetPartitionsResponse,
    GetSecurityConfigurationResponse,
    GetTableResponse,
    GetTableVersionResponse,
    GetTableVersionsResponse,
    GetTablesResponse,
    GetTriggerResponse,
    GetUnfilteredPartitionMetadataResponse,
    GetUnfilteredPartitionsMetadataResponse,
    GetUnfilteredTableMetadataResponse,
    GetUserDefinedFunctionResponse,
    GetWorkflowResponse,
    GetWorkflowRunResponse,
    GetWorkflowRunPropertiesResponse,
    GetWorkflowRunsResponse,
    PutWorkflowRunPropertiesResponse,
    ResumeWorkflowRunResponse,
    StartCrawlerResponse,
    StartTriggerResponse,
    StartWorkflowRunResponse,
    StopCrawlerResponse,
    StopTriggerResponse,
    StopWorkflowRunResponse,
    UpdateBlueprintResponse,
    UpdateColumnStatisticsForPartitionResponse,
    UpdateColumnStatisticsForTableResponse,
    UpdateConnectionResponse,
    UpdateCrawlerResponse,
    UpdateDatabaseResponse,
    UpdatePartitionResponse,
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

export default class extends aws.glue.UserDefinedFunction {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.glue.UserDefinedFunction>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Glue()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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
      [K in keyof BatchCreatePartitionRequest & keyof Omit<BatchCreatePartitionRequest, "DatabaseName">]: (BatchCreatePartitionRequest)[K]
    }>): Request<BatchCreatePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchCreatePartition(
          this.ops["BatchCreatePartition"].apply(partialParams)
        );
    }

    invokeBatchDeletePartition(partialParams: ToOptional<{
      [K in keyof BatchDeletePartitionRequest & keyof Omit<BatchDeletePartitionRequest, "DatabaseName">]: (BatchDeletePartitionRequest)[K]
    }>): Request<BatchDeletePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchDeletePartition(
          this.ops["BatchDeletePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteTable(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableRequest & keyof Omit<BatchDeleteTableRequest, "DatabaseName">]: (BatchDeleteTableRequest)[K]
    }>): Request<BatchDeleteTableResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteTable(
          this.ops["BatchDeleteTable"].apply(partialParams)
        );
    }

    invokeBatchDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableVersionRequest & keyof Omit<BatchDeleteTableVersionRequest, "DatabaseName">]: (BatchDeleteTableVersionRequest)[K]
    }>): Request<BatchDeleteTableVersionResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteTableVersion(
          this.ops["BatchDeleteTableVersion"].apply(partialParams)
        );
    }

    invokeBatchGetPartition(partialParams: ToOptional<{
      [K in keyof BatchGetPartitionRequest & keyof Omit<BatchGetPartitionRequest, "DatabaseName">]: (BatchGetPartitionRequest)[K]
    }>): Request<BatchGetPartitionResponse, AWSError> {
        this.boot();
        return this.client.batchGetPartition(
          this.ops["BatchGetPartition"].apply(partialParams)
        );
    }

    invokeBatchUpdatePartition(partialParams: ToOptional<{
      [K in keyof BatchUpdatePartitionRequest & keyof Omit<BatchUpdatePartitionRequest, "DatabaseName">]: (BatchUpdatePartitionRequest)[K]
    }>): Request<BatchUpdatePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchUpdatePartition(
          this.ops["BatchUpdatePartition"].apply(partialParams)
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

    invokeCreateCrawler(partialParams: ToOptional<{
      [K in keyof CreateCrawlerRequest & keyof Omit<CreateCrawlerRequest, "Name">]: (CreateCrawlerRequest)[K]
    }>): Request<CreateCrawlerResponse, AWSError> {
        this.boot();
        return this.client.createCrawler(
          this.ops["CreateCrawler"].apply(partialParams)
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
      [K in keyof CreatePartitionRequest & keyof Omit<CreatePartitionRequest, "DatabaseName">]: (CreatePartitionRequest)[K]
    }>): Request<CreatePartitionResponse, AWSError> {
        this.boot();
        return this.client.createPartition(
          this.ops["CreatePartition"].apply(partialParams)
        );
    }

    invokeCreatePartitionIndex(partialParams: ToOptional<{
      [K in keyof CreatePartitionIndexRequest & keyof Omit<CreatePartitionIndexRequest, "DatabaseName">]: (CreatePartitionIndexRequest)[K]
    }>): Request<CreatePartitionIndexResponse, AWSError> {
        this.boot();
        return this.client.createPartitionIndex(
          this.ops["CreatePartitionIndex"].apply(partialParams)
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
      [K in keyof CreateTableRequest & keyof Omit<CreateTableRequest, "DatabaseName">]: (CreateTableRequest)[K]
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
      [K in keyof CreateUserDefinedFunctionRequest & keyof Omit<CreateUserDefinedFunctionRequest, "DatabaseName">]: (CreateUserDefinedFunctionRequest)[K]
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
      [K in keyof DeleteColumnStatisticsForPartitionRequest & keyof Omit<DeleteColumnStatisticsForPartitionRequest, "DatabaseName">]: (DeleteColumnStatisticsForPartitionRequest)[K]
    }>): Request<DeleteColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(
          this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForTableRequest & keyof Omit<DeleteColumnStatisticsForTableRequest, "DatabaseName">]: (DeleteColumnStatisticsForTableRequest)[K]
    }>): Request<DeleteColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.deleteColumnStatisticsForTable(
          this.ops["DeleteColumnStatisticsForTable"].apply(partialParams)
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

    invokeDeletePartition(partialParams: ToOptional<{
      [K in keyof DeletePartitionRequest & keyof Omit<DeletePartitionRequest, "DatabaseName">]: (DeletePartitionRequest)[K]
    }>): Request<DeletePartitionResponse, AWSError> {
        this.boot();
        return this.client.deletePartition(
          this.ops["DeletePartition"].apply(partialParams)
        );
    }

    invokeDeletePartitionIndex(partialParams: ToOptional<{
      [K in keyof DeletePartitionIndexRequest & keyof Omit<DeletePartitionIndexRequest, "DatabaseName">]: (DeletePartitionIndexRequest)[K]
    }>): Request<DeletePartitionIndexResponse, AWSError> {
        this.boot();
        return this.client.deletePartitionIndex(
          this.ops["DeletePartitionIndex"].apply(partialParams)
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
      [K in keyof DeleteTableRequest & keyof Omit<DeleteTableRequest, "DatabaseName" | "Name">]: (DeleteTableRequest)[K]
    }>): Request<DeleteTableResponse, AWSError> {
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof DeleteTableVersionRequest & keyof Omit<DeleteTableVersionRequest, "DatabaseName">]: (DeleteTableVersionRequest)[K]
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
      [K in keyof DeleteUserDefinedFunctionRequest & keyof Omit<DeleteUserDefinedFunctionRequest, "DatabaseName">]: (DeleteUserDefinedFunctionRequest)[K]
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

    invokeGetClassifier(partialParams: ToOptional<{
      [K in keyof GetClassifierRequest & keyof Omit<GetClassifierRequest, "Name">]: (GetClassifierRequest)[K]
    }>): Request<GetClassifierResponse, AWSError> {
        this.boot();
        return this.client.getClassifier(
          this.ops["GetClassifier"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForPartitionRequest & keyof Omit<GetColumnStatisticsForPartitionRequest, "DatabaseName">]: (GetColumnStatisticsForPartitionRequest)[K]
    }>): Request<GetColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.getColumnStatisticsForPartition(
          this.ops["GetColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForTableRequest & keyof Omit<GetColumnStatisticsForTableRequest, "DatabaseName">]: (GetColumnStatisticsForTableRequest)[K]
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

    invokeGetCrawler(partialParams: ToOptional<{
      [K in keyof GetCrawlerRequest & keyof Omit<GetCrawlerRequest, "Name">]: (GetCrawlerRequest)[K]
    }>): Request<GetCrawlerResponse, AWSError> {
        this.boot();
        return this.client.getCrawler(
          this.ops["GetCrawler"].apply(partialParams)
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

    invokeGetPartition(partialParams: ToOptional<{
      [K in keyof GetPartitionRequest & keyof Omit<GetPartitionRequest, "DatabaseName">]: (GetPartitionRequest)[K]
    }>): Request<GetPartitionResponse, AWSError> {
        this.boot();
        return this.client.getPartition(
          this.ops["GetPartition"].apply(partialParams)
        );
    }

    invokeGetPartitionIndexes(partialParams: ToOptional<{
      [K in keyof GetPartitionIndexesRequest & keyof Omit<GetPartitionIndexesRequest, "DatabaseName">]: (GetPartitionIndexesRequest)[K]
    }>): Request<GetPartitionIndexesResponse, AWSError> {
        this.boot();
        return this.client.getPartitionIndexes(
          this.ops["GetPartitionIndexes"].apply(partialParams)
        );
    }

    invokeGetPartitions(partialParams: ToOptional<{
      [K in keyof GetPartitionsRequest & keyof Omit<GetPartitionsRequest, "DatabaseName">]: (GetPartitionsRequest)[K]
    }>): Request<GetPartitionsResponse, AWSError> {
        this.boot();
        return this.client.getPartitions(
          this.ops["GetPartitions"].apply(partialParams)
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

    invokeGetTable(partialParams: ToOptional<{
      [K in keyof GetTableRequest & keyof Omit<GetTableRequest, "DatabaseName" | "Name">]: (GetTableRequest)[K]
    }>): Request<GetTableResponse, AWSError> {
        this.boot();
        return this.client.getTable(
          this.ops["GetTable"].apply(partialParams)
        );
    }

    invokeGetTableVersion(partialParams: ToOptional<{
      [K in keyof GetTableVersionRequest & keyof Omit<GetTableVersionRequest, "DatabaseName">]: (GetTableVersionRequest)[K]
    }>): Request<GetTableVersionResponse, AWSError> {
        this.boot();
        return this.client.getTableVersion(
          this.ops["GetTableVersion"].apply(partialParams)
        );
    }

    invokeGetTableVersions(partialParams: ToOptional<{
      [K in keyof GetTableVersionsRequest & keyof Omit<GetTableVersionsRequest, "DatabaseName">]: (GetTableVersionsRequest)[K]
    }>): Request<GetTableVersionsResponse, AWSError> {
        this.boot();
        return this.client.getTableVersions(
          this.ops["GetTableVersions"].apply(partialParams)
        );
    }

    invokeGetTables(partialParams: ToOptional<{
      [K in keyof GetTablesRequest & keyof Omit<GetTablesRequest, "DatabaseName">]: (GetTablesRequest)[K]
    }>): Request<GetTablesResponse, AWSError> {
        this.boot();
        return this.client.getTables(
          this.ops["GetTables"].apply(partialParams)
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

    invokeGetUnfilteredPartitionMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionMetadataRequest & keyof Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId" | "DatabaseName">]: (GetUnfilteredPartitionMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(
          this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionsMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionsMetadataRequest & keyof Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId" | "DatabaseName">]: (GetUnfilteredPartitionsMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionsMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(
          this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredTableMetadataRequest & keyof Omit<GetUnfilteredTableMetadataRequest, "CatalogId" | "DatabaseName" | "Name">]: (GetUnfilteredTableMetadataRequest)[K]
    }>): Request<GetUnfilteredTableMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredTableMetadata(
          this.ops["GetUnfilteredTableMetadata"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionRequest & keyof Omit<GetUserDefinedFunctionRequest, "DatabaseName">]: (GetUserDefinedFunctionRequest)[K]
    }>): Request<GetUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.getUserDefinedFunction(
          this.ops["GetUserDefinedFunction"].apply(partialParams)
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

    invokePutWorkflowRunProperties(partialParams: ToOptional<{
      [K in keyof PutWorkflowRunPropertiesRequest & keyof Omit<PutWorkflowRunPropertiesRequest, "Name">]: (PutWorkflowRunPropertiesRequest)[K]
    }>): Request<PutWorkflowRunPropertiesResponse, AWSError> {
        this.boot();
        return this.client.putWorkflowRunProperties(
          this.ops["PutWorkflowRunProperties"].apply(partialParams)
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

    invokeStartCrawler(partialParams: ToOptional<{
      [K in keyof StartCrawlerRequest & keyof Omit<StartCrawlerRequest, "Name">]: (StartCrawlerRequest)[K]
    }>): Request<StartCrawlerResponse, AWSError> {
        this.boot();
        return this.client.startCrawler(
          this.ops["StartCrawler"].apply(partialParams)
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

    invokeUpdateBlueprint(partialParams: ToOptional<{
      [K in keyof UpdateBlueprintRequest & keyof Omit<UpdateBlueprintRequest, "Name">]: (UpdateBlueprintRequest)[K]
    }>): Request<UpdateBlueprintResponse, AWSError> {
        this.boot();
        return this.client.updateBlueprint(
          this.ops["UpdateBlueprint"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForPartitionRequest & keyof Omit<UpdateColumnStatisticsForPartitionRequest, "DatabaseName">]: (UpdateColumnStatisticsForPartitionRequest)[K]
    }>): Request<UpdateColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.updateColumnStatisticsForPartition(
          this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForTableRequest & keyof Omit<UpdateColumnStatisticsForTableRequest, "DatabaseName">]: (UpdateColumnStatisticsForTableRequest)[K]
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

    invokeUpdateDatabase(partialParams: ToOptional<{
      [K in keyof UpdateDatabaseRequest & keyof Omit<UpdateDatabaseRequest, "Name">]: (UpdateDatabaseRequest)[K]
    }>): Request<UpdateDatabaseResponse, AWSError> {
        this.boot();
        return this.client.updateDatabase(
          this.ops["UpdateDatabase"].apply(partialParams)
        );
    }

    invokeUpdatePartition(partialParams: ToOptional<{
      [K in keyof UpdatePartitionRequest & keyof Omit<UpdatePartitionRequest, "DatabaseName">]: (UpdatePartitionRequest)[K]
    }>): Request<UpdatePartitionResponse, AWSError> {
        this.boot();
        return this.client.updatePartition(
          this.ops["UpdatePartition"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableRequest & keyof Omit<UpdateTableRequest, "DatabaseName">]: (UpdateTableRequest)[K]
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
      [K in keyof UpdateUserDefinedFunctionRequest & keyof Omit<UpdateUserDefinedFunctionRequest, "DatabaseName">]: (UpdateUserDefinedFunctionRequest)[K]
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