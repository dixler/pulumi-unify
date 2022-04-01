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
const schema = require("../apis/guardduty-2017-11-28.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.guardduty.Detector {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.GuardDuty();
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
    invokeAcceptInvitation(partialParams) {
        this.boot();
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].apply(partialParams));
    }
    invokeArchiveFindings(partialParams) {
        this.boot();
        return this.client.archiveFindings(this.ops["ArchiveFindings"].apply(partialParams));
    }
    invokeCreateDetector(partialParams) {
        this.boot();
        return this.client.createDetector(this.ops["CreateDetector"].apply(partialParams));
    }
    invokeCreateFilter(partialParams) {
        this.boot();
        return this.client.createFilter(this.ops["CreateFilter"].apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        this.boot();
        return this.client.createIPSet(this.ops["CreateIPSet"].apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        this.boot();
        return this.client.createMembers(this.ops["CreateMembers"].apply(partialParams));
    }
    invokeCreatePublishingDestination(partialParams) {
        this.boot();
        return this.client.createPublishingDestination(this.ops["CreatePublishingDestination"].apply(partialParams));
    }
    invokeCreateSampleFindings(partialParams) {
        this.boot();
        return this.client.createSampleFindings(this.ops["CreateSampleFindings"].apply(partialParams));
    }
    invokeCreateThreatIntelSet(partialParams) {
        this.boot();
        return this.client.createThreatIntelSet(this.ops["CreateThreatIntelSet"].apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        this.boot();
        return this.client.declineInvitations(this.ops["DeclineInvitations"].apply(partialParams));
    }
    invokeDeleteDetector(partialParams) {
        this.boot();
        return this.client.deleteDetector(this.ops["DeleteDetector"].apply(partialParams));
    }
    invokeDeleteFilter(partialParams) {
        this.boot();
        return this.client.deleteFilter(this.ops["DeleteFilter"].apply(partialParams));
    }
    invokeDeleteIPSet(partialParams) {
        this.boot();
        return this.client.deleteIPSet(this.ops["DeleteIPSet"].apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        this.boot();
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        this.boot();
        return this.client.deleteMembers(this.ops["DeleteMembers"].apply(partialParams));
    }
    invokeDeletePublishingDestination(partialParams) {
        this.boot();
        return this.client.deletePublishingDestination(this.ops["DeletePublishingDestination"].apply(partialParams));
    }
    invokeDeleteThreatIntelSet(partialParams) {
        this.boot();
        return this.client.deleteThreatIntelSet(this.ops["DeleteThreatIntelSet"].apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].apply(partialParams));
    }
    invokeDescribePublishingDestination(partialParams) {
        this.boot();
        return this.client.describePublishingDestination(this.ops["DescribePublishingDestination"].apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisassociateFromMasterAccount(partialParams) {
        this.boot();
        return this.client.disassociateFromMasterAccount(this.ops["DisassociateFromMasterAccount"].apply(partialParams));
    }
    invokeDisassociateMembers(partialParams) {
        this.boot();
        return this.client.disassociateMembers(this.ops["DisassociateMembers"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeGetDetector(partialParams) {
        this.boot();
        return this.client.getDetector(this.ops["GetDetector"].apply(partialParams));
    }
    invokeGetFilter(partialParams) {
        this.boot();
        return this.client.getFilter(this.ops["GetFilter"].apply(partialParams));
    }
    invokeGetFindings(partialParams) {
        this.boot();
        return this.client.getFindings(this.ops["GetFindings"].apply(partialParams));
    }
    invokeGetFindingsStatistics(partialParams) {
        this.boot();
        return this.client.getFindingsStatistics(this.ops["GetFindingsStatistics"].apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        this.boot();
        return this.client.getIPSet(this.ops["GetIPSet"].apply(partialParams));
    }
    invokeGetInvitationsCount(partialParams) {
        this.boot();
        return this.client.getInvitationsCount(this.ops["GetInvitationsCount"].apply(partialParams));
    }
    invokeGetMasterAccount(partialParams) {
        this.boot();
        return this.client.getMasterAccount(this.ops["GetMasterAccount"].apply(partialParams));
    }
    invokeGetMemberDetectors(partialParams) {
        this.boot();
        return this.client.getMemberDetectors(this.ops["GetMemberDetectors"].apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        this.boot();
        return this.client.getMembers(this.ops["GetMembers"].apply(partialParams));
    }
    invokeGetThreatIntelSet(partialParams) {
        this.boot();
        return this.client.getThreatIntelSet(this.ops["GetThreatIntelSet"].apply(partialParams));
    }
    invokeGetUsageStatistics(partialParams) {
        this.boot();
        return this.client.getUsageStatistics(this.ops["GetUsageStatistics"].apply(partialParams));
    }
    invokeInviteMembers(partialParams) {
        this.boot();
        return this.client.inviteMembers(this.ops["InviteMembers"].apply(partialParams));
    }
    invokeListDetectors(partialParams) {
        this.boot();
        return this.client.listDetectors(this.ops["ListDetectors"].apply(partialParams));
    }
    invokeListFilters(partialParams) {
        this.boot();
        return this.client.listFilters(this.ops["ListFilters"].apply(partialParams));
    }
    invokeListFindings(partialParams) {
        this.boot();
        return this.client.listFindings(this.ops["ListFindings"].apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        this.boot();
        return this.client.listIPSets(this.ops["ListIPSets"].apply(partialParams));
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
    invokeListPublishingDestinations(partialParams) {
        this.boot();
        return this.client.listPublishingDestinations(this.ops["ListPublishingDestinations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListThreatIntelSets(partialParams) {
        this.boot();
        return this.client.listThreatIntelSets(this.ops["ListThreatIntelSets"].apply(partialParams));
    }
    invokeStartMonitoringMembers(partialParams) {
        this.boot();
        return this.client.startMonitoringMembers(this.ops["StartMonitoringMembers"].apply(partialParams));
    }
    invokeStopMonitoringMembers(partialParams) {
        this.boot();
        return this.client.stopMonitoringMembers(this.ops["StopMonitoringMembers"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUnarchiveFindings(partialParams) {
        this.boot();
        return this.client.unarchiveFindings(this.ops["UnarchiveFindings"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDetector(partialParams) {
        this.boot();
        return this.client.updateDetector(this.ops["UpdateDetector"].apply(partialParams));
    }
    invokeUpdateFilter(partialParams) {
        this.boot();
        return this.client.updateFilter(this.ops["UpdateFilter"].apply(partialParams));
    }
    invokeUpdateFindingsFeedback(partialParams) {
        this.boot();
        return this.client.updateFindingsFeedback(this.ops["UpdateFindingsFeedback"].apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        this.boot();
        return this.client.updateIPSet(this.ops["UpdateIPSet"].apply(partialParams));
    }
    invokeUpdateMemberDetectors(partialParams) {
        this.boot();
        return this.client.updateMemberDetectors(this.ops["UpdateMemberDetectors"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
    invokeUpdatePublishingDestination(partialParams) {
        this.boot();
        return this.client.updatePublishingDestination(this.ops["UpdatePublishingDestination"].apply(partialParams));
    }
    invokeUpdateThreatIntelSet(partialParams) {
        this.boot();
        return this.client.updateThreatIntelSet(this.ops["UpdateThreatIntelSet"].apply(partialParams));
    }
}
exports.default = default_1;
