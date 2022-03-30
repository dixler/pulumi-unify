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
class default_1 extends aws.securityhub.ActionTarget {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SecurityHub();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/securityhub-2018-10-26.normal.json"), this.client);
    }
    invokeAcceptAdministratorInvitation(partialParams) {
        return this.client.acceptAdministratorInvitation(this.ops["AcceptAdministratorInvitation"].apply(partialParams));
    }
    invokeAcceptInvitation(partialParams) {
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].apply(partialParams));
    }
    invokeBatchDisableStandards(partialParams) {
        return this.client.batchDisableStandards(this.ops["BatchDisableStandards"].apply(partialParams));
    }
    invokeBatchEnableStandards(partialParams) {
        return this.client.batchEnableStandards(this.ops["BatchEnableStandards"].apply(partialParams));
    }
    invokeBatchImportFindings(partialParams) {
        return this.client.batchImportFindings(this.ops["BatchImportFindings"].apply(partialParams));
    }
    invokeBatchUpdateFindings(partialParams) {
        return this.client.batchUpdateFindings(this.ops["BatchUpdateFindings"].apply(partialParams));
    }
    invokeCreateActionTarget(partialParams) {
        return this.client.createActionTarget(this.ops["CreateActionTarget"].apply(partialParams));
    }
    invokeCreateFindingAggregator(partialParams) {
        return this.client.createFindingAggregator(this.ops["CreateFindingAggregator"].apply(partialParams));
    }
    invokeCreateInsight(partialParams) {
        return this.client.createInsight(this.ops["CreateInsight"].apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        return this.client.createMembers(this.ops["CreateMembers"].apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        return this.client.declineInvitations(this.ops["DeclineInvitations"].apply(partialParams));
    }
    invokeDeleteActionTarget(partialParams) {
        return this.client.deleteActionTarget(this.ops["DeleteActionTarget"].apply(partialParams));
    }
    invokeDeleteFindingAggregator(partialParams) {
        return this.client.deleteFindingAggregator(this.ops["DeleteFindingAggregator"].apply(partialParams));
    }
    invokeDeleteInsight(partialParams) {
        return this.client.deleteInsight(this.ops["DeleteInsight"].apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        return this.client.deleteMembers(this.ops["DeleteMembers"].apply(partialParams));
    }
    invokeDescribeStandardsControls(partialParams) {
        return this.client.describeStandardsControls(this.ops["DescribeStandardsControls"].apply(partialParams));
    }
    invokeDisableImportFindingsForProduct(partialParams) {
        return this.client.disableImportFindingsForProduct(this.ops["DisableImportFindingsForProduct"].apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisassociateMembers(partialParams) {
        return this.client.disassociateMembers(this.ops["DisassociateMembers"].apply(partialParams));
    }
    invokeEnableImportFindingsForProduct(partialParams) {
        return this.client.enableImportFindingsForProduct(this.ops["EnableImportFindingsForProduct"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeGetFindingAggregator(partialParams) {
        return this.client.getFindingAggregator(this.ops["GetFindingAggregator"].apply(partialParams));
    }
    invokeGetInsightResults(partialParams) {
        return this.client.getInsightResults(this.ops["GetInsightResults"].apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        return this.client.getMembers(this.ops["GetMembers"].apply(partialParams));
    }
    invokeInviteMembers(partialParams) {
        return this.client.inviteMembers(this.ops["InviteMembers"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateActionTarget(partialParams) {
        return this.client.updateActionTarget(this.ops["UpdateActionTarget"].apply(partialParams));
    }
    invokeUpdateFindingAggregator(partialParams) {
        return this.client.updateFindingAggregator(this.ops["UpdateFindingAggregator"].apply(partialParams));
    }
    invokeUpdateFindings(partialParams) {
        return this.client.updateFindings(this.ops["UpdateFindings"].apply(partialParams));
    }
    invokeUpdateInsight(partialParams) {
        return this.client.updateInsight(this.ops["UpdateInsight"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
    invokeUpdateStandardsControl(partialParams) {
        return this.client.updateStandardsControl(this.ops["UpdateStandardsControl"].apply(partialParams));
    }
}
exports.default = default_1;
