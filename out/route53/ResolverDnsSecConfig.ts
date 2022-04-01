
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    GetCheckerIpRangesRequest,
    GetDNSSECRequest,
    GetGeoLocationRequest,
    GetHealthCheckRequest,
    GetHealthCheckCountRequest,
    GetHealthCheckLastFailureReasonRequest,
    GetHealthCheckStatusRequest,
    GetHostedZoneRequest,
    GetHostedZoneCountRequest,
    GetHostedZoneLimitRequest,
    GetQueryLoggingConfigRequest,
    GetReusableDelegationSetRequest,
    GetReusableDelegationSetLimitRequest,
    GetTrafficPolicyRequest,
    GetTrafficPolicyInstanceRequest,
    GetTrafficPolicyInstanceCountRequest,
    ListGeoLocationsRequest,
    ListHealthChecksRequest,
    ListHostedZonesRequest,
    ListHostedZonesByNameRequest,
    ListHostedZonesByVPCRequest,
    ListQueryLoggingConfigsRequest,
    ListResourceRecordSetsRequest,
    ListReusableDelegationSetsRequest,
    ListTagsForResourceRequest,
    ListTagsForResourcesRequest,
    ListTrafficPoliciesRequest,
    ListTrafficPolicyInstancesRequest,
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
    GetCheckerIpRangesResponse,
    GetDNSSECResponse,
    GetGeoLocationResponse,
    GetHealthCheckResponse,
    GetHealthCheckCountResponse,
    GetHealthCheckLastFailureReasonResponse,
    GetHealthCheckStatusResponse,
    GetHostedZoneResponse,
    GetHostedZoneCountResponse,
    GetHostedZoneLimitResponse,
    GetQueryLoggingConfigResponse,
    GetReusableDelegationSetResponse,
    GetReusableDelegationSetLimitResponse,
    GetTrafficPolicyResponse,
    GetTrafficPolicyInstanceResponse,
    GetTrafficPolicyInstanceCountResponse,
    ListGeoLocationsResponse,
    ListHealthChecksResponse,
    ListHostedZonesResponse,
    ListHostedZonesByNameResponse,
    ListHostedZonesByVPCResponse,
    ListQueryLoggingConfigsResponse,
    ListResourceRecordSetsResponse,
    ListReusableDelegationSetsResponse,
    ListTagsForResourceResponse,
    ListTagsForResourcesResponse,
    ListTrafficPoliciesResponse,
    ListTrafficPolicyInstancesResponse,
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
const schema = require("../apis/route53-2013-04-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.route53.ResolverDnsSecConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.route53.ResolverDnsSecConfig>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Route53()
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

    invokeActivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof ActivateKeySigningKeyRequest]: (ActivateKeySigningKeyRequest)[K]
    }>): Request<ActivateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.activateKeySigningKey(
          this.ops["ActivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeAssociateVPCWithHostedZone(partialParams: ToOptional<{
      [K in keyof AssociateVPCWithHostedZoneRequest]: (AssociateVPCWithHostedZoneRequest)[K]
    }>): Request<AssociateVPCWithHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.associateVPCWithHostedZone(
          this.ops["AssociateVPCWithHostedZone"].apply(partialParams)
        );
    }

    invokeChangeResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ChangeResourceRecordSetsRequest]: (ChangeResourceRecordSetsRequest)[K]
    }>): Request<ChangeResourceRecordSetsResponse, AWSError> {
        this.boot();
        return this.client.changeResourceRecordSets(
          this.ops["ChangeResourceRecordSets"].apply(partialParams)
        );
    }

    invokeChangeTagsForResource(partialParams: ToOptional<{
      [K in keyof ChangeTagsForResourceRequest & keyof Omit<ChangeTagsForResourceRequest, "ResourceId">]: (ChangeTagsForResourceRequest)[K]
    }>): Request<ChangeTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.changeTagsForResource(
          this.ops["ChangeTagsForResource"].apply(partialParams)
        );
    }

    invokeCreateHealthCheck(partialParams: ToOptional<{
      [K in keyof CreateHealthCheckRequest]: (CreateHealthCheckRequest)[K]
    }>): Request<CreateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.createHealthCheck(
          this.ops["CreateHealthCheck"].apply(partialParams)
        );
    }

    invokeCreateHostedZone(partialParams: ToOptional<{
      [K in keyof CreateHostedZoneRequest]: (CreateHostedZoneRequest)[K]
    }>): Request<CreateHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.createHostedZone(
          this.ops["CreateHostedZone"].apply(partialParams)
        );
    }

    invokeCreateKeySigningKey(partialParams: ToOptional<{
      [K in keyof CreateKeySigningKeyRequest]: (CreateKeySigningKeyRequest)[K]
    }>): Request<CreateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.createKeySigningKey(
          this.ops["CreateKeySigningKey"].apply(partialParams)
        );
    }

    invokeCreateQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof CreateQueryLoggingConfigRequest]: (CreateQueryLoggingConfigRequest)[K]
    }>): Request<CreateQueryLoggingConfigResponse, AWSError> {
        this.boot();
        return this.client.createQueryLoggingConfig(
          this.ops["CreateQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeCreateReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof CreateReusableDelegationSetRequest]: (CreateReusableDelegationSetRequest)[K]
    }>): Request<CreateReusableDelegationSetResponse, AWSError> {
        this.boot();
        return this.client.createReusableDelegationSet(
          this.ops["CreateReusableDelegationSet"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicy(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyRequest]: (CreateTrafficPolicyRequest)[K]
    }>): Request<CreateTrafficPolicyResponse, AWSError> {
        this.boot();
        return this.client.createTrafficPolicy(
          this.ops["CreateTrafficPolicy"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyInstanceRequest]: (CreateTrafficPolicyInstanceRequest)[K]
    }>): Request<CreateTrafficPolicyInstanceResponse, AWSError> {
        this.boot();
        return this.client.createTrafficPolicyInstance(
          this.ops["CreateTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyVersion(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyVersionRequest]: (CreateTrafficPolicyVersionRequest)[K]
    }>): Request<CreateTrafficPolicyVersionResponse, AWSError> {
        this.boot();
        return this.client.createTrafficPolicyVersion(
          this.ops["CreateTrafficPolicyVersion"].apply(partialParams)
        );
    }

    invokeCreateVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVPCAssociationAuthorizationRequest]: (CreateVPCAssociationAuthorizationRequest)[K]
    }>): Request<CreateVPCAssociationAuthorizationResponse, AWSError> {
        this.boot();
        return this.client.createVPCAssociationAuthorization(
          this.ops["CreateVPCAssociationAuthorization"].apply(partialParams)
        );
    }

    invokeDeactivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeactivateKeySigningKeyRequest]: (DeactivateKeySigningKeyRequest)[K]
    }>): Request<DeactivateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.deactivateKeySigningKey(
          this.ops["DeactivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteHealthCheck(partialParams: ToOptional<{
      [K in keyof DeleteHealthCheckRequest]: (DeleteHealthCheckRequest)[K]
    }>): Request<DeleteHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.deleteHealthCheck(
          this.ops["DeleteHealthCheck"].apply(partialParams)
        );
    }

    invokeDeleteHostedZone(partialParams: ToOptional<{
      [K in keyof DeleteHostedZoneRequest]: (DeleteHostedZoneRequest)[K]
    }>): Request<DeleteHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.deleteHostedZone(
          this.ops["DeleteHostedZone"].apply(partialParams)
        );
    }

    invokeDeleteKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeleteKeySigningKeyRequest]: (DeleteKeySigningKeyRequest)[K]
    }>): Request<DeleteKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.deleteKeySigningKey(
          this.ops["DeleteKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof DeleteQueryLoggingConfigRequest]: (DeleteQueryLoggingConfigRequest)[K]
    }>): Request<DeleteQueryLoggingConfigResponse, AWSError> {
        this.boot();
        return this.client.deleteQueryLoggingConfig(
          this.ops["DeleteQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeDeleteReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof DeleteReusableDelegationSetRequest]: (DeleteReusableDelegationSetRequest)[K]
    }>): Request<DeleteReusableDelegationSetResponse, AWSError> {
        this.boot();
        return this.client.deleteReusableDelegationSet(
          this.ops["DeleteReusableDelegationSet"].apply(partialParams)
        );
    }

    invokeDeleteTrafficPolicy(partialParams: ToOptional<{
      [K in keyof DeleteTrafficPolicyRequest]: (DeleteTrafficPolicyRequest)[K]
    }>): Request<DeleteTrafficPolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteTrafficPolicy(
          this.ops["DeleteTrafficPolicy"].apply(partialParams)
        );
    }

    invokeDeleteTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof DeleteTrafficPolicyInstanceRequest]: (DeleteTrafficPolicyInstanceRequest)[K]
    }>): Request<DeleteTrafficPolicyInstanceResponse, AWSError> {
        this.boot();
        return this.client.deleteTrafficPolicyInstance(
          this.ops["DeleteTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeDeleteVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVPCAssociationAuthorizationRequest]: (DeleteVPCAssociationAuthorizationRequest)[K]
    }>): Request<DeleteVPCAssociationAuthorizationResponse, AWSError> {
        this.boot();
        return this.client.deleteVPCAssociationAuthorization(
          this.ops["DeleteVPCAssociationAuthorization"].apply(partialParams)
        );
    }

    invokeDisableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof DisableHostedZoneDNSSECRequest]: (DisableHostedZoneDNSSECRequest)[K]
    }>): Request<DisableHostedZoneDNSSECResponse, AWSError> {
        this.boot();
        return this.client.disableHostedZoneDNSSEC(
          this.ops["DisableHostedZoneDNSSEC"].apply(partialParams)
        );
    }

    invokeDisassociateVPCFromHostedZone(partialParams: ToOptional<{
      [K in keyof DisassociateVPCFromHostedZoneRequest]: (DisassociateVPCFromHostedZoneRequest)[K]
    }>): Request<DisassociateVPCFromHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.disassociateVPCFromHostedZone(
          this.ops["DisassociateVPCFromHostedZone"].apply(partialParams)
        );
    }

    invokeEnableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof EnableHostedZoneDNSSECRequest]: (EnableHostedZoneDNSSECRequest)[K]
    }>): Request<EnableHostedZoneDNSSECResponse, AWSError> {
        this.boot();
        return this.client.enableHostedZoneDNSSEC(
          this.ops["EnableHostedZoneDNSSEC"].apply(partialParams)
        );
    }

    invokeGetAccountLimit(partialParams: ToOptional<{
      [K in keyof GetAccountLimitRequest]: (GetAccountLimitRequest)[K]
    }>): Request<GetAccountLimitResponse, AWSError> {
        this.boot();
        return this.client.getAccountLimit(
          this.ops["GetAccountLimit"].apply(partialParams)
        );
    }

    invokeGetChange(partialParams: ToOptional<{
      [K in keyof GetChangeRequest]: (GetChangeRequest)[K]
    }>): Request<GetChangeResponse, AWSError> {
        this.boot();
        return this.client.getChange(
          this.ops["GetChange"].apply(partialParams)
        );
    }

    invokeGetCheckerIpRanges(partialParams: ToOptional<{
      [K in keyof GetCheckerIpRangesRequest]: (GetCheckerIpRangesRequest)[K]
    }>): Request<GetCheckerIpRangesResponse, AWSError> {
        this.boot();
        return this.client.getCheckerIpRanges(
          this.ops["GetCheckerIpRanges"].apply(partialParams)
        );
    }

    invokeGetDNSSEC(partialParams: ToOptional<{
      [K in keyof GetDNSSECRequest]: (GetDNSSECRequest)[K]
    }>): Request<GetDNSSECResponse, AWSError> {
        this.boot();
        return this.client.getDNSSEC(
          this.ops["GetDNSSEC"].apply(partialParams)
        );
    }

    invokeGetGeoLocation(partialParams: ToOptional<{
      [K in keyof GetGeoLocationRequest]: (GetGeoLocationRequest)[K]
    }>): Request<GetGeoLocationResponse, AWSError> {
        this.boot();
        return this.client.getGeoLocation(
          this.ops["GetGeoLocation"].apply(partialParams)
        );
    }

    invokeGetHealthCheck(partialParams: ToOptional<{
      [K in keyof GetHealthCheckRequest]: (GetHealthCheckRequest)[K]
    }>): Request<GetHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheck(
          this.ops["GetHealthCheck"].apply(partialParams)
        );
    }

    invokeGetHealthCheckCount(partialParams: ToOptional<{
      [K in keyof GetHealthCheckCountRequest]: (GetHealthCheckCountRequest)[K]
    }>): Request<GetHealthCheckCountResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheckCount(
          this.ops["GetHealthCheckCount"].apply(partialParams)
        );
    }

    invokeGetHealthCheckLastFailureReason(partialParams: ToOptional<{
      [K in keyof GetHealthCheckLastFailureReasonRequest]: (GetHealthCheckLastFailureReasonRequest)[K]
    }>): Request<GetHealthCheckLastFailureReasonResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheckLastFailureReason(
          this.ops["GetHealthCheckLastFailureReason"].apply(partialParams)
        );
    }

    invokeGetHealthCheckStatus(partialParams: ToOptional<{
      [K in keyof GetHealthCheckStatusRequest]: (GetHealthCheckStatusRequest)[K]
    }>): Request<GetHealthCheckStatusResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheckStatus(
          this.ops["GetHealthCheckStatus"].apply(partialParams)
        );
    }

    invokeGetHostedZone(partialParams: ToOptional<{
      [K in keyof GetHostedZoneRequest]: (GetHostedZoneRequest)[K]
    }>): Request<GetHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.getHostedZone(
          this.ops["GetHostedZone"].apply(partialParams)
        );
    }

    invokeGetHostedZoneCount(partialParams: ToOptional<{
      [K in keyof GetHostedZoneCountRequest]: (GetHostedZoneCountRequest)[K]
    }>): Request<GetHostedZoneCountResponse, AWSError> {
        this.boot();
        return this.client.getHostedZoneCount(
          this.ops["GetHostedZoneCount"].apply(partialParams)
        );
    }

    invokeGetHostedZoneLimit(partialParams: ToOptional<{
      [K in keyof GetHostedZoneLimitRequest]: (GetHostedZoneLimitRequest)[K]
    }>): Request<GetHostedZoneLimitResponse, AWSError> {
        this.boot();
        return this.client.getHostedZoneLimit(
          this.ops["GetHostedZoneLimit"].apply(partialParams)
        );
    }

    invokeGetQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof GetQueryLoggingConfigRequest]: (GetQueryLoggingConfigRequest)[K]
    }>): Request<GetQueryLoggingConfigResponse, AWSError> {
        this.boot();
        return this.client.getQueryLoggingConfig(
          this.ops["GetQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeGetReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetRequest]: (GetReusableDelegationSetRequest)[K]
    }>): Request<GetReusableDelegationSetResponse, AWSError> {
        this.boot();
        return this.client.getReusableDelegationSet(
          this.ops["GetReusableDelegationSet"].apply(partialParams)
        );
    }

    invokeGetReusableDelegationSetLimit(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetLimitRequest]: (GetReusableDelegationSetLimitRequest)[K]
    }>): Request<GetReusableDelegationSetLimitResponse, AWSError> {
        this.boot();
        return this.client.getReusableDelegationSetLimit(
          this.ops["GetReusableDelegationSetLimit"].apply(partialParams)
        );
    }

    invokeGetTrafficPolicy(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyRequest]: (GetTrafficPolicyRequest)[K]
    }>): Request<GetTrafficPolicyResponse, AWSError> {
        this.boot();
        return this.client.getTrafficPolicy(
          this.ops["GetTrafficPolicy"].apply(partialParams)
        );
    }

    invokeGetTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyInstanceRequest]: (GetTrafficPolicyInstanceRequest)[K]
    }>): Request<GetTrafficPolicyInstanceResponse, AWSError> {
        this.boot();
        return this.client.getTrafficPolicyInstance(
          this.ops["GetTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeGetTrafficPolicyInstanceCount(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyInstanceCountRequest]: (GetTrafficPolicyInstanceCountRequest)[K]
    }>): Request<GetTrafficPolicyInstanceCountResponse, AWSError> {
        this.boot();
        return this.client.getTrafficPolicyInstanceCount(
          this.ops["GetTrafficPolicyInstanceCount"].apply(partialParams)
        );
    }

    invokeListGeoLocations(partialParams: ToOptional<{
      [K in keyof ListGeoLocationsRequest]: (ListGeoLocationsRequest)[K]
    }>): Request<ListGeoLocationsResponse, AWSError> {
        this.boot();
        return this.client.listGeoLocations(
          this.ops["ListGeoLocations"].apply(partialParams)
        );
    }

    invokeListHealthChecks(partialParams: ToOptional<{
      [K in keyof ListHealthChecksRequest]: (ListHealthChecksRequest)[K]
    }>): Request<ListHealthChecksResponse, AWSError> {
        this.boot();
        return this.client.listHealthChecks(
          this.ops["ListHealthChecks"].apply(partialParams)
        );
    }

    invokeListHostedZones(partialParams: ToOptional<{
      [K in keyof ListHostedZonesRequest]: (ListHostedZonesRequest)[K]
    }>): Request<ListHostedZonesResponse, AWSError> {
        this.boot();
        return this.client.listHostedZones(
          this.ops["ListHostedZones"].apply(partialParams)
        );
    }

    invokeListHostedZonesByName(partialParams: ToOptional<{
      [K in keyof ListHostedZonesByNameRequest]: (ListHostedZonesByNameRequest)[K]
    }>): Request<ListHostedZonesByNameResponse, AWSError> {
        this.boot();
        return this.client.listHostedZonesByName(
          this.ops["ListHostedZonesByName"].apply(partialParams)
        );
    }

    invokeListHostedZonesByVPC(partialParams: ToOptional<{
      [K in keyof ListHostedZonesByVPCRequest]: (ListHostedZonesByVPCRequest)[K]
    }>): Request<ListHostedZonesByVPCResponse, AWSError> {
        this.boot();
        return this.client.listHostedZonesByVPC(
          this.ops["ListHostedZonesByVPC"].apply(partialParams)
        );
    }

    invokeListQueryLoggingConfigs(partialParams: ToOptional<{
      [K in keyof ListQueryLoggingConfigsRequest]: (ListQueryLoggingConfigsRequest)[K]
    }>): Request<ListQueryLoggingConfigsResponse, AWSError> {
        this.boot();
        return this.client.listQueryLoggingConfigs(
          this.ops["ListQueryLoggingConfigs"].apply(partialParams)
        );
    }

    invokeListResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ListResourceRecordSetsRequest]: (ListResourceRecordSetsRequest)[K]
    }>): Request<ListResourceRecordSetsResponse, AWSError> {
        this.boot();
        return this.client.listResourceRecordSets(
          this.ops["ListResourceRecordSets"].apply(partialParams)
        );
    }

    invokeListReusableDelegationSets(partialParams: ToOptional<{
      [K in keyof ListReusableDelegationSetsRequest]: (ListReusableDelegationSetsRequest)[K]
    }>): Request<ListReusableDelegationSetsResponse, AWSError> {
        this.boot();
        return this.client.listReusableDelegationSets(
          this.ops["ListReusableDelegationSets"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "ResourceId">]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTagsForResources(partialParams: ToOptional<{
      [K in keyof ListTagsForResourcesRequest]: (ListTagsForResourcesRequest)[K]
    }>): Request<ListTagsForResourcesResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResources(
          this.ops["ListTagsForResources"].apply(partialParams)
        );
    }

    invokeListTrafficPolicies(partialParams: ToOptional<{
      [K in keyof ListTrafficPoliciesRequest]: (ListTrafficPoliciesRequest)[K]
    }>): Request<ListTrafficPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listTrafficPolicies(
          this.ops["ListTrafficPolicies"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstances(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesRequest]: (ListTrafficPolicyInstancesRequest)[K]
    }>): Request<ListTrafficPolicyInstancesResponse, AWSError> {
        this.boot();
        return this.client.listTrafficPolicyInstances(
          this.ops["ListTrafficPolicyInstances"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByHostedZone(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByHostedZoneRequest]: (ListTrafficPolicyInstancesByHostedZoneRequest)[K]
    }>): Request<ListTrafficPolicyInstancesByHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.listTrafficPolicyInstancesByHostedZone(
          this.ops["ListTrafficPolicyInstancesByHostedZone"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByPolicy(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByPolicyRequest]: (ListTrafficPolicyInstancesByPolicyRequest)[K]
    }>): Request<ListTrafficPolicyInstancesByPolicyResponse, AWSError> {
        this.boot();
        return this.client.listTrafficPolicyInstancesByPolicy(
          this.ops["ListTrafficPolicyInstancesByPolicy"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyVersionsRequest]: (ListTrafficPolicyVersionsRequest)[K]
    }>): Request<ListTrafficPolicyVersionsResponse, AWSError> {
        this.boot();
        return this.client.listTrafficPolicyVersions(
          this.ops["ListTrafficPolicyVersions"].apply(partialParams)
        );
    }

    invokeListVPCAssociationAuthorizations(partialParams: ToOptional<{
      [K in keyof ListVPCAssociationAuthorizationsRequest]: (ListVPCAssociationAuthorizationsRequest)[K]
    }>): Request<ListVPCAssociationAuthorizationsResponse, AWSError> {
        this.boot();
        return this.client.listVPCAssociationAuthorizations(
          this.ops["ListVPCAssociationAuthorizations"].apply(partialParams)
        );
    }

    invokeTestDNSAnswer(partialParams: ToOptional<{
      [K in keyof TestDNSAnswerRequest]: (TestDNSAnswerRequest)[K]
    }>): Request<TestDNSAnswerResponse, AWSError> {
        this.boot();
        return this.client.testDNSAnswer(
          this.ops["TestDNSAnswer"].apply(partialParams)
        );
    }

    invokeUpdateHealthCheck(partialParams: ToOptional<{
      [K in keyof UpdateHealthCheckRequest]: (UpdateHealthCheckRequest)[K]
    }>): Request<UpdateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.updateHealthCheck(
          this.ops["UpdateHealthCheck"].apply(partialParams)
        );
    }

    invokeUpdateHostedZoneComment(partialParams: ToOptional<{
      [K in keyof UpdateHostedZoneCommentRequest]: (UpdateHostedZoneCommentRequest)[K]
    }>): Request<UpdateHostedZoneCommentResponse, AWSError> {
        this.boot();
        return this.client.updateHostedZoneComment(
          this.ops["UpdateHostedZoneComment"].apply(partialParams)
        );
    }

    invokeUpdateTrafficPolicyComment(partialParams: ToOptional<{
      [K in keyof UpdateTrafficPolicyCommentRequest]: (UpdateTrafficPolicyCommentRequest)[K]
    }>): Request<UpdateTrafficPolicyCommentResponse, AWSError> {
        this.boot();
        return this.client.updateTrafficPolicyComment(
          this.ops["UpdateTrafficPolicyComment"].apply(partialParams)
        );
    }

    invokeUpdateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof UpdateTrafficPolicyInstanceRequest]: (UpdateTrafficPolicyInstanceRequest)[K]
    }>): Request<UpdateTrafficPolicyInstanceResponse, AWSError> {
        this.boot();
        return this.client.updateTrafficPolicyInstance(
          this.ops["UpdateTrafficPolicyInstance"].apply(partialParams)
        );
    }
}