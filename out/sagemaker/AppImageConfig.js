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
class default_1 extends aws.sagemaker.AppImageConfig {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SageMaker();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAddAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addAssociation(this.ops["AddAssociation"].applicator.apply(partialParams));
    }
    invokeAddTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTags(this.ops["AddTags"].applicator.apply(partialParams));
    }
    invokeAssociateTrialComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTrialComponent(this.ops["AssociateTrialComponent"].applicator.apply(partialParams));
    }
    invokeBatchDescribeModelPackage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDescribeModelPackage(this.ops["BatchDescribeModelPackage"].applicator.apply(partialParams));
    }
    invokeCreateAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAction(this.ops["CreateAction"].applicator.apply(partialParams));
    }
    invokeCreateAlgorithm(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlgorithm(this.ops["CreateAlgorithm"].applicator.apply(partialParams));
    }
    invokeCreateApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].applicator.apply(partialParams));
    }
    invokeCreateAppImageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAppImageConfig(this.ops["CreateAppImageConfig"].applicator.apply(partialParams));
    }
    invokeCreateArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createArtifact(this.ops["CreateArtifact"].applicator.apply(partialParams));
    }
    invokeCreateAutoMLJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAutoMLJob(this.ops["CreateAutoMLJob"].applicator.apply(partialParams));
    }
    invokeCreateCodeRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCodeRepository(this.ops["CreateCodeRepository"].applicator.apply(partialParams));
    }
    invokeCreateCompilationJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCompilationJob(this.ops["CreateCompilationJob"].applicator.apply(partialParams));
    }
    invokeCreateContext(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContext(this.ops["CreateContext"].applicator.apply(partialParams));
    }
    invokeCreateDataQualityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataQualityJobDefinition(this.ops["CreateDataQualityJobDefinition"].applicator.apply(partialParams));
    }
    invokeCreateDeviceFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeviceFleet(this.ops["CreateDeviceFleet"].applicator.apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].applicator.apply(partialParams));
    }
    invokeCreateEdgePackagingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEdgePackagingJob(this.ops["CreateEdgePackagingJob"].applicator.apply(partialParams));
    }
    invokeCreateEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpoint(this.ops["CreateEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateEndpointConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpointConfig(this.ops["CreateEndpointConfig"].applicator.apply(partialParams));
    }
    invokeCreateExperiment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createExperiment(this.ops["CreateExperiment"].applicator.apply(partialParams));
    }
    invokeCreateFeatureGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFeatureGroup(this.ops["CreateFeatureGroup"].applicator.apply(partialParams));
    }
    invokeCreateFlowDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFlowDefinition(this.ops["CreateFlowDefinition"].applicator.apply(partialParams));
    }
    invokeCreateHumanTaskUi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHumanTaskUi(this.ops["CreateHumanTaskUi"].applicator.apply(partialParams));
    }
    invokeCreateHyperParameterTuningJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHyperParameterTuningJob(this.ops["CreateHyperParameterTuningJob"].applicator.apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].applicator.apply(partialParams));
    }
    invokeCreateImageVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImageVersion(this.ops["CreateImageVersion"].applicator.apply(partialParams));
    }
    invokeCreateInferenceRecommendationsJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInferenceRecommendationsJob(this.ops["CreateInferenceRecommendationsJob"].applicator.apply(partialParams));
    }
    invokeCreateLabelingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLabelingJob(this.ops["CreateLabelingJob"].applicator.apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModel(this.ops["CreateModel"].applicator.apply(partialParams));
    }
    invokeCreateModelBiasJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelBiasJobDefinition(this.ops["CreateModelBiasJobDefinition"].applicator.apply(partialParams));
    }
    invokeCreateModelExplainabilityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelExplainabilityJobDefinition(this.ops["CreateModelExplainabilityJobDefinition"].applicator.apply(partialParams));
    }
    invokeCreateModelPackageGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelPackageGroup(this.ops["CreateModelPackageGroup"].applicator.apply(partialParams));
    }
    invokeCreateModelQualityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModelQualityJobDefinition(this.ops["CreateModelQualityJobDefinition"].applicator.apply(partialParams));
    }
    invokeCreateMonitoringSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMonitoringSchedule(this.ops["CreateMonitoringSchedule"].applicator.apply(partialParams));
    }
    invokeCreateNotebookInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNotebookInstance(this.ops["CreateNotebookInstance"].applicator.apply(partialParams));
    }
    invokeCreateNotebookInstanceLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNotebookInstanceLifecycleConfig(this.ops["CreateNotebookInstanceLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].applicator.apply(partialParams));
    }
    invokeCreatePresignedDomainUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPresignedDomainUrl(this.ops["CreatePresignedDomainUrl"].applicator.apply(partialParams));
    }
    invokeCreatePresignedNotebookInstanceUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPresignedNotebookInstanceUrl(this.ops["CreatePresignedNotebookInstanceUrl"].applicator.apply(partialParams));
    }
    invokeCreateProcessingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProcessingJob(this.ops["CreateProcessingJob"].applicator.apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProject(this.ops["CreateProject"].applicator.apply(partialParams));
    }
    invokeCreateStudioLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStudioLifecycleConfig(this.ops["CreateStudioLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeCreateTrainingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrainingJob(this.ops["CreateTrainingJob"].applicator.apply(partialParams));
    }
    invokeCreateTransformJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransformJob(this.ops["CreateTransformJob"].applicator.apply(partialParams));
    }
    invokeCreateTrial(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrial(this.ops["CreateTrial"].applicator.apply(partialParams));
    }
    invokeCreateTrialComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrialComponent(this.ops["CreateTrialComponent"].applicator.apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserProfile(this.ops["CreateUserProfile"].applicator.apply(partialParams));
    }
    invokeCreateWorkforce(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkforce(this.ops["CreateWorkforce"].applicator.apply(partialParams));
    }
    invokeCreateWorkteam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkteam(this.ops["CreateWorkteam"].applicator.apply(partialParams));
    }
    invokeDeleteAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAction(this.ops["DeleteAction"].applicator.apply(partialParams));
    }
    invokeDeleteAlgorithm(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlgorithm(this.ops["DeleteAlgorithm"].applicator.apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(this.ops["DeleteApp"].applicator.apply(partialParams));
    }
    invokeDeleteAppImageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAppImageConfig(this.ops["DeleteAppImageConfig"].applicator.apply(partialParams));
    }
    invokeDeleteAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssociation(this.ops["DeleteAssociation"].applicator.apply(partialParams));
    }
    invokeDeleteCodeRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCodeRepository(this.ops["DeleteCodeRepository"].applicator.apply(partialParams));
    }
    invokeDeleteContext(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContext(this.ops["DeleteContext"].applicator.apply(partialParams));
    }
    invokeDeleteDataQualityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataQualityJobDefinition(this.ops["DeleteDataQualityJobDefinition"].applicator.apply(partialParams));
    }
    invokeDeleteDeviceFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeviceFleet(this.ops["DeleteDeviceFleet"].applicator.apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(this.ops["DeleteDomain"].applicator.apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].applicator.apply(partialParams));
    }
    invokeDeleteEndpointConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpointConfig(this.ops["DeleteEndpointConfig"].applicator.apply(partialParams));
    }
    invokeDeleteExperiment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteExperiment(this.ops["DeleteExperiment"].applicator.apply(partialParams));
    }
    invokeDeleteFeatureGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFeatureGroup(this.ops["DeleteFeatureGroup"].applicator.apply(partialParams));
    }
    invokeDeleteFlowDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFlowDefinition(this.ops["DeleteFlowDefinition"].applicator.apply(partialParams));
    }
    invokeDeleteHumanTaskUi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHumanTaskUi(this.ops["DeleteHumanTaskUi"].applicator.apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].applicator.apply(partialParams));
    }
    invokeDeleteImageVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImageVersion(this.ops["DeleteImageVersion"].applicator.apply(partialParams));
    }
    invokeDeleteModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModel(this.ops["DeleteModel"].applicator.apply(partialParams));
    }
    invokeDeleteModelBiasJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelBiasJobDefinition(this.ops["DeleteModelBiasJobDefinition"].applicator.apply(partialParams));
    }
    invokeDeleteModelExplainabilityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelExplainabilityJobDefinition(this.ops["DeleteModelExplainabilityJobDefinition"].applicator.apply(partialParams));
    }
    invokeDeleteModelPackage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelPackage(this.ops["DeleteModelPackage"].applicator.apply(partialParams));
    }
    invokeDeleteModelPackageGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelPackageGroup(this.ops["DeleteModelPackageGroup"].applicator.apply(partialParams));
    }
    invokeDeleteModelPackageGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelPackageGroupPolicy(this.ops["DeleteModelPackageGroupPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteModelQualityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModelQualityJobDefinition(this.ops["DeleteModelQualityJobDefinition"].applicator.apply(partialParams));
    }
    invokeDeleteMonitoringSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMonitoringSchedule(this.ops["DeleteMonitoringSchedule"].applicator.apply(partialParams));
    }
    invokeDeleteNotebookInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNotebookInstance(this.ops["DeleteNotebookInstance"].applicator.apply(partialParams));
    }
    invokeDeleteNotebookInstanceLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNotebookInstanceLifecycleConfig(this.ops["DeleteNotebookInstanceLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(this.ops["DeletePipeline"].applicator.apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProject(this.ops["DeleteProject"].applicator.apply(partialParams));
    }
    invokeDeleteStudioLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStudioLifecycleConfig(this.ops["DeleteStudioLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].applicator.apply(partialParams));
    }
    invokeDeleteTrial(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrial(this.ops["DeleteTrial"].applicator.apply(partialParams));
    }
    invokeDeleteTrialComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrialComponent(this.ops["DeleteTrialComponent"].applicator.apply(partialParams));
    }
    invokeDeleteUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserProfile(this.ops["DeleteUserProfile"].applicator.apply(partialParams));
    }
    invokeDeleteWorkforce(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkforce(this.ops["DeleteWorkforce"].applicator.apply(partialParams));
    }
    invokeDeleteWorkteam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkteam(this.ops["DeleteWorkteam"].applicator.apply(partialParams));
    }
    invokeDeregisterDevices(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterDevices(this.ops["DeregisterDevices"].applicator.apply(partialParams));
    }
    invokeDescribeAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAction(this.ops["DescribeAction"].applicator.apply(partialParams));
    }
    invokeDescribeAlgorithm(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAlgorithm(this.ops["DescribeAlgorithm"].applicator.apply(partialParams));
    }
    invokeDescribeApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeApp(this.ops["DescribeApp"].applicator.apply(partialParams));
    }
    invokeDescribeAppImageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAppImageConfig(this.ops["DescribeAppImageConfig"].applicator.apply(partialParams));
    }
    invokeDescribeArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeArtifact(this.ops["DescribeArtifact"].applicator.apply(partialParams));
    }
    invokeDescribeAutoMLJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAutoMLJob(this.ops["DescribeAutoMLJob"].applicator.apply(partialParams));
    }
    invokeDescribeCodeRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCodeRepository(this.ops["DescribeCodeRepository"].applicator.apply(partialParams));
    }
    invokeDescribeCompilationJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCompilationJob(this.ops["DescribeCompilationJob"].applicator.apply(partialParams));
    }
    invokeDescribeContext(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContext(this.ops["DescribeContext"].applicator.apply(partialParams));
    }
    invokeDescribeDataQualityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataQualityJobDefinition(this.ops["DescribeDataQualityJobDefinition"].applicator.apply(partialParams));
    }
    invokeDescribeDevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDevice(this.ops["DescribeDevice"].applicator.apply(partialParams));
    }
    invokeDescribeDeviceFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDeviceFleet(this.ops["DescribeDeviceFleet"].applicator.apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].applicator.apply(partialParams));
    }
    invokeDescribeEdgePackagingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEdgePackagingJob(this.ops["DescribeEdgePackagingJob"].applicator.apply(partialParams));
    }
    invokeDescribeEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpoint(this.ops["DescribeEndpoint"].applicator.apply(partialParams));
    }
    invokeDescribeEndpointConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpointConfig(this.ops["DescribeEndpointConfig"].applicator.apply(partialParams));
    }
    invokeDescribeExperiment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExperiment(this.ops["DescribeExperiment"].applicator.apply(partialParams));
    }
    invokeDescribeFeatureGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFeatureGroup(this.ops["DescribeFeatureGroup"].applicator.apply(partialParams));
    }
    invokeDescribeFlowDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFlowDefinition(this.ops["DescribeFlowDefinition"].applicator.apply(partialParams));
    }
    invokeDescribeHumanTaskUi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHumanTaskUi(this.ops["DescribeHumanTaskUi"].applicator.apply(partialParams));
    }
    invokeDescribeHyperParameterTuningJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHyperParameterTuningJob(this.ops["DescribeHyperParameterTuningJob"].applicator.apply(partialParams));
    }
    invokeDescribeImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImage(this.ops["DescribeImage"].applicator.apply(partialParams));
    }
    invokeDescribeImageVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageVersion(this.ops["DescribeImageVersion"].applicator.apply(partialParams));
    }
    invokeDescribeInferenceRecommendationsJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInferenceRecommendationsJob(this.ops["DescribeInferenceRecommendationsJob"].applicator.apply(partialParams));
    }
    invokeDescribeLabelingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLabelingJob(this.ops["DescribeLabelingJob"].applicator.apply(partialParams));
    }
    invokeDescribeLineageGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLineageGroup(this.ops["DescribeLineageGroup"].applicator.apply(partialParams));
    }
    invokeDescribeModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModel(this.ops["DescribeModel"].applicator.apply(partialParams));
    }
    invokeDescribeModelBiasJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelBiasJobDefinition(this.ops["DescribeModelBiasJobDefinition"].applicator.apply(partialParams));
    }
    invokeDescribeModelExplainabilityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelExplainabilityJobDefinition(this.ops["DescribeModelExplainabilityJobDefinition"].applicator.apply(partialParams));
    }
    invokeDescribeModelPackage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelPackage(this.ops["DescribeModelPackage"].applicator.apply(partialParams));
    }
    invokeDescribeModelPackageGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelPackageGroup(this.ops["DescribeModelPackageGroup"].applicator.apply(partialParams));
    }
    invokeDescribeModelQualityJobDefinition(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeModelQualityJobDefinition(this.ops["DescribeModelQualityJobDefinition"].applicator.apply(partialParams));
    }
    invokeDescribeMonitoringSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMonitoringSchedule(this.ops["DescribeMonitoringSchedule"].applicator.apply(partialParams));
    }
    invokeDescribeNotebookInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNotebookInstance(this.ops["DescribeNotebookInstance"].applicator.apply(partialParams));
    }
    invokeDescribeNotebookInstanceLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNotebookInstanceLifecycleConfig(this.ops["DescribeNotebookInstanceLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeDescribePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipeline(this.ops["DescribePipeline"].applicator.apply(partialParams));
    }
    invokeDescribePipelineDefinitionForExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipelineDefinitionForExecution(this.ops["DescribePipelineDefinitionForExecution"].applicator.apply(partialParams));
    }
    invokeDescribePipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePipelineExecution(this.ops["DescribePipelineExecution"].applicator.apply(partialParams));
    }
    invokeDescribeProcessingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProcessingJob(this.ops["DescribeProcessingJob"].applicator.apply(partialParams));
    }
    invokeDescribeProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProject(this.ops["DescribeProject"].applicator.apply(partialParams));
    }
    invokeDescribeStudioLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStudioLifecycleConfig(this.ops["DescribeStudioLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeDescribeSubscribedWorkteam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSubscribedWorkteam(this.ops["DescribeSubscribedWorkteam"].applicator.apply(partialParams));
    }
    invokeDescribeTrainingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTrainingJob(this.ops["DescribeTrainingJob"].applicator.apply(partialParams));
    }
    invokeDescribeTransformJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTransformJob(this.ops["DescribeTransformJob"].applicator.apply(partialParams));
    }
    invokeDescribeTrial(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTrial(this.ops["DescribeTrial"].applicator.apply(partialParams));
    }
    invokeDescribeTrialComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTrialComponent(this.ops["DescribeTrialComponent"].applicator.apply(partialParams));
    }
    invokeDescribeUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUserProfile(this.ops["DescribeUserProfile"].applicator.apply(partialParams));
    }
    invokeDescribeWorkforce(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkforce(this.ops["DescribeWorkforce"].applicator.apply(partialParams));
    }
    invokeDescribeWorkteam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkteam(this.ops["DescribeWorkteam"].applicator.apply(partialParams));
    }
    invokeDisassociateTrialComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTrialComponent(this.ops["DisassociateTrialComponent"].applicator.apply(partialParams));
    }
    invokeGetDeviceFleetReport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeviceFleetReport(this.ops["GetDeviceFleetReport"].applicator.apply(partialParams));
    }
    invokeGetLineageGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLineageGroupPolicy(this.ops["GetLineageGroupPolicy"].applicator.apply(partialParams));
    }
    invokeGetModelPackageGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModelPackageGroupPolicy(this.ops["GetModelPackageGroupPolicy"].applicator.apply(partialParams));
    }
    invokeGetSearchSuggestions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSearchSuggestions(this.ops["GetSearchSuggestions"].applicator.apply(partialParams));
    }
    invokeListCandidatesForAutoMLJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCandidatesForAutoMLJob(this.ops["ListCandidatesForAutoMLJob"].applicator.apply(partialParams));
    }
    invokeListImageVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImageVersions(this.ops["ListImageVersions"].applicator.apply(partialParams));
    }
    invokeListLabelingJobsForWorkteam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLabelingJobsForWorkteam(this.ops["ListLabelingJobsForWorkteam"].applicator.apply(partialParams));
    }
    invokeListPipelineExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPipelineExecutions(this.ops["ListPipelineExecutions"].applicator.apply(partialParams));
    }
    invokeListPipelineParametersForExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPipelineParametersForExecution(this.ops["ListPipelineParametersForExecution"].applicator.apply(partialParams));
    }
    invokeListTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(this.ops["ListTags"].applicator.apply(partialParams));
    }
    invokeListTrainingJobsForHyperParameterTuningJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrainingJobsForHyperParameterTuningJob(this.ops["ListTrainingJobsForHyperParameterTuningJob"].applicator.apply(partialParams));
    }
    invokePutModelPackageGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putModelPackageGroupPolicy(this.ops["PutModelPackageGroupPolicy"].applicator.apply(partialParams));
    }
    invokeQueryLineage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.queryLineage(this.ops["QueryLineage"].applicator.apply(partialParams));
    }
    invokeRegisterDevices(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDevices(this.ops["RegisterDevices"].applicator.apply(partialParams));
    }
    invokeRenderUiTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.renderUiTemplate(this.ops["RenderUiTemplate"].applicator.apply(partialParams));
    }
    invokeRetryPipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retryPipelineExecution(this.ops["RetryPipelineExecution"].applicator.apply(partialParams));
    }
    invokeSearch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.search(this.ops["Search"].applicator.apply(partialParams));
    }
    invokeSendPipelineExecutionStepFailure(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendPipelineExecutionStepFailure(this.ops["SendPipelineExecutionStepFailure"].applicator.apply(partialParams));
    }
    invokeSendPipelineExecutionStepSuccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendPipelineExecutionStepSuccess(this.ops["SendPipelineExecutionStepSuccess"].applicator.apply(partialParams));
    }
    invokeStartMonitoringSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMonitoringSchedule(this.ops["StartMonitoringSchedule"].applicator.apply(partialParams));
    }
    invokeStartNotebookInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startNotebookInstance(this.ops["StartNotebookInstance"].applicator.apply(partialParams));
    }
    invokeStartPipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startPipelineExecution(this.ops["StartPipelineExecution"].applicator.apply(partialParams));
    }
    invokeStopAutoMLJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAutoMLJob(this.ops["StopAutoMLJob"].applicator.apply(partialParams));
    }
    invokeStopCompilationJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCompilationJob(this.ops["StopCompilationJob"].applicator.apply(partialParams));
    }
    invokeStopEdgePackagingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopEdgePackagingJob(this.ops["StopEdgePackagingJob"].applicator.apply(partialParams));
    }
    invokeStopHyperParameterTuningJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopHyperParameterTuningJob(this.ops["StopHyperParameterTuningJob"].applicator.apply(partialParams));
    }
    invokeStopInferenceRecommendationsJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInferenceRecommendationsJob(this.ops["StopInferenceRecommendationsJob"].applicator.apply(partialParams));
    }
    invokeStopLabelingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopLabelingJob(this.ops["StopLabelingJob"].applicator.apply(partialParams));
    }
    invokeStopMonitoringSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMonitoringSchedule(this.ops["StopMonitoringSchedule"].applicator.apply(partialParams));
    }
    invokeStopNotebookInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopNotebookInstance(this.ops["StopNotebookInstance"].applicator.apply(partialParams));
    }
    invokeStopPipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopPipelineExecution(this.ops["StopPipelineExecution"].applicator.apply(partialParams));
    }
    invokeStopProcessingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopProcessingJob(this.ops["StopProcessingJob"].applicator.apply(partialParams));
    }
    invokeStopTrainingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTrainingJob(this.ops["StopTrainingJob"].applicator.apply(partialParams));
    }
    invokeStopTransformJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopTransformJob(this.ops["StopTransformJob"].applicator.apply(partialParams));
    }
    invokeUpdateAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAction(this.ops["UpdateAction"].applicator.apply(partialParams));
    }
    invokeUpdateAppImageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAppImageConfig(this.ops["UpdateAppImageConfig"].applicator.apply(partialParams));
    }
    invokeUpdateArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateArtifact(this.ops["UpdateArtifact"].applicator.apply(partialParams));
    }
    invokeUpdateCodeRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCodeRepository(this.ops["UpdateCodeRepository"].applicator.apply(partialParams));
    }
    invokeUpdateContext(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContext(this.ops["UpdateContext"].applicator.apply(partialParams));
    }
    invokeUpdateDeviceFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeviceFleet(this.ops["UpdateDeviceFleet"].applicator.apply(partialParams));
    }
    invokeUpdateDevices(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevices(this.ops["UpdateDevices"].applicator.apply(partialParams));
    }
    invokeUpdateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomain(this.ops["UpdateDomain"].applicator.apply(partialParams));
    }
    invokeUpdateEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpoint(this.ops["UpdateEndpoint"].applicator.apply(partialParams));
    }
    invokeUpdateEndpointWeightsAndCapacities(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpointWeightsAndCapacities(this.ops["UpdateEndpointWeightsAndCapacities"].applicator.apply(partialParams));
    }
    invokeUpdateExperiment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateExperiment(this.ops["UpdateExperiment"].applicator.apply(partialParams));
    }
    invokeUpdateImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateImage(this.ops["UpdateImage"].applicator.apply(partialParams));
    }
    invokeUpdateModelPackage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateModelPackage(this.ops["UpdateModelPackage"].applicator.apply(partialParams));
    }
    invokeUpdateMonitoringSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMonitoringSchedule(this.ops["UpdateMonitoringSchedule"].applicator.apply(partialParams));
    }
    invokeUpdateNotebookInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNotebookInstance(this.ops["UpdateNotebookInstance"].applicator.apply(partialParams));
    }
    invokeUpdateNotebookInstanceLifecycleConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNotebookInstanceLifecycleConfig(this.ops["UpdateNotebookInstanceLifecycleConfig"].applicator.apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipeline(this.ops["UpdatePipeline"].applicator.apply(partialParams));
    }
    invokeUpdatePipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipelineExecution(this.ops["UpdatePipelineExecution"].applicator.apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProject(this.ops["UpdateProject"].applicator.apply(partialParams));
    }
    invokeUpdateTrainingJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrainingJob(this.ops["UpdateTrainingJob"].applicator.apply(partialParams));
    }
    invokeUpdateTrial(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrial(this.ops["UpdateTrial"].applicator.apply(partialParams));
    }
    invokeUpdateTrialComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrialComponent(this.ops["UpdateTrialComponent"].applicator.apply(partialParams));
    }
    invokeUpdateUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserProfile(this.ops["UpdateUserProfile"].applicator.apply(partialParams));
    }
    invokeUpdateWorkforce(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkforce(this.ops["UpdateWorkforce"].applicator.apply(partialParams));
    }
    invokeUpdateWorkteam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkteam(this.ops["UpdateWorkteam"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
