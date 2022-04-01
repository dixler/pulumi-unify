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
class default_1 extends aws.iam.UserPolicy {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.IAM();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeCreateAccessKey(partialParams) {
        this.boot();
        return this.client.createAccessKey(this.ops["CreateAccessKey"].apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        this.boot();
        return this.client.createGroup(this.ops["CreateGroup"].apply(partialParams));
    }
    invokeCreateInstanceProfile(partialParams) {
        this.boot();
        return this.client.createInstanceProfile(this.ops["CreateInstanceProfile"].apply(partialParams));
    }
    invokeCreateLoginProfile(partialParams) {
        this.boot();
        return this.client.createLoginProfile(this.ops["CreateLoginProfile"].apply(partialParams));
    }
    invokeCreateOpenIDConnectProvider(partialParams) {
        this.boot();
        return this.client.createOpenIDConnectProvider(this.ops["CreateOpenIDConnectProvider"].apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        this.boot();
        return this.client.createPolicy(this.ops["CreatePolicy"].apply(partialParams));
    }
    invokeCreatePolicyVersion(partialParams) {
        this.boot();
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].apply(partialParams));
    }
    invokeCreateRole(partialParams) {
        this.boot();
        return this.client.createRole(this.ops["CreateRole"].apply(partialParams));
    }
    invokeCreateSAMLProvider(partialParams) {
        this.boot();
        return this.client.createSAMLProvider(this.ops["CreateSAMLProvider"].apply(partialParams));
    }
    invokeCreateServiceLinkedRole(partialParams) {
        this.boot();
        return this.client.createServiceLinkedRole(this.ops["CreateServiceLinkedRole"].apply(partialParams));
    }
    invokeCreateServiceSpecificCredential(partialParams) {
        this.boot();
        return this.client.createServiceSpecificCredential(this.ops["CreateServiceSpecificCredential"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateVirtualMFADevice(partialParams) {
        this.boot();
        return this.client.createVirtualMFADevice(this.ops["CreateVirtualMFADevice"].apply(partialParams));
    }
    invokeDeleteServiceLinkedRole(partialParams) {
        this.boot();
        return this.client.deleteServiceLinkedRole(this.ops["DeleteServiceLinkedRole"].apply(partialParams));
    }
    invokeGenerateOrganizationsAccessReport(partialParams) {
        this.boot();
        return this.client.generateOrganizationsAccessReport(this.ops["GenerateOrganizationsAccessReport"].apply(partialParams));
    }
    invokeGenerateServiceLastAccessedDetails(partialParams) {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams));
    }
    invokeGetAccessKeyLastUsed(partialParams) {
        this.boot();
        return this.client.getAccessKeyLastUsed(this.ops["GetAccessKeyLastUsed"].apply(partialParams));
    }
    invokeGetAccountAuthorizationDetails(partialParams) {
        this.boot();
        return this.client.getAccountAuthorizationDetails(this.ops["GetAccountAuthorizationDetails"].apply(partialParams));
    }
    invokeGetContextKeysForCustomPolicy(partialParams) {
        this.boot();
        return this.client.getContextKeysForCustomPolicy(this.ops["GetContextKeysForCustomPolicy"].apply(partialParams));
    }
    invokeGetContextKeysForPrincipalPolicy(partialParams) {
        this.boot();
        return this.client.getContextKeysForPrincipalPolicy(this.ops["GetContextKeysForPrincipalPolicy"].apply(partialParams));
    }
    invokeGetGroup(partialParams) {
        this.boot();
        return this.client.getGroup(this.ops["GetGroup"].apply(partialParams));
    }
    invokeGetGroupPolicy(partialParams) {
        this.boot();
        return this.client.getGroupPolicy(this.ops["GetGroupPolicy"].apply(partialParams));
    }
    invokeGetInstanceProfile(partialParams) {
        this.boot();
        return this.client.getInstanceProfile(this.ops["GetInstanceProfile"].apply(partialParams));
    }
    invokeGetLoginProfile(partialParams) {
        this.boot();
        return this.client.getLoginProfile(this.ops["GetLoginProfile"].apply(partialParams));
    }
    invokeGetOpenIDConnectProvider(partialParams) {
        this.boot();
        return this.client.getOpenIDConnectProvider(this.ops["GetOpenIDConnectProvider"].apply(partialParams));
    }
    invokeGetOrganizationsAccessReport(partialParams) {
        this.boot();
        return this.client.getOrganizationsAccessReport(this.ops["GetOrganizationsAccessReport"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        this.boot();
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].apply(partialParams));
    }
    invokeGetRole(partialParams) {
        this.boot();
        return this.client.getRole(this.ops["GetRole"].apply(partialParams));
    }
    invokeGetRolePolicy(partialParams) {
        this.boot();
        return this.client.getRolePolicy(this.ops["GetRolePolicy"].apply(partialParams));
    }
    invokeGetSAMLProvider(partialParams) {
        this.boot();
        return this.client.getSAMLProvider(this.ops["GetSAMLProvider"].apply(partialParams));
    }
    invokeGetSSHPublicKey(partialParams) {
        this.boot();
        return this.client.getSSHPublicKey(this.ops["GetSSHPublicKey"].apply(partialParams));
    }
    invokeGetServerCertificate(partialParams) {
        this.boot();
        return this.client.getServerCertificate(this.ops["GetServerCertificate"].apply(partialParams));
    }
    invokeGetServiceLastAccessedDetails(partialParams) {
        this.boot();
        return this.client.getServiceLastAccessedDetails(this.ops["GetServiceLastAccessedDetails"].apply(partialParams));
    }
    invokeGetServiceLastAccessedDetailsWithEntities(partialParams) {
        this.boot();
        return this.client.getServiceLastAccessedDetailsWithEntities(this.ops["GetServiceLastAccessedDetailsWithEntities"].apply(partialParams));
    }
    invokeGetServiceLinkedRoleDeletionStatus(partialParams) {
        this.boot();
        return this.client.getServiceLinkedRoleDeletionStatus(this.ops["GetServiceLinkedRoleDeletionStatus"].apply(partialParams));
    }
    invokeGetUser(partialParams) {
        this.boot();
        return this.client.getUser(this.ops["GetUser"].apply(partialParams));
    }
    invokeGetUserPolicy(partialParams) {
        this.boot();
        return this.client.getUserPolicy(this.ops["GetUserPolicy"].apply(partialParams));
    }
    invokeListAccessKeys(partialParams) {
        this.boot();
        return this.client.listAccessKeys(this.ops["ListAccessKeys"].apply(partialParams));
    }
    invokeListAccountAliases(partialParams) {
        this.boot();
        return this.client.listAccountAliases(this.ops["ListAccountAliases"].apply(partialParams));
    }
    invokeListAttachedGroupPolicies(partialParams) {
        this.boot();
        return this.client.listAttachedGroupPolicies(this.ops["ListAttachedGroupPolicies"].apply(partialParams));
    }
    invokeListAttachedRolePolicies(partialParams) {
        this.boot();
        return this.client.listAttachedRolePolicies(this.ops["ListAttachedRolePolicies"].apply(partialParams));
    }
    invokeListAttachedUserPolicies(partialParams) {
        this.boot();
        return this.client.listAttachedUserPolicies(this.ops["ListAttachedUserPolicies"].apply(partialParams));
    }
    invokeListEntitiesForPolicy(partialParams) {
        this.boot();
        return this.client.listEntitiesForPolicy(this.ops["ListEntitiesForPolicy"].apply(partialParams));
    }
    invokeListGroupPolicies(partialParams) {
        this.boot();
        return this.client.listGroupPolicies(this.ops["ListGroupPolicies"].apply(partialParams));
    }
    invokeListGroups(partialParams) {
        this.boot();
        return this.client.listGroups(this.ops["ListGroups"].apply(partialParams));
    }
    invokeListGroupsForUser(partialParams) {
        this.boot();
        return this.client.listGroupsForUser(this.ops["ListGroupsForUser"].apply(partialParams));
    }
    invokeListInstanceProfileTags(partialParams) {
        this.boot();
        return this.client.listInstanceProfileTags(this.ops["ListInstanceProfileTags"].apply(partialParams));
    }
    invokeListInstanceProfiles(partialParams) {
        this.boot();
        return this.client.listInstanceProfiles(this.ops["ListInstanceProfiles"].apply(partialParams));
    }
    invokeListInstanceProfilesForRole(partialParams) {
        this.boot();
        return this.client.listInstanceProfilesForRole(this.ops["ListInstanceProfilesForRole"].apply(partialParams));
    }
    invokeListMFADeviceTags(partialParams) {
        this.boot();
        return this.client.listMFADeviceTags(this.ops["ListMFADeviceTags"].apply(partialParams));
    }
    invokeListMFADevices(partialParams) {
        this.boot();
        return this.client.listMFADevices(this.ops["ListMFADevices"].apply(partialParams));
    }
    invokeListOpenIDConnectProviderTags(partialParams) {
        this.boot();
        return this.client.listOpenIDConnectProviderTags(this.ops["ListOpenIDConnectProviderTags"].apply(partialParams));
    }
    invokeListOpenIDConnectProviders(partialParams) {
        this.boot();
        return this.client.listOpenIDConnectProviders(this.ops["ListOpenIDConnectProviders"].apply(partialParams));
    }
    invokeListPolicies(partialParams) {
        this.boot();
        return this.client.listPolicies(this.ops["ListPolicies"].apply(partialParams));
    }
    invokeListPoliciesGrantingServiceAccess(partialParams) {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams));
    }
    invokeListPolicyTags(partialParams) {
        this.boot();
        return this.client.listPolicyTags(this.ops["ListPolicyTags"].apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        this.boot();
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].apply(partialParams));
    }
    invokeListRolePolicies(partialParams) {
        this.boot();
        return this.client.listRolePolicies(this.ops["ListRolePolicies"].apply(partialParams));
    }
    invokeListRoleTags(partialParams) {
        this.boot();
        return this.client.listRoleTags(this.ops["ListRoleTags"].apply(partialParams));
    }
    invokeListRoles(partialParams) {
        this.boot();
        return this.client.listRoles(this.ops["ListRoles"].apply(partialParams));
    }
    invokeListSAMLProviderTags(partialParams) {
        this.boot();
        return this.client.listSAMLProviderTags(this.ops["ListSAMLProviderTags"].apply(partialParams));
    }
    invokeListSAMLProviders(partialParams) {
        this.boot();
        return this.client.listSAMLProviders(this.ops["ListSAMLProviders"].apply(partialParams));
    }
    invokeListSSHPublicKeys(partialParams) {
        this.boot();
        return this.client.listSSHPublicKeys(this.ops["ListSSHPublicKeys"].apply(partialParams));
    }
    invokeListServerCertificateTags(partialParams) {
        this.boot();
        return this.client.listServerCertificateTags(this.ops["ListServerCertificateTags"].apply(partialParams));
    }
    invokeListServerCertificates(partialParams) {
        this.boot();
        return this.client.listServerCertificates(this.ops["ListServerCertificates"].apply(partialParams));
    }
    invokeListServiceSpecificCredentials(partialParams) {
        this.boot();
        return this.client.listServiceSpecificCredentials(this.ops["ListServiceSpecificCredentials"].apply(partialParams));
    }
    invokeListSigningCertificates(partialParams) {
        this.boot();
        return this.client.listSigningCertificates(this.ops["ListSigningCertificates"].apply(partialParams));
    }
    invokeListUserPolicies(partialParams) {
        this.boot();
        return this.client.listUserPolicies(this.ops["ListUserPolicies"].apply(partialParams));
    }
    invokeListUserTags(partialParams) {
        this.boot();
        return this.client.listUserTags(this.ops["ListUserTags"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeListVirtualMFADevices(partialParams) {
        this.boot();
        return this.client.listVirtualMFADevices(this.ops["ListVirtualMFADevices"].apply(partialParams));
    }
    invokeResetServiceSpecificCredential(partialParams) {
        this.boot();
        return this.client.resetServiceSpecificCredential(this.ops["ResetServiceSpecificCredential"].apply(partialParams));
    }
    invokeSimulateCustomPolicy(partialParams) {
        this.boot();
        return this.client.simulateCustomPolicy(this.ops["SimulateCustomPolicy"].apply(partialParams));
    }
    invokeSimulatePrincipalPolicy(partialParams) {
        this.boot();
        return this.client.simulatePrincipalPolicy(this.ops["SimulatePrincipalPolicy"].apply(partialParams));
    }
    invokeUpdateRole(partialParams) {
        this.boot();
        return this.client.updateRole(this.ops["UpdateRole"].apply(partialParams));
    }
    invokeUpdateRoleDescription(partialParams) {
        this.boot();
        return this.client.updateRoleDescription(this.ops["UpdateRoleDescription"].apply(partialParams));
    }
    invokeUpdateSAMLProvider(partialParams) {
        this.boot();
        return this.client.updateSAMLProvider(this.ops["UpdateSAMLProvider"].apply(partialParams));
    }
    invokeUploadSSHPublicKey(partialParams) {
        this.boot();
        return this.client.uploadSSHPublicKey(this.ops["UploadSSHPublicKey"].apply(partialParams));
    }
    invokeUploadServerCertificate(partialParams) {
        this.boot();
        return this.client.uploadServerCertificate(this.ops["UploadServerCertificate"].apply(partialParams));
    }
    invokeUploadSigningCertificate(partialParams) {
        this.boot();
        return this.client.uploadSigningCertificate(this.ops["UploadSigningCertificate"].apply(partialParams));
    }
}
exports.default = default_1;
