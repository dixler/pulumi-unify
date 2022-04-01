"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/sagemaker-2017-07-24.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.sagemaker.CodeRepository {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SageMaker();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAddAssociation(partialParams) {
        this.boot();
        return this.client.addAssociation(this.ops["AddAssociation"].apply(partialParams));
    }
    invokeAddTags(partialParams) {
        this.boot();
        return this.client.addTags(this.ops["AddTags"].apply(partialParams));
    }
    invokeAssociateTrialComponent(partialParams) {
        this.boot();
        return this.client.associateTrialComponent(this.ops["AssociateTrialComponent"].apply(partialParams));
    }
    invokeBatchDescribeModelPackage(partialParams) {
        this.boot();
        return this.client.batchDescribeModelPackage(this.ops["BatchDescribeModelPackage"].apply(partialParams));
    }
    invokeCreateAction(partialParams) {
        this.boot();
        return this.client.createAction(this.ops["CreateAction"].apply(partialParams));
    }
    invokeCreateAlgorithm(partialParams) {
        this.boot();
        return this.client.createAlgorithm(this.ops["CreateAlgorithm"].apply(partialParams));
    }
    invokeCreateApp(partialParams) {
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateAppImageConfig(partialParams) {
        this.boot();
        return this.client.createAppImageConfig(this.ops["CreateAppImageConfig"].apply(partialParams));
    }
    invokeCreateArtifact(partialParams) {
        this.boot();
        return this.client.createArtifact(this.ops["CreateArtifact"].apply(partialParams));
    }
    invokeCreateAutoMLJob(partialParams) {
        this.boot();
        return this.client.createAutoMLJob(this.ops["CreateAutoMLJob"].apply(partialParams));
    }
    invokeCreateCodeRepository(partialParams) {
        this.boot();
        return this.client.createCodeRepository(this.ops["CreateCodeRepository"].apply(partialParams));
    }
    invokeCreateCompilationJob(partialParams) {
        this.boot();
        return this.client.createCompilationJob(this.ops["CreateCompilationJob"].apply(partialParams));
    }
    invokeCreateContext(partialParams) {
        this.boot();
        return this.client.createContext(this.ops["CreateContext"].apply(partialParams));
    }
    invokeCreateDataQualityJobDefinition(partialParams) {
        this.boot();
        return this.client.createDataQualityJobDefinition(this.ops["CreateDataQualityJobDefinition"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeCreateEndpoint(partialParams) {
        this.boot();
        return this.client.createEndpoint(this.ops["CreateEndpoint"].apply(partialParams));
    }
    invokeCreateEndpointConfig(partialParams) {
        this.boot();
        return this.client.createEndpointConfig(this.ops["CreateEndpointConfig"].apply(partialParams));
    }
    invokeCreateExperiment(partialParams) {
        this.boot();
        return this.client.createExperiment(this.ops["CreateExperiment"].apply(partialParams));
    }
    invokeCreateFeatureGroup(partialParams) {
        this.boot();
        return this.client.createFeatureGroup(this.ops["CreateFeatureGroup"].apply(partialParams));
    }
    invokeCreateFlowDefinition(partialParams) {
        this.boot();
        return this.client.createFlowDefinition(this.ops["CreateFlowDefinition"].apply(partialParams));
    }
    invokeCreateHumanTaskUi(partialParams) {
        this.boot();
        return this.client.createHumanTaskUi(this.ops["CreateHumanTaskUi"].apply(partialParams));
    }
    invokeCreateHyperParameterTuningJob(partialParams) {
        this.boot();
        return this.client.createHyperParameterTuningJob(this.ops["CreateHyperParameterTuningJob"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateImageVersion(partialParams) {
        this.boot();
        return this.client.createImageVersion(this.ops["CreateImageVersion"].apply(partialParams));
    }
    invokeCreateInferenceRecommendationsJob(partialParams) {
        this.boot();
        return this.client.createInferenceRecommendationsJob(this.ops["CreateInferenceRecommendationsJob"].apply(partialParams));
    }
    invokeCreateLabelingJob(partialParams) {
        this.boot();
        return this.client.createLabelingJob(this.ops["CreateLabelingJob"].apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        this.boot();
        return this.client.createModel(this.ops["CreateModel"].apply(partialParams));
    }
    invokeCreateModelBiasJobDefinition(partialParams) {
        this.boot();
        return this.client.createModelBiasJobDefinition(this.ops["CreateModelBiasJobDefinition"].apply(partialParams));
    }
    invokeCreateModelExplainabilityJobDefinition(partialParams) {
        this.boot();
        return this.client.createModelExplainabilityJobDefinition(this.ops["CreateModelExplainabilityJobDefinition"].apply(partialParams));
    }
    invokeCreateModelPackage(partialParams) {
        this.boot();
        return this.client.createModelPackage(this.ops["CreateModelPackage"].apply(partialParams));
    }
    invokeCreateModelPackageGroup(partialParams) {
        this.boot();
        return this.client.createModelPackageGroup(this.ops["CreateModelPackageGroup"].apply(partialParams));
    }
    invokeCreateModelQualityJobDefinition(partialParams) {
        this.boot();
        return this.client.createModelQualityJobDefinition(this.ops["CreateModelQualityJobDefinition"].apply(partialParams));
    }
    invokeCreateMonitoringSchedule(partialParams) {
        this.boot();
        return this.client.createMonitoringSchedule(this.ops["CreateMonitoringSchedule"].apply(partialParams));
    }
    invokeCreateNotebookInstance(partialParams) {
        this.boot();
        return this.client.createNotebookInstance(this.ops["CreateNotebookInstance"].apply(partialParams));
    }
    invokeCreateNotebookInstanceLifecycleConfig(partialParams) {
        this.boot();
        return this.client.createNotebookInstanceLifecycleConfig(this.ops["CreateNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeCreatePresignedDomainUrl(partialParams) {
        this.boot();
        return this.client.createPresignedDomainUrl(this.ops["CreatePresignedDomainUrl"].apply(partialParams));
    }
    invokeCreatePresignedNotebookInstanceUrl(partialParams) {
        this.boot();
        return this.client.createPresignedNotebookInstanceUrl(this.ops["CreatePresignedNotebookInstanceUrl"].apply(partialParams));
    }
    invokeCreateProcessingJob(partialParams) {
        this.boot();
        return this.client.createProcessingJob(this.ops["CreateProcessingJob"].apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        this.boot();
        return this.client.createProject(this.ops["CreateProject"].apply(partialParams));
    }
    invokeCreateStudioLifecycleConfig(partialParams) {
        this.boot();
        return this.client.createStudioLifecycleConfig(this.ops["CreateStudioLifecycleConfig"].apply(partialParams));
    }
    invokeCreateTrainingJob(partialParams) {
        this.boot();
        return this.client.createTrainingJob(this.ops["CreateTrainingJob"].apply(partialParams));
    }
    invokeCreateTransformJob(partialParams) {
        this.boot();
        return this.client.createTransformJob(this.ops["CreateTransformJob"].apply(partialParams));
    }
    invokeCreateTrial(partialParams) {
        this.boot();
        return this.client.createTrial(this.ops["CreateTrial"].apply(partialParams));
    }
    invokeCreateTrialComponent(partialParams) {
        this.boot();
        return this.client.createTrialComponent(this.ops["CreateTrialComponent"].apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        this.boot();
        return this.client.createUserProfile(this.ops["CreateUserProfile"].apply(partialParams));
    }
    invokeCreateWorkforce(partialParams) {
        this.boot();
        return this.client.createWorkforce(this.ops["CreateWorkforce"].apply(partialParams));
    }
    invokeCreateWorkteam(partialParams) {
        this.boot();
        return this.client.createWorkteam(this.ops["CreateWorkteam"].apply(partialParams));
    }
    invokeDeleteAction(partialParams) {
        this.boot();
        return this.client.deleteAction(this.ops["DeleteAction"].apply(partialParams));
    }
    invokeDeleteArtifact(partialParams) {
        this.boot();
        return this.client.deleteArtifact(this.ops["DeleteArtifact"].apply(partialParams));
    }
    invokeDeleteAssociation(partialParams) {
        this.boot();
        return this.client.deleteAssociation(this.ops["DeleteAssociation"].apply(partialParams));
    }
    invokeDeleteContext(partialParams) {
        this.boot();
        return this.client.deleteContext(this.ops["DeleteContext"].apply(partialParams));
    }
    invokeDeleteExperiment(partialParams) {
        this.boot();
        return this.client.deleteExperiment(this.ops["DeleteExperiment"].apply(partialParams));
    }
    invokeDeleteFlowDefinition(partialParams) {
        this.boot();
        return this.client.deleteFlowDefinition(this.ops["DeleteFlowDefinition"].apply(partialParams));
    }
    invokeDeleteHumanTaskUi(partialParams) {
        this.boot();
        return this.client.deleteHumanTaskUi(this.ops["DeleteHumanTaskUi"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImageVersion(partialParams) {
        this.boot();
        return this.client.deleteImageVersion(this.ops["DeleteImageVersion"].apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        this.boot();
        return this.client.deletePipeline(this.ops["DeletePipeline"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteTrial(partialParams) {
        this.boot();
        return this.client.deleteTrial(this.ops["DeleteTrial"].apply(partialParams));
    }
    invokeDeleteTrialComponent(partialParams) {
        this.boot();
        return this.client.deleteTrialComponent(this.ops["DeleteTrialComponent"].apply(partialParams));
    }
    invokeDeleteWorkforce(partialParams) {
        this.boot();
        return this.client.deleteWorkforce(this.ops["DeleteWorkforce"].apply(partialParams));
    }
    invokeDeleteWorkteam(partialParams) {
        this.boot();
        return this.client.deleteWorkteam(this.ops["DeleteWorkteam"].apply(partialParams));
    }
    invokeDescribeAction(partialParams) {
        this.boot();
        return this.client.describeAction(this.ops["DescribeAction"].apply(partialParams));
    }
    invokeDescribeAlgorithm(partialParams) {
        this.boot();
        return this.client.describeAlgorithm(this.ops["DescribeAlgorithm"].apply(partialParams));
    }
    invokeDescribeApp(partialParams) {
        this.boot();
        return this.client.describeApp(this.ops["DescribeApp"].apply(partialParams));
    }
    invokeDescribeAppImageConfig(partialParams) {
        this.boot();
        return this.client.describeAppImageConfig(this.ops["DescribeAppImageConfig"].apply(partialParams));
    }
    invokeDescribeArtifact(partialParams) {
        this.boot();
        return this.client.describeArtifact(this.ops["DescribeArtifact"].apply(partialParams));
    }
    invokeDescribeAutoMLJob(partialParams) {
        this.boot();
        return this.client.describeAutoMLJob(this.ops["DescribeAutoMLJob"].apply(partialParams));
    }
    invokeDescribeCodeRepository(partialParams) {
        this.boot();
        return this.client.describeCodeRepository(this.ops["DescribeCodeRepository"].apply(partialParams));
    }
    invokeDescribeCompilationJob(partialParams) {
        this.boot();
        return this.client.describeCompilationJob(this.ops["DescribeCompilationJob"].apply(partialParams));
    }
    invokeDescribeContext(partialParams) {
        this.boot();
        return this.client.describeContext(this.ops["DescribeContext"].apply(partialParams));
    }
    invokeDescribeDataQualityJobDefinition(partialParams) {
        this.boot();
        return this.client.describeDataQualityJobDefinition(this.ops["DescribeDataQualityJobDefinition"].apply(partialParams));
    }
    invokeDescribeDevice(partialParams) {
        this.boot();
        return this.client.describeDevice(this.ops["DescribeDevice"].apply(partialParams));
    }
    invokeDescribeDeviceFleet(partialParams) {
        this.boot();
        return this.client.describeDeviceFleet(this.ops["DescribeDeviceFleet"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeEdgePackagingJob(partialParams) {
        this.boot();
        return this.client.describeEdgePackagingJob(this.ops["DescribeEdgePackagingJob"].apply(partialParams));
    }
    invokeDescribeEndpoint(partialParams) {
        this.boot();
        return this.client.describeEndpoint(this.ops["DescribeEndpoint"].apply(partialParams));
    }
    invokeDescribeEndpointConfig(partialParams) {
        this.boot();
        return this.client.describeEndpointConfig(this.ops["DescribeEndpointConfig"].apply(partialParams));
    }
    invokeDescribeExperiment(partialParams) {
        this.boot();
        return this.client.describeExperiment(this.ops["DescribeExperiment"].apply(partialParams));
    }
    invokeDescribeFeatureGroup(partialParams) {
        this.boot();
        return this.client.describeFeatureGroup(this.ops["DescribeFeatureGroup"].apply(partialParams));
    }
    invokeDescribeFlowDefinition(partialParams) {
        this.boot();
        return this.client.describeFlowDefinition(this.ops["DescribeFlowDefinition"].apply(partialParams));
    }
    invokeDescribeHumanTaskUi(partialParams) {
        this.boot();
        return this.client.describeHumanTaskUi(this.ops["DescribeHumanTaskUi"].apply(partialParams));
    }
    invokeDescribeHyperParameterTuningJob(partialParams) {
        this.boot();
        return this.client.describeHyperParameterTuningJob(this.ops["DescribeHyperParameterTuningJob"].apply(partialParams));
    }
    invokeDescribeImage(partialParams) {
        this.boot();
        return this.client.describeImage(this.ops["DescribeImage"].apply(partialParams));
    }
    invokeDescribeImageVersion(partialParams) {
        this.boot();
        return this.client.describeImageVersion(this.ops["DescribeImageVersion"].apply(partialParams));
    }
    invokeDescribeInferenceRecommendationsJob(partialParams) {
        this.boot();
        return this.client.describeInferenceRecommendationsJob(this.ops["DescribeInferenceRecommendationsJob"].apply(partialParams));
    }
    invokeDescribeLabelingJob(partialParams) {
        this.boot();
        return this.client.describeLabelingJob(this.ops["DescribeLabelingJob"].apply(partialParams));
    }
    invokeDescribeLineageGroup(partialParams) {
        this.boot();
        return this.client.describeLineageGroup(this.ops["DescribeLineageGroup"].apply(partialParams));
    }
    invokeDescribeModel(partialParams) {
        this.boot();
        return this.client.describeModel(this.ops["DescribeModel"].apply(partialParams));
    }
    invokeDescribeModelBiasJobDefinition(partialParams) {
        this.boot();
        return this.client.describeModelBiasJobDefinition(this.ops["DescribeModelBiasJobDefinition"].apply(partialParams));
    }
    invokeDescribeModelExplainabilityJobDefinition(partialParams) {
        this.boot();
        return this.client.describeModelExplainabilityJobDefinition(this.ops["DescribeModelExplainabilityJobDefinition"].apply(partialParams));
    }
    invokeDescribeModelPackage(partialParams) {
        this.boot();
        return this.client.describeModelPackage(this.ops["DescribeModelPackage"].apply(partialParams));
    }
    invokeDescribeModelPackageGroup(partialParams) {
        this.boot();
        return this.client.describeModelPackageGroup(this.ops["DescribeModelPackageGroup"].apply(partialParams));
    }
    invokeDescribeModelQualityJobDefinition(partialParams) {
        this.boot();
        return this.client.describeModelQualityJobDefinition(this.ops["DescribeModelQualityJobDefinition"].apply(partialParams));
    }
    invokeDescribeMonitoringSchedule(partialParams) {
        this.boot();
        return this.client.describeMonitoringSchedule(this.ops["DescribeMonitoringSchedule"].apply(partialParams));
    }
    invokeDescribeNotebookInstance(partialParams) {
        this.boot();
        return this.client.describeNotebookInstance(this.ops["DescribeNotebookInstance"].apply(partialParams));
    }
    invokeDescribeNotebookInstanceLifecycleConfig(partialParams) {
        this.boot();
        return this.client.describeNotebookInstanceLifecycleConfig(this.ops["DescribeNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeDescribePipeline(partialParams) {
        this.boot();
        return this.client.describePipeline(this.ops["DescribePipeline"].apply(partialParams));
    }
    invokeDescribePipelineDefinitionForExecution(partialParams) {
        this.boot();
        return this.client.describePipelineDefinitionForExecution(this.ops["DescribePipelineDefinitionForExecution"].apply(partialParams));
    }
    invokeDescribePipelineExecution(partialParams) {
        this.boot();
        return this.client.describePipelineExecution(this.ops["DescribePipelineExecution"].apply(partialParams));
    }
    invokeDescribeProcessingJob(partialParams) {
        this.boot();
        return this.client.describeProcessingJob(this.ops["DescribeProcessingJob"].apply(partialParams));
    }
    invokeDescribeProject(partialParams) {
        this.boot();
        return this.client.describeProject(this.ops["DescribeProject"].apply(partialParams));
    }
    invokeDescribeStudioLifecycleConfig(partialParams) {
        this.boot();
        return this.client.describeStudioLifecycleConfig(this.ops["DescribeStudioLifecycleConfig"].apply(partialParams));
    }
    invokeDescribeSubscribedWorkteam(partialParams) {
        this.boot();
        return this.client.describeSubscribedWorkteam(this.ops["DescribeSubscribedWorkteam"].apply(partialParams));
    }
    invokeDescribeTrainingJob(partialParams) {
        this.boot();
        return this.client.describeTrainingJob(this.ops["DescribeTrainingJob"].apply(partialParams));
    }
    invokeDescribeTransformJob(partialParams) {
        this.boot();
        return this.client.describeTransformJob(this.ops["DescribeTransformJob"].apply(partialParams));
    }
    invokeDescribeTrial(partialParams) {
        this.boot();
        return this.client.describeTrial(this.ops["DescribeTrial"].apply(partialParams));
    }
    invokeDescribeTrialComponent(partialParams) {
        this.boot();
        return this.client.describeTrialComponent(this.ops["DescribeTrialComponent"].apply(partialParams));
    }
    invokeDescribeUserProfile(partialParams) {
        this.boot();
        return this.client.describeUserProfile(this.ops["DescribeUserProfile"].apply(partialParams));
    }
    invokeDescribeWorkforce(partialParams) {
        this.boot();
        return this.client.describeWorkforce(this.ops["DescribeWorkforce"].apply(partialParams));
    }
    invokeDescribeWorkteam(partialParams) {
        this.boot();
        return this.client.describeWorkteam(this.ops["DescribeWorkteam"].apply(partialParams));
    }
    invokeDisableSagemakerServicecatalogPortfolio(partialParams) {
        this.boot();
        return this.client.disableSagemakerServicecatalogPortfolio(this.ops["DisableSagemakerServicecatalogPortfolio"].apply(partialParams));
    }
    invokeDisassociateTrialComponent(partialParams) {
        this.boot();
        return this.client.disassociateTrialComponent(this.ops["DisassociateTrialComponent"].apply(partialParams));
    }
    invokeEnableSagemakerServicecatalogPortfolio(partialParams) {
        this.boot();
        return this.client.enableSagemakerServicecatalogPortfolio(this.ops["EnableSagemakerServicecatalogPortfolio"].apply(partialParams));
    }
    invokeGetDeviceFleetReport(partialParams) {
        this.boot();
        return this.client.getDeviceFleetReport(this.ops["GetDeviceFleetReport"].apply(partialParams));
    }
    invokeGetLineageGroupPolicy(partialParams) {
        this.boot();
        return this.client.getLineageGroupPolicy(this.ops["GetLineageGroupPolicy"].apply(partialParams));
    }
    invokeGetModelPackageGroupPolicy(partialParams) {
        this.boot();
        return this.client.getModelPackageGroupPolicy(this.ops["GetModelPackageGroupPolicy"].apply(partialParams));
    }
    invokeGetSagemakerServicecatalogPortfolioStatus(partialParams) {
        this.boot();
        return this.client.getSagemakerServicecatalogPortfolioStatus(this.ops["GetSagemakerServicecatalogPortfolioStatus"].apply(partialParams));
    }
    invokeGetSearchSuggestions(partialParams) {
        this.boot();
        return this.client.getSearchSuggestions(this.ops["GetSearchSuggestions"].apply(partialParams));
    }
    invokeListActions(partialParams) {
        this.boot();
        return this.client.listActions(this.ops["ListActions"].apply(partialParams));
    }
    invokeListAlgorithms(partialParams) {
        this.boot();
        return this.client.listAlgorithms(this.ops["ListAlgorithms"].apply(partialParams));
    }
    invokeListAppImageConfigs(partialParams) {
        this.boot();
        return this.client.listAppImageConfigs(this.ops["ListAppImageConfigs"].apply(partialParams));
    }
    invokeListApps(partialParams) {
        this.boot();
        return this.client.listApps(this.ops["ListApps"].apply(partialParams));
    }
    invokeListArtifacts(partialParams) {
        this.boot();
        return this.client.listArtifacts(this.ops["ListArtifacts"].apply(partialParams));
    }
    invokeListAssociations(partialParams) {
        this.boot();
        return this.client.listAssociations(this.ops["ListAssociations"].apply(partialParams));
    }
    invokeListAutoMLJobs(partialParams) {
        this.boot();
        return this.client.listAutoMLJobs(this.ops["ListAutoMLJobs"].apply(partialParams));
    }
    invokeListCandidatesForAutoMLJob(partialParams) {
        this.boot();
        return this.client.listCandidatesForAutoMLJob(this.ops["ListCandidatesForAutoMLJob"].apply(partialParams));
    }
    invokeListCodeRepositories(partialParams) {
        this.boot();
        return this.client.listCodeRepositories(this.ops["ListCodeRepositories"].apply(partialParams));
    }
    invokeListCompilationJobs(partialParams) {
        this.boot();
        return this.client.listCompilationJobs(this.ops["ListCompilationJobs"].apply(partialParams));
    }
    invokeListContexts(partialParams) {
        this.boot();
        return this.client.listContexts(this.ops["ListContexts"].apply(partialParams));
    }
    invokeListDataQualityJobDefinitions(partialParams) {
        this.boot();
        return this.client.listDataQualityJobDefinitions(this.ops["ListDataQualityJobDefinitions"].apply(partialParams));
    }
    invokeListDeviceFleets(partialParams) {
        this.boot();
        return this.client.listDeviceFleets(this.ops["ListDeviceFleets"].apply(partialParams));
    }
    invokeListDevices(partialParams) {
        this.boot();
        return this.client.listDevices(this.ops["ListDevices"].apply(partialParams));
    }
    invokeListDomains(partialParams) {
        this.boot();
        return this.client.listDomains(this.ops["ListDomains"].apply(partialParams));
    }
    invokeListEdgePackagingJobs(partialParams) {
        this.boot();
        return this.client.listEdgePackagingJobs(this.ops["ListEdgePackagingJobs"].apply(partialParams));
    }
    invokeListEndpointConfigs(partialParams) {
        this.boot();
        return this.client.listEndpointConfigs(this.ops["ListEndpointConfigs"].apply(partialParams));
    }
    invokeListEndpoints(partialParams) {
        this.boot();
        return this.client.listEndpoints(this.ops["ListEndpoints"].apply(partialParams));
    }
    invokeListExperiments(partialParams) {
        this.boot();
        return this.client.listExperiments(this.ops["ListExperiments"].apply(partialParams));
    }
    invokeListFeatureGroups(partialParams) {
        this.boot();
        return this.client.listFeatureGroups(this.ops["ListFeatureGroups"].apply(partialParams));
    }
    invokeListFlowDefinitions(partialParams) {
        this.boot();
        return this.client.listFlowDefinitions(this.ops["ListFlowDefinitions"].apply(partialParams));
    }
    invokeListHumanTaskUis(partialParams) {
        this.boot();
        return this.client.listHumanTaskUis(this.ops["ListHumanTaskUis"].apply(partialParams));
    }
    invokeListHyperParameterTuningJobs(partialParams) {
        this.boot();
        return this.client.listHyperParameterTuningJobs(this.ops["ListHyperParameterTuningJobs"].apply(partialParams));
    }
    invokeListImageVersions(partialParams) {
        this.boot();
        return this.client.listImageVersions(this.ops["ListImageVersions"].apply(partialParams));
    }
    invokeListImages(partialParams) {
        this.boot();
        return this.client.listImages(this.ops["ListImages"].apply(partialParams));
    }
    invokeListInferenceRecommendationsJobs(partialParams) {
        this.boot();
        return this.client.listInferenceRecommendationsJobs(this.ops["ListInferenceRecommendationsJobs"].apply(partialParams));
    }
    invokeListLabelingJobs(partialParams) {
        this.boot();
        return this.client.listLabelingJobs(this.ops["ListLabelingJobs"].apply(partialParams));
    }
    invokeListLabelingJobsForWorkteam(partialParams) {
        this.boot();
        return this.client.listLabelingJobsForWorkteam(this.ops["ListLabelingJobsForWorkteam"].apply(partialParams));
    }
    invokeListLineageGroups(partialParams) {
        this.boot();
        return this.client.listLineageGroups(this.ops["ListLineageGroups"].apply(partialParams));
    }
    invokeListModelBiasJobDefinitions(partialParams) {
        this.boot();
        return this.client.listModelBiasJobDefinitions(this.ops["ListModelBiasJobDefinitions"].apply(partialParams));
    }
    invokeListModelExplainabilityJobDefinitions(partialParams) {
        this.boot();
        return this.client.listModelExplainabilityJobDefinitions(this.ops["ListModelExplainabilityJobDefinitions"].apply(partialParams));
    }
    invokeListModelMetadata(partialParams) {
        this.boot();
        return this.client.listModelMetadata(this.ops["ListModelMetadata"].apply(partialParams));
    }
    invokeListModelPackageGroups(partialParams) {
        this.boot();
        return this.client.listModelPackageGroups(this.ops["ListModelPackageGroups"].apply(partialParams));
    }
    invokeListModelPackages(partialParams) {
        this.boot();
        return this.client.listModelPackages(this.ops["ListModelPackages"].apply(partialParams));
    }
    invokeListModelQualityJobDefinitions(partialParams) {
        this.boot();
        return this.client.listModelQualityJobDefinitions(this.ops["ListModelQualityJobDefinitions"].apply(partialParams));
    }
    invokeListModels(partialParams) {
        this.boot();
        return this.client.listModels(this.ops["ListModels"].apply(partialParams));
    }
    invokeListMonitoringExecutions(partialParams) {
        this.boot();
        return this.client.listMonitoringExecutions(this.ops["ListMonitoringExecutions"].apply(partialParams));
    }
    invokeListMonitoringSchedules(partialParams) {
        this.boot();
        return this.client.listMonitoringSchedules(this.ops["ListMonitoringSchedules"].apply(partialParams));
    }
    invokeListNotebookInstanceLifecycleConfigs(partialParams) {
        this.boot();
        return this.client.listNotebookInstanceLifecycleConfigs(this.ops["ListNotebookInstanceLifecycleConfigs"].apply(partialParams));
    }
    invokeListNotebookInstances(partialParams) {
        this.boot();
        return this.client.listNotebookInstances(this.ops["ListNotebookInstances"].apply(partialParams));
    }
    invokeListPipelineExecutionSteps(partialParams) {
        this.boot();
        return this.client.listPipelineExecutionSteps(this.ops["ListPipelineExecutionSteps"].apply(partialParams));
    }
    invokeListPipelineExecutions(partialParams) {
        this.boot();
        return this.client.listPipelineExecutions(this.ops["ListPipelineExecutions"].apply(partialParams));
    }
    invokeListPipelineParametersForExecution(partialParams) {
        this.boot();
        return this.client.listPipelineParametersForExecution(this.ops["ListPipelineParametersForExecution"].apply(partialParams));
    }
    invokeListPipelines(partialParams) {
        this.boot();
        return this.client.listPipelines(this.ops["ListPipelines"].apply(partialParams));
    }
    invokeListProcessingJobs(partialParams) {
        this.boot();
        return this.client.listProcessingJobs(this.ops["ListProcessingJobs"].apply(partialParams));
    }
    invokeListProjects(partialParams) {
        this.boot();
        return this.client.listProjects(this.ops["ListProjects"].apply(partialParams));
    }
    invokeListStudioLifecycleConfigs(partialParams) {
        this.boot();
        return this.client.listStudioLifecycleConfigs(this.ops["ListStudioLifecycleConfigs"].apply(partialParams));
    }
    invokeListSubscribedWorkteams(partialParams) {
        this.boot();
        return this.client.listSubscribedWorkteams(this.ops["ListSubscribedWorkteams"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListTrainingJobs(partialParams) {
        this.boot();
        return this.client.listTrainingJobs(this.ops["ListTrainingJobs"].apply(partialParams));
    }
    invokeListTrainingJobsForHyperParameterTuningJob(partialParams) {
        this.boot();
        return this.client.listTrainingJobsForHyperParameterTuningJob(this.ops["ListTrainingJobsForHyperParameterTuningJob"].apply(partialParams));
    }
    invokeListTransformJobs(partialParams) {
        this.boot();
        return this.client.listTransformJobs(this.ops["ListTransformJobs"].apply(partialParams));
    }
    invokeListTrialComponents(partialParams) {
        this.boot();
        return this.client.listTrialComponents(this.ops["ListTrialComponents"].apply(partialParams));
    }
    invokeListTrials(partialParams) {
        this.boot();
        return this.client.listTrials(this.ops["ListTrials"].apply(partialParams));
    }
    invokeListUserProfiles(partialParams) {
        this.boot();
        return this.client.listUserProfiles(this.ops["ListUserProfiles"].apply(partialParams));
    }
    invokeListWorkforces(partialParams) {
        this.boot();
        return this.client.listWorkforces(this.ops["ListWorkforces"].apply(partialParams));
    }
    invokeListWorkteams(partialParams) {
        this.boot();
        return this.client.listWorkteams(this.ops["ListWorkteams"].apply(partialParams));
    }
    invokePutModelPackageGroupPolicy(partialParams) {
        this.boot();
        return this.client.putModelPackageGroupPolicy(this.ops["PutModelPackageGroupPolicy"].apply(partialParams));
    }
    invokeQueryLineage(partialParams) {
        this.boot();
        return this.client.queryLineage(this.ops["QueryLineage"].apply(partialParams));
    }
    invokeRenderUiTemplate(partialParams) {
        this.boot();
        return this.client.renderUiTemplate(this.ops["RenderUiTemplate"].apply(partialParams));
    }
    invokeRetryPipelineExecution(partialParams) {
        this.boot();
        return this.client.retryPipelineExecution(this.ops["RetryPipelineExecution"].apply(partialParams));
    }
    invokeSearch(partialParams) {
        this.boot();
        return this.client.search(this.ops["Search"].apply(partialParams));
    }
    invokeSendPipelineExecutionStepFailure(partialParams) {
        this.boot();
        return this.client.sendPipelineExecutionStepFailure(this.ops["SendPipelineExecutionStepFailure"].apply(partialParams));
    }
    invokeSendPipelineExecutionStepSuccess(partialParams) {
        this.boot();
        return this.client.sendPipelineExecutionStepSuccess(this.ops["SendPipelineExecutionStepSuccess"].apply(partialParams));
    }
    invokeStartPipelineExecution(partialParams) {
        this.boot();
        return this.client.startPipelineExecution(this.ops["StartPipelineExecution"].apply(partialParams));
    }
    invokeStopPipelineExecution(partialParams) {
        this.boot();
        return this.client.stopPipelineExecution(this.ops["StopPipelineExecution"].apply(partialParams));
    }
    invokeUpdateAction(partialParams) {
        this.boot();
        return this.client.updateAction(this.ops["UpdateAction"].apply(partialParams));
    }
    invokeUpdateAppImageConfig(partialParams) {
        this.boot();
        return this.client.updateAppImageConfig(this.ops["UpdateAppImageConfig"].apply(partialParams));
    }
    invokeUpdateArtifact(partialParams) {
        this.boot();
        return this.client.updateArtifact(this.ops["UpdateArtifact"].apply(partialParams));
    }
    invokeUpdateCodeRepository(partialParams) {
        this.boot();
        return this.client.updateCodeRepository(this.ops["UpdateCodeRepository"].apply(partialParams));
    }
    invokeUpdateContext(partialParams) {
        this.boot();
        return this.client.updateContext(this.ops["UpdateContext"].apply(partialParams));
    }
    invokeUpdateDomain(partialParams) {
        this.boot();
        return this.client.updateDomain(this.ops["UpdateDomain"].apply(partialParams));
    }
    invokeUpdateEndpoint(partialParams) {
        this.boot();
        return this.client.updateEndpoint(this.ops["UpdateEndpoint"].apply(partialParams));
    }
    invokeUpdateEndpointWeightsAndCapacities(partialParams) {
        this.boot();
        return this.client.updateEndpointWeightsAndCapacities(this.ops["UpdateEndpointWeightsAndCapacities"].apply(partialParams));
    }
    invokeUpdateExperiment(partialParams) {
        this.boot();
        return this.client.updateExperiment(this.ops["UpdateExperiment"].apply(partialParams));
    }
    invokeUpdateImage(partialParams) {
        this.boot();
        return this.client.updateImage(this.ops["UpdateImage"].apply(partialParams));
    }
    invokeUpdateModelPackage(partialParams) {
        this.boot();
        return this.client.updateModelPackage(this.ops["UpdateModelPackage"].apply(partialParams));
    }
    invokeUpdateMonitoringSchedule(partialParams) {
        this.boot();
        return this.client.updateMonitoringSchedule(this.ops["UpdateMonitoringSchedule"].apply(partialParams));
    }
    invokeUpdateNotebookInstance(partialParams) {
        this.boot();
        return this.client.updateNotebookInstance(this.ops["UpdateNotebookInstance"].apply(partialParams));
    }
    invokeUpdateNotebookInstanceLifecycleConfig(partialParams) {
        this.boot();
        return this.client.updateNotebookInstanceLifecycleConfig(this.ops["UpdateNotebookInstanceLifecycleConfig"].apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        this.boot();
        return this.client.updatePipeline(this.ops["UpdatePipeline"].apply(partialParams));
    }
    invokeUpdatePipelineExecution(partialParams) {
        this.boot();
        return this.client.updatePipelineExecution(this.ops["UpdatePipelineExecution"].apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        this.boot();
        return this.client.updateProject(this.ops["UpdateProject"].apply(partialParams));
    }
    invokeUpdateTrainingJob(partialParams) {
        this.boot();
        return this.client.updateTrainingJob(this.ops["UpdateTrainingJob"].apply(partialParams));
    }
    invokeUpdateTrial(partialParams) {
        this.boot();
        return this.client.updateTrial(this.ops["UpdateTrial"].apply(partialParams));
    }
    invokeUpdateTrialComponent(partialParams) {
        this.boot();
        return this.client.updateTrialComponent(this.ops["UpdateTrialComponent"].apply(partialParams));
    }
    invokeUpdateUserProfile(partialParams) {
        this.boot();
        return this.client.updateUserProfile(this.ops["UpdateUserProfile"].apply(partialParams));
    }
    invokeUpdateWorkforce(partialParams) {
        this.boot();
        return this.client.updateWorkforce(this.ops["UpdateWorkforce"].apply(partialParams));
    }
    invokeUpdateWorkteam(partialParams) {
        this.boot();
        return this.client.updateWorkteam(this.ops["UpdateWorkteam"].apply(partialParams));
    }
}
exports.default = default_1;
