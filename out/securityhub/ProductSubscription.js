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
const schema = require("../apis/securityhub-2018-10-26.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.securityhub.ProductSubscription {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SecurityHub();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeAcceptAdministratorInvitation(partialParams) {
        this.boot();
        return this.client.acceptAdministratorInvitation(this.ops["AcceptAdministratorInvitation"].apply(partialParams));
    }
    invokeAcceptInvitation(partialParams) {
        this.boot();
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].apply(partialParams));
    }
    invokeBatchDisableStandards(partialParams) {
        this.boot();
        return this.client.batchDisableStandards(this.ops["BatchDisableStandards"].apply(partialParams));
    }
    invokeBatchEnableStandards(partialParams) {
        this.boot();
        return this.client.batchEnableStandards(this.ops["BatchEnableStandards"].apply(partialParams));
    }
    invokeBatchImportFindings(partialParams) {
        this.boot();
        return this.client.batchImportFindings(this.ops["BatchImportFindings"].apply(partialParams));
    }
    invokeBatchUpdateFindings(partialParams) {
        this.boot();
        return this.client.batchUpdateFindings(this.ops["BatchUpdateFindings"].apply(partialParams));
    }
    invokeCreateActionTarget(partialParams) {
        this.boot();
        return this.client.createActionTarget(this.ops["CreateActionTarget"].apply(partialParams));
    }
    invokeCreateFindingAggregator(partialParams) {
        this.boot();
        return this.client.createFindingAggregator(this.ops["CreateFindingAggregator"].apply(partialParams));
    }
    invokeCreateInsight(partialParams) {
        this.boot();
        return this.client.createInsight(this.ops["CreateInsight"].apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        this.boot();
        return this.client.createMembers(this.ops["CreateMembers"].apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        this.boot();
        return this.client.declineInvitations(this.ops["DeclineInvitations"].apply(partialParams));
    }
    invokeDeleteActionTarget(partialParams) {
        this.boot();
        return this.client.deleteActionTarget(this.ops["DeleteActionTarget"].apply(partialParams));
    }
    invokeDeleteFindingAggregator(partialParams) {
        this.boot();
        return this.client.deleteFindingAggregator(this.ops["DeleteFindingAggregator"].apply(partialParams));
    }
    invokeDeleteInsight(partialParams) {
        this.boot();
        return this.client.deleteInsight(this.ops["DeleteInsight"].apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        this.boot();
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        this.boot();
        return this.client.deleteMembers(this.ops["DeleteMembers"].apply(partialParams));
    }
    invokeDescribeActionTargets(partialParams) {
        this.boot();
        return this.client.describeActionTargets(this.ops["DescribeActionTargets"].apply(partialParams));
    }
    invokeDescribeHub(partialParams) {
        this.boot();
        return this.client.describeHub(this.ops["DescribeHub"].apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].apply(partialParams));
    }
    invokeDescribeProducts(partialParams) {
        this.boot();
        return this.client.describeProducts(this.ops["DescribeProducts"].apply(partialParams));
    }
    invokeDescribeStandards(partialParams) {
        this.boot();
        return this.client.describeStandards(this.ops["DescribeStandards"].apply(partialParams));
    }
    invokeDescribeStandardsControls(partialParams) {
        this.boot();
        return this.client.describeStandardsControls(this.ops["DescribeStandardsControls"].apply(partialParams));
    }
    invokeDisableImportFindingsForProduct(partialParams) {
        this.boot();
        return this.client.disableImportFindingsForProduct(this.ops["DisableImportFindingsForProduct"].apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisableSecurityHub(partialParams) {
        this.boot();
        return this.client.disableSecurityHub(this.ops["DisableSecurityHub"].apply(partialParams));
    }
    invokeDisassociateFromAdministratorAccount(partialParams) {
        this.boot();
        return this.client.disassociateFromAdministratorAccount(this.ops["DisassociateFromAdministratorAccount"].apply(partialParams));
    }
    invokeDisassociateFromMasterAccount(partialParams) {
        this.boot();
        return this.client.disassociateFromMasterAccount(this.ops["DisassociateFromMasterAccount"].apply(partialParams));
    }
    invokeDisassociateMembers(partialParams) {
        this.boot();
        return this.client.disassociateMembers(this.ops["DisassociateMembers"].apply(partialParams));
    }
    invokeEnableImportFindingsForProduct(partialParams) {
        this.boot();
        return this.client.enableImportFindingsForProduct(this.ops["EnableImportFindingsForProduct"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeEnableSecurityHub(partialParams) {
        this.boot();
        return this.client.enableSecurityHub(this.ops["EnableSecurityHub"].apply(partialParams));
    }
    invokeGetAdministratorAccount(partialParams) {
        this.boot();
        return this.client.getAdministratorAccount(this.ops["GetAdministratorAccount"].apply(partialParams));
    }
    invokeGetEnabledStandards(partialParams) {
        this.boot();
        return this.client.getEnabledStandards(this.ops["GetEnabledStandards"].apply(partialParams));
    }
    invokeGetFindingAggregator(partialParams) {
        this.boot();
        return this.client.getFindingAggregator(this.ops["GetFindingAggregator"].apply(partialParams));
    }
    invokeGetFindings(partialParams) {
        this.boot();
        return this.client.getFindings(this.ops["GetFindings"].apply(partialParams));
    }
    invokeGetInsightResults(partialParams) {
        this.boot();
        return this.client.getInsightResults(this.ops["GetInsightResults"].apply(partialParams));
    }
    invokeGetInsights(partialParams) {
        this.boot();
        return this.client.getInsights(this.ops["GetInsights"].apply(partialParams));
    }
    invokeGetInvitationsCount(partialParams) {
        this.boot();
        return this.client.getInvitationsCount(this.ops["GetInvitationsCount"].apply(partialParams));
    }
    invokeGetMasterAccount(partialParams) {
        this.boot();
        return this.client.getMasterAccount(this.ops["GetMasterAccount"].apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        this.boot();
        return this.client.getMembers(this.ops["GetMembers"].apply(partialParams));
    }
    invokeInviteMembers(partialParams) {
        this.boot();
        return this.client.inviteMembers(this.ops["InviteMembers"].apply(partialParams));
    }
    invokeListEnabledProductsForImport(partialParams) {
        this.boot();
        return this.client.listEnabledProductsForImport(this.ops["ListEnabledProductsForImport"].apply(partialParams));
    }
    invokeListFindingAggregators(partialParams) {
        this.boot();
        return this.client.listFindingAggregators(this.ops["ListFindingAggregators"].apply(partialParams));
    }
    invokeListInvitations(partialParams) {
        this.boot();
        return this.client.listInvitations(this.ops["ListInvitations"].apply(partialParams));
    }
    invokeListMembers(partialParams) {
        this.boot();
        return this.client.listMembers(this.ops["ListMembers"].apply(partialParams));
    }
    invokeListOrganizationAdminAccounts(partialParams) {
        this.boot();
        return this.client.listOrganizationAdminAccounts(this.ops["ListOrganizationAdminAccounts"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateActionTarget(partialParams) {
        this.boot();
        return this.client.updateActionTarget(this.ops["UpdateActionTarget"].apply(partialParams));
    }
    invokeUpdateFindingAggregator(partialParams) {
        this.boot();
        return this.client.updateFindingAggregator(this.ops["UpdateFindingAggregator"].apply(partialParams));
    }
    invokeUpdateFindings(partialParams) {
        this.boot();
        return this.client.updateFindings(this.ops["UpdateFindings"].apply(partialParams));
    }
    invokeUpdateInsight(partialParams) {
        this.boot();
        return this.client.updateInsight(this.ops["UpdateInsight"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
    invokeUpdateSecurityHubConfiguration(partialParams) {
        this.boot();
        return this.client.updateSecurityHubConfiguration(this.ops["UpdateSecurityHubConfiguration"].apply(partialParams));
    }
    invokeUpdateStandardsControl(partialParams) {
        this.boot();
        return this.client.updateStandardsControl(this.ops["UpdateStandardsControl"].apply(partialParams));
    }
}
exports.default = default_1;
