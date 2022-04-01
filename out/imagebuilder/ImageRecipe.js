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
const schema = require("../apis/imagebuilder-2019-12-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.imagebuilder.ImageRecipe {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Imagebuilder();
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
    invokeCancelImageCreation(partialParams) {
        this.boot();
        return this.client.cancelImageCreation(this.ops["CancelImageCreation"].apply(partialParams));
    }
    invokeCreateComponent(partialParams) {
        this.boot();
        return this.client.createComponent(this.ops["CreateComponent"].apply(partialParams));
    }
    invokeCreateContainerRecipe(partialParams) {
        this.boot();
        return this.client.createContainerRecipe(this.ops["CreateContainerRecipe"].apply(partialParams));
    }
    invokeCreateDistributionConfiguration(partialParams) {
        this.boot();
        return this.client.createDistributionConfiguration(this.ops["CreateDistributionConfiguration"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateImagePipeline(partialParams) {
        this.boot();
        return this.client.createImagePipeline(this.ops["CreateImagePipeline"].apply(partialParams));
    }
    invokeCreateImageRecipe(partialParams) {
        this.boot();
        return this.client.createImageRecipe(this.ops["CreateImageRecipe"].apply(partialParams));
    }
    invokeCreateInfrastructureConfiguration(partialParams) {
        this.boot();
        return this.client.createInfrastructureConfiguration(this.ops["CreateInfrastructureConfiguration"].apply(partialParams));
    }
    invokeDeleteComponent(partialParams) {
        this.boot();
        return this.client.deleteComponent(this.ops["DeleteComponent"].apply(partialParams));
    }
    invokeDeleteContainerRecipe(partialParams) {
        this.boot();
        return this.client.deleteContainerRecipe(this.ops["DeleteContainerRecipe"].apply(partialParams));
    }
    invokeDeleteDistributionConfiguration(partialParams) {
        this.boot();
        return this.client.deleteDistributionConfiguration(this.ops["DeleteDistributionConfiguration"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImagePipeline(partialParams) {
        this.boot();
        return this.client.deleteImagePipeline(this.ops["DeleteImagePipeline"].apply(partialParams));
    }
    invokeDeleteImageRecipe(partialParams) {
        this.boot();
        return this.client.deleteImageRecipe(this.ops["DeleteImageRecipe"].apply(partialParams));
    }
    invokeDeleteInfrastructureConfiguration(partialParams) {
        this.boot();
        return this.client.deleteInfrastructureConfiguration(this.ops["DeleteInfrastructureConfiguration"].apply(partialParams));
    }
    invokeGetComponent(partialParams) {
        this.boot();
        return this.client.getComponent(this.ops["GetComponent"].apply(partialParams));
    }
    invokeGetComponentPolicy(partialParams) {
        this.boot();
        return this.client.getComponentPolicy(this.ops["GetComponentPolicy"].apply(partialParams));
    }
    invokeGetContainerRecipe(partialParams) {
        this.boot();
        return this.client.getContainerRecipe(this.ops["GetContainerRecipe"].apply(partialParams));
    }
    invokeGetContainerRecipePolicy(partialParams) {
        this.boot();
        return this.client.getContainerRecipePolicy(this.ops["GetContainerRecipePolicy"].apply(partialParams));
    }
    invokeGetDistributionConfiguration(partialParams) {
        this.boot();
        return this.client.getDistributionConfiguration(this.ops["GetDistributionConfiguration"].apply(partialParams));
    }
    invokeGetImage(partialParams) {
        this.boot();
        return this.client.getImage(this.ops["GetImage"].apply(partialParams));
    }
    invokeGetImagePipeline(partialParams) {
        this.boot();
        return this.client.getImagePipeline(this.ops["GetImagePipeline"].apply(partialParams));
    }
    invokeGetImagePolicy(partialParams) {
        this.boot();
        return this.client.getImagePolicy(this.ops["GetImagePolicy"].apply(partialParams));
    }
    invokeGetImageRecipe(partialParams) {
        this.boot();
        return this.client.getImageRecipe(this.ops["GetImageRecipe"].apply(partialParams));
    }
    invokeGetImageRecipePolicy(partialParams) {
        this.boot();
        return this.client.getImageRecipePolicy(this.ops["GetImageRecipePolicy"].apply(partialParams));
    }
    invokeGetInfrastructureConfiguration(partialParams) {
        this.boot();
        return this.client.getInfrastructureConfiguration(this.ops["GetInfrastructureConfiguration"].apply(partialParams));
    }
    invokeImportComponent(partialParams) {
        this.boot();
        return this.client.importComponent(this.ops["ImportComponent"].apply(partialParams));
    }
    invokeImportVmImage(partialParams) {
        this.boot();
        return this.client.importVmImage(this.ops["ImportVmImage"].apply(partialParams));
    }
    invokeListComponentBuildVersions(partialParams) {
        this.boot();
        return this.client.listComponentBuildVersions(this.ops["ListComponentBuildVersions"].apply(partialParams));
    }
    invokeListComponents(partialParams) {
        this.boot();
        return this.client.listComponents(this.ops["ListComponents"].apply(partialParams));
    }
    invokeListContainerRecipes(partialParams) {
        this.boot();
        return this.client.listContainerRecipes(this.ops["ListContainerRecipes"].apply(partialParams));
    }
    invokeListDistributionConfigurations(partialParams) {
        this.boot();
        return this.client.listDistributionConfigurations(this.ops["ListDistributionConfigurations"].apply(partialParams));
    }
    invokeListImageBuildVersions(partialParams) {
        this.boot();
        return this.client.listImageBuildVersions(this.ops["ListImageBuildVersions"].apply(partialParams));
    }
    invokeListImagePackages(partialParams) {
        this.boot();
        return this.client.listImagePackages(this.ops["ListImagePackages"].apply(partialParams));
    }
    invokeListImagePipelineImages(partialParams) {
        this.boot();
        return this.client.listImagePipelineImages(this.ops["ListImagePipelineImages"].apply(partialParams));
    }
    invokeListImagePipelines(partialParams) {
        this.boot();
        return this.client.listImagePipelines(this.ops["ListImagePipelines"].apply(partialParams));
    }
    invokeListImageRecipes(partialParams) {
        this.boot();
        return this.client.listImageRecipes(this.ops["ListImageRecipes"].apply(partialParams));
    }
    invokeListImages(partialParams) {
        this.boot();
        return this.client.listImages(this.ops["ListImages"].apply(partialParams));
    }
    invokeListInfrastructureConfigurations(partialParams) {
        this.boot();
        return this.client.listInfrastructureConfigurations(this.ops["ListInfrastructureConfigurations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutComponentPolicy(partialParams) {
        this.boot();
        return this.client.putComponentPolicy(this.ops["PutComponentPolicy"].apply(partialParams));
    }
    invokePutContainerRecipePolicy(partialParams) {
        this.boot();
        return this.client.putContainerRecipePolicy(this.ops["PutContainerRecipePolicy"].apply(partialParams));
    }
    invokePutImagePolicy(partialParams) {
        this.boot();
        return this.client.putImagePolicy(this.ops["PutImagePolicy"].apply(partialParams));
    }
    invokePutImageRecipePolicy(partialParams) {
        this.boot();
        return this.client.putImageRecipePolicy(this.ops["PutImageRecipePolicy"].apply(partialParams));
    }
    invokeStartImagePipelineExecution(partialParams) {
        this.boot();
        return this.client.startImagePipelineExecution(this.ops["StartImagePipelineExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDistributionConfiguration(partialParams) {
        this.boot();
        return this.client.updateDistributionConfiguration(this.ops["UpdateDistributionConfiguration"].apply(partialParams));
    }
    invokeUpdateImagePipeline(partialParams) {
        this.boot();
        return this.client.updateImagePipeline(this.ops["UpdateImagePipeline"].apply(partialParams));
    }
    invokeUpdateInfrastructureConfiguration(partialParams) {
        this.boot();
        return this.client.updateInfrastructureConfiguration(this.ops["UpdateInfrastructureConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
