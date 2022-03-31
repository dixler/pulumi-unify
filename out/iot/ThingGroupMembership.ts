
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptCertificateTransferRequest,
    AssociateTargetsWithJobRequest,
    AttachPolicyRequest,
    AttachPrincipalPolicyRequest,
    AttachSecurityProfileRequest,
    AttachThingPrincipalRequest,
    CancelAuditMitigationActionsTaskRequest,
    CancelAuditTaskRequest,
    CancelCertificateTransferRequest,
    CancelDetectMitigationActionsTaskRequest,
    CancelJobRequest,
    CancelJobExecutionRequest,
    ConfirmTopicRuleDestinationRequest,
    CreateAuditSuppressionRequest,
    CreateAuthorizerRequest,
    CreateBillingGroupRequest,
    CreateCertificateFromCsrRequest,
    CreateCustomMetricRequest,
    CreateDimensionRequest,
    CreateDomainConfigurationRequest,
    CreateDynamicThingGroupRequest,
    CreateFleetMetricRequest,
    CreateJobRequest,
    CreateJobTemplateRequest,
    CreateMitigationActionRequest,
    CreateOTAUpdateRequest,
    CreatePolicyRequest,
    CreatePolicyVersionRequest,
    CreateProvisioningClaimRequest,
    CreateProvisioningTemplateRequest,
    CreateProvisioningTemplateVersionRequest,
    CreateRoleAliasRequest,
    CreateScheduledAuditRequest,
    CreateSecurityProfileRequest,
    CreateStreamRequest,
    CreateThingRequest,
    CreateThingGroupRequest,
    CreateThingTypeRequest,
    CreateTopicRuleRequest,
    CreateTopicRuleDestinationRequest,
    DeleteAuditSuppressionRequest,
    DeleteAuthorizerRequest,
    DeleteBillingGroupRequest,
    DeleteCACertificateRequest,
    DeleteCertificateRequest,
    DeleteCustomMetricRequest,
    DeleteDimensionRequest,
    DeleteDomainConfigurationRequest,
    DeleteDynamicThingGroupRequest,
    DeleteFleetMetricRequest,
    DeleteJobRequest,
    DeleteJobExecutionRequest,
    DeleteJobTemplateRequest,
    DeleteMitigationActionRequest,
    DeleteOTAUpdateRequest,
    DeletePolicyRequest,
    DeletePolicyVersionRequest,
    DeleteProvisioningTemplateRequest,
    DeleteProvisioningTemplateVersionRequest,
    DeleteRoleAliasRequest,
    DeleteScheduledAuditRequest,
    DeleteSecurityProfileRequest,
    DeleteStreamRequest,
    DeleteThingRequest,
    DeleteThingGroupRequest,
    DeleteThingTypeRequest,
    DeleteTopicRuleRequest,
    DeleteTopicRuleDestinationRequest,
    DeleteV2LoggingLevelRequest,
    DeprecateThingTypeRequest,
    DescribeAuditFindingRequest,
    DescribeAuditMitigationActionsTaskRequest,
    DescribeAuditSuppressionRequest,
    DescribeAuditTaskRequest,
    DescribeAuthorizerRequest,
    DescribeBillingGroupRequest,
    DescribeCACertificateRequest,
    DescribeCertificateRequest,
    DescribeCustomMetricRequest,
    DescribeDetectMitigationActionsTaskRequest,
    DescribeDimensionRequest,
    DescribeDomainConfigurationRequest,
    DescribeFleetMetricRequest,
    DescribeIndexRequest,
    DescribeJobRequest,
    DescribeJobExecutionRequest,
    DescribeJobTemplateRequest,
    DescribeManagedJobTemplateRequest,
    DescribeMitigationActionRequest,
    DescribeProvisioningTemplateRequest,
    DescribeProvisioningTemplateVersionRequest,
    DescribeRoleAliasRequest,
    DescribeScheduledAuditRequest,
    DescribeSecurityProfileRequest,
    DescribeStreamRequest,
    DescribeThingRequest,
    DescribeThingGroupRequest,
    DescribeThingRegistrationTaskRequest,
    DescribeThingTypeRequest,
    DetachPolicyRequest,
    DetachPrincipalPolicyRequest,
    DetachSecurityProfileRequest,
    DetachThingPrincipalRequest,
    DisableTopicRuleRequest,
    EnableTopicRuleRequest,
    GetBucketsAggregationRequest,
    GetCardinalityRequest,
    GetJobDocumentRequest,
    GetOTAUpdateRequest,
    GetPercentilesRequest,
    GetPolicyRequest,
    GetPolicyVersionRequest,
    GetStatisticsRequest,
    GetTopicRuleRequest,
    GetTopicRuleDestinationRequest,
    ListAttachedPoliciesRequest,
    ListAuditMitigationActionsExecutionsRequest,
    ListAuditMitigationActionsTasksRequest,
    ListAuditTasksRequest,
    ListCertificatesByCARequest,
    ListDetectMitigationActionsTasksRequest,
    ListJobExecutionsForJobRequest,
    ListJobExecutionsForThingRequest,
    ListPolicyPrincipalsRequest,
    ListPolicyVersionsRequest,
    ListPrincipalPoliciesRequest,
    ListPrincipalThingsRequest,
    ListProvisioningTemplateVersionsRequest,
    ListSecurityProfilesForTargetRequest,
    ListTagsForResourceRequest,
    ListTargetsForPolicyRequest,
    ListTargetsForSecurityProfileRequest,
    ListThingGroupsForThingRequest,
    ListThingPrincipalsRequest,
    ListThingRegistrationTaskReportsRequest,
    ListThingsInBillingGroupRequest,
    ListThingsInThingGroupRequest,
    ListViolationEventsRequest,
    PutVerificationStateOnViolationRequest,
    RegisterCACertificateRequest,
    RegisterCertificateRequest,
    RegisterCertificateWithoutCARequest,
    RegisterThingRequest,
    RejectCertificateTransferRequest,
    ReplaceTopicRuleRequest,
    SearchIndexRequest,
    SetDefaultAuthorizerRequest,
    SetDefaultPolicyVersionRequest,
    SetLoggingOptionsRequest,
    SetV2LoggingLevelRequest,
    StartAuditMitigationActionsTaskRequest,
    StartDetectMitigationActionsTaskRequest,
    StartOnDemandAuditTaskRequest,
    StartThingRegistrationTaskRequest,
    StopThingRegistrationTaskRequest,
    TagResourceRequest,
    TestAuthorizationRequest,
    TestInvokeAuthorizerRequest,
    TransferCertificateRequest,
    UntagResourceRequest,
    UpdateAuditSuppressionRequest,
    UpdateAuthorizerRequest,
    UpdateBillingGroupRequest,
    UpdateCACertificateRequest,
    UpdateCertificateRequest,
    UpdateCustomMetricRequest,
    UpdateDimensionRequest,
    UpdateDomainConfigurationRequest,
    UpdateDynamicThingGroupRequest,
    UpdateFleetMetricRequest,
    UpdateJobRequest,
    UpdateMitigationActionRequest,
    UpdateProvisioningTemplateRequest,
    UpdateRoleAliasRequest,
    UpdateScheduledAuditRequest,
    UpdateSecurityProfileRequest,
    UpdateStreamRequest,
    UpdateThingRequest,
    UpdateThingGroupRequest,
    UpdateTopicRuleDestinationRequest,
    ValidateSecurityProfileBehaviorsRequest,
    AssociateTargetsWithJobResponse,
    AttachSecurityProfileResponse,
    AttachThingPrincipalResponse,
    CancelAuditMitigationActionsTaskResponse,
    CancelAuditTaskResponse,
    CancelDetectMitigationActionsTaskResponse,
    CancelJobResponse,
    ConfirmTopicRuleDestinationResponse,
    CreateAuditSuppressionResponse,
    CreateAuthorizerResponse,
    CreateBillingGroupResponse,
    CreateCertificateFromCsrResponse,
    CreateCustomMetricResponse,
    CreateDimensionResponse,
    CreateDomainConfigurationResponse,
    CreateDynamicThingGroupResponse,
    CreateFleetMetricResponse,
    CreateJobResponse,
    CreateJobTemplateResponse,
    CreateMitigationActionResponse,
    CreateOTAUpdateResponse,
    CreatePolicyResponse,
    CreatePolicyVersionResponse,
    CreateProvisioningClaimResponse,
    CreateProvisioningTemplateResponse,
    CreateProvisioningTemplateVersionResponse,
    CreateRoleAliasResponse,
    CreateScheduledAuditResponse,
    CreateSecurityProfileResponse,
    CreateStreamResponse,
    CreateThingResponse,
    CreateThingGroupResponse,
    CreateThingTypeResponse,
    CreateTopicRuleDestinationResponse,
    DeleteAuditSuppressionResponse,
    DeleteAuthorizerResponse,
    DeleteBillingGroupResponse,
    DeleteCACertificateResponse,
    DeleteCustomMetricResponse,
    DeleteDimensionResponse,
    DeleteDomainConfigurationResponse,
    DeleteDynamicThingGroupResponse,
    DeleteMitigationActionResponse,
    DeleteOTAUpdateResponse,
    DeleteProvisioningTemplateResponse,
    DeleteProvisioningTemplateVersionResponse,
    DeleteRoleAliasResponse,
    DeleteScheduledAuditResponse,
    DeleteSecurityProfileResponse,
    DeleteStreamResponse,
    DeleteThingResponse,
    DeleteThingGroupResponse,
    DeleteThingTypeResponse,
    DeleteTopicRuleDestinationResponse,
    DeprecateThingTypeResponse,
    DescribeAuditFindingResponse,
    DescribeAuditMitigationActionsTaskResponse,
    DescribeAuditSuppressionResponse,
    DescribeAuditTaskResponse,
    DescribeAuthorizerResponse,
    DescribeBillingGroupResponse,
    DescribeCACertificateResponse,
    DescribeCertificateResponse,
    DescribeCustomMetricResponse,
    DescribeDetectMitigationActionsTaskResponse,
    DescribeDimensionResponse,
    DescribeDomainConfigurationResponse,
    DescribeFleetMetricResponse,
    DescribeIndexResponse,
    DescribeJobResponse,
    DescribeJobExecutionResponse,
    DescribeJobTemplateResponse,
    DescribeManagedJobTemplateResponse,
    DescribeMitigationActionResponse,
    DescribeProvisioningTemplateResponse,
    DescribeProvisioningTemplateVersionResponse,
    DescribeRoleAliasResponse,
    DescribeScheduledAuditResponse,
    DescribeSecurityProfileResponse,
    DescribeStreamResponse,
    DescribeThingResponse,
    DescribeThingGroupResponse,
    DescribeThingRegistrationTaskResponse,
    DescribeThingTypeResponse,
    DetachSecurityProfileResponse,
    DetachThingPrincipalResponse,
    GetBucketsAggregationResponse,
    GetCardinalityResponse,
    GetJobDocumentResponse,
    GetOTAUpdateResponse,
    GetPercentilesResponse,
    GetPolicyResponse,
    GetPolicyVersionResponse,
    GetStatisticsResponse,
    GetTopicRuleResponse,
    GetTopicRuleDestinationResponse,
    ListAttachedPoliciesResponse,
    ListAuditMitigationActionsExecutionsResponse,
    ListAuditMitigationActionsTasksResponse,
    ListAuditTasksResponse,
    ListCertificatesByCAResponse,
    ListDetectMitigationActionsTasksResponse,
    ListJobExecutionsForJobResponse,
    ListJobExecutionsForThingResponse,
    ListPolicyPrincipalsResponse,
    ListPolicyVersionsResponse,
    ListPrincipalPoliciesResponse,
    ListPrincipalThingsResponse,
    ListProvisioningTemplateVersionsResponse,
    ListSecurityProfilesForTargetResponse,
    ListTagsForResourceResponse,
    ListTargetsForPolicyResponse,
    ListTargetsForSecurityProfileResponse,
    ListThingGroupsForThingResponse,
    ListThingPrincipalsResponse,
    ListThingRegistrationTaskReportsResponse,
    ListThingsInBillingGroupResponse,
    ListThingsInThingGroupResponse,
    ListViolationEventsResponse,
    PutVerificationStateOnViolationResponse,
    RegisterCACertificateResponse,
    RegisterCertificateResponse,
    RegisterCertificateWithoutCAResponse,
    RegisterThingResponse,
    SearchIndexResponse,
    SetDefaultAuthorizerResponse,
    StartAuditMitigationActionsTaskResponse,
    StartDetectMitigationActionsTaskResponse,
    StartOnDemandAuditTaskResponse,
    StartThingRegistrationTaskResponse,
    StopThingRegistrationTaskResponse,
    TagResourceResponse,
    TestAuthorizationResponse,
    TestInvokeAuthorizerResponse,
    TransferCertificateResponse,
    UntagResourceResponse,
    UpdateAuditSuppressionResponse,
    UpdateAuthorizerResponse,
    UpdateBillingGroupResponse,
    UpdateCustomMetricResponse,
    UpdateDimensionResponse,
    UpdateDomainConfigurationResponse,
    UpdateDynamicThingGroupResponse,
    UpdateMitigationActionResponse,
    UpdateProvisioningTemplateResponse,
    UpdateRoleAliasResponse,
    UpdateScheduledAuditResponse,
    UpdateSecurityProfileResponse,
    UpdateStreamResponse,
    UpdateThingResponse,
    UpdateThingGroupResponse,
    UpdateTopicRuleDestinationResponse,
    ValidateSecurityProfileBehaviorsResponse
} from "aws-sdk/clients/iot";
const schema = require("../apis/iot-2015-05-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iot.ThingGroupMembership {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.iot.ThingGroupMembership>) {
        super(...args)
        this.client = new awssdk.Iot()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAcceptCertificateTransfer(partialParams: ToOptional<{
      [K in keyof AcceptCertificateTransferRequest & keyof AcceptCertificateTransferRequest]: (AcceptCertificateTransferRequest & AcceptCertificateTransferRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptCertificateTransfer(
          this.ops["AcceptCertificateTransfer"].applicator.apply(partialParams)
        );
    }

    invokeAssociateTargetsWithJob(partialParams: ToOptional<{
      [K in keyof AssociateTargetsWithJobRequest & keyof AssociateTargetsWithJobRequest]: (AssociateTargetsWithJobRequest & AssociateTargetsWithJobRequest)[K]
    }>): Request<AssociateTargetsWithJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTargetsWithJob(
          this.ops["AssociateTargetsWithJob"].applicator.apply(partialParams)
        );
    }

    invokeAttachPolicy(partialParams: ToOptional<{
      [K in keyof AttachPolicyRequest & keyof AttachPolicyRequest]: (AttachPolicyRequest & AttachPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachPolicy(
          this.ops["AttachPolicy"].applicator.apply(partialParams)
        );
    }

    invokeAttachPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof AttachPrincipalPolicyRequest & keyof AttachPrincipalPolicyRequest]: (AttachPrincipalPolicyRequest & AttachPrincipalPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachPrincipalPolicy(
          this.ops["AttachPrincipalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeAttachSecurityProfile(partialParams: ToOptional<{
      [K in keyof AttachSecurityProfileRequest & keyof AttachSecurityProfileRequest]: (AttachSecurityProfileRequest & AttachSecurityProfileRequest)[K]
    }>): Request<AttachSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachSecurityProfile(
          this.ops["AttachSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeAttachThingPrincipal(partialParams: ToOptional<{
      [K in keyof AttachThingPrincipalRequest & keyof AttachThingPrincipalRequest]: (AttachThingPrincipalRequest & AttachThingPrincipalRequest)[K]
    }>): Request<AttachThingPrincipalResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachThingPrincipal(
          this.ops["AttachThingPrincipal"].applicator.apply(partialParams)
        );
    }

    invokeCancelAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof CancelAuditMitigationActionsTaskRequest & keyof CancelAuditMitigationActionsTaskRequest]: (CancelAuditMitigationActionsTaskRequest & CancelAuditMitigationActionsTaskRequest)[K]
    }>): Request<CancelAuditMitigationActionsTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelAuditMitigationActionsTask(
          this.ops["CancelAuditMitigationActionsTask"].applicator.apply(partialParams)
        );
    }

    invokeCancelAuditTask(partialParams: ToOptional<{
      [K in keyof CancelAuditTaskRequest & keyof CancelAuditTaskRequest]: (CancelAuditTaskRequest & CancelAuditTaskRequest)[K]
    }>): Request<CancelAuditTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelAuditTask(
          this.ops["CancelAuditTask"].applicator.apply(partialParams)
        );
    }

    invokeCancelCertificateTransfer(partialParams: ToOptional<{
      [K in keyof CancelCertificateTransferRequest & keyof CancelCertificateTransferRequest]: (CancelCertificateTransferRequest & CancelCertificateTransferRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCertificateTransfer(
          this.ops["CancelCertificateTransfer"].applicator.apply(partialParams)
        );
    }

    invokeCancelDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof CancelDetectMitigationActionsTaskRequest & keyof CancelDetectMitigationActionsTaskRequest]: (CancelDetectMitigationActionsTaskRequest & CancelDetectMitigationActionsTaskRequest)[K]
    }>): Request<CancelDetectMitigationActionsTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelDetectMitigationActionsTask(
          this.ops["CancelDetectMitigationActionsTask"].applicator.apply(partialParams)
        );
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].applicator.apply(partialParams)
        );
    }

    invokeCancelJobExecution(partialParams: ToOptional<{
      [K in keyof CancelJobExecutionRequest & keyof CancelJobExecutionRequest]: (CancelJobExecutionRequest & CancelJobExecutionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJobExecution(
          this.ops["CancelJobExecution"].applicator.apply(partialParams)
        );
    }

    invokeConfirmTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof ConfirmTopicRuleDestinationRequest & keyof ConfirmTopicRuleDestinationRequest]: (ConfirmTopicRuleDestinationRequest & ConfirmTopicRuleDestinationRequest)[K]
    }>): Request<ConfirmTopicRuleDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmTopicRuleDestination(
          this.ops["ConfirmTopicRuleDestination"].applicator.apply(partialParams)
        );
    }

    invokeCreateAuditSuppression(partialParams: ToOptional<{
      [K in keyof CreateAuditSuppressionRequest & keyof CreateAuditSuppressionRequest]: (CreateAuditSuppressionRequest & CreateAuditSuppressionRequest)[K]
    }>): Request<CreateAuditSuppressionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuditSuppression(
          this.ops["CreateAuditSuppression"].applicator.apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest & CreateAuthorizerRequest)[K]
    }>): Request<CreateAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeCreateBillingGroup(partialParams: ToOptional<{
      [K in keyof CreateBillingGroupRequest & keyof CreateBillingGroupRequest]: (CreateBillingGroupRequest & CreateBillingGroupRequest)[K]
    }>): Request<CreateBillingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBillingGroup(
          this.ops["CreateBillingGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateCertificateFromCsr(partialParams: ToOptional<{
      [K in keyof CreateCertificateFromCsrRequest & keyof CreateCertificateFromCsrRequest]: (CreateCertificateFromCsrRequest & CreateCertificateFromCsrRequest)[K]
    }>): Request<CreateCertificateFromCsrResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCertificateFromCsr(
          this.ops["CreateCertificateFromCsr"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomMetric(partialParams: ToOptional<{
      [K in keyof CreateCustomMetricRequest & keyof CreateCustomMetricRequest]: (CreateCustomMetricRequest & CreateCustomMetricRequest)[K]
    }>): Request<CreateCustomMetricResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomMetric(
          this.ops["CreateCustomMetric"].applicator.apply(partialParams)
        );
    }

    invokeCreateDimension(partialParams: ToOptional<{
      [K in keyof CreateDimensionRequest & keyof CreateDimensionRequest]: (CreateDimensionRequest & CreateDimensionRequest)[K]
    }>): Request<CreateDimensionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDimension(
          this.ops["CreateDimension"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainConfiguration(partialParams: ToOptional<{
      [K in keyof CreateDomainConfigurationRequest & keyof CreateDomainConfigurationRequest]: (CreateDomainConfigurationRequest & CreateDomainConfigurationRequest)[K]
    }>): Request<CreateDomainConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainConfiguration(
          this.ops["CreateDomainConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof CreateDynamicThingGroupRequest & keyof CreateDynamicThingGroupRequest]: (CreateDynamicThingGroupRequest & CreateDynamicThingGroupRequest)[K]
    }>): Request<CreateDynamicThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDynamicThingGroup(
          this.ops["CreateDynamicThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateFleetMetric(partialParams: ToOptional<{
      [K in keyof CreateFleetMetricRequest & keyof CreateFleetMetricRequest]: (CreateFleetMetricRequest & CreateFleetMetricRequest)[K]
    }>): Request<CreateFleetMetricResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleetMetric(
          this.ops["CreateFleetMetric"].applicator.apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateJobTemplate(partialParams: ToOptional<{
      [K in keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest]: (CreateJobTemplateRequest & CreateJobTemplateRequest)[K]
    }>): Request<CreateJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJobTemplate(
          this.ops["CreateJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateMitigationAction(partialParams: ToOptional<{
      [K in keyof CreateMitigationActionRequest & keyof CreateMitigationActionRequest]: (CreateMitigationActionRequest & CreateMitigationActionRequest)[K]
    }>): Request<CreateMitigationActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMitigationAction(
          this.ops["CreateMitigationAction"].applicator.apply(partialParams)
        );
    }

    invokeCreateOTAUpdate(partialParams: ToOptional<{
      [K in keyof CreateOTAUpdateRequest & keyof CreateOTAUpdateRequest]: (CreateOTAUpdateRequest & CreateOTAUpdateRequest)[K]
    }>): Request<CreateOTAUpdateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOTAUpdate(
          this.ops["CreateOTAUpdate"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof CreatePolicyRequest]: (CreatePolicyRequest & CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest & CreatePolicyVersionRequest)[K]
    }>): Request<CreatePolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicyVersion(
          this.ops["CreatePolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateProvisioningClaim(partialParams: ToOptional<{
      [K in keyof CreateProvisioningClaimRequest & keyof CreateProvisioningClaimRequest]: (CreateProvisioningClaimRequest & CreateProvisioningClaimRequest)[K]
    }>): Request<CreateProvisioningClaimResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningClaim(
          this.ops["CreateProvisioningClaim"].applicator.apply(partialParams)
        );
    }

    invokeCreateProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof CreateProvisioningTemplateRequest & keyof CreateProvisioningTemplateRequest]: (CreateProvisioningTemplateRequest & CreateProvisioningTemplateRequest)[K]
    }>): Request<CreateProvisioningTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningTemplate(
          this.ops["CreateProvisioningTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateProvisioningTemplateVersionRequest & keyof CreateProvisioningTemplateVersionRequest]: (CreateProvisioningTemplateVersionRequest & CreateProvisioningTemplateVersionRequest)[K]
    }>): Request<CreateProvisioningTemplateVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningTemplateVersion(
          this.ops["CreateProvisioningTemplateVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoleAlias(partialParams: ToOptional<{
      [K in keyof CreateRoleAliasRequest & keyof CreateRoleAliasRequest]: (CreateRoleAliasRequest & CreateRoleAliasRequest)[K]
    }>): Request<CreateRoleAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoleAlias(
          this.ops["CreateRoleAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateScheduledAudit(partialParams: ToOptional<{
      [K in keyof CreateScheduledAuditRequest & keyof CreateScheduledAuditRequest]: (CreateScheduledAuditRequest & CreateScheduledAuditRequest)[K]
    }>): Request<CreateScheduledAuditResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createScheduledAudit(
          this.ops["CreateScheduledAudit"].applicator.apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest & CreateSecurityProfileRequest)[K]
    }>): Request<CreateSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityProfile(
          this.ops["CreateSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateStream(partialParams: ToOptional<{
      [K in keyof CreateStreamRequest & keyof CreateStreamRequest]: (CreateStreamRequest & CreateStreamRequest)[K]
    }>): Request<CreateStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStream(
          this.ops["CreateStream"].applicator.apply(partialParams)
        );
    }

    invokeCreateThing(partialParams: ToOptional<{
      [K in keyof CreateThingRequest & keyof CreateThingRequest]: (CreateThingRequest & CreateThingRequest)[K]
    }>): Request<CreateThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThing(
          this.ops["CreateThing"].applicator.apply(partialParams)
        );
    }

    invokeCreateThingGroup(partialParams: ToOptional<{
      [K in keyof CreateThingGroupRequest & keyof CreateThingGroupRequest]: (CreateThingGroupRequest & CreateThingGroupRequest)[K]
    }>): Request<CreateThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThingGroup(
          this.ops["CreateThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateThingType(partialParams: ToOptional<{
      [K in keyof CreateThingTypeRequest & keyof CreateThingTypeRequest]: (CreateThingTypeRequest & CreateThingTypeRequest)[K]
    }>): Request<CreateThingTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThingType(
          this.ops["CreateThingType"].applicator.apply(partialParams)
        );
    }

    invokeCreateTopicRule(partialParams: ToOptional<{
      [K in keyof CreateTopicRuleRequest & keyof CreateTopicRuleRequest]: (CreateTopicRuleRequest & CreateTopicRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTopicRule(
          this.ops["CreateTopicRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof CreateTopicRuleDestinationRequest & keyof CreateTopicRuleDestinationRequest]: (CreateTopicRuleDestinationRequest & CreateTopicRuleDestinationRequest)[K]
    }>): Request<CreateTopicRuleDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTopicRuleDestination(
          this.ops["CreateTopicRuleDestination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAuditSuppression(partialParams: ToOptional<{
      [K in keyof DeleteAuditSuppressionRequest & keyof DeleteAuditSuppressionRequest]: (DeleteAuditSuppressionRequest & DeleteAuditSuppressionRequest)[K]
    }>): Request<DeleteAuditSuppressionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuditSuppression(
          this.ops["DeleteAuditSuppression"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest & DeleteAuthorizerRequest)[K]
    }>): Request<DeleteAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthorizer(
          this.ops["DeleteAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBillingGroup(partialParams: ToOptional<{
      [K in keyof DeleteBillingGroupRequest & keyof DeleteBillingGroupRequest]: (DeleteBillingGroupRequest & DeleteBillingGroupRequest)[K]
    }>): Request<DeleteBillingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBillingGroup(
          this.ops["DeleteBillingGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCACertificate(partialParams: ToOptional<{
      [K in keyof DeleteCACertificateRequest & keyof DeleteCACertificateRequest]: (DeleteCACertificateRequest & DeleteCACertificateRequest)[K]
    }>): Request<DeleteCACertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCACertificate(
          this.ops["DeleteCACertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateRequest & keyof DeleteCertificateRequest]: (DeleteCertificateRequest & DeleteCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomMetric(partialParams: ToOptional<{
      [K in keyof DeleteCustomMetricRequest & keyof DeleteCustomMetricRequest]: (DeleteCustomMetricRequest & DeleteCustomMetricRequest)[K]
    }>): Request<DeleteCustomMetricResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomMetric(
          this.ops["DeleteCustomMetric"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDimension(partialParams: ToOptional<{
      [K in keyof DeleteDimensionRequest & keyof DeleteDimensionRequest]: (DeleteDimensionRequest & DeleteDimensionRequest)[K]
    }>): Request<DeleteDimensionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDimension(
          this.ops["DeleteDimension"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteDomainConfigurationRequest & keyof DeleteDomainConfigurationRequest]: (DeleteDomainConfigurationRequest & DeleteDomainConfigurationRequest)[K]
    }>): Request<DeleteDomainConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainConfiguration(
          this.ops["DeleteDomainConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof DeleteDynamicThingGroupRequest & keyof DeleteDynamicThingGroupRequest]: (DeleteDynamicThingGroupRequest & DeleteDynamicThingGroupRequest)[K]
    }>): Request<DeleteDynamicThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDynamicThingGroup(
          this.ops["DeleteDynamicThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFleetMetric(partialParams: ToOptional<{
      [K in keyof DeleteFleetMetricRequest & keyof DeleteFleetMetricRequest]: (DeleteFleetMetricRequest & DeleteFleetMetricRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleetMetric(
          this.ops["DeleteFleetMetric"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof DeleteJobRequest]: (DeleteJobRequest & DeleteJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJobExecution(partialParams: ToOptional<{
      [K in keyof DeleteJobExecutionRequest & keyof DeleteJobExecutionRequest]: (DeleteJobExecutionRequest & DeleteJobExecutionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJobExecution(
          this.ops["DeleteJobExecution"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJobTemplate(partialParams: ToOptional<{
      [K in keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest]: (DeleteJobTemplateRequest & DeleteJobTemplateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJobTemplate(
          this.ops["DeleteJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMitigationAction(partialParams: ToOptional<{
      [K in keyof DeleteMitigationActionRequest & keyof DeleteMitigationActionRequest]: (DeleteMitigationActionRequest & DeleteMitigationActionRequest)[K]
    }>): Request<DeleteMitigationActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMitigationAction(
          this.ops["DeleteMitigationAction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOTAUpdate(partialParams: ToOptional<{
      [K in keyof DeleteOTAUpdateRequest & keyof DeleteOTAUpdateRequest]: (DeleteOTAUpdateRequest & DeleteOTAUpdateRequest)[K]
    }>): Request<DeleteOTAUpdateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOTAUpdate(
          this.ops["DeleteOTAUpdate"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicyVersion(partialParams: ToOptional<{
      [K in keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest]: (DeletePolicyVersionRequest & DeletePolicyVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicyVersion(
          this.ops["DeletePolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningTemplateRequest & keyof DeleteProvisioningTemplateRequest]: (DeleteProvisioningTemplateRequest & DeleteProvisioningTemplateRequest)[K]
    }>): Request<DeleteProvisioningTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisioningTemplate(
          this.ops["DeleteProvisioningTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningTemplateVersionRequest & keyof DeleteProvisioningTemplateVersionRequest]: (DeleteProvisioningTemplateVersionRequest & DeleteProvisioningTemplateVersionRequest)[K]
    }>): Request<DeleteProvisioningTemplateVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisioningTemplateVersion(
          this.ops["DeleteProvisioningTemplateVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoleAlias(partialParams: ToOptional<{
      [K in keyof DeleteRoleAliasRequest & keyof DeleteRoleAliasRequest]: (DeleteRoleAliasRequest & DeleteRoleAliasRequest)[K]
    }>): Request<DeleteRoleAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoleAlias(
          this.ops["DeleteRoleAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteScheduledAudit(partialParams: ToOptional<{
      [K in keyof DeleteScheduledAuditRequest & keyof DeleteScheduledAuditRequest]: (DeleteScheduledAuditRequest & DeleteScheduledAuditRequest)[K]
    }>): Request<DeleteScheduledAuditResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScheduledAudit(
          this.ops["DeleteScheduledAudit"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest & DeleteSecurityProfileRequest)[K]
    }>): Request<DeleteSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecurityProfile(
          this.ops["DeleteSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStream(partialParams: ToOptional<{
      [K in keyof DeleteStreamRequest & keyof DeleteStreamRequest]: (DeleteStreamRequest & DeleteStreamRequest)[K]
    }>): Request<DeleteStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStream(
          this.ops["DeleteStream"].applicator.apply(partialParams)
        );
    }

    invokeDeleteThing(partialParams: ToOptional<{
      [K in keyof DeleteThingRequest & keyof DeleteThingRequest]: (DeleteThingRequest & DeleteThingRequest)[K]
    }>): Request<DeleteThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThing(
          this.ops["DeleteThing"].applicator.apply(partialParams)
        );
    }

    invokeDeleteThingGroup(partialParams: ToOptional<{
      [K in keyof DeleteThingGroupRequest & keyof DeleteThingGroupRequest]: (DeleteThingGroupRequest & DeleteThingGroupRequest)[K]
    }>): Request<DeleteThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThingGroup(
          this.ops["DeleteThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteThingType(partialParams: ToOptional<{
      [K in keyof DeleteThingTypeRequest & keyof DeleteThingTypeRequest]: (DeleteThingTypeRequest & DeleteThingTypeRequest)[K]
    }>): Request<DeleteThingTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThingType(
          this.ops["DeleteThingType"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTopicRule(partialParams: ToOptional<{
      [K in keyof DeleteTopicRuleRequest & keyof DeleteTopicRuleRequest]: (DeleteTopicRuleRequest & DeleteTopicRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTopicRule(
          this.ops["DeleteTopicRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof DeleteTopicRuleDestinationRequest & keyof DeleteTopicRuleDestinationRequest]: (DeleteTopicRuleDestinationRequest & DeleteTopicRuleDestinationRequest)[K]
    }>): Request<DeleteTopicRuleDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTopicRuleDestination(
          this.ops["DeleteTopicRuleDestination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteV2LoggingLevel(partialParams: ToOptional<{
      [K in keyof DeleteV2LoggingLevelRequest & keyof DeleteV2LoggingLevelRequest]: (DeleteV2LoggingLevelRequest & DeleteV2LoggingLevelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteV2LoggingLevel(
          this.ops["DeleteV2LoggingLevel"].applicator.apply(partialParams)
        );
    }

    invokeDeprecateThingType(partialParams: ToOptional<{
      [K in keyof DeprecateThingTypeRequest & keyof DeprecateThingTypeRequest]: (DeprecateThingTypeRequest & DeprecateThingTypeRequest)[K]
    }>): Request<DeprecateThingTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateThingType(
          this.ops["DeprecateThingType"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAuditFinding(partialParams: ToOptional<{
      [K in keyof DescribeAuditFindingRequest & keyof DescribeAuditFindingRequest]: (DescribeAuditFindingRequest & DescribeAuditFindingRequest)[K]
    }>): Request<DescribeAuditFindingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditFinding(
          this.ops["DescribeAuditFinding"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof DescribeAuditMitigationActionsTaskRequest & keyof DescribeAuditMitigationActionsTaskRequest]: (DescribeAuditMitigationActionsTaskRequest & DescribeAuditMitigationActionsTaskRequest)[K]
    }>): Request<DescribeAuditMitigationActionsTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditMitigationActionsTask(
          this.ops["DescribeAuditMitigationActionsTask"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAuditSuppression(partialParams: ToOptional<{
      [K in keyof DescribeAuditSuppressionRequest & keyof DescribeAuditSuppressionRequest]: (DescribeAuditSuppressionRequest & DescribeAuditSuppressionRequest)[K]
    }>): Request<DescribeAuditSuppressionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditSuppression(
          this.ops["DescribeAuditSuppression"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAuditTask(partialParams: ToOptional<{
      [K in keyof DescribeAuditTaskRequest & keyof DescribeAuditTaskRequest]: (DescribeAuditTaskRequest & DescribeAuditTaskRequest)[K]
    }>): Request<DescribeAuditTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditTask(
          this.ops["DescribeAuditTask"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAuthorizer(partialParams: ToOptional<{
      [K in keyof DescribeAuthorizerRequest & keyof DescribeAuthorizerRequest]: (DescribeAuthorizerRequest & DescribeAuthorizerRequest)[K]
    }>): Request<DescribeAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuthorizer(
          this.ops["DescribeAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBillingGroup(partialParams: ToOptional<{
      [K in keyof DescribeBillingGroupRequest & keyof DescribeBillingGroupRequest]: (DescribeBillingGroupRequest & DescribeBillingGroupRequest)[K]
    }>): Request<DescribeBillingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBillingGroup(
          this.ops["DescribeBillingGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCACertificate(partialParams: ToOptional<{
      [K in keyof DescribeCACertificateRequest & keyof DescribeCACertificateRequest]: (DescribeCACertificateRequest & DescribeCACertificateRequest)[K]
    }>): Request<DescribeCACertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCACertificate(
          this.ops["DescribeCACertificate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof DescribeCertificateRequest & keyof DescribeCertificateRequest]: (DescribeCertificateRequest & DescribeCertificateRequest)[K]
    }>): Request<DescribeCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCertificate(
          this.ops["DescribeCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCustomMetric(partialParams: ToOptional<{
      [K in keyof DescribeCustomMetricRequest & keyof DescribeCustomMetricRequest]: (DescribeCustomMetricRequest & DescribeCustomMetricRequest)[K]
    }>): Request<DescribeCustomMetricResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomMetric(
          this.ops["DescribeCustomMetric"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof DescribeDetectMitigationActionsTaskRequest & keyof DescribeDetectMitigationActionsTaskRequest]: (DescribeDetectMitigationActionsTaskRequest & DescribeDetectMitigationActionsTaskRequest)[K]
    }>): Request<DescribeDetectMitigationActionsTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDetectMitigationActionsTask(
          this.ops["DescribeDetectMitigationActionsTask"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDimension(partialParams: ToOptional<{
      [K in keyof DescribeDimensionRequest & keyof DescribeDimensionRequest]: (DescribeDimensionRequest & DescribeDimensionRequest)[K]
    }>): Request<DescribeDimensionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDimension(
          this.ops["DescribeDimension"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDomainConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeDomainConfigurationRequest & keyof DescribeDomainConfigurationRequest]: (DescribeDomainConfigurationRequest & DescribeDomainConfigurationRequest)[K]
    }>): Request<DescribeDomainConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomainConfiguration(
          this.ops["DescribeDomainConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetMetric(partialParams: ToOptional<{
      [K in keyof DescribeFleetMetricRequest & keyof DescribeFleetMetricRequest]: (DescribeFleetMetricRequest & DescribeFleetMetricRequest)[K]
    }>): Request<DescribeFleetMetricResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetMetric(
          this.ops["DescribeFleetMetric"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIndex(partialParams: ToOptional<{
      [K in keyof DescribeIndexRequest & keyof DescribeIndexRequest]: (DescribeIndexRequest & DescribeIndexRequest)[K]
    }>): Request<DescribeIndexResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIndex(
          this.ops["DescribeIndex"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJob(partialParams: ToOptional<{
      [K in keyof DescribeJobRequest & keyof DescribeJobRequest]: (DescribeJobRequest & DescribeJobRequest)[K]
    }>): Request<DescribeJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJob(
          this.ops["DescribeJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJobExecution(partialParams: ToOptional<{
      [K in keyof DescribeJobExecutionRequest & keyof DescribeJobExecutionRequest]: (DescribeJobExecutionRequest & DescribeJobExecutionRequest)[K]
    }>): Request<DescribeJobExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJobExecution(
          this.ops["DescribeJobExecution"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJobTemplate(partialParams: ToOptional<{
      [K in keyof DescribeJobTemplateRequest & keyof DescribeJobTemplateRequest]: (DescribeJobTemplateRequest & DescribeJobTemplateRequest)[K]
    }>): Request<DescribeJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJobTemplate(
          this.ops["DescribeJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeManagedJobTemplate(partialParams: ToOptional<{
      [K in keyof DescribeManagedJobTemplateRequest & keyof DescribeManagedJobTemplateRequest]: (DescribeManagedJobTemplateRequest & DescribeManagedJobTemplateRequest)[K]
    }>): Request<DescribeManagedJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeManagedJobTemplate(
          this.ops["DescribeManagedJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMitigationAction(partialParams: ToOptional<{
      [K in keyof DescribeMitigationActionRequest & keyof DescribeMitigationActionRequest]: (DescribeMitigationActionRequest & DescribeMitigationActionRequest)[K]
    }>): Request<DescribeMitigationActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMitigationAction(
          this.ops["DescribeMitigationAction"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningTemplateRequest & keyof DescribeProvisioningTemplateRequest]: (DescribeProvisioningTemplateRequest & DescribeProvisioningTemplateRequest)[K]
    }>): Request<DescribeProvisioningTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProvisioningTemplate(
          this.ops["DescribeProvisioningTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningTemplateVersionRequest & keyof DescribeProvisioningTemplateVersionRequest]: (DescribeProvisioningTemplateVersionRequest & DescribeProvisioningTemplateVersionRequest)[K]
    }>): Request<DescribeProvisioningTemplateVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProvisioningTemplateVersion(
          this.ops["DescribeProvisioningTemplateVersion"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRoleAlias(partialParams: ToOptional<{
      [K in keyof DescribeRoleAliasRequest & keyof DescribeRoleAliasRequest]: (DescribeRoleAliasRequest & DescribeRoleAliasRequest)[K]
    }>): Request<DescribeRoleAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRoleAlias(
          this.ops["DescribeRoleAlias"].applicator.apply(partialParams)
        );
    }

    invokeDescribeScheduledAudit(partialParams: ToOptional<{
      [K in keyof DescribeScheduledAuditRequest & keyof DescribeScheduledAuditRequest]: (DescribeScheduledAuditRequest & DescribeScheduledAuditRequest)[K]
    }>): Request<DescribeScheduledAuditResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScheduledAudit(
          this.ops["DescribeScheduledAudit"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest & DescribeSecurityProfileRequest)[K]
    }>): Request<DescribeSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityProfile(
          this.ops["DescribeSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamRequest & keyof DescribeStreamRequest]: (DescribeStreamRequest & DescribeStreamRequest)[K]
    }>): Request<DescribeStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStream(
          this.ops["DescribeStream"].applicator.apply(partialParams)
        );
    }

    invokeDescribeThing(partialParams: ToOptional<{
      [K in keyof DescribeThingRequest & keyof DescribeThingRequest]: (DescribeThingRequest & DescribeThingRequest)[K]
    }>): Request<DescribeThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThing(
          this.ops["DescribeThing"].applicator.apply(partialParams)
        );
    }

    invokeDescribeThingGroup(partialParams: ToOptional<{
      [K in keyof DescribeThingGroupRequest & keyof DescribeThingGroupRequest]: (DescribeThingGroupRequest & DescribeThingGroupRequest)[K]
    }>): Request<DescribeThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThingGroup(
          this.ops["DescribeThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof DescribeThingRegistrationTaskRequest & keyof DescribeThingRegistrationTaskRequest]: (DescribeThingRegistrationTaskRequest & DescribeThingRegistrationTaskRequest)[K]
    }>): Request<DescribeThingRegistrationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThingRegistrationTask(
          this.ops["DescribeThingRegistrationTask"].applicator.apply(partialParams)
        );
    }

    invokeDescribeThingType(partialParams: ToOptional<{
      [K in keyof DescribeThingTypeRequest & keyof DescribeThingTypeRequest]: (DescribeThingTypeRequest & DescribeThingTypeRequest)[K]
    }>): Request<DescribeThingTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThingType(
          this.ops["DescribeThingType"].applicator.apply(partialParams)
        );
    }

    invokeDetachPolicy(partialParams: ToOptional<{
      [K in keyof DetachPolicyRequest & keyof DetachPolicyRequest]: (DetachPolicyRequest & DetachPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachPolicy(
          this.ops["DetachPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof DetachPrincipalPolicyRequest & keyof DetachPrincipalPolicyRequest]: (DetachPrincipalPolicyRequest & DetachPrincipalPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachPrincipalPolicy(
          this.ops["DetachPrincipalPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachSecurityProfile(partialParams: ToOptional<{
      [K in keyof DetachSecurityProfileRequest & keyof DetachSecurityProfileRequest]: (DetachSecurityProfileRequest & DetachSecurityProfileRequest)[K]
    }>): Request<DetachSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachSecurityProfile(
          this.ops["DetachSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeDetachThingPrincipal(partialParams: ToOptional<{
      [K in keyof DetachThingPrincipalRequest & keyof DetachThingPrincipalRequest]: (DetachThingPrincipalRequest & DetachThingPrincipalRequest)[K]
    }>): Request<DetachThingPrincipalResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachThingPrincipal(
          this.ops["DetachThingPrincipal"].applicator.apply(partialParams)
        );
    }

    invokeDisableTopicRule(partialParams: ToOptional<{
      [K in keyof DisableTopicRuleRequest & keyof DisableTopicRuleRequest]: (DisableTopicRuleRequest & DisableTopicRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableTopicRule(
          this.ops["DisableTopicRule"].applicator.apply(partialParams)
        );
    }

    invokeEnableTopicRule(partialParams: ToOptional<{
      [K in keyof EnableTopicRuleRequest & keyof EnableTopicRuleRequest]: (EnableTopicRuleRequest & EnableTopicRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableTopicRule(
          this.ops["EnableTopicRule"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketsAggregation(partialParams: ToOptional<{
      [K in keyof GetBucketsAggregationRequest & keyof GetBucketsAggregationRequest]: (GetBucketsAggregationRequest & GetBucketsAggregationRequest)[K]
    }>): Request<GetBucketsAggregationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketsAggregation(
          this.ops["GetBucketsAggregation"].applicator.apply(partialParams)
        );
    }

    invokeGetCardinality(partialParams: ToOptional<{
      [K in keyof GetCardinalityRequest & keyof GetCardinalityRequest]: (GetCardinalityRequest & GetCardinalityRequest)[K]
    }>): Request<GetCardinalityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCardinality(
          this.ops["GetCardinality"].applicator.apply(partialParams)
        );
    }

    invokeGetJobDocument(partialParams: ToOptional<{
      [K in keyof GetJobDocumentRequest & keyof GetJobDocumentRequest]: (GetJobDocumentRequest & GetJobDocumentRequest)[K]
    }>): Request<GetJobDocumentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobDocument(
          this.ops["GetJobDocument"].applicator.apply(partialParams)
        );
    }

    invokeGetOTAUpdate(partialParams: ToOptional<{
      [K in keyof GetOTAUpdateRequest & keyof GetOTAUpdateRequest]: (GetOTAUpdateRequest & GetOTAUpdateRequest)[K]
    }>): Request<GetOTAUpdateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOTAUpdate(
          this.ops["GetOTAUpdate"].applicator.apply(partialParams)
        );
    }

    invokeGetPercentiles(partialParams: ToOptional<{
      [K in keyof GetPercentilesRequest & keyof GetPercentilesRequest]: (GetPercentilesRequest & GetPercentilesRequest)[K]
    }>): Request<GetPercentilesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPercentiles(
          this.ops["GetPercentiles"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest & GetPolicyVersionRequest)[K]
    }>): Request<GetPolicyVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicyVersion(
          this.ops["GetPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetStatistics(partialParams: ToOptional<{
      [K in keyof GetStatisticsRequest & keyof GetStatisticsRequest]: (GetStatisticsRequest & GetStatisticsRequest)[K]
    }>): Request<GetStatisticsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStatistics(
          this.ops["GetStatistics"].applicator.apply(partialParams)
        );
    }

    invokeGetTopicRule(partialParams: ToOptional<{
      [K in keyof GetTopicRuleRequest & keyof GetTopicRuleRequest]: (GetTopicRuleRequest & GetTopicRuleRequest)[K]
    }>): Request<GetTopicRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTopicRule(
          this.ops["GetTopicRule"].applicator.apply(partialParams)
        );
    }

    invokeGetTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof GetTopicRuleDestinationRequest & keyof GetTopicRuleDestinationRequest]: (GetTopicRuleDestinationRequest & GetTopicRuleDestinationRequest)[K]
    }>): Request<GetTopicRuleDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTopicRuleDestination(
          this.ops["GetTopicRuleDestination"].applicator.apply(partialParams)
        );
    }

    invokeListAttachedPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedPoliciesRequest & keyof ListAttachedPoliciesRequest]: (ListAttachedPoliciesRequest & ListAttachedPoliciesRequest)[K]
    }>): Request<ListAttachedPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAttachedPolicies(
          this.ops["ListAttachedPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListAuditMitigationActionsExecutions(partialParams: ToOptional<{
      [K in keyof ListAuditMitigationActionsExecutionsRequest & keyof ListAuditMitigationActionsExecutionsRequest]: (ListAuditMitigationActionsExecutionsRequest & ListAuditMitigationActionsExecutionsRequest)[K]
    }>): Request<ListAuditMitigationActionsExecutionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAuditMitigationActionsExecutions(
          this.ops["ListAuditMitigationActionsExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListAuditMitigationActionsTasks(partialParams: ToOptional<{
      [K in keyof ListAuditMitigationActionsTasksRequest & keyof ListAuditMitigationActionsTasksRequest]: (ListAuditMitigationActionsTasksRequest & ListAuditMitigationActionsTasksRequest)[K]
    }>): Request<ListAuditMitigationActionsTasksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAuditMitigationActionsTasks(
          this.ops["ListAuditMitigationActionsTasks"].applicator.apply(partialParams)
        );
    }

    invokeListAuditTasks(partialParams: ToOptional<{
      [K in keyof ListAuditTasksRequest & keyof ListAuditTasksRequest]: (ListAuditTasksRequest & ListAuditTasksRequest)[K]
    }>): Request<ListAuditTasksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAuditTasks(
          this.ops["ListAuditTasks"].applicator.apply(partialParams)
        );
    }

    invokeListCertificatesByCA(partialParams: ToOptional<{
      [K in keyof ListCertificatesByCARequest & keyof ListCertificatesByCARequest]: (ListCertificatesByCARequest & ListCertificatesByCARequest)[K]
    }>): Request<ListCertificatesByCAResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCertificatesByCA(
          this.ops["ListCertificatesByCA"].applicator.apply(partialParams)
        );
    }

    invokeListDetectMitigationActionsTasks(partialParams: ToOptional<{
      [K in keyof ListDetectMitigationActionsTasksRequest & keyof ListDetectMitigationActionsTasksRequest]: (ListDetectMitigationActionsTasksRequest & ListDetectMitigationActionsTasksRequest)[K]
    }>): Request<ListDetectMitigationActionsTasksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDetectMitigationActionsTasks(
          this.ops["ListDetectMitigationActionsTasks"].applicator.apply(partialParams)
        );
    }

    invokeListJobExecutionsForJob(partialParams: ToOptional<{
      [K in keyof ListJobExecutionsForJobRequest & keyof ListJobExecutionsForJobRequest]: (ListJobExecutionsForJobRequest & ListJobExecutionsForJobRequest)[K]
    }>): Request<ListJobExecutionsForJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobExecutionsForJob(
          this.ops["ListJobExecutionsForJob"].applicator.apply(partialParams)
        );
    }

    invokeListJobExecutionsForThing(partialParams: ToOptional<{
      [K in keyof ListJobExecutionsForThingRequest & keyof ListJobExecutionsForThingRequest]: (ListJobExecutionsForThingRequest & ListJobExecutionsForThingRequest)[K]
    }>): Request<ListJobExecutionsForThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobExecutionsForThing(
          this.ops["ListJobExecutionsForThing"].applicator.apply(partialParams)
        );
    }

    invokeListPolicyPrincipals(partialParams: ToOptional<{
      [K in keyof ListPolicyPrincipalsRequest & keyof ListPolicyPrincipalsRequest]: (ListPolicyPrincipalsRequest & ListPolicyPrincipalsRequest)[K]
    }>): Request<ListPolicyPrincipalsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyPrincipals(
          this.ops["ListPolicyPrincipals"].applicator.apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest & ListPolicyVersionsRequest)[K]
    }>): Request<ListPolicyVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicyVersions(
          this.ops["ListPolicyVersions"].applicator.apply(partialParams)
        );
    }

    invokeListPrincipalPolicies(partialParams: ToOptional<{
      [K in keyof ListPrincipalPoliciesRequest & keyof ListPrincipalPoliciesRequest]: (ListPrincipalPoliciesRequest & ListPrincipalPoliciesRequest)[K]
    }>): Request<ListPrincipalPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipalPolicies(
          this.ops["ListPrincipalPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListPrincipalThings(partialParams: ToOptional<{
      [K in keyof ListPrincipalThingsRequest & keyof ListPrincipalThingsRequest]: (ListPrincipalThingsRequest & ListPrincipalThingsRequest)[K]
    }>): Request<ListPrincipalThingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipalThings(
          this.ops["ListPrincipalThings"].applicator.apply(partialParams)
        );
    }

    invokeListProvisioningTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListProvisioningTemplateVersionsRequest & keyof ListProvisioningTemplateVersionsRequest]: (ListProvisioningTemplateVersionsRequest & ListProvisioningTemplateVersionsRequest)[K]
    }>): Request<ListProvisioningTemplateVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisioningTemplateVersions(
          this.ops["ListProvisioningTemplateVersions"].applicator.apply(partialParams)
        );
    }

    invokeListSecurityProfilesForTarget(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesForTargetRequest & keyof ListSecurityProfilesForTargetRequest]: (ListSecurityProfilesForTargetRequest & ListSecurityProfilesForTargetRequest)[K]
    }>): Request<ListSecurityProfilesForTargetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityProfilesForTarget(
          this.ops["ListSecurityProfilesForTarget"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest]: (ListTargetsForPolicyRequest & ListTargetsForPolicyRequest)[K]
    }>): Request<ListTargetsForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTargetsForPolicy(
          this.ops["ListTargetsForPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListTargetsForSecurityProfile(partialParams: ToOptional<{
      [K in keyof ListTargetsForSecurityProfileRequest & keyof ListTargetsForSecurityProfileRequest]: (ListTargetsForSecurityProfileRequest & ListTargetsForSecurityProfileRequest)[K]
    }>): Request<ListTargetsForSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTargetsForSecurityProfile(
          this.ops["ListTargetsForSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeListThingGroupsForThing(partialParams: ToOptional<{
      [K in keyof ListThingGroupsForThingRequest & keyof ListThingGroupsForThingRequest]: (ListThingGroupsForThingRequest & ListThingGroupsForThingRequest)[K]
    }>): Request<ListThingGroupsForThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingGroupsForThing(
          this.ops["ListThingGroupsForThing"].applicator.apply(partialParams)
        );
    }

    invokeListThingPrincipals(partialParams: ToOptional<{
      [K in keyof ListThingPrincipalsRequest & keyof ListThingPrincipalsRequest]: (ListThingPrincipalsRequest & ListThingPrincipalsRequest)[K]
    }>): Request<ListThingPrincipalsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingPrincipals(
          this.ops["ListThingPrincipals"].applicator.apply(partialParams)
        );
    }

    invokeListThingRegistrationTaskReports(partialParams: ToOptional<{
      [K in keyof ListThingRegistrationTaskReportsRequest & keyof ListThingRegistrationTaskReportsRequest]: (ListThingRegistrationTaskReportsRequest & ListThingRegistrationTaskReportsRequest)[K]
    }>): Request<ListThingRegistrationTaskReportsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingRegistrationTaskReports(
          this.ops["ListThingRegistrationTaskReports"].applicator.apply(partialParams)
        );
    }

    invokeListThingsInBillingGroup(partialParams: ToOptional<{
      [K in keyof ListThingsInBillingGroupRequest & keyof ListThingsInBillingGroupRequest]: (ListThingsInBillingGroupRequest & ListThingsInBillingGroupRequest)[K]
    }>): Request<ListThingsInBillingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingsInBillingGroup(
          this.ops["ListThingsInBillingGroup"].applicator.apply(partialParams)
        );
    }

    invokeListThingsInThingGroup(partialParams: ToOptional<{
      [K in keyof ListThingsInThingGroupRequest & keyof ListThingsInThingGroupRequest]: (ListThingsInThingGroupRequest & ListThingsInThingGroupRequest)[K]
    }>): Request<ListThingsInThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThingsInThingGroup(
          this.ops["ListThingsInThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeListViolationEvents(partialParams: ToOptional<{
      [K in keyof ListViolationEventsRequest & keyof ListViolationEventsRequest]: (ListViolationEventsRequest & ListViolationEventsRequest)[K]
    }>): Request<ListViolationEventsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listViolationEvents(
          this.ops["ListViolationEvents"].applicator.apply(partialParams)
        );
    }

    invokePutVerificationStateOnViolation(partialParams: ToOptional<{
      [K in keyof PutVerificationStateOnViolationRequest & keyof PutVerificationStateOnViolationRequest]: (PutVerificationStateOnViolationRequest & PutVerificationStateOnViolationRequest)[K]
    }>): Request<PutVerificationStateOnViolationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putVerificationStateOnViolation(
          this.ops["PutVerificationStateOnViolation"].applicator.apply(partialParams)
        );
    }

    invokeRegisterCACertificate(partialParams: ToOptional<{
      [K in keyof RegisterCACertificateRequest & keyof RegisterCACertificateRequest]: (RegisterCACertificateRequest & RegisterCACertificateRequest)[K]
    }>): Request<RegisterCACertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCACertificate(
          this.ops["RegisterCACertificate"].applicator.apply(partialParams)
        );
    }

    invokeRegisterCertificate(partialParams: ToOptional<{
      [K in keyof RegisterCertificateRequest & keyof RegisterCertificateRequest]: (RegisterCertificateRequest & RegisterCertificateRequest)[K]
    }>): Request<RegisterCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCertificate(
          this.ops["RegisterCertificate"].applicator.apply(partialParams)
        );
    }

    invokeRegisterCertificateWithoutCA(partialParams: ToOptional<{
      [K in keyof RegisterCertificateWithoutCARequest & keyof RegisterCertificateWithoutCARequest]: (RegisterCertificateWithoutCARequest & RegisterCertificateWithoutCARequest)[K]
    }>): Request<RegisterCertificateWithoutCAResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCertificateWithoutCA(
          this.ops["RegisterCertificateWithoutCA"].applicator.apply(partialParams)
        );
    }

    invokeRegisterThing(partialParams: ToOptional<{
      [K in keyof RegisterThingRequest & keyof RegisterThingRequest]: (RegisterThingRequest & RegisterThingRequest)[K]
    }>): Request<RegisterThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerThing(
          this.ops["RegisterThing"].applicator.apply(partialParams)
        );
    }

    invokeRejectCertificateTransfer(partialParams: ToOptional<{
      [K in keyof RejectCertificateTransferRequest & keyof RejectCertificateTransferRequest]: (RejectCertificateTransferRequest & RejectCertificateTransferRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectCertificateTransfer(
          this.ops["RejectCertificateTransfer"].applicator.apply(partialParams)
        );
    }

    invokeReplaceTopicRule(partialParams: ToOptional<{
      [K in keyof ReplaceTopicRuleRequest & keyof ReplaceTopicRuleRequest]: (ReplaceTopicRuleRequest & ReplaceTopicRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceTopicRule(
          this.ops["ReplaceTopicRule"].applicator.apply(partialParams)
        );
    }

    invokeSearchIndex(partialParams: ToOptional<{
      [K in keyof SearchIndexRequest & keyof SearchIndexRequest]: (SearchIndexRequest & SearchIndexRequest)[K]
    }>): Request<SearchIndexResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchIndex(
          this.ops["SearchIndex"].applicator.apply(partialParams)
        );
    }

    invokeSetDefaultAuthorizer(partialParams: ToOptional<{
      [K in keyof SetDefaultAuthorizerRequest & keyof SetDefaultAuthorizerRequest]: (SetDefaultAuthorizerRequest & SetDefaultAuthorizerRequest)[K]
    }>): Request<SetDefaultAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultAuthorizer(
          this.ops["SetDefaultAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeSetDefaultPolicyVersion(partialParams: ToOptional<{
      [K in keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest]: (SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDefaultPolicyVersion(
          this.ops["SetDefaultPolicyVersion"].applicator.apply(partialParams)
        );
    }

    invokeSetLoggingOptions(partialParams: ToOptional<{
      [K in keyof SetLoggingOptionsRequest & keyof SetLoggingOptionsRequest]: (SetLoggingOptionsRequest & SetLoggingOptionsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setLoggingOptions(
          this.ops["SetLoggingOptions"].applicator.apply(partialParams)
        );
    }

    invokeSetV2LoggingLevel(partialParams: ToOptional<{
      [K in keyof SetV2LoggingLevelRequest & keyof SetV2LoggingLevelRequest]: (SetV2LoggingLevelRequest & SetV2LoggingLevelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setV2LoggingLevel(
          this.ops["SetV2LoggingLevel"].applicator.apply(partialParams)
        );
    }

    invokeStartAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof StartAuditMitigationActionsTaskRequest & keyof StartAuditMitigationActionsTaskRequest]: (StartAuditMitigationActionsTaskRequest & StartAuditMitigationActionsTaskRequest)[K]
    }>): Request<StartAuditMitigationActionsTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAuditMitigationActionsTask(
          this.ops["StartAuditMitigationActionsTask"].applicator.apply(partialParams)
        );
    }

    invokeStartDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof StartDetectMitigationActionsTaskRequest & keyof StartDetectMitigationActionsTaskRequest]: (StartDetectMitigationActionsTaskRequest & StartDetectMitigationActionsTaskRequest)[K]
    }>): Request<StartDetectMitigationActionsTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDetectMitigationActionsTask(
          this.ops["StartDetectMitigationActionsTask"].applicator.apply(partialParams)
        );
    }

    invokeStartOnDemandAuditTask(partialParams: ToOptional<{
      [K in keyof StartOnDemandAuditTaskRequest & keyof StartOnDemandAuditTaskRequest]: (StartOnDemandAuditTaskRequest & StartOnDemandAuditTaskRequest)[K]
    }>): Request<StartOnDemandAuditTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startOnDemandAuditTask(
          this.ops["StartOnDemandAuditTask"].applicator.apply(partialParams)
        );
    }

    invokeStartThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof StartThingRegistrationTaskRequest & keyof StartThingRegistrationTaskRequest]: (StartThingRegistrationTaskRequest & StartThingRegistrationTaskRequest)[K]
    }>): Request<StartThingRegistrationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startThingRegistrationTask(
          this.ops["StartThingRegistrationTask"].applicator.apply(partialParams)
        );
    }

    invokeStopThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof StopThingRegistrationTaskRequest & keyof StopThingRegistrationTaskRequest]: (StopThingRegistrationTaskRequest & StopThingRegistrationTaskRequest)[K]
    }>): Request<StopThingRegistrationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopThingRegistrationTask(
          this.ops["StopThingRegistrationTask"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestAuthorization(partialParams: ToOptional<{
      [K in keyof TestAuthorizationRequest & keyof TestAuthorizationRequest]: (TestAuthorizationRequest & TestAuthorizationRequest)[K]
    }>): Request<TestAuthorizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testAuthorization(
          this.ops["TestAuthorization"].applicator.apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest)[K]
    }>): Request<TestInvokeAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testInvokeAuthorizer(
          this.ops["TestInvokeAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeTransferCertificate(partialParams: ToOptional<{
      [K in keyof TransferCertificateRequest & keyof TransferCertificateRequest]: (TransferCertificateRequest & TransferCertificateRequest)[K]
    }>): Request<TransferCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.transferCertificate(
          this.ops["TransferCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAuditSuppression(partialParams: ToOptional<{
      [K in keyof UpdateAuditSuppressionRequest & keyof UpdateAuditSuppressionRequest]: (UpdateAuditSuppressionRequest & UpdateAuditSuppressionRequest)[K]
    }>): Request<UpdateAuditSuppressionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuditSuppression(
          this.ops["UpdateAuditSuppression"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest & UpdateAuthorizerRequest)[K]
    }>): Request<UpdateAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBillingGroup(partialParams: ToOptional<{
      [K in keyof UpdateBillingGroupRequest & keyof UpdateBillingGroupRequest]: (UpdateBillingGroupRequest & UpdateBillingGroupRequest)[K]
    }>): Request<UpdateBillingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBillingGroup(
          this.ops["UpdateBillingGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCACertificate(partialParams: ToOptional<{
      [K in keyof UpdateCACertificateRequest & keyof UpdateCACertificateRequest]: (UpdateCACertificateRequest & UpdateCACertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCACertificate(
          this.ops["UpdateCACertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCertificate(partialParams: ToOptional<{
      [K in keyof UpdateCertificateRequest & keyof UpdateCertificateRequest]: (UpdateCertificateRequest & UpdateCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCertificate(
          this.ops["UpdateCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCustomMetric(partialParams: ToOptional<{
      [K in keyof UpdateCustomMetricRequest & keyof UpdateCustomMetricRequest]: (UpdateCustomMetricRequest & UpdateCustomMetricRequest)[K]
    }>): Request<UpdateCustomMetricResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomMetric(
          this.ops["UpdateCustomMetric"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDimension(partialParams: ToOptional<{
      [K in keyof UpdateDimensionRequest & keyof UpdateDimensionRequest]: (UpdateDimensionRequest & UpdateDimensionRequest)[K]
    }>): Request<UpdateDimensionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDimension(
          this.ops["UpdateDimension"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDomainConfigurationRequest & keyof UpdateDomainConfigurationRequest]: (UpdateDomainConfigurationRequest & UpdateDomainConfigurationRequest)[K]
    }>): Request<UpdateDomainConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainConfiguration(
          this.ops["UpdateDomainConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDynamicThingGroupRequest, "thingGroupName"> & keyof UpdateDynamicThingGroupRequest]: (Omit<UpdateDynamicThingGroupRequest, "thingGroupName"> & UpdateDynamicThingGroupRequest)[K]
    }>): Request<UpdateDynamicThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDynamicThingGroup(
          this.ops["UpdateDynamicThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFleetMetric(partialParams: ToOptional<{
      [K in keyof UpdateFleetMetricRequest & keyof UpdateFleetMetricRequest]: (UpdateFleetMetricRequest & UpdateFleetMetricRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetMetric(
          this.ops["UpdateFleetMetric"].applicator.apply(partialParams)
        );
    }

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest & keyof UpdateJobRequest]: (UpdateJobRequest & UpdateJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJob(
          this.ops["UpdateJob"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMitigationAction(partialParams: ToOptional<{
      [K in keyof UpdateMitigationActionRequest & keyof UpdateMitigationActionRequest]: (UpdateMitigationActionRequest & UpdateMitigationActionRequest)[K]
    }>): Request<UpdateMitigationActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMitigationAction(
          this.ops["UpdateMitigationAction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof UpdateProvisioningTemplateRequest & keyof UpdateProvisioningTemplateRequest]: (UpdateProvisioningTemplateRequest & UpdateProvisioningTemplateRequest)[K]
    }>): Request<UpdateProvisioningTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisioningTemplate(
          this.ops["UpdateProvisioningTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoleAlias(partialParams: ToOptional<{
      [K in keyof UpdateRoleAliasRequest & keyof UpdateRoleAliasRequest]: (UpdateRoleAliasRequest & UpdateRoleAliasRequest)[K]
    }>): Request<UpdateRoleAliasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoleAlias(
          this.ops["UpdateRoleAlias"].applicator.apply(partialParams)
        );
    }

    invokeUpdateScheduledAudit(partialParams: ToOptional<{
      [K in keyof UpdateScheduledAuditRequest & keyof UpdateScheduledAuditRequest]: (UpdateScheduledAuditRequest & UpdateScheduledAuditRequest)[K]
    }>): Request<UpdateScheduledAuditResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateScheduledAudit(
          this.ops["UpdateScheduledAudit"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest]: (UpdateSecurityProfileRequest & UpdateSecurityProfileRequest)[K]
    }>): Request<UpdateSecurityProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSecurityProfile(
          this.ops["UpdateSecurityProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStream(partialParams: ToOptional<{
      [K in keyof UpdateStreamRequest & keyof UpdateStreamRequest]: (UpdateStreamRequest & UpdateStreamRequest)[K]
    }>): Request<UpdateStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStream(
          this.ops["UpdateStream"].applicator.apply(partialParams)
        );
    }

    invokeUpdateThing(partialParams: ToOptional<{
      [K in keyof UpdateThingRequest & keyof Omit<UpdateThingRequest, "thingName">]: (UpdateThingRequest & Omit<UpdateThingRequest, "thingName">)[K]
    }>): Request<UpdateThingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThing(
          this.ops["UpdateThing"].applicator.apply(partialParams)
        );
    }

    invokeUpdateThingGroup(partialParams: ToOptional<{
      [K in keyof Omit<UpdateThingGroupRequest, "thingGroupName"> & keyof UpdateThingGroupRequest]: (Omit<UpdateThingGroupRequest, "thingGroupName"> & UpdateThingGroupRequest)[K]
    }>): Request<UpdateThingGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThingGroup(
          this.ops["UpdateThingGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof UpdateTopicRuleDestinationRequest & keyof UpdateTopicRuleDestinationRequest]: (UpdateTopicRuleDestinationRequest & UpdateTopicRuleDestinationRequest)[K]
    }>): Request<UpdateTopicRuleDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTopicRuleDestination(
          this.ops["UpdateTopicRuleDestination"].applicator.apply(partialParams)
        );
    }

    invokeValidateSecurityProfileBehaviors(partialParams: ToOptional<{
      [K in keyof ValidateSecurityProfileBehaviorsRequest & keyof ValidateSecurityProfileBehaviorsRequest]: (ValidateSecurityProfileBehaviorsRequest & ValidateSecurityProfileBehaviorsRequest)[K]
    }>): Request<ValidateSecurityProfileBehaviorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateSecurityProfileBehaviors(
          this.ops["ValidateSecurityProfileBehaviors"].applicator.apply(partialParams)
        );
    }
}