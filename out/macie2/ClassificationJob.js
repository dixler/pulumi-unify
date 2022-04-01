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
const schema = require("../apis/macie2-2020-01-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.macie2.ClassificationJob {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Macie2();
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
    invokeBatchGetCustomDataIdentifiers(partialParams) {
        this.boot();
        return this.client.batchGetCustomDataIdentifiers(this.ops["BatchGetCustomDataIdentifiers"].apply(partialParams));
    }
    invokeCreateClassificationJob(partialParams) {
        this.boot();
        return this.client.createClassificationJob(this.ops["CreateClassificationJob"].apply(partialParams));
    }
    invokeCreateCustomDataIdentifier(partialParams) {
        this.boot();
        return this.client.createCustomDataIdentifier(this.ops["CreateCustomDataIdentifier"].apply(partialParams));
    }
    invokeCreateFindingsFilter(partialParams) {
        this.boot();
        return this.client.createFindingsFilter(this.ops["CreateFindingsFilter"].apply(partialParams));
    }
    invokeCreateInvitations(partialParams) {
        this.boot();
        return this.client.createInvitations(this.ops["CreateInvitations"].apply(partialParams));
    }
    invokeCreateMember(partialParams) {
        this.boot();
        return this.client.createMember(this.ops["CreateMember"].apply(partialParams));
    }
    invokeCreateSampleFindings(partialParams) {
        this.boot();
        return this.client.createSampleFindings(this.ops["CreateSampleFindings"].apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        this.boot();
        return this.client.declineInvitations(this.ops["DeclineInvitations"].apply(partialParams));
    }
    invokeDeleteCustomDataIdentifier(partialParams) {
        this.boot();
        return this.client.deleteCustomDataIdentifier(this.ops["DeleteCustomDataIdentifier"].apply(partialParams));
    }
    invokeDeleteFindingsFilter(partialParams) {
        this.boot();
        return this.client.deleteFindingsFilter(this.ops["DeleteFindingsFilter"].apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        this.boot();
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].apply(partialParams));
    }
    invokeDeleteMember(partialParams) {
        this.boot();
        return this.client.deleteMember(this.ops["DeleteMember"].apply(partialParams));
    }
    invokeDescribeBuckets(partialParams) {
        this.boot();
        return this.client.describeBuckets(this.ops["DescribeBuckets"].apply(partialParams));
    }
    invokeDescribeClassificationJob(partialParams) {
        this.boot();
        return this.client.describeClassificationJob(this.ops["DescribeClassificationJob"].apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].apply(partialParams));
    }
    invokeDisableMacie(partialParams) {
        this.boot();
        return this.client.disableMacie(this.ops["DisableMacie"].apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisassociateFromAdministratorAccount(partialParams) {
        this.boot();
        return this.client.disassociateFromAdministratorAccount(this.ops["DisassociateFromAdministratorAccount"].apply(partialParams));
    }
    invokeDisassociateFromMasterAccount(partialParams) {
        this.boot();
        return this.client.disassociateFromMasterAccount(this.ops["DisassociateFromMasterAccount"].apply(partialParams));
    }
    invokeDisassociateMember(partialParams) {
        this.boot();
        return this.client.disassociateMember(this.ops["DisassociateMember"].apply(partialParams));
    }
    invokeEnableMacie(partialParams) {
        this.boot();
        return this.client.enableMacie(this.ops["EnableMacie"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeGetAdministratorAccount(partialParams) {
        this.boot();
        return this.client.getAdministratorAccount(this.ops["GetAdministratorAccount"].apply(partialParams));
    }
    invokeGetBucketStatistics(partialParams) {
        this.boot();
        return this.client.getBucketStatistics(this.ops["GetBucketStatistics"].apply(partialParams));
    }
    invokeGetClassificationExportConfiguration(partialParams) {
        this.boot();
        return this.client.getClassificationExportConfiguration(this.ops["GetClassificationExportConfiguration"].apply(partialParams));
    }
    invokeGetCustomDataIdentifier(partialParams) {
        this.boot();
        return this.client.getCustomDataIdentifier(this.ops["GetCustomDataIdentifier"].apply(partialParams));
    }
    invokeGetFindingStatistics(partialParams) {
        this.boot();
        return this.client.getFindingStatistics(this.ops["GetFindingStatistics"].apply(partialParams));
    }
    invokeGetFindings(partialParams) {
        this.boot();
        return this.client.getFindings(this.ops["GetFindings"].apply(partialParams));
    }
    invokeGetFindingsFilter(partialParams) {
        this.boot();
        return this.client.getFindingsFilter(this.ops["GetFindingsFilter"].apply(partialParams));
    }
    invokeGetFindingsPublicationConfiguration(partialParams) {
        this.boot();
        return this.client.getFindingsPublicationConfiguration(this.ops["GetFindingsPublicationConfiguration"].apply(partialParams));
    }
    invokeGetInvitationsCount(partialParams) {
        this.boot();
        return this.client.getInvitationsCount(this.ops["GetInvitationsCount"].apply(partialParams));
    }
    invokeGetMacieSession(partialParams) {
        this.boot();
        return this.client.getMacieSession(this.ops["GetMacieSession"].apply(partialParams));
    }
    invokeGetMasterAccount(partialParams) {
        this.boot();
        return this.client.getMasterAccount(this.ops["GetMasterAccount"].apply(partialParams));
    }
    invokeGetMember(partialParams) {
        this.boot();
        return this.client.getMember(this.ops["GetMember"].apply(partialParams));
    }
    invokeGetUsageStatistics(partialParams) {
        this.boot();
        return this.client.getUsageStatistics(this.ops["GetUsageStatistics"].apply(partialParams));
    }
    invokeGetUsageTotals(partialParams) {
        this.boot();
        return this.client.getUsageTotals(this.ops["GetUsageTotals"].apply(partialParams));
    }
    invokeListClassificationJobs(partialParams) {
        this.boot();
        return this.client.listClassificationJobs(this.ops["ListClassificationJobs"].apply(partialParams));
    }
    invokeListCustomDataIdentifiers(partialParams) {
        this.boot();
        return this.client.listCustomDataIdentifiers(this.ops["ListCustomDataIdentifiers"].apply(partialParams));
    }
    invokeListFindings(partialParams) {
        this.boot();
        return this.client.listFindings(this.ops["ListFindings"].apply(partialParams));
    }
    invokeListFindingsFilters(partialParams) {
        this.boot();
        return this.client.listFindingsFilters(this.ops["ListFindingsFilters"].apply(partialParams));
    }
    invokeListInvitations(partialParams) {
        this.boot();
        return this.client.listInvitations(this.ops["ListInvitations"].apply(partialParams));
    }
    invokeListManagedDataIdentifiers(partialParams) {
        this.boot();
        return this.client.listManagedDataIdentifiers(this.ops["ListManagedDataIdentifiers"].apply(partialParams));
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
    invokePutClassificationExportConfiguration(partialParams) {
        this.boot();
        return this.client.putClassificationExportConfiguration(this.ops["PutClassificationExportConfiguration"].apply(partialParams));
    }
    invokePutFindingsPublicationConfiguration(partialParams) {
        this.boot();
        return this.client.putFindingsPublicationConfiguration(this.ops["PutFindingsPublicationConfiguration"].apply(partialParams));
    }
    invokeSearchResources(partialParams) {
        this.boot();
        return this.client.searchResources(this.ops["SearchResources"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestCustomDataIdentifier(partialParams) {
        this.boot();
        return this.client.testCustomDataIdentifier(this.ops["TestCustomDataIdentifier"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateClassificationJob(partialParams) {
        this.boot();
        return this.client.updateClassificationJob(this.ops["UpdateClassificationJob"].apply(partialParams));
    }
    invokeUpdateFindingsFilter(partialParams) {
        this.boot();
        return this.client.updateFindingsFilter(this.ops["UpdateFindingsFilter"].apply(partialParams));
    }
    invokeUpdateMacieSession(partialParams) {
        this.boot();
        return this.client.updateMacieSession(this.ops["UpdateMacieSession"].apply(partialParams));
    }
    invokeUpdateMemberSession(partialParams) {
        this.boot();
        return this.client.updateMemberSession(this.ops["UpdateMemberSession"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
