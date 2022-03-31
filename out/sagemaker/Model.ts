
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddAssociationRequest,
    AddTagsInput,
    AssociateTrialComponentRequest,
    BatchDescribeModelPackageInput,
    CreateActionRequest,
    CreateAlgorithmInput,
    CreateAppRequest,
    CreateAppImageConfigRequest,
    CreateArtifactRequest,
    CreateAutoMLJobRequest,
    CreateCodeRepositoryInput,
    CreateCompilationJobRequest,
    CreateContextRequest,
    CreateDataQualityJobDefinitionRequest,
    CreateDeviceFleetRequest,
    CreateDomainRequest,
    CreateEdgePackagingJobRequest,
    CreateEndpointInput,
    CreateEndpointConfigInput,
    CreateExperimentRequest,
    CreateFeatureGroupRequest,
    CreateFlowDefinitionRequest,
    CreateHumanTaskUiRequest,
    CreateHyperParameterTuningJobRequest,
    CreateImageRequest,
    CreateImageVersionRequest,
    CreateInferenceRecommendationsJobRequest,
    CreateLabelingJobRequest,
    CreateModelInput,
    CreateModelBiasJobDefinitionRequest,
    CreateModelExplainabilityJobDefinitionRequest,
    CreateModelPackageGroupInput,
    CreateModelQualityJobDefinitionRequest,
    CreateMonitoringScheduleRequest,
    CreateNotebookInstanceInput,
    CreateNotebookInstanceLifecycleConfigInput,
    CreatePipelineRequest,
    CreatePresignedDomainUrlRequest,
    CreatePresignedNotebookInstanceUrlInput,
    CreateProcessingJobRequest,
    CreateProjectInput,
    CreateStudioLifecycleConfigRequest,
    CreateTrainingJobRequest,
    CreateTransformJobRequest,
    CreateTrialRequest,
    CreateTrialComponentRequest,
    CreateUserProfileRequest,
    CreateWorkforceRequest,
    CreateWorkteamRequest,
    DeleteActionRequest,
    DeleteAlgorithmInput,
    DeleteAppRequest,
    DeleteAppImageConfigRequest,
    DeleteAssociationRequest,
    DeleteCodeRepositoryInput,
    DeleteContextRequest,
    DeleteDataQualityJobDefinitionRequest,
    DeleteDeviceFleetRequest,
    DeleteDomainRequest,
    DeleteEndpointInput,
    DeleteEndpointConfigInput,
    DeleteExperimentRequest,
    DeleteFeatureGroupRequest,
    DeleteFlowDefinitionRequest,
    DeleteHumanTaskUiRequest,
    DeleteImageRequest,
    DeleteImageVersionRequest,
    DeleteModelInput,
    DeleteModelBiasJobDefinitionRequest,
    DeleteModelExplainabilityJobDefinitionRequest,
    DeleteModelPackageInput,
    DeleteModelPackageGroupInput,
    DeleteModelPackageGroupPolicyInput,
    DeleteModelQualityJobDefinitionRequest,
    DeleteMonitoringScheduleRequest,
    DeleteNotebookInstanceInput,
    DeleteNotebookInstanceLifecycleConfigInput,
    DeletePipelineRequest,
    DeleteProjectInput,
    DeleteStudioLifecycleConfigRequest,
    DeleteTagsInput,
    DeleteTrialRequest,
    DeleteTrialComponentRequest,
    DeleteUserProfileRequest,
    DeleteWorkforceRequest,
    DeleteWorkteamRequest,
    DeregisterDevicesRequest,
    DescribeActionRequest,
    DescribeAlgorithmInput,
    DescribeAppRequest,
    DescribeAppImageConfigRequest,
    DescribeArtifactRequest,
    DescribeAutoMLJobRequest,
    DescribeCodeRepositoryInput,
    DescribeCompilationJobRequest,
    DescribeContextRequest,
    DescribeDataQualityJobDefinitionRequest,
    DescribeDeviceRequest,
    DescribeDeviceFleetRequest,
    DescribeDomainRequest,
    DescribeEdgePackagingJobRequest,
    DescribeEndpointInput,
    DescribeEndpointConfigInput,
    DescribeExperimentRequest,
    DescribeFeatureGroupRequest,
    DescribeFlowDefinitionRequest,
    DescribeHumanTaskUiRequest,
    DescribeHyperParameterTuningJobRequest,
    DescribeImageRequest,
    DescribeImageVersionRequest,
    DescribeInferenceRecommendationsJobRequest,
    DescribeLabelingJobRequest,
    DescribeLineageGroupRequest,
    DescribeModelInput,
    DescribeModelBiasJobDefinitionRequest,
    DescribeModelExplainabilityJobDefinitionRequest,
    DescribeModelPackageInput,
    DescribeModelPackageGroupInput,
    DescribeModelQualityJobDefinitionRequest,
    DescribeMonitoringScheduleRequest,
    DescribeNotebookInstanceInput,
    DescribeNotebookInstanceLifecycleConfigInput,
    DescribePipelineRequest,
    DescribePipelineDefinitionForExecutionRequest,
    DescribePipelineExecutionRequest,
    DescribeProcessingJobRequest,
    DescribeProjectInput,
    DescribeStudioLifecycleConfigRequest,
    DescribeSubscribedWorkteamRequest,
    DescribeTrainingJobRequest,
    DescribeTransformJobRequest,
    DescribeTrialRequest,
    DescribeTrialComponentRequest,
    DescribeUserProfileRequest,
    DescribeWorkforceRequest,
    DescribeWorkteamRequest,
    DisassociateTrialComponentRequest,
    GetDeviceFleetReportRequest,
    GetLineageGroupPolicyRequest,
    GetModelPackageGroupPolicyInput,
    GetSearchSuggestionsRequest,
    ListCandidatesForAutoMLJobRequest,
    ListImageVersionsRequest,
    ListLabelingJobsForWorkteamRequest,
    ListPipelineExecutionsRequest,
    ListPipelineParametersForExecutionRequest,
    ListTagsInput,
    ListTrainingJobsForHyperParameterTuningJobRequest,
    PutModelPackageGroupPolicyInput,
    QueryLineageRequest,
    RegisterDevicesRequest,
    RenderUiTemplateRequest,
    RetryPipelineExecutionRequest,
    SearchRequest,
    SendPipelineExecutionStepFailureRequest,
    SendPipelineExecutionStepSuccessRequest,
    StartMonitoringScheduleRequest,
    StartNotebookInstanceInput,
    StartPipelineExecutionRequest,
    StopAutoMLJobRequest,
    StopCompilationJobRequest,
    StopEdgePackagingJobRequest,
    StopHyperParameterTuningJobRequest,
    StopInferenceRecommendationsJobRequest,
    StopLabelingJobRequest,
    StopMonitoringScheduleRequest,
    StopNotebookInstanceInput,
    StopPipelineExecutionRequest,
    StopProcessingJobRequest,
    StopTrainingJobRequest,
    StopTransformJobRequest,
    UpdateActionRequest,
    UpdateAppImageConfigRequest,
    UpdateArtifactRequest,
    UpdateCodeRepositoryInput,
    UpdateContextRequest,
    UpdateDeviceFleetRequest,
    UpdateDevicesRequest,
    UpdateDomainRequest,
    UpdateEndpointInput,
    UpdateEndpointWeightsAndCapacitiesInput,
    UpdateExperimentRequest,
    UpdateImageRequest,
    UpdateModelPackageInput,
    UpdateMonitoringScheduleRequest,
    UpdateNotebookInstanceInput,
    UpdateNotebookInstanceLifecycleConfigInput,
    UpdatePipelineRequest,
    UpdatePipelineExecutionRequest,
    UpdateProjectInput,
    UpdateTrainingJobRequest,
    UpdateTrialRequest,
    UpdateTrialComponentRequest,
    UpdateUserProfileRequest,
    UpdateWorkforceRequest,
    UpdateWorkteamRequest,
    AddAssociationResponse,
    AddTagsOutput,
    AssociateTrialComponentResponse,
    BatchDescribeModelPackageOutput,
    CreateActionResponse,
    CreateAlgorithmOutput,
    CreateAppResponse,
    CreateAppImageConfigResponse,
    CreateArtifactResponse,
    CreateAutoMLJobResponse,
    CreateCodeRepositoryOutput,
    CreateCompilationJobResponse,
    CreateContextResponse,
    CreateDataQualityJobDefinitionResponse,
    CreateDomainResponse,
    CreateEndpointOutput,
    CreateEndpointConfigOutput,
    CreateExperimentResponse,
    CreateFeatureGroupResponse,
    CreateFlowDefinitionResponse,
    CreateHumanTaskUiResponse,
    CreateHyperParameterTuningJobResponse,
    CreateImageResponse,
    CreateImageVersionResponse,
    CreateInferenceRecommendationsJobResponse,
    CreateLabelingJobResponse,
    CreateModelOutput,
    CreateModelBiasJobDefinitionResponse,
    CreateModelExplainabilityJobDefinitionResponse,
    CreateModelPackageGroupOutput,
    CreateModelQualityJobDefinitionResponse,
    CreateMonitoringScheduleResponse,
    CreateNotebookInstanceOutput,
    CreateNotebookInstanceLifecycleConfigOutput,
    CreatePipelineResponse,
    CreatePresignedDomainUrlResponse,
    CreatePresignedNotebookInstanceUrlOutput,
    CreateProcessingJobResponse,
    CreateProjectOutput,
    CreateStudioLifecycleConfigResponse,
    CreateTrainingJobResponse,
    CreateTransformJobResponse,
    CreateTrialResponse,
    CreateTrialComponentResponse,
    CreateUserProfileResponse,
    CreateWorkforceResponse,
    CreateWorkteamResponse,
    DeleteActionResponse,
    DeleteAssociationResponse,
    DeleteContextResponse,
    DeleteExperimentResponse,
    DeleteFlowDefinitionResponse,
    DeleteHumanTaskUiResponse,
    DeleteImageResponse,
    DeleteImageVersionResponse,
    DeletePipelineResponse,
    DeleteTagsOutput,
    DeleteTrialResponse,
    DeleteTrialComponentResponse,
    DeleteWorkforceResponse,
    DeleteWorkteamResponse,
    DescribeActionResponse,
    DescribeAlgorithmOutput,
    DescribeAppResponse,
    DescribeAppImageConfigResponse,
    DescribeArtifactResponse,
    DescribeAutoMLJobResponse,
    DescribeCodeRepositoryOutput,
    DescribeCompilationJobResponse,
    DescribeContextResponse,
    DescribeDataQualityJobDefinitionResponse,
    DescribeDeviceResponse,
    DescribeDeviceFleetResponse,
    DescribeDomainResponse,
    DescribeEdgePackagingJobResponse,
    DescribeEndpointOutput,
    DescribeEndpointConfigOutput,
    DescribeExperimentResponse,
    DescribeFeatureGroupResponse,
    DescribeFlowDefinitionResponse,
    DescribeHumanTaskUiResponse,
    DescribeHyperParameterTuningJobResponse,
    DescribeImageResponse,
    DescribeImageVersionResponse,
    DescribeInferenceRecommendationsJobResponse,
    DescribeLabelingJobResponse,
    DescribeLineageGroupResponse,
    DescribeModelOutput,
    DescribeModelBiasJobDefinitionResponse,
    DescribeModelExplainabilityJobDefinitionResponse,
    DescribeModelPackageOutput,
    DescribeModelPackageGroupOutput,
    DescribeModelQualityJobDefinitionResponse,
    DescribeMonitoringScheduleResponse,
    DescribeNotebookInstanceOutput,
    DescribeNotebookInstanceLifecycleConfigOutput,
    DescribePipelineResponse,
    DescribePipelineDefinitionForExecutionResponse,
    DescribePipelineExecutionResponse,
    DescribeProcessingJobResponse,
    DescribeProjectOutput,
    DescribeStudioLifecycleConfigResponse,
    DescribeSubscribedWorkteamResponse,
    DescribeTrainingJobResponse,
    DescribeTransformJobResponse,
    DescribeTrialResponse,
    DescribeTrialComponentResponse,
    DescribeUserProfileResponse,
    DescribeWorkforceResponse,
    DescribeWorkteamResponse,
    DisassociateTrialComponentResponse,
    GetDeviceFleetReportResponse,
    GetLineageGroupPolicyResponse,
    GetModelPackageGroupPolicyOutput,
    GetSearchSuggestionsResponse,
    ListCandidatesForAutoMLJobResponse,
    ListImageVersionsResponse,
    ListLabelingJobsForWorkteamResponse,
    ListPipelineExecutionsResponse,
    ListPipelineParametersForExecutionResponse,
    ListTagsOutput,
    ListTrainingJobsForHyperParameterTuningJobResponse,
    PutModelPackageGroupPolicyOutput,
    QueryLineageResponse,
    RenderUiTemplateResponse,
    RetryPipelineExecutionResponse,
    SearchResponse,
    SendPipelineExecutionStepFailureResponse,
    SendPipelineExecutionStepSuccessResponse,
    StartPipelineExecutionResponse,
    StopPipelineExecutionResponse,
    UpdateActionResponse,
    UpdateAppImageConfigResponse,
    UpdateArtifactResponse,
    UpdateCodeRepositoryOutput,
    UpdateContextResponse,
    UpdateDomainResponse,
    UpdateEndpointOutput,
    UpdateEndpointWeightsAndCapacitiesOutput,
    UpdateExperimentResponse,
    UpdateImageResponse,
    UpdateModelPackageOutput,
    UpdateMonitoringScheduleResponse,
    UpdateNotebookInstanceOutput,
    UpdateNotebookInstanceLifecycleConfigOutput,
    UpdatePipelineResponse,
    UpdatePipelineExecutionResponse,
    UpdateProjectOutput,
    UpdateTrainingJobResponse,
    UpdateTrialResponse,
    UpdateTrialComponentResponse,
    UpdateUserProfileResponse,
    UpdateWorkforceResponse,
    UpdateWorkteamResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.Model {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.Model>) {
        super(...args)
        this.client = new awssdk.SageMaker()
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

    invokeAddAssociation(partialParams: ToOptional<{
      [K in keyof AddAssociationRequest & keyof AddAssociationRequest & keyof AddAssociationRequest]: (AddAssociationRequest & AddAssociationRequest & AddAssociationRequest)[K]
    }>): Request<AddAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addAssociation(
          this.ops["AddAssociation"].applicator.apply(partialParams)
        );
    }

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsInput & keyof AddTagsInput & keyof AddTagsInput]: (AddTagsInput & AddTagsInput & AddTagsInput)[K]
    }>): Request<AddTagsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTags(
          this.ops["AddTags"].applicator.apply(partialParams)
        );
    }

    invokeAssociateTrialComponent(partialParams: ToOptional<{
      [K in keyof AssociateTrialComponentRequest & keyof AssociateTrialComponentRequest & keyof AssociateTrialComponentRequest]: (AssociateTrialComponentRequest & AssociateTrialComponentRequest & AssociateTrialComponentRequest)[K]
    }>): Request<AssociateTrialComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTrialComponent(
          this.ops["AssociateTrialComponent"].applicator.apply(partialParams)
        );
    }

    invokeBatchDescribeModelPackage(partialParams: ToOptional<{
      [K in keyof BatchDescribeModelPackageInput & keyof BatchDescribeModelPackageInput & keyof BatchDescribeModelPackageInput]: (BatchDescribeModelPackageInput & BatchDescribeModelPackageInput & BatchDescribeModelPackageInput)[K]
    }>): Request<BatchDescribeModelPackageOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDescribeModelPackage(
          this.ops["BatchDescribeModelPackage"].applicator.apply(partialParams)
        );
    }

    invokeCreateAction(partialParams: ToOptional<{
      [K in keyof CreateActionRequest & keyof CreateActionRequest & keyof CreateActionRequest]: (CreateActionRequest & CreateActionRequest & CreateActionRequest)[K]
    }>): Request<CreateActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAction(
          this.ops["CreateAction"].applicator.apply(partialParams)
        );
    }

    invokeCreateAlgorithm(partialParams: ToOptional<{
      [K in keyof CreateAlgorithmInput & keyof CreateAlgorithmInput & keyof CreateAlgorithmInput]: (CreateAlgorithmInput & CreateAlgorithmInput & CreateAlgorithmInput)[K]
    }>): Request<CreateAlgorithmOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlgorithm(
          this.ops["CreateAlgorithm"].applicator.apply(partialParams)
        );
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): Request<CreateAppResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].applicator.apply(partialParams)
        );
    }

    invokeCreateAppImageConfig(partialParams: ToOptional<{
      [K in keyof CreateAppImageConfigRequest & keyof CreateAppImageConfigRequest & keyof CreateAppImageConfigRequest]: (CreateAppImageConfigRequest & CreateAppImageConfigRequest & CreateAppImageConfigRequest)[K]
    }>): Request<CreateAppImageConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppImageConfig(
          this.ops["CreateAppImageConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateArtifact(partialParams: ToOptional<{
      [K in keyof CreateArtifactRequest & keyof CreateArtifactRequest & keyof CreateArtifactRequest]: (CreateArtifactRequest & CreateArtifactRequest & CreateArtifactRequest)[K]
    }>): Request<CreateArtifactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createArtifact(
          this.ops["CreateArtifact"].applicator.apply(partialParams)
        );
    }

    invokeCreateAutoMLJob(partialParams: ToOptional<{
      [K in keyof CreateAutoMLJobRequest & keyof CreateAutoMLJobRequest & keyof CreateAutoMLJobRequest]: (CreateAutoMLJobRequest & CreateAutoMLJobRequest & CreateAutoMLJobRequest)[K]
    }>): Request<CreateAutoMLJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAutoMLJob(
          this.ops["CreateAutoMLJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateCodeRepository(partialParams: ToOptional<{
      [K in keyof CreateCodeRepositoryInput & keyof CreateCodeRepositoryInput & keyof CreateCodeRepositoryInput]: (CreateCodeRepositoryInput & CreateCodeRepositoryInput & CreateCodeRepositoryInput)[K]
    }>): Request<CreateCodeRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCodeRepository(
          this.ops["CreateCodeRepository"].applicator.apply(partialParams)
        );
    }

    invokeCreateCompilationJob(partialParams: ToOptional<{
      [K in keyof CreateCompilationJobRequest & keyof CreateCompilationJobRequest & keyof CreateCompilationJobRequest]: (CreateCompilationJobRequest & CreateCompilationJobRequest & CreateCompilationJobRequest)[K]
    }>): Request<CreateCompilationJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCompilationJob(
          this.ops["CreateCompilationJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateContext(partialParams: ToOptional<{
      [K in keyof CreateContextRequest & keyof CreateContextRequest & keyof CreateContextRequest]: (CreateContextRequest & CreateContextRequest & CreateContextRequest)[K]
    }>): Request<CreateContextResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContext(
          this.ops["CreateContext"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateDataQualityJobDefinitionRequest & keyof CreateDataQualityJobDefinitionRequest & keyof CreateDataQualityJobDefinitionRequest]: (CreateDataQualityJobDefinitionRequest & CreateDataQualityJobDefinitionRequest & CreateDataQualityJobDefinitionRequest)[K]
    }>): Request<CreateDataQualityJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataQualityJobDefinition(
          this.ops["CreateDataQualityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeviceFleet(partialParams: ToOptional<{
      [K in keyof CreateDeviceFleetRequest & keyof CreateDeviceFleetRequest & keyof CreateDeviceFleetRequest]: (CreateDeviceFleetRequest & CreateDeviceFleetRequest & CreateDeviceFleetRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeviceFleet(
          this.ops["CreateDeviceFleet"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest & CreateDomainRequest)[K]
    }>): Request<CreateDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].applicator.apply(partialParams)
        );
    }

    invokeCreateEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof CreateEdgePackagingJobRequest & keyof CreateEdgePackagingJobRequest & keyof CreateEdgePackagingJobRequest]: (CreateEdgePackagingJobRequest & CreateEdgePackagingJobRequest & CreateEdgePackagingJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEdgePackagingJob(
          this.ops["CreateEdgePackagingJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointInput & keyof CreateEndpointInput & keyof CreateEndpointInput]: (CreateEndpointInput & CreateEndpointInput & CreateEndpointInput)[K]
    }>): Request<CreateEndpointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateEndpointConfig(partialParams: ToOptional<{
      [K in keyof CreateEndpointConfigInput & keyof CreateEndpointConfigInput & keyof CreateEndpointConfigInput]: (CreateEndpointConfigInput & CreateEndpointConfigInput & CreateEndpointConfigInput)[K]
    }>): Request<CreateEndpointConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpointConfig(
          this.ops["CreateEndpointConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateExperiment(partialParams: ToOptional<{
      [K in keyof CreateExperimentRequest & keyof CreateExperimentRequest & keyof CreateExperimentRequest]: (CreateExperimentRequest & CreateExperimentRequest & CreateExperimentRequest)[K]
    }>): Request<CreateExperimentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createExperiment(
          this.ops["CreateExperiment"].applicator.apply(partialParams)
        );
    }

    invokeCreateFeatureGroup(partialParams: ToOptional<{
      [K in keyof CreateFeatureGroupRequest & keyof CreateFeatureGroupRequest & keyof CreateFeatureGroupRequest]: (CreateFeatureGroupRequest & CreateFeatureGroupRequest & CreateFeatureGroupRequest)[K]
    }>): Request<CreateFeatureGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFeatureGroup(
          this.ops["CreateFeatureGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateFlowDefinition(partialParams: ToOptional<{
      [K in keyof CreateFlowDefinitionRequest & keyof CreateFlowDefinitionRequest & keyof CreateFlowDefinitionRequest]: (CreateFlowDefinitionRequest & CreateFlowDefinitionRequest & CreateFlowDefinitionRequest)[K]
    }>): Request<CreateFlowDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFlowDefinition(
          this.ops["CreateFlowDefinition"].applicator.apply(partialParams)
        );
    }

    invokeCreateHumanTaskUi(partialParams: ToOptional<{
      [K in keyof CreateHumanTaskUiRequest & keyof CreateHumanTaskUiRequest & keyof CreateHumanTaskUiRequest]: (CreateHumanTaskUiRequest & CreateHumanTaskUiRequest & CreateHumanTaskUiRequest)[K]
    }>): Request<CreateHumanTaskUiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHumanTaskUi(
          this.ops["CreateHumanTaskUi"].applicator.apply(partialParams)
        );
    }

    invokeCreateHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof CreateHyperParameterTuningJobRequest & keyof CreateHyperParameterTuningJobRequest & keyof CreateHyperParameterTuningJobRequest]: (CreateHyperParameterTuningJobRequest & CreateHyperParameterTuningJobRequest & CreateHyperParameterTuningJobRequest)[K]
    }>): Request<CreateHyperParameterTuningJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHyperParameterTuningJob(
          this.ops["CreateHyperParameterTuningJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest]: (CreateImageRequest & CreateImageRequest & CreateImageRequest)[K]
    }>): Request<CreateImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateImageVersion(partialParams: ToOptional<{
      [K in keyof CreateImageVersionRequest & keyof CreateImageVersionRequest & keyof CreateImageVersionRequest]: (CreateImageVersionRequest & CreateImageVersionRequest & CreateImageVersionRequest)[K]
    }>): Request<CreateImageVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImageVersion(
          this.ops["CreateImageVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof CreateInferenceRecommendationsJobRequest & keyof CreateInferenceRecommendationsJobRequest & keyof CreateInferenceRecommendationsJobRequest]: (CreateInferenceRecommendationsJobRequest & CreateInferenceRecommendationsJobRequest & CreateInferenceRecommendationsJobRequest)[K]
    }>): Request<CreateInferenceRecommendationsJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInferenceRecommendationsJob(
          this.ops["CreateInferenceRecommendationsJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateLabelingJob(partialParams: ToOptional<{
      [K in keyof CreateLabelingJobRequest & keyof CreateLabelingJobRequest & keyof CreateLabelingJobRequest]: (CreateLabelingJobRequest & CreateLabelingJobRequest & CreateLabelingJobRequest)[K]
    }>): Request<CreateLabelingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLabelingJob(
          this.ops["CreateLabelingJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelInput & keyof CreateModelInput & keyof CreateModelInput]: (CreateModelInput & CreateModelInput & CreateModelInput)[K]
    }>): Request<CreateModelOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].applicator.apply(partialParams)
        );
    }

    invokeCreateModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelBiasJobDefinitionRequest & keyof CreateModelBiasJobDefinitionRequest & keyof CreateModelBiasJobDefinitionRequest]: (CreateModelBiasJobDefinitionRequest & CreateModelBiasJobDefinitionRequest & CreateModelBiasJobDefinitionRequest)[K]
    }>): Request<CreateModelBiasJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelBiasJobDefinition(
          this.ops["CreateModelBiasJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeCreateModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelExplainabilityJobDefinitionRequest & keyof CreateModelExplainabilityJobDefinitionRequest & keyof CreateModelExplainabilityJobDefinitionRequest]: (CreateModelExplainabilityJobDefinitionRequest & CreateModelExplainabilityJobDefinitionRequest & CreateModelExplainabilityJobDefinitionRequest)[K]
    }>): Request<CreateModelExplainabilityJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelExplainabilityJobDefinition(
          this.ops["CreateModelExplainabilityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeCreateModelPackageGroup(partialParams: ToOptional<{
      [K in keyof CreateModelPackageGroupInput & keyof CreateModelPackageGroupInput & keyof CreateModelPackageGroupInput]: (CreateModelPackageGroupInput & CreateModelPackageGroupInput & CreateModelPackageGroupInput)[K]
    }>): Request<CreateModelPackageGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelPackageGroup(
          this.ops["CreateModelPackageGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelQualityJobDefinitionRequest & keyof CreateModelQualityJobDefinitionRequest & keyof CreateModelQualityJobDefinitionRequest]: (CreateModelQualityJobDefinitionRequest & CreateModelQualityJobDefinitionRequest & CreateModelQualityJobDefinitionRequest)[K]
    }>): Request<CreateModelQualityJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelQualityJobDefinition(
          this.ops["CreateModelQualityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeCreateMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof CreateMonitoringScheduleRequest & keyof CreateMonitoringScheduleRequest & keyof CreateMonitoringScheduleRequest]: (CreateMonitoringScheduleRequest & CreateMonitoringScheduleRequest & CreateMonitoringScheduleRequest)[K]
    }>): Request<CreateMonitoringScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMonitoringSchedule(
          this.ops["CreateMonitoringSchedule"].applicator.apply(partialParams)
        );
    }

    invokeCreateNotebookInstance(partialParams: ToOptional<{
      [K in keyof CreateNotebookInstanceInput & keyof CreateNotebookInstanceInput & keyof CreateNotebookInstanceInput]: (CreateNotebookInstanceInput & CreateNotebookInstanceInput & CreateNotebookInstanceInput)[K]
    }>): Request<CreateNotebookInstanceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNotebookInstance(
          this.ops["CreateNotebookInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof CreateNotebookInstanceLifecycleConfigInput & keyof CreateNotebookInstanceLifecycleConfigInput & keyof CreateNotebookInstanceLifecycleConfigInput]: (CreateNotebookInstanceLifecycleConfigInput & CreateNotebookInstanceLifecycleConfigInput & CreateNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<CreateNotebookInstanceLifecycleConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNotebookInstanceLifecycleConfig(
          this.ops["CreateNotebookInstanceLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest]: (CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest)[K]
    }>): Request<CreatePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeCreatePresignedDomainUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedDomainUrlRequest & keyof CreatePresignedDomainUrlRequest & keyof CreatePresignedDomainUrlRequest]: (CreatePresignedDomainUrlRequest & CreatePresignedDomainUrlRequest & CreatePresignedDomainUrlRequest)[K]
    }>): Request<CreatePresignedDomainUrlResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPresignedDomainUrl(
          this.ops["CreatePresignedDomainUrl"].applicator.apply(partialParams)
        );
    }

    invokeCreatePresignedNotebookInstanceUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedNotebookInstanceUrlInput & keyof CreatePresignedNotebookInstanceUrlInput & keyof CreatePresignedNotebookInstanceUrlInput]: (CreatePresignedNotebookInstanceUrlInput & CreatePresignedNotebookInstanceUrlInput & CreatePresignedNotebookInstanceUrlInput)[K]
    }>): Request<CreatePresignedNotebookInstanceUrlOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPresignedNotebookInstanceUrl(
          this.ops["CreatePresignedNotebookInstanceUrl"].applicator.apply(partialParams)
        );
    }

    invokeCreateProcessingJob(partialParams: ToOptional<{
      [K in keyof CreateProcessingJobRequest & keyof CreateProcessingJobRequest & keyof CreateProcessingJobRequest]: (CreateProcessingJobRequest & CreateProcessingJobRequest & CreateProcessingJobRequest)[K]
    }>): Request<CreateProcessingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProcessingJob(
          this.ops["CreateProcessingJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput]: (CreateProjectInput & CreateProjectInput & CreateProjectInput)[K]
    }>): Request<CreateProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].applicator.apply(partialParams)
        );
    }

    invokeCreateStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof CreateStudioLifecycleConfigRequest & keyof CreateStudioLifecycleConfigRequest & keyof CreateStudioLifecycleConfigRequest]: (CreateStudioLifecycleConfigRequest & CreateStudioLifecycleConfigRequest & CreateStudioLifecycleConfigRequest)[K]
    }>): Request<CreateStudioLifecycleConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStudioLifecycleConfig(
          this.ops["CreateStudioLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrainingJob(partialParams: ToOptional<{
      [K in keyof CreateTrainingJobRequest & keyof CreateTrainingJobRequest & keyof CreateTrainingJobRequest]: (CreateTrainingJobRequest & CreateTrainingJobRequest & CreateTrainingJobRequest)[K]
    }>): Request<CreateTrainingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrainingJob(
          this.ops["CreateTrainingJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransformJob(partialParams: ToOptional<{
      [K in keyof CreateTransformJobRequest & keyof CreateTransformJobRequest & keyof CreateTransformJobRequest]: (CreateTransformJobRequest & CreateTransformJobRequest & CreateTransformJobRequest)[K]
    }>): Request<CreateTransformJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransformJob(
          this.ops["CreateTransformJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrial(partialParams: ToOptional<{
      [K in keyof CreateTrialRequest & keyof CreateTrialRequest & keyof CreateTrialRequest]: (CreateTrialRequest & CreateTrialRequest & CreateTrialRequest)[K]
    }>): Request<CreateTrialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrial(
          this.ops["CreateTrial"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrialComponent(partialParams: ToOptional<{
      [K in keyof CreateTrialComponentRequest & keyof CreateTrialComponentRequest & keyof CreateTrialComponentRequest]: (CreateTrialComponentRequest & CreateTrialComponentRequest & CreateTrialComponentRequest)[K]
    }>): Request<CreateTrialComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrialComponent(
          this.ops["CreateTrialComponent"].applicator.apply(partialParams)
        );
    }

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest]: (CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest)[K]
    }>): Request<CreateUserProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserProfile(
          this.ops["CreateUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkforce(partialParams: ToOptional<{
      [K in keyof CreateWorkforceRequest & keyof CreateWorkforceRequest & keyof CreateWorkforceRequest]: (CreateWorkforceRequest & CreateWorkforceRequest & CreateWorkforceRequest)[K]
    }>): Request<CreateWorkforceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkforce(
          this.ops["CreateWorkforce"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkteam(partialParams: ToOptional<{
      [K in keyof CreateWorkteamRequest & keyof CreateWorkteamRequest & keyof CreateWorkteamRequest]: (CreateWorkteamRequest & CreateWorkteamRequest & CreateWorkteamRequest)[K]
    }>): Request<CreateWorkteamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkteam(
          this.ops["CreateWorkteam"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAction(partialParams: ToOptional<{
      [K in keyof DeleteActionRequest & keyof DeleteActionRequest & keyof DeleteActionRequest]: (DeleteActionRequest & DeleteActionRequest & DeleteActionRequest)[K]
    }>): Request<DeleteActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAction(
          this.ops["DeleteAction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAlgorithm(partialParams: ToOptional<{
      [K in keyof DeleteAlgorithmInput & keyof DeleteAlgorithmInput & keyof DeleteAlgorithmInput]: (DeleteAlgorithmInput & DeleteAlgorithmInput & DeleteAlgorithmInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlgorithm(
          this.ops["DeleteAlgorithm"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAppImageConfig(partialParams: ToOptional<{
      [K in keyof DeleteAppImageConfigRequest & keyof DeleteAppImageConfigRequest & keyof DeleteAppImageConfigRequest]: (DeleteAppImageConfigRequest & DeleteAppImageConfigRequest & DeleteAppImageConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppImageConfig(
          this.ops["DeleteAppImageConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAssociation(partialParams: ToOptional<{
      [K in keyof DeleteAssociationRequest & keyof DeleteAssociationRequest & keyof DeleteAssociationRequest]: (DeleteAssociationRequest & DeleteAssociationRequest & DeleteAssociationRequest)[K]
    }>): Request<DeleteAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssociation(
          this.ops["DeleteAssociation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCodeRepository(partialParams: ToOptional<{
      [K in keyof DeleteCodeRepositoryInput & keyof DeleteCodeRepositoryInput & keyof DeleteCodeRepositoryInput]: (DeleteCodeRepositoryInput & DeleteCodeRepositoryInput & DeleteCodeRepositoryInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCodeRepository(
          this.ops["DeleteCodeRepository"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContext(partialParams: ToOptional<{
      [K in keyof DeleteContextRequest & keyof DeleteContextRequest & keyof DeleteContextRequest]: (DeleteContextRequest & DeleteContextRequest & DeleteContextRequest)[K]
    }>): Request<DeleteContextResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContext(
          this.ops["DeleteContext"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteDataQualityJobDefinitionRequest & keyof DeleteDataQualityJobDefinitionRequest & keyof DeleteDataQualityJobDefinitionRequest]: (DeleteDataQualityJobDefinitionRequest & DeleteDataQualityJobDefinitionRequest & DeleteDataQualityJobDefinitionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataQualityJobDefinition(
          this.ops["DeleteDataQualityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDeviceFleet(partialParams: ToOptional<{
      [K in keyof DeleteDeviceFleetRequest & keyof DeleteDeviceFleetRequest & keyof DeleteDeviceFleetRequest]: (DeleteDeviceFleetRequest & DeleteDeviceFleetRequest & DeleteDeviceFleetRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeviceFleet(
          this.ops["DeleteDeviceFleet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput]: (DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpointConfig(partialParams: ToOptional<{
      [K in keyof DeleteEndpointConfigInput & keyof DeleteEndpointConfigInput & keyof DeleteEndpointConfigInput]: (DeleteEndpointConfigInput & DeleteEndpointConfigInput & DeleteEndpointConfigInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpointConfig(
          this.ops["DeleteEndpointConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteExperiment(partialParams: ToOptional<{
      [K in keyof DeleteExperimentRequest & keyof DeleteExperimentRequest & keyof DeleteExperimentRequest]: (DeleteExperimentRequest & DeleteExperimentRequest & DeleteExperimentRequest)[K]
    }>): Request<DeleteExperimentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteExperiment(
          this.ops["DeleteExperiment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFeatureGroup(partialParams: ToOptional<{
      [K in keyof DeleteFeatureGroupRequest & keyof DeleteFeatureGroupRequest & keyof DeleteFeatureGroupRequest]: (DeleteFeatureGroupRequest & DeleteFeatureGroupRequest & DeleteFeatureGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFeatureGroup(
          this.ops["DeleteFeatureGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFlowDefinition(partialParams: ToOptional<{
      [K in keyof DeleteFlowDefinitionRequest & keyof DeleteFlowDefinitionRequest & keyof DeleteFlowDefinitionRequest]: (DeleteFlowDefinitionRequest & DeleteFlowDefinitionRequest & DeleteFlowDefinitionRequest)[K]
    }>): Request<DeleteFlowDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFlowDefinition(
          this.ops["DeleteFlowDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DeleteHumanTaskUiRequest & keyof DeleteHumanTaskUiRequest & keyof DeleteHumanTaskUiRequest]: (DeleteHumanTaskUiRequest & DeleteHumanTaskUiRequest & DeleteHumanTaskUiRequest)[K]
    }>): Request<DeleteHumanTaskUiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHumanTaskUi(
          this.ops["DeleteHumanTaskUi"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest]: (DeleteImageRequest & DeleteImageRequest & DeleteImageRequest)[K]
    }>): Request<DeleteImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImageVersion(partialParams: ToOptional<{
      [K in keyof DeleteImageVersionRequest & keyof DeleteImageVersionRequest & keyof DeleteImageVersionRequest]: (DeleteImageVersionRequest & DeleteImageVersionRequest & DeleteImageVersionRequest)[K]
    }>): Request<DeleteImageVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImageVersion(
          this.ops["DeleteImageVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelInput & keyof DeleteModelInput & keyof DeleteModelInput]: (DeleteModelInput & DeleteModelInput & DeleteModelInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModel(
          this.ops["DeleteModel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteModelBiasJobDefinitionRequest & keyof DeleteModelBiasJobDefinitionRequest & keyof DeleteModelBiasJobDefinitionRequest]: (DeleteModelBiasJobDefinitionRequest & DeleteModelBiasJobDefinitionRequest & DeleteModelBiasJobDefinitionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelBiasJobDefinition(
          this.ops["DeleteModelBiasJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteModelExplainabilityJobDefinitionRequest & keyof DeleteModelExplainabilityJobDefinitionRequest & keyof DeleteModelExplainabilityJobDefinitionRequest]: (DeleteModelExplainabilityJobDefinitionRequest & DeleteModelExplainabilityJobDefinitionRequest & DeleteModelExplainabilityJobDefinitionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelExplainabilityJobDefinition(
          this.ops["DeleteModelExplainabilityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModelPackage(partialParams: ToOptional<{
      [K in keyof DeleteModelPackageInput & keyof DeleteModelPackageInput & keyof DeleteModelPackageInput]: (DeleteModelPackageInput & DeleteModelPackageInput & DeleteModelPackageInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelPackage(
          this.ops["DeleteModelPackage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModelPackageGroup(partialParams: ToOptional<{
      [K in keyof DeleteModelPackageGroupInput & keyof DeleteModelPackageGroupInput & keyof DeleteModelPackageGroupInput]: (DeleteModelPackageGroupInput & DeleteModelPackageGroupInput & DeleteModelPackageGroupInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelPackageGroup(
          this.ops["DeleteModelPackageGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof DeleteModelPackageGroupPolicyInput & keyof DeleteModelPackageGroupPolicyInput & keyof DeleteModelPackageGroupPolicyInput]: (DeleteModelPackageGroupPolicyInput & DeleteModelPackageGroupPolicyInput & DeleteModelPackageGroupPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelPackageGroupPolicy(
          this.ops["DeleteModelPackageGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteModelQualityJobDefinitionRequest & keyof DeleteModelQualityJobDefinitionRequest & keyof DeleteModelQualityJobDefinitionRequest]: (DeleteModelQualityJobDefinitionRequest & DeleteModelQualityJobDefinitionRequest & DeleteModelQualityJobDefinitionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelQualityJobDefinition(
          this.ops["DeleteModelQualityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringScheduleRequest & keyof DeleteMonitoringScheduleRequest & keyof DeleteMonitoringScheduleRequest]: (DeleteMonitoringScheduleRequest & DeleteMonitoringScheduleRequest & DeleteMonitoringScheduleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMonitoringSchedule(
          this.ops["DeleteMonitoringSchedule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNotebookInstance(partialParams: ToOptional<{
      [K in keyof DeleteNotebookInstanceInput & keyof DeleteNotebookInstanceInput & keyof DeleteNotebookInstanceInput]: (DeleteNotebookInstanceInput & DeleteNotebookInstanceInput & DeleteNotebookInstanceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNotebookInstance(
          this.ops["DeleteNotebookInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DeleteNotebookInstanceLifecycleConfigInput & keyof DeleteNotebookInstanceLifecycleConfigInput & keyof DeleteNotebookInstanceLifecycleConfigInput]: (DeleteNotebookInstanceLifecycleConfigInput & DeleteNotebookInstanceLifecycleConfigInput & DeleteNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNotebookInstanceLifecycleConfig(
          this.ops["DeleteNotebookInstanceLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest]: (DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest)[K]
    }>): Request<DeletePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(
          this.ops["DeletePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput]: (DeleteProjectInput & DeleteProjectInput & DeleteProjectInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProject(
          this.ops["DeleteProject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DeleteStudioLifecycleConfigRequest & keyof DeleteStudioLifecycleConfigRequest & keyof DeleteStudioLifecycleConfigRequest]: (DeleteStudioLifecycleConfigRequest & DeleteStudioLifecycleConfigRequest & DeleteStudioLifecycleConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStudioLifecycleConfig(
          this.ops["DeleteStudioLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsInput & keyof DeleteTagsInput & keyof DeleteTagsInput]: (DeleteTagsInput & DeleteTagsInput & DeleteTagsInput)[K]
    }>): Request<DeleteTagsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrial(partialParams: ToOptional<{
      [K in keyof DeleteTrialRequest & keyof DeleteTrialRequest & keyof DeleteTrialRequest]: (DeleteTrialRequest & DeleteTrialRequest & DeleteTrialRequest)[K]
    }>): Request<DeleteTrialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrial(
          this.ops["DeleteTrial"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrialComponent(partialParams: ToOptional<{
      [K in keyof DeleteTrialComponentRequest & keyof DeleteTrialComponentRequest & keyof DeleteTrialComponentRequest]: (DeleteTrialComponentRequest & DeleteTrialComponentRequest & DeleteTrialComponentRequest)[K]
    }>): Request<DeleteTrialComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrialComponent(
          this.ops["DeleteTrialComponent"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserProfile(partialParams: ToOptional<{
      [K in keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest]: (DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserProfile(
          this.ops["DeleteUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkforce(partialParams: ToOptional<{
      [K in keyof DeleteWorkforceRequest & keyof DeleteWorkforceRequest & keyof DeleteWorkforceRequest]: (DeleteWorkforceRequest & DeleteWorkforceRequest & DeleteWorkforceRequest)[K]
    }>): Request<DeleteWorkforceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkforce(
          this.ops["DeleteWorkforce"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkteam(partialParams: ToOptional<{
      [K in keyof DeleteWorkteamRequest & keyof DeleteWorkteamRequest & keyof DeleteWorkteamRequest]: (DeleteWorkteamRequest & DeleteWorkteamRequest & DeleteWorkteamRequest)[K]
    }>): Request<DeleteWorkteamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkteam(
          this.ops["DeleteWorkteam"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterDevices(partialParams: ToOptional<{
      [K in keyof DeregisterDevicesRequest & keyof DeregisterDevicesRequest & keyof DeregisterDevicesRequest]: (DeregisterDevicesRequest & DeregisterDevicesRequest & DeregisterDevicesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterDevices(
          this.ops["DeregisterDevices"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAction(partialParams: ToOptional<{
      [K in keyof DescribeActionRequest & keyof DescribeActionRequest & keyof DescribeActionRequest]: (DescribeActionRequest & DescribeActionRequest & DescribeActionRequest)[K]
    }>): Request<DescribeActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAction(
          this.ops["DescribeAction"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAlgorithm(partialParams: ToOptional<{
      [K in keyof DescribeAlgorithmInput & keyof DescribeAlgorithmInput & keyof DescribeAlgorithmInput]: (DescribeAlgorithmInput & DescribeAlgorithmInput & DescribeAlgorithmInput)[K]
    }>): Request<DescribeAlgorithmOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAlgorithm(
          this.ops["DescribeAlgorithm"].applicator.apply(partialParams)
        );
    }

    invokeDescribeApp(partialParams: ToOptional<{
      [K in keyof DescribeAppRequest & keyof DescribeAppRequest & keyof DescribeAppRequest]: (DescribeAppRequest & DescribeAppRequest & DescribeAppRequest)[K]
    }>): Request<DescribeAppResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeApp(
          this.ops["DescribeApp"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAppImageConfig(partialParams: ToOptional<{
      [K in keyof DescribeAppImageConfigRequest & keyof DescribeAppImageConfigRequest & keyof DescribeAppImageConfigRequest]: (DescribeAppImageConfigRequest & DescribeAppImageConfigRequest & DescribeAppImageConfigRequest)[K]
    }>): Request<DescribeAppImageConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppImageConfig(
          this.ops["DescribeAppImageConfig"].applicator.apply(partialParams)
        );
    }

    invokeDescribeArtifact(partialParams: ToOptional<{
      [K in keyof DescribeArtifactRequest & keyof DescribeArtifactRequest & keyof DescribeArtifactRequest]: (DescribeArtifactRequest & DescribeArtifactRequest & DescribeArtifactRequest)[K]
    }>): Request<DescribeArtifactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeArtifact(
          this.ops["DescribeArtifact"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAutoMLJob(partialParams: ToOptional<{
      [K in keyof DescribeAutoMLJobRequest & keyof DescribeAutoMLJobRequest & keyof DescribeAutoMLJobRequest]: (DescribeAutoMLJobRequest & DescribeAutoMLJobRequest & DescribeAutoMLJobRequest)[K]
    }>): Request<DescribeAutoMLJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAutoMLJob(
          this.ops["DescribeAutoMLJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCodeRepository(partialParams: ToOptional<{
      [K in keyof DescribeCodeRepositoryInput & keyof DescribeCodeRepositoryInput & keyof DescribeCodeRepositoryInput]: (DescribeCodeRepositoryInput & DescribeCodeRepositoryInput & DescribeCodeRepositoryInput)[K]
    }>): Request<DescribeCodeRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCodeRepository(
          this.ops["DescribeCodeRepository"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCompilationJob(partialParams: ToOptional<{
      [K in keyof DescribeCompilationJobRequest & keyof DescribeCompilationJobRequest & keyof DescribeCompilationJobRequest]: (DescribeCompilationJobRequest & DescribeCompilationJobRequest & DescribeCompilationJobRequest)[K]
    }>): Request<DescribeCompilationJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCompilationJob(
          this.ops["DescribeCompilationJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContext(partialParams: ToOptional<{
      [K in keyof DescribeContextRequest & keyof DescribeContextRequest & keyof DescribeContextRequest]: (DescribeContextRequest & DescribeContextRequest & DescribeContextRequest)[K]
    }>): Request<DescribeContextResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContext(
          this.ops["DescribeContext"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeDataQualityJobDefinitionRequest & keyof DescribeDataQualityJobDefinitionRequest & keyof DescribeDataQualityJobDefinitionRequest]: (DescribeDataQualityJobDefinitionRequest & DescribeDataQualityJobDefinitionRequest & DescribeDataQualityJobDefinitionRequest)[K]
    }>): Request<DescribeDataQualityJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataQualityJobDefinition(
          this.ops["DescribeDataQualityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest]: (DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest)[K]
    }>): Request<DescribeDeviceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDevice(
          this.ops["DescribeDevice"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDeviceFleet(partialParams: ToOptional<{
      [K in keyof DescribeDeviceFleetRequest & keyof DescribeDeviceFleetRequest & keyof DescribeDeviceFleetRequest]: (DescribeDeviceFleetRequest & DescribeDeviceFleetRequest & DescribeDeviceFleetRequest)[K]
    }>): Request<DescribeDeviceFleetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDeviceFleet(
          this.ops["DescribeDeviceFleet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest]: (DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof DescribeEdgePackagingJobRequest & keyof DescribeEdgePackagingJobRequest & keyof DescribeEdgePackagingJobRequest]: (DescribeEdgePackagingJobRequest & DescribeEdgePackagingJobRequest & DescribeEdgePackagingJobRequest)[K]
    }>): Request<DescribeEdgePackagingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEdgePackagingJob(
          this.ops["DescribeEdgePackagingJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeEndpointInput & keyof DescribeEndpointInput & keyof DescribeEndpointInput]: (DescribeEndpointInput & DescribeEndpointInput & DescribeEndpointInput)[K]
    }>): Request<DescribeEndpointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpoint(
          this.ops["DescribeEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEndpointConfig(partialParams: ToOptional<{
      [K in keyof DescribeEndpointConfigInput & keyof DescribeEndpointConfigInput & keyof DescribeEndpointConfigInput]: (DescribeEndpointConfigInput & DescribeEndpointConfigInput & DescribeEndpointConfigInput)[K]
    }>): Request<DescribeEndpointConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpointConfig(
          this.ops["DescribeEndpointConfig"].applicator.apply(partialParams)
        );
    }

    invokeDescribeExperiment(partialParams: ToOptional<{
      [K in keyof DescribeExperimentRequest & keyof DescribeExperimentRequest & keyof DescribeExperimentRequest]: (DescribeExperimentRequest & DescribeExperimentRequest & DescribeExperimentRequest)[K]
    }>): Request<DescribeExperimentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExperiment(
          this.ops["DescribeExperiment"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFeatureGroup(partialParams: ToOptional<{
      [K in keyof DescribeFeatureGroupRequest & keyof DescribeFeatureGroupRequest & keyof DescribeFeatureGroupRequest]: (DescribeFeatureGroupRequest & DescribeFeatureGroupRequest & DescribeFeatureGroupRequest)[K]
    }>): Request<DescribeFeatureGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFeatureGroup(
          this.ops["DescribeFeatureGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFlowDefinition(partialParams: ToOptional<{
      [K in keyof DescribeFlowDefinitionRequest & keyof DescribeFlowDefinitionRequest & keyof DescribeFlowDefinitionRequest]: (DescribeFlowDefinitionRequest & DescribeFlowDefinitionRequest & DescribeFlowDefinitionRequest)[K]
    }>): Request<DescribeFlowDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFlowDefinition(
          this.ops["DescribeFlowDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DescribeHumanTaskUiRequest & keyof DescribeHumanTaskUiRequest & keyof DescribeHumanTaskUiRequest]: (DescribeHumanTaskUiRequest & DescribeHumanTaskUiRequest & DescribeHumanTaskUiRequest)[K]
    }>): Request<DescribeHumanTaskUiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHumanTaskUi(
          this.ops["DescribeHumanTaskUi"].applicator.apply(partialParams)
        );
    }

    invokeDescribeHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof DescribeHyperParameterTuningJobRequest & keyof DescribeHyperParameterTuningJobRequest & keyof DescribeHyperParameterTuningJobRequest]: (DescribeHyperParameterTuningJobRequest & DescribeHyperParameterTuningJobRequest & DescribeHyperParameterTuningJobRequest)[K]
    }>): Request<DescribeHyperParameterTuningJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHyperParameterTuningJob(
          this.ops["DescribeHyperParameterTuningJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImage(partialParams: ToOptional<{
      [K in keyof DescribeImageRequest & keyof DescribeImageRequest & keyof DescribeImageRequest]: (DescribeImageRequest & DescribeImageRequest & DescribeImageRequest)[K]
    }>): Request<DescribeImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImage(
          this.ops["DescribeImage"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImageVersion(partialParams: ToOptional<{
      [K in keyof DescribeImageVersionRequest & keyof DescribeImageVersionRequest & keyof DescribeImageVersionRequest]: (DescribeImageVersionRequest & DescribeImageVersionRequest & DescribeImageVersionRequest)[K]
    }>): Request<DescribeImageVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageVersion(
          this.ops["DescribeImageVersion"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof DescribeInferenceRecommendationsJobRequest & keyof DescribeInferenceRecommendationsJobRequest & keyof DescribeInferenceRecommendationsJobRequest]: (DescribeInferenceRecommendationsJobRequest & DescribeInferenceRecommendationsJobRequest & DescribeInferenceRecommendationsJobRequest)[K]
    }>): Request<DescribeInferenceRecommendationsJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInferenceRecommendationsJob(
          this.ops["DescribeInferenceRecommendationsJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLabelingJob(partialParams: ToOptional<{
      [K in keyof DescribeLabelingJobRequest & keyof DescribeLabelingJobRequest & keyof DescribeLabelingJobRequest]: (DescribeLabelingJobRequest & DescribeLabelingJobRequest & DescribeLabelingJobRequest)[K]
    }>): Request<DescribeLabelingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLabelingJob(
          this.ops["DescribeLabelingJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLineageGroup(partialParams: ToOptional<{
      [K in keyof DescribeLineageGroupRequest & keyof DescribeLineageGroupRequest & keyof DescribeLineageGroupRequest]: (DescribeLineageGroupRequest & DescribeLineageGroupRequest & DescribeLineageGroupRequest)[K]
    }>): Request<DescribeLineageGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLineageGroup(
          this.ops["DescribeLineageGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeModel(partialParams: ToOptional<{
      [K in keyof DescribeModelInput & keyof DescribeModelInput & keyof DescribeModelInput]: (DescribeModelInput & DescribeModelInput & DescribeModelInput)[K]
    }>): Request<DescribeModelOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModel(
          this.ops["DescribeModel"].applicator.apply(partialParams)
        );
    }

    invokeDescribeModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelBiasJobDefinitionRequest & keyof DescribeModelBiasJobDefinitionRequest & keyof DescribeModelBiasJobDefinitionRequest]: (DescribeModelBiasJobDefinitionRequest & DescribeModelBiasJobDefinitionRequest & DescribeModelBiasJobDefinitionRequest)[K]
    }>): Request<DescribeModelBiasJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelBiasJobDefinition(
          this.ops["DescribeModelBiasJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelExplainabilityJobDefinitionRequest & keyof DescribeModelExplainabilityJobDefinitionRequest & keyof DescribeModelExplainabilityJobDefinitionRequest]: (DescribeModelExplainabilityJobDefinitionRequest & DescribeModelExplainabilityJobDefinitionRequest & DescribeModelExplainabilityJobDefinitionRequest)[K]
    }>): Request<DescribeModelExplainabilityJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelExplainabilityJobDefinition(
          this.ops["DescribeModelExplainabilityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeModelPackage(partialParams: ToOptional<{
      [K in keyof DescribeModelPackageInput & keyof DescribeModelPackageInput & keyof DescribeModelPackageInput]: (DescribeModelPackageInput & DescribeModelPackageInput & DescribeModelPackageInput)[K]
    }>): Request<DescribeModelPackageOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelPackage(
          this.ops["DescribeModelPackage"].applicator.apply(partialParams)
        );
    }

    invokeDescribeModelPackageGroup(partialParams: ToOptional<{
      [K in keyof DescribeModelPackageGroupInput & keyof DescribeModelPackageGroupInput & keyof DescribeModelPackageGroupInput]: (DescribeModelPackageGroupInput & DescribeModelPackageGroupInput & DescribeModelPackageGroupInput)[K]
    }>): Request<DescribeModelPackageGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelPackageGroup(
          this.ops["DescribeModelPackageGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelQualityJobDefinitionRequest & keyof DescribeModelQualityJobDefinitionRequest & keyof DescribeModelQualityJobDefinitionRequest]: (DescribeModelQualityJobDefinitionRequest & DescribeModelQualityJobDefinitionRequest & DescribeModelQualityJobDefinitionRequest)[K]
    }>): Request<DescribeModelQualityJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelQualityJobDefinition(
          this.ops["DescribeModelQualityJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof DescribeMonitoringScheduleRequest & keyof DescribeMonitoringScheduleRequest & keyof DescribeMonitoringScheduleRequest]: (DescribeMonitoringScheduleRequest & DescribeMonitoringScheduleRequest & DescribeMonitoringScheduleRequest)[K]
    }>): Request<DescribeMonitoringScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMonitoringSchedule(
          this.ops["DescribeMonitoringSchedule"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNotebookInstance(partialParams: ToOptional<{
      [K in keyof DescribeNotebookInstanceInput & keyof DescribeNotebookInstanceInput & keyof DescribeNotebookInstanceInput]: (DescribeNotebookInstanceInput & DescribeNotebookInstanceInput & DescribeNotebookInstanceInput)[K]
    }>): Request<DescribeNotebookInstanceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNotebookInstance(
          this.ops["DescribeNotebookInstance"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DescribeNotebookInstanceLifecycleConfigInput & keyof DescribeNotebookInstanceLifecycleConfigInput & keyof DescribeNotebookInstanceLifecycleConfigInput]: (DescribeNotebookInstanceLifecycleConfigInput & DescribeNotebookInstanceLifecycleConfigInput & DescribeNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<DescribeNotebookInstanceLifecycleConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNotebookInstanceLifecycleConfig(
          this.ops["DescribeNotebookInstanceLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeDescribePipeline(partialParams: ToOptional<{
      [K in keyof DescribePipelineRequest & keyof DescribePipelineRequest & keyof DescribePipelineRequest]: (DescribePipelineRequest & DescribePipelineRequest & DescribePipelineRequest)[K]
    }>): Request<DescribePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipeline(
          this.ops["DescribePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDescribePipelineDefinitionForExecution(partialParams: ToOptional<{
      [K in keyof DescribePipelineDefinitionForExecutionRequest & keyof DescribePipelineDefinitionForExecutionRequest & keyof DescribePipelineDefinitionForExecutionRequest]: (DescribePipelineDefinitionForExecutionRequest & DescribePipelineDefinitionForExecutionRequest & DescribePipelineDefinitionForExecutionRequest)[K]
    }>): Request<DescribePipelineDefinitionForExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipelineDefinitionForExecution(
          this.ops["DescribePipelineDefinitionForExecution"].applicator.apply(partialParams)
        );
    }

    invokeDescribePipelineExecution(partialParams: ToOptional<{
      [K in keyof DescribePipelineExecutionRequest & keyof DescribePipelineExecutionRequest & keyof DescribePipelineExecutionRequest]: (DescribePipelineExecutionRequest & DescribePipelineExecutionRequest & DescribePipelineExecutionRequest)[K]
    }>): Request<DescribePipelineExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipelineExecution(
          this.ops["DescribePipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProcessingJob(partialParams: ToOptional<{
      [K in keyof DescribeProcessingJobRequest & keyof DescribeProcessingJobRequest & keyof DescribeProcessingJobRequest]: (DescribeProcessingJobRequest & DescribeProcessingJobRequest & DescribeProcessingJobRequest)[K]
    }>): Request<DescribeProcessingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProcessingJob(
          this.ops["DescribeProcessingJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProject(partialParams: ToOptional<{
      [K in keyof DescribeProjectInput & keyof DescribeProjectInput & keyof DescribeProjectInput]: (DescribeProjectInput & DescribeProjectInput & DescribeProjectInput)[K]
    }>): Request<DescribeProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProject(
          this.ops["DescribeProject"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DescribeStudioLifecycleConfigRequest & keyof DescribeStudioLifecycleConfigRequest & keyof DescribeStudioLifecycleConfigRequest]: (DescribeStudioLifecycleConfigRequest & DescribeStudioLifecycleConfigRequest & DescribeStudioLifecycleConfigRequest)[K]
    }>): Request<DescribeStudioLifecycleConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStudioLifecycleConfig(
          this.ops["DescribeStudioLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSubscribedWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeSubscribedWorkteamRequest & keyof DescribeSubscribedWorkteamRequest & keyof DescribeSubscribedWorkteamRequest]: (DescribeSubscribedWorkteamRequest & DescribeSubscribedWorkteamRequest & DescribeSubscribedWorkteamRequest)[K]
    }>): Request<DescribeSubscribedWorkteamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSubscribedWorkteam(
          this.ops["DescribeSubscribedWorkteam"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTrainingJob(partialParams: ToOptional<{
      [K in keyof DescribeTrainingJobRequest & keyof DescribeTrainingJobRequest & keyof DescribeTrainingJobRequest]: (DescribeTrainingJobRequest & DescribeTrainingJobRequest & DescribeTrainingJobRequest)[K]
    }>): Request<DescribeTrainingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTrainingJob(
          this.ops["DescribeTrainingJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTransformJob(partialParams: ToOptional<{
      [K in keyof DescribeTransformJobRequest & keyof DescribeTransformJobRequest & keyof DescribeTransformJobRequest]: (DescribeTransformJobRequest & DescribeTransformJobRequest & DescribeTransformJobRequest)[K]
    }>): Request<DescribeTransformJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTransformJob(
          this.ops["DescribeTransformJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTrial(partialParams: ToOptional<{
      [K in keyof DescribeTrialRequest & keyof DescribeTrialRequest & keyof DescribeTrialRequest]: (DescribeTrialRequest & DescribeTrialRequest & DescribeTrialRequest)[K]
    }>): Request<DescribeTrialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTrial(
          this.ops["DescribeTrial"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTrialComponent(partialParams: ToOptional<{
      [K in keyof DescribeTrialComponentRequest & keyof DescribeTrialComponentRequest & keyof DescribeTrialComponentRequest]: (DescribeTrialComponentRequest & DescribeTrialComponentRequest & DescribeTrialComponentRequest)[K]
    }>): Request<DescribeTrialComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTrialComponent(
          this.ops["DescribeTrialComponent"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUserProfile(partialParams: ToOptional<{
      [K in keyof DescribeUserProfileRequest & keyof DescribeUserProfileRequest & keyof DescribeUserProfileRequest]: (DescribeUserProfileRequest & DescribeUserProfileRequest & DescribeUserProfileRequest)[K]
    }>): Request<DescribeUserProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUserProfile(
          this.ops["DescribeUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkforce(partialParams: ToOptional<{
      [K in keyof DescribeWorkforceRequest & keyof DescribeWorkforceRequest & keyof DescribeWorkforceRequest]: (DescribeWorkforceRequest & DescribeWorkforceRequest & DescribeWorkforceRequest)[K]
    }>): Request<DescribeWorkforceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkforce(
          this.ops["DescribeWorkforce"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeWorkteamRequest & keyof DescribeWorkteamRequest & keyof DescribeWorkteamRequest]: (DescribeWorkteamRequest & DescribeWorkteamRequest & DescribeWorkteamRequest)[K]
    }>): Request<DescribeWorkteamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkteam(
          this.ops["DescribeWorkteam"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateTrialComponent(partialParams: ToOptional<{
      [K in keyof DisassociateTrialComponentRequest & keyof DisassociateTrialComponentRequest & keyof DisassociateTrialComponentRequest]: (DisassociateTrialComponentRequest & DisassociateTrialComponentRequest & DisassociateTrialComponentRequest)[K]
    }>): Request<DisassociateTrialComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTrialComponent(
          this.ops["DisassociateTrialComponent"].applicator.apply(partialParams)
        );
    }

    invokeGetDeviceFleetReport(partialParams: ToOptional<{
      [K in keyof GetDeviceFleetReportRequest & keyof GetDeviceFleetReportRequest & keyof GetDeviceFleetReportRequest]: (GetDeviceFleetReportRequest & GetDeviceFleetReportRequest & GetDeviceFleetReportRequest)[K]
    }>): Request<GetDeviceFleetReportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeviceFleetReport(
          this.ops["GetDeviceFleetReport"].applicator.apply(partialParams)
        );
    }

    invokeGetLineageGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetLineageGroupPolicyRequest & keyof GetLineageGroupPolicyRequest & keyof GetLineageGroupPolicyRequest]: (GetLineageGroupPolicyRequest & GetLineageGroupPolicyRequest & GetLineageGroupPolicyRequest)[K]
    }>): Request<GetLineageGroupPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLineageGroupPolicy(
          this.ops["GetLineageGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetModelPackageGroupPolicyInput & keyof GetModelPackageGroupPolicyInput & keyof GetModelPackageGroupPolicyInput]: (GetModelPackageGroupPolicyInput & GetModelPackageGroupPolicyInput & GetModelPackageGroupPolicyInput)[K]
    }>): Request<GetModelPackageGroupPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModelPackageGroupPolicy(
          this.ops["GetModelPackageGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetSearchSuggestions(partialParams: ToOptional<{
      [K in keyof GetSearchSuggestionsRequest & keyof GetSearchSuggestionsRequest & keyof GetSearchSuggestionsRequest]: (GetSearchSuggestionsRequest & GetSearchSuggestionsRequest & GetSearchSuggestionsRequest)[K]
    }>): Request<GetSearchSuggestionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSearchSuggestions(
          this.ops["GetSearchSuggestions"].applicator.apply(partialParams)
        );
    }

    invokeListCandidatesForAutoMLJob(partialParams: ToOptional<{
      [K in keyof ListCandidatesForAutoMLJobRequest & keyof ListCandidatesForAutoMLJobRequest & keyof ListCandidatesForAutoMLJobRequest]: (ListCandidatesForAutoMLJobRequest & ListCandidatesForAutoMLJobRequest & ListCandidatesForAutoMLJobRequest)[K]
    }>): Request<ListCandidatesForAutoMLJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCandidatesForAutoMLJob(
          this.ops["ListCandidatesForAutoMLJob"].applicator.apply(partialParams)
        );
    }

    invokeListImageVersions(partialParams: ToOptional<{
      [K in keyof ListImageVersionsRequest & keyof ListImageVersionsRequest & keyof ListImageVersionsRequest]: (ListImageVersionsRequest & ListImageVersionsRequest & ListImageVersionsRequest)[K]
    }>): Request<ListImageVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImageVersions(
          this.ops["ListImageVersions"].applicator.apply(partialParams)
        );
    }

    invokeListLabelingJobsForWorkteam(partialParams: ToOptional<{
      [K in keyof ListLabelingJobsForWorkteamRequest & keyof ListLabelingJobsForWorkteamRequest & keyof ListLabelingJobsForWorkteamRequest]: (ListLabelingJobsForWorkteamRequest & ListLabelingJobsForWorkteamRequest & ListLabelingJobsForWorkteamRequest)[K]
    }>): Request<ListLabelingJobsForWorkteamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLabelingJobsForWorkteam(
          this.ops["ListLabelingJobsForWorkteam"].applicator.apply(partialParams)
        );
    }

    invokeListPipelineExecutions(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionsRequest & keyof ListPipelineExecutionsRequest & keyof ListPipelineExecutionsRequest]: (ListPipelineExecutionsRequest & ListPipelineExecutionsRequest & ListPipelineExecutionsRequest)[K]
    }>): Request<ListPipelineExecutionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPipelineExecutions(
          this.ops["ListPipelineExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListPipelineParametersForExecution(partialParams: ToOptional<{
      [K in keyof ListPipelineParametersForExecutionRequest & keyof ListPipelineParametersForExecutionRequest & keyof ListPipelineParametersForExecutionRequest]: (ListPipelineParametersForExecutionRequest & ListPipelineParametersForExecutionRequest & ListPipelineParametersForExecutionRequest)[K]
    }>): Request<ListPipelineParametersForExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPipelineParametersForExecution(
          this.ops["ListPipelineParametersForExecution"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsInput & keyof ListTagsInput & keyof ListTagsInput]: (ListTagsInput & ListTagsInput & ListTagsInput)[K]
    }>): Request<ListTagsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeListTrainingJobsForHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof ListTrainingJobsForHyperParameterTuningJobRequest & keyof ListTrainingJobsForHyperParameterTuningJobRequest & keyof ListTrainingJobsForHyperParameterTuningJobRequest]: (ListTrainingJobsForHyperParameterTuningJobRequest & ListTrainingJobsForHyperParameterTuningJobRequest & ListTrainingJobsForHyperParameterTuningJobRequest)[K]
    }>): Request<ListTrainingJobsForHyperParameterTuningJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrainingJobsForHyperParameterTuningJob(
          this.ops["ListTrainingJobsForHyperParameterTuningJob"].applicator.apply(partialParams)
        );
    }

    invokePutModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof PutModelPackageGroupPolicyInput & keyof PutModelPackageGroupPolicyInput & keyof PutModelPackageGroupPolicyInput]: (PutModelPackageGroupPolicyInput & PutModelPackageGroupPolicyInput & PutModelPackageGroupPolicyInput)[K]
    }>): Request<PutModelPackageGroupPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putModelPackageGroupPolicy(
          this.ops["PutModelPackageGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeQueryLineage(partialParams: ToOptional<{
      [K in keyof QueryLineageRequest & keyof QueryLineageRequest & keyof QueryLineageRequest]: (QueryLineageRequest & QueryLineageRequest & QueryLineageRequest)[K]
    }>): Request<QueryLineageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.queryLineage(
          this.ops["QueryLineage"].applicator.apply(partialParams)
        );
    }

    invokeRegisterDevices(partialParams: ToOptional<{
      [K in keyof RegisterDevicesRequest & keyof RegisterDevicesRequest & keyof RegisterDevicesRequest]: (RegisterDevicesRequest & RegisterDevicesRequest & RegisterDevicesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDevices(
          this.ops["RegisterDevices"].applicator.apply(partialParams)
        );
    }

    invokeRenderUiTemplate(partialParams: ToOptional<{
      [K in keyof RenderUiTemplateRequest & keyof RenderUiTemplateRequest & keyof RenderUiTemplateRequest]: (RenderUiTemplateRequest & RenderUiTemplateRequest & RenderUiTemplateRequest)[K]
    }>): Request<RenderUiTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.renderUiTemplate(
          this.ops["RenderUiTemplate"].applicator.apply(partialParams)
        );
    }

    invokeRetryPipelineExecution(partialParams: ToOptional<{
      [K in keyof RetryPipelineExecutionRequest & keyof RetryPipelineExecutionRequest & keyof RetryPipelineExecutionRequest]: (RetryPipelineExecutionRequest & RetryPipelineExecutionRequest & RetryPipelineExecutionRequest)[K]
    }>): Request<RetryPipelineExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retryPipelineExecution(
          this.ops["RetryPipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeSearch(partialParams: ToOptional<{
      [K in keyof SearchRequest & keyof SearchRequest & keyof SearchRequest]: (SearchRequest & SearchRequest & SearchRequest)[K]
    }>): Request<SearchResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.search(
          this.ops["Search"].applicator.apply(partialParams)
        );
    }

    invokeSendPipelineExecutionStepFailure(partialParams: ToOptional<{
      [K in keyof SendPipelineExecutionStepFailureRequest & keyof SendPipelineExecutionStepFailureRequest & keyof SendPipelineExecutionStepFailureRequest]: (SendPipelineExecutionStepFailureRequest & SendPipelineExecutionStepFailureRequest & SendPipelineExecutionStepFailureRequest)[K]
    }>): Request<SendPipelineExecutionStepFailureResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendPipelineExecutionStepFailure(
          this.ops["SendPipelineExecutionStepFailure"].applicator.apply(partialParams)
        );
    }

    invokeSendPipelineExecutionStepSuccess(partialParams: ToOptional<{
      [K in keyof SendPipelineExecutionStepSuccessRequest & keyof SendPipelineExecutionStepSuccessRequest & keyof SendPipelineExecutionStepSuccessRequest]: (SendPipelineExecutionStepSuccessRequest & SendPipelineExecutionStepSuccessRequest & SendPipelineExecutionStepSuccessRequest)[K]
    }>): Request<SendPipelineExecutionStepSuccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendPipelineExecutionStepSuccess(
          this.ops["SendPipelineExecutionStepSuccess"].applicator.apply(partialParams)
        );
    }

    invokeStartMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof StartMonitoringScheduleRequest & keyof StartMonitoringScheduleRequest & keyof StartMonitoringScheduleRequest]: (StartMonitoringScheduleRequest & StartMonitoringScheduleRequest & StartMonitoringScheduleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMonitoringSchedule(
          this.ops["StartMonitoringSchedule"].applicator.apply(partialParams)
        );
    }

    invokeStartNotebookInstance(partialParams: ToOptional<{
      [K in keyof StartNotebookInstanceInput & keyof StartNotebookInstanceInput & keyof StartNotebookInstanceInput]: (StartNotebookInstanceInput & StartNotebookInstanceInput & StartNotebookInstanceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startNotebookInstance(
          this.ops["StartNotebookInstance"].applicator.apply(partialParams)
        );
    }

    invokeStartPipelineExecution(partialParams: ToOptional<{
      [K in keyof StartPipelineExecutionRequest & keyof StartPipelineExecutionRequest & keyof StartPipelineExecutionRequest]: (StartPipelineExecutionRequest & StartPipelineExecutionRequest & StartPipelineExecutionRequest)[K]
    }>): Request<StartPipelineExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startPipelineExecution(
          this.ops["StartPipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeStopAutoMLJob(partialParams: ToOptional<{
      [K in keyof StopAutoMLJobRequest & keyof StopAutoMLJobRequest & keyof StopAutoMLJobRequest]: (StopAutoMLJobRequest & StopAutoMLJobRequest & StopAutoMLJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAutoMLJob(
          this.ops["StopAutoMLJob"].applicator.apply(partialParams)
        );
    }

    invokeStopCompilationJob(partialParams: ToOptional<{
      [K in keyof StopCompilationJobRequest & keyof StopCompilationJobRequest & keyof StopCompilationJobRequest]: (StopCompilationJobRequest & StopCompilationJobRequest & StopCompilationJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCompilationJob(
          this.ops["StopCompilationJob"].applicator.apply(partialParams)
        );
    }

    invokeStopEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof StopEdgePackagingJobRequest & keyof StopEdgePackagingJobRequest & keyof StopEdgePackagingJobRequest]: (StopEdgePackagingJobRequest & StopEdgePackagingJobRequest & StopEdgePackagingJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopEdgePackagingJob(
          this.ops["StopEdgePackagingJob"].applicator.apply(partialParams)
        );
    }

    invokeStopHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof StopHyperParameterTuningJobRequest & keyof StopHyperParameterTuningJobRequest & keyof StopHyperParameterTuningJobRequest]: (StopHyperParameterTuningJobRequest & StopHyperParameterTuningJobRequest & StopHyperParameterTuningJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopHyperParameterTuningJob(
          this.ops["StopHyperParameterTuningJob"].applicator.apply(partialParams)
        );
    }

    invokeStopInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof StopInferenceRecommendationsJobRequest & keyof StopInferenceRecommendationsJobRequest & keyof StopInferenceRecommendationsJobRequest]: (StopInferenceRecommendationsJobRequest & StopInferenceRecommendationsJobRequest & StopInferenceRecommendationsJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInferenceRecommendationsJob(
          this.ops["StopInferenceRecommendationsJob"].applicator.apply(partialParams)
        );
    }

    invokeStopLabelingJob(partialParams: ToOptional<{
      [K in keyof StopLabelingJobRequest & keyof StopLabelingJobRequest & keyof StopLabelingJobRequest]: (StopLabelingJobRequest & StopLabelingJobRequest & StopLabelingJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopLabelingJob(
          this.ops["StopLabelingJob"].applicator.apply(partialParams)
        );
    }

    invokeStopMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof StopMonitoringScheduleRequest & keyof StopMonitoringScheduleRequest & keyof StopMonitoringScheduleRequest]: (StopMonitoringScheduleRequest & StopMonitoringScheduleRequest & StopMonitoringScheduleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMonitoringSchedule(
          this.ops["StopMonitoringSchedule"].applicator.apply(partialParams)
        );
    }

    invokeStopNotebookInstance(partialParams: ToOptional<{
      [K in keyof StopNotebookInstanceInput & keyof StopNotebookInstanceInput & keyof StopNotebookInstanceInput]: (StopNotebookInstanceInput & StopNotebookInstanceInput & StopNotebookInstanceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopNotebookInstance(
          this.ops["StopNotebookInstance"].applicator.apply(partialParams)
        );
    }

    invokeStopPipelineExecution(partialParams: ToOptional<{
      [K in keyof StopPipelineExecutionRequest & keyof StopPipelineExecutionRequest & keyof StopPipelineExecutionRequest]: (StopPipelineExecutionRequest & StopPipelineExecutionRequest & StopPipelineExecutionRequest)[K]
    }>): Request<StopPipelineExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopPipelineExecution(
          this.ops["StopPipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeStopProcessingJob(partialParams: ToOptional<{
      [K in keyof StopProcessingJobRequest & keyof StopProcessingJobRequest & keyof StopProcessingJobRequest]: (StopProcessingJobRequest & StopProcessingJobRequest & StopProcessingJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopProcessingJob(
          this.ops["StopProcessingJob"].applicator.apply(partialParams)
        );
    }

    invokeStopTrainingJob(partialParams: ToOptional<{
      [K in keyof StopTrainingJobRequest & keyof StopTrainingJobRequest & keyof StopTrainingJobRequest]: (StopTrainingJobRequest & StopTrainingJobRequest & StopTrainingJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTrainingJob(
          this.ops["StopTrainingJob"].applicator.apply(partialParams)
        );
    }

    invokeStopTransformJob(partialParams: ToOptional<{
      [K in keyof StopTransformJobRequest & keyof StopTransformJobRequest & keyof StopTransformJobRequest]: (StopTransformJobRequest & StopTransformJobRequest & StopTransformJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTransformJob(
          this.ops["StopTransformJob"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAction(partialParams: ToOptional<{
      [K in keyof UpdateActionRequest & keyof UpdateActionRequest & keyof UpdateActionRequest]: (UpdateActionRequest & UpdateActionRequest & UpdateActionRequest)[K]
    }>): Request<UpdateActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAction(
          this.ops["UpdateAction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAppImageConfig(partialParams: ToOptional<{
      [K in keyof UpdateAppImageConfigRequest & keyof UpdateAppImageConfigRequest & keyof UpdateAppImageConfigRequest]: (UpdateAppImageConfigRequest & UpdateAppImageConfigRequest & UpdateAppImageConfigRequest)[K]
    }>): Request<UpdateAppImageConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppImageConfig(
          this.ops["UpdateAppImageConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateArtifact(partialParams: ToOptional<{
      [K in keyof UpdateArtifactRequest & keyof UpdateArtifactRequest & keyof UpdateArtifactRequest]: (UpdateArtifactRequest & UpdateArtifactRequest & UpdateArtifactRequest)[K]
    }>): Request<UpdateArtifactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateArtifact(
          this.ops["UpdateArtifact"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCodeRepository(partialParams: ToOptional<{
      [K in keyof UpdateCodeRepositoryInput & keyof UpdateCodeRepositoryInput & keyof UpdateCodeRepositoryInput]: (UpdateCodeRepositoryInput & UpdateCodeRepositoryInput & UpdateCodeRepositoryInput)[K]
    }>): Request<UpdateCodeRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCodeRepository(
          this.ops["UpdateCodeRepository"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContext(partialParams: ToOptional<{
      [K in keyof UpdateContextRequest & keyof UpdateContextRequest & keyof UpdateContextRequest]: (UpdateContextRequest & UpdateContextRequest & UpdateContextRequest)[K]
    }>): Request<UpdateContextResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContext(
          this.ops["UpdateContext"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDeviceFleet(partialParams: ToOptional<{
      [K in keyof UpdateDeviceFleetRequest & keyof UpdateDeviceFleetRequest & keyof UpdateDeviceFleetRequest]: (UpdateDeviceFleetRequest & UpdateDeviceFleetRequest & UpdateDeviceFleetRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeviceFleet(
          this.ops["UpdateDeviceFleet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDevices(partialParams: ToOptional<{
      [K in keyof UpdateDevicesRequest & keyof UpdateDevicesRequest & keyof UpdateDevicesRequest]: (UpdateDevicesRequest & UpdateDevicesRequest & UpdateDevicesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevices(
          this.ops["UpdateDevices"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomain(partialParams: ToOptional<{
      [K in keyof UpdateDomainRequest & keyof UpdateDomainRequest & keyof UpdateDomainRequest]: (UpdateDomainRequest & UpdateDomainRequest & UpdateDomainRequest)[K]
    }>): Request<UpdateDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomain(
          this.ops["UpdateDomain"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointInput & keyof UpdateEndpointInput & keyof UpdateEndpointInput]: (UpdateEndpointInput & UpdateEndpointInput & UpdateEndpointInput)[K]
    }>): Request<UpdateEndpointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpoint(
          this.ops["UpdateEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEndpointWeightsAndCapacities(partialParams: ToOptional<{
      [K in keyof UpdateEndpointWeightsAndCapacitiesInput & keyof UpdateEndpointWeightsAndCapacitiesInput & keyof UpdateEndpointWeightsAndCapacitiesInput]: (UpdateEndpointWeightsAndCapacitiesInput & UpdateEndpointWeightsAndCapacitiesInput & UpdateEndpointWeightsAndCapacitiesInput)[K]
    }>): Request<UpdateEndpointWeightsAndCapacitiesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpointWeightsAndCapacities(
          this.ops["UpdateEndpointWeightsAndCapacities"].applicator.apply(partialParams)
        );
    }

    invokeUpdateExperiment(partialParams: ToOptional<{
      [K in keyof UpdateExperimentRequest & keyof UpdateExperimentRequest & keyof UpdateExperimentRequest]: (UpdateExperimentRequest & UpdateExperimentRequest & UpdateExperimentRequest)[K]
    }>): Request<UpdateExperimentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateExperiment(
          this.ops["UpdateExperiment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateImage(partialParams: ToOptional<{
      [K in keyof UpdateImageRequest & keyof UpdateImageRequest & keyof UpdateImageRequest]: (UpdateImageRequest & UpdateImageRequest & UpdateImageRequest)[K]
    }>): Request<UpdateImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateImage(
          this.ops["UpdateImage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateModelPackage(partialParams: ToOptional<{
      [K in keyof UpdateModelPackageInput & keyof UpdateModelPackageInput & keyof UpdateModelPackageInput]: (UpdateModelPackageInput & UpdateModelPackageInput & UpdateModelPackageInput)[K]
    }>): Request<UpdateModelPackageOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateModelPackage(
          this.ops["UpdateModelPackage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof UpdateMonitoringScheduleRequest & keyof UpdateMonitoringScheduleRequest & keyof UpdateMonitoringScheduleRequest]: (UpdateMonitoringScheduleRequest & UpdateMonitoringScheduleRequest & UpdateMonitoringScheduleRequest)[K]
    }>): Request<UpdateMonitoringScheduleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMonitoringSchedule(
          this.ops["UpdateMonitoringSchedule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateNotebookInstance(partialParams: ToOptional<{
      [K in keyof UpdateNotebookInstanceInput & keyof UpdateNotebookInstanceInput & keyof UpdateNotebookInstanceInput]: (UpdateNotebookInstanceInput & UpdateNotebookInstanceInput & UpdateNotebookInstanceInput)[K]
    }>): Request<UpdateNotebookInstanceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNotebookInstance(
          this.ops["UpdateNotebookInstance"].applicator.apply(partialParams)
        );
    }

    invokeUpdateNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof UpdateNotebookInstanceLifecycleConfigInput & keyof UpdateNotebookInstanceLifecycleConfigInput & keyof UpdateNotebookInstanceLifecycleConfigInput]: (UpdateNotebookInstanceLifecycleConfigInput & UpdateNotebookInstanceLifecycleConfigInput & UpdateNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<UpdateNotebookInstanceLifecycleConfigOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNotebookInstanceLifecycleConfig(
          this.ops["UpdateNotebookInstanceLifecycleConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest]: (UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest)[K]
    }>): Request<UpdatePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipeline(
          this.ops["UpdatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePipelineExecution(partialParams: ToOptional<{
      [K in keyof UpdatePipelineExecutionRequest & keyof UpdatePipelineExecutionRequest & keyof UpdatePipelineExecutionRequest]: (UpdatePipelineExecutionRequest & UpdatePipelineExecutionRequest & UpdatePipelineExecutionRequest)[K]
    }>): Request<UpdatePipelineExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipelineExecution(
          this.ops["UpdatePipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput]: (UpdateProjectInput & UpdateProjectInput & UpdateProjectInput)[K]
    }>): Request<UpdateProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrainingJob(partialParams: ToOptional<{
      [K in keyof UpdateTrainingJobRequest & keyof UpdateTrainingJobRequest & keyof UpdateTrainingJobRequest]: (UpdateTrainingJobRequest & UpdateTrainingJobRequest & UpdateTrainingJobRequest)[K]
    }>): Request<UpdateTrainingJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrainingJob(
          this.ops["UpdateTrainingJob"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrial(partialParams: ToOptional<{
      [K in keyof UpdateTrialRequest & keyof UpdateTrialRequest & keyof UpdateTrialRequest]: (UpdateTrialRequest & UpdateTrialRequest & UpdateTrialRequest)[K]
    }>): Request<UpdateTrialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrial(
          this.ops["UpdateTrial"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrialComponent(partialParams: ToOptional<{
      [K in keyof UpdateTrialComponentRequest & keyof UpdateTrialComponentRequest & keyof UpdateTrialComponentRequest]: (UpdateTrialComponentRequest & UpdateTrialComponentRequest & UpdateTrialComponentRequest)[K]
    }>): Request<UpdateTrialComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrialComponent(
          this.ops["UpdateTrialComponent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest]: (UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest)[K]
    }>): Request<UpdateUserProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserProfile(
          this.ops["UpdateUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWorkforce(partialParams: ToOptional<{
      [K in keyof UpdateWorkforceRequest & keyof UpdateWorkforceRequest & keyof UpdateWorkforceRequest]: (UpdateWorkforceRequest & UpdateWorkforceRequest & UpdateWorkforceRequest)[K]
    }>): Request<UpdateWorkforceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkforce(
          this.ops["UpdateWorkforce"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWorkteam(partialParams: ToOptional<{
      [K in keyof UpdateWorkteamRequest & keyof UpdateWorkteamRequest & keyof UpdateWorkteamRequest]: (UpdateWorkteamRequest & UpdateWorkteamRequest & UpdateWorkteamRequest)[K]
    }>): Request<UpdateWorkteamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkteam(
          this.ops["UpdateWorkteam"].applicator.apply(partialParams)
        );
    }
}