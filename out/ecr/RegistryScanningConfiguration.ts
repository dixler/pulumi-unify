
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchCheckLayerAvailabilityRequest,
    BatchDeleteImageRequest,
    BatchGetImageRequest,
    BatchGetRepositoryScanningConfigurationRequest,
    CompleteLayerUploadRequest,
    CreatePullThroughCacheRuleRequest,
    CreateRepositoryRequest,
    DeleteLifecyclePolicyRequest,
    DeletePullThroughCacheRuleRequest,
    DeleteRepositoryRequest,
    DeleteRepositoryPolicyRequest,
    DescribeImageReplicationStatusRequest,
    DescribeImageScanFindingsRequest,
    DescribeImagesRequest,
    GetDownloadUrlForLayerRequest,
    GetLifecyclePolicyRequest,
    GetLifecyclePolicyPreviewRequest,
    GetRepositoryPolicyRequest,
    InitiateLayerUploadRequest,
    ListImagesRequest,
    ListTagsForResourceRequest,
    PutImageRequest,
    PutImageScanningConfigurationRequest,
    PutImageTagMutabilityRequest,
    PutLifecyclePolicyRequest,
    PutRegistryPolicyRequest,
    PutReplicationConfigurationRequest,
    SetRepositoryPolicyRequest,
    StartImageScanRequest,
    StartLifecyclePolicyPreviewRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UploadLayerPartRequest,
    BatchCheckLayerAvailabilityResponse,
    BatchDeleteImageResponse,
    BatchGetImageResponse,
    BatchGetRepositoryScanningConfigurationResponse,
    CompleteLayerUploadResponse,
    CreatePullThroughCacheRuleResponse,
    CreateRepositoryResponse,
    DeleteLifecyclePolicyResponse,
    DeletePullThroughCacheRuleResponse,
    DeleteRepositoryResponse,
    DeleteRepositoryPolicyResponse,
    DescribeImageReplicationStatusResponse,
    DescribeImageScanFindingsResponse,
    DescribeImagesResponse,
    GetDownloadUrlForLayerResponse,
    GetLifecyclePolicyResponse,
    GetLifecyclePolicyPreviewResponse,
    GetRepositoryPolicyResponse,
    InitiateLayerUploadResponse,
    ListImagesResponse,
    ListTagsForResourceResponse,
    PutImageResponse,
    PutImageScanningConfigurationResponse,
    PutImageTagMutabilityResponse,
    PutLifecyclePolicyResponse,
    PutRegistryPolicyResponse,
    PutReplicationConfigurationResponse,
    SetRepositoryPolicyResponse,
    StartImageScanResponse,
    StartLifecyclePolicyPreviewResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UploadLayerPartResponse
} from "aws-sdk/clients/ecr";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ecr.RegistryScanningConfiguration {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ecr.RegistryScanningConfiguration>) {
        super(...args)
        this.client = new awssdk.ECR()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ecr-2015-09-21.normal.json"), this.client)
    }

    invokeBatchCheckLayerAvailability(partialParams: ToOptional<{
      [K in keyof BatchCheckLayerAvailabilityRequest & keyof BatchCheckLayerAvailabilityRequest]: (BatchCheckLayerAvailabilityRequest & BatchCheckLayerAvailabilityRequest)[K]
    }>): BatchCheckLayerAvailabilityResponse {
        return this.client.batchCheckLayerAvailability(
            this.ops["BatchCheckLayerAvailability"].apply(partialParams)
        );
    }

    invokeBatchDeleteImage(partialParams: ToOptional<{
      [K in keyof BatchDeleteImageRequest & keyof BatchDeleteImageRequest]: (BatchDeleteImageRequest & BatchDeleteImageRequest)[K]
    }>): BatchDeleteImageResponse {
        return this.client.batchDeleteImage(
            this.ops["BatchDeleteImage"].apply(partialParams)
        );
    }

    invokeBatchGetImage(partialParams: ToOptional<{
      [K in keyof BatchGetImageRequest & keyof BatchGetImageRequest]: (BatchGetImageRequest & BatchGetImageRequest)[K]
    }>): BatchGetImageResponse {
        return this.client.batchGetImage(
            this.ops["BatchGetImage"].apply(partialParams)
        );
    }

    invokeBatchGetRepositoryScanningConfiguration(partialParams: ToOptional<{
      [K in keyof BatchGetRepositoryScanningConfigurationRequest & keyof BatchGetRepositoryScanningConfigurationRequest]: (BatchGetRepositoryScanningConfigurationRequest & BatchGetRepositoryScanningConfigurationRequest)[K]
    }>): BatchGetRepositoryScanningConfigurationResponse {
        return this.client.batchGetRepositoryScanningConfiguration(
            this.ops["BatchGetRepositoryScanningConfiguration"].apply(partialParams)
        );
    }

    invokeCompleteLayerUpload(partialParams: ToOptional<{
      [K in keyof CompleteLayerUploadRequest & keyof CompleteLayerUploadRequest]: (CompleteLayerUploadRequest & CompleteLayerUploadRequest)[K]
    }>): CompleteLayerUploadResponse {
        return this.client.completeLayerUpload(
            this.ops["CompleteLayerUpload"].apply(partialParams)
        );
    }

    invokeCreatePullThroughCacheRule(partialParams: ToOptional<{
      [K in keyof CreatePullThroughCacheRuleRequest & keyof CreatePullThroughCacheRuleRequest]: (CreatePullThroughCacheRuleRequest & CreatePullThroughCacheRuleRequest)[K]
    }>): CreatePullThroughCacheRuleResponse {
        return this.client.createPullThroughCacheRule(
            this.ops["CreatePullThroughCacheRule"].apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryRequest & keyof CreateRepositoryRequest]: (CreateRepositoryRequest & CreateRepositoryRequest)[K]
    }>): CreateRepositoryResponse {
        return this.client.createRepository(
            this.ops["CreateRepository"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest]: (DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest)[K]
    }>): DeleteLifecyclePolicyResponse {
        return this.client.deleteLifecyclePolicy(
            this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeletePullThroughCacheRule(partialParams: ToOptional<{
      [K in keyof DeletePullThroughCacheRuleRequest & keyof DeletePullThroughCacheRuleRequest]: (DeletePullThroughCacheRuleRequest & DeletePullThroughCacheRuleRequest)[K]
    }>): DeletePullThroughCacheRuleResponse {
        return this.client.deletePullThroughCacheRule(
            this.ops["DeletePullThroughCacheRule"].apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest]: (DeleteRepositoryRequest & DeleteRepositoryRequest)[K]
    }>): DeleteRepositoryResponse {
        return this.client.deleteRepository(
            this.ops["DeleteRepository"].apply(partialParams)
        );
    }

    invokeDeleteRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryPolicyRequest & keyof DeleteRepositoryPolicyRequest]: (DeleteRepositoryPolicyRequest & DeleteRepositoryPolicyRequest)[K]
    }>): DeleteRepositoryPolicyResponse {
        return this.client.deleteRepositoryPolicy(
            this.ops["DeleteRepositoryPolicy"].apply(partialParams)
        );
    }

    invokeDescribeImageReplicationStatus(partialParams: ToOptional<{
      [K in keyof DescribeImageReplicationStatusRequest & keyof DescribeImageReplicationStatusRequest]: (DescribeImageReplicationStatusRequest & DescribeImageReplicationStatusRequest)[K]
    }>): DescribeImageReplicationStatusResponse {
        return this.client.describeImageReplicationStatus(
            this.ops["DescribeImageReplicationStatus"].apply(partialParams)
        );
    }

    invokeDescribeImageScanFindings(partialParams: ToOptional<{
      [K in keyof DescribeImageScanFindingsRequest & keyof DescribeImageScanFindingsRequest]: (DescribeImageScanFindingsRequest & DescribeImageScanFindingsRequest)[K]
    }>): DescribeImageScanFindingsResponse {
        return this.client.describeImageScanFindings(
            this.ops["DescribeImageScanFindings"].apply(partialParams)
        );
    }

    invokeDescribeImages(partialParams: ToOptional<{
      [K in keyof DescribeImagesRequest & keyof DescribeImagesRequest]: (DescribeImagesRequest & DescribeImagesRequest)[K]
    }>): DescribeImagesResponse {
        return this.client.describeImages(
            this.ops["DescribeImages"].apply(partialParams)
        );
    }

    invokeGetDownloadUrlForLayer(partialParams: ToOptional<{
      [K in keyof GetDownloadUrlForLayerRequest & keyof GetDownloadUrlForLayerRequest]: (GetDownloadUrlForLayerRequest & GetDownloadUrlForLayerRequest)[K]
    }>): GetDownloadUrlForLayerResponse {
        return this.client.getDownloadUrlForLayer(
            this.ops["GetDownloadUrlForLayer"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest]: (GetLifecyclePolicyRequest & GetLifecyclePolicyRequest)[K]
    }>): GetLifecyclePolicyResponse {
        return this.client.getLifecyclePolicy(
            this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicyPreview(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyPreviewRequest & keyof GetLifecyclePolicyPreviewRequest]: (GetLifecyclePolicyPreviewRequest & GetLifecyclePolicyPreviewRequest)[K]
    }>): GetLifecyclePolicyPreviewResponse {
        return this.client.getLifecyclePolicyPreview(
            this.ops["GetLifecyclePolicyPreview"].apply(partialParams)
        );
    }

    invokeGetRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof GetRepositoryPolicyRequest & keyof GetRepositoryPolicyRequest]: (GetRepositoryPolicyRequest & GetRepositoryPolicyRequest)[K]
    }>): GetRepositoryPolicyResponse {
        return this.client.getRepositoryPolicy(
            this.ops["GetRepositoryPolicy"].apply(partialParams)
        );
    }

    invokeInitiateLayerUpload(partialParams: ToOptional<{
      [K in keyof InitiateLayerUploadRequest & keyof InitiateLayerUploadRequest]: (InitiateLayerUploadRequest & InitiateLayerUploadRequest)[K]
    }>): InitiateLayerUploadResponse {
        return this.client.initiateLayerUpload(
            this.ops["InitiateLayerUpload"].apply(partialParams)
        );
    }

    invokeListImages(partialParams: ToOptional<{
      [K in keyof ListImagesRequest & keyof ListImagesRequest]: (ListImagesRequest & ListImagesRequest)[K]
    }>): ListImagesResponse {
        return this.client.listImages(
            this.ops["ListImages"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutImage(partialParams: ToOptional<{
      [K in keyof PutImageRequest & keyof PutImageRequest]: (PutImageRequest & PutImageRequest)[K]
    }>): PutImageResponse {
        return this.client.putImage(
            this.ops["PutImage"].apply(partialParams)
        );
    }

    invokePutImageScanningConfiguration(partialParams: ToOptional<{
      [K in keyof PutImageScanningConfigurationRequest & keyof PutImageScanningConfigurationRequest]: (PutImageScanningConfigurationRequest & PutImageScanningConfigurationRequest)[K]
    }>): PutImageScanningConfigurationResponse {
        return this.client.putImageScanningConfiguration(
            this.ops["PutImageScanningConfiguration"].apply(partialParams)
        );
    }

    invokePutImageTagMutability(partialParams: ToOptional<{
      [K in keyof PutImageTagMutabilityRequest & keyof PutImageTagMutabilityRequest]: (PutImageTagMutabilityRequest & PutImageTagMutabilityRequest)[K]
    }>): PutImageTagMutabilityResponse {
        return this.client.putImageTagMutability(
            this.ops["PutImageTagMutability"].apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof PutLifecyclePolicyRequest & keyof PutLifecyclePolicyRequest]: (PutLifecyclePolicyRequest & PutLifecyclePolicyRequest)[K]
    }>): PutLifecyclePolicyResponse {
        return this.client.putLifecyclePolicy(
            this.ops["PutLifecyclePolicy"].apply(partialParams)
        );
    }

    invokePutRegistryPolicy(partialParams: ToOptional<{
      [K in keyof PutRegistryPolicyRequest & keyof PutRegistryPolicyRequest]: (PutRegistryPolicyRequest & PutRegistryPolicyRequest)[K]
    }>): PutRegistryPolicyResponse {
        return this.client.putRegistryPolicy(
            this.ops["PutRegistryPolicy"].apply(partialParams)
        );
    }

    invokePutReplicationConfiguration(partialParams: ToOptional<{
      [K in keyof PutReplicationConfigurationRequest & keyof PutReplicationConfigurationRequest]: (PutReplicationConfigurationRequest & PutReplicationConfigurationRequest)[K]
    }>): PutReplicationConfigurationResponse {
        return this.client.putReplicationConfiguration(
            this.ops["PutReplicationConfiguration"].apply(partialParams)
        );
    }

    invokeSetRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof SetRepositoryPolicyRequest & keyof SetRepositoryPolicyRequest]: (SetRepositoryPolicyRequest & SetRepositoryPolicyRequest)[K]
    }>): SetRepositoryPolicyResponse {
        return this.client.setRepositoryPolicy(
            this.ops["SetRepositoryPolicy"].apply(partialParams)
        );
    }

    invokeStartImageScan(partialParams: ToOptional<{
      [K in keyof StartImageScanRequest & keyof StartImageScanRequest]: (StartImageScanRequest & StartImageScanRequest)[K]
    }>): StartImageScanResponse {
        return this.client.startImageScan(
            this.ops["StartImageScan"].apply(partialParams)
        );
    }

    invokeStartLifecyclePolicyPreview(partialParams: ToOptional<{
      [K in keyof StartLifecyclePolicyPreviewRequest & keyof StartLifecyclePolicyPreviewRequest]: (StartLifecyclePolicyPreviewRequest & StartLifecyclePolicyPreviewRequest)[K]
    }>): StartLifecyclePolicyPreviewResponse {
        return this.client.startLifecyclePolicyPreview(
            this.ops["StartLifecyclePolicyPreview"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUploadLayerPart(partialParams: ToOptional<{
      [K in keyof UploadLayerPartRequest & keyof UploadLayerPartRequest]: (UploadLayerPartRequest & UploadLayerPartRequest)[K]
    }>): UploadLayerPartResponse {
        return this.client.uploadLayerPart(
            this.ops["UploadLayerPart"].apply(partialParams)
        );
    }
}