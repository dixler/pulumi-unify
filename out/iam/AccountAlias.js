"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/iam-2010-05-08.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.iam.AccountAlias {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.IAM();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAddClientIDToOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addClientIDToOpenIDConnectProvider(this.ops["AddClientIDToOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeAddRoleToInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToInstanceProfile(this.ops["AddRoleToInstanceProfile"].applicator.apply(partialParams));
    }
    invokeAddUserToGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addUserToGroup(this.ops["AddUserToGroup"].applicator.apply(partialParams));
    }
    invokeAttachGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachGroupPolicy(this.ops["AttachGroupPolicy"].applicator.apply(partialParams));
    }
    invokeAttachRolePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachRolePolicy(this.ops["AttachRolePolicy"].applicator.apply(partialParams));
    }
    invokeAttachUserPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachUserPolicy(this.ops["AttachUserPolicy"].applicator.apply(partialParams));
    }
    invokeChangePassword(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changePassword(this.ops["ChangePassword"].applicator.apply(partialParams));
    }
    invokeCreateAccountAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccountAlias(this.ops["CreateAccountAlias"].applicator.apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroup(this.ops["CreateGroup"].applicator.apply(partialParams));
    }
    invokeCreateInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceProfile(this.ops["CreateInstanceProfile"].applicator.apply(partialParams));
    }
    invokeCreateLoginProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoginProfile(this.ops["CreateLoginProfile"].applicator.apply(partialParams));
    }
    invokeCreateOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpenIDConnectProvider(this.ops["CreateOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(this.ops["CreatePolicy"].applicator.apply(partialParams));
    }
    invokeCreatePolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].applicator.apply(partialParams));
    }
    invokeCreateRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRole(this.ops["CreateRole"].applicator.apply(partialParams));
    }
    invokeCreateSAMLProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSAMLProvider(this.ops["CreateSAMLProvider"].applicator.apply(partialParams));
    }
    invokeCreateServiceLinkedRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceLinkedRole(this.ops["CreateServiceLinkedRole"].applicator.apply(partialParams));
    }
    invokeCreateServiceSpecificCredential(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceSpecificCredential(this.ops["CreateServiceSpecificCredential"].applicator.apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].applicator.apply(partialParams));
    }
    invokeCreateVirtualMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualMFADevice(this.ops["CreateVirtualMFADevice"].applicator.apply(partialParams));
    }
    invokeDeactivateMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivateMFADevice(this.ops["DeactivateMFADevice"].applicator.apply(partialParams));
    }
    invokeDeleteAccessKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccessKey(this.ops["DeleteAccessKey"].applicator.apply(partialParams));
    }
    invokeDeleteAccountAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccountAlias(this.ops["DeleteAccountAlias"].applicator.apply(partialParams));
    }
    invokeDeleteGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroup(this.ops["DeleteGroup"].applicator.apply(partialParams));
    }
    invokeDeleteGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroupPolicy(this.ops["DeleteGroupPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceProfile(this.ops["DeleteInstanceProfile"].applicator.apply(partialParams));
    }
    invokeDeleteLoginProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoginProfile(this.ops["DeleteLoginProfile"].applicator.apply(partialParams));
    }
    invokeDeleteOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOpenIDConnectProvider(this.ops["DeleteOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(this.ops["DeletePolicy"].applicator.apply(partialParams));
    }
    invokeDeletePolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicyVersion(this.ops["DeletePolicyVersion"].applicator.apply(partialParams));
    }
    invokeDeleteRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRole(this.ops["DeleteRole"].applicator.apply(partialParams));
    }
    invokeDeleteRolePermissionsBoundary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRolePermissionsBoundary(this.ops["DeleteRolePermissionsBoundary"].applicator.apply(partialParams));
    }
    invokeDeleteRolePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRolePolicy(this.ops["DeleteRolePolicy"].applicator.apply(partialParams));
    }
    invokeDeleteSAMLProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSAMLProvider(this.ops["DeleteSAMLProvider"].applicator.apply(partialParams));
    }
    invokeDeleteSSHPublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSSHPublicKey(this.ops["DeleteSSHPublicKey"].applicator.apply(partialParams));
    }
    invokeDeleteServerCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServerCertificate(this.ops["DeleteServerCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteServiceLinkedRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceLinkedRole(this.ops["DeleteServiceLinkedRole"].applicator.apply(partialParams));
    }
    invokeDeleteServiceSpecificCredential(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceSpecificCredential(this.ops["DeleteServiceSpecificCredential"].applicator.apply(partialParams));
    }
    invokeDeleteSigningCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSigningCertificate(this.ops["DeleteSigningCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].applicator.apply(partialParams));
    }
    invokeDeleteUserPermissionsBoundary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserPermissionsBoundary(this.ops["DeleteUserPermissionsBoundary"].applicator.apply(partialParams));
    }
    invokeDeleteUserPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserPolicy(this.ops["DeleteUserPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteVirtualMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualMFADevice(this.ops["DeleteVirtualMFADevice"].applicator.apply(partialParams));
    }
    invokeDetachGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachGroupPolicy(this.ops["DetachGroupPolicy"].applicator.apply(partialParams));
    }
    invokeDetachRolePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachRolePolicy(this.ops["DetachRolePolicy"].applicator.apply(partialParams));
    }
    invokeDetachUserPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachUserPolicy(this.ops["DetachUserPolicy"].applicator.apply(partialParams));
    }
    invokeEnableMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableMFADevice(this.ops["EnableMFADevice"].applicator.apply(partialParams));
    }
    invokeGenerateOrganizationsAccessReport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateOrganizationsAccessReport(this.ops["GenerateOrganizationsAccessReport"].applicator.apply(partialParams));
    }
    invokeGenerateServiceLastAccessedDetails(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateServiceLastAccessedDetails(this.ops["GenerateServiceLastAccessedDetails"].applicator.apply(partialParams));
    }
    invokeGetAccessKeyLastUsed(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccessKeyLastUsed(this.ops["GetAccessKeyLastUsed"].applicator.apply(partialParams));
    }
    invokeGetContextKeysForCustomPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContextKeysForCustomPolicy(this.ops["GetContextKeysForCustomPolicy"].applicator.apply(partialParams));
    }
    invokeGetContextKeysForPrincipalPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContextKeysForPrincipalPolicy(this.ops["GetContextKeysForPrincipalPolicy"].applicator.apply(partialParams));
    }
    invokeGetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroup(this.ops["GetGroup"].applicator.apply(partialParams));
    }
    invokeGetGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroupPolicy(this.ops["GetGroupPolicy"].applicator.apply(partialParams));
    }
    invokeGetInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceProfile(this.ops["GetInstanceProfile"].applicator.apply(partialParams));
    }
    invokeGetLoginProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoginProfile(this.ops["GetLoginProfile"].applicator.apply(partialParams));
    }
    invokeGetOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpenIDConnectProvider(this.ops["GetOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeGetOrganizationsAccessReport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOrganizationsAccessReport(this.ops["GetOrganizationsAccessReport"].applicator.apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].applicator.apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].applicator.apply(partialParams));
    }
    invokeGetRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRole(this.ops["GetRole"].applicator.apply(partialParams));
    }
    invokeGetRolePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRolePolicy(this.ops["GetRolePolicy"].applicator.apply(partialParams));
    }
    invokeGetSAMLProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSAMLProvider(this.ops["GetSAMLProvider"].applicator.apply(partialParams));
    }
    invokeGetSSHPublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSSHPublicKey(this.ops["GetSSHPublicKey"].applicator.apply(partialParams));
    }
    invokeGetServerCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServerCertificate(this.ops["GetServerCertificate"].applicator.apply(partialParams));
    }
    invokeGetServiceLastAccessedDetails(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLastAccessedDetails(this.ops["GetServiceLastAccessedDetails"].applicator.apply(partialParams));
    }
    invokeGetServiceLastAccessedDetailsWithEntities(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLastAccessedDetailsWithEntities(this.ops["GetServiceLastAccessedDetailsWithEntities"].applicator.apply(partialParams));
    }
    invokeGetServiceLinkedRoleDeletionStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceLinkedRoleDeletionStatus(this.ops["GetServiceLinkedRoleDeletionStatus"].applicator.apply(partialParams));
    }
    invokeGetUserPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserPolicy(this.ops["GetUserPolicy"].applicator.apply(partialParams));
    }
    invokeListAttachedGroupPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedGroupPolicies(this.ops["ListAttachedGroupPolicies"].applicator.apply(partialParams));
    }
    invokeListAttachedRolePolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedRolePolicies(this.ops["ListAttachedRolePolicies"].applicator.apply(partialParams));
    }
    invokeListAttachedUserPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedUserPolicies(this.ops["ListAttachedUserPolicies"].applicator.apply(partialParams));
    }
    invokeListEntitiesForPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEntitiesForPolicy(this.ops["ListEntitiesForPolicy"].applicator.apply(partialParams));
    }
    invokeListGroupPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupPolicies(this.ops["ListGroupPolicies"].applicator.apply(partialParams));
    }
    invokeListGroupsForUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupsForUser(this.ops["ListGroupsForUser"].applicator.apply(partialParams));
    }
    invokeListInstanceProfileTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceProfileTags(this.ops["ListInstanceProfileTags"].applicator.apply(partialParams));
    }
    invokeListInstanceProfilesForRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceProfilesForRole(this.ops["ListInstanceProfilesForRole"].applicator.apply(partialParams));
    }
    invokeListMFADeviceTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMFADeviceTags(this.ops["ListMFADeviceTags"].applicator.apply(partialParams));
    }
    invokeListOpenIDConnectProviderTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOpenIDConnectProviderTags(this.ops["ListOpenIDConnectProviderTags"].applicator.apply(partialParams));
    }
    invokeListPoliciesGrantingServiceAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(this.ops["ListPoliciesGrantingServiceAccess"].applicator.apply(partialParams));
    }
    invokeListPolicyTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyTags(this.ops["ListPolicyTags"].applicator.apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].applicator.apply(partialParams));
    }
    invokeListRolePolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRolePolicies(this.ops["ListRolePolicies"].applicator.apply(partialParams));
    }
    invokeListRoleTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoleTags(this.ops["ListRoleTags"].applicator.apply(partialParams));
    }
    invokeListSAMLProviderTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSAMLProviderTags(this.ops["ListSAMLProviderTags"].applicator.apply(partialParams));
    }
    invokeListServerCertificateTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listServerCertificateTags(this.ops["ListServerCertificateTags"].applicator.apply(partialParams));
    }
    invokeListUserPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserPolicies(this.ops["ListUserPolicies"].applicator.apply(partialParams));
    }
    invokeListUserTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserTags(this.ops["ListUserTags"].applicator.apply(partialParams));
    }
    invokePutGroupPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putGroupPolicy(this.ops["PutGroupPolicy"].applicator.apply(partialParams));
    }
    invokePutRolePermissionsBoundary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRolePermissionsBoundary(this.ops["PutRolePermissionsBoundary"].applicator.apply(partialParams));
    }
    invokePutRolePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRolePolicy(this.ops["PutRolePolicy"].applicator.apply(partialParams));
    }
    invokePutUserPermissionsBoundary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putUserPermissionsBoundary(this.ops["PutUserPermissionsBoundary"].applicator.apply(partialParams));
    }
    invokePutUserPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putUserPolicy(this.ops["PutUserPolicy"].applicator.apply(partialParams));
    }
    invokeRemoveClientIDFromOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeClientIDFromOpenIDConnectProvider(this.ops["RemoveClientIDFromOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeRemoveRoleFromInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromInstanceProfile(this.ops["RemoveRoleFromInstanceProfile"].applicator.apply(partialParams));
    }
    invokeRemoveUserFromGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeUserFromGroup(this.ops["RemoveUserFromGroup"].applicator.apply(partialParams));
    }
    invokeResetServiceSpecificCredential(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetServiceSpecificCredential(this.ops["ResetServiceSpecificCredential"].applicator.apply(partialParams));
    }
    invokeResyncMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resyncMFADevice(this.ops["ResyncMFADevice"].applicator.apply(partialParams));
    }
    invokeSetDefaultPolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultPolicyVersion(this.ops["SetDefaultPolicyVersion"].applicator.apply(partialParams));
    }
    invokeSetSecurityTokenServicePreferences(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSecurityTokenServicePreferences(this.ops["SetSecurityTokenServicePreferences"].applicator.apply(partialParams));
    }
    invokeSimulateCustomPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.simulateCustomPolicy(this.ops["SimulateCustomPolicy"].applicator.apply(partialParams));
    }
    invokeSimulatePrincipalPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.simulatePrincipalPolicy(this.ops["SimulatePrincipalPolicy"].applicator.apply(partialParams));
    }
    invokeTagInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagInstanceProfile(this.ops["TagInstanceProfile"].applicator.apply(partialParams));
    }
    invokeTagMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagMFADevice(this.ops["TagMFADevice"].applicator.apply(partialParams));
    }
    invokeTagOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagOpenIDConnectProvider(this.ops["TagOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeTagPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagPolicy(this.ops["TagPolicy"].applicator.apply(partialParams));
    }
    invokeTagRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagRole(this.ops["TagRole"].applicator.apply(partialParams));
    }
    invokeTagSAMLProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagSAMLProvider(this.ops["TagSAMLProvider"].applicator.apply(partialParams));
    }
    invokeTagServerCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagServerCertificate(this.ops["TagServerCertificate"].applicator.apply(partialParams));
    }
    invokeTagUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagUser(this.ops["TagUser"].applicator.apply(partialParams));
    }
    invokeUntagInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagInstanceProfile(this.ops["UntagInstanceProfile"].applicator.apply(partialParams));
    }
    invokeUntagMFADevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagMFADevice(this.ops["UntagMFADevice"].applicator.apply(partialParams));
    }
    invokeUntagOpenIDConnectProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagOpenIDConnectProvider(this.ops["UntagOpenIDConnectProvider"].applicator.apply(partialParams));
    }
    invokeUntagPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagPolicy(this.ops["UntagPolicy"].applicator.apply(partialParams));
    }
    invokeUntagRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagRole(this.ops["UntagRole"].applicator.apply(partialParams));
    }
    invokeUntagSAMLProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagSAMLProvider(this.ops["UntagSAMLProvider"].applicator.apply(partialParams));
    }
    invokeUntagServerCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagServerCertificate(this.ops["UntagServerCertificate"].applicator.apply(partialParams));
    }
    invokeUntagUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagUser(this.ops["UntagUser"].applicator.apply(partialParams));
    }
    invokeUpdateAccessKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccessKey(this.ops["UpdateAccessKey"].applicator.apply(partialParams));
    }
    invokeUpdateAssumeRolePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssumeRolePolicy(this.ops["UpdateAssumeRolePolicy"].applicator.apply(partialParams));
    }
    invokeUpdateGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGroup(this.ops["UpdateGroup"].applicator.apply(partialParams));
    }
    invokeUpdateLoginProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLoginProfile(this.ops["UpdateLoginProfile"].applicator.apply(partialParams));
    }
    invokeUpdateOpenIDConnectProviderThumbprint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpenIDConnectProviderThumbprint(this.ops["UpdateOpenIDConnectProviderThumbprint"].applicator.apply(partialParams));
    }
    invokeUpdateRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRole(this.ops["UpdateRole"].applicator.apply(partialParams));
    }
    invokeUpdateRoleDescription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoleDescription(this.ops["UpdateRoleDescription"].applicator.apply(partialParams));
    }
    invokeUpdateSAMLProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSAMLProvider(this.ops["UpdateSAMLProvider"].applicator.apply(partialParams));
    }
    invokeUpdateSSHPublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSSHPublicKey(this.ops["UpdateSSHPublicKey"].applicator.apply(partialParams));
    }
    invokeUpdateServerCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServerCertificate(this.ops["UpdateServerCertificate"].applicator.apply(partialParams));
    }
    invokeUpdateServiceSpecificCredential(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceSpecificCredential(this.ops["UpdateServiceSpecificCredential"].applicator.apply(partialParams));
    }
    invokeUpdateSigningCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSigningCertificate(this.ops["UpdateSigningCertificate"].applicator.apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].applicator.apply(partialParams));
    }
    invokeUploadSSHPublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadSSHPublicKey(this.ops["UploadSSHPublicKey"].applicator.apply(partialParams));
    }
    invokeUploadServerCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadServerCertificate(this.ops["UploadServerCertificate"].applicator.apply(partialParams));
    }
    invokeUploadSigningCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.uploadSigningCertificate(this.ops["UploadSigningCertificate"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
