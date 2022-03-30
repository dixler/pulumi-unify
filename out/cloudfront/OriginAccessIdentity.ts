
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudfront.OriginAccessIdentity {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudfront.OriginAccessIdentity>) {
        super(...args)
        this.client = new awssdk.CloudFront()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudfront-2020-05-31.normal.json"), this.client)
    }

    invokeAssociateAlias(partialParams: ToOptional<{
      [K in keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest & keyof AssociateAliasRequest]: (AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest & AssociateAliasRequest)[K]
    }>): void {
        return this.client.associateAlias(
            this.ops["AssociateAlias"].apply(partialParams)
        );
    }

    invokeCreateCachePolicy(partialParams: ToOptional<{
      [K in keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest & keyof CreateCachePolicyRequest]: (CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest & CreateCachePolicyRequest)[K]
    }>): CreateCachePolicyResult {
        return this.client.createCachePolicy(
            this.ops["CreateCachePolicy"].apply(partialParams)
        );
    }

    invokeCreateCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest & keyof CreateCloudFrontOriginAccessIdentityRequest]: (CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest & CreateCloudFrontOriginAccessIdentityRequest)[K]
    }>): CreateCloudFrontOriginAccessIdentityResult {
        return this.client.createCloudFrontOriginAccessIdentity(
            this.ops["CreateCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeCreateDistribution(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest]: (CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest)[K]
    }>): CreateDistributionResult {
        return this.client.createDistribution(
            this.ops["CreateDistribution"].apply(partialParams)
        );
    }

    invokeCreateDistributionWithTags(partialParams: ToOptional<{
      [K in keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest & keyof CreateDistributionWithTagsRequest]: (CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest & CreateDistributionWithTagsRequest)[K]
    }>): CreateDistributionWithTagsResult {
        return this.client.createDistributionWithTags(
            this.ops["CreateDistributionWithTags"].apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest & keyof CreateFieldLevelEncryptionConfigRequest]: (CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest & CreateFieldLevelEncryptionConfigRequest)[K]
    }>): CreateFieldLevelEncryptionConfigResult {
        return this.client.createFieldLevelEncryptionConfig(
            this.ops["CreateFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest & keyof CreateFieldLevelEncryptionProfileRequest]: (CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest & CreateFieldLevelEncryptionProfileRequest)[K]
    }>): CreateFieldLevelEncryptionProfileResult {
        return this.client.createFieldLevelEncryptionProfile(
            this.ops["CreateFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest]: (CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest)[K]
    }>): CreateFunctionResult {
        return this.client.createFunction(
            this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeCreateInvalidation(partialParams: ToOptional<{
      [K in keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest & keyof CreateInvalidationRequest]: (CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest & CreateInvalidationRequest)[K]
    }>): CreateInvalidationResult {
        return this.client.createInvalidation(
            this.ops["CreateInvalidation"].apply(partialParams)
        );
    }

    invokeCreateKeyGroup(partialParams: ToOptional<{
      [K in keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest & keyof CreateKeyGroupRequest]: (CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest & CreateKeyGroupRequest)[K]
    }>): CreateKeyGroupResult {
        return this.client.createKeyGroup(
            this.ops["CreateKeyGroup"].apply(partialParams)
        );
    }

    invokeCreateMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest & keyof CreateMonitoringSubscriptionRequest]: (CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest & CreateMonitoringSubscriptionRequest)[K]
    }>): CreateMonitoringSubscriptionResult {
        return this.client.createMonitoringSubscription(
            this.ops["CreateMonitoringSubscription"].apply(partialParams)
        );
    }

    invokeCreateOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest & keyof CreateOriginRequestPolicyRequest]: (CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest & CreateOriginRequestPolicyRequest)[K]
    }>): CreateOriginRequestPolicyResult {
        return this.client.createOriginRequestPolicy(
            this.ops["CreateOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeCreatePublicKey(partialParams: ToOptional<{
      [K in keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest & keyof CreatePublicKeyRequest]: (CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest & CreatePublicKeyRequest)[K]
    }>): CreatePublicKeyResult {
        return this.client.createPublicKey(
            this.ops["CreatePublicKey"].apply(partialParams)
        );
    }

    invokeCreateRealtimeLogConfig(partialParams: ToOptional<{
      [K in keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest & keyof CreateRealtimeLogConfigRequest]: (CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest & CreateRealtimeLogConfigRequest)[K]
    }>): CreateRealtimeLogConfigResult {
        return this.client.createRealtimeLogConfig(
            this.ops["CreateRealtimeLogConfig"].apply(partialParams)
        );
    }

    invokeCreateResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest & keyof CreateResponseHeadersPolicyRequest]: (CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest & CreateResponseHeadersPolicyRequest)[K]
    }>): CreateResponseHeadersPolicyResult {
        return this.client.createResponseHeadersPolicy(
            this.ops["CreateResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeCreateStreamingDistribution(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest & keyof CreateStreamingDistributionRequest]: (CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest & CreateStreamingDistributionRequest)[K]
    }>): CreateStreamingDistributionResult {
        return this.client.createStreamingDistribution(
            this.ops["CreateStreamingDistribution"].apply(partialParams)
        );
    }

    invokeCreateStreamingDistributionWithTags(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest & keyof CreateStreamingDistributionWithTagsRequest]: (CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest & CreateStreamingDistributionWithTagsRequest)[K]
    }>): CreateStreamingDistributionWithTagsResult {
        return this.client.createStreamingDistributionWithTags(
            this.ops["CreateStreamingDistributionWithTags"].apply(partialParams)
        );
    }

    invokeDeleteCachePolicy(partialParams: ToOptional<{
      [K in keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest & keyof DeleteCachePolicyRequest]: (DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest & DeleteCachePolicyRequest)[K]
    }>): void {
        return this.client.deleteCachePolicy(
            this.ops["DeleteCachePolicy"].apply(partialParams)
        );
    }

    invokeDeleteCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest & keyof DeleteCloudFrontOriginAccessIdentityRequest]: (DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest & DeleteCloudFrontOriginAccessIdentityRequest)[K]
    }>): void {
        return this.client.deleteCloudFrontOriginAccessIdentity(
            this.ops["DeleteCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeDeleteDistribution(partialParams: ToOptional<{
      [K in keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest & keyof DeleteDistributionRequest]: (DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest & DeleteDistributionRequest)[K]
    }>): void {
        return this.client.deleteDistribution(
            this.ops["DeleteDistribution"].apply(partialParams)
        );
    }

    invokeDeleteFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest & keyof DeleteFieldLevelEncryptionConfigRequest]: (DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest & DeleteFieldLevelEncryptionConfigRequest)[K]
    }>): void {
        return this.client.deleteFieldLevelEncryptionConfig(
            this.ops["DeleteFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeDeleteFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest & keyof DeleteFieldLevelEncryptionProfileRequest]: (DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest & DeleteFieldLevelEncryptionProfileRequest)[K]
    }>): void {
        return this.client.deleteFieldLevelEncryptionProfile(
            this.ops["DeleteFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest]: (DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest)[K]
    }>): void {
        return this.client.deleteFunction(
            this.ops["DeleteFunction"].apply(partialParams)
        );
    }

    invokeDeleteKeyGroup(partialParams: ToOptional<{
      [K in keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest & keyof DeleteKeyGroupRequest]: (DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest & DeleteKeyGroupRequest)[K]
    }>): void {
        return this.client.deleteKeyGroup(
            this.ops["DeleteKeyGroup"].apply(partialParams)
        );
    }

    invokeDeleteMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest & keyof DeleteMonitoringSubscriptionRequest]: (DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest & DeleteMonitoringSubscriptionRequest)[K]
    }>): DeleteMonitoringSubscriptionResult {
        return this.client.deleteMonitoringSubscription(
            this.ops["DeleteMonitoringSubscription"].apply(partialParams)
        );
    }

    invokeDeleteOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest & keyof DeleteOriginRequestPolicyRequest]: (DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest & DeleteOriginRequestPolicyRequest)[K]
    }>): void {
        return this.client.deleteOriginRequestPolicy(
            this.ops["DeleteOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeDeletePublicKey(partialParams: ToOptional<{
      [K in keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest & keyof DeletePublicKeyRequest]: (DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest & DeletePublicKeyRequest)[K]
    }>): void {
        return this.client.deletePublicKey(
            this.ops["DeletePublicKey"].apply(partialParams)
        );
    }

    invokeDeleteResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest & keyof DeleteResponseHeadersPolicyRequest]: (DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest & DeleteResponseHeadersPolicyRequest)[K]
    }>): void {
        return this.client.deleteResponseHeadersPolicy(
            this.ops["DeleteResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeDeleteStreamingDistribution(partialParams: ToOptional<{
      [K in keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest & keyof DeleteStreamingDistributionRequest]: (DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest & DeleteStreamingDistributionRequest)[K]
    }>): void {
        return this.client.deleteStreamingDistribution(
            this.ops["DeleteStreamingDistribution"].apply(partialParams)
        );
    }

    invokeDescribeFunction(partialParams: ToOptional<{
      [K in keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest & keyof DescribeFunctionRequest]: (DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest & DescribeFunctionRequest)[K]
    }>): DescribeFunctionResult {
        return this.client.describeFunction(
            this.ops["DescribeFunction"].apply(partialParams)
        );
    }

    invokeGetCachePolicy(partialParams: ToOptional<{
      [K in keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest & keyof GetCachePolicyRequest]: (GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest & GetCachePolicyRequest)[K]
    }>): GetCachePolicyResult {
        return this.client.getCachePolicy(
            this.ops["GetCachePolicy"].apply(partialParams)
        );
    }

    invokeGetCachePolicyConfig(partialParams: ToOptional<{
      [K in keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest & keyof GetCachePolicyConfigRequest]: (GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest & GetCachePolicyConfigRequest)[K]
    }>): GetCachePolicyConfigResult {
        return this.client.getCachePolicyConfig(
            this.ops["GetCachePolicyConfig"].apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest & keyof GetCloudFrontOriginAccessIdentityRequest]: (GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest & GetCloudFrontOriginAccessIdentityRequest)[K]
    }>): GetCloudFrontOriginAccessIdentityResult {
        return this.client.getCloudFrontOriginAccessIdentity(
            this.ops["GetCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentityConfig(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest & keyof GetCloudFrontOriginAccessIdentityConfigRequest]: (GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest & GetCloudFrontOriginAccessIdentityConfigRequest)[K]
    }>): GetCloudFrontOriginAccessIdentityConfigResult {
        return this.client.getCloudFrontOriginAccessIdentityConfig(
            this.ops["GetCloudFrontOriginAccessIdentityConfig"].apply(partialParams)
        );
    }

    invokeGetDistribution(partialParams: ToOptional<{
      [K in keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest & keyof GetDistributionRequest]: (GetDistributionRequest & GetDistributionRequest & GetDistributionRequest & GetDistributionRequest & GetDistributionRequest & GetDistributionRequest)[K]
    }>): GetDistributionResult {
        return this.client.getDistribution(
            this.ops["GetDistribution"].apply(partialParams)
        );
    }

    invokeGetDistributionConfig(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest & keyof GetDistributionConfigRequest]: (GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest & GetDistributionConfigRequest)[K]
    }>): GetDistributionConfigResult {
        return this.client.getDistributionConfig(
            this.ops["GetDistributionConfig"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryption(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest & keyof GetFieldLevelEncryptionRequest]: (GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest & GetFieldLevelEncryptionRequest)[K]
    }>): GetFieldLevelEncryptionResult {
        return this.client.getFieldLevelEncryption(
            this.ops["GetFieldLevelEncryption"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest & keyof GetFieldLevelEncryptionConfigRequest]: (GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest & GetFieldLevelEncryptionConfigRequest)[K]
    }>): GetFieldLevelEncryptionConfigResult {
        return this.client.getFieldLevelEncryptionConfig(
            this.ops["GetFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest & keyof GetFieldLevelEncryptionProfileRequest]: (GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest & GetFieldLevelEncryptionProfileRequest)[K]
    }>): GetFieldLevelEncryptionProfileResult {
        return this.client.getFieldLevelEncryptionProfile(
            this.ops["GetFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfileConfig(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest & keyof GetFieldLevelEncryptionProfileConfigRequest]: (GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest & GetFieldLevelEncryptionProfileConfigRequest)[K]
    }>): GetFieldLevelEncryptionProfileConfigResult {
        return this.client.getFieldLevelEncryptionProfileConfig(
            this.ops["GetFieldLevelEncryptionProfileConfig"].apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest]: (GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest)[K]
    }>): GetFunctionResult {
        return this.client.getFunction(
            this.ops["GetFunction"].apply(partialParams)
        );
    }

    invokeGetInvalidation(partialParams: ToOptional<{
      [K in keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest & keyof GetInvalidationRequest]: (GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest & GetInvalidationRequest)[K]
    }>): GetInvalidationResult {
        return this.client.getInvalidation(
            this.ops["GetInvalidation"].apply(partialParams)
        );
    }

    invokeGetKeyGroup(partialParams: ToOptional<{
      [K in keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest & keyof GetKeyGroupRequest]: (GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest & GetKeyGroupRequest)[K]
    }>): GetKeyGroupResult {
        return this.client.getKeyGroup(
            this.ops["GetKeyGroup"].apply(partialParams)
        );
    }

    invokeGetKeyGroupConfig(partialParams: ToOptional<{
      [K in keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest & keyof GetKeyGroupConfigRequest]: (GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest & GetKeyGroupConfigRequest)[K]
    }>): GetKeyGroupConfigResult {
        return this.client.getKeyGroupConfig(
            this.ops["GetKeyGroupConfig"].apply(partialParams)
        );
    }

    invokeGetMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest & keyof GetMonitoringSubscriptionRequest]: (GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest & GetMonitoringSubscriptionRequest)[K]
    }>): GetMonitoringSubscriptionResult {
        return this.client.getMonitoringSubscription(
            this.ops["GetMonitoringSubscription"].apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest & keyof GetOriginRequestPolicyRequest]: (GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest & GetOriginRequestPolicyRequest)[K]
    }>): GetOriginRequestPolicyResult {
        return this.client.getOriginRequestPolicy(
            this.ops["GetOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicyConfig(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest & keyof GetOriginRequestPolicyConfigRequest]: (GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest & GetOriginRequestPolicyConfigRequest)[K]
    }>): GetOriginRequestPolicyConfigResult {
        return this.client.getOriginRequestPolicyConfig(
            this.ops["GetOriginRequestPolicyConfig"].apply(partialParams)
        );
    }

    invokeGetPublicKey(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest]: (GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest)[K]
    }>): GetPublicKeyResult {
        return this.client.getPublicKey(
            this.ops["GetPublicKey"].apply(partialParams)
        );
    }

    invokeGetPublicKeyConfig(partialParams: ToOptional<{
      [K in keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest & keyof GetPublicKeyConfigRequest]: (GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest & GetPublicKeyConfigRequest)[K]
    }>): GetPublicKeyConfigResult {
        return this.client.getPublicKeyConfig(
            this.ops["GetPublicKeyConfig"].apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest & keyof GetResponseHeadersPolicyRequest]: (GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest & GetResponseHeadersPolicyRequest)[K]
    }>): GetResponseHeadersPolicyResult {
        return this.client.getResponseHeadersPolicy(
            this.ops["GetResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicyConfig(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest & keyof GetResponseHeadersPolicyConfigRequest]: (GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest & GetResponseHeadersPolicyConfigRequest)[K]
    }>): GetResponseHeadersPolicyConfigResult {
        return this.client.getResponseHeadersPolicyConfig(
            this.ops["GetResponseHeadersPolicyConfig"].apply(partialParams)
        );
    }

    invokeGetStreamingDistribution(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest & keyof GetStreamingDistributionRequest]: (GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest & GetStreamingDistributionRequest)[K]
    }>): GetStreamingDistributionResult {
        return this.client.getStreamingDistribution(
            this.ops["GetStreamingDistribution"].apply(partialParams)
        );
    }

    invokeGetStreamingDistributionConfig(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest & keyof GetStreamingDistributionConfigRequest]: (GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest & GetStreamingDistributionConfigRequest)[K]
    }>): GetStreamingDistributionConfigResult {
        return this.client.getStreamingDistributionConfig(
            this.ops["GetStreamingDistributionConfig"].apply(partialParams)
        );
    }

    invokeListConflictingAliases(partialParams: ToOptional<{
      [K in keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest & keyof ListConflictingAliasesRequest]: (ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest & ListConflictingAliasesRequest)[K]
    }>): ListConflictingAliasesResult {
        return this.client.listConflictingAliases(
            this.ops["ListConflictingAliases"].apply(partialParams)
        );
    }

    invokeListDistributionsByCachePolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest & keyof ListDistributionsByCachePolicyIdRequest]: (ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest & ListDistributionsByCachePolicyIdRequest)[K]
    }>): ListDistributionsByCachePolicyIdResult {
        return this.client.listDistributionsByCachePolicyId(
            this.ops["ListDistributionsByCachePolicyId"].apply(partialParams)
        );
    }

    invokeListDistributionsByKeyGroup(partialParams: ToOptional<{
      [K in keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest & keyof ListDistributionsByKeyGroupRequest]: (ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest & ListDistributionsByKeyGroupRequest)[K]
    }>): ListDistributionsByKeyGroupResult {
        return this.client.listDistributionsByKeyGroup(
            this.ops["ListDistributionsByKeyGroup"].apply(partialParams)
        );
    }

    invokeListDistributionsByOriginRequestPolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest & keyof ListDistributionsByOriginRequestPolicyIdRequest]: (ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest & ListDistributionsByOriginRequestPolicyIdRequest)[K]
    }>): ListDistributionsByOriginRequestPolicyIdResult {
        return this.client.listDistributionsByOriginRequestPolicyId(
            this.ops["ListDistributionsByOriginRequestPolicyId"].apply(partialParams)
        );
    }

    invokeListDistributionsByResponseHeadersPolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest & keyof ListDistributionsByResponseHeadersPolicyIdRequest]: (ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest & ListDistributionsByResponseHeadersPolicyIdRequest)[K]
    }>): ListDistributionsByResponseHeadersPolicyIdResult {
        return this.client.listDistributionsByResponseHeadersPolicyId(
            this.ops["ListDistributionsByResponseHeadersPolicyId"].apply(partialParams)
        );
    }

    invokeListDistributionsByWebACLId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest & keyof ListDistributionsByWebACLIdRequest]: (ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest & ListDistributionsByWebACLIdRequest)[K]
    }>): ListDistributionsByWebACLIdResult {
        return this.client.listDistributionsByWebACLId(
            this.ops["ListDistributionsByWebACLId"].apply(partialParams)
        );
    }

    invokeListInvalidations(partialParams: ToOptional<{
      [K in keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest & keyof ListInvalidationsRequest]: (ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest & ListInvalidationsRequest)[K]
    }>): ListInvalidationsResult {
        return this.client.listInvalidations(
            this.ops["ListInvalidations"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResult {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePublishFunction(partialParams: ToOptional<{
      [K in keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest & keyof PublishFunctionRequest]: (PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest & PublishFunctionRequest)[K]
    }>): PublishFunctionResult {
        return this.client.publishFunction(
            this.ops["PublishFunction"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestFunction(partialParams: ToOptional<{
      [K in keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest & keyof TestFunctionRequest]: (TestFunctionRequest & TestFunctionRequest & TestFunctionRequest & TestFunctionRequest & TestFunctionRequest & TestFunctionRequest)[K]
    }>): TestFunctionResult {
        return this.client.testFunction(
            this.ops["TestFunction"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateCachePolicy(partialParams: ToOptional<{
      [K in keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest & keyof UpdateCachePolicyRequest]: (UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest & UpdateCachePolicyRequest)[K]
    }>): UpdateCachePolicyResult {
        return this.client.updateCachePolicy(
            this.ops["UpdateCachePolicy"].apply(partialParams)
        );
    }

    invokeUpdateCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest & keyof UpdateCloudFrontOriginAccessIdentityRequest]: (UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest & UpdateCloudFrontOriginAccessIdentityRequest)[K]
    }>): UpdateCloudFrontOriginAccessIdentityResult {
        return this.client.updateCloudFrontOriginAccessIdentity(
            this.ops["UpdateCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeUpdateDistribution(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest]: (UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest)[K]
    }>): UpdateDistributionResult {
        return this.client.updateDistribution(
            this.ops["UpdateDistribution"].apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest & keyof UpdateFieldLevelEncryptionConfigRequest]: (UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest & UpdateFieldLevelEncryptionConfigRequest)[K]
    }>): UpdateFieldLevelEncryptionConfigResult {
        return this.client.updateFieldLevelEncryptionConfig(
            this.ops["UpdateFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest & keyof UpdateFieldLevelEncryptionProfileRequest]: (UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest & UpdateFieldLevelEncryptionProfileRequest)[K]
    }>): UpdateFieldLevelEncryptionProfileResult {
        return this.client.updateFieldLevelEncryptionProfile(
            this.ops["UpdateFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeUpdateFunction(partialParams: ToOptional<{
      [K in keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest]: (UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest & UpdateFunctionRequest)[K]
    }>): UpdateFunctionResult {
        return this.client.updateFunction(
            this.ops["UpdateFunction"].apply(partialParams)
        );
    }

    invokeUpdateKeyGroup(partialParams: ToOptional<{
      [K in keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest & keyof UpdateKeyGroupRequest]: (UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest & UpdateKeyGroupRequest)[K]
    }>): UpdateKeyGroupResult {
        return this.client.updateKeyGroup(
            this.ops["UpdateKeyGroup"].apply(partialParams)
        );
    }

    invokeUpdateOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest & keyof UpdateOriginRequestPolicyRequest]: (UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest & UpdateOriginRequestPolicyRequest)[K]
    }>): UpdateOriginRequestPolicyResult {
        return this.client.updateOriginRequestPolicy(
            this.ops["UpdateOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeUpdatePublicKey(partialParams: ToOptional<{
      [K in keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest & keyof UpdatePublicKeyRequest]: (UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest & UpdatePublicKeyRequest)[K]
    }>): UpdatePublicKeyResult {
        return this.client.updatePublicKey(
            this.ops["UpdatePublicKey"].apply(partialParams)
        );
    }

    invokeUpdateResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest & keyof UpdateResponseHeadersPolicyRequest]: (UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest & UpdateResponseHeadersPolicyRequest)[K]
    }>): UpdateResponseHeadersPolicyResult {
        return this.client.updateResponseHeadersPolicy(
            this.ops["UpdateResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeUpdateStreamingDistribution(partialParams: ToOptional<{
      [K in keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest & keyof UpdateStreamingDistributionRequest]: (UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest & UpdateStreamingDistributionRequest)[K]
    }>): UpdateStreamingDistributionResult {
        return this.client.updateStreamingDistribution(
            this.ops["UpdateStreamingDistribution"].apply(partialParams)
        );
    }
}