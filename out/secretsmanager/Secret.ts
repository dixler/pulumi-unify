
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelRotateSecretRequest,
    CreateSecretRequest,
    DeleteResourcePolicyRequest,
    DeleteSecretRequest,
    DescribeSecretRequest,
    GetRandomPasswordRequest,
    GetResourcePolicyRequest,
    GetSecretValueRequest,
    ListSecretVersionIdsRequest,
    ListSecretsRequest,
    PutResourcePolicyRequest,
    PutSecretValueRequest,
    RemoveRegionsFromReplicationRequest,
    ReplicateSecretToRegionsRequest,
    RestoreSecretRequest,
    RotateSecretRequest,
    StopReplicationToReplicaRequest,
    UpdateSecretRequest,
    UpdateSecretVersionStageRequest,
    ValidateResourcePolicyRequest,
    CancelRotateSecretResponse,
    CreateSecretResponse,
    DeleteResourcePolicyResponse,
    DeleteSecretResponse,
    DescribeSecretResponse,
    GetRandomPasswordResponse,
    GetResourcePolicyResponse,
    GetSecretValueResponse,
    ListSecretVersionIdsResponse,
    ListSecretsResponse,
    PutResourcePolicyResponse,
    PutSecretValueResponse,
    RemoveRegionsFromReplicationResponse,
    ReplicateSecretToRegionsResponse,
    RestoreSecretResponse,
    RotateSecretResponse,
    StopReplicationToReplicaResponse,
    UpdateSecretResponse,
    UpdateSecretVersionStageResponse,
    ValidateResourcePolicyResponse
} from "aws-sdk/clients/secretsmanager";
const schema = require("../apis/secretsmanager-2017-10-17.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.secretsmanager.Secret {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.secretsmanager.Secret>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SecretsManager()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeCancelRotateSecret(partialParams: ToOptional<{
      [K in keyof CancelRotateSecretRequest]: (CancelRotateSecretRequest)[K]
    }>): Request<CancelRotateSecretResponse, AWSError> {
        this.boot();
        return this.client.cancelRotateSecret(
          this.ops["CancelRotateSecret"].apply(partialParams)
        );
    }

    invokeCreateSecret(partialParams: ToOptional<{
      [K in keyof CreateSecretRequest & keyof Omit<CreateSecretRequest, "Name">]: (CreateSecretRequest)[K]
    }>): Request<CreateSecretResponse, AWSError> {
        this.boot();
        return this.client.createSecret(
          this.ops["CreateSecret"].apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyRequest]: (DeleteResourcePolicyRequest)[K]
    }>): Request<DeleteResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteResourcePolicy(
          this.ops["DeleteResourcePolicy"].apply(partialParams)
        );
    }

    invokeDeleteSecret(partialParams: ToOptional<{
      [K in keyof DeleteSecretRequest]: (DeleteSecretRequest)[K]
    }>): Request<DeleteSecretResponse, AWSError> {
        this.boot();
        return this.client.deleteSecret(
          this.ops["DeleteSecret"].apply(partialParams)
        );
    }

    invokeDescribeSecret(partialParams: ToOptional<{
      [K in keyof DescribeSecretRequest]: (DescribeSecretRequest)[K]
    }>): Request<DescribeSecretResponse, AWSError> {
        this.boot();
        return this.client.describeSecret(
          this.ops["DescribeSecret"].apply(partialParams)
        );
    }

    invokeGetRandomPassword(partialParams: ToOptional<{
      [K in keyof GetRandomPasswordRequest]: (GetRandomPasswordRequest)[K]
    }>): Request<GetRandomPasswordResponse, AWSError> {
        this.boot();
        return this.client.getRandomPassword(
          this.ops["GetRandomPassword"].apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyRequest]: (GetResourcePolicyRequest)[K]
    }>): Request<GetResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.getResourcePolicy(
          this.ops["GetResourcePolicy"].apply(partialParams)
        );
    }

    invokeGetSecretValue(partialParams: ToOptional<{
      [K in keyof GetSecretValueRequest]: (GetSecretValueRequest)[K]
    }>): Request<GetSecretValueResponse, AWSError> {
        this.boot();
        return this.client.getSecretValue(
          this.ops["GetSecretValue"].apply(partialParams)
        );
    }

    invokeListSecretVersionIds(partialParams: ToOptional<{
      [K in keyof ListSecretVersionIdsRequest]: (ListSecretVersionIdsRequest)[K]
    }>): Request<ListSecretVersionIdsResponse, AWSError> {
        this.boot();
        return this.client.listSecretVersionIds(
          this.ops["ListSecretVersionIds"].apply(partialParams)
        );
    }

    invokeListSecrets(partialParams: ToOptional<{
      [K in keyof ListSecretsRequest]: (ListSecretsRequest)[K]
    }>): Request<ListSecretsResponse, AWSError> {
        this.boot();
        return this.client.listSecrets(
          this.ops["ListSecrets"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest)[K]
    }>): Request<PutResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokePutSecretValue(partialParams: ToOptional<{
      [K in keyof PutSecretValueRequest]: (PutSecretValueRequest)[K]
    }>): Request<PutSecretValueResponse, AWSError> {
        this.boot();
        return this.client.putSecretValue(
          this.ops["PutSecretValue"].apply(partialParams)
        );
    }

    invokeRemoveRegionsFromReplication(partialParams: ToOptional<{
      [K in keyof RemoveRegionsFromReplicationRequest]: (RemoveRegionsFromReplicationRequest)[K]
    }>): Request<RemoveRegionsFromReplicationResponse, AWSError> {
        this.boot();
        return this.client.removeRegionsFromReplication(
          this.ops["RemoveRegionsFromReplication"].apply(partialParams)
        );
    }

    invokeReplicateSecretToRegions(partialParams: ToOptional<{
      [K in keyof ReplicateSecretToRegionsRequest]: (ReplicateSecretToRegionsRequest)[K]
    }>): Request<ReplicateSecretToRegionsResponse, AWSError> {
        this.boot();
        return this.client.replicateSecretToRegions(
          this.ops["ReplicateSecretToRegions"].apply(partialParams)
        );
    }

    invokeRestoreSecret(partialParams: ToOptional<{
      [K in keyof RestoreSecretRequest]: (RestoreSecretRequest)[K]
    }>): Request<RestoreSecretResponse, AWSError> {
        this.boot();
        return this.client.restoreSecret(
          this.ops["RestoreSecret"].apply(partialParams)
        );
    }

    invokeRotateSecret(partialParams: ToOptional<{
      [K in keyof RotateSecretRequest]: (RotateSecretRequest)[K]
    }>): Request<RotateSecretResponse, AWSError> {
        this.boot();
        return this.client.rotateSecret(
          this.ops["RotateSecret"].apply(partialParams)
        );
    }

    invokeStopReplicationToReplica(partialParams: ToOptional<{
      [K in keyof StopReplicationToReplicaRequest]: (StopReplicationToReplicaRequest)[K]
    }>): Request<StopReplicationToReplicaResponse, AWSError> {
        this.boot();
        return this.client.stopReplicationToReplica(
          this.ops["StopReplicationToReplica"].apply(partialParams)
        );
    }

    invokeUpdateSecret(partialParams: ToOptional<{
      [K in keyof UpdateSecretRequest]: (UpdateSecretRequest)[K]
    }>): Request<UpdateSecretResponse, AWSError> {
        this.boot();
        return this.client.updateSecret(
          this.ops["UpdateSecret"].apply(partialParams)
        );
    }

    invokeUpdateSecretVersionStage(partialParams: ToOptional<{
      [K in keyof UpdateSecretVersionStageRequest]: (UpdateSecretVersionStageRequest)[K]
    }>): Request<UpdateSecretVersionStageResponse, AWSError> {
        this.boot();
        return this.client.updateSecretVersionStage(
          this.ops["UpdateSecretVersionStage"].apply(partialParams)
        );
    }

    invokeValidateResourcePolicy(partialParams: ToOptional<{
      [K in keyof ValidateResourcePolicyRequest]: (ValidateResourcePolicyRequest)[K]
    }>): Request<ValidateResourcePolicyResponse, AWSError> {
        this.boot();
        return this.client.validateResourcePolicy(
          this.ops["ValidateResourcePolicy"].apply(partialParams)
        );
    }
}