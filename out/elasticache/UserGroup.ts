
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateUserMessage,
    CreateUserGroupMessage,
    DeleteUserGroupMessage,
    ModifyUserGroupMessage,
    User,
    UserGroup
} from "aws-sdk/clients/elasticache";
const schema = require("../apis/elasticache-2015-02-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticache.UserGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticache.UserGroup>) {
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

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserMessage & keyof Omit<CreateUserMessage, "Engine">]: (CreateUserMessage)[K]
    }>): Request<User, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserGroup(partialParams: ToOptional<{
      [K in keyof CreateUserGroupMessage & keyof Omit<CreateUserGroupMessage, "UserGroupId" | "Engine">]: (CreateUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.createUserGroup(
          this.ops["CreateUserGroup"].apply(partialParams)
        );
    }

    invokeDeleteUserGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserGroupMessage & keyof Omit<DeleteUserGroupMessage, "UserGroupId">]: (DeleteUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.deleteUserGroup(
          this.ops["DeleteUserGroup"].apply(partialParams)
        );
    }

    invokeModifyUserGroup(partialParams: ToOptional<{
      [K in keyof ModifyUserGroupMessage & keyof Omit<ModifyUserGroupMessage, "UserGroupId">]: (ModifyUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.modifyUserGroup(
          this.ops["ModifyUserGroup"].apply(partialParams)
        );
    }
}