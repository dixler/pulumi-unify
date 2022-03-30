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
class default_1 extends aws.imagebuilder.ImagePipeline {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Imagebuilder();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/imagebuilder-2019-12-02.normal.json"), this.client);
    }
    invokeCancelImageCreation(partialParams) {
        return this.client.cancelImageCreation(this.ops["CancelImageCreation"].apply(partialParams));
    }
    invokeCreateComponent(partialParams) {
        return this.client.createComponent(this.ops["CreateComponent"].apply(partialParams));
    }
    invokeCreateContainerRecipe(partialParams) {
        return this.client.createContainerRecipe(this.ops["CreateContainerRecipe"].apply(partialParams));
    }
    invokeCreateDistributionConfiguration(partialParams) {
        return this.client.createDistributionConfiguration(this.ops["CreateDistributionConfiguration"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateImagePipeline(partialParams) {
        return this.client.createImagePipeline(this.ops["CreateImagePipeline"].apply(partialParams));
    }
    invokeCreateImageRecipe(partialParams) {
        return this.client.createImageRecipe(this.ops["CreateImageRecipe"].apply(partialParams));
    }
    invokeCreateInfrastructureConfiguration(partialParams) {
        return this.client.createInfrastructureConfiguration(this.ops["CreateInfrastructureConfiguration"].apply(partialParams));
    }
    invokeDeleteComponent(partialParams) {
        return this.client.deleteComponent(this.ops["DeleteComponent"].apply(partialParams));
    }
    invokeDeleteContainerRecipe(partialParams) {
        return this.client.deleteContainerRecipe(this.ops["DeleteContainerRecipe"].apply(partialParams));
    }
    invokeDeleteDistributionConfiguration(partialParams) {
        return this.client.deleteDistributionConfiguration(this.ops["DeleteDistributionConfiguration"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImagePipeline(partialParams) {
        return this.client.deleteImagePipeline(this.ops["DeleteImagePipeline"].apply(partialParams));
    }
    invokeDeleteImageRecipe(partialParams) {
        return this.client.deleteImageRecipe(this.ops["DeleteImageRecipe"].apply(partialParams));
    }
    invokeDeleteInfrastructureConfiguration(partialParams) {
        return this.client.deleteInfrastructureConfiguration(this.ops["DeleteInfrastructureConfiguration"].apply(partialParams));
    }
    invokeGetComponent(partialParams) {
        return this.client.getComponent(this.ops["GetComponent"].apply(partialParams));
    }
    invokeGetComponentPolicy(partialParams) {
        return this.client.getComponentPolicy(this.ops["GetComponentPolicy"].apply(partialParams));
    }
    invokeGetContainerRecipe(partialParams) {
        return this.client.getContainerRecipe(this.ops["GetContainerRecipe"].apply(partialParams));
    }
    invokeGetContainerRecipePolicy(partialParams) {
        return this.client.getContainerRecipePolicy(this.ops["GetContainerRecipePolicy"].apply(partialParams));
    }
    invokeGetDistributionConfiguration(partialParams) {
        return this.client.getDistributionConfiguration(this.ops["GetDistributionConfiguration"].apply(partialParams));
    }
    invokeGetImage(partialParams) {
        return this.client.getImage(this.ops["GetImage"].apply(partialParams));
    }
    invokeGetImagePipeline(partialParams) {
        return this.client.getImagePipeline(this.ops["GetImagePipeline"].apply(partialParams));
    }
    invokeGetImagePolicy(partialParams) {
        return this.client.getImagePolicy(this.ops["GetImagePolicy"].apply(partialParams));
    }
    invokeGetImageRecipe(partialParams) {
        return this.client.getImageRecipe(this.ops["GetImageRecipe"].apply(partialParams));
    }
    invokeGetImageRecipePolicy(partialParams) {
        return this.client.getImageRecipePolicy(this.ops["GetImageRecipePolicy"].apply(partialParams));
    }
    invokeGetInfrastructureConfiguration(partialParams) {
        return this.client.getInfrastructureConfiguration(this.ops["GetInfrastructureConfiguration"].apply(partialParams));
    }
    invokeImportComponent(partialParams) {
        return this.client.importComponent(this.ops["ImportComponent"].apply(partialParams));
    }
    invokeImportVmImage(partialParams) {
        return this.client.importVmImage(this.ops["ImportVmImage"].apply(partialParams));
    }
    invokeListComponentBuildVersions(partialParams) {
        return this.client.listComponentBuildVersions(this.ops["ListComponentBuildVersions"].apply(partialParams));
    }
    invokeListImageBuildVersions(partialParams) {
        return this.client.listImageBuildVersions(this.ops["ListImageBuildVersions"].apply(partialParams));
    }
    invokeListImagePackages(partialParams) {
        return this.client.listImagePackages(this.ops["ListImagePackages"].apply(partialParams));
    }
    invokeListImagePipelineImages(partialParams) {
        return this.client.listImagePipelineImages(this.ops["ListImagePipelineImages"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutComponentPolicy(partialParams) {
        return this.client.putComponentPolicy(this.ops["PutComponentPolicy"].apply(partialParams));
    }
    invokePutContainerRecipePolicy(partialParams) {
        return this.client.putContainerRecipePolicy(this.ops["PutContainerRecipePolicy"].apply(partialParams));
    }
    invokePutImagePolicy(partialParams) {
        return this.client.putImagePolicy(this.ops["PutImagePolicy"].apply(partialParams));
    }
    invokePutImageRecipePolicy(partialParams) {
        return this.client.putImageRecipePolicy(this.ops["PutImageRecipePolicy"].apply(partialParams));
    }
    invokeStartImagePipelineExecution(partialParams) {
        return this.client.startImagePipelineExecution(this.ops["StartImagePipelineExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDistributionConfiguration(partialParams) {
        return this.client.updateDistributionConfiguration(this.ops["UpdateDistributionConfiguration"].apply(partialParams));
    }
    invokeUpdateImagePipeline(partialParams) {
        return this.client.updateImagePipeline(this.ops["UpdateImagePipeline"].apply(partialParams));
    }
    invokeUpdateInfrastructureConfiguration(partialParams) {
        return this.client.updateInfrastructureConfiguration(this.ops["UpdateInfrastructureConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
