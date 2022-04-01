
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAccessRequest,
    CreateServerRequest,
    CreateUserRequest,
    CreateWorkflowRequest,
    DescribeAccessRequest,
    DescribeExecutionRequest,
    DescribeSecurityPolicyRequest,
    DescribeServerRequest,
    DescribeUserRequest,
    DescribeWorkflowRequest,
    ImportSshPublicKeyRequest,
    ListAccessesRequest,
    ListExecutionsRequest,
    ListSecurityPoliciesRequest,
    ListServersRequest,
    ListTagsForResourceRequest,
    ListUsersRequest,
    ListWorkflowsRequest,
    SendWorkflowStepStateRequest,
    TestIdentityProviderRequest,
    UpdateAccessRequest,
    UpdateServerRequest,
    UpdateUserRequest,
    CreateAccessResponse,
    CreateServerResponse,
    CreateUserResponse,
    CreateWorkflowResponse,
    DescribeAccessResponse,
    DescribeExecutionResponse,
    DescribeSecurityPolicyResponse,
    DescribeServerResponse,
    DescribeUserResponse,
    DescribeWorkflowResponse,
    ImportSshPublicKeyResponse,
    ListAccessesResponse,
    ListExecutionsResponse,
    ListSecurityPoliciesResponse,
    ListServersResponse,
    ListTagsForResourceResponse,
    ListUsersResponse,
    ListWorkflowsResponse,
    SendWorkflowStepStateResponse,
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

export default class extends aws.transfer.SshKey {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.transfer.SshKey>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Transfer()
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

    invokeCreateAccess(partialParams: ToOptional<{
      [K in keyof CreateAccessRequest & keyof Omit<CreateAccessRequest, "ServerId">]: (CreateAccessRequest)[K]
    }>): Request<CreateAccessResponse, AWSError> {
        this.boot();
        return this.client.createAccess(
          this.ops["CreateAccess"].apply(partialParams)
        );
    }

    invokeCreateServer(partialParams: ToOptional<{
      [K in keyof CreateServerRequest]: (CreateServerRequest)[K]
    }>): Request<CreateServerResponse, AWSError> {
        this.boot();
        return this.client.createServer(
          this.ops["CreateServer"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "ServerId" | "UserName">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest]: (CreateWorkflowRequest)[K]
    }>): Request<CreateWorkflowResponse, AWSError> {
        this.boot();
        return this.client.createWorkflow(
          this.ops["CreateWorkflow"].apply(partialParams)
        );
    }

    invokeDescribeAccess(partialParams: ToOptional<{
      [K in keyof DescribeAccessRequest & keyof Omit<DescribeAccessRequest, "ServerId">]: (DescribeAccessRequest)[K]
    }>): Request<DescribeAccessResponse, AWSError> {
        this.boot();
        return this.client.describeAccess(
          this.ops["DescribeAccess"].apply(partialParams)
        );
    }

    invokeDescribeExecution(partialParams: ToOptional<{
      [K in keyof DescribeExecutionRequest]: (DescribeExecutionRequest)[K]
    }>): Request<DescribeExecutionResponse, AWSError> {
        this.boot();
        return this.client.describeExecution(
          this.ops["DescribeExecution"].apply(partialParams)
        );
    }

    invokeDescribeSecurityPolicy(partialParams: ToOptional<{
      [K in keyof DescribeSecurityPolicyRequest]: (DescribeSecurityPolicyRequest)[K]
    }>): Request<DescribeSecurityPolicyResponse, AWSError> {
        this.boot();
        return this.client.describeSecurityPolicy(
          this.ops["DescribeSecurityPolicy"].apply(partialParams)
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
      [K in keyof DescribeUserRequest & keyof Omit<DescribeUserRequest, "ServerId" | "UserName">]: (DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeDescribeWorkflow(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowRequest]: (DescribeWorkflowRequest)[K]
    }>): Request<DescribeWorkflowResponse, AWSError> {
        this.boot();
        return this.client.describeWorkflow(
          this.ops["DescribeWorkflow"].apply(partialParams)
        );
    }

    invokeImportSshPublicKey(partialParams: ToOptional<{
      [K in keyof ImportSshPublicKeyRequest & keyof Omit<ImportSshPublicKeyRequest, "ServerId" | "UserName">]: (ImportSshPublicKeyRequest)[K]
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

    invokeListExecutions(partialParams: ToOptional<{
      [K in keyof ListExecutionsRequest]: (ListExecutionsRequest)[K]
    }>): Request<ListExecutionsResponse, AWSError> {
        this.boot();
        return this.client.listExecutions(
          this.ops["ListExecutions"].apply(partialParams)
        );
    }

    invokeListSecurityPolicies(partialParams: ToOptional<{
      [K in keyof ListSecurityPoliciesRequest]: (ListSecurityPoliciesRequest)[K]
    }>): Request<ListSecurityPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listSecurityPolicies(
          this.ops["ListSecurityPolicies"].apply(partialParams)
        );
    }

    invokeListServers(partialParams: ToOptional<{
      [K in keyof ListServersRequest]: (ListServersRequest)[K]
    }>): Request<ListServersResponse, AWSError> {
        this.boot();
        return this.client.listServers(
          this.ops["ListServers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
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

    invokeListWorkflows(partialParams: ToOptional<{
      [K in keyof ListWorkflowsRequest]: (ListWorkflowsRequest)[K]
    }>): Request<ListWorkflowsResponse, AWSError> {
        this.boot();
        return this.client.listWorkflows(
          this.ops["ListWorkflows"].apply(partialParams)
        );
    }

    invokeSendWorkflowStepState(partialParams: ToOptional<{
      [K in keyof SendWorkflowStepStateRequest]: (SendWorkflowStepStateRequest)[K]
    }>): Request<SendWorkflowStepStateResponse, AWSError> {
        this.boot();
        return this.client.sendWorkflowStepState(
          this.ops["SendWorkflowStepState"].apply(partialParams)
        );
    }

    invokeTestIdentityProvider(partialParams: ToOptional<{
      [K in keyof TestIdentityProviderRequest & keyof Omit<TestIdentityProviderRequest, "ServerId" | "UserName">]: (TestIdentityProviderRequest)[K]
    }>): Request<TestIdentityProviderResponse, AWSError> {
        this.boot();
        return this.client.testIdentityProvider(
          this.ops["TestIdentityProvider"].apply(partialParams)
        );
    }

    invokeUpdateAccess(partialParams: ToOptional<{
      [K in keyof UpdateAccessRequest & keyof Omit<UpdateAccessRequest, "ServerId">]: (UpdateAccessRequest)[K]
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
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "ServerId" | "UserName">]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].apply(partialParams)
        );
    }
}