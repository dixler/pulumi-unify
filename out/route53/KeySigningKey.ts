
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ActivateKeySigningKeyRequest,
    AssociateVPCWithHostedZoneRequest,
    ChangeResourceRecordSetsRequest,
    CreateHostedZoneRequest,
    CreateKeySigningKeyRequest,
    CreateQueryLoggingConfigRequest,
    CreateTrafficPolicyRequest,
    CreateTrafficPolicyInstanceRequest,
    CreateVPCAssociationAuthorizationRequest,
    DeactivateKeySigningKeyRequest,
    DeleteKeySigningKeyRequest,
    DeleteVPCAssociationAuthorizationRequest,
    DisableHostedZoneDNSSECRequest,
    DisassociateVPCFromHostedZoneRequest,
    EnableHostedZoneDNSSECRequest,
    GetDNSSECRequest,
    GetHostedZoneLimitRequest,
    ListResourceRecordSetsRequest,
    ListTrafficPolicyInstancesByHostedZoneRequest,
    ListVPCAssociationAuthorizationsRequest,
    TestDNSAnswerRequest,
    ActivateKeySigningKeyResponse,
    AssociateVPCWithHostedZoneResponse,
    ChangeResourceRecordSetsResponse,
    CreateHostedZoneResponse,
    CreateKeySigningKeyResponse,
    CreateQueryLoggingConfigResponse,
    CreateTrafficPolicyResponse,
    CreateTrafficPolicyInstanceResponse,
    CreateVPCAssociationAuthorizationResponse,
    DeactivateKeySigningKeyResponse,
    DeleteKeySigningKeyResponse,
    DeleteVPCAssociationAuthorizationResponse,
    DisableHostedZoneDNSSECResponse,
    DisassociateVPCFromHostedZoneResponse,
    EnableHostedZoneDNSSECResponse,
    GetDNSSECResponse,
    GetHostedZoneLimitResponse,
    ListResourceRecordSetsResponse,
    ListTrafficPolicyInstancesByHostedZoneResponse,
    ListVPCAssociationAuthorizationsResponse,
    TestDNSAnswerResponse
} from "aws-sdk/clients/route53";
const schema = require("../apis/route53-2013-04-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.route53.KeySigningKey {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.route53.KeySigningKey>) {
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
      [K in keyof ActivateKeySigningKeyRequest & keyof Omit<ActivateKeySigningKeyRequest, "HostedZoneId" | "Name">]: (ActivateKeySigningKeyRequest)[K]
    }>): Request<ActivateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.activateKeySigningKey(
          this.ops["ActivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeAssociateVPCWithHostedZone(partialParams: ToOptional<{
      [K in keyof AssociateVPCWithHostedZoneRequest & keyof Omit<AssociateVPCWithHostedZoneRequest, "HostedZoneId">]: (AssociateVPCWithHostedZoneRequest)[K]
    }>): Request<AssociateVPCWithHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.associateVPCWithHostedZone(
          this.ops["AssociateVPCWithHostedZone"].apply(partialParams)
        );
    }

    invokeChangeResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ChangeResourceRecordSetsRequest & keyof Omit<ChangeResourceRecordSetsRequest, "HostedZoneId">]: (ChangeResourceRecordSetsRequest)[K]
    }>): Request<ChangeResourceRecordSetsResponse, AWSError> {
        this.boot();
        return this.client.changeResourceRecordSets(
          this.ops["ChangeResourceRecordSets"].apply(partialParams)
        );
    }

    invokeCreateHostedZone(partialParams: ToOptional<{
      [K in keyof CreateHostedZoneRequest & keyof Omit<CreateHostedZoneRequest, "Name">]: (CreateHostedZoneRequest)[K]
    }>): Request<CreateHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.createHostedZone(
          this.ops["CreateHostedZone"].apply(partialParams)
        );
    }

    invokeCreateKeySigningKey(partialParams: ToOptional<{
      [K in keyof CreateKeySigningKeyRequest & keyof Omit<CreateKeySigningKeyRequest, "HostedZoneId" | "KeyManagementServiceArn" | "Name" | "Status">]: (CreateKeySigningKeyRequest)[K]
    }>): Request<CreateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.createKeySigningKey(
          this.ops["CreateKeySigningKey"].apply(partialParams)
        );
    }

    invokeCreateQueryLoggingConfig(partialParams: ToOptional<{
      [K in keyof CreateQueryLoggingConfigRequest & keyof Omit<CreateQueryLoggingConfigRequest, "HostedZoneId">]: (CreateQueryLoggingConfigRequest)[K]
    }>): Request<CreateQueryLoggingConfigResponse, AWSError> {
        this.boot();
        return this.client.createQueryLoggingConfig(
          this.ops["CreateQueryLoggingConfig"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicy(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyRequest & keyof Omit<CreateTrafficPolicyRequest, "Name">]: (CreateTrafficPolicyRequest)[K]
    }>): Request<CreateTrafficPolicyResponse, AWSError> {
        this.boot();
        return this.client.createTrafficPolicy(
          this.ops["CreateTrafficPolicy"].apply(partialParams)
        );
    }

    invokeCreateTrafficPolicyInstance(partialParams: ToOptional<{
      [K in keyof CreateTrafficPolicyInstanceRequest & keyof Omit<CreateTrafficPolicyInstanceRequest, "HostedZoneId" | "Name">]: (CreateTrafficPolicyInstanceRequest)[K]
    }>): Request<CreateTrafficPolicyInstanceResponse, AWSError> {
        this.boot();
        return this.client.createTrafficPolicyInstance(
          this.ops["CreateTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeCreateVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVPCAssociationAuthorizationRequest & keyof Omit<CreateVPCAssociationAuthorizationRequest, "HostedZoneId">]: (CreateVPCAssociationAuthorizationRequest)[K]
    }>): Request<CreateVPCAssociationAuthorizationResponse, AWSError> {
        this.boot();
        return this.client.createVPCAssociationAuthorization(
          this.ops["CreateVPCAssociationAuthorization"].apply(partialParams)
        );
    }

    invokeDeactivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeactivateKeySigningKeyRequest & keyof Omit<DeactivateKeySigningKeyRequest, "HostedZoneId" | "Name">]: (DeactivateKeySigningKeyRequest)[K]
    }>): Request<DeactivateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.deactivateKeySigningKey(
          this.ops["DeactivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeleteKeySigningKeyRequest & keyof Omit<DeleteKeySigningKeyRequest, "HostedZoneId" | "Name">]: (DeleteKeySigningKeyRequest)[K]
    }>): Request<DeleteKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.deleteKeySigningKey(
          this.ops["DeleteKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteVPCAssociationAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVPCAssociationAuthorizationRequest & keyof Omit<DeleteVPCAssociationAuthorizationRequest, "HostedZoneId">]: (DeleteVPCAssociationAuthorizationRequest)[K]
    }>): Request<DeleteVPCAssociationAuthorizationResponse, AWSError> {
        this.boot();
        return this.client.deleteVPCAssociationAuthorization(
          this.ops["DeleteVPCAssociationAuthorization"].apply(partialParams)
        );
    }

    invokeDisableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof DisableHostedZoneDNSSECRequest & keyof Omit<DisableHostedZoneDNSSECRequest, "HostedZoneId">]: (DisableHostedZoneDNSSECRequest)[K]
    }>): Request<DisableHostedZoneDNSSECResponse, AWSError> {
        this.boot();
        return this.client.disableHostedZoneDNSSEC(
          this.ops["DisableHostedZoneDNSSEC"].apply(partialParams)
        );
    }

    invokeDisassociateVPCFromHostedZone(partialParams: ToOptional<{
      [K in keyof DisassociateVPCFromHostedZoneRequest & keyof Omit<DisassociateVPCFromHostedZoneRequest, "HostedZoneId">]: (DisassociateVPCFromHostedZoneRequest)[K]
    }>): Request<DisassociateVPCFromHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.disassociateVPCFromHostedZone(
          this.ops["DisassociateVPCFromHostedZone"].apply(partialParams)
        );
    }

    invokeEnableHostedZoneDNSSEC(partialParams: ToOptional<{
      [K in keyof EnableHostedZoneDNSSECRequest & keyof Omit<EnableHostedZoneDNSSECRequest, "HostedZoneId">]: (EnableHostedZoneDNSSECRequest)[K]
    }>): Request<EnableHostedZoneDNSSECResponse, AWSError> {
        this.boot();
        return this.client.enableHostedZoneDNSSEC(
          this.ops["EnableHostedZoneDNSSEC"].apply(partialParams)
        );
    }

    invokeGetDNSSEC(partialParams: ToOptional<{
      [K in keyof GetDNSSECRequest & keyof Omit<GetDNSSECRequest, "HostedZoneId">]: (GetDNSSECRequest)[K]
    }>): Request<GetDNSSECResponse, AWSError> {
        this.boot();
        return this.client.getDNSSEC(
          this.ops["GetDNSSEC"].apply(partialParams)
        );
    }

    invokeGetHostedZoneLimit(partialParams: ToOptional<{
      [K in keyof GetHostedZoneLimitRequest & keyof Omit<GetHostedZoneLimitRequest, "HostedZoneId">]: (GetHostedZoneLimitRequest)[K]
    }>): Request<GetHostedZoneLimitResponse, AWSError> {
        this.boot();
        return this.client.getHostedZoneLimit(
          this.ops["GetHostedZoneLimit"].apply(partialParams)
        );
    }

    invokeListResourceRecordSets(partialParams: ToOptional<{
      [K in keyof ListResourceRecordSetsRequest & keyof Omit<ListResourceRecordSetsRequest, "HostedZoneId">]: (ListResourceRecordSetsRequest)[K]
    }>): Request<ListResourceRecordSetsResponse, AWSError> {
        this.boot();
        return this.client.listResourceRecordSets(
          this.ops["ListResourceRecordSets"].apply(partialParams)
        );
    }

    invokeListTrafficPolicyInstancesByHostedZone(partialParams: ToOptional<{
      [K in keyof ListTrafficPolicyInstancesByHostedZoneRequest & keyof Omit<ListTrafficPolicyInstancesByHostedZoneRequest, "HostedZoneId">]: (ListTrafficPolicyInstancesByHostedZoneRequest)[K]
    }>): Request<ListTrafficPolicyInstancesByHostedZoneResponse, AWSError> {
        this.boot();
        return this.client.listTrafficPolicyInstancesByHostedZone(
          this.ops["ListTrafficPolicyInstancesByHostedZone"].apply(partialParams)
        );
    }

    invokeListVPCAssociationAuthorizations(partialParams: ToOptional<{
      [K in keyof ListVPCAssociationAuthorizationsRequest & keyof Omit<ListVPCAssociationAuthorizationsRequest, "HostedZoneId">]: (ListVPCAssociationAuthorizationsRequest)[K]
    }>): Request<ListVPCAssociationAuthorizationsResponse, AWSError> {
        this.boot();
        return this.client.listVPCAssociationAuthorizations(
          this.ops["ListVPCAssociationAuthorizations"].apply(partialParams)
        );
    }

    invokeTestDNSAnswer(partialParams: ToOptional<{
      [K in keyof TestDNSAnswerRequest & keyof Omit<TestDNSAnswerRequest, "HostedZoneId">]: (TestDNSAnswerRequest)[K]
    }>): Request<TestDNSAnswerResponse, AWSError> {
        this.boot();
        return this.client.testDNSAnswer(
          this.ops["TestDNSAnswer"].apply(partialParams)
        );
    }
}