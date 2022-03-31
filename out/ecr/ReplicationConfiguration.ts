
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
const schema = require("../apis/ecr-2015-09-21.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ecr.ReplicationConfiguration {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.ecr.ReplicationConfiguration>) {
        super(...args)
        this.client = new awssdk.ECR()
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

    invokeBatchCheckLayerAvailability(partialParams: ToOptional<{
      [K in keyof BatchCheckLayerAvailabilityRequest]: (BatchCheckLayerAvailabilityRequest)[K]
    }>): Request<BatchCheckLayerAvailabilityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchCheckLayerAvailability(
          this.ops["BatchCheckLayerAvailability"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeleteImage(partialParams: ToOptional<{
      [K in keyof BatchDeleteImageRequest]: (BatchDeleteImageRequest)[K]
    }>): Request<BatchDeleteImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteImage(
          this.ops["BatchDeleteImage"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetImage(partialParams: ToOptional<{
      [K in keyof BatchGetImageRequest]: (BatchGetImageRequest)[K]
    }>): Request<BatchGetImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetImage(
          this.ops["BatchGetImage"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetRepositoryScanningConfiguration(partialParams: ToOptional<{
      [K in keyof BatchGetRepositoryScanningConfigurationRequest]: (BatchGetRepositoryScanningConfigurationRequest)[K]
    }>): Request<BatchGetRepositoryScanningConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetRepositoryScanningConfiguration(
          this.ops["BatchGetRepositoryScanningConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCompleteLayerUpload(partialParams: ToOptional<{
      [K in keyof CompleteLayerUploadRequest]: (CompleteLayerUploadRequest)[K]
    }>): Request<CompleteLayerUploadResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeLayerUpload(
          this.ops["CompleteLayerUpload"].applicator.apply(partialParams)
        );
    }

    invokeCreatePullThroughCacheRule(partialParams: ToOptional<{
      [K in keyof CreatePullThroughCacheRuleRequest]: (CreatePullThroughCacheRuleRequest)[K]
    }>): Request<CreatePullThroughCacheRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPullThroughCacheRule(
          this.ops["CreatePullThroughCacheRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryRequest]: (CreateRepositoryRequest)[K]
    }>): Request<CreateRepositoryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRepository(
          this.ops["CreateRepository"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyRequest]: (DeleteLifecyclePolicyRequest)[K]
    }>): Request<DeleteLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeletePullThroughCacheRule(partialParams: ToOptional<{
      [K in keyof DeletePullThroughCacheRuleRequest]: (DeletePullThroughCacheRuleRequest)[K]
    }>): Request<DeletePullThroughCacheRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePullThroughCacheRule(
          this.ops["DeletePullThroughCacheRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryRequest]: (DeleteRepositoryRequest)[K]
    }>): Request<DeleteRepositoryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepository(
          this.ops["DeleteRepository"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryPolicyRequest]: (DeleteRepositoryPolicyRequest)[K]
    }>): Request<DeleteRepositoryPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepositoryPolicy(
          this.ops["DeleteRepositoryPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImageReplicationStatus(partialParams: ToOptional<{
      [K in keyof DescribeImageReplicationStatusRequest]: (DescribeImageReplicationStatusRequest)[K]
    }>): Request<DescribeImageReplicationStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageReplicationStatus(
          this.ops["DescribeImageReplicationStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImageScanFindings(partialParams: ToOptional<{
      [K in keyof DescribeImageScanFindingsRequest]: (DescribeImageScanFindingsRequest)[K]
    }>): Request<DescribeImageScanFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageScanFindings(
          this.ops["DescribeImageScanFindings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImages(partialParams: ToOptional<{
      [K in keyof DescribeImagesRequest]: (DescribeImagesRequest)[K]
    }>): Request<DescribeImagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImages(
          this.ops["DescribeImages"].applicator.apply(partialParams)
        );
    }

    invokeGetDownloadUrlForLayer(partialParams: ToOptional<{
      [K in keyof GetDownloadUrlForLayerRequest]: (GetDownloadUrlForLayerRequest)[K]
    }>): Request<GetDownloadUrlForLayerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDownloadUrlForLayer(
          this.ops["GetDownloadUrlForLayer"].applicator.apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyRequest]: (GetLifecyclePolicyRequest)[K]
    }>): Request<GetLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetLifecyclePolicyPreview(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyPreviewRequest]: (GetLifecyclePolicyPreviewRequest)[K]
    }>): Request<GetLifecyclePolicyPreviewResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicyPreview(
          this.ops["GetLifecyclePolicyPreview"].applicator.apply(partialParams)
        );
    }

    invokeGetRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof GetRepositoryPolicyRequest]: (GetRepositoryPolicyRequest)[K]
    }>): Request<GetRepositoryPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepositoryPolicy(
          this.ops["GetRepositoryPolicy"].applicator.apply(partialParams)
        );
    }

    invokeInitiateLayerUpload(partialParams: ToOptional<{
      [K in keyof InitiateLayerUploadRequest]: (InitiateLayerUploadRequest)[K]
    }>): Request<InitiateLayerUploadResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initiateLayerUpload(
          this.ops["InitiateLayerUpload"].applicator.apply(partialParams)
        );
    }

    invokeListImages(partialParams: ToOptional<{
      [K in keyof ListImagesRequest]: (ListImagesRequest)[K]
    }>): Request<ListImagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImages(
          this.ops["ListImages"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutImage(partialParams: ToOptional<{
      [K in keyof PutImageRequest]: (PutImageRequest)[K]
    }>): Request<PutImageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImage(
          this.ops["PutImage"].applicator.apply(partialParams)
        );
    }

    invokePutImageScanningConfiguration(partialParams: ToOptional<{
      [K in keyof PutImageScanningConfigurationRequest]: (PutImageScanningConfigurationRequest)[K]
    }>): Request<PutImageScanningConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImageScanningConfiguration(
          this.ops["PutImageScanningConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutImageTagMutability(partialParams: ToOptional<{
      [K in keyof PutImageTagMutabilityRequest]: (PutImageTagMutabilityRequest)[K]
    }>): Request<PutImageTagMutabilityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putImageTagMutability(
          this.ops["PutImageTagMutability"].applicator.apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof PutLifecyclePolicyRequest]: (PutLifecyclePolicyRequest)[K]
    }>): Request<PutLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLifecyclePolicy(
          this.ops["PutLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutRegistryPolicy(partialParams: ToOptional<{
      [K in keyof PutRegistryPolicyRequest]: (PutRegistryPolicyRequest)[K]
    }>): Request<PutRegistryPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRegistryPolicy(
          this.ops["PutRegistryPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutReplicationConfiguration(partialParams: ToOptional<{
      [K in keyof PutReplicationConfigurationRequest]: (PutReplicationConfigurationRequest)[K]
    }>): Request<PutReplicationConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putReplicationConfiguration(
          this.ops["PutReplicationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeSetRepositoryPolicy(partialParams: ToOptional<{
      [K in keyof SetRepositoryPolicyRequest]: (SetRepositoryPolicyRequest)[K]
    }>): Request<SetRepositoryPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setRepositoryPolicy(
          this.ops["SetRepositoryPolicy"].applicator.apply(partialParams)
        );
    }

    invokeStartImageScan(partialParams: ToOptional<{
      [K in keyof StartImageScanRequest]: (StartImageScanRequest)[K]
    }>): Request<StartImageScanResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startImageScan(
          this.ops["StartImageScan"].applicator.apply(partialParams)
        );
    }

    invokeStartLifecyclePolicyPreview(partialParams: ToOptional<{
      [K in keyof StartLifecyclePolicyPreviewRequest]: (StartLifecyclePolicyPreviewRequest)[K]
    }>): Request<StartLifecyclePolicyPreviewResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startLifecyclePolicyPreview(
          this.ops["StartLifecyclePolicyPreview"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUploadLayerPart(partialParams: ToOptional<{
      [K in keyof UploadLayerPartRequest]: (UploadLayerPartRequest)[K]
    }>): Request<UploadLayerPartResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadLayerPart(
          this.ops["UploadLayerPart"].applicator.apply(partialParams)
        );
    }
}