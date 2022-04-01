
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelImageCreationRequest,
    CreateComponentRequest,
    CreateContainerRecipeRequest,
    CreateDistributionConfigurationRequest,
    CreateImageRequest,
    CreateImagePipelineRequest,
    CreateImageRecipeRequest,
    CreateInfrastructureConfigurationRequest,
    DeleteComponentRequest,
    DeleteContainerRecipeRequest,
    DeleteDistributionConfigurationRequest,
    DeleteImageRequest,
    DeleteImagePipelineRequest,
    DeleteImageRecipeRequest,
    DeleteInfrastructureConfigurationRequest,
    GetComponentRequest,
    GetComponentPolicyRequest,
    GetContainerRecipeRequest,
    GetContainerRecipePolicyRequest,
    GetDistributionConfigurationRequest,
    GetImageRequest,
    GetImagePipelineRequest,
    GetImagePolicyRequest,
    GetImageRecipeRequest,
    GetImageRecipePolicyRequest,
    GetInfrastructureConfigurationRequest,
    ImportComponentRequest,
    ImportVmImageRequest,
    ListComponentBuildVersionsRequest,
    ListComponentsRequest,
    ListContainerRecipesRequest,
    ListDistributionConfigurationsRequest,
    ListImageBuildVersionsRequest,
    ListImagePackagesRequest,
    ListImagePipelineImagesRequest,
    ListImagePipelinesRequest,
    ListImageRecipesRequest,
    ListImagesRequest,
    ListInfrastructureConfigurationsRequest,
    ListTagsForResourceRequest,
    PutComponentPolicyRequest,
    PutContainerRecipePolicyRequest,
    PutImagePolicyRequest,
    PutImageRecipePolicyRequest,
    StartImagePipelineExecutionRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateDistributionConfigurationRequest,
    UpdateImagePipelineRequest,
    UpdateInfrastructureConfigurationRequest,
    CancelImageCreationResponse,
    CreateComponentResponse,
    CreateContainerRecipeResponse,
    CreateDistributionConfigurationResponse,
    CreateImageResponse,
    CreateImagePipelineResponse,
    CreateImageRecipeResponse,
    CreateInfrastructureConfigurationResponse,
    DeleteComponentResponse,
    DeleteContainerRecipeResponse,
    DeleteDistributionConfigurationResponse,
    DeleteImageResponse,
    DeleteImagePipelineResponse,
    DeleteImageRecipeResponse,
    DeleteInfrastructureConfigurationResponse,
    GetComponentResponse,
    GetComponentPolicyResponse,
    GetContainerRecipeResponse,
    GetContainerRecipePolicyResponse,
    GetDistributionConfigurationResponse,
    GetImageResponse,
    GetImagePipelineResponse,
    GetImagePolicyResponse,
    GetImageRecipeResponse,
    GetImageRecipePolicyResponse,
    GetInfrastructureConfigurationResponse,
    ImportComponentResponse,
    ImportVmImageResponse,
    ListComponentBuildVersionsResponse,
    ListComponentsResponse,
    ListContainerRecipesResponse,
    ListDistributionConfigurationsResponse,
    ListImageBuildVersionsResponse,
    ListImagePackagesResponse,
    ListImagePipelineImagesResponse,
    ListImagePipelinesResponse,
    ListImageRecipesResponse,
    ListImagesResponse,
    ListInfrastructureConfigurationsResponse,
    ListTagsForResourceResponse,
    PutComponentPolicyResponse,
    PutContainerRecipePolicyResponse,
    PutImagePolicyResponse,
    PutImageRecipePolicyResponse,
    StartImagePipelineExecutionResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateDistributionConfigurationResponse,
    UpdateImagePipelineResponse,
    UpdateInfrastructureConfigurationResponse
} from "aws-sdk/clients/imagebuilder";
const schema = require("../apis/imagebuilder-2019-12-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.imagebuilder.InfrastructureConfiguration {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.imagebuilder.InfrastructureConfiguration>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Imagebuilder()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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

    invokeCancelImageCreation(partialParams: ToOptional<{
      [K in keyof CancelImageCreationRequest]: (CancelImageCreationRequest)[K]
    }>): Request<CancelImageCreationResponse, AWSError> {
        this.boot();
        return this.client.cancelImageCreation(
          this.ops["CancelImageCreation"].apply(partialParams)
        );
    }

    invokeCreateComponent(partialParams: ToOptional<{
      [K in keyof CreateComponentRequest]: (CreateComponentRequest)[K]
    }>): Request<CreateComponentResponse, AWSError> {
        this.boot();
        return this.client.createComponent(
          this.ops["CreateComponent"].apply(partialParams)
        );
    }

    invokeCreateContainerRecipe(partialParams: ToOptional<{
      [K in keyof CreateContainerRecipeRequest]: (CreateContainerRecipeRequest)[K]
    }>): Request<CreateContainerRecipeResponse, AWSError> {
        this.boot();
        return this.client.createContainerRecipe(
          this.ops["CreateContainerRecipe"].apply(partialParams)
        );
    }

    invokeCreateDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof CreateDistributionConfigurationRequest]: (CreateDistributionConfigurationRequest)[K]
    }>): Request<CreateDistributionConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createDistributionConfiguration(
          this.ops["CreateDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest]: (CreateImageRequest)[K]
    }>): Request<CreateImageResponse, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateImagePipeline(partialParams: ToOptional<{
      [K in keyof CreateImagePipelineRequest]: (CreateImagePipelineRequest)[K]
    }>): Request<CreateImagePipelineResponse, AWSError> {
        this.boot();
        return this.client.createImagePipeline(
          this.ops["CreateImagePipeline"].apply(partialParams)
        );
    }

    invokeCreateImageRecipe(partialParams: ToOptional<{
      [K in keyof CreateImageRecipeRequest]: (CreateImageRecipeRequest)[K]
    }>): Request<CreateImageRecipeResponse, AWSError> {
        this.boot();
        return this.client.createImageRecipe(
          this.ops["CreateImageRecipe"].apply(partialParams)
        );
    }

    invokeCreateInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof CreateInfrastructureConfigurationRequest]: (CreateInfrastructureConfigurationRequest)[K]
    }>): Request<CreateInfrastructureConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createInfrastructureConfiguration(
          this.ops["CreateInfrastructureConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteComponent(partialParams: ToOptional<{
      [K in keyof DeleteComponentRequest]: (DeleteComponentRequest)[K]
    }>): Request<DeleteComponentResponse, AWSError> {
        this.boot();
        return this.client.deleteComponent(
          this.ops["DeleteComponent"].apply(partialParams)
        );
    }

    invokeDeleteContainerRecipe(partialParams: ToOptional<{
      [K in keyof DeleteContainerRecipeRequest]: (DeleteContainerRecipeRequest)[K]
    }>): Request<DeleteContainerRecipeResponse, AWSError> {
        this.boot();
        return this.client.deleteContainerRecipe(
          this.ops["DeleteContainerRecipe"].apply(partialParams)
        );
    }

    invokeDeleteDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteDistributionConfigurationRequest]: (DeleteDistributionConfigurationRequest)[K]
    }>): Request<DeleteDistributionConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteDistributionConfiguration(
          this.ops["DeleteDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest]: (DeleteImageRequest)[K]
    }>): Request<DeleteImageResponse, AWSError> {
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImagePipeline(partialParams: ToOptional<{
      [K in keyof DeleteImagePipelineRequest]: (DeleteImagePipelineRequest)[K]
    }>): Request<DeleteImagePipelineResponse, AWSError> {
        this.boot();
        return this.client.deleteImagePipeline(
          this.ops["DeleteImagePipeline"].apply(partialParams)
        );
    }

    invokeDeleteImageRecipe(partialParams: ToOptional<{
      [K in keyof DeleteImageRecipeRequest]: (DeleteImageRecipeRequest)[K]
    }>): Request<DeleteImageRecipeResponse, AWSError> {
        this.boot();
        return this.client.deleteImageRecipe(
          this.ops["DeleteImageRecipe"].apply(partialParams)
        );
    }

    invokeDeleteInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteInfrastructureConfigurationRequest]: (DeleteInfrastructureConfigurationRequest)[K]
    }>): Request<DeleteInfrastructureConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteInfrastructureConfiguration(
          this.ops["DeleteInfrastructureConfiguration"].apply(partialParams)
        );
    }

    invokeGetComponent(partialParams: ToOptional<{
      [K in keyof GetComponentRequest]: (GetComponentRequest)[K]
    }>): Request<GetComponentResponse, AWSError> {
        this.boot();
        return this.client.getComponent(
          this.ops["GetComponent"].apply(partialParams)
        );
    }

    invokeGetComponentPolicy(partialParams: ToOptional<{
      [K in keyof GetComponentPolicyRequest]: (GetComponentPolicyRequest)[K]
    }>): Request<GetComponentPolicyResponse, AWSError> {
        this.boot();
        return this.client.getComponentPolicy(
          this.ops["GetComponentPolicy"].apply(partialParams)
        );
    }

    invokeGetContainerRecipe(partialParams: ToOptional<{
      [K in keyof GetContainerRecipeRequest]: (GetContainerRecipeRequest)[K]
    }>): Request<GetContainerRecipeResponse, AWSError> {
        this.boot();
        return this.client.getContainerRecipe(
          this.ops["GetContainerRecipe"].apply(partialParams)
        );
    }

    invokeGetContainerRecipePolicy(partialParams: ToOptional<{
      [K in keyof GetContainerRecipePolicyRequest]: (GetContainerRecipePolicyRequest)[K]
    }>): Request<GetContainerRecipePolicyResponse, AWSError> {
        this.boot();
        return this.client.getContainerRecipePolicy(
          this.ops["GetContainerRecipePolicy"].apply(partialParams)
        );
    }

    invokeGetDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigurationRequest]: (GetDistributionConfigurationRequest)[K]
    }>): Request<GetDistributionConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getDistributionConfiguration(
          this.ops["GetDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeGetImage(partialParams: ToOptional<{
      [K in keyof GetImageRequest]: (GetImageRequest)[K]
    }>): Request<GetImageResponse, AWSError> {
        this.boot();
        return this.client.getImage(
          this.ops["GetImage"].apply(partialParams)
        );
    }

    invokeGetImagePipeline(partialParams: ToOptional<{
      [K in keyof GetImagePipelineRequest]: (GetImagePipelineRequest)[K]
    }>): Request<GetImagePipelineResponse, AWSError> {
        this.boot();
        return this.client.getImagePipeline(
          this.ops["GetImagePipeline"].apply(partialParams)
        );
    }

    invokeGetImagePolicy(partialParams: ToOptional<{
      [K in keyof GetImagePolicyRequest]: (GetImagePolicyRequest)[K]
    }>): Request<GetImagePolicyResponse, AWSError> {
        this.boot();
        return this.client.getImagePolicy(
          this.ops["GetImagePolicy"].apply(partialParams)
        );
    }

    invokeGetImageRecipe(partialParams: ToOptional<{
      [K in keyof GetImageRecipeRequest]: (GetImageRecipeRequest)[K]
    }>): Request<GetImageRecipeResponse, AWSError> {
        this.boot();
        return this.client.getImageRecipe(
          this.ops["GetImageRecipe"].apply(partialParams)
        );
    }

    invokeGetImageRecipePolicy(partialParams: ToOptional<{
      [K in keyof GetImageRecipePolicyRequest]: (GetImageRecipePolicyRequest)[K]
    }>): Request<GetImageRecipePolicyResponse, AWSError> {
        this.boot();
        return this.client.getImageRecipePolicy(
          this.ops["GetImageRecipePolicy"].apply(partialParams)
        );
    }

    invokeGetInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof GetInfrastructureConfigurationRequest]: (GetInfrastructureConfigurationRequest)[K]
    }>): Request<GetInfrastructureConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getInfrastructureConfiguration(
          this.ops["GetInfrastructureConfiguration"].apply(partialParams)
        );
    }

    invokeImportComponent(partialParams: ToOptional<{
      [K in keyof ImportComponentRequest]: (ImportComponentRequest)[K]
    }>): Request<ImportComponentResponse, AWSError> {
        this.boot();
        return this.client.importComponent(
          this.ops["ImportComponent"].apply(partialParams)
        );
    }

    invokeImportVmImage(partialParams: ToOptional<{
      [K in keyof ImportVmImageRequest]: (ImportVmImageRequest)[K]
    }>): Request<ImportVmImageResponse, AWSError> {
        this.boot();
        return this.client.importVmImage(
          this.ops["ImportVmImage"].apply(partialParams)
        );
    }

    invokeListComponentBuildVersions(partialParams: ToOptional<{
      [K in keyof ListComponentBuildVersionsRequest]: (ListComponentBuildVersionsRequest)[K]
    }>): Request<ListComponentBuildVersionsResponse, AWSError> {
        this.boot();
        return this.client.listComponentBuildVersions(
          this.ops["ListComponentBuildVersions"].apply(partialParams)
        );
    }

    invokeListComponents(partialParams: ToOptional<{
      [K in keyof ListComponentsRequest]: (ListComponentsRequest)[K]
    }>): Request<ListComponentsResponse, AWSError> {
        this.boot();
        return this.client.listComponents(
          this.ops["ListComponents"].apply(partialParams)
        );
    }

    invokeListContainerRecipes(partialParams: ToOptional<{
      [K in keyof ListContainerRecipesRequest]: (ListContainerRecipesRequest)[K]
    }>): Request<ListContainerRecipesResponse, AWSError> {
        this.boot();
        return this.client.listContainerRecipes(
          this.ops["ListContainerRecipes"].apply(partialParams)
        );
    }

    invokeListDistributionConfigurations(partialParams: ToOptional<{
      [K in keyof ListDistributionConfigurationsRequest]: (ListDistributionConfigurationsRequest)[K]
    }>): Request<ListDistributionConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listDistributionConfigurations(
          this.ops["ListDistributionConfigurations"].apply(partialParams)
        );
    }

    invokeListImageBuildVersions(partialParams: ToOptional<{
      [K in keyof ListImageBuildVersionsRequest]: (ListImageBuildVersionsRequest)[K]
    }>): Request<ListImageBuildVersionsResponse, AWSError> {
        this.boot();
        return this.client.listImageBuildVersions(
          this.ops["ListImageBuildVersions"].apply(partialParams)
        );
    }

    invokeListImagePackages(partialParams: ToOptional<{
      [K in keyof ListImagePackagesRequest]: (ListImagePackagesRequest)[K]
    }>): Request<ListImagePackagesResponse, AWSError> {
        this.boot();
        return this.client.listImagePackages(
          this.ops["ListImagePackages"].apply(partialParams)
        );
    }

    invokeListImagePipelineImages(partialParams: ToOptional<{
      [K in keyof ListImagePipelineImagesRequest]: (ListImagePipelineImagesRequest)[K]
    }>): Request<ListImagePipelineImagesResponse, AWSError> {
        this.boot();
        return this.client.listImagePipelineImages(
          this.ops["ListImagePipelineImages"].apply(partialParams)
        );
    }

    invokeListImagePipelines(partialParams: ToOptional<{
      [K in keyof ListImagePipelinesRequest]: (ListImagePipelinesRequest)[K]
    }>): Request<ListImagePipelinesResponse, AWSError> {
        this.boot();
        return this.client.listImagePipelines(
          this.ops["ListImagePipelines"].apply(partialParams)
        );
    }

    invokeListImageRecipes(partialParams: ToOptional<{
      [K in keyof ListImageRecipesRequest]: (ListImageRecipesRequest)[K]
    }>): Request<ListImageRecipesResponse, AWSError> {
        this.boot();
        return this.client.listImageRecipes(
          this.ops["ListImageRecipes"].apply(partialParams)
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

    invokeListInfrastructureConfigurations(partialParams: ToOptional<{
      [K in keyof ListInfrastructureConfigurationsRequest]: (ListInfrastructureConfigurationsRequest)[K]
    }>): Request<ListInfrastructureConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listInfrastructureConfigurations(
          this.ops["ListInfrastructureConfigurations"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutComponentPolicy(partialParams: ToOptional<{
      [K in keyof PutComponentPolicyRequest]: (PutComponentPolicyRequest)[K]
    }>): Request<PutComponentPolicyResponse, AWSError> {
        this.boot();
        return this.client.putComponentPolicy(
          this.ops["PutComponentPolicy"].apply(partialParams)
        );
    }

    invokePutContainerRecipePolicy(partialParams: ToOptional<{
      [K in keyof PutContainerRecipePolicyRequest]: (PutContainerRecipePolicyRequest)[K]
    }>): Request<PutContainerRecipePolicyResponse, AWSError> {
        this.boot();
        return this.client.putContainerRecipePolicy(
          this.ops["PutContainerRecipePolicy"].apply(partialParams)
        );
    }

    invokePutImagePolicy(partialParams: ToOptional<{
      [K in keyof PutImagePolicyRequest]: (PutImagePolicyRequest)[K]
    }>): Request<PutImagePolicyResponse, AWSError> {
        this.boot();
        return this.client.putImagePolicy(
          this.ops["PutImagePolicy"].apply(partialParams)
        );
    }

    invokePutImageRecipePolicy(partialParams: ToOptional<{
      [K in keyof PutImageRecipePolicyRequest]: (PutImageRecipePolicyRequest)[K]
    }>): Request<PutImageRecipePolicyResponse, AWSError> {
        this.boot();
        return this.client.putImageRecipePolicy(
          this.ops["PutImageRecipePolicy"].apply(partialParams)
        );
    }

    invokeStartImagePipelineExecution(partialParams: ToOptional<{
      [K in keyof StartImagePipelineExecutionRequest]: (StartImagePipelineExecutionRequest)[K]
    }>): Request<StartImagePipelineExecutionResponse, AWSError> {
        this.boot();
        return this.client.startImagePipelineExecution(
          this.ops["StartImagePipelineExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDistributionConfigurationRequest]: (UpdateDistributionConfigurationRequest)[K]
    }>): Request<UpdateDistributionConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateDistributionConfiguration(
          this.ops["UpdateDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateImagePipeline(partialParams: ToOptional<{
      [K in keyof UpdateImagePipelineRequest]: (UpdateImagePipelineRequest)[K]
    }>): Request<UpdateImagePipelineResponse, AWSError> {
        this.boot();
        return this.client.updateImagePipeline(
          this.ops["UpdateImagePipeline"].apply(partialParams)
        );
    }

    invokeUpdateInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateInfrastructureConfigurationRequest]: (UpdateInfrastructureConfigurationRequest)[K]
    }>): Request<UpdateInfrastructureConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateInfrastructureConfiguration(
          this.ops["UpdateInfrastructureConfiguration"].apply(partialParams)
        );
    }
}