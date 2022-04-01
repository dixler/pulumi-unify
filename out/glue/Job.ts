
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchStopJobRunRequest,
    CreateBlueprintRequest,
    CreateCrawlerRequest,
    CreateDevEndpointRequest,
    CreateJobRequest,
    CreateMLTransformRequest,
    CreateSecurityConfigurationRequest,
    CreateTriggerRequest,
    CreateWorkflowRequest,
    DeleteBlueprintRequest,
    DeleteClassifierRequest,
    DeleteCrawlerRequest,
    DeleteDatabaseRequest,
    DeleteJobRequest,
    DeleteSecurityConfigurationRequest,
    DeleteTableRequest,
    DeleteTriggerRequest,
    DeleteWorkflowRequest,
    GetBlueprintRequest,
    GetClassifierRequest,
    GetConnectionRequest,
    GetCrawlerRequest,
    GetDatabaseRequest,
    GetJobRequest,
    GetJobBookmarkRequest,
    GetJobRunRequest,
    GetJobRunsRequest,
    GetSecurityConfigurationRequest,
    GetTableRequest,
    GetTriggerRequest,
    GetUnfilteredTableMetadataRequest,
    GetWorkflowRequest,
    GetWorkflowRunRequest,
    GetWorkflowRunPropertiesRequest,
    GetWorkflowRunsRequest,
    PutWorkflowRunPropertiesRequest,
    ResetJobBookmarkRequest,
    ResumeWorkflowRunRequest,
    StartBlueprintRunRequest,
    StartCrawlerRequest,
    StartJobRunRequest,
    StartTriggerRequest,
    StartWorkflowRunRequest,
    StopCrawlerRequest,
    StopTriggerRequest,
    StopWorkflowRunRequest,
    UpdateBlueprintRequest,
    UpdateConnectionRequest,
    UpdateCrawlerRequest,
    UpdateDatabaseRequest,
    UpdateJobRequest,
    UpdateRegistryInput,
    UpdateTriggerRequest,
    UpdateWorkflowRequest,
    BatchStopJobRunResponse,
    CreateBlueprintResponse,
    CreateCrawlerResponse,
    CreateDevEndpointResponse,
    CreateJobResponse,
    CreateMLTransformResponse,
    CreateSecurityConfigurationResponse,
    CreateTriggerResponse,
    CreateWorkflowResponse,
    DeleteBlueprintResponse,
    DeleteClassifierResponse,
    DeleteCrawlerResponse,
    DeleteDatabaseResponse,
    DeleteJobResponse,
    DeleteSecurityConfigurationResponse,
    DeleteTableResponse,
    DeleteTriggerResponse,
    DeleteWorkflowResponse,
    GetBlueprintResponse,
    GetClassifierResponse,
    GetConnectionResponse,
    GetCrawlerResponse,
    GetDatabaseResponse,
    GetJobResponse,
    GetJobBookmarkResponse,
    GetJobRunResponse,
    GetJobRunsResponse,
    GetSecurityConfigurationResponse,
    GetTableResponse,
    GetTriggerResponse,
    GetUnfilteredTableMetadataResponse,
    GetWorkflowResponse,
    GetWorkflowRunResponse,
    GetWorkflowRunPropertiesResponse,
    GetWorkflowRunsResponse,
    PutWorkflowRunPropertiesResponse,
    ResetJobBookmarkResponse,
    ResumeWorkflowRunResponse,
    StartBlueprintRunResponse,
    StartCrawlerResponse,
    StartJobRunResponse,
    StartTriggerResponse,
    StartWorkflowRunResponse,
    StopCrawlerResponse,
    StopTriggerResponse,
    StopWorkflowRunResponse,
    UpdateBlueprintResponse,
    UpdateConnectionResponse,
    UpdateCrawlerResponse,
    UpdateDatabaseResponse,
    UpdateJobResponse,
    UpdateRegistryResponse,
    UpdateTriggerResponse,
    UpdateWorkflowResponse
} from "aws-sdk/clients/glue";
const schema = require("../apis/glue-2017-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glue.Job {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.glue.Job>) {
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

    invokeBatchStopJobRun(partialParams: ToOptional<{
      [K in keyof BatchStopJobRunRequest & keyof Omit<BatchStopJobRunRequest, "JobName">]: (BatchStopJobRunRequest)[K]
    }>): Request<BatchStopJobRunResponse, AWSError> {
        this.boot();
        return this.client.batchStopJobRun(
          this.ops["BatchStopJobRun"].apply(partialParams)
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

    invokeCreateDevEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDevEndpointRequest & keyof Omit<CreateDevEndpointRequest, "RoleArn">]: (CreateDevEndpointRequest)[K]
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

    invokeCreateSecurityConfiguration(partialParams: ToOptional<{
      [K in keyof CreateSecurityConfigurationRequest & keyof Omit<CreateSecurityConfigurationRequest, "Name">]: (CreateSecurityConfigurationRequest)[K]
    }>): Request<CreateSecurityConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createSecurityConfiguration(
          this.ops["CreateSecurityConfiguration"].apply(partialParams)
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

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof Omit<DeleteJobRequest, "JobName">]: (DeleteJobRequest)[K]
    }>): Request<DeleteJobResponse, AWSError> {
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].apply(partialParams)
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

    invokeDeleteTrigger(partialParams: ToOptional<{
      [K in keyof DeleteTriggerRequest & keyof Omit<DeleteTriggerRequest, "Name">]: (DeleteTriggerRequest)[K]
    }>): Request<DeleteTriggerResponse, AWSError> {
        this.boot();
        return this.client.deleteTrigger(
          this.ops["DeleteTrigger"].apply(partialParams)
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

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof Omit<GetJobRequest, "JobName">]: (GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetJobBookmark(partialParams: ToOptional<{
      [K in keyof GetJobBookmarkRequest & keyof Omit<GetJobBookmarkRequest, "JobName">]: (GetJobBookmarkRequest)[K]
    }>): Request<GetJobBookmarkResponse, AWSError> {
        this.boot();
        return this.client.getJobBookmark(
          this.ops["GetJobBookmark"].apply(partialParams)
        );
    }

    invokeGetJobRun(partialParams: ToOptional<{
      [K in keyof GetJobRunRequest & keyof Omit<GetJobRunRequest, "JobName">]: (GetJobRunRequest)[K]
    }>): Request<GetJobRunResponse, AWSError> {
        this.boot();
        return this.client.getJobRun(
          this.ops["GetJobRun"].apply(partialParams)
        );
    }

    invokeGetJobRuns(partialParams: ToOptional<{
      [K in keyof GetJobRunsRequest & keyof Omit<GetJobRunsRequest, "JobName">]: (GetJobRunsRequest)[K]
    }>): Request<GetJobRunsResponse, AWSError> {
        this.boot();
        return this.client.getJobRuns(
          this.ops["GetJobRuns"].apply(partialParams)
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
      [K in keyof GetTableRequest & keyof Omit<GetTableRequest, "Name">]: (GetTableRequest)[K]
    }>): Request<GetTableResponse, AWSError> {
        this.boot();
        return this.client.getTable(
          this.ops["GetTable"].apply(partialParams)
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

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredTableMetadataRequest & keyof Omit<GetUnfilteredTableMetadataRequest, "Name">]: (GetUnfilteredTableMetadataRequest)[K]
    }>): Request<GetUnfilteredTableMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredTableMetadata(
          this.ops["GetUnfilteredTableMetadata"].apply(partialParams)
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

    invokeResetJobBookmark(partialParams: ToOptional<{
      [K in keyof ResetJobBookmarkRequest & keyof Omit<ResetJobBookmarkRequest, "JobName">]: (ResetJobBookmarkRequest)[K]
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

    invokeStartBlueprintRun(partialParams: ToOptional<{
      [K in keyof StartBlueprintRunRequest & keyof Omit<StartBlueprintRunRequest, "RoleArn">]: (StartBlueprintRunRequest)[K]
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

    invokeStartJobRun(partialParams: ToOptional<{
      [K in keyof StartJobRunRequest & keyof Omit<StartJobRunRequest, "JobName">]: (StartJobRunRequest)[K]
    }>): Request<StartJobRunResponse, AWSError> {
        this.boot();
        return this.client.startJobRun(
          this.ops["StartJobRun"].apply(partialParams)
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

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest & keyof Omit<UpdateJobRequest, "JobName">]: (UpdateJobRequest)[K]
    }>): Request<UpdateJobResponse, AWSError> {
        this.boot();
        return this.client.updateJob(
          this.ops["UpdateJob"].apply(partialParams)
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

    invokeUpdateTrigger(partialParams: ToOptional<{
      [K in keyof UpdateTriggerRequest & keyof Omit<UpdateTriggerRequest, "Name">]: (UpdateTriggerRequest)[K]
    }>): Request<UpdateTriggerResponse, AWSError> {
        this.boot();
        return this.client.updateTrigger(
          this.ops["UpdateTrigger"].apply(partialParams)
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