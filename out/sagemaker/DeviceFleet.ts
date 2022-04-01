
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAutoMLJobRequest,
    CreateCompilationJobRequest,
    CreateDataQualityJobDefinitionRequest,
    CreateFlowDefinitionRequest,
    CreateImageRequest,
    CreateInferenceRecommendationsJobRequest,
    CreateLabelingJobRequest,
    CreateModelBiasJobDefinitionRequest,
    CreateModelExplainabilityJobDefinitionRequest,
    CreateModelQualityJobDefinitionRequest,
    CreateNotebookInstanceInput,
    CreatePipelineRequest,
    CreateProcessingJobRequest,
    CreateTrainingJobRequest,
    CreateWorkteamRequest,
    DescribeDeviceRequest,
    DescribeDeviceFleetRequest,
    GetDeviceFleetReportRequest,
    RenderUiTemplateRequest,
    CreateAutoMLJobResponse,
    CreateCompilationJobResponse,
    CreateDataQualityJobDefinitionResponse,
    CreateFlowDefinitionResponse,
    CreateImageResponse,
    CreateInferenceRecommendationsJobResponse,
    CreateLabelingJobResponse,
    CreateModelBiasJobDefinitionResponse,
    CreateModelExplainabilityJobDefinitionResponse,
    CreateModelQualityJobDefinitionResponse,
    CreateNotebookInstanceOutput,
    CreatePipelineResponse,
    CreateProcessingJobResponse,
    CreateTrainingJobResponse,
    CreateWorkteamResponse,
    DescribeDeviceResponse,
    DescribeDeviceFleetResponse,
    GetDeviceFleetReportResponse,
    RenderUiTemplateResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.DeviceFleet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.DeviceFleet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateAutoMLJob(partialParams: ToOptional<{
      [K in keyof CreateAutoMLJobRequest & keyof Omit<CreateAutoMLJobRequest, "RoleArn">]: (CreateAutoMLJobRequest)[K]
    }>): Request<CreateAutoMLJobResponse, AWSError> {
        this.boot();
        return this.client.createAutoMLJob(
          this.ops["CreateAutoMLJob"].apply(partialParams)
        );
    }

    invokeCreateCompilationJob(partialParams: ToOptional<{
      [K in keyof CreateCompilationJobRequest & keyof Omit<CreateCompilationJobRequest, "RoleArn">]: (CreateCompilationJobRequest)[K]
    }>): Request<CreateCompilationJobResponse, AWSError> {
        this.boot();
        return this.client.createCompilationJob(
          this.ops["CreateCompilationJob"].apply(partialParams)
        );
    }

    invokeCreateDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateDataQualityJobDefinitionRequest & keyof Omit<CreateDataQualityJobDefinitionRequest, "RoleArn">]: (CreateDataQualityJobDefinitionRequest)[K]
    }>): Request<CreateDataQualityJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.createDataQualityJobDefinition(
          this.ops["CreateDataQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateFlowDefinition(partialParams: ToOptional<{
      [K in keyof CreateFlowDefinitionRequest & keyof Omit<CreateFlowDefinitionRequest, "RoleArn">]: (CreateFlowDefinitionRequest)[K]
    }>): Request<CreateFlowDefinitionResponse, AWSError> {
        this.boot();
        return this.client.createFlowDefinition(
          this.ops["CreateFlowDefinition"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "RoleArn">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResponse, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof CreateInferenceRecommendationsJobRequest & keyof Omit<CreateInferenceRecommendationsJobRequest, "RoleArn">]: (CreateInferenceRecommendationsJobRequest)[K]
    }>): Request<CreateInferenceRecommendationsJobResponse, AWSError> {
        this.boot();
        return this.client.createInferenceRecommendationsJob(
          this.ops["CreateInferenceRecommendationsJob"].apply(partialParams)
        );
    }

    invokeCreateLabelingJob(partialParams: ToOptional<{
      [K in keyof CreateLabelingJobRequest & keyof Omit<CreateLabelingJobRequest, "RoleArn">]: (CreateLabelingJobRequest)[K]
    }>): Request<CreateLabelingJobResponse, AWSError> {
        this.boot();
        return this.client.createLabelingJob(
          this.ops["CreateLabelingJob"].apply(partialParams)
        );
    }

    invokeCreateModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelBiasJobDefinitionRequest & keyof Omit<CreateModelBiasJobDefinitionRequest, "RoleArn">]: (CreateModelBiasJobDefinitionRequest)[K]
    }>): Request<CreateModelBiasJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.createModelBiasJobDefinition(
          this.ops["CreateModelBiasJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelExplainabilityJobDefinitionRequest & keyof Omit<CreateModelExplainabilityJobDefinitionRequest, "RoleArn">]: (CreateModelExplainabilityJobDefinitionRequest)[K]
    }>): Request<CreateModelExplainabilityJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.createModelExplainabilityJobDefinition(
          this.ops["CreateModelExplainabilityJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelQualityJobDefinitionRequest & keyof Omit<CreateModelQualityJobDefinitionRequest, "RoleArn">]: (CreateModelQualityJobDefinitionRequest)[K]
    }>): Request<CreateModelQualityJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.createModelQualityJobDefinition(
          this.ops["CreateModelQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateNotebookInstance(partialParams: ToOptional<{
      [K in keyof CreateNotebookInstanceInput & keyof Omit<CreateNotebookInstanceInput, "RoleArn">]: (CreateNotebookInstanceInput)[K]
    }>): Request<CreateNotebookInstanceOutput, AWSError> {
        this.boot();
        return this.client.createNotebookInstance(
          this.ops["CreateNotebookInstance"].apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof Omit<CreatePipelineRequest, "RoleArn">]: (CreatePipelineRequest)[K]
    }>): Request<CreatePipelineResponse, AWSError> {
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeCreateProcessingJob(partialParams: ToOptional<{
      [K in keyof CreateProcessingJobRequest & keyof Omit<CreateProcessingJobRequest, "RoleArn">]: (CreateProcessingJobRequest)[K]
    }>): Request<CreateProcessingJobResponse, AWSError> {
        this.boot();
        return this.client.createProcessingJob(
          this.ops["CreateProcessingJob"].apply(partialParams)
        );
    }

    invokeCreateTrainingJob(partialParams: ToOptional<{
      [K in keyof CreateTrainingJobRequest & keyof Omit<CreateTrainingJobRequest, "RoleArn">]: (CreateTrainingJobRequest)[K]
    }>): Request<CreateTrainingJobResponse, AWSError> {
        this.boot();
        return this.client.createTrainingJob(
          this.ops["CreateTrainingJob"].apply(partialParams)
        );
    }

    invokeCreateWorkteam(partialParams: ToOptional<{
      [K in keyof CreateWorkteamRequest & keyof Omit<CreateWorkteamRequest, "Description">]: (CreateWorkteamRequest)[K]
    }>): Request<CreateWorkteamResponse, AWSError> {
        this.boot();
        return this.client.createWorkteam(
          this.ops["CreateWorkteam"].apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest & keyof Omit<DescribeDeviceRequest, "DeviceFleetName">]: (DescribeDeviceRequest)[K]
    }>): Request<DescribeDeviceResponse, AWSError> {
        this.boot();
        return this.client.describeDevice(
          this.ops["DescribeDevice"].apply(partialParams)
        );
    }

    invokeDescribeDeviceFleet(partialParams: ToOptional<{
      [K in keyof DescribeDeviceFleetRequest & keyof Omit<DescribeDeviceFleetRequest, "DeviceFleetName">]: (DescribeDeviceFleetRequest)[K]
    }>): Request<DescribeDeviceFleetResponse, AWSError> {
        this.boot();
        return this.client.describeDeviceFleet(
          this.ops["DescribeDeviceFleet"].apply(partialParams)
        );
    }

    invokeGetDeviceFleetReport(partialParams: ToOptional<{
      [K in keyof GetDeviceFleetReportRequest & keyof Omit<GetDeviceFleetReportRequest, "DeviceFleetName">]: (GetDeviceFleetReportRequest)[K]
    }>): Request<GetDeviceFleetReportResponse, AWSError> {
        this.boot();
        return this.client.getDeviceFleetReport(
          this.ops["GetDeviceFleetReport"].apply(partialParams)
        );
    }

    invokeRenderUiTemplate(partialParams: ToOptional<{
      [K in keyof RenderUiTemplateRequest & keyof Omit<RenderUiTemplateRequest, "RoleArn">]: (RenderUiTemplateRequest)[K]
    }>): Request<RenderUiTemplateResponse, AWSError> {
        this.boot();
        return this.client.renderUiTemplate(
          this.ops["RenderUiTemplate"].apply(partialParams)
        );
    }
}