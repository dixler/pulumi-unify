
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateAliasRequest,
    CreateCachePolicyRequest,
    CreateCloudFrontOriginAccessIdentityRequest,
    CreateDistributionRequest,
    CreateDistributionWithTagsRequest,
    CreateFieldLevelEncryptionConfigRequest,
    CreateFieldLevelEncryptionProfileRequest,
    CreateFunctionRequest,
    CreateInvalidationRequest,
    CreateKeyGroupRequest,
    CreateMonitoringSubscriptionRequest,
    CreateOriginRequestPolicyRequest,
    CreatePublicKeyRequest,
    CreateRealtimeLogConfigRequest,
    CreateResponseHeadersPolicyRequest,
    CreateStreamingDistributionRequest,
    CreateStreamingDistributionWithTagsRequest,
    DeleteCachePolicyRequest,
    DeleteCloudFrontOriginAccessIdentityRequest,
    DeleteDistributionRequest,
    DeleteFieldLevelEncryptionConfigRequest,
    DeleteFieldLevelEncryptionProfileRequest,
    DeleteFunctionRequest,
    DeleteKeyGroupRequest,
    DeleteMonitoringSubscriptionRequest,
    DeleteOriginRequestPolicyRequest,
    DeletePublicKeyRequest,
    DeleteResponseHeadersPolicyRequest,
    DeleteStreamingDistributionRequest,
    DescribeFunctionRequest,
    GetCachePolicyRequest,
    GetCachePolicyConfigRequest,
    GetCloudFrontOriginAccessIdentityRequest,
    GetCloudFrontOriginAccessIdentityConfigRequest,
    GetDistributionRequest,
    GetDistributionConfigRequest,
    GetFieldLevelEncryptionRequest,
    GetFieldLevelEncryptionConfigRequest,
    GetFieldLevelEncryptionProfileRequest,
    GetFieldLevelEncryptionProfileConfigRequest,
    GetFunctionRequest,
    GetInvalidationRequest,
    GetKeyGroupRequest,
    GetKeyGroupConfigRequest,
    GetMonitoringSubscriptionRequest,
    GetOriginRequestPolicyRequest,
    GetOriginRequestPolicyConfigRequest,
    GetPublicKeyRequest,
    GetPublicKeyConfigRequest,
    GetResponseHeadersPolicyRequest,
    GetResponseHeadersPolicyConfigRequest,
    GetStreamingDistributionRequest,
    GetStreamingDistributionConfigRequest,
    ListConflictingAliasesRequest,
    ListDistributionsByCachePolicyIdRequest,
    ListDistributionsByKeyGroupRequest,
    ListDistributionsByOriginRequestPolicyIdRequest,
    ListDistributionsByResponseHeadersPolicyIdRequest,
    ListDistributionsByWebACLIdRequest,
    ListInvalidationsRequest,
    ListTagsForResourceRequest,
    PublishFunctionRequest,
    TagResourceRequest,
    TestFunctionRequest,
    UntagResourceRequest,
    UpdateCachePolicyRequest,
    UpdateCloudFrontOriginAccessIdentityRequest,
    UpdateDistributionRequest,
    UpdateFieldLevelEncryptionConfigRequest,
    UpdateFieldLevelEncryptionProfileRequest,
    UpdateFunctionRequest,
    UpdateKeyGroupRequest,
    UpdateOriginRequestPolicyRequest,
    UpdatePublicKeyRequest,
    UpdateResponseHeadersPolicyRequest,
    UpdateStreamingDistributionRequest,
    CreateCachePolicyResult,
    CreateCloudFrontOriginAccessIdentityResult,
    CreateDistributionResult,
    CreateDistributionWithTagsResult,
    CreateFieldLevelEncryptionConfigResult,
    CreateFieldLevelEncryptionProfileResult,
    CreateFunctionResult,
    CreateInvalidationResult,
    CreateKeyGroupResult,
    CreateMonitoringSubscriptionResult,
    CreateOriginRequestPolicyResult,
    CreatePublicKeyResult,
    CreateRealtimeLogConfigResult,
    CreateResponseHeadersPolicyResult,
    CreateStreamingDistributionResult,
    CreateStreamingDistributionWithTagsResult,
    DeleteMonitoringSubscriptionResult,
    DescribeFunctionResult,
    GetCachePolicyResult,
    GetCachePolicyConfigResult,
    GetCloudFrontOriginAccessIdentityResult,
    GetCloudFrontOriginAccessIdentityConfigResult,
    GetDistributionResult,
    GetDistributionConfigResult,
    GetFieldLevelEncryptionResult,
    GetFieldLevelEncryptionConfigResult,
    GetFieldLevelEncryptionProfileResult,
    GetFieldLevelEncryptionProfileConfigResult,
    GetFunctionResult,
    GetInvalidationResult,
    GetKeyGroupResult,
    GetKeyGroupConfigResult,
    GetMonitoringSubscriptionResult,
    GetOriginRequestPolicyResult,
    GetOriginRequestPolicyConfigResult,
    GetPublicKeyResult,
    GetPublicKeyConfigResult,
    GetResponseHeadersPolicyResult,
    GetResponseHeadersPolicyConfigResult,
    GetStreamingDistributionResult,
    GetStreamingDistributionConfigResult,
    ListConflictingAliasesResult,
    ListDistributionsByCachePolicyIdResult,
    ListDistributionsByKeyGroupResult,
    ListDistributionsByOriginRequestPolicyIdResult,
    ListDistributionsByResponseHeadersPolicyIdResult,
    ListDistributionsByWebACLIdResult,
    ListInvalidationsResult,
    ListTagsForResourceResult,
    PublishFunctionResult,
    TestFunctionResult,
    UpdateCachePolicyResult,
    UpdateCloudFrontOriginAccessIdentityResult,
    UpdateDistributionResult,
    UpdateFieldLevelEncryptionConfigResult,
    UpdateFieldLevelEncryptionProfileResult,
    UpdateFunctionResult,
    UpdateKeyGroupResult,
    UpdateOriginRequestPolicyResult,
    UpdatePublicKeyResult,
    UpdateResponseHeadersPolicyResult,
    UpdateStreamingDistributionResult
} from "aws-sdk/clients/cloudfront";
const schema = require("../apis/cloudfront-2020-05-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudfront.PublicKey {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.cloudfront.PublicKey>) {
        super(...args)
        this.client = new awssdk.CloudFront()
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

    invokeAssociateAlias(partialParams: ToOptional<{
      [K in keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest]: (AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateAlias(
          this.ops["AssociateAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateCachePolicy(partialParams: ToOptional<{
      [K in keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest]: (CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest)[K]
    }>): Request<CreateCachePolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCachePolicy(
          this.ops["CreateCachePolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreateCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest]: (CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<CreateCloudFrontOriginAccessIdentityResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCloudFrontOriginAccessIdentity(
          this.ops["CreateCloudFrontOriginAccessIdentity"].applicator.apply(partialParams)
        );
    }

    invokeCreateDistribution(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest]: (CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest)[K]
    }>): Request<CreateDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistribution(
          this.ops["CreateDistribution"].applicator.apply(partialParams)
        );
    }

    invokeCreateDistributionWithTags(partialParams: ToOptional<{
      [K in keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest]: (CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest)[K]
    }>): Request<CreateDistributionWithTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistributionWithTags(
          this.ops["CreateDistributionWithTags"].applicator.apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest]: (CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest)[K]
    }>): Request<CreateFieldLevelEncryptionConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFieldLevelEncryptionConfig(
          this.ops["CreateFieldLevelEncryptionConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest]: (CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest)[K]
    }>): Request<CreateFieldLevelEncryptionProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFieldLevelEncryptionProfile(
          this.ops["CreateFieldLevelEncryptionProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest]: (CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest)[K]
    }>): Request<CreateFunctionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFunction(
          this.ops["CreateFunction"].applicator.apply(partialParams)
        );
    }

    invokeCreateInvalidation(partialParams: ToOptional<{
      [K in keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest]: (CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest)[K]
    }>): Request<CreateInvalidationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInvalidation(
          this.ops["CreateInvalidation"].applicator.apply(partialParams)
        );
    }

    invokeCreateKeyGroup(partialParams: ToOptional<{
      [K in keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest]: (CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest)[K]
    }>): Request<CreateKeyGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeyGroup(
          this.ops["CreateKeyGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest]: (CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest)[K]
    }>): Request<CreateMonitoringSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMonitoringSubscription(
          this.ops["CreateMonitoringSubscription"].applicator.apply(partialParams)
        );
    }

    invokeCreateOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest]: (CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest)[K]
    }>): Request<CreateOriginRequestPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOriginRequestPolicy(
          this.ops["CreateOriginRequestPolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreatePublicKey(partialParams: ToOptional<{
      [K in keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest]: (CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest)[K]
    }>): Request<CreatePublicKeyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublicKey(
          this.ops["CreatePublicKey"].applicator.apply(partialParams)
        );
    }

    invokeCreateRealtimeLogConfig(partialParams: ToOptional<{
      [K in keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest]: (CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest)[K]
    }>): Request<CreateRealtimeLogConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRealtimeLogConfig(
          this.ops["CreateRealtimeLogConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest]: (CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest)[K]
    }>): Request<CreateResponseHeadersPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResponseHeadersPolicy(
          this.ops["CreateResponseHeadersPolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreateStreamingDistribution(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest]: (CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest)[K]
    }>): Request<CreateStreamingDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStreamingDistribution(
          this.ops["CreateStreamingDistribution"].applicator.apply(partialParams)
        );
    }

    invokeCreateStreamingDistributionWithTags(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest]: (CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest)[K]
    }>): Request<CreateStreamingDistributionWithTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStreamingDistributionWithTags(
          this.ops["CreateStreamingDistributionWithTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCachePolicy(partialParams: ToOptional<{
      [K in keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest]: (DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCachePolicy(
          this.ops["DeleteCachePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest]: (DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCloudFrontOriginAccessIdentity(
          this.ops["DeleteCloudFrontOriginAccessIdentity"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDistribution(partialParams: ToOptional<{
      [K in keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest]: (DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDistribution(
          this.ops["DeleteDistribution"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest]: (DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFieldLevelEncryptionConfig(
          this.ops["DeleteFieldLevelEncryptionConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest]: (DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFieldLevelEncryptionProfile(
          this.ops["DeleteFieldLevelEncryptionProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest]: (DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunction(
          this.ops["DeleteFunction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteKeyGroup(partialParams: ToOptional<{
      [K in keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest]: (DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKeyGroup(
          this.ops["DeleteKeyGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest]: (DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest)[K]
    }>): Request<DeleteMonitoringSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMonitoringSubscription(
          this.ops["DeleteMonitoringSubscription"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest]: (DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOriginRequestPolicy(
          this.ops["DeleteOriginRequestPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeletePublicKey(partialParams: ToOptional<{
      [K in keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest]: (DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicKey(
          this.ops["DeletePublicKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest]: (DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResponseHeadersPolicy(
          this.ops["DeleteResponseHeadersPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStreamingDistribution(partialParams: ToOptional<{
      [K in keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest]: (DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStreamingDistribution(
          this.ops["DeleteStreamingDistribution"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFunction(partialParams: ToOptional<{
      [K in keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest]: (DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest)[K]
    }>): Request<DescribeFunctionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFunction(
          this.ops["DescribeFunction"].applicator.apply(partialParams)
        );
    }

    invokeGetCachePolicy(partialParams: ToOptional<{
      [K in keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest]: (GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest)[K]
    }>): Request<GetCachePolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCachePolicy(
          this.ops["GetCachePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetCachePolicyConfig(partialParams: ToOptional<{
      [K in keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest]: (GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest)[K]
    }>): Request<GetCachePolicyConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCachePolicyConfig(
          this.ops["GetCachePolicyConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest]: (GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<GetCloudFrontOriginAccessIdentityResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentity(
          this.ops["GetCloudFrontOriginAccessIdentity"].applicator.apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentityConfig(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest]: (GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest)[K]
    }>): Request<GetCloudFrontOriginAccessIdentityConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentityConfig(
          this.ops["GetCloudFrontOriginAccessIdentityConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetDistribution(partialParams: ToOptional<{
      [K in keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest]: (GetDistributionRequest & GetDistributionRequest & GetDistributionRequest & GetDistributionRequest & GetDistributionRequest & GetDistributionRequest)[K]
    }>): Request<GetDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistribution(
          this.ops["GetDistribution"].applicator.apply(partialParams)
        );
    }

    invokeGetDistributionConfig(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest]: (GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest)[K]
    }>): Request<GetDistributionConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistributionConfig(
          this.ops["GetDistributionConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryption(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest]: (GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest)[K]
    }>): Request<GetFieldLevelEncryptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryption(
          this.ops["GetFieldLevelEncryption"].applicator.apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest]: (GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest)[K]
    }>): Request<GetFieldLevelEncryptionConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryptionConfig(
          this.ops["GetFieldLevelEncryptionConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest]: (GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest)[K]
    }>): Request<GetFieldLevelEncryptionProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryptionProfile(
          this.ops["GetFieldLevelEncryptionProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfileConfig(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest]: (GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest)[K]
    }>): Request<GetFieldLevelEncryptionProfileConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryptionProfileConfig(
          this.ops["GetFieldLevelEncryptionProfileConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest]: (GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest)[K]
    }>): Request<GetFunctionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunction(
          this.ops["GetFunction"].applicator.apply(partialParams)
        );
    }

    invokeGetInvalidation(partialParams: ToOptional<{
      [K in keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest]: (GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest)[K]
    }>): Request<GetInvalidationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInvalidation(
          this.ops["GetInvalidation"].applicator.apply(partialParams)
        );
    }

    invokeGetKeyGroup(partialParams: ToOptional<{
      [K in keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest]: (GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest)[K]
    }>): Request<GetKeyGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyGroup(
          this.ops["GetKeyGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetKeyGroupConfig(partialParams: ToOptional<{
      [K in keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest]: (GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest)[K]
    }>): Request<GetKeyGroupConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyGroupConfig(
          this.ops["GetKeyGroupConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest]: (GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest)[K]
    }>): Request<GetMonitoringSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMonitoringSubscription(
          this.ops["GetMonitoringSubscription"].applicator.apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest]: (GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest)[K]
    }>): Request<GetOriginRequestPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOriginRequestPolicy(
          this.ops["GetOriginRequestPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicyConfig(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest]: (GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest)[K]
    }>): Request<GetOriginRequestPolicyConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOriginRequestPolicyConfig(
          this.ops["GetOriginRequestPolicyConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetPublicKey(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest]: (GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest)[K]
    }>): Request<GetPublicKeyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicKey(
          this.ops["GetPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeGetPublicKeyConfig(partialParams: ToOptional<{
      [K in keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest]: (GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest)[K]
    }>): Request<GetPublicKeyConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicKeyConfig(
          this.ops["GetPublicKeyConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest]: (GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest)[K]
    }>): Request<GetResponseHeadersPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResponseHeadersPolicy(
          this.ops["GetResponseHeadersPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicyConfig(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest]: (GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest)[K]
    }>): Request<GetResponseHeadersPolicyConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResponseHeadersPolicyConfig(
          this.ops["GetResponseHeadersPolicyConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetStreamingDistribution(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest]: (GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest)[K]
    }>): Request<GetStreamingDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStreamingDistribution(
          this.ops["GetStreamingDistribution"].applicator.apply(partialParams)
        );
    }

    invokeGetStreamingDistributionConfig(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest]: (GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest)[K]
    }>): Request<GetStreamingDistributionConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStreamingDistributionConfig(
          this.ops["GetStreamingDistributionConfig"].applicator.apply(partialParams)
        );
    }

    invokeListConflictingAliases(partialParams: ToOptional<{
      [K in keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest]: (ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest)[K]
    }>): Request<ListConflictingAliasesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listConflictingAliases(
          this.ops["ListConflictingAliases"].applicator.apply(partialParams)
        );
    }

    invokeListDistributionsByCachePolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest]: (ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest)[K]
    }>): Request<ListDistributionsByCachePolicyIdResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByCachePolicyId(
          this.ops["ListDistributionsByCachePolicyId"].applicator.apply(partialParams)
        );
    }

    invokeListDistributionsByKeyGroup(partialParams: ToOptional<{
      [K in keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest]: (ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest)[K]
    }>): Request<ListDistributionsByKeyGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByKeyGroup(
          this.ops["ListDistributionsByKeyGroup"].applicator.apply(partialParams)
        );
    }

    invokeListDistributionsByOriginRequestPolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest]: (ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest)[K]
    }>): Request<ListDistributionsByOriginRequestPolicyIdResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByOriginRequestPolicyId(
          this.ops["ListDistributionsByOriginRequestPolicyId"].applicator.apply(partialParams)
        );
    }

    invokeListDistributionsByResponseHeadersPolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest]: (ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest)[K]
    }>): Request<ListDistributionsByResponseHeadersPolicyIdResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByResponseHeadersPolicyId(
          this.ops["ListDistributionsByResponseHeadersPolicyId"].applicator.apply(partialParams)
        );
    }

    invokeListDistributionsByWebACLId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest]: (ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest)[K]
    }>): Request<ListDistributionsByWebACLIdResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByWebACLId(
          this.ops["ListDistributionsByWebACLId"].applicator.apply(partialParams)
        );
    }

    invokeListInvalidations(partialParams: ToOptional<{
      [K in keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest]: (ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest)[K]
    }>): Request<ListInvalidationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInvalidations(
          this.ops["ListInvalidations"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePublishFunction(partialParams: ToOptional<{
      [K in keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest]: (PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest)[K]
    }>): Request<PublishFunctionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishFunction(
          this.ops["PublishFunction"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestFunction(partialParams: ToOptional<{
      [K in keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest]: (TestFunctionRequest & TestFunctionRequest & TestFunctionRequest & TestFunctionRequest & TestFunctionRequest & TestFunctionRequest)[K]
    }>): Request<TestFunctionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testFunction(
          this.ops["TestFunction"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCachePolicy(partialParams: ToOptional<{
      [K in keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest]: (UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest)[K]
    }>): Request<UpdateCachePolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCachePolicy(
          this.ops["UpdateCachePolicy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest]: (UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<UpdateCloudFrontOriginAccessIdentityResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCloudFrontOriginAccessIdentity(
          this.ops["UpdateCloudFrontOriginAccessIdentity"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDistribution(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest]: (UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest)[K]
    }>): Request<UpdateDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDistribution(
          this.ops["UpdateDistribution"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest]: (UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest)[K]
    }>): Request<UpdateFieldLevelEncryptionConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFieldLevelEncryptionConfig(
          this.ops["UpdateFieldLevelEncryptionConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest]: (UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest)[K]
    }>): Request<UpdateFieldLevelEncryptionProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFieldLevelEncryptionProfile(
          this.ops["UpdateFieldLevelEncryptionProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFunction(partialParams: ToOptional<{
      [K in keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest]: (UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest)[K]
    }>): Request<UpdateFunctionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunction(
          this.ops["UpdateFunction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateKeyGroup(partialParams: ToOptional<{
      [K in keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest]: (UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest)[K]
    }>): Request<UpdateKeyGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateKeyGroup(
          this.ops["UpdateKeyGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest]: (UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest)[K]
    }>): Request<UpdateOriginRequestPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOriginRequestPolicy(
          this.ops["UpdateOriginRequestPolicy"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePublicKey(partialParams: ToOptional<{
      [K in keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest]: (UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest)[K]
    }>): Request<UpdatePublicKeyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePublicKey(
          this.ops["UpdatePublicKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest]: (UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest)[K]
    }>): Request<UpdateResponseHeadersPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResponseHeadersPolicy(
          this.ops["UpdateResponseHeadersPolicy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStreamingDistribution(partialParams: ToOptional<{
      [K in keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest]: (UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest)[K]
    }>): Request<UpdateStreamingDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStreamingDistribution(
          this.ops["UpdateStreamingDistribution"].applicator.apply(partialParams)
        );
    }
}