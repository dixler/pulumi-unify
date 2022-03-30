"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.iam.UserPolicy {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.IAM();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/iam-2010-05-08.normal.json"), this.client);
    }
    invokeAddClientIDToOpenIDConnectProvider(partialParams) {
        return this.client.addClientIDToOpenIDConnectProvider(this.ops["AddClientIDToOpenIDConnectProvider"].apply(partialParams));
    }
    invokeAddRoleToInstanceProfile(partialParams) {
        return this.client.addRoleToInstanceProfile(this.ops["AddRoleToInstanceProfile"].apply(partialParams));
    }
    invokeAddUserToGroup(partialParams) {
        return this.client.addUserToGroup(this.ops["AddUserToGroup"].apply(partialParams));
    }
    invokeAttachGroupPolicy(partialParams) {
        return this.client.attachGroupPolicy(this.ops["AttachGroupPolicy"].apply(partialParams));
    }
    invokeAttachRolePolicy(partialParams) {
        return this.client.attachRolePolicy(this.ops["AttachRolePolicy"].apply(partialParams));
    }
    invokeAttachUserPolicy(partialParams) {
        return this.client.attachUserPolicy(this.ops["AttachUserPolicy"].apply(partialParams));
    }
    invokeChangePassword(partialParams) {
        return this.client.changePassword(this.ops["ChangePassword"].apply(partialParams));
    }
    invokeCreateAccountAlias(partialParams) {
        return this.client.createAccountAlias(this.ops["CreateAccountAlias"].apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        return this.client.createGroup(this.ops["CreateGroup"].apply(partialParams));
    }
    invokeCreateInstanceProfile(partialParams) {
        return this.client.createInstanceProfile(this.ops["CreateInstanceProfile"].apply(partialParams));
    }
    invokeCreateLoginProfile(partialParams) {
        return this.client.createLoginProfile(this.ops["CreateLoginProfile"].apply(partialParams));
    }
    invokeCreateOpenIDConnectProvider(partialParams) {
        return this.client.createOpenIDConnectProvider(this.ops["CreateOpenIDConnectProvider"].apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        return this.client.createPolicy(this.ops["CreatePolicy"].apply(partialParams));
    }
    invokeCreatePolicyVersion(partialParams) {
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].apply(partialParams));
    }
    invokeCreateRole(partialParams) {
        return this.client.createRole(this.ops["CreateRole"].apply(partialParams));
    }
    invokeCreateSAMLProvider(partialParams) {
        return this.client.createSAMLProvider(this.ops["CreateSAMLProvider"].apply(partialParams));
    }
    invokeCreateServiceLinkedRole(partialParams) {
        return this.client.createServiceLinkedRole(this.ops["CreateServiceLinkedRole"].apply(partialParams));
    }
    invokeCreateServiceSpecificCredential(partialParams) {
        return this.client.createServiceSpecificCredential(this.ops["CreateServiceSpecificCredential"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateVirtualMFADevice(partialParams) {
        return this.client.createVirtualMFADevice(this.ops["CreateVirtualMFADevice"].apply(partialParams));
    }
    invokeDeactivateMFADevice(partialParams) {
        return this.client.deactivateMFADevice(this.ops["DeactivateMFADevice"].apply(partialParams));
    }
    invokeDeleteAccessKey(partialParams) {
        return this.client.deleteAccessKey(this.ops["DeleteAccessKey"].apply(partialParams));
    }
    invokeDeleteAccountAlias(partialParams) {
        return this.client.deleteAccountAlias(this.ops["DeleteAccountAlias"].apply(partialParams));
    }
    invokeDeleteGroup(partialParams) {
        return this.client.deleteGroup(this.ops["DeleteGroup"].apply(partialParams));
    }
    invokeDeleteGroupPolicy(partialParams) {
        return this.client.deleteGroupPolicy(this.ops["DeleteGroupPolicy"].apply(partialParams));
    }
    invokeDeleteInstanceProfile(partialParams) {
        return this.client.deleteInstanceProfile(this.ops["DeleteInstanceProfile"].apply(partialParams));
    }
    invokeDeleteLoginProfile(partialParams) {
        return this.client.deleteLoginProfile(this.ops["DeleteLoginProfile"].apply(partialParams));
    }
    invokeDeleteOpenIDConnectProvider(partialParams) {
        return this.client.deleteOpenIDConnectProvider(this.ops["DeleteOpenIDConnectProvider"].apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        return this.client.deletePolicy(this.ops["DeletePolicy"].apply(partialParams));
    }
    invokeDeletePolicyVersion(partialParams) {
        return this.client.deletePolicyVersion(this.ops["DeletePolicyVersion"].apply(partialParams));
    }
    invokeDeleteRole(partialParams) {
        return this.client.deleteRole(this.ops["DeleteRole"].apply(partialParams));
    }
    invokeDeleteRolePermissionsBoundary(partialParams) {
        return this.client.deleteRolePermissionsBoundary(this.ops["DeleteRolePermissionsBoundary"].apply(partialParams));
    }
    invokeDeleteRolePolicy(partialParams) {
        return this.client.deleteRolePolicy(this.ops["DeleteRolePolicy"].apply(partialParams));
    }
    invokeDeleteSAMLProvider(partialParams) {
        return this.client.deleteSAMLProvider(this.ops["DeleteSAMLProvider"].apply(partialParams));
    }
    invokeDeleteSSHPublicKey(partialParams) {
        return this.client.deleteSSHPublicKey(this.ops["DeleteSSHPublicKey"].apply(partialParams));
    }
    invokeDeleteServerCertificate(partialParams) {
        return this.client.deleteServerCertificate(this.ops["DeleteServerCertificate"].apply(partialParams));
    }
    invokeDeleteServiceLinkedRole(partialParams) {
        return this.client.deleteServiceLinkedRole(this.ops["DeleteServiceLinkedRole"].apply(partialParams));
    }
    invokeDeleteServiceSpecificCredential(partialParams) {
        return this.client.deleteServiceSpecificCredential(this.ops["DeleteServiceSpecificCredential"].apply(partialParams));
    }
    invokeDeleteSigningCertificate(partialParams) {
        return this.client.deleteSigningCertificate(this.ops["DeleteSigningCertificate"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteUserPermissionsBoundary(partialParams) {
        return this.client.deleteUserPermissionsBoundary(this.ops["DeleteUserPermissionsBoundary"].apply(partialParams));
    }
    invokeDeleteUserPolicy(partialParams) {
        return this.client.deleteUserPolicy(this.ops["DeleteUserPolicy"].apply(partialParams));
    }
    invokeDeleteVirtualMFADevice(partialParams) {
        return this.client.deleteVirtualMFADevice(this.ops["DeleteVirtualMFADevice"].apply(partialParams));
    }
    invokeDetachGroupPolicy(partialParams) {
        return this.client.detachGroupPolicy(this.ops["DetachGroupPolicy"].apply(partialParams));
    }
    invokeDetachRolePolicy(partialParams) {
        return this.client.detachRolePolicy(this.ops["DetachRolePolicy"].apply(partialParams));
    }
    invokeDetachUserPolicy(partialParams) {
        return this.client.detachUserPolicy(this.ops["DetachUserPolicy"].apply(partialParams));
    }
    invokeEnableMFADevice(partialParams) {
        return this.client.enableMFADevice(this.ops["EnableMFADevice"].apply(partialParams));
    }
    invokeGenerateOrganizationsAccessReport(partialParams) {
        return this.client.generateOrganizationsAccessReport(this.ops["GenerateOrganizationsAccessReport"].apply(partialParams));
    }
    invokeGenerateServiceLastAccessedDetails(partialParams) {
        return this.client.generateServiceLastAccessedDetails(this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams));
    }
    invokeGetAccessKeyLastUsed(partialParams) {
        return this.client.getAccessKeyLastUsed(this.ops["GetAccessKeyLastUsed"].apply(partialParams));
    }
    invokeGetContextKeysForCustomPolicy(partialParams) {
        return this.client.getContextKeysForCustomPolicy(this.ops["GetContextKeysForCustomPolicy"].apply(partialParams));
    }
    invokeGetContextKeysForPrincipalPolicy(partialParams) {
        return this.client.getContextKeysForPrincipalPolicy(this.ops["GetContextKeysForPrincipalPolicy"].apply(partialParams));
    }
    invokeGetGroup(partialParams) {
        return this.client.getGroup(this.ops["GetGroup"].apply(partialParams));
    }
    invokeGetGroupPolicy(partialParams) {
        return this.client.getGroupPolicy(this.ops["GetGroupPolicy"].apply(partialParams));
    }
    invokeGetInstanceProfile(partialParams) {
        return this.client.getInstanceProfile(this.ops["GetInstanceProfile"].apply(partialParams));
    }
    invokeGetLoginProfile(partialParams) {
        return this.client.getLoginProfile(this.ops["GetLoginProfile"].apply(partialParams));
    }
    invokeGetOpenIDConnectProvider(partialParams) {
        return this.client.getOpenIDConnectProvider(this.ops["GetOpenIDConnectProvider"].apply(partialParams));
    }
    invokeGetOrganizationsAccessReport(partialParams) {
        return this.client.getOrganizationsAccessReport(this.ops["GetOrganizationsAccessReport"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].apply(partialParams));
    }
    invokeGetRole(partialParams) {
        return this.client.getRole(this.ops["GetRole"].apply(partialParams));
    }
    invokeGetRolePolicy(partialParams) {
        return this.client.getRolePolicy(this.ops["GetRolePolicy"].apply(partialParams));
    }
    invokeGetSAMLProvider(partialParams) {
        return this.client.getSAMLProvider(this.ops["GetSAMLProvider"].apply(partialParams));
    }
    invokeGetSSHPublicKey(partialParams) {
        return this.client.getSSHPublicKey(this.ops["GetSSHPublicKey"].apply(partialParams));
    }
    invokeGetServerCertificate(partialParams) {
        return this.client.getServerCertificate(this.ops["GetServerCertificate"].apply(partialParams));
    }
    invokeGetServiceLastAccessedDetails(partialParams) {
        return this.client.getServiceLastAccessedDetails(this.ops["GetServiceLastAccessedDetails"].apply(partialParams));
    }
    invokeGetServiceLastAccessedDetailsWithEntities(partialParams) {
        return this.client.getServiceLastAccessedDetailsWithEntities(this.ops["GetServiceLastAccessedDetailsWithEntities"].apply(partialParams));
    }
    invokeGetServiceLinkedRoleDeletionStatus(partialParams) {
        return this.client.getServiceLinkedRoleDeletionStatus(this.ops["GetServiceLinkedRoleDeletionStatus"].apply(partialParams));
    }
    invokeGetUserPolicy(partialParams) {
        return this.client.getUserPolicy(this.ops["GetUserPolicy"].apply(partialParams));
    }
    invokeListAttachedGroupPolicies(partialParams) {
        return this.client.listAttachedGroupPolicies(this.ops["ListAttachedGroupPolicies"].apply(partialParams));
    }
    invokeListAttachedRolePolicies(partialParams) {
        return this.client.listAttachedRolePolicies(this.ops["ListAttachedRolePolicies"].apply(partialParams));
    }
    invokeListAttachedUserPolicies(partialParams) {
        return this.client.listAttachedUserPolicies(this.ops["ListAttachedUserPolicies"].apply(partialParams));
    }
    invokeListEntitiesForPolicy(partialParams) {
        return this.client.listEntitiesForPolicy(this.ops["ListEntitiesForPolicy"].apply(partialParams));
    }
    invokeListGroupPolicies(partialParams) {
        return this.client.listGroupPolicies(this.ops["ListGroupPolicies"].apply(partialParams));
    }
    invokeListGroupsForUser(partialParams) {
        return this.client.listGroupsForUser(this.ops["ListGroupsForUser"].apply(partialParams));
    }
    invokeListInstanceProfileTags(partialParams) {
        return this.client.listInstanceProfileTags(this.ops["ListInstanceProfileTags"].apply(partialParams));
    }
    invokeListInstanceProfilesForRole(partialParams) {
        return this.client.listInstanceProfilesForRole(this.ops["ListInstanceProfilesForRole"].apply(partialParams));
    }
    invokeListMFADeviceTags(partialParams) {
        return this.client.listMFADeviceTags(this.ops["ListMFADeviceTags"].apply(partialParams));
    }
    invokeListOpenIDConnectProviderTags(partialParams) {
        return this.client.listOpenIDConnectProviderTags(this.ops["ListOpenIDConnectProviderTags"].apply(partialParams));
    }
    invokeListPoliciesGrantingServiceAccess(partialParams) {
        return this.client.listPoliciesGrantingServiceAccess(this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams));
    }
    invokeListPolicyTags(partialParams) {
        return this.client.listPolicyTags(this.ops["ListPolicyTags"].apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].apply(partialParams));
    }
    invokeListRolePolicies(partialParams) {
        return this.client.listRolePolicies(this.ops["ListRolePolicies"].apply(partialParams));
    }
    invokeListRoleTags(partialParams) {
        return this.client.listRoleTags(this.ops["ListRoleTags"].apply(partialParams));
    }
    invokeListSAMLProviderTags(partialParams) {
        return this.client.listSAMLProviderTags(this.ops["ListSAMLProviderTags"].apply(partialParams));
    }
    invokeListServerCertificateTags(partialParams) {
        return this.client.listServerCertificateTags(this.ops["ListServerCertificateTags"].apply(partialParams));
    }
    invokeListUserPolicies(partialParams) {
        return this.client.listUserPolicies(this.ops["ListUserPolicies"].apply(partialParams));
    }
    invokeListUserTags(partialParams) {
        return this.client.listUserTags(this.ops["ListUserTags"].apply(partialParams));
    }
    invokePutGroupPolicy(partialParams) {
        return this.client.putGroupPolicy(this.ops["PutGroupPolicy"].apply(partialParams));
    }
    invokePutRolePermissionsBoundary(partialParams) {
        return this.client.putRolePermissionsBoundary(this.ops["PutRolePermissionsBoundary"].apply(partialParams));
    }
    invokePutRolePolicy(partialParams) {
        return this.client.putRolePolicy(this.ops["PutRolePolicy"].apply(partialParams));
    }
    invokePutUserPermissionsBoundary(partialParams) {
        return this.client.putUserPermissionsBoundary(this.ops["PutUserPermissionsBoundary"].apply(partialParams));
    }
    invokePutUserPolicy(partialParams) {
        return this.client.putUserPolicy(this.ops["PutUserPolicy"].apply(partialParams));
    }
    invokeRemoveClientIDFromOpenIDConnectProvider(partialParams) {
        return this.client.removeClientIDFromOpenIDConnectProvider(this.ops["RemoveClientIDFromOpenIDConnectProvider"].apply(partialParams));
    }
    invokeRemoveRoleFromInstanceProfile(partialParams) {
        return this.client.removeRoleFromInstanceProfile(this.ops["RemoveRoleFromInstanceProfile"].apply(partialParams));
    }
    invokeRemoveUserFromGroup(partialParams) {
        return this.client.removeUserFromGroup(this.ops["RemoveUserFromGroup"].apply(partialParams));
    }
    invokeResetServiceSpecificCredential(partialParams) {
        return this.client.resetServiceSpecificCredential(this.ops["ResetServiceSpecificCredential"].apply(partialParams));
    }
    invokeResyncMFADevice(partialParams) {
        return this.client.resyncMFADevice(this.ops["ResyncMFADevice"].apply(partialParams));
    }
    invokeSetDefaultPolicyVersion(partialParams) {
        return this.client.setDefaultPolicyVersion(this.ops["SetDefaultPolicyVersion"].apply(partialParams));
    }
    invokeSetSecurityTokenServicePreferences(partialParams) {
        return this.client.setSecurityTokenServicePreferences(this.ops["SetSecurityTokenServicePreferences"].apply(partialParams));
    }
    invokeSimulateCustomPolicy(partialParams) {
        return this.client.simulateCustomPolicy(this.ops["SimulateCustomPolicy"].apply(partialParams));
    }
    invokeSimulatePrincipalPolicy(partialParams) {
        return this.client.simulatePrincipalPolicy(this.ops["SimulatePrincipalPolicy"].apply(partialParams));
    }
    invokeTagInstanceProfile(partialParams) {
        return this.client.tagInstanceProfile(this.ops["TagInstanceProfile"].apply(partialParams));
    }
    invokeTagMFADevice(partialParams) {
        return this.client.tagMFADevice(this.ops["TagMFADevice"].apply(partialParams));
    }
    invokeTagOpenIDConnectProvider(partialParams) {
        return this.client.tagOpenIDConnectProvider(this.ops["TagOpenIDConnectProvider"].apply(partialParams));
    }
    invokeTagPolicy(partialParams) {
        return this.client.tagPolicy(this.ops["TagPolicy"].apply(partialParams));
    }
    invokeTagRole(partialParams) {
        return this.client.tagRole(this.ops["TagRole"].apply(partialParams));
    }
    invokeTagSAMLProvider(partialParams) {
        return this.client.tagSAMLProvider(this.ops["TagSAMLProvider"].apply(partialParams));
    }
    invokeTagServerCertificate(partialParams) {
        return this.client.tagServerCertificate(this.ops["TagServerCertificate"].apply(partialParams));
    }
    invokeTagUser(partialParams) {
        return this.client.tagUser(this.ops["TagUser"].apply(partialParams));
    }
    invokeUntagInstanceProfile(partialParams) {
        return this.client.untagInstanceProfile(this.ops["UntagInstanceProfile"].apply(partialParams));
    }
    invokeUntagMFADevice(partialParams) {
        return this.client.untagMFADevice(this.ops["UntagMFADevice"].apply(partialParams));
    }
    invokeUntagOpenIDConnectProvider(partialParams) {
        return this.client.untagOpenIDConnectProvider(this.ops["UntagOpenIDConnectProvider"].apply(partialParams));
    }
    invokeUntagPolicy(partialParams) {
        return this.client.untagPolicy(this.ops["UntagPolicy"].apply(partialParams));
    }
    invokeUntagRole(partialParams) {
        return this.client.untagRole(this.ops["UntagRole"].apply(partialParams));
    }
    invokeUntagSAMLProvider(partialParams) {
        return this.client.untagSAMLProvider(this.ops["UntagSAMLProvider"].apply(partialParams));
    }
    invokeUntagServerCertificate(partialParams) {
        return this.client.untagServerCertificate(this.ops["UntagServerCertificate"].apply(partialParams));
    }
    invokeUntagUser(partialParams) {
        return this.client.untagUser(this.ops["UntagUser"].apply(partialParams));
    }
    invokeUpdateAccessKey(partialParams) {
        return this.client.updateAccessKey(this.ops["UpdateAccessKey"].apply(partialParams));
    }
    invokeUpdateAssumeRolePolicy(partialParams) {
        return this.client.updateAssumeRolePolicy(this.ops["UpdateAssumeRolePolicy"].apply(partialParams));
    }
    invokeUpdateGroup(partialParams) {
        return this.client.updateGroup(this.ops["UpdateGroup"].apply(partialParams));
    }
    invokeUpdateLoginProfile(partialParams) {
        return this.client.updateLoginProfile(this.ops["UpdateLoginProfile"].apply(partialParams));
    }
    invokeUpdateOpenIDConnectProviderThumbprint(partialParams) {
        return this.client.updateOpenIDConnectProviderThumbprint(this.ops["UpdateOpenIDConnectProviderThumbprint"].apply(partialParams));
    }
    invokeUpdateRole(partialParams) {
        return this.client.updateRole(this.ops["UpdateRole"].apply(partialParams));
    }
    invokeUpdateRoleDescription(partialParams) {
        return this.client.updateRoleDescription(this.ops["UpdateRoleDescription"].apply(partialParams));
    }
    invokeUpdateSAMLProvider(partialParams) {
        return this.client.updateSAMLProvider(this.ops["UpdateSAMLProvider"].apply(partialParams));
    }
    invokeUpdateSSHPublicKey(partialParams) {
        return this.client.updateSSHPublicKey(this.ops["UpdateSSHPublicKey"].apply(partialParams));
    }
    invokeUpdateServerCertificate(partialParams) {
        return this.client.updateServerCertificate(this.ops["UpdateServerCertificate"].apply(partialParams));
    }
    invokeUpdateServiceSpecificCredential(partialParams) {
        return this.client.updateServiceSpecificCredential(this.ops["UpdateServiceSpecificCredential"].apply(partialParams));
    }
    invokeUpdateSigningCertificate(partialParams) {
        return this.client.updateSigningCertificate(this.ops["UpdateSigningCertificate"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
    invokeUploadSSHPublicKey(partialParams) {
        return this.client.uploadSSHPublicKey(this.ops["UploadSSHPublicKey"].apply(partialParams));
    }
    invokeUploadServerCertificate(partialParams) {
        return this.client.uploadServerCertificate(this.ops["UploadServerCertificate"].apply(partialParams));
    }
    invokeUploadSigningCertificate(partialParams) {
        return this.client.uploadSigningCertificate(this.ops["UploadSigningCertificate"].apply(partialParams));
    }
}
exports.default = default_1;
