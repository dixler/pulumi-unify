
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codepipeline.Webhook {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.codepipeline.Webhook>) {
        super(...args)
        this.client = new awssdk.CodePipeline()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/codepipeline-2015-07-09.normal.json"), this.client)
    }

    invokeAcknowledgeJob(partialParams: ToOptional<{
      [K in keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput & keyof AcknowledgeJobInput]: (AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput & AcknowledgeJobInput)[K]
    }>): AcknowledgeJobOutput {
        return this.client.acknowledgeJob(
            this.ops["AcknowledgeJob"].apply(partialParams)
        );
    }

    invokeAcknowledgeThirdPartyJob(partialParams: ToOptional<{
      [K in keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput & keyof AcknowledgeThirdPartyJobInput]: (AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput & AcknowledgeThirdPartyJobInput)[K]
    }>): AcknowledgeThirdPartyJobOutput {
        return this.client.acknowledgeThirdPartyJob(
            this.ops["AcknowledgeThirdPartyJob"].apply(partialParams)
        );
    }

    invokeCreateCustomActionType(partialParams: ToOptional<{
      [K in keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput & keyof CreateCustomActionTypeInput]: (CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput & CreateCustomActionTypeInput)[K]
    }>): CreateCustomActionTypeOutput {
        return this.client.createCustomActionType(
            this.ops["CreateCustomActionType"].apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput & keyof CreatePipelineInput]: (CreatePipelineInput & CreatePipelineInput & CreatePipelineInput & CreatePipelineInput & CreatePipelineInput & CreatePipelineInput)[K]
    }>): CreatePipelineOutput {
        return this.client.createPipeline(
            this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeDeleteCustomActionType(partialParams: ToOptional<{
      [K in keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput & keyof DeleteCustomActionTypeInput]: (DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput & DeleteCustomActionTypeInput)[K]
    }>): void {
        return this.client.deleteCustomActionType(
            this.ops["DeleteCustomActionType"].apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput & keyof DeletePipelineInput]: (DeletePipelineInput & DeletePipelineInput & DeletePipelineInput & DeletePipelineInput & DeletePipelineInput & DeletePipelineInput)[K]
    }>): void {
        return this.client.deletePipeline(
            this.ops["DeletePipeline"].apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput]: (DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput)[K]
    }>): DeleteWebhookOutput {
        return this.client.deleteWebhook(
            this.ops["DeleteWebhook"].apply(partialParams)
        );
    }

    invokeDisableStageTransition(partialParams: ToOptional<{
      [K in keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput & keyof DisableStageTransitionInput]: (DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput & DisableStageTransitionInput)[K]
    }>): void {
        return this.client.disableStageTransition(
            this.ops["DisableStageTransition"].apply(partialParams)
        );
    }

    invokeEnableStageTransition(partialParams: ToOptional<{
      [K in keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput & keyof EnableStageTransitionInput]: (EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput & EnableStageTransitionInput)[K]
    }>): void {
        return this.client.enableStageTransition(
            this.ops["EnableStageTransition"].apply(partialParams)
        );
    }

    invokeGetActionType(partialParams: ToOptional<{
      [K in keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput & keyof GetActionTypeInput]: (GetActionTypeInput & GetActionTypeInput & GetActionTypeInput & GetActionTypeInput & GetActionTypeInput & GetActionTypeInput)[K]
    }>): GetActionTypeOutput {
        return this.client.getActionType(
            this.ops["GetActionType"].apply(partialParams)
        );
    }

    invokeGetJobDetails(partialParams: ToOptional<{
      [K in keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput & keyof GetJobDetailsInput]: (GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput & GetJobDetailsInput)[K]
    }>): GetJobDetailsOutput {
        return this.client.getJobDetails(
            this.ops["GetJobDetails"].apply(partialParams)
        );
    }

    invokeGetPipeline(partialParams: ToOptional<{
      [K in keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput & keyof GetPipelineInput]: (GetPipelineInput & GetPipelineInput & GetPipelineInput & GetPipelineInput & GetPipelineInput & GetPipelineInput)[K]
    }>): GetPipelineOutput {
        return this.client.getPipeline(
            this.ops["GetPipeline"].apply(partialParams)
        );
    }

    invokeGetPipelineExecution(partialParams: ToOptional<{
      [K in keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput & keyof GetPipelineExecutionInput]: (GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput & GetPipelineExecutionInput)[K]
    }>): GetPipelineExecutionOutput {
        return this.client.getPipelineExecution(
            this.ops["GetPipelineExecution"].apply(partialParams)
        );
    }

    invokeGetPipelineState(partialParams: ToOptional<{
      [K in keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput & keyof GetPipelineStateInput]: (GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput & GetPipelineStateInput)[K]
    }>): GetPipelineStateOutput {
        return this.client.getPipelineState(
            this.ops["GetPipelineState"].apply(partialParams)
        );
    }

    invokeGetThirdPartyJobDetails(partialParams: ToOptional<{
      [K in keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput & keyof GetThirdPartyJobDetailsInput]: (GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput & GetThirdPartyJobDetailsInput)[K]
    }>): GetThirdPartyJobDetailsOutput {
        return this.client.getThirdPartyJobDetails(
            this.ops["GetThirdPartyJobDetails"].apply(partialParams)
        );
    }

    invokeListActionExecutions(partialParams: ToOptional<{
      [K in keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput & keyof ListActionExecutionsInput]: (ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput & ListActionExecutionsInput)[K]
    }>): ListActionExecutionsOutput {
        return this.client.listActionExecutions(
            this.ops["ListActionExecutions"].apply(partialParams)
        );
    }

    invokeListPipelineExecutions(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput & keyof ListPipelineExecutionsInput]: (ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput & ListPipelineExecutionsInput)[K]
    }>): ListPipelineExecutionsOutput {
        return this.client.listPipelineExecutions(
            this.ops["ListPipelineExecutions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePollForJobs(partialParams: ToOptional<{
      [K in keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput & keyof PollForJobsInput]: (PollForJobsInput & PollForJobsInput & PollForJobsInput & PollForJobsInput & PollForJobsInput & PollForJobsInput)[K]
    }>): PollForJobsOutput {
        return this.client.pollForJobs(
            this.ops["PollForJobs"].apply(partialParams)
        );
    }

    invokePollForThirdPartyJobs(partialParams: ToOptional<{
      [K in keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput & keyof PollForThirdPartyJobsInput]: (PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput & PollForThirdPartyJobsInput)[K]
    }>): PollForThirdPartyJobsOutput {
        return this.client.pollForThirdPartyJobs(
            this.ops["PollForThirdPartyJobs"].apply(partialParams)
        );
    }

    invokePutActionRevision(partialParams: ToOptional<{
      [K in keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput & keyof PutActionRevisionInput]: (PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput & PutActionRevisionInput)[K]
    }>): PutActionRevisionOutput {
        return this.client.putActionRevision(
            this.ops["PutActionRevision"].apply(partialParams)
        );
    }

    invokePutApprovalResult(partialParams: ToOptional<{
      [K in keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput & keyof PutApprovalResultInput]: (PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput & PutApprovalResultInput)[K]
    }>): PutApprovalResultOutput {
        return this.client.putApprovalResult(
            this.ops["PutApprovalResult"].apply(partialParams)
        );
    }

    invokePutJobFailureResult(partialParams: ToOptional<{
      [K in keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput & keyof PutJobFailureResultInput]: (PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput & PutJobFailureResultInput)[K]
    }>): void {
        return this.client.putJobFailureResult(
            this.ops["PutJobFailureResult"].apply(partialParams)
        );
    }

    invokePutJobSuccessResult(partialParams: ToOptional<{
      [K in keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput & keyof PutJobSuccessResultInput]: (PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput & PutJobSuccessResultInput)[K]
    }>): void {
        return this.client.putJobSuccessResult(
            this.ops["PutJobSuccessResult"].apply(partialParams)
        );
    }

    invokePutThirdPartyJobFailureResult(partialParams: ToOptional<{
      [K in keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput & keyof PutThirdPartyJobFailureResultInput]: (PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput & PutThirdPartyJobFailureResultInput)[K]
    }>): void {
        return this.client.putThirdPartyJobFailureResult(
            this.ops["PutThirdPartyJobFailureResult"].apply(partialParams)
        );
    }

    invokePutThirdPartyJobSuccessResult(partialParams: ToOptional<{
      [K in keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput & keyof PutThirdPartyJobSuccessResultInput]: (PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput & PutThirdPartyJobSuccessResultInput)[K]
    }>): void {
        return this.client.putThirdPartyJobSuccessResult(
            this.ops["PutThirdPartyJobSuccessResult"].apply(partialParams)
        );
    }

    invokePutWebhook(partialParams: ToOptional<{
      [K in keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput & keyof PutWebhookInput]: (PutWebhookInput & PutWebhookInput & PutWebhookInput & PutWebhookInput & PutWebhookInput & PutWebhookInput)[K]
    }>): PutWebhookOutput {
        return this.client.putWebhook(
            this.ops["PutWebhook"].apply(partialParams)
        );
    }

    invokeRetryStageExecution(partialParams: ToOptional<{
      [K in keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput & keyof RetryStageExecutionInput]: (RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput & RetryStageExecutionInput)[K]
    }>): RetryStageExecutionOutput {
        return this.client.retryStageExecution(
            this.ops["RetryStageExecution"].apply(partialParams)
        );
    }

    invokeStartPipelineExecution(partialParams: ToOptional<{
      [K in keyof StartPipelineExecutionInput & keyof StartPipelineExecutionInput & keyof Omit<StartPipelineExecutionInput, "name"> & keyof StartPipelineExecutionInput & keyof StartPipelineExecutionInput & keyof StartPipelineExecutionInput]: (StartPipelineExecutionInput & StartPipelineExecutionInput & Omit<StartPipelineExecutionInput, "name"> & StartPipelineExecutionInput & StartPipelineExecutionInput & StartPipelineExecutionInput)[K]
    }>): StartPipelineExecutionOutput {
        return this.client.startPipelineExecution(
            this.ops["StartPipelineExecution"].apply(partialParams)
        );
    }

    invokeStopPipelineExecution(partialParams: ToOptional<{
      [K in keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput & keyof StopPipelineExecutionInput]: (StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput & StopPipelineExecutionInput)[K]
    }>): StopPipelineExecutionOutput {
        return this.client.stopPipelineExecution(
            this.ops["StopPipelineExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateActionType(partialParams: ToOptional<{
      [K in keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput & keyof UpdateActionTypeInput]: (UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput & UpdateActionTypeInput)[K]
    }>): void {
        return this.client.updateActionType(
            this.ops["UpdateActionType"].apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput & keyof UpdatePipelineInput]: (UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput & UpdatePipelineInput)[K]
    }>): UpdatePipelineOutput {
        return this.client.updatePipeline(
            this.ops["UpdatePipeline"].apply(partialParams)
        );
    }
}