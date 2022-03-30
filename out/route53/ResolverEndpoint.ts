
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ActivateKeySigningKeyRequest,
    AssociateVPCWithHostedZoneRequest,
    ChangeResourceRecordSetsRequest,
    ChangeTagsForResourceRequest,
    CreateHealthCheckRequest,
    CreateHostedZoneRequest,
    CreateKeySigningKeyRequest,
    CreateQueryLoggingConfigRequest,
    CreateReusableDelegationSetRequest,
    CreateTrafficPolicyRequest,
    CreateTrafficPolicyInstanceRequest,
    CreateTrafficPolicyVersionRequest,
    CreateVPCAssociationAuthorizationRequest,
    DeactivateKeySigningKeyRequest,
    DeleteHealthCheckRequest,
    DeleteHostedZoneRequest,
    DeleteKeySigningKeyRequest,
    DeleteQueryLoggingConfigRequest,
    DeleteReusableDelegationSetRequest,
    DeleteTrafficPolicyRequest,
    DeleteTrafficPolicyInstanceRequest,
    DeleteVPCAssociationAuthorizationRequest,
    DisableHostedZoneDNSSECRequest,
    DisassociateVPCFromHostedZoneRequest,
    EnableHostedZoneDNSSECRequest,
    GetAccountLimitRequest,
    GetChangeRequest,
    GetDNSSECRequest,
    GetHealthCheckRequest,
    GetHealthCheckLastFailureReasonRequest,
    GetHealthCheckStatusRequest,
    GetHostedZoneRequest,
    GetHostedZoneLimitRequest,
    GetQueryLoggingConfigRequest,
    GetReusableDelegationSetRequest,
    GetReusableDelegationSetLimitRequest,
    GetTrafficPolicyRequest,
    GetTrafficPolicyInstanceRequest,
    ListHostedZonesByVPCRequest,
    ListResourceRecordSetsRequest,
    ListTagsForResourceRequest,
    ListTagsForResourcesRequest,
    ListTrafficPolicyInstancesByHostedZoneRequest,
    ListTrafficPolicyInstancesByPolicyRequest,
    ListTrafficPolicyVersionsRequest,
    ListVPCAssociationAuthorizationsRequest,
    TestDNSAnswerRequest,
    UpdateHealthCheckRequest,
    UpdateHostedZoneCommentRequest,
    UpdateTrafficPolicyCommentRequest,
    UpdateTrafficPolicyInstanceRequest,
    ActivateKeySigningKeyResponse,
    AssociateVPCWithHostedZoneResponse,
    ChangeResourceRecordSetsResponse,
    ChangeTagsForResourceResponse,
    CreateHealthCheckResponse,
    CreateHostedZoneResponse,
    CreateKeySigningKeyResponse,
    CreateQueryLoggingConfigResponse,
    CreateReusableDelegationSetResponse,
    CreateTrafficPolicyResponse,
    CreateTrafficPolicyInstanceResponse,
    CreateTrafficPolicyVersionResponse,
    CreateVPCAssociationAuthorizationResponse,
    DeactivateKeySigningKeyResponse,
    DeleteHealthCheckResponse,
    DeleteHostedZoneResponse,
    DeleteKeySigningKeyResponse,
    DeleteQueryLoggingConfigResponse,
    DeleteReusableDelegationSetResponse,
    DeleteTrafficPolicyResponse,
    DeleteTrafficPolicyInstanceResponse,
    DeleteVPCAssociationAuthorizationResponse,
    DisableHostedZoneDNSSECResponse,
    DisassociateVPCFromHostedZoneResponse,
    EnableHostedZoneDNSSECResponse,
    GetAccountLimitResponse,
    GetChangeResponse,
    GetDNSSECResponse,
    GetHealthCheckResponse,
    GetHealthCheckLastFailureReasonResponse,
    GetHealthCheckStatusResponse,
    GetHostedZoneResponse,
    GetHostedZoneLimitResponse,
    GetQueryLoggingConfigResponse,
    GetReusableDelegationSetResponse,
    GetReusableDelegationSetLimitResponse,
    GetTrafficPolicyResponse,
    GetTrafficPolicyInstanceResponse,
    ListHostedZonesByVPCResponse,
    ListResourceRecordSetsResponse,
    ListTagsForResourceResponse,
    ListTagsForResourcesResponse,
    ListTrafficPolicyInstancesByHostedZoneResponse,
    ListTrafficPolicyInstancesByPolicyResponse,
    ListTrafficPolicyVersionsResponse,
    ListVPCAssociationAuthorizationsResponse,
    TestDNSAnswerResponse,
    UpdateHealthCheckResponse,
    UpdateHostedZoneCommentResponse,
    UpdateTrafficPolicyCommentResponse,
    UpdateTrafficPolicyInstanceResponse
} from "aws-sdk/clients/route53";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.route53.ResolverEndpoint {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.route53.ResolverEndpoint>) {
        super(...args)
        this.client = new awssdk.Route53()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/route53-2013-04-01.normal.json"), this.client)
    }

    invokeActivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest]: (ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest)[K]
    }>): ActivateKeySigningKeyResponse {
        return this.client.activateKeySigningKey(
            this.ops["ActivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeAssociateVPCWithHostedZone(partialParams: ToOptional<{
      [K in keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest]: (AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest)[K]
    }>): AssociateVPCWithHostedZoneResponse {
        return this.client.associateVPCWithHostedZone(
            this.ops["AssociateVPCWithHostedZone"].apply(partialParams)
        );
    }

    invokeChangeResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest]: (ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest)[K]
    }>): ChangeResourceRecordSetsResponse {
        return this.client.changeResourceRecordSets(
            this.ops["ChangeResourceRecordSets"].apply(partialParams)
        );
    }

    invokeChangeTagsForResource(partialParams: ToOptional<{
      [K in keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest]: (ChangeTagsForResourceRequest & ChangeTagsForResourceRequest & ChangeTagsForResourceRequest & ChangeTagsForResourceRequest)[K]
    }>): ChangeTagsForResourceResponse {
        return this.client.changeTagsForResource(
            this.ops["ChangeTagsForResource"].apply(partialParams)
        );
    }

    invokeCreateHealthCheck(partialParams: ToOptional<{
      [K in keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest]: (CreateHealthCheckRequest & CreateHealthCheckRequest & CreateHealthCheckRequest & CreateHealthCheckRequest)[K]
    }>): CreateHealthCheckResponse {
        return this.client.createHealthCheck(
            this.ops["CreateHealthCheck"].apply(partialParams)
        );
    }

    invokeCreateHostedZone(partialParams: ToOptional<{
      [K in keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest]: (CreateHostedZoneRequest & CreateHostedZoneRequest & CreateHostedZoneRequest & CreateHostedZoneRequest)[K]
    }>): CreateHostedZoneResponse {
        return this.client.createHostedZone(
            this.ops["CreateHostedZone"].apply(partialParams)
        );
    }

    invokeCreateKeySigningKey(partialParams: ToOptional<{
      [K in keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest]: (CreateKeySigningKeyRequest & CreateKeySigningKeyRequest & CreateKeySigningKeyRequest & CreateKeySigningKeyRequest)[K]
    }>): CreateKeySigningKeyResponse {
        return this.client.createKeySigningKey(
            this.ops["CreateKeySigningKey"].apply(partialParams)
        );
    }

    invokeCreateQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest]: (CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest)[K]
    }>): CreateQueryLoggingConfigResponse {
        return this.client.createQueryLoggingConfig(
            this.ops["CreateQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeCreateReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest]: (CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest)[K]
    }>): CreateReusableDelegationSetResponse {
        return this.client.createReusableDelegationSet(
            this.ops["CreateReusableDelegationSet"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicy(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest]: (CreateTrafficPolicyRequest & CreateTrafficPolicyRequest & CreateTrafficPolicyRequest & CreateTrafficPolicyRequest)[K]
    }>): CreateTrafficPolicyResponse {
        return this.client.createTrafficPolicy(
            this.ops["CreateTrafficPolicy"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest]: (CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest)[K]
    }>): CreateTrafficPolicyInstanceResponse {
        return this.client.createTrafficPolicyInstance(
            this.ops["CreateTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyVersion(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest]: (CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest)[K]
    }>): CreateTrafficPolicyVersionResponse {
        return this.client.createTrafficPolicyVersion(
            this.ops["CreateTrafficPolicyVersion"].apply(partialParams)
        );
    }

    invokeCreateVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest]: (CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest)[K]
    }>): CreateVPCAssociationAuthorizationResponse {
        return this.client.createVPCAssociationAuthorization(
            this.ops["CreateVPCAssociationAuthorization"].apply(partialParams)
        );
    }

    invokeDeactivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest]: (DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest)[K]
    }>): DeactivateKeySigningKeyResponse {
        return this.client.deactivateKeySigningKey(
            this.ops["DeactivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteHealthCheck(partialParams: ToOptional<{
      [K in keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest]: (DeleteHealthCheckRequest & DeleteHealthCheckRequest & DeleteHealthCheckRequest & DeleteHealthCheckRequest)[K]
    }>): DeleteHealthCheckResponse {
        return this.client.deleteHealthCheck(
            this.ops["DeleteHealthCheck"].apply(partialParams)
        );
    }

    invokeDeleteHostedZone(partialParams: ToOptional<{
      [K in keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest]: (DeleteHostedZoneRequest & DeleteHostedZoneRequest & DeleteHostedZoneRequest & DeleteHostedZoneRequest)[K]
    }>): DeleteHostedZoneResponse {
        return this.client.deleteHostedZone(
            this.ops["DeleteHostedZone"].apply(partialParams)
        );
    }

    invokeDeleteKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest]: (DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest)[K]
    }>): DeleteKeySigningKeyResponse {
        return this.client.deleteKeySigningKey(
            this.ops["DeleteKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest]: (DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest)[K]
    }>): DeleteQueryLoggingConfigResponse {
        return this.client.deleteQueryLoggingConfig(
            this.ops["DeleteQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeDeleteReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest]: (DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest)[K]
    }>): DeleteReusableDelegationSetResponse {
        return this.client.deleteReusableDelegationSet(
            this.ops["DeleteReusableDelegationSet"].apply(partialParams)
        );
    }

    invokeDeleteTrafficPolicy(partialParams: ToOptional<{
      [K in keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest]: (DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest)[K]
    }>): DeleteTrafficPolicyResponse {
        return this.client.deleteTrafficPolicy(
            this.ops["DeleteTrafficPolicy"].apply(partialParams)
        );
    }

    invokeDeleteTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest]: (DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest)[K]
    }>): DeleteTrafficPolicyInstanceResponse {
        return this.client.deleteTrafficPolicyInstance(
            this.ops["DeleteTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeDeleteVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest]: (DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest)[K]
    }>): DeleteVPCAssociationAuthorizationResponse {
        return this.client.deleteVPCAssociationAuthorization(
            this.ops["DeleteVPCAssociationAuthorization"].apply(partialParams)
        );
    }

    invokeDisableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest]: (DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest)[K]
    }>): DisableHostedZoneDNSSECResponse {
        return this.client.disableHostedZoneDNSSEC(
            this.ops["DisableHostedZoneDNSSEC"].apply(partialParams)
        );
    }

    invokeDisassociateVPCFromHostedZone(partialParams: ToOptional<{
      [K in keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest]: (DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest)[K]
    }>): DisassociateVPCFromHostedZoneResponse {
        return this.client.disassociateVPCFromHostedZone(
            this.ops["DisassociateVPCFromHostedZone"].apply(partialParams)
        );
    }

    invokeEnableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest]: (EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest)[K]
    }>): EnableHostedZoneDNSSECResponse {
        return this.client.enableHostedZoneDNSSEC(
            this.ops["EnableHostedZoneDNSSEC"].apply(partialParams)
        );
    }

    invokeGetAccountLimit(partialParams: ToOptional<{
      [K in keyof GetAccountLimitRequest & keyof GetAccountLimitRequest & keyof GetAccountLimitRequest & keyof GetAccountLimitRequest]: (GetAccountLimitRequest & GetAccountLimitRequest & GetAccountLimitRequest & GetAccountLimitRequest)[K]
    }>): GetAccountLimitResponse {
        return this.client.getAccountLimit(
            this.ops["GetAccountLimit"].apply(partialParams)
        );
    }

    invokeGetChange(partialParams: ToOptional<{
      [K in keyof GetChangeRequest & keyof GetChangeRequest & keyof GetChangeRequest & keyof GetChangeRequest]: (GetChangeRequest & GetChangeRequest & GetChangeRequest & GetChangeRequest)[K]
    }>): GetChangeResponse {
        return this.client.getChange(
            this.ops["GetChange"].apply(partialParams)
        );
    }

    invokeGetDNSSEC(partialParams: ToOptional<{
      [K in keyof GetDNSSECRequest & keyof GetDNSSECRequest & keyof GetDNSSECRequest & keyof GetDNSSECRequest]: (GetDNSSECRequest & GetDNSSECRequest & GetDNSSECRequest & GetDNSSECRequest)[K]
    }>): GetDNSSECResponse {
        return this.client.getDNSSEC(
            this.ops["GetDNSSEC"].apply(partialParams)
        );
    }

    invokeGetHealthCheck(partialParams: ToOptional<{
      [K in keyof GetHealthCheckRequest & keyof GetHealthCheckRequest & keyof GetHealthCheckRequest & keyof GetHealthCheckRequest]: (GetHealthCheckRequest & GetHealthCheckRequest & GetHealthCheckRequest & GetHealthCheckRequest)[K]
    }>): GetHealthCheckResponse {
        return this.client.getHealthCheck(
            this.ops["GetHealthCheck"].apply(partialParams)
        );
    }

    invokeGetHealthCheckLastFailureReason(partialParams: ToOptional<{
      [K in keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest]: (GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest)[K]
    }>): GetHealthCheckLastFailureReasonResponse {
        return this.client.getHealthCheckLastFailureReason(
            this.ops["GetHealthCheckLastFailureReason"].apply(partialParams)
        );
    }

    invokeGetHealthCheckStatus(partialParams: ToOptional<{
      [K in keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest]: (GetHealthCheckStatusRequest & GetHealthCheckStatusRequest & GetHealthCheckStatusRequest & GetHealthCheckStatusRequest)[K]
    }>): GetHealthCheckStatusResponse {
        return this.client.getHealthCheckStatus(
            this.ops["GetHealthCheckStatus"].apply(partialParams)
        );
    }

    invokeGetHostedZone(partialParams: ToOptional<{
      [K in keyof GetHostedZoneRequest & keyof GetHostedZoneRequest & keyof GetHostedZoneRequest & keyof GetHostedZoneRequest]: (GetHostedZoneRequest & GetHostedZoneRequest & GetHostedZoneRequest & GetHostedZoneRequest)[K]
    }>): GetHostedZoneResponse {
        return this.client.getHostedZone(
            this.ops["GetHostedZone"].apply(partialParams)
        );
    }

    invokeGetHostedZoneLimit(partialParams: ToOptional<{
      [K in keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest]: (GetHostedZoneLimitRequest & GetHostedZoneLimitRequest & GetHostedZoneLimitRequest & GetHostedZoneLimitRequest)[K]
    }>): GetHostedZoneLimitResponse {
        return this.client.getHostedZoneLimit(
            this.ops["GetHostedZoneLimit"].apply(partialParams)
        );
    }

    invokeGetQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest]: (GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest)[K]
    }>): GetQueryLoggingConfigResponse {
        return this.client.getQueryLoggingConfig(
            this.ops["GetQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeGetReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest]: (GetReusableDelegationSetRequest & GetReusableDelegationSetRequest & GetReusableDelegationSetRequest & GetReusableDelegationSetRequest)[K]
    }>): GetReusableDelegationSetResponse {
        return this.client.getReusableDelegationSet(
            this.ops["GetReusableDelegationSet"].apply(partialParams)
        );
    }

    invokeGetReusableDelegationSetLimit(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest]: (GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest)[K]
    }>): GetReusableDelegationSetLimitResponse {
        return this.client.getReusableDelegationSetLimit(
            this.ops["GetReusableDelegationSetLimit"].apply(partialParams)
        );
    }

    invokeGetTrafficPolicy(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest]: (GetTrafficPolicyRequest & GetTrafficPolicyRequest & GetTrafficPolicyRequest & GetTrafficPolicyRequest)[K]
    }>): GetTrafficPolicyResponse {
        return this.client.getTrafficPolicy(
            this.ops["GetTrafficPolicy"].apply(partialParams)
        );
    }

    invokeGetTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest]: (GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest)[K]
    }>): GetTrafficPolicyInstanceResponse {
        return this.client.getTrafficPolicyInstance(
            this.ops["GetTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeListHostedZonesByVPC(partialParams: ToOptional<{
      [K in keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest]: (ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest)[K]
    }>): ListHostedZonesByVPCResponse {
        return this.client.listHostedZonesByVPC(
            this.ops["ListHostedZonesByVPC"].apply(partialParams)
        );
    }

    invokeListResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest]: (ListResourceRecordSetsRequest & ListResourceRecordSetsRequest & ListResourceRecordSetsRequest & ListResourceRecordSetsRequest)[K]
    }>): ListResourceRecordSetsResponse {
        return this.client.listResourceRecordSets(
            this.ops["ListResourceRecordSets"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTagsForResources(partialParams: ToOptional<{
      [K in keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest]: (ListTagsForResourcesRequest & ListTagsForResourcesRequest & ListTagsForResourcesRequest & ListTagsForResourcesRequest)[K]
    }>): ListTagsForResourcesResponse {
        return this.client.listTagsForResources(
            this.ops["ListTagsForResources"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByHostedZone(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest]: (ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest)[K]
    }>): ListTrafficPolicyInstancesByHostedZoneResponse {
        return this.client.listTrafficPolicyInstancesByHostedZone(
            this.ops["ListTrafficPolicyInstancesByHostedZone"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByPolicy(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest]: (ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest)[K]
    }>): ListTrafficPolicyInstancesByPolicyResponse {
        return this.client.listTrafficPolicyInstancesByPolicy(
            this.ops["ListTrafficPolicyInstancesByPolicy"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest]: (ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest)[K]
    }>): ListTrafficPolicyVersionsResponse {
        return this.client.listTrafficPolicyVersions(
            this.ops["ListTrafficPolicyVersions"].apply(partialParams)
        );
    }

    invokeListVPCAssociationAuthorizations(partialParams: ToOptional<{
      [K in keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest]: (ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest)[K]
    }>): ListVPCAssociationAuthorizationsResponse {
        return this.client.listVPCAssociationAuthorizations(
            this.ops["ListVPCAssociationAuthorizations"].apply(partialParams)
        );
    }

    invokeTestDNSAnswer(partialParams: ToOptional<{
      [K in keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest]: (TestDNSAnswerRequest & TestDNSAnswerRequest & TestDNSAnswerRequest & TestDNSAnswerRequest)[K]
    }>): TestDNSAnswerResponse {
        return this.client.testDNSAnswer(
            this.ops["TestDNSAnswer"].apply(partialParams)
        );
    }

    invokeUpdateHealthCheck(partialParams: ToOptional<{
      [K in keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest]: (UpdateHealthCheckRequest & UpdateHealthCheckRequest & UpdateHealthCheckRequest & UpdateHealthCheckRequest)[K]
    }>): UpdateHealthCheckResponse {
        return this.client.updateHealthCheck(
            this.ops["UpdateHealthCheck"].apply(partialParams)
        );
    }

    invokeUpdateHostedZoneComment(partialParams: ToOptional<{
      [K in keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest]: (UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest)[K]
    }>): UpdateHostedZoneCommentResponse {
        return this.client.updateHostedZoneComment(
            this.ops["UpdateHostedZoneComment"].apply(partialParams)
        );
    }

    invokeUpdateTrafficPolicyComment(partialParams: ToOptional<{
      [K in keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest]: (UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest)[K]
    }>): UpdateTrafficPolicyCommentResponse {
        return this.client.updateTrafficPolicyComment(
            this.ops["UpdateTrafficPolicyComment"].apply(partialParams)
        );
    }

    invokeUpdateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest]: (UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest)[K]
    }>): UpdateTrafficPolicyInstanceResponse {
        return this.client.updateTrafficPolicyInstance(
            this.ops["UpdateTrafficPolicyInstance"].apply(partialParams)
        );
    }
}