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
class default_1 extends aws.iot.ThingType {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Iot();
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
    invokeAddThingToBillingGroup(partialParams) {
        this.boot();
        return this.client.addThingToBillingGroup(this.ops["AddThingToBillingGroup"].apply(partialParams));
    }
    invokeAddThingToThingGroup(partialParams) {
        this.boot();
        return this.client.addThingToThingGroup(this.ops["AddThingToThingGroup"].apply(partialParams));
    }
    invokeAssociateTargetsWithJob(partialParams) {
        this.boot();
        return this.client.associateTargetsWithJob(this.ops["AssociateTargetsWithJob"].apply(partialParams));
    }
    invokeAttachSecurityProfile(partialParams) {
        this.boot();
        return this.client.attachSecurityProfile(this.ops["AttachSecurityProfile"].apply(partialParams));
    }
    invokeAttachThingPrincipal(partialParams) {
        this.boot();
        return this.client.attachThingPrincipal(this.ops["AttachThingPrincipal"].apply(partialParams));
    }
    invokeCancelAuditMitigationActionsTask(partialParams) {
        this.boot();
        return this.client.cancelAuditMitigationActionsTask(this.ops["CancelAuditMitigationActionsTask"].apply(partialParams));
    }
    invokeCancelAuditTask(partialParams) {
        this.boot();
        return this.client.cancelAuditTask(this.ops["CancelAuditTask"].apply(partialParams));
    }
    invokeCancelDetectMitigationActionsTask(partialParams) {
        this.boot();
        return this.client.cancelDetectMitigationActionsTask(this.ops["CancelDetectMitigationActionsTask"].apply(partialParams));
    }
    invokeCancelJob(partialParams) {
        this.boot();
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeClearDefaultAuthorizer(partialParams) {
        this.boot();
        return this.client.clearDefaultAuthorizer(this.ops["ClearDefaultAuthorizer"].apply(partialParams));
    }
    invokeConfirmTopicRuleDestination(partialParams) {
        this.boot();
        return this.client.confirmTopicRuleDestination(this.ops["ConfirmTopicRuleDestination"].apply(partialParams));
    }
    invokeCreateAuditSuppression(partialParams) {
        this.boot();
        return this.client.createAuditSuppression(this.ops["CreateAuditSuppression"].apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        this.boot();
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].apply(partialParams));
    }
    invokeCreateBillingGroup(partialParams) {
        this.boot();
        return this.client.createBillingGroup(this.ops["CreateBillingGroup"].apply(partialParams));
    }
    invokeCreateCertificateFromCsr(partialParams) {
        this.boot();
        return this.client.createCertificateFromCsr(this.ops["CreateCertificateFromCsr"].apply(partialParams));
    }
    invokeCreateCustomMetric(partialParams) {
        this.boot();
        return this.client.createCustomMetric(this.ops["CreateCustomMetric"].apply(partialParams));
    }
    invokeCreateDimension(partialParams) {
        this.boot();
        return this.client.createDimension(this.ops["CreateDimension"].apply(partialParams));
    }
    invokeCreateDomainConfiguration(partialParams) {
        this.boot();
        return this.client.createDomainConfiguration(this.ops["CreateDomainConfiguration"].apply(partialParams));
    }
    invokeCreateDynamicThingGroup(partialParams) {
        this.boot();
        return this.client.createDynamicThingGroup(this.ops["CreateDynamicThingGroup"].apply(partialParams));
    }
    invokeCreateFleetMetric(partialParams) {
        this.boot();
        return this.client.createFleetMetric(this.ops["CreateFleetMetric"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateJobTemplate(partialParams) {
        this.boot();
        return this.client.createJobTemplate(this.ops["CreateJobTemplate"].apply(partialParams));
    }
    invokeCreateKeysAndCertificate(partialParams) {
        this.boot();
        return this.client.createKeysAndCertificate(this.ops["CreateKeysAndCertificate"].apply(partialParams));
    }
    invokeCreateMitigationAction(partialParams) {
        this.boot();
        return this.client.createMitigationAction(this.ops["CreateMitigationAction"].apply(partialParams));
    }
    invokeCreateOTAUpdate(partialParams) {
        this.boot();
        return this.client.createOTAUpdate(this.ops["CreateOTAUpdate"].apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        this.boot();
        return this.client.createPolicy(this.ops["CreatePolicy"].apply(partialParams));
    }
    invokeCreatePolicyVersion(partialParams) {
        this.boot();
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].apply(partialParams));
    }
    invokeCreateProvisioningClaim(partialParams) {
        this.boot();
        return this.client.createProvisioningClaim(this.ops["CreateProvisioningClaim"].apply(partialParams));
    }
    invokeCreateProvisioningTemplate(partialParams) {
        this.boot();
        return this.client.createProvisioningTemplate(this.ops["CreateProvisioningTemplate"].apply(partialParams));
    }
    invokeCreateProvisioningTemplateVersion(partialParams) {
        this.boot();
        return this.client.createProvisioningTemplateVersion(this.ops["CreateProvisioningTemplateVersion"].apply(partialParams));
    }
    invokeCreateRoleAlias(partialParams) {
        this.boot();
        return this.client.createRoleAlias(this.ops["CreateRoleAlias"].apply(partialParams));
    }
    invokeCreateScheduledAudit(partialParams) {
        this.boot();
        return this.client.createScheduledAudit(this.ops["CreateScheduledAudit"].apply(partialParams));
    }
    invokeCreateSecurityProfile(partialParams) {
        this.boot();
        return this.client.createSecurityProfile(this.ops["CreateSecurityProfile"].apply(partialParams));
    }
    invokeCreateStream(partialParams) {
        this.boot();
        return this.client.createStream(this.ops["CreateStream"].apply(partialParams));
    }
    invokeCreateThing(partialParams) {
        this.boot();
        return this.client.createThing(this.ops["CreateThing"].apply(partialParams));
    }
    invokeCreateThingGroup(partialParams) {
        this.boot();
        return this.client.createThingGroup(this.ops["CreateThingGroup"].apply(partialParams));
    }
    invokeCreateThingType(partialParams) {
        this.boot();
        return this.client.createThingType(this.ops["CreateThingType"].apply(partialParams));
    }
    invokeCreateTopicRuleDestination(partialParams) {
        this.boot();
        return this.client.createTopicRuleDestination(this.ops["CreateTopicRuleDestination"].apply(partialParams));
    }
    invokeDeleteAccountAuditConfiguration(partialParams) {
        this.boot();
        return this.client.deleteAccountAuditConfiguration(this.ops["DeleteAccountAuditConfiguration"].apply(partialParams));
    }
    invokeDeleteAuditSuppression(partialParams) {
        this.boot();
        return this.client.deleteAuditSuppression(this.ops["DeleteAuditSuppression"].apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        this.boot();
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].apply(partialParams));
    }
    invokeDeleteBillingGroup(partialParams) {
        this.boot();
        return this.client.deleteBillingGroup(this.ops["DeleteBillingGroup"].apply(partialParams));
    }
    invokeDeleteCACertificate(partialParams) {
        this.boot();
        return this.client.deleteCACertificate(this.ops["DeleteCACertificate"].apply(partialParams));
    }
    invokeDeleteCustomMetric(partialParams) {
        this.boot();
        return this.client.deleteCustomMetric(this.ops["DeleteCustomMetric"].apply(partialParams));
    }
    invokeDeleteDimension(partialParams) {
        this.boot();
        return this.client.deleteDimension(this.ops["DeleteDimension"].apply(partialParams));
    }
    invokeDeleteDomainConfiguration(partialParams) {
        this.boot();
        return this.client.deleteDomainConfiguration(this.ops["DeleteDomainConfiguration"].apply(partialParams));
    }
    invokeDeleteDynamicThingGroup(partialParams) {
        this.boot();
        return this.client.deleteDynamicThingGroup(this.ops["DeleteDynamicThingGroup"].apply(partialParams));
    }
    invokeDeleteMitigationAction(partialParams) {
        this.boot();
        return this.client.deleteMitigationAction(this.ops["DeleteMitigationAction"].apply(partialParams));
    }
    invokeDeleteOTAUpdate(partialParams) {
        this.boot();
        return this.client.deleteOTAUpdate(this.ops["DeleteOTAUpdate"].apply(partialParams));
    }
    invokeDeleteProvisioningTemplate(partialParams) {
        this.boot();
        return this.client.deleteProvisioningTemplate(this.ops["DeleteProvisioningTemplate"].apply(partialParams));
    }
    invokeDeleteProvisioningTemplateVersion(partialParams) {
        this.boot();
        return this.client.deleteProvisioningTemplateVersion(this.ops["DeleteProvisioningTemplateVersion"].apply(partialParams));
    }
    invokeDeleteRegistrationCode(partialParams) {
        this.boot();
        return this.client.deleteRegistrationCode(this.ops["DeleteRegistrationCode"].apply(partialParams));
    }
    invokeDeleteRoleAlias(partialParams) {
        this.boot();
        return this.client.deleteRoleAlias(this.ops["DeleteRoleAlias"].apply(partialParams));
    }
    invokeDeleteScheduledAudit(partialParams) {
        this.boot();
        return this.client.deleteScheduledAudit(this.ops["DeleteScheduledAudit"].apply(partialParams));
    }
    invokeDeleteSecurityProfile(partialParams) {
        this.boot();
        return this.client.deleteSecurityProfile(this.ops["DeleteSecurityProfile"].apply(partialParams));
    }
    invokeDeleteStream(partialParams) {
        this.boot();
        return this.client.deleteStream(this.ops["DeleteStream"].apply(partialParams));
    }
    invokeDeleteThing(partialParams) {
        this.boot();
        return this.client.deleteThing(this.ops["DeleteThing"].apply(partialParams));
    }
    invokeDeleteThingGroup(partialParams) {
        this.boot();
        return this.client.deleteThingGroup(this.ops["DeleteThingGroup"].apply(partialParams));
    }
    invokeDeleteThingType(partialParams) {
        this.boot();
        return this.client.deleteThingType(this.ops["DeleteThingType"].apply(partialParams));
    }
    invokeDeleteTopicRuleDestination(partialParams) {
        this.boot();
        return this.client.deleteTopicRuleDestination(this.ops["DeleteTopicRuleDestination"].apply(partialParams));
    }
    invokeDeprecateThingType(partialParams) {
        this.boot();
        return this.client.deprecateThingType(this.ops["DeprecateThingType"].apply(partialParams));
    }
    invokeDescribeAccountAuditConfiguration(partialParams) {
        this.boot();
        return this.client.describeAccountAuditConfiguration(this.ops["DescribeAccountAuditConfiguration"].apply(partialParams));
    }
    invokeDescribeAuditFinding(partialParams) {
        this.boot();
        return this.client.describeAuditFinding(this.ops["DescribeAuditFinding"].apply(partialParams));
    }
    invokeDescribeAuditMitigationActionsTask(partialParams) {
        this.boot();
        return this.client.describeAuditMitigationActionsTask(this.ops["DescribeAuditMitigationActionsTask"].apply(partialParams));
    }
    invokeDescribeAuditSuppression(partialParams) {
        this.boot();
        return this.client.describeAuditSuppression(this.ops["DescribeAuditSuppression"].apply(partialParams));
    }
    invokeDescribeAuditTask(partialParams) {
        this.boot();
        return this.client.describeAuditTask(this.ops["DescribeAuditTask"].apply(partialParams));
    }
    invokeDescribeAuthorizer(partialParams) {
        this.boot();
        return this.client.describeAuthorizer(this.ops["DescribeAuthorizer"].apply(partialParams));
    }
    invokeDescribeBillingGroup(partialParams) {
        this.boot();
        return this.client.describeBillingGroup(this.ops["DescribeBillingGroup"].apply(partialParams));
    }
    invokeDescribeCACertificate(partialParams) {
        this.boot();
        return this.client.describeCACertificate(this.ops["DescribeCACertificate"].apply(partialParams));
    }
    invokeDescribeCertificate(partialParams) {
        this.boot();
        return this.client.describeCertificate(this.ops["DescribeCertificate"].apply(partialParams));
    }
    invokeDescribeCustomMetric(partialParams) {
        this.boot();
        return this.client.describeCustomMetric(this.ops["DescribeCustomMetric"].apply(partialParams));
    }
    invokeDescribeDefaultAuthorizer(partialParams) {
        this.boot();
        return this.client.describeDefaultAuthorizer(this.ops["DescribeDefaultAuthorizer"].apply(partialParams));
    }
    invokeDescribeDetectMitigationActionsTask(partialParams) {
        this.boot();
        return this.client.describeDetectMitigationActionsTask(this.ops["DescribeDetectMitigationActionsTask"].apply(partialParams));
    }
    invokeDescribeDimension(partialParams) {
        this.boot();
        return this.client.describeDimension(this.ops["DescribeDimension"].apply(partialParams));
    }
    invokeDescribeDomainConfiguration(partialParams) {
        this.boot();
        return this.client.describeDomainConfiguration(this.ops["DescribeDomainConfiguration"].apply(partialParams));
    }
    invokeDescribeEndpoint(partialParams) {
        this.boot();
        return this.client.describeEndpoint(this.ops["DescribeEndpoint"].apply(partialParams));
    }
    invokeDescribeEventConfigurations(partialParams) {
        this.boot();
        return this.client.describeEventConfigurations(this.ops["DescribeEventConfigurations"].apply(partialParams));
    }
    invokeDescribeFleetMetric(partialParams) {
        this.boot();
        return this.client.describeFleetMetric(this.ops["DescribeFleetMetric"].apply(partialParams));
    }
    invokeDescribeIndex(partialParams) {
        this.boot();
        return this.client.describeIndex(this.ops["DescribeIndex"].apply(partialParams));
    }
    invokeDescribeJob(partialParams) {
        this.boot();
        return this.client.describeJob(this.ops["DescribeJob"].apply(partialParams));
    }
    invokeDescribeJobExecution(partialParams) {
        this.boot();
        return this.client.describeJobExecution(this.ops["DescribeJobExecution"].apply(partialParams));
    }
    invokeDescribeJobTemplate(partialParams) {
        this.boot();
        return this.client.describeJobTemplate(this.ops["DescribeJobTemplate"].apply(partialParams));
    }
    invokeDescribeManagedJobTemplate(partialParams) {
        this.boot();
        return this.client.describeManagedJobTemplate(this.ops["DescribeManagedJobTemplate"].apply(partialParams));
    }
    invokeDescribeMitigationAction(partialParams) {
        this.boot();
        return this.client.describeMitigationAction(this.ops["DescribeMitigationAction"].apply(partialParams));
    }
    invokeDescribeProvisioningTemplate(partialParams) {
        this.boot();
        return this.client.describeProvisioningTemplate(this.ops["DescribeProvisioningTemplate"].apply(partialParams));
    }
    invokeDescribeProvisioningTemplateVersion(partialParams) {
        this.boot();
        return this.client.describeProvisioningTemplateVersion(this.ops["DescribeProvisioningTemplateVersion"].apply(partialParams));
    }
    invokeDescribeRoleAlias(partialParams) {
        this.boot();
        return this.client.describeRoleAlias(this.ops["DescribeRoleAlias"].apply(partialParams));
    }
    invokeDescribeScheduledAudit(partialParams) {
        this.boot();
        return this.client.describeScheduledAudit(this.ops["DescribeScheduledAudit"].apply(partialParams));
    }
    invokeDescribeSecurityProfile(partialParams) {
        this.boot();
        return this.client.describeSecurityProfile(this.ops["DescribeSecurityProfile"].apply(partialParams));
    }
    invokeDescribeStream(partialParams) {
        this.boot();
        return this.client.describeStream(this.ops["DescribeStream"].apply(partialParams));
    }
    invokeDescribeThing(partialParams) {
        this.boot();
        return this.client.describeThing(this.ops["DescribeThing"].apply(partialParams));
    }
    invokeDescribeThingGroup(partialParams) {
        this.boot();
        return this.client.describeThingGroup(this.ops["DescribeThingGroup"].apply(partialParams));
    }
    invokeDescribeThingRegistrationTask(partialParams) {
        this.boot();
        return this.client.describeThingRegistrationTask(this.ops["DescribeThingRegistrationTask"].apply(partialParams));
    }
    invokeDescribeThingType(partialParams) {
        this.boot();
        return this.client.describeThingType(this.ops["DescribeThingType"].apply(partialParams));
    }
    invokeDetachSecurityProfile(partialParams) {
        this.boot();
        return this.client.detachSecurityProfile(this.ops["DetachSecurityProfile"].apply(partialParams));
    }
    invokeDetachThingPrincipal(partialParams) {
        this.boot();
        return this.client.detachThingPrincipal(this.ops["DetachThingPrincipal"].apply(partialParams));
    }
    invokeGetBehaviorModelTrainingSummaries(partialParams) {
        this.boot();
        return this.client.getBehaviorModelTrainingSummaries(this.ops["GetBehaviorModelTrainingSummaries"].apply(partialParams));
    }
    invokeGetBucketsAggregation(partialParams) {
        this.boot();
        return this.client.getBucketsAggregation(this.ops["GetBucketsAggregation"].apply(partialParams));
    }
    invokeGetCardinality(partialParams) {
        this.boot();
        return this.client.getCardinality(this.ops["GetCardinality"].apply(partialParams));
    }
    invokeGetEffectivePolicies(partialParams) {
        this.boot();
        return this.client.getEffectivePolicies(this.ops["GetEffectivePolicies"].apply(partialParams));
    }
    invokeGetIndexingConfiguration(partialParams) {
        this.boot();
        return this.client.getIndexingConfiguration(this.ops["GetIndexingConfiguration"].apply(partialParams));
    }
    invokeGetJobDocument(partialParams) {
        this.boot();
        return this.client.getJobDocument(this.ops["GetJobDocument"].apply(partialParams));
    }
    invokeGetLoggingOptions(partialParams) {
        this.boot();
        return this.client.getLoggingOptions(this.ops["GetLoggingOptions"].apply(partialParams));
    }
    invokeGetOTAUpdate(partialParams) {
        this.boot();
        return this.client.getOTAUpdate(this.ops["GetOTAUpdate"].apply(partialParams));
    }
    invokeGetPercentiles(partialParams) {
        this.boot();
        return this.client.getPercentiles(this.ops["GetPercentiles"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        this.boot();
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].apply(partialParams));
    }
    invokeGetRegistrationCode(partialParams) {
        this.boot();
        return this.client.getRegistrationCode(this.ops["GetRegistrationCode"].apply(partialParams));
    }
    invokeGetStatistics(partialParams) {
        this.boot();
        return this.client.getStatistics(this.ops["GetStatistics"].apply(partialParams));
    }
    invokeGetTopicRule(partialParams) {
        this.boot();
        return this.client.getTopicRule(this.ops["GetTopicRule"].apply(partialParams));
    }
    invokeGetTopicRuleDestination(partialParams) {
        this.boot();
        return this.client.getTopicRuleDestination(this.ops["GetTopicRuleDestination"].apply(partialParams));
    }
    invokeGetV2LoggingOptions(partialParams) {
        this.boot();
        return this.client.getV2LoggingOptions(this.ops["GetV2LoggingOptions"].apply(partialParams));
    }
    invokeListActiveViolations(partialParams) {
        this.boot();
        return this.client.listActiveViolations(this.ops["ListActiveViolations"].apply(partialParams));
    }
    invokeListAttachedPolicies(partialParams) {
        this.boot();
        return this.client.listAttachedPolicies(this.ops["ListAttachedPolicies"].apply(partialParams));
    }
    invokeListAuditFindings(partialParams) {
        this.boot();
        return this.client.listAuditFindings(this.ops["ListAuditFindings"].apply(partialParams));
    }
    invokeListAuditMitigationActionsExecutions(partialParams) {
        this.boot();
        return this.client.listAuditMitigationActionsExecutions(this.ops["ListAuditMitigationActionsExecutions"].apply(partialParams));
    }
    invokeListAuditMitigationActionsTasks(partialParams) {
        this.boot();
        return this.client.listAuditMitigationActionsTasks(this.ops["ListAuditMitigationActionsTasks"].apply(partialParams));
    }
    invokeListAuditSuppressions(partialParams) {
        this.boot();
        return this.client.listAuditSuppressions(this.ops["ListAuditSuppressions"].apply(partialParams));
    }
    invokeListAuditTasks(partialParams) {
        this.boot();
        return this.client.listAuditTasks(this.ops["ListAuditTasks"].apply(partialParams));
    }
    invokeListAuthorizers(partialParams) {
        this.boot();
        return this.client.listAuthorizers(this.ops["ListAuthorizers"].apply(partialParams));
    }
    invokeListBillingGroups(partialParams) {
        this.boot();
        return this.client.listBillingGroups(this.ops["ListBillingGroups"].apply(partialParams));
    }
    invokeListCACertificates(partialParams) {
        this.boot();
        return this.client.listCACertificates(this.ops["ListCACertificates"].apply(partialParams));
    }
    invokeListCertificates(partialParams) {
        this.boot();
        return this.client.listCertificates(this.ops["ListCertificates"].apply(partialParams));
    }
    invokeListCertificatesByCA(partialParams) {
        this.boot();
        return this.client.listCertificatesByCA(this.ops["ListCertificatesByCA"].apply(partialParams));
    }
    invokeListCustomMetrics(partialParams) {
        this.boot();
        return this.client.listCustomMetrics(this.ops["ListCustomMetrics"].apply(partialParams));
    }
    invokeListDetectMitigationActionsExecutions(partialParams) {
        this.boot();
        return this.client.listDetectMitigationActionsExecutions(this.ops["ListDetectMitigationActionsExecutions"].apply(partialParams));
    }
    invokeListDetectMitigationActionsTasks(partialParams) {
        this.boot();
        return this.client.listDetectMitigationActionsTasks(this.ops["ListDetectMitigationActionsTasks"].apply(partialParams));
    }
    invokeListDimensions(partialParams) {
        this.boot();
        return this.client.listDimensions(this.ops["ListDimensions"].apply(partialParams));
    }
    invokeListDomainConfigurations(partialParams) {
        this.boot();
        return this.client.listDomainConfigurations(this.ops["ListDomainConfigurations"].apply(partialParams));
    }
    invokeListFleetMetrics(partialParams) {
        this.boot();
        return this.client.listFleetMetrics(this.ops["ListFleetMetrics"].apply(partialParams));
    }
    invokeListIndices(partialParams) {
        this.boot();
        return this.client.listIndices(this.ops["ListIndices"].apply(partialParams));
    }
    invokeListJobExecutionsForJob(partialParams) {
        this.boot();
        return this.client.listJobExecutionsForJob(this.ops["ListJobExecutionsForJob"].apply(partialParams));
    }
    invokeListJobExecutionsForThing(partialParams) {
        this.boot();
        return this.client.listJobExecutionsForThing(this.ops["ListJobExecutionsForThing"].apply(partialParams));
    }
    invokeListJobTemplates(partialParams) {
        this.boot();
        return this.client.listJobTemplates(this.ops["ListJobTemplates"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListManagedJobTemplates(partialParams) {
        this.boot();
        return this.client.listManagedJobTemplates(this.ops["ListManagedJobTemplates"].apply(partialParams));
    }
    invokeListMitigationActions(partialParams) {
        this.boot();
        return this.client.listMitigationActions(this.ops["ListMitigationActions"].apply(partialParams));
    }
    invokeListOTAUpdates(partialParams) {
        this.boot();
        return this.client.listOTAUpdates(this.ops["ListOTAUpdates"].apply(partialParams));
    }
    invokeListOutgoingCertificates(partialParams) {
        this.boot();
        return this.client.listOutgoingCertificates(this.ops["ListOutgoingCertificates"].apply(partialParams));
    }
    invokeListPolicies(partialParams) {
        this.boot();
        return this.client.listPolicies(this.ops["ListPolicies"].apply(partialParams));
    }
    invokeListPolicyPrincipals(partialParams) {
        this.boot();
        return this.client.listPolicyPrincipals(this.ops["ListPolicyPrincipals"].apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        this.boot();
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].apply(partialParams));
    }
    invokeListPrincipalPolicies(partialParams) {
        this.boot();
        return this.client.listPrincipalPolicies(this.ops["ListPrincipalPolicies"].apply(partialParams));
    }
    invokeListPrincipalThings(partialParams) {
        this.boot();
        return this.client.listPrincipalThings(this.ops["ListPrincipalThings"].apply(partialParams));
    }
    invokeListProvisioningTemplateVersions(partialParams) {
        this.boot();
        return this.client.listProvisioningTemplateVersions(this.ops["ListProvisioningTemplateVersions"].apply(partialParams));
    }
    invokeListProvisioningTemplates(partialParams) {
        this.boot();
        return this.client.listProvisioningTemplates(this.ops["ListProvisioningTemplates"].apply(partialParams));
    }
    invokeListRoleAliases(partialParams) {
        this.boot();
        return this.client.listRoleAliases(this.ops["ListRoleAliases"].apply(partialParams));
    }
    invokeListScheduledAudits(partialParams) {
        this.boot();
        return this.client.listScheduledAudits(this.ops["ListScheduledAudits"].apply(partialParams));
    }
    invokeListSecurityProfiles(partialParams) {
        this.boot();
        return this.client.listSecurityProfiles(this.ops["ListSecurityProfiles"].apply(partialParams));
    }
    invokeListSecurityProfilesForTarget(partialParams) {
        this.boot();
        return this.client.listSecurityProfilesForTarget(this.ops["ListSecurityProfilesForTarget"].apply(partialParams));
    }
    invokeListStreams(partialParams) {
        this.boot();
        return this.client.listStreams(this.ops["ListStreams"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTargetsForPolicy(partialParams) {
        this.boot();
        return this.client.listTargetsForPolicy(this.ops["ListTargetsForPolicy"].apply(partialParams));
    }
    invokeListTargetsForSecurityProfile(partialParams) {
        this.boot();
        return this.client.listTargetsForSecurityProfile(this.ops["ListTargetsForSecurityProfile"].apply(partialParams));
    }
    invokeListThingGroups(partialParams) {
        this.boot();
        return this.client.listThingGroups(this.ops["ListThingGroups"].apply(partialParams));
    }
    invokeListThingGroupsForThing(partialParams) {
        this.boot();
        return this.client.listThingGroupsForThing(this.ops["ListThingGroupsForThing"].apply(partialParams));
    }
    invokeListThingPrincipals(partialParams) {
        this.boot();
        return this.client.listThingPrincipals(this.ops["ListThingPrincipals"].apply(partialParams));
    }
    invokeListThingRegistrationTaskReports(partialParams) {
        this.boot();
        return this.client.listThingRegistrationTaskReports(this.ops["ListThingRegistrationTaskReports"].apply(partialParams));
    }
    invokeListThingRegistrationTasks(partialParams) {
        this.boot();
        return this.client.listThingRegistrationTasks(this.ops["ListThingRegistrationTasks"].apply(partialParams));
    }
    invokeListThingTypes(partialParams) {
        this.boot();
        return this.client.listThingTypes(this.ops["ListThingTypes"].apply(partialParams));
    }
    invokeListThings(partialParams) {
        this.boot();
        return this.client.listThings(this.ops["ListThings"].apply(partialParams));
    }
    invokeListThingsInBillingGroup(partialParams) {
        this.boot();
        return this.client.listThingsInBillingGroup(this.ops["ListThingsInBillingGroup"].apply(partialParams));
    }
    invokeListThingsInThingGroup(partialParams) {
        this.boot();
        return this.client.listThingsInThingGroup(this.ops["ListThingsInThingGroup"].apply(partialParams));
    }
    invokeListTopicRuleDestinations(partialParams) {
        this.boot();
        return this.client.listTopicRuleDestinations(this.ops["ListTopicRuleDestinations"].apply(partialParams));
    }
    invokeListTopicRules(partialParams) {
        this.boot();
        return this.client.listTopicRules(this.ops["ListTopicRules"].apply(partialParams));
    }
    invokeListV2LoggingLevels(partialParams) {
        this.boot();
        return this.client.listV2LoggingLevels(this.ops["ListV2LoggingLevels"].apply(partialParams));
    }
    invokeListViolationEvents(partialParams) {
        this.boot();
        return this.client.listViolationEvents(this.ops["ListViolationEvents"].apply(partialParams));
    }
    invokePutVerificationStateOnViolation(partialParams) {
        this.boot();
        return this.client.putVerificationStateOnViolation(this.ops["PutVerificationStateOnViolation"].apply(partialParams));
    }
    invokeRegisterCACertificate(partialParams) {
        this.boot();
        return this.client.registerCACertificate(this.ops["RegisterCACertificate"].apply(partialParams));
    }
    invokeRegisterCertificate(partialParams) {
        this.boot();
        return this.client.registerCertificate(this.ops["RegisterCertificate"].apply(partialParams));
    }
    invokeRegisterCertificateWithoutCA(partialParams) {
        this.boot();
        return this.client.registerCertificateWithoutCA(this.ops["RegisterCertificateWithoutCA"].apply(partialParams));
    }
    invokeRegisterThing(partialParams) {
        this.boot();
        return this.client.registerThing(this.ops["RegisterThing"].apply(partialParams));
    }
    invokeRemoveThingFromBillingGroup(partialParams) {
        this.boot();
        return this.client.removeThingFromBillingGroup(this.ops["RemoveThingFromBillingGroup"].apply(partialParams));
    }
    invokeRemoveThingFromThingGroup(partialParams) {
        this.boot();
        return this.client.removeThingFromThingGroup(this.ops["RemoveThingFromThingGroup"].apply(partialParams));
    }
    invokeSearchIndex(partialParams) {
        this.boot();
        return this.client.searchIndex(this.ops["SearchIndex"].apply(partialParams));
    }
    invokeSetDefaultAuthorizer(partialParams) {
        this.boot();
        return this.client.setDefaultAuthorizer(this.ops["SetDefaultAuthorizer"].apply(partialParams));
    }
    invokeStartAuditMitigationActionsTask(partialParams) {
        this.boot();
        return this.client.startAuditMitigationActionsTask(this.ops["StartAuditMitigationActionsTask"].apply(partialParams));
    }
    invokeStartDetectMitigationActionsTask(partialParams) {
        this.boot();
        return this.client.startDetectMitigationActionsTask(this.ops["StartDetectMitigationActionsTask"].apply(partialParams));
    }
    invokeStartOnDemandAuditTask(partialParams) {
        this.boot();
        return this.client.startOnDemandAuditTask(this.ops["StartOnDemandAuditTask"].apply(partialParams));
    }
    invokeStartThingRegistrationTask(partialParams) {
        this.boot();
        return this.client.startThingRegistrationTask(this.ops["StartThingRegistrationTask"].apply(partialParams));
    }
    invokeStopThingRegistrationTask(partialParams) {
        this.boot();
        return this.client.stopThingRegistrationTask(this.ops["StopThingRegistrationTask"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestAuthorization(partialParams) {
        this.boot();
        return this.client.testAuthorization(this.ops["TestAuthorization"].apply(partialParams));
    }
    invokeTestInvokeAuthorizer(partialParams) {
        this.boot();
        return this.client.testInvokeAuthorizer(this.ops["TestInvokeAuthorizer"].apply(partialParams));
    }
    invokeTransferCertificate(partialParams) {
        this.boot();
        return this.client.transferCertificate(this.ops["TransferCertificate"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccountAuditConfiguration(partialParams) {
        this.boot();
        return this.client.updateAccountAuditConfiguration(this.ops["UpdateAccountAuditConfiguration"].apply(partialParams));
    }
    invokeUpdateAuditSuppression(partialParams) {
        this.boot();
        return this.client.updateAuditSuppression(this.ops["UpdateAuditSuppression"].apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        this.boot();
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].apply(partialParams));
    }
    invokeUpdateBillingGroup(partialParams) {
        this.boot();
        return this.client.updateBillingGroup(this.ops["UpdateBillingGroup"].apply(partialParams));
    }
    invokeUpdateCustomMetric(partialParams) {
        this.boot();
        return this.client.updateCustomMetric(this.ops["UpdateCustomMetric"].apply(partialParams));
    }
    invokeUpdateDimension(partialParams) {
        this.boot();
        return this.client.updateDimension(this.ops["UpdateDimension"].apply(partialParams));
    }
    invokeUpdateDomainConfiguration(partialParams) {
        this.boot();
        return this.client.updateDomainConfiguration(this.ops["UpdateDomainConfiguration"].apply(partialParams));
    }
    invokeUpdateDynamicThingGroup(partialParams) {
        this.boot();
        return this.client.updateDynamicThingGroup(this.ops["UpdateDynamicThingGroup"].apply(partialParams));
    }
    invokeUpdateEventConfigurations(partialParams) {
        this.boot();
        return this.client.updateEventConfigurations(this.ops["UpdateEventConfigurations"].apply(partialParams));
    }
    invokeUpdateIndexingConfiguration(partialParams) {
        this.boot();
        return this.client.updateIndexingConfiguration(this.ops["UpdateIndexingConfiguration"].apply(partialParams));
    }
    invokeUpdateMitigationAction(partialParams) {
        this.boot();
        return this.client.updateMitigationAction(this.ops["UpdateMitigationAction"].apply(partialParams));
    }
    invokeUpdateProvisioningTemplate(partialParams) {
        this.boot();
        return this.client.updateProvisioningTemplate(this.ops["UpdateProvisioningTemplate"].apply(partialParams));
    }
    invokeUpdateRoleAlias(partialParams) {
        this.boot();
        return this.client.updateRoleAlias(this.ops["UpdateRoleAlias"].apply(partialParams));
    }
    invokeUpdateScheduledAudit(partialParams) {
        this.boot();
        return this.client.updateScheduledAudit(this.ops["UpdateScheduledAudit"].apply(partialParams));
    }
    invokeUpdateSecurityProfile(partialParams) {
        this.boot();
        return this.client.updateSecurityProfile(this.ops["UpdateSecurityProfile"].apply(partialParams));
    }
    invokeUpdateStream(partialParams) {
        this.boot();
        return this.client.updateStream(this.ops["UpdateStream"].apply(partialParams));
    }
    invokeUpdateThing(partialParams) {
        this.boot();
        return this.client.updateThing(this.ops["UpdateThing"].apply(partialParams));
    }
    invokeUpdateThingGroup(partialParams) {
        this.boot();
        return this.client.updateThingGroup(this.ops["UpdateThingGroup"].apply(partialParams));
    }
    invokeUpdateThingGroupsForThing(partialParams) {
        this.boot();
        return this.client.updateThingGroupsForThing(this.ops["UpdateThingGroupsForThing"].apply(partialParams));
    }
    invokeUpdateTopicRuleDestination(partialParams) {
        this.boot();
        return this.client.updateTopicRuleDestination(this.ops["UpdateTopicRuleDestination"].apply(partialParams));
    }
    invokeValidateSecurityProfileBehaviors(partialParams) {
        this.boot();
        return this.client.validateSecurityProfileBehaviors(this.ops["ValidateSecurityProfileBehaviors"].apply(partialParams));
    }
}
exports.default = default_1;
