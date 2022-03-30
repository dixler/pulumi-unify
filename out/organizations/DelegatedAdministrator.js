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
class default_1 extends aws.organizations.DelegatedAdministrator {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Organizations();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/organizations-2016-11-28.normal.json"), this.client);
    }
    invokeAcceptHandshake(partialParams) {
        return this.client.acceptHandshake(this.ops["AcceptHandshake"].apply(partialParams));
    }
    invokeAttachPolicy(partialParams) {
        return this.client.attachPolicy(this.ops["AttachPolicy"].apply(partialParams));
    }
    invokeCancelHandshake(partialParams) {
        return this.client.cancelHandshake(this.ops["CancelHandshake"].apply(partialParams));
    }
    invokeCreateAccount(partialParams) {
        return this.client.createAccount(this.ops["CreateAccount"].apply(partialParams));
    }
    invokeCreateGovCloudAccount(partialParams) {
        return this.client.createGovCloudAccount(this.ops["CreateGovCloudAccount"].apply(partialParams));
    }
    invokeCreateOrganizationalUnit(partialParams) {
        return this.client.createOrganizationalUnit(this.ops["CreateOrganizationalUnit"].apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        return this.client.createPolicy(this.ops["CreatePolicy"].apply(partialParams));
    }
    invokeDeclineHandshake(partialParams) {
        return this.client.declineHandshake(this.ops["DeclineHandshake"].apply(partialParams));
    }
    invokeDeleteOrganizationalUnit(partialParams) {
        return this.client.deleteOrganizationalUnit(this.ops["DeleteOrganizationalUnit"].apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        return this.client.deletePolicy(this.ops["DeletePolicy"].apply(partialParams));
    }
    invokeDeregisterDelegatedAdministrator(partialParams) {
        return this.client.deregisterDelegatedAdministrator(this.ops["DeregisterDelegatedAdministrator"].apply(partialParams));
    }
    invokeDescribeAccount(partialParams) {
        return this.client.describeAccount(this.ops["DescribeAccount"].apply(partialParams));
    }
    invokeDescribeCreateAccountStatus(partialParams) {
        return this.client.describeCreateAccountStatus(this.ops["DescribeCreateAccountStatus"].apply(partialParams));
    }
    invokeDescribeEffectivePolicy(partialParams) {
        return this.client.describeEffectivePolicy(this.ops["DescribeEffectivePolicy"].apply(partialParams));
    }
    invokeDescribeHandshake(partialParams) {
        return this.client.describeHandshake(this.ops["DescribeHandshake"].apply(partialParams));
    }
    invokeDescribeOrganizationalUnit(partialParams) {
        return this.client.describeOrganizationalUnit(this.ops["DescribeOrganizationalUnit"].apply(partialParams));
    }
    invokeDescribePolicy(partialParams) {
        return this.client.describePolicy(this.ops["DescribePolicy"].apply(partialParams));
    }
    invokeDetachPolicy(partialParams) {
        return this.client.detachPolicy(this.ops["DetachPolicy"].apply(partialParams));
    }
    invokeDisableAWSServiceAccess(partialParams) {
        return this.client.disableAWSServiceAccess(this.ops["DisableAWSServiceAccess"].apply(partialParams));
    }
    invokeDisablePolicyType(partialParams) {
        return this.client.disablePolicyType(this.ops["DisablePolicyType"].apply(partialParams));
    }
    invokeEnableAWSServiceAccess(partialParams) {
        return this.client.enableAWSServiceAccess(this.ops["EnableAWSServiceAccess"].apply(partialParams));
    }
    invokeEnablePolicyType(partialParams) {
        return this.client.enablePolicyType(this.ops["EnablePolicyType"].apply(partialParams));
    }
    invokeInviteAccountToOrganization(partialParams) {
        return this.client.inviteAccountToOrganization(this.ops["InviteAccountToOrganization"].apply(partialParams));
    }
    invokeListAccountsForParent(partialParams) {
        return this.client.listAccountsForParent(this.ops["ListAccountsForParent"].apply(partialParams));
    }
    invokeListChildren(partialParams) {
        return this.client.listChildren(this.ops["ListChildren"].apply(partialParams));
    }
    invokeListDelegatedServicesForAccount(partialParams) {
        return this.client.listDelegatedServicesForAccount(this.ops["ListDelegatedServicesForAccount"].apply(partialParams));
    }
    invokeListOrganizationalUnitsForParent(partialParams) {
        return this.client.listOrganizationalUnitsForParent(this.ops["ListOrganizationalUnitsForParent"].apply(partialParams));
    }
    invokeListParents(partialParams) {
        return this.client.listParents(this.ops["ListParents"].apply(partialParams));
    }
    invokeListPolicies(partialParams) {
        return this.client.listPolicies(this.ops["ListPolicies"].apply(partialParams));
    }
    invokeListPoliciesForTarget(partialParams) {
        return this.client.listPoliciesForTarget(this.ops["ListPoliciesForTarget"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTargetsForPolicy(partialParams) {
        return this.client.listTargetsForPolicy(this.ops["ListTargetsForPolicy"].apply(partialParams));
    }
    invokeMoveAccount(partialParams) {
        return this.client.moveAccount(this.ops["MoveAccount"].apply(partialParams));
    }
    invokeRegisterDelegatedAdministrator(partialParams) {
        return this.client.registerDelegatedAdministrator(this.ops["RegisterDelegatedAdministrator"].apply(partialParams));
    }
    invokeRemoveAccountFromOrganization(partialParams) {
        return this.client.removeAccountFromOrganization(this.ops["RemoveAccountFromOrganization"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateOrganizationalUnit(partialParams) {
        return this.client.updateOrganizationalUnit(this.ops["UpdateOrganizationalUnit"].apply(partialParams));
    }
    invokeUpdatePolicy(partialParams) {
        return this.client.updatePolicy(this.ops["UpdatePolicy"].apply(partialParams));
    }
}
exports.default = default_1;
