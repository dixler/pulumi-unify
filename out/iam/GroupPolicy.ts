
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/iam-2010-05-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.GroupPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.iam.GroupPolicy>) {
        super(...args)
        this.client = new awssdk.IAM()
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

    invokeAddClientIDToOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest & keyof AddClientIDToOpenIDConnectProviderRequest]: (AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest & AddClientIDToOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addClientIDToOpenIDConnectProvider(
          this.ops["AddClientIDToOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeAddRoleToInstanceProfile(partialParams: ToOptional<{
      [K in keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest & keyof AddRoleToInstanceProfileRequest]: (AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest & AddRoleToInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToInstanceProfile(
          this.ops["AddRoleToInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeAddUserToGroup(partialParams: ToOptional<{
      [K in keyof AddUserToGroupRequest & keyof AddUserToGroupRequest & keyof AddUserToGroupRequest & keyof AddUserToGroupRequest]: (AddUserToGroupRequest & AddUserToGroupRequest & AddUserToGroupRequest & AddUserToGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addUserToGroup(
          this.ops["AddUserToGroup"].applicator.apply(partialParams)
        );
    }

    invokeAttachGroupPolicy(partialParams: ToOptional<{
      [K in keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest & keyof AttachGroupPolicyRequest]: (AttachGroupPolicyRequest & AttachGroupPolicyRequest & AttachGroupPolicyRequest & AttachGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachGroupPolicy(
          this.ops["AttachGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeAttachRolePolicy(partialParams: ToOptional<{
      [K in keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest & keyof AttachRolePolicyRequest]: (AttachRolePolicyRequest & AttachRolePolicyRequest & AttachRolePolicyRequest & AttachRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachRolePolicy(
          this.ops["AttachRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeAttachUserPolicy(partialParams: ToOptional<{
      [K in keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest & keyof AttachUserPolicyRequest]: (AttachUserPolicyRequest & AttachUserPolicyRequest & AttachUserPolicyRequest & AttachUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachUserPolicy(
          this.ops["AttachUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeChangePassword(partialParams: ToOptional<{
      [K in keyof ChangePasswordRequest & keyof ChangePasswordRequest & keyof ChangePasswordRequest & keyof ChangePasswordRequest]: (ChangePasswordRequest & ChangePasswordRequest & ChangePasswordRequest & ChangePasswordRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changePassword(
          this.ops["ChangePassword"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccountAlias(partialParams: ToOptional<{
      [K in keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest & keyof CreateAccountAliasRequest]: (CreateAccountAliasRequest & CreateAccountAliasRequest & CreateAccountAliasRequest & CreateAccountAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccountAlias(
          this.ops["CreateAccountAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest]: (CreateGroupRequest & CreateGroupRequest & CreateGroupRequest & CreateGroupRequest)[K]
    }>): Request<CreateGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest)[K]
    }>): Request<CreateInstanceProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceProfile(
          this.ops["CreateInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateLoginProfile(partialParams: ToOptional<{
      [K in keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest & keyof CreateLoginProfileRequest]: (CreateLoginProfileRequest & CreateLoginProfileRequest & CreateLoginProfileRequest & CreateLoginProfileRequest)[K]
    }>): Request<CreateLoginProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoginProfile(
          this.ops["CreateLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest & keyof CreateOpenIDConnectProviderRequest]: (CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest & CreateOpenIDConnectProviderRequest)[K]
    }>): Request<CreateOpenIDConnectProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpenIDConnectProvider(
          this.ops["CreateOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest]: (CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest)[K]
    }>): Request<CreatePolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicyVersion(
          this.ops["CreatePolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateRole(partialParams: ToOptional<{
      [K in keyof CreateRoleRequest & keyof CreateRoleRequest & keyof CreateRoleRequest & keyof CreateRoleRequest]: (CreateRoleRequest & CreateRoleRequest & CreateRoleRequest & CreateRoleRequest)[K]
    }>): Request<CreateRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRole(
          this.ops["CreateRole"].applicator.apply(partialParams)
        );
    }

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest & keyof CreateSAMLProviderRequest]: (CreateSAMLProviderRequest & CreateSAMLProviderRequest & CreateSAMLProviderRequest & CreateSAMLProviderRequest)[K]
    }>): Request<CreateSAMLProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSAMLProvider(
          this.ops["CreateSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeCreateServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest & keyof CreateServiceLinkedRoleRequest]: (CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest & CreateServiceLinkedRoleRequest)[K]
    }>): Request<CreateServiceLinkedRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceLinkedRole(
          this.ops["CreateServiceLinkedRole"].applicator.apply(partialParams)
        );
    }

    invokeCreateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest & keyof CreateServiceSpecificCredentialRequest]: (CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest & CreateServiceSpecificCredentialRequest)[K]
    }>): Request<CreateServiceSpecificCredentialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceSpecificCredential(
          this.ops["CreateServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest & keyof CreateVirtualMFADeviceRequest]: (CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest & CreateVirtualMFADeviceRequest)[K]
    }>): Request<CreateVirtualMFADeviceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualMFADevice(
          this.ops["CreateVirtualMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeDeactivateMFADevice(partialParams: ToOptional<{
      [K in keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest & keyof DeactivateMFADeviceRequest]: (DeactivateMFADeviceRequest & DeactivateMFADeviceRequest & DeactivateMFADeviceRequest & DeactivateMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivateMFADevice(
          this.ops["DeactivateMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccessKey(partialParams: ToOptional<{
      [K in keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest & keyof DeleteAccessKeyRequest]: (DeleteAccessKeyRequest & DeleteAccessKeyRequest & DeleteAccessKeyRequest & DeleteAccessKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccessKey(
          this.ops["DeleteAccessKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccountAlias(partialParams: ToOptional<{
      [K in keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest & keyof DeleteAccountAliasRequest]: (DeleteAccountAliasRequest & DeleteAccountAliasRequest & DeleteAccountAliasRequest & DeleteAccountAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccountAlias(
          this.ops["DeleteAccountAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest & keyof DeleteGroupRequest]: (DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest & DeleteGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroup(
          this.ops["DeleteGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGroupPolicy(partialParams: ToOptional<{
      [K in keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest & keyof DeleteGroupPolicyRequest]: (DeleteGroupPolicyRequest & DeleteGroupPolicyRequest & DeleteGroupPolicyRequest & DeleteGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroupPolicy(
          this.ops["DeleteGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstanceProfile(partialParams: ToOptional<{
      [K in keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest]: (DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceProfile(
          this.ops["DeleteInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLoginProfile(partialParams: ToOptional<{
      [K in keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest & keyof DeleteLoginProfileRequest]: (DeleteLoginProfileRequest & DeleteLoginProfileRequest & DeleteLoginProfileRequest & DeleteLoginProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoginProfile(
          this.ops["DeleteLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest & keyof DeleteOpenIDConnectProviderRequest]: (DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest & DeleteOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOpenIDConnectProvider(
          this.ops["DeleteOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicyVersion(partialParams: ToOptional<{
      [K in keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest]: (DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicyVersion(
          this.ops["DeletePolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRole(partialParams: ToOptional<{
      [K in keyof DeleteRoleRequest & keyof DeleteRoleRequest & keyof DeleteRoleRequest & keyof DeleteRoleRequest]: (DeleteRoleRequest & DeleteRoleRequest & DeleteRoleRequest & DeleteRoleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRole(
          this.ops["DeleteRole"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRolePermissionsBoundary(partialParams: ToOptional<{
      [K in keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest & keyof DeleteRolePermissionsBoundaryRequest]: (DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest & DeleteRolePermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRolePermissionsBoundary(
          this.ops["DeleteRolePermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRolePolicy(partialParams: ToOptional<{
      [K in keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest & keyof DeleteRolePolicyRequest]: (DeleteRolePolicyRequest & DeleteRolePolicyRequest & DeleteRolePolicyRequest & DeleteRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRolePolicy(
          this.ops["DeleteRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSAMLProvider(partialParams: ToOptional<{
      [K in keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest & keyof DeleteSAMLProviderRequest]: (DeleteSAMLProviderRequest & DeleteSAMLProviderRequest & DeleteSAMLProviderRequest & DeleteSAMLProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSAMLProvider(
          this.ops["DeleteSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSSHPublicKey(partialParams: ToOptional<{
      [K in keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest & keyof DeleteSSHPublicKeyRequest]: (DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest & DeleteSSHPublicKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSSHPublicKey(
          this.ops["DeleteSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServerCertificate(partialParams: ToOptional<{
      [K in keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest & keyof DeleteServerCertificateRequest]: (DeleteServerCertificateRequest & DeleteServerCertificateRequest & DeleteServerCertificateRequest & DeleteServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServerCertificate(
          this.ops["DeleteServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest & keyof DeleteServiceLinkedRoleRequest]: (DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest & DeleteServiceLinkedRoleRequest)[K]
    }>): Request<DeleteServiceLinkedRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceLinkedRole(
          this.ops["DeleteServiceLinkedRole"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest & keyof DeleteServiceSpecificCredentialRequest]: (DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest & DeleteServiceSpecificCredentialRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceSpecificCredential(
          this.ops["DeleteServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSigningCertificate(partialParams: ToOptional<{
      [K in keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest & keyof DeleteSigningCertificateRequest]: (DeleteSigningCertificateRequest & DeleteSigningCertificateRequest & DeleteSigningCertificateRequest & DeleteSigningCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSigningCertificate(
          this.ops["DeleteSigningCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserPermissionsBoundary(partialParams: ToOptional<{
      [K in keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest & keyof DeleteUserPermissionsBoundaryRequest]: (DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest & DeleteUserPermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserPermissionsBoundary(
          this.ops["DeleteUserPermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserPolicy(partialParams: ToOptional<{
      [K in keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest & keyof DeleteUserPolicyRequest]: (DeleteUserPolicyRequest & DeleteUserPolicyRequest & DeleteUserPolicyRequest & DeleteUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserPolicy(
          this.ops["DeleteUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest & keyof DeleteVirtualMFADeviceRequest]: (DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest & DeleteVirtualMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualMFADevice(
          this.ops["DeleteVirtualMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeDetachGroupPolicy(partialParams: ToOptional<{
      [K in keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest & keyof DetachGroupPolicyRequest]: (DetachGroupPolicyRequest & DetachGroupPolicyRequest & DetachGroupPolicyRequest & DetachGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachGroupPolicy(
          this.ops["DetachGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachRolePolicy(partialParams: ToOptional<{
      [K in keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest & keyof DetachRolePolicyRequest]: (DetachRolePolicyRequest & DetachRolePolicyRequest & DetachRolePolicyRequest & DetachRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachRolePolicy(
          this.ops["DetachRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachUserPolicy(partialParams: ToOptional<{
      [K in keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest & keyof DetachUserPolicyRequest]: (DetachUserPolicyRequest & DetachUserPolicyRequest & DetachUserPolicyRequest & DetachUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachUserPolicy(
          this.ops["DetachUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeEnableMFADevice(partialParams: ToOptional<{
      [K in keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest & keyof EnableMFADeviceRequest]: (EnableMFADeviceRequest & EnableMFADeviceRequest & EnableMFADeviceRequest & EnableMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableMFADevice(
          this.ops["EnableMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeGenerateOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest & keyof GenerateOrganizationsAccessReportRequest]: (GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest & GenerateOrganizationsAccessReportRequest)[K]
    }>): Request<GenerateOrganizationsAccessReportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateOrganizationsAccessReport(
          this.ops["GenerateOrganizationsAccessReport"].applicator.apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest & keyof GenerateServiceLastAccessedDetailsRequest]: (GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest & GenerateServiceLastAccessedDetailsRequest)[K]
    }>): Request<GenerateServiceLastAccessedDetailsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateServiceLastAccessedDetails(
          this.ops["GenerateServiceLastAccessedDetails"].applicator.apply(partialParams)
        );
    }

    invokeGetAccessKeyLastUsed(partialParams: ToOptional<{
      [K in keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest & keyof GetAccessKeyLastUsedRequest]: (GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest & GetAccessKeyLastUsedRequest)[K]
    }>): Request<GetAccessKeyLastUsedResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccessKeyLastUsed(
          this.ops["GetAccessKeyLastUsed"].applicator.apply(partialParams)
        );
    }

    invokeGetContextKeysForCustomPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest & keyof GetContextKeysForCustomPolicyRequest]: (GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest & GetContextKeysForCustomPolicyRequest)[K]
    }>): Request<GetContextKeysForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContextKeysForCustomPolicy(
          this.ops["GetContextKeysForCustomPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetContextKeysForPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest & keyof GetContextKeysForPrincipalPolicyRequest]: (GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest & GetContextKeysForPrincipalPolicyRequest)[K]
    }>): Request<GetContextKeysForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContextKeysForPrincipalPolicy(
          this.ops["GetContextKeysForPrincipalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetGroup(partialParams: ToOptional<{
      [K in keyof GetGroupRequest & keyof GetGroupRequest & keyof GetGroupRequest & keyof GetGroupRequest]: (GetGroupRequest & GetGroupRequest & GetGroupRequest & GetGroupRequest)[K]
    }>): Request<GetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroup(
          this.ops["GetGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest & keyof GetGroupPolicyRequest]: (GetGroupPolicyRequest & GetGroupPolicyRequest & GetGroupPolicyRequest & GetGroupPolicyRequest)[K]
    }>): Request<GetGroupPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroupPolicy(
          this.ops["GetGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest]: (GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest)[K]
    }>): Request<GetInstanceProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceProfile(
          this.ops["GetInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetLoginProfile(partialParams: ToOptional<{
      [K in keyof GetLoginProfileRequest & keyof GetLoginProfileRequest & keyof GetLoginProfileRequest & keyof GetLoginProfileRequest]: (GetLoginProfileRequest & GetLoginProfileRequest & GetLoginProfileRequest & GetLoginProfileRequest)[K]
    }>): Request<GetLoginProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoginProfile(
          this.ops["GetLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest & keyof GetOpenIDConnectProviderRequest]: (GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest & GetOpenIDConnectProviderRequest)[K]
    }>): Request<GetOpenIDConnectProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpenIDConnectProvider(
          this.ops["GetOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeGetOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest & keyof GetOrganizationsAccessReportRequest]: (GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest & GetOrganizationsAccessReportRequest)[K]
    }>): Request<GetOrganizationsAccessReportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOrganizationsAccessReport(
          this.ops["GetOrganizationsAccessReport"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest)[K]
    }>): Request<GetPolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicyVersion(
          this.ops["GetPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetRole(partialParams: ToOptional<{
      [K in keyof GetRoleRequest & keyof GetRoleRequest & keyof GetRoleRequest & keyof GetRoleRequest]: (GetRoleRequest & GetRoleRequest & GetRoleRequest & GetRoleRequest)[K]
    }>): Request<GetRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRole(
          this.ops["GetRole"].applicator.apply(partialParams)
        );
    }

    invokeGetRolePolicy(partialParams: ToOptional<{
      [K in keyof GetRolePolicyRequest & keyof GetRolePolicyRequest & keyof GetRolePolicyRequest & keyof GetRolePolicyRequest]: (GetRolePolicyRequest & GetRolePolicyRequest & GetRolePolicyRequest & GetRolePolicyRequest)[K]
    }>): Request<GetRolePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRolePolicy(
          this.ops["GetRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetSAMLProvider(partialParams: ToOptional<{
      [K in keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest & keyof GetSAMLProviderRequest]: (GetSAMLProviderRequest & GetSAMLProviderRequest & GetSAMLProviderRequest & GetSAMLProviderRequest)[K]
    }>): Request<GetSAMLProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSAMLProvider(
          this.ops["GetSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeGetSSHPublicKey(partialParams: ToOptional<{
      [K in keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest & keyof GetSSHPublicKeyRequest]: (GetSSHPublicKeyRequest & GetSSHPublicKeyRequest & GetSSHPublicKeyRequest & GetSSHPublicKeyRequest)[K]
    }>): Request<GetSSHPublicKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSSHPublicKey(
          this.ops["GetSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeGetServerCertificate(partialParams: ToOptional<{
      [K in keyof GetServerCertificateRequest & keyof GetServerCertificateRequest & keyof GetServerCertificateRequest & keyof GetServerCertificateRequest]: (GetServerCertificateRequest & GetServerCertificateRequest & GetServerCertificateRequest & GetServerCertificateRequest)[K]
    }>): Request<GetServerCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServerCertificate(
          this.ops["GetServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest & keyof GetServiceLastAccessedDetailsRequest]: (GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest & GetServiceLastAccessedDetailsRequest)[K]
    }>): Request<GetServiceLastAccessedDetailsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLastAccessedDetails(
          this.ops["GetServiceLastAccessedDetails"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetailsWithEntities(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest & keyof GetServiceLastAccessedDetailsWithEntitiesRequest]: (GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest & GetServiceLastAccessedDetailsWithEntitiesRequest)[K]
    }>): Request<GetServiceLastAccessedDetailsWithEntitiesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLastAccessedDetailsWithEntities(
          this.ops["GetServiceLastAccessedDetailsWithEntities"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceLinkedRoleDeletionStatus(partialParams: ToOptional<{
      [K in keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest & keyof GetServiceLinkedRoleDeletionStatusRequest]: (GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest & GetServiceLinkedRoleDeletionStatusRequest)[K]
    }>): Request<GetServiceLinkedRoleDeletionStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLinkedRoleDeletionStatus(
          this.ops["GetServiceLinkedRoleDeletionStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetUserPolicy(partialParams: ToOptional<{
      [K in keyof GetUserPolicyRequest & keyof GetUserPolicyRequest & keyof GetUserPolicyRequest & keyof GetUserPolicyRequest]: (GetUserPolicyRequest & GetUserPolicyRequest & GetUserPolicyRequest & GetUserPolicyRequest)[K]
    }>): Request<GetUserPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserPolicy(
          this.ops["GetUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest & keyof ListAttachedGroupPoliciesRequest]: (ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest & ListAttachedGroupPoliciesRequest)[K]
    }>): Request<ListAttachedGroupPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedGroupPolicies(
          this.ops["ListAttachedGroupPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedRolePolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest & keyof ListAttachedRolePoliciesRequest]: (ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest & ListAttachedRolePoliciesRequest)[K]
    }>): Request<ListAttachedRolePoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedRolePolicies(
          this.ops["ListAttachedRolePolicies"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedUserPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest & keyof ListAttachedUserPoliciesRequest]: (ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest & ListAttachedUserPoliciesRequest)[K]
    }>): Request<ListAttachedUserPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedUserPolicies(
          this.ops["ListAttachedUserPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListEntitiesForPolicy(partialParams: ToOptional<{
      [K in keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest & keyof ListEntitiesForPolicyRequest]: (ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest & ListEntitiesForPolicyRequest)[K]
    }>): Request<ListEntitiesForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEntitiesForPolicy(
          this.ops["ListEntitiesForPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest & keyof ListGroupPoliciesRequest]: (ListGroupPoliciesRequest & ListGroupPoliciesRequest & ListGroupPoliciesRequest & ListGroupPoliciesRequest)[K]
    }>): Request<ListGroupPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupPolicies(
          this.ops["ListGroupPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListGroupsForUser(partialParams: ToOptional<{
      [K in keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest & keyof ListGroupsForUserRequest]: (ListGroupsForUserRequest & ListGroupsForUserRequest & ListGroupsForUserRequest & ListGroupsForUserRequest)[K]
    }>): Request<ListGroupsForUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupsForUser(
          this.ops["ListGroupsForUser"].applicator.apply(partialParams)
        );
    }

    invokeListInstanceProfileTags(partialParams: ToOptional<{
      [K in keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest & keyof ListInstanceProfileTagsRequest]: (ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest & ListInstanceProfileTagsRequest)[K]
    }>): Request<ListInstanceProfileTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceProfileTags(
          this.ops["ListInstanceProfileTags"].applicator.apply(partialParams)
        );
    }

    invokeListInstanceProfilesForRole(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest & keyof ListInstanceProfilesForRoleRequest]: (ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest & ListInstanceProfilesForRoleRequest)[K]
    }>): Request<ListInstanceProfilesForRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceProfilesForRole(
          this.ops["ListInstanceProfilesForRole"].applicator.apply(partialParams)
        );
    }

    invokeListMFADeviceTags(partialParams: ToOptional<{
      [K in keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest & keyof ListMFADeviceTagsRequest]: (ListMFADeviceTagsRequest & ListMFADeviceTagsRequest & ListMFADeviceTagsRequest & ListMFADeviceTagsRequest)[K]
    }>): Request<ListMFADeviceTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMFADeviceTags(
          this.ops["ListMFADeviceTags"].applicator.apply(partialParams)
        );
    }

    invokeListOpenIDConnectProviderTags(partialParams: ToOptional<{
      [K in keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest & keyof ListOpenIDConnectProviderTagsRequest]: (ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest & ListOpenIDConnectProviderTagsRequest)[K]
    }>): Request<ListOpenIDConnectProviderTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOpenIDConnectProviderTags(
          this.ops["ListOpenIDConnectProviderTags"].applicator.apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest & keyof ListPoliciesGrantingServiceAccessRequest]: (ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest & ListPoliciesGrantingServiceAccessRequest)[K]
    }>): Request<ListPoliciesGrantingServiceAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(
          this.ops["ListPoliciesGrantingServiceAccess"].applicator.apply(partialParams)
        );
    }

    invokeListPolicyTags(partialParams: ToOptional<{
      [K in keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest & keyof ListPolicyTagsRequest]: (ListPolicyTagsRequest & ListPolicyTagsRequest & ListPolicyTagsRequest & ListPolicyTagsRequest)[K]
    }>): Request<ListPolicyTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyTags(
          this.ops["ListPolicyTags"].applicator.apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest)[K]
    }>): Request<ListPolicyVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyVersions(
          this.ops["ListPolicyVersions"].applicator.apply(partialParams)
        );
    }

    invokeListRolePolicies(partialParams: ToOptional<{
      [K in keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest & keyof ListRolePoliciesRequest]: (ListRolePoliciesRequest & ListRolePoliciesRequest & ListRolePoliciesRequest & ListRolePoliciesRequest)[K]
    }>): Request<ListRolePoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRolePolicies(
          this.ops["ListRolePolicies"].applicator.apply(partialParams)
        );
    }

    invokeListRoleTags(partialParams: ToOptional<{
      [K in keyof ListRoleTagsRequest & keyof ListRoleTagsRequest & keyof ListRoleTagsRequest & keyof ListRoleTagsRequest]: (ListRoleTagsRequest & ListRoleTagsRequest & ListRoleTagsRequest & ListRoleTagsRequest)[K]
    }>): Request<ListRoleTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoleTags(
          this.ops["ListRoleTags"].applicator.apply(partialParams)
        );
    }

    invokeListSAMLProviderTags(partialParams: ToOptional<{
      [K in keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest & keyof ListSAMLProviderTagsRequest]: (ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest & ListSAMLProviderTagsRequest)[K]
    }>): Request<ListSAMLProviderTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSAMLProviderTags(
          this.ops["ListSAMLProviderTags"].applicator.apply(partialParams)
        );
    }

    invokeListServerCertificateTags(partialParams: ToOptional<{
      [K in keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest & keyof ListServerCertificateTagsRequest]: (ListServerCertificateTagsRequest & ListServerCertificateTagsRequest & ListServerCertificateTagsRequest & ListServerCertificateTagsRequest)[K]
    }>): Request<ListServerCertificateTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listServerCertificateTags(
          this.ops["ListServerCertificateTags"].applicator.apply(partialParams)
        );
    }

    invokeListUserPolicies(partialParams: ToOptional<{
      [K in keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest & keyof ListUserPoliciesRequest]: (ListUserPoliciesRequest & ListUserPoliciesRequest & ListUserPoliciesRequest & ListUserPoliciesRequest)[K]
    }>): Request<ListUserPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserPolicies(
          this.ops["ListUserPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListUserTags(partialParams: ToOptional<{
      [K in keyof ListUserTagsRequest & keyof ListUserTagsRequest & keyof ListUserTagsRequest & keyof ListUserTagsRequest]: (ListUserTagsRequest & ListUserTagsRequest & ListUserTagsRequest & ListUserTagsRequest)[K]
    }>): Request<ListUserTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserTags(
          this.ops["ListUserTags"].applicator.apply(partialParams)
        );
    }

    invokePutGroupPolicy(partialParams: ToOptional<{
      [K in keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest & keyof PutGroupPolicyRequest]: (PutGroupPolicyRequest & PutGroupPolicyRequest & PutGroupPolicyRequest & PutGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putGroupPolicy(
          this.ops["PutGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutRolePermissionsBoundary(partialParams: ToOptional<{
      [K in keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest & keyof PutRolePermissionsBoundaryRequest]: (PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest & PutRolePermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRolePermissionsBoundary(
          this.ops["PutRolePermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokePutRolePolicy(partialParams: ToOptional<{
      [K in keyof PutRolePolicyRequest & keyof PutRolePolicyRequest & keyof PutRolePolicyRequest & keyof PutRolePolicyRequest]: (PutRolePolicyRequest & PutRolePolicyRequest & PutRolePolicyRequest & PutRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRolePolicy(
          this.ops["PutRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutUserPermissionsBoundary(partialParams: ToOptional<{
      [K in keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest & keyof PutUserPermissionsBoundaryRequest]: (PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest & PutUserPermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putUserPermissionsBoundary(
          this.ops["PutUserPermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokePutUserPolicy(partialParams: ToOptional<{
      [K in keyof PutUserPolicyRequest & keyof PutUserPolicyRequest & keyof PutUserPolicyRequest & keyof PutUserPolicyRequest]: (PutUserPolicyRequest & PutUserPolicyRequest & PutUserPolicyRequest & PutUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putUserPolicy(
          this.ops["PutUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeRemoveClientIDFromOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest & keyof RemoveClientIDFromOpenIDConnectProviderRequest]: (RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest & RemoveClientIDFromOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeClientIDFromOpenIDConnectProvider(
          this.ops["RemoveClientIDFromOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeRemoveRoleFromInstanceProfile(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest & keyof RemoveRoleFromInstanceProfileRequest]: (RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest & RemoveRoleFromInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromInstanceProfile(
          this.ops["RemoveRoleFromInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeRemoveUserFromGroup(partialParams: ToOptional<{
      [K in keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest & keyof RemoveUserFromGroupRequest]: (RemoveUserFromGroupRequest & RemoveUserFromGroupRequest & RemoveUserFromGroupRequest & RemoveUserFromGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeUserFromGroup(
          this.ops["RemoveUserFromGroup"].applicator.apply(partialParams)
        );
    }

    invokeResetServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest & keyof ResetServiceSpecificCredentialRequest]: (ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest & ResetServiceSpecificCredentialRequest)[K]
    }>): Request<ResetServiceSpecificCredentialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetServiceSpecificCredential(
          this.ops["ResetServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeResyncMFADevice(partialParams: ToOptional<{
      [K in keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest & keyof ResyncMFADeviceRequest]: (ResyncMFADeviceRequest & ResyncMFADeviceRequest & ResyncMFADeviceRequest & ResyncMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resyncMFADevice(
          this.ops["ResyncMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeSetDefaultPolicyVersion(partialParams: ToOptional<{
      [K in keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest]: (SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultPolicyVersion(
          this.ops["SetDefaultPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeSetSecurityTokenServicePreferences(partialParams: ToOptional<{
      [K in keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest & keyof SetSecurityTokenServicePreferencesRequest]: (SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest & SetSecurityTokenServicePreferencesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSecurityTokenServicePreferences(
          this.ops["SetSecurityTokenServicePreferences"].applicator.apply(partialParams)
        );
    }

    invokeSimulateCustomPolicy(partialParams: ToOptional<{
      [K in keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest & keyof SimulateCustomPolicyRequest]: (SimulateCustomPolicyRequest & SimulateCustomPolicyRequest & SimulateCustomPolicyRequest & SimulateCustomPolicyRequest)[K]
    }>): Request<SimulatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.simulateCustomPolicy(
          this.ops["SimulateCustomPolicy"].applicator.apply(partialParams)
        );
    }

    invokeSimulatePrincipalPolicy(partialParams: ToOptional<{
      [K in keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest & keyof SimulatePrincipalPolicyRequest]: (SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest & SimulatePrincipalPolicyRequest)[K]
    }>): Request<SimulatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.simulatePrincipalPolicy(
          this.ops["SimulatePrincipalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagInstanceProfile(partialParams: ToOptional<{
      [K in keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest & keyof TagInstanceProfileRequest]: (TagInstanceProfileRequest & TagInstanceProfileRequest & TagInstanceProfileRequest & TagInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagInstanceProfile(
          this.ops["TagInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeTagMFADevice(partialParams: ToOptional<{
      [K in keyof TagMFADeviceRequest & keyof TagMFADeviceRequest & keyof TagMFADeviceRequest & keyof TagMFADeviceRequest]: (TagMFADeviceRequest & TagMFADeviceRequest & TagMFADeviceRequest & TagMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagMFADevice(
          this.ops["TagMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeTagOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest & keyof TagOpenIDConnectProviderRequest]: (TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest & TagOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagOpenIDConnectProvider(
          this.ops["TagOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeTagPolicy(partialParams: ToOptional<{
      [K in keyof TagPolicyRequest & keyof TagPolicyRequest & keyof TagPolicyRequest & keyof TagPolicyRequest]: (TagPolicyRequest & TagPolicyRequest & TagPolicyRequest & TagPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagPolicy(
          this.ops["TagPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagRole(partialParams: ToOptional<{
      [K in keyof TagRoleRequest & keyof TagRoleRequest & keyof TagRoleRequest & keyof TagRoleRequest]: (TagRoleRequest & TagRoleRequest & TagRoleRequest & TagRoleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagRole(
          this.ops["TagRole"].applicator.apply(partialParams)
        );
    }

    invokeTagSAMLProvider(partialParams: ToOptional<{
      [K in keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest & keyof TagSAMLProviderRequest]: (TagSAMLProviderRequest & TagSAMLProviderRequest & TagSAMLProviderRequest & TagSAMLProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagSAMLProvider(
          this.ops["TagSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeTagServerCertificate(partialParams: ToOptional<{
      [K in keyof TagServerCertificateRequest & keyof TagServerCertificateRequest & keyof TagServerCertificateRequest & keyof TagServerCertificateRequest]: (TagServerCertificateRequest & TagServerCertificateRequest & TagServerCertificateRequest & TagServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagServerCertificate(
          this.ops["TagServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeTagUser(partialParams: ToOptional<{
      [K in keyof TagUserRequest & keyof TagUserRequest & keyof TagUserRequest & keyof TagUserRequest]: (TagUserRequest & TagUserRequest & TagUserRequest & TagUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagUser(
          this.ops["TagUser"].applicator.apply(partialParams)
        );
    }

    invokeUntagInstanceProfile(partialParams: ToOptional<{
      [K in keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest & keyof UntagInstanceProfileRequest]: (UntagInstanceProfileRequest & UntagInstanceProfileRequest & UntagInstanceProfileRequest & UntagInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagInstanceProfile(
          this.ops["UntagInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeUntagMFADevice(partialParams: ToOptional<{
      [K in keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest & keyof UntagMFADeviceRequest]: (UntagMFADeviceRequest & UntagMFADeviceRequest & UntagMFADeviceRequest & UntagMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagMFADevice(
          this.ops["UntagMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeUntagOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest & keyof UntagOpenIDConnectProviderRequest]: (UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest & UntagOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagOpenIDConnectProvider(
          this.ops["UntagOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeUntagPolicy(partialParams: ToOptional<{
      [K in keyof UntagPolicyRequest & keyof UntagPolicyRequest & keyof UntagPolicyRequest & keyof UntagPolicyRequest]: (UntagPolicyRequest & UntagPolicyRequest & UntagPolicyRequest & UntagPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagPolicy(
          this.ops["UntagPolicy"].applicator.apply(partialParams)
        );
    }

    invokeUntagRole(partialParams: ToOptional<{
      [K in keyof UntagRoleRequest & keyof UntagRoleRequest & keyof UntagRoleRequest & keyof UntagRoleRequest]: (UntagRoleRequest & UntagRoleRequest & UntagRoleRequest & UntagRoleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagRole(
          this.ops["UntagRole"].applicator.apply(partialParams)
        );
    }

    invokeUntagSAMLProvider(partialParams: ToOptional<{
      [K in keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest & keyof UntagSAMLProviderRequest]: (UntagSAMLProviderRequest & UntagSAMLProviderRequest & UntagSAMLProviderRequest & UntagSAMLProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagSAMLProvider(
          this.ops["UntagSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeUntagServerCertificate(partialParams: ToOptional<{
      [K in keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest & keyof UntagServerCertificateRequest]: (UntagServerCertificateRequest & UntagServerCertificateRequest & UntagServerCertificateRequest & UntagServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagServerCertificate(
          this.ops["UntagServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUntagUser(partialParams: ToOptional<{
      [K in keyof UntagUserRequest & keyof UntagUserRequest & keyof UntagUserRequest & keyof UntagUserRequest]: (UntagUserRequest & UntagUserRequest & UntagUserRequest & UntagUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagUser(
          this.ops["UntagUser"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccessKey(partialParams: ToOptional<{
      [K in keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest & keyof UpdateAccessKeyRequest]: (UpdateAccessKeyRequest & UpdateAccessKeyRequest & UpdateAccessKeyRequest & UpdateAccessKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccessKey(
          this.ops["UpdateAccessKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAssumeRolePolicy(partialParams: ToOptional<{
      [K in keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest & keyof UpdateAssumeRolePolicyRequest]: (UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest & UpdateAssumeRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssumeRolePolicy(
          this.ops["UpdateAssumeRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest & keyof UpdateGroupRequest]: (UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest & UpdateGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGroup(
          this.ops["UpdateGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLoginProfile(partialParams: ToOptional<{
      [K in keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest & keyof UpdateLoginProfileRequest]: (UpdateLoginProfileRequest & UpdateLoginProfileRequest & UpdateLoginProfileRequest & UpdateLoginProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLoginProfile(
          this.ops["UpdateLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOpenIDConnectProviderThumbprint(partialParams: ToOptional<{
      [K in keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest & keyof UpdateOpenIDConnectProviderThumbprintRequest]: (UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest & UpdateOpenIDConnectProviderThumbprintRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpenIDConnectProviderThumbprint(
          this.ops["UpdateOpenIDConnectProviderThumbprint"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRole(partialParams: ToOptional<{
      [K in keyof UpdateRoleRequest & keyof UpdateRoleRequest & keyof UpdateRoleRequest & keyof UpdateRoleRequest]: (UpdateRoleRequest & UpdateRoleRequest & UpdateRoleRequest & UpdateRoleRequest)[K]
    }>): Request<UpdateRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRole(
          this.ops["UpdateRole"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoleDescription(partialParams: ToOptional<{
      [K in keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest & keyof UpdateRoleDescriptionRequest]: (UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest & UpdateRoleDescriptionRequest)[K]
    }>): Request<UpdateRoleDescriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoleDescription(
          this.ops["UpdateRoleDescription"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSAMLProvider(partialParams: ToOptional<{
      [K in keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest & keyof UpdateSAMLProviderRequest]: (UpdateSAMLProviderRequest & UpdateSAMLProviderRequest & UpdateSAMLProviderRequest & UpdateSAMLProviderRequest)[K]
    }>): Request<UpdateSAMLProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSAMLProvider(
          this.ops["UpdateSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest & keyof UpdateSSHPublicKeyRequest]: (UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest & UpdateSSHPublicKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSSHPublicKey(
          this.ops["UpdateSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServerCertificate(partialParams: ToOptional<{
      [K in keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest & keyof UpdateServerCertificateRequest]: (UpdateServerCertificateRequest & UpdateServerCertificateRequest & UpdateServerCertificateRequest & UpdateServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServerCertificate(
          this.ops["UpdateServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest & keyof UpdateServiceSpecificCredentialRequest]: (UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest & UpdateServiceSpecificCredentialRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceSpecificCredential(
          this.ops["UpdateServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSigningCertificate(partialParams: ToOptional<{
      [K in keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest & keyof UpdateSigningCertificateRequest]: (UpdateSigningCertificateRequest & UpdateSigningCertificateRequest & UpdateSigningCertificateRequest & UpdateSigningCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSigningCertificate(
          this.ops["UpdateSigningCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }

    invokeUploadSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest & keyof UploadSSHPublicKeyRequest]: (UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest & UploadSSHPublicKeyRequest)[K]
    }>): Request<UploadSSHPublicKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadSSHPublicKey(
          this.ops["UploadSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeUploadServerCertificate(partialParams: ToOptional<{
      [K in keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest & keyof UploadServerCertificateRequest]: (UploadServerCertificateRequest & UploadServerCertificateRequest & UploadServerCertificateRequest & UploadServerCertificateRequest)[K]
    }>): Request<UploadServerCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadServerCertificate(
          this.ops["UploadServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUploadSigningCertificate(partialParams: ToOptional<{
      [K in keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest & keyof UploadSigningCertificateRequest]: (UploadSigningCertificateRequest & UploadSigningCertificateRequest & UploadSigningCertificateRequest & UploadSigningCertificateRequest)[K]
    }>): Request<UploadSigningCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadSigningCertificate(
          this.ops["UploadSigningCertificate"].applicator.apply(partialParams)
        );
    }
}