
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CompleteMigrationMessage,
    CreateReplicationGroupMessage,
    CreateSnapshotMessage,
    CreateUserMessage,
    CreateUserGroupMessage,
    DecreaseReplicaCountMessage,
    DeleteReplicationGroupMessage,
    DeleteSnapshotMessage,
    DisassociateGlobalReplicationGroupMessage,
    IncreaseReplicaCountMessage,
    ModifyReplicationGroupMessage,
    ModifyReplicationGroupShardConfigurationMessage,
    StartMigrationMessage,
    TestFailoverMessage,
    CompleteMigrationResponse,
    CreateReplicationGroupResult,
    CreateSnapshotResult,
    User,
    UserGroup,
    DecreaseReplicaCountResult,
    DeleteReplicationGroupResult,
    DeleteSnapshotResult,
    DisassociateGlobalReplicationGroupResult,
    IncreaseReplicaCountResult,
    ModifyReplicationGroupResult,
    ModifyReplicationGroupShardConfigurationResult,
    StartMigrationResponse,
    TestFailoverResult
} from "aws-sdk/clients/elasticache";
const schema = require("../apis/elasticache-2015-02-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticache.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticache.Cluster>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ElastiCache()
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

    invokeCompleteMigration(partialParams: ToOptional<{
      [K in keyof CompleteMigrationMessage & keyof Omit<CompleteMigrationMessage, "ReplicationGroupId">]: (CompleteMigrationMessage)[K]
    }>): Request<CompleteMigrationResponse, AWSError> {
        this.boot();
        return this.client.completeMigration(
          this.ops["CompleteMigration"].apply(partialParams)
        );
    }

    invokeCreateReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationGroupMessage & keyof Omit<CreateReplicationGroupMessage, "ReplicationGroupId">]: (CreateReplicationGroupMessage)[K]
    }>): Request<CreateReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.createReplicationGroup(
          this.ops["CreateReplicationGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotMessage & keyof Omit<CreateSnapshotMessage, "SnapshotName">]: (CreateSnapshotMessage)[K]
    }>): Request<CreateSnapshotResult, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserMessage & keyof Omit<CreateUserMessage, "Engine">]: (CreateUserMessage)[K]
    }>): Request<User, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserGroup(partialParams: ToOptional<{
      [K in keyof CreateUserGroupMessage & keyof Omit<CreateUserGroupMessage, "Engine">]: (CreateUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.createUserGroup(
          this.ops["CreateUserGroup"].apply(partialParams)
        );
    }

    invokeDecreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof DecreaseReplicaCountMessage & keyof Omit<DecreaseReplicaCountMessage, "ReplicationGroupId">]: (DecreaseReplicaCountMessage)[K]
    }>): Request<DecreaseReplicaCountResult, AWSError> {
        this.boot();
        return this.client.decreaseReplicaCount(
          this.ops["DecreaseReplicaCount"].apply(partialParams)
        );
    }

    invokeDeleteReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationGroupMessage & keyof Omit<DeleteReplicationGroupMessage, "ReplicationGroupId">]: (DeleteReplicationGroupMessage)[K]
    }>): Request<DeleteReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.deleteReplicationGroup(
          this.ops["DeleteReplicationGroup"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotMessage & keyof Omit<DeleteSnapshotMessage, "SnapshotName">]: (DeleteSnapshotMessage)[K]
    }>): Request<DeleteSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDisassociateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DisassociateGlobalReplicationGroupMessage & keyof Omit<DisassociateGlobalReplicationGroupMessage, "ReplicationGroupId">]: (DisassociateGlobalReplicationGroupMessage)[K]
    }>): Request<DisassociateGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(
          this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeIncreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof IncreaseReplicaCountMessage & keyof Omit<IncreaseReplicaCountMessage, "ReplicationGroupId">]: (IncreaseReplicaCountMessage)[K]
    }>): Request<IncreaseReplicaCountResult, AWSError> {
        this.boot();
        return this.client.increaseReplicaCount(
          this.ops["IncreaseReplicaCount"].apply(partialParams)
        );
    }

    invokeModifyReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupMessage & keyof Omit<ModifyReplicationGroupMessage, "ReplicationGroupId">]: (ModifyReplicationGroupMessage)[K]
    }>): Request<ModifyReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.modifyReplicationGroup(
          this.ops["ModifyReplicationGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationGroupShardConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupShardConfigurationMessage & keyof Omit<ModifyReplicationGroupShardConfigurationMessage, "ReplicationGroupId">]: (ModifyReplicationGroupShardConfigurationMessage)[K]
    }>): Request<ModifyReplicationGroupShardConfigurationResult, AWSError> {
        this.boot();
        return this.client.modifyReplicationGroupShardConfiguration(
          this.ops["ModifyReplicationGroupShardConfiguration"].apply(partialParams)
        );
    }

    invokeStartMigration(partialParams: ToOptional<{
      [K in keyof StartMigrationMessage & keyof Omit<StartMigrationMessage, "ReplicationGroupId">]: (StartMigrationMessage)[K]
    }>): Request<StartMigrationResponse, AWSError> {
        this.boot();
        return this.client.startMigration(
          this.ops["StartMigration"].apply(partialParams)
        );
    }

    invokeTestFailover(partialParams: ToOptional<{
      [K in keyof TestFailoverMessage & keyof Omit<TestFailoverMessage, "ReplicationGroupId">]: (TestFailoverMessage)[K]
    }>): Request<TestFailoverResult, AWSError> {
        this.boot();
        return this.client.testFailover(
          this.ops["TestFailover"].apply(partialParams)
        );
    }
}