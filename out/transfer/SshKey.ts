
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAccessRequest,
    CreateUserRequest,
    CreateWorkflowRequest,
    DeleteAccessRequest,
    DeleteServerRequest,
    DeleteSshPublicKeyRequest,
    DeleteUserRequest,
    DeleteWorkflowRequest,
    DescribeAccessRequest,
    DescribeExecutionRequest,
    DescribeSecurityPolicyRequest,
    DescribeServerRequest,
    DescribeUserRequest,
    DescribeWorkflowRequest,
    ImportSshPublicKeyRequest,
    ListAccessesRequest,
    ListExecutionsRequest,
    ListTagsForResourceRequest,
    ListUsersRequest,
    SendWorkflowStepStateRequest,
    StartServerRequest,
    StopServerRequest,
    TagResourceRequest,
    TestIdentityProviderRequest,
    UntagResourceRequest,
    UpdateAccessRequest,
    UpdateServerRequest,
    UpdateUserRequest,
    CreateAccessResponse,
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
    ListTagsForResourceResponse,
    ListUsersResponse,
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
    constructor(...args: ConstructorParameters<typeof aws.transfer.SshKey>) {
        super(...args)
        this.client = new awssdk.Transfer()
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

    invokeCreateAccess(partialParams: ToOptional<{
      [K in keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest]: (CreateAccessRequest & CreateAccessRequest & CreateAccessRequest)[K]
    }>): Request<CreateAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccess(
          this.ops["CreateAccess"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest]: (CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest)[K]
    }>): Request<CreateWorkflowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkflow(
          this.ops["CreateWorkflow"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccess(partialParams: ToOptional<{
      [K in keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest]: (DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccess(
          this.ops["DeleteAccess"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServer(partialParams: ToOptional<{
      [K in keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest]: (DeleteServerRequest & DeleteServerRequest & DeleteServerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServer(
          this.ops["DeleteServer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSshPublicKey(partialParams: ToOptional<{
      [K in keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest]: (DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSshPublicKey(
          this.ops["DeleteSshPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkflow(partialParams: ToOptional<{
      [K in keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest]: (DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkflow(
          this.ops["DeleteWorkflow"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAccess(partialParams: ToOptional<{
      [K in keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest]: (DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest)[K]
    }>): Request<DescribeAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccess(
          this.ops["DescribeAccess"].applicator.apply(partialParams)
        );
    }

    invokeDescribeExecution(partialParams: ToOptional<{
      [K in keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest]: (DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest)[K]
    }>): Request<DescribeExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExecution(
          this.ops["DescribeExecution"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSecurityPolicy(partialParams: ToOptional<{
      [K in keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest]: (DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest)[K]
    }>): Request<DescribeSecurityPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityPolicy(
          this.ops["DescribeSecurityPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDescribeServer(partialParams: ToOptional<{
      [K in keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest]: (DescribeServerRequest & DescribeServerRequest & DescribeServerRequest)[K]
    }>): Request<DescribeServerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServer(
          this.ops["DescribeServer"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkflow(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest]: (DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest)[K]
    }>): Request<DescribeWorkflowResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkflow(
          this.ops["DescribeWorkflow"].applicator.apply(partialParams)
        );
    }

    invokeImportSshPublicKey(partialParams: ToOptional<{
      [K in keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest]: (ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest)[K]
    }>): Request<ImportSshPublicKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importSshPublicKey(
          this.ops["ImportSshPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeListAccesses(partialParams: ToOptional<{
      [K in keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest]: (ListAccessesRequest & ListAccessesRequest & ListAccessesRequest)[K]
    }>): Request<ListAccessesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAccesses(
          this.ops["ListAccesses"].applicator.apply(partialParams)
        );
    }

    invokeListExecutions(partialParams: ToOptional<{
      [K in keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest]: (ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest)[K]
    }>): Request<ListExecutionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listExecutions(
          this.ops["ListExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest & ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].applicator.apply(partialParams)
        );
    }

    invokeSendWorkflowStepState(partialParams: ToOptional<{
      [K in keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest]: (SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest)[K]
    }>): Request<SendWorkflowStepStateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendWorkflowStepState(
          this.ops["SendWorkflowStepState"].applicator.apply(partialParams)
        );
    }

    invokeStartServer(partialParams: ToOptional<{
      [K in keyof StartServerRequest & keyof Omit<StartServerRequest, "ServerId"> & keyof StartServerRequest]: (StartServerRequest & Omit<StartServerRequest, "ServerId"> & StartServerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startServer(
          this.ops["StartServer"].applicator.apply(partialParams)
        );
    }

    invokeStopServer(partialParams: ToOptional<{
      [K in keyof StopServerRequest & keyof Omit<StopServerRequest, "ServerId"> & keyof StopServerRequest]: (StopServerRequest & Omit<StopServerRequest, "ServerId"> & StopServerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopServer(
          this.ops["StopServer"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestIdentityProvider(partialParams: ToOptional<{
      [K in keyof TestIdentityProviderRequest & keyof Omit<TestIdentityProviderRequest, "ServerId"> & keyof TestIdentityProviderRequest]: (TestIdentityProviderRequest & Omit<TestIdentityProviderRequest, "ServerId"> & TestIdentityProviderRequest)[K]
    }>): Request<TestIdentityProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testIdentityProvider(
          this.ops["TestIdentityProvider"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccess(partialParams: ToOptional<{
      [K in keyof UpdateAccessRequest & keyof Omit<UpdateAccessRequest, "ServerId"> & keyof UpdateAccessRequest]: (UpdateAccessRequest & Omit<UpdateAccessRequest, "ServerId"> & UpdateAccessRequest)[K]
    }>): Request<UpdateAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccess(
          this.ops["UpdateAccess"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServer(partialParams: ToOptional<{
      [K in keyof UpdateServerRequest & keyof Omit<UpdateServerRequest, "ServerId"> & keyof UpdateServerRequest]: (UpdateServerRequest & Omit<UpdateServerRequest, "ServerId"> & UpdateServerRequest)[K]
    }>): Request<UpdateServerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServer(
          this.ops["UpdateServer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "ServerId"> & keyof UpdateUserRequest]: (UpdateUserRequest & Omit<UpdateUserRequest, "ServerId"> & UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }
}