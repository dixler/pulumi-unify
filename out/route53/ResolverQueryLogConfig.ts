
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
const schema = require("../apis/route53-2013-04-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.route53.ResolverQueryLogConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.route53.ResolverQueryLogConfig>) {
        super(...args)
        this.client = new awssdk.Route53()
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

    invokeActivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest & keyof ActivateKeySigningKeyRequest]: (ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest & ActivateKeySigningKeyRequest)[K]
    }>): Request<ActivateKeySigningKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.activateKeySigningKey(
          this.ops["ActivateKeySigningKey"].applicator.apply(partialParams)
        );
    }

    invokeAssociateVPCWithHostedZone(partialParams: ToOptional<{
      [K in keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest & keyof AssociateVPCWithHostedZoneRequest]: (AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest & AssociateVPCWithHostedZoneRequest)[K]
    }>): Request<AssociateVPCWithHostedZoneResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateVPCWithHostedZone(
          this.ops["AssociateVPCWithHostedZone"].applicator.apply(partialParams)
        );
    }

    invokeChangeResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest & keyof ChangeResourceRecordSetsRequest]: (ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest & ChangeResourceRecordSetsRequest)[K]
    }>): Request<ChangeResourceRecordSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changeResourceRecordSets(
          this.ops["ChangeResourceRecordSets"].applicator.apply(partialParams)
        );
    }

    invokeChangeTagsForResource(partialParams: ToOptional<{
      [K in keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest & keyof ChangeTagsForResourceRequest]: (ChangeTagsForResourceRequest & ChangeTagsForResourceRequest & ChangeTagsForResourceRequest & ChangeTagsForResourceRequest & ChangeTagsForResourceRequest)[K]
    }>): Request<ChangeTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changeTagsForResource(
          this.ops["ChangeTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeCreateHealthCheck(partialParams: ToOptional<{
      [K in keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest & keyof CreateHealthCheckRequest]: (CreateHealthCheckRequest & CreateHealthCheckRequest & CreateHealthCheckRequest & CreateHealthCheckRequest & CreateHealthCheckRequest)[K]
    }>): Request<CreateHealthCheckResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHealthCheck(
          this.ops["CreateHealthCheck"].applicator.apply(partialParams)
        );
    }

    invokeCreateHostedZone(partialParams: ToOptional<{
      [K in keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest & keyof CreateHostedZoneRequest]: (CreateHostedZoneRequest & CreateHostedZoneRequest & CreateHostedZoneRequest & CreateHostedZoneRequest & CreateHostedZoneRequest)[K]
    }>): Request<CreateHostedZoneResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHostedZone(
          this.ops["CreateHostedZone"].applicator.apply(partialParams)
        );
    }

    invokeCreateKeySigningKey(partialParams: ToOptional<{
      [K in keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest & keyof CreateKeySigningKeyRequest]: (CreateKeySigningKeyRequest & CreateKeySigningKeyRequest & CreateKeySigningKeyRequest & CreateKeySigningKeyRequest & CreateKeySigningKeyRequest)[K]
    }>): Request<CreateKeySigningKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeySigningKey(
          this.ops["CreateKeySigningKey"].applicator.apply(partialParams)
        );
    }

    invokeCreateQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest & keyof CreateQueryLoggingConfigRequest]: (CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest & CreateQueryLoggingConfigRequest)[K]
    }>): Request<CreateQueryLoggingConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQueryLoggingConfig(
          this.ops["CreateQueryLoggingConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest & keyof CreateReusableDelegationSetRequest]: (CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest & CreateReusableDelegationSetRequest)[K]
    }>): Request<CreateReusableDelegationSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReusableDelegationSet(
          this.ops["CreateReusableDelegationSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrafficPolicy(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest & keyof CreateTrafficPolicyRequest]: (CreateTrafficPolicyRequest & CreateTrafficPolicyRequest & CreateTrafficPolicyRequest & CreateTrafficPolicyRequest & CreateTrafficPolicyRequest)[K]
    }>): Request<CreateTrafficPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficPolicy(
          this.ops["CreateTrafficPolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest & keyof CreateTrafficPolicyInstanceRequest]: (CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest & CreateTrafficPolicyInstanceRequest)[K]
    }>): Request<CreateTrafficPolicyInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficPolicyInstance(
          this.ops["CreateTrafficPolicyInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyVersion(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest & keyof CreateTrafficPolicyVersionRequest]: (CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest & CreateTrafficPolicyVersionRequest)[K]
    }>): Request<CreateTrafficPolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficPolicyVersion(
          this.ops["CreateTrafficPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest & keyof CreateVPCAssociationAuthorizationRequest]: (CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest & CreateVPCAssociationAuthorizationRequest)[K]
    }>): Request<CreateVPCAssociationAuthorizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVPCAssociationAuthorization(
          this.ops["CreateVPCAssociationAuthorization"].applicator.apply(partialParams)
        );
    }

    invokeDeactivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest & keyof DeactivateKeySigningKeyRequest]: (DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest & DeactivateKeySigningKeyRequest)[K]
    }>): Request<DeactivateKeySigningKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivateKeySigningKey(
          this.ops["DeactivateKeySigningKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHealthCheck(partialParams: ToOptional<{
      [K in keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest & keyof DeleteHealthCheckRequest]: (DeleteHealthCheckRequest & DeleteHealthCheckRequest & DeleteHealthCheckRequest & DeleteHealthCheckRequest & DeleteHealthCheckRequest)[K]
    }>): Request<DeleteHealthCheckResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHealthCheck(
          this.ops["DeleteHealthCheck"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHostedZone(partialParams: ToOptional<{
      [K in keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest & keyof DeleteHostedZoneRequest]: (DeleteHostedZoneRequest & DeleteHostedZoneRequest & DeleteHostedZoneRequest & DeleteHostedZoneRequest & DeleteHostedZoneRequest)[K]
    }>): Request<DeleteHostedZoneResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHostedZone(
          this.ops["DeleteHostedZone"].applicator.apply(partialParams)
        );
    }

    invokeDeleteKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest & keyof DeleteKeySigningKeyRequest]: (DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest & DeleteKeySigningKeyRequest)[K]
    }>): Request<DeleteKeySigningKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKeySigningKey(
          this.ops["DeleteKeySigningKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest & keyof DeleteQueryLoggingConfigRequest]: (DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest & DeleteQueryLoggingConfigRequest)[K]
    }>): Request<DeleteQueryLoggingConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQueryLoggingConfig(
          this.ops["DeleteQueryLoggingConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest & keyof DeleteReusableDelegationSetRequest]: (DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest & DeleteReusableDelegationSetRequest)[K]
    }>): Request<DeleteReusableDelegationSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReusableDelegationSet(
          this.ops["DeleteReusableDelegationSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrafficPolicy(partialParams: ToOptional<{
      [K in keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest & keyof DeleteTrafficPolicyRequest]: (DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest & DeleteTrafficPolicyRequest)[K]
    }>): Request<DeleteTrafficPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficPolicy(
          this.ops["DeleteTrafficPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest & keyof DeleteTrafficPolicyInstanceRequest]: (DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest & DeleteTrafficPolicyInstanceRequest)[K]
    }>): Request<DeleteTrafficPolicyInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficPolicyInstance(
          this.ops["DeleteTrafficPolicyInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest & keyof DeleteVPCAssociationAuthorizationRequest]: (DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest & DeleteVPCAssociationAuthorizationRequest)[K]
    }>): Request<DeleteVPCAssociationAuthorizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVPCAssociationAuthorization(
          this.ops["DeleteVPCAssociationAuthorization"].applicator.apply(partialParams)
        );
    }

    invokeDisableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest & keyof DisableHostedZoneDNSSECRequest]: (DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest & DisableHostedZoneDNSSECRequest)[K]
    }>): Request<DisableHostedZoneDNSSECResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableHostedZoneDNSSEC(
          this.ops["DisableHostedZoneDNSSEC"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateVPCFromHostedZone(partialParams: ToOptional<{
      [K in keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest & keyof DisassociateVPCFromHostedZoneRequest]: (DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest & DisassociateVPCFromHostedZoneRequest)[K]
    }>): Request<DisassociateVPCFromHostedZoneResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateVPCFromHostedZone(
          this.ops["DisassociateVPCFromHostedZone"].applicator.apply(partialParams)
        );
    }

    invokeEnableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest & keyof EnableHostedZoneDNSSECRequest]: (EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest & EnableHostedZoneDNSSECRequest)[K]
    }>): Request<EnableHostedZoneDNSSECResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableHostedZoneDNSSEC(
          this.ops["EnableHostedZoneDNSSEC"].applicator.apply(partialParams)
        );
    }

    invokeGetAccountLimit(partialParams: ToOptional<{
      [K in keyof GetAccountLimitRequest & keyof GetAccountLimitRequest & keyof GetAccountLimitRequest & keyof GetAccountLimitRequest & keyof GetAccountLimitRequest]: (GetAccountLimitRequest & GetAccountLimitRequest & GetAccountLimitRequest & GetAccountLimitRequest & GetAccountLimitRequest)[K]
    }>): Request<GetAccountLimitResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccountLimit(
          this.ops["GetAccountLimit"].applicator.apply(partialParams)
        );
    }

    invokeGetChange(partialParams: ToOptional<{
      [K in keyof GetChangeRequest & keyof GetChangeRequest & keyof GetChangeRequest & keyof GetChangeRequest & keyof GetChangeRequest]: (GetChangeRequest & GetChangeRequest & GetChangeRequest & GetChangeRequest & GetChangeRequest)[K]
    }>): Request<GetChangeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChange(
          this.ops["GetChange"].applicator.apply(partialParams)
        );
    }

    invokeGetDNSSEC(partialParams: ToOptional<{
      [K in keyof GetDNSSECRequest & keyof GetDNSSECRequest & keyof GetDNSSECRequest & keyof GetDNSSECRequest & keyof GetDNSSECRequest]: (GetDNSSECRequest & GetDNSSECRequest & GetDNSSECRequest & GetDNSSECRequest & GetDNSSECRequest)[K]
    }>): Request<GetDNSSECResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDNSSEC(
          this.ops["GetDNSSEC"].applicator.apply(partialParams)
        );
    }

    invokeGetHealthCheck(partialParams: ToOptional<{
      [K in keyof GetHealthCheckRequest & keyof GetHealthCheckRequest & keyof GetHealthCheckRequest & keyof GetHealthCheckRequest & keyof GetHealthCheckRequest]: (GetHealthCheckRequest & GetHealthCheckRequest & GetHealthCheckRequest & GetHealthCheckRequest & GetHealthCheckRequest)[K]
    }>): Request<GetHealthCheckResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHealthCheck(
          this.ops["GetHealthCheck"].applicator.apply(partialParams)
        );
    }

    invokeGetHealthCheckLastFailureReason(partialParams: ToOptional<{
      [K in keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest & keyof GetHealthCheckLastFailureReasonRequest]: (GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest & GetHealthCheckLastFailureReasonRequest)[K]
    }>): Request<GetHealthCheckLastFailureReasonResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHealthCheckLastFailureReason(
          this.ops["GetHealthCheckLastFailureReason"].applicator.apply(partialParams)
        );
    }

    invokeGetHealthCheckStatus(partialParams: ToOptional<{
      [K in keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest & keyof GetHealthCheckStatusRequest]: (GetHealthCheckStatusRequest & GetHealthCheckStatusRequest & GetHealthCheckStatusRequest & GetHealthCheckStatusRequest & GetHealthCheckStatusRequest)[K]
    }>): Request<GetHealthCheckStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHealthCheckStatus(
          this.ops["GetHealthCheckStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetHostedZone(partialParams: ToOptional<{
      [K in keyof GetHostedZoneRequest & keyof GetHostedZoneRequest & keyof GetHostedZoneRequest & keyof GetHostedZoneRequest & keyof GetHostedZoneRequest]: (GetHostedZoneRequest & GetHostedZoneRequest & GetHostedZoneRequest & GetHostedZoneRequest & GetHostedZoneRequest)[K]
    }>): Request<GetHostedZoneResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostedZone(
          this.ops["GetHostedZone"].applicator.apply(partialParams)
        );
    }

    invokeGetHostedZoneLimit(partialParams: ToOptional<{
      [K in keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest & keyof GetHostedZoneLimitRequest]: (GetHostedZoneLimitRequest & GetHostedZoneLimitRequest & GetHostedZoneLimitRequest & GetHostedZoneLimitRequest & GetHostedZoneLimitRequest)[K]
    }>): Request<GetHostedZoneLimitResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostedZoneLimit(
          this.ops["GetHostedZoneLimit"].applicator.apply(partialParams)
        );
    }

    invokeGetQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest & keyof GetQueryLoggingConfigRequest]: (GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest & GetQueryLoggingConfigRequest)[K]
    }>): Request<GetQueryLoggingConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryLoggingConfig(
          this.ops["GetQueryLoggingConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetReusableDelegationSet(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest & keyof GetReusableDelegationSetRequest]: (GetReusableDelegationSetRequest & GetReusableDelegationSetRequest & GetReusableDelegationSetRequest & GetReusableDelegationSetRequest & GetReusableDelegationSetRequest)[K]
    }>): Request<GetReusableDelegationSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReusableDelegationSet(
          this.ops["GetReusableDelegationSet"].applicator.apply(partialParams)
        );
    }

    invokeGetReusableDelegationSetLimit(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest & keyof GetReusableDelegationSetLimitRequest]: (GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest & GetReusableDelegationSetLimitRequest)[K]
    }>): Request<GetReusableDelegationSetLimitResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReusableDelegationSetLimit(
          this.ops["GetReusableDelegationSetLimit"].applicator.apply(partialParams)
        );
    }

    invokeGetTrafficPolicy(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest & keyof GetTrafficPolicyRequest]: (GetTrafficPolicyRequest & GetTrafficPolicyRequest & GetTrafficPolicyRequest & GetTrafficPolicyRequest & GetTrafficPolicyRequest)[K]
    }>): Request<GetTrafficPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrafficPolicy(
          this.ops["GetTrafficPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest & keyof GetTrafficPolicyInstanceRequest]: (GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest & GetTrafficPolicyInstanceRequest)[K]
    }>): Request<GetTrafficPolicyInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrafficPolicyInstance(
          this.ops["GetTrafficPolicyInstance"].applicator.apply(partialParams)
        );
    }

    invokeListHostedZonesByVPC(partialParams: ToOptional<{
      [K in keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest & keyof ListHostedZonesByVPCRequest]: (ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest & ListHostedZonesByVPCRequest)[K]
    }>): Request<ListHostedZonesByVPCResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listHostedZonesByVPC(
          this.ops["ListHostedZonesByVPC"].applicator.apply(partialParams)
        );
    }

    invokeListResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest & keyof ListResourceRecordSetsRequest]: (ListResourceRecordSetsRequest & ListResourceRecordSetsRequest & ListResourceRecordSetsRequest & ListResourceRecordSetsRequest & ListResourceRecordSetsRequest)[K]
    }>): Request<ListResourceRecordSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourceRecordSets(
          this.ops["ListResourceRecordSets"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResources(partialParams: ToOptional<{
      [K in keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest & keyof ListTagsForResourcesRequest]: (ListTagsForResourcesRequest & ListTagsForResourcesRequest & ListTagsForResourcesRequest & ListTagsForResourcesRequest & ListTagsForResourcesRequest)[K]
    }>): Request<ListTagsForResourcesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResources(
          this.ops["ListTagsForResources"].applicator.apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByHostedZone(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof ListTrafficPolicyInstancesByHostedZoneRequest]: (ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest & ListTrafficPolicyInstancesByHostedZoneRequest)[K]
    }>): Request<ListTrafficPolicyInstancesByHostedZoneResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrafficPolicyInstancesByHostedZone(
          this.ops["ListTrafficPolicyInstancesByHostedZone"].applicator.apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByPolicy(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest & keyof ListTrafficPolicyInstancesByPolicyRequest]: (ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest & ListTrafficPolicyInstancesByPolicyRequest)[K]
    }>): Request<ListTrafficPolicyInstancesByPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrafficPolicyInstancesByPolicy(
          this.ops["ListTrafficPolicyInstancesByPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListTrafficPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest & keyof ListTrafficPolicyVersionsRequest]: (ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest & ListTrafficPolicyVersionsRequest)[K]
    }>): Request<ListTrafficPolicyVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrafficPolicyVersions(
          this.ops["ListTrafficPolicyVersions"].applicator.apply(partialParams)
        );
    }

    invokeListVPCAssociationAuthorizations(partialParams: ToOptional<{
      [K in keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest & keyof ListVPCAssociationAuthorizationsRequest]: (ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest & ListVPCAssociationAuthorizationsRequest)[K]
    }>): Request<ListVPCAssociationAuthorizationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVPCAssociationAuthorizations(
          this.ops["ListVPCAssociationAuthorizations"].applicator.apply(partialParams)
        );
    }

    invokeTestDNSAnswer(partialParams: ToOptional<{
      [K in keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest & keyof TestDNSAnswerRequest]: (TestDNSAnswerRequest & TestDNSAnswerRequest & TestDNSAnswerRequest & TestDNSAnswerRequest & TestDNSAnswerRequest)[K]
    }>): Request<TestDNSAnswerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testDNSAnswer(
          this.ops["TestDNSAnswer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateHealthCheck(partialParams: ToOptional<{
      [K in keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest & keyof UpdateHealthCheckRequest]: (UpdateHealthCheckRequest & UpdateHealthCheckRequest & UpdateHealthCheckRequest & UpdateHealthCheckRequest & UpdateHealthCheckRequest)[K]
    }>): Request<UpdateHealthCheckResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHealthCheck(
          this.ops["UpdateHealthCheck"].applicator.apply(partialParams)
        );
    }

    invokeUpdateHostedZoneComment(partialParams: ToOptional<{
      [K in keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest & keyof UpdateHostedZoneCommentRequest]: (UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest & UpdateHostedZoneCommentRequest)[K]
    }>): Request<UpdateHostedZoneCommentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHostedZoneComment(
          this.ops["UpdateHostedZoneComment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrafficPolicyComment(partialParams: ToOptional<{
      [K in keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest & keyof UpdateTrafficPolicyCommentRequest]: (UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest & UpdateTrafficPolicyCommentRequest)[K]
    }>): Request<UpdateTrafficPolicyCommentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrafficPolicyComment(
          this.ops["UpdateTrafficPolicyComment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest & keyof UpdateTrafficPolicyInstanceRequest]: (UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest & UpdateTrafficPolicyInstanceRequest)[K]
    }>): Request<UpdateTrafficPolicyInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrafficPolicyInstance(
          this.ops["UpdateTrafficPolicyInstance"].applicator.apply(partialParams)
        );
    }
}