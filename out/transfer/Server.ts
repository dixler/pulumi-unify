
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.transfer.Server {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.transfer.Server>) {
        super(...args)
        this.client = new awssdk.Transfer()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/transfer-2018-11-05.normal.json"), this.client)
    }

    invokeCreateAccess(partialParams: ToOptional<{
      [K in keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest & keyof CreateAccessRequest]: (CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest & CreateAccessRequest)[K]
    }>): CreateAccessResponse {
        return this.client.createAccess(
            this.ops["CreateAccess"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateWorkflow(partialParams: ToOptional<{
      [K in keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest & keyof CreateWorkflowRequest]: (CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest & CreateWorkflowRequest)[K]
    }>): CreateWorkflowResponse {
        return this.client.createWorkflow(
            this.ops["CreateWorkflow"].apply(partialParams)
        );
    }

    invokeDeleteAccess(partialParams: ToOptional<{
      [K in keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest & keyof DeleteAccessRequest]: (DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest & DeleteAccessRequest)[K]
    }>): void {
        return this.client.deleteAccess(
            this.ops["DeleteAccess"].apply(partialParams)
        );
    }

    invokeDeleteServer(partialParams: ToOptional<{
      [K in keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest & keyof DeleteServerRequest]: (DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest & DeleteServerRequest)[K]
    }>): void {
        return this.client.deleteServer(
            this.ops["DeleteServer"].apply(partialParams)
        );
    }

    invokeDeleteSshPublicKey(partialParams: ToOptional<{
      [K in keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest & keyof DeleteSshPublicKeyRequest]: (DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest & DeleteSshPublicKeyRequest)[K]
    }>): void {
        return this.client.deleteSshPublicKey(
            this.ops["DeleteSshPublicKey"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): void {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteWorkflow(partialParams: ToOptional<{
      [K in keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest & keyof DeleteWorkflowRequest]: (DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest & DeleteWorkflowRequest)[K]
    }>): void {
        return this.client.deleteWorkflow(
            this.ops["DeleteWorkflow"].apply(partialParams)
        );
    }

    invokeDescribeAccess(partialParams: ToOptional<{
      [K in keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest & keyof DescribeAccessRequest]: (DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest & DescribeAccessRequest)[K]
    }>): DescribeAccessResponse {
        return this.client.describeAccess(
            this.ops["DescribeAccess"].apply(partialParams)
        );
    }

    invokeDescribeExecution(partialParams: ToOptional<{
      [K in keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest & keyof DescribeExecutionRequest]: (DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest & DescribeExecutionRequest)[K]
    }>): DescribeExecutionResponse {
        return this.client.describeExecution(
            this.ops["DescribeExecution"].apply(partialParams)
        );
    }

    invokeDescribeSecurityPolicy(partialParams: ToOptional<{
      [K in keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest & keyof DescribeSecurityPolicyRequest]: (DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest & DescribeSecurityPolicyRequest)[K]
    }>): DescribeSecurityPolicyResponse {
        return this.client.describeSecurityPolicy(
            this.ops["DescribeSecurityPolicy"].apply(partialParams)
        );
    }

    invokeDescribeServer(partialParams: ToOptional<{
      [K in keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest & keyof DescribeServerRequest]: (DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest & DescribeServerRequest)[K]
    }>): DescribeServerResponse {
        return this.client.describeServer(
            this.ops["DescribeServer"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): DescribeUserResponse {
        return this.client.describeUser(
            this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeDescribeWorkflow(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest & keyof DescribeWorkflowRequest]: (DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest & DescribeWorkflowRequest)[K]
    }>): DescribeWorkflowResponse {
        return this.client.describeWorkflow(
            this.ops["DescribeWorkflow"].apply(partialParams)
        );
    }

    invokeImportSshPublicKey(partialParams: ToOptional<{
      [K in keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest & keyof ImportSshPublicKeyRequest]: (ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest & ImportSshPublicKeyRequest)[K]
    }>): ImportSshPublicKeyResponse {
        return this.client.importSshPublicKey(
            this.ops["ImportSshPublicKey"].apply(partialParams)
        );
    }

    invokeListAccesses(partialParams: ToOptional<{
      [K in keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest & keyof ListAccessesRequest]: (ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest & ListAccessesRequest)[K]
    }>): ListAccessesResponse {
        return this.client.listAccesses(
            this.ops["ListAccesses"].apply(partialParams)
        );
    }

    invokeListExecutions(partialParams: ToOptional<{
      [K in keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest & keyof ListExecutionsRequest]: (ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest & ListExecutionsRequest)[K]
    }>): ListExecutionsResponse {
        return this.client.listExecutions(
            this.ops["ListExecutions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "Arn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "Arn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeSendWorkflowStepState(partialParams: ToOptional<{
      [K in keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest & keyof SendWorkflowStepStateRequest]: (SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest & SendWorkflowStepStateRequest)[K]
    }>): SendWorkflowStepStateResponse {
        return this.client.sendWorkflowStepState(
            this.ops["SendWorkflowStepState"].apply(partialParams)
        );
    }

    invokeStartServer(partialParams: ToOptional<{
      [K in keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest & keyof StartServerRequest]: (StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest & StartServerRequest)[K]
    }>): void {
        return this.client.startServer(
            this.ops["StartServer"].apply(partialParams)
        );
    }

    invokeStopServer(partialParams: ToOptional<{
      [K in keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest & keyof StopServerRequest]: (StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest & StopServerRequest)[K]
    }>): void {
        return this.client.stopServer(
            this.ops["StopServer"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "Arn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "Arn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestIdentityProvider(partialParams: ToOptional<{
      [K in keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest & keyof TestIdentityProviderRequest]: (TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest & TestIdentityProviderRequest)[K]
    }>): TestIdentityProviderResponse {
        return this.client.testIdentityProvider(
            this.ops["TestIdentityProvider"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "Arn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "Arn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccess(partialParams: ToOptional<{
      [K in keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest & keyof UpdateAccessRequest]: (UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest & UpdateAccessRequest)[K]
    }>): UpdateAccessResponse {
        return this.client.updateAccess(
            this.ops["UpdateAccess"].apply(partialParams)
        );
    }

    invokeUpdateServer(partialParams: ToOptional<{
      [K in keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest & keyof UpdateServerRequest]: (UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest & UpdateServerRequest)[K]
    }>): UpdateServerResponse {
        return this.client.updateServer(
            this.ops["UpdateServer"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): UpdateUserResponse {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }
}