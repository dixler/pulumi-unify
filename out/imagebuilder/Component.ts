
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.imagebuilder.Component {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.imagebuilder.Component>) {
        super(...args)
        this.client = new awssdk.Imagebuilder()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/imagebuilder-2019-12-02.normal.json"), this.client)
    }

    invokeCancelImageCreation(partialParams: ToOptional<{
      [K in keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest & keyof CancelImageCreationRequest]: (CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest & CancelImageCreationRequest)[K]
    }>): CancelImageCreationResponse {
        return this.client.cancelImageCreation(
            this.ops["CancelImageCreation"].apply(partialParams)
        );
    }

    invokeCreateComponent(partialParams: ToOptional<{
      [K in keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest & keyof CreateComponentRequest]: (CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest & CreateComponentRequest)[K]
    }>): CreateComponentResponse {
        return this.client.createComponent(
            this.ops["CreateComponent"].apply(partialParams)
        );
    }

    invokeCreateContainerRecipe(partialParams: ToOptional<{
      [K in keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest & keyof CreateContainerRecipeRequest]: (CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest & CreateContainerRecipeRequest)[K]
    }>): CreateContainerRecipeResponse {
        return this.client.createContainerRecipe(
            this.ops["CreateContainerRecipe"].apply(partialParams)
        );
    }

    invokeCreateDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest & keyof CreateDistributionConfigurationRequest]: (CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest & CreateDistributionConfigurationRequest)[K]
    }>): CreateDistributionConfigurationResponse {
        return this.client.createDistributionConfiguration(
            this.ops["CreateDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest]: (CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest)[K]
    }>): CreateImageResponse {
        return this.client.createImage(
            this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateImagePipeline(partialParams: ToOptional<{
      [K in keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest & keyof CreateImagePipelineRequest]: (CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest & CreateImagePipelineRequest)[K]
    }>): CreateImagePipelineResponse {
        return this.client.createImagePipeline(
            this.ops["CreateImagePipeline"].apply(partialParams)
        );
    }

    invokeCreateImageRecipe(partialParams: ToOptional<{
      [K in keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest & keyof CreateImageRecipeRequest]: (CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest & CreateImageRecipeRequest)[K]
    }>): CreateImageRecipeResponse {
        return this.client.createImageRecipe(
            this.ops["CreateImageRecipe"].apply(partialParams)
        );
    }

    invokeCreateInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest & keyof CreateInfrastructureConfigurationRequest]: (CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest & CreateInfrastructureConfigurationRequest)[K]
    }>): CreateInfrastructureConfigurationResponse {
        return this.client.createInfrastructureConfiguration(
            this.ops["CreateInfrastructureConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteComponent(partialParams: ToOptional<{
      [K in keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest & keyof DeleteComponentRequest]: (DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest & DeleteComponentRequest)[K]
    }>): DeleteComponentResponse {
        return this.client.deleteComponent(
            this.ops["DeleteComponent"].apply(partialParams)
        );
    }

    invokeDeleteContainerRecipe(partialParams: ToOptional<{
      [K in keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest & keyof DeleteContainerRecipeRequest]: (DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest & DeleteContainerRecipeRequest)[K]
    }>): DeleteContainerRecipeResponse {
        return this.client.deleteContainerRecipe(
            this.ops["DeleteContainerRecipe"].apply(partialParams)
        );
    }

    invokeDeleteDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest & keyof DeleteDistributionConfigurationRequest]: (DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest & DeleteDistributionConfigurationRequest)[K]
    }>): DeleteDistributionConfigurationResponse {
        return this.client.deleteDistributionConfiguration(
            this.ops["DeleteDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest & keyof DeleteImageRequest]: (DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest & DeleteImageRequest)[K]
    }>): DeleteImageResponse {
        return this.client.deleteImage(
            this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImagePipeline(partialParams: ToOptional<{
      [K in keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest & keyof DeleteImagePipelineRequest]: (DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest & DeleteImagePipelineRequest)[K]
    }>): DeleteImagePipelineResponse {
        return this.client.deleteImagePipeline(
            this.ops["DeleteImagePipeline"].apply(partialParams)
        );
    }

    invokeDeleteImageRecipe(partialParams: ToOptional<{
      [K in keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest & keyof DeleteImageRecipeRequest]: (DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest & DeleteImageRecipeRequest)[K]
    }>): DeleteImageRecipeResponse {
        return this.client.deleteImageRecipe(
            this.ops["DeleteImageRecipe"].apply(partialParams)
        );
    }

    invokeDeleteInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest & keyof DeleteInfrastructureConfigurationRequest]: (DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest & DeleteInfrastructureConfigurationRequest)[K]
    }>): DeleteInfrastructureConfigurationResponse {
        return this.client.deleteInfrastructureConfiguration(
            this.ops["DeleteInfrastructureConfiguration"].apply(partialParams)
        );
    }

    invokeGetComponent(partialParams: ToOptional<{
      [K in keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest & keyof GetComponentRequest]: (GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest & GetComponentRequest)[K]
    }>): GetComponentResponse {
        return this.client.getComponent(
            this.ops["GetComponent"].apply(partialParams)
        );
    }

    invokeGetComponentPolicy(partialParams: ToOptional<{
      [K in keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest & keyof GetComponentPolicyRequest]: (GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest & GetComponentPolicyRequest)[K]
    }>): GetComponentPolicyResponse {
        return this.client.getComponentPolicy(
            this.ops["GetComponentPolicy"].apply(partialParams)
        );
    }

    invokeGetContainerRecipe(partialParams: ToOptional<{
      [K in keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest & keyof GetContainerRecipeRequest]: (GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest & GetContainerRecipeRequest)[K]
    }>): GetContainerRecipeResponse {
        return this.client.getContainerRecipe(
            this.ops["GetContainerRecipe"].apply(partialParams)
        );
    }

    invokeGetContainerRecipePolicy(partialParams: ToOptional<{
      [K in keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest & keyof GetContainerRecipePolicyRequest]: (GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest & GetContainerRecipePolicyRequest)[K]
    }>): GetContainerRecipePolicyResponse {
        return this.client.getContainerRecipePolicy(
            this.ops["GetContainerRecipePolicy"].apply(partialParams)
        );
    }

    invokeGetDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest & keyof GetDistributionConfigurationRequest]: (GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest & GetDistributionConfigurationRequest)[K]
    }>): GetDistributionConfigurationResponse {
        return this.client.getDistributionConfiguration(
            this.ops["GetDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeGetImage(partialParams: ToOptional<{
      [K in keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest & keyof GetImageRequest]: (GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest & GetImageRequest)[K]
    }>): GetImageResponse {
        return this.client.getImage(
            this.ops["GetImage"].apply(partialParams)
        );
    }

    invokeGetImagePipeline(partialParams: ToOptional<{
      [K in keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest & keyof GetImagePipelineRequest]: (GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest & GetImagePipelineRequest)[K]
    }>): GetImagePipelineResponse {
        return this.client.getImagePipeline(
            this.ops["GetImagePipeline"].apply(partialParams)
        );
    }

    invokeGetImagePolicy(partialParams: ToOptional<{
      [K in keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest & keyof GetImagePolicyRequest]: (GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest & GetImagePolicyRequest)[K]
    }>): GetImagePolicyResponse {
        return this.client.getImagePolicy(
            this.ops["GetImagePolicy"].apply(partialParams)
        );
    }

    invokeGetImageRecipe(partialParams: ToOptional<{
      [K in keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest & keyof GetImageRecipeRequest]: (GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest & GetImageRecipeRequest)[K]
    }>): GetImageRecipeResponse {
        return this.client.getImageRecipe(
            this.ops["GetImageRecipe"].apply(partialParams)
        );
    }

    invokeGetImageRecipePolicy(partialParams: ToOptional<{
      [K in keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest & keyof GetImageRecipePolicyRequest]: (GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest & GetImageRecipePolicyRequest)[K]
    }>): GetImageRecipePolicyResponse {
        return this.client.getImageRecipePolicy(
            this.ops["GetImageRecipePolicy"].apply(partialParams)
        );
    }

    invokeGetInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest & keyof GetInfrastructureConfigurationRequest]: (GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest & GetInfrastructureConfigurationRequest)[K]
    }>): GetInfrastructureConfigurationResponse {
        return this.client.getInfrastructureConfiguration(
            this.ops["GetInfrastructureConfiguration"].apply(partialParams)
        );
    }

    invokeImportComponent(partialParams: ToOptional<{
      [K in keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof ImportComponentRequest & keyof Omit<ImportComponentRequest, "type"> & keyof ImportComponentRequest & keyof ImportComponentRequest]: (ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & ImportComponentRequest & Omit<ImportComponentRequest, "type"> & ImportComponentRequest & ImportComponentRequest)[K]
    }>): ImportComponentResponse {
        return this.client.importComponent(
            this.ops["ImportComponent"].apply(partialParams)
        );
    }

    invokeImportVmImage(partialParams: ToOptional<{
      [K in keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest & keyof ImportVmImageRequest]: (ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest & ImportVmImageRequest)[K]
    }>): ImportVmImageResponse {
        return this.client.importVmImage(
            this.ops["ImportVmImage"].apply(partialParams)
        );
    }

    invokeListComponentBuildVersions(partialParams: ToOptional<{
      [K in keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest & keyof ListComponentBuildVersionsRequest]: (ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest & ListComponentBuildVersionsRequest)[K]
    }>): ListComponentBuildVersionsResponse {
        return this.client.listComponentBuildVersions(
            this.ops["ListComponentBuildVersions"].apply(partialParams)
        );
    }

    invokeListImageBuildVersions(partialParams: ToOptional<{
      [K in keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest & keyof ListImageBuildVersionsRequest]: (ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest & ListImageBuildVersionsRequest)[K]
    }>): ListImageBuildVersionsResponse {
        return this.client.listImageBuildVersions(
            this.ops["ListImageBuildVersions"].apply(partialParams)
        );
    }

    invokeListImagePackages(partialParams: ToOptional<{
      [K in keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest & keyof ListImagePackagesRequest]: (ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest & ListImagePackagesRequest)[K]
    }>): ListImagePackagesResponse {
        return this.client.listImagePackages(
            this.ops["ListImagePackages"].apply(partialParams)
        );
    }

    invokeListImagePipelineImages(partialParams: ToOptional<{
      [K in keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest & keyof ListImagePipelineImagesRequest]: (ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest & ListImagePipelineImagesRequest)[K]
    }>): ListImagePipelineImagesResponse {
        return this.client.listImagePipelineImages(
            this.ops["ListImagePipelineImages"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutComponentPolicy(partialParams: ToOptional<{
      [K in keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest & keyof PutComponentPolicyRequest]: (PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest & PutComponentPolicyRequest)[K]
    }>): PutComponentPolicyResponse {
        return this.client.putComponentPolicy(
            this.ops["PutComponentPolicy"].apply(partialParams)
        );
    }

    invokePutContainerRecipePolicy(partialParams: ToOptional<{
      [K in keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest & keyof PutContainerRecipePolicyRequest]: (PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest & PutContainerRecipePolicyRequest)[K]
    }>): PutContainerRecipePolicyResponse {
        return this.client.putContainerRecipePolicy(
            this.ops["PutContainerRecipePolicy"].apply(partialParams)
        );
    }

    invokePutImagePolicy(partialParams: ToOptional<{
      [K in keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest & keyof PutImagePolicyRequest]: (PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest & PutImagePolicyRequest)[K]
    }>): PutImagePolicyResponse {
        return this.client.putImagePolicy(
            this.ops["PutImagePolicy"].apply(partialParams)
        );
    }

    invokePutImageRecipePolicy(partialParams: ToOptional<{
      [K in keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest & keyof PutImageRecipePolicyRequest]: (PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest & PutImageRecipePolicyRequest)[K]
    }>): PutImageRecipePolicyResponse {
        return this.client.putImageRecipePolicy(
            this.ops["PutImageRecipePolicy"].apply(partialParams)
        );
    }

    invokeStartImagePipelineExecution(partialParams: ToOptional<{
      [K in keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest & keyof StartImagePipelineExecutionRequest]: (StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest & StartImagePipelineExecutionRequest)[K]
    }>): StartImagePipelineExecutionResponse {
        return this.client.startImagePipelineExecution(
            this.ops["StartImagePipelineExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDistributionConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest & keyof UpdateDistributionConfigurationRequest]: (UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest & UpdateDistributionConfigurationRequest)[K]
    }>): UpdateDistributionConfigurationResponse {
        return this.client.updateDistributionConfiguration(
            this.ops["UpdateDistributionConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateImagePipeline(partialParams: ToOptional<{
      [K in keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest & keyof UpdateImagePipelineRequest]: (UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest & UpdateImagePipelineRequest)[K]
    }>): UpdateImagePipelineResponse {
        return this.client.updateImagePipeline(
            this.ops["UpdateImagePipeline"].apply(partialParams)
        );
    }

    invokeUpdateInfrastructureConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest & keyof UpdateInfrastructureConfigurationRequest]: (UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest & UpdateInfrastructureConfigurationRequest)[K]
    }>): UpdateInfrastructureConfigurationResponse {
        return this.client.updateInfrastructureConfiguration(
            this.ops["UpdateInfrastructureConfiguration"].apply(partialParams)
        );
    }
}