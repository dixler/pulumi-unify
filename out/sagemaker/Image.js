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
class default_1 extends aws.sagemaker.Image {
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
    invokeCreateAutoMLJob(partialParams) {
        this.boot();
        return this.client.createAutoMLJob(this.ops["CreateAutoMLJob"].apply(partialParams));
    }
    invokeCreateCompilationJob(partialParams) {
        this.boot();
        return this.client.createCompilationJob(this.ops["CreateCompilationJob"].apply(partialParams));
    }
    invokeCreateDataQualityJobDefinition(partialParams) {
        this.boot();
        return this.client.createDataQualityJobDefinition(this.ops["CreateDataQualityJobDefinition"].apply(partialParams));
    }
    invokeCreateFlowDefinition(partialParams) {
        this.boot();
        return this.client.createFlowDefinition(this.ops["CreateFlowDefinition"].apply(partialParams));
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
    invokeCreateModelBiasJobDefinition(partialParams) {
        this.boot();
        return this.client.createModelBiasJobDefinition(this.ops["CreateModelBiasJobDefinition"].apply(partialParams));
    }
    invokeCreateModelExplainabilityJobDefinition(partialParams) {
        this.boot();
        return this.client.createModelExplainabilityJobDefinition(this.ops["CreateModelExplainabilityJobDefinition"].apply(partialParams));
    }
    invokeCreateModelQualityJobDefinition(partialParams) {
        this.boot();
        return this.client.createModelQualityJobDefinition(this.ops["CreateModelQualityJobDefinition"].apply(partialParams));
    }
    invokeCreateNotebookInstance(partialParams) {
        this.boot();
        return this.client.createNotebookInstance(this.ops["CreateNotebookInstance"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeCreateProcessingJob(partialParams) {
        this.boot();
        return this.client.createProcessingJob(this.ops["CreateProcessingJob"].apply(partialParams));
    }
    invokeCreateTrainingJob(partialParams) {
        this.boot();
        return this.client.createTrainingJob(this.ops["CreateTrainingJob"].apply(partialParams));
    }
    invokeCreateWorkteam(partialParams) {
        this.boot();
        return this.client.createWorkteam(this.ops["CreateWorkteam"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImageVersion(partialParams) {
        this.boot();
        return this.client.deleteImageVersion(this.ops["DeleteImageVersion"].apply(partialParams));
    }
    invokeDescribeImage(partialParams) {
        this.boot();
        return this.client.describeImage(this.ops["DescribeImage"].apply(partialParams));
    }
    invokeDescribeImageVersion(partialParams) {
        this.boot();
        return this.client.describeImageVersion(this.ops["DescribeImageVersion"].apply(partialParams));
    }
    invokeListImageVersions(partialParams) {
        this.boot();
        return this.client.listImageVersions(this.ops["ListImageVersions"].apply(partialParams));
    }
    invokeRenderUiTemplate(partialParams) {
        this.boot();
        return this.client.renderUiTemplate(this.ops["RenderUiTemplate"].apply(partialParams));
    }
    invokeUpdateImage(partialParams) {
        this.boot();
        return this.client.updateImage(this.ops["UpdateImage"].apply(partialParams));
    }
}
exports.default = default_1;
