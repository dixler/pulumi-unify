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
class default_1 extends aws.guardduty.Filter {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.GuardDuty();
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
    invokeAcceptInvitation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].applicator.apply(partialParams));
    }
    invokeArchiveFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.archiveFindings(this.ops["ArchiveFindings"].applicator.apply(partialParams));
    }
    invokeCreateDetector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDetector(this.ops["CreateDetector"].applicator.apply(partialParams));
    }
    invokeCreateFilter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFilter(this.ops["CreateFilter"].applicator.apply(partialParams));
    }
    invokeCreateIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIPSet(this.ops["CreateIPSet"].applicator.apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMembers(this.ops["CreateMembers"].applicator.apply(partialParams));
    }
    invokeCreatePublishingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublishingDestination(this.ops["CreatePublishingDestination"].applicator.apply(partialParams));
    }
    invokeCreateSampleFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSampleFindings(this.ops["CreateSampleFindings"].applicator.apply(partialParams));
    }
    invokeCreateThreatIntelSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThreatIntelSet(this.ops["CreateThreatIntelSet"].applicator.apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineInvitations(this.ops["DeclineInvitations"].applicator.apply(partialParams));
    }
    invokeDeleteDetector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDetector(this.ops["DeleteDetector"].applicator.apply(partialParams));
    }
    invokeDeleteFilter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFilter(this.ops["DeleteFilter"].applicator.apply(partialParams));
    }
    invokeDeleteIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIPSet(this.ops["DeleteIPSet"].applicator.apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].applicator.apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMembers(this.ops["DeleteMembers"].applicator.apply(partialParams));
    }
    invokeDeletePublishingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublishingDestination(this.ops["DeletePublishingDestination"].applicator.apply(partialParams));
    }
    invokeDeleteThreatIntelSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThreatIntelSet(this.ops["DeleteThreatIntelSet"].applicator.apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribePublishingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePublishingDestination(this.ops["DescribePublishingDestination"].applicator.apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].applicator.apply(partialParams));
    }
    invokeDisassociateFromMasterAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFromMasterAccount(this.ops["DisassociateFromMasterAccount"].applicator.apply(partialParams));
    }
    invokeDisassociateMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMembers(this.ops["DisassociateMembers"].applicator.apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].applicator.apply(partialParams));
    }
    invokeGetDetector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDetector(this.ops["GetDetector"].applicator.apply(partialParams));
    }
    invokeGetFilter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFilter(this.ops["GetFilter"].applicator.apply(partialParams));
    }
    invokeGetFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindings(this.ops["GetFindings"].applicator.apply(partialParams));
    }
    invokeGetFindingsStatistics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindingsStatistics(this.ops["GetFindingsStatistics"].applicator.apply(partialParams));
    }
    invokeGetIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIPSet(this.ops["GetIPSet"].applicator.apply(partialParams));
    }
    invokeGetMasterAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMasterAccount(this.ops["GetMasterAccount"].applicator.apply(partialParams));
    }
    invokeGetMemberDetectors(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMemberDetectors(this.ops["GetMemberDetectors"].applicator.apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMembers(this.ops["GetMembers"].applicator.apply(partialParams));
    }
    invokeGetThreatIntelSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getThreatIntelSet(this.ops["GetThreatIntelSet"].applicator.apply(partialParams));
    }
    invokeGetUsageStatistics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsageStatistics(this.ops["GetUsageStatistics"].applicator.apply(partialParams));
    }
    invokeInviteMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteMembers(this.ops["InviteMembers"].applicator.apply(partialParams));
    }
    invokeListFilters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFilters(this.ops["ListFilters"].applicator.apply(partialParams));
    }
    invokeListFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFindings(this.ops["ListFindings"].applicator.apply(partialParams));
    }
    invokeListIPSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIPSets(this.ops["ListIPSets"].applicator.apply(partialParams));
    }
    invokeListMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMembers(this.ops["ListMembers"].applicator.apply(partialParams));
    }
    invokeListPublishingDestinations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPublishingDestinations(this.ops["ListPublishingDestinations"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListThreatIntelSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThreatIntelSets(this.ops["ListThreatIntelSets"].applicator.apply(partialParams));
    }
    invokeStartMonitoringMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMonitoringMembers(this.ops["StartMonitoringMembers"].applicator.apply(partialParams));
    }
    invokeStopMonitoringMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMonitoringMembers(this.ops["StopMonitoringMembers"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUnarchiveFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unarchiveFindings(this.ops["UnarchiveFindings"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateDetector(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDetector(this.ops["UpdateDetector"].applicator.apply(partialParams));
    }
    invokeUpdateFilter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFilter(this.ops["UpdateFilter"].applicator.apply(partialParams));
    }
    invokeUpdateFindingsFeedback(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindingsFeedback(this.ops["UpdateFindingsFeedback"].applicator.apply(partialParams));
    }
    invokeUpdateIPSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIPSet(this.ops["UpdateIPSet"].applicator.apply(partialParams));
    }
    invokeUpdateMemberDetectors(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMemberDetectors(this.ops["UpdateMemberDetectors"].applicator.apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdatePublishingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePublishingDestination(this.ops["UpdatePublishingDestination"].applicator.apply(partialParams));
    }
    invokeUpdateThreatIntelSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThreatIntelSet(this.ops["UpdateThreatIntelSet"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
