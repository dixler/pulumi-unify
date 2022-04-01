
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateGlobalReplicationGroupMessage,
    CreateUserMessage,
    CreateUserGroupMessage,
    DecreaseNodeGroupsInGlobalReplicationGroupMessage,
    DeleteGlobalReplicationGroupMessage,
    DisassociateGlobalReplicationGroupMessage,
    FailoverGlobalReplicationGroupMessage,
    IncreaseNodeGroupsInGlobalReplicationGroupMessage,
    ModifyGlobalReplicationGroupMessage,
    RebalanceSlotsInGlobalReplicationGroupMessage,
    CreateGlobalReplicationGroupResult,
    User,
    UserGroup,
    DecreaseNodeGroupsInGlobalReplicationGroupResult,
    DeleteGlobalReplicationGroupResult,
    DisassociateGlobalReplicationGroupResult,
    FailoverGlobalReplicationGroupResult,
    IncreaseNodeGroupsInGlobalReplicationGroupResult,
    ModifyGlobalReplicationGroupResult,
    RebalanceSlotsInGlobalReplicationGroupResult
} from "aws-sdk/clients/elasticache";
const schema = require("../apis/elasticache-2015-02-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticache.GlobalReplicationGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticache.GlobalReplicationGroup>) {
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

    invokeCreateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateGlobalReplicationGroupMessage & keyof Omit<CreateGlobalReplicationGroupMessage, "GlobalReplicationGroupIdSuffix" | "PrimaryReplicationGroupId">]: (CreateGlobalReplicationGroupMessage)[K]
    }>): Request<CreateGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.createGlobalReplicationGroup(
          this.ops["CreateGlobalReplicationGroup"].apply(partialParams)
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

    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage & keyof Omit<DecreaseNodeGroupsInGlobalReplicationGroupMessage, "GlobalReplicationGroupId">]: (DecreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): Request<DecreaseNodeGroupsInGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(
          this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeDeleteGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteGlobalReplicationGroupMessage & keyof Omit<DeleteGlobalReplicationGroupMessage, "GlobalReplicationGroupId">]: (DeleteGlobalReplicationGroupMessage)[K]
    }>): Request<DeleteGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.deleteGlobalReplicationGroup(
          this.ops["DeleteGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeDisassociateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DisassociateGlobalReplicationGroupMessage & keyof Omit<DisassociateGlobalReplicationGroupMessage, "GlobalReplicationGroupId">]: (DisassociateGlobalReplicationGroupMessage)[K]
    }>): Request<DisassociateGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(
          this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeFailoverGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof FailoverGlobalReplicationGroupMessage & keyof Omit<FailoverGlobalReplicationGroupMessage, "GlobalReplicationGroupId" | "PrimaryReplicationGroupId">]: (FailoverGlobalReplicationGroupMessage)[K]
    }>): Request<FailoverGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.failoverGlobalReplicationGroup(
          this.ops["FailoverGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage & keyof Omit<IncreaseNodeGroupsInGlobalReplicationGroupMessage, "GlobalReplicationGroupId">]: (IncreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): Request<IncreaseNodeGroupsInGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(
          this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeModifyGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyGlobalReplicationGroupMessage & keyof Omit<ModifyGlobalReplicationGroupMessage, "GlobalReplicationGroupId">]: (ModifyGlobalReplicationGroupMessage)[K]
    }>): Request<ModifyGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.modifyGlobalReplicationGroup(
          this.ops["ModifyGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof RebalanceSlotsInGlobalReplicationGroupMessage & keyof Omit<RebalanceSlotsInGlobalReplicationGroupMessage, "GlobalReplicationGroupId">]: (RebalanceSlotsInGlobalReplicationGroupMessage)[K]
    }>): Request<RebalanceSlotsInGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.rebalanceSlotsInGlobalReplicationGroup(
          this.ops["RebalanceSlotsInGlobalReplicationGroup"].apply(partialParams)
        );
    }
}