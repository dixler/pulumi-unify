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
        this.client = new awssdk.SecurityHub();
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
    invokeAcceptAdministratorInvitation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptAdministratorInvitation(this.ops["AcceptAdministratorInvitation"].applicator.apply(partialParams));
    }
    invokeAcceptInvitation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].applicator.apply(partialParams));
    }
    invokeBatchDisableStandards(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisableStandards(this.ops["BatchDisableStandards"].applicator.apply(partialParams));
    }
    invokeBatchEnableStandards(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchEnableStandards(this.ops["BatchEnableStandards"].applicator.apply(partialParams));
    }
    invokeBatchImportFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchImportFindings(this.ops["BatchImportFindings"].applicator.apply(partialParams));
    }
    invokeBatchUpdateFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdateFindings(this.ops["BatchUpdateFindings"].applicator.apply(partialParams));
    }
    invokeCreateActionTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createActionTarget(this.ops["CreateActionTarget"].applicator.apply(partialParams));
    }
    invokeCreateFindingAggregator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFindingAggregator(this.ops["CreateFindingAggregator"].applicator.apply(partialParams));
    }
    invokeCreateInsight(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInsight(this.ops["CreateInsight"].applicator.apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMembers(this.ops["CreateMembers"].applicator.apply(partialParams));
    }
    invokeDeclineInvitations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineInvitations(this.ops["DeclineInvitations"].applicator.apply(partialParams));
    }
    invokeDeleteActionTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteActionTarget(this.ops["DeleteActionTarget"].applicator.apply(partialParams));
    }
    invokeDeleteFindingAggregator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFindingAggregator(this.ops["DeleteFindingAggregator"].applicator.apply(partialParams));
    }
    invokeDeleteInsight(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInsight(this.ops["DeleteInsight"].applicator.apply(partialParams));
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
    invokeDescribeStandardsControls(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStandardsControls(this.ops["DescribeStandardsControls"].applicator.apply(partialParams));
    }
    invokeDisableImportFindingsForProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableImportFindingsForProduct(this.ops["DisableImportFindingsForProduct"].applicator.apply(partialParams));
    }
    invokeDisableOrganizationAdminAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableOrganizationAdminAccount(this.ops["DisableOrganizationAdminAccount"].applicator.apply(partialParams));
    }
    invokeDisassociateMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMembers(this.ops["DisassociateMembers"].applicator.apply(partialParams));
    }
    invokeEnableImportFindingsForProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableImportFindingsForProduct(this.ops["EnableImportFindingsForProduct"].applicator.apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].applicator.apply(partialParams));
    }
    invokeGetFindingAggregator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindingAggregator(this.ops["GetFindingAggregator"].applicator.apply(partialParams));
    }
    invokeGetInsightResults(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsightResults(this.ops["GetInsightResults"].applicator.apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMembers(this.ops["GetMembers"].applicator.apply(partialParams));
    }
    invokeInviteMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteMembers(this.ops["InviteMembers"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
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
    invokeUpdateActionTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateActionTarget(this.ops["UpdateActionTarget"].applicator.apply(partialParams));
    }
    invokeUpdateFindingAggregator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindingAggregator(this.ops["UpdateFindingAggregator"].applicator.apply(partialParams));
    }
    invokeUpdateFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindings(this.ops["UpdateFindings"].applicator.apply(partialParams));
    }
    invokeUpdateInsight(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInsight(this.ops["UpdateInsight"].applicator.apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateStandardsControl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStandardsControl(this.ops["UpdateStandardsControl"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
