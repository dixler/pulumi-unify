
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAccessKeyRequest,
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
    DeleteServiceLinkedRoleRequest,
    GenerateOrganizationsAccessReportRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetAccessKeyLastUsedRequest,
    GetAccountAuthorizationDetailsRequest,
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
    GetUserRequest,
    GetUserPolicyRequest,
    ListAccessKeysRequest,
    ListAccountAliasesRequest,
    ListAttachedGroupPoliciesRequest,
    ListAttachedRolePoliciesRequest,
    ListAttachedUserPoliciesRequest,
    ListEntitiesForPolicyRequest,
    ListGroupPoliciesRequest,
    ListGroupsRequest,
    ListGroupsForUserRequest,
    ListInstanceProfileTagsRequest,
    ListInstanceProfilesRequest,
    ListInstanceProfilesForRoleRequest,
    ListMFADeviceTagsRequest,
    ListMFADevicesRequest,
    ListOpenIDConnectProviderTagsRequest,
    ListOpenIDConnectProvidersRequest,
    ListPoliciesRequest,
    ListPoliciesGrantingServiceAccessRequest,
    ListPolicyTagsRequest,
    ListPolicyVersionsRequest,
    ListRolePoliciesRequest,
    ListRoleTagsRequest,
    ListRolesRequest,
    ListSAMLProviderTagsRequest,
    ListSAMLProvidersRequest,
    ListSSHPublicKeysRequest,
    ListServerCertificateTagsRequest,
    ListServerCertificatesRequest,
    ListServiceSpecificCredentialsRequest,
    ListSigningCertificatesRequest,
    ListUserPoliciesRequest,
    ListUserTagsRequest,
    ListUsersRequest,
    ListVirtualMFADevicesRequest,
    ResetServiceSpecificCredentialRequest,
    SimulateCustomPolicyRequest,
    SimulatePrincipalPolicyRequest,
    UpdateRoleRequest,
    UpdateRoleDescriptionRequest,
    UpdateSAMLProviderRequest,
    UploadSSHPublicKeyRequest,
    UploadServerCertificateRequest,
    UploadSigningCertificateRequest,
    CreateAccessKeyResponse,
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
    GetAccountAuthorizationDetailsResponse,
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
    GetUserResponse,
    GetUserPolicyResponse,
    ListAccessKeysResponse,
    ListAccountAliasesResponse,
    ListAttachedGroupPoliciesResponse,
    ListAttachedRolePoliciesResponse,
    ListAttachedUserPoliciesResponse,
    ListEntitiesForPolicyResponse,
    ListGroupPoliciesResponse,
    ListGroupsResponse,
    ListGroupsForUserResponse,
    ListInstanceProfileTagsResponse,
    ListInstanceProfilesResponse,
    ListInstanceProfilesForRoleResponse,
    ListMFADeviceTagsResponse,
    ListMFADevicesResponse,
    ListOpenIDConnectProviderTagsResponse,
    ListOpenIDConnectProvidersResponse,
    ListPoliciesResponse,
    ListPoliciesGrantingServiceAccessResponse,
    ListPolicyTagsResponse,
    ListPolicyVersionsResponse,
    ListRolePoliciesResponse,
    ListRoleTagsResponse,
    ListRolesResponse,
    ListSAMLProviderTagsResponse,
    ListSAMLProvidersResponse,
    ListSSHPublicKeysResponse,
    ListServerCertificateTagsResponse,
    ListServerCertificatesResponse,
    ListServiceSpecificCredentialsResponse,
    ListSigningCertificatesResponse,
    ListUserPoliciesResponse,
    ListUserTagsResponse,
    ListUsersResponse,
    ListVirtualMFADevicesResponse,
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

export default class extends aws.iam.UserLoginProfile {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iam.UserLoginProfile>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.IAM()
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

    invokeCreateAccessKey(partialParams: ToOptional<{
      [K in keyof CreateAccessKeyRequest]: (CreateAccessKeyRequest)[K]
    }>): Request<CreateAccessKeyResponse, AWSError> {
        this.boot();
        return this.client.createAccessKey(
          this.ops["CreateAccessKey"].apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest]: (CreateGroupRequest)[K]
    }>): Request<CreateGroupResponse, AWSError> {
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest)[K]
    }>): Request<CreateInstanceProfileResponse, AWSError> {
        this.boot();
        return this.client.createInstanceProfile(
          this.ops["CreateInstanceProfile"].apply(partialParams)
        );
    }

    invokeCreateLoginProfile(partialParams: ToOptional<{
      [K in keyof CreateLoginProfileRequest & keyof Omit<CreateLoginProfileRequest, "Password">]: (CreateLoginProfileRequest)[K]
    }>): Request<CreateLoginProfileResponse, AWSError> {
        this.boot();
        return this.client.createLoginProfile(
          this.ops["CreateLoginProfile"].apply(partialParams)
        );
    }

    invokeCreateOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof CreateOpenIDConnectProviderRequest]: (CreateOpenIDConnectProviderRequest)[K]
    }>): Request<CreateOpenIDConnectProviderResponse, AWSError> {
        this.boot();
        return this.client.createOpenIDConnectProvider(
          this.ops["CreateOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest]: (CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest)[K]
    }>): Request<CreatePolicyVersionResponse, AWSError> {
        this.boot();
        return this.client.createPolicyVersion(
          this.ops["CreatePolicyVersion"].apply(partialParams)
        );
    }

    invokeCreateRole(partialParams: ToOptional<{
      [K in keyof CreateRoleRequest]: (CreateRoleRequest)[K]
    }>): Request<CreateRoleResponse, AWSError> {
        this.boot();
        return this.client.createRole(
          this.ops["CreateRole"].apply(partialParams)
        );
    }

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest]: (CreateSAMLProviderRequest)[K]
    }>): Request<CreateSAMLProviderResponse, AWSError> {
        this.boot();
        return this.client.createSAMLProvider(
          this.ops["CreateSAMLProvider"].apply(partialParams)
        );
    }

    invokeCreateServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof CreateServiceLinkedRoleRequest]: (CreateServiceLinkedRoleRequest)[K]
    }>): Request<CreateServiceLinkedRoleResponse, AWSError> {
        this.boot();
        return this.client.createServiceLinkedRole(
          this.ops["CreateServiceLinkedRole"].apply(partialParams)
        );
    }

    invokeCreateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof CreateServiceSpecificCredentialRequest]: (CreateServiceSpecificCredentialRequest)[K]
    }>): Request<CreateServiceSpecificCredentialResponse, AWSError> {
        this.boot();
        return this.client.createServiceSpecificCredential(
          this.ops["CreateServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateVirtualMFADevice(partialParams: ToOptional<{
      [K in keyof CreateVirtualMFADeviceRequest]: (CreateVirtualMFADeviceRequest)[K]
    }>): Request<CreateVirtualMFADeviceResponse, AWSError> {
        this.boot();
        return this.client.createVirtualMFADevice(
          this.ops["CreateVirtualMFADevice"].apply(partialParams)
        );
    }

    invokeDeleteServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof DeleteServiceLinkedRoleRequest]: (DeleteServiceLinkedRoleRequest)[K]
    }>): Request<DeleteServiceLinkedRoleResponse, AWSError> {
        this.boot();
        return this.client.deleteServiceLinkedRole(
          this.ops["DeleteServiceLinkedRole"].apply(partialParams)
        );
    }

    invokeGenerateOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GenerateOrganizationsAccessReportRequest]: (GenerateOrganizationsAccessReportRequest)[K]
    }>): Request<GenerateOrganizationsAccessReportResponse, AWSError> {
        this.boot();
        return this.client.generateOrganizationsAccessReport(
          this.ops["GenerateOrganizationsAccessReport"].apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest]: (GenerateServiceLastAccessedDetailsRequest)[K]
    }>): Request<GenerateServiceLastAccessedDetailsResponse, AWSError> {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(
          this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetAccessKeyLastUsed(partialParams: ToOptional<{
      [K in keyof GetAccessKeyLastUsedRequest]: (GetAccessKeyLastUsedRequest)[K]
    }>): Request<GetAccessKeyLastUsedResponse, AWSError> {
        this.boot();
        return this.client.getAccessKeyLastUsed(
          this.ops["GetAccessKeyLastUsed"].apply(partialParams)
        );
    }

    invokeGetAccountAuthorizationDetails(partialParams: ToOptional<{
      [K in keyof GetAccountAuthorizationDetailsRequest]: (GetAccountAuthorizationDetailsRequest)[K]
    }>): Request<GetAccountAuthorizationDetailsResponse, AWSError> {
        this.boot();
        return this.client.getAccountAuthorizationDetails(
          this.ops["GetAccountAuthorizationDetails"].apply(partialParams)
        );
    }

    invokeGetContextKeysForCustomPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForCustomPolicyRequest]: (GetContextKeysForCustomPolicyRequest)[K]
    }>): Request<GetContextKeysForPolicyResponse, AWSError> {
        this.boot();
        return this.client.getContextKeysForCustomPolicy(
          this.ops["GetContextKeysForCustomPolicy"].apply(partialParams)
        );
    }

    invokeGetContextKeysForPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof GetContextKeysForPrincipalPolicyRequest]: (GetContextKeysForPrincipalPolicyRequest)[K]
    }>): Request<GetContextKeysForPolicyResponse, AWSError> {
        this.boot();
        return this.client.getContextKeysForPrincipalPolicy(
          this.ops["GetContextKeysForPrincipalPolicy"].apply(partialParams)
        );
    }

    invokeGetGroup(partialParams: ToOptional<{
      [K in keyof GetGroupRequest]: (GetGroupRequest)[K]
    }>): Request<GetGroupResponse, AWSError> {
        this.boot();
        return this.client.getGroup(
          this.ops["GetGroup"].apply(partialParams)
        );
    }

    invokeGetGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetGroupPolicyRequest]: (GetGroupPolicyRequest)[K]
    }>): Request<GetGroupPolicyResponse, AWSError> {
        this.boot();
        return this.client.getGroupPolicy(
          this.ops["GetGroupPolicy"].apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof GetInstanceProfileRequest]: (GetInstanceProfileRequest)[K]
    }>): Request<GetInstanceProfileResponse, AWSError> {
        this.boot();
        return this.client.getInstanceProfile(
          this.ops["GetInstanceProfile"].apply(partialParams)
        );
    }

    invokeGetLoginProfile(partialParams: ToOptional<{
      [K in keyof GetLoginProfileRequest]: (GetLoginProfileRequest)[K]
    }>): Request<GetLoginProfileResponse, AWSError> {
        this.boot();
        return this.client.getLoginProfile(
          this.ops["GetLoginProfile"].apply(partialParams)
        );
    }

    invokeGetOpenIDConnectProvider(partialParams: ToOptional<{
      [K in keyof GetOpenIDConnectProviderRequest]: (GetOpenIDConnectProviderRequest)[K]
    }>): Request<GetOpenIDConnectProviderResponse, AWSError> {
        this.boot();
        return this.client.getOpenIDConnectProvider(
          this.ops["GetOpenIDConnectProvider"].apply(partialParams)
        );
    }

    invokeGetOrganizationsAccessReport(partialParams: ToOptional<{
      [K in keyof GetOrganizationsAccessReportRequest]: (GetOrganizationsAccessReportRequest)[K]
    }>): Request<GetOrganizationsAccessReportResponse, AWSError> {
        this.boot();
        return this.client.getOrganizationsAccessReport(
          this.ops["GetOrganizationsAccessReport"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest)[K]
    }>): Request<GetPolicyVersionResponse, AWSError> {
        this.boot();
        return this.client.getPolicyVersion(
          this.ops["GetPolicyVersion"].apply(partialParams)
        );
    }

    invokeGetRole(partialParams: ToOptional<{
      [K in keyof GetRoleRequest]: (GetRoleRequest)[K]
    }>): Request<GetRoleResponse, AWSError> {
        this.boot();
        return this.client.getRole(
          this.ops["GetRole"].apply(partialParams)
        );
    }

    invokeGetRolePolicy(partialParams: ToOptional<{
      [K in keyof GetRolePolicyRequest]: (GetRolePolicyRequest)[K]
    }>): Request<GetRolePolicyResponse, AWSError> {
        this.boot();
        return this.client.getRolePolicy(
          this.ops["GetRolePolicy"].apply(partialParams)
        );
    }

    invokeGetSAMLProvider(partialParams: ToOptional<{
      [K in keyof GetSAMLProviderRequest]: (GetSAMLProviderRequest)[K]
    }>): Request<GetSAMLProviderResponse, AWSError> {
        this.boot();
        return this.client.getSAMLProvider(
          this.ops["GetSAMLProvider"].apply(partialParams)
        );
    }

    invokeGetSSHPublicKey(partialParams: ToOptional<{
      [K in keyof GetSSHPublicKeyRequest]: (GetSSHPublicKeyRequest)[K]
    }>): Request<GetSSHPublicKeyResponse, AWSError> {
        this.boot();
        return this.client.getSSHPublicKey(
          this.ops["GetSSHPublicKey"].apply(partialParams)
        );
    }

    invokeGetServerCertificate(partialParams: ToOptional<{
      [K in keyof GetServerCertificateRequest]: (GetServerCertificateRequest)[K]
    }>): Request<GetServerCertificateResponse, AWSError> {
        this.boot();
        return this.client.getServerCertificate(
          this.ops["GetServerCertificate"].apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsRequest]: (GetServiceLastAccessedDetailsRequest)[K]
    }>): Request<GetServiceLastAccessedDetailsResponse, AWSError> {
        this.boot();
        return this.client.getServiceLastAccessedDetails(
          this.ops["GetServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetServiceLastAccessedDetailsWithEntities(partialParams: ToOptional<{
      [K in keyof GetServiceLastAccessedDetailsWithEntitiesRequest]: (GetServiceLastAccessedDetailsWithEntitiesRequest)[K]
    }>): Request<GetServiceLastAccessedDetailsWithEntitiesResponse, AWSError> {
        this.boot();
        return this.client.getServiceLastAccessedDetailsWithEntities(
          this.ops["GetServiceLastAccessedDetailsWithEntities"].apply(partialParams)
        );
    }

    invokeGetServiceLinkedRoleDeletionStatus(partialParams: ToOptional<{
      [K in keyof GetServiceLinkedRoleDeletionStatusRequest]: (GetServiceLinkedRoleDeletionStatusRequest)[K]
    }>): Request<GetServiceLinkedRoleDeletionStatusResponse, AWSError> {
        this.boot();
        return this.client.getServiceLinkedRoleDeletionStatus(
          this.ops["GetServiceLinkedRoleDeletionStatus"].apply(partialParams)
        );
    }

    invokeGetUser(partialParams: ToOptional<{
      [K in keyof GetUserRequest]: (GetUserRequest)[K]
    }>): Request<GetUserResponse, AWSError> {
        this.boot();
        return this.client.getUser(
          this.ops["GetUser"].apply(partialParams)
        );
    }

    invokeGetUserPolicy(partialParams: ToOptional<{
      [K in keyof GetUserPolicyRequest]: (GetUserPolicyRequest)[K]
    }>): Request<GetUserPolicyResponse, AWSError> {
        this.boot();
        return this.client.getUserPolicy(
          this.ops["GetUserPolicy"].apply(partialParams)
        );
    }

    invokeListAccessKeys(partialParams: ToOptional<{
      [K in keyof ListAccessKeysRequest]: (ListAccessKeysRequest)[K]
    }>): Request<ListAccessKeysResponse, AWSError> {
        this.boot();
        return this.client.listAccessKeys(
          this.ops["ListAccessKeys"].apply(partialParams)
        );
    }

    invokeListAccountAliases(partialParams: ToOptional<{
      [K in keyof ListAccountAliasesRequest]: (ListAccountAliasesRequest)[K]
    }>): Request<ListAccountAliasesResponse, AWSError> {
        this.boot();
        return this.client.listAccountAliases(
          this.ops["ListAccountAliases"].apply(partialParams)
        );
    }

    invokeListAttachedGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedGroupPoliciesRequest]: (ListAttachedGroupPoliciesRequest)[K]
    }>): Request<ListAttachedGroupPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedGroupPolicies(
          this.ops["ListAttachedGroupPolicies"].apply(partialParams)
        );
    }

    invokeListAttachedRolePolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedRolePoliciesRequest]: (ListAttachedRolePoliciesRequest)[K]
    }>): Request<ListAttachedRolePoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedRolePolicies(
          this.ops["ListAttachedRolePolicies"].apply(partialParams)
        );
    }

    invokeListAttachedUserPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedUserPoliciesRequest]: (ListAttachedUserPoliciesRequest)[K]
    }>): Request<ListAttachedUserPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedUserPolicies(
          this.ops["ListAttachedUserPolicies"].apply(partialParams)
        );
    }

    invokeListEntitiesForPolicy(partialParams: ToOptional<{
      [K in keyof ListEntitiesForPolicyRequest]: (ListEntitiesForPolicyRequest)[K]
    }>): Request<ListEntitiesForPolicyResponse, AWSError> {
        this.boot();
        return this.client.listEntitiesForPolicy(
          this.ops["ListEntitiesForPolicy"].apply(partialParams)
        );
    }

    invokeListGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListGroupPoliciesRequest]: (ListGroupPoliciesRequest)[K]
    }>): Request<ListGroupPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listGroupPolicies(
          this.ops["ListGroupPolicies"].apply(partialParams)
        );
    }

    invokeListGroups(partialParams: ToOptional<{
      [K in keyof ListGroupsRequest]: (ListGroupsRequest)[K]
    }>): Request<ListGroupsResponse, AWSError> {
        this.boot();
        return this.client.listGroups(
          this.ops["ListGroups"].apply(partialParams)
        );
    }

    invokeListGroupsForUser(partialParams: ToOptional<{
      [K in keyof ListGroupsForUserRequest]: (ListGroupsForUserRequest)[K]
    }>): Request<ListGroupsForUserResponse, AWSError> {
        this.boot();
        return this.client.listGroupsForUser(
          this.ops["ListGroupsForUser"].apply(partialParams)
        );
    }

    invokeListInstanceProfileTags(partialParams: ToOptional<{
      [K in keyof ListInstanceProfileTagsRequest]: (ListInstanceProfileTagsRequest)[K]
    }>): Request<ListInstanceProfileTagsResponse, AWSError> {
        this.boot();
        return this.client.listInstanceProfileTags(
          this.ops["ListInstanceProfileTags"].apply(partialParams)
        );
    }

    invokeListInstanceProfiles(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesRequest]: (ListInstanceProfilesRequest)[K]
    }>): Request<ListInstanceProfilesResponse, AWSError> {
        this.boot();
        return this.client.listInstanceProfiles(
          this.ops["ListInstanceProfiles"].apply(partialParams)
        );
    }

    invokeListInstanceProfilesForRole(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesForRoleRequest]: (ListInstanceProfilesForRoleRequest)[K]
    }>): Request<ListInstanceProfilesForRoleResponse, AWSError> {
        this.boot();
        return this.client.listInstanceProfilesForRole(
          this.ops["ListInstanceProfilesForRole"].apply(partialParams)
        );
    }

    invokeListMFADeviceTags(partialParams: ToOptional<{
      [K in keyof ListMFADeviceTagsRequest]: (ListMFADeviceTagsRequest)[K]
    }>): Request<ListMFADeviceTagsResponse, AWSError> {
        this.boot();
        return this.client.listMFADeviceTags(
          this.ops["ListMFADeviceTags"].apply(partialParams)
        );
    }

    invokeListMFADevices(partialParams: ToOptional<{
      [K in keyof ListMFADevicesRequest]: (ListMFADevicesRequest)[K]
    }>): Request<ListMFADevicesResponse, AWSError> {
        this.boot();
        return this.client.listMFADevices(
          this.ops["ListMFADevices"].apply(partialParams)
        );
    }

    invokeListOpenIDConnectProviderTags(partialParams: ToOptional<{
      [K in keyof ListOpenIDConnectProviderTagsRequest]: (ListOpenIDConnectProviderTagsRequest)[K]
    }>): Request<ListOpenIDConnectProviderTagsResponse, AWSError> {
        this.boot();
        return this.client.listOpenIDConnectProviderTags(
          this.ops["ListOpenIDConnectProviderTags"].apply(partialParams)
        );
    }

    invokeListOpenIDConnectProviders(partialParams: ToOptional<{
      [K in keyof ListOpenIDConnectProvidersRequest]: (ListOpenIDConnectProvidersRequest)[K]
    }>): Request<ListOpenIDConnectProvidersResponse, AWSError> {
        this.boot();
        return this.client.listOpenIDConnectProviders(
          this.ops["ListOpenIDConnectProviders"].apply(partialParams)
        );
    }

    invokeListPolicies(partialParams: ToOptional<{
      [K in keyof ListPoliciesRequest]: (ListPoliciesRequest)[K]
    }>): Request<ListPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listPolicies(
          this.ops["ListPolicies"].apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest]: (ListPoliciesGrantingServiceAccessRequest)[K]
    }>): Request<ListPoliciesGrantingServiceAccessResponse, AWSError> {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(
          this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams)
        );
    }

    invokeListPolicyTags(partialParams: ToOptional<{
      [K in keyof ListPolicyTagsRequest]: (ListPolicyTagsRequest)[K]
    }>): Request<ListPolicyTagsResponse, AWSError> {
        this.boot();
        return this.client.listPolicyTags(
          this.ops["ListPolicyTags"].apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest)[K]
    }>): Request<ListPolicyVersionsResponse, AWSError> {
        this.boot();
        return this.client.listPolicyVersions(
          this.ops["ListPolicyVersions"].apply(partialParams)
        );
    }

    invokeListRolePolicies(partialParams: ToOptional<{
      [K in keyof ListRolePoliciesRequest]: (ListRolePoliciesRequest)[K]
    }>): Request<ListRolePoliciesResponse, AWSError> {
        this.boot();
        return this.client.listRolePolicies(
          this.ops["ListRolePolicies"].apply(partialParams)
        );
    }

    invokeListRoleTags(partialParams: ToOptional<{
      [K in keyof ListRoleTagsRequest]: (ListRoleTagsRequest)[K]
    }>): Request<ListRoleTagsResponse, AWSError> {
        this.boot();
        return this.client.listRoleTags(
          this.ops["ListRoleTags"].apply(partialParams)
        );
    }

    invokeListRoles(partialParams: ToOptional<{
      [K in keyof ListRolesRequest]: (ListRolesRequest)[K]
    }>): Request<ListRolesResponse, AWSError> {
        this.boot();
        return this.client.listRoles(
          this.ops["ListRoles"].apply(partialParams)
        );
    }

    invokeListSAMLProviderTags(partialParams: ToOptional<{
      [K in keyof ListSAMLProviderTagsRequest]: (ListSAMLProviderTagsRequest)[K]
    }>): Request<ListSAMLProviderTagsResponse, AWSError> {
        this.boot();
        return this.client.listSAMLProviderTags(
          this.ops["ListSAMLProviderTags"].apply(partialParams)
        );
    }

    invokeListSAMLProviders(partialParams: ToOptional<{
      [K in keyof ListSAMLProvidersRequest]: (ListSAMLProvidersRequest)[K]
    }>): Request<ListSAMLProvidersResponse, AWSError> {
        this.boot();
        return this.client.listSAMLProviders(
          this.ops["ListSAMLProviders"].apply(partialParams)
        );
    }

    invokeListSSHPublicKeys(partialParams: ToOptional<{
      [K in keyof ListSSHPublicKeysRequest]: (ListSSHPublicKeysRequest)[K]
    }>): Request<ListSSHPublicKeysResponse, AWSError> {
        this.boot();
        return this.client.listSSHPublicKeys(
          this.ops["ListSSHPublicKeys"].apply(partialParams)
        );
    }

    invokeListServerCertificateTags(partialParams: ToOptional<{
      [K in keyof ListServerCertificateTagsRequest]: (ListServerCertificateTagsRequest)[K]
    }>): Request<ListServerCertificateTagsResponse, AWSError> {
        this.boot();
        return this.client.listServerCertificateTags(
          this.ops["ListServerCertificateTags"].apply(partialParams)
        );
    }

    invokeListServerCertificates(partialParams: ToOptional<{
      [K in keyof ListServerCertificatesRequest]: (ListServerCertificatesRequest)[K]
    }>): Request<ListServerCertificatesResponse, AWSError> {
        this.boot();
        return this.client.listServerCertificates(
          this.ops["ListServerCertificates"].apply(partialParams)
        );
    }

    invokeListServiceSpecificCredentials(partialParams: ToOptional<{
      [K in keyof ListServiceSpecificCredentialsRequest]: (ListServiceSpecificCredentialsRequest)[K]
    }>): Request<ListServiceSpecificCredentialsResponse, AWSError> {
        this.boot();
        return this.client.listServiceSpecificCredentials(
          this.ops["ListServiceSpecificCredentials"].apply(partialParams)
        );
    }

    invokeListSigningCertificates(partialParams: ToOptional<{
      [K in keyof ListSigningCertificatesRequest]: (ListSigningCertificatesRequest)[K]
    }>): Request<ListSigningCertificatesResponse, AWSError> {
        this.boot();
        return this.client.listSigningCertificates(
          this.ops["ListSigningCertificates"].apply(partialParams)
        );
    }

    invokeListUserPolicies(partialParams: ToOptional<{
      [K in keyof ListUserPoliciesRequest]: (ListUserPoliciesRequest)[K]
    }>): Request<ListUserPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listUserPolicies(
          this.ops["ListUserPolicies"].apply(partialParams)
        );
    }

    invokeListUserTags(partialParams: ToOptional<{
      [K in keyof ListUserTagsRequest]: (ListUserTagsRequest)[K]
    }>): Request<ListUserTagsResponse, AWSError> {
        this.boot();
        return this.client.listUserTags(
          this.ops["ListUserTags"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeListVirtualMFADevices(partialParams: ToOptional<{
      [K in keyof ListVirtualMFADevicesRequest]: (ListVirtualMFADevicesRequest)[K]
    }>): Request<ListVirtualMFADevicesResponse, AWSError> {
        this.boot();
        return this.client.listVirtualMFADevices(
          this.ops["ListVirtualMFADevices"].apply(partialParams)
        );
    }

    invokeResetServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof ResetServiceSpecificCredentialRequest]: (ResetServiceSpecificCredentialRequest)[K]
    }>): Request<ResetServiceSpecificCredentialResponse, AWSError> {
        this.boot();
        return this.client.resetServiceSpecificCredential(
          this.ops["ResetServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeSimulateCustomPolicy(partialParams: ToOptional<{
      [K in keyof SimulateCustomPolicyRequest]: (SimulateCustomPolicyRequest)[K]
    }>): Request<SimulatePolicyResponse, AWSError> {
        this.boot();
        return this.client.simulateCustomPolicy(
          this.ops["SimulateCustomPolicy"].apply(partialParams)
        );
    }

    invokeSimulatePrincipalPolicy(partialParams: ToOptional<{
      [K in keyof SimulatePrincipalPolicyRequest]: (SimulatePrincipalPolicyRequest)[K]
    }>): Request<SimulatePolicyResponse, AWSError> {
        this.boot();
        return this.client.simulatePrincipalPolicy(
          this.ops["SimulatePrincipalPolicy"].apply(partialParams)
        );
    }

    invokeUpdateRole(partialParams: ToOptional<{
      [K in keyof UpdateRoleRequest]: (UpdateRoleRequest)[K]
    }>): Request<UpdateRoleResponse, AWSError> {
        this.boot();
        return this.client.updateRole(
          this.ops["UpdateRole"].apply(partialParams)
        );
    }

    invokeUpdateRoleDescription(partialParams: ToOptional<{
      [K in keyof UpdateRoleDescriptionRequest]: (UpdateRoleDescriptionRequest)[K]
    }>): Request<UpdateRoleDescriptionResponse, AWSError> {
        this.boot();
        return this.client.updateRoleDescription(
          this.ops["UpdateRoleDescription"].apply(partialParams)
        );
    }

    invokeUpdateSAMLProvider(partialParams: ToOptional<{
      [K in keyof UpdateSAMLProviderRequest]: (UpdateSAMLProviderRequest)[K]
    }>): Request<UpdateSAMLProviderResponse, AWSError> {
        this.boot();
        return this.client.updateSAMLProvider(
          this.ops["UpdateSAMLProvider"].apply(partialParams)
        );
    }

    invokeUploadSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UploadSSHPublicKeyRequest]: (UploadSSHPublicKeyRequest)[K]
    }>): Request<UploadSSHPublicKeyResponse, AWSError> {
        this.boot();
        return this.client.uploadSSHPublicKey(
          this.ops["UploadSSHPublicKey"].apply(partialParams)
        );
    }

    invokeUploadServerCertificate(partialParams: ToOptional<{
      [K in keyof UploadServerCertificateRequest]: (UploadServerCertificateRequest)[K]
    }>): Request<UploadServerCertificateResponse, AWSError> {
        this.boot();
        return this.client.uploadServerCertificate(
          this.ops["UploadServerCertificate"].apply(partialParams)
        );
    }

    invokeUploadSigningCertificate(partialParams: ToOptional<{
      [K in keyof UploadSigningCertificateRequest]: (UploadSigningCertificateRequest)[K]
    }>): Request<UploadSigningCertificateResponse, AWSError> {
        this.boot();
        return this.client.uploadSigningCertificate(
          this.ops["UploadSigningCertificate"].apply(partialParams)
        );
    }
}