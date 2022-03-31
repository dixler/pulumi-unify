
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

export default class extends aws.iam.AccountAlias {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.iam.AccountAlias>) {
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
      [K in keyof AddClientIDToOpenIDConnectProviderRequest]: (AddClientIDToOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addClientIDToOpenIDConnectProvider(
          this.ops["AddClientIDToOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeAddRoleToInstanceProfile(partialParams: ToOptional<{
      [K in keyof AddRoleToInstanceProfileRequest]: (AddRoleToInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToInstanceProfile(
          this.ops["AddRoleToInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeAddUserToGroup(partialParams: ToOptional<{
      [K in keyof AddUserToGroupRequest]: (AddUserToGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addUserToGroup(
          this.ops["AddUserToGroup"].applicator.apply(partialParams)
        );
    }

    invokeAttachGroupPolicy(partialParams: ToOptional<{
      [K in keyof AttachGroupPolicyRequest]: (AttachGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachGroupPolicy(
          this.ops["AttachGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeAttachRolePolicy(partialParams: ToOptional<{
      [K in keyof AttachRolePolicyRequest]: (AttachRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachRolePolicy(
          this.ops["AttachRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeAttachUserPolicy(partialParams: ToOptional<{
      [K in keyof AttachUserPolicyRequest]: (AttachUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachUserPolicy(
          this.ops["AttachUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeChangePassword(partialParams: ToOptional<{
      [K in keyof ChangePasswordRequest]: (ChangePasswordRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changePassword(
          this.ops["ChangePassword"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccountAlias(partialParams: ToOptional<{
      [K in keyof CreateAccountAliasRequest]: (CreateAccountAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccountAlias(
          this.ops["CreateAccountAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest]: (CreateGroupRequest)[K]
    }>): Request<CreateGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest)[K]
    }>): Request<CreateInstanceProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceProfile(
          this.ops["CreateInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateLoginProfile(partialParams: ToOptional<{
      [K in keyof CreateLoginProfileRequest]: (CreateLoginProfileRequest)[K]
    }>): Request<CreateLoginProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoginProfile(
          this.ops["CreateLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof CreateOpenIDConnectProviderRequest]: (CreateOpenIDConnectProviderRequest)[K]
    }>): Request<CreateOpenIDConnectProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpenIDConnectProvider(
          this.ops["CreateOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest]: (CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest)[K]
    }>): Request<CreatePolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicyVersion(
          this.ops["CreatePolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateRole(partialParams: ToOptional<{
      [K in keyof CreateRoleRequest]: (CreateRoleRequest)[K]
    }>): Request<CreateRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRole(
          this.ops["CreateRole"].applicator.apply(partialParams)
        );
    }

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest]: (CreateSAMLProviderRequest)[K]
    }>): Request<CreateSAMLProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSAMLProvider(
          this.ops["CreateSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeCreateServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof CreateServiceLinkedRoleRequest]: (CreateServiceLinkedRoleRequest)[K]
    }>): Request<CreateServiceLinkedRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceLinkedRole(
          this.ops["CreateServiceLinkedRole"].applicator.apply(partialParams)
        );
    }

    invokeCreateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof CreateServiceSpecificCredentialRequest]: (CreateServiceSpecificCredentialRequest)[K]
    }>): Request<CreateServiceSpecificCredentialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceSpecificCredential(
          this.ops["CreateServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof CreateVirtualMFADeviceRequest]: (CreateVirtualMFADeviceRequest)[K]
    }>): Request<CreateVirtualMFADeviceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualMFADevice(
          this.ops["CreateVirtualMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeDeactivateMFADevice(partialParams: ToOptional<{
      [K in keyof DeactivateMFADeviceRequest]: (DeactivateMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivateMFADevice(
          this.ops["DeactivateMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccessKey(partialParams: ToOptional<{
      [K in keyof DeleteAccessKeyRequest]: (DeleteAccessKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccessKey(
          this.ops["DeleteAccessKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccountAlias(partialParams: ToOptional<{
      [K in keyof DeleteAccountAliasRequest]: (DeleteAccountAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccountAlias(
          this.ops["DeleteAccountAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest]: (DeleteGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroup(
          this.ops["DeleteGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGroupPolicy(partialParams: ToOptional<{
      [K in keyof DeleteGroupPolicyRequest]: (DeleteGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroupPolicy(
          this.ops["DeleteGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstanceProfile(partialParams: ToOptional<{
      [K in keyof DeleteInstanceProfileRequest]: (DeleteInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceProfile(
          this.ops["DeleteInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLoginProfile(partialParams: ToOptional<{
      [K in keyof DeleteLoginProfileRequest]: (DeleteLoginProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoginProfile(
          this.ops["DeleteLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof DeleteOpenIDConnectProviderRequest]: (DeleteOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOpenIDConnectProvider(
          this.ops["DeleteOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest]: (DeletePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicyVersion(partialParams: ToOptional<{
      [K in keyof DeletePolicyVersionRequest]: (DeletePolicyVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicyVersion(
          this.ops["DeletePolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRole(partialParams: ToOptional<{
      [K in keyof DeleteRoleRequest]: (DeleteRoleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRole(
          this.ops["DeleteRole"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRolePermissionsBoundary(partialParams: ToOptional<{
      [K in keyof DeleteRolePermissionsBoundaryRequest]: (DeleteRolePermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRolePermissionsBoundary(
          this.ops["DeleteRolePermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRolePolicy(partialParams: ToOptional<{
      [K in keyof DeleteRolePolicyRequest]: (DeleteRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRolePolicy(
          this.ops["DeleteRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSAMLProvider(partialParams: ToOptional<{
      [K in keyof DeleteSAMLProviderRequest]: (DeleteSAMLProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSAMLProvider(
          this.ops["DeleteSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSSHPublicKey(partialParams: ToOptional<{
      [K in keyof DeleteSSHPublicKeyRequest]: (DeleteSSHPublicKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSSHPublicKey(
          this.ops["DeleteSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServerCertificate(partialParams: ToOptional<{
      [K in keyof DeleteServerCertificateRequest]: (DeleteServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServerCertificate(
          this.ops["DeleteServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof DeleteServiceLinkedRoleRequest]: (DeleteServiceLinkedRoleRequest)[K]
    }>): Request<DeleteServiceLinkedRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceLinkedRole(
          this.ops["DeleteServiceLinkedRole"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof DeleteServiceSpecificCredentialRequest]: (DeleteServiceSpecificCredentialRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceSpecificCredential(
          this.ops["DeleteServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSigningCertificate(partialParams: ToOptional<{
      [K in keyof DeleteSigningCertificateRequest]: (DeleteSigningCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSigningCertificate(
          this.ops["DeleteSigningCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest]: (DeleteUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserPermissionsBoundary(partialParams: ToOptional<{
      [K in keyof DeleteUserPermissionsBoundaryRequest]: (DeleteUserPermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserPermissionsBoundary(
          this.ops["DeleteUserPermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserPolicy(partialParams: ToOptional<{
      [K in keyof DeleteUserPolicyRequest]: (DeleteUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserPolicy(
          this.ops["DeleteUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof DeleteVirtualMFADeviceRequest]: (DeleteVirtualMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualMFADevice(
          this.ops["DeleteVirtualMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeDetachGroupPolicy(partialParams: ToOptional<{
      [K in keyof DetachGroupPolicyRequest]: (DetachGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachGroupPolicy(
          this.ops["DetachGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachRolePolicy(partialParams: ToOptional<{
      [K in keyof DetachRolePolicyRequest]: (DetachRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachRolePolicy(
          this.ops["DetachRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachUserPolicy(partialParams: ToOptional<{
      [K in keyof DetachUserPolicyRequest]: (DetachUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachUserPolicy(
          this.ops["DetachUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeEnableMFADevice(partialParams: ToOptional<{
      [K in keyof EnableMFADeviceRequest]: (EnableMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableMFADevice(
          this.ops["EnableMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeGenerateOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GenerateOrganizationsAccessReportRequest]: (GenerateOrganizationsAccessReportRequest)[K]
    }>): Request<GenerateOrganizationsAccessReportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateOrganizationsAccessReport(
          this.ops["GenerateOrganizationsAccessReport"].applicator.apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest]: (GenerateServiceLastAccessedDetailsRequest)[K]
    }>): Request<GenerateServiceLastAccessedDetailsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateServiceLastAccessedDetails(
          this.ops["GenerateServiceLastAccessedDetails"].applicator.apply(partialParams)
        );
    }

    invokeGetAccessKeyLastUsed(partialParams: ToOptional<{
      [K in keyof GetAccessKeyLastUsedRequest]: (GetAccessKeyLastUsedRequest)[K]
    }>): Request<GetAccessKeyLastUsedResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccessKeyLastUsed(
          this.ops["GetAccessKeyLastUsed"].applicator.apply(partialParams)
        );
    }

    invokeGetContextKeysForCustomPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForCustomPolicyRequest]: (GetContextKeysForCustomPolicyRequest)[K]
    }>): Request<GetContextKeysForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContextKeysForCustomPolicy(
          this.ops["GetContextKeysForCustomPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetContextKeysForPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForPrincipalPolicyRequest]: (GetContextKeysForPrincipalPolicyRequest)[K]
    }>): Request<GetContextKeysForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContextKeysForPrincipalPolicy(
          this.ops["GetContextKeysForPrincipalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetGroup(partialParams: ToOptional<{
      [K in keyof GetGroupRequest]: (GetGroupRequest)[K]
    }>): Request<GetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroup(
          this.ops["GetGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetGroupPolicyRequest]: (GetGroupPolicyRequest)[K]
    }>): Request<GetGroupPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroupPolicy(
          this.ops["GetGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof GetInstanceProfileRequest]: (GetInstanceProfileRequest)[K]
    }>): Request<GetInstanceProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceProfile(
          this.ops["GetInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetLoginProfile(partialParams: ToOptional<{
      [K in keyof GetLoginProfileRequest]: (GetLoginProfileRequest)[K]
    }>): Request<GetLoginProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoginProfile(
          this.ops["GetLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof GetOpenIDConnectProviderRequest]: (GetOpenIDConnectProviderRequest)[K]
    }>): Request<GetOpenIDConnectProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpenIDConnectProvider(
          this.ops["GetOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeGetOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GetOrganizationsAccessReportRequest]: (GetOrganizationsAccessReportRequest)[K]
    }>): Request<GetOrganizationsAccessReportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOrganizationsAccessReport(
          this.ops["GetOrganizationsAccessReport"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest)[K]
    }>): Request<GetPolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicyVersion(
          this.ops["GetPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetRole(partialParams: ToOptional<{
      [K in keyof GetRoleRequest]: (GetRoleRequest)[K]
    }>): Request<GetRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRole(
          this.ops["GetRole"].applicator.apply(partialParams)
        );
    }

    invokeGetRolePolicy(partialParams: ToOptional<{
      [K in keyof GetRolePolicyRequest]: (GetRolePolicyRequest)[K]
    }>): Request<GetRolePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRolePolicy(
          this.ops["GetRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetSAMLProvider(partialParams: ToOptional<{
      [K in keyof GetSAMLProviderRequest]: (GetSAMLProviderRequest)[K]
    }>): Request<GetSAMLProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSAMLProvider(
          this.ops["GetSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeGetSSHPublicKey(partialParams: ToOptional<{
      [K in keyof GetSSHPublicKeyRequest]: (GetSSHPublicKeyRequest)[K]
    }>): Request<GetSSHPublicKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSSHPublicKey(
          this.ops["GetSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeGetServerCertificate(partialParams: ToOptional<{
      [K in keyof GetServerCertificateRequest]: (GetServerCertificateRequest)[K]
    }>): Request<GetServerCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServerCertificate(
          this.ops["GetServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsRequest]: (GetServiceLastAccessedDetailsRequest)[K]
    }>): Request<GetServiceLastAccessedDetailsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLastAccessedDetails(
          this.ops["GetServiceLastAccessedDetails"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetailsWithEntities(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsWithEntitiesRequest]: (GetServiceLastAccessedDetailsWithEntitiesRequest)[K]
    }>): Request<GetServiceLastAccessedDetailsWithEntitiesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLastAccessedDetailsWithEntities(
          this.ops["GetServiceLastAccessedDetailsWithEntities"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceLinkedRoleDeletionStatus(partialParams: ToOptional<{
      [K in keyof GetServiceLinkedRoleDeletionStatusRequest]: (GetServiceLinkedRoleDeletionStatusRequest)[K]
    }>): Request<GetServiceLinkedRoleDeletionStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLinkedRoleDeletionStatus(
          this.ops["GetServiceLinkedRoleDeletionStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetUserPolicy(partialParams: ToOptional<{
      [K in keyof GetUserPolicyRequest]: (GetUserPolicyRequest)[K]
    }>): Request<GetUserPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserPolicy(
          this.ops["GetUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedGroupPoliciesRequest]: (ListAttachedGroupPoliciesRequest)[K]
    }>): Request<ListAttachedGroupPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedGroupPolicies(
          this.ops["ListAttachedGroupPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedRolePolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedRolePoliciesRequest]: (ListAttachedRolePoliciesRequest)[K]
    }>): Request<ListAttachedRolePoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedRolePolicies(
          this.ops["ListAttachedRolePolicies"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedUserPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedUserPoliciesRequest]: (ListAttachedUserPoliciesRequest)[K]
    }>): Request<ListAttachedUserPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedUserPolicies(
          this.ops["ListAttachedUserPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListEntitiesForPolicy(partialParams: ToOptional<{
      [K in keyof ListEntitiesForPolicyRequest]: (ListEntitiesForPolicyRequest)[K]
    }>): Request<ListEntitiesForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEntitiesForPolicy(
          this.ops["ListEntitiesForPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListGroupPoliciesRequest]: (ListGroupPoliciesRequest)[K]
    }>): Request<ListGroupPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupPolicies(
          this.ops["ListGroupPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListGroupsForUser(partialParams: ToOptional<{
      [K in keyof ListGroupsForUserRequest]: (ListGroupsForUserRequest)[K]
    }>): Request<ListGroupsForUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupsForUser(
          this.ops["ListGroupsForUser"].applicator.apply(partialParams)
        );
    }

    invokeListInstanceProfileTags(partialParams: ToOptional<{
      [K in keyof ListInstanceProfileTagsRequest]: (ListInstanceProfileTagsRequest)[K]
    }>): Request<ListInstanceProfileTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceProfileTags(
          this.ops["ListInstanceProfileTags"].applicator.apply(partialParams)
        );
    }

    invokeListInstanceProfilesForRole(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesForRoleRequest]: (ListInstanceProfilesForRoleRequest)[K]
    }>): Request<ListInstanceProfilesForRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceProfilesForRole(
          this.ops["ListInstanceProfilesForRole"].applicator.apply(partialParams)
        );
    }

    invokeListMFADeviceTags(partialParams: ToOptional<{
      [K in keyof ListMFADeviceTagsRequest]: (ListMFADeviceTagsRequest)[K]
    }>): Request<ListMFADeviceTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMFADeviceTags(
          this.ops["ListMFADeviceTags"].applicator.apply(partialParams)
        );
    }

    invokeListOpenIDConnectProviderTags(partialParams: ToOptional<{
      [K in keyof ListOpenIDConnectProviderTagsRequest]: (ListOpenIDConnectProviderTagsRequest)[K]
    }>): Request<ListOpenIDConnectProviderTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOpenIDConnectProviderTags(
          this.ops["ListOpenIDConnectProviderTags"].applicator.apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest]: (ListPoliciesGrantingServiceAccessRequest)[K]
    }>): Request<ListPoliciesGrantingServiceAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(
          this.ops["ListPoliciesGrantingServiceAccess"].applicator.apply(partialParams)
        );
    }

    invokeListPolicyTags(partialParams: ToOptional<{
      [K in keyof ListPolicyTagsRequest]: (ListPolicyTagsRequest)[K]
    }>): Request<ListPolicyTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyTags(
          this.ops["ListPolicyTags"].applicator.apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest)[K]
    }>): Request<ListPolicyVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyVersions(
          this.ops["ListPolicyVersions"].applicator.apply(partialParams)
        );
    }

    invokeListRolePolicies(partialParams: ToOptional<{
      [K in keyof ListRolePoliciesRequest]: (ListRolePoliciesRequest)[K]
    }>): Request<ListRolePoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRolePolicies(
          this.ops["ListRolePolicies"].applicator.apply(partialParams)
        );
    }

    invokeListRoleTags(partialParams: ToOptional<{
      [K in keyof ListRoleTagsRequest]: (ListRoleTagsRequest)[K]
    }>): Request<ListRoleTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoleTags(
          this.ops["ListRoleTags"].applicator.apply(partialParams)
        );
    }

    invokeListSAMLProviderTags(partialParams: ToOptional<{
      [K in keyof ListSAMLProviderTagsRequest]: (ListSAMLProviderTagsRequest)[K]
    }>): Request<ListSAMLProviderTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSAMLProviderTags(
          this.ops["ListSAMLProviderTags"].applicator.apply(partialParams)
        );
    }

    invokeListServerCertificateTags(partialParams: ToOptional<{
      [K in keyof ListServerCertificateTagsRequest]: (ListServerCertificateTagsRequest)[K]
    }>): Request<ListServerCertificateTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listServerCertificateTags(
          this.ops["ListServerCertificateTags"].applicator.apply(partialParams)
        );
    }

    invokeListUserPolicies(partialParams: ToOptional<{
      [K in keyof ListUserPoliciesRequest]: (ListUserPoliciesRequest)[K]
    }>): Request<ListUserPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserPolicies(
          this.ops["ListUserPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListUserTags(partialParams: ToOptional<{
      [K in keyof ListUserTagsRequest]: (ListUserTagsRequest)[K]
    }>): Request<ListUserTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserTags(
          this.ops["ListUserTags"].applicator.apply(partialParams)
        );
    }

    invokePutGroupPolicy(partialParams: ToOptional<{
      [K in keyof PutGroupPolicyRequest]: (PutGroupPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putGroupPolicy(
          this.ops["PutGroupPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutRolePermissionsBoundary(partialParams: ToOptional<{
      [K in keyof PutRolePermissionsBoundaryRequest]: (PutRolePermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRolePermissionsBoundary(
          this.ops["PutRolePermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokePutRolePolicy(partialParams: ToOptional<{
      [K in keyof PutRolePolicyRequest]: (PutRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRolePolicy(
          this.ops["PutRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutUserPermissionsBoundary(partialParams: ToOptional<{
      [K in keyof PutUserPermissionsBoundaryRequest]: (PutUserPermissionsBoundaryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putUserPermissionsBoundary(
          this.ops["PutUserPermissionsBoundary"].applicator.apply(partialParams)
        );
    }

    invokePutUserPolicy(partialParams: ToOptional<{
      [K in keyof PutUserPolicyRequest]: (PutUserPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putUserPolicy(
          this.ops["PutUserPolicy"].applicator.apply(partialParams)
        );
    }

    invokeRemoveClientIDFromOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof RemoveClientIDFromOpenIDConnectProviderRequest]: (RemoveClientIDFromOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeClientIDFromOpenIDConnectProvider(
          this.ops["RemoveClientIDFromOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeRemoveRoleFromInstanceProfile(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromInstanceProfileRequest]: (RemoveRoleFromInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromInstanceProfile(
          this.ops["RemoveRoleFromInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeRemoveUserFromGroup(partialParams: ToOptional<{
      [K in keyof RemoveUserFromGroupRequest]: (RemoveUserFromGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeUserFromGroup(
          this.ops["RemoveUserFromGroup"].applicator.apply(partialParams)
        );
    }

    invokeResetServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof ResetServiceSpecificCredentialRequest]: (ResetServiceSpecificCredentialRequest)[K]
    }>): Request<ResetServiceSpecificCredentialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetServiceSpecificCredential(
          this.ops["ResetServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeResyncMFADevice(partialParams: ToOptional<{
      [K in keyof ResyncMFADeviceRequest]: (ResyncMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resyncMFADevice(
          this.ops["ResyncMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeSetDefaultPolicyVersion(partialParams: ToOptional<{
      [K in keyof SetDefaultPolicyVersionRequest]: (SetDefaultPolicyVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultPolicyVersion(
          this.ops["SetDefaultPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeSetSecurityTokenServicePreferences(partialParams: ToOptional<{
      [K in keyof SetSecurityTokenServicePreferencesRequest]: (SetSecurityTokenServicePreferencesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSecurityTokenServicePreferences(
          this.ops["SetSecurityTokenServicePreferences"].applicator.apply(partialParams)
        );
    }

    invokeSimulateCustomPolicy(partialParams: ToOptional<{
      [K in keyof SimulateCustomPolicyRequest]: (SimulateCustomPolicyRequest)[K]
    }>): Request<SimulatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.simulateCustomPolicy(
          this.ops["SimulateCustomPolicy"].applicator.apply(partialParams)
        );
    }

    invokeSimulatePrincipalPolicy(partialParams: ToOptional<{
      [K in keyof SimulatePrincipalPolicyRequest]: (SimulatePrincipalPolicyRequest)[K]
    }>): Request<SimulatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.simulatePrincipalPolicy(
          this.ops["SimulatePrincipalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagInstanceProfile(partialParams: ToOptional<{
      [K in keyof TagInstanceProfileRequest]: (TagInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagInstanceProfile(
          this.ops["TagInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeTagMFADevice(partialParams: ToOptional<{
      [K in keyof TagMFADeviceRequest]: (TagMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagMFADevice(
          this.ops["TagMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeTagOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof TagOpenIDConnectProviderRequest]: (TagOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagOpenIDConnectProvider(
          this.ops["TagOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeTagPolicy(partialParams: ToOptional<{
      [K in keyof TagPolicyRequest]: (TagPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagPolicy(
          this.ops["TagPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagRole(partialParams: ToOptional<{
      [K in keyof TagRoleRequest]: (TagRoleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagRole(
          this.ops["TagRole"].applicator.apply(partialParams)
        );
    }

    invokeTagSAMLProvider(partialParams: ToOptional<{
      [K in keyof TagSAMLProviderRequest]: (TagSAMLProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagSAMLProvider(
          this.ops["TagSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeTagServerCertificate(partialParams: ToOptional<{
      [K in keyof TagServerCertificateRequest]: (TagServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagServerCertificate(
          this.ops["TagServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeTagUser(partialParams: ToOptional<{
      [K in keyof TagUserRequest]: (TagUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagUser(
          this.ops["TagUser"].applicator.apply(partialParams)
        );
    }

    invokeUntagInstanceProfile(partialParams: ToOptional<{
      [K in keyof UntagInstanceProfileRequest]: (UntagInstanceProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagInstanceProfile(
          this.ops["UntagInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeUntagMFADevice(partialParams: ToOptional<{
      [K in keyof UntagMFADeviceRequest]: (UntagMFADeviceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagMFADevice(
          this.ops["UntagMFADevice"].applicator.apply(partialParams)
        );
    }

    invokeUntagOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof UntagOpenIDConnectProviderRequest]: (UntagOpenIDConnectProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagOpenIDConnectProvider(
          this.ops["UntagOpenIDConnectProvider"].applicator.apply(partialParams)
        );
    }

    invokeUntagPolicy(partialParams: ToOptional<{
      [K in keyof UntagPolicyRequest]: (UntagPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagPolicy(
          this.ops["UntagPolicy"].applicator.apply(partialParams)
        );
    }

    invokeUntagRole(partialParams: ToOptional<{
      [K in keyof UntagRoleRequest]: (UntagRoleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagRole(
          this.ops["UntagRole"].applicator.apply(partialParams)
        );
    }

    invokeUntagSAMLProvider(partialParams: ToOptional<{
      [K in keyof UntagSAMLProviderRequest]: (UntagSAMLProviderRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagSAMLProvider(
          this.ops["UntagSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeUntagServerCertificate(partialParams: ToOptional<{
      [K in keyof UntagServerCertificateRequest]: (UntagServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagServerCertificate(
          this.ops["UntagServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUntagUser(partialParams: ToOptional<{
      [K in keyof UntagUserRequest]: (UntagUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagUser(
          this.ops["UntagUser"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccessKey(partialParams: ToOptional<{
      [K in keyof UpdateAccessKeyRequest]: (UpdateAccessKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccessKey(
          this.ops["UpdateAccessKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAssumeRolePolicy(partialParams: ToOptional<{
      [K in keyof UpdateAssumeRolePolicyRequest]: (UpdateAssumeRolePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssumeRolePolicy(
          this.ops["UpdateAssumeRolePolicy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest]: (UpdateGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGroup(
          this.ops["UpdateGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLoginProfile(partialParams: ToOptional<{
      [K in keyof UpdateLoginProfileRequest]: (UpdateLoginProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLoginProfile(
          this.ops["UpdateLoginProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOpenIDConnectProviderThumbprint(partialParams: ToOptional<{
      [K in keyof UpdateOpenIDConnectProviderThumbprintRequest]: (UpdateOpenIDConnectProviderThumbprintRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpenIDConnectProviderThumbprint(
          this.ops["UpdateOpenIDConnectProviderThumbprint"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRole(partialParams: ToOptional<{
      [K in keyof UpdateRoleRequest]: (UpdateRoleRequest)[K]
    }>): Request<UpdateRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRole(
          this.ops["UpdateRole"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoleDescription(partialParams: ToOptional<{
      [K in keyof UpdateRoleDescriptionRequest]: (UpdateRoleDescriptionRequest)[K]
    }>): Request<UpdateRoleDescriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoleDescription(
          this.ops["UpdateRoleDescription"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSAMLProvider(partialParams: ToOptional<{
      [K in keyof UpdateSAMLProviderRequest]: (UpdateSAMLProviderRequest)[K]
    }>): Request<UpdateSAMLProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSAMLProvider(
          this.ops["UpdateSAMLProvider"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UpdateSSHPublicKeyRequest]: (UpdateSSHPublicKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSSHPublicKey(
          this.ops["UpdateSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServerCertificate(partialParams: ToOptional<{
      [K in keyof UpdateServerCertificateRequest]: (UpdateServerCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServerCertificate(
          this.ops["UpdateServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof UpdateServiceSpecificCredentialRequest]: (UpdateServiceSpecificCredentialRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceSpecificCredential(
          this.ops["UpdateServiceSpecificCredential"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSigningCertificate(partialParams: ToOptional<{
      [K in keyof UpdateSigningCertificateRequest]: (UpdateSigningCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSigningCertificate(
          this.ops["UpdateSigningCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest]: (UpdateUserRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }

    invokeUploadSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UploadSSHPublicKeyRequest]: (UploadSSHPublicKeyRequest)[K]
    }>): Request<UploadSSHPublicKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadSSHPublicKey(
          this.ops["UploadSSHPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeUploadServerCertificate(partialParams: ToOptional<{
      [K in keyof UploadServerCertificateRequest]: (UploadServerCertificateRequest)[K]
    }>): Request<UploadServerCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadServerCertificate(
          this.ops["UploadServerCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUploadSigningCertificate(partialParams: ToOptional<{
      [K in keyof UploadSigningCertificateRequest]: (UploadSigningCertificateRequest)[K]
    }>): Request<UploadSigningCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadSigningCertificate(
          this.ops["UploadSigningCertificate"].applicator.apply(partialParams)
        );
    }
}