
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
    ListImageBuildVersionsRequest,
    ListImagePackagesRequest,
    ListImagePipelineImagesRequest,
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
    ListImageBuildVersionsResponse,
    ListImagePackagesResponse,
    ListImagePipelineImagesResponse,
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

export default class extends aws.imagebuilder.ImagePipeline {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.imagebuilder.ImagePipeline>) {
        super(...args)
        this.client = new awssdk.Imagebuilder()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCancelImageCreation(partialParams: ToOptional<{
      [K in keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest]: (CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest)[K]
    }>): Request<CancelImageCreationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelImageCreation(
          this.ops["CancelImageCreation"].applicator.apply(partialParams)
        );
    }

    invokeCreateComponent(partialParams: ToOptional<{
      [K in keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest]: (CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest)[K]
    }>): Request<CreateComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createComponent(
          this.ops["CreateComponent"].applicator.apply(partialParams)
        );
    }

    invokeCreateContainerRecipe(partialParams: ToOptional<{
      [K in keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest]: (CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest)[K]
    }>): Request<CreateContainerRecipeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainerRecipe(
          this.ops["CreateContainerRecipe"].applicator.apply(partialParams)
        );
    }

    invokeCreateDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest]: (CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest)[K]
    }>): Request<CreateDistributionConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistributionConfiguration(
          this.ops["CreateDistributionConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest]: (CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest)[K]
    }>): Request<CreateImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateImagePipeline(partialParams: ToOptional<{
      [K in keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest]: (CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest)[K]
    }>): Request<CreateImagePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImagePipeline(
          this.ops["CreateImagePipeline"].applicator.apply(partialParams)
        );
    }

    invokeCreateImageRecipe(partialParams: ToOptional<{
      [K in keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest]: (CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest)[K]
    }>): Request<CreateImageRecipeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImageRecipe(
          this.ops["CreateImageRecipe"].applicator.apply(partialParams)
        );
    }

    invokeCreateInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest]: (CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest)[K]
    }>): Request<CreateInfrastructureConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInfrastructureConfiguration(
          this.ops["CreateInfrastructureConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteComponent(partialParams: ToOptional<{
      [K in keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest]: (DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest)[K]
    }>): Request<DeleteComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteComponent(
          this.ops["DeleteComponent"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainerRecipe(partialParams: ToOptional<{
      [K in keyof DeleteContainerRecipeRequest & keyof Omit<DeleteContainerRecipeRequest, "containerRecipeArn"> & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest]: (DeleteContainerRecipeRequest & Omit<DeleteContainerRecipeRequest, "containerRecipeArn"> & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest)[K]
    }>): Request<DeleteContainerRecipeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerRecipe(
          this.ops["DeleteContainerRecipe"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest]: (DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest)[K]
    }>): Request<DeleteDistributionConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDistributionConfiguration(
          this.ops["DeleteDistributionConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest]: (DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest)[K]
    }>): Request<DeleteImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImagePipeline(partialParams: ToOptional<{
      [K in keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest]: (DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest)[K]
    }>): Request<DeleteImagePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImagePipeline(
          this.ops["DeleteImagePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImageRecipe(partialParams: ToOptional<{
      [K in keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest]: (DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest)[K]
    }>): Request<DeleteImageRecipeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImageRecipe(
          this.ops["DeleteImageRecipe"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest]: (DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest)[K]
    }>): Request<DeleteInfrastructureConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInfrastructureConfiguration(
          this.ops["DeleteInfrastructureConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetComponent(partialParams: ToOptional<{
      [K in keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest]: (GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest)[K]
    }>): Request<GetComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComponent(
          this.ops["GetComponent"].applicator.apply(partialParams)
        );
    }

    invokeGetComponentPolicy(partialParams: ToOptional<{
      [K in keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest]: (GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest)[K]
    }>): Request<GetComponentPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComponentPolicy(
          this.ops["GetComponentPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerRecipe(partialParams: ToOptional<{
      [K in keyof GetContainerRecipeRequest & keyof Omit<GetContainerRecipeRequest, "containerRecipeArn"> & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest]: (GetContainerRecipeRequest & Omit<GetContainerRecipeRequest, "containerRecipeArn"> & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest)[K]
    }>): Request<GetContainerRecipeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerRecipe(
          this.ops["GetContainerRecipe"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerRecipePolicy(partialParams: ToOptional<{
      [K in keyof GetContainerRecipePolicyRequest & keyof Omit<GetContainerRecipePolicyRequest, "containerRecipeArn"> & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest]: (GetContainerRecipePolicyRequest & Omit<GetContainerRecipePolicyRequest, "containerRecipeArn"> & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest)[K]
    }>): Request<GetContainerRecipePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerRecipePolicy(
          this.ops["GetContainerRecipePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof Omit<GetDistributionConfigurationRequest, "distributionConfigurationArn"> & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest]: (GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & Omit<GetDistributionConfigurationRequest, "distributionConfigurationArn"> & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest)[K]
    }>): Request<GetDistributionConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistributionConfiguration(
          this.ops["GetDistributionConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetImage(partialParams: ToOptional<{
      [K in keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest]: (GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest)[K]
    }>): Request<GetImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImage(
          this.ops["GetImage"].applicator.apply(partialParams)
        );
    }

    invokeGetImagePipeline(partialParams: ToOptional<{
      [K in keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest]: (GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest)[K]
    }>): Request<GetImagePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImagePipeline(
          this.ops["GetImagePipeline"].applicator.apply(partialParams)
        );
    }

    invokeGetImagePolicy(partialParams: ToOptional<{
      [K in keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest]: (GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest)[K]
    }>): Request<GetImagePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImagePolicy(
          this.ops["GetImagePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetImageRecipe(partialParams: ToOptional<{
      [K in keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest]: (GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest)[K]
    }>): Request<GetImageRecipeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImageRecipe(
          this.ops["GetImageRecipe"].applicator.apply(partialParams)
        );
    }

    invokeGetImageRecipePolicy(partialParams: ToOptional<{
      [K in keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest]: (GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest)[K]
    }>): Request<GetImageRecipePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImageRecipePolicy(
          this.ops["GetImageRecipePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest]: (GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest)[K]
    }>): Request<GetInfrastructureConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInfrastructureConfiguration(
          this.ops["GetInfrastructureConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeImportComponent(partialParams: ToOptional<{
      [K in keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest]: (ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest)[K]
    }>): Request<ImportComponentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importComponent(
          this.ops["ImportComponent"].applicator.apply(partialParams)
        );
    }

    invokeImportVmImage(partialParams: ToOptional<{
      [K in keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest]: (ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest)[K]
    }>): Request<ImportVmImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importVmImage(
          this.ops["ImportVmImage"].applicator.apply(partialParams)
        );
    }

    invokeListComponentBuildVersions(partialParams: ToOptional<{
      [K in keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest]: (ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest)[K]
    }>): Request<ListComponentBuildVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listComponentBuildVersions(
          this.ops["ListComponentBuildVersions"].applicator.apply(partialParams)
        );
    }

    invokeListImageBuildVersions(partialParams: ToOptional<{
      [K in keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest]: (ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest)[K]
    }>): Request<ListImageBuildVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImageBuildVersions(
          this.ops["ListImageBuildVersions"].applicator.apply(partialParams)
        );
    }

    invokeListImagePackages(partialParams: ToOptional<{
      [K in keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest]: (ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest)[K]
    }>): Request<ListImagePackagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImagePackages(
          this.ops["ListImagePackages"].applicator.apply(partialParams)
        );
    }

    invokeListImagePipelineImages(partialParams: ToOptional<{
      [K in keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest]: (ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest)[K]
    }>): Request<ListImagePipelineImagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImagePipelineImages(
          this.ops["ListImagePipelineImages"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutComponentPolicy(partialParams: ToOptional<{
      [K in keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest]: (PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest)[K]
    }>): Request<PutComponentPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putComponentPolicy(
          this.ops["PutComponentPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutContainerRecipePolicy(partialParams: ToOptional<{
      [K in keyof PutContainerRecipePolicyRequest & keyof Omit<PutContainerRecipePolicyRequest, "containerRecipeArn"> & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest]: (PutContainerRecipePolicyRequest & Omit<PutContainerRecipePolicyRequest, "containerRecipeArn"> & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest)[K]
    }>): Request<PutContainerRecipePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putContainerRecipePolicy(
          this.ops["PutContainerRecipePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutImagePolicy(partialParams: ToOptional<{
      [K in keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest]: (PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest)[K]
    }>): Request<PutImagePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImagePolicy(
          this.ops["PutImagePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutImageRecipePolicy(partialParams: ToOptional<{
      [K in keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof Omit<PutImageRecipePolicyRequest, "imageRecipeArn"> & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest]: (PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & Omit<PutImageRecipePolicyRequest, "imageRecipeArn"> & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest)[K]
    }>): Request<PutImageRecipePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImageRecipePolicy(
          this.ops["PutImageRecipePolicy"].applicator.apply(partialParams)
        );
    }

    invokeStartImagePipelineExecution(partialParams: ToOptional<{
      [K in keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest]: (StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest)[K]
    }>): Request<StartImagePipelineExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImagePipelineExecution(
          this.ops["StartImagePipelineExecution"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof Omit<UpdateDistributionConfigurationRequest, "distributionConfigurationArn"> & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest]: (UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & Omit<UpdateDistributionConfigurationRequest, "distributionConfigurationArn"> & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest)[K]
    }>): Request<UpdateDistributionConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDistributionConfiguration(
          this.ops["UpdateDistributionConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateImagePipeline(partialParams: ToOptional<{
      [K in keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof Omit<UpdateImagePipelineRequest, "infrastructureConfigurationArn"> & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest]: (UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & Omit<UpdateImagePipelineRequest, "infrastructureConfigurationArn"> & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest)[K]
    }>): Request<UpdateImagePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateImagePipeline(
          this.ops["UpdateImagePipeline"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof Omit<UpdateInfrastructureConfigurationRequest, "infrastructureConfigurationArn"> & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest]: (UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & Omit<UpdateInfrastructureConfigurationRequest, "infrastructureConfigurationArn"> & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest)[K]
    }>): Request<UpdateInfrastructureConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInfrastructureConfiguration(
          this.ops["UpdateInfrastructureConfiguration"].applicator.apply(partialParams)
        );
    }
}