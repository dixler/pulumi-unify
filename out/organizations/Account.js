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
const schema = require("../apis/organizations-2016-11-28.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.organizations.Account {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Organizations();
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
    invokeAcceptHandshake(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptHandshake(this.ops["AcceptHandshake"].applicator.apply(partialParams));
    }
    invokeAttachPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachPolicy(this.ops["AttachPolicy"].applicator.apply(partialParams));
    }
    invokeCancelHandshake(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelHandshake(this.ops["CancelHandshake"].applicator.apply(partialParams));
    }
    invokeCreateAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccount(this.ops["CreateAccount"].applicator.apply(partialParams));
    }
    invokeCreateGovCloudAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGovCloudAccount(this.ops["CreateGovCloudAccount"].applicator.apply(partialParams));
    }
    invokeCreateOrganizationalUnit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOrganizationalUnit(this.ops["CreateOrganizationalUnit"].applicator.apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(this.ops["CreatePolicy"].applicator.apply(partialParams));
    }
    invokeDeclineHandshake(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineHandshake(this.ops["DeclineHandshake"].applicator.apply(partialParams));
    }
    invokeDeleteOrganizationalUnit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOrganizationalUnit(this.ops["DeleteOrganizationalUnit"].applicator.apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(this.ops["DeletePolicy"].applicator.apply(partialParams));
    }
    invokeDeregisterDelegatedAdministrator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterDelegatedAdministrator(this.ops["DeregisterDelegatedAdministrator"].applicator.apply(partialParams));
    }
    invokeDescribeAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccount(this.ops["DescribeAccount"].applicator.apply(partialParams));
    }
    invokeDescribeCreateAccountStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCreateAccountStatus(this.ops["DescribeCreateAccountStatus"].applicator.apply(partialParams));
    }
    invokeDescribeEffectivePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEffectivePolicy(this.ops["DescribeEffectivePolicy"].applicator.apply(partialParams));
    }
    invokeDescribeHandshake(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHandshake(this.ops["DescribeHandshake"].applicator.apply(partialParams));
    }
    invokeDescribeOrganizationalUnit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrganizationalUnit(this.ops["DescribeOrganizationalUnit"].applicator.apply(partialParams));
    }
    invokeDescribePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePolicy(this.ops["DescribePolicy"].applicator.apply(partialParams));
    }
    invokeDetachPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachPolicy(this.ops["DetachPolicy"].applicator.apply(partialParams));
    }
    invokeDisableAWSServiceAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableAWSServiceAccess(this.ops["DisableAWSServiceAccess"].applicator.apply(partialParams));
    }
    invokeDisablePolicyType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disablePolicyType(this.ops["DisablePolicyType"].applicator.apply(partialParams));
    }
    invokeEnableAWSServiceAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableAWSServiceAccess(this.ops["EnableAWSServiceAccess"].applicator.apply(partialParams));
    }
    invokeEnablePolicyType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enablePolicyType(this.ops["EnablePolicyType"].applicator.apply(partialParams));
    }
    invokeInviteAccountToOrganization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteAccountToOrganization(this.ops["InviteAccountToOrganization"].applicator.apply(partialParams));
    }
    invokeListAccountsForParent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAccountsForParent(this.ops["ListAccountsForParent"].applicator.apply(partialParams));
    }
    invokeListChildren(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChildren(this.ops["ListChildren"].applicator.apply(partialParams));
    }
    invokeListDelegatedServicesForAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDelegatedServicesForAccount(this.ops["ListDelegatedServicesForAccount"].applicator.apply(partialParams));
    }
    invokeListOrganizationalUnitsForParent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOrganizationalUnitsForParent(this.ops["ListOrganizationalUnitsForParent"].applicator.apply(partialParams));
    }
    invokeListParents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParents(this.ops["ListParents"].applicator.apply(partialParams));
    }
    invokeListPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicies(this.ops["ListPolicies"].applicator.apply(partialParams));
    }
    invokeListPoliciesForTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPoliciesForTarget(this.ops["ListPoliciesForTarget"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListTargetsForPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTargetsForPolicy(this.ops["ListTargetsForPolicy"].applicator.apply(partialParams));
    }
    invokeMoveAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveAccount(this.ops["MoveAccount"].applicator.apply(partialParams));
    }
    invokeRegisterDelegatedAdministrator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDelegatedAdministrator(this.ops["RegisterDelegatedAdministrator"].applicator.apply(partialParams));
    }
    invokeRemoveAccountFromOrganization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeAccountFromOrganization(this.ops["RemoveAccountFromOrganization"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateOrganizationalUnit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationalUnit(this.ops["UpdateOrganizationalUnit"].applicator.apply(partialParams));
    }
    invokeUpdatePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePolicy(this.ops["UpdatePolicy"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
