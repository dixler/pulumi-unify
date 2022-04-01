
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAccessRequest,
    CreateUserRequest,
    DescribeAccessRequest,
    DescribeServerRequest,
    DescribeUserRequest,
    ImportSshPublicKeyRequest,
    ListAccessesRequest,
    ListUsersRequest,
    TestIdentityProviderRequest,
    UpdateAccessRequest,
    UpdateServerRequest,
    UpdateUserRequest,
    CreateAccessResponse,
    CreateUserResponse,
    DescribeAccessResponse,
    DescribeServerResponse,
    DescribeUserResponse,
    ImportSshPublicKeyResponse,
    ListAccessesResponse,
    ListUsersResponse,
    TestIdentityProviderResponse,
    UpdateAccessResponse,
    UpdateServerResponse,
    UpdateUserResponse
} from "aws-sdk/clients/transfer";
const schema = require("../apis/transfer-2018-11-05.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.transfer.Access {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.transfer.Access>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Transfer()
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

    invokeCreateAccess(partialParams: ToOptional<{
      [K in keyof CreateAccessRequest & keyof Omit<CreateAccessRequest, "Role" | "ServerId" | "ExternalId">]: (CreateAccessRequest)[K]
    }>): Request<CreateAccessResponse, AWSError> {
        this.boot();
        return this.client.createAccess(
          this.ops["CreateAccess"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "Role" | "ServerId">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDescribeAccess(partialParams: ToOptional<{
      [K in keyof DescribeAccessRequest & keyof Omit<DescribeAccessRequest, "ServerId" | "ExternalId">]: (DescribeAccessRequest)[K]
    }>): Request<DescribeAccessResponse, AWSError> {
        this.boot();
        return this.client.describeAccess(
          this.ops["DescribeAccess"].apply(partialParams)
        );
    }

    invokeDescribeServer(partialParams: ToOptional<{
      [K in keyof DescribeServerRequest & keyof Omit<DescribeServerRequest, "ServerId">]: (DescribeServerRequest)[K]
    }>): Request<DescribeServerResponse, AWSError> {
        this.boot();
        return this.client.describeServer(
          this.ops["DescribeServer"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof Omit<DescribeUserRequest, "ServerId">]: (DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeImportSshPublicKey(partialParams: ToOptional<{
      [K in keyof ImportSshPublicKeyRequest & keyof Omit<ImportSshPublicKeyRequest, "ServerId">]: (ImportSshPublicKeyRequest)[K]
    }>): Request<ImportSshPublicKeyResponse, AWSError> {
        this.boot();
        return this.client.importSshPublicKey(
          this.ops["ImportSshPublicKey"].apply(partialParams)
        );
    }

    invokeListAccesses(partialParams: ToOptional<{
      [K in keyof ListAccessesRequest & keyof Omit<ListAccessesRequest, "ServerId">]: (ListAccessesRequest)[K]
    }>): Request<ListAccessesResponse, AWSError> {
        this.boot();
        return this.client.listAccesses(
          this.ops["ListAccesses"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof Omit<ListUsersRequest, "ServerId">]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeTestIdentityProvider(partialParams: ToOptional<{
      [K in keyof TestIdentityProviderRequest & keyof Omit<TestIdentityProviderRequest, "ServerId">]: (TestIdentityProviderRequest)[K]
    }>): Request<TestIdentityProviderResponse, AWSError> {
        this.boot();
        return this.client.testIdentityProvider(
          this.ops["TestIdentityProvider"].apply(partialParams)
        );
    }

    invokeUpdateAccess(partialParams: ToOptional<{
      [K in keyof UpdateAccessRequest & keyof Omit<UpdateAccessRequest, "ServerId" | "ExternalId">]: (UpdateAccessRequest)[K]
    }>): Request<UpdateAccessResponse, AWSError> {
        this.boot();
        return this.client.updateAccess(
          this.ops["UpdateAccess"].apply(partialParams)
        );
    }

    invokeUpdateServer(partialParams: ToOptional<{
      [K in keyof UpdateServerRequest & keyof Omit<UpdateServerRequest, "ServerId">]: (UpdateServerRequest)[K]
    }>): Request<UpdateServerResponse, AWSError> {
        this.boot();
        return this.client.updateServer(
          this.ops["UpdateServer"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "ServerId">]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].apply(partialParams)
        );
    }
}