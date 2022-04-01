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
        this.booted = false;
        this.client = new awssdk.Organizations();
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
    invokeAcceptHandshake(partialParams) {
        this.boot();
        return this.client.acceptHandshake(this.ops["AcceptHandshake"].apply(partialParams));
    }
    invokeCancelHandshake(partialParams) {
        this.boot();
        return this.client.cancelHandshake(this.ops["CancelHandshake"].apply(partialParams));
    }
    invokeCreateAccount(partialParams) {
        this.boot();
        return this.client.createAccount(this.ops["CreateAccount"].apply(partialParams));
    }
    invokeCreateGovCloudAccount(partialParams) {
        this.boot();
        return this.client.createGovCloudAccount(this.ops["CreateGovCloudAccount"].apply(partialParams));
    }
    invokeCreateOrganization(partialParams) {
        this.boot();
        return this.client.createOrganization(this.ops["CreateOrganization"].apply(partialParams));
    }
    invokeCreateOrganizationalUnit(partialParams) {
        this.boot();
        return this.client.createOrganizationalUnit(this.ops["CreateOrganizationalUnit"].apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        this.boot();
        return this.client.createPolicy(this.ops["CreatePolicy"].apply(partialParams));
    }
    invokeDeclineHandshake(partialParams) {
        this.boot();
        return this.client.declineHandshake(this.ops["DeclineHandshake"].apply(partialParams));
    }
    invokeDescribeAccount(partialParams) {
        this.boot();
        return this.client.describeAccount(this.ops["DescribeAccount"].apply(partialParams));
    }
    invokeDescribeCreateAccountStatus(partialParams) {
        this.boot();
        return this.client.describeCreateAccountStatus(this.ops["DescribeCreateAccountStatus"].apply(partialParams));
    }
    invokeDescribeEffectivePolicy(partialParams) {
        this.boot();
        return this.client.describeEffectivePolicy(this.ops["DescribeEffectivePolicy"].apply(partialParams));
    }
    invokeDescribeHandshake(partialParams) {
        this.boot();
        return this.client.describeHandshake(this.ops["DescribeHandshake"].apply(partialParams));
    }
    invokeDescribeOrganizationalUnit(partialParams) {
        this.boot();
        return this.client.describeOrganizationalUnit(this.ops["DescribeOrganizationalUnit"].apply(partialParams));
    }
    invokeDescribePolicy(partialParams) {
        this.boot();
        return this.client.describePolicy(this.ops["DescribePolicy"].apply(partialParams));
    }
    invokeDisablePolicyType(partialParams) {
        this.boot();
        return this.client.disablePolicyType(this.ops["DisablePolicyType"].apply(partialParams));
    }
    invokeEnableAllFeatures(partialParams) {
        this.boot();
        return this.client.enableAllFeatures(this.ops["EnableAllFeatures"].apply(partialParams));
    }
    invokeEnablePolicyType(partialParams) {
        this.boot();
        return this.client.enablePolicyType(this.ops["EnablePolicyType"].apply(partialParams));
    }
    invokeInviteAccountToOrganization(partialParams) {
        this.boot();
        return this.client.inviteAccountToOrganization(this.ops["InviteAccountToOrganization"].apply(partialParams));
    }
    invokeListAWSServiceAccessForOrganization(partialParams) {
        this.boot();
        return this.client.listAWSServiceAccessForOrganization(this.ops["ListAWSServiceAccessForOrganization"].apply(partialParams));
    }
    invokeListAccounts(partialParams) {
        this.boot();
        return this.client.listAccounts(this.ops["ListAccounts"].apply(partialParams));
    }
    invokeListAccountsForParent(partialParams) {
        this.boot();
        return this.client.listAccountsForParent(this.ops["ListAccountsForParent"].apply(partialParams));
    }
    invokeListChildren(partialParams) {
        this.boot();
        return this.client.listChildren(this.ops["ListChildren"].apply(partialParams));
    }
    invokeListCreateAccountStatus(partialParams) {
        this.boot();
        return this.client.listCreateAccountStatus(this.ops["ListCreateAccountStatus"].apply(partialParams));
    }
    invokeListDelegatedAdministrators(partialParams) {
        this.boot();
        return this.client.listDelegatedAdministrators(this.ops["ListDelegatedAdministrators"].apply(partialParams));
    }
    invokeListDelegatedServicesForAccount(partialParams) {
        this.boot();
        return this.client.listDelegatedServicesForAccount(this.ops["ListDelegatedServicesForAccount"].apply(partialParams));
    }
    invokeListHandshakesForAccount(partialParams) {
        this.boot();
        return this.client.listHandshakesForAccount(this.ops["ListHandshakesForAccount"].apply(partialParams));
    }
    invokeListHandshakesForOrganization(partialParams) {
        this.boot();
        return this.client.listHandshakesForOrganization(this.ops["ListHandshakesForOrganization"].apply(partialParams));
    }
    invokeListOrganizationalUnitsForParent(partialParams) {
        this.boot();
        return this.client.listOrganizationalUnitsForParent(this.ops["ListOrganizationalUnitsForParent"].apply(partialParams));
    }
    invokeListParents(partialParams) {
        this.boot();
        return this.client.listParents(this.ops["ListParents"].apply(partialParams));
    }
    invokeListPolicies(partialParams) {
        this.boot();
        return this.client.listPolicies(this.ops["ListPolicies"].apply(partialParams));
    }
    invokeListPoliciesForTarget(partialParams) {
        this.boot();
        return this.client.listPoliciesForTarget(this.ops["ListPoliciesForTarget"].apply(partialParams));
    }
    invokeListRoots(partialParams) {
        this.boot();
        return this.client.listRoots(this.ops["ListRoots"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTargetsForPolicy(partialParams) {
        this.boot();
        return this.client.listTargetsForPolicy(this.ops["ListTargetsForPolicy"].apply(partialParams));
    }
    invokeUpdateOrganizationalUnit(partialParams) {
        this.boot();
        return this.client.updateOrganizationalUnit(this.ops["UpdateOrganizationalUnit"].apply(partialParams));
    }
    invokeUpdatePolicy(partialParams) {
        this.boot();
        return this.client.updatePolicy(this.ops["UpdatePolicy"].apply(partialParams));
    }
}
exports.default = default_1;
