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
const schema = require("../apis/iot-2015-05-28.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.iot.RoleAlias {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Iot();
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
    invokeAcceptCertificateTransfer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptCertificateTransfer(this.ops["AcceptCertificateTransfer"].applicator.apply(partialParams));
    }
    invokeAssociateTargetsWithJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTargetsWithJob(this.ops["AssociateTargetsWithJob"].applicator.apply(partialParams));
    }
    invokeAttachPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachPolicy(this.ops["AttachPolicy"].applicator.apply(partialParams));
    }
    invokeAttachPrincipalPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachPrincipalPolicy(this.ops["AttachPrincipalPolicy"].applicator.apply(partialParams));
    }
    invokeAttachSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachSecurityProfile(this.ops["AttachSecurityProfile"].applicator.apply(partialParams));
    }
    invokeAttachThingPrincipal(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachThingPrincipal(this.ops["AttachThingPrincipal"].applicator.apply(partialParams));
    }
    invokeCancelAuditMitigationActionsTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelAuditMitigationActionsTask(this.ops["CancelAuditMitigationActionsTask"].applicator.apply(partialParams));
    }
    invokeCancelAuditTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelAuditTask(this.ops["CancelAuditTask"].applicator.apply(partialParams));
    }
    invokeCancelCertificateTransfer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCertificateTransfer(this.ops["CancelCertificateTransfer"].applicator.apply(partialParams));
    }
    invokeCancelDetectMitigationActionsTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelDetectMitigationActionsTask(this.ops["CancelDetectMitigationActionsTask"].applicator.apply(partialParams));
    }
    invokeCancelJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJob(this.ops["CancelJob"].applicator.apply(partialParams));
    }
    invokeCancelJobExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJobExecution(this.ops["CancelJobExecution"].applicator.apply(partialParams));
    }
    invokeConfirmTopicRuleDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmTopicRuleDestination(this.ops["ConfirmTopicRuleDestination"].applicator.apply(partialParams));
    }
    invokeCreateAuditSuppression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuditSuppression(this.ops["CreateAuditSuppression"].applicator.apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].applicator.apply(partialParams));
    }
    invokeCreateBillingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBillingGroup(this.ops["CreateBillingGroup"].applicator.apply(partialParams));
    }
    invokeCreateCertificateFromCsr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCertificateFromCsr(this.ops["CreateCertificateFromCsr"].applicator.apply(partialParams));
    }
    invokeCreateCustomMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomMetric(this.ops["CreateCustomMetric"].applicator.apply(partialParams));
    }
    invokeCreateDimension(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDimension(this.ops["CreateDimension"].applicator.apply(partialParams));
    }
    invokeCreateDomainConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainConfiguration(this.ops["CreateDomainConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateDynamicThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDynamicThingGroup(this.ops["CreateDynamicThingGroup"].applicator.apply(partialParams));
    }
    invokeCreateFleetMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleetMetric(this.ops["CreateFleetMetric"].applicator.apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].applicator.apply(partialParams));
    }
    invokeCreateJobTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJobTemplate(this.ops["CreateJobTemplate"].applicator.apply(partialParams));
    }
    invokeCreateMitigationAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMitigationAction(this.ops["CreateMitigationAction"].applicator.apply(partialParams));
    }
    invokeCreateOTAUpdate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOTAUpdate(this.ops["CreateOTAUpdate"].applicator.apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(this.ops["CreatePolicy"].applicator.apply(partialParams));
    }
    invokeCreatePolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].applicator.apply(partialParams));
    }
    invokeCreateProvisioningClaim(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningClaim(this.ops["CreateProvisioningClaim"].applicator.apply(partialParams));
    }
    invokeCreateProvisioningTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningTemplate(this.ops["CreateProvisioningTemplate"].applicator.apply(partialParams));
    }
    invokeCreateProvisioningTemplateVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningTemplateVersion(this.ops["CreateProvisioningTemplateVersion"].applicator.apply(partialParams));
    }
    invokeCreateRoleAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoleAlias(this.ops["CreateRoleAlias"].applicator.apply(partialParams));
    }
    invokeCreateScheduledAudit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createScheduledAudit(this.ops["CreateScheduledAudit"].applicator.apply(partialParams));
    }
    invokeCreateSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityProfile(this.ops["CreateSecurityProfile"].applicator.apply(partialParams));
    }
    invokeCreateStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStream(this.ops["CreateStream"].applicator.apply(partialParams));
    }
    invokeCreateThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThing(this.ops["CreateThing"].applicator.apply(partialParams));
    }
    invokeCreateThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThingGroup(this.ops["CreateThingGroup"].applicator.apply(partialParams));
    }
    invokeCreateThingType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThingType(this.ops["CreateThingType"].applicator.apply(partialParams));
    }
    invokeCreateTopicRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTopicRule(this.ops["CreateTopicRule"].applicator.apply(partialParams));
    }
    invokeCreateTopicRuleDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTopicRuleDestination(this.ops["CreateTopicRuleDestination"].applicator.apply(partialParams));
    }
    invokeDeleteAuditSuppression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuditSuppression(this.ops["DeleteAuditSuppression"].applicator.apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].applicator.apply(partialParams));
    }
    invokeDeleteBillingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBillingGroup(this.ops["DeleteBillingGroup"].applicator.apply(partialParams));
    }
    invokeDeleteCACertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCACertificate(this.ops["DeleteCACertificate"].applicator.apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteCustomMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomMetric(this.ops["DeleteCustomMetric"].applicator.apply(partialParams));
    }
    invokeDeleteDimension(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDimension(this.ops["DeleteDimension"].applicator.apply(partialParams));
    }
    invokeDeleteDomainConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainConfiguration(this.ops["DeleteDomainConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteDynamicThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDynamicThingGroup(this.ops["DeleteDynamicThingGroup"].applicator.apply(partialParams));
    }
    invokeDeleteFleetMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleetMetric(this.ops["DeleteFleetMetric"].applicator.apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJob(this.ops["DeleteJob"].applicator.apply(partialParams));
    }
    invokeDeleteJobExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJobExecution(this.ops["DeleteJobExecution"].applicator.apply(partialParams));
    }
    invokeDeleteJobTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJobTemplate(this.ops["DeleteJobTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteMitigationAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMitigationAction(this.ops["DeleteMitigationAction"].applicator.apply(partialParams));
    }
    invokeDeleteOTAUpdate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOTAUpdate(this.ops["DeleteOTAUpdate"].applicator.apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(this.ops["DeletePolicy"].applicator.apply(partialParams));
    }
    invokeDeletePolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicyVersion(this.ops["DeletePolicyVersion"].applicator.apply(partialParams));
    }
    invokeDeleteProvisioningTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisioningTemplate(this.ops["DeleteProvisioningTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteProvisioningTemplateVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisioningTemplateVersion(this.ops["DeleteProvisioningTemplateVersion"].applicator.apply(partialParams));
    }
    invokeDeleteRoleAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoleAlias(this.ops["DeleteRoleAlias"].applicator.apply(partialParams));
    }
    invokeDeleteScheduledAudit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScheduledAudit(this.ops["DeleteScheduledAudit"].applicator.apply(partialParams));
    }
    invokeDeleteSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecurityProfile(this.ops["DeleteSecurityProfile"].applicator.apply(partialParams));
    }
    invokeDeleteStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStream(this.ops["DeleteStream"].applicator.apply(partialParams));
    }
    invokeDeleteThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThing(this.ops["DeleteThing"].applicator.apply(partialParams));
    }
    invokeDeleteThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThingGroup(this.ops["DeleteThingGroup"].applicator.apply(partialParams));
    }
    invokeDeleteThingType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThingType(this.ops["DeleteThingType"].applicator.apply(partialParams));
    }
    invokeDeleteTopicRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTopicRule(this.ops["DeleteTopicRule"].applicator.apply(partialParams));
    }
    invokeDeleteTopicRuleDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTopicRuleDestination(this.ops["DeleteTopicRuleDestination"].applicator.apply(partialParams));
    }
    invokeDeleteV2LoggingLevel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteV2LoggingLevel(this.ops["DeleteV2LoggingLevel"].applicator.apply(partialParams));
    }
    invokeDeprecateThingType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateThingType(this.ops["DeprecateThingType"].applicator.apply(partialParams));
    }
    invokeDescribeAuditFinding(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditFinding(this.ops["DescribeAuditFinding"].applicator.apply(partialParams));
    }
    invokeDescribeAuditMitigationActionsTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditMitigationActionsTask(this.ops["DescribeAuditMitigationActionsTask"].applicator.apply(partialParams));
    }
    invokeDescribeAuditSuppression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditSuppression(this.ops["DescribeAuditSuppression"].applicator.apply(partialParams));
    }
    invokeDescribeAuditTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditTask(this.ops["DescribeAuditTask"].applicator.apply(partialParams));
    }
    invokeDescribeAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuthorizer(this.ops["DescribeAuthorizer"].applicator.apply(partialParams));
    }
    invokeDescribeBillingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBillingGroup(this.ops["DescribeBillingGroup"].applicator.apply(partialParams));
    }
    invokeDescribeCACertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCACertificate(this.ops["DescribeCACertificate"].applicator.apply(partialParams));
    }
    invokeDescribeCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCertificate(this.ops["DescribeCertificate"].applicator.apply(partialParams));
    }
    invokeDescribeCustomMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomMetric(this.ops["DescribeCustomMetric"].applicator.apply(partialParams));
    }
    invokeDescribeDetectMitigationActionsTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDetectMitigationActionsTask(this.ops["DescribeDetectMitigationActionsTask"].applicator.apply(partialParams));
    }
    invokeDescribeDimension(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDimension(this.ops["DescribeDimension"].applicator.apply(partialParams));
    }
    invokeDescribeDomainConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomainConfiguration(this.ops["DescribeDomainConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeFleetMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetMetric(this.ops["DescribeFleetMetric"].applicator.apply(partialParams));
    }
    invokeDescribeIndex(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIndex(this.ops["DescribeIndex"].applicator.apply(partialParams));
    }
    invokeDescribeJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJob(this.ops["DescribeJob"].applicator.apply(partialParams));
    }
    invokeDescribeJobExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJobExecution(this.ops["DescribeJobExecution"].applicator.apply(partialParams));
    }
    invokeDescribeJobTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJobTemplate(this.ops["DescribeJobTemplate"].applicator.apply(partialParams));
    }
    invokeDescribeManagedJobTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeManagedJobTemplate(this.ops["DescribeManagedJobTemplate"].applicator.apply(partialParams));
    }
    invokeDescribeMitigationAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMitigationAction(this.ops["DescribeMitigationAction"].applicator.apply(partialParams));
    }
    invokeDescribeProvisioningTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProvisioningTemplate(this.ops["DescribeProvisioningTemplate"].applicator.apply(partialParams));
    }
    invokeDescribeProvisioningTemplateVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProvisioningTemplateVersion(this.ops["DescribeProvisioningTemplateVersion"].applicator.apply(partialParams));
    }
    invokeDescribeRoleAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRoleAlias(this.ops["DescribeRoleAlias"].applicator.apply(partialParams));
    }
    invokeDescribeScheduledAudit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScheduledAudit(this.ops["DescribeScheduledAudit"].applicator.apply(partialParams));
    }
    invokeDescribeSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityProfile(this.ops["DescribeSecurityProfile"].applicator.apply(partialParams));
    }
    invokeDescribeStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStream(this.ops["DescribeStream"].applicator.apply(partialParams));
    }
    invokeDescribeThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThing(this.ops["DescribeThing"].applicator.apply(partialParams));
    }
    invokeDescribeThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThingGroup(this.ops["DescribeThingGroup"].applicator.apply(partialParams));
    }
    invokeDescribeThingRegistrationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThingRegistrationTask(this.ops["DescribeThingRegistrationTask"].applicator.apply(partialParams));
    }
    invokeDescribeThingType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThingType(this.ops["DescribeThingType"].applicator.apply(partialParams));
    }
    invokeDetachPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachPolicy(this.ops["DetachPolicy"].applicator.apply(partialParams));
    }
    invokeDetachPrincipalPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachPrincipalPolicy(this.ops["DetachPrincipalPolicy"].applicator.apply(partialParams));
    }
    invokeDetachSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachSecurityProfile(this.ops["DetachSecurityProfile"].applicator.apply(partialParams));
    }
    invokeDetachThingPrincipal(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachThingPrincipal(this.ops["DetachThingPrincipal"].applicator.apply(partialParams));
    }
    invokeDisableTopicRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableTopicRule(this.ops["DisableTopicRule"].applicator.apply(partialParams));
    }
    invokeEnableTopicRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableTopicRule(this.ops["EnableTopicRule"].applicator.apply(partialParams));
    }
    invokeGetBucketsAggregation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketsAggregation(this.ops["GetBucketsAggregation"].applicator.apply(partialParams));
    }
    invokeGetCardinality(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCardinality(this.ops["GetCardinality"].applicator.apply(partialParams));
    }
    invokeGetJobDocument(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobDocument(this.ops["GetJobDocument"].applicator.apply(partialParams));
    }
    invokeGetOTAUpdate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOTAUpdate(this.ops["GetOTAUpdate"].applicator.apply(partialParams));
    }
    invokeGetPercentiles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPercentiles(this.ops["GetPercentiles"].applicator.apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].applicator.apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].applicator.apply(partialParams));
    }
    invokeGetStatistics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStatistics(this.ops["GetStatistics"].applicator.apply(partialParams));
    }
    invokeGetTopicRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTopicRule(this.ops["GetTopicRule"].applicator.apply(partialParams));
    }
    invokeGetTopicRuleDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTopicRuleDestination(this.ops["GetTopicRuleDestination"].applicator.apply(partialParams));
    }
    invokeListAttachedPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedPolicies(this.ops["ListAttachedPolicies"].applicator.apply(partialParams));
    }
    invokeListAuditMitigationActionsExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAuditMitigationActionsExecutions(this.ops["ListAuditMitigationActionsExecutions"].applicator.apply(partialParams));
    }
    invokeListAuditMitigationActionsTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAuditMitigationActionsTasks(this.ops["ListAuditMitigationActionsTasks"].applicator.apply(partialParams));
    }
    invokeListAuditTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAuditTasks(this.ops["ListAuditTasks"].applicator.apply(partialParams));
    }
    invokeListCertificatesByCA(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCertificatesByCA(this.ops["ListCertificatesByCA"].applicator.apply(partialParams));
    }
    invokeListDetectMitigationActionsTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDetectMitigationActionsTasks(this.ops["ListDetectMitigationActionsTasks"].applicator.apply(partialParams));
    }
    invokeListJobExecutionsForJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobExecutionsForJob(this.ops["ListJobExecutionsForJob"].applicator.apply(partialParams));
    }
    invokeListJobExecutionsForThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobExecutionsForThing(this.ops["ListJobExecutionsForThing"].applicator.apply(partialParams));
    }
    invokeListPolicyPrincipals(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyPrincipals(this.ops["ListPolicyPrincipals"].applicator.apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].applicator.apply(partialParams));
    }
    invokeListPrincipalPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipalPolicies(this.ops["ListPrincipalPolicies"].applicator.apply(partialParams));
    }
    invokeListPrincipalThings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipalThings(this.ops["ListPrincipalThings"].applicator.apply(partialParams));
    }
    invokeListProvisioningTemplateVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisioningTemplateVersions(this.ops["ListProvisioningTemplateVersions"].applicator.apply(partialParams));
    }
    invokeListSecurityProfilesForTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityProfilesForTarget(this.ops["ListSecurityProfilesForTarget"].applicator.apply(partialParams));
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
    invokeListTargetsForSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTargetsForSecurityProfile(this.ops["ListTargetsForSecurityProfile"].applicator.apply(partialParams));
    }
    invokeListThingGroupsForThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingGroupsForThing(this.ops["ListThingGroupsForThing"].applicator.apply(partialParams));
    }
    invokeListThingPrincipals(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingPrincipals(this.ops["ListThingPrincipals"].applicator.apply(partialParams));
    }
    invokeListThingRegistrationTaskReports(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingRegistrationTaskReports(this.ops["ListThingRegistrationTaskReports"].applicator.apply(partialParams));
    }
    invokeListThingsInBillingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingsInBillingGroup(this.ops["ListThingsInBillingGroup"].applicator.apply(partialParams));
    }
    invokeListThingsInThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingsInThingGroup(this.ops["ListThingsInThingGroup"].applicator.apply(partialParams));
    }
    invokeListViolationEvents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listViolationEvents(this.ops["ListViolationEvents"].applicator.apply(partialParams));
    }
    invokePutVerificationStateOnViolation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVerificationStateOnViolation(this.ops["PutVerificationStateOnViolation"].applicator.apply(partialParams));
    }
    invokeRegisterCACertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCACertificate(this.ops["RegisterCACertificate"].applicator.apply(partialParams));
    }
    invokeRegisterCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCertificate(this.ops["RegisterCertificate"].applicator.apply(partialParams));
    }
    invokeRegisterCertificateWithoutCA(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCertificateWithoutCA(this.ops["RegisterCertificateWithoutCA"].applicator.apply(partialParams));
    }
    invokeRegisterThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerThing(this.ops["RegisterThing"].applicator.apply(partialParams));
    }
    invokeRejectCertificateTransfer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectCertificateTransfer(this.ops["RejectCertificateTransfer"].applicator.apply(partialParams));
    }
    invokeReplaceTopicRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceTopicRule(this.ops["ReplaceTopicRule"].applicator.apply(partialParams));
    }
    invokeSearchIndex(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchIndex(this.ops["SearchIndex"].applicator.apply(partialParams));
    }
    invokeSetDefaultAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultAuthorizer(this.ops["SetDefaultAuthorizer"].applicator.apply(partialParams));
    }
    invokeSetDefaultPolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultPolicyVersion(this.ops["SetDefaultPolicyVersion"].applicator.apply(partialParams));
    }
    invokeSetLoggingOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setLoggingOptions(this.ops["SetLoggingOptions"].applicator.apply(partialParams));
    }
    invokeSetV2LoggingLevel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setV2LoggingLevel(this.ops["SetV2LoggingLevel"].applicator.apply(partialParams));
    }
    invokeStartAuditMitigationActionsTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAuditMitigationActionsTask(this.ops["StartAuditMitigationActionsTask"].applicator.apply(partialParams));
    }
    invokeStartDetectMitigationActionsTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDetectMitigationActionsTask(this.ops["StartDetectMitigationActionsTask"].applicator.apply(partialParams));
    }
    invokeStartOnDemandAuditTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startOnDemandAuditTask(this.ops["StartOnDemandAuditTask"].applicator.apply(partialParams));
    }
    invokeStartThingRegistrationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startThingRegistrationTask(this.ops["StartThingRegistrationTask"].applicator.apply(partialParams));
    }
    invokeStopThingRegistrationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopThingRegistrationTask(this.ops["StopThingRegistrationTask"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTestAuthorization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testAuthorization(this.ops["TestAuthorization"].applicator.apply(partialParams));
    }
    invokeTestInvokeAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testInvokeAuthorizer(this.ops["TestInvokeAuthorizer"].applicator.apply(partialParams));
    }
    invokeTransferCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.transferCertificate(this.ops["TransferCertificate"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateAuditSuppression(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuditSuppression(this.ops["UpdateAuditSuppression"].applicator.apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].applicator.apply(partialParams));
    }
    invokeUpdateBillingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBillingGroup(this.ops["UpdateBillingGroup"].applicator.apply(partialParams));
    }
    invokeUpdateCACertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCACertificate(this.ops["UpdateCACertificate"].applicator.apply(partialParams));
    }
    invokeUpdateCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCertificate(this.ops["UpdateCertificate"].applicator.apply(partialParams));
    }
    invokeUpdateCustomMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomMetric(this.ops["UpdateCustomMetric"].applicator.apply(partialParams));
    }
    invokeUpdateDimension(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDimension(this.ops["UpdateDimension"].applicator.apply(partialParams));
    }
    invokeUpdateDomainConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainConfiguration(this.ops["UpdateDomainConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateDynamicThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDynamicThingGroup(this.ops["UpdateDynamicThingGroup"].applicator.apply(partialParams));
    }
    invokeUpdateFleetMetric(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetMetric(this.ops["UpdateFleetMetric"].applicator.apply(partialParams));
    }
    invokeUpdateJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJob(this.ops["UpdateJob"].applicator.apply(partialParams));
    }
    invokeUpdateMitigationAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMitigationAction(this.ops["UpdateMitigationAction"].applicator.apply(partialParams));
    }
    invokeUpdateProvisioningTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisioningTemplate(this.ops["UpdateProvisioningTemplate"].applicator.apply(partialParams));
    }
    invokeUpdateRoleAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoleAlias(this.ops["UpdateRoleAlias"].applicator.apply(partialParams));
    }
    invokeUpdateScheduledAudit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateScheduledAudit(this.ops["UpdateScheduledAudit"].applicator.apply(partialParams));
    }
    invokeUpdateSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSecurityProfile(this.ops["UpdateSecurityProfile"].applicator.apply(partialParams));
    }
    invokeUpdateStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStream(this.ops["UpdateStream"].applicator.apply(partialParams));
    }
    invokeUpdateThing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThing(this.ops["UpdateThing"].applicator.apply(partialParams));
    }
    invokeUpdateThingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThingGroup(this.ops["UpdateThingGroup"].applicator.apply(partialParams));
    }
    invokeUpdateTopicRuleDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTopicRuleDestination(this.ops["UpdateTopicRuleDestination"].applicator.apply(partialParams));
    }
    invokeValidateSecurityProfileBehaviors(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateSecurityProfileBehaviors(this.ops["ValidateSecurityProfileBehaviors"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
