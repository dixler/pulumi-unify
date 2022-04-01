
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ActivatePipelineInput,
    AddTagsInput,
    CreatePipelineInput,
    DeactivatePipelineInput,
    DescribeObjectsInput,
    DescribePipelinesInput,
    EvaluateExpressionInput,
    GetPipelineDefinitionInput,
    ListPipelinesInput,
    PollForTaskInput,
    PutPipelineDefinitionInput,
    QueryObjectsInput,
    RemoveTagsInput,
    ReportTaskProgressInput,
    ReportTaskRunnerHeartbeatInput,
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
    ListPipelinesOutput,
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

export default class extends aws.datapipeline.Pipeline {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.datapipeline.Pipeline>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DataPipeline()
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

    invokeActivatePipeline(partialParams: ToOptional<{
      [K in keyof ActivatePipelineInput]: (ActivatePipelineInput)[K]
    }>): Request<ActivatePipelineOutput, AWSError> {
        this.boot();
        return this.client.activatePipeline(
          this.ops["ActivatePipeline"].apply(partialParams)
        );
    }

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsInput]: (AddTagsInput)[K]
    }>): Request<AddTagsOutput, AWSError> {
        this.boot();
        return this.client.addTags(
          this.ops["AddTags"].apply(partialParams)
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

    invokeDeactivatePipeline(partialParams: ToOptional<{
      [K in keyof DeactivatePipelineInput]: (DeactivatePipelineInput)[K]
    }>): Request<DeactivatePipelineOutput, AWSError> {
        this.boot();
        return this.client.deactivatePipeline(
          this.ops["DeactivatePipeline"].apply(partialParams)
        );
    }

    invokeDescribeObjects(partialParams: ToOptional<{
      [K in keyof DescribeObjectsInput]: (DescribeObjectsInput)[K]
    }>): Request<DescribeObjectsOutput, AWSError> {
        this.boot();
        return this.client.describeObjects(
          this.ops["DescribeObjects"].apply(partialParams)
        );
    }

    invokeDescribePipelines(partialParams: ToOptional<{
      [K in keyof DescribePipelinesInput]: (DescribePipelinesInput)[K]
    }>): Request<DescribePipelinesOutput, AWSError> {
        this.boot();
        return this.client.describePipelines(
          this.ops["DescribePipelines"].apply(partialParams)
        );
    }

    invokeEvaluateExpression(partialParams: ToOptional<{
      [K in keyof EvaluateExpressionInput]: (EvaluateExpressionInput)[K]
    }>): Request<EvaluateExpressionOutput, AWSError> {
        this.boot();
        return this.client.evaluateExpression(
          this.ops["EvaluateExpression"].apply(partialParams)
        );
    }

    invokeGetPipelineDefinition(partialParams: ToOptional<{
      [K in keyof GetPipelineDefinitionInput]: (GetPipelineDefinitionInput)[K]
    }>): Request<GetPipelineDefinitionOutput, AWSError> {
        this.boot();
        return this.client.getPipelineDefinition(
          this.ops["GetPipelineDefinition"].apply(partialParams)
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

    invokePollForTask(partialParams: ToOptional<{
      [K in keyof PollForTaskInput]: (PollForTaskInput)[K]
    }>): Request<PollForTaskOutput, AWSError> {
        this.boot();
        return this.client.pollForTask(
          this.ops["PollForTask"].apply(partialParams)
        );
    }

    invokePutPipelineDefinition(partialParams: ToOptional<{
      [K in keyof PutPipelineDefinitionInput]: (PutPipelineDefinitionInput)[K]
    }>): Request<PutPipelineDefinitionOutput, AWSError> {
        this.boot();
        return this.client.putPipelineDefinition(
          this.ops["PutPipelineDefinition"].apply(partialParams)
        );
    }

    invokeQueryObjects(partialParams: ToOptional<{
      [K in keyof QueryObjectsInput]: (QueryObjectsInput)[K]
    }>): Request<QueryObjectsOutput, AWSError> {
        this.boot();
        return this.client.queryObjects(
          this.ops["QueryObjects"].apply(partialParams)
        );
    }

    invokeRemoveTags(partialParams: ToOptional<{
      [K in keyof RemoveTagsInput]: (RemoveTagsInput)[K]
    }>): Request<RemoveTagsOutput, AWSError> {
        this.boot();
        return this.client.removeTags(
          this.ops["RemoveTags"].apply(partialParams)
        );
    }

    invokeReportTaskProgress(partialParams: ToOptional<{
      [K in keyof ReportTaskProgressInput]: (ReportTaskProgressInput)[K]
    }>): Request<ReportTaskProgressOutput, AWSError> {
        this.boot();
        return this.client.reportTaskProgress(
          this.ops["ReportTaskProgress"].apply(partialParams)
        );
    }

    invokeReportTaskRunnerHeartbeat(partialParams: ToOptional<{
      [K in keyof ReportTaskRunnerHeartbeatInput]: (ReportTaskRunnerHeartbeatInput)[K]
    }>): Request<ReportTaskRunnerHeartbeatOutput, AWSError> {
        this.boot();
        return this.client.reportTaskRunnerHeartbeat(
          this.ops["ReportTaskRunnerHeartbeat"].apply(partialParams)
        );
    }

    invokeSetTaskStatus(partialParams: ToOptional<{
      [K in keyof SetTaskStatusInput]: (SetTaskStatusInput)[K]
    }>): Request<SetTaskStatusOutput, AWSError> {
        this.boot();
        return this.client.setTaskStatus(
          this.ops["SetTaskStatus"].apply(partialParams)
        );
    }

    invokeValidatePipelineDefinition(partialParams: ToOptional<{
      [K in keyof ValidatePipelineDefinitionInput]: (ValidatePipelineDefinitionInput)[K]
    }>): Request<ValidatePipelineDefinitionOutput, AWSError> {
        this.boot();
        return this.client.validatePipelineDefinition(
          this.ops["ValidatePipelineDefinition"].apply(partialParams)
        );
    }
}