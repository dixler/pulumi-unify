
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

export default class extends aws.cloudfront.MonitoringSubscription {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudfront.MonitoringSubscription>) {
        super(...args)
        this.client = new awssdk.CloudFront()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudfront-2020-05-31.normal.json"), this.client)
    }

    invokeAssociateAlias(partialParams: ToOptional<{
      [K in keyof AssociateAliasRequest]: (AssociateAliasRequest)[K]
    }>): void {
        return this.client.associateAlias(
            this.ops["AssociateAlias"].apply(partialParams)
        );
    }

    invokeCreateCachePolicy(partialParams: ToOptional<{
      [K in keyof CreateCachePolicyRequest]: (CreateCachePolicyRequest)[K]
    }>): CreateCachePolicyResult {
        return this.client.createCachePolicy(
            this.ops["CreateCachePolicy"].apply(partialParams)
        );
    }

    invokeCreateCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof CreateCloudFrontOriginAccessIdentityRequest]: (CreateCloudFrontOriginAccessIdentityRequest)[K]
    }>): CreateCloudFrontOriginAccessIdentityResult {
        return this.client.createCloudFrontOriginAccessIdentity(
            this.ops["CreateCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeCreateDistribution(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest]: (CreateDistributionRequest)[K]
    }>): CreateDistributionResult {
        return this.client.createDistribution(
            this.ops["CreateDistribution"].apply(partialParams)
        );
    }

    invokeCreateDistributionWithTags(partialParams: ToOptional<{
      [K in keyof CreateDistributionWithTagsRequest]: (CreateDistributionWithTagsRequest)[K]
    }>): CreateDistributionWithTagsResult {
        return this.client.createDistributionWithTags(
            this.ops["CreateDistributionWithTags"].apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionConfigRequest]: (CreateFieldLevelEncryptionConfigRequest)[K]
    }>): CreateFieldLevelEncryptionConfigResult {
        return this.client.createFieldLevelEncryptionConfig(
            this.ops["CreateFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionProfileRequest]: (CreateFieldLevelEncryptionProfileRequest)[K]
    }>): CreateFieldLevelEncryptionProfileResult {
        return this.client.createFieldLevelEncryptionProfile(
            this.ops["CreateFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest]: (CreateFunctionRequest)[K]
    }>): CreateFunctionResult {
        return this.client.createFunction(
            this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeCreateInvalidation(partialParams: ToOptional<{
      [K in keyof CreateInvalidationRequest]: (CreateInvalidationRequest)[K]
    }>): CreateInvalidationResult {
        return this.client.createInvalidation(
            this.ops["CreateInvalidation"].apply(partialParams)
        );
    }

    invokeCreateKeyGroup(partialParams: ToOptional<{
      [K in keyof CreateKeyGroupRequest]: (CreateKeyGroupRequest)[K]
    }>): CreateKeyGroupResult {
        return this.client.createKeyGroup(
            this.ops["CreateKeyGroup"].apply(partialParams)
        );
    }

    invokeCreateMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof CreateMonitoringSubscriptionRequest]: (CreateMonitoringSubscriptionRequest)[K]
    }>): CreateMonitoringSubscriptionResult {
        return this.client.createMonitoringSubscription(
            this.ops["CreateMonitoringSubscription"].apply(partialParams)
        );
    }

    invokeCreateOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof CreateOriginRequestPolicyRequest]: (CreateOriginRequestPolicyRequest)[K]
    }>): CreateOriginRequestPolicyResult {
        return this.client.createOriginRequestPolicy(
            this.ops["CreateOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeCreatePublicKey(partialParams: ToOptional<{
      [K in keyof CreatePublicKeyRequest]: (CreatePublicKeyRequest)[K]
    }>): CreatePublicKeyResult {
        return this.client.createPublicKey(
            this.ops["CreatePublicKey"].apply(partialParams)
        );
    }

    invokeCreateRealtimeLogConfig(partialParams: ToOptional<{
      [K in keyof CreateRealtimeLogConfigRequest]: (CreateRealtimeLogConfigRequest)[K]
    }>): CreateRealtimeLogConfigResult {
        return this.client.createRealtimeLogConfig(
            this.ops["CreateRealtimeLogConfig"].apply(partialParams)
        );
    }

    invokeCreateResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof CreateResponseHeadersPolicyRequest]: (CreateResponseHeadersPolicyRequest)[K]
    }>): CreateResponseHeadersPolicyResult {
        return this.client.createResponseHeadersPolicy(
            this.ops["CreateResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeCreateStreamingDistribution(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionRequest]: (CreateStreamingDistributionRequest)[K]
    }>): CreateStreamingDistributionResult {
        return this.client.createStreamingDistribution(
            this.ops["CreateStreamingDistribution"].apply(partialParams)
        );
    }

    invokeCreateStreamingDistributionWithTags(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionWithTagsRequest]: (CreateStreamingDistributionWithTagsRequest)[K]
    }>): CreateStreamingDistributionWithTagsResult {
        return this.client.createStreamingDistributionWithTags(
            this.ops["CreateStreamingDistributionWithTags"].apply(partialParams)
        );
    }

    invokeDeleteCachePolicy(partialParams: ToOptional<{
      [K in keyof DeleteCachePolicyRequest]: (DeleteCachePolicyRequest)[K]
    }>): void {
        return this.client.deleteCachePolicy(
            this.ops["DeleteCachePolicy"].apply(partialParams)
        );
    }

    invokeDeleteCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof DeleteCloudFrontOriginAccessIdentityRequest]: (DeleteCloudFrontOriginAccessIdentityRequest)[K]
    }>): void {
        return this.client.deleteCloudFrontOriginAccessIdentity(
            this.ops["DeleteCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeDeleteDistribution(partialParams: ToOptional<{
      [K in keyof DeleteDistributionRequest]: (DeleteDistributionRequest)[K]
    }>): void {
        return this.client.deleteDistribution(
            this.ops["DeleteDistribution"].apply(partialParams)
        );
    }

    invokeDeleteFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof DeleteFieldLevelEncryptionConfigRequest]: (DeleteFieldLevelEncryptionConfigRequest)[K]
    }>): void {
        return this.client.deleteFieldLevelEncryptionConfig(
            this.ops["DeleteFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeDeleteFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof DeleteFieldLevelEncryptionProfileRequest]: (DeleteFieldLevelEncryptionProfileRequest)[K]
    }>): void {
        return this.client.deleteFieldLevelEncryptionProfile(
            this.ops["DeleteFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest]: (DeleteFunctionRequest)[K]
    }>): void {
        return this.client.deleteFunction(
            this.ops["DeleteFunction"].apply(partialParams)
        );
    }

    invokeDeleteKeyGroup(partialParams: ToOptional<{
      [K in keyof DeleteKeyGroupRequest]: (DeleteKeyGroupRequest)[K]
    }>): void {
        return this.client.deleteKeyGroup(
            this.ops["DeleteKeyGroup"].apply(partialParams)
        );
    }

    invokeDeleteMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringSubscriptionRequest]: (DeleteMonitoringSubscriptionRequest)[K]
    }>): DeleteMonitoringSubscriptionResult {
        return this.client.deleteMonitoringSubscription(
            this.ops["DeleteMonitoringSubscription"].apply(partialParams)
        );
    }

    invokeDeleteOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof DeleteOriginRequestPolicyRequest]: (DeleteOriginRequestPolicyRequest)[K]
    }>): void {
        return this.client.deleteOriginRequestPolicy(
            this.ops["DeleteOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeDeletePublicKey(partialParams: ToOptional<{
      [K in keyof DeletePublicKeyRequest]: (DeletePublicKeyRequest)[K]
    }>): void {
        return this.client.deletePublicKey(
            this.ops["DeletePublicKey"].apply(partialParams)
        );
    }

    invokeDeleteResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof DeleteResponseHeadersPolicyRequest]: (DeleteResponseHeadersPolicyRequest)[K]
    }>): void {
        return this.client.deleteResponseHeadersPolicy(
            this.ops["DeleteResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeDeleteStreamingDistribution(partialParams: ToOptional<{
      [K in keyof DeleteStreamingDistributionRequest]: (DeleteStreamingDistributionRequest)[K]
    }>): void {
        return this.client.deleteStreamingDistribution(
            this.ops["DeleteStreamingDistribution"].apply(partialParams)
        );
    }

    invokeDescribeFunction(partialParams: ToOptional<{
      [K in keyof DescribeFunctionRequest]: (DescribeFunctionRequest)[K]
    }>): DescribeFunctionResult {
        return this.client.describeFunction(
            this.ops["DescribeFunction"].apply(partialParams)
        );
    }

    invokeGetCachePolicy(partialParams: ToOptional<{
      [K in keyof GetCachePolicyRequest]: (GetCachePolicyRequest)[K]
    }>): GetCachePolicyResult {
        return this.client.getCachePolicy(
            this.ops["GetCachePolicy"].apply(partialParams)
        );
    }

    invokeGetCachePolicyConfig(partialParams: ToOptional<{
      [K in keyof GetCachePolicyConfigRequest]: (GetCachePolicyConfigRequest)[K]
    }>): GetCachePolicyConfigResult {
        return this.client.getCachePolicyConfig(
            this.ops["GetCachePolicyConfig"].apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityRequest]: (GetCloudFrontOriginAccessIdentityRequest)[K]
    }>): GetCloudFrontOriginAccessIdentityResult {
        return this.client.getCloudFrontOriginAccessIdentity(
            this.ops["GetCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentityConfig(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityConfigRequest]: (GetCloudFrontOriginAccessIdentityConfigRequest)[K]
    }>): GetCloudFrontOriginAccessIdentityConfigResult {
        return this.client.getCloudFrontOriginAccessIdentityConfig(
            this.ops["GetCloudFrontOriginAccessIdentityConfig"].apply(partialParams)
        );
    }

    invokeGetDistribution(partialParams: ToOptional<{
      [K in keyof GetDistributionRequest]: (GetDistributionRequest)[K]
    }>): GetDistributionResult {
        return this.client.getDistribution(
            this.ops["GetDistribution"].apply(partialParams)
        );
    }

    invokeGetDistributionConfig(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigRequest]: (GetDistributionConfigRequest)[K]
    }>): GetDistributionConfigResult {
        return this.client.getDistributionConfig(
            this.ops["GetDistributionConfig"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryption(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionRequest]: (GetFieldLevelEncryptionRequest)[K]
    }>): GetFieldLevelEncryptionResult {
        return this.client.getFieldLevelEncryption(
            this.ops["GetFieldLevelEncryption"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionConfigRequest]: (GetFieldLevelEncryptionConfigRequest)[K]
    }>): GetFieldLevelEncryptionConfigResult {
        return this.client.getFieldLevelEncryptionConfig(
            this.ops["GetFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileRequest]: (GetFieldLevelEncryptionProfileRequest)[K]
    }>): GetFieldLevelEncryptionProfileResult {
        return this.client.getFieldLevelEncryptionProfile(
            this.ops["GetFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfileConfig(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileConfigRequest]: (GetFieldLevelEncryptionProfileConfigRequest)[K]
    }>): GetFieldLevelEncryptionProfileConfigResult {
        return this.client.getFieldLevelEncryptionProfileConfig(
            this.ops["GetFieldLevelEncryptionProfileConfig"].apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest]: (GetFunctionRequest)[K]
    }>): GetFunctionResult {
        return this.client.getFunction(
            this.ops["GetFunction"].apply(partialParams)
        );
    }

    invokeGetInvalidation(partialParams: ToOptional<{
      [K in keyof GetInvalidationRequest]: (GetInvalidationRequest)[K]
    }>): GetInvalidationResult {
        return this.client.getInvalidation(
            this.ops["GetInvalidation"].apply(partialParams)
        );
    }

    invokeGetKeyGroup(partialParams: ToOptional<{
      [K in keyof GetKeyGroupRequest]: (GetKeyGroupRequest)[K]
    }>): GetKeyGroupResult {
        return this.client.getKeyGroup(
            this.ops["GetKeyGroup"].apply(partialParams)
        );
    }

    invokeGetKeyGroupConfig(partialParams: ToOptional<{
      [K in keyof GetKeyGroupConfigRequest]: (GetKeyGroupConfigRequest)[K]
    }>): GetKeyGroupConfigResult {
        return this.client.getKeyGroupConfig(
            this.ops["GetKeyGroupConfig"].apply(partialParams)
        );
    }

    invokeGetMonitoringSubscription(partialParams: ToOptional<{
      [K in keyof GetMonitoringSubscriptionRequest]: (GetMonitoringSubscriptionRequest)[K]
    }>): GetMonitoringSubscriptionResult {
        return this.client.getMonitoringSubscription(
            this.ops["GetMonitoringSubscription"].apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyRequest]: (GetOriginRequestPolicyRequest)[K]
    }>): GetOriginRequestPolicyResult {
        return this.client.getOriginRequestPolicy(
            this.ops["GetOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicyConfig(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyConfigRequest]: (GetOriginRequestPolicyConfigRequest)[K]
    }>): GetOriginRequestPolicyConfigResult {
        return this.client.getOriginRequestPolicyConfig(
            this.ops["GetOriginRequestPolicyConfig"].apply(partialParams)
        );
    }

    invokeGetPublicKey(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest]: (GetPublicKeyRequest)[K]
    }>): GetPublicKeyResult {
        return this.client.getPublicKey(
            this.ops["GetPublicKey"].apply(partialParams)
        );
    }

    invokeGetPublicKeyConfig(partialParams: ToOptional<{
      [K in keyof GetPublicKeyConfigRequest]: (GetPublicKeyConfigRequest)[K]
    }>): GetPublicKeyConfigResult {
        return this.client.getPublicKeyConfig(
            this.ops["GetPublicKeyConfig"].apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyRequest]: (GetResponseHeadersPolicyRequest)[K]
    }>): GetResponseHeadersPolicyResult {
        return this.client.getResponseHeadersPolicy(
            this.ops["GetResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicyConfig(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyConfigRequest]: (GetResponseHeadersPolicyConfigRequest)[K]
    }>): GetResponseHeadersPolicyConfigResult {
        return this.client.getResponseHeadersPolicyConfig(
            this.ops["GetResponseHeadersPolicyConfig"].apply(partialParams)
        );
    }

    invokeGetStreamingDistribution(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionRequest]: (GetStreamingDistributionRequest)[K]
    }>): GetStreamingDistributionResult {
        return this.client.getStreamingDistribution(
            this.ops["GetStreamingDistribution"].apply(partialParams)
        );
    }

    invokeGetStreamingDistributionConfig(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionConfigRequest]: (GetStreamingDistributionConfigRequest)[K]
    }>): GetStreamingDistributionConfigResult {
        return this.client.getStreamingDistributionConfig(
            this.ops["GetStreamingDistributionConfig"].apply(partialParams)
        );
    }

    invokeListConflictingAliases(partialParams: ToOptional<{
      [K in keyof ListConflictingAliasesRequest]: (ListConflictingAliasesRequest)[K]
    }>): ListConflictingAliasesResult {
        return this.client.listConflictingAliases(
            this.ops["ListConflictingAliases"].apply(partialParams)
        );
    }

    invokeListDistributionsByCachePolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByCachePolicyIdRequest]: (ListDistributionsByCachePolicyIdRequest)[K]
    }>): ListDistributionsByCachePolicyIdResult {
        return this.client.listDistributionsByCachePolicyId(
            this.ops["ListDistributionsByCachePolicyId"].apply(partialParams)
        );
    }

    invokeListDistributionsByKeyGroup(partialParams: ToOptional<{
      [K in keyof ListDistributionsByKeyGroupRequest]: (ListDistributionsByKeyGroupRequest)[K]
    }>): ListDistributionsByKeyGroupResult {
        return this.client.listDistributionsByKeyGroup(
            this.ops["ListDistributionsByKeyGroup"].apply(partialParams)
        );
    }

    invokeListDistributionsByOriginRequestPolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByOriginRequestPolicyIdRequest]: (ListDistributionsByOriginRequestPolicyIdRequest)[K]
    }>): ListDistributionsByOriginRequestPolicyIdResult {
        return this.client.listDistributionsByOriginRequestPolicyId(
            this.ops["ListDistributionsByOriginRequestPolicyId"].apply(partialParams)
        );
    }

    invokeListDistributionsByResponseHeadersPolicyId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByResponseHeadersPolicyIdRequest]: (ListDistributionsByResponseHeadersPolicyIdRequest)[K]
    }>): ListDistributionsByResponseHeadersPolicyIdResult {
        return this.client.listDistributionsByResponseHeadersPolicyId(
            this.ops["ListDistributionsByResponseHeadersPolicyId"].apply(partialParams)
        );
    }

    invokeListDistributionsByWebACLId(partialParams: ToOptional<{
      [K in keyof ListDistributionsByWebACLIdRequest]: (ListDistributionsByWebACLIdRequest)[K]
    }>): ListDistributionsByWebACLIdResult {
        return this.client.listDistributionsByWebACLId(
            this.ops["ListDistributionsByWebACLId"].apply(partialParams)
        );
    }

    invokeListInvalidations(partialParams: ToOptional<{
      [K in keyof ListInvalidationsRequest]: (ListInvalidationsRequest)[K]
    }>): ListInvalidationsResult {
        return this.client.listInvalidations(
            this.ops["ListInvalidations"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResult {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePublishFunction(partialParams: ToOptional<{
      [K in keyof PublishFunctionRequest]: (PublishFunctionRequest)[K]
    }>): PublishFunctionResult {
        return this.client.publishFunction(
            this.ops["PublishFunction"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestFunction(partialParams: ToOptional<{
      [K in keyof TestFunctionRequest]: (TestFunctionRequest)[K]
    }>): TestFunctionResult {
        return this.client.testFunction(
            this.ops["TestFunction"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateCachePolicy(partialParams: ToOptional<{
      [K in keyof UpdateCachePolicyRequest]: (UpdateCachePolicyRequest)[K]
    }>): UpdateCachePolicyResult {
        return this.client.updateCachePolicy(
            this.ops["UpdateCachePolicy"].apply(partialParams)
        );
    }

    invokeUpdateCloudFrontOriginAccessIdentity(partialParams: ToOptional<{
      [K in keyof UpdateCloudFrontOriginAccessIdentityRequest]: (UpdateCloudFrontOriginAccessIdentityRequest)[K]
    }>): UpdateCloudFrontOriginAccessIdentityResult {
        return this.client.updateCloudFrontOriginAccessIdentity(
            this.ops["UpdateCloudFrontOriginAccessIdentity"].apply(partialParams)
        );
    }

    invokeUpdateDistribution(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest]: (UpdateDistributionRequest)[K]
    }>): UpdateDistributionResult {
        return this.client.updateDistribution(
            this.ops["UpdateDistribution"].apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionConfig(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionConfigRequest]: (UpdateFieldLevelEncryptionConfigRequest)[K]
    }>): UpdateFieldLevelEncryptionConfigResult {
        return this.client.updateFieldLevelEncryptionConfig(
            this.ops["UpdateFieldLevelEncryptionConfig"].apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionProfile(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionProfileRequest]: (UpdateFieldLevelEncryptionProfileRequest)[K]
    }>): UpdateFieldLevelEncryptionProfileResult {
        return this.client.updateFieldLevelEncryptionProfile(
            this.ops["UpdateFieldLevelEncryptionProfile"].apply(partialParams)
        );
    }

    invokeUpdateFunction(partialParams: ToOptional<{
      [K in keyof UpdateFunctionRequest]: (UpdateFunctionRequest)[K]
    }>): UpdateFunctionResult {
        return this.client.updateFunction(
            this.ops["UpdateFunction"].apply(partialParams)
        );
    }

    invokeUpdateKeyGroup(partialParams: ToOptional<{
      [K in keyof UpdateKeyGroupRequest]: (UpdateKeyGroupRequest)[K]
    }>): UpdateKeyGroupResult {
        return this.client.updateKeyGroup(
            this.ops["UpdateKeyGroup"].apply(partialParams)
        );
    }

    invokeUpdateOriginRequestPolicy(partialParams: ToOptional<{
      [K in keyof UpdateOriginRequestPolicyRequest]: (UpdateOriginRequestPolicyRequest)[K]
    }>): UpdateOriginRequestPolicyResult {
        return this.client.updateOriginRequestPolicy(
            this.ops["UpdateOriginRequestPolicy"].apply(partialParams)
        );
    }

    invokeUpdatePublicKey(partialParams: ToOptional<{
      [K in keyof UpdatePublicKeyRequest]: (UpdatePublicKeyRequest)[K]
    }>): UpdatePublicKeyResult {
        return this.client.updatePublicKey(
            this.ops["UpdatePublicKey"].apply(partialParams)
        );
    }

    invokeUpdateResponseHeadersPolicy(partialParams: ToOptional<{
      [K in keyof UpdateResponseHeadersPolicyRequest]: (UpdateResponseHeadersPolicyRequest)[K]
    }>): UpdateResponseHeadersPolicyResult {
        return this.client.updateResponseHeadersPolicy(
            this.ops["UpdateResponseHeadersPolicy"].apply(partialParams)
        );
    }

    invokeUpdateStreamingDistribution(partialParams: ToOptional<{
      [K in keyof UpdateStreamingDistributionRequest]: (UpdateStreamingDistributionRequest)[K]
    }>): UpdateStreamingDistributionResult {
        return this.client.updateStreamingDistribution(
            this.ops["UpdateStreamingDistribution"].apply(partialParams)
        );
    }
}