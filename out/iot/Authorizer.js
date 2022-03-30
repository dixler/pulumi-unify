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
class default_1 extends aws.iot.Authorizer {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Iot();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/iot-2015-05-28.normal.json"), this.client);
    }
    invokeAcceptCertificateTransfer(partialParams) {
        return this.client.acceptCertificateTransfer(this.ops["AcceptCertificateTransfer"].apply(partialParams));
    }
    invokeAssociateTargetsWithJob(partialParams) {
        return this.client.associateTargetsWithJob(this.ops["AssociateTargetsWithJob"].apply(partialParams));
    }
    invokeAttachPolicy(partialParams) {
        return this.client.attachPolicy(this.ops["AttachPolicy"].apply(partialParams));
    }
    invokeAttachPrincipalPolicy(partialParams) {
        return this.client.attachPrincipalPolicy(this.ops["AttachPrincipalPolicy"].apply(partialParams));
    }
    invokeAttachSecurityProfile(partialParams) {
        return this.client.attachSecurityProfile(this.ops["AttachSecurityProfile"].apply(partialParams));
    }
    invokeAttachThingPrincipal(partialParams) {
        return this.client.attachThingPrincipal(this.ops["AttachThingPrincipal"].apply(partialParams));
    }
    invokeCancelAuditMitigationActionsTask(partialParams) {
        return this.client.cancelAuditMitigationActionsTask(this.ops["CancelAuditMitigationActionsTask"].apply(partialParams));
    }
    invokeCancelAuditTask(partialParams) {
        return this.client.cancelAuditTask(this.ops["CancelAuditTask"].apply(partialParams));
    }
    invokeCancelCertificateTransfer(partialParams) {
        return this.client.cancelCertificateTransfer(this.ops["CancelCertificateTransfer"].apply(partialParams));
    }
    invokeCancelDetectMitigationActionsTask(partialParams) {
        return this.client.cancelDetectMitigationActionsTask(this.ops["CancelDetectMitigationActionsTask"].apply(partialParams));
    }
    invokeCancelJob(partialParams) {
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCancelJobExecution(partialParams) {
        return this.client.cancelJobExecution(this.ops["CancelJobExecution"].apply(partialParams));
    }
    invokeConfirmTopicRuleDestination(partialParams) {
        return this.client.confirmTopicRuleDestination(this.ops["ConfirmTopicRuleDestination"].apply(partialParams));
    }
    invokeCreateAuditSuppression(partialParams) {
        return this.client.createAuditSuppression(this.ops["CreateAuditSuppression"].apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].apply(partialParams));
    }
    invokeCreateBillingGroup(partialParams) {
        return this.client.createBillingGroup(this.ops["CreateBillingGroup"].apply(partialParams));
    }
    invokeCreateCertificateFromCsr(partialParams) {
        return this.client.createCertificateFromCsr(this.ops["CreateCertificateFromCsr"].apply(partialParams));
    }
    invokeCreateCustomMetric(partialParams) {
        return this.client.createCustomMetric(this.ops["CreateCustomMetric"].apply(partialParams));
    }
    invokeCreateDimension(partialParams) {
        return this.client.createDimension(this.ops["CreateDimension"].apply(partialParams));
    }
    invokeCreateDomainConfiguration(partialParams) {
        return this.client.createDomainConfiguration(this.ops["CreateDomainConfiguration"].apply(partialParams));
    }
    invokeCreateDynamicThingGroup(partialParams) {
        return this.client.createDynamicThingGroup(this.ops["CreateDynamicThingGroup"].apply(partialParams));
    }
    invokeCreateFleetMetric(partialParams) {
        return this.client.createFleetMetric(this.ops["CreateFleetMetric"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateJobTemplate(partialParams) {
        return this.client.createJobTemplate(this.ops["CreateJobTemplate"].apply(partialParams));
    }
    invokeCreateMitigationAction(partialParams) {
        return this.client.createMitigationAction(this.ops["CreateMitigationAction"].apply(partialParams));
    }
    invokeCreateOTAUpdate(partialParams) {
        return this.client.createOTAUpdate(this.ops["CreateOTAUpdate"].apply(partialParams));
    }
    invokeCreatePolicy(partialParams) {
        return this.client.createPolicy(this.ops["CreatePolicy"].apply(partialParams));
    }
    invokeCreatePolicyVersion(partialParams) {
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].apply(partialParams));
    }
    invokeCreateProvisioningClaim(partialParams) {
        return this.client.createProvisioningClaim(this.ops["CreateProvisioningClaim"].apply(partialParams));
    }
    invokeCreateProvisioningTemplate(partialParams) {
        return this.client.createProvisioningTemplate(this.ops["CreateProvisioningTemplate"].apply(partialParams));
    }
    invokeCreateProvisioningTemplateVersion(partialParams) {
        return this.client.createProvisioningTemplateVersion(this.ops["CreateProvisioningTemplateVersion"].apply(partialParams));
    }
    invokeCreateRoleAlias(partialParams) {
        return this.client.createRoleAlias(this.ops["CreateRoleAlias"].apply(partialParams));
    }
    invokeCreateScheduledAudit(partialParams) {
        return this.client.createScheduledAudit(this.ops["CreateScheduledAudit"].apply(partialParams));
    }
    invokeCreateSecurityProfile(partialParams) {
        return this.client.createSecurityProfile(this.ops["CreateSecurityProfile"].apply(partialParams));
    }
    invokeCreateStream(partialParams) {
        return this.client.createStream(this.ops["CreateStream"].apply(partialParams));
    }
    invokeCreateThing(partialParams) {
        return this.client.createThing(this.ops["CreateThing"].apply(partialParams));
    }
    invokeCreateThingGroup(partialParams) {
        return this.client.createThingGroup(this.ops["CreateThingGroup"].apply(partialParams));
    }
    invokeCreateThingType(partialParams) {
        return this.client.createThingType(this.ops["CreateThingType"].apply(partialParams));
    }
    invokeCreateTopicRule(partialParams) {
        return this.client.createTopicRule(this.ops["CreateTopicRule"].apply(partialParams));
    }
    invokeCreateTopicRuleDestination(partialParams) {
        return this.client.createTopicRuleDestination(this.ops["CreateTopicRuleDestination"].apply(partialParams));
    }
    invokeDeleteAuditSuppression(partialParams) {
        return this.client.deleteAuditSuppression(this.ops["DeleteAuditSuppression"].apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].apply(partialParams));
    }
    invokeDeleteBillingGroup(partialParams) {
        return this.client.deleteBillingGroup(this.ops["DeleteBillingGroup"].apply(partialParams));
    }
    invokeDeleteCACertificate(partialParams) {
        return this.client.deleteCACertificate(this.ops["DeleteCACertificate"].apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].apply(partialParams));
    }
    invokeDeleteCustomMetric(partialParams) {
        return this.client.deleteCustomMetric(this.ops["DeleteCustomMetric"].apply(partialParams));
    }
    invokeDeleteDimension(partialParams) {
        return this.client.deleteDimension(this.ops["DeleteDimension"].apply(partialParams));
    }
    invokeDeleteDomainConfiguration(partialParams) {
        return this.client.deleteDomainConfiguration(this.ops["DeleteDomainConfiguration"].apply(partialParams));
    }
    invokeDeleteDynamicThingGroup(partialParams) {
        return this.client.deleteDynamicThingGroup(this.ops["DeleteDynamicThingGroup"].apply(partialParams));
    }
    invokeDeleteFleetMetric(partialParams) {
        return this.client.deleteFleetMetric(this.ops["DeleteFleetMetric"].apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        return this.client.deleteJob(this.ops["DeleteJob"].apply(partialParams));
    }
    invokeDeleteJobExecution(partialParams) {
        return this.client.deleteJobExecution(this.ops["DeleteJobExecution"].apply(partialParams));
    }
    invokeDeleteJobTemplate(partialParams) {
        return this.client.deleteJobTemplate(this.ops["DeleteJobTemplate"].apply(partialParams));
    }
    invokeDeleteMitigationAction(partialParams) {
        return this.client.deleteMitigationAction(this.ops["DeleteMitigationAction"].apply(partialParams));
    }
    invokeDeleteOTAUpdate(partialParams) {
        return this.client.deleteOTAUpdate(this.ops["DeleteOTAUpdate"].apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        return this.client.deletePolicy(this.ops["DeletePolicy"].apply(partialParams));
    }
    invokeDeletePolicyVersion(partialParams) {
        return this.client.deletePolicyVersion(this.ops["DeletePolicyVersion"].apply(partialParams));
    }
    invokeDeleteProvisioningTemplate(partialParams) {
        return this.client.deleteProvisioningTemplate(this.ops["DeleteProvisioningTemplate"].apply(partialParams));
    }
    invokeDeleteProvisioningTemplateVersion(partialParams) {
        return this.client.deleteProvisioningTemplateVersion(this.ops["DeleteProvisioningTemplateVersion"].apply(partialParams));
    }
    invokeDeleteRoleAlias(partialParams) {
        return this.client.deleteRoleAlias(this.ops["DeleteRoleAlias"].apply(partialParams));
    }
    invokeDeleteScheduledAudit(partialParams) {
        return this.client.deleteScheduledAudit(this.ops["DeleteScheduledAudit"].apply(partialParams));
    }
    invokeDeleteSecurityProfile(partialParams) {
        return this.client.deleteSecurityProfile(this.ops["DeleteSecurityProfile"].apply(partialParams));
    }
    invokeDeleteStream(partialParams) {
        return this.client.deleteStream(this.ops["DeleteStream"].apply(partialParams));
    }
    invokeDeleteThing(partialParams) {
        return this.client.deleteThing(this.ops["DeleteThing"].apply(partialParams));
    }
    invokeDeleteThingGroup(partialParams) {
        return this.client.deleteThingGroup(this.ops["DeleteThingGroup"].apply(partialParams));
    }
    invokeDeleteThingType(partialParams) {
        return this.client.deleteThingType(this.ops["DeleteThingType"].apply(partialParams));
    }
    invokeDeleteTopicRule(partialParams) {
        return this.client.deleteTopicRule(this.ops["DeleteTopicRule"].apply(partialParams));
    }
    invokeDeleteTopicRuleDestination(partialParams) {
        return this.client.deleteTopicRuleDestination(this.ops["DeleteTopicRuleDestination"].apply(partialParams));
    }
    invokeDeleteV2LoggingLevel(partialParams) {
        return this.client.deleteV2LoggingLevel(this.ops["DeleteV2LoggingLevel"].apply(partialParams));
    }
    invokeDeprecateThingType(partialParams) {
        return this.client.deprecateThingType(this.ops["DeprecateThingType"].apply(partialParams));
    }
    invokeDescribeAuditFinding(partialParams) {
        return this.client.describeAuditFinding(this.ops["DescribeAuditFinding"].apply(partialParams));
    }
    invokeDescribeAuditMitigationActionsTask(partialParams) {
        return this.client.describeAuditMitigationActionsTask(this.ops["DescribeAuditMitigationActionsTask"].apply(partialParams));
    }
    invokeDescribeAuditSuppression(partialParams) {
        return this.client.describeAuditSuppression(this.ops["DescribeAuditSuppression"].apply(partialParams));
    }
    invokeDescribeAuditTask(partialParams) {
        return this.client.describeAuditTask(this.ops["DescribeAuditTask"].apply(partialParams));
    }
    invokeDescribeAuthorizer(partialParams) {
        return this.client.describeAuthorizer(this.ops["DescribeAuthorizer"].apply(partialParams));
    }
    invokeDescribeBillingGroup(partialParams) {
        return this.client.describeBillingGroup(this.ops["DescribeBillingGroup"].apply(partialParams));
    }
    invokeDescribeCACertificate(partialParams) {
        return this.client.describeCACertificate(this.ops["DescribeCACertificate"].apply(partialParams));
    }
    invokeDescribeCertificate(partialParams) {
        return this.client.describeCertificate(this.ops["DescribeCertificate"].apply(partialParams));
    }
    invokeDescribeCustomMetric(partialParams) {
        return this.client.describeCustomMetric(this.ops["DescribeCustomMetric"].apply(partialParams));
    }
    invokeDescribeDetectMitigationActionsTask(partialParams) {
        return this.client.describeDetectMitigationActionsTask(this.ops["DescribeDetectMitigationActionsTask"].apply(partialParams));
    }
    invokeDescribeDimension(partialParams) {
        return this.client.describeDimension(this.ops["DescribeDimension"].apply(partialParams));
    }
    invokeDescribeDomainConfiguration(partialParams) {
        return this.client.describeDomainConfiguration(this.ops["DescribeDomainConfiguration"].apply(partialParams));
    }
    invokeDescribeFleetMetric(partialParams) {
        return this.client.describeFleetMetric(this.ops["DescribeFleetMetric"].apply(partialParams));
    }
    invokeDescribeIndex(partialParams) {
        return this.client.describeIndex(this.ops["DescribeIndex"].apply(partialParams));
    }
    invokeDescribeJob(partialParams) {
        return this.client.describeJob(this.ops["DescribeJob"].apply(partialParams));
    }
    invokeDescribeJobExecution(partialParams) {
        return this.client.describeJobExecution(this.ops["DescribeJobExecution"].apply(partialParams));
    }
    invokeDescribeJobTemplate(partialParams) {
        return this.client.describeJobTemplate(this.ops["DescribeJobTemplate"].apply(partialParams));
    }
    invokeDescribeManagedJobTemplate(partialParams) {
        return this.client.describeManagedJobTemplate(this.ops["DescribeManagedJobTemplate"].apply(partialParams));
    }
    invokeDescribeMitigationAction(partialParams) {
        return this.client.describeMitigationAction(this.ops["DescribeMitigationAction"].apply(partialParams));
    }
    invokeDescribeProvisioningTemplate(partialParams) {
        return this.client.describeProvisioningTemplate(this.ops["DescribeProvisioningTemplate"].apply(partialParams));
    }
    invokeDescribeProvisioningTemplateVersion(partialParams) {
        return this.client.describeProvisioningTemplateVersion(this.ops["DescribeProvisioningTemplateVersion"].apply(partialParams));
    }
    invokeDescribeRoleAlias(partialParams) {
        return this.client.describeRoleAlias(this.ops["DescribeRoleAlias"].apply(partialParams));
    }
    invokeDescribeScheduledAudit(partialParams) {
        return this.client.describeScheduledAudit(this.ops["DescribeScheduledAudit"].apply(partialParams));
    }
    invokeDescribeSecurityProfile(partialParams) {
        return this.client.describeSecurityProfile(this.ops["DescribeSecurityProfile"].apply(partialParams));
    }
    invokeDescribeStream(partialParams) {
        return this.client.describeStream(this.ops["DescribeStream"].apply(partialParams));
    }
    invokeDescribeThing(partialParams) {
        return this.client.describeThing(this.ops["DescribeThing"].apply(partialParams));
    }
    invokeDescribeThingGroup(partialParams) {
        return this.client.describeThingGroup(this.ops["DescribeThingGroup"].apply(partialParams));
    }
    invokeDescribeThingRegistrationTask(partialParams) {
        return this.client.describeThingRegistrationTask(this.ops["DescribeThingRegistrationTask"].apply(partialParams));
    }
    invokeDescribeThingType(partialParams) {
        return this.client.describeThingType(this.ops["DescribeThingType"].apply(partialParams));
    }
    invokeDetachPolicy(partialParams) {
        return this.client.detachPolicy(this.ops["DetachPolicy"].apply(partialParams));
    }
    invokeDetachPrincipalPolicy(partialParams) {
        return this.client.detachPrincipalPolicy(this.ops["DetachPrincipalPolicy"].apply(partialParams));
    }
    invokeDetachSecurityProfile(partialParams) {
        return this.client.detachSecurityProfile(this.ops["DetachSecurityProfile"].apply(partialParams));
    }
    invokeDetachThingPrincipal(partialParams) {
        return this.client.detachThingPrincipal(this.ops["DetachThingPrincipal"].apply(partialParams));
    }
    invokeDisableTopicRule(partialParams) {
        return this.client.disableTopicRule(this.ops["DisableTopicRule"].apply(partialParams));
    }
    invokeEnableTopicRule(partialParams) {
        return this.client.enableTopicRule(this.ops["EnableTopicRule"].apply(partialParams));
    }
    invokeGetBucketsAggregation(partialParams) {
        return this.client.getBucketsAggregation(this.ops["GetBucketsAggregation"].apply(partialParams));
    }
    invokeGetCardinality(partialParams) {
        return this.client.getCardinality(this.ops["GetCardinality"].apply(partialParams));
    }
    invokeGetJobDocument(partialParams) {
        return this.client.getJobDocument(this.ops["GetJobDocument"].apply(partialParams));
    }
    invokeGetOTAUpdate(partialParams) {
        return this.client.getOTAUpdate(this.ops["GetOTAUpdate"].apply(partialParams));
    }
    invokeGetPercentiles(partialParams) {
        return this.client.getPercentiles(this.ops["GetPercentiles"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].apply(partialParams));
    }
    invokeGetStatistics(partialParams) {
        return this.client.getStatistics(this.ops["GetStatistics"].apply(partialParams));
    }
    invokeGetTopicRule(partialParams) {
        return this.client.getTopicRule(this.ops["GetTopicRule"].apply(partialParams));
    }
    invokeGetTopicRuleDestination(partialParams) {
        return this.client.getTopicRuleDestination(this.ops["GetTopicRuleDestination"].apply(partialParams));
    }
    invokeListAttachedPolicies(partialParams) {
        return this.client.listAttachedPolicies(this.ops["ListAttachedPolicies"].apply(partialParams));
    }
    invokeListAuditMitigationActionsExecutions(partialParams) {
        return this.client.listAuditMitigationActionsExecutions(this.ops["ListAuditMitigationActionsExecutions"].apply(partialParams));
    }
    invokeListAuditMitigationActionsTasks(partialParams) {
        return this.client.listAuditMitigationActionsTasks(this.ops["ListAuditMitigationActionsTasks"].apply(partialParams));
    }
    invokeListAuditTasks(partialParams) {
        return this.client.listAuditTasks(this.ops["ListAuditTasks"].apply(partialParams));
    }
    invokeListCertificatesByCA(partialParams) {
        return this.client.listCertificatesByCA(this.ops["ListCertificatesByCA"].apply(partialParams));
    }
    invokeListDetectMitigationActionsTasks(partialParams) {
        return this.client.listDetectMitigationActionsTasks(this.ops["ListDetectMitigationActionsTasks"].apply(partialParams));
    }
    invokeListJobExecutionsForJob(partialParams) {
        return this.client.listJobExecutionsForJob(this.ops["ListJobExecutionsForJob"].apply(partialParams));
    }
    invokeListJobExecutionsForThing(partialParams) {
        return this.client.listJobExecutionsForThing(this.ops["ListJobExecutionsForThing"].apply(partialParams));
    }
    invokeListPolicyPrincipals(partialParams) {
        return this.client.listPolicyPrincipals(this.ops["ListPolicyPrincipals"].apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].apply(partialParams));
    }
    invokeListPrincipalPolicies(partialParams) {
        return this.client.listPrincipalPolicies(this.ops["ListPrincipalPolicies"].apply(partialParams));
    }
    invokeListPrincipalThings(partialParams) {
        return this.client.listPrincipalThings(this.ops["ListPrincipalThings"].apply(partialParams));
    }
    invokeListProvisioningTemplateVersions(partialParams) {
        return this.client.listProvisioningTemplateVersions(this.ops["ListProvisioningTemplateVersions"].apply(partialParams));
    }
    invokeListSecurityProfilesForTarget(partialParams) {
        return this.client.listSecurityProfilesForTarget(this.ops["ListSecurityProfilesForTarget"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTargetsForPolicy(partialParams) {
        return this.client.listTargetsForPolicy(this.ops["ListTargetsForPolicy"].apply(partialParams));
    }
    invokeListTargetsForSecurityProfile(partialParams) {
        return this.client.listTargetsForSecurityProfile(this.ops["ListTargetsForSecurityProfile"].apply(partialParams));
    }
    invokeListThingGroupsForThing(partialParams) {
        return this.client.listThingGroupsForThing(this.ops["ListThingGroupsForThing"].apply(partialParams));
    }
    invokeListThingPrincipals(partialParams) {
        return this.client.listThingPrincipals(this.ops["ListThingPrincipals"].apply(partialParams));
    }
    invokeListThingRegistrationTaskReports(partialParams) {
        return this.client.listThingRegistrationTaskReports(this.ops["ListThingRegistrationTaskReports"].apply(partialParams));
    }
    invokeListThingsInBillingGroup(partialParams) {
        return this.client.listThingsInBillingGroup(this.ops["ListThingsInBillingGroup"].apply(partialParams));
    }
    invokeListThingsInThingGroup(partialParams) {
        return this.client.listThingsInThingGroup(this.ops["ListThingsInThingGroup"].apply(partialParams));
    }
    invokeListViolationEvents(partialParams) {
        return this.client.listViolationEvents(this.ops["ListViolationEvents"].apply(partialParams));
    }
    invokePutVerificationStateOnViolation(partialParams) {
        return this.client.putVerificationStateOnViolation(this.ops["PutVerificationStateOnViolation"].apply(partialParams));
    }
    invokeRegisterCACertificate(partialParams) {
        return this.client.registerCACertificate(this.ops["RegisterCACertificate"].apply(partialParams));
    }
    invokeRegisterCertificate(partialParams) {
        return this.client.registerCertificate(this.ops["RegisterCertificate"].apply(partialParams));
    }
    invokeRegisterCertificateWithoutCA(partialParams) {
        return this.client.registerCertificateWithoutCA(this.ops["RegisterCertificateWithoutCA"].apply(partialParams));
    }
    invokeRegisterThing(partialParams) {
        return this.client.registerThing(this.ops["RegisterThing"].apply(partialParams));
    }
    invokeRejectCertificateTransfer(partialParams) {
        return this.client.rejectCertificateTransfer(this.ops["RejectCertificateTransfer"].apply(partialParams));
    }
    invokeReplaceTopicRule(partialParams) {
        return this.client.replaceTopicRule(this.ops["ReplaceTopicRule"].apply(partialParams));
    }
    invokeSearchIndex(partialParams) {
        return this.client.searchIndex(this.ops["SearchIndex"].apply(partialParams));
    }
    invokeSetDefaultAuthorizer(partialParams) {
        return this.client.setDefaultAuthorizer(this.ops["SetDefaultAuthorizer"].apply(partialParams));
    }
    invokeSetDefaultPolicyVersion(partialParams) {
        return this.client.setDefaultPolicyVersion(this.ops["SetDefaultPolicyVersion"].apply(partialParams));
    }
    invokeSetLoggingOptions(partialParams) {
        return this.client.setLoggingOptions(this.ops["SetLoggingOptions"].apply(partialParams));
    }
    invokeSetV2LoggingLevel(partialParams) {
        return this.client.setV2LoggingLevel(this.ops["SetV2LoggingLevel"].apply(partialParams));
    }
    invokeStartAuditMitigationActionsTask(partialParams) {
        return this.client.startAuditMitigationActionsTask(this.ops["StartAuditMitigationActionsTask"].apply(partialParams));
    }
    invokeStartDetectMitigationActionsTask(partialParams) {
        return this.client.startDetectMitigationActionsTask(this.ops["StartDetectMitigationActionsTask"].apply(partialParams));
    }
    invokeStartOnDemandAuditTask(partialParams) {
        return this.client.startOnDemandAuditTask(this.ops["StartOnDemandAuditTask"].apply(partialParams));
    }
    invokeStartThingRegistrationTask(partialParams) {
        return this.client.startThingRegistrationTask(this.ops["StartThingRegistrationTask"].apply(partialParams));
    }
    invokeStopThingRegistrationTask(partialParams) {
        return this.client.stopThingRegistrationTask(this.ops["StopThingRegistrationTask"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestAuthorization(partialParams) {
        return this.client.testAuthorization(this.ops["TestAuthorization"].apply(partialParams));
    }
    invokeTestInvokeAuthorizer(partialParams) {
        return this.client.testInvokeAuthorizer(this.ops["TestInvokeAuthorizer"].apply(partialParams));
    }
    invokeTransferCertificate(partialParams) {
        return this.client.transferCertificate(this.ops["TransferCertificate"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAuditSuppression(partialParams) {
        return this.client.updateAuditSuppression(this.ops["UpdateAuditSuppression"].apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].apply(partialParams));
    }
    invokeUpdateBillingGroup(partialParams) {
        return this.client.updateBillingGroup(this.ops["UpdateBillingGroup"].apply(partialParams));
    }
    invokeUpdateCACertificate(partialParams) {
        return this.client.updateCACertificate(this.ops["UpdateCACertificate"].apply(partialParams));
    }
    invokeUpdateCertificate(partialParams) {
        return this.client.updateCertificate(this.ops["UpdateCertificate"].apply(partialParams));
    }
    invokeUpdateCustomMetric(partialParams) {
        return this.client.updateCustomMetric(this.ops["UpdateCustomMetric"].apply(partialParams));
    }
    invokeUpdateDimension(partialParams) {
        return this.client.updateDimension(this.ops["UpdateDimension"].apply(partialParams));
    }
    invokeUpdateDomainConfiguration(partialParams) {
        return this.client.updateDomainConfiguration(this.ops["UpdateDomainConfiguration"].apply(partialParams));
    }
    invokeUpdateDynamicThingGroup(partialParams) {
        return this.client.updateDynamicThingGroup(this.ops["UpdateDynamicThingGroup"].apply(partialParams));
    }
    invokeUpdateFleetMetric(partialParams) {
        return this.client.updateFleetMetric(this.ops["UpdateFleetMetric"].apply(partialParams));
    }
    invokeUpdateJob(partialParams) {
        return this.client.updateJob(this.ops["UpdateJob"].apply(partialParams));
    }
    invokeUpdateMitigationAction(partialParams) {
        return this.client.updateMitigationAction(this.ops["UpdateMitigationAction"].apply(partialParams));
    }
    invokeUpdateProvisioningTemplate(partialParams) {
        return this.client.updateProvisioningTemplate(this.ops["UpdateProvisioningTemplate"].apply(partialParams));
    }
    invokeUpdateRoleAlias(partialParams) {
        return this.client.updateRoleAlias(this.ops["UpdateRoleAlias"].apply(partialParams));
    }
    invokeUpdateScheduledAudit(partialParams) {
        return this.client.updateScheduledAudit(this.ops["UpdateScheduledAudit"].apply(partialParams));
    }
    invokeUpdateSecurityProfile(partialParams) {
        return this.client.updateSecurityProfile(this.ops["UpdateSecurityProfile"].apply(partialParams));
    }
    invokeUpdateStream(partialParams) {
        return this.client.updateStream(this.ops["UpdateStream"].apply(partialParams));
    }
    invokeUpdateThing(partialParams) {
        return this.client.updateThing(this.ops["UpdateThing"].apply(partialParams));
    }
    invokeUpdateThingGroup(partialParams) {
        return this.client.updateThingGroup(this.ops["UpdateThingGroup"].apply(partialParams));
    }
    invokeUpdateTopicRuleDestination(partialParams) {
        return this.client.updateTopicRuleDestination(this.ops["UpdateTopicRuleDestination"].apply(partialParams));
    }
    invokeValidateSecurityProfileBehaviors(partialParams) {
        return this.client.validateSecurityProfileBehaviors(this.ops["ValidateSecurityProfileBehaviors"].apply(partialParams));
    }
}
exports.default = default_1;
