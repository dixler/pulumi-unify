
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.NotebookInstanceLifecycleConfiguration {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.NotebookInstanceLifecycleConfiguration>) {
        super(...args)
        this.client = new awssdk.SageMaker()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/sagemaker-2017-07-24.normal.json"), this.client)
    }

    invokeAddAssociation(partialParams: ToOptional<{
      [K in keyof AddAssociationRequest & keyof AddAssociationRequest & keyof AddAssociationRequest & keyof AddAssociationRequest]: (AddAssociationRequest & AddAssociationRequest & AddAssociationRequest & AddAssociationRequest)[K]
    }>): AddAssociationResponse {
        return this.client.addAssociation(
            this.ops["AddAssociation"].apply(partialParams)
        );
    }

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsInput & keyof AddTagsInput & keyof AddTagsInput & keyof AddTagsInput]: (AddTagsInput & AddTagsInput & AddTagsInput & AddTagsInput)[K]
    }>): AddTagsOutput {
        return this.client.addTags(
            this.ops["AddTags"].apply(partialParams)
        );
    }

    invokeAssociateTrialComponent(partialParams: ToOptional<{
      [K in keyof AssociateTrialComponentRequest & keyof AssociateTrialComponentRequest & keyof AssociateTrialComponentRequest & keyof AssociateTrialComponentRequest]: (AssociateTrialComponentRequest & AssociateTrialComponentRequest & AssociateTrialComponentRequest & AssociateTrialComponentRequest)[K]
    }>): AssociateTrialComponentResponse {
        return this.client.associateTrialComponent(
            this.ops["AssociateTrialComponent"].apply(partialParams)
        );
    }

    invokeBatchDescribeModelPackage(partialParams: ToOptional<{
      [K in keyof BatchDescribeModelPackageInput & keyof BatchDescribeModelPackageInput & keyof BatchDescribeModelPackageInput & keyof BatchDescribeModelPackageInput]: (BatchDescribeModelPackageInput & BatchDescribeModelPackageInput & BatchDescribeModelPackageInput & BatchDescribeModelPackageInput)[K]
    }>): BatchDescribeModelPackageOutput {
        return this.client.batchDescribeModelPackage(
            this.ops["BatchDescribeModelPackage"].apply(partialParams)
        );
    }

    invokeCreateAction(partialParams: ToOptional<{
      [K in keyof CreateActionRequest & keyof CreateActionRequest & keyof CreateActionRequest & keyof CreateActionRequest]: (CreateActionRequest & CreateActionRequest & CreateActionRequest & CreateActionRequest)[K]
    }>): CreateActionResponse {
        return this.client.createAction(
            this.ops["CreateAction"].apply(partialParams)
        );
    }

    invokeCreateAlgorithm(partialParams: ToOptional<{
      [K in keyof CreateAlgorithmInput & keyof CreateAlgorithmInput & keyof CreateAlgorithmInput & keyof CreateAlgorithmInput]: (CreateAlgorithmInput & CreateAlgorithmInput & CreateAlgorithmInput & CreateAlgorithmInput)[K]
    }>): CreateAlgorithmOutput {
        return this.client.createAlgorithm(
            this.ops["CreateAlgorithm"].apply(partialParams)
        );
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): CreateAppResponse {
        return this.client.createApp(
            this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateAppImageConfig(partialParams: ToOptional<{
      [K in keyof CreateAppImageConfigRequest & keyof CreateAppImageConfigRequest & keyof CreateAppImageConfigRequest & keyof CreateAppImageConfigRequest]: (CreateAppImageConfigRequest & CreateAppImageConfigRequest & CreateAppImageConfigRequest & CreateAppImageConfigRequest)[K]
    }>): CreateAppImageConfigResponse {
        return this.client.createAppImageConfig(
            this.ops["CreateAppImageConfig"].apply(partialParams)
        );
    }

    invokeCreateArtifact(partialParams: ToOptional<{
      [K in keyof CreateArtifactRequest & keyof CreateArtifactRequest & keyof CreateArtifactRequest & keyof CreateArtifactRequest]: (CreateArtifactRequest & CreateArtifactRequest & CreateArtifactRequest & CreateArtifactRequest)[K]
    }>): CreateArtifactResponse {
        return this.client.createArtifact(
            this.ops["CreateArtifact"].apply(partialParams)
        );
    }

    invokeCreateAutoMLJob(partialParams: ToOptional<{
      [K in keyof CreateAutoMLJobRequest & keyof CreateAutoMLJobRequest & keyof CreateAutoMLJobRequest & keyof CreateAutoMLJobRequest]: (CreateAutoMLJobRequest & CreateAutoMLJobRequest & CreateAutoMLJobRequest & CreateAutoMLJobRequest)[K]
    }>): CreateAutoMLJobResponse {
        return this.client.createAutoMLJob(
            this.ops["CreateAutoMLJob"].apply(partialParams)
        );
    }

    invokeCreateCodeRepository(partialParams: ToOptional<{
      [K in keyof CreateCodeRepositoryInput & keyof CreateCodeRepositoryInput & keyof CreateCodeRepositoryInput & keyof CreateCodeRepositoryInput]: (CreateCodeRepositoryInput & CreateCodeRepositoryInput & CreateCodeRepositoryInput & CreateCodeRepositoryInput)[K]
    }>): CreateCodeRepositoryOutput {
        return this.client.createCodeRepository(
            this.ops["CreateCodeRepository"].apply(partialParams)
        );
    }

    invokeCreateCompilationJob(partialParams: ToOptional<{
      [K in keyof CreateCompilationJobRequest & keyof CreateCompilationJobRequest & keyof CreateCompilationJobRequest & keyof CreateCompilationJobRequest]: (CreateCompilationJobRequest & CreateCompilationJobRequest & CreateCompilationJobRequest & CreateCompilationJobRequest)[K]
    }>): CreateCompilationJobResponse {
        return this.client.createCompilationJob(
            this.ops["CreateCompilationJob"].apply(partialParams)
        );
    }

    invokeCreateContext(partialParams: ToOptional<{
      [K in keyof CreateContextRequest & keyof CreateContextRequest & keyof CreateContextRequest & keyof CreateContextRequest]: (CreateContextRequest & CreateContextRequest & CreateContextRequest & CreateContextRequest)[K]
    }>): CreateContextResponse {
        return this.client.createContext(
            this.ops["CreateContext"].apply(partialParams)
        );
    }

    invokeCreateDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateDataQualityJobDefinitionRequest & keyof CreateDataQualityJobDefinitionRequest & keyof CreateDataQualityJobDefinitionRequest & keyof CreateDataQualityJobDefinitionRequest]: (CreateDataQualityJobDefinitionRequest & CreateDataQualityJobDefinitionRequest & CreateDataQualityJobDefinitionRequest & CreateDataQualityJobDefinitionRequest)[K]
    }>): CreateDataQualityJobDefinitionResponse {
        return this.client.createDataQualityJobDefinition(
            this.ops["CreateDataQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateDeviceFleet(partialParams: ToOptional<{
      [K in keyof CreateDeviceFleetRequest & keyof CreateDeviceFleetRequest & keyof CreateDeviceFleetRequest & keyof CreateDeviceFleetRequest]: (CreateDeviceFleetRequest & CreateDeviceFleetRequest & CreateDeviceFleetRequest & CreateDeviceFleetRequest)[K]
    }>): void {
        return this.client.createDeviceFleet(
            this.ops["CreateDeviceFleet"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest)[K]
    }>): CreateDomainResponse {
        return this.client.createDomain(
            this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeCreateEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof CreateEdgePackagingJobRequest & keyof CreateEdgePackagingJobRequest & keyof CreateEdgePackagingJobRequest & keyof CreateEdgePackagingJobRequest]: (CreateEdgePackagingJobRequest & CreateEdgePackagingJobRequest & CreateEdgePackagingJobRequest & CreateEdgePackagingJobRequest)[K]
    }>): void {
        return this.client.createEdgePackagingJob(
            this.ops["CreateEdgePackagingJob"].apply(partialParams)
        );
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointInput & keyof CreateEndpointInput & keyof CreateEndpointInput & keyof CreateEndpointInput]: (CreateEndpointInput & CreateEndpointInput & CreateEndpointInput & CreateEndpointInput)[K]
    }>): CreateEndpointOutput {
        return this.client.createEndpoint(
            this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeCreateEndpointConfig(partialParams: ToOptional<{
      [K in keyof CreateEndpointConfigInput & keyof CreateEndpointConfigInput & keyof CreateEndpointConfigInput & keyof CreateEndpointConfigInput]: (CreateEndpointConfigInput & CreateEndpointConfigInput & CreateEndpointConfigInput & CreateEndpointConfigInput)[K]
    }>): CreateEndpointConfigOutput {
        return this.client.createEndpointConfig(
            this.ops["CreateEndpointConfig"].apply(partialParams)
        );
    }

    invokeCreateExperiment(partialParams: ToOptional<{
      [K in keyof CreateExperimentRequest & keyof CreateExperimentRequest & keyof CreateExperimentRequest & keyof CreateExperimentRequest]: (CreateExperimentRequest & CreateExperimentRequest & CreateExperimentRequest & CreateExperimentRequest)[K]
    }>): CreateExperimentResponse {
        return this.client.createExperiment(
            this.ops["CreateExperiment"].apply(partialParams)
        );
    }

    invokeCreateFeatureGroup(partialParams: ToOptional<{
      [K in keyof CreateFeatureGroupRequest & keyof CreateFeatureGroupRequest & keyof CreateFeatureGroupRequest & keyof CreateFeatureGroupRequest]: (CreateFeatureGroupRequest & CreateFeatureGroupRequest & CreateFeatureGroupRequest & CreateFeatureGroupRequest)[K]
    }>): CreateFeatureGroupResponse {
        return this.client.createFeatureGroup(
            this.ops["CreateFeatureGroup"].apply(partialParams)
        );
    }

    invokeCreateFlowDefinition(partialParams: ToOptional<{
      [K in keyof CreateFlowDefinitionRequest & keyof CreateFlowDefinitionRequest & keyof CreateFlowDefinitionRequest & keyof CreateFlowDefinitionRequest]: (CreateFlowDefinitionRequest & CreateFlowDefinitionRequest & CreateFlowDefinitionRequest & CreateFlowDefinitionRequest)[K]
    }>): CreateFlowDefinitionResponse {
        return this.client.createFlowDefinition(
            this.ops["CreateFlowDefinition"].apply(partialParams)
        );
    }

    invokeCreateHumanTaskUi(partialParams: ToOptional<{
      [K in keyof CreateHumanTaskUiRequest & keyof CreateHumanTaskUiRequest & keyof CreateHumanTaskUiRequest & keyof CreateHumanTaskUiRequest]: (CreateHumanTaskUiRequest & CreateHumanTaskUiRequest & CreateHumanTaskUiRequest & CreateHumanTaskUiRequest)[K]
    }>): CreateHumanTaskUiResponse {
        return this.client.createHumanTaskUi(
            this.ops["CreateHumanTaskUi"].apply(partialParams)
        );
    }

    invokeCreateHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof CreateHyperParameterTuningJobRequest & keyof CreateHyperParameterTuningJobRequest & keyof CreateHyperParameterTuningJobRequest & keyof CreateHyperParameterTuningJobRequest]: (CreateHyperParameterTuningJobRequest & CreateHyperParameterTuningJobRequest & CreateHyperParameterTuningJobRequest & CreateHyperParameterTuningJobRequest)[K]
    }>): CreateHyperParameterTuningJobResponse {
        return this.client.createHyperParameterTuningJob(
            this.ops["CreateHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest]: (CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest)[K]
    }>): CreateImageResponse {
        return this.client.createImage(
            this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateImageVersion(partialParams: ToOptional<{
      [K in keyof CreateImageVersionRequest & keyof CreateImageVersionRequest & keyof CreateImageVersionRequest & keyof CreateImageVersionRequest]: (CreateImageVersionRequest & CreateImageVersionRequest & CreateImageVersionRequest & CreateImageVersionRequest)[K]
    }>): CreateImageVersionResponse {
        return this.client.createImageVersion(
            this.ops["CreateImageVersion"].apply(partialParams)
        );
    }

    invokeCreateInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof CreateInferenceRecommendationsJobRequest & keyof CreateInferenceRecommendationsJobRequest & keyof CreateInferenceRecommendationsJobRequest & keyof CreateInferenceRecommendationsJobRequest]: (CreateInferenceRecommendationsJobRequest & CreateInferenceRecommendationsJobRequest & CreateInferenceRecommendationsJobRequest & CreateInferenceRecommendationsJobRequest)[K]
    }>): CreateInferenceRecommendationsJobResponse {
        return this.client.createInferenceRecommendationsJob(
            this.ops["CreateInferenceRecommendationsJob"].apply(partialParams)
        );
    }

    invokeCreateLabelingJob(partialParams: ToOptional<{
      [K in keyof CreateLabelingJobRequest & keyof CreateLabelingJobRequest & keyof CreateLabelingJobRequest & keyof CreateLabelingJobRequest]: (CreateLabelingJobRequest & CreateLabelingJobRequest & CreateLabelingJobRequest & CreateLabelingJobRequest)[K]
    }>): CreateLabelingJobResponse {
        return this.client.createLabelingJob(
            this.ops["CreateLabelingJob"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelInput & keyof CreateModelInput & keyof CreateModelInput & keyof CreateModelInput]: (CreateModelInput & CreateModelInput & CreateModelInput & CreateModelInput)[K]
    }>): CreateModelOutput {
        return this.client.createModel(
            this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelBiasJobDefinitionRequest & keyof CreateModelBiasJobDefinitionRequest & keyof CreateModelBiasJobDefinitionRequest & keyof CreateModelBiasJobDefinitionRequest]: (CreateModelBiasJobDefinitionRequest & CreateModelBiasJobDefinitionRequest & CreateModelBiasJobDefinitionRequest & CreateModelBiasJobDefinitionRequest)[K]
    }>): CreateModelBiasJobDefinitionResponse {
        return this.client.createModelBiasJobDefinition(
            this.ops["CreateModelBiasJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelExplainabilityJobDefinitionRequest & keyof CreateModelExplainabilityJobDefinitionRequest & keyof CreateModelExplainabilityJobDefinitionRequest & keyof CreateModelExplainabilityJobDefinitionRequest]: (CreateModelExplainabilityJobDefinitionRequest & CreateModelExplainabilityJobDefinitionRequest & CreateModelExplainabilityJobDefinitionRequest & CreateModelExplainabilityJobDefinitionRequest)[K]
    }>): CreateModelExplainabilityJobDefinitionResponse {
        return this.client.createModelExplainabilityJobDefinition(
            this.ops["CreateModelExplainabilityJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateModelPackageGroup(partialParams: ToOptional<{
      [K in keyof CreateModelPackageGroupInput & keyof CreateModelPackageGroupInput & keyof CreateModelPackageGroupInput & keyof CreateModelPackageGroupInput]: (CreateModelPackageGroupInput & CreateModelPackageGroupInput & CreateModelPackageGroupInput & CreateModelPackageGroupInput)[K]
    }>): CreateModelPackageGroupOutput {
        return this.client.createModelPackageGroup(
            this.ops["CreateModelPackageGroup"].apply(partialParams)
        );
    }

    invokeCreateModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof CreateModelQualityJobDefinitionRequest & keyof CreateModelQualityJobDefinitionRequest & keyof CreateModelQualityJobDefinitionRequest & keyof CreateModelQualityJobDefinitionRequest]: (CreateModelQualityJobDefinitionRequest & CreateModelQualityJobDefinitionRequest & CreateModelQualityJobDefinitionRequest & CreateModelQualityJobDefinitionRequest)[K]
    }>): CreateModelQualityJobDefinitionResponse {
        return this.client.createModelQualityJobDefinition(
            this.ops["CreateModelQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeCreateMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof CreateMonitoringScheduleRequest & keyof CreateMonitoringScheduleRequest & keyof CreateMonitoringScheduleRequest & keyof CreateMonitoringScheduleRequest]: (CreateMonitoringScheduleRequest & CreateMonitoringScheduleRequest & CreateMonitoringScheduleRequest & CreateMonitoringScheduleRequest)[K]
    }>): CreateMonitoringScheduleResponse {
        return this.client.createMonitoringSchedule(
            this.ops["CreateMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeCreateNotebookInstance(partialParams: ToOptional<{
      [K in keyof CreateNotebookInstanceInput & keyof CreateNotebookInstanceInput & keyof CreateNotebookInstanceInput & keyof CreateNotebookInstanceInput]: (CreateNotebookInstanceInput & CreateNotebookInstanceInput & CreateNotebookInstanceInput & CreateNotebookInstanceInput)[K]
    }>): CreateNotebookInstanceOutput {
        return this.client.createNotebookInstance(
            this.ops["CreateNotebookInstance"].apply(partialParams)
        );
    }

    invokeCreateNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof CreateNotebookInstanceLifecycleConfigInput & keyof CreateNotebookInstanceLifecycleConfigInput & keyof CreateNotebookInstanceLifecycleConfigInput & keyof CreateNotebookInstanceLifecycleConfigInput]: (CreateNotebookInstanceLifecycleConfigInput & CreateNotebookInstanceLifecycleConfigInput & CreateNotebookInstanceLifecycleConfigInput & CreateNotebookInstanceLifecycleConfigInput)[K]
    }>): CreateNotebookInstanceLifecycleConfigOutput {
        return this.client.createNotebookInstanceLifecycleConfig(
            this.ops["CreateNotebookInstanceLifecycleConfig"].apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest]: (CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest)[K]
    }>): CreatePipelineResponse {
        return this.client.createPipeline(
            this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeCreatePresignedDomainUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedDomainUrlRequest & keyof CreatePresignedDomainUrlRequest & keyof CreatePresignedDomainUrlRequest & keyof CreatePresignedDomainUrlRequest]: (CreatePresignedDomainUrlRequest & CreatePresignedDomainUrlRequest & CreatePresignedDomainUrlRequest & CreatePresignedDomainUrlRequest)[K]
    }>): CreatePresignedDomainUrlResponse {
        return this.client.createPresignedDomainUrl(
            this.ops["CreatePresignedDomainUrl"].apply(partialParams)
        );
    }

    invokeCreatePresignedNotebookInstanceUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedNotebookInstanceUrlInput & keyof CreatePresignedNotebookInstanceUrlInput & keyof CreatePresignedNotebookInstanceUrlInput & keyof CreatePresignedNotebookInstanceUrlInput]: (CreatePresignedNotebookInstanceUrlInput & CreatePresignedNotebookInstanceUrlInput & CreatePresignedNotebookInstanceUrlInput & CreatePresignedNotebookInstanceUrlInput)[K]
    }>): CreatePresignedNotebookInstanceUrlOutput {
        return this.client.createPresignedNotebookInstanceUrl(
            this.ops["CreatePresignedNotebookInstanceUrl"].apply(partialParams)
        );
    }

    invokeCreateProcessingJob(partialParams: ToOptional<{
      [K in keyof CreateProcessingJobRequest & keyof CreateProcessingJobRequest & keyof CreateProcessingJobRequest & keyof CreateProcessingJobRequest]: (CreateProcessingJobRequest & CreateProcessingJobRequest & CreateProcessingJobRequest & CreateProcessingJobRequest)[K]
    }>): CreateProcessingJobResponse {
        return this.client.createProcessingJob(
            this.ops["CreateProcessingJob"].apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput]: (CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput)[K]
    }>): CreateProjectOutput {
        return this.client.createProject(
            this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeCreateStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof CreateStudioLifecycleConfigRequest & keyof CreateStudioLifecycleConfigRequest & keyof CreateStudioLifecycleConfigRequest & keyof CreateStudioLifecycleConfigRequest]: (CreateStudioLifecycleConfigRequest & CreateStudioLifecycleConfigRequest & CreateStudioLifecycleConfigRequest & CreateStudioLifecycleConfigRequest)[K]
    }>): CreateStudioLifecycleConfigResponse {
        return this.client.createStudioLifecycleConfig(
            this.ops["CreateStudioLifecycleConfig"].apply(partialParams)
        );
    }

    invokeCreateTrainingJob(partialParams: ToOptional<{
      [K in keyof CreateTrainingJobRequest & keyof CreateTrainingJobRequest & keyof CreateTrainingJobRequest & keyof CreateTrainingJobRequest]: (CreateTrainingJobRequest & CreateTrainingJobRequest & CreateTrainingJobRequest & CreateTrainingJobRequest)[K]
    }>): CreateTrainingJobResponse {
        return this.client.createTrainingJob(
            this.ops["CreateTrainingJob"].apply(partialParams)
        );
    }

    invokeCreateTransformJob(partialParams: ToOptional<{
      [K in keyof CreateTransformJobRequest & keyof CreateTransformJobRequest & keyof CreateTransformJobRequest & keyof CreateTransformJobRequest]: (CreateTransformJobRequest & CreateTransformJobRequest & CreateTransformJobRequest & CreateTransformJobRequest)[K]
    }>): CreateTransformJobResponse {
        return this.client.createTransformJob(
            this.ops["CreateTransformJob"].apply(partialParams)
        );
    }

    invokeCreateTrial(partialParams: ToOptional<{
      [K in keyof CreateTrialRequest & keyof CreateTrialRequest & keyof CreateTrialRequest & keyof CreateTrialRequest]: (CreateTrialRequest & CreateTrialRequest & CreateTrialRequest & CreateTrialRequest)[K]
    }>): CreateTrialResponse {
        return this.client.createTrial(
            this.ops["CreateTrial"].apply(partialParams)
        );
    }

    invokeCreateTrialComponent(partialParams: ToOptional<{
      [K in keyof CreateTrialComponentRequest & keyof CreateTrialComponentRequest & keyof CreateTrialComponentRequest & keyof CreateTrialComponentRequest]: (CreateTrialComponentRequest & CreateTrialComponentRequest & CreateTrialComponentRequest & CreateTrialComponentRequest)[K]
    }>): CreateTrialComponentResponse {
        return this.client.createTrialComponent(
            this.ops["CreateTrialComponent"].apply(partialParams)
        );
    }

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest]: (CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest)[K]
    }>): CreateUserProfileResponse {
        return this.client.createUserProfile(
            this.ops["CreateUserProfile"].apply(partialParams)
        );
    }

    invokeCreateWorkforce(partialParams: ToOptional<{
      [K in keyof CreateWorkforceRequest & keyof CreateWorkforceRequest & keyof CreateWorkforceRequest & keyof CreateWorkforceRequest]: (CreateWorkforceRequest & CreateWorkforceRequest & CreateWorkforceRequest & CreateWorkforceRequest)[K]
    }>): CreateWorkforceResponse {
        return this.client.createWorkforce(
            this.ops["CreateWorkforce"].apply(partialParams)
        );
    }

    invokeCreateWorkteam(partialParams: ToOptional<{
      [K in keyof CreateWorkteamRequest & keyof CreateWorkteamRequest & keyof CreateWorkteamRequest & keyof CreateWorkteamRequest]: (CreateWorkteamRequest & CreateWorkteamRequest & CreateWorkteamRequest & CreateWorkteamRequest)[K]
    }>): CreateWorkteamResponse {
        return this.client.createWorkteam(
            this.ops["CreateWorkteam"].apply(partialParams)
        );
    }

    invokeDeleteAction(partialParams: ToOptional<{
      [K in keyof DeleteActionRequest & keyof DeleteActionRequest & keyof DeleteActionRequest & keyof DeleteActionRequest]: (DeleteActionRequest & DeleteActionRequest & DeleteActionRequest & DeleteActionRequest)[K]
    }>): DeleteActionResponse {
        return this.client.deleteAction(
            this.ops["DeleteAction"].apply(partialParams)
        );
    }

    invokeDeleteAlgorithm(partialParams: ToOptional<{
      [K in keyof DeleteAlgorithmInput & keyof DeleteAlgorithmInput & keyof DeleteAlgorithmInput & keyof DeleteAlgorithmInput]: (DeleteAlgorithmInput & DeleteAlgorithmInput & DeleteAlgorithmInput & DeleteAlgorithmInput)[K]
    }>): void {
        return this.client.deleteAlgorithm(
            this.ops["DeleteAlgorithm"].apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): void {
        return this.client.deleteApp(
            this.ops["DeleteApp"].apply(partialParams)
        );
    }

    invokeDeleteAppImageConfig(partialParams: ToOptional<{
      [K in keyof DeleteAppImageConfigRequest & keyof DeleteAppImageConfigRequest & keyof DeleteAppImageConfigRequest & keyof DeleteAppImageConfigRequest]: (DeleteAppImageConfigRequest & DeleteAppImageConfigRequest & DeleteAppImageConfigRequest & DeleteAppImageConfigRequest)[K]
    }>): void {
        return this.client.deleteAppImageConfig(
            this.ops["DeleteAppImageConfig"].apply(partialParams)
        );
    }

    invokeDeleteAssociation(partialParams: ToOptional<{
      [K in keyof DeleteAssociationRequest & keyof DeleteAssociationRequest & keyof DeleteAssociationRequest & keyof DeleteAssociationRequest]: (DeleteAssociationRequest & DeleteAssociationRequest & DeleteAssociationRequest & DeleteAssociationRequest)[K]
    }>): DeleteAssociationResponse {
        return this.client.deleteAssociation(
            this.ops["DeleteAssociation"].apply(partialParams)
        );
    }

    invokeDeleteCodeRepository(partialParams: ToOptional<{
      [K in keyof DeleteCodeRepositoryInput & keyof DeleteCodeRepositoryInput & keyof DeleteCodeRepositoryInput & keyof DeleteCodeRepositoryInput]: (DeleteCodeRepositoryInput & DeleteCodeRepositoryInput & DeleteCodeRepositoryInput & DeleteCodeRepositoryInput)[K]
    }>): void {
        return this.client.deleteCodeRepository(
            this.ops["DeleteCodeRepository"].apply(partialParams)
        );
    }

    invokeDeleteContext(partialParams: ToOptional<{
      [K in keyof DeleteContextRequest & keyof DeleteContextRequest & keyof DeleteContextRequest & keyof DeleteContextRequest]: (DeleteContextRequest & DeleteContextRequest & DeleteContextRequest & DeleteContextRequest)[K]
    }>): DeleteContextResponse {
        return this.client.deleteContext(
            this.ops["DeleteContext"].apply(partialParams)
        );
    }

    invokeDeleteDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteDataQualityJobDefinitionRequest & keyof DeleteDataQualityJobDefinitionRequest & keyof DeleteDataQualityJobDefinitionRequest & keyof DeleteDataQualityJobDefinitionRequest]: (DeleteDataQualityJobDefinitionRequest & DeleteDataQualityJobDefinitionRequest & DeleteDataQualityJobDefinitionRequest & DeleteDataQualityJobDefinitionRequest)[K]
    }>): void {
        return this.client.deleteDataQualityJobDefinition(
            this.ops["DeleteDataQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeDeleteDeviceFleet(partialParams: ToOptional<{
      [K in keyof DeleteDeviceFleetRequest & keyof DeleteDeviceFleetRequest & keyof DeleteDeviceFleetRequest & keyof DeleteDeviceFleetRequest]: (DeleteDeviceFleetRequest & DeleteDeviceFleetRequest & DeleteDeviceFleetRequest & DeleteDeviceFleetRequest)[K]
    }>): void {
        return this.client.deleteDeviceFleet(
            this.ops["DeleteDeviceFleet"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): void {
        return this.client.deleteDomain(
            this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput & keyof DeleteEndpointInput]: (DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput & DeleteEndpointInput)[K]
    }>): void {
        return this.client.deleteEndpoint(
            this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteEndpointConfig(partialParams: ToOptional<{
      [K in keyof DeleteEndpointConfigInput & keyof DeleteEndpointConfigInput & keyof DeleteEndpointConfigInput & keyof DeleteEndpointConfigInput]: (DeleteEndpointConfigInput & DeleteEndpointConfigInput & DeleteEndpointConfigInput & DeleteEndpointConfigInput)[K]
    }>): void {
        return this.client.deleteEndpointConfig(
            this.ops["DeleteEndpointConfig"].apply(partialParams)
        );
    }

    invokeDeleteExperiment(partialParams: ToOptional<{
      [K in keyof DeleteExperimentRequest & keyof DeleteExperimentRequest & keyof DeleteExperimentRequest & keyof DeleteExperimentRequest]: (DeleteExperimentRequest & DeleteExperimentRequest & DeleteExperimentRequest & DeleteExperimentRequest)[K]
    }>): DeleteExperimentResponse {
        return this.client.deleteExperiment(
            this.ops["DeleteExperiment"].apply(partialParams)
        );
    }

    invokeDeleteFeatureGroup(partialParams: ToOptional<{
      [K in keyof DeleteFeatureGroupRequest & keyof DeleteFeatureGroupRequest & keyof DeleteFeatureGroupRequest & keyof DeleteFeatureGroupRequest]: (DeleteFeatureGroupRequest & DeleteFeatureGroupRequest & DeleteFeatureGroupRequest & DeleteFeatureGroupRequest)[K]
    }>): void {
        return this.client.deleteFeatureGroup(
            this.ops["DeleteFeatureGroup"].apply(partialParams)
        );
    }

    invokeDeleteFlowDefinition(partialParams: ToOptional<{
      [K in keyof DeleteFlowDefinitionRequest & keyof DeleteFlowDefinitionRequest & keyof DeleteFlowDefinitionRequest & keyof DeleteFlowDefinitionRequest]: (DeleteFlowDefinitionRequest & DeleteFlowDefinitionRequest & DeleteFlowDefinitionRequest & DeleteFlowDefinitionRequest)[K]
    }>): DeleteFlowDefinitionResponse {
        return this.client.deleteFlowDefinition(
            this.ops["DeleteFlowDefinition"].apply(partialParams)
        );
    }

    invokeDeleteHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DeleteHumanTaskUiRequest & keyof DeleteHumanTaskUiRequest & keyof DeleteHumanTaskUiRequest & keyof DeleteHumanTaskUiRequest]: (DeleteHumanTaskUiRequest & DeleteHumanTaskUiRequest & DeleteHumanTaskUiRequest & DeleteHumanTaskUiRequest)[K]
    }>): DeleteHumanTaskUiResponse {
        return this.client.deleteHumanTaskUi(
            this.ops["DeleteHumanTaskUi"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest]: (DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest)[K]
    }>): DeleteImageResponse {
        return this.client.deleteImage(
            this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImageVersion(partialParams: ToOptional<{
      [K in keyof DeleteImageVersionRequest & keyof DeleteImageVersionRequest & keyof DeleteImageVersionRequest & keyof DeleteImageVersionRequest]: (DeleteImageVersionRequest & DeleteImageVersionRequest & DeleteImageVersionRequest & DeleteImageVersionRequest)[K]
    }>): DeleteImageVersionResponse {
        return this.client.deleteImageVersion(
            this.ops["DeleteImageVersion"].apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelInput & keyof DeleteModelInput & keyof DeleteModelInput & keyof DeleteModelInput]: (DeleteModelInput & DeleteModelInput & DeleteModelInput & DeleteModelInput)[K]
    }>): void {
        return this.client.deleteModel(
            this.ops["DeleteModel"].apply(partialParams)
        );
    }

    invokeDeleteModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteModelBiasJobDefinitionRequest & keyof DeleteModelBiasJobDefinitionRequest & keyof DeleteModelBiasJobDefinitionRequest & keyof DeleteModelBiasJobDefinitionRequest]: (DeleteModelBiasJobDefinitionRequest & DeleteModelBiasJobDefinitionRequest & DeleteModelBiasJobDefinitionRequest & DeleteModelBiasJobDefinitionRequest)[K]
    }>): void {
        return this.client.deleteModelBiasJobDefinition(
            this.ops["DeleteModelBiasJobDefinition"].apply(partialParams)
        );
    }

    invokeDeleteModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteModelExplainabilityJobDefinitionRequest & keyof DeleteModelExplainabilityJobDefinitionRequest & keyof DeleteModelExplainabilityJobDefinitionRequest & keyof DeleteModelExplainabilityJobDefinitionRequest]: (DeleteModelExplainabilityJobDefinitionRequest & DeleteModelExplainabilityJobDefinitionRequest & DeleteModelExplainabilityJobDefinitionRequest & DeleteModelExplainabilityJobDefinitionRequest)[K]
    }>): void {
        return this.client.deleteModelExplainabilityJobDefinition(
            this.ops["DeleteModelExplainabilityJobDefinition"].apply(partialParams)
        );
    }

    invokeDeleteModelPackage(partialParams: ToOptional<{
      [K in keyof DeleteModelPackageInput & keyof DeleteModelPackageInput & keyof DeleteModelPackageInput & keyof DeleteModelPackageInput]: (DeleteModelPackageInput & DeleteModelPackageInput & DeleteModelPackageInput & DeleteModelPackageInput)[K]
    }>): void {
        return this.client.deleteModelPackage(
            this.ops["DeleteModelPackage"].apply(partialParams)
        );
    }

    invokeDeleteModelPackageGroup(partialParams: ToOptional<{
      [K in keyof DeleteModelPackageGroupInput & keyof DeleteModelPackageGroupInput & keyof DeleteModelPackageGroupInput & keyof DeleteModelPackageGroupInput]: (DeleteModelPackageGroupInput & DeleteModelPackageGroupInput & DeleteModelPackageGroupInput & DeleteModelPackageGroupInput)[K]
    }>): void {
        return this.client.deleteModelPackageGroup(
            this.ops["DeleteModelPackageGroup"].apply(partialParams)
        );
    }

    invokeDeleteModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof DeleteModelPackageGroupPolicyInput & keyof DeleteModelPackageGroupPolicyInput & keyof DeleteModelPackageGroupPolicyInput & keyof DeleteModelPackageGroupPolicyInput]: (DeleteModelPackageGroupPolicyInput & DeleteModelPackageGroupPolicyInput & DeleteModelPackageGroupPolicyInput & DeleteModelPackageGroupPolicyInput)[K]
    }>): void {
        return this.client.deleteModelPackageGroupPolicy(
            this.ops["DeleteModelPackageGroupPolicy"].apply(partialParams)
        );
    }

    invokeDeleteModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DeleteModelQualityJobDefinitionRequest & keyof DeleteModelQualityJobDefinitionRequest & keyof DeleteModelQualityJobDefinitionRequest & keyof DeleteModelQualityJobDefinitionRequest]: (DeleteModelQualityJobDefinitionRequest & DeleteModelQualityJobDefinitionRequest & DeleteModelQualityJobDefinitionRequest & DeleteModelQualityJobDefinitionRequest)[K]
    }>): void {
        return this.client.deleteModelQualityJobDefinition(
            this.ops["DeleteModelQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeDeleteMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringScheduleRequest & keyof DeleteMonitoringScheduleRequest & keyof DeleteMonitoringScheduleRequest & keyof DeleteMonitoringScheduleRequest]: (DeleteMonitoringScheduleRequest & DeleteMonitoringScheduleRequest & DeleteMonitoringScheduleRequest & DeleteMonitoringScheduleRequest)[K]
    }>): void {
        return this.client.deleteMonitoringSchedule(
            this.ops["DeleteMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeDeleteNotebookInstance(partialParams: ToOptional<{
      [K in keyof DeleteNotebookInstanceInput & keyof DeleteNotebookInstanceInput & keyof DeleteNotebookInstanceInput & keyof DeleteNotebookInstanceInput]: (DeleteNotebookInstanceInput & DeleteNotebookInstanceInput & DeleteNotebookInstanceInput & DeleteNotebookInstanceInput)[K]
    }>): void {
        return this.client.deleteNotebookInstance(
            this.ops["DeleteNotebookInstance"].apply(partialParams)
        );
    }

    invokeDeleteNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DeleteNotebookInstanceLifecycleConfigInput & keyof DeleteNotebookInstanceLifecycleConfigInput & keyof DeleteNotebookInstanceLifecycleConfigInput & keyof DeleteNotebookInstanceLifecycleConfigInput]: (DeleteNotebookInstanceLifecycleConfigInput & DeleteNotebookInstanceLifecycleConfigInput & DeleteNotebookInstanceLifecycleConfigInput & DeleteNotebookInstanceLifecycleConfigInput)[K]
    }>): void {
        return this.client.deleteNotebookInstanceLifecycleConfig(
            this.ops["DeleteNotebookInstanceLifecycleConfig"].apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest]: (DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest)[K]
    }>): DeletePipelineResponse {
        return this.client.deletePipeline(
            this.ops["DeletePipeline"].apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput]: (DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput)[K]
    }>): void {
        return this.client.deleteProject(
            this.ops["DeleteProject"].apply(partialParams)
        );
    }

    invokeDeleteStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DeleteStudioLifecycleConfigRequest & keyof DeleteStudioLifecycleConfigRequest & keyof DeleteStudioLifecycleConfigRequest & keyof DeleteStudioLifecycleConfigRequest]: (DeleteStudioLifecycleConfigRequest & DeleteStudioLifecycleConfigRequest & DeleteStudioLifecycleConfigRequest & DeleteStudioLifecycleConfigRequest)[K]
    }>): void {
        return this.client.deleteStudioLifecycleConfig(
            this.ops["DeleteStudioLifecycleConfig"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsInput & keyof DeleteTagsInput & keyof DeleteTagsInput & keyof DeleteTagsInput]: (DeleteTagsInput & DeleteTagsInput & DeleteTagsInput & DeleteTagsInput)[K]
    }>): DeleteTagsOutput {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteTrial(partialParams: ToOptional<{
      [K in keyof DeleteTrialRequest & keyof DeleteTrialRequest & keyof DeleteTrialRequest & keyof DeleteTrialRequest]: (DeleteTrialRequest & DeleteTrialRequest & DeleteTrialRequest & DeleteTrialRequest)[K]
    }>): DeleteTrialResponse {
        return this.client.deleteTrial(
            this.ops["DeleteTrial"].apply(partialParams)
        );
    }

    invokeDeleteTrialComponent(partialParams: ToOptional<{
      [K in keyof DeleteTrialComponentRequest & keyof DeleteTrialComponentRequest & keyof DeleteTrialComponentRequest & keyof DeleteTrialComponentRequest]: (DeleteTrialComponentRequest & DeleteTrialComponentRequest & DeleteTrialComponentRequest & DeleteTrialComponentRequest)[K]
    }>): DeleteTrialComponentResponse {
        return this.client.deleteTrialComponent(
            this.ops["DeleteTrialComponent"].apply(partialParams)
        );
    }

    invokeDeleteUserProfile(partialParams: ToOptional<{
      [K in keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest]: (DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest)[K]
    }>): void {
        return this.client.deleteUserProfile(
            this.ops["DeleteUserProfile"].apply(partialParams)
        );
    }

    invokeDeleteWorkforce(partialParams: ToOptional<{
      [K in keyof DeleteWorkforceRequest & keyof DeleteWorkforceRequest & keyof DeleteWorkforceRequest & keyof DeleteWorkforceRequest]: (DeleteWorkforceRequest & DeleteWorkforceRequest & DeleteWorkforceRequest & DeleteWorkforceRequest)[K]
    }>): DeleteWorkforceResponse {
        return this.client.deleteWorkforce(
            this.ops["DeleteWorkforce"].apply(partialParams)
        );
    }

    invokeDeleteWorkteam(partialParams: ToOptional<{
      [K in keyof DeleteWorkteamRequest & keyof DeleteWorkteamRequest & keyof DeleteWorkteamRequest & keyof DeleteWorkteamRequest]: (DeleteWorkteamRequest & DeleteWorkteamRequest & DeleteWorkteamRequest & DeleteWorkteamRequest)[K]
    }>): DeleteWorkteamResponse {
        return this.client.deleteWorkteam(
            this.ops["DeleteWorkteam"].apply(partialParams)
        );
    }

    invokeDeregisterDevices(partialParams: ToOptional<{
      [K in keyof DeregisterDevicesRequest & keyof DeregisterDevicesRequest & keyof DeregisterDevicesRequest & keyof DeregisterDevicesRequest]: (DeregisterDevicesRequest & DeregisterDevicesRequest & DeregisterDevicesRequest & DeregisterDevicesRequest)[K]
    }>): void {
        return this.client.deregisterDevices(
            this.ops["DeregisterDevices"].apply(partialParams)
        );
    }

    invokeDescribeAction(partialParams: ToOptional<{
      [K in keyof DescribeActionRequest & keyof DescribeActionRequest & keyof DescribeActionRequest & keyof DescribeActionRequest]: (DescribeActionRequest & DescribeActionRequest & DescribeActionRequest & DescribeActionRequest)[K]
    }>): DescribeActionResponse {
        return this.client.describeAction(
            this.ops["DescribeAction"].apply(partialParams)
        );
    }

    invokeDescribeAlgorithm(partialParams: ToOptional<{
      [K in keyof DescribeAlgorithmInput & keyof DescribeAlgorithmInput & keyof DescribeAlgorithmInput & keyof DescribeAlgorithmInput]: (DescribeAlgorithmInput & DescribeAlgorithmInput & DescribeAlgorithmInput & DescribeAlgorithmInput)[K]
    }>): DescribeAlgorithmOutput {
        return this.client.describeAlgorithm(
            this.ops["DescribeAlgorithm"].apply(partialParams)
        );
    }

    invokeDescribeApp(partialParams: ToOptional<{
      [K in keyof DescribeAppRequest & keyof DescribeAppRequest & keyof DescribeAppRequest & keyof DescribeAppRequest]: (DescribeAppRequest & DescribeAppRequest & DescribeAppRequest & DescribeAppRequest)[K]
    }>): DescribeAppResponse {
        return this.client.describeApp(
            this.ops["DescribeApp"].apply(partialParams)
        );
    }

    invokeDescribeAppImageConfig(partialParams: ToOptional<{
      [K in keyof DescribeAppImageConfigRequest & keyof DescribeAppImageConfigRequest & keyof DescribeAppImageConfigRequest & keyof DescribeAppImageConfigRequest]: (DescribeAppImageConfigRequest & DescribeAppImageConfigRequest & DescribeAppImageConfigRequest & DescribeAppImageConfigRequest)[K]
    }>): DescribeAppImageConfigResponse {
        return this.client.describeAppImageConfig(
            this.ops["DescribeAppImageConfig"].apply(partialParams)
        );
    }

    invokeDescribeArtifact(partialParams: ToOptional<{
      [K in keyof DescribeArtifactRequest & keyof DescribeArtifactRequest & keyof DescribeArtifactRequest & keyof DescribeArtifactRequest]: (DescribeArtifactRequest & DescribeArtifactRequest & DescribeArtifactRequest & DescribeArtifactRequest)[K]
    }>): DescribeArtifactResponse {
        return this.client.describeArtifact(
            this.ops["DescribeArtifact"].apply(partialParams)
        );
    }

    invokeDescribeAutoMLJob(partialParams: ToOptional<{
      [K in keyof DescribeAutoMLJobRequest & keyof DescribeAutoMLJobRequest & keyof DescribeAutoMLJobRequest & keyof DescribeAutoMLJobRequest]: (DescribeAutoMLJobRequest & DescribeAutoMLJobRequest & DescribeAutoMLJobRequest & DescribeAutoMLJobRequest)[K]
    }>): DescribeAutoMLJobResponse {
        return this.client.describeAutoMLJob(
            this.ops["DescribeAutoMLJob"].apply(partialParams)
        );
    }

    invokeDescribeCodeRepository(partialParams: ToOptional<{
      [K in keyof DescribeCodeRepositoryInput & keyof DescribeCodeRepositoryInput & keyof DescribeCodeRepositoryInput & keyof DescribeCodeRepositoryInput]: (DescribeCodeRepositoryInput & DescribeCodeRepositoryInput & DescribeCodeRepositoryInput & DescribeCodeRepositoryInput)[K]
    }>): DescribeCodeRepositoryOutput {
        return this.client.describeCodeRepository(
            this.ops["DescribeCodeRepository"].apply(partialParams)
        );
    }

    invokeDescribeCompilationJob(partialParams: ToOptional<{
      [K in keyof DescribeCompilationJobRequest & keyof DescribeCompilationJobRequest & keyof DescribeCompilationJobRequest & keyof DescribeCompilationJobRequest]: (DescribeCompilationJobRequest & DescribeCompilationJobRequest & DescribeCompilationJobRequest & DescribeCompilationJobRequest)[K]
    }>): DescribeCompilationJobResponse {
        return this.client.describeCompilationJob(
            this.ops["DescribeCompilationJob"].apply(partialParams)
        );
    }

    invokeDescribeContext(partialParams: ToOptional<{
      [K in keyof DescribeContextRequest & keyof DescribeContextRequest & keyof DescribeContextRequest & keyof DescribeContextRequest]: (DescribeContextRequest & DescribeContextRequest & DescribeContextRequest & DescribeContextRequest)[K]
    }>): DescribeContextResponse {
        return this.client.describeContext(
            this.ops["DescribeContext"].apply(partialParams)
        );
    }

    invokeDescribeDataQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeDataQualityJobDefinitionRequest & keyof DescribeDataQualityJobDefinitionRequest & keyof DescribeDataQualityJobDefinitionRequest & keyof DescribeDataQualityJobDefinitionRequest]: (DescribeDataQualityJobDefinitionRequest & DescribeDataQualityJobDefinitionRequest & DescribeDataQualityJobDefinitionRequest & DescribeDataQualityJobDefinitionRequest)[K]
    }>): DescribeDataQualityJobDefinitionResponse {
        return this.client.describeDataQualityJobDefinition(
            this.ops["DescribeDataQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest]: (DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest)[K]
    }>): DescribeDeviceResponse {
        return this.client.describeDevice(
            this.ops["DescribeDevice"].apply(partialParams)
        );
    }

    invokeDescribeDeviceFleet(partialParams: ToOptional<{
      [K in keyof DescribeDeviceFleetRequest & keyof DescribeDeviceFleetRequest & keyof DescribeDeviceFleetRequest & keyof DescribeDeviceFleetRequest]: (DescribeDeviceFleetRequest & DescribeDeviceFleetRequest & DescribeDeviceFleetRequest & DescribeDeviceFleetRequest)[K]
    }>): DescribeDeviceFleetResponse {
        return this.client.describeDeviceFleet(
            this.ops["DescribeDeviceFleet"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest]: (DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest)[K]
    }>): DescribeDomainResponse {
        return this.client.describeDomain(
            this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof DescribeEdgePackagingJobRequest & keyof DescribeEdgePackagingJobRequest & keyof DescribeEdgePackagingJobRequest & keyof DescribeEdgePackagingJobRequest]: (DescribeEdgePackagingJobRequest & DescribeEdgePackagingJobRequest & DescribeEdgePackagingJobRequest & DescribeEdgePackagingJobRequest)[K]
    }>): DescribeEdgePackagingJobResponse {
        return this.client.describeEdgePackagingJob(
            this.ops["DescribeEdgePackagingJob"].apply(partialParams)
        );
    }

    invokeDescribeEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeEndpointInput & keyof DescribeEndpointInput & keyof DescribeEndpointInput & keyof DescribeEndpointInput]: (DescribeEndpointInput & DescribeEndpointInput & DescribeEndpointInput & DescribeEndpointInput)[K]
    }>): DescribeEndpointOutput {
        return this.client.describeEndpoint(
            this.ops["DescribeEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeEndpointConfig(partialParams: ToOptional<{
      [K in keyof DescribeEndpointConfigInput & keyof DescribeEndpointConfigInput & keyof DescribeEndpointConfigInput & keyof DescribeEndpointConfigInput]: (DescribeEndpointConfigInput & DescribeEndpointConfigInput & DescribeEndpointConfigInput & DescribeEndpointConfigInput)[K]
    }>): DescribeEndpointConfigOutput {
        return this.client.describeEndpointConfig(
            this.ops["DescribeEndpointConfig"].apply(partialParams)
        );
    }

    invokeDescribeExperiment(partialParams: ToOptional<{
      [K in keyof DescribeExperimentRequest & keyof DescribeExperimentRequest & keyof DescribeExperimentRequest & keyof DescribeExperimentRequest]: (DescribeExperimentRequest & DescribeExperimentRequest & DescribeExperimentRequest & DescribeExperimentRequest)[K]
    }>): DescribeExperimentResponse {
        return this.client.describeExperiment(
            this.ops["DescribeExperiment"].apply(partialParams)
        );
    }

    invokeDescribeFeatureGroup(partialParams: ToOptional<{
      [K in keyof DescribeFeatureGroupRequest & keyof DescribeFeatureGroupRequest & keyof DescribeFeatureGroupRequest & keyof DescribeFeatureGroupRequest]: (DescribeFeatureGroupRequest & DescribeFeatureGroupRequest & DescribeFeatureGroupRequest & DescribeFeatureGroupRequest)[K]
    }>): DescribeFeatureGroupResponse {
        return this.client.describeFeatureGroup(
            this.ops["DescribeFeatureGroup"].apply(partialParams)
        );
    }

    invokeDescribeFlowDefinition(partialParams: ToOptional<{
      [K in keyof DescribeFlowDefinitionRequest & keyof DescribeFlowDefinitionRequest & keyof DescribeFlowDefinitionRequest & keyof DescribeFlowDefinitionRequest]: (DescribeFlowDefinitionRequest & DescribeFlowDefinitionRequest & DescribeFlowDefinitionRequest & DescribeFlowDefinitionRequest)[K]
    }>): DescribeFlowDefinitionResponse {
        return this.client.describeFlowDefinition(
            this.ops["DescribeFlowDefinition"].apply(partialParams)
        );
    }

    invokeDescribeHumanTaskUi(partialParams: ToOptional<{
      [K in keyof DescribeHumanTaskUiRequest & keyof DescribeHumanTaskUiRequest & keyof DescribeHumanTaskUiRequest & keyof DescribeHumanTaskUiRequest]: (DescribeHumanTaskUiRequest & DescribeHumanTaskUiRequest & DescribeHumanTaskUiRequest & DescribeHumanTaskUiRequest)[K]
    }>): DescribeHumanTaskUiResponse {
        return this.client.describeHumanTaskUi(
            this.ops["DescribeHumanTaskUi"].apply(partialParams)
        );
    }

    invokeDescribeHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof DescribeHyperParameterTuningJobRequest & keyof DescribeHyperParameterTuningJobRequest & keyof DescribeHyperParameterTuningJobRequest & keyof DescribeHyperParameterTuningJobRequest]: (DescribeHyperParameterTuningJobRequest & DescribeHyperParameterTuningJobRequest & DescribeHyperParameterTuningJobRequest & DescribeHyperParameterTuningJobRequest)[K]
    }>): DescribeHyperParameterTuningJobResponse {
        return this.client.describeHyperParameterTuningJob(
            this.ops["DescribeHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokeDescribeImage(partialParams: ToOptional<{
      [K in keyof DescribeImageRequest & keyof DescribeImageRequest & keyof DescribeImageRequest & keyof DescribeImageRequest]: (DescribeImageRequest & DescribeImageRequest & DescribeImageRequest & DescribeImageRequest)[K]
    }>): DescribeImageResponse {
        return this.client.describeImage(
            this.ops["DescribeImage"].apply(partialParams)
        );
    }

    invokeDescribeImageVersion(partialParams: ToOptional<{
      [K in keyof DescribeImageVersionRequest & keyof DescribeImageVersionRequest & keyof DescribeImageVersionRequest & keyof DescribeImageVersionRequest]: (DescribeImageVersionRequest & DescribeImageVersionRequest & DescribeImageVersionRequest & DescribeImageVersionRequest)[K]
    }>): DescribeImageVersionResponse {
        return this.client.describeImageVersion(
            this.ops["DescribeImageVersion"].apply(partialParams)
        );
    }

    invokeDescribeInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof DescribeInferenceRecommendationsJobRequest & keyof DescribeInferenceRecommendationsJobRequest & keyof DescribeInferenceRecommendationsJobRequest & keyof DescribeInferenceRecommendationsJobRequest]: (DescribeInferenceRecommendationsJobRequest & DescribeInferenceRecommendationsJobRequest & DescribeInferenceRecommendationsJobRequest & DescribeInferenceRecommendationsJobRequest)[K]
    }>): DescribeInferenceRecommendationsJobResponse {
        return this.client.describeInferenceRecommendationsJob(
            this.ops["DescribeInferenceRecommendationsJob"].apply(partialParams)
        );
    }

    invokeDescribeLabelingJob(partialParams: ToOptional<{
      [K in keyof DescribeLabelingJobRequest & keyof DescribeLabelingJobRequest & keyof DescribeLabelingJobRequest & keyof DescribeLabelingJobRequest]: (DescribeLabelingJobRequest & DescribeLabelingJobRequest & DescribeLabelingJobRequest & DescribeLabelingJobRequest)[K]
    }>): DescribeLabelingJobResponse {
        return this.client.describeLabelingJob(
            this.ops["DescribeLabelingJob"].apply(partialParams)
        );
    }

    invokeDescribeLineageGroup(partialParams: ToOptional<{
      [K in keyof DescribeLineageGroupRequest & keyof DescribeLineageGroupRequest & keyof DescribeLineageGroupRequest & keyof DescribeLineageGroupRequest]: (DescribeLineageGroupRequest & DescribeLineageGroupRequest & DescribeLineageGroupRequest & DescribeLineageGroupRequest)[K]
    }>): DescribeLineageGroupResponse {
        return this.client.describeLineageGroup(
            this.ops["DescribeLineageGroup"].apply(partialParams)
        );
    }

    invokeDescribeModel(partialParams: ToOptional<{
      [K in keyof DescribeModelInput & keyof DescribeModelInput & keyof DescribeModelInput & keyof DescribeModelInput]: (DescribeModelInput & DescribeModelInput & DescribeModelInput & DescribeModelInput)[K]
    }>): DescribeModelOutput {
        return this.client.describeModel(
            this.ops["DescribeModel"].apply(partialParams)
        );
    }

    invokeDescribeModelBiasJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelBiasJobDefinitionRequest & keyof DescribeModelBiasJobDefinitionRequest & keyof DescribeModelBiasJobDefinitionRequest & keyof DescribeModelBiasJobDefinitionRequest]: (DescribeModelBiasJobDefinitionRequest & DescribeModelBiasJobDefinitionRequest & DescribeModelBiasJobDefinitionRequest & DescribeModelBiasJobDefinitionRequest)[K]
    }>): DescribeModelBiasJobDefinitionResponse {
        return this.client.describeModelBiasJobDefinition(
            this.ops["DescribeModelBiasJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeModelExplainabilityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelExplainabilityJobDefinitionRequest & keyof DescribeModelExplainabilityJobDefinitionRequest & keyof DescribeModelExplainabilityJobDefinitionRequest & keyof DescribeModelExplainabilityJobDefinitionRequest]: (DescribeModelExplainabilityJobDefinitionRequest & DescribeModelExplainabilityJobDefinitionRequest & DescribeModelExplainabilityJobDefinitionRequest & DescribeModelExplainabilityJobDefinitionRequest)[K]
    }>): DescribeModelExplainabilityJobDefinitionResponse {
        return this.client.describeModelExplainabilityJobDefinition(
            this.ops["DescribeModelExplainabilityJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeModelPackage(partialParams: ToOptional<{
      [K in keyof DescribeModelPackageInput & keyof DescribeModelPackageInput & keyof DescribeModelPackageInput & keyof DescribeModelPackageInput]: (DescribeModelPackageInput & DescribeModelPackageInput & DescribeModelPackageInput & DescribeModelPackageInput)[K]
    }>): DescribeModelPackageOutput {
        return this.client.describeModelPackage(
            this.ops["DescribeModelPackage"].apply(partialParams)
        );
    }

    invokeDescribeModelPackageGroup(partialParams: ToOptional<{
      [K in keyof DescribeModelPackageGroupInput & keyof DescribeModelPackageGroupInput & keyof DescribeModelPackageGroupInput & keyof DescribeModelPackageGroupInput]: (DescribeModelPackageGroupInput & DescribeModelPackageGroupInput & DescribeModelPackageGroupInput & DescribeModelPackageGroupInput)[K]
    }>): DescribeModelPackageGroupOutput {
        return this.client.describeModelPackageGroup(
            this.ops["DescribeModelPackageGroup"].apply(partialParams)
        );
    }

    invokeDescribeModelQualityJobDefinition(partialParams: ToOptional<{
      [K in keyof DescribeModelQualityJobDefinitionRequest & keyof DescribeModelQualityJobDefinitionRequest & keyof DescribeModelQualityJobDefinitionRequest & keyof DescribeModelQualityJobDefinitionRequest]: (DescribeModelQualityJobDefinitionRequest & DescribeModelQualityJobDefinitionRequest & DescribeModelQualityJobDefinitionRequest & DescribeModelQualityJobDefinitionRequest)[K]
    }>): DescribeModelQualityJobDefinitionResponse {
        return this.client.describeModelQualityJobDefinition(
            this.ops["DescribeModelQualityJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof DescribeMonitoringScheduleRequest & keyof DescribeMonitoringScheduleRequest & keyof DescribeMonitoringScheduleRequest & keyof DescribeMonitoringScheduleRequest]: (DescribeMonitoringScheduleRequest & DescribeMonitoringScheduleRequest & DescribeMonitoringScheduleRequest & DescribeMonitoringScheduleRequest)[K]
    }>): DescribeMonitoringScheduleResponse {
        return this.client.describeMonitoringSchedule(
            this.ops["DescribeMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeDescribeNotebookInstance(partialParams: ToOptional<{
      [K in keyof DescribeNotebookInstanceInput & keyof DescribeNotebookInstanceInput & keyof DescribeNotebookInstanceInput & keyof DescribeNotebookInstanceInput]: (DescribeNotebookInstanceInput & DescribeNotebookInstanceInput & DescribeNotebookInstanceInput & DescribeNotebookInstanceInput)[K]
    }>): DescribeNotebookInstanceOutput {
        return this.client.describeNotebookInstance(
            this.ops["DescribeNotebookInstance"].apply(partialParams)
        );
    }

    invokeDescribeNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DescribeNotebookInstanceLifecycleConfigInput & keyof DescribeNotebookInstanceLifecycleConfigInput & keyof DescribeNotebookInstanceLifecycleConfigInput & keyof DescribeNotebookInstanceLifecycleConfigInput]: (DescribeNotebookInstanceLifecycleConfigInput & DescribeNotebookInstanceLifecycleConfigInput & DescribeNotebookInstanceLifecycleConfigInput & DescribeNotebookInstanceLifecycleConfigInput)[K]
    }>): DescribeNotebookInstanceLifecycleConfigOutput {
        return this.client.describeNotebookInstanceLifecycleConfig(
            this.ops["DescribeNotebookInstanceLifecycleConfig"].apply(partialParams)
        );
    }

    invokeDescribePipeline(partialParams: ToOptional<{
      [K in keyof DescribePipelineRequest & keyof DescribePipelineRequest & keyof DescribePipelineRequest & keyof DescribePipelineRequest]: (DescribePipelineRequest & DescribePipelineRequest & DescribePipelineRequest & DescribePipelineRequest)[K]
    }>): DescribePipelineResponse {
        return this.client.describePipeline(
            this.ops["DescribePipeline"].apply(partialParams)
        );
    }

    invokeDescribePipelineDefinitionForExecution(partialParams: ToOptional<{
      [K in keyof DescribePipelineDefinitionForExecutionRequest & keyof DescribePipelineDefinitionForExecutionRequest & keyof DescribePipelineDefinitionForExecutionRequest & keyof DescribePipelineDefinitionForExecutionRequest]: (DescribePipelineDefinitionForExecutionRequest & DescribePipelineDefinitionForExecutionRequest & DescribePipelineDefinitionForExecutionRequest & DescribePipelineDefinitionForExecutionRequest)[K]
    }>): DescribePipelineDefinitionForExecutionResponse {
        return this.client.describePipelineDefinitionForExecution(
            this.ops["DescribePipelineDefinitionForExecution"].apply(partialParams)
        );
    }

    invokeDescribePipelineExecution(partialParams: ToOptional<{
      [K in keyof DescribePipelineExecutionRequest & keyof DescribePipelineExecutionRequest & keyof DescribePipelineExecutionRequest & keyof DescribePipelineExecutionRequest]: (DescribePipelineExecutionRequest & DescribePipelineExecutionRequest & DescribePipelineExecutionRequest & DescribePipelineExecutionRequest)[K]
    }>): DescribePipelineExecutionResponse {
        return this.client.describePipelineExecution(
            this.ops["DescribePipelineExecution"].apply(partialParams)
        );
    }

    invokeDescribeProcessingJob(partialParams: ToOptional<{
      [K in keyof DescribeProcessingJobRequest & keyof DescribeProcessingJobRequest & keyof DescribeProcessingJobRequest & keyof DescribeProcessingJobRequest]: (DescribeProcessingJobRequest & DescribeProcessingJobRequest & DescribeProcessingJobRequest & DescribeProcessingJobRequest)[K]
    }>): DescribeProcessingJobResponse {
        return this.client.describeProcessingJob(
            this.ops["DescribeProcessingJob"].apply(partialParams)
        );
    }

    invokeDescribeProject(partialParams: ToOptional<{
      [K in keyof DescribeProjectInput & keyof DescribeProjectInput & keyof DescribeProjectInput & keyof DescribeProjectInput]: (DescribeProjectInput & DescribeProjectInput & DescribeProjectInput & DescribeProjectInput)[K]
    }>): DescribeProjectOutput {
        return this.client.describeProject(
            this.ops["DescribeProject"].apply(partialParams)
        );
    }

    invokeDescribeStudioLifecycleConfig(partialParams: ToOptional<{
      [K in keyof DescribeStudioLifecycleConfigRequest & keyof DescribeStudioLifecycleConfigRequest & keyof DescribeStudioLifecycleConfigRequest & keyof DescribeStudioLifecycleConfigRequest]: (DescribeStudioLifecycleConfigRequest & DescribeStudioLifecycleConfigRequest & DescribeStudioLifecycleConfigRequest & DescribeStudioLifecycleConfigRequest)[K]
    }>): DescribeStudioLifecycleConfigResponse {
        return this.client.describeStudioLifecycleConfig(
            this.ops["DescribeStudioLifecycleConfig"].apply(partialParams)
        );
    }

    invokeDescribeSubscribedWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeSubscribedWorkteamRequest & keyof DescribeSubscribedWorkteamRequest & keyof DescribeSubscribedWorkteamRequest & keyof DescribeSubscribedWorkteamRequest]: (DescribeSubscribedWorkteamRequest & DescribeSubscribedWorkteamRequest & DescribeSubscribedWorkteamRequest & DescribeSubscribedWorkteamRequest)[K]
    }>): DescribeSubscribedWorkteamResponse {
        return this.client.describeSubscribedWorkteam(
            this.ops["DescribeSubscribedWorkteam"].apply(partialParams)
        );
    }

    invokeDescribeTrainingJob(partialParams: ToOptional<{
      [K in keyof DescribeTrainingJobRequest & keyof DescribeTrainingJobRequest & keyof DescribeTrainingJobRequest & keyof DescribeTrainingJobRequest]: (DescribeTrainingJobRequest & DescribeTrainingJobRequest & DescribeTrainingJobRequest & DescribeTrainingJobRequest)[K]
    }>): DescribeTrainingJobResponse {
        return this.client.describeTrainingJob(
            this.ops["DescribeTrainingJob"].apply(partialParams)
        );
    }

    invokeDescribeTransformJob(partialParams: ToOptional<{
      [K in keyof DescribeTransformJobRequest & keyof DescribeTransformJobRequest & keyof DescribeTransformJobRequest & keyof DescribeTransformJobRequest]: (DescribeTransformJobRequest & DescribeTransformJobRequest & DescribeTransformJobRequest & DescribeTransformJobRequest)[K]
    }>): DescribeTransformJobResponse {
        return this.client.describeTransformJob(
            this.ops["DescribeTransformJob"].apply(partialParams)
        );
    }

    invokeDescribeTrial(partialParams: ToOptional<{
      [K in keyof DescribeTrialRequest & keyof DescribeTrialRequest & keyof DescribeTrialRequest & keyof DescribeTrialRequest]: (DescribeTrialRequest & DescribeTrialRequest & DescribeTrialRequest & DescribeTrialRequest)[K]
    }>): DescribeTrialResponse {
        return this.client.describeTrial(
            this.ops["DescribeTrial"].apply(partialParams)
        );
    }

    invokeDescribeTrialComponent(partialParams: ToOptional<{
      [K in keyof DescribeTrialComponentRequest & keyof DescribeTrialComponentRequest & keyof DescribeTrialComponentRequest & keyof DescribeTrialComponentRequest]: (DescribeTrialComponentRequest & DescribeTrialComponentRequest & DescribeTrialComponentRequest & DescribeTrialComponentRequest)[K]
    }>): DescribeTrialComponentResponse {
        return this.client.describeTrialComponent(
            this.ops["DescribeTrialComponent"].apply(partialParams)
        );
    }

    invokeDescribeUserProfile(partialParams: ToOptional<{
      [K in keyof DescribeUserProfileRequest & keyof DescribeUserProfileRequest & keyof DescribeUserProfileRequest & keyof DescribeUserProfileRequest]: (DescribeUserProfileRequest & DescribeUserProfileRequest & DescribeUserProfileRequest & DescribeUserProfileRequest)[K]
    }>): DescribeUserProfileResponse {
        return this.client.describeUserProfile(
            this.ops["DescribeUserProfile"].apply(partialParams)
        );
    }

    invokeDescribeWorkforce(partialParams: ToOptional<{
      [K in keyof DescribeWorkforceRequest & keyof DescribeWorkforceRequest & keyof DescribeWorkforceRequest & keyof DescribeWorkforceRequest]: (DescribeWorkforceRequest & DescribeWorkforceRequest & DescribeWorkforceRequest & DescribeWorkforceRequest)[K]
    }>): DescribeWorkforceResponse {
        return this.client.describeWorkforce(
            this.ops["DescribeWorkforce"].apply(partialParams)
        );
    }

    invokeDescribeWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeWorkteamRequest & keyof DescribeWorkteamRequest & keyof DescribeWorkteamRequest & keyof DescribeWorkteamRequest]: (DescribeWorkteamRequest & DescribeWorkteamRequest & DescribeWorkteamRequest & DescribeWorkteamRequest)[K]
    }>): DescribeWorkteamResponse {
        return this.client.describeWorkteam(
            this.ops["DescribeWorkteam"].apply(partialParams)
        );
    }

    invokeDisassociateTrialComponent(partialParams: ToOptional<{
      [K in keyof DisassociateTrialComponentRequest & keyof DisassociateTrialComponentRequest & keyof DisassociateTrialComponentRequest & keyof DisassociateTrialComponentRequest]: (DisassociateTrialComponentRequest & DisassociateTrialComponentRequest & DisassociateTrialComponentRequest & DisassociateTrialComponentRequest)[K]
    }>): DisassociateTrialComponentResponse {
        return this.client.disassociateTrialComponent(
            this.ops["DisassociateTrialComponent"].apply(partialParams)
        );
    }

    invokeGetDeviceFleetReport(partialParams: ToOptional<{
      [K in keyof GetDeviceFleetReportRequest & keyof GetDeviceFleetReportRequest & keyof GetDeviceFleetReportRequest & keyof GetDeviceFleetReportRequest]: (GetDeviceFleetReportRequest & GetDeviceFleetReportRequest & GetDeviceFleetReportRequest & GetDeviceFleetReportRequest)[K]
    }>): GetDeviceFleetReportResponse {
        return this.client.getDeviceFleetReport(
            this.ops["GetDeviceFleetReport"].apply(partialParams)
        );
    }

    invokeGetLineageGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetLineageGroupPolicyRequest & keyof GetLineageGroupPolicyRequest & keyof GetLineageGroupPolicyRequest & keyof GetLineageGroupPolicyRequest]: (GetLineageGroupPolicyRequest & GetLineageGroupPolicyRequest & GetLineageGroupPolicyRequest & GetLineageGroupPolicyRequest)[K]
    }>): GetLineageGroupPolicyResponse {
        return this.client.getLineageGroupPolicy(
            this.ops["GetLineageGroupPolicy"].apply(partialParams)
        );
    }

    invokeGetModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetModelPackageGroupPolicyInput & keyof GetModelPackageGroupPolicyInput & keyof GetModelPackageGroupPolicyInput & keyof GetModelPackageGroupPolicyInput]: (GetModelPackageGroupPolicyInput & GetModelPackageGroupPolicyInput & GetModelPackageGroupPolicyInput & GetModelPackageGroupPolicyInput)[K]
    }>): GetModelPackageGroupPolicyOutput {
        return this.client.getModelPackageGroupPolicy(
            this.ops["GetModelPackageGroupPolicy"].apply(partialParams)
        );
    }

    invokeGetSearchSuggestions(partialParams: ToOptional<{
      [K in keyof GetSearchSuggestionsRequest & keyof GetSearchSuggestionsRequest & keyof GetSearchSuggestionsRequest & keyof GetSearchSuggestionsRequest]: (GetSearchSuggestionsRequest & GetSearchSuggestionsRequest & GetSearchSuggestionsRequest & GetSearchSuggestionsRequest)[K]
    }>): GetSearchSuggestionsResponse {
        return this.client.getSearchSuggestions(
            this.ops["GetSearchSuggestions"].apply(partialParams)
        );
    }

    invokeListCandidatesForAutoMLJob(partialParams: ToOptional<{
      [K in keyof ListCandidatesForAutoMLJobRequest & keyof ListCandidatesForAutoMLJobRequest & keyof ListCandidatesForAutoMLJobRequest & keyof ListCandidatesForAutoMLJobRequest]: (ListCandidatesForAutoMLJobRequest & ListCandidatesForAutoMLJobRequest & ListCandidatesForAutoMLJobRequest & ListCandidatesForAutoMLJobRequest)[K]
    }>): ListCandidatesForAutoMLJobResponse {
        return this.client.listCandidatesForAutoMLJob(
            this.ops["ListCandidatesForAutoMLJob"].apply(partialParams)
        );
    }

    invokeListImageVersions(partialParams: ToOptional<{
      [K in keyof ListImageVersionsRequest & keyof ListImageVersionsRequest & keyof ListImageVersionsRequest & keyof ListImageVersionsRequest]: (ListImageVersionsRequest & ListImageVersionsRequest & ListImageVersionsRequest & ListImageVersionsRequest)[K]
    }>): ListImageVersionsResponse {
        return this.client.listImageVersions(
            this.ops["ListImageVersions"].apply(partialParams)
        );
    }

    invokeListLabelingJobsForWorkteam(partialParams: ToOptional<{
      [K in keyof ListLabelingJobsForWorkteamRequest & keyof ListLabelingJobsForWorkteamRequest & keyof ListLabelingJobsForWorkteamRequest & keyof ListLabelingJobsForWorkteamRequest]: (ListLabelingJobsForWorkteamRequest & ListLabelingJobsForWorkteamRequest & ListLabelingJobsForWorkteamRequest & ListLabelingJobsForWorkteamRequest)[K]
    }>): ListLabelingJobsForWorkteamResponse {
        return this.client.listLabelingJobsForWorkteam(
            this.ops["ListLabelingJobsForWorkteam"].apply(partialParams)
        );
    }

    invokeListPipelineExecutions(partialParams: ToOptional<{
      [K in keyof ListPipelineExecutionsRequest & keyof ListPipelineExecutionsRequest & keyof ListPipelineExecutionsRequest & keyof ListPipelineExecutionsRequest]: (ListPipelineExecutionsRequest & ListPipelineExecutionsRequest & ListPipelineExecutionsRequest & ListPipelineExecutionsRequest)[K]
    }>): ListPipelineExecutionsResponse {
        return this.client.listPipelineExecutions(
            this.ops["ListPipelineExecutions"].apply(partialParams)
        );
    }

    invokeListPipelineParametersForExecution(partialParams: ToOptional<{
      [K in keyof ListPipelineParametersForExecutionRequest & keyof ListPipelineParametersForExecutionRequest & keyof ListPipelineParametersForExecutionRequest & keyof ListPipelineParametersForExecutionRequest]: (ListPipelineParametersForExecutionRequest & ListPipelineParametersForExecutionRequest & ListPipelineParametersForExecutionRequest & ListPipelineParametersForExecutionRequest)[K]
    }>): ListPipelineParametersForExecutionResponse {
        return this.client.listPipelineParametersForExecution(
            this.ops["ListPipelineParametersForExecution"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsInput & keyof ListTagsInput & keyof ListTagsInput & keyof ListTagsInput]: (ListTagsInput & ListTagsInput & ListTagsInput & ListTagsInput)[K]
    }>): ListTagsOutput {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListTrainingJobsForHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof ListTrainingJobsForHyperParameterTuningJobRequest & keyof ListTrainingJobsForHyperParameterTuningJobRequest & keyof ListTrainingJobsForHyperParameterTuningJobRequest & keyof ListTrainingJobsForHyperParameterTuningJobRequest]: (ListTrainingJobsForHyperParameterTuningJobRequest & ListTrainingJobsForHyperParameterTuningJobRequest & ListTrainingJobsForHyperParameterTuningJobRequest & ListTrainingJobsForHyperParameterTuningJobRequest)[K]
    }>): ListTrainingJobsForHyperParameterTuningJobResponse {
        return this.client.listTrainingJobsForHyperParameterTuningJob(
            this.ops["ListTrainingJobsForHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokePutModelPackageGroupPolicy(partialParams: ToOptional<{
      [K in keyof PutModelPackageGroupPolicyInput & keyof PutModelPackageGroupPolicyInput & keyof PutModelPackageGroupPolicyInput & keyof PutModelPackageGroupPolicyInput]: (PutModelPackageGroupPolicyInput & PutModelPackageGroupPolicyInput & PutModelPackageGroupPolicyInput & PutModelPackageGroupPolicyInput)[K]
    }>): PutModelPackageGroupPolicyOutput {
        return this.client.putModelPackageGroupPolicy(
            this.ops["PutModelPackageGroupPolicy"].apply(partialParams)
        );
    }

    invokeQueryLineage(partialParams: ToOptional<{
      [K in keyof QueryLineageRequest & keyof QueryLineageRequest & keyof QueryLineageRequest & keyof QueryLineageRequest]: (QueryLineageRequest & QueryLineageRequest & QueryLineageRequest & QueryLineageRequest)[K]
    }>): QueryLineageResponse {
        return this.client.queryLineage(
            this.ops["QueryLineage"].apply(partialParams)
        );
    }

    invokeRegisterDevices(partialParams: ToOptional<{
      [K in keyof RegisterDevicesRequest & keyof RegisterDevicesRequest & keyof RegisterDevicesRequest & keyof RegisterDevicesRequest]: (RegisterDevicesRequest & RegisterDevicesRequest & RegisterDevicesRequest & RegisterDevicesRequest)[K]
    }>): void {
        return this.client.registerDevices(
            this.ops["RegisterDevices"].apply(partialParams)
        );
    }

    invokeRenderUiTemplate(partialParams: ToOptional<{
      [K in keyof RenderUiTemplateRequest & keyof RenderUiTemplateRequest & keyof RenderUiTemplateRequest & keyof RenderUiTemplateRequest]: (RenderUiTemplateRequest & RenderUiTemplateRequest & RenderUiTemplateRequest & RenderUiTemplateRequest)[K]
    }>): RenderUiTemplateResponse {
        return this.client.renderUiTemplate(
            this.ops["RenderUiTemplate"].apply(partialParams)
        );
    }

    invokeRetryPipelineExecution(partialParams: ToOptional<{
      [K in keyof RetryPipelineExecutionRequest & keyof RetryPipelineExecutionRequest & keyof RetryPipelineExecutionRequest & keyof RetryPipelineExecutionRequest]: (RetryPipelineExecutionRequest & RetryPipelineExecutionRequest & RetryPipelineExecutionRequest & RetryPipelineExecutionRequest)[K]
    }>): RetryPipelineExecutionResponse {
        return this.client.retryPipelineExecution(
            this.ops["RetryPipelineExecution"].apply(partialParams)
        );
    }

    invokeSearch(partialParams: ToOptional<{
      [K in keyof SearchRequest & keyof SearchRequest & keyof SearchRequest & keyof SearchRequest]: (SearchRequest & SearchRequest & SearchRequest & SearchRequest)[K]
    }>): SearchResponse {
        return this.client.search(
            this.ops["Search"].apply(partialParams)
        );
    }

    invokeSendPipelineExecutionStepFailure(partialParams: ToOptional<{
      [K in keyof SendPipelineExecutionStepFailureRequest & keyof SendPipelineExecutionStepFailureRequest & keyof SendPipelineExecutionStepFailureRequest & keyof SendPipelineExecutionStepFailureRequest]: (SendPipelineExecutionStepFailureRequest & SendPipelineExecutionStepFailureRequest & SendPipelineExecutionStepFailureRequest & SendPipelineExecutionStepFailureRequest)[K]
    }>): SendPipelineExecutionStepFailureResponse {
        return this.client.sendPipelineExecutionStepFailure(
            this.ops["SendPipelineExecutionStepFailure"].apply(partialParams)
        );
    }

    invokeSendPipelineExecutionStepSuccess(partialParams: ToOptional<{
      [K in keyof SendPipelineExecutionStepSuccessRequest & keyof SendPipelineExecutionStepSuccessRequest & keyof SendPipelineExecutionStepSuccessRequest & keyof SendPipelineExecutionStepSuccessRequest]: (SendPipelineExecutionStepSuccessRequest & SendPipelineExecutionStepSuccessRequest & SendPipelineExecutionStepSuccessRequest & SendPipelineExecutionStepSuccessRequest)[K]
    }>): SendPipelineExecutionStepSuccessResponse {
        return this.client.sendPipelineExecutionStepSuccess(
            this.ops["SendPipelineExecutionStepSuccess"].apply(partialParams)
        );
    }

    invokeStartMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof StartMonitoringScheduleRequest & keyof StartMonitoringScheduleRequest & keyof StartMonitoringScheduleRequest & keyof StartMonitoringScheduleRequest]: (StartMonitoringScheduleRequest & StartMonitoringScheduleRequest & StartMonitoringScheduleRequest & StartMonitoringScheduleRequest)[K]
    }>): void {
        return this.client.startMonitoringSchedule(
            this.ops["StartMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeStartNotebookInstance(partialParams: ToOptional<{
      [K in keyof StartNotebookInstanceInput & keyof StartNotebookInstanceInput & keyof StartNotebookInstanceInput & keyof StartNotebookInstanceInput]: (StartNotebookInstanceInput & StartNotebookInstanceInput & StartNotebookInstanceInput & StartNotebookInstanceInput)[K]
    }>): void {
        return this.client.startNotebookInstance(
            this.ops["StartNotebookInstance"].apply(partialParams)
        );
    }

    invokeStartPipelineExecution(partialParams: ToOptional<{
      [K in keyof StartPipelineExecutionRequest & keyof StartPipelineExecutionRequest & keyof StartPipelineExecutionRequest & keyof StartPipelineExecutionRequest]: (StartPipelineExecutionRequest & StartPipelineExecutionRequest & StartPipelineExecutionRequest & StartPipelineExecutionRequest)[K]
    }>): StartPipelineExecutionResponse {
        return this.client.startPipelineExecution(
            this.ops["StartPipelineExecution"].apply(partialParams)
        );
    }

    invokeStopAutoMLJob(partialParams: ToOptional<{
      [K in keyof StopAutoMLJobRequest & keyof StopAutoMLJobRequest & keyof StopAutoMLJobRequest & keyof StopAutoMLJobRequest]: (StopAutoMLJobRequest & StopAutoMLJobRequest & StopAutoMLJobRequest & StopAutoMLJobRequest)[K]
    }>): void {
        return this.client.stopAutoMLJob(
            this.ops["StopAutoMLJob"].apply(partialParams)
        );
    }

    invokeStopCompilationJob(partialParams: ToOptional<{
      [K in keyof StopCompilationJobRequest & keyof StopCompilationJobRequest & keyof StopCompilationJobRequest & keyof StopCompilationJobRequest]: (StopCompilationJobRequest & StopCompilationJobRequest & StopCompilationJobRequest & StopCompilationJobRequest)[K]
    }>): void {
        return this.client.stopCompilationJob(
            this.ops["StopCompilationJob"].apply(partialParams)
        );
    }

    invokeStopEdgePackagingJob(partialParams: ToOptional<{
      [K in keyof StopEdgePackagingJobRequest & keyof StopEdgePackagingJobRequest & keyof StopEdgePackagingJobRequest & keyof StopEdgePackagingJobRequest]: (StopEdgePackagingJobRequest & StopEdgePackagingJobRequest & StopEdgePackagingJobRequest & StopEdgePackagingJobRequest)[K]
    }>): void {
        return this.client.stopEdgePackagingJob(
            this.ops["StopEdgePackagingJob"].apply(partialParams)
        );
    }

    invokeStopHyperParameterTuningJob(partialParams: ToOptional<{
      [K in keyof StopHyperParameterTuningJobRequest & keyof StopHyperParameterTuningJobRequest & keyof StopHyperParameterTuningJobRequest & keyof StopHyperParameterTuningJobRequest]: (StopHyperParameterTuningJobRequest & StopHyperParameterTuningJobRequest & StopHyperParameterTuningJobRequest & StopHyperParameterTuningJobRequest)[K]
    }>): void {
        return this.client.stopHyperParameterTuningJob(
            this.ops["StopHyperParameterTuningJob"].apply(partialParams)
        );
    }

    invokeStopInferenceRecommendationsJob(partialParams: ToOptional<{
      [K in keyof StopInferenceRecommendationsJobRequest & keyof StopInferenceRecommendationsJobRequest & keyof StopInferenceRecommendationsJobRequest & keyof StopInferenceRecommendationsJobRequest]: (StopInferenceRecommendationsJobRequest & StopInferenceRecommendationsJobRequest & StopInferenceRecommendationsJobRequest & StopInferenceRecommendationsJobRequest)[K]
    }>): void {
        return this.client.stopInferenceRecommendationsJob(
            this.ops["StopInferenceRecommendationsJob"].apply(partialParams)
        );
    }

    invokeStopLabelingJob(partialParams: ToOptional<{
      [K in keyof StopLabelingJobRequest & keyof StopLabelingJobRequest & keyof StopLabelingJobRequest & keyof StopLabelingJobRequest]: (StopLabelingJobRequest & StopLabelingJobRequest & StopLabelingJobRequest & StopLabelingJobRequest)[K]
    }>): void {
        return this.client.stopLabelingJob(
            this.ops["StopLabelingJob"].apply(partialParams)
        );
    }

    invokeStopMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof StopMonitoringScheduleRequest & keyof StopMonitoringScheduleRequest & keyof StopMonitoringScheduleRequest & keyof StopMonitoringScheduleRequest]: (StopMonitoringScheduleRequest & StopMonitoringScheduleRequest & StopMonitoringScheduleRequest & StopMonitoringScheduleRequest)[K]
    }>): void {
        return this.client.stopMonitoringSchedule(
            this.ops["StopMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeStopNotebookInstance(partialParams: ToOptional<{
      [K in keyof StopNotebookInstanceInput & keyof StopNotebookInstanceInput & keyof StopNotebookInstanceInput & keyof StopNotebookInstanceInput]: (StopNotebookInstanceInput & StopNotebookInstanceInput & StopNotebookInstanceInput & StopNotebookInstanceInput)[K]
    }>): void {
        return this.client.stopNotebookInstance(
            this.ops["StopNotebookInstance"].apply(partialParams)
        );
    }

    invokeStopPipelineExecution(partialParams: ToOptional<{
      [K in keyof StopPipelineExecutionRequest & keyof StopPipelineExecutionRequest & keyof StopPipelineExecutionRequest & keyof StopPipelineExecutionRequest]: (StopPipelineExecutionRequest & StopPipelineExecutionRequest & StopPipelineExecutionRequest & StopPipelineExecutionRequest)[K]
    }>): StopPipelineExecutionResponse {
        return this.client.stopPipelineExecution(
            this.ops["StopPipelineExecution"].apply(partialParams)
        );
    }

    invokeStopProcessingJob(partialParams: ToOptional<{
      [K in keyof StopProcessingJobRequest & keyof StopProcessingJobRequest & keyof StopProcessingJobRequest & keyof StopProcessingJobRequest]: (StopProcessingJobRequest & StopProcessingJobRequest & StopProcessingJobRequest & StopProcessingJobRequest)[K]
    }>): void {
        return this.client.stopProcessingJob(
            this.ops["StopProcessingJob"].apply(partialParams)
        );
    }

    invokeStopTrainingJob(partialParams: ToOptional<{
      [K in keyof StopTrainingJobRequest & keyof StopTrainingJobRequest & keyof StopTrainingJobRequest & keyof StopTrainingJobRequest]: (StopTrainingJobRequest & StopTrainingJobRequest & StopTrainingJobRequest & StopTrainingJobRequest)[K]
    }>): void {
        return this.client.stopTrainingJob(
            this.ops["StopTrainingJob"].apply(partialParams)
        );
    }

    invokeStopTransformJob(partialParams: ToOptional<{
      [K in keyof StopTransformJobRequest & keyof StopTransformJobRequest & keyof StopTransformJobRequest & keyof StopTransformJobRequest]: (StopTransformJobRequest & StopTransformJobRequest & StopTransformJobRequest & StopTransformJobRequest)[K]
    }>): void {
        return this.client.stopTransformJob(
            this.ops["StopTransformJob"].apply(partialParams)
        );
    }

    invokeUpdateAction(partialParams: ToOptional<{
      [K in keyof UpdateActionRequest & keyof UpdateActionRequest & keyof UpdateActionRequest & keyof UpdateActionRequest]: (UpdateActionRequest & UpdateActionRequest & UpdateActionRequest & UpdateActionRequest)[K]
    }>): UpdateActionResponse {
        return this.client.updateAction(
            this.ops["UpdateAction"].apply(partialParams)
        );
    }

    invokeUpdateAppImageConfig(partialParams: ToOptional<{
      [K in keyof UpdateAppImageConfigRequest & keyof UpdateAppImageConfigRequest & keyof UpdateAppImageConfigRequest & keyof UpdateAppImageConfigRequest]: (UpdateAppImageConfigRequest & UpdateAppImageConfigRequest & UpdateAppImageConfigRequest & UpdateAppImageConfigRequest)[K]
    }>): UpdateAppImageConfigResponse {
        return this.client.updateAppImageConfig(
            this.ops["UpdateAppImageConfig"].apply(partialParams)
        );
    }

    invokeUpdateArtifact(partialParams: ToOptional<{
      [K in keyof UpdateArtifactRequest & keyof UpdateArtifactRequest & keyof UpdateArtifactRequest & keyof UpdateArtifactRequest]: (UpdateArtifactRequest & UpdateArtifactRequest & UpdateArtifactRequest & UpdateArtifactRequest)[K]
    }>): UpdateArtifactResponse {
        return this.client.updateArtifact(
            this.ops["UpdateArtifact"].apply(partialParams)
        );
    }

    invokeUpdateCodeRepository(partialParams: ToOptional<{
      [K in keyof UpdateCodeRepositoryInput & keyof UpdateCodeRepositoryInput & keyof UpdateCodeRepositoryInput & keyof UpdateCodeRepositoryInput]: (UpdateCodeRepositoryInput & UpdateCodeRepositoryInput & UpdateCodeRepositoryInput & UpdateCodeRepositoryInput)[K]
    }>): UpdateCodeRepositoryOutput {
        return this.client.updateCodeRepository(
            this.ops["UpdateCodeRepository"].apply(partialParams)
        );
    }

    invokeUpdateContext(partialParams: ToOptional<{
      [K in keyof UpdateContextRequest & keyof UpdateContextRequest & keyof UpdateContextRequest & keyof UpdateContextRequest]: (UpdateContextRequest & UpdateContextRequest & UpdateContextRequest & UpdateContextRequest)[K]
    }>): UpdateContextResponse {
        return this.client.updateContext(
            this.ops["UpdateContext"].apply(partialParams)
        );
    }

    invokeUpdateDeviceFleet(partialParams: ToOptional<{
      [K in keyof UpdateDeviceFleetRequest & keyof UpdateDeviceFleetRequest & keyof UpdateDeviceFleetRequest & keyof UpdateDeviceFleetRequest]: (UpdateDeviceFleetRequest & UpdateDeviceFleetRequest & UpdateDeviceFleetRequest & UpdateDeviceFleetRequest)[K]
    }>): void {
        return this.client.updateDeviceFleet(
            this.ops["UpdateDeviceFleet"].apply(partialParams)
        );
    }

    invokeUpdateDevices(partialParams: ToOptional<{
      [K in keyof UpdateDevicesRequest & keyof UpdateDevicesRequest & keyof UpdateDevicesRequest & keyof UpdateDevicesRequest]: (UpdateDevicesRequest & UpdateDevicesRequest & UpdateDevicesRequest & UpdateDevicesRequest)[K]
    }>): void {
        return this.client.updateDevices(
            this.ops["UpdateDevices"].apply(partialParams)
        );
    }

    invokeUpdateDomain(partialParams: ToOptional<{
      [K in keyof UpdateDomainRequest & keyof UpdateDomainRequest & keyof UpdateDomainRequest & keyof UpdateDomainRequest]: (UpdateDomainRequest & UpdateDomainRequest & UpdateDomainRequest & UpdateDomainRequest)[K]
    }>): UpdateDomainResponse {
        return this.client.updateDomain(
            this.ops["UpdateDomain"].apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointInput & keyof UpdateEndpointInput & keyof UpdateEndpointInput & keyof UpdateEndpointInput]: (UpdateEndpointInput & UpdateEndpointInput & UpdateEndpointInput & UpdateEndpointInput)[K]
    }>): UpdateEndpointOutput {
        return this.client.updateEndpoint(
            this.ops["UpdateEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateEndpointWeightsAndCapacities(partialParams: ToOptional<{
      [K in keyof UpdateEndpointWeightsAndCapacitiesInput & keyof UpdateEndpointWeightsAndCapacitiesInput & keyof UpdateEndpointWeightsAndCapacitiesInput & keyof UpdateEndpointWeightsAndCapacitiesInput]: (UpdateEndpointWeightsAndCapacitiesInput & UpdateEndpointWeightsAndCapacitiesInput & UpdateEndpointWeightsAndCapacitiesInput & UpdateEndpointWeightsAndCapacitiesInput)[K]
    }>): UpdateEndpointWeightsAndCapacitiesOutput {
        return this.client.updateEndpointWeightsAndCapacities(
            this.ops["UpdateEndpointWeightsAndCapacities"].apply(partialParams)
        );
    }

    invokeUpdateExperiment(partialParams: ToOptional<{
      [K in keyof UpdateExperimentRequest & keyof UpdateExperimentRequest & keyof UpdateExperimentRequest & keyof UpdateExperimentRequest]: (UpdateExperimentRequest & UpdateExperimentRequest & UpdateExperimentRequest & UpdateExperimentRequest)[K]
    }>): UpdateExperimentResponse {
        return this.client.updateExperiment(
            this.ops["UpdateExperiment"].apply(partialParams)
        );
    }

    invokeUpdateImage(partialParams: ToOptional<{
      [K in keyof UpdateImageRequest & keyof UpdateImageRequest & keyof UpdateImageRequest & keyof UpdateImageRequest]: (UpdateImageRequest & UpdateImageRequest & UpdateImageRequest & UpdateImageRequest)[K]
    }>): UpdateImageResponse {
        return this.client.updateImage(
            this.ops["UpdateImage"].apply(partialParams)
        );
    }

    invokeUpdateModelPackage(partialParams: ToOptional<{
      [K in keyof UpdateModelPackageInput & keyof UpdateModelPackageInput & keyof UpdateModelPackageInput & keyof UpdateModelPackageInput]: (UpdateModelPackageInput & UpdateModelPackageInput & UpdateModelPackageInput & UpdateModelPackageInput)[K]
    }>): UpdateModelPackageOutput {
        return this.client.updateModelPackage(
            this.ops["UpdateModelPackage"].apply(partialParams)
        );
    }

    invokeUpdateMonitoringSchedule(partialParams: ToOptional<{
      [K in keyof UpdateMonitoringScheduleRequest & keyof UpdateMonitoringScheduleRequest & keyof UpdateMonitoringScheduleRequest & keyof UpdateMonitoringScheduleRequest]: (UpdateMonitoringScheduleRequest & UpdateMonitoringScheduleRequest & UpdateMonitoringScheduleRequest & UpdateMonitoringScheduleRequest)[K]
    }>): UpdateMonitoringScheduleResponse {
        return this.client.updateMonitoringSchedule(
            this.ops["UpdateMonitoringSchedule"].apply(partialParams)
        );
    }

    invokeUpdateNotebookInstance(partialParams: ToOptional<{
      [K in keyof UpdateNotebookInstanceInput & keyof UpdateNotebookInstanceInput & keyof UpdateNotebookInstanceInput & keyof UpdateNotebookInstanceInput]: (UpdateNotebookInstanceInput & UpdateNotebookInstanceInput & UpdateNotebookInstanceInput & UpdateNotebookInstanceInput)[K]
    }>): UpdateNotebookInstanceOutput {
        return this.client.updateNotebookInstance(
            this.ops["UpdateNotebookInstance"].apply(partialParams)
        );
    }

    invokeUpdateNotebookInstanceLifecycleConfig(partialParams: ToOptional<{
      [K in keyof UpdateNotebookInstanceLifecycleConfigInput & keyof UpdateNotebookInstanceLifecycleConfigInput & keyof UpdateNotebookInstanceLifecycleConfigInput & keyof UpdateNotebookInstanceLifecycleConfigInput]: (UpdateNotebookInstanceLifecycleConfigInput & UpdateNotebookInstanceLifecycleConfigInput & UpdateNotebookInstanceLifecycleConfigInput & UpdateNotebookInstanceLifecycleConfigInput)[K]
    }>): UpdateNotebookInstanceLifecycleConfigOutput {
        return this.client.updateNotebookInstanceLifecycleConfig(
            this.ops["UpdateNotebookInstanceLifecycleConfig"].apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest]: (UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest)[K]
    }>): UpdatePipelineResponse {
        return this.client.updatePipeline(
            this.ops["UpdatePipeline"].apply(partialParams)
        );
    }

    invokeUpdatePipelineExecution(partialParams: ToOptional<{
      [K in keyof UpdatePipelineExecutionRequest & keyof UpdatePipelineExecutionRequest & keyof UpdatePipelineExecutionRequest & keyof UpdatePipelineExecutionRequest]: (UpdatePipelineExecutionRequest & UpdatePipelineExecutionRequest & UpdatePipelineExecutionRequest & UpdatePipelineExecutionRequest)[K]
    }>): UpdatePipelineExecutionResponse {
        return this.client.updatePipelineExecution(
            this.ops["UpdatePipelineExecution"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput]: (UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput)[K]
    }>): UpdateProjectOutput {
        return this.client.updateProject(
            this.ops["UpdateProject"].apply(partialParams)
        );
    }

    invokeUpdateTrainingJob(partialParams: ToOptional<{
      [K in keyof UpdateTrainingJobRequest & keyof UpdateTrainingJobRequest & keyof UpdateTrainingJobRequest & keyof UpdateTrainingJobRequest]: (UpdateTrainingJobRequest & UpdateTrainingJobRequest & UpdateTrainingJobRequest & UpdateTrainingJobRequest)[K]
    }>): UpdateTrainingJobResponse {
        return this.client.updateTrainingJob(
            this.ops["UpdateTrainingJob"].apply(partialParams)
        );
    }

    invokeUpdateTrial(partialParams: ToOptional<{
      [K in keyof UpdateTrialRequest & keyof UpdateTrialRequest & keyof UpdateTrialRequest & keyof UpdateTrialRequest]: (UpdateTrialRequest & UpdateTrialRequest & UpdateTrialRequest & UpdateTrialRequest)[K]
    }>): UpdateTrialResponse {
        return this.client.updateTrial(
            this.ops["UpdateTrial"].apply(partialParams)
        );
    }

    invokeUpdateTrialComponent(partialParams: ToOptional<{
      [K in keyof UpdateTrialComponentRequest & keyof UpdateTrialComponentRequest & keyof UpdateTrialComponentRequest & keyof UpdateTrialComponentRequest]: (UpdateTrialComponentRequest & UpdateTrialComponentRequest & UpdateTrialComponentRequest & UpdateTrialComponentRequest)[K]
    }>): UpdateTrialComponentResponse {
        return this.client.updateTrialComponent(
            this.ops["UpdateTrialComponent"].apply(partialParams)
        );
    }

    invokeUpdateUserProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest]: (UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest)[K]
    }>): UpdateUserProfileResponse {
        return this.client.updateUserProfile(
            this.ops["UpdateUserProfile"].apply(partialParams)
        );
    }

    invokeUpdateWorkforce(partialParams: ToOptional<{
      [K in keyof UpdateWorkforceRequest & keyof UpdateWorkforceRequest & keyof UpdateWorkforceRequest & keyof UpdateWorkforceRequest]: (UpdateWorkforceRequest & UpdateWorkforceRequest & UpdateWorkforceRequest & UpdateWorkforceRequest)[K]
    }>): UpdateWorkforceResponse {
        return this.client.updateWorkforce(
            this.ops["UpdateWorkforce"].apply(partialParams)
        );
    }

    invokeUpdateWorkteam(partialParams: ToOptional<{
      [K in keyof UpdateWorkteamRequest & keyof UpdateWorkteamRequest & keyof UpdateWorkteamRequest & keyof UpdateWorkteamRequest]: (UpdateWorkteamRequest & UpdateWorkteamRequest & UpdateWorkteamRequest & UpdateWorkteamRequest)[K]
    }>): UpdateWorkteamResponse {
        return this.client.updateWorkteam(
            this.ops["UpdateWorkteam"].apply(partialParams)
        );
    }
}