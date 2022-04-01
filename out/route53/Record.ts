
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ActivateKeySigningKeyRequest,
    CreateHostedZoneRequest,
    CreateKeySigningKeyRequest,
    CreateTrafficPolicyRequest,
    CreateTrafficPolicyInstanceRequest,
    DeactivateKeySigningKeyRequest,
    DeleteHealthCheckRequest,
    DeleteKeySigningKeyRequest,
    GetAccountLimitRequest,
    GetHealthCheckRequest,
    GetHealthCheckLastFailureReasonRequest,
    GetHealthCheckStatusRequest,
    GetHostedZoneLimitRequest,
    GetReusableDelegationSetLimitRequest,
    TestDNSAnswerRequest,
    UpdateHealthCheckRequest,
    ActivateKeySigningKeyResponse,
    CreateHostedZoneResponse,
    CreateKeySigningKeyResponse,
    CreateTrafficPolicyResponse,
    CreateTrafficPolicyInstanceResponse,
    DeactivateKeySigningKeyResponse,
    DeleteHealthCheckResponse,
    DeleteKeySigningKeyResponse,
    GetAccountLimitResponse,
    GetHealthCheckResponse,
    GetHealthCheckLastFailureReasonResponse,
    GetHealthCheckStatusResponse,
    GetHostedZoneLimitResponse,
    GetReusableDelegationSetLimitResponse,
    TestDNSAnswerResponse,
    UpdateHealthCheckResponse
} from "aws-sdk/clients/route53";
const schema = require("../apis/route53-2013-04-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.route53.Record {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.route53.Record>) {
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
      [K in keyof ActivateKeySigningKeyRequest & keyof Omit<ActivateKeySigningKeyRequest, "Name">]: (ActivateKeySigningKeyRequest)[K]
    }>): Request<ActivateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.activateKeySigningKey(
          this.ops["ActivateKeySigningKey"].apply(partialParams)
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
      [K in keyof CreateKeySigningKeyRequest & keyof Omit<CreateKeySigningKeyRequest, "Name">]: (CreateKeySigningKeyRequest)[K]
    }>): Request<CreateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.createKeySigningKey(
          this.ops["CreateKeySigningKey"].apply(partialParams)
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
      [K in keyof CreateTrafficPolicyInstanceRequest & keyof Omit<CreateTrafficPolicyInstanceRequest, "Name">]: (CreateTrafficPolicyInstanceRequest)[K]
    }>): Request<CreateTrafficPolicyInstanceResponse, AWSError> {
        this.boot();
        return this.client.createTrafficPolicyInstance(
          this.ops["CreateTrafficPolicyInstance"].apply(partialParams)
        );
    }

    invokeDeactivateKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeactivateKeySigningKeyRequest & keyof Omit<DeactivateKeySigningKeyRequest, "Name">]: (DeactivateKeySigningKeyRequest)[K]
    }>): Request<DeactivateKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.deactivateKeySigningKey(
          this.ops["DeactivateKeySigningKey"].apply(partialParams)
        );
    }

    invokeDeleteHealthCheck(partialParams: ToOptional<{
      [K in keyof DeleteHealthCheckRequest & keyof Omit<DeleteHealthCheckRequest, "HealthCheckId">]: (DeleteHealthCheckRequest)[K]
    }>): Request<DeleteHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.deleteHealthCheck(
          this.ops["DeleteHealthCheck"].apply(partialParams)
        );
    }

    invokeDeleteKeySigningKey(partialParams: ToOptional<{
      [K in keyof DeleteKeySigningKeyRequest & keyof Omit<DeleteKeySigningKeyRequest, "Name">]: (DeleteKeySigningKeyRequest)[K]
    }>): Request<DeleteKeySigningKeyResponse, AWSError> {
        this.boot();
        return this.client.deleteKeySigningKey(
          this.ops["DeleteKeySigningKey"].apply(partialParams)
        );
    }

    invokeGetAccountLimit(partialParams: ToOptional<{
      [K in keyof GetAccountLimitRequest & keyof Omit<GetAccountLimitRequest, "Type">]: (GetAccountLimitRequest)[K]
    }>): Request<GetAccountLimitResponse, AWSError> {
        this.boot();
        return this.client.getAccountLimit(
          this.ops["GetAccountLimit"].apply(partialParams)
        );
    }

    invokeGetHealthCheck(partialParams: ToOptional<{
      [K in keyof GetHealthCheckRequest & keyof Omit<GetHealthCheckRequest, "HealthCheckId">]: (GetHealthCheckRequest)[K]
    }>): Request<GetHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheck(
          this.ops["GetHealthCheck"].apply(partialParams)
        );
    }

    invokeGetHealthCheckLastFailureReason(partialParams: ToOptional<{
      [K in keyof GetHealthCheckLastFailureReasonRequest & keyof Omit<GetHealthCheckLastFailureReasonRequest, "HealthCheckId">]: (GetHealthCheckLastFailureReasonRequest)[K]
    }>): Request<GetHealthCheckLastFailureReasonResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheckLastFailureReason(
          this.ops["GetHealthCheckLastFailureReason"].apply(partialParams)
        );
    }

    invokeGetHealthCheckStatus(partialParams: ToOptional<{
      [K in keyof GetHealthCheckStatusRequest & keyof Omit<GetHealthCheckStatusRequest, "HealthCheckId">]: (GetHealthCheckStatusRequest)[K]
    }>): Request<GetHealthCheckStatusResponse, AWSError> {
        this.boot();
        return this.client.getHealthCheckStatus(
          this.ops["GetHealthCheckStatus"].apply(partialParams)
        );
    }

    invokeGetHostedZoneLimit(partialParams: ToOptional<{
      [K in keyof GetHostedZoneLimitRequest & keyof Omit<GetHostedZoneLimitRequest, "Type">]: (GetHostedZoneLimitRequest)[K]
    }>): Request<GetHostedZoneLimitResponse, AWSError> {
        this.boot();
        return this.client.getHostedZoneLimit(
          this.ops["GetHostedZoneLimit"].apply(partialParams)
        );
    }

    invokeGetReusableDelegationSetLimit(partialParams: ToOptional<{
      [K in keyof GetReusableDelegationSetLimitRequest & keyof Omit<GetReusableDelegationSetLimitRequest, "Type">]: (GetReusableDelegationSetLimitRequest)[K]
    }>): Request<GetReusableDelegationSetLimitResponse, AWSError> {
        this.boot();
        return this.client.getReusableDelegationSetLimit(
          this.ops["GetReusableDelegationSetLimit"].apply(partialParams)
        );
    }

    invokeTestDNSAnswer(partialParams: ToOptional<{
      [K in keyof TestDNSAnswerRequest & keyof Omit<TestDNSAnswerRequest, "RecordName" | "RecordType">]: (TestDNSAnswerRequest)[K]
    }>): Request<TestDNSAnswerResponse, AWSError> {
        this.boot();
        return this.client.testDNSAnswer(
          this.ops["TestDNSAnswer"].apply(partialParams)
        );
    }

    invokeUpdateHealthCheck(partialParams: ToOptional<{
      [K in keyof UpdateHealthCheckRequest & keyof Omit<UpdateHealthCheckRequest, "HealthCheckId">]: (UpdateHealthCheckRequest)[K]
    }>): Request<UpdateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.updateHealthCheck(
          this.ops["UpdateHealthCheck"].apply(partialParams)
        );
    }
}