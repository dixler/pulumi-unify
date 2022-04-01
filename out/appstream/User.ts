
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateUserRequest,
    DeleteUserRequest,
    DescribeUsersRequest,
    DisableUserRequest,
    EnableUserRequest,
    CreateUserResult,
    DeleteUserResult,
    DescribeUsersResult,
    DisableUserResult,
    EnableUserResult
} from "aws-sdk/clients/appstream";
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.User {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appstream.User>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppStream()
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
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "UserName" | "AuthenticationType">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResult, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof Omit<DeleteUserRequest, "UserName" | "AuthenticationType">]: (DeleteUserRequest)[K]
    }>): Request<DeleteUserResult, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersRequest & keyof Omit<DescribeUsersRequest, "AuthenticationType">]: (DescribeUsersRequest)[K]
    }>): Request<DescribeUsersResult, AWSError> {
        this.boot();
        return this.client.describeUsers(
          this.ops["DescribeUsers"].apply(partialParams)
        );
    }

    invokeDisableUser(partialParams: ToOptional<{
      [K in keyof DisableUserRequest & keyof Omit<DisableUserRequest, "UserName" | "AuthenticationType">]: (DisableUserRequest)[K]
    }>): Request<DisableUserResult, AWSError> {
        this.boot();
        return this.client.disableUser(
          this.ops["DisableUser"].apply(partialParams)
        );
    }

    invokeEnableUser(partialParams: ToOptional<{
      [K in keyof EnableUserRequest & keyof Omit<EnableUserRequest, "UserName" | "AuthenticationType">]: (EnableUserRequest)[K]
    }>): Request<EnableUserResult, AWSError> {
        this.boot();
        return this.client.enableUser(
          this.ops["EnableUser"].apply(partialParams)
        );
    }
}