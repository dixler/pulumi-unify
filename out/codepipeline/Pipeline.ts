
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcknowledgeJobInput,
    AcknowledgeThirdPartyJobInput,
    CreateCustomActionTypeInput,
    CreatePipelineInput,
    DeleteWebhookInput,
    DeregisterWebhookWithThirdPartyInput,
    GetActionTypeInput,
    GetJobDetailsInput,
    GetPipelineInput,
    GetPipelineExecutionInput,
    GetPipelineStateInput,
    GetThirdPartyJobDetailsInput,
    ListActionExecutionsInput,
    ListActionTypesInput,
    ListPipelineExecutionsInput,
    ListPipelinesInput,
    ListTagsForResourceInput,
    ListWebhooksInput,
    PollForJobsInput,
    PollForThirdPartyJobsInput,
    PutActionRevisionInput,
    PutApprovalResultInput,
    PutWebhookInput,
    RegisterWebhookWithThirdPartyInput,
    RetryStageExecutionInput,
    StartPipelineExecutionInput,
    StopPipelineExecutionInput,
    TagResourceInput,
    UntagResourceInput,
    UpdatePipelineInput,
    AcknowledgeJobOutput,
    AcknowledgeThirdPartyJobOutput,
    CreateCustomActionTypeOutput,
    CreatePipelineOutput,
    DeleteWebhookOutput,
    DeregisterWebhookWithThirdPartyOutput,
    GetActionTypeOutput,
    GetJobDetailsOutput,
    GetPipelineOutput,
    GetPipelineExecutionOutput,
    GetPipelineStateOutput,
    GetThirdPartyJobDetailsOutput,
    ListActionExecutionsOutput,
    ListActionTypesOutput,
    ListPipelineExecutionsOutput,
    ListPipelinesOutput,
    ListTagsForResourceOutput,
    ListWebhooksOutput,
    PollForJobsOutput,
    PollForThirdPartyJobsOutput,
    PutActionRevisionOutput,
    PutApprovalResultOutput,
    PutWebhookOutput,
    RegisterWebhookWithThirdPartyOutput,
    RetryStageExecutionOutput,
    StartPipelineExecutionOutput,
    StopPipelineExecutionOutput,
    TagResourceOutput,
    UntagResourceOutput,
    UpdatePipelineOutput
} from "aws-sdk/clients/codepipeline";
const schema = require("../apis/codepipeline-2015-07-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codepipeline.Pipeline {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.codepipeline.Pipeline>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CodePipeline()
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

    invokeAcknowledgeJob(partialParams: ToOptional<{
      [K in keyof AcknowledgeJobInput]: (AcknowledgeJobInput)[K]
    }>): Request<AcknowledgeJobOutput, AWSError> {
        this.boot();
        return this.client.acknowledgeJob(
          this.ops["AcknowledgeJob"].apply(partialParams)
        );
    }

    invokeAcknowledgeThirdPartyJob(partialParams: ToOptional<{
      [K in keyof AcknowledgeThirdPartyJobInput]: (AcknowledgeThirdPartyJobInput)[K]
    }>): Request<AcknowledgeThirdPartyJobOutput, AWSError> {
        this.boot();
        return this.client.acknowledgeThirdPartyJob(
          this.ops["AcknowledgeThirdPartyJob"].apply(partialParams)
        );
    }

    invokeCreateCustomActionType(partialParams: ToOptional<{
      [K in keyof CreateCustomActionTypeInput]: (CreateCustomActionTypeInput)[K]
    }>): Request<CreateCustomActionTypeOutput, AWSError> {
        this.boot();
        return this.client.createCustomActionType(
          this.ops["CreateCustomActionType"].apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineInput]: (CreatePipelineInput)[K]
    }>): Request<CreatePipelineOutput, AWSError> {
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookInput]: (DeleteWebhookInput)[K]
    }>): Request<DeleteWebhookOutput, AWSError> {
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].apply(partialParams)
        );
    }

    invokeDeregisterWebhookWithThirdParty(partialParams: ToOptional<{
      [K in keyof DeregisterWebhookWithThirdPartyInput]: (DeregisterWebhookWithThirdPartyInput)[K]
    }>): Request<DeregisterWebhookWithThirdPartyOutput, AWSError> {
        this.boot();
        return this.client.deregisterWebhookWithThirdParty(
          this.ops["DeregisterWebhookWithThirdParty"].apply(partialParams)
        );
    }

    invokeGetActionType(partialParams: ToOptional<{
      [K in keyof GetActionTypeInput]: (GetActionTypeInput)[K]
    }>): Request<GetActionTypeOutput, AWSError> {
        this.boot();
        return this.client.getActionType(
          this.ops["GetActionType"].apply(partialParams)
        );
    }

    invokeGetJobDetails(partialParams: ToOptional<{
      [K in keyof GetJobDetailsInput]: (GetJobDetailsInput)[K]
    }>): Request<GetJobDetailsOutput, AWSError> {
        this.boot();
        return this.client.getJobDetails(
          this.ops["GetJobDetails"].apply(partialParams)
        );
    }

    invokeGetPipeline(partialParams: ToOptional<{
      [K in keyof GetPipelineInput]: (GetPipelineInput)[K]
    }>): Request<GetPipelineOutput, AWSError> {
        this.boot();
        return this.client.getPipeline(
          this.ops["GetPipeline"].apply(partialParams)
        );
    }

    invokeGetPipelineExecution(partialParams: ToOptional<{
      [K in keyof GetPipelineExecutionInput]: (GetPipelineExecutionInput)[K]
    }>): Request<GetPipelineExecutionOutput, AWSError> {
        this.boot();
        return this.client.getPipelineExecution(
          this.ops["GetPipelineExecution"].apply(partialParams)
        );
    }

    invokeGetPipelineState(partialParams: ToOptional<{
      [K in keyof GetPipelineStateInput]: (GetPipelineStateInput)[K]
    }>): Request<GetPipelineStateOutput, AWSError> {
        this.boot();
        return this.client.getPipelineState(
          this.ops["GetPipelineState"].apply(partialParams)
        );
    }

    invokeGetThirdPartyJobDetails(partialParams: ToOptional<{
      [K in keyof GetThirdPartyJobDetailsInput]: (GetThirdPartyJobDetailsInput)[K]
    }>): Request<GetThirdPartyJobDetailsOutput, AWSError> {
        this.boot();
        return this.client.getThirdPartyJobDetails(
          this.ops["GetThirdPartyJobDetails"].apply(partialParams)
        );
    }

    invokeListActionExecutions(partialParams: ToOptional<{
      [K in keyof ListActionExecutionsInput]: (ListActionExecutionsInput)[K]
    }>): Request<ListActionExecutionsOutput, AWSError> {
        this.boot();
        return this.client.listActionExecutions(
          this.ops["ListActionExecutions"].apply(partialParams)
        );
    }

    invokeListActionTypes(partialParams: ToOptional<{
      [K in keyof ListActionTypesInput]: (ListActionTypesInput)[K]
    }>): Request<ListActionTypesOutput, AWSError> {
        this.boot();
        return this.client.listActionTypes(
          this.ops["ListActionTypes"].apply(partialParams)
        );
    }

    invokeListPipelineExecutions(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionsInput]: (ListPipelineExecutionsInput)[K]
    }>): Request<ListPipelineExecutionsOutput, AWSError> {
        this.boot();
        return this.client.listPipelineExecutions(
          this.ops["ListPipelineExecutions"].apply(partialParams)
        );
    }

    invokeListPipelines(partialParams: ToOptional<{
      [K in keyof ListPipelinesInput]: (ListPipelinesInput)[K]
    }>): Request<ListPipelinesOutput, AWSError> {
        this.boot();
        return this.client.listPipelines(
          this.ops["ListPipelines"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWebhooks(partialParams: ToOptional<{
      [K in keyof ListWebhooksInput]: (ListWebhooksInput)[K]
    }>): Request<ListWebhooksOutput, AWSError> {
        this.boot();
        return this.client.listWebhooks(
          this.ops["ListWebhooks"].apply(partialParams)
        );
    }

    invokePollForJobs(partialParams: ToOptional<{
      [K in keyof PollForJobsInput]: (PollForJobsInput)[K]
    }>): Request<PollForJobsOutput, AWSError> {
        this.boot();
        return this.client.pollForJobs(
          this.ops["PollForJobs"].apply(partialParams)
        );
    }

    invokePollForThirdPartyJobs(partialParams: ToOptional<{
      [K in keyof PollForThirdPartyJobsInput]: (PollForThirdPartyJobsInput)[K]
    }>): Request<PollForThirdPartyJobsOutput, AWSError> {
        this.boot();
        return this.client.pollForThirdPartyJobs(
          this.ops["PollForThirdPartyJobs"].apply(partialParams)
        );
    }

    invokePutActionRevision(partialParams: ToOptional<{
      [K in keyof PutActionRevisionInput]: (PutActionRevisionInput)[K]
    }>): Request<PutActionRevisionOutput, AWSError> {
        this.boot();
        return this.client.putActionRevision(
          this.ops["PutActionRevision"].apply(partialParams)
        );
    }

    invokePutApprovalResult(partialParams: ToOptional<{
      [K in keyof PutApprovalResultInput]: (PutApprovalResultInput)[K]
    }>): Request<PutApprovalResultOutput, AWSError> {
        this.boot();
        return this.client.putApprovalResult(
          this.ops["PutApprovalResult"].apply(partialParams)
        );
    }

    invokePutWebhook(partialParams: ToOptional<{
      [K in keyof PutWebhookInput]: (PutWebhookInput)[K]
    }>): Request<PutWebhookOutput, AWSError> {
        this.boot();
        return this.client.putWebhook(
          this.ops["PutWebhook"].apply(partialParams)
        );
    }

    invokeRegisterWebhookWithThirdParty(partialParams: ToOptional<{
      [K in keyof RegisterWebhookWithThirdPartyInput]: (RegisterWebhookWithThirdPartyInput)[K]
    }>): Request<RegisterWebhookWithThirdPartyOutput, AWSError> {
        this.boot();
        return this.client.registerWebhookWithThirdParty(
          this.ops["RegisterWebhookWithThirdParty"].apply(partialParams)
        );
    }

    invokeRetryStageExecution(partialParams: ToOptional<{
      [K in keyof RetryStageExecutionInput]: (RetryStageExecutionInput)[K]
    }>): Request<RetryStageExecutionOutput, AWSError> {
        this.boot();
        return this.client.retryStageExecution(
          this.ops["RetryStageExecution"].apply(partialParams)
        );
    }

    invokeStartPipelineExecution(partialParams: ToOptional<{
      [K in keyof StartPipelineExecutionInput]: (StartPipelineExecutionInput)[K]
    }>): Request<StartPipelineExecutionOutput, AWSError> {
        this.boot();
        return this.client.startPipelineExecution(
          this.ops["StartPipelineExecution"].apply(partialParams)
        );
    }

    invokeStopPipelineExecution(partialParams: ToOptional<{
      [K in keyof StopPipelineExecutionInput]: (StopPipelineExecutionInput)[K]
    }>): Request<StopPipelineExecutionOutput, AWSError> {
        this.boot();
        return this.client.stopPipelineExecution(
          this.ops["StopPipelineExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput]: (TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput]: (UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineInput]: (UpdatePipelineInput)[K]
    }>): Request<UpdatePipelineOutput, AWSError> {
        this.boot();
        return this.client.updatePipeline(
          this.ops["UpdatePipeline"].apply(partialParams)
        );
    }
}