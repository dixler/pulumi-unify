
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcknowledgeJobInput,
    AcknowledgeThirdPartyJobInput,
    CreateCustomActionTypeInput,
    CreatePipelineInput,
    DeleteCustomActionTypeInput,
    DeletePipelineInput,
    DeleteWebhookInput,
    DisableStageTransitionInput,
    EnableStageTransitionInput,
    GetActionTypeInput,
    GetJobDetailsInput,
    GetPipelineInput,
    GetPipelineExecutionInput,
    GetPipelineStateInput,
    GetThirdPartyJobDetailsInput,
    ListActionExecutionsInput,
    ListPipelineExecutionsInput,
    ListTagsForResourceInput,
    PollForJobsInput,
    PollForThirdPartyJobsInput,
    PutActionRevisionInput,
    PutApprovalResultInput,
    PutJobFailureResultInput,
    PutJobSuccessResultInput,
    PutThirdPartyJobFailureResultInput,
    PutThirdPartyJobSuccessResultInput,
    PutWebhookInput,
    RetryStageExecutionInput,
    StartPipelineExecutionInput,
    StopPipelineExecutionInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateActionTypeInput,
    UpdatePipelineInput,
    AcknowledgeJobOutput,
    AcknowledgeThirdPartyJobOutput,
    CreateCustomActionTypeOutput,
    CreatePipelineOutput,
    DeleteWebhookOutput,
    GetActionTypeOutput,
    GetJobDetailsOutput,
    GetPipelineOutput,
    GetPipelineExecutionOutput,
    GetPipelineStateOutput,
    GetThirdPartyJobDetailsOutput,
    ListActionExecutionsOutput,
    ListPipelineExecutionsOutput,
    ListTagsForResourceOutput,
    PollForJobsOutput,
    PollForThirdPartyJobsOutput,
    PutActionRevisionOutput,
    PutApprovalResultOutput,
    PutWebhookOutput,
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

export default class extends aws.codepipeline.Webhook {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.codepipeline.Webhook>) {
        super(...args)
        this.client = new awssdk.CodePipeline()
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

    invokeAcknowledgeJob(partialParams: ToOptional<{
      [K in keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput]: (AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput)[K]
    }>): Request<AcknowledgeJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acknowledgeJob(
          this.ops["AcknowledgeJob"].applicator.apply(partialParams)
        );
    }

    invokeAcknowledgeThirdPartyJob(partialParams: ToOptional<{
      [K in keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput]: (AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput)[K]
    }>): Request<AcknowledgeThirdPartyJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acknowledgeThirdPartyJob(
          this.ops["AcknowledgeThirdPartyJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomActionType(partialParams: ToOptional<{
      [K in keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput]: (CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput)[K]
    }>): Request<CreateCustomActionTypeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomActionType(
          this.ops["CreateCustomActionType"].applicator.apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput]: (CreatePipelineInput & CreatePipelineInput & CreatePipelineInput & CreatePipelineInput & CreatePipelineInput & CreatePipelineInput)[K]
    }>): Request<CreatePipelineOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomActionType(partialParams: ToOptional<{
      [K in keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput]: (DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomActionType(
          this.ops["DeleteCustomActionType"].applicator.apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput]: (DeletePipelineInput & DeletePipelineInput & DeletePipelineInput & DeletePipelineInput & DeletePipelineInput & DeletePipelineInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(
          this.ops["DeletePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput]: (DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput)[K]
    }>): Request<DeleteWebhookOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].applicator.apply(partialParams)
        );
    }

    invokeDisableStageTransition(partialParams: ToOptional<{
      [K in keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput]: (DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableStageTransition(
          this.ops["DisableStageTransition"].applicator.apply(partialParams)
        );
    }

    invokeEnableStageTransition(partialParams: ToOptional<{
      [K in keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput]: (EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableStageTransition(
          this.ops["EnableStageTransition"].applicator.apply(partialParams)
        );
    }

    invokeGetActionType(partialParams: ToOptional<{
      [K in keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput]: (GetActionTypeInput & GetActionTypeInput & GetActionTypeInput & GetActionTypeInput & GetActionTypeInput & GetActionTypeInput)[K]
    }>): Request<GetActionTypeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getActionType(
          this.ops["GetActionType"].applicator.apply(partialParams)
        );
    }

    invokeGetJobDetails(partialParams: ToOptional<{
      [K in keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput]: (GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput)[K]
    }>): Request<GetJobDetailsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobDetails(
          this.ops["GetJobDetails"].applicator.apply(partialParams)
        );
    }

    invokeGetPipeline(partialParams: ToOptional<{
      [K in keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput]: (GetPipelineInput & GetPipelineInput & GetPipelineInput & GetPipelineInput & GetPipelineInput & GetPipelineInput)[K]
    }>): Request<GetPipelineOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipeline(
          this.ops["GetPipeline"].applicator.apply(partialParams)
        );
    }

    invokeGetPipelineExecution(partialParams: ToOptional<{
      [K in keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput]: (GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput)[K]
    }>): Request<GetPipelineExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipelineExecution(
          this.ops["GetPipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeGetPipelineState(partialParams: ToOptional<{
      [K in keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput]: (GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput)[K]
    }>): Request<GetPipelineStateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipelineState(
          this.ops["GetPipelineState"].applicator.apply(partialParams)
        );
    }

    invokeGetThirdPartyJobDetails(partialParams: ToOptional<{
      [K in keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput]: (GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput)[K]
    }>): Request<GetThirdPartyJobDetailsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getThirdPartyJobDetails(
          this.ops["GetThirdPartyJobDetails"].applicator.apply(partialParams)
        );
    }

    invokeListActionExecutions(partialParams: ToOptional<{
      [K in keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput]: (ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput)[K]
    }>): Request<ListActionExecutionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listActionExecutions(
          this.ops["ListActionExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListPipelineExecutions(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput]: (ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput)[K]
    }>): Request<ListPipelineExecutionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPipelineExecutions(
          this.ops["ListPipelineExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePollForJobs(partialParams: ToOptional<{
      [K in keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput]: (PollForJobsInput & PollForJobsInput & PollForJobsInput & PollForJobsInput & PollForJobsInput & PollForJobsInput)[K]
    }>): Request<PollForJobsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForJobs(
          this.ops["PollForJobs"].applicator.apply(partialParams)
        );
    }

    invokePollForThirdPartyJobs(partialParams: ToOptional<{
      [K in keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput]: (PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput)[K]
    }>): Request<PollForThirdPartyJobsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForThirdPartyJobs(
          this.ops["PollForThirdPartyJobs"].applicator.apply(partialParams)
        );
    }

    invokePutActionRevision(partialParams: ToOptional<{
      [K in keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput]: (PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput)[K]
    }>): Request<PutActionRevisionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putActionRevision(
          this.ops["PutActionRevision"].applicator.apply(partialParams)
        );
    }

    invokePutApprovalResult(partialParams: ToOptional<{
      [K in keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput]: (PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput)[K]
    }>): Request<PutApprovalResultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putApprovalResult(
          this.ops["PutApprovalResult"].applicator.apply(partialParams)
        );
    }

    invokePutJobFailureResult(partialParams: ToOptional<{
      [K in keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput]: (PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putJobFailureResult(
          this.ops["PutJobFailureResult"].applicator.apply(partialParams)
        );
    }

    invokePutJobSuccessResult(partialParams: ToOptional<{
      [K in keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput]: (PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putJobSuccessResult(
          this.ops["PutJobSuccessResult"].applicator.apply(partialParams)
        );
    }

    invokePutThirdPartyJobFailureResult(partialParams: ToOptional<{
      [K in keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput]: (PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putThirdPartyJobFailureResult(
          this.ops["PutThirdPartyJobFailureResult"].applicator.apply(partialParams)
        );
    }

    invokePutThirdPartyJobSuccessResult(partialParams: ToOptional<{
      [K in keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput]: (PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putThirdPartyJobSuccessResult(
          this.ops["PutThirdPartyJobSuccessResult"].applicator.apply(partialParams)
        );
    }

    invokePutWebhook(partialParams: ToOptional<{
      [K in keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput]: (PutWebhookInput & PutWebhookInput & PutWebhookInput & PutWebhookInput & PutWebhookInput & PutWebhookInput)[K]
    }>): Request<PutWebhookOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putWebhook(
          this.ops["PutWebhook"].applicator.apply(partialParams)
        );
    }

    invokeRetryStageExecution(partialParams: ToOptional<{
      [K in keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput]: (RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput)[K]
    }>): Request<RetryStageExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retryStageExecution(
          this.ops["RetryStageExecution"].applicator.apply(partialParams)
        );
    }

    invokeStartPipelineExecution(partialParams: ToOptional<{
      [K in keyof StartPipelineExecutionInput & keyof StartPipelineExecutionInput & keyof Omit<StartPipelineExecutionInput, "name"> & keyof StartPipelineExecutionInput & keyof StartPipelineExecutionInput & keyof StartPipelineExecutionInput]: (StartPipelineExecutionInput & StartPipelineExecutionInput & Omit<StartPipelineExecutionInput, "name"> & StartPipelineExecutionInput & StartPipelineExecutionInput & StartPipelineExecutionInput)[K]
    }>): Request<StartPipelineExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startPipelineExecution(
          this.ops["StartPipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeStopPipelineExecution(partialParams: ToOptional<{
      [K in keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput]: (StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput)[K]
    }>): Request<StopPipelineExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopPipelineExecution(
          this.ops["StopPipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateActionType(partialParams: ToOptional<{
      [K in keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput]: (UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateActionType(
          this.ops["UpdateActionType"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput]: (UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput)[K]
    }>): Request<UpdatePipelineOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipeline(
          this.ops["UpdatePipeline"].applicator.apply(partialParams)
        );
    }
}