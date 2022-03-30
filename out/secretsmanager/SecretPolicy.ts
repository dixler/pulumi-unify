
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelRotateSecretRequest,
    CreateSecretRequest,
    DeleteResourcePolicyRequest,
    DeleteSecretRequest,
    DescribeSecretRequest,
    GetResourcePolicyRequest,
    GetSecretValueRequest,
    ListSecretVersionIdsRequest,
    PutResourcePolicyRequest,
    PutSecretValueRequest,
    RemoveRegionsFromReplicationRequest,
    ReplicateSecretToRegionsRequest,
    RestoreSecretRequest,
    RotateSecretRequest,
    StopReplicationToReplicaRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateSecretRequest,
    UpdateSecretVersionStageRequest,
    ValidateResourcePolicyRequest,
    CancelRotateSecretResponse,
    CreateSecretResponse,
    DeleteResourcePolicyResponse,
    DeleteSecretResponse,
    DescribeSecretResponse,
    GetResourcePolicyResponse,
    GetSecretValueResponse,
    ListSecretVersionIdsResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.secretsmanager.SecretPolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.secretsmanager.SecretPolicy>) {
        super(...args)
        this.client = new awssdk.SecretsManager()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/secretsmanager-2017-10-17.normal.json"), this.client)
    }

    invokeCancelRotateSecret(partialParams: ToOptional<{
      [K in keyof CancelRotateSecretRequest & keyof CancelRotateSecretRequest]: (CancelRotateSecretRequest & CancelRotateSecretRequest)[K]
    }>): CancelRotateSecretResponse {
        return this.client.cancelRotateSecret(
            this.ops["CancelRotateSecret"].apply(partialParams)
        );
    }

    invokeCreateSecret(partialParams: ToOptional<{
      [K in keyof CreateSecretRequest & keyof CreateSecretRequest]: (CreateSecretRequest & CreateSecretRequest)[K]
    }>): CreateSecretResponse {
        return this.client.createSecret(
            this.ops["CreateSecret"].apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyRequest & keyof DeleteResourcePolicyRequest]: (DeleteResourcePolicyRequest & DeleteResourcePolicyRequest)[K]
    }>): DeleteResourcePolicyResponse {
        return this.client.deleteResourcePolicy(
            this.ops["DeleteResourcePolicy"].apply(partialParams)
        );
    }

    invokeDeleteSecret(partialParams: ToOptional<{
      [K in keyof DeleteSecretRequest & keyof DeleteSecretRequest]: (DeleteSecretRequest & DeleteSecretRequest)[K]
    }>): DeleteSecretResponse {
        return this.client.deleteSecret(
            this.ops["DeleteSecret"].apply(partialParams)
        );
    }

    invokeDescribeSecret(partialParams: ToOptional<{
      [K in keyof DescribeSecretRequest & keyof DescribeSecretRequest]: (DescribeSecretRequest & DescribeSecretRequest)[K]
    }>): DescribeSecretResponse {
        return this.client.describeSecret(
            this.ops["DescribeSecret"].apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyRequest & keyof GetResourcePolicyRequest]: (GetResourcePolicyRequest & GetResourcePolicyRequest)[K]
    }>): GetResourcePolicyResponse {
        return this.client.getResourcePolicy(
            this.ops["GetResourcePolicy"].apply(partialParams)
        );
    }

    invokeGetSecretValue(partialParams: ToOptional<{
      [K in keyof GetSecretValueRequest & keyof GetSecretValueRequest]: (GetSecretValueRequest & GetSecretValueRequest)[K]
    }>): GetSecretValueResponse {
        return this.client.getSecretValue(
            this.ops["GetSecretValue"].apply(partialParams)
        );
    }

    invokeListSecretVersionIds(partialParams: ToOptional<{
      [K in keyof ListSecretVersionIdsRequest & keyof ListSecretVersionIdsRequest]: (ListSecretVersionIdsRequest & ListSecretVersionIdsRequest)[K]
    }>): ListSecretVersionIdsResponse {
        return this.client.listSecretVersionIds(
            this.ops["ListSecretVersionIds"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest & PutResourcePolicyRequest)[K]
    }>): PutResourcePolicyResponse {
        return this.client.putResourcePolicy(
            this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokePutSecretValue(partialParams: ToOptional<{
      [K in keyof PutSecretValueRequest & keyof PutSecretValueRequest]: (PutSecretValueRequest & PutSecretValueRequest)[K]
    }>): PutSecretValueResponse {
        return this.client.putSecretValue(
            this.ops["PutSecretValue"].apply(partialParams)
        );
    }

    invokeRemoveRegionsFromReplication(partialParams: ToOptional<{
      [K in keyof RemoveRegionsFromReplicationRequest & keyof RemoveRegionsFromReplicationRequest]: (RemoveRegionsFromReplicationRequest & RemoveRegionsFromReplicationRequest)[K]
    }>): RemoveRegionsFromReplicationResponse {
        return this.client.removeRegionsFromReplication(
            this.ops["RemoveRegionsFromReplication"].apply(partialParams)
        );
    }

    invokeReplicateSecretToRegions(partialParams: ToOptional<{
      [K in keyof ReplicateSecretToRegionsRequest & keyof ReplicateSecretToRegionsRequest]: (ReplicateSecretToRegionsRequest & ReplicateSecretToRegionsRequest)[K]
    }>): ReplicateSecretToRegionsResponse {
        return this.client.replicateSecretToRegions(
            this.ops["ReplicateSecretToRegions"].apply(partialParams)
        );
    }

    invokeRestoreSecret(partialParams: ToOptional<{
      [K in keyof RestoreSecretRequest & keyof RestoreSecretRequest]: (RestoreSecretRequest & RestoreSecretRequest)[K]
    }>): RestoreSecretResponse {
        return this.client.restoreSecret(
            this.ops["RestoreSecret"].apply(partialParams)
        );
    }

    invokeRotateSecret(partialParams: ToOptional<{
      [K in keyof RotateSecretRequest & keyof RotateSecretRequest]: (RotateSecretRequest & RotateSecretRequest)[K]
    }>): RotateSecretResponse {
        return this.client.rotateSecret(
            this.ops["RotateSecret"].apply(partialParams)
        );
    }

    invokeStopReplicationToReplica(partialParams: ToOptional<{
      [K in keyof StopReplicationToReplicaRequest & keyof StopReplicationToReplicaRequest]: (StopReplicationToReplicaRequest & StopReplicationToReplicaRequest)[K]
    }>): StopReplicationToReplicaResponse {
        return this.client.stopReplicationToReplica(
            this.ops["StopReplicationToReplica"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateSecret(partialParams: ToOptional<{
      [K in keyof UpdateSecretRequest & keyof UpdateSecretRequest]: (UpdateSecretRequest & UpdateSecretRequest)[K]
    }>): UpdateSecretResponse {
        return this.client.updateSecret(
            this.ops["UpdateSecret"].apply(partialParams)
        );
    }

    invokeUpdateSecretVersionStage(partialParams: ToOptional<{
      [K in keyof UpdateSecretVersionStageRequest & keyof UpdateSecretVersionStageRequest]: (UpdateSecretVersionStageRequest & UpdateSecretVersionStageRequest)[K]
    }>): UpdateSecretVersionStageResponse {
        return this.client.updateSecretVersionStage(
            this.ops["UpdateSecretVersionStage"].apply(partialParams)
        );
    }

    invokeValidateResourcePolicy(partialParams: ToOptional<{
      [K in keyof ValidateResourcePolicyRequest & keyof ValidateResourcePolicyRequest]: (ValidateResourcePolicyRequest & ValidateResourcePolicyRequest)[K]
    }>): ValidateResourcePolicyResponse {
        return this.client.validateResourcePolicy(
            this.ops["ValidateResourcePolicy"].apply(partialParams)
        );
    }
}