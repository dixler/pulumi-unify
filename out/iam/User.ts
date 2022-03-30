
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddClientIDToOpenIDConnectProviderRequest,
    AddRoleToInstanceProfileRequest,
    AddUserToGroupRequest,
    AttachGroupPolicyRequest,
    AttachRolePolicyRequest,
    AttachUserPolicyRequest,
    ChangePasswordRequest,
    CreateAccountAliasRequest,
    CreateGroupRequest,
    CreateInstanceProfileRequest,
    CreateLoginProfileRequest,
    CreateOpenIDConnectProviderRequest,
    CreatePolicyRequest,
    CreatePolicyVersionRequest,
    CreateRoleRequest,
    CreateSAMLProviderRequest,
    CreateServiceLinkedRoleRequest,
    CreateServiceSpecificCredentialRequest,
    CreateUserRequest,
    CreateVirtualMFADeviceRequest,
    DeactivateMFADeviceRequest,
    DeleteAccessKeyRequest,
    DeleteAccountAliasRequest,
    DeleteGroupRequest,
    DeleteGroupPolicyRequest,
    DeleteInstanceProfileRequest,
    DeleteLoginProfileRequest,
    DeleteOpenIDConnectProviderRequest,
    DeletePolicyRequest,
    DeletePolicyVersionRequest,
    DeleteRoleRequest,
    DeleteRolePermissionsBoundaryRequest,
    DeleteRolePolicyRequest,
    DeleteSAMLProviderRequest,
    DeleteSSHPublicKeyRequest,
    DeleteServerCertificateRequest,
    DeleteServiceLinkedRoleRequest,
    DeleteServiceSpecificCredentialRequest,
    DeleteSigningCertificateRequest,
    DeleteUserRequest,
    DeleteUserPermissionsBoundaryRequest,
    DeleteUserPolicyRequest,
    DeleteVirtualMFADeviceRequest,
    DetachGroupPolicyRequest,
    DetachRolePolicyRequest,
    DetachUserPolicyRequest,
    EnableMFADeviceRequest,
    GenerateOrganizationsAccessReportRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetAccessKeyLastUsedRequest,
    GetContextKeysForCustomPolicyRequest,
    GetContextKeysForPrincipalPolicyRequest,
    GetGroupRequest,
    GetGroupPolicyRequest,
    GetInstanceProfileRequest,
    GetLoginProfileRequest,
    GetOpenIDConnectProviderRequest,
    GetOrganizationsAccessReportRequest,
    GetPolicyRequest,
    GetPolicyVersionRequest,
    GetRoleRequest,
    GetRolePolicyRequest,
    GetSAMLProviderRequest,
    GetSSHPublicKeyRequest,
    GetServerCertificateRequest,
    GetServiceLastAccessedDetailsRequest,
    GetServiceLastAccessedDetailsWithEntitiesRequest,
    GetServiceLinkedRoleDeletionStatusRequest,
    GetUserPolicyRequest,
    ListAttachedGroupPoliciesRequest,
    ListAttachedRolePoliciesRequest,
    ListAttachedUserPoliciesRequest,
    ListEntitiesForPolicyRequest,
    ListGroupPoliciesRequest,
    ListGroupsForUserRequest,
    ListInstanceProfileTagsRequest,
    ListInstanceProfilesForRoleRequest,
    ListMFADeviceTagsRequest,
    ListOpenIDConnectProviderTagsRequest,
    ListPoliciesGrantingServiceAccessRequest,
    ListPolicyTagsRequest,
    ListPolicyVersionsRequest,
    ListRolePoliciesRequest,
    ListRoleTagsRequest,
    ListSAMLProviderTagsRequest,
    ListServerCertificateTagsRequest,
    ListUserPoliciesRequest,
    ListUserTagsRequest,
    PutGroupPolicyRequest,
    PutRolePermissionsBoundaryRequest,
    PutRolePolicyRequest,
    PutUserPermissionsBoundaryRequest,
    PutUserPolicyRequest,
    RemoveClientIDFromOpenIDConnectProviderRequest,
    RemoveRoleFromInstanceProfileRequest,
    RemoveUserFromGroupRequest,
    ResetServiceSpecificCredentialRequest,
    ResyncMFADeviceRequest,
    SetDefaultPolicyVersionRequest,
    SetSecurityTokenServicePreferencesRequest,
    SimulateCustomPolicyRequest,
    SimulatePrincipalPolicyRequest,
    TagInstanceProfileRequest,
    TagMFADeviceRequest,
    TagOpenIDConnectProviderRequest,
    TagPolicyRequest,
    TagRoleRequest,
    TagSAMLProviderRequest,
    TagServerCertificateRequest,
    TagUserRequest,
    UntagInstanceProfileRequest,
    UntagMFADeviceRequest,
    UntagOpenIDConnectProviderRequest,
    UntagPolicyRequest,
    UntagRoleRequest,
    UntagSAMLProviderRequest,
    UntagServerCertificateRequest,
    UntagUserRequest,
    UpdateAccessKeyRequest,
    UpdateAssumeRolePolicyRequest,
    UpdateGroupRequest,
    UpdateLoginProfileRequest,
    UpdateOpenIDConnectProviderThumbprintRequest,
    UpdateRoleRequest,
    UpdateRoleDescriptionRequest,
    UpdateSAMLProviderRequest,
    UpdateSSHPublicKeyRequest,
    UpdateServerCertificateRequest,
    UpdateServiceSpecificCredentialRequest,
    UpdateSigningCertificateRequest,
    UpdateUserRequest,
    UploadSSHPublicKeyRequest,
    UploadServerCertificateRequest,
    UploadSigningCertificateRequest,
    CreateGroupResponse,
    CreateInstanceProfileResponse,
    CreateLoginProfileResponse,
    CreateOpenIDConnectProviderResponse,
    CreatePolicyResponse,
    CreatePolicyVersionResponse,
    CreateRoleResponse,
    CreateSAMLProviderResponse,
    CreateServiceLinkedRoleResponse,
    CreateServiceSpecificCredentialResponse,
    CreateUserResponse,
    CreateVirtualMFADeviceResponse,
    DeleteServiceLinkedRoleResponse,
    GenerateOrganizationsAccessReportResponse,
    GenerateServiceLastAccessedDetailsResponse,
    GetAccessKeyLastUsedResponse,
    GetContextKeysForPolicyResponse,
    GetGroupResponse,
    GetGroupPolicyResponse,
    GetInstanceProfileResponse,
    GetLoginProfileResponse,
    GetOpenIDConnectProviderResponse,
    GetOrganizationsAccessReportResponse,
    GetPolicyResponse,
    GetPolicyVersionResponse,
    GetRoleResponse,
    GetRolePolicyResponse,
    GetSAMLProviderResponse,
    GetSSHPublicKeyResponse,
    GetServerCertificateResponse,
    GetServiceLastAccessedDetailsResponse,
    GetServiceLastAccessedDetailsWithEntitiesResponse,
    GetServiceLinkedRoleDeletionStatusResponse,
    GetUserPolicyResponse,
    ListAttachedGroupPoliciesResponse,
    ListAttachedRolePoliciesResponse,
    ListAttachedUserPoliciesResponse,
    ListEntitiesForPolicyResponse,
    ListGroupPoliciesResponse,
    ListGroupsForUserResponse,
    ListInstanceProfileTagsResponse,
    ListInstanceProfilesForRoleResponse,
    ListMFADeviceTagsResponse,
    ListOpenIDConnectProviderTagsResponse,
    ListPoliciesGrantingServiceAccessResponse,
    ListPolicyTagsResponse,
    ListPolicyVersionsResponse,
    ListRolePoliciesResponse,
    ListRoleTagsResponse,
    ListSAMLProviderTagsResponse,
    ListServerCertificateTagsResponse,
    ListUserPoliciesResponse,
    ListUserTagsResponse,
    ResetServiceSpecificCredentialResponse,
    SimulatePolicyResponse,
    UpdateRoleResponse,
    UpdateRoleDescriptionResponse,
    UpdateSAMLProviderResponse,
    UploadSSHPublicKeyResponse,
    UploadServerCertificateResponse,
    UploadSigningCertificateResponse
} from "aws-sdk/clients/iam";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.User {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.iam.User>) {
        super(...args)
        this.client = new awssdk.IAM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/iam-2010-05-08.normal.json"), this.client)
    }

    invokeAddClientIDToOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest]: (AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest)[K]
    }>): void {
        return this.client.addClientIDToOpenIDConnectProvider(
            this.ops["AddClientIDToOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeAddRoleToInstanceProfile(partialParams: ToOptional<{
      [K in keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest]: (AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest)[K]
    }>): void {
        return this.client.addRoleToInstanceProfile(
            this.ops["AddRoleToInstanceProfile"].apply(partialParams)
        );
    }

    invokeAddUserToGroup(partialParams: ToOptional<{
      [K in keyof AddUserToGroupRequest & keyof AddUserToGroupRequest & keyof AddUserToGroupRequest & keyof AddUserToGroupRequest & keyof AddUserToGroupRequest]: (AddUserToGroupRequest & AddUserToGroupRequest & AddUserToGroupRequest & AddUserToGroupRequest & AddUserToGroupRequest)[K]
    }>): void {
        return this.client.addUserToGroup(
            this.ops["AddUserToGroup"].apply(partialParams)
        );
    }

    invokeAttachGroupPolicy(partialParams: ToOptional<{
      [K in keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest]: (AttachGroupPolicyRequest & AttachGroupPolicyRequest & AttachGroupPolicyRequest & AttachGroupPolicyRequest & AttachGroupPolicyRequest)[K]
    }>): void {
        return this.client.attachGroupPolicy(
            this.ops["AttachGroupPolicy"].apply(partialParams)
        );
    }

    invokeAttachRolePolicy(partialParams: ToOptional<{
      [K in keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest]: (AttachRolePolicyRequest & AttachRolePolicyRequest & AttachRolePolicyRequest & AttachRolePolicyRequest & AttachRolePolicyRequest)[K]
    }>): void {
        return this.client.attachRolePolicy(
            this.ops["AttachRolePolicy"].apply(partialParams)
        );
    }

    invokeAttachUserPolicy(partialParams: ToOptional<{
      [K in keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest]: (AttachUserPolicyRequest & AttachUserPolicyRequest & AttachUserPolicyRequest & AttachUserPolicyRequest & AttachUserPolicyRequest)[K]
    }>): void {
        return this.client.attachUserPolicy(
            this.ops["AttachUserPolicy"].apply(partialParams)
        );
    }

    invokeChangePassword(partialParams: ToOptional<{
      [K in keyof ChangePasswordRequest & keyof ChangePasswordRequest & keyof ChangePasswordRequest & keyof ChangePasswordRequest & keyof ChangePasswordRequest]: (ChangePasswordRequest & ChangePasswordRequest & ChangePasswordRequest & ChangePasswordRequest & ChangePasswordRequest)[K]
    }>): void {
        return this.client.changePassword(
            this.ops["ChangePassword"].apply(partialParams)
        );
    }

    invokeCreateAccountAlias(partialParams: ToOptional<{
      [K in keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest]: (CreateAccountAliasRequest & CreateAccountAliasRequest & CreateAccountAliasRequest & CreateAccountAliasRequest & CreateAccountAliasRequest)[K]
    }>): void {
        return this.client.createAccountAlias(
            this.ops["CreateAccountAlias"].apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest]: (CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest)[K]
    }>): CreateGroupResponse {
        return this.client.createGroup(
            this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest)[K]
    }>): CreateInstanceProfileResponse {
        return this.client.createInstanceProfile(
            this.ops["CreateInstanceProfile"].apply(partialParams)
        );
    }

    invokeCreateLoginProfile(partialParams: ToOptional<{
      [K in keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest]: (CreateLoginProfileRequest & CreateLoginProfileRequest & CreateLoginProfileRequest & CreateLoginProfileRequest & CreateLoginProfileRequest)[K]
    }>): CreateLoginProfileResponse {
        return this.client.createLoginProfile(
            this.ops["CreateLoginProfile"].apply(partialParams)
        );
    }

    invokeCreateOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest]: (CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest)[K]
    }>): CreateOpenIDConnectProviderResponse {
        return this.client.createOpenIDConnectProvider(
            this.ops["CreateOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest]: (CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest)[K]
    }>): CreatePolicyResponse {
        return this.client.createPolicy(
            this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest)[K]
    }>): CreatePolicyVersionResponse {
        return this.client.createPolicyVersion(
            this.ops["CreatePolicyVersion"].apply(partialParams)
        );
    }

    invokeCreateRole(partialParams: ToOptional<{
      [K in keyof CreateRoleRequest & keyof CreateRoleRequest & keyof CreateRoleRequest & keyof CreateRoleRequest & keyof CreateRoleRequest]: (CreateRoleRequest & CreateRoleRequest & CreateRoleRequest & CreateRoleRequest & CreateRoleRequest)[K]
    }>): CreateRoleResponse {
        return this.client.createRole(
            this.ops["CreateRole"].apply(partialParams)
        );
    }

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest]: (CreateSAMLProviderRequest & CreateSAMLProviderRequest & CreateSAMLProviderRequest & CreateSAMLProviderRequest & CreateSAMLProviderRequest)[K]
    }>): CreateSAMLProviderResponse {
        return this.client.createSAMLProvider(
            this.ops["CreateSAMLProvider"].apply(partialParams)
        );
    }

    invokeCreateServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest]: (CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest)[K]
    }>): CreateServiceLinkedRoleResponse {
        return this.client.createServiceLinkedRole(
            this.ops["CreateServiceLinkedRole"].apply(partialParams)
        );
    }

    invokeCreateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest]: (CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest)[K]
    }>): CreateServiceSpecificCredentialResponse {
        return this.client.createServiceSpecificCredential(
            this.ops["CreateServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest]: (CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest)[K]
    }>): CreateVirtualMFADeviceResponse {
        return this.client.createVirtualMFADevice(
            this.ops["CreateVirtualMFADevice"].apply(partialParams)
        );
    }

    invokeDeactivateMFADevice(partialParams: ToOptional<{
      [K in keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest]: (DeactivateMFADeviceRequest & DeactivateMFADeviceRequest & DeactivateMFADeviceRequest & DeactivateMFADeviceRequest & DeactivateMFADeviceRequest)[K]
    }>): void {
        return this.client.deactivateMFADevice(
            this.ops["DeactivateMFADevice"].apply(partialParams)
        );
    }

    invokeDeleteAccessKey(partialParams: ToOptional<{
      [K in keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest]: (DeleteAccessKeyRequest & DeleteAccessKeyRequest & DeleteAccessKeyRequest & DeleteAccessKeyRequest & DeleteAccessKeyRequest)[K]
    }>): void {
        return this.client.deleteAccessKey(
            this.ops["DeleteAccessKey"].apply(partialParams)
        );
    }

    invokeDeleteAccountAlias(partialParams: ToOptional<{
      [K in keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest]: (DeleteAccountAliasRequest & DeleteAccountAliasRequest & DeleteAccountAliasRequest & DeleteAccountAliasRequest & DeleteAccountAliasRequest)[K]
    }>): void {
        return this.client.deleteAccountAlias(
            this.ops["DeleteAccountAlias"].apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest]: (DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest)[K]
    }>): void {
        return this.client.deleteGroup(
            this.ops["DeleteGroup"].apply(partialParams)
        );
    }

    invokeDeleteGroupPolicy(partialParams: ToOptional<{
      [K in keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest]: (DeleteGroupPolicyRequest & DeleteGroupPolicyRequest & DeleteGroupPolicyRequest & DeleteGroupPolicyRequest & DeleteGroupPolicyRequest)[K]
    }>): void {
        return this.client.deleteGroupPolicy(
            this.ops["DeleteGroupPolicy"].apply(partialParams)
        );
    }

    invokeDeleteInstanceProfile(partialParams: ToOptional<{
      [K in keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest]: (DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest)[K]
    }>): void {
        return this.client.deleteInstanceProfile(
            this.ops["DeleteInstanceProfile"].apply(partialParams)
        );
    }

    invokeDeleteLoginProfile(partialParams: ToOptional<{
      [K in keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest]: (DeleteLoginProfileRequest & DeleteLoginProfileRequest & DeleteLoginProfileRequest & DeleteLoginProfileRequest & DeleteLoginProfileRequest)[K]
    }>): void {
        return this.client.deleteLoginProfile(
            this.ops["DeleteLoginProfile"].apply(partialParams)
        );
    }

    invokeDeleteOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest]: (DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest)[K]
    }>): void {
        return this.client.deleteOpenIDConnectProvider(
            this.ops["DeleteOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): void {
        return this.client.deletePolicy(
            this.ops["DeletePolicy"].apply(partialParams)
        );
    }

    invokeDeletePolicyVersion(partialParams: ToOptional<{
      [K in keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest]: (DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest)[K]
    }>): void {
        return this.client.deletePolicyVersion(
            this.ops["DeletePolicyVersion"].apply(partialParams)
        );
    }

    invokeDeleteRole(partialParams: ToOptional<{
      [K in keyof DeleteRoleRequest & keyof DeleteRoleRequest & keyof DeleteRoleRequest & keyof DeleteRoleRequest & keyof DeleteRoleRequest]: (DeleteRoleRequest & DeleteRoleRequest & DeleteRoleRequest & DeleteRoleRequest & DeleteRoleRequest)[K]
    }>): void {
        return this.client.deleteRole(
            this.ops["DeleteRole"].apply(partialParams)
        );
    }

    invokeDeleteRolePermissionsBoundary(partialParams: ToOptional<{
      [K in keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest]: (DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest)[K]
    }>): void {
        return this.client.deleteRolePermissionsBoundary(
            this.ops["DeleteRolePermissionsBoundary"].apply(partialParams)
        );
    }

    invokeDeleteRolePolicy(partialParams: ToOptional<{
      [K in keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest]: (DeleteRolePolicyRequest & DeleteRolePolicyRequest & DeleteRolePolicyRequest & DeleteRolePolicyRequest & DeleteRolePolicyRequest)[K]
    }>): void {
        return this.client.deleteRolePolicy(
            this.ops["DeleteRolePolicy"].apply(partialParams)
        );
    }

    invokeDeleteSAMLProvider(partialParams: ToOptional<{
      [K in keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest]: (DeleteSAMLProviderRequest & DeleteSAMLProviderRequest & DeleteSAMLProviderRequest & DeleteSAMLProviderRequest & DeleteSAMLProviderRequest)[K]
    }>): void {
        return this.client.deleteSAMLProvider(
            this.ops["DeleteSAMLProvider"].apply(partialParams)
        );
    }

    invokeDeleteSSHPublicKey(partialParams: ToOptional<{
      [K in keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest]: (DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest)[K]
    }>): void {
        return this.client.deleteSSHPublicKey(
            this.ops["DeleteSSHPublicKey"].apply(partialParams)
        );
    }

    invokeDeleteServerCertificate(partialParams: ToOptional<{
      [K in keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest]: (DeleteServerCertificateRequest & DeleteServerCertificateRequest & DeleteServerCertificateRequest & DeleteServerCertificateRequest & DeleteServerCertificateRequest)[K]
    }>): void {
        return this.client.deleteServerCertificate(
            this.ops["DeleteServerCertificate"].apply(partialParams)
        );
    }

    invokeDeleteServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest]: (DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest)[K]
    }>): DeleteServiceLinkedRoleResponse {
        return this.client.deleteServiceLinkedRole(
            this.ops["DeleteServiceLinkedRole"].apply(partialParams)
        );
    }

    invokeDeleteServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest]: (DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest)[K]
    }>): void {
        return this.client.deleteServiceSpecificCredential(
            this.ops["DeleteServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeDeleteSigningCertificate(partialParams: ToOptional<{
      [K in keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest]: (DeleteSigningCertificateRequest & DeleteSigningCertificateRequest & DeleteSigningCertificateRequest & DeleteSigningCertificateRequest & DeleteSigningCertificateRequest)[K]
    }>): void {
        return this.client.deleteSigningCertificate(
            this.ops["DeleteSigningCertificate"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): void {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserPermissionsBoundary(partialParams: ToOptional<{
      [K in keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest]: (DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest)[K]
    }>): void {
        return this.client.deleteUserPermissionsBoundary(
            this.ops["DeleteUserPermissionsBoundary"].apply(partialParams)
        );
    }

    invokeDeleteUserPolicy(partialParams: ToOptional<{
      [K in keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest]: (DeleteUserPolicyRequest & DeleteUserPolicyRequest & DeleteUserPolicyRequest & DeleteUserPolicyRequest & DeleteUserPolicyRequest)[K]
    }>): void {
        return this.client.deleteUserPolicy(
            this.ops["DeleteUserPolicy"].apply(partialParams)
        );
    }

    invokeDeleteVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest]: (DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest)[K]
    }>): void {
        return this.client.deleteVirtualMFADevice(
            this.ops["DeleteVirtualMFADevice"].apply(partialParams)
        );
    }

    invokeDetachGroupPolicy(partialParams: ToOptional<{
      [K in keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest]: (DetachGroupPolicyRequest & DetachGroupPolicyRequest & DetachGroupPolicyRequest & DetachGroupPolicyRequest & DetachGroupPolicyRequest)[K]
    }>): void {
        return this.client.detachGroupPolicy(
            this.ops["DetachGroupPolicy"].apply(partialParams)
        );
    }

    invokeDetachRolePolicy(partialParams: ToOptional<{
      [K in keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest]: (DetachRolePolicyRequest & DetachRolePolicyRequest & DetachRolePolicyRequest & DetachRolePolicyRequest & DetachRolePolicyRequest)[K]
    }>): void {
        return this.client.detachRolePolicy(
            this.ops["DetachRolePolicy"].apply(partialParams)
        );
    }

    invokeDetachUserPolicy(partialParams: ToOptional<{
      [K in keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest]: (DetachUserPolicyRequest & DetachUserPolicyRequest & DetachUserPolicyRequest & DetachUserPolicyRequest & DetachUserPolicyRequest)[K]
    }>): void {
        return this.client.detachUserPolicy(
            this.ops["DetachUserPolicy"].apply(partialParams)
        );
    }

    invokeEnableMFADevice(partialParams: ToOptional<{
      [K in keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest]: (EnableMFADeviceRequest & EnableMFADeviceRequest & EnableMFADeviceRequest & EnableMFADeviceRequest & EnableMFADeviceRequest)[K]
    }>): void {
        return this.client.enableMFADevice(
            this.ops["EnableMFADevice"].apply(partialParams)
        );
    }

    invokeGenerateOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest]: (GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest)[K]
    }>): GenerateOrganizationsAccessReportResponse {
        return this.client.generateOrganizationsAccessReport(
            this.ops["GenerateOrganizationsAccessReport"].apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest]: (GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest)[K]
    }>): GenerateServiceLastAccessedDetailsResponse {
        return this.client.generateServiceLastAccessedDetails(
            this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetAccessKeyLastUsed(partialParams: ToOptional<{
      [K in keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest]: (GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest)[K]
    }>): GetAccessKeyLastUsedResponse {
        return this.client.getAccessKeyLastUsed(
            this.ops["GetAccessKeyLastUsed"].apply(partialParams)
        );
    }

    invokeGetContextKeysForCustomPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest]: (GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest)[K]
    }>): GetContextKeysForPolicyResponse {
        return this.client.getContextKeysForCustomPolicy(
            this.ops["GetContextKeysForCustomPolicy"].apply(partialParams)
        );
    }

    invokeGetContextKeysForPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest]: (GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest)[K]
    }>): GetContextKeysForPolicyResponse {
        return this.client.getContextKeysForPrincipalPolicy(
            this.ops["GetContextKeysForPrincipalPolicy"].apply(partialParams)
        );
    }

    invokeGetGroup(partialParams: ToOptional<{
      [K in keyof GetGroupRequest & keyof GetGroupRequest & keyof GetGroupRequest & keyof GetGroupRequest & keyof GetGroupRequest]: (GetGroupRequest & GetGroupRequest & GetGroupRequest & GetGroupRequest & GetGroupRequest)[K]
    }>): GetGroupResponse {
        return this.client.getGroup(
            this.ops["GetGroup"].apply(partialParams)
        );
    }

    invokeGetGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest]: (GetGroupPolicyRequest & GetGroupPolicyRequest & GetGroupPolicyRequest & GetGroupPolicyRequest & GetGroupPolicyRequest)[K]
    }>): GetGroupPolicyResponse {
        return this.client.getGroupPolicy(
            this.ops["GetGroupPolicy"].apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest]: (GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest)[K]
    }>): GetInstanceProfileResponse {
        return this.client.getInstanceProfile(
            this.ops["GetInstanceProfile"].apply(partialParams)
        );
    }

    invokeGetLoginProfile(partialParams: ToOptional<{
      [K in keyof GetLoginProfileRequest & keyof GetLoginProfileRequest & keyof GetLoginProfileRequest & keyof GetLoginProfileRequest & keyof GetLoginProfileRequest]: (GetLoginProfileRequest & GetLoginProfileRequest & GetLoginProfileRequest & GetLoginProfileRequest & GetLoginProfileRequest)[K]
    }>): GetLoginProfileResponse {
        return this.client.getLoginProfile(
            this.ops["GetLoginProfile"].apply(partialParams)
        );
    }

    invokeGetOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest]: (GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest)[K]
    }>): GetOpenIDConnectProviderResponse {
        return this.client.getOpenIDConnectProvider(
            this.ops["GetOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeGetOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest]: (GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest)[K]
    }>): GetOrganizationsAccessReportResponse {
        return this.client.getOrganizationsAccessReport(
            this.ops["GetOrganizationsAccessReport"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest)[K]
    }>): GetPolicyResponse {
        return this.client.getPolicy(
            this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest)[K]
    }>): GetPolicyVersionResponse {
        return this.client.getPolicyVersion(
            this.ops["GetPolicyVersion"].apply(partialParams)
        );
    }

    invokeGetRole(partialParams: ToOptional<{
      [K in keyof GetRoleRequest & keyof GetRoleRequest & keyof GetRoleRequest & keyof GetRoleRequest & keyof GetRoleRequest]: (GetRoleRequest & GetRoleRequest & GetRoleRequest & GetRoleRequest & GetRoleRequest)[K]
    }>): GetRoleResponse {
        return this.client.getRole(
            this.ops["GetRole"].apply(partialParams)
        );
    }

    invokeGetRolePolicy(partialParams: ToOptional<{
      [K in keyof GetRolePolicyRequest & keyof GetRolePolicyRequest & keyof GetRolePolicyRequest & keyof GetRolePolicyRequest & keyof GetRolePolicyRequest]: (GetRolePolicyRequest & GetRolePolicyRequest & GetRolePolicyRequest & GetRolePolicyRequest & GetRolePolicyRequest)[K]
    }>): GetRolePolicyResponse {
        return this.client.getRolePolicy(
            this.ops["GetRolePolicy"].apply(partialParams)
        );
    }

    invokeGetSAMLProvider(partialParams: ToOptional<{
      [K in keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest]: (GetSAMLProviderRequest & GetSAMLProviderRequest & GetSAMLProviderRequest & GetSAMLProviderRequest & GetSAMLProviderRequest)[K]
    }>): GetSAMLProviderResponse {
        return this.client.getSAMLProvider(
            this.ops["GetSAMLProvider"].apply(partialParams)
        );
    }

    invokeGetSSHPublicKey(partialParams: ToOptional<{
      [K in keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest]: (GetSSHPublicKeyRequest & GetSSHPublicKeyRequest & GetSSHPublicKeyRequest & GetSSHPublicKeyRequest & GetSSHPublicKeyRequest)[K]
    }>): GetSSHPublicKeyResponse {
        return this.client.getSSHPublicKey(
            this.ops["GetSSHPublicKey"].apply(partialParams)
        );
    }

    invokeGetServerCertificate(partialParams: ToOptional<{
      [K in keyof GetServerCertificateRequest & keyof GetServerCertificateRequest & keyof GetServerCertificateRequest & keyof GetServerCertificateRequest & keyof GetServerCertificateRequest]: (GetServerCertificateRequest & GetServerCertificateRequest & GetServerCertificateRequest & GetServerCertificateRequest & GetServerCertificateRequest)[K]
    }>): GetServerCertificateResponse {
        return this.client.getServerCertificate(
            this.ops["GetServerCertificate"].apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest]: (GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest)[K]
    }>): GetServiceLastAccessedDetailsResponse {
        return this.client.getServiceLastAccessedDetails(
            this.ops["GetServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetailsWithEntities(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest]: (GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest)[K]
    }>): GetServiceLastAccessedDetailsWithEntitiesResponse {
        return this.client.getServiceLastAccessedDetailsWithEntities(
            this.ops["GetServiceLastAccessedDetailsWithEntities"].apply(partialParams)
        );
    }

    invokeGetServiceLinkedRoleDeletionStatus(partialParams: ToOptional<{
      [K in keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest]: (GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest)[K]
    }>): GetServiceLinkedRoleDeletionStatusResponse {
        return this.client.getServiceLinkedRoleDeletionStatus(
            this.ops["GetServiceLinkedRoleDeletionStatus"].apply(partialParams)
        );
    }

    invokeGetUserPolicy(partialParams: ToOptional<{
      [K in keyof GetUserPolicyRequest & keyof GetUserPolicyRequest & keyof GetUserPolicyRequest & keyof GetUserPolicyRequest & keyof GetUserPolicyRequest]: (GetUserPolicyRequest & GetUserPolicyRequest & GetUserPolicyRequest & GetUserPolicyRequest & GetUserPolicyRequest)[K]
    }>): GetUserPolicyResponse {
        return this.client.getUserPolicy(
            this.ops["GetUserPolicy"].apply(partialParams)
        );
    }

    invokeListAttachedGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest]: (ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest)[K]
    }>): ListAttachedGroupPoliciesResponse {
        return this.client.listAttachedGroupPolicies(
            this.ops["ListAttachedGroupPolicies"].apply(partialParams)
        );
    }

    invokeListAttachedRolePolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest]: (ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest)[K]
    }>): ListAttachedRolePoliciesResponse {
        return this.client.listAttachedRolePolicies(
            this.ops["ListAttachedRolePolicies"].apply(partialParams)
        );
    }

    invokeListAttachedUserPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest]: (ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest)[K]
    }>): ListAttachedUserPoliciesResponse {
        return this.client.listAttachedUserPolicies(
            this.ops["ListAttachedUserPolicies"].apply(partialParams)
        );
    }

    invokeListEntitiesForPolicy(partialParams: ToOptional<{
      [K in keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest]: (ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest)[K]
    }>): ListEntitiesForPolicyResponse {
        return this.client.listEntitiesForPolicy(
            this.ops["ListEntitiesForPolicy"].apply(partialParams)
        );
    }

    invokeListGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest]: (ListGroupPoliciesRequest & ListGroupPoliciesRequest & ListGroupPoliciesRequest & ListGroupPoliciesRequest & ListGroupPoliciesRequest)[K]
    }>): ListGroupPoliciesResponse {
        return this.client.listGroupPolicies(
            this.ops["ListGroupPolicies"].apply(partialParams)
        );
    }

    invokeListGroupsForUser(partialParams: ToOptional<{
      [K in keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest]: (ListGroupsForUserRequest & ListGroupsForUserRequest & ListGroupsForUserRequest & ListGroupsForUserRequest & ListGroupsForUserRequest)[K]
    }>): ListGroupsForUserResponse {
        return this.client.listGroupsForUser(
            this.ops["ListGroupsForUser"].apply(partialParams)
        );
    }

    invokeListInstanceProfileTags(partialParams: ToOptional<{
      [K in keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest]: (ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest)[K]
    }>): ListInstanceProfileTagsResponse {
        return this.client.listInstanceProfileTags(
            this.ops["ListInstanceProfileTags"].apply(partialParams)
        );
    }

    invokeListInstanceProfilesForRole(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest]: (ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest)[K]
    }>): ListInstanceProfilesForRoleResponse {
        return this.client.listInstanceProfilesForRole(
            this.ops["ListInstanceProfilesForRole"].apply(partialParams)
        );
    }

    invokeListMFADeviceTags(partialParams: ToOptional<{
      [K in keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest]: (ListMFADeviceTagsRequest & ListMFADeviceTagsRequest & ListMFADeviceTagsRequest & ListMFADeviceTagsRequest & ListMFADeviceTagsRequest)[K]
    }>): ListMFADeviceTagsResponse {
        return this.client.listMFADeviceTags(
            this.ops["ListMFADeviceTags"].apply(partialParams)
        );
    }

    invokeListOpenIDConnectProviderTags(partialParams: ToOptional<{
      [K in keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest]: (ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest)[K]
    }>): ListOpenIDConnectProviderTagsResponse {
        return this.client.listOpenIDConnectProviderTags(
            this.ops["ListOpenIDConnectProviderTags"].apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest]: (ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest)[K]
    }>): ListPoliciesGrantingServiceAccessResponse {
        return this.client.listPoliciesGrantingServiceAccess(
            this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams)
        );
    }

    invokeListPolicyTags(partialParams: ToOptional<{
      [K in keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest]: (ListPolicyTagsRequest & ListPolicyTagsRequest & ListPolicyTagsRequest & ListPolicyTagsRequest & ListPolicyTagsRequest)[K]
    }>): ListPolicyTagsResponse {
        return this.client.listPolicyTags(
            this.ops["ListPolicyTags"].apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest)[K]
    }>): ListPolicyVersionsResponse {
        return this.client.listPolicyVersions(
            this.ops["ListPolicyVersions"].apply(partialParams)
        );
    }

    invokeListRolePolicies(partialParams: ToOptional<{
      [K in keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest]: (ListRolePoliciesRequest & ListRolePoliciesRequest & ListRolePoliciesRequest & ListRolePoliciesRequest & ListRolePoliciesRequest)[K]
    }>): ListRolePoliciesResponse {
        return this.client.listRolePolicies(
            this.ops["ListRolePolicies"].apply(partialParams)
        );
    }

    invokeListRoleTags(partialParams: ToOptional<{
      [K in keyof ListRoleTagsRequest & keyof ListRoleTagsRequest & keyof ListRoleTagsRequest & keyof ListRoleTagsRequest & keyof ListRoleTagsRequest]: (ListRoleTagsRequest & ListRoleTagsRequest & ListRoleTagsRequest & ListRoleTagsRequest & ListRoleTagsRequest)[K]
    }>): ListRoleTagsResponse {
        return this.client.listRoleTags(
            this.ops["ListRoleTags"].apply(partialParams)
        );
    }

    invokeListSAMLProviderTags(partialParams: ToOptional<{
      [K in keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest]: (ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest)[K]
    }>): ListSAMLProviderTagsResponse {
        return this.client.listSAMLProviderTags(
            this.ops["ListSAMLProviderTags"].apply(partialParams)
        );
    }

    invokeListServerCertificateTags(partialParams: ToOptional<{
      [K in keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest]: (ListServerCertificateTagsRequest & ListServerCertificateTagsRequest & ListServerCertificateTagsRequest & ListServerCertificateTagsRequest & ListServerCertificateTagsRequest)[K]
    }>): ListServerCertificateTagsResponse {
        return this.client.listServerCertificateTags(
            this.ops["ListServerCertificateTags"].apply(partialParams)
        );
    }

    invokeListUserPolicies(partialParams: ToOptional<{
      [K in keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest]: (ListUserPoliciesRequest & ListUserPoliciesRequest & ListUserPoliciesRequest & ListUserPoliciesRequest & ListUserPoliciesRequest)[K]
    }>): ListUserPoliciesResponse {
        return this.client.listUserPolicies(
            this.ops["ListUserPolicies"].apply(partialParams)
        );
    }

    invokeListUserTags(partialParams: ToOptional<{
      [K in keyof ListUserTagsRequest & keyof ListUserTagsRequest & keyof ListUserTagsRequest & keyof ListUserTagsRequest & keyof ListUserTagsRequest]: (ListUserTagsRequest & ListUserTagsRequest & ListUserTagsRequest & ListUserTagsRequest & ListUserTagsRequest)[K]
    }>): ListUserTagsResponse {
        return this.client.listUserTags(
            this.ops["ListUserTags"].apply(partialParams)
        );
    }

    invokePutGroupPolicy(partialParams: ToOptional<{
      [K in keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest]: (PutGroupPolicyRequest & PutGroupPolicyRequest & PutGroupPolicyRequest & PutGroupPolicyRequest & PutGroupPolicyRequest)[K]
    }>): void {
        return this.client.putGroupPolicy(
            this.ops["PutGroupPolicy"].apply(partialParams)
        );
    }

    invokePutRolePermissionsBoundary(partialParams: ToOptional<{
      [K in keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest]: (PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest)[K]
    }>): void {
        return this.client.putRolePermissionsBoundary(
            this.ops["PutRolePermissionsBoundary"].apply(partialParams)
        );
    }

    invokePutRolePolicy(partialParams: ToOptional<{
      [K in keyof PutRolePolicyRequest & keyof PutRolePolicyRequest & keyof PutRolePolicyRequest & keyof PutRolePolicyRequest & keyof PutRolePolicyRequest]: (PutRolePolicyRequest & PutRolePolicyRequest & PutRolePolicyRequest & PutRolePolicyRequest & PutRolePolicyRequest)[K]
    }>): void {
        return this.client.putRolePolicy(
            this.ops["PutRolePolicy"].apply(partialParams)
        );
    }

    invokePutUserPermissionsBoundary(partialParams: ToOptional<{
      [K in keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest]: (PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest)[K]
    }>): void {
        return this.client.putUserPermissionsBoundary(
            this.ops["PutUserPermissionsBoundary"].apply(partialParams)
        );
    }

    invokePutUserPolicy(partialParams: ToOptional<{
      [K in keyof PutUserPolicyRequest & keyof PutUserPolicyRequest & keyof PutUserPolicyRequest & keyof PutUserPolicyRequest & keyof PutUserPolicyRequest]: (PutUserPolicyRequest & PutUserPolicyRequest & PutUserPolicyRequest & PutUserPolicyRequest & PutUserPolicyRequest)[K]
    }>): void {
        return this.client.putUserPolicy(
            this.ops["PutUserPolicy"].apply(partialParams)
        );
    }

    invokeRemoveClientIDFromOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest]: (RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest)[K]
    }>): void {
        return this.client.removeClientIDFromOpenIDConnectProvider(
            this.ops["RemoveClientIDFromOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeRemoveRoleFromInstanceProfile(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest]: (RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest)[K]
    }>): void {
        return this.client.removeRoleFromInstanceProfile(
            this.ops["RemoveRoleFromInstanceProfile"].apply(partialParams)
        );
    }

    invokeRemoveUserFromGroup(partialParams: ToOptional<{
      [K in keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest]: (RemoveUserFromGroupRequest & RemoveUserFromGroupRequest & RemoveUserFromGroupRequest & RemoveUserFromGroupRequest & RemoveUserFromGroupRequest)[K]
    }>): void {
        return this.client.removeUserFromGroup(
            this.ops["RemoveUserFromGroup"].apply(partialParams)
        );
    }

    invokeResetServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest]: (ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest)[K]
    }>): ResetServiceSpecificCredentialResponse {
        return this.client.resetServiceSpecificCredential(
            this.ops["ResetServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeResyncMFADevice(partialParams: ToOptional<{
      [K in keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest]: (ResyncMFADeviceRequest & ResyncMFADeviceRequest & ResyncMFADeviceRequest & ResyncMFADeviceRequest & ResyncMFADeviceRequest)[K]
    }>): void {
        return this.client.resyncMFADevice(
            this.ops["ResyncMFADevice"].apply(partialParams)
        );
    }

    invokeSetDefaultPolicyVersion(partialParams: ToOptional<{
      [K in keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest]: (SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest)[K]
    }>): void {
        return this.client.setDefaultPolicyVersion(
            this.ops["SetDefaultPolicyVersion"].apply(partialParams)
        );
    }

    invokeSetSecurityTokenServicePreferences(partialParams: ToOptional<{
      [K in keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest]: (SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest)[K]
    }>): void {
        return this.client.setSecurityTokenServicePreferences(
            this.ops["SetSecurityTokenServicePreferences"].apply(partialParams)
        );
    }

    invokeSimulateCustomPolicy(partialParams: ToOptional<{
      [K in keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest]: (SimulateCustomPolicyRequest & SimulateCustomPolicyRequest & SimulateCustomPolicyRequest & SimulateCustomPolicyRequest & SimulateCustomPolicyRequest)[K]
    }>): SimulatePolicyResponse {
        return this.client.simulateCustomPolicy(
            this.ops["SimulateCustomPolicy"].apply(partialParams)
        );
    }

    invokeSimulatePrincipalPolicy(partialParams: ToOptional<{
      [K in keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest]: (SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest)[K]
    }>): SimulatePolicyResponse {
        return this.client.simulatePrincipalPolicy(
            this.ops["SimulatePrincipalPolicy"].apply(partialParams)
        );
    }

    invokeTagInstanceProfile(partialParams: ToOptional<{
      [K in keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest]: (TagInstanceProfileRequest & TagInstanceProfileRequest & TagInstanceProfileRequest & TagInstanceProfileRequest & TagInstanceProfileRequest)[K]
    }>): void {
        return this.client.tagInstanceProfile(
            this.ops["TagInstanceProfile"].apply(partialParams)
        );
    }

    invokeTagMFADevice(partialParams: ToOptional<{
      [K in keyof TagMFADeviceRequest & keyof TagMFADeviceRequest & keyof TagMFADeviceRequest & keyof TagMFADeviceRequest & keyof TagMFADeviceRequest]: (TagMFADeviceRequest & TagMFADeviceRequest & TagMFADeviceRequest & TagMFADeviceRequest & TagMFADeviceRequest)[K]
    }>): void {
        return this.client.tagMFADevice(
            this.ops["TagMFADevice"].apply(partialParams)
        );
    }

    invokeTagOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest]: (TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest)[K]
    }>): void {
        return this.client.tagOpenIDConnectProvider(
            this.ops["TagOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeTagPolicy(partialParams: ToOptional<{
      [K in keyof TagPolicyRequest & keyof TagPolicyRequest & keyof TagPolicyRequest & keyof TagPolicyRequest & keyof TagPolicyRequest]: (TagPolicyRequest & TagPolicyRequest & TagPolicyRequest & TagPolicyRequest & TagPolicyRequest)[K]
    }>): void {
        return this.client.tagPolicy(
            this.ops["TagPolicy"].apply(partialParams)
        );
    }

    invokeTagRole(partialParams: ToOptional<{
      [K in keyof TagRoleRequest & keyof TagRoleRequest & keyof TagRoleRequest & keyof TagRoleRequest & keyof TagRoleRequest]: (TagRoleRequest & TagRoleRequest & TagRoleRequest & TagRoleRequest & TagRoleRequest)[K]
    }>): void {
        return this.client.tagRole(
            this.ops["TagRole"].apply(partialParams)
        );
    }

    invokeTagSAMLProvider(partialParams: ToOptional<{
      [K in keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest]: (TagSAMLProviderRequest & TagSAMLProviderRequest & TagSAMLProviderRequest & TagSAMLProviderRequest & TagSAMLProviderRequest)[K]
    }>): void {
        return this.client.tagSAMLProvider(
            this.ops["TagSAMLProvider"].apply(partialParams)
        );
    }

    invokeTagServerCertificate(partialParams: ToOptional<{
      [K in keyof TagServerCertificateRequest & keyof TagServerCertificateRequest & keyof TagServerCertificateRequest & keyof TagServerCertificateRequest & keyof TagServerCertificateRequest]: (TagServerCertificateRequest & TagServerCertificateRequest & TagServerCertificateRequest & TagServerCertificateRequest & TagServerCertificateRequest)[K]
    }>): void {
        return this.client.tagServerCertificate(
            this.ops["TagServerCertificate"].apply(partialParams)
        );
    }

    invokeTagUser(partialParams: ToOptional<{
      [K in keyof TagUserRequest & keyof TagUserRequest & keyof TagUserRequest & keyof TagUserRequest & keyof TagUserRequest]: (TagUserRequest & TagUserRequest & TagUserRequest & TagUserRequest & TagUserRequest)[K]
    }>): void {
        return this.client.tagUser(
            this.ops["TagUser"].apply(partialParams)
        );
    }

    invokeUntagInstanceProfile(partialParams: ToOptional<{
      [K in keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest]: (UntagInstanceProfileRequest & UntagInstanceProfileRequest & UntagInstanceProfileRequest & UntagInstanceProfileRequest & UntagInstanceProfileRequest)[K]
    }>): void {
        return this.client.untagInstanceProfile(
            this.ops["UntagInstanceProfile"].apply(partialParams)
        );
    }

    invokeUntagMFADevice(partialParams: ToOptional<{
      [K in keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest]: (UntagMFADeviceRequest & UntagMFADeviceRequest & UntagMFADeviceRequest & UntagMFADeviceRequest & UntagMFADeviceRequest)[K]
    }>): void {
        return this.client.untagMFADevice(
            this.ops["UntagMFADevice"].apply(partialParams)
        );
    }

    invokeUntagOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest]: (UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest)[K]
    }>): void {
        return this.client.untagOpenIDConnectProvider(
            this.ops["UntagOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeUntagPolicy(partialParams: ToOptional<{
      [K in keyof UntagPolicyRequest & keyof UntagPolicyRequest & keyof UntagPolicyRequest & keyof UntagPolicyRequest & keyof UntagPolicyRequest]: (UntagPolicyRequest & UntagPolicyRequest & UntagPolicyRequest & UntagPolicyRequest & UntagPolicyRequest)[K]
    }>): void {
        return this.client.untagPolicy(
            this.ops["UntagPolicy"].apply(partialParams)
        );
    }

    invokeUntagRole(partialParams: ToOptional<{
      [K in keyof UntagRoleRequest & keyof UntagRoleRequest & keyof UntagRoleRequest & keyof UntagRoleRequest & keyof UntagRoleRequest]: (UntagRoleRequest & UntagRoleRequest & UntagRoleRequest & UntagRoleRequest & UntagRoleRequest)[K]
    }>): void {
        return this.client.untagRole(
            this.ops["UntagRole"].apply(partialParams)
        );
    }

    invokeUntagSAMLProvider(partialParams: ToOptional<{
      [K in keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest]: (UntagSAMLProviderRequest & UntagSAMLProviderRequest & UntagSAMLProviderRequest & UntagSAMLProviderRequest & UntagSAMLProviderRequest)[K]
    }>): void {
        return this.client.untagSAMLProvider(
            this.ops["UntagSAMLProvider"].apply(partialParams)
        );
    }

    invokeUntagServerCertificate(partialParams: ToOptional<{
      [K in keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest]: (UntagServerCertificateRequest & UntagServerCertificateRequest & UntagServerCertificateRequest & UntagServerCertificateRequest & UntagServerCertificateRequest)[K]
    }>): void {
        return this.client.untagServerCertificate(
            this.ops["UntagServerCertificate"].apply(partialParams)
        );
    }

    invokeUntagUser(partialParams: ToOptional<{
      [K in keyof UntagUserRequest & keyof UntagUserRequest & keyof UntagUserRequest & keyof UntagUserRequest & keyof UntagUserRequest]: (UntagUserRequest & UntagUserRequest & UntagUserRequest & UntagUserRequest & UntagUserRequest)[K]
    }>): void {
        return this.client.untagUser(
            this.ops["UntagUser"].apply(partialParams)
        );
    }

    invokeUpdateAccessKey(partialParams: ToOptional<{
      [K in keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest]: (UpdateAccessKeyRequest & UpdateAccessKeyRequest & UpdateAccessKeyRequest & UpdateAccessKeyRequest & UpdateAccessKeyRequest)[K]
    }>): void {
        return this.client.updateAccessKey(
            this.ops["UpdateAccessKey"].apply(partialParams)
        );
    }

    invokeUpdateAssumeRolePolicy(partialParams: ToOptional<{
      [K in keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest]: (UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest)[K]
    }>): void {
        return this.client.updateAssumeRolePolicy(
            this.ops["UpdateAssumeRolePolicy"].apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest]: (UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest)[K]
    }>): void {
        return this.client.updateGroup(
            this.ops["UpdateGroup"].apply(partialParams)
        );
    }

    invokeUpdateLoginProfile(partialParams: ToOptional<{
      [K in keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest]: (UpdateLoginProfileRequest & UpdateLoginProfileRequest & UpdateLoginProfileRequest & UpdateLoginProfileRequest & UpdateLoginProfileRequest)[K]
    }>): void {
        return this.client.updateLoginProfile(
            this.ops["UpdateLoginProfile"].apply(partialParams)
        );
    }

    invokeUpdateOpenIDConnectProviderThumbprint(partialParams: ToOptional<{
      [K in keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest]: (UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest)[K]
    }>): void {
        return this.client.updateOpenIDConnectProviderThumbprint(
            this.ops["UpdateOpenIDConnectProviderThumbprint"].apply(partialParams)
        );
    }

    invokeUpdateRole(partialParams: ToOptional<{
      [K in keyof UpdateRoleRequest & keyof UpdateRoleRequest & keyof UpdateRoleRequest & keyof UpdateRoleRequest & keyof UpdateRoleRequest]: (UpdateRoleRequest & UpdateRoleRequest & UpdateRoleRequest & UpdateRoleRequest & UpdateRoleRequest)[K]
    }>): UpdateRoleResponse {
        return this.client.updateRole(
            this.ops["UpdateRole"].apply(partialParams)
        );
    }

    invokeUpdateRoleDescription(partialParams: ToOptional<{
      [K in keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest]: (UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest)[K]
    }>): UpdateRoleDescriptionResponse {
        return this.client.updateRoleDescription(
            this.ops["UpdateRoleDescription"].apply(partialParams)
        );
    }

    invokeUpdateSAMLProvider(partialParams: ToOptional<{
      [K in keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest]: (UpdateSAMLProviderRequest & UpdateSAMLProviderRequest & UpdateSAMLProviderRequest & UpdateSAMLProviderRequest & UpdateSAMLProviderRequest)[K]
    }>): UpdateSAMLProviderResponse {
        return this.client.updateSAMLProvider(
            this.ops["UpdateSAMLProvider"].apply(partialParams)
        );
    }

    invokeUpdateSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest]: (UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest)[K]
    }>): void {
        return this.client.updateSSHPublicKey(
            this.ops["UpdateSSHPublicKey"].apply(partialParams)
        );
    }

    invokeUpdateServerCertificate(partialParams: ToOptional<{
      [K in keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest]: (UpdateServerCertificateRequest & UpdateServerCertificateRequest & UpdateServerCertificateRequest & UpdateServerCertificateRequest & UpdateServerCertificateRequest)[K]
    }>): void {
        return this.client.updateServerCertificate(
            this.ops["UpdateServerCertificate"].apply(partialParams)
        );
    }

    invokeUpdateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest]: (UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest)[K]
    }>): void {
        return this.client.updateServiceSpecificCredential(
            this.ops["UpdateServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeUpdateSigningCertificate(partialParams: ToOptional<{
      [K in keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest]: (UpdateSigningCertificateRequest & UpdateSigningCertificateRequest & UpdateSigningCertificateRequest & UpdateSigningCertificateRequest & UpdateSigningCertificateRequest)[K]
    }>): void {
        return this.client.updateSigningCertificate(
            this.ops["UpdateSigningCertificate"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): void {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }

    invokeUploadSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest]: (UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest)[K]
    }>): UploadSSHPublicKeyResponse {
        return this.client.uploadSSHPublicKey(
            this.ops["UploadSSHPublicKey"].apply(partialParams)
        );
    }

    invokeUploadServerCertificate(partialParams: ToOptional<{
      [K in keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest]: (UploadServerCertificateRequest & UploadServerCertificateRequest & UploadServerCertificateRequest & UploadServerCertificateRequest & UploadServerCertificateRequest)[K]
    }>): UploadServerCertificateResponse {
        return this.client.uploadServerCertificate(
            this.ops["UploadServerCertificate"].apply(partialParams)
        );
    }

    invokeUploadSigningCertificate(partialParams: ToOptional<{
      [K in keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest]: (UploadSigningCertificateRequest & UploadSigningCertificateRequest & UploadSigningCertificateRequest & UploadSigningCertificateRequest & UploadSigningCertificateRequest)[K]
    }>): UploadSigningCertificateResponse {
        return this.client.uploadSigningCertificate(
            this.ops["UploadSigningCertificate"].apply(partialParams)
        );
    }
}