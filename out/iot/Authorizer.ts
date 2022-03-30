
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iot.Authorizer {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.iot.Authorizer>) {
        super(...args)
        this.client = new awssdk.Iot()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/iot-2015-05-28.normal.json"), this.client)
    }

    invokeAcceptCertificateTransfer(partialParams: ToOptional<{
      [K in keyof AcceptCertificateTransferRequest & keyof AcceptCertificateTransferRequest & keyof AcceptCertificateTransferRequest & keyof AcceptCertificateTransferRequest & keyof AcceptCertificateTransferRequest]: (AcceptCertificateTransferRequest & AcceptCertificateTransferRequest & AcceptCertificateTransferRequest & AcceptCertificateTransferRequest & AcceptCertificateTransferRequest)[K]
    }>): void {
        return this.client.acceptCertificateTransfer(
            this.ops["AcceptCertificateTransfer"].apply(partialParams)
        );
    }

    invokeAssociateTargetsWithJob(partialParams: ToOptional<{
      [K in keyof AssociateTargetsWithJobRequest & keyof AssociateTargetsWithJobRequest & keyof AssociateTargetsWithJobRequest & keyof AssociateTargetsWithJobRequest & keyof AssociateTargetsWithJobRequest]: (AssociateTargetsWithJobRequest & AssociateTargetsWithJobRequest & AssociateTargetsWithJobRequest & AssociateTargetsWithJobRequest & AssociateTargetsWithJobRequest)[K]
    }>): AssociateTargetsWithJobResponse {
        return this.client.associateTargetsWithJob(
            this.ops["AssociateTargetsWithJob"].apply(partialParams)
        );
    }

    invokeAttachPolicy(partialParams: ToOptional<{
      [K in keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest]: (AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest)[K]
    }>): void {
        return this.client.attachPolicy(
            this.ops["AttachPolicy"].apply(partialParams)
        );
    }

    invokeAttachPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof AttachPrincipalPolicyRequest & keyof AttachPrincipalPolicyRequest & keyof AttachPrincipalPolicyRequest & keyof AttachPrincipalPolicyRequest & keyof AttachPrincipalPolicyRequest]: (AttachPrincipalPolicyRequest & AttachPrincipalPolicyRequest & AttachPrincipalPolicyRequest & AttachPrincipalPolicyRequest & AttachPrincipalPolicyRequest)[K]
    }>): void {
        return this.client.attachPrincipalPolicy(
            this.ops["AttachPrincipalPolicy"].apply(partialParams)
        );
    }

    invokeAttachSecurityProfile(partialParams: ToOptional<{
      [K in keyof AttachSecurityProfileRequest & keyof AttachSecurityProfileRequest & keyof AttachSecurityProfileRequest & keyof AttachSecurityProfileRequest & keyof AttachSecurityProfileRequest]: (AttachSecurityProfileRequest & AttachSecurityProfileRequest & AttachSecurityProfileRequest & AttachSecurityProfileRequest & AttachSecurityProfileRequest)[K]
    }>): AttachSecurityProfileResponse {
        return this.client.attachSecurityProfile(
            this.ops["AttachSecurityProfile"].apply(partialParams)
        );
    }

    invokeAttachThingPrincipal(partialParams: ToOptional<{
      [K in keyof AttachThingPrincipalRequest & keyof AttachThingPrincipalRequest & keyof AttachThingPrincipalRequest & keyof AttachThingPrincipalRequest & keyof AttachThingPrincipalRequest]: (AttachThingPrincipalRequest & AttachThingPrincipalRequest & AttachThingPrincipalRequest & AttachThingPrincipalRequest & AttachThingPrincipalRequest)[K]
    }>): AttachThingPrincipalResponse {
        return this.client.attachThingPrincipal(
            this.ops["AttachThingPrincipal"].apply(partialParams)
        );
    }

    invokeCancelAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof CancelAuditMitigationActionsTaskRequest & keyof CancelAuditMitigationActionsTaskRequest & keyof CancelAuditMitigationActionsTaskRequest & keyof CancelAuditMitigationActionsTaskRequest & keyof CancelAuditMitigationActionsTaskRequest]: (CancelAuditMitigationActionsTaskRequest & CancelAuditMitigationActionsTaskRequest & CancelAuditMitigationActionsTaskRequest & CancelAuditMitigationActionsTaskRequest & CancelAuditMitigationActionsTaskRequest)[K]
    }>): CancelAuditMitigationActionsTaskResponse {
        return this.client.cancelAuditMitigationActionsTask(
            this.ops["CancelAuditMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeCancelAuditTask(partialParams: ToOptional<{
      [K in keyof CancelAuditTaskRequest & keyof CancelAuditTaskRequest & keyof CancelAuditTaskRequest & keyof CancelAuditTaskRequest & keyof CancelAuditTaskRequest]: (CancelAuditTaskRequest & CancelAuditTaskRequest & CancelAuditTaskRequest & CancelAuditTaskRequest & CancelAuditTaskRequest)[K]
    }>): CancelAuditTaskResponse {
        return this.client.cancelAuditTask(
            this.ops["CancelAuditTask"].apply(partialParams)
        );
    }

    invokeCancelCertificateTransfer(partialParams: ToOptional<{
      [K in keyof CancelCertificateTransferRequest & keyof CancelCertificateTransferRequest & keyof CancelCertificateTransferRequest & keyof CancelCertificateTransferRequest & keyof CancelCertificateTransferRequest]: (CancelCertificateTransferRequest & CancelCertificateTransferRequest & CancelCertificateTransferRequest & CancelCertificateTransferRequest & CancelCertificateTransferRequest)[K]
    }>): void {
        return this.client.cancelCertificateTransfer(
            this.ops["CancelCertificateTransfer"].apply(partialParams)
        );
    }

    invokeCancelDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof CancelDetectMitigationActionsTaskRequest & keyof CancelDetectMitigationActionsTaskRequest & keyof CancelDetectMitigationActionsTaskRequest & keyof CancelDetectMitigationActionsTaskRequest & keyof CancelDetectMitigationActionsTaskRequest]: (CancelDetectMitigationActionsTaskRequest & CancelDetectMitigationActionsTaskRequest & CancelDetectMitigationActionsTaskRequest & CancelDetectMitigationActionsTaskRequest & CancelDetectMitigationActionsTaskRequest)[K]
    }>): CancelDetectMitigationActionsTaskResponse {
        return this.client.cancelDetectMitigationActionsTask(
            this.ops["CancelDetectMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): CancelJobResponse {
        return this.client.cancelJob(
            this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeCancelJobExecution(partialParams: ToOptional<{
      [K in keyof CancelJobExecutionRequest & keyof CancelJobExecutionRequest & keyof CancelJobExecutionRequest & keyof CancelJobExecutionRequest & keyof CancelJobExecutionRequest]: (CancelJobExecutionRequest & CancelJobExecutionRequest & CancelJobExecutionRequest & CancelJobExecutionRequest & CancelJobExecutionRequest)[K]
    }>): void {
        return this.client.cancelJobExecution(
            this.ops["CancelJobExecution"].apply(partialParams)
        );
    }

    invokeConfirmTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof ConfirmTopicRuleDestinationRequest & keyof ConfirmTopicRuleDestinationRequest & keyof ConfirmTopicRuleDestinationRequest & keyof ConfirmTopicRuleDestinationRequest & keyof ConfirmTopicRuleDestinationRequest]: (ConfirmTopicRuleDestinationRequest & ConfirmTopicRuleDestinationRequest & ConfirmTopicRuleDestinationRequest & ConfirmTopicRuleDestinationRequest & ConfirmTopicRuleDestinationRequest)[K]
    }>): ConfirmTopicRuleDestinationResponse {
        return this.client.confirmTopicRuleDestination(
            this.ops["ConfirmTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeCreateAuditSuppression(partialParams: ToOptional<{
      [K in keyof CreateAuditSuppressionRequest & keyof CreateAuditSuppressionRequest & keyof CreateAuditSuppressionRequest & keyof CreateAuditSuppressionRequest & keyof CreateAuditSuppressionRequest]: (CreateAuditSuppressionRequest & CreateAuditSuppressionRequest & CreateAuditSuppressionRequest & CreateAuditSuppressionRequest & CreateAuditSuppressionRequest)[K]
    }>): CreateAuditSuppressionResponse {
        return this.client.createAuditSuppression(
            this.ops["CreateAuditSuppression"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof Omit<CreateAuthorizerRequest, "authorizerFunctionArn"> & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest & Omit<CreateAuthorizerRequest, "authorizerFunctionArn"> & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest)[K]
    }>): CreateAuthorizerResponse {
        return this.client.createAuthorizer(
            this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateBillingGroup(partialParams: ToOptional<{
      [K in keyof CreateBillingGroupRequest & keyof CreateBillingGroupRequest & keyof CreateBillingGroupRequest & keyof CreateBillingGroupRequest & keyof CreateBillingGroupRequest]: (CreateBillingGroupRequest & CreateBillingGroupRequest & CreateBillingGroupRequest & CreateBillingGroupRequest & CreateBillingGroupRequest)[K]
    }>): CreateBillingGroupResponse {
        return this.client.createBillingGroup(
            this.ops["CreateBillingGroup"].apply(partialParams)
        );
    }

    invokeCreateCertificateFromCsr(partialParams: ToOptional<{
      [K in keyof CreateCertificateFromCsrRequest & keyof CreateCertificateFromCsrRequest & keyof CreateCertificateFromCsrRequest & keyof CreateCertificateFromCsrRequest & keyof CreateCertificateFromCsrRequest]: (CreateCertificateFromCsrRequest & CreateCertificateFromCsrRequest & CreateCertificateFromCsrRequest & CreateCertificateFromCsrRequest & CreateCertificateFromCsrRequest)[K]
    }>): CreateCertificateFromCsrResponse {
        return this.client.createCertificateFromCsr(
            this.ops["CreateCertificateFromCsr"].apply(partialParams)
        );
    }

    invokeCreateCustomMetric(partialParams: ToOptional<{
      [K in keyof CreateCustomMetricRequest & keyof CreateCustomMetricRequest & keyof CreateCustomMetricRequest & keyof CreateCustomMetricRequest & keyof CreateCustomMetricRequest]: (CreateCustomMetricRequest & CreateCustomMetricRequest & CreateCustomMetricRequest & CreateCustomMetricRequest & CreateCustomMetricRequest)[K]
    }>): CreateCustomMetricResponse {
        return this.client.createCustomMetric(
            this.ops["CreateCustomMetric"].apply(partialParams)
        );
    }

    invokeCreateDimension(partialParams: ToOptional<{
      [K in keyof CreateDimensionRequest & keyof CreateDimensionRequest & keyof CreateDimensionRequest & keyof CreateDimensionRequest & keyof CreateDimensionRequest]: (CreateDimensionRequest & CreateDimensionRequest & CreateDimensionRequest & CreateDimensionRequest & CreateDimensionRequest)[K]
    }>): CreateDimensionResponse {
        return this.client.createDimension(
            this.ops["CreateDimension"].apply(partialParams)
        );
    }

    invokeCreateDomainConfiguration(partialParams: ToOptional<{
      [K in keyof CreateDomainConfigurationRequest & keyof CreateDomainConfigurationRequest & keyof CreateDomainConfigurationRequest & keyof CreateDomainConfigurationRequest & keyof CreateDomainConfigurationRequest]: (CreateDomainConfigurationRequest & CreateDomainConfigurationRequest & CreateDomainConfigurationRequest & CreateDomainConfigurationRequest & CreateDomainConfigurationRequest)[K]
    }>): CreateDomainConfigurationResponse {
        return this.client.createDomainConfiguration(
            this.ops["CreateDomainConfiguration"].apply(partialParams)
        );
    }

    invokeCreateDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof CreateDynamicThingGroupRequest & keyof CreateDynamicThingGroupRequest & keyof CreateDynamicThingGroupRequest & keyof CreateDynamicThingGroupRequest & keyof CreateDynamicThingGroupRequest]: (CreateDynamicThingGroupRequest & CreateDynamicThingGroupRequest & CreateDynamicThingGroupRequest & CreateDynamicThingGroupRequest & CreateDynamicThingGroupRequest)[K]
    }>): CreateDynamicThingGroupResponse {
        return this.client.createDynamicThingGroup(
            this.ops["CreateDynamicThingGroup"].apply(partialParams)
        );
    }

    invokeCreateFleetMetric(partialParams: ToOptional<{
      [K in keyof CreateFleetMetricRequest & keyof CreateFleetMetricRequest & keyof CreateFleetMetricRequest & keyof CreateFleetMetricRequest & keyof CreateFleetMetricRequest]: (CreateFleetMetricRequest & CreateFleetMetricRequest & CreateFleetMetricRequest & CreateFleetMetricRequest & CreateFleetMetricRequest)[K]
    }>): CreateFleetMetricResponse {
        return this.client.createFleetMetric(
            this.ops["CreateFleetMetric"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): CreateJobResponse {
        return this.client.createJob(
            this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateJobTemplate(partialParams: ToOptional<{
      [K in keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest]: (CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest)[K]
    }>): CreateJobTemplateResponse {
        return this.client.createJobTemplate(
            this.ops["CreateJobTemplate"].apply(partialParams)
        );
    }

    invokeCreateMitigationAction(partialParams: ToOptional<{
      [K in keyof CreateMitigationActionRequest & keyof CreateMitigationActionRequest & keyof CreateMitigationActionRequest & keyof CreateMitigationActionRequest & keyof CreateMitigationActionRequest]: (CreateMitigationActionRequest & CreateMitigationActionRequest & CreateMitigationActionRequest & CreateMitigationActionRequest & CreateMitigationActionRequest)[K]
    }>): CreateMitigationActionResponse {
        return this.client.createMitigationAction(
            this.ops["CreateMitigationAction"].apply(partialParams)
        );
    }

    invokeCreateOTAUpdate(partialParams: ToOptional<{
      [K in keyof CreateOTAUpdateRequest & keyof CreateOTAUpdateRequest & keyof CreateOTAUpdateRequest & keyof CreateOTAUpdateRequest & keyof CreateOTAUpdateRequest]: (CreateOTAUpdateRequest & CreateOTAUpdateRequest & CreateOTAUpdateRequest & CreateOTAUpdateRequest & CreateOTAUpdateRequest)[K]
    }>): CreateOTAUpdateResponse {
        return this.client.createOTAUpdate(
            this.ops["CreateOTAUpdate"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest]: (CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest)[K]
    }>): CreatePolicyResponse {
        return this.client.createPolicy(
            this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest & keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest & CreatePolicyVersionRequest)[K]
    }>): CreatePolicyVersionResponse {
        return this.client.createPolicyVersion(
            this.ops["CreatePolicyVersion"].apply(partialParams)
        );
    }

    invokeCreateProvisioningClaim(partialParams: ToOptional<{
      [K in keyof CreateProvisioningClaimRequest & keyof CreateProvisioningClaimRequest & keyof CreateProvisioningClaimRequest & keyof CreateProvisioningClaimRequest & keyof CreateProvisioningClaimRequest]: (CreateProvisioningClaimRequest & CreateProvisioningClaimRequest & CreateProvisioningClaimRequest & CreateProvisioningClaimRequest & CreateProvisioningClaimRequest)[K]
    }>): CreateProvisioningClaimResponse {
        return this.client.createProvisioningClaim(
            this.ops["CreateProvisioningClaim"].apply(partialParams)
        );
    }

    invokeCreateProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof CreateProvisioningTemplateRequest & keyof CreateProvisioningTemplateRequest & keyof CreateProvisioningTemplateRequest & keyof CreateProvisioningTemplateRequest & keyof CreateProvisioningTemplateRequest]: (CreateProvisioningTemplateRequest & CreateProvisioningTemplateRequest & CreateProvisioningTemplateRequest & CreateProvisioningTemplateRequest & CreateProvisioningTemplateRequest)[K]
    }>): CreateProvisioningTemplateResponse {
        return this.client.createProvisioningTemplate(
            this.ops["CreateProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeCreateProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateProvisioningTemplateVersionRequest & keyof CreateProvisioningTemplateVersionRequest & keyof CreateProvisioningTemplateVersionRequest & keyof CreateProvisioningTemplateVersionRequest & keyof CreateProvisioningTemplateVersionRequest]: (CreateProvisioningTemplateVersionRequest & CreateProvisioningTemplateVersionRequest & CreateProvisioningTemplateVersionRequest & CreateProvisioningTemplateVersionRequest & CreateProvisioningTemplateVersionRequest)[K]
    }>): CreateProvisioningTemplateVersionResponse {
        return this.client.createProvisioningTemplateVersion(
            this.ops["CreateProvisioningTemplateVersion"].apply(partialParams)
        );
    }

    invokeCreateRoleAlias(partialParams: ToOptional<{
      [K in keyof CreateRoleAliasRequest & keyof CreateRoleAliasRequest & keyof CreateRoleAliasRequest & keyof CreateRoleAliasRequest & keyof CreateRoleAliasRequest]: (CreateRoleAliasRequest & CreateRoleAliasRequest & CreateRoleAliasRequest & CreateRoleAliasRequest & CreateRoleAliasRequest)[K]
    }>): CreateRoleAliasResponse {
        return this.client.createRoleAlias(
            this.ops["CreateRoleAlias"].apply(partialParams)
        );
    }

    invokeCreateScheduledAudit(partialParams: ToOptional<{
      [K in keyof CreateScheduledAuditRequest & keyof CreateScheduledAuditRequest & keyof CreateScheduledAuditRequest & keyof CreateScheduledAuditRequest & keyof CreateScheduledAuditRequest]: (CreateScheduledAuditRequest & CreateScheduledAuditRequest & CreateScheduledAuditRequest & CreateScheduledAuditRequest & CreateScheduledAuditRequest)[K]
    }>): CreateScheduledAuditResponse {
        return this.client.createScheduledAudit(
            this.ops["CreateScheduledAudit"].apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest & keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest & CreateSecurityProfileRequest)[K]
    }>): CreateSecurityProfileResponse {
        return this.client.createSecurityProfile(
            this.ops["CreateSecurityProfile"].apply(partialParams)
        );
    }

    invokeCreateStream(partialParams: ToOptional<{
      [K in keyof CreateStreamRequest & keyof CreateStreamRequest & keyof CreateStreamRequest & keyof CreateStreamRequest & keyof CreateStreamRequest]: (CreateStreamRequest & CreateStreamRequest & CreateStreamRequest & CreateStreamRequest & CreateStreamRequest)[K]
    }>): CreateStreamResponse {
        return this.client.createStream(
            this.ops["CreateStream"].apply(partialParams)
        );
    }

    invokeCreateThing(partialParams: ToOptional<{
      [K in keyof CreateThingRequest & keyof CreateThingRequest & keyof CreateThingRequest & keyof CreateThingRequest & keyof CreateThingRequest]: (CreateThingRequest & CreateThingRequest & CreateThingRequest & CreateThingRequest & CreateThingRequest)[K]
    }>): CreateThingResponse {
        return this.client.createThing(
            this.ops["CreateThing"].apply(partialParams)
        );
    }

    invokeCreateThingGroup(partialParams: ToOptional<{
      [K in keyof CreateThingGroupRequest & keyof CreateThingGroupRequest & keyof CreateThingGroupRequest & keyof CreateThingGroupRequest & keyof CreateThingGroupRequest]: (CreateThingGroupRequest & CreateThingGroupRequest & CreateThingGroupRequest & CreateThingGroupRequest & CreateThingGroupRequest)[K]
    }>): CreateThingGroupResponse {
        return this.client.createThingGroup(
            this.ops["CreateThingGroup"].apply(partialParams)
        );
    }

    invokeCreateThingType(partialParams: ToOptional<{
      [K in keyof CreateThingTypeRequest & keyof CreateThingTypeRequest & keyof CreateThingTypeRequest & keyof CreateThingTypeRequest & keyof CreateThingTypeRequest]: (CreateThingTypeRequest & CreateThingTypeRequest & CreateThingTypeRequest & CreateThingTypeRequest & CreateThingTypeRequest)[K]
    }>): CreateThingTypeResponse {
        return this.client.createThingType(
            this.ops["CreateThingType"].apply(partialParams)
        );
    }

    invokeCreateTopicRule(partialParams: ToOptional<{
      [K in keyof CreateTopicRuleRequest & keyof CreateTopicRuleRequest & keyof CreateTopicRuleRequest & keyof CreateTopicRuleRequest & keyof CreateTopicRuleRequest]: (CreateTopicRuleRequest & CreateTopicRuleRequest & CreateTopicRuleRequest & CreateTopicRuleRequest & CreateTopicRuleRequest)[K]
    }>): void {
        return this.client.createTopicRule(
            this.ops["CreateTopicRule"].apply(partialParams)
        );
    }

    invokeCreateTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof CreateTopicRuleDestinationRequest & keyof CreateTopicRuleDestinationRequest & keyof CreateTopicRuleDestinationRequest & keyof CreateTopicRuleDestinationRequest & keyof CreateTopicRuleDestinationRequest]: (CreateTopicRuleDestinationRequest & CreateTopicRuleDestinationRequest & CreateTopicRuleDestinationRequest & CreateTopicRuleDestinationRequest & CreateTopicRuleDestinationRequest)[K]
    }>): CreateTopicRuleDestinationResponse {
        return this.client.createTopicRuleDestination(
            this.ops["CreateTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeDeleteAuditSuppression(partialParams: ToOptional<{
      [K in keyof DeleteAuditSuppressionRequest & keyof DeleteAuditSuppressionRequest & keyof DeleteAuditSuppressionRequest & keyof DeleteAuditSuppressionRequest & keyof DeleteAuditSuppressionRequest]: (DeleteAuditSuppressionRequest & DeleteAuditSuppressionRequest & DeleteAuditSuppressionRequest & DeleteAuditSuppressionRequest & DeleteAuditSuppressionRequest)[K]
    }>): DeleteAuditSuppressionResponse {
        return this.client.deleteAuditSuppression(
            this.ops["DeleteAuditSuppression"].apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest)[K]
    }>): DeleteAuthorizerResponse {
        return this.client.deleteAuthorizer(
            this.ops["DeleteAuthorizer"].apply(partialParams)
        );
    }

    invokeDeleteBillingGroup(partialParams: ToOptional<{
      [K in keyof DeleteBillingGroupRequest & keyof DeleteBillingGroupRequest & keyof DeleteBillingGroupRequest & keyof DeleteBillingGroupRequest & keyof DeleteBillingGroupRequest]: (DeleteBillingGroupRequest & DeleteBillingGroupRequest & DeleteBillingGroupRequest & DeleteBillingGroupRequest & DeleteBillingGroupRequest)[K]
    }>): DeleteBillingGroupResponse {
        return this.client.deleteBillingGroup(
            this.ops["DeleteBillingGroup"].apply(partialParams)
        );
    }

    invokeDeleteCACertificate(partialParams: ToOptional<{
      [K in keyof DeleteCACertificateRequest & keyof DeleteCACertificateRequest & keyof DeleteCACertificateRequest & keyof DeleteCACertificateRequest & keyof DeleteCACertificateRequest]: (DeleteCACertificateRequest & DeleteCACertificateRequest & DeleteCACertificateRequest & DeleteCACertificateRequest & DeleteCACertificateRequest)[K]
    }>): DeleteCACertificateResponse {
        return this.client.deleteCACertificate(
            this.ops["DeleteCACertificate"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest]: (DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest)[K]
    }>): void {
        return this.client.deleteCertificate(
            this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDeleteCustomMetric(partialParams: ToOptional<{
      [K in keyof DeleteCustomMetricRequest & keyof DeleteCustomMetricRequest & keyof DeleteCustomMetricRequest & keyof DeleteCustomMetricRequest & keyof DeleteCustomMetricRequest]: (DeleteCustomMetricRequest & DeleteCustomMetricRequest & DeleteCustomMetricRequest & DeleteCustomMetricRequest & DeleteCustomMetricRequest)[K]
    }>): DeleteCustomMetricResponse {
        return this.client.deleteCustomMetric(
            this.ops["DeleteCustomMetric"].apply(partialParams)
        );
    }

    invokeDeleteDimension(partialParams: ToOptional<{
      [K in keyof DeleteDimensionRequest & keyof DeleteDimensionRequest & keyof DeleteDimensionRequest & keyof DeleteDimensionRequest & keyof DeleteDimensionRequest]: (DeleteDimensionRequest & DeleteDimensionRequest & DeleteDimensionRequest & DeleteDimensionRequest & DeleteDimensionRequest)[K]
    }>): DeleteDimensionResponse {
        return this.client.deleteDimension(
            this.ops["DeleteDimension"].apply(partialParams)
        );
    }

    invokeDeleteDomainConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteDomainConfigurationRequest & keyof DeleteDomainConfigurationRequest & keyof DeleteDomainConfigurationRequest & keyof DeleteDomainConfigurationRequest & keyof DeleteDomainConfigurationRequest]: (DeleteDomainConfigurationRequest & DeleteDomainConfigurationRequest & DeleteDomainConfigurationRequest & DeleteDomainConfigurationRequest & DeleteDomainConfigurationRequest)[K]
    }>): DeleteDomainConfigurationResponse {
        return this.client.deleteDomainConfiguration(
            this.ops["DeleteDomainConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof DeleteDynamicThingGroupRequest & keyof DeleteDynamicThingGroupRequest & keyof DeleteDynamicThingGroupRequest & keyof DeleteDynamicThingGroupRequest & keyof DeleteDynamicThingGroupRequest]: (DeleteDynamicThingGroupRequest & DeleteDynamicThingGroupRequest & DeleteDynamicThingGroupRequest & DeleteDynamicThingGroupRequest & DeleteDynamicThingGroupRequest)[K]
    }>): DeleteDynamicThingGroupResponse {
        return this.client.deleteDynamicThingGroup(
            this.ops["DeleteDynamicThingGroup"].apply(partialParams)
        );
    }

    invokeDeleteFleetMetric(partialParams: ToOptional<{
      [K in keyof DeleteFleetMetricRequest & keyof DeleteFleetMetricRequest & keyof DeleteFleetMetricRequest & keyof DeleteFleetMetricRequest & keyof DeleteFleetMetricRequest]: (DeleteFleetMetricRequest & DeleteFleetMetricRequest & DeleteFleetMetricRequest & DeleteFleetMetricRequest & DeleteFleetMetricRequest)[K]
    }>): void {
        return this.client.deleteFleetMetric(
            this.ops["DeleteFleetMetric"].apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest]: (DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest)[K]
    }>): void {
        return this.client.deleteJob(
            this.ops["DeleteJob"].apply(partialParams)
        );
    }

    invokeDeleteJobExecution(partialParams: ToOptional<{
      [K in keyof DeleteJobExecutionRequest & keyof DeleteJobExecutionRequest & keyof DeleteJobExecutionRequest & keyof DeleteJobExecutionRequest & keyof DeleteJobExecutionRequest]: (DeleteJobExecutionRequest & DeleteJobExecutionRequest & DeleteJobExecutionRequest & DeleteJobExecutionRequest & DeleteJobExecutionRequest)[K]
    }>): void {
        return this.client.deleteJobExecution(
            this.ops["DeleteJobExecution"].apply(partialParams)
        );
    }

    invokeDeleteJobTemplate(partialParams: ToOptional<{
      [K in keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest]: (DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest)[K]
    }>): void {
        return this.client.deleteJobTemplate(
            this.ops["DeleteJobTemplate"].apply(partialParams)
        );
    }

    invokeDeleteMitigationAction(partialParams: ToOptional<{
      [K in keyof DeleteMitigationActionRequest & keyof DeleteMitigationActionRequest & keyof DeleteMitigationActionRequest & keyof DeleteMitigationActionRequest & keyof DeleteMitigationActionRequest]: (DeleteMitigationActionRequest & DeleteMitigationActionRequest & DeleteMitigationActionRequest & DeleteMitigationActionRequest & DeleteMitigationActionRequest)[K]
    }>): DeleteMitigationActionResponse {
        return this.client.deleteMitigationAction(
            this.ops["DeleteMitigationAction"].apply(partialParams)
        );
    }

    invokeDeleteOTAUpdate(partialParams: ToOptional<{
      [K in keyof DeleteOTAUpdateRequest & keyof DeleteOTAUpdateRequest & keyof DeleteOTAUpdateRequest & keyof DeleteOTAUpdateRequest & keyof DeleteOTAUpdateRequest]: (DeleteOTAUpdateRequest & DeleteOTAUpdateRequest & DeleteOTAUpdateRequest & DeleteOTAUpdateRequest & DeleteOTAUpdateRequest)[K]
    }>): DeleteOTAUpdateResponse {
        return this.client.deleteOTAUpdate(
            this.ops["DeleteOTAUpdate"].apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): void {
        return this.client.deletePolicy(
            this.ops["DeletePolicy"].apply(partialParams)
        );
    }

    invokeDeletePolicyVersion(partialParams: ToOptional<{
      [K in keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest & keyof DeletePolicyVersionRequest]: (DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest & DeletePolicyVersionRequest)[K]
    }>): void {
        return this.client.deletePolicyVersion(
            this.ops["DeletePolicyVersion"].apply(partialParams)
        );
    }

    invokeDeleteProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningTemplateRequest & keyof DeleteProvisioningTemplateRequest & keyof DeleteProvisioningTemplateRequest & keyof DeleteProvisioningTemplateRequest & keyof DeleteProvisioningTemplateRequest]: (DeleteProvisioningTemplateRequest & DeleteProvisioningTemplateRequest & DeleteProvisioningTemplateRequest & DeleteProvisioningTemplateRequest & DeleteProvisioningTemplateRequest)[K]
    }>): DeleteProvisioningTemplateResponse {
        return this.client.deleteProvisioningTemplate(
            this.ops["DeleteProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeDeleteProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningTemplateVersionRequest & keyof DeleteProvisioningTemplateVersionRequest & keyof DeleteProvisioningTemplateVersionRequest & keyof DeleteProvisioningTemplateVersionRequest & keyof DeleteProvisioningTemplateVersionRequest]: (DeleteProvisioningTemplateVersionRequest & DeleteProvisioningTemplateVersionRequest & DeleteProvisioningTemplateVersionRequest & DeleteProvisioningTemplateVersionRequest & DeleteProvisioningTemplateVersionRequest)[K]
    }>): DeleteProvisioningTemplateVersionResponse {
        return this.client.deleteProvisioningTemplateVersion(
            this.ops["DeleteProvisioningTemplateVersion"].apply(partialParams)
        );
    }

    invokeDeleteRoleAlias(partialParams: ToOptional<{
      [K in keyof DeleteRoleAliasRequest & keyof DeleteRoleAliasRequest & keyof DeleteRoleAliasRequest & keyof DeleteRoleAliasRequest & keyof DeleteRoleAliasRequest]: (DeleteRoleAliasRequest & DeleteRoleAliasRequest & DeleteRoleAliasRequest & DeleteRoleAliasRequest & DeleteRoleAliasRequest)[K]
    }>): DeleteRoleAliasResponse {
        return this.client.deleteRoleAlias(
            this.ops["DeleteRoleAlias"].apply(partialParams)
        );
    }

    invokeDeleteScheduledAudit(partialParams: ToOptional<{
      [K in keyof DeleteScheduledAuditRequest & keyof DeleteScheduledAuditRequest & keyof DeleteScheduledAuditRequest & keyof DeleteScheduledAuditRequest & keyof DeleteScheduledAuditRequest]: (DeleteScheduledAuditRequest & DeleteScheduledAuditRequest & DeleteScheduledAuditRequest & DeleteScheduledAuditRequest & DeleteScheduledAuditRequest)[K]
    }>): DeleteScheduledAuditResponse {
        return this.client.deleteScheduledAudit(
            this.ops["DeleteScheduledAudit"].apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest & keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest & DeleteSecurityProfileRequest)[K]
    }>): DeleteSecurityProfileResponse {
        return this.client.deleteSecurityProfile(
            this.ops["DeleteSecurityProfile"].apply(partialParams)
        );
    }

    invokeDeleteStream(partialParams: ToOptional<{
      [K in keyof DeleteStreamRequest & keyof DeleteStreamRequest & keyof DeleteStreamRequest & keyof DeleteStreamRequest & keyof DeleteStreamRequest]: (DeleteStreamRequest & DeleteStreamRequest & DeleteStreamRequest & DeleteStreamRequest & DeleteStreamRequest)[K]
    }>): DeleteStreamResponse {
        return this.client.deleteStream(
            this.ops["DeleteStream"].apply(partialParams)
        );
    }

    invokeDeleteThing(partialParams: ToOptional<{
      [K in keyof DeleteThingRequest & keyof DeleteThingRequest & keyof DeleteThingRequest & keyof DeleteThingRequest & keyof DeleteThingRequest]: (DeleteThingRequest & DeleteThingRequest & DeleteThingRequest & DeleteThingRequest & DeleteThingRequest)[K]
    }>): DeleteThingResponse {
        return this.client.deleteThing(
            this.ops["DeleteThing"].apply(partialParams)
        );
    }

    invokeDeleteThingGroup(partialParams: ToOptional<{
      [K in keyof DeleteThingGroupRequest & keyof DeleteThingGroupRequest & keyof DeleteThingGroupRequest & keyof DeleteThingGroupRequest & keyof DeleteThingGroupRequest]: (DeleteThingGroupRequest & DeleteThingGroupRequest & DeleteThingGroupRequest & DeleteThingGroupRequest & DeleteThingGroupRequest)[K]
    }>): DeleteThingGroupResponse {
        return this.client.deleteThingGroup(
            this.ops["DeleteThingGroup"].apply(partialParams)
        );
    }

    invokeDeleteThingType(partialParams: ToOptional<{
      [K in keyof DeleteThingTypeRequest & keyof DeleteThingTypeRequest & keyof DeleteThingTypeRequest & keyof DeleteThingTypeRequest & keyof DeleteThingTypeRequest]: (DeleteThingTypeRequest & DeleteThingTypeRequest & DeleteThingTypeRequest & DeleteThingTypeRequest & DeleteThingTypeRequest)[K]
    }>): DeleteThingTypeResponse {
        return this.client.deleteThingType(
            this.ops["DeleteThingType"].apply(partialParams)
        );
    }

    invokeDeleteTopicRule(partialParams: ToOptional<{
      [K in keyof DeleteTopicRuleRequest & keyof DeleteTopicRuleRequest & keyof DeleteTopicRuleRequest & keyof DeleteTopicRuleRequest & keyof DeleteTopicRuleRequest]: (DeleteTopicRuleRequest & DeleteTopicRuleRequest & DeleteTopicRuleRequest & DeleteTopicRuleRequest & DeleteTopicRuleRequest)[K]
    }>): void {
        return this.client.deleteTopicRule(
            this.ops["DeleteTopicRule"].apply(partialParams)
        );
    }

    invokeDeleteTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof Omit<DeleteTopicRuleDestinationRequest, "arn"> & keyof DeleteTopicRuleDestinationRequest & keyof DeleteTopicRuleDestinationRequest & keyof DeleteTopicRuleDestinationRequest & keyof DeleteTopicRuleDestinationRequest]: (Omit<DeleteTopicRuleDestinationRequest, "arn"> & DeleteTopicRuleDestinationRequest & DeleteTopicRuleDestinationRequest & DeleteTopicRuleDestinationRequest & DeleteTopicRuleDestinationRequest)[K]
    }>): DeleteTopicRuleDestinationResponse {
        return this.client.deleteTopicRuleDestination(
            this.ops["DeleteTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeDeleteV2LoggingLevel(partialParams: ToOptional<{
      [K in keyof DeleteV2LoggingLevelRequest & keyof DeleteV2LoggingLevelRequest & keyof DeleteV2LoggingLevelRequest & keyof DeleteV2LoggingLevelRequest & keyof DeleteV2LoggingLevelRequest]: (DeleteV2LoggingLevelRequest & DeleteV2LoggingLevelRequest & DeleteV2LoggingLevelRequest & DeleteV2LoggingLevelRequest & DeleteV2LoggingLevelRequest)[K]
    }>): void {
        return this.client.deleteV2LoggingLevel(
            this.ops["DeleteV2LoggingLevel"].apply(partialParams)
        );
    }

    invokeDeprecateThingType(partialParams: ToOptional<{
      [K in keyof DeprecateThingTypeRequest & keyof DeprecateThingTypeRequest & keyof DeprecateThingTypeRequest & keyof DeprecateThingTypeRequest & keyof DeprecateThingTypeRequest]: (DeprecateThingTypeRequest & DeprecateThingTypeRequest & DeprecateThingTypeRequest & DeprecateThingTypeRequest & DeprecateThingTypeRequest)[K]
    }>): DeprecateThingTypeResponse {
        return this.client.deprecateThingType(
            this.ops["DeprecateThingType"].apply(partialParams)
        );
    }

    invokeDescribeAuditFinding(partialParams: ToOptional<{
      [K in keyof DescribeAuditFindingRequest & keyof DescribeAuditFindingRequest & keyof DescribeAuditFindingRequest & keyof DescribeAuditFindingRequest & keyof DescribeAuditFindingRequest]: (DescribeAuditFindingRequest & DescribeAuditFindingRequest & DescribeAuditFindingRequest & DescribeAuditFindingRequest & DescribeAuditFindingRequest)[K]
    }>): DescribeAuditFindingResponse {
        return this.client.describeAuditFinding(
            this.ops["DescribeAuditFinding"].apply(partialParams)
        );
    }

    invokeDescribeAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof DescribeAuditMitigationActionsTaskRequest & keyof DescribeAuditMitigationActionsTaskRequest & keyof DescribeAuditMitigationActionsTaskRequest & keyof DescribeAuditMitigationActionsTaskRequest & keyof DescribeAuditMitigationActionsTaskRequest]: (DescribeAuditMitigationActionsTaskRequest & DescribeAuditMitigationActionsTaskRequest & DescribeAuditMitigationActionsTaskRequest & DescribeAuditMitigationActionsTaskRequest & DescribeAuditMitigationActionsTaskRequest)[K]
    }>): DescribeAuditMitigationActionsTaskResponse {
        return this.client.describeAuditMitigationActionsTask(
            this.ops["DescribeAuditMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeDescribeAuditSuppression(partialParams: ToOptional<{
      [K in keyof DescribeAuditSuppressionRequest & keyof DescribeAuditSuppressionRequest & keyof DescribeAuditSuppressionRequest & keyof DescribeAuditSuppressionRequest & keyof DescribeAuditSuppressionRequest]: (DescribeAuditSuppressionRequest & DescribeAuditSuppressionRequest & DescribeAuditSuppressionRequest & DescribeAuditSuppressionRequest & DescribeAuditSuppressionRequest)[K]
    }>): DescribeAuditSuppressionResponse {
        return this.client.describeAuditSuppression(
            this.ops["DescribeAuditSuppression"].apply(partialParams)
        );
    }

    invokeDescribeAuditTask(partialParams: ToOptional<{
      [K in keyof DescribeAuditTaskRequest & keyof DescribeAuditTaskRequest & keyof DescribeAuditTaskRequest & keyof DescribeAuditTaskRequest & keyof DescribeAuditTaskRequest]: (DescribeAuditTaskRequest & DescribeAuditTaskRequest & DescribeAuditTaskRequest & DescribeAuditTaskRequest & DescribeAuditTaskRequest)[K]
    }>): DescribeAuditTaskResponse {
        return this.client.describeAuditTask(
            this.ops["DescribeAuditTask"].apply(partialParams)
        );
    }

    invokeDescribeAuthorizer(partialParams: ToOptional<{
      [K in keyof DescribeAuthorizerRequest & keyof DescribeAuthorizerRequest & keyof DescribeAuthorizerRequest & keyof DescribeAuthorizerRequest & keyof DescribeAuthorizerRequest]: (DescribeAuthorizerRequest & DescribeAuthorizerRequest & DescribeAuthorizerRequest & DescribeAuthorizerRequest & DescribeAuthorizerRequest)[K]
    }>): DescribeAuthorizerResponse {
        return this.client.describeAuthorizer(
            this.ops["DescribeAuthorizer"].apply(partialParams)
        );
    }

    invokeDescribeBillingGroup(partialParams: ToOptional<{
      [K in keyof DescribeBillingGroupRequest & keyof DescribeBillingGroupRequest & keyof DescribeBillingGroupRequest & keyof DescribeBillingGroupRequest & keyof DescribeBillingGroupRequest]: (DescribeBillingGroupRequest & DescribeBillingGroupRequest & DescribeBillingGroupRequest & DescribeBillingGroupRequest & DescribeBillingGroupRequest)[K]
    }>): DescribeBillingGroupResponse {
        return this.client.describeBillingGroup(
            this.ops["DescribeBillingGroup"].apply(partialParams)
        );
    }

    invokeDescribeCACertificate(partialParams: ToOptional<{
      [K in keyof DescribeCACertificateRequest & keyof DescribeCACertificateRequest & keyof DescribeCACertificateRequest & keyof DescribeCACertificateRequest & keyof DescribeCACertificateRequest]: (DescribeCACertificateRequest & DescribeCACertificateRequest & DescribeCACertificateRequest & DescribeCACertificateRequest & DescribeCACertificateRequest)[K]
    }>): DescribeCACertificateResponse {
        return this.client.describeCACertificate(
            this.ops["DescribeCACertificate"].apply(partialParams)
        );
    }

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest]: (DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest)[K]
    }>): DescribeCertificateResponse {
        return this.client.describeCertificate(
            this.ops["DescribeCertificate"].apply(partialParams)
        );
    }

    invokeDescribeCustomMetric(partialParams: ToOptional<{
      [K in keyof DescribeCustomMetricRequest & keyof DescribeCustomMetricRequest & keyof DescribeCustomMetricRequest & keyof DescribeCustomMetricRequest & keyof DescribeCustomMetricRequest]: (DescribeCustomMetricRequest & DescribeCustomMetricRequest & DescribeCustomMetricRequest & DescribeCustomMetricRequest & DescribeCustomMetricRequest)[K]
    }>): DescribeCustomMetricResponse {
        return this.client.describeCustomMetric(
            this.ops["DescribeCustomMetric"].apply(partialParams)
        );
    }

    invokeDescribeDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof DescribeDetectMitigationActionsTaskRequest & keyof DescribeDetectMitigationActionsTaskRequest & keyof DescribeDetectMitigationActionsTaskRequest & keyof DescribeDetectMitigationActionsTaskRequest & keyof DescribeDetectMitigationActionsTaskRequest]: (DescribeDetectMitigationActionsTaskRequest & DescribeDetectMitigationActionsTaskRequest & DescribeDetectMitigationActionsTaskRequest & DescribeDetectMitigationActionsTaskRequest & DescribeDetectMitigationActionsTaskRequest)[K]
    }>): DescribeDetectMitigationActionsTaskResponse {
        return this.client.describeDetectMitigationActionsTask(
            this.ops["DescribeDetectMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeDescribeDimension(partialParams: ToOptional<{
      [K in keyof DescribeDimensionRequest & keyof DescribeDimensionRequest & keyof DescribeDimensionRequest & keyof DescribeDimensionRequest & keyof DescribeDimensionRequest]: (DescribeDimensionRequest & DescribeDimensionRequest & DescribeDimensionRequest & DescribeDimensionRequest & DescribeDimensionRequest)[K]
    }>): DescribeDimensionResponse {
        return this.client.describeDimension(
            this.ops["DescribeDimension"].apply(partialParams)
        );
    }

    invokeDescribeDomainConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeDomainConfigurationRequest & keyof DescribeDomainConfigurationRequest & keyof DescribeDomainConfigurationRequest & keyof DescribeDomainConfigurationRequest & keyof DescribeDomainConfigurationRequest]: (DescribeDomainConfigurationRequest & DescribeDomainConfigurationRequest & DescribeDomainConfigurationRequest & DescribeDomainConfigurationRequest & DescribeDomainConfigurationRequest)[K]
    }>): DescribeDomainConfigurationResponse {
        return this.client.describeDomainConfiguration(
            this.ops["DescribeDomainConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeFleetMetric(partialParams: ToOptional<{
      [K in keyof DescribeFleetMetricRequest & keyof DescribeFleetMetricRequest & keyof DescribeFleetMetricRequest & keyof DescribeFleetMetricRequest & keyof DescribeFleetMetricRequest]: (DescribeFleetMetricRequest & DescribeFleetMetricRequest & DescribeFleetMetricRequest & DescribeFleetMetricRequest & DescribeFleetMetricRequest)[K]
    }>): DescribeFleetMetricResponse {
        return this.client.describeFleetMetric(
            this.ops["DescribeFleetMetric"].apply(partialParams)
        );
    }

    invokeDescribeIndex(partialParams: ToOptional<{
      [K in keyof DescribeIndexRequest & keyof DescribeIndexRequest & keyof DescribeIndexRequest & keyof DescribeIndexRequest & keyof DescribeIndexRequest]: (DescribeIndexRequest & DescribeIndexRequest & DescribeIndexRequest & DescribeIndexRequest & DescribeIndexRequest)[K]
    }>): DescribeIndexResponse {
        return this.client.describeIndex(
            this.ops["DescribeIndex"].apply(partialParams)
        );
    }

    invokeDescribeJob(partialParams: ToOptional<{
      [K in keyof DescribeJobRequest & keyof DescribeJobRequest & keyof DescribeJobRequest & keyof DescribeJobRequest & keyof DescribeJobRequest]: (DescribeJobRequest & DescribeJobRequest & DescribeJobRequest & DescribeJobRequest & DescribeJobRequest)[K]
    }>): DescribeJobResponse {
        return this.client.describeJob(
            this.ops["DescribeJob"].apply(partialParams)
        );
    }

    invokeDescribeJobExecution(partialParams: ToOptional<{
      [K in keyof DescribeJobExecutionRequest & keyof DescribeJobExecutionRequest & keyof DescribeJobExecutionRequest & keyof DescribeJobExecutionRequest & keyof DescribeJobExecutionRequest]: (DescribeJobExecutionRequest & DescribeJobExecutionRequest & DescribeJobExecutionRequest & DescribeJobExecutionRequest & DescribeJobExecutionRequest)[K]
    }>): DescribeJobExecutionResponse {
        return this.client.describeJobExecution(
            this.ops["DescribeJobExecution"].apply(partialParams)
        );
    }

    invokeDescribeJobTemplate(partialParams: ToOptional<{
      [K in keyof DescribeJobTemplateRequest & keyof DescribeJobTemplateRequest & keyof DescribeJobTemplateRequest & keyof DescribeJobTemplateRequest & keyof DescribeJobTemplateRequest]: (DescribeJobTemplateRequest & DescribeJobTemplateRequest & DescribeJobTemplateRequest & DescribeJobTemplateRequest & DescribeJobTemplateRequest)[K]
    }>): DescribeJobTemplateResponse {
        return this.client.describeJobTemplate(
            this.ops["DescribeJobTemplate"].apply(partialParams)
        );
    }

    invokeDescribeManagedJobTemplate(partialParams: ToOptional<{
      [K in keyof DescribeManagedJobTemplateRequest & keyof DescribeManagedJobTemplateRequest & keyof DescribeManagedJobTemplateRequest & keyof DescribeManagedJobTemplateRequest & keyof DescribeManagedJobTemplateRequest]: (DescribeManagedJobTemplateRequest & DescribeManagedJobTemplateRequest & DescribeManagedJobTemplateRequest & DescribeManagedJobTemplateRequest & DescribeManagedJobTemplateRequest)[K]
    }>): DescribeManagedJobTemplateResponse {
        return this.client.describeManagedJobTemplate(
            this.ops["DescribeManagedJobTemplate"].apply(partialParams)
        );
    }

    invokeDescribeMitigationAction(partialParams: ToOptional<{
      [K in keyof DescribeMitigationActionRequest & keyof DescribeMitigationActionRequest & keyof DescribeMitigationActionRequest & keyof DescribeMitigationActionRequest & keyof DescribeMitigationActionRequest]: (DescribeMitigationActionRequest & DescribeMitigationActionRequest & DescribeMitigationActionRequest & DescribeMitigationActionRequest & DescribeMitigationActionRequest)[K]
    }>): DescribeMitigationActionResponse {
        return this.client.describeMitigationAction(
            this.ops["DescribeMitigationAction"].apply(partialParams)
        );
    }

    invokeDescribeProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningTemplateRequest & keyof DescribeProvisioningTemplateRequest & keyof DescribeProvisioningTemplateRequest & keyof DescribeProvisioningTemplateRequest & keyof DescribeProvisioningTemplateRequest]: (DescribeProvisioningTemplateRequest & DescribeProvisioningTemplateRequest & DescribeProvisioningTemplateRequest & DescribeProvisioningTemplateRequest & DescribeProvisioningTemplateRequest)[K]
    }>): DescribeProvisioningTemplateResponse {
        return this.client.describeProvisioningTemplate(
            this.ops["DescribeProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeDescribeProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningTemplateVersionRequest & keyof DescribeProvisioningTemplateVersionRequest & keyof DescribeProvisioningTemplateVersionRequest & keyof DescribeProvisioningTemplateVersionRequest & keyof DescribeProvisioningTemplateVersionRequest]: (DescribeProvisioningTemplateVersionRequest & DescribeProvisioningTemplateVersionRequest & DescribeProvisioningTemplateVersionRequest & DescribeProvisioningTemplateVersionRequest & DescribeProvisioningTemplateVersionRequest)[K]
    }>): DescribeProvisioningTemplateVersionResponse {
        return this.client.describeProvisioningTemplateVersion(
            this.ops["DescribeProvisioningTemplateVersion"].apply(partialParams)
        );
    }

    invokeDescribeRoleAlias(partialParams: ToOptional<{
      [K in keyof DescribeRoleAliasRequest & keyof DescribeRoleAliasRequest & keyof DescribeRoleAliasRequest & keyof DescribeRoleAliasRequest & keyof DescribeRoleAliasRequest]: (DescribeRoleAliasRequest & DescribeRoleAliasRequest & DescribeRoleAliasRequest & DescribeRoleAliasRequest & DescribeRoleAliasRequest)[K]
    }>): DescribeRoleAliasResponse {
        return this.client.describeRoleAlias(
            this.ops["DescribeRoleAlias"].apply(partialParams)
        );
    }

    invokeDescribeScheduledAudit(partialParams: ToOptional<{
      [K in keyof DescribeScheduledAuditRequest & keyof DescribeScheduledAuditRequest & keyof DescribeScheduledAuditRequest & keyof DescribeScheduledAuditRequest & keyof DescribeScheduledAuditRequest]: (DescribeScheduledAuditRequest & DescribeScheduledAuditRequest & DescribeScheduledAuditRequest & DescribeScheduledAuditRequest & DescribeScheduledAuditRequest)[K]
    }>): DescribeScheduledAuditResponse {
        return this.client.describeScheduledAudit(
            this.ops["DescribeScheduledAudit"].apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest & keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest & DescribeSecurityProfileRequest)[K]
    }>): DescribeSecurityProfileResponse {
        return this.client.describeSecurityProfile(
            this.ops["DescribeSecurityProfile"].apply(partialParams)
        );
    }

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamRequest & keyof DescribeStreamRequest & keyof DescribeStreamRequest & keyof DescribeStreamRequest & keyof DescribeStreamRequest]: (DescribeStreamRequest & DescribeStreamRequest & DescribeStreamRequest & DescribeStreamRequest & DescribeStreamRequest)[K]
    }>): DescribeStreamResponse {
        return this.client.describeStream(
            this.ops["DescribeStream"].apply(partialParams)
        );
    }

    invokeDescribeThing(partialParams: ToOptional<{
      [K in keyof DescribeThingRequest & keyof DescribeThingRequest & keyof DescribeThingRequest & keyof DescribeThingRequest & keyof DescribeThingRequest]: (DescribeThingRequest & DescribeThingRequest & DescribeThingRequest & DescribeThingRequest & DescribeThingRequest)[K]
    }>): DescribeThingResponse {
        return this.client.describeThing(
            this.ops["DescribeThing"].apply(partialParams)
        );
    }

    invokeDescribeThingGroup(partialParams: ToOptional<{
      [K in keyof DescribeThingGroupRequest & keyof DescribeThingGroupRequest & keyof DescribeThingGroupRequest & keyof DescribeThingGroupRequest & keyof DescribeThingGroupRequest]: (DescribeThingGroupRequest & DescribeThingGroupRequest & DescribeThingGroupRequest & DescribeThingGroupRequest & DescribeThingGroupRequest)[K]
    }>): DescribeThingGroupResponse {
        return this.client.describeThingGroup(
            this.ops["DescribeThingGroup"].apply(partialParams)
        );
    }

    invokeDescribeThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof DescribeThingRegistrationTaskRequest & keyof DescribeThingRegistrationTaskRequest & keyof DescribeThingRegistrationTaskRequest & keyof DescribeThingRegistrationTaskRequest & keyof DescribeThingRegistrationTaskRequest]: (DescribeThingRegistrationTaskRequest & DescribeThingRegistrationTaskRequest & DescribeThingRegistrationTaskRequest & DescribeThingRegistrationTaskRequest & DescribeThingRegistrationTaskRequest)[K]
    }>): DescribeThingRegistrationTaskResponse {
        return this.client.describeThingRegistrationTask(
            this.ops["DescribeThingRegistrationTask"].apply(partialParams)
        );
    }

    invokeDescribeThingType(partialParams: ToOptional<{
      [K in keyof DescribeThingTypeRequest & keyof DescribeThingTypeRequest & keyof DescribeThingTypeRequest & keyof DescribeThingTypeRequest & keyof DescribeThingTypeRequest]: (DescribeThingTypeRequest & DescribeThingTypeRequest & DescribeThingTypeRequest & DescribeThingTypeRequest & DescribeThingTypeRequest)[K]
    }>): DescribeThingTypeResponse {
        return this.client.describeThingType(
            this.ops["DescribeThingType"].apply(partialParams)
        );
    }

    invokeDetachPolicy(partialParams: ToOptional<{
      [K in keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest]: (DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest)[K]
    }>): void {
        return this.client.detachPolicy(
            this.ops["DetachPolicy"].apply(partialParams)
        );
    }

    invokeDetachPrincipalPolicy(partialParams: ToOptional<{
      [K in keyof DetachPrincipalPolicyRequest & keyof DetachPrincipalPolicyRequest & keyof DetachPrincipalPolicyRequest & keyof DetachPrincipalPolicyRequest & keyof DetachPrincipalPolicyRequest]: (DetachPrincipalPolicyRequest & DetachPrincipalPolicyRequest & DetachPrincipalPolicyRequest & DetachPrincipalPolicyRequest & DetachPrincipalPolicyRequest)[K]
    }>): void {
        return this.client.detachPrincipalPolicy(
            this.ops["DetachPrincipalPolicy"].apply(partialParams)
        );
    }

    invokeDetachSecurityProfile(partialParams: ToOptional<{
      [K in keyof DetachSecurityProfileRequest & keyof DetachSecurityProfileRequest & keyof DetachSecurityProfileRequest & keyof DetachSecurityProfileRequest & keyof DetachSecurityProfileRequest]: (DetachSecurityProfileRequest & DetachSecurityProfileRequest & DetachSecurityProfileRequest & DetachSecurityProfileRequest & DetachSecurityProfileRequest)[K]
    }>): DetachSecurityProfileResponse {
        return this.client.detachSecurityProfile(
            this.ops["DetachSecurityProfile"].apply(partialParams)
        );
    }

    invokeDetachThingPrincipal(partialParams: ToOptional<{
      [K in keyof DetachThingPrincipalRequest & keyof DetachThingPrincipalRequest & keyof DetachThingPrincipalRequest & keyof DetachThingPrincipalRequest & keyof DetachThingPrincipalRequest]: (DetachThingPrincipalRequest & DetachThingPrincipalRequest & DetachThingPrincipalRequest & DetachThingPrincipalRequest & DetachThingPrincipalRequest)[K]
    }>): DetachThingPrincipalResponse {
        return this.client.detachThingPrincipal(
            this.ops["DetachThingPrincipal"].apply(partialParams)
        );
    }

    invokeDisableTopicRule(partialParams: ToOptional<{
      [K in keyof DisableTopicRuleRequest & keyof DisableTopicRuleRequest & keyof DisableTopicRuleRequest & keyof DisableTopicRuleRequest & keyof DisableTopicRuleRequest]: (DisableTopicRuleRequest & DisableTopicRuleRequest & DisableTopicRuleRequest & DisableTopicRuleRequest & DisableTopicRuleRequest)[K]
    }>): void {
        return this.client.disableTopicRule(
            this.ops["DisableTopicRule"].apply(partialParams)
        );
    }

    invokeEnableTopicRule(partialParams: ToOptional<{
      [K in keyof EnableTopicRuleRequest & keyof EnableTopicRuleRequest & keyof EnableTopicRuleRequest & keyof EnableTopicRuleRequest & keyof EnableTopicRuleRequest]: (EnableTopicRuleRequest & EnableTopicRuleRequest & EnableTopicRuleRequest & EnableTopicRuleRequest & EnableTopicRuleRequest)[K]
    }>): void {
        return this.client.enableTopicRule(
            this.ops["EnableTopicRule"].apply(partialParams)
        );
    }

    invokeGetBucketsAggregation(partialParams: ToOptional<{
      [K in keyof GetBucketsAggregationRequest & keyof GetBucketsAggregationRequest & keyof GetBucketsAggregationRequest & keyof GetBucketsAggregationRequest & keyof GetBucketsAggregationRequest]: (GetBucketsAggregationRequest & GetBucketsAggregationRequest & GetBucketsAggregationRequest & GetBucketsAggregationRequest & GetBucketsAggregationRequest)[K]
    }>): GetBucketsAggregationResponse {
        return this.client.getBucketsAggregation(
            this.ops["GetBucketsAggregation"].apply(partialParams)
        );
    }

    invokeGetCardinality(partialParams: ToOptional<{
      [K in keyof GetCardinalityRequest & keyof GetCardinalityRequest & keyof GetCardinalityRequest & keyof GetCardinalityRequest & keyof GetCardinalityRequest]: (GetCardinalityRequest & GetCardinalityRequest & GetCardinalityRequest & GetCardinalityRequest & GetCardinalityRequest)[K]
    }>): GetCardinalityResponse {
        return this.client.getCardinality(
            this.ops["GetCardinality"].apply(partialParams)
        );
    }

    invokeGetJobDocument(partialParams: ToOptional<{
      [K in keyof GetJobDocumentRequest & keyof GetJobDocumentRequest & keyof GetJobDocumentRequest & keyof GetJobDocumentRequest & keyof GetJobDocumentRequest]: (GetJobDocumentRequest & GetJobDocumentRequest & GetJobDocumentRequest & GetJobDocumentRequest & GetJobDocumentRequest)[K]
    }>): GetJobDocumentResponse {
        return this.client.getJobDocument(
            this.ops["GetJobDocument"].apply(partialParams)
        );
    }

    invokeGetOTAUpdate(partialParams: ToOptional<{
      [K in keyof GetOTAUpdateRequest & keyof GetOTAUpdateRequest & keyof GetOTAUpdateRequest & keyof GetOTAUpdateRequest & keyof GetOTAUpdateRequest]: (GetOTAUpdateRequest & GetOTAUpdateRequest & GetOTAUpdateRequest & GetOTAUpdateRequest & GetOTAUpdateRequest)[K]
    }>): GetOTAUpdateResponse {
        return this.client.getOTAUpdate(
            this.ops["GetOTAUpdate"].apply(partialParams)
        );
    }

    invokeGetPercentiles(partialParams: ToOptional<{
      [K in keyof GetPercentilesRequest & keyof GetPercentilesRequest & keyof GetPercentilesRequest & keyof GetPercentilesRequest & keyof GetPercentilesRequest]: (GetPercentilesRequest & GetPercentilesRequest & GetPercentilesRequest & GetPercentilesRequest & GetPercentilesRequest)[K]
    }>): GetPercentilesResponse {
        return this.client.getPercentiles(
            this.ops["GetPercentiles"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest)[K]
    }>): GetPolicyResponse {
        return this.client.getPolicy(
            this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest & keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest & GetPolicyVersionRequest)[K]
    }>): GetPolicyVersionResponse {
        return this.client.getPolicyVersion(
            this.ops["GetPolicyVersion"].apply(partialParams)
        );
    }

    invokeGetStatistics(partialParams: ToOptional<{
      [K in keyof GetStatisticsRequest & keyof GetStatisticsRequest & keyof GetStatisticsRequest & keyof GetStatisticsRequest & keyof GetStatisticsRequest]: (GetStatisticsRequest & GetStatisticsRequest & GetStatisticsRequest & GetStatisticsRequest & GetStatisticsRequest)[K]
    }>): GetStatisticsResponse {
        return this.client.getStatistics(
            this.ops["GetStatistics"].apply(partialParams)
        );
    }

    invokeGetTopicRule(partialParams: ToOptional<{
      [K in keyof GetTopicRuleRequest & keyof GetTopicRuleRequest & keyof GetTopicRuleRequest & keyof GetTopicRuleRequest & keyof GetTopicRuleRequest]: (GetTopicRuleRequest & GetTopicRuleRequest & GetTopicRuleRequest & GetTopicRuleRequest & GetTopicRuleRequest)[K]
    }>): GetTopicRuleResponse {
        return this.client.getTopicRule(
            this.ops["GetTopicRule"].apply(partialParams)
        );
    }

    invokeGetTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof Omit<GetTopicRuleDestinationRequest, "arn"> & keyof GetTopicRuleDestinationRequest & keyof GetTopicRuleDestinationRequest & keyof GetTopicRuleDestinationRequest & keyof GetTopicRuleDestinationRequest]: (Omit<GetTopicRuleDestinationRequest, "arn"> & GetTopicRuleDestinationRequest & GetTopicRuleDestinationRequest & GetTopicRuleDestinationRequest & GetTopicRuleDestinationRequest)[K]
    }>): GetTopicRuleDestinationResponse {
        return this.client.getTopicRuleDestination(
            this.ops["GetTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeListAttachedPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedPoliciesRequest & keyof ListAttachedPoliciesRequest & keyof ListAttachedPoliciesRequest & keyof ListAttachedPoliciesRequest & keyof ListAttachedPoliciesRequest]: (ListAttachedPoliciesRequest & ListAttachedPoliciesRequest & ListAttachedPoliciesRequest & ListAttachedPoliciesRequest & ListAttachedPoliciesRequest)[K]
    }>): ListAttachedPoliciesResponse {
        return this.client.listAttachedPolicies(
            this.ops["ListAttachedPolicies"].apply(partialParams)
        );
    }

    invokeListAuditMitigationActionsExecutions(partialParams: ToOptional<{
      [K in keyof ListAuditMitigationActionsExecutionsRequest & keyof ListAuditMitigationActionsExecutionsRequest & keyof ListAuditMitigationActionsExecutionsRequest & keyof ListAuditMitigationActionsExecutionsRequest & keyof ListAuditMitigationActionsExecutionsRequest]: (ListAuditMitigationActionsExecutionsRequest & ListAuditMitigationActionsExecutionsRequest & ListAuditMitigationActionsExecutionsRequest & ListAuditMitigationActionsExecutionsRequest & ListAuditMitigationActionsExecutionsRequest)[K]
    }>): ListAuditMitigationActionsExecutionsResponse {
        return this.client.listAuditMitigationActionsExecutions(
            this.ops["ListAuditMitigationActionsExecutions"].apply(partialParams)
        );
    }

    invokeListAuditMitigationActionsTasks(partialParams: ToOptional<{
      [K in keyof ListAuditMitigationActionsTasksRequest & keyof ListAuditMitigationActionsTasksRequest & keyof ListAuditMitigationActionsTasksRequest & keyof ListAuditMitigationActionsTasksRequest & keyof ListAuditMitigationActionsTasksRequest]: (ListAuditMitigationActionsTasksRequest & ListAuditMitigationActionsTasksRequest & ListAuditMitigationActionsTasksRequest & ListAuditMitigationActionsTasksRequest & ListAuditMitigationActionsTasksRequest)[K]
    }>): ListAuditMitigationActionsTasksResponse {
        return this.client.listAuditMitigationActionsTasks(
            this.ops["ListAuditMitigationActionsTasks"].apply(partialParams)
        );
    }

    invokeListAuditTasks(partialParams: ToOptional<{
      [K in keyof ListAuditTasksRequest & keyof ListAuditTasksRequest & keyof ListAuditTasksRequest & keyof ListAuditTasksRequest & keyof ListAuditTasksRequest]: (ListAuditTasksRequest & ListAuditTasksRequest & ListAuditTasksRequest & ListAuditTasksRequest & ListAuditTasksRequest)[K]
    }>): ListAuditTasksResponse {
        return this.client.listAuditTasks(
            this.ops["ListAuditTasks"].apply(partialParams)
        );
    }

    invokeListCertificatesByCA(partialParams: ToOptional<{
      [K in keyof ListCertificatesByCARequest & keyof ListCertificatesByCARequest & keyof ListCertificatesByCARequest & keyof ListCertificatesByCARequest & keyof ListCertificatesByCARequest]: (ListCertificatesByCARequest & ListCertificatesByCARequest & ListCertificatesByCARequest & ListCertificatesByCARequest & ListCertificatesByCARequest)[K]
    }>): ListCertificatesByCAResponse {
        return this.client.listCertificatesByCA(
            this.ops["ListCertificatesByCA"].apply(partialParams)
        );
    }

    invokeListDetectMitigationActionsTasks(partialParams: ToOptional<{
      [K in keyof ListDetectMitigationActionsTasksRequest & keyof ListDetectMitigationActionsTasksRequest & keyof ListDetectMitigationActionsTasksRequest & keyof ListDetectMitigationActionsTasksRequest & keyof ListDetectMitigationActionsTasksRequest]: (ListDetectMitigationActionsTasksRequest & ListDetectMitigationActionsTasksRequest & ListDetectMitigationActionsTasksRequest & ListDetectMitigationActionsTasksRequest & ListDetectMitigationActionsTasksRequest)[K]
    }>): ListDetectMitigationActionsTasksResponse {
        return this.client.listDetectMitigationActionsTasks(
            this.ops["ListDetectMitigationActionsTasks"].apply(partialParams)
        );
    }

    invokeListJobExecutionsForJob(partialParams: ToOptional<{
      [K in keyof ListJobExecutionsForJobRequest & keyof ListJobExecutionsForJobRequest & keyof ListJobExecutionsForJobRequest & keyof ListJobExecutionsForJobRequest & keyof ListJobExecutionsForJobRequest]: (ListJobExecutionsForJobRequest & ListJobExecutionsForJobRequest & ListJobExecutionsForJobRequest & ListJobExecutionsForJobRequest & ListJobExecutionsForJobRequest)[K]
    }>): ListJobExecutionsForJobResponse {
        return this.client.listJobExecutionsForJob(
            this.ops["ListJobExecutionsForJob"].apply(partialParams)
        );
    }

    invokeListJobExecutionsForThing(partialParams: ToOptional<{
      [K in keyof ListJobExecutionsForThingRequest & keyof ListJobExecutionsForThingRequest & keyof ListJobExecutionsForThingRequest & keyof ListJobExecutionsForThingRequest & keyof ListJobExecutionsForThingRequest]: (ListJobExecutionsForThingRequest & ListJobExecutionsForThingRequest & ListJobExecutionsForThingRequest & ListJobExecutionsForThingRequest & ListJobExecutionsForThingRequest)[K]
    }>): ListJobExecutionsForThingResponse {
        return this.client.listJobExecutionsForThing(
            this.ops["ListJobExecutionsForThing"].apply(partialParams)
        );
    }

    invokeListPolicyPrincipals(partialParams: ToOptional<{
      [K in keyof ListPolicyPrincipalsRequest & keyof ListPolicyPrincipalsRequest & keyof ListPolicyPrincipalsRequest & keyof ListPolicyPrincipalsRequest & keyof ListPolicyPrincipalsRequest]: (ListPolicyPrincipalsRequest & ListPolicyPrincipalsRequest & ListPolicyPrincipalsRequest & ListPolicyPrincipalsRequest & ListPolicyPrincipalsRequest)[K]
    }>): ListPolicyPrincipalsResponse {
        return this.client.listPolicyPrincipals(
            this.ops["ListPolicyPrincipals"].apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest & keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest & ListPolicyVersionsRequest)[K]
    }>): ListPolicyVersionsResponse {
        return this.client.listPolicyVersions(
            this.ops["ListPolicyVersions"].apply(partialParams)
        );
    }

    invokeListPrincipalPolicies(partialParams: ToOptional<{
      [K in keyof ListPrincipalPoliciesRequest & keyof ListPrincipalPoliciesRequest & keyof ListPrincipalPoliciesRequest & keyof ListPrincipalPoliciesRequest & keyof ListPrincipalPoliciesRequest]: (ListPrincipalPoliciesRequest & ListPrincipalPoliciesRequest & ListPrincipalPoliciesRequest & ListPrincipalPoliciesRequest & ListPrincipalPoliciesRequest)[K]
    }>): ListPrincipalPoliciesResponse {
        return this.client.listPrincipalPolicies(
            this.ops["ListPrincipalPolicies"].apply(partialParams)
        );
    }

    invokeListPrincipalThings(partialParams: ToOptional<{
      [K in keyof ListPrincipalThingsRequest & keyof ListPrincipalThingsRequest & keyof ListPrincipalThingsRequest & keyof ListPrincipalThingsRequest & keyof ListPrincipalThingsRequest]: (ListPrincipalThingsRequest & ListPrincipalThingsRequest & ListPrincipalThingsRequest & ListPrincipalThingsRequest & ListPrincipalThingsRequest)[K]
    }>): ListPrincipalThingsResponse {
        return this.client.listPrincipalThings(
            this.ops["ListPrincipalThings"].apply(partialParams)
        );
    }

    invokeListProvisioningTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListProvisioningTemplateVersionsRequest & keyof ListProvisioningTemplateVersionsRequest & keyof ListProvisioningTemplateVersionsRequest & keyof ListProvisioningTemplateVersionsRequest & keyof ListProvisioningTemplateVersionsRequest]: (ListProvisioningTemplateVersionsRequest & ListProvisioningTemplateVersionsRequest & ListProvisioningTemplateVersionsRequest & ListProvisioningTemplateVersionsRequest & ListProvisioningTemplateVersionsRequest)[K]
    }>): ListProvisioningTemplateVersionsResponse {
        return this.client.listProvisioningTemplateVersions(
            this.ops["ListProvisioningTemplateVersions"].apply(partialParams)
        );
    }

    invokeListSecurityProfilesForTarget(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesForTargetRequest & keyof ListSecurityProfilesForTargetRequest & keyof ListSecurityProfilesForTargetRequest & keyof ListSecurityProfilesForTargetRequest & keyof ListSecurityProfilesForTargetRequest]: (ListSecurityProfilesForTargetRequest & ListSecurityProfilesForTargetRequest & ListSecurityProfilesForTargetRequest & ListSecurityProfilesForTargetRequest & ListSecurityProfilesForTargetRequest)[K]
    }>): ListSecurityProfilesForTargetResponse {
        return this.client.listSecurityProfilesForTarget(
            this.ops["ListSecurityProfilesForTarget"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest]: (ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest)[K]
    }>): ListTargetsForPolicyResponse {
        return this.client.listTargetsForPolicy(
            this.ops["ListTargetsForPolicy"].apply(partialParams)
        );
    }

    invokeListTargetsForSecurityProfile(partialParams: ToOptional<{
      [K in keyof ListTargetsForSecurityProfileRequest & keyof ListTargetsForSecurityProfileRequest & keyof ListTargetsForSecurityProfileRequest & keyof ListTargetsForSecurityProfileRequest & keyof ListTargetsForSecurityProfileRequest]: (ListTargetsForSecurityProfileRequest & ListTargetsForSecurityProfileRequest & ListTargetsForSecurityProfileRequest & ListTargetsForSecurityProfileRequest & ListTargetsForSecurityProfileRequest)[K]
    }>): ListTargetsForSecurityProfileResponse {
        return this.client.listTargetsForSecurityProfile(
            this.ops["ListTargetsForSecurityProfile"].apply(partialParams)
        );
    }

    invokeListThingGroupsForThing(partialParams: ToOptional<{
      [K in keyof ListThingGroupsForThingRequest & keyof ListThingGroupsForThingRequest & keyof ListThingGroupsForThingRequest & keyof ListThingGroupsForThingRequest & keyof ListThingGroupsForThingRequest]: (ListThingGroupsForThingRequest & ListThingGroupsForThingRequest & ListThingGroupsForThingRequest & ListThingGroupsForThingRequest & ListThingGroupsForThingRequest)[K]
    }>): ListThingGroupsForThingResponse {
        return this.client.listThingGroupsForThing(
            this.ops["ListThingGroupsForThing"].apply(partialParams)
        );
    }

    invokeListThingPrincipals(partialParams: ToOptional<{
      [K in keyof ListThingPrincipalsRequest & keyof ListThingPrincipalsRequest & keyof ListThingPrincipalsRequest & keyof ListThingPrincipalsRequest & keyof ListThingPrincipalsRequest]: (ListThingPrincipalsRequest & ListThingPrincipalsRequest & ListThingPrincipalsRequest & ListThingPrincipalsRequest & ListThingPrincipalsRequest)[K]
    }>): ListThingPrincipalsResponse {
        return this.client.listThingPrincipals(
            this.ops["ListThingPrincipals"].apply(partialParams)
        );
    }

    invokeListThingRegistrationTaskReports(partialParams: ToOptional<{
      [K in keyof ListThingRegistrationTaskReportsRequest & keyof ListThingRegistrationTaskReportsRequest & keyof ListThingRegistrationTaskReportsRequest & keyof ListThingRegistrationTaskReportsRequest & keyof ListThingRegistrationTaskReportsRequest]: (ListThingRegistrationTaskReportsRequest & ListThingRegistrationTaskReportsRequest & ListThingRegistrationTaskReportsRequest & ListThingRegistrationTaskReportsRequest & ListThingRegistrationTaskReportsRequest)[K]
    }>): ListThingRegistrationTaskReportsResponse {
        return this.client.listThingRegistrationTaskReports(
            this.ops["ListThingRegistrationTaskReports"].apply(partialParams)
        );
    }

    invokeListThingsInBillingGroup(partialParams: ToOptional<{
      [K in keyof ListThingsInBillingGroupRequest & keyof ListThingsInBillingGroupRequest & keyof ListThingsInBillingGroupRequest & keyof ListThingsInBillingGroupRequest & keyof ListThingsInBillingGroupRequest]: (ListThingsInBillingGroupRequest & ListThingsInBillingGroupRequest & ListThingsInBillingGroupRequest & ListThingsInBillingGroupRequest & ListThingsInBillingGroupRequest)[K]
    }>): ListThingsInBillingGroupResponse {
        return this.client.listThingsInBillingGroup(
            this.ops["ListThingsInBillingGroup"].apply(partialParams)
        );
    }

    invokeListThingsInThingGroup(partialParams: ToOptional<{
      [K in keyof ListThingsInThingGroupRequest & keyof ListThingsInThingGroupRequest & keyof ListThingsInThingGroupRequest & keyof ListThingsInThingGroupRequest & keyof ListThingsInThingGroupRequest]: (ListThingsInThingGroupRequest & ListThingsInThingGroupRequest & ListThingsInThingGroupRequest & ListThingsInThingGroupRequest & ListThingsInThingGroupRequest)[K]
    }>): ListThingsInThingGroupResponse {
        return this.client.listThingsInThingGroup(
            this.ops["ListThingsInThingGroup"].apply(partialParams)
        );
    }

    invokeListViolationEvents(partialParams: ToOptional<{
      [K in keyof ListViolationEventsRequest & keyof ListViolationEventsRequest & keyof ListViolationEventsRequest & keyof ListViolationEventsRequest & keyof ListViolationEventsRequest]: (ListViolationEventsRequest & ListViolationEventsRequest & ListViolationEventsRequest & ListViolationEventsRequest & ListViolationEventsRequest)[K]
    }>): ListViolationEventsResponse {
        return this.client.listViolationEvents(
            this.ops["ListViolationEvents"].apply(partialParams)
        );
    }

    invokePutVerificationStateOnViolation(partialParams: ToOptional<{
      [K in keyof PutVerificationStateOnViolationRequest & keyof PutVerificationStateOnViolationRequest & keyof PutVerificationStateOnViolationRequest & keyof PutVerificationStateOnViolationRequest & keyof PutVerificationStateOnViolationRequest]: (PutVerificationStateOnViolationRequest & PutVerificationStateOnViolationRequest & PutVerificationStateOnViolationRequest & PutVerificationStateOnViolationRequest & PutVerificationStateOnViolationRequest)[K]
    }>): PutVerificationStateOnViolationResponse {
        return this.client.putVerificationStateOnViolation(
            this.ops["PutVerificationStateOnViolation"].apply(partialParams)
        );
    }

    invokeRegisterCACertificate(partialParams: ToOptional<{
      [K in keyof RegisterCACertificateRequest & keyof RegisterCACertificateRequest & keyof RegisterCACertificateRequest & keyof RegisterCACertificateRequest & keyof RegisterCACertificateRequest]: (RegisterCACertificateRequest & RegisterCACertificateRequest & RegisterCACertificateRequest & RegisterCACertificateRequest & RegisterCACertificateRequest)[K]
    }>): RegisterCACertificateResponse {
        return this.client.registerCACertificate(
            this.ops["RegisterCACertificate"].apply(partialParams)
        );
    }

    invokeRegisterCertificate(partialParams: ToOptional<{
      [K in keyof RegisterCertificateRequest & keyof RegisterCertificateRequest & keyof RegisterCertificateRequest & keyof RegisterCertificateRequest & keyof RegisterCertificateRequest]: (RegisterCertificateRequest & RegisterCertificateRequest & RegisterCertificateRequest & RegisterCertificateRequest & RegisterCertificateRequest)[K]
    }>): RegisterCertificateResponse {
        return this.client.registerCertificate(
            this.ops["RegisterCertificate"].apply(partialParams)
        );
    }

    invokeRegisterCertificateWithoutCA(partialParams: ToOptional<{
      [K in keyof RegisterCertificateWithoutCARequest & keyof RegisterCertificateWithoutCARequest & keyof RegisterCertificateWithoutCARequest & keyof RegisterCertificateWithoutCARequest & keyof RegisterCertificateWithoutCARequest]: (RegisterCertificateWithoutCARequest & RegisterCertificateWithoutCARequest & RegisterCertificateWithoutCARequest & RegisterCertificateWithoutCARequest & RegisterCertificateWithoutCARequest)[K]
    }>): RegisterCertificateWithoutCAResponse {
        return this.client.registerCertificateWithoutCA(
            this.ops["RegisterCertificateWithoutCA"].apply(partialParams)
        );
    }

    invokeRegisterThing(partialParams: ToOptional<{
      [K in keyof RegisterThingRequest & keyof RegisterThingRequest & keyof RegisterThingRequest & keyof RegisterThingRequest & keyof RegisterThingRequest]: (RegisterThingRequest & RegisterThingRequest & RegisterThingRequest & RegisterThingRequest & RegisterThingRequest)[K]
    }>): RegisterThingResponse {
        return this.client.registerThing(
            this.ops["RegisterThing"].apply(partialParams)
        );
    }

    invokeRejectCertificateTransfer(partialParams: ToOptional<{
      [K in keyof RejectCertificateTransferRequest & keyof RejectCertificateTransferRequest & keyof RejectCertificateTransferRequest & keyof RejectCertificateTransferRequest & keyof RejectCertificateTransferRequest]: (RejectCertificateTransferRequest & RejectCertificateTransferRequest & RejectCertificateTransferRequest & RejectCertificateTransferRequest & RejectCertificateTransferRequest)[K]
    }>): void {
        return this.client.rejectCertificateTransfer(
            this.ops["RejectCertificateTransfer"].apply(partialParams)
        );
    }

    invokeReplaceTopicRule(partialParams: ToOptional<{
      [K in keyof ReplaceTopicRuleRequest & keyof ReplaceTopicRuleRequest & keyof ReplaceTopicRuleRequest & keyof ReplaceTopicRuleRequest & keyof ReplaceTopicRuleRequest]: (ReplaceTopicRuleRequest & ReplaceTopicRuleRequest & ReplaceTopicRuleRequest & ReplaceTopicRuleRequest & ReplaceTopicRuleRequest)[K]
    }>): void {
        return this.client.replaceTopicRule(
            this.ops["ReplaceTopicRule"].apply(partialParams)
        );
    }

    invokeSearchIndex(partialParams: ToOptional<{
      [K in keyof SearchIndexRequest & keyof SearchIndexRequest & keyof SearchIndexRequest & keyof SearchIndexRequest & keyof SearchIndexRequest]: (SearchIndexRequest & SearchIndexRequest & SearchIndexRequest & SearchIndexRequest & SearchIndexRequest)[K]
    }>): SearchIndexResponse {
        return this.client.searchIndex(
            this.ops["SearchIndex"].apply(partialParams)
        );
    }

    invokeSetDefaultAuthorizer(partialParams: ToOptional<{
      [K in keyof SetDefaultAuthorizerRequest & keyof SetDefaultAuthorizerRequest & keyof SetDefaultAuthorizerRequest & keyof SetDefaultAuthorizerRequest & keyof SetDefaultAuthorizerRequest]: (SetDefaultAuthorizerRequest & SetDefaultAuthorizerRequest & SetDefaultAuthorizerRequest & SetDefaultAuthorizerRequest & SetDefaultAuthorizerRequest)[K]
    }>): SetDefaultAuthorizerResponse {
        return this.client.setDefaultAuthorizer(
            this.ops["SetDefaultAuthorizer"].apply(partialParams)
        );
    }

    invokeSetDefaultPolicyVersion(partialParams: ToOptional<{
      [K in keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest & keyof SetDefaultPolicyVersionRequest]: (SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest & SetDefaultPolicyVersionRequest)[K]
    }>): void {
        return this.client.setDefaultPolicyVersion(
            this.ops["SetDefaultPolicyVersion"].apply(partialParams)
        );
    }

    invokeSetLoggingOptions(partialParams: ToOptional<{
      [K in keyof SetLoggingOptionsRequest & keyof SetLoggingOptionsRequest & keyof SetLoggingOptionsRequest & keyof SetLoggingOptionsRequest & keyof SetLoggingOptionsRequest]: (SetLoggingOptionsRequest & SetLoggingOptionsRequest & SetLoggingOptionsRequest & SetLoggingOptionsRequest & SetLoggingOptionsRequest)[K]
    }>): void {
        return this.client.setLoggingOptions(
            this.ops["SetLoggingOptions"].apply(partialParams)
        );
    }

    invokeSetV2LoggingLevel(partialParams: ToOptional<{
      [K in keyof SetV2LoggingLevelRequest & keyof SetV2LoggingLevelRequest & keyof SetV2LoggingLevelRequest & keyof SetV2LoggingLevelRequest & keyof SetV2LoggingLevelRequest]: (SetV2LoggingLevelRequest & SetV2LoggingLevelRequest & SetV2LoggingLevelRequest & SetV2LoggingLevelRequest & SetV2LoggingLevelRequest)[K]
    }>): void {
        return this.client.setV2LoggingLevel(
            this.ops["SetV2LoggingLevel"].apply(partialParams)
        );
    }

    invokeStartAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof StartAuditMitigationActionsTaskRequest & keyof StartAuditMitigationActionsTaskRequest & keyof StartAuditMitigationActionsTaskRequest & keyof StartAuditMitigationActionsTaskRequest & keyof StartAuditMitigationActionsTaskRequest]: (StartAuditMitigationActionsTaskRequest & StartAuditMitigationActionsTaskRequest & StartAuditMitigationActionsTaskRequest & StartAuditMitigationActionsTaskRequest & StartAuditMitigationActionsTaskRequest)[K]
    }>): StartAuditMitigationActionsTaskResponse {
        return this.client.startAuditMitigationActionsTask(
            this.ops["StartAuditMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeStartDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof StartDetectMitigationActionsTaskRequest & keyof StartDetectMitigationActionsTaskRequest & keyof StartDetectMitigationActionsTaskRequest & keyof StartDetectMitigationActionsTaskRequest & keyof StartDetectMitigationActionsTaskRequest]: (StartDetectMitigationActionsTaskRequest & StartDetectMitigationActionsTaskRequest & StartDetectMitigationActionsTaskRequest & StartDetectMitigationActionsTaskRequest & StartDetectMitigationActionsTaskRequest)[K]
    }>): StartDetectMitigationActionsTaskResponse {
        return this.client.startDetectMitigationActionsTask(
            this.ops["StartDetectMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeStartOnDemandAuditTask(partialParams: ToOptional<{
      [K in keyof StartOnDemandAuditTaskRequest & keyof StartOnDemandAuditTaskRequest & keyof StartOnDemandAuditTaskRequest & keyof StartOnDemandAuditTaskRequest & keyof StartOnDemandAuditTaskRequest]: (StartOnDemandAuditTaskRequest & StartOnDemandAuditTaskRequest & StartOnDemandAuditTaskRequest & StartOnDemandAuditTaskRequest & StartOnDemandAuditTaskRequest)[K]
    }>): StartOnDemandAuditTaskResponse {
        return this.client.startOnDemandAuditTask(
            this.ops["StartOnDemandAuditTask"].apply(partialParams)
        );
    }

    invokeStartThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof StartThingRegistrationTaskRequest & keyof StartThingRegistrationTaskRequest & keyof StartThingRegistrationTaskRequest & keyof StartThingRegistrationTaskRequest & keyof StartThingRegistrationTaskRequest]: (StartThingRegistrationTaskRequest & StartThingRegistrationTaskRequest & StartThingRegistrationTaskRequest & StartThingRegistrationTaskRequest & StartThingRegistrationTaskRequest)[K]
    }>): StartThingRegistrationTaskResponse {
        return this.client.startThingRegistrationTask(
            this.ops["StartThingRegistrationTask"].apply(partialParams)
        );
    }

    invokeStopThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof StopThingRegistrationTaskRequest & keyof StopThingRegistrationTaskRequest & keyof StopThingRegistrationTaskRequest & keyof StopThingRegistrationTaskRequest & keyof StopThingRegistrationTaskRequest]: (StopThingRegistrationTaskRequest & StopThingRegistrationTaskRequest & StopThingRegistrationTaskRequest & StopThingRegistrationTaskRequest & StopThingRegistrationTaskRequest)[K]
    }>): StopThingRegistrationTaskResponse {
        return this.client.stopThingRegistrationTask(
            this.ops["StopThingRegistrationTask"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestAuthorization(partialParams: ToOptional<{
      [K in keyof TestAuthorizationRequest & keyof TestAuthorizationRequest & keyof TestAuthorizationRequest & keyof TestAuthorizationRequest & keyof TestAuthorizationRequest]: (TestAuthorizationRequest & TestAuthorizationRequest & TestAuthorizationRequest & TestAuthorizationRequest & TestAuthorizationRequest)[K]
    }>): TestAuthorizationResponse {
        return this.client.testAuthorization(
            this.ops["TestAuthorization"].apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest)[K]
    }>): TestInvokeAuthorizerResponse {
        return this.client.testInvokeAuthorizer(
            this.ops["TestInvokeAuthorizer"].apply(partialParams)
        );
    }

    invokeTransferCertificate(partialParams: ToOptional<{
      [K in keyof TransferCertificateRequest & keyof TransferCertificateRequest & keyof TransferCertificateRequest & keyof TransferCertificateRequest & keyof TransferCertificateRequest]: (TransferCertificateRequest & TransferCertificateRequest & TransferCertificateRequest & TransferCertificateRequest & TransferCertificateRequest)[K]
    }>): TransferCertificateResponse {
        return this.client.transferCertificate(
            this.ops["TransferCertificate"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAuditSuppression(partialParams: ToOptional<{
      [K in keyof UpdateAuditSuppressionRequest & keyof UpdateAuditSuppressionRequest & keyof UpdateAuditSuppressionRequest & keyof UpdateAuditSuppressionRequest & keyof UpdateAuditSuppressionRequest]: (UpdateAuditSuppressionRequest & UpdateAuditSuppressionRequest & UpdateAuditSuppressionRequest & UpdateAuditSuppressionRequest & UpdateAuditSuppressionRequest)[K]
    }>): UpdateAuditSuppressionResponse {
        return this.client.updateAuditSuppression(
            this.ops["UpdateAuditSuppression"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest)[K]
    }>): UpdateAuthorizerResponse {
        return this.client.updateAuthorizer(
            this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateBillingGroup(partialParams: ToOptional<{
      [K in keyof UpdateBillingGroupRequest & keyof UpdateBillingGroupRequest & keyof UpdateBillingGroupRequest & keyof UpdateBillingGroupRequest & keyof UpdateBillingGroupRequest]: (UpdateBillingGroupRequest & UpdateBillingGroupRequest & UpdateBillingGroupRequest & UpdateBillingGroupRequest & UpdateBillingGroupRequest)[K]
    }>): UpdateBillingGroupResponse {
        return this.client.updateBillingGroup(
            this.ops["UpdateBillingGroup"].apply(partialParams)
        );
    }

    invokeUpdateCACertificate(partialParams: ToOptional<{
      [K in keyof UpdateCACertificateRequest & keyof UpdateCACertificateRequest & keyof UpdateCACertificateRequest & keyof UpdateCACertificateRequest & keyof UpdateCACertificateRequest]: (UpdateCACertificateRequest & UpdateCACertificateRequest & UpdateCACertificateRequest & UpdateCACertificateRequest & UpdateCACertificateRequest)[K]
    }>): void {
        return this.client.updateCACertificate(
            this.ops["UpdateCACertificate"].apply(partialParams)
        );
    }

    invokeUpdateCertificate(partialParams: ToOptional<{
      [K in keyof UpdateCertificateRequest & keyof UpdateCertificateRequest & keyof UpdateCertificateRequest & keyof UpdateCertificateRequest & keyof UpdateCertificateRequest]: (UpdateCertificateRequest & UpdateCertificateRequest & UpdateCertificateRequest & UpdateCertificateRequest & UpdateCertificateRequest)[K]
    }>): void {
        return this.client.updateCertificate(
            this.ops["UpdateCertificate"].apply(partialParams)
        );
    }

    invokeUpdateCustomMetric(partialParams: ToOptional<{
      [K in keyof UpdateCustomMetricRequest & keyof UpdateCustomMetricRequest & keyof UpdateCustomMetricRequest & keyof UpdateCustomMetricRequest & keyof UpdateCustomMetricRequest]: (UpdateCustomMetricRequest & UpdateCustomMetricRequest & UpdateCustomMetricRequest & UpdateCustomMetricRequest & UpdateCustomMetricRequest)[K]
    }>): UpdateCustomMetricResponse {
        return this.client.updateCustomMetric(
            this.ops["UpdateCustomMetric"].apply(partialParams)
        );
    }

    invokeUpdateDimension(partialParams: ToOptional<{
      [K in keyof UpdateDimensionRequest & keyof UpdateDimensionRequest & keyof Omit<UpdateDimensionRequest, "name"> & keyof UpdateDimensionRequest & keyof UpdateDimensionRequest]: (UpdateDimensionRequest & UpdateDimensionRequest & Omit<UpdateDimensionRequest, "name"> & UpdateDimensionRequest & UpdateDimensionRequest)[K]
    }>): UpdateDimensionResponse {
        return this.client.updateDimension(
            this.ops["UpdateDimension"].apply(partialParams)
        );
    }

    invokeUpdateDomainConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDomainConfigurationRequest & keyof UpdateDomainConfigurationRequest & keyof UpdateDomainConfigurationRequest & keyof UpdateDomainConfigurationRequest & keyof UpdateDomainConfigurationRequest]: (UpdateDomainConfigurationRequest & UpdateDomainConfigurationRequest & UpdateDomainConfigurationRequest & UpdateDomainConfigurationRequest & UpdateDomainConfigurationRequest)[K]
    }>): UpdateDomainConfigurationResponse {
        return this.client.updateDomainConfiguration(
            this.ops["UpdateDomainConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof UpdateDynamicThingGroupRequest & keyof UpdateDynamicThingGroupRequest & keyof UpdateDynamicThingGroupRequest & keyof UpdateDynamicThingGroupRequest & keyof UpdateDynamicThingGroupRequest]: (UpdateDynamicThingGroupRequest & UpdateDynamicThingGroupRequest & UpdateDynamicThingGroupRequest & UpdateDynamicThingGroupRequest & UpdateDynamicThingGroupRequest)[K]
    }>): UpdateDynamicThingGroupResponse {
        return this.client.updateDynamicThingGroup(
            this.ops["UpdateDynamicThingGroup"].apply(partialParams)
        );
    }

    invokeUpdateFleetMetric(partialParams: ToOptional<{
      [K in keyof UpdateFleetMetricRequest & keyof UpdateFleetMetricRequest & keyof UpdateFleetMetricRequest & keyof UpdateFleetMetricRequest & keyof UpdateFleetMetricRequest]: (UpdateFleetMetricRequest & UpdateFleetMetricRequest & UpdateFleetMetricRequest & UpdateFleetMetricRequest & UpdateFleetMetricRequest)[K]
    }>): void {
        return this.client.updateFleetMetric(
            this.ops["UpdateFleetMetric"].apply(partialParams)
        );
    }

    invokeUpdateJob(partialParams: ToOptional<{
      [K in keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest & keyof UpdateJobRequest]: (UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest & UpdateJobRequest)[K]
    }>): void {
        return this.client.updateJob(
            this.ops["UpdateJob"].apply(partialParams)
        );
    }

    invokeUpdateMitigationAction(partialParams: ToOptional<{
      [K in keyof UpdateMitigationActionRequest & keyof UpdateMitigationActionRequest & keyof UpdateMitigationActionRequest & keyof UpdateMitigationActionRequest & keyof UpdateMitigationActionRequest]: (UpdateMitigationActionRequest & UpdateMitigationActionRequest & UpdateMitigationActionRequest & UpdateMitigationActionRequest & UpdateMitigationActionRequest)[K]
    }>): UpdateMitigationActionResponse {
        return this.client.updateMitigationAction(
            this.ops["UpdateMitigationAction"].apply(partialParams)
        );
    }

    invokeUpdateProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof UpdateProvisioningTemplateRequest & keyof UpdateProvisioningTemplateRequest & keyof UpdateProvisioningTemplateRequest & keyof UpdateProvisioningTemplateRequest & keyof UpdateProvisioningTemplateRequest]: (UpdateProvisioningTemplateRequest & UpdateProvisioningTemplateRequest & UpdateProvisioningTemplateRequest & UpdateProvisioningTemplateRequest & UpdateProvisioningTemplateRequest)[K]
    }>): UpdateProvisioningTemplateResponse {
        return this.client.updateProvisioningTemplate(
            this.ops["UpdateProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeUpdateRoleAlias(partialParams: ToOptional<{
      [K in keyof UpdateRoleAliasRequest & keyof UpdateRoleAliasRequest & keyof UpdateRoleAliasRequest & keyof UpdateRoleAliasRequest & keyof UpdateRoleAliasRequest]: (UpdateRoleAliasRequest & UpdateRoleAliasRequest & UpdateRoleAliasRequest & UpdateRoleAliasRequest & UpdateRoleAliasRequest)[K]
    }>): UpdateRoleAliasResponse {
        return this.client.updateRoleAlias(
            this.ops["UpdateRoleAlias"].apply(partialParams)
        );
    }

    invokeUpdateScheduledAudit(partialParams: ToOptional<{
      [K in keyof UpdateScheduledAuditRequest & keyof UpdateScheduledAuditRequest & keyof UpdateScheduledAuditRequest & keyof UpdateScheduledAuditRequest & keyof UpdateScheduledAuditRequest]: (UpdateScheduledAuditRequest & UpdateScheduledAuditRequest & UpdateScheduledAuditRequest & UpdateScheduledAuditRequest & UpdateScheduledAuditRequest)[K]
    }>): UpdateScheduledAuditResponse {
        return this.client.updateScheduledAudit(
            this.ops["UpdateScheduledAudit"].apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest & keyof UpdateSecurityProfileRequest]: (UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest & UpdateSecurityProfileRequest)[K]
    }>): UpdateSecurityProfileResponse {
        return this.client.updateSecurityProfile(
            this.ops["UpdateSecurityProfile"].apply(partialParams)
        );
    }

    invokeUpdateStream(partialParams: ToOptional<{
      [K in keyof UpdateStreamRequest & keyof UpdateStreamRequest & keyof UpdateStreamRequest & keyof UpdateStreamRequest & keyof UpdateStreamRequest]: (UpdateStreamRequest & UpdateStreamRequest & UpdateStreamRequest & UpdateStreamRequest & UpdateStreamRequest)[K]
    }>): UpdateStreamResponse {
        return this.client.updateStream(
            this.ops["UpdateStream"].apply(partialParams)
        );
    }

    invokeUpdateThing(partialParams: ToOptional<{
      [K in keyof UpdateThingRequest & keyof UpdateThingRequest & keyof UpdateThingRequest & keyof UpdateThingRequest & keyof UpdateThingRequest]: (UpdateThingRequest & UpdateThingRequest & UpdateThingRequest & UpdateThingRequest & UpdateThingRequest)[K]
    }>): UpdateThingResponse {
        return this.client.updateThing(
            this.ops["UpdateThing"].apply(partialParams)
        );
    }

    invokeUpdateThingGroup(partialParams: ToOptional<{
      [K in keyof UpdateThingGroupRequest & keyof UpdateThingGroupRequest & keyof UpdateThingGroupRequest & keyof UpdateThingGroupRequest & keyof UpdateThingGroupRequest]: (UpdateThingGroupRequest & UpdateThingGroupRequest & UpdateThingGroupRequest & UpdateThingGroupRequest & UpdateThingGroupRequest)[K]
    }>): UpdateThingGroupResponse {
        return this.client.updateThingGroup(
            this.ops["UpdateThingGroup"].apply(partialParams)
        );
    }

    invokeUpdateTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof Omit<UpdateTopicRuleDestinationRequest, "arn"> & keyof UpdateTopicRuleDestinationRequest & keyof UpdateTopicRuleDestinationRequest & keyof Omit<UpdateTopicRuleDestinationRequest, "status"> & keyof UpdateTopicRuleDestinationRequest]: (Omit<UpdateTopicRuleDestinationRequest, "arn"> & UpdateTopicRuleDestinationRequest & UpdateTopicRuleDestinationRequest & Omit<UpdateTopicRuleDestinationRequest, "status"> & UpdateTopicRuleDestinationRequest)[K]
    }>): UpdateTopicRuleDestinationResponse {
        return this.client.updateTopicRuleDestination(
            this.ops["UpdateTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeValidateSecurityProfileBehaviors(partialParams: ToOptional<{
      [K in keyof ValidateSecurityProfileBehaviorsRequest & keyof ValidateSecurityProfileBehaviorsRequest & keyof ValidateSecurityProfileBehaviorsRequest & keyof ValidateSecurityProfileBehaviorsRequest & keyof ValidateSecurityProfileBehaviorsRequest]: (ValidateSecurityProfileBehaviorsRequest & ValidateSecurityProfileBehaviorsRequest & ValidateSecurityProfileBehaviorsRequest & ValidateSecurityProfileBehaviorsRequest & ValidateSecurityProfileBehaviorsRequest)[K]
    }>): ValidateSecurityProfileBehaviorsResponse {
        return this.client.validateSecurityProfileBehaviors(
            this.ops["ValidateSecurityProfileBehaviors"].apply(partialParams)
        );
    }
}