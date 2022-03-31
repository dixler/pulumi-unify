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
class default_1 extends aws.imagebuilder.InfrastructureConfiguration {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Imagebuilder();
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
    invokeCancelImageCreation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelImageCreation(this.ops["CancelImageCreation"].applicator.apply(partialParams));
    }
    invokeCreateComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createComponent(this.ops["CreateComponent"].applicator.apply(partialParams));
    }
    invokeCreateContainerRecipe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainerRecipe(this.ops["CreateContainerRecipe"].applicator.apply(partialParams));
    }
    invokeCreateDistributionConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistributionConfiguration(this.ops["CreateDistributionConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].applicator.apply(partialParams));
    }
    invokeCreateImagePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImagePipeline(this.ops["CreateImagePipeline"].applicator.apply(partialParams));
    }
    invokeCreateImageRecipe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImageRecipe(this.ops["CreateImageRecipe"].applicator.apply(partialParams));
    }
    invokeCreateInfrastructureConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInfrastructureConfiguration(this.ops["CreateInfrastructureConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteComponent(this.ops["DeleteComponent"].applicator.apply(partialParams));
    }
    invokeDeleteContainerRecipe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerRecipe(this.ops["DeleteContainerRecipe"].applicator.apply(partialParams));
    }
    invokeDeleteDistributionConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDistributionConfiguration(this.ops["DeleteDistributionConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].applicator.apply(partialParams));
    }
    invokeDeleteImagePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImagePipeline(this.ops["DeleteImagePipeline"].applicator.apply(partialParams));
    }
    invokeDeleteImageRecipe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImageRecipe(this.ops["DeleteImageRecipe"].applicator.apply(partialParams));
    }
    invokeDeleteInfrastructureConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInfrastructureConfiguration(this.ops["DeleteInfrastructureConfiguration"].applicator.apply(partialParams));
    }
    invokeGetComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComponent(this.ops["GetComponent"].applicator.apply(partialParams));
    }
    invokeGetComponentPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComponentPolicy(this.ops["GetComponentPolicy"].applicator.apply(partialParams));
    }
    invokeGetContainerRecipe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerRecipe(this.ops["GetContainerRecipe"].applicator.apply(partialParams));
    }
    invokeGetContainerRecipePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerRecipePolicy(this.ops["GetContainerRecipePolicy"].applicator.apply(partialParams));
    }
    invokeGetDistributionConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistributionConfiguration(this.ops["GetDistributionConfiguration"].applicator.apply(partialParams));
    }
    invokeGetImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImage(this.ops["GetImage"].applicator.apply(partialParams));
    }
    invokeGetImagePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImagePipeline(this.ops["GetImagePipeline"].applicator.apply(partialParams));
    }
    invokeGetImagePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImagePolicy(this.ops["GetImagePolicy"].applicator.apply(partialParams));
    }
    invokeGetImageRecipe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImageRecipe(this.ops["GetImageRecipe"].applicator.apply(partialParams));
    }
    invokeGetImageRecipePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImageRecipePolicy(this.ops["GetImageRecipePolicy"].applicator.apply(partialParams));
    }
    invokeGetInfrastructureConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInfrastructureConfiguration(this.ops["GetInfrastructureConfiguration"].applicator.apply(partialParams));
    }
    invokeImportComponent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importComponent(this.ops["ImportComponent"].applicator.apply(partialParams));
    }
    invokeImportVmImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importVmImage(this.ops["ImportVmImage"].applicator.apply(partialParams));
    }
    invokeListComponentBuildVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listComponentBuildVersions(this.ops["ListComponentBuildVersions"].applicator.apply(partialParams));
    }
    invokeListImageBuildVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImageBuildVersions(this.ops["ListImageBuildVersions"].applicator.apply(partialParams));
    }
    invokeListImagePackages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImagePackages(this.ops["ListImagePackages"].applicator.apply(partialParams));
    }
    invokeListImagePipelineImages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImagePipelineImages(this.ops["ListImagePipelineImages"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePutComponentPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putComponentPolicy(this.ops["PutComponentPolicy"].applicator.apply(partialParams));
    }
    invokePutContainerRecipePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putContainerRecipePolicy(this.ops["PutContainerRecipePolicy"].applicator.apply(partialParams));
    }
    invokePutImagePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImagePolicy(this.ops["PutImagePolicy"].applicator.apply(partialParams));
    }
    invokePutImageRecipePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImageRecipePolicy(this.ops["PutImageRecipePolicy"].applicator.apply(partialParams));
    }
    invokeStartImagePipelineExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImagePipelineExecution(this.ops["StartImagePipelineExecution"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateDistributionConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDistributionConfiguration(this.ops["UpdateDistributionConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateImagePipeline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateImagePipeline(this.ops["UpdateImagePipeline"].applicator.apply(partialParams));
    }
    invokeUpdateInfrastructureConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInfrastructureConfiguration(this.ops["UpdateInfrastructureConfiguration"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
