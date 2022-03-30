"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.sagemaker.ModelPackageGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SageMaker();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/sagemaker-2017-07-24.normal.json"), this.client);
    }
    invokeAddAssociation(partialParams) {
        return this.client.addAssociation(this.ops["AddAssociation"].apply(partialParams));
    }
    invokeAddTags(partialParams) {
        return this.client.addTags(this.ops["AddTags"].apply(partialParams));
    }
    invokeAssociateTrialComponent(partialParams) {
        return this.client.associateTrialComponent(this.ops["AssociateTrialComponent"].apply(partialParams));
    }
    invokeBatchDescribeModelPackage(partialParams) {
        return this.client.batchDescribeModelPackage(this.ops["BatchDescribeModelPackage"].apply(partialParams));
    }
    invokeCreateAction(partialParams) {
        return this.client.createAction(this.ops["CreateAction"].apply(partialParams));
    }
    invokeCreateAlgorithm(partialParams) {
        return this.client.createAlgorithm(this.ops["CreateAlgorithm"].apply(partialParams));
    }
    invokeCreateApp(partialParams) {
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateAppImageConfig(partialParams) {
        return this.client.createAppImageConfig(this.ops["CreateAppImageConfig"].apply(partialParams));
    }
    invokeCreateArtifact(partialParams) {
        return this.client.createArtifact(this.ops["CreateArtifact"].apply(partialParams));
    }
    invokeCreateAutoMLJob(partialParams) {
        return this.client.createAutoMLJob(this.ops["CreateAutoMLJob"].apply(partialParams));
    }
    invokeCreateCodeRepository(partialParams) {
        return this.client.createCodeRepository(this.ops["CreateCodeRepository"].apply(partialParams));
    }
    invokeCreateCompilationJob(partialParams) {
        return this.client.createCompilationJob(this.ops["CreateCompilationJob"].apply(partialParams));
    }
    invokeCreateContext(partialParams) {
        return this.client.createContext(this.ops["CreateContext"].apply(partialParams));
    }
    invokeCreateDataQualityJobDefinition(partialParams) {
        return this.client.createDataQualityJobDefinition(this.ops["CreateDataQualityJobDefinition"].apply(partialParams));
    }
    invokeCreateDeviceFleet(partialParams) {
        return this.client.createDeviceFleet(this.ops["CreateDeviceFleet"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeCreateEdgePackagingJob(partialParams) {
        return this.client.createEdgePackagingJob(this.ops["CreateEdgePackagingJob"].apply(partialParams));
    }
    invokeCreateEndpoint(partialParams) {
        return this.client.createEndpoint(this.ops["CreateEndpoint"].apply(partialParams));
    }
    invokeCreateEndpointConfig(partialParams) {
        return this.client.createEndpointConfig(this.ops["CreateEndpointConfig"].apply(partialParams));
    }
    invokeCreateExperiment(partialParams) {
        return this.client.createExperiment(this.ops["CreateExperiment"].apply(partialParams));
    }
    invokeCreateFeatureGroup(partialParams) {
        return this.client.createFeatureGroup(this.ops["CreateFeatureGroup"].apply(partialParams));
    }
    invokeCreateFlowDefinition(partialParams) {
        return this.client.createFlowDefinition(this.ops["CreateFlowDefinition"].apply(partialParams));
    }
    invokeCreateHumanTaskUi(partialParams) {
        return this.client.createHumanTaskUi(this.ops["CreateHumanTaskUi"].apply(partialParams));
    }
    invokeCreateHyperParameterTuningJob(partialParams) {
        return this.client.createHyperParameterTuningJob(this.ops["CreateHyperParameterTuningJob"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateImageVersion(partialParams) {
        return this.client.createImageVersion(this.ops["CreateImageVersion"].apply(partialParams));
    }
    invokeCreateInferenceRecommendationsJob(partialParams) {
        return this.client.createInferenceRecommendationsJob(this.ops["CreateInferenceRecommendationsJob"].apply(partialParams));
    }
    invokeCreateLabelingJob(partialParams) {
        return this.client.createLabelingJob(this.ops["CreateLabelingJob"].apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        return this.client.createModel(this.ops["CreateModel"].apply(partialParams));
    }
    invokeCreateModelBiasJobDefinition(partialParams) {
        return this.client.createModelBiasJobDefinition(this.ops["CreateModelBiasJobDefinition"].apply(partialParams));
    }
    invokeCreateModelExplainabilityJobDefinition(partialParams) {
        return this.client.createModelExplainabilityJobDefinition(this.ops["CreateModelExplainabilityJobDefinition"].apply(partialParams));
    }
    invokeCreateModelPackageGroup(partialParams) {
        return this.client.createModelPackageGroup(this.ops["CreateModelPackageGroup"].apply(partialParams));
    }
    invokeCreateModelQualityJobDefinition(partialParams) {
        return this.client.createModelQualityJobDefinition(this.ops["CreateModelQualityJobDefinition"].apply(partialParams));
    }
    invokeCreateMonitoringSchedule(partialParams) {
        return this.client.createMonitoringSchedule(this.ops["CreateMonitoringSchedule"].apply(partialParams));
    }
    invokeCreateNotebookInstance(partialParams) {
        return this.client.createNotebookInstance(this.ops["CreateNotebookInstance"].apply(partialParams));
    }
    invokeCreateNotebookInstanceLifecycleConfig(partialParams) {
        return this.client.createNotebookInstanceLifecycleConfig(this.ops["CreateNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeCreatePresignedDomainUrl(partialParams) {
        return this.client.createPresignedDomainUrl(this.ops["CreatePresignedDomainUrl"].apply(partialParams));
    }
    invokeCreatePresignedNotebookInstanceUrl(partialParams) {
        return this.client.createPresignedNotebookInstanceUrl(this.ops["CreatePresignedNotebookInstanceUrl"].apply(partialParams));
    }
    invokeCreateProcessingJob(partialParams) {
        return this.client.createProcessingJob(this.ops["CreateProcessingJob"].apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        return this.client.createProject(this.ops["CreateProject"].apply(partialParams));
    }
    invokeCreateStudioLifecycleConfig(partialParams) {
        return this.client.createStudioLifecycleConfig(this.ops["CreateStudioLifecycleConfig"].apply(partialParams));
    }
    invokeCreateTrainingJob(partialParams) {
        return this.client.createTrainingJob(this.ops["CreateTrainingJob"].apply(partialParams));
    }
    invokeCreateTransformJob(partialParams) {
        return this.client.createTransformJob(this.ops["CreateTransformJob"].apply(partialParams));
    }
    invokeCreateTrial(partialParams) {
        return this.client.createTrial(this.ops["CreateTrial"].apply(partialParams));
    }
    invokeCreateTrialComponent(partialParams) {
        return this.client.createTrialComponent(this.ops["CreateTrialComponent"].apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        return this.client.createUserProfile(this.ops["CreateUserProfile"].apply(partialParams));
    }
    invokeCreateWorkforce(partialParams) {
        return this.client.createWorkforce(this.ops["CreateWorkforce"].apply(partialParams));
    }
    invokeCreateWorkteam(partialParams) {
        return this.client.createWorkteam(this.ops["CreateWorkteam"].apply(partialParams));
    }
    invokeDeleteAction(partialParams) {
        return this.client.deleteAction(this.ops["DeleteAction"].apply(partialParams));
    }
    invokeDeleteAlgorithm(partialParams) {
        return this.client.deleteAlgorithm(this.ops["DeleteAlgorithm"].apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        return this.client.deleteApp(this.ops["DeleteApp"].apply(partialParams));
    }
    invokeDeleteAppImageConfig(partialParams) {
        return this.client.deleteAppImageConfig(this.ops["DeleteAppImageConfig"].apply(partialParams));
    }
    invokeDeleteAssociation(partialParams) {
        return this.client.deleteAssociation(this.ops["DeleteAssociation"].apply(partialParams));
    }
    invokeDeleteCodeRepository(partialParams) {
        return this.client.deleteCodeRepository(this.ops["DeleteCodeRepository"].apply(partialParams));
    }
    invokeDeleteContext(partialParams) {
        return this.client.deleteContext(this.ops["DeleteContext"].apply(partialParams));
    }
    invokeDeleteDataQualityJobDefinition(partialParams) {
        return this.client.deleteDataQualityJobDefinition(this.ops["DeleteDataQualityJobDefinition"].apply(partialParams));
    }
    invokeDeleteDeviceFleet(partialParams) {
        return this.client.deleteDeviceFleet(this.ops["DeleteDeviceFleet"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].apply(partialParams));
    }
    invokeDeleteEndpointConfig(partialParams) {
        return this.client.deleteEndpointConfig(this.ops["DeleteEndpointConfig"].apply(partialParams));
    }
    invokeDeleteExperiment(partialParams) {
        return this.client.deleteExperiment(this.ops["DeleteExperiment"].apply(partialParams));
    }
    invokeDeleteFeatureGroup(partialParams) {
        return this.client.deleteFeatureGroup(this.ops["DeleteFeatureGroup"].apply(partialParams));
    }
    invokeDeleteFlowDefinition(partialParams) {
        return this.client.deleteFlowDefinition(this.ops["DeleteFlowDefinition"].apply(partialParams));
    }
    invokeDeleteHumanTaskUi(partialParams) {
        return this.client.deleteHumanTaskUi(this.ops["DeleteHumanTaskUi"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImageVersion(partialParams) {
        return this.client.deleteImageVersion(this.ops["DeleteImageVersion"].apply(partialParams));
    }
    invokeDeleteModel(partialParams) {
        return this.client.deleteModel(this.ops["DeleteModel"].apply(partialParams));
    }
    invokeDeleteModelBiasJobDefinition(partialParams) {
        return this.client.deleteModelBiasJobDefinition(this.ops["DeleteModelBiasJobDefinition"].apply(partialParams));
    }
    invokeDeleteModelExplainabilityJobDefinition(partialParams) {
        return this.client.deleteModelExplainabilityJobDefinition(this.ops["DeleteModelExplainabilityJobDefinition"].apply(partialParams));
    }
    invokeDeleteModelPackage(partialParams) {
        return this.client.deleteModelPackage(this.ops["DeleteModelPackage"].apply(partialParams));
    }
    invokeDeleteModelPackageGroup(partialParams) {
        return this.client.deleteModelPackageGroup(this.ops["DeleteModelPackageGroup"].apply(partialParams));
    }
    invokeDeleteModelPackageGroupPolicy(partialParams) {
        return this.client.deleteModelPackageGroupPolicy(this.ops["DeleteModelPackageGroupPolicy"].apply(partialParams));
    }
    invokeDeleteModelQualityJobDefinition(partialParams) {
        return this.client.deleteModelQualityJobDefinition(this.ops["DeleteModelQualityJobDefinition"].apply(partialParams));
    }
    invokeDeleteMonitoringSchedule(partialParams) {
        return this.client.deleteMonitoringSchedule(this.ops["DeleteMonitoringSchedule"].apply(partialParams));
    }
    invokeDeleteNotebookInstance(partialParams) {
        return this.client.deleteNotebookInstance(this.ops["DeleteNotebookInstance"].apply(partialParams));
    }
    invokeDeleteNotebookInstanceLifecycleConfig(partialParams) {
        return this.client.deleteNotebookInstanceLifecycleConfig(this.ops["DeleteNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        return this.client.deletePipeline(this.ops["DeletePipeline"].apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        return this.client.deleteProject(this.ops["DeleteProject"].apply(partialParams));
    }
    invokeDeleteStudioLifecycleConfig(partialParams) {
        return this.client.deleteStudioLifecycleConfig(this.ops["DeleteStudioLifecycleConfig"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteTrial(partialParams) {
        return this.client.deleteTrial(this.ops["DeleteTrial"].apply(partialParams));
    }
    invokeDeleteTrialComponent(partialParams) {
        return this.client.deleteTrialComponent(this.ops["DeleteTrialComponent"].apply(partialParams));
    }
    invokeDeleteUserProfile(partialParams) {
        return this.client.deleteUserProfile(this.ops["DeleteUserProfile"].apply(partialParams));
    }
    invokeDeleteWorkforce(partialParams) {
        return this.client.deleteWorkforce(this.ops["DeleteWorkforce"].apply(partialParams));
    }
    invokeDeleteWorkteam(partialParams) {
        return this.client.deleteWorkteam(this.ops["DeleteWorkteam"].apply(partialParams));
    }
    invokeDeregisterDevices(partialParams) {
        return this.client.deregisterDevices(this.ops["DeregisterDevices"].apply(partialParams));
    }
    invokeDescribeAction(partialParams) {
        return this.client.describeAction(this.ops["DescribeAction"].apply(partialParams));
    }
    invokeDescribeAlgorithm(partialParams) {
        return this.client.describeAlgorithm(this.ops["DescribeAlgorithm"].apply(partialParams));
    }
    invokeDescribeApp(partialParams) {
        return this.client.describeApp(this.ops["DescribeApp"].apply(partialParams));
    }
    invokeDescribeAppImageConfig(partialParams) {
        return this.client.describeAppImageConfig(this.ops["DescribeAppImageConfig"].apply(partialParams));
    }
    invokeDescribeArtifact(partialParams) {
        return this.client.describeArtifact(this.ops["DescribeArtifact"].apply(partialParams));
    }
    invokeDescribeAutoMLJob(partialParams) {
        return this.client.describeAutoMLJob(this.ops["DescribeAutoMLJob"].apply(partialParams));
    }
    invokeDescribeCodeRepository(partialParams) {
        return this.client.describeCodeRepository(this.ops["DescribeCodeRepository"].apply(partialParams));
    }
    invokeDescribeCompilationJob(partialParams) {
        return this.client.describeCompilationJob(this.ops["DescribeCompilationJob"].apply(partialParams));
    }
    invokeDescribeContext(partialParams) {
        return this.client.describeContext(this.ops["DescribeContext"].apply(partialParams));
    }
    invokeDescribeDataQualityJobDefinition(partialParams) {
        return this.client.describeDataQualityJobDefinition(this.ops["DescribeDataQualityJobDefinition"].apply(partialParams));
    }
    invokeDescribeDevice(partialParams) {
        return this.client.describeDevice(this.ops["DescribeDevice"].apply(partialParams));
    }
    invokeDescribeDeviceFleet(partialParams) {
        return this.client.describeDeviceFleet(this.ops["DescribeDeviceFleet"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeEdgePackagingJob(partialParams) {
        return this.client.describeEdgePackagingJob(this.ops["DescribeEdgePackagingJob"].apply(partialParams));
    }
    invokeDescribeEndpoint(partialParams) {
        return this.client.describeEndpoint(this.ops["DescribeEndpoint"].apply(partialParams));
    }
    invokeDescribeEndpointConfig(partialParams) {
        return this.client.describeEndpointConfig(this.ops["DescribeEndpointConfig"].apply(partialParams));
    }
    invokeDescribeExperiment(partialParams) {
        return this.client.describeExperiment(this.ops["DescribeExperiment"].apply(partialParams));
    }
    invokeDescribeFeatureGroup(partialParams) {
        return this.client.describeFeatureGroup(this.ops["DescribeFeatureGroup"].apply(partialParams));
    }
    invokeDescribeFlowDefinition(partialParams) {
        return this.client.describeFlowDefinition(this.ops["DescribeFlowDefinition"].apply(partialParams));
    }
    invokeDescribeHumanTaskUi(partialParams) {
        return this.client.describeHumanTaskUi(this.ops["DescribeHumanTaskUi"].apply(partialParams));
    }
    invokeDescribeHyperParameterTuningJob(partialParams) {
        return this.client.describeHyperParameterTuningJob(this.ops["DescribeHyperParameterTuningJob"].apply(partialParams));
    }
    invokeDescribeImage(partialParams) {
        return this.client.describeImage(this.ops["DescribeImage"].apply(partialParams));
    }
    invokeDescribeImageVersion(partialParams) {
        return this.client.describeImageVersion(this.ops["DescribeImageVersion"].apply(partialParams));
    }
    invokeDescribeInferenceRecommendationsJob(partialParams) {
        return this.client.describeInferenceRecommendationsJob(this.ops["DescribeInferenceRecommendationsJob"].apply(partialParams));
    }
    invokeDescribeLabelingJob(partialParams) {
        return this.client.describeLabelingJob(this.ops["DescribeLabelingJob"].apply(partialParams));
    }
    invokeDescribeLineageGroup(partialParams) {
        return this.client.describeLineageGroup(this.ops["DescribeLineageGroup"].apply(partialParams));
    }
    invokeDescribeModel(partialParams) {
        return this.client.describeModel(this.ops["DescribeModel"].apply(partialParams));
    }
    invokeDescribeModelBiasJobDefinition(partialParams) {
        return this.client.describeModelBiasJobDefinition(this.ops["DescribeModelBiasJobDefinition"].apply(partialParams));
    }
    invokeDescribeModelExplainabilityJobDefinition(partialParams) {
        return this.client.describeModelExplainabilityJobDefinition(this.ops["DescribeModelExplainabilityJobDefinition"].apply(partialParams));
    }
    invokeDescribeModelPackage(partialParams) {
        return this.client.describeModelPackage(this.ops["DescribeModelPackage"].apply(partialParams));
    }
    invokeDescribeModelPackageGroup(partialParams) {
        return this.client.describeModelPackageGroup(this.ops["DescribeModelPackageGroup"].apply(partialParams));
    }
    invokeDescribeModelQualityJobDefinition(partialParams) {
        return this.client.describeModelQualityJobDefinition(this.ops["DescribeModelQualityJobDefinition"].apply(partialParams));
    }
    invokeDescribeMonitoringSchedule(partialParams) {
        return this.client.describeMonitoringSchedule(this.ops["DescribeMonitoringSchedule"].apply(partialParams));
    }
    invokeDescribeNotebookInstance(partialParams) {
        return this.client.describeNotebookInstance(this.ops["DescribeNotebookInstance"].apply(partialParams));
    }
    invokeDescribeNotebookInstanceLifecycleConfig(partialParams) {
        return this.client.describeNotebookInstanceLifecycleConfig(this.ops["DescribeNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeDescribePipeline(partialParams) {
        return this.client.describePipeline(this.ops["DescribePipeline"].apply(partialParams));
    }
    invokeDescribePipelineDefinitionForExecution(partialParams) {
        return this.client.describePipelineDefinitionForExecution(this.ops["DescribePipelineDefinitionForExecution"].apply(partialParams));
    }
    invokeDescribePipelineExecution(partialParams) {
        return this.client.describePipelineExecution(this.ops["DescribePipelineExecution"].apply(partialParams));
    }
    invokeDescribeProcessingJob(partialParams) {
        return this.client.describeProcessingJob(this.ops["DescribeProcessingJob"].apply(partialParams));
    }
    invokeDescribeProject(partialParams) {
        return this.client.describeProject(this.ops["DescribeProject"].apply(partialParams));
    }
    invokeDescribeStudioLifecycleConfig(partialParams) {
        return this.client.describeStudioLifecycleConfig(this.ops["DescribeStudioLifecycleConfig"].apply(partialParams));
    }
    invokeDescribeSubscribedWorkteam(partialParams) {
        return this.client.describeSubscribedWorkteam(this.ops["DescribeSubscribedWorkteam"].apply(partialParams));
    }
    invokeDescribeTrainingJob(partialParams) {
        return this.client.describeTrainingJob(this.ops["DescribeTrainingJob"].apply(partialParams));
    }
    invokeDescribeTransformJob(partialParams) {
        return this.client.describeTransformJob(this.ops["DescribeTransformJob"].apply(partialParams));
    }
    invokeDescribeTrial(partialParams) {
        return this.client.describeTrial(this.ops["DescribeTrial"].apply(partialParams));
    }
    invokeDescribeTrialComponent(partialParams) {
        return this.client.describeTrialComponent(this.ops["DescribeTrialComponent"].apply(partialParams));
    }
    invokeDescribeUserProfile(partialParams) {
        return this.client.describeUserProfile(this.ops["DescribeUserProfile"].apply(partialParams));
    }
    invokeDescribeWorkforce(partialParams) {
        return this.client.describeWorkforce(this.ops["DescribeWorkforce"].apply(partialParams));
    }
    invokeDescribeWorkteam(partialParams) {
        return this.client.describeWorkteam(this.ops["DescribeWorkteam"].apply(partialParams));
    }
    invokeDisassociateTrialComponent(partialParams) {
        return this.client.disassociateTrialComponent(this.ops["DisassociateTrialComponent"].apply(partialParams));
    }
    invokeGetDeviceFleetReport(partialParams) {
        return this.client.getDeviceFleetReport(this.ops["GetDeviceFleetReport"].apply(partialParams));
    }
    invokeGetLineageGroupPolicy(partialParams) {
        return this.client.getLineageGroupPolicy(this.ops["GetLineageGroupPolicy"].apply(partialParams));
    }
    invokeGetModelPackageGroupPolicy(partialParams) {
        return this.client.getModelPackageGroupPolicy(this.ops["GetModelPackageGroupPolicy"].apply(partialParams));
    }
    invokeGetSearchSuggestions(partialParams) {
        return this.client.getSearchSuggestions(this.ops["GetSearchSuggestions"].apply(partialParams));
    }
    invokeListCandidatesForAutoMLJob(partialParams) {
        return this.client.listCandidatesForAutoMLJob(this.ops["ListCandidatesForAutoMLJob"].apply(partialParams));
    }
    invokeListImageVersions(partialParams) {
        return this.client.listImageVersions(this.ops["ListImageVersions"].apply(partialParams));
    }
    invokeListLabelingJobsForWorkteam(partialParams) {
        return this.client.listLabelingJobsForWorkteam(this.ops["ListLabelingJobsForWorkteam"].apply(partialParams));
    }
    invokeListPipelineExecutions(partialParams) {
        return this.client.listPipelineExecutions(this.ops["ListPipelineExecutions"].apply(partialParams));
    }
    invokeListPipelineParametersForExecution(partialParams) {
        return this.client.listPipelineParametersForExecution(this.ops["ListPipelineParametersForExecution"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListTrainingJobsForHyperParameterTuningJob(partialParams) {
        return this.client.listTrainingJobsForHyperParameterTuningJob(this.ops["ListTrainingJobsForHyperParameterTuningJob"].apply(partialParams));
    }
    invokePutModelPackageGroupPolicy(partialParams) {
        return this.client.putModelPackageGroupPolicy(this.ops["PutModelPackageGroupPolicy"].apply(partialParams));
    }
    invokeQueryLineage(partialParams) {
        return this.client.queryLineage(this.ops["QueryLineage"].apply(partialParams));
    }
    invokeRegisterDevices(partialParams) {
        return this.client.registerDevices(this.ops["RegisterDevices"].apply(partialParams));
    }
    invokeRenderUiTemplate(partialParams) {
        return this.client.renderUiTemplate(this.ops["RenderUiTemplate"].apply(partialParams));
    }
    invokeRetryPipelineExecution(partialParams) {
        return this.client.retryPipelineExecution(this.ops["RetryPipelineExecution"].apply(partialParams));
    }
    invokeSearch(partialParams) {
        return this.client.search(this.ops["Search"].apply(partialParams));
    }
    invokeSendPipelineExecutionStepFailure(partialParams) {
        return this.client.sendPipelineExecutionStepFailure(this.ops["SendPipelineExecutionStepFailure"].apply(partialParams));
    }
    invokeSendPipelineExecutionStepSuccess(partialParams) {
        return this.client.sendPipelineExecutionStepSuccess(this.ops["SendPipelineExecutionStepSuccess"].apply(partialParams));
    }
    invokeStartMonitoringSchedule(partialParams) {
        return this.client.startMonitoringSchedule(this.ops["StartMonitoringSchedule"].apply(partialParams));
    }
    invokeStartNotebookInstance(partialParams) {
        return this.client.startNotebookInstance(this.ops["StartNotebookInstance"].apply(partialParams));
    }
    invokeStartPipelineExecution(partialParams) {
        return this.client.startPipelineExecution(this.ops["StartPipelineExecution"].apply(partialParams));
    }
    invokeStopAutoMLJob(partialParams) {
        return this.client.stopAutoMLJob(this.ops["StopAutoMLJob"].apply(partialParams));
    }
    invokeStopCompilationJob(partialParams) {
        return this.client.stopCompilationJob(this.ops["StopCompilationJob"].apply(partialParams));
    }
    invokeStopEdgePackagingJob(partialParams) {
        return this.client.stopEdgePackagingJob(this.ops["StopEdgePackagingJob"].apply(partialParams));
    }
    invokeStopHyperParameterTuningJob(partialParams) {
        return this.client.stopHyperParameterTuningJob(this.ops["StopHyperParameterTuningJob"].apply(partialParams));
    }
    invokeStopInferenceRecommendationsJob(partialParams) {
        return this.client.stopInferenceRecommendationsJob(this.ops["StopInferenceRecommendationsJob"].apply(partialParams));
    }
    invokeStopLabelingJob(partialParams) {
        return this.client.stopLabelingJob(this.ops["StopLabelingJob"].apply(partialParams));
    }
    invokeStopMonitoringSchedule(partialParams) {
        return this.client.stopMonitoringSchedule(this.ops["StopMonitoringSchedule"].apply(partialParams));
    }
    invokeStopNotebookInstance(partialParams) {
        return this.client.stopNotebookInstance(this.ops["StopNotebookInstance"].apply(partialParams));
    }
    invokeStopPipelineExecution(partialParams) {
        return this.client.stopPipelineExecution(this.ops["StopPipelineExecution"].apply(partialParams));
    }
    invokeStopProcessingJob(partialParams) {
        return this.client.stopProcessingJob(this.ops["StopProcessingJob"].apply(partialParams));
    }
    invokeStopTrainingJob(partialParams) {
        return this.client.stopTrainingJob(this.ops["StopTrainingJob"].apply(partialParams));
    }
    invokeStopTransformJob(partialParams) {
        return this.client.stopTransformJob(this.ops["StopTransformJob"].apply(partialParams));
    }
    invokeUpdateAction(partialParams) {
        return this.client.updateAction(this.ops["UpdateAction"].apply(partialParams));
    }
    invokeUpdateAppImageConfig(partialParams) {
        return this.client.updateAppImageConfig(this.ops["UpdateAppImageConfig"].apply(partialParams));
    }
    invokeUpdateArtifact(partialParams) {
        return this.client.updateArtifact(this.ops["UpdateArtifact"].apply(partialParams));
    }
    invokeUpdateCodeRepository(partialParams) {
        return this.client.updateCodeRepository(this.ops["UpdateCodeRepository"].apply(partialParams));
    }
    invokeUpdateContext(partialParams) {
        return this.client.updateContext(this.ops["UpdateContext"].apply(partialParams));
    }
    invokeUpdateDeviceFleet(partialParams) {
        return this.client.updateDeviceFleet(this.ops["UpdateDeviceFleet"].apply(partialParams));
    }
    invokeUpdateDevices(partialParams) {
        return this.client.updateDevices(this.ops["UpdateDevices"].apply(partialParams));
    }
    invokeUpdateDomain(partialParams) {
        return this.client.updateDomain(this.ops["UpdateDomain"].apply(partialParams));
    }
    invokeUpdateEndpoint(partialParams) {
        return this.client.updateEndpoint(this.ops["UpdateEndpoint"].apply(partialParams));
    }
    invokeUpdateEndpointWeightsAndCapacities(partialParams) {
        return this.client.updateEndpointWeightsAndCapacities(this.ops["UpdateEndpointWeightsAndCapacities"].apply(partialParams));
    }
    invokeUpdateExperiment(partialParams) {
        return this.client.updateExperiment(this.ops["UpdateExperiment"].apply(partialParams));
    }
    invokeUpdateImage(partialParams) {
        return this.client.updateImage(this.ops["UpdateImage"].apply(partialParams));
    }
    invokeUpdateModelPackage(partialParams) {
        return this.client.updateModelPackage(this.ops["UpdateModelPackage"].apply(partialParams));
    }
    invokeUpdateMonitoringSchedule(partialParams) {
        return this.client.updateMonitoringSchedule(this.ops["UpdateMonitoringSchedule"].apply(partialParams));
    }
    invokeUpdateNotebookInstance(partialParams) {
        return this.client.updateNotebookInstance(this.ops["UpdateNotebookInstance"].apply(partialParams));
    }
    invokeUpdateNotebookInstanceLifecycleConfig(partialParams) {
        return this.client.updateNotebookInstanceLifecycleConfig(this.ops["UpdateNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        return this.client.updatePipeline(this.ops["UpdatePipeline"].apply(partialParams));
    }
    invokeUpdatePipelineExecution(partialParams) {
        return this.client.updatePipelineExecution(this.ops["UpdatePipelineExecution"].apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        return this.client.updateProject(this.ops["UpdateProject"].apply(partialParams));
    }
    invokeUpdateTrainingJob(partialParams) {
        return this.client.updateTrainingJob(this.ops["UpdateTrainingJob"].apply(partialParams));
    }
    invokeUpdateTrial(partialParams) {
        return this.client.updateTrial(this.ops["UpdateTrial"].apply(partialParams));
    }
    invokeUpdateTrialComponent(partialParams) {
        return this.client.updateTrialComponent(this.ops["UpdateTrialComponent"].apply(partialParams));
    }
    invokeUpdateUserProfile(partialParams) {
        return this.client.updateUserProfile(this.ops["UpdateUserProfile"].apply(partialParams));
    }
    invokeUpdateWorkforce(partialParams) {
        return this.client.updateWorkforce(this.ops["UpdateWorkforce"].apply(partialParams));
    }
    invokeUpdateWorkteam(partialParams) {
        return this.client.updateWorkteam(this.ops["UpdateWorkteam"].apply(partialParams));
    }
}
exports.default = default_1;
