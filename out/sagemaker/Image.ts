
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
    CreateDomainRequest,
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
    CreateModelPackageInput,
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
    DeleteArtifactRequest,
    DeleteAssociationRequest,
    DeleteContextRequest,
    DeleteExperimentRequest,
    DeleteFlowDefinitionRequest,
    DeleteHumanTaskUiRequest,
    DeleteImageRequest,
    DeleteImageVersionRequest,
    DeletePipelineRequest,
    DeleteTagsInput,
    DeleteTrialRequest,
    DeleteTrialComponentRequest,
    DeleteWorkforceRequest,
    DeleteWorkteamRequest,
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
    DisableSagemakerServicecatalogPortfolioInput,
    DisassociateTrialComponentRequest,
    EnableSagemakerServicecatalogPortfolioInput,
    GetDeviceFleetReportRequest,
    GetLineageGroupPolicyRequest,
    GetModelPackageGroupPolicyInput,
    GetSagemakerServicecatalogPortfolioStatusInput,
    GetSearchSuggestionsRequest,
    ListActionsRequest,
    ListAlgorithmsInput,
    ListAppImageConfigsRequest,
    ListAppsRequest,
    ListArtifactsRequest,
    ListAssociationsRequest,
    ListAutoMLJobsRequest,
    ListCandidatesForAutoMLJobRequest,
    ListCodeRepositoriesInput,
    ListCompilationJobsRequest,
    ListContextsRequest,
    ListDataQualityJobDefinitionsRequest,
    ListDeviceFleetsRequest,
    ListDevicesRequest,
    ListDomainsRequest,
    ListEdgePackagingJobsRequest,
    ListEndpointConfigsInput,
    ListEndpointsInput,
    ListExperimentsRequest,
    ListFeatureGroupsRequest,
    ListFlowDefinitionsRequest,
    ListHumanTaskUisRequest,
    ListHyperParameterTuningJobsRequest,
    ListImageVersionsRequest,
    ListImagesRequest,
    ListInferenceRecommendationsJobsRequest,
    ListLabelingJobsRequest,
    ListLabelingJobsForWorkteamRequest,
    ListLineageGroupsRequest,
    ListModelBiasJobDefinitionsRequest,
    ListModelExplainabilityJobDefinitionsRequest,
    ListModelMetadataRequest,
    ListModelPackageGroupsInput,
    ListModelPackagesInput,
    ListModelQualityJobDefinitionsRequest,
    ListModelsInput,
    ListMonitoringExecutionsRequest,
    ListMonitoringSchedulesRequest,
    ListNotebookInstanceLifecycleConfigsInput,
    ListNotebookInstancesInput,
    ListPipelineExecutionStepsRequest,
    ListPipelineExecutionsRequest,
    ListPipelineParametersForExecutionRequest,
    ListPipelinesRequest,
    ListProcessingJobsRequest,
    ListProjectsInput,
    ListStudioLifecycleConfigsRequest,
    ListSubscribedWorkteamsRequest,
    ListTagsInput,
    ListTrainingJobsRequest,
    ListTrainingJobsForHyperParameterTuningJobRequest,
    ListTransformJobsRequest,
    ListTrialComponentsRequest,
    ListTrialsRequest,
    ListUserProfilesRequest,
    ListWorkforcesRequest,
    ListWorkteamsRequest,
    PutModelPackageGroupPolicyInput,
    QueryLineageRequest,
    RenderUiTemplateRequest,
    RetryPipelineExecutionRequest,
    SearchRequest,
    SendPipelineExecutionStepFailureRequest,
    SendPipelineExecutionStepSuccessRequest,
    StartPipelineExecutionRequest,
    StopPipelineExecutionRequest,
    UpdateActionRequest,
    UpdateAppImageConfigRequest,
    UpdateArtifactRequest,
    UpdateCodeRepositoryInput,
    UpdateContextRequest,
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
    CreateModelPackageOutput,
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
    DeleteArtifactResponse,
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
    DisableSagemakerServicecatalogPortfolioOutput,
    DisassociateTrialComponentResponse,
    EnableSagemakerServicecatalogPortfolioOutput,
    GetDeviceFleetReportResponse,
    GetLineageGroupPolicyResponse,
    GetModelPackageGroupPolicyOutput,
    GetSagemakerServicecatalogPortfolioStatusOutput,
    GetSearchSuggestionsResponse,
    ListActionsResponse,
    ListAlgorithmsOutput,
    ListAppImageConfigsResponse,
    ListAppsResponse,
    ListArtifactsResponse,
    ListAssociationsResponse,
    ListAutoMLJobsResponse,
    ListCandidatesForAutoMLJobResponse,
    ListCodeRepositoriesOutput,
    ListCompilationJobsResponse,
    ListContextsResponse,
    ListDataQualityJobDefinitionsResponse,
    ListDeviceFleetsResponse,
    ListDevicesResponse,
    ListDomainsResponse,
    ListEdgePackagingJobsResponse,
    ListEndpointConfigsOutput,
    ListEndpointsOutput,
    ListExperimentsResponse,
    ListFeatureGroupsResponse,
    ListFlowDefinitionsResponse,
    ListHumanTaskUisResponse,
    ListHyperParameterTuningJobsResponse,
    ListImageVersionsResponse,
    ListImagesResponse,
    ListInferenceRecommendationsJobsResponse,
    ListLabelingJobsResponse,
    ListLabelingJobsForWorkteamResponse,
    ListLineageGroupsResponse,
    ListModelBiasJobDefinitionsResponse,
    ListModelExplainabilityJobDefinitionsResponse,
    ListModelMetadataResponse,
    ListModelPackageGroupsOutput,
    ListModelPackagesOutput,
    ListModelQualityJobDefinitionsResponse,
    ListModelsOutput,
    ListMonitoringExecutionsResponse,
    ListMonitoringSchedulesResponse,
    ListNotebookInstanceLifecycleConfigsOutput,
    ListNotebookInstancesOutput,
    ListPipelineExecutionStepsResponse,
    ListPipelineExecutionsResponse,
    ListPipelineParametersForExecutionResponse,
    ListPipelinesResponse,
    ListProcessingJobsResponse,
    ListProjectsOutput,
    ListStudioLifecycleConfigsResponse,
    ListSubscribedWorkteamsResponse,
    ListTagsOutput,
    ListTrainingJobsResponse,
    ListTrainingJobsForHyperParameterTuningJobResponse,
    ListTransformJobsResponse,
    ListTrialComponentsResponse,
    ListTrialsResponse,
    ListUserProfilesResponse,
    ListWorkforcesResponse,
    ListWorkteamsResponse,
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

export default class extends aws.sagemaker.Image {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.Image>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeAddAssociation(partialParams: ToOptional<{
      [K in keyof AddAssociationRequest]: (AddAssociationRequest)[K]
    }>): Request<AddAssociationResponse, AWSError> {
        this.boot();
        return this.client.addAssociation(
          this.ops["AddAssociation"].apply(partialParams)
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

    invokeAssociateTrialComponent(partialParams: ToOptional<{
      [K in keyof AssociateTrialComponentRequest]: (AssociateTrialComponentRequest)[K]
    }>): Request<AssociateTrialComponentResponse, AWSError> {
        this.boot();
        return this.client.associateTrialComponent(
          this.ops["AssociateTrialComponent"].apply(partialParams)
        );
    }

    invokeBatchDescribeModelPackage(partialParams: ToOptional<{
      [K in keyof BatchDescribeModelPackageInput]: (BatchDescribeModelPackageInput)[K]
    }>): Request<BatchDescribeModelPackageOutput, AWSError> {
        this.boot();
        return this.client.batchDescribeModelPackage(
          this.ops["BatchDescribeModelPackage"].apply(partialParams)
        );
    }

    invokeCreateAction(partialParams: ToOptional<{
      [K in keyof CreateActionRequest]: (CreateActionRequest)[K]
    }>): Request<CreateActionResponse, AWSError> {
        this.boot();
        return this.client.createAction(
          this.ops["CreateAction"].apply(partialParams)
        );
    }

    invokeCreateAlgorithm(partialParams: ToOptional<{
      [K in keyof CreateAlgorithmInput]: (CreateAlgorithmInput)[K]
    }>): Request<CreateAlgorithmOutput, AWSError> {
        this.boot();
        return this.client.createAlgorithm(
          this.ops["CreateAlgorithm"].apply(partialParams)
        );
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest]: (CreateAppRequest)[K]
    }>): Request<CreateAppResponse, AWSError> {
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateAppImageConfig(partialParams: ToOptional<{
      [K in keyof CreateAppImageConfigRequest]: (CreateAppImageConfigRequest)[K]
    }>): Request<CreateAppImageConfigResponse, AWSError> {
        this.boot();
        return this.client.createAppImageConfig(
          this.ops["CreateAppImageConfig"].apply(partialParams)
        );
    }

    invokeCreateArtifact(partialParams: ToOptional<{
      [K in keyof CreateArtifactRequest]: (CreateArtifactRequest)[K]
    }>): Request<CreateArtifactResponse, AWSError> {
        this.boot();
        return this.client.createArtifact(
          this.ops["CreateArtifact"].apply(partialParams)
        );
    }

    invokeCreateAutoMLJob(partialParams: ToOptional<{
      [K in keyof CreateAutoMLJobRequest & keyof Omit<CreateAutoMLJobRequest, "RoleArn">]: (CreateAutoMLJobRequest)[K]
    }>): Request<CreateAutoMLJobResponse, AWSError> {
        this.boot();
        return this.client.createAutoMLJob(
          this.ops["CreateAutoMLJob"].apply(partialParams)
        );
    }

    invokeCreateCodeRepository(partialParams: ToOptional<{
      [K in keyof CreateCodeRepositoryInput]: (CreateCodeRepositoryInput)[K]
    }>): Request<CreateCodeRepositoryOutput, AWSError> {
        this.boot();
        return this.client.createCodeRepository(
          this.ops["CreateCodeRepository"].apply(partialParams)
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

    invokeCreateContext(partialParams: ToOptional<{
      [K in keyof CreateContextRequest]: (CreateContextRequest)[K]
    }>): Request<CreateContextResponse, AWSError> {
        this.boot();
        return this.client.createContext(
          this.ops["CreateContext"].apply(partialParams)
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

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest]: (CreateDomainRequest)[K]
    }>): Request<CreateDomainResponse, AWSError> {
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointInput]: (CreateEndpointInput)[K]
    }>): Request<CreateEndpointOutput, AWSError> {
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeCreateEndpointConfig(partialParams: ToOptional<{
      [K in keyof CreateEndpointConfigInput]: (CreateEndpointConfigInput)[K]
    }>): Request<CreateEndpointConfigOutput, AWSError> {
        this.boot();
        return this.client.createEndpointConfig(
          this.ops["CreateEndpointConfig"].apply(partialParams)
        );
    }

    invokeCreateExperiment(partialParams: ToOptional<{
      [K in keyof CreateExperimentRequest]: (CreateExperimentRequest)[K]
    }>): Request<CreateExperimentResponse, AWSError> {
        this.boot();
        return this.client.createExperiment(
          this.ops["CreateExperiment"].apply(partialParams)
        );
    }

    invokeCreateFeatureGroup(partialParams: ToOptional<{
      [K in keyof CreateFeatureGroupRequest]: (CreateFeatureGroupRequest)[K]
    }>): Request<CreateFeatureGroupResponse, AWSError> {
        this.boot();
        return this.client.createFeatureGroup(
          this.ops["CreateFeatureGroup"].apply(partialParams)
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

    invokeCreateHumanTaskUi(partialParams: ToOptional<{
      [K in keyof CreateHumanTaskUiRequest]: (CreateHumanTaskUiRequest)[K]
    }>): Request<CreateHumanTaskUiResponse, AWSError> {
        this.boot();
        return this.client.createHumanTaskUi(
          this.ops["CreateHumanTaskUi"].apply(partialParams)
        );
    }

    invokeCreateHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof CreateHyperParameterTuningJobRequest]: (CreateHyperParameterTuningJobRequest)[K]
    }>): Request<CreateHyperParameterTuningJobResponse, AWSError> {
        this.boot();
        return this.client.createHyperParameterTuningJob(
          this.ops["CreateHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "ImageName" | "RoleArn">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResponse, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateImageVersion(partialParams: ToOptional<{
      [K in keyof CreateImageVersionRequest & keyof Omit<CreateImageVersionRequest, "ImageName">]: (CreateImageVersionRequest)[K]
    }>): Request<CreateImageVersionResponse, AWSError> {
        this.boot();
        return this.client.createImageVersion(
          this.ops["CreateImageVersion"].apply(partialParams)
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

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelInput]: (CreateModelInput)[K]
    }>): Request<CreateModelOutput, AWSError> {
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].apply(partialParams)
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

    invokeCreateModelPackage(partialParams: ToOptional<{
      [K in keyof CreateModelPackageInput]: (CreateModelPackageInput)[K]
    }>): Request<CreateModelPackageOutput, AWSError> {
        this.boot();
        return this.client.createModelPackage(
          this.ops["CreateModelPackage"].apply(partialParams)
        );
    }

    invokeCreateModelPackageGroup(partialParams: ToOptional<{
      [K in keyof CreateModelPackageGroupInput]: (CreateModelPackageGroupInput)[K]
    }>): Request<CreateModelPackageGroupOutput, AWSError> {
        this.boot();
        return this.client.createModelPackageGroup(
          this.ops["CreateModelPackageGroup"].apply(partialParams)
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

    invokeCreateMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof CreateMonitoringScheduleRequest]: (CreateMonitoringScheduleRequest)[K]
    }>): Request<CreateMonitoringScheduleResponse, AWSError> {
        this.boot();
        return this.client.createMonitoringSchedule(
          this.ops["CreateMonitoringSchedule"].apply(partialParams)
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

    invokeCreateNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof CreateNotebookInstanceLifecycleConfigInput]: (CreateNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<CreateNotebookInstanceLifecycleConfigOutput, AWSError> {
        this.boot();
        return this.client.createNotebookInstanceLifecycleConfig(
          this.ops["CreateNotebookInstanceLifecycleConfig"].apply(partialParams)
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

    invokeCreatePresignedDomainUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedDomainUrlRequest]: (CreatePresignedDomainUrlRequest)[K]
    }>): Request<CreatePresignedDomainUrlResponse, AWSError> {
        this.boot();
        return this.client.createPresignedDomainUrl(
          this.ops["CreatePresignedDomainUrl"].apply(partialParams)
        );
    }

    invokeCreatePresignedNotebookInstanceUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedNotebookInstanceUrlInput]: (CreatePresignedNotebookInstanceUrlInput)[K]
    }>): Request<CreatePresignedNotebookInstanceUrlOutput, AWSError> {
        this.boot();
        return this.client.createPresignedNotebookInstanceUrl(
          this.ops["CreatePresignedNotebookInstanceUrl"].apply(partialParams)
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

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput]: (CreateProjectInput)[K]
    }>): Request<CreateProjectOutput, AWSError> {
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeCreateStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof CreateStudioLifecycleConfigRequest]: (CreateStudioLifecycleConfigRequest)[K]
    }>): Request<CreateStudioLifecycleConfigResponse, AWSError> {
        this.boot();
        return this.client.createStudioLifecycleConfig(
          this.ops["CreateStudioLifecycleConfig"].apply(partialParams)
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

    invokeCreateTransformJob(partialParams: ToOptional<{
      [K in keyof CreateTransformJobRequest]: (CreateTransformJobRequest)[K]
    }>): Request<CreateTransformJobResponse, AWSError> {
        this.boot();
        return this.client.createTransformJob(
          this.ops["CreateTransformJob"].apply(partialParams)
        );
    }

    invokeCreateTrial(partialParams: ToOptional<{
      [K in keyof CreateTrialRequest]: (CreateTrialRequest)[K]
    }>): Request<CreateTrialResponse, AWSError> {
        this.boot();
        return this.client.createTrial(
          this.ops["CreateTrial"].apply(partialParams)
        );
    }

    invokeCreateTrialComponent(partialParams: ToOptional<{
      [K in keyof CreateTrialComponentRequest]: (CreateTrialComponentRequest)[K]
    }>): Request<CreateTrialComponentResponse, AWSError> {
        this.boot();
        return this.client.createTrialComponent(
          this.ops["CreateTrialComponent"].apply(partialParams)
        );
    }

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest]: (CreateUserProfileRequest)[K]
    }>): Request<CreateUserProfileResponse, AWSError> {
        this.boot();
        return this.client.createUserProfile(
          this.ops["CreateUserProfile"].apply(partialParams)
        );
    }

    invokeCreateWorkforce(partialParams: ToOptional<{
      [K in keyof CreateWorkforceRequest]: (CreateWorkforceRequest)[K]
    }>): Request<CreateWorkforceResponse, AWSError> {
        this.boot();
        return this.client.createWorkforce(
          this.ops["CreateWorkforce"].apply(partialParams)
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

    invokeDeleteAction(partialParams: ToOptional<{
      [K in keyof DeleteActionRequest]: (DeleteActionRequest)[K]
    }>): Request<DeleteActionResponse, AWSError> {
        this.boot();
        return this.client.deleteAction(
          this.ops["DeleteAction"].apply(partialParams)
        );
    }

    invokeDeleteArtifact(partialParams: ToOptional<{
      [K in keyof DeleteArtifactRequest]: (DeleteArtifactRequest)[K]
    }>): Request<DeleteArtifactResponse, AWSError> {
        this.boot();
        return this.client.deleteArtifact(
          this.ops["DeleteArtifact"].apply(partialParams)
        );
    }

    invokeDeleteAssociation(partialParams: ToOptional<{
      [K in keyof DeleteAssociationRequest]: (DeleteAssociationRequest)[K]
    }>): Request<DeleteAssociationResponse, AWSError> {
        this.boot();
        return this.client.deleteAssociation(
          this.ops["DeleteAssociation"].apply(partialParams)
        );
    }

    invokeDeleteContext(partialParams: ToOptional<{
      [K in keyof DeleteContextRequest]: (DeleteContextRequest)[K]
    }>): Request<DeleteContextResponse, AWSError> {
        this.boot();
        return this.client.deleteContext(
          this.ops["DeleteContext"].apply(partialParams)
        );
    }

    invokeDeleteExperiment(partialParams: ToOptional<{
      [K in keyof DeleteExperimentRequest]: (DeleteExperimentRequest)[K]
    }>): Request<DeleteExperimentResponse, AWSError> {
        this.boot();
        return this.client.deleteExperiment(
          this.ops["DeleteExperiment"].apply(partialParams)
        );
    }

    invokeDeleteFlowDefinition(partialParams: ToOptional<{
      [K in keyof DeleteFlowDefinitionRequest]: (DeleteFlowDefinitionRequest)[K]
    }>): Request<DeleteFlowDefinitionResponse, AWSError> {
        this.boot();
        return this.client.deleteFlowDefinition(
          this.ops["DeleteFlowDefinition"].apply(partialParams)
        );
    }

    invokeDeleteHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DeleteHumanTaskUiRequest]: (DeleteHumanTaskUiRequest)[K]
    }>): Request<DeleteHumanTaskUiResponse, AWSError> {
        this.boot();
        return this.client.deleteHumanTaskUi(
          this.ops["DeleteHumanTaskUi"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof Omit<DeleteImageRequest, "ImageName">]: (DeleteImageRequest)[K]
    }>): Request<DeleteImageResponse, AWSError> {
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImageVersion(partialParams: ToOptional<{
      [K in keyof DeleteImageVersionRequest & keyof Omit<DeleteImageVersionRequest, "ImageName">]: (DeleteImageVersionRequest)[K]
    }>): Request<DeleteImageVersionResponse, AWSError> {
        this.boot();
        return this.client.deleteImageVersion(
          this.ops["DeleteImageVersion"].apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineRequest]: (DeletePipelineRequest)[K]
    }>): Request<DeletePipelineResponse, AWSError> {
        this.boot();
        return this.client.deletePipeline(
          this.ops["DeletePipeline"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsInput]: (DeleteTagsInput)[K]
    }>): Request<DeleteTagsOutput, AWSError> {
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteTrial(partialParams: ToOptional<{
      [K in keyof DeleteTrialRequest]: (DeleteTrialRequest)[K]
    }>): Request<DeleteTrialResponse, AWSError> {
        this.boot();
        return this.client.deleteTrial(
          this.ops["DeleteTrial"].apply(partialParams)
        );
    }

    invokeDeleteTrialComponent(partialParams: ToOptional<{
      [K in keyof DeleteTrialComponentRequest]: (DeleteTrialComponentRequest)[K]
    }>): Request<DeleteTrialComponentResponse, AWSError> {
        this.boot();
        return this.client.deleteTrialComponent(
          this.ops["DeleteTrialComponent"].apply(partialParams)
        );
    }

    invokeDeleteWorkforce(partialParams: ToOptional<{
      [K in keyof DeleteWorkforceRequest]: (DeleteWorkforceRequest)[K]
    }>): Request<DeleteWorkforceResponse, AWSError> {
        this.boot();
        return this.client.deleteWorkforce(
          this.ops["DeleteWorkforce"].apply(partialParams)
        );
    }

    invokeDeleteWorkteam(partialParams: ToOptional<{
      [K in keyof DeleteWorkteamRequest]: (DeleteWorkteamRequest)[K]
    }>): Request<DeleteWorkteamResponse, AWSError> {
        this.boot();
        return this.client.deleteWorkteam(
          this.ops["DeleteWorkteam"].apply(partialParams)
        );
    }

    invokeDescribeAction(partialParams: ToOptional<{
      [K in keyof DescribeActionRequest]: (DescribeActionRequest)[K]
    }>): Request<DescribeActionResponse, AWSError> {
        this.boot();
        return this.client.describeAction(
          this.ops["DescribeAction"].apply(partialParams)
        );
    }

    invokeDescribeAlgorithm(partialParams: ToOptional<{
      [K in keyof DescribeAlgorithmInput]: (DescribeAlgorithmInput)[K]
    }>): Request<DescribeAlgorithmOutput, AWSError> {
        this.boot();
        return this.client.describeAlgorithm(
          this.ops["DescribeAlgorithm"].apply(partialParams)
        );
    }

    invokeDescribeApp(partialParams: ToOptional<{
      [K in keyof DescribeAppRequest]: (DescribeAppRequest)[K]
    }>): Request<DescribeAppResponse, AWSError> {
        this.boot();
        return this.client.describeApp(
          this.ops["DescribeApp"].apply(partialParams)
        );
    }

    invokeDescribeAppImageConfig(partialParams: ToOptional<{
      [K in keyof DescribeAppImageConfigRequest]: (DescribeAppImageConfigRequest)[K]
    }>): Request<DescribeAppImageConfigResponse, AWSError> {
        this.boot();
        return this.client.describeAppImageConfig(
          this.ops["DescribeAppImageConfig"].apply(partialParams)
        );
    }

    invokeDescribeArtifact(partialParams: ToOptional<{
      [K in keyof DescribeArtifactRequest]: (DescribeArtifactRequest)[K]
    }>): Request<DescribeArtifactResponse, AWSError> {
        this.boot();
        return this.client.describeArtifact(
          this.ops["DescribeArtifact"].apply(partialParams)
        );
    }

    invokeDescribeAutoMLJob(partialParams: ToOptional<{
      [K in keyof DescribeAutoMLJobRequest]: (DescribeAutoMLJobRequest)[K]
    }>): Request<DescribeAutoMLJobResponse, AWSError> {
        this.boot();
        return this.client.describeAutoMLJob(
          this.ops["DescribeAutoMLJob"].apply(partialParams)
        );
    }

    invokeDescribeCodeRepository(partialParams: ToOptional<{
      [K in keyof DescribeCodeRepositoryInput]: (DescribeCodeRepositoryInput)[K]
    }>): Request<DescribeCodeRepositoryOutput, AWSError> {
        this.boot();
        return this.client.describeCodeRepository(
          this.ops["DescribeCodeRepository"].apply(partialParams)
        );
    }

    invokeDescribeCompilationJob(partialParams: ToOptional<{
      [K in keyof DescribeCompilationJobRequest]: (DescribeCompilationJobRequest)[K]
    }>): Request<DescribeCompilationJobResponse, AWSError> {
        this.boot();
        return this.client.describeCompilationJob(
          this.ops["DescribeCompilationJob"].apply(partialParams)
        );
    }

    invokeDescribeContext(partialParams: ToOptional<{
      [K in keyof DescribeContextRequest]: (DescribeContextRequest)[K]
    }>): Request<DescribeContextResponse, AWSError> {
        this.boot();
        return this.client.describeContext(
          this.ops["DescribeContext"].apply(partialParams)
        );
    }

    invokeDescribeDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeDataQualityJobDefinitionRequest]: (DescribeDataQualityJobDefinitionRequest)[K]
    }>): Request<DescribeDataQualityJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeDataQualityJobDefinition(
          this.ops["DescribeDataQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest]: (DescribeDeviceRequest)[K]
    }>): Request<DescribeDeviceResponse, AWSError> {
        this.boot();
        return this.client.describeDevice(
          this.ops["DescribeDevice"].apply(partialParams)
        );
    }

    invokeDescribeDeviceFleet(partialParams: ToOptional<{
      [K in keyof DescribeDeviceFleetRequest]: (DescribeDeviceFleetRequest)[K]
    }>): Request<DescribeDeviceFleetResponse, AWSError> {
        this.boot();
        return this.client.describeDeviceFleet(
          this.ops["DescribeDeviceFleet"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest]: (DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResponse, AWSError> {
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof DescribeEdgePackagingJobRequest]: (DescribeEdgePackagingJobRequest)[K]
    }>): Request<DescribeEdgePackagingJobResponse, AWSError> {
        this.boot();
        return this.client.describeEdgePackagingJob(
          this.ops["DescribeEdgePackagingJob"].apply(partialParams)
        );
    }

    invokeDescribeEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeEndpointInput]: (DescribeEndpointInput)[K]
    }>): Request<DescribeEndpointOutput, AWSError> {
        this.boot();
        return this.client.describeEndpoint(
          this.ops["DescribeEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeEndpointConfig(partialParams: ToOptional<{
      [K in keyof DescribeEndpointConfigInput]: (DescribeEndpointConfigInput)[K]
    }>): Request<DescribeEndpointConfigOutput, AWSError> {
        this.boot();
        return this.client.describeEndpointConfig(
          this.ops["DescribeEndpointConfig"].apply(partialParams)
        );
    }

    invokeDescribeExperiment(partialParams: ToOptional<{
      [K in keyof DescribeExperimentRequest]: (DescribeExperimentRequest)[K]
    }>): Request<DescribeExperimentResponse, AWSError> {
        this.boot();
        return this.client.describeExperiment(
          this.ops["DescribeExperiment"].apply(partialParams)
        );
    }

    invokeDescribeFeatureGroup(partialParams: ToOptional<{
      [K in keyof DescribeFeatureGroupRequest]: (DescribeFeatureGroupRequest)[K]
    }>): Request<DescribeFeatureGroupResponse, AWSError> {
        this.boot();
        return this.client.describeFeatureGroup(
          this.ops["DescribeFeatureGroup"].apply(partialParams)
        );
    }

    invokeDescribeFlowDefinition(partialParams: ToOptional<{
      [K in keyof DescribeFlowDefinitionRequest]: (DescribeFlowDefinitionRequest)[K]
    }>): Request<DescribeFlowDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeFlowDefinition(
          this.ops["DescribeFlowDefinition"].apply(partialParams)
        );
    }

    invokeDescribeHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DescribeHumanTaskUiRequest]: (DescribeHumanTaskUiRequest)[K]
    }>): Request<DescribeHumanTaskUiResponse, AWSError> {
        this.boot();
        return this.client.describeHumanTaskUi(
          this.ops["DescribeHumanTaskUi"].apply(partialParams)
        );
    }

    invokeDescribeHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof DescribeHyperParameterTuningJobRequest]: (DescribeHyperParameterTuningJobRequest)[K]
    }>): Request<DescribeHyperParameterTuningJobResponse, AWSError> {
        this.boot();
        return this.client.describeHyperParameterTuningJob(
          this.ops["DescribeHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokeDescribeImage(partialParams: ToOptional<{
      [K in keyof DescribeImageRequest & keyof Omit<DescribeImageRequest, "ImageName">]: (DescribeImageRequest)[K]
    }>): Request<DescribeImageResponse, AWSError> {
        this.boot();
        return this.client.describeImage(
          this.ops["DescribeImage"].apply(partialParams)
        );
    }

    invokeDescribeImageVersion(partialParams: ToOptional<{
      [K in keyof DescribeImageVersionRequest & keyof Omit<DescribeImageVersionRequest, "ImageName">]: (DescribeImageVersionRequest)[K]
    }>): Request<DescribeImageVersionResponse, AWSError> {
        this.boot();
        return this.client.describeImageVersion(
          this.ops["DescribeImageVersion"].apply(partialParams)
        );
    }

    invokeDescribeInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof DescribeInferenceRecommendationsJobRequest]: (DescribeInferenceRecommendationsJobRequest)[K]
    }>): Request<DescribeInferenceRecommendationsJobResponse, AWSError> {
        this.boot();
        return this.client.describeInferenceRecommendationsJob(
          this.ops["DescribeInferenceRecommendationsJob"].apply(partialParams)
        );
    }

    invokeDescribeLabelingJob(partialParams: ToOptional<{
      [K in keyof DescribeLabelingJobRequest]: (DescribeLabelingJobRequest)[K]
    }>): Request<DescribeLabelingJobResponse, AWSError> {
        this.boot();
        return this.client.describeLabelingJob(
          this.ops["DescribeLabelingJob"].apply(partialParams)
        );
    }

    invokeDescribeLineageGroup(partialParams: ToOptional<{
      [K in keyof DescribeLineageGroupRequest]: (DescribeLineageGroupRequest)[K]
    }>): Request<DescribeLineageGroupResponse, AWSError> {
        this.boot();
        return this.client.describeLineageGroup(
          this.ops["DescribeLineageGroup"].apply(partialParams)
        );
    }

    invokeDescribeModel(partialParams: ToOptional<{
      [K in keyof DescribeModelInput]: (DescribeModelInput)[K]
    }>): Request<DescribeModelOutput, AWSError> {
        this.boot();
        return this.client.describeModel(
          this.ops["DescribeModel"].apply(partialParams)
        );
    }

    invokeDescribeModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelBiasJobDefinitionRequest]: (DescribeModelBiasJobDefinitionRequest)[K]
    }>): Request<DescribeModelBiasJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeModelBiasJobDefinition(
          this.ops["DescribeModelBiasJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelExplainabilityJobDefinitionRequest]: (DescribeModelExplainabilityJobDefinitionRequest)[K]
    }>): Request<DescribeModelExplainabilityJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeModelExplainabilityJobDefinition(
          this.ops["DescribeModelExplainabilityJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeModelPackage(partialParams: ToOptional<{
      [K in keyof DescribeModelPackageInput]: (DescribeModelPackageInput)[K]
    }>): Request<DescribeModelPackageOutput, AWSError> {
        this.boot();
        return this.client.describeModelPackage(
          this.ops["DescribeModelPackage"].apply(partialParams)
        );
    }

    invokeDescribeModelPackageGroup(partialParams: ToOptional<{
      [K in keyof DescribeModelPackageGroupInput]: (DescribeModelPackageGroupInput)[K]
    }>): Request<DescribeModelPackageGroupOutput, AWSError> {
        this.boot();
        return this.client.describeModelPackageGroup(
          this.ops["DescribeModelPackageGroup"].apply(partialParams)
        );
    }

    invokeDescribeModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelQualityJobDefinitionRequest]: (DescribeModelQualityJobDefinitionRequest)[K]
    }>): Request<DescribeModelQualityJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeModelQualityJobDefinition(
          this.ops["DescribeModelQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof DescribeMonitoringScheduleRequest]: (DescribeMonitoringScheduleRequest)[K]
    }>): Request<DescribeMonitoringScheduleResponse, AWSError> {
        this.boot();
        return this.client.describeMonitoringSchedule(
          this.ops["DescribeMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeDescribeNotebookInstance(partialParams: ToOptional<{
      [K in keyof DescribeNotebookInstanceInput]: (DescribeNotebookInstanceInput)[K]
    }>): Request<DescribeNotebookInstanceOutput, AWSError> {
        this.boot();
        return this.client.describeNotebookInstance(
          this.ops["DescribeNotebookInstance"].apply(partialParams)
        );
    }

    invokeDescribeNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DescribeNotebookInstanceLifecycleConfigInput]: (DescribeNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<DescribeNotebookInstanceLifecycleConfigOutput, AWSError> {
        this.boot();
        return this.client.describeNotebookInstanceLifecycleConfig(
          this.ops["DescribeNotebookInstanceLifecycleConfig"].apply(partialParams)
        );
    }

    invokeDescribePipeline(partialParams: ToOptional<{
      [K in keyof DescribePipelineRequest]: (DescribePipelineRequest)[K]
    }>): Request<DescribePipelineResponse, AWSError> {
        this.boot();
        return this.client.describePipeline(
          this.ops["DescribePipeline"].apply(partialParams)
        );
    }

    invokeDescribePipelineDefinitionForExecution(partialParams: ToOptional<{
      [K in keyof DescribePipelineDefinitionForExecutionRequest]: (DescribePipelineDefinitionForExecutionRequest)[K]
    }>): Request<DescribePipelineDefinitionForExecutionResponse, AWSError> {
        this.boot();
        return this.client.describePipelineDefinitionForExecution(
          this.ops["DescribePipelineDefinitionForExecution"].apply(partialParams)
        );
    }

    invokeDescribePipelineExecution(partialParams: ToOptional<{
      [K in keyof DescribePipelineExecutionRequest]: (DescribePipelineExecutionRequest)[K]
    }>): Request<DescribePipelineExecutionResponse, AWSError> {
        this.boot();
        return this.client.describePipelineExecution(
          this.ops["DescribePipelineExecution"].apply(partialParams)
        );
    }

    invokeDescribeProcessingJob(partialParams: ToOptional<{
      [K in keyof DescribeProcessingJobRequest]: (DescribeProcessingJobRequest)[K]
    }>): Request<DescribeProcessingJobResponse, AWSError> {
        this.boot();
        return this.client.describeProcessingJob(
          this.ops["DescribeProcessingJob"].apply(partialParams)
        );
    }

    invokeDescribeProject(partialParams: ToOptional<{
      [K in keyof DescribeProjectInput]: (DescribeProjectInput)[K]
    }>): Request<DescribeProjectOutput, AWSError> {
        this.boot();
        return this.client.describeProject(
          this.ops["DescribeProject"].apply(partialParams)
        );
    }

    invokeDescribeStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DescribeStudioLifecycleConfigRequest]: (DescribeStudioLifecycleConfigRequest)[K]
    }>): Request<DescribeStudioLifecycleConfigResponse, AWSError> {
        this.boot();
        return this.client.describeStudioLifecycleConfig(
          this.ops["DescribeStudioLifecycleConfig"].apply(partialParams)
        );
    }

    invokeDescribeSubscribedWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeSubscribedWorkteamRequest]: (DescribeSubscribedWorkteamRequest)[K]
    }>): Request<DescribeSubscribedWorkteamResponse, AWSError> {
        this.boot();
        return this.client.describeSubscribedWorkteam(
          this.ops["DescribeSubscribedWorkteam"].apply(partialParams)
        );
    }

    invokeDescribeTrainingJob(partialParams: ToOptional<{
      [K in keyof DescribeTrainingJobRequest]: (DescribeTrainingJobRequest)[K]
    }>): Request<DescribeTrainingJobResponse, AWSError> {
        this.boot();
        return this.client.describeTrainingJob(
          this.ops["DescribeTrainingJob"].apply(partialParams)
        );
    }

    invokeDescribeTransformJob(partialParams: ToOptional<{
      [K in keyof DescribeTransformJobRequest]: (DescribeTransformJobRequest)[K]
    }>): Request<DescribeTransformJobResponse, AWSError> {
        this.boot();
        return this.client.describeTransformJob(
          this.ops["DescribeTransformJob"].apply(partialParams)
        );
    }

    invokeDescribeTrial(partialParams: ToOptional<{
      [K in keyof DescribeTrialRequest]: (DescribeTrialRequest)[K]
    }>): Request<DescribeTrialResponse, AWSError> {
        this.boot();
        return this.client.describeTrial(
          this.ops["DescribeTrial"].apply(partialParams)
        );
    }

    invokeDescribeTrialComponent(partialParams: ToOptional<{
      [K in keyof DescribeTrialComponentRequest]: (DescribeTrialComponentRequest)[K]
    }>): Request<DescribeTrialComponentResponse, AWSError> {
        this.boot();
        return this.client.describeTrialComponent(
          this.ops["DescribeTrialComponent"].apply(partialParams)
        );
    }

    invokeDescribeUserProfile(partialParams: ToOptional<{
      [K in keyof DescribeUserProfileRequest]: (DescribeUserProfileRequest)[K]
    }>): Request<DescribeUserProfileResponse, AWSError> {
        this.boot();
        return this.client.describeUserProfile(
          this.ops["DescribeUserProfile"].apply(partialParams)
        );
    }

    invokeDescribeWorkforce(partialParams: ToOptional<{
      [K in keyof DescribeWorkforceRequest]: (DescribeWorkforceRequest)[K]
    }>): Request<DescribeWorkforceResponse, AWSError> {
        this.boot();
        return this.client.describeWorkforce(
          this.ops["DescribeWorkforce"].apply(partialParams)
        );
    }

    invokeDescribeWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeWorkteamRequest]: (DescribeWorkteamRequest)[K]
    }>): Request<DescribeWorkteamResponse, AWSError> {
        this.boot();
        return this.client.describeWorkteam(
          this.ops["DescribeWorkteam"].apply(partialParams)
        );
    }

    invokeDisableSagemakerServicecatalogPortfolio(partialParams: ToOptional<{
      [K in keyof DisableSagemakerServicecatalogPortfolioInput]: (DisableSagemakerServicecatalogPortfolioInput)[K]
    }>): Request<DisableSagemakerServicecatalogPortfolioOutput, AWSError> {
        this.boot();
        return this.client.disableSagemakerServicecatalogPortfolio(
          this.ops["DisableSagemakerServicecatalogPortfolio"].apply(partialParams)
        );
    }

    invokeDisassociateTrialComponent(partialParams: ToOptional<{
      [K in keyof DisassociateTrialComponentRequest]: (DisassociateTrialComponentRequest)[K]
    }>): Request<DisassociateTrialComponentResponse, AWSError> {
        this.boot();
        return this.client.disassociateTrialComponent(
          this.ops["DisassociateTrialComponent"].apply(partialParams)
        );
    }

    invokeEnableSagemakerServicecatalogPortfolio(partialParams: ToOptional<{
      [K in keyof EnableSagemakerServicecatalogPortfolioInput]: (EnableSagemakerServicecatalogPortfolioInput)[K]
    }>): Request<EnableSagemakerServicecatalogPortfolioOutput, AWSError> {
        this.boot();
        return this.client.enableSagemakerServicecatalogPortfolio(
          this.ops["EnableSagemakerServicecatalogPortfolio"].apply(partialParams)
        );
    }

    invokeGetDeviceFleetReport(partialParams: ToOptional<{
      [K in keyof GetDeviceFleetReportRequest]: (GetDeviceFleetReportRequest)[K]
    }>): Request<GetDeviceFleetReportResponse, AWSError> {
        this.boot();
        return this.client.getDeviceFleetReport(
          this.ops["GetDeviceFleetReport"].apply(partialParams)
        );
    }

    invokeGetLineageGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetLineageGroupPolicyRequest]: (GetLineageGroupPolicyRequest)[K]
    }>): Request<GetLineageGroupPolicyResponse, AWSError> {
        this.boot();
        return this.client.getLineageGroupPolicy(
          this.ops["GetLineageGroupPolicy"].apply(partialParams)
        );
    }

    invokeGetModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetModelPackageGroupPolicyInput]: (GetModelPackageGroupPolicyInput)[K]
    }>): Request<GetModelPackageGroupPolicyOutput, AWSError> {
        this.boot();
        return this.client.getModelPackageGroupPolicy(
          this.ops["GetModelPackageGroupPolicy"].apply(partialParams)
        );
    }

    invokeGetSagemakerServicecatalogPortfolioStatus(partialParams: ToOptional<{
      [K in keyof GetSagemakerServicecatalogPortfolioStatusInput]: (GetSagemakerServicecatalogPortfolioStatusInput)[K]
    }>): Request<GetSagemakerServicecatalogPortfolioStatusOutput, AWSError> {
        this.boot();
        return this.client.getSagemakerServicecatalogPortfolioStatus(
          this.ops["GetSagemakerServicecatalogPortfolioStatus"].apply(partialParams)
        );
    }

    invokeGetSearchSuggestions(partialParams: ToOptional<{
      [K in keyof GetSearchSuggestionsRequest]: (GetSearchSuggestionsRequest)[K]
    }>): Request<GetSearchSuggestionsResponse, AWSError> {
        this.boot();
        return this.client.getSearchSuggestions(
          this.ops["GetSearchSuggestions"].apply(partialParams)
        );
    }

    invokeListActions(partialParams: ToOptional<{
      [K in keyof ListActionsRequest]: (ListActionsRequest)[K]
    }>): Request<ListActionsResponse, AWSError> {
        this.boot();
        return this.client.listActions(
          this.ops["ListActions"].apply(partialParams)
        );
    }

    invokeListAlgorithms(partialParams: ToOptional<{
      [K in keyof ListAlgorithmsInput]: (ListAlgorithmsInput)[K]
    }>): Request<ListAlgorithmsOutput, AWSError> {
        this.boot();
        return this.client.listAlgorithms(
          this.ops["ListAlgorithms"].apply(partialParams)
        );
    }

    invokeListAppImageConfigs(partialParams: ToOptional<{
      [K in keyof ListAppImageConfigsRequest]: (ListAppImageConfigsRequest)[K]
    }>): Request<ListAppImageConfigsResponse, AWSError> {
        this.boot();
        return this.client.listAppImageConfigs(
          this.ops["ListAppImageConfigs"].apply(partialParams)
        );
    }

    invokeListApps(partialParams: ToOptional<{
      [K in keyof ListAppsRequest]: (ListAppsRequest)[K]
    }>): Request<ListAppsResponse, AWSError> {
        this.boot();
        return this.client.listApps(
          this.ops["ListApps"].apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof ListArtifactsRequest]: (ListArtifactsRequest)[K]
    }>): Request<ListArtifactsResponse, AWSError> {
        this.boot();
        return this.client.listArtifacts(
          this.ops["ListArtifacts"].apply(partialParams)
        );
    }

    invokeListAssociations(partialParams: ToOptional<{
      [K in keyof ListAssociationsRequest]: (ListAssociationsRequest)[K]
    }>): Request<ListAssociationsResponse, AWSError> {
        this.boot();
        return this.client.listAssociations(
          this.ops["ListAssociations"].apply(partialParams)
        );
    }

    invokeListAutoMLJobs(partialParams: ToOptional<{
      [K in keyof ListAutoMLJobsRequest]: (ListAutoMLJobsRequest)[K]
    }>): Request<ListAutoMLJobsResponse, AWSError> {
        this.boot();
        return this.client.listAutoMLJobs(
          this.ops["ListAutoMLJobs"].apply(partialParams)
        );
    }

    invokeListCandidatesForAutoMLJob(partialParams: ToOptional<{
      [K in keyof ListCandidatesForAutoMLJobRequest]: (ListCandidatesForAutoMLJobRequest)[K]
    }>): Request<ListCandidatesForAutoMLJobResponse, AWSError> {
        this.boot();
        return this.client.listCandidatesForAutoMLJob(
          this.ops["ListCandidatesForAutoMLJob"].apply(partialParams)
        );
    }

    invokeListCodeRepositories(partialParams: ToOptional<{
      [K in keyof ListCodeRepositoriesInput]: (ListCodeRepositoriesInput)[K]
    }>): Request<ListCodeRepositoriesOutput, AWSError> {
        this.boot();
        return this.client.listCodeRepositories(
          this.ops["ListCodeRepositories"].apply(partialParams)
        );
    }

    invokeListCompilationJobs(partialParams: ToOptional<{
      [K in keyof ListCompilationJobsRequest]: (ListCompilationJobsRequest)[K]
    }>): Request<ListCompilationJobsResponse, AWSError> {
        this.boot();
        return this.client.listCompilationJobs(
          this.ops["ListCompilationJobs"].apply(partialParams)
        );
    }

    invokeListContexts(partialParams: ToOptional<{
      [K in keyof ListContextsRequest]: (ListContextsRequest)[K]
    }>): Request<ListContextsResponse, AWSError> {
        this.boot();
        return this.client.listContexts(
          this.ops["ListContexts"].apply(partialParams)
        );
    }

    invokeListDataQualityJobDefinitions(partialParams: ToOptional<{
      [K in keyof ListDataQualityJobDefinitionsRequest]: (ListDataQualityJobDefinitionsRequest)[K]
    }>): Request<ListDataQualityJobDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.listDataQualityJobDefinitions(
          this.ops["ListDataQualityJobDefinitions"].apply(partialParams)
        );
    }

    invokeListDeviceFleets(partialParams: ToOptional<{
      [K in keyof ListDeviceFleetsRequest]: (ListDeviceFleetsRequest)[K]
    }>): Request<ListDeviceFleetsResponse, AWSError> {
        this.boot();
        return this.client.listDeviceFleets(
          this.ops["ListDeviceFleets"].apply(partialParams)
        );
    }

    invokeListDevices(partialParams: ToOptional<{
      [K in keyof ListDevicesRequest]: (ListDevicesRequest)[K]
    }>): Request<ListDevicesResponse, AWSError> {
        this.boot();
        return this.client.listDevices(
          this.ops["ListDevices"].apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsRequest]: (ListDomainsRequest)[K]
    }>): Request<ListDomainsResponse, AWSError> {
        this.boot();
        return this.client.listDomains(
          this.ops["ListDomains"].apply(partialParams)
        );
    }

    invokeListEdgePackagingJobs(partialParams: ToOptional<{
      [K in keyof ListEdgePackagingJobsRequest]: (ListEdgePackagingJobsRequest)[K]
    }>): Request<ListEdgePackagingJobsResponse, AWSError> {
        this.boot();
        return this.client.listEdgePackagingJobs(
          this.ops["ListEdgePackagingJobs"].apply(partialParams)
        );
    }

    invokeListEndpointConfigs(partialParams: ToOptional<{
      [K in keyof ListEndpointConfigsInput]: (ListEndpointConfigsInput)[K]
    }>): Request<ListEndpointConfigsOutput, AWSError> {
        this.boot();
        return this.client.listEndpointConfigs(
          this.ops["ListEndpointConfigs"].apply(partialParams)
        );
    }

    invokeListEndpoints(partialParams: ToOptional<{
      [K in keyof ListEndpointsInput]: (ListEndpointsInput)[K]
    }>): Request<ListEndpointsOutput, AWSError> {
        this.boot();
        return this.client.listEndpoints(
          this.ops["ListEndpoints"].apply(partialParams)
        );
    }

    invokeListExperiments(partialParams: ToOptional<{
      [K in keyof ListExperimentsRequest]: (ListExperimentsRequest)[K]
    }>): Request<ListExperimentsResponse, AWSError> {
        this.boot();
        return this.client.listExperiments(
          this.ops["ListExperiments"].apply(partialParams)
        );
    }

    invokeListFeatureGroups(partialParams: ToOptional<{
      [K in keyof ListFeatureGroupsRequest]: (ListFeatureGroupsRequest)[K]
    }>): Request<ListFeatureGroupsResponse, AWSError> {
        this.boot();
        return this.client.listFeatureGroups(
          this.ops["ListFeatureGroups"].apply(partialParams)
        );
    }

    invokeListFlowDefinitions(partialParams: ToOptional<{
      [K in keyof ListFlowDefinitionsRequest]: (ListFlowDefinitionsRequest)[K]
    }>): Request<ListFlowDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.listFlowDefinitions(
          this.ops["ListFlowDefinitions"].apply(partialParams)
        );
    }

    invokeListHumanTaskUis(partialParams: ToOptional<{
      [K in keyof ListHumanTaskUisRequest]: (ListHumanTaskUisRequest)[K]
    }>): Request<ListHumanTaskUisResponse, AWSError> {
        this.boot();
        return this.client.listHumanTaskUis(
          this.ops["ListHumanTaskUis"].apply(partialParams)
        );
    }

    invokeListHyperParameterTuningJobs(partialParams: ToOptional<{
      [K in keyof ListHyperParameterTuningJobsRequest]: (ListHyperParameterTuningJobsRequest)[K]
    }>): Request<ListHyperParameterTuningJobsResponse, AWSError> {
        this.boot();
        return this.client.listHyperParameterTuningJobs(
          this.ops["ListHyperParameterTuningJobs"].apply(partialParams)
        );
    }

    invokeListImageVersions(partialParams: ToOptional<{
      [K in keyof ListImageVersionsRequest & keyof Omit<ListImageVersionsRequest, "ImageName">]: (ListImageVersionsRequest)[K]
    }>): Request<ListImageVersionsResponse, AWSError> {
        this.boot();
        return this.client.listImageVersions(
          this.ops["ListImageVersions"].apply(partialParams)
        );
    }

    invokeListImages(partialParams: ToOptional<{
      [K in keyof ListImagesRequest]: (ListImagesRequest)[K]
    }>): Request<ListImagesResponse, AWSError> {
        this.boot();
        return this.client.listImages(
          this.ops["ListImages"].apply(partialParams)
        );
    }

    invokeListInferenceRecommendationsJobs(partialParams: ToOptional<{
      [K in keyof ListInferenceRecommendationsJobsRequest]: (ListInferenceRecommendationsJobsRequest)[K]
    }>): Request<ListInferenceRecommendationsJobsResponse, AWSError> {
        this.boot();
        return this.client.listInferenceRecommendationsJobs(
          this.ops["ListInferenceRecommendationsJobs"].apply(partialParams)
        );
    }

    invokeListLabelingJobs(partialParams: ToOptional<{
      [K in keyof ListLabelingJobsRequest]: (ListLabelingJobsRequest)[K]
    }>): Request<ListLabelingJobsResponse, AWSError> {
        this.boot();
        return this.client.listLabelingJobs(
          this.ops["ListLabelingJobs"].apply(partialParams)
        );
    }

    invokeListLabelingJobsForWorkteam(partialParams: ToOptional<{
      [K in keyof ListLabelingJobsForWorkteamRequest]: (ListLabelingJobsForWorkteamRequest)[K]
    }>): Request<ListLabelingJobsForWorkteamResponse, AWSError> {
        this.boot();
        return this.client.listLabelingJobsForWorkteam(
          this.ops["ListLabelingJobsForWorkteam"].apply(partialParams)
        );
    }

    invokeListLineageGroups(partialParams: ToOptional<{
      [K in keyof ListLineageGroupsRequest]: (ListLineageGroupsRequest)[K]
    }>): Request<ListLineageGroupsResponse, AWSError> {
        this.boot();
        return this.client.listLineageGroups(
          this.ops["ListLineageGroups"].apply(partialParams)
        );
    }

    invokeListModelBiasJobDefinitions(partialParams: ToOptional<{
      [K in keyof ListModelBiasJobDefinitionsRequest]: (ListModelBiasJobDefinitionsRequest)[K]
    }>): Request<ListModelBiasJobDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.listModelBiasJobDefinitions(
          this.ops["ListModelBiasJobDefinitions"].apply(partialParams)
        );
    }

    invokeListModelExplainabilityJobDefinitions(partialParams: ToOptional<{
      [K in keyof ListModelExplainabilityJobDefinitionsRequest]: (ListModelExplainabilityJobDefinitionsRequest)[K]
    }>): Request<ListModelExplainabilityJobDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.listModelExplainabilityJobDefinitions(
          this.ops["ListModelExplainabilityJobDefinitions"].apply(partialParams)
        );
    }

    invokeListModelMetadata(partialParams: ToOptional<{
      [K in keyof ListModelMetadataRequest]: (ListModelMetadataRequest)[K]
    }>): Request<ListModelMetadataResponse, AWSError> {
        this.boot();
        return this.client.listModelMetadata(
          this.ops["ListModelMetadata"].apply(partialParams)
        );
    }

    invokeListModelPackageGroups(partialParams: ToOptional<{
      [K in keyof ListModelPackageGroupsInput]: (ListModelPackageGroupsInput)[K]
    }>): Request<ListModelPackageGroupsOutput, AWSError> {
        this.boot();
        return this.client.listModelPackageGroups(
          this.ops["ListModelPackageGroups"].apply(partialParams)
        );
    }

    invokeListModelPackages(partialParams: ToOptional<{
      [K in keyof ListModelPackagesInput]: (ListModelPackagesInput)[K]
    }>): Request<ListModelPackagesOutput, AWSError> {
        this.boot();
        return this.client.listModelPackages(
          this.ops["ListModelPackages"].apply(partialParams)
        );
    }

    invokeListModelQualityJobDefinitions(partialParams: ToOptional<{
      [K in keyof ListModelQualityJobDefinitionsRequest]: (ListModelQualityJobDefinitionsRequest)[K]
    }>): Request<ListModelQualityJobDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.listModelQualityJobDefinitions(
          this.ops["ListModelQualityJobDefinitions"].apply(partialParams)
        );
    }

    invokeListModels(partialParams: ToOptional<{
      [K in keyof ListModelsInput]: (ListModelsInput)[K]
    }>): Request<ListModelsOutput, AWSError> {
        this.boot();
        return this.client.listModels(
          this.ops["ListModels"].apply(partialParams)
        );
    }

    invokeListMonitoringExecutions(partialParams: ToOptional<{
      [K in keyof ListMonitoringExecutionsRequest]: (ListMonitoringExecutionsRequest)[K]
    }>): Request<ListMonitoringExecutionsResponse, AWSError> {
        this.boot();
        return this.client.listMonitoringExecutions(
          this.ops["ListMonitoringExecutions"].apply(partialParams)
        );
    }

    invokeListMonitoringSchedules(partialParams: ToOptional<{
      [K in keyof ListMonitoringSchedulesRequest]: (ListMonitoringSchedulesRequest)[K]
    }>): Request<ListMonitoringSchedulesResponse, AWSError> {
        this.boot();
        return this.client.listMonitoringSchedules(
          this.ops["ListMonitoringSchedules"].apply(partialParams)
        );
    }

    invokeListNotebookInstanceLifecycleConfigs(partialParams: ToOptional<{
      [K in keyof ListNotebookInstanceLifecycleConfigsInput]: (ListNotebookInstanceLifecycleConfigsInput)[K]
    }>): Request<ListNotebookInstanceLifecycleConfigsOutput, AWSError> {
        this.boot();
        return this.client.listNotebookInstanceLifecycleConfigs(
          this.ops["ListNotebookInstanceLifecycleConfigs"].apply(partialParams)
        );
    }

    invokeListNotebookInstances(partialParams: ToOptional<{
      [K in keyof ListNotebookInstancesInput]: (ListNotebookInstancesInput)[K]
    }>): Request<ListNotebookInstancesOutput, AWSError> {
        this.boot();
        return this.client.listNotebookInstances(
          this.ops["ListNotebookInstances"].apply(partialParams)
        );
    }

    invokeListPipelineExecutionSteps(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionStepsRequest]: (ListPipelineExecutionStepsRequest)[K]
    }>): Request<ListPipelineExecutionStepsResponse, AWSError> {
        this.boot();
        return this.client.listPipelineExecutionSteps(
          this.ops["ListPipelineExecutionSteps"].apply(partialParams)
        );
    }

    invokeListPipelineExecutions(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionsRequest]: (ListPipelineExecutionsRequest)[K]
    }>): Request<ListPipelineExecutionsResponse, AWSError> {
        this.boot();
        return this.client.listPipelineExecutions(
          this.ops["ListPipelineExecutions"].apply(partialParams)
        );
    }

    invokeListPipelineParametersForExecution(partialParams: ToOptional<{
      [K in keyof ListPipelineParametersForExecutionRequest]: (ListPipelineParametersForExecutionRequest)[K]
    }>): Request<ListPipelineParametersForExecutionResponse, AWSError> {
        this.boot();
        return this.client.listPipelineParametersForExecution(
          this.ops["ListPipelineParametersForExecution"].apply(partialParams)
        );
    }

    invokeListPipelines(partialParams: ToOptional<{
      [K in keyof ListPipelinesRequest]: (ListPipelinesRequest)[K]
    }>): Request<ListPipelinesResponse, AWSError> {
        this.boot();
        return this.client.listPipelines(
          this.ops["ListPipelines"].apply(partialParams)
        );
    }

    invokeListProcessingJobs(partialParams: ToOptional<{
      [K in keyof ListProcessingJobsRequest]: (ListProcessingJobsRequest)[K]
    }>): Request<ListProcessingJobsResponse, AWSError> {
        this.boot();
        return this.client.listProcessingJobs(
          this.ops["ListProcessingJobs"].apply(partialParams)
        );
    }

    invokeListProjects(partialParams: ToOptional<{
      [K in keyof ListProjectsInput]: (ListProjectsInput)[K]
    }>): Request<ListProjectsOutput, AWSError> {
        this.boot();
        return this.client.listProjects(
          this.ops["ListProjects"].apply(partialParams)
        );
    }

    invokeListStudioLifecycleConfigs(partialParams: ToOptional<{
      [K in keyof ListStudioLifecycleConfigsRequest]: (ListStudioLifecycleConfigsRequest)[K]
    }>): Request<ListStudioLifecycleConfigsResponse, AWSError> {
        this.boot();
        return this.client.listStudioLifecycleConfigs(
          this.ops["ListStudioLifecycleConfigs"].apply(partialParams)
        );
    }

    invokeListSubscribedWorkteams(partialParams: ToOptional<{
      [K in keyof ListSubscribedWorkteamsRequest]: (ListSubscribedWorkteamsRequest)[K]
    }>): Request<ListSubscribedWorkteamsResponse, AWSError> {
        this.boot();
        return this.client.listSubscribedWorkteams(
          this.ops["ListSubscribedWorkteams"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsInput]: (ListTagsInput)[K]
    }>): Request<ListTagsOutput, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListTrainingJobs(partialParams: ToOptional<{
      [K in keyof ListTrainingJobsRequest]: (ListTrainingJobsRequest)[K]
    }>): Request<ListTrainingJobsResponse, AWSError> {
        this.boot();
        return this.client.listTrainingJobs(
          this.ops["ListTrainingJobs"].apply(partialParams)
        );
    }

    invokeListTrainingJobsForHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof ListTrainingJobsForHyperParameterTuningJobRequest]: (ListTrainingJobsForHyperParameterTuningJobRequest)[K]
    }>): Request<ListTrainingJobsForHyperParameterTuningJobResponse, AWSError> {
        this.boot();
        return this.client.listTrainingJobsForHyperParameterTuningJob(
          this.ops["ListTrainingJobsForHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokeListTransformJobs(partialParams: ToOptional<{
      [K in keyof ListTransformJobsRequest]: (ListTransformJobsRequest)[K]
    }>): Request<ListTransformJobsResponse, AWSError> {
        this.boot();
        return this.client.listTransformJobs(
          this.ops["ListTransformJobs"].apply(partialParams)
        );
    }

    invokeListTrialComponents(partialParams: ToOptional<{
      [K in keyof ListTrialComponentsRequest]: (ListTrialComponentsRequest)[K]
    }>): Request<ListTrialComponentsResponse, AWSError> {
        this.boot();
        return this.client.listTrialComponents(
          this.ops["ListTrialComponents"].apply(partialParams)
        );
    }

    invokeListTrials(partialParams: ToOptional<{
      [K in keyof ListTrialsRequest]: (ListTrialsRequest)[K]
    }>): Request<ListTrialsResponse, AWSError> {
        this.boot();
        return this.client.listTrials(
          this.ops["ListTrials"].apply(partialParams)
        );
    }

    invokeListUserProfiles(partialParams: ToOptional<{
      [K in keyof ListUserProfilesRequest]: (ListUserProfilesRequest)[K]
    }>): Request<ListUserProfilesResponse, AWSError> {
        this.boot();
        return this.client.listUserProfiles(
          this.ops["ListUserProfiles"].apply(partialParams)
        );
    }

    invokeListWorkforces(partialParams: ToOptional<{
      [K in keyof ListWorkforcesRequest]: (ListWorkforcesRequest)[K]
    }>): Request<ListWorkforcesResponse, AWSError> {
        this.boot();
        return this.client.listWorkforces(
          this.ops["ListWorkforces"].apply(partialParams)
        );
    }

    invokeListWorkteams(partialParams: ToOptional<{
      [K in keyof ListWorkteamsRequest]: (ListWorkteamsRequest)[K]
    }>): Request<ListWorkteamsResponse, AWSError> {
        this.boot();
        return this.client.listWorkteams(
          this.ops["ListWorkteams"].apply(partialParams)
        );
    }

    invokePutModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof PutModelPackageGroupPolicyInput]: (PutModelPackageGroupPolicyInput)[K]
    }>): Request<PutModelPackageGroupPolicyOutput, AWSError> {
        this.boot();
        return this.client.putModelPackageGroupPolicy(
          this.ops["PutModelPackageGroupPolicy"].apply(partialParams)
        );
    }

    invokeQueryLineage(partialParams: ToOptional<{
      [K in keyof QueryLineageRequest]: (QueryLineageRequest)[K]
    }>): Request<QueryLineageResponse, AWSError> {
        this.boot();
        return this.client.queryLineage(
          this.ops["QueryLineage"].apply(partialParams)
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

    invokeRetryPipelineExecution(partialParams: ToOptional<{
      [K in keyof RetryPipelineExecutionRequest]: (RetryPipelineExecutionRequest)[K]
    }>): Request<RetryPipelineExecutionResponse, AWSError> {
        this.boot();
        return this.client.retryPipelineExecution(
          this.ops["RetryPipelineExecution"].apply(partialParams)
        );
    }

    invokeSearch(partialParams: ToOptional<{
      [K in keyof SearchRequest]: (SearchRequest)[K]
    }>): Request<SearchResponse, AWSError> {
        this.boot();
        return this.client.search(
          this.ops["Search"].apply(partialParams)
        );
    }

    invokeSendPipelineExecutionStepFailure(partialParams: ToOptional<{
      [K in keyof SendPipelineExecutionStepFailureRequest]: (SendPipelineExecutionStepFailureRequest)[K]
    }>): Request<SendPipelineExecutionStepFailureResponse, AWSError> {
        this.boot();
        return this.client.sendPipelineExecutionStepFailure(
          this.ops["SendPipelineExecutionStepFailure"].apply(partialParams)
        );
    }

    invokeSendPipelineExecutionStepSuccess(partialParams: ToOptional<{
      [K in keyof SendPipelineExecutionStepSuccessRequest]: (SendPipelineExecutionStepSuccessRequest)[K]
    }>): Request<SendPipelineExecutionStepSuccessResponse, AWSError> {
        this.boot();
        return this.client.sendPipelineExecutionStepSuccess(
          this.ops["SendPipelineExecutionStepSuccess"].apply(partialParams)
        );
    }

    invokeStartPipelineExecution(partialParams: ToOptional<{
      [K in keyof StartPipelineExecutionRequest]: (StartPipelineExecutionRequest)[K]
    }>): Request<StartPipelineExecutionResponse, AWSError> {
        this.boot();
        return this.client.startPipelineExecution(
          this.ops["StartPipelineExecution"].apply(partialParams)
        );
    }

    invokeStopPipelineExecution(partialParams: ToOptional<{
      [K in keyof StopPipelineExecutionRequest]: (StopPipelineExecutionRequest)[K]
    }>): Request<StopPipelineExecutionResponse, AWSError> {
        this.boot();
        return this.client.stopPipelineExecution(
          this.ops["StopPipelineExecution"].apply(partialParams)
        );
    }

    invokeUpdateAction(partialParams: ToOptional<{
      [K in keyof UpdateActionRequest]: (UpdateActionRequest)[K]
    }>): Request<UpdateActionResponse, AWSError> {
        this.boot();
        return this.client.updateAction(
          this.ops["UpdateAction"].apply(partialParams)
        );
    }

    invokeUpdateAppImageConfig(partialParams: ToOptional<{
      [K in keyof UpdateAppImageConfigRequest]: (UpdateAppImageConfigRequest)[K]
    }>): Request<UpdateAppImageConfigResponse, AWSError> {
        this.boot();
        return this.client.updateAppImageConfig(
          this.ops["UpdateAppImageConfig"].apply(partialParams)
        );
    }

    invokeUpdateArtifact(partialParams: ToOptional<{
      [K in keyof UpdateArtifactRequest]: (UpdateArtifactRequest)[K]
    }>): Request<UpdateArtifactResponse, AWSError> {
        this.boot();
        return this.client.updateArtifact(
          this.ops["UpdateArtifact"].apply(partialParams)
        );
    }

    invokeUpdateCodeRepository(partialParams: ToOptional<{
      [K in keyof UpdateCodeRepositoryInput]: (UpdateCodeRepositoryInput)[K]
    }>): Request<UpdateCodeRepositoryOutput, AWSError> {
        this.boot();
        return this.client.updateCodeRepository(
          this.ops["UpdateCodeRepository"].apply(partialParams)
        );
    }

    invokeUpdateContext(partialParams: ToOptional<{
      [K in keyof UpdateContextRequest]: (UpdateContextRequest)[K]
    }>): Request<UpdateContextResponse, AWSError> {
        this.boot();
        return this.client.updateContext(
          this.ops["UpdateContext"].apply(partialParams)
        );
    }

    invokeUpdateDomain(partialParams: ToOptional<{
      [K in keyof UpdateDomainRequest]: (UpdateDomainRequest)[K]
    }>): Request<UpdateDomainResponse, AWSError> {
        this.boot();
        return this.client.updateDomain(
          this.ops["UpdateDomain"].apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointInput]: (UpdateEndpointInput)[K]
    }>): Request<UpdateEndpointOutput, AWSError> {
        this.boot();
        return this.client.updateEndpoint(
          this.ops["UpdateEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateEndpointWeightsAndCapacities(partialParams: ToOptional<{
      [K in keyof UpdateEndpointWeightsAndCapacitiesInput]: (UpdateEndpointWeightsAndCapacitiesInput)[K]
    }>): Request<UpdateEndpointWeightsAndCapacitiesOutput, AWSError> {
        this.boot();
        return this.client.updateEndpointWeightsAndCapacities(
          this.ops["UpdateEndpointWeightsAndCapacities"].apply(partialParams)
        );
    }

    invokeUpdateExperiment(partialParams: ToOptional<{
      [K in keyof UpdateExperimentRequest]: (UpdateExperimentRequest)[K]
    }>): Request<UpdateExperimentResponse, AWSError> {
        this.boot();
        return this.client.updateExperiment(
          this.ops["UpdateExperiment"].apply(partialParams)
        );
    }

    invokeUpdateImage(partialParams: ToOptional<{
      [K in keyof UpdateImageRequest & keyof Omit<UpdateImageRequest, "ImageName">]: (UpdateImageRequest)[K]
    }>): Request<UpdateImageResponse, AWSError> {
        this.boot();
        return this.client.updateImage(
          this.ops["UpdateImage"].apply(partialParams)
        );
    }

    invokeUpdateModelPackage(partialParams: ToOptional<{
      [K in keyof UpdateModelPackageInput]: (UpdateModelPackageInput)[K]
    }>): Request<UpdateModelPackageOutput, AWSError> {
        this.boot();
        return this.client.updateModelPackage(
          this.ops["UpdateModelPackage"].apply(partialParams)
        );
    }

    invokeUpdateMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof UpdateMonitoringScheduleRequest]: (UpdateMonitoringScheduleRequest)[K]
    }>): Request<UpdateMonitoringScheduleResponse, AWSError> {
        this.boot();
        return this.client.updateMonitoringSchedule(
          this.ops["UpdateMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeUpdateNotebookInstance(partialParams: ToOptional<{
      [K in keyof UpdateNotebookInstanceInput]: (UpdateNotebookInstanceInput)[K]
    }>): Request<UpdateNotebookInstanceOutput, AWSError> {
        this.boot();
        return this.client.updateNotebookInstance(
          this.ops["UpdateNotebookInstance"].apply(partialParams)
        );
    }

    invokeUpdateNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof UpdateNotebookInstanceLifecycleConfigInput]: (UpdateNotebookInstanceLifecycleConfigInput)[K]
    }>): Request<UpdateNotebookInstanceLifecycleConfigOutput, AWSError> {
        this.boot();
        return this.client.updateNotebookInstanceLifecycleConfig(
          this.ops["UpdateNotebookInstanceLifecycleConfig"].apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineRequest]: (UpdatePipelineRequest)[K]
    }>): Request<UpdatePipelineResponse, AWSError> {
        this.boot();
        return this.client.updatePipeline(
          this.ops["UpdatePipeline"].apply(partialParams)
        );
    }

    invokeUpdatePipelineExecution(partialParams: ToOptional<{
      [K in keyof UpdatePipelineExecutionRequest]: (UpdatePipelineExecutionRequest)[K]
    }>): Request<UpdatePipelineExecutionResponse, AWSError> {
        this.boot();
        return this.client.updatePipelineExecution(
          this.ops["UpdatePipelineExecution"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput]: (UpdateProjectInput)[K]
    }>): Request<UpdateProjectOutput, AWSError> {
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].apply(partialParams)
        );
    }

    invokeUpdateTrainingJob(partialParams: ToOptional<{
      [K in keyof UpdateTrainingJobRequest]: (UpdateTrainingJobRequest)[K]
    }>): Request<UpdateTrainingJobResponse, AWSError> {
        this.boot();
        return this.client.updateTrainingJob(
          this.ops["UpdateTrainingJob"].apply(partialParams)
        );
    }

    invokeUpdateTrial(partialParams: ToOptional<{
      [K in keyof UpdateTrialRequest]: (UpdateTrialRequest)[K]
    }>): Request<UpdateTrialResponse, AWSError> {
        this.boot();
        return this.client.updateTrial(
          this.ops["UpdateTrial"].apply(partialParams)
        );
    }

    invokeUpdateTrialComponent(partialParams: ToOptional<{
      [K in keyof UpdateTrialComponentRequest]: (UpdateTrialComponentRequest)[K]
    }>): Request<UpdateTrialComponentResponse, AWSError> {
        this.boot();
        return this.client.updateTrialComponent(
          this.ops["UpdateTrialComponent"].apply(partialParams)
        );
    }

    invokeUpdateUserProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserProfileRequest]: (UpdateUserProfileRequest)[K]
    }>): Request<UpdateUserProfileResponse, AWSError> {
        this.boot();
        return this.client.updateUserProfile(
          this.ops["UpdateUserProfile"].apply(partialParams)
        );
    }

    invokeUpdateWorkforce(partialParams: ToOptional<{
      [K in keyof UpdateWorkforceRequest]: (UpdateWorkforceRequest)[K]
    }>): Request<UpdateWorkforceResponse, AWSError> {
        this.boot();
        return this.client.updateWorkforce(
          this.ops["UpdateWorkforce"].apply(partialParams)
        );
    }

    invokeUpdateWorkteam(partialParams: ToOptional<{
      [K in keyof UpdateWorkteamRequest]: (UpdateWorkteamRequest)[K]
    }>): Request<UpdateWorkteamResponse, AWSError> {
        this.boot();
        return this.client.updateWorkteam(
          this.ops["UpdateWorkteam"].apply(partialParams)
        );
    }
}