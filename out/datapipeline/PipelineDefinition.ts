
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/datapipeline-2012-10-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datapipeline.PipelineDefinition {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.datapipeline.PipelineDefinition>) {
        super(...args)
        this.client = new awssdk.DataPipeline()
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

    invokeActivatePipeline(partialParams: ToOptional<{
      [K in keyof ActivatePipelineInput]: (ActivatePipelineInput)[K]
    }>): Request<ActivatePipelineOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.activatePipeline(
          this.ops["ActivatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsInput]: (AddTagsInput)[K]
    }>): Request<AddTagsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTags(
          this.ops["AddTags"].applicator.apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineInput]: (CreatePipelineInput)[K]
    }>): Request<CreatePipelineOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeactivatePipeline(partialParams: ToOptional<{
      [K in keyof DeactivatePipelineInput]: (DeactivatePipelineInput)[K]
    }>): Request<DeactivatePipelineOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivatePipeline(
          this.ops["DeactivatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineInput]: (DeletePipelineInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(
          this.ops["DeletePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDescribeObjects(partialParams: ToOptional<{
      [K in keyof DescribeObjectsInput]: (DescribeObjectsInput)[K]
    }>): Request<DescribeObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeObjects(
          this.ops["DescribeObjects"].applicator.apply(partialParams)
        );
    }

    invokeDescribePipelines(partialParams: ToOptional<{
      [K in keyof DescribePipelinesInput]: (DescribePipelinesInput)[K]
    }>): Request<DescribePipelinesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipelines(
          this.ops["DescribePipelines"].applicator.apply(partialParams)
        );
    }

    invokeEvaluateExpression(partialParams: ToOptional<{
      [K in keyof EvaluateExpressionInput]: (EvaluateExpressionInput)[K]
    }>): Request<EvaluateExpressionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.evaluateExpression(
          this.ops["EvaluateExpression"].applicator.apply(partialParams)
        );
    }

    invokeGetPipelineDefinition(partialParams: ToOptional<{
      [K in keyof GetPipelineDefinitionInput]: (GetPipelineDefinitionInput)[K]
    }>): Request<GetPipelineDefinitionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPipelineDefinition(
          this.ops["GetPipelineDefinition"].applicator.apply(partialParams)
        );
    }

    invokePollForTask(partialParams: ToOptional<{
      [K in keyof PollForTaskInput]: (PollForTaskInput)[K]
    }>): Request<PollForTaskOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForTask(
          this.ops["PollForTask"].applicator.apply(partialParams)
        );
    }

    invokePutPipelineDefinition(partialParams: ToOptional<{
      [K in keyof PutPipelineDefinitionInput]: (PutPipelineDefinitionInput)[K]
    }>): Request<PutPipelineDefinitionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPipelineDefinition(
          this.ops["PutPipelineDefinition"].applicator.apply(partialParams)
        );
    }

    invokeQueryObjects(partialParams: ToOptional<{
      [K in keyof QueryObjectsInput]: (QueryObjectsInput)[K]
    }>): Request<QueryObjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.queryObjects(
          this.ops["QueryObjects"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTags(partialParams: ToOptional<{
      [K in keyof RemoveTagsInput]: (RemoveTagsInput)[K]
    }>): Request<RemoveTagsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTags(
          this.ops["RemoveTags"].applicator.apply(partialParams)
        );
    }

    invokeReportTaskProgress(partialParams: ToOptional<{
      [K in keyof ReportTaskProgressInput]: (ReportTaskProgressInput)[K]
    }>): Request<ReportTaskProgressOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reportTaskProgress(
          this.ops["ReportTaskProgress"].applicator.apply(partialParams)
        );
    }

    invokeReportTaskRunnerHeartbeat(partialParams: ToOptional<{
      [K in keyof ReportTaskRunnerHeartbeatInput]: (ReportTaskRunnerHeartbeatInput)[K]
    }>): Request<ReportTaskRunnerHeartbeatOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reportTaskRunnerHeartbeat(
          this.ops["ReportTaskRunnerHeartbeat"].applicator.apply(partialParams)
        );
    }

    invokeSetStatus(partialParams: ToOptional<{
      [K in keyof SetStatusInput]: (SetStatusInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setStatus(
          this.ops["SetStatus"].applicator.apply(partialParams)
        );
    }

    invokeSetTaskStatus(partialParams: ToOptional<{
      [K in keyof SetTaskStatusInput]: (SetTaskStatusInput)[K]
    }>): Request<SetTaskStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTaskStatus(
          this.ops["SetTaskStatus"].applicator.apply(partialParams)
        );
    }

    invokeValidatePipelineDefinition(partialParams: ToOptional<{
      [K in keyof ValidatePipelineDefinitionInput]: (ValidatePipelineDefinitionInput)[K]
    }>): Request<ValidatePipelineDefinitionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validatePipelineDefinition(
          this.ops["ValidatePipelineDefinition"].applicator.apply(partialParams)
        );
    }
}