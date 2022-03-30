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
class default_1 extends aws.guardduty.PublishingDestination {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.GuardDuty();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/guardduty-2017-11-28.normal.json"), this.client);
    }
    invokeAcceptInvitation(partialParams) {
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].apply(partialParams));
    }
    invokeArchiveFindings(partialParams) {
        return this.client.archiveFindings(this.ops["ArchiveFindings"].apply(partialParams));
    }
    invokeCreateDetector(partialParams) {
        return this.client.createDetector(this.ops["CreateDetector"].apply(partialParams));
    }
    invokeCreateFilter(partialParams) {
        return this.client.createFilter(this.ops["CreateFilter"].apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        return this.client.createIPSet(this.ops["CreateIPSet"].apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        return this.client.createMembers(this.ops["CreateMembers"].apply(partialParams));
    }
    invokeCreatePublishingDestination(partialParams) {
        return this.client.createPublishingDestination(this.ops["CreatePublishingDestination"].apply(partialParams));
    }
    invokeCreateSampleFindings(partialParams) {
        return this.client.createSampleFindings(this.ops["CreateSampleFindings"].apply(partialParams));
    }
    invokeCreateThreatIntelSet(partialParams) {
        return this.client.createThreatIntelSet(this.ops["CreateThreatIntelSet"].apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        return this.client.declineInvitations(this.ops["DeclineInvitations"].apply(partialParams));
    }
    invokeDeleteDetector(partialParams) {
        return this.client.deleteDetector(this.ops["DeleteDetector"].apply(partialParams));
    }
    invokeDeleteFilter(partialParams) {
        return this.client.deleteFilter(this.ops["DeleteFilter"].apply(partialParams));
    }
    invokeDeleteIPSet(partialParams) {
        return this.client.deleteIPSet(this.ops["DeleteIPSet"].apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        return this.client.deleteMembers(this.ops["DeleteMembers"].apply(partialParams));
    }
    invokeDeletePublishingDestination(partialParams) {
        return this.client.deletePublishingDestination(this.ops["DeletePublishingDestination"].apply(partialParams));
    }
    invokeDeleteThreatIntelSet(partialParams) {
        return this.client.deleteThreatIntelSet(this.ops["DeleteThreatIntelSet"].apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].apply(partialParams));
    }
    invokeDescribePublishingDestination(partialParams) {
        return this.client.describePublishingDestination(this.ops["DescribePublishingDestination"].apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisassociateFromMasterAccount(partialParams) {
        return this.client.disassociateFromMasterAccount(this.ops["DisassociateFromMasterAccount"].apply(partialParams));
    }
    invokeDisassociateMembers(partialParams) {
        return this.client.disassociateMembers(this.ops["DisassociateMembers"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeGetDetector(partialParams) {
        return this.client.getDetector(this.ops["GetDetector"].apply(partialParams));
    }
    invokeGetFilter(partialParams) {
        return this.client.getFilter(this.ops["GetFilter"].apply(partialParams));
    }
    invokeGetFindings(partialParams) {
        return this.client.getFindings(this.ops["GetFindings"].apply(partialParams));
    }
    invokeGetFindingsStatistics(partialParams) {
        return this.client.getFindingsStatistics(this.ops["GetFindingsStatistics"].apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        return this.client.getIPSet(this.ops["GetIPSet"].apply(partialParams));
    }
    invokeGetMasterAccount(partialParams) {
        return this.client.getMasterAccount(this.ops["GetMasterAccount"].apply(partialParams));
    }
    invokeGetMemberDetectors(partialParams) {
        return this.client.getMemberDetectors(this.ops["GetMemberDetectors"].apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        return this.client.getMembers(this.ops["GetMembers"].apply(partialParams));
    }
    invokeGetThreatIntelSet(partialParams) {
        return this.client.getThreatIntelSet(this.ops["GetThreatIntelSet"].apply(partialParams));
    }
    invokeGetUsageStatistics(partialParams) {
        return this.client.getUsageStatistics(this.ops["GetUsageStatistics"].apply(partialParams));
    }
    invokeInviteMembers(partialParams) {
        return this.client.inviteMembers(this.ops["InviteMembers"].apply(partialParams));
    }
    invokeListFilters(partialParams) {
        return this.client.listFilters(this.ops["ListFilters"].apply(partialParams));
    }
    invokeListFindings(partialParams) {
        return this.client.listFindings(this.ops["ListFindings"].apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        return this.client.listIPSets(this.ops["ListIPSets"].apply(partialParams));
    }
    invokeListMembers(partialParams) {
        return this.client.listMembers(this.ops["ListMembers"].apply(partialParams));
    }
    invokeListPublishingDestinations(partialParams) {
        return this.client.listPublishingDestinations(this.ops["ListPublishingDestinations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListThreatIntelSets(partialParams) {
        return this.client.listThreatIntelSets(this.ops["ListThreatIntelSets"].apply(partialParams));
    }
    invokeStartMonitoringMembers(partialParams) {
        return this.client.startMonitoringMembers(this.ops["StartMonitoringMembers"].apply(partialParams));
    }
    invokeStopMonitoringMembers(partialParams) {
        return this.client.stopMonitoringMembers(this.ops["StopMonitoringMembers"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUnarchiveFindings(partialParams) {
        return this.client.unarchiveFindings(this.ops["UnarchiveFindings"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDetector(partialParams) {
        return this.client.updateDetector(this.ops["UpdateDetector"].apply(partialParams));
    }
    invokeUpdateFilter(partialParams) {
        return this.client.updateFilter(this.ops["UpdateFilter"].apply(partialParams));
    }
    invokeUpdateFindingsFeedback(partialParams) {
        return this.client.updateFindingsFeedback(this.ops["UpdateFindingsFeedback"].apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        return this.client.updateIPSet(this.ops["UpdateIPSet"].apply(partialParams));
    }
    invokeUpdateMemberDetectors(partialParams) {
        return this.client.updateMemberDetectors(this.ops["UpdateMemberDetectors"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
    invokeUpdatePublishingDestination(partialParams) {
        return this.client.updatePublishingDestination(this.ops["UpdatePublishingDestination"].apply(partialParams));
    }
    invokeUpdateThreatIntelSet(partialParams) {
        return this.client.updateThreatIntelSet(this.ops["UpdateThreatIntelSet"].apply(partialParams));
    }
}
exports.default = default_1;
