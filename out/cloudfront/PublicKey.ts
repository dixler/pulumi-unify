
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
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
    DeleteMonitoringSubscriptionRequest,
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
    GetRealtimeLogConfigRequest,
    GetResponseHeadersPolicyRequest,
    GetResponseHeadersPolicyConfigRequest,
    GetStreamingDistributionRequest,
    GetStreamingDistributionConfigRequest,
    ListCachePoliciesRequest,
    ListCloudFrontOriginAccessIdentitiesRequest,
    ListConflictingAliasesRequest,
    ListDistributionsRequest,
    ListDistributionsByCachePolicyIdRequest,
    ListDistributionsByKeyGroupRequest,
    ListDistributionsByOriginRequestPolicyIdRequest,
    ListDistributionsByRealtimeLogConfigRequest,
    ListDistributionsByResponseHeadersPolicyIdRequest,
    ListDistributionsByWebACLIdRequest,
    ListFieldLevelEncryptionConfigsRequest,
    ListFieldLevelEncryptionProfilesRequest,
    ListFunctionsRequest,
    ListInvalidationsRequest,
    ListKeyGroupsRequest,
    ListOriginRequestPoliciesRequest,
    ListPublicKeysRequest,
    ListRealtimeLogConfigsRequest,
    ListResponseHeadersPoliciesRequest,
    ListStreamingDistributionsRequest,
    ListTagsForResourceRequest,
    PublishFunctionRequest,
    TestFunctionRequest,
    UpdateCachePolicyRequest,
    UpdateCloudFrontOriginAccessIdentityRequest,
    UpdateDistributionRequest,
    UpdateFieldLevelEncryptionConfigRequest,
    UpdateFieldLevelEncryptionProfileRequest,
    UpdateFunctionRequest,
    UpdateKeyGroupRequest,
    UpdateOriginRequestPolicyRequest,
    UpdatePublicKeyRequest,
    UpdateRealtimeLogConfigRequest,
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
    GetRealtimeLogConfigResult,
    GetResponseHeadersPolicyResult,
    GetResponseHeadersPolicyConfigResult,
    GetStreamingDistributionResult,
    GetStreamingDistributionConfigResult,
    ListCachePoliciesResult,
    ListCloudFrontOriginAccessIdentitiesResult,
    ListConflictingAliasesResult,
    ListDistributionsResult,
    ListDistributionsByCachePolicyIdResult,
    ListDistributionsByKeyGroupResult,
    ListDistributionsByOriginRequestPolicyIdResult,
    ListDistributionsByRealtimeLogConfigResult,
    ListDistributionsByResponseHeadersPolicyIdResult,
    ListDistributionsByWebACLIdResult,
    ListFieldLevelEncryptionConfigsResult,
    ListFieldLevelEncryptionProfilesResult,
    ListFunctionsResult,
    ListInvalidationsResult,
    ListKeyGroupsResult,
    ListOriginRequestPoliciesResult,
    ListPublicKeysResult,
    ListRealtimeLogConfigsResult,
    ListResponseHeadersPoliciesResult,
    ListStreamingDistributionsResult,
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
    UpdateRealtimeLogConfigResult,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudfront.PublicKey>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudFront()
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

    invokeCreateCachePolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateCachePolicyRequest]: (CreateCachePolicyRequest)[K]
    }>): Request<CreateCachePolicyResult, AWSError> {
        this.boot();
        return this.client.createCachePolicy2020_05_31(
          this.ops["CreateCachePolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateCloudFrontOriginAccessIdentity2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateCloudFrontOriginAccessIdentityRequest]: (CreateCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<CreateCloudFrontOriginAccessIdentityResult, AWSError> {
        this.boot();
        return this.client.createCloudFrontOriginAccessIdentity2020_05_31(
          this.ops["CreateCloudFrontOriginAccessIdentity2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateDistribution2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest]: (CreateDistributionRequest)[K]
    }>): Request<CreateDistributionResult, AWSError> {
        this.boot();
        return this.client.createDistribution2020_05_31(
          this.ops["CreateDistribution2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateDistributionWithTags2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateDistributionWithTagsRequest]: (CreateDistributionWithTagsRequest)[K]
    }>): Request<CreateDistributionWithTagsResult, AWSError> {
        this.boot();
        return this.client.createDistributionWithTags2020_05_31(
          this.ops["CreateDistributionWithTags2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionConfigRequest]: (CreateFieldLevelEncryptionConfigRequest)[K]
    }>): Request<CreateFieldLevelEncryptionConfigResult, AWSError> {
        this.boot();
        return this.client.createFieldLevelEncryptionConfig2020_05_31(
          this.ops["CreateFieldLevelEncryptionConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateFieldLevelEncryptionProfile2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateFieldLevelEncryptionProfileRequest]: (CreateFieldLevelEncryptionProfileRequest)[K]
    }>): Request<CreateFieldLevelEncryptionProfileResult, AWSError> {
        this.boot();
        return this.client.createFieldLevelEncryptionProfile2020_05_31(
          this.ops["CreateFieldLevelEncryptionProfile2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof Omit<CreateFunctionRequest, "Name">]: (CreateFunctionRequest)[K]
    }>): Request<CreateFunctionResult, AWSError> {
        this.boot();
        return this.client.createFunction2020_05_31(
          this.ops["CreateFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateInvalidation2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateInvalidationRequest]: (CreateInvalidationRequest)[K]
    }>): Request<CreateInvalidationResult, AWSError> {
        this.boot();
        return this.client.createInvalidation2020_05_31(
          this.ops["CreateInvalidation2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateKeyGroup2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateKeyGroupRequest]: (CreateKeyGroupRequest)[K]
    }>): Request<CreateKeyGroupResult, AWSError> {
        this.boot();
        return this.client.createKeyGroup2020_05_31(
          this.ops["CreateKeyGroup2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateMonitoringSubscription2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateMonitoringSubscriptionRequest]: (CreateMonitoringSubscriptionRequest)[K]
    }>): Request<CreateMonitoringSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createMonitoringSubscription2020_05_31(
          this.ops["CreateMonitoringSubscription2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateOriginRequestPolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateOriginRequestPolicyRequest]: (CreateOriginRequestPolicyRequest)[K]
    }>): Request<CreateOriginRequestPolicyResult, AWSError> {
        this.boot();
        return this.client.createOriginRequestPolicy2020_05_31(
          this.ops["CreateOriginRequestPolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeCreatePublicKey2020_05_31(partialParams: ToOptional<{
      [K in keyof CreatePublicKeyRequest]: (CreatePublicKeyRequest)[K]
    }>): Request<CreatePublicKeyResult, AWSError> {
        this.boot();
        return this.client.createPublicKey2020_05_31(
          this.ops["CreatePublicKey2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateRealtimeLogConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateRealtimeLogConfigRequest & keyof Omit<CreateRealtimeLogConfigRequest, "Name">]: (CreateRealtimeLogConfigRequest)[K]
    }>): Request<CreateRealtimeLogConfigResult, AWSError> {
        this.boot();
        return this.client.createRealtimeLogConfig2020_05_31(
          this.ops["CreateRealtimeLogConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateResponseHeadersPolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateResponseHeadersPolicyRequest]: (CreateResponseHeadersPolicyRequest)[K]
    }>): Request<CreateResponseHeadersPolicyResult, AWSError> {
        this.boot();
        return this.client.createResponseHeadersPolicy2020_05_31(
          this.ops["CreateResponseHeadersPolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateStreamingDistribution2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionRequest]: (CreateStreamingDistributionRequest)[K]
    }>): Request<CreateStreamingDistributionResult, AWSError> {
        this.boot();
        return this.client.createStreamingDistribution2020_05_31(
          this.ops["CreateStreamingDistribution2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateStreamingDistributionWithTags2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateStreamingDistributionWithTagsRequest]: (CreateStreamingDistributionWithTagsRequest)[K]
    }>): Request<CreateStreamingDistributionWithTagsResult, AWSError> {
        this.boot();
        return this.client.createStreamingDistributionWithTags2020_05_31(
          this.ops["CreateStreamingDistributionWithTags2020_05_31"].apply(partialParams)
        );
    }

    invokeDeleteMonitoringSubscription2020_05_31(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringSubscriptionRequest]: (DeleteMonitoringSubscriptionRequest)[K]
    }>): Request<DeleteMonitoringSubscriptionResult, AWSError> {
        this.boot();
        return this.client.deleteMonitoringSubscription2020_05_31(
          this.ops["DeleteMonitoringSubscription2020_05_31"].apply(partialParams)
        );
    }

    invokeDescribeFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof DescribeFunctionRequest & keyof Omit<DescribeFunctionRequest, "Name">]: (DescribeFunctionRequest)[K]
    }>): Request<DescribeFunctionResult, AWSError> {
        this.boot();
        return this.client.describeFunction2020_05_31(
          this.ops["DescribeFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeGetCachePolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof GetCachePolicyRequest]: (GetCachePolicyRequest)[K]
    }>): Request<GetCachePolicyResult, AWSError> {
        this.boot();
        return this.client.getCachePolicy2020_05_31(
          this.ops["GetCachePolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeGetCachePolicyConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetCachePolicyConfigRequest]: (GetCachePolicyConfigRequest)[K]
    }>): Request<GetCachePolicyConfigResult, AWSError> {
        this.boot();
        return this.client.getCachePolicyConfig2020_05_31(
          this.ops["GetCachePolicyConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentity2020_05_31(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityRequest]: (GetCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<GetCloudFrontOriginAccessIdentityResult, AWSError> {
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentity2020_05_31(
          this.ops["GetCloudFrontOriginAccessIdentity2020_05_31"].apply(partialParams)
        );
    }

    invokeGetCloudFrontOriginAccessIdentityConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetCloudFrontOriginAccessIdentityConfigRequest]: (GetCloudFrontOriginAccessIdentityConfigRequest)[K]
    }>): Request<GetCloudFrontOriginAccessIdentityConfigResult, AWSError> {
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentityConfig2020_05_31(
          this.ops["GetCloudFrontOriginAccessIdentityConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetDistribution2020_05_31(partialParams: ToOptional<{
      [K in keyof GetDistributionRequest]: (GetDistributionRequest)[K]
    }>): Request<GetDistributionResult, AWSError> {
        this.boot();
        return this.client.getDistribution2020_05_31(
          this.ops["GetDistribution2020_05_31"].apply(partialParams)
        );
    }

    invokeGetDistributionConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetDistributionConfigRequest]: (GetDistributionConfigRequest)[K]
    }>): Request<GetDistributionConfigResult, AWSError> {
        this.boot();
        return this.client.getDistributionConfig2020_05_31(
          this.ops["GetDistributionConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryption2020_05_31(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionRequest]: (GetFieldLevelEncryptionRequest)[K]
    }>): Request<GetFieldLevelEncryptionResult, AWSError> {
        this.boot();
        return this.client.getFieldLevelEncryption2020_05_31(
          this.ops["GetFieldLevelEncryption2020_05_31"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionConfigRequest]: (GetFieldLevelEncryptionConfigRequest)[K]
    }>): Request<GetFieldLevelEncryptionConfigResult, AWSError> {
        this.boot();
        return this.client.getFieldLevelEncryptionConfig2020_05_31(
          this.ops["GetFieldLevelEncryptionConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfile2020_05_31(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileRequest]: (GetFieldLevelEncryptionProfileRequest)[K]
    }>): Request<GetFieldLevelEncryptionProfileResult, AWSError> {
        this.boot();
        return this.client.getFieldLevelEncryptionProfile2020_05_31(
          this.ops["GetFieldLevelEncryptionProfile2020_05_31"].apply(partialParams)
        );
    }

    invokeGetFieldLevelEncryptionProfileConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetFieldLevelEncryptionProfileConfigRequest]: (GetFieldLevelEncryptionProfileConfigRequest)[K]
    }>): Request<GetFieldLevelEncryptionProfileConfigResult, AWSError> {
        this.boot();
        return this.client.getFieldLevelEncryptionProfileConfig2020_05_31(
          this.ops["GetFieldLevelEncryptionProfileConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof Omit<GetFunctionRequest, "Name">]: (GetFunctionRequest)[K]
    }>): Request<GetFunctionResult, AWSError> {
        this.boot();
        return this.client.getFunction2020_05_31(
          this.ops["GetFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeGetInvalidation2020_05_31(partialParams: ToOptional<{
      [K in keyof GetInvalidationRequest]: (GetInvalidationRequest)[K]
    }>): Request<GetInvalidationResult, AWSError> {
        this.boot();
        return this.client.getInvalidation2020_05_31(
          this.ops["GetInvalidation2020_05_31"].apply(partialParams)
        );
    }

    invokeGetKeyGroup2020_05_31(partialParams: ToOptional<{
      [K in keyof GetKeyGroupRequest]: (GetKeyGroupRequest)[K]
    }>): Request<GetKeyGroupResult, AWSError> {
        this.boot();
        return this.client.getKeyGroup2020_05_31(
          this.ops["GetKeyGroup2020_05_31"].apply(partialParams)
        );
    }

    invokeGetKeyGroupConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetKeyGroupConfigRequest]: (GetKeyGroupConfigRequest)[K]
    }>): Request<GetKeyGroupConfigResult, AWSError> {
        this.boot();
        return this.client.getKeyGroupConfig2020_05_31(
          this.ops["GetKeyGroupConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetMonitoringSubscription2020_05_31(partialParams: ToOptional<{
      [K in keyof GetMonitoringSubscriptionRequest]: (GetMonitoringSubscriptionRequest)[K]
    }>): Request<GetMonitoringSubscriptionResult, AWSError> {
        this.boot();
        return this.client.getMonitoringSubscription2020_05_31(
          this.ops["GetMonitoringSubscription2020_05_31"].apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyRequest]: (GetOriginRequestPolicyRequest)[K]
    }>): Request<GetOriginRequestPolicyResult, AWSError> {
        this.boot();
        return this.client.getOriginRequestPolicy2020_05_31(
          this.ops["GetOriginRequestPolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeGetOriginRequestPolicyConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetOriginRequestPolicyConfigRequest]: (GetOriginRequestPolicyConfigRequest)[K]
    }>): Request<GetOriginRequestPolicyConfigResult, AWSError> {
        this.boot();
        return this.client.getOriginRequestPolicyConfig2020_05_31(
          this.ops["GetOriginRequestPolicyConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetPublicKey2020_05_31(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest]: (GetPublicKeyRequest)[K]
    }>): Request<GetPublicKeyResult, AWSError> {
        this.boot();
        return this.client.getPublicKey2020_05_31(
          this.ops["GetPublicKey2020_05_31"].apply(partialParams)
        );
    }

    invokeGetPublicKeyConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetPublicKeyConfigRequest]: (GetPublicKeyConfigRequest)[K]
    }>): Request<GetPublicKeyConfigResult, AWSError> {
        this.boot();
        return this.client.getPublicKeyConfig2020_05_31(
          this.ops["GetPublicKeyConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetRealtimeLogConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetRealtimeLogConfigRequest]: (GetRealtimeLogConfigRequest)[K]
    }>): Request<GetRealtimeLogConfigResult, AWSError> {
        this.boot();
        return this.client.getRealtimeLogConfig2020_05_31(
          this.ops["GetRealtimeLogConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyRequest]: (GetResponseHeadersPolicyRequest)[K]
    }>): Request<GetResponseHeadersPolicyResult, AWSError> {
        this.boot();
        return this.client.getResponseHeadersPolicy2020_05_31(
          this.ops["GetResponseHeadersPolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeGetResponseHeadersPolicyConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetResponseHeadersPolicyConfigRequest]: (GetResponseHeadersPolicyConfigRequest)[K]
    }>): Request<GetResponseHeadersPolicyConfigResult, AWSError> {
        this.boot();
        return this.client.getResponseHeadersPolicyConfig2020_05_31(
          this.ops["GetResponseHeadersPolicyConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeGetStreamingDistribution2020_05_31(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionRequest]: (GetStreamingDistributionRequest)[K]
    }>): Request<GetStreamingDistributionResult, AWSError> {
        this.boot();
        return this.client.getStreamingDistribution2020_05_31(
          this.ops["GetStreamingDistribution2020_05_31"].apply(partialParams)
        );
    }

    invokeGetStreamingDistributionConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof GetStreamingDistributionConfigRequest]: (GetStreamingDistributionConfigRequest)[K]
    }>): Request<GetStreamingDistributionConfigResult, AWSError> {
        this.boot();
        return this.client.getStreamingDistributionConfig2020_05_31(
          this.ops["GetStreamingDistributionConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeListCachePolicies2020_05_31(partialParams: ToOptional<{
      [K in keyof ListCachePoliciesRequest]: (ListCachePoliciesRequest)[K]
    }>): Request<ListCachePoliciesResult, AWSError> {
        this.boot();
        return this.client.listCachePolicies2020_05_31(
          this.ops["ListCachePolicies2020_05_31"].apply(partialParams)
        );
    }

    invokeListCloudFrontOriginAccessIdentities2020_05_31(partialParams: ToOptional<{
      [K in keyof ListCloudFrontOriginAccessIdentitiesRequest]: (ListCloudFrontOriginAccessIdentitiesRequest)[K]
    }>): Request<ListCloudFrontOriginAccessIdentitiesResult, AWSError> {
        this.boot();
        return this.client.listCloudFrontOriginAccessIdentities2020_05_31(
          this.ops["ListCloudFrontOriginAccessIdentities2020_05_31"].apply(partialParams)
        );
    }

    invokeListConflictingAliases2020_05_31(partialParams: ToOptional<{
      [K in keyof ListConflictingAliasesRequest]: (ListConflictingAliasesRequest)[K]
    }>): Request<ListConflictingAliasesResult, AWSError> {
        this.boot();
        return this.client.listConflictingAliases2020_05_31(
          this.ops["ListConflictingAliases2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributions2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsRequest]: (ListDistributionsRequest)[K]
    }>): Request<ListDistributionsResult, AWSError> {
        this.boot();
        return this.client.listDistributions2020_05_31(
          this.ops["ListDistributions2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributionsByCachePolicyId2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsByCachePolicyIdRequest]: (ListDistributionsByCachePolicyIdRequest)[K]
    }>): Request<ListDistributionsByCachePolicyIdResult, AWSError> {
        this.boot();
        return this.client.listDistributionsByCachePolicyId2020_05_31(
          this.ops["ListDistributionsByCachePolicyId2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributionsByKeyGroup2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsByKeyGroupRequest]: (ListDistributionsByKeyGroupRequest)[K]
    }>): Request<ListDistributionsByKeyGroupResult, AWSError> {
        this.boot();
        return this.client.listDistributionsByKeyGroup2020_05_31(
          this.ops["ListDistributionsByKeyGroup2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributionsByOriginRequestPolicyId2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsByOriginRequestPolicyIdRequest]: (ListDistributionsByOriginRequestPolicyIdRequest)[K]
    }>): Request<ListDistributionsByOriginRequestPolicyIdResult, AWSError> {
        this.boot();
        return this.client.listDistributionsByOriginRequestPolicyId2020_05_31(
          this.ops["ListDistributionsByOriginRequestPolicyId2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributionsByRealtimeLogConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsByRealtimeLogConfigRequest]: (ListDistributionsByRealtimeLogConfigRequest)[K]
    }>): Request<ListDistributionsByRealtimeLogConfigResult, AWSError> {
        this.boot();
        return this.client.listDistributionsByRealtimeLogConfig2020_05_31(
          this.ops["ListDistributionsByRealtimeLogConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributionsByResponseHeadersPolicyId2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsByResponseHeadersPolicyIdRequest]: (ListDistributionsByResponseHeadersPolicyIdRequest)[K]
    }>): Request<ListDistributionsByResponseHeadersPolicyIdResult, AWSError> {
        this.boot();
        return this.client.listDistributionsByResponseHeadersPolicyId2020_05_31(
          this.ops["ListDistributionsByResponseHeadersPolicyId2020_05_31"].apply(partialParams)
        );
    }

    invokeListDistributionsByWebACLId2020_05_31(partialParams: ToOptional<{
      [K in keyof ListDistributionsByWebACLIdRequest]: (ListDistributionsByWebACLIdRequest)[K]
    }>): Request<ListDistributionsByWebACLIdResult, AWSError> {
        this.boot();
        return this.client.listDistributionsByWebACLId2020_05_31(
          this.ops["ListDistributionsByWebACLId2020_05_31"].apply(partialParams)
        );
    }

    invokeListFieldLevelEncryptionConfigs2020_05_31(partialParams: ToOptional<{
      [K in keyof ListFieldLevelEncryptionConfigsRequest]: (ListFieldLevelEncryptionConfigsRequest)[K]
    }>): Request<ListFieldLevelEncryptionConfigsResult, AWSError> {
        this.boot();
        return this.client.listFieldLevelEncryptionConfigs2020_05_31(
          this.ops["ListFieldLevelEncryptionConfigs2020_05_31"].apply(partialParams)
        );
    }

    invokeListFieldLevelEncryptionProfiles2020_05_31(partialParams: ToOptional<{
      [K in keyof ListFieldLevelEncryptionProfilesRequest]: (ListFieldLevelEncryptionProfilesRequest)[K]
    }>): Request<ListFieldLevelEncryptionProfilesResult, AWSError> {
        this.boot();
        return this.client.listFieldLevelEncryptionProfiles2020_05_31(
          this.ops["ListFieldLevelEncryptionProfiles2020_05_31"].apply(partialParams)
        );
    }

    invokeListFunctions2020_05_31(partialParams: ToOptional<{
      [K in keyof ListFunctionsRequest]: (ListFunctionsRequest)[K]
    }>): Request<ListFunctionsResult, AWSError> {
        this.boot();
        return this.client.listFunctions2020_05_31(
          this.ops["ListFunctions2020_05_31"].apply(partialParams)
        );
    }

    invokeListInvalidations2020_05_31(partialParams: ToOptional<{
      [K in keyof ListInvalidationsRequest]: (ListInvalidationsRequest)[K]
    }>): Request<ListInvalidationsResult, AWSError> {
        this.boot();
        return this.client.listInvalidations2020_05_31(
          this.ops["ListInvalidations2020_05_31"].apply(partialParams)
        );
    }

    invokeListKeyGroups2020_05_31(partialParams: ToOptional<{
      [K in keyof ListKeyGroupsRequest]: (ListKeyGroupsRequest)[K]
    }>): Request<ListKeyGroupsResult, AWSError> {
        this.boot();
        return this.client.listKeyGroups2020_05_31(
          this.ops["ListKeyGroups2020_05_31"].apply(partialParams)
        );
    }

    invokeListOriginRequestPolicies2020_05_31(partialParams: ToOptional<{
      [K in keyof ListOriginRequestPoliciesRequest]: (ListOriginRequestPoliciesRequest)[K]
    }>): Request<ListOriginRequestPoliciesResult, AWSError> {
        this.boot();
        return this.client.listOriginRequestPolicies2020_05_31(
          this.ops["ListOriginRequestPolicies2020_05_31"].apply(partialParams)
        );
    }

    invokeListPublicKeys2020_05_31(partialParams: ToOptional<{
      [K in keyof ListPublicKeysRequest]: (ListPublicKeysRequest)[K]
    }>): Request<ListPublicKeysResult, AWSError> {
        this.boot();
        return this.client.listPublicKeys2020_05_31(
          this.ops["ListPublicKeys2020_05_31"].apply(partialParams)
        );
    }

    invokeListRealtimeLogConfigs2020_05_31(partialParams: ToOptional<{
      [K in keyof ListRealtimeLogConfigsRequest]: (ListRealtimeLogConfigsRequest)[K]
    }>): Request<ListRealtimeLogConfigsResult, AWSError> {
        this.boot();
        return this.client.listRealtimeLogConfigs2020_05_31(
          this.ops["ListRealtimeLogConfigs2020_05_31"].apply(partialParams)
        );
    }

    invokeListResponseHeadersPolicies2020_05_31(partialParams: ToOptional<{
      [K in keyof ListResponseHeadersPoliciesRequest]: (ListResponseHeadersPoliciesRequest)[K]
    }>): Request<ListResponseHeadersPoliciesResult, AWSError> {
        this.boot();
        return this.client.listResponseHeadersPolicies2020_05_31(
          this.ops["ListResponseHeadersPolicies2020_05_31"].apply(partialParams)
        );
    }

    invokeListStreamingDistributions2020_05_31(partialParams: ToOptional<{
      [K in keyof ListStreamingDistributionsRequest]: (ListStreamingDistributionsRequest)[K]
    }>): Request<ListStreamingDistributionsResult, AWSError> {
        this.boot();
        return this.client.listStreamingDistributions2020_05_31(
          this.ops["ListStreamingDistributions2020_05_31"].apply(partialParams)
        );
    }

    invokeListTagsForResource2020_05_31(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResult, AWSError> {
        this.boot();
        return this.client.listTagsForResource2020_05_31(
          this.ops["ListTagsForResource2020_05_31"].apply(partialParams)
        );
    }

    invokePublishFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof PublishFunctionRequest & keyof Omit<PublishFunctionRequest, "Name">]: (PublishFunctionRequest)[K]
    }>): Request<PublishFunctionResult, AWSError> {
        this.boot();
        return this.client.publishFunction2020_05_31(
          this.ops["PublishFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeTestFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof TestFunctionRequest & keyof Omit<TestFunctionRequest, "Name">]: (TestFunctionRequest)[K]
    }>): Request<TestFunctionResult, AWSError> {
        this.boot();
        return this.client.testFunction2020_05_31(
          this.ops["TestFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateCachePolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateCachePolicyRequest]: (UpdateCachePolicyRequest)[K]
    }>): Request<UpdateCachePolicyResult, AWSError> {
        this.boot();
        return this.client.updateCachePolicy2020_05_31(
          this.ops["UpdateCachePolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateCloudFrontOriginAccessIdentity2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateCloudFrontOriginAccessIdentityRequest]: (UpdateCloudFrontOriginAccessIdentityRequest)[K]
    }>): Request<UpdateCloudFrontOriginAccessIdentityResult, AWSError> {
        this.boot();
        return this.client.updateCloudFrontOriginAccessIdentity2020_05_31(
          this.ops["UpdateCloudFrontOriginAccessIdentity2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateDistribution2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest]: (UpdateDistributionRequest)[K]
    }>): Request<UpdateDistributionResult, AWSError> {
        this.boot();
        return this.client.updateDistribution2020_05_31(
          this.ops["UpdateDistribution2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionConfigRequest]: (UpdateFieldLevelEncryptionConfigRequest)[K]
    }>): Request<UpdateFieldLevelEncryptionConfigResult, AWSError> {
        this.boot();
        return this.client.updateFieldLevelEncryptionConfig2020_05_31(
          this.ops["UpdateFieldLevelEncryptionConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateFieldLevelEncryptionProfile2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateFieldLevelEncryptionProfileRequest]: (UpdateFieldLevelEncryptionProfileRequest)[K]
    }>): Request<UpdateFieldLevelEncryptionProfileResult, AWSError> {
        this.boot();
        return this.client.updateFieldLevelEncryptionProfile2020_05_31(
          this.ops["UpdateFieldLevelEncryptionProfile2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateFunction2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateFunctionRequest & keyof Omit<UpdateFunctionRequest, "Name">]: (UpdateFunctionRequest)[K]
    }>): Request<UpdateFunctionResult, AWSError> {
        this.boot();
        return this.client.updateFunction2020_05_31(
          this.ops["UpdateFunction2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateKeyGroup2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateKeyGroupRequest]: (UpdateKeyGroupRequest)[K]
    }>): Request<UpdateKeyGroupResult, AWSError> {
        this.boot();
        return this.client.updateKeyGroup2020_05_31(
          this.ops["UpdateKeyGroup2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateOriginRequestPolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateOriginRequestPolicyRequest]: (UpdateOriginRequestPolicyRequest)[K]
    }>): Request<UpdateOriginRequestPolicyResult, AWSError> {
        this.boot();
        return this.client.updateOriginRequestPolicy2020_05_31(
          this.ops["UpdateOriginRequestPolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdatePublicKey2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdatePublicKeyRequest]: (UpdatePublicKeyRequest)[K]
    }>): Request<UpdatePublicKeyResult, AWSError> {
        this.boot();
        return this.client.updatePublicKey2020_05_31(
          this.ops["UpdatePublicKey2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateRealtimeLogConfig2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateRealtimeLogConfigRequest]: (UpdateRealtimeLogConfigRequest)[K]
    }>): Request<UpdateRealtimeLogConfigResult, AWSError> {
        this.boot();
        return this.client.updateRealtimeLogConfig2020_05_31(
          this.ops["UpdateRealtimeLogConfig2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateResponseHeadersPolicy2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateResponseHeadersPolicyRequest]: (UpdateResponseHeadersPolicyRequest)[K]
    }>): Request<UpdateResponseHeadersPolicyResult, AWSError> {
        this.boot();
        return this.client.updateResponseHeadersPolicy2020_05_31(
          this.ops["UpdateResponseHeadersPolicy2020_05_31"].apply(partialParams)
        );
    }

    invokeUpdateStreamingDistribution2020_05_31(partialParams: ToOptional<{
      [K in keyof UpdateStreamingDistributionRequest]: (UpdateStreamingDistributionRequest)[K]
    }>): Request<UpdateStreamingDistributionResult, AWSError> {
        this.boot();
        return this.client.updateStreamingDistribution2020_05_31(
          this.ops["UpdateStreamingDistribution2020_05_31"].apply(partialParams)
        );
    }
}