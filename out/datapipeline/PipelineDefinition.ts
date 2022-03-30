
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ActivatePipelineInput,
    AddTagsInput,
    CreatePipelineInput,
    DeactivatePipelineInput,
    DeletePipelineInput,
    DescribeObjectsInput,
    DescribePipelinesInput,
    EvaluateExpressionInput,
    GetPipelineDefinitionInput,
    PollForTaskInput,
    PutPipelineDefinitionInput,
    QueryObjectsInput,
    RemoveTagsInput,
    ReportTaskProgressInput,
    ReportTaskRunnerHeartbeatInput,
    SetStatusInput,
    SetTaskStatusInput,
    ValidatePipelineDefinitionInput,
    ActivatePipelineOutput,
    AddTagsOutput,
    CreatePipelineOutput,
    DeactivatePipelineOutput,
    DescribeObjectsOutput,
    DescribePipelinesOutput,
    EvaluateExpressionOutput,
    GetPipelineDefinitionOutput,
    PollForTaskOutput,
    PutPipelineDefinitionOutput,
    QueryObjectsOutput,
    RemoveTagsOutput,
    ReportTaskProgressOutput,
    ReportTaskRunnerHeartbeatOutput,
    SetTaskStatusOutput,
    ValidatePipelineDefinitionOutput
} from "aws-sdk/clients/datapipeline";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datapipeline.PipelineDefinition {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.datapipeline.PipelineDefinition>) {
        super(...args)
        this.client = new awssdk.DataPipeline()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/datapipeline-2012-10-29.normal.json"), this.client)
    }

    invokeActivatePipeline(partialParams: ToOptional<{
      [K in keyof ActivatePipelineInput]: (ActivatePipelineInput)[K]
    }>): ActivatePipelineOutput {
        return this.client.activatePipeline(
            this.ops["ActivatePipeline"].apply(partialParams)
        );
    }

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsInput]: (AddTagsInput)[K]
    }>): AddTagsOutput {
        return this.client.addTags(
            this.ops["AddTags"].apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineInput]: (CreatePipelineInput)[K]
    }>): CreatePipelineOutput {
        return this.client.createPipeline(
            this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeDeactivatePipeline(partialParams: ToOptional<{
      [K in keyof DeactivatePipelineInput]: (DeactivatePipelineInput)[K]
    }>): DeactivatePipelineOutput {
        return this.client.deactivatePipeline(
            this.ops["DeactivatePipeline"].apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineInput]: (DeletePipelineInput)[K]
    }>): void {
        return this.client.deletePipeline(
            this.ops["DeletePipeline"].apply(partialParams)
        );
    }

    invokeDescribeObjects(partialParams: ToOptional<{
      [K in keyof DescribeObjectsInput]: (DescribeObjectsInput)[K]
    }>): DescribeObjectsOutput {
        return this.client.describeObjects(
            this.ops["DescribeObjects"].apply(partialParams)
        );
    }

    invokeDescribePipelines(partialParams: ToOptional<{
      [K in keyof DescribePipelinesInput]: (DescribePipelinesInput)[K]
    }>): DescribePipelinesOutput {
        return this.client.describePipelines(
            this.ops["DescribePipelines"].apply(partialParams)
        );
    }

    invokeEvaluateExpression(partialParams: ToOptional<{
      [K in keyof EvaluateExpressionInput]: (EvaluateExpressionInput)[K]
    }>): EvaluateExpressionOutput {
        return this.client.evaluateExpression(
            this.ops["EvaluateExpression"].apply(partialParams)
        );
    }

    invokeGetPipelineDefinition(partialParams: ToOptional<{
      [K in keyof GetPipelineDefinitionInput]: (GetPipelineDefinitionInput)[K]
    }>): GetPipelineDefinitionOutput {
        return this.client.getPipelineDefinition(
            this.ops["GetPipelineDefinition"].apply(partialParams)
        );
    }

    invokePollForTask(partialParams: ToOptional<{
      [K in keyof PollForTaskInput]: (PollForTaskInput)[K]
    }>): PollForTaskOutput {
        return this.client.pollForTask(
            this.ops["PollForTask"].apply(partialParams)
        );
    }

    invokePutPipelineDefinition(partialParams: ToOptional<{
      [K in keyof PutPipelineDefinitionInput]: (PutPipelineDefinitionInput)[K]
    }>): PutPipelineDefinitionOutput {
        return this.client.putPipelineDefinition(
            this.ops["PutPipelineDefinition"].apply(partialParams)
        );
    }

    invokeQueryObjects(partialParams: ToOptional<{
      [K in keyof QueryObjectsInput]: (QueryObjectsInput)[K]
    }>): QueryObjectsOutput {
        return this.client.queryObjects(
            this.ops["QueryObjects"].apply(partialParams)
        );
    }

    invokeRemoveTags(partialParams: ToOptional<{
      [K in keyof RemoveTagsInput]: (RemoveTagsInput)[K]
    }>): RemoveTagsOutput {
        return this.client.removeTags(
            this.ops["RemoveTags"].apply(partialParams)
        );
    }

    invokeReportTaskProgress(partialParams: ToOptional<{
      [K in keyof ReportTaskProgressInput]: (ReportTaskProgressInput)[K]
    }>): ReportTaskProgressOutput {
        return this.client.reportTaskProgress(
            this.ops["ReportTaskProgress"].apply(partialParams)
        );
    }

    invokeReportTaskRunnerHeartbeat(partialParams: ToOptional<{
      [K in keyof ReportTaskRunnerHeartbeatInput]: (ReportTaskRunnerHeartbeatInput)[K]
    }>): ReportTaskRunnerHeartbeatOutput {
        return this.client.reportTaskRunnerHeartbeat(
            this.ops["ReportTaskRunnerHeartbeat"].apply(partialParams)
        );
    }

    invokeSetStatus(partialParams: ToOptional<{
      [K in keyof SetStatusInput]: (SetStatusInput)[K]
    }>): void {
        return this.client.setStatus(
            this.ops["SetStatus"].apply(partialParams)
        );
    }

    invokeSetTaskStatus(partialParams: ToOptional<{
      [K in keyof SetTaskStatusInput]: (SetTaskStatusInput)[K]
    }>): SetTaskStatusOutput {
        return this.client.setTaskStatus(
            this.ops["SetTaskStatus"].apply(partialParams)
        );
    }

    invokeValidatePipelineDefinition(partialParams: ToOptional<{
      [K in keyof ValidatePipelineDefinitionInput]: (ValidatePipelineDefinitionInput)[K]
    }>): ValidatePipelineDefinitionOutput {
        return this.client.validatePipelineDefinition(
            this.ops["ValidatePipelineDefinition"].apply(partialParams)
        );
    }
}