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
class default_1 extends aws.macie2.InvitationAccepter {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Macie2();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/macie2-2020-01-01.normal.json"), this.client);
    }
    invokeAcceptInvitation(partialParams) {
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].apply(partialParams));
    }
    invokeCreateClassificationJob(partialParams) {
        return this.client.createClassificationJob(this.ops["CreateClassificationJob"].apply(partialParams));
    }
    invokeCreateCustomDataIdentifier(partialParams) {
        return this.client.createCustomDataIdentifier(this.ops["CreateCustomDataIdentifier"].apply(partialParams));
    }
    invokeCreateFindingsFilter(partialParams) {
        return this.client.createFindingsFilter(this.ops["CreateFindingsFilter"].apply(partialParams));
    }
    invokeCreateInvitations(partialParams) {
        return this.client.createInvitations(this.ops["CreateInvitations"].apply(partialParams));
    }
    invokeCreateMember(partialParams) {
        return this.client.createMember(this.ops["CreateMember"].apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        return this.client.declineInvitations(this.ops["DeclineInvitations"].apply(partialParams));
    }
    invokeDeleteCustomDataIdentifier(partialParams) {
        return this.client.deleteCustomDataIdentifier(this.ops["DeleteCustomDataIdentifier"].apply(partialParams));
    }
    invokeDeleteFindingsFilter(partialParams) {
        return this.client.deleteFindingsFilter(this.ops["DeleteFindingsFilter"].apply(partialParams));
    }
    invokeDeleteInvitations(partialParams) {
        return this.client.deleteInvitations(this.ops["DeleteInvitations"].apply(partialParams));
    }
    invokeDeleteMember(partialParams) {
        return this.client.deleteMember(this.ops["DeleteMember"].apply(partialParams));
    }
    invokeDescribeClassificationJob(partialParams) {
        return this.client.describeClassificationJob(this.ops["DescribeClassificationJob"].apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisassociateMember(partialParams) {
        return this.client.disassociateMember(this.ops["DisassociateMember"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeGetCustomDataIdentifier(partialParams) {
        return this.client.getCustomDataIdentifier(this.ops["GetCustomDataIdentifier"].apply(partialParams));
    }
    invokeGetFindingStatistics(partialParams) {
        return this.client.getFindingStatistics(this.ops["GetFindingStatistics"].apply(partialParams));
    }
    invokeGetFindings(partialParams) {
        return this.client.getFindings(this.ops["GetFindings"].apply(partialParams));
    }
    invokeGetFindingsFilter(partialParams) {
        return this.client.getFindingsFilter(this.ops["GetFindingsFilter"].apply(partialParams));
    }
    invokeGetMember(partialParams) {
        return this.client.getMember(this.ops["GetMember"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutClassificationExportConfiguration(partialParams) {
        return this.client.putClassificationExportConfiguration(this.ops["PutClassificationExportConfiguration"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestCustomDataIdentifier(partialParams) {
        return this.client.testCustomDataIdentifier(this.ops["TestCustomDataIdentifier"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateClassificationJob(partialParams) {
        return this.client.updateClassificationJob(this.ops["UpdateClassificationJob"].apply(partialParams));
    }
    invokeUpdateFindingsFilter(partialParams) {
        return this.client.updateFindingsFilter(this.ops["UpdateFindingsFilter"].apply(partialParams));
    }
    invokeUpdateMemberSession(partialParams) {
        return this.client.updateMemberSession(this.ops["UpdateMemberSession"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
