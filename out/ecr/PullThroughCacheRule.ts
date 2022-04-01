
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    DeleteRegistryPolicyRequest,
    DeleteRepositoryRequest,
    DeleteRepositoryPolicyRequest,
    DescribeImageReplicationStatusRequest,
    DescribeImageScanFindingsRequest,
    DescribeImagesRequest,
    DescribePullThroughCacheRulesRequest,
    DescribeRegistryRequest,
    DescribeRepositoriesRequest,
    GetAuthorizationTokenRequest,
    GetDownloadUrlForLayerRequest,
    GetLifecyclePolicyRequest,
    GetLifecyclePolicyPreviewRequest,
    GetRegistryPolicyRequest,
    GetRegistryScanningConfigurationRequest,
    GetRepositoryPolicyRequest,
    InitiateLayerUploadRequest,
    ListImagesRequest,
    ListTagsForResourceRequest,
    PutImageRequest,
    PutImageScanningConfigurationRequest,
    PutImageTagMutabilityRequest,
    PutLifecyclePolicyRequest,
    PutRegistryPolicyRequest,
    PutRegistryScanningConfigurationRequest,
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
    DeleteRegistryPolicyResponse,
    DeleteRepositoryResponse,
    DeleteRepositoryPolicyResponse,
    DescribeImageReplicationStatusResponse,
    DescribeImageScanFindingsResponse,
    DescribeImagesResponse,
    DescribePullThroughCacheRulesResponse,
    DescribeRegistryResponse,
    DescribeRepositoriesResponse,
    GetAuthorizationTokenResponse,
    GetDownloadUrlForLayerResponse,
    GetLifecyclePolicyResponse,
    GetLifecyclePolicyPreviewResponse,
    GetRegistryPolicyResponse,
    GetRegistryScanningConfigurationResponse,
    GetRepositoryPolicyResponse,
    InitiateLayerUploadResponse,
    ListImagesResponse,
    ListTagsForResourceResponse,
    PutImageResponse,
    PutImageScanningConfigurationResponse,
    PutImageTagMutabilityResponse,
    PutLifecyclePolicyResponse,
    PutRegistryPolicyResponse,
    PutRegistryScanningConfigurationResponse,
    PutReplicationConfigurationResponse,
    SetRepositoryPolicyResponse,
    StartImageScanResponse,
    StartLifecyclePolicyPreviewResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UploadLayerPartResponse
} from "aws-sdk/clients/ecr";
const schema = require("../apis/ecr-2015-09-21.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ecr.PullThroughCacheRule {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ecr.PullThroughCacheRule>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ECR()
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

    invokeBatchCheckLayerAvailability(partialParams: ToOptional<{
      [K in keyof BatchCheckLayerAvailabilityRequest]: (BatchCheckLayerAvailabilityRequest)[K]
    }>): Request<BatchCheckLayerAvailabilityResponse, AWSError> {
        this.boot();
        return this.client.batchCheckLayerAvailability(
          this.ops["BatchCheckLayerAvailability"].apply(partialParams)
        );
    }

    invokeBatchDeleteImage(partialParams: ToOptional<{
      [K in keyof BatchDeleteImageRequest]: (BatchDeleteImageRequest)[K]
    }>): Request<BatchDeleteImageResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteImage(
          this.ops["BatchDeleteImage"].apply(partialParams)
        );
    }

    invokeBatchGetImage(partialParams: ToOptional<{
      [K in keyof BatchGetImageRequest]: (BatchGetImageRequest)[K]
    }>): Request<BatchGetImageResponse, AWSError> {
        this.boot();
        return this.client.batchGetImage(
          this.ops["BatchGetImage"].apply(partialParams)
        );
    }

    invokeBatchGetRepositoryScanningConfiguration(partialParams: ToOptional<{
      [K in keyof BatchGetRepositoryScanningConfigurationRequest]: (BatchGetRepositoryScanningConfigurationRequest)[K]
    }>): Request<BatchGetRepositoryScanningConfigurationResponse, AWSError> {
        this.boot();
        return this.client.batchGetRepositoryScanningConfiguration(
          this.ops["BatchGetRepositoryScanningConfiguration"].apply(partialParams)
        );
    }

    invokeCompleteLayerUpload(partialParams: ToOptional<{
      [K in keyof CompleteLayerUploadRequest]: (CompleteLayerUploadRequest)[K]
    }>): Request<CompleteLayerUploadResponse, AWSError> {
        this.boot();
        return this.client.completeLayerUpload(
          this.ops["CompleteLayerUpload"].apply(partialParams)
        );
    }

    invokeCreatePullThroughCacheRule(partialParams: ToOptional<{
      [K in keyof CreatePullThroughCacheRuleRequest]: (CreatePullThroughCacheRuleRequest)[K]
    }>): Request<CreatePullThroughCacheRuleResponse, AWSError> {
        this.boot();
        return this.client.createPullThroughCacheRule(
          this.ops["CreatePullThroughCacheRule"].apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryRequest]: (CreateRepositoryRequest)[K]
    }>): Request<CreateRepositoryResponse, AWSError> {
        this.boot();
        return this.client.createRepository(
          this.ops["CreateRepository"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyRequest]: (DeleteLifecyclePolicyRequest)[K]
    }>): Request<DeleteLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeletePullThroughCacheRule(partialParams: ToOptional<{
      [K in keyof DeletePullThroughCacheRuleRequest]: (DeletePullThroughCacheRuleRequest)[K]
    }>): Request<DeletePullThroughCacheRuleResponse, AWSError> {
        this.boot();
        return this.client.deletePullThroughCacheRule(
          this.ops["DeletePullThroughCacheRule"].apply(partialParams)
        );
    }

    invokeDeleteRegistryPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRegistryPolicyRequest]: (DeleteRegistryPolicyRequest)[K]
    }>): Request<DeleteRegistryPolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteRegistryPolicy(
          this.ops["DeleteRegistryPolicy"].apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryRequest]: (DeleteRepositoryRequest)[K]
    }>): Request<DeleteRepositoryResponse, AWSError> {
        this.boot();
        return this.client.deleteRepository(
          this.ops["DeleteRepository"].apply(partialParams)
        );
    }

    invokeDeleteRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryPolicyRequest]: (DeleteRepositoryPolicyRequest)[K]
    }>): Request<DeleteRepositoryPolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteRepositoryPolicy(
          this.ops["DeleteRepositoryPolicy"].apply(partialParams)
        );
    }

    invokeDescribeImageReplicationStatus(partialParams: ToOptional<{
      [K in keyof DescribeImageReplicationStatusRequest]: (DescribeImageReplicationStatusRequest)[K]
    }>): Request<DescribeImageReplicationStatusResponse, AWSError> {
        this.boot();
        return this.client.describeImageReplicationStatus(
          this.ops["DescribeImageReplicationStatus"].apply(partialParams)
        );
    }

    invokeDescribeImageScanFindings(partialParams: ToOptional<{
      [K in keyof DescribeImageScanFindingsRequest]: (DescribeImageScanFindingsRequest)[K]
    }>): Request<DescribeImageScanFindingsResponse, AWSError> {
        this.boot();
        return this.client.describeImageScanFindings(
          this.ops["DescribeImageScanFindings"].apply(partialParams)
        );
    }

    invokeDescribeImages(partialParams: ToOptional<{
      [K in keyof DescribeImagesRequest]: (DescribeImagesRequest)[K]
    }>): Request<DescribeImagesResponse, AWSError> {
        this.boot();
        return this.client.describeImages(
          this.ops["DescribeImages"].apply(partialParams)
        );
    }

    invokeDescribePullThroughCacheRules(partialParams: ToOptional<{
      [K in keyof DescribePullThroughCacheRulesRequest]: (DescribePullThroughCacheRulesRequest)[K]
    }>): Request<DescribePullThroughCacheRulesResponse, AWSError> {
        this.boot();
        return this.client.describePullThroughCacheRules(
          this.ops["DescribePullThroughCacheRules"].apply(partialParams)
        );
    }

    invokeDescribeRegistry(partialParams: ToOptional<{
      [K in keyof DescribeRegistryRequest]: (DescribeRegistryRequest)[K]
    }>): Request<DescribeRegistryResponse, AWSError> {
        this.boot();
        return this.client.describeRegistry(
          this.ops["DescribeRegistry"].apply(partialParams)
        );
    }

    invokeDescribeRepositories(partialParams: ToOptional<{
      [K in keyof DescribeRepositoriesRequest]: (DescribeRepositoriesRequest)[K]
    }>): Request<DescribeRepositoriesResponse, AWSError> {
        this.boot();
        return this.client.describeRepositories(
          this.ops["DescribeRepositories"].apply(partialParams)
        );
    }

    invokeGetAuthorizationToken(partialParams: ToOptional<{
      [K in keyof GetAuthorizationTokenRequest]: (GetAuthorizationTokenRequest)[K]
    }>): Request<GetAuthorizationTokenResponse, AWSError> {
        this.boot();
        return this.client.getAuthorizationToken(
          this.ops["GetAuthorizationToken"].apply(partialParams)
        );
    }

    invokeGetDownloadUrlForLayer(partialParams: ToOptional<{
      [K in keyof GetDownloadUrlForLayerRequest]: (GetDownloadUrlForLayerRequest)[K]
    }>): Request<GetDownloadUrlForLayerResponse, AWSError> {
        this.boot();
        return this.client.getDownloadUrlForLayer(
          this.ops["GetDownloadUrlForLayer"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyRequest]: (GetLifecyclePolicyRequest)[K]
    }>): Request<GetLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicyPreview(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyPreviewRequest]: (GetLifecyclePolicyPreviewRequest)[K]
    }>): Request<GetLifecyclePolicyPreviewResponse, AWSError> {
        this.boot();
        return this.client.getLifecyclePolicyPreview(
          this.ops["GetLifecyclePolicyPreview"].apply(partialParams)
        );
    }

    invokeGetRegistryPolicy(partialParams: ToOptional<{
      [K in keyof GetRegistryPolicyRequest]: (GetRegistryPolicyRequest)[K]
    }>): Request<GetRegistryPolicyResponse, AWSError> {
        this.boot();
        return this.client.getRegistryPolicy(
          this.ops["GetRegistryPolicy"].apply(partialParams)
        );
    }

    invokeGetRegistryScanningConfiguration(partialParams: ToOptional<{
      [K in keyof GetRegistryScanningConfigurationRequest]: (GetRegistryScanningConfigurationRequest)[K]
    }>): Request<GetRegistryScanningConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getRegistryScanningConfiguration(
          this.ops["GetRegistryScanningConfiguration"].apply(partialParams)
        );
    }

    invokeGetRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof GetRepositoryPolicyRequest]: (GetRepositoryPolicyRequest)[K]
    }>): Request<GetRepositoryPolicyResponse, AWSError> {
        this.boot();
        return this.client.getRepositoryPolicy(
          this.ops["GetRepositoryPolicy"].apply(partialParams)
        );
    }

    invokeInitiateLayerUpload(partialParams: ToOptional<{
      [K in keyof InitiateLayerUploadRequest]: (InitiateLayerUploadRequest)[K]
    }>): Request<InitiateLayerUploadResponse, AWSError> {
        this.boot();
        return this.client.initiateLayerUpload(
          this.ops["InitiateLayerUpload"].apply(partialParams)
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

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutImage(partialParams: ToOptional<{
      [K in keyof PutImageRequest]: (PutImageRequest)[K]
    }>): Request<PutImageResponse, AWSError> {
        this.boot();
        return this.client.putImage(
          this.ops["PutImage"].apply(partialParams)
        );
    }

    invokePutImageScanningConfiguration(partialParams: ToOptional<{
      [K in keyof PutImageScanningConfigurationRequest]: (PutImageScanningConfigurationRequest)[K]
    }>): Request<PutImageScanningConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putImageScanningConfiguration(
          this.ops["PutImageScanningConfiguration"].apply(partialParams)
        );
    }

    invokePutImageTagMutability(partialParams: ToOptional<{
      [K in keyof PutImageTagMutabilityRequest]: (PutImageTagMutabilityRequest)[K]
    }>): Request<PutImageTagMutabilityResponse, AWSError> {
        this.boot();
        return this.client.putImageTagMutability(
          this.ops["PutImageTagMutability"].apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof PutLifecyclePolicyRequest]: (PutLifecyclePolicyRequest)[K]
    }>): Request<PutLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.putLifecyclePolicy(
          this.ops["PutLifecyclePolicy"].apply(partialParams)
        );
    }

    invokePutRegistryPolicy(partialParams: ToOptional<{
      [K in keyof PutRegistryPolicyRequest]: (PutRegistryPolicyRequest)[K]
    }>): Request<PutRegistryPolicyResponse, AWSError> {
        this.boot();
        return this.client.putRegistryPolicy(
          this.ops["PutRegistryPolicy"].apply(partialParams)
        );
    }

    invokePutRegistryScanningConfiguration(partialParams: ToOptional<{
      [K in keyof PutRegistryScanningConfigurationRequest]: (PutRegistryScanningConfigurationRequest)[K]
    }>): Request<PutRegistryScanningConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putRegistryScanningConfiguration(
          this.ops["PutRegistryScanningConfiguration"].apply(partialParams)
        );
    }

    invokePutReplicationConfiguration(partialParams: ToOptional<{
      [K in keyof PutReplicationConfigurationRequest]: (PutReplicationConfigurationRequest)[K]
    }>): Request<PutReplicationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putReplicationConfiguration(
          this.ops["PutReplicationConfiguration"].apply(partialParams)
        );
    }

    invokeSetRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof SetRepositoryPolicyRequest]: (SetRepositoryPolicyRequest)[K]
    }>): Request<SetRepositoryPolicyResponse, AWSError> {
        this.boot();
        return this.client.setRepositoryPolicy(
          this.ops["SetRepositoryPolicy"].apply(partialParams)
        );
    }

    invokeStartImageScan(partialParams: ToOptional<{
      [K in keyof StartImageScanRequest]: (StartImageScanRequest)[K]
    }>): Request<StartImageScanResponse, AWSError> {
        this.boot();
        return this.client.startImageScan(
          this.ops["StartImageScan"].apply(partialParams)
        );
    }

    invokeStartLifecyclePolicyPreview(partialParams: ToOptional<{
      [K in keyof StartLifecyclePolicyPreviewRequest]: (StartLifecyclePolicyPreviewRequest)[K]
    }>): Request<StartLifecyclePolicyPreviewResponse, AWSError> {
        this.boot();
        return this.client.startLifecyclePolicyPreview(
          this.ops["StartLifecyclePolicyPreview"].apply(partialParams)
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

    invokeUploadLayerPart(partialParams: ToOptional<{
      [K in keyof UploadLayerPartRequest]: (UploadLayerPartRequest)[K]
    }>): Request<UploadLayerPartResponse, AWSError> {
        this.boot();
        return this.client.uploadLayerPart(
          this.ops["UploadLayerPart"].apply(partialParams)
        );
    }
}