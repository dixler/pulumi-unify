
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
const schema = require("../apis/secretsmanager-2017-10-17.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.secretsmanager.SecretVersion {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.secretsmanager.SecretVersion>) {
        super(...args)
        this.client = new awssdk.SecretsManager()
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

    invokeCancelRotateSecret(partialParams: ToOptional<{
      [K in keyof CancelRotateSecretRequest & keyof CancelRotateSecretRequest & keyof CancelRotateSecretRequest & keyof CancelRotateSecretRequest & keyof CancelRotateSecretRequest]: (CancelRotateSecretRequest & CancelRotateSecretRequest & CancelRotateSecretRequest & CancelRotateSecretRequest & CancelRotateSecretRequest)[K]
    }>): Request<CancelRotateSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelRotateSecret(
          this.ops["CancelRotateSecret"].applicator.apply(partialParams)
        );
    }

    invokeCreateSecret(partialParams: ToOptional<{
      [K in keyof CreateSecretRequest & keyof CreateSecretRequest & keyof CreateSecretRequest & keyof CreateSecretRequest & keyof CreateSecretRequest]: (CreateSecretRequest & CreateSecretRequest & CreateSecretRequest & CreateSecretRequest & CreateSecretRequest)[K]
    }>): Request<CreateSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecret(
          this.ops["CreateSecret"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyRequest & keyof DeleteResourcePolicyRequest & keyof DeleteResourcePolicyRequest & keyof DeleteResourcePolicyRequest & keyof DeleteResourcePolicyRequest]: (DeleteResourcePolicyRequest & DeleteResourcePolicyRequest & DeleteResourcePolicyRequest & DeleteResourcePolicyRequest & DeleteResourcePolicyRequest)[K]
    }>): Request<DeleteResourcePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourcePolicy(
          this.ops["DeleteResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSecret(partialParams: ToOptional<{
      [K in keyof DeleteSecretRequest & keyof DeleteSecretRequest & keyof DeleteSecretRequest & keyof DeleteSecretRequest & keyof DeleteSecretRequest]: (DeleteSecretRequest & DeleteSecretRequest & DeleteSecretRequest & DeleteSecretRequest & DeleteSecretRequest)[K]
    }>): Request<DeleteSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecret(
          this.ops["DeleteSecret"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSecret(partialParams: ToOptional<{
      [K in keyof DescribeSecretRequest & keyof DescribeSecretRequest & keyof DescribeSecretRequest & keyof DescribeSecretRequest & keyof DescribeSecretRequest]: (DescribeSecretRequest & DescribeSecretRequest & DescribeSecretRequest & DescribeSecretRequest & DescribeSecretRequest)[K]
    }>): Request<DescribeSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecret(
          this.ops["DescribeSecret"].applicator.apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyRequest & keyof GetResourcePolicyRequest & keyof GetResourcePolicyRequest & keyof GetResourcePolicyRequest & keyof GetResourcePolicyRequest]: (GetResourcePolicyRequest & GetResourcePolicyRequest & GetResourcePolicyRequest & GetResourcePolicyRequest & GetResourcePolicyRequest)[K]
    }>): Request<GetResourcePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourcePolicy(
          this.ops["GetResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetSecretValue(partialParams: ToOptional<{
      [K in keyof GetSecretValueRequest & keyof GetSecretValueRequest & keyof GetSecretValueRequest & keyof GetSecretValueRequest & keyof GetSecretValueRequest]: (GetSecretValueRequest & GetSecretValueRequest & GetSecretValueRequest & GetSecretValueRequest & GetSecretValueRequest)[K]
    }>): Request<GetSecretValueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSecretValue(
          this.ops["GetSecretValue"].applicator.apply(partialParams)
        );
    }

    invokeListSecretVersionIds(partialParams: ToOptional<{
      [K in keyof ListSecretVersionIdsRequest & keyof ListSecretVersionIdsRequest & keyof ListSecretVersionIdsRequest & keyof ListSecretVersionIdsRequest & keyof ListSecretVersionIdsRequest]: (ListSecretVersionIdsRequest & ListSecretVersionIdsRequest & ListSecretVersionIdsRequest & ListSecretVersionIdsRequest & ListSecretVersionIdsRequest)[K]
    }>): Request<ListSecretVersionIdsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecretVersionIds(
          this.ops["ListSecretVersionIds"].applicator.apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest)[K]
    }>): Request<PutResourcePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutSecretValue(partialParams: ToOptional<{
      [K in keyof PutSecretValueRequest & keyof PutSecretValueRequest & keyof PutSecretValueRequest & keyof PutSecretValueRequest & keyof PutSecretValueRequest]: (PutSecretValueRequest & PutSecretValueRequest & PutSecretValueRequest & PutSecretValueRequest & PutSecretValueRequest)[K]
    }>): Request<PutSecretValueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSecretValue(
          this.ops["PutSecretValue"].applicator.apply(partialParams)
        );
    }

    invokeRemoveRegionsFromReplication(partialParams: ToOptional<{
      [K in keyof RemoveRegionsFromReplicationRequest & keyof RemoveRegionsFromReplicationRequest & keyof RemoveRegionsFromReplicationRequest & keyof RemoveRegionsFromReplicationRequest & keyof RemoveRegionsFromReplicationRequest]: (RemoveRegionsFromReplicationRequest & RemoveRegionsFromReplicationRequest & RemoveRegionsFromReplicationRequest & RemoveRegionsFromReplicationRequest & RemoveRegionsFromReplicationRequest)[K]
    }>): Request<RemoveRegionsFromReplicationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRegionsFromReplication(
          this.ops["RemoveRegionsFromReplication"].applicator.apply(partialParams)
        );
    }

    invokeReplicateSecretToRegions(partialParams: ToOptional<{
      [K in keyof ReplicateSecretToRegionsRequest & keyof ReplicateSecretToRegionsRequest & keyof ReplicateSecretToRegionsRequest & keyof ReplicateSecretToRegionsRequest & keyof ReplicateSecretToRegionsRequest]: (ReplicateSecretToRegionsRequest & ReplicateSecretToRegionsRequest & ReplicateSecretToRegionsRequest & ReplicateSecretToRegionsRequest & ReplicateSecretToRegionsRequest)[K]
    }>): Request<ReplicateSecretToRegionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replicateSecretToRegions(
          this.ops["ReplicateSecretToRegions"].applicator.apply(partialParams)
        );
    }

    invokeRestoreSecret(partialParams: ToOptional<{
      [K in keyof RestoreSecretRequest & keyof RestoreSecretRequest & keyof RestoreSecretRequest & keyof RestoreSecretRequest & keyof RestoreSecretRequest]: (RestoreSecretRequest & RestoreSecretRequest & RestoreSecretRequest & RestoreSecretRequest & RestoreSecretRequest)[K]
    }>): Request<RestoreSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreSecret(
          this.ops["RestoreSecret"].applicator.apply(partialParams)
        );
    }

    invokeRotateSecret(partialParams: ToOptional<{
      [K in keyof RotateSecretRequest & keyof RotateSecretRequest & keyof RotateSecretRequest & keyof RotateSecretRequest & keyof RotateSecretRequest]: (RotateSecretRequest & RotateSecretRequest & RotateSecretRequest & RotateSecretRequest & RotateSecretRequest)[K]
    }>): Request<RotateSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rotateSecret(
          this.ops["RotateSecret"].applicator.apply(partialParams)
        );
    }

    invokeStopReplicationToReplica(partialParams: ToOptional<{
      [K in keyof StopReplicationToReplicaRequest & keyof StopReplicationToReplicaRequest & keyof Omit<StopReplicationToReplicaRequest, "SecretId"> & keyof StopReplicationToReplicaRequest & keyof StopReplicationToReplicaRequest]: (StopReplicationToReplicaRequest & StopReplicationToReplicaRequest & Omit<StopReplicationToReplicaRequest, "SecretId"> & StopReplicationToReplicaRequest & StopReplicationToReplicaRequest)[K]
    }>): Request<StopReplicationToReplicaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopReplicationToReplica(
          this.ops["StopReplicationToReplica"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "SecretId"> & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "SecretId"> & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "SecretId"> & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "SecretId"> & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSecret(partialParams: ToOptional<{
      [K in keyof UpdateSecretRequest & keyof UpdateSecretRequest & keyof Omit<UpdateSecretRequest, "SecretId"> & keyof UpdateSecretRequest & keyof UpdateSecretRequest]: (UpdateSecretRequest & UpdateSecretRequest & Omit<UpdateSecretRequest, "SecretId"> & UpdateSecretRequest & UpdateSecretRequest)[K]
    }>): Request<UpdateSecretResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSecret(
          this.ops["UpdateSecret"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSecretVersionStage(partialParams: ToOptional<{
      [K in keyof UpdateSecretVersionStageRequest & keyof UpdateSecretVersionStageRequest & keyof Omit<UpdateSecretVersionStageRequest, "SecretId"> & keyof UpdateSecretVersionStageRequest & keyof UpdateSecretVersionStageRequest]: (UpdateSecretVersionStageRequest & UpdateSecretVersionStageRequest & Omit<UpdateSecretVersionStageRequest, "SecretId"> & UpdateSecretVersionStageRequest & UpdateSecretVersionStageRequest)[K]
    }>): Request<UpdateSecretVersionStageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSecretVersionStage(
          this.ops["UpdateSecretVersionStage"].applicator.apply(partialParams)
        );
    }

    invokeValidateResourcePolicy(partialParams: ToOptional<{
      [K in keyof ValidateResourcePolicyRequest & keyof ValidateResourcePolicyRequest & keyof ValidateResourcePolicyRequest & keyof ValidateResourcePolicyRequest & keyof ValidateResourcePolicyRequest]: (ValidateResourcePolicyRequest & ValidateResourcePolicyRequest & ValidateResourcePolicyRequest & ValidateResourcePolicyRequest & ValidateResourcePolicyRequest)[K]
    }>): Request<ValidateResourcePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateResourcePolicy(
          this.ops["ValidateResourcePolicy"].applicator.apply(partialParams)
        );
    }
}