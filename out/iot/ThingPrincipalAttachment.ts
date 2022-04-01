
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddThingToBillingGroupRequest,
    AddThingToThingGroupRequest,
    AssociateTargetsWithJobRequest,
    AttachSecurityProfileRequest,
    AttachThingPrincipalRequest,
    CancelAuditMitigationActionsTaskRequest,
    CancelAuditTaskRequest,
    CancelDetectMitigationActionsTaskRequest,
    CancelJobRequest,
    ClearDefaultAuthorizerRequest,
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
    CreateKeysAndCertificateRequest,
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
    CreateTopicRuleDestinationRequest,
    DeleteAccountAuditConfigurationRequest,
    DeleteAuditSuppressionRequest,
    DeleteAuthorizerRequest,
    DeleteBillingGroupRequest,
    DeleteCACertificateRequest,
    DeleteCustomMetricRequest,
    DeleteDimensionRequest,
    DeleteDomainConfigurationRequest,
    DeleteDynamicThingGroupRequest,
    DeleteMitigationActionRequest,
    DeleteOTAUpdateRequest,
    DeleteProvisioningTemplateRequest,
    DeleteProvisioningTemplateVersionRequest,
    DeleteRegistrationCodeRequest,
    DeleteRoleAliasRequest,
    DeleteScheduledAuditRequest,
    DeleteSecurityProfileRequest,
    DeleteStreamRequest,
    DeleteThingRequest,
    DeleteThingGroupRequest,
    DeleteThingTypeRequest,
    DeleteTopicRuleDestinationRequest,
    DeprecateThingTypeRequest,
    DescribeAccountAuditConfigurationRequest,
    DescribeAuditFindingRequest,
    DescribeAuditMitigationActionsTaskRequest,
    DescribeAuditSuppressionRequest,
    DescribeAuditTaskRequest,
    DescribeAuthorizerRequest,
    DescribeBillingGroupRequest,
    DescribeCACertificateRequest,
    DescribeCertificateRequest,
    DescribeCustomMetricRequest,
    DescribeDefaultAuthorizerRequest,
    DescribeDetectMitigationActionsTaskRequest,
    DescribeDimensionRequest,
    DescribeDomainConfigurationRequest,
    DescribeEndpointRequest,
    DescribeEventConfigurationsRequest,
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
    DetachSecurityProfileRequest,
    DetachThingPrincipalRequest,
    GetBehaviorModelTrainingSummariesRequest,
    GetBucketsAggregationRequest,
    GetCardinalityRequest,
    GetEffectivePoliciesRequest,
    GetIndexingConfigurationRequest,
    GetJobDocumentRequest,
    GetLoggingOptionsRequest,
    GetOTAUpdateRequest,
    GetPercentilesRequest,
    GetPolicyRequest,
    GetPolicyVersionRequest,
    GetRegistrationCodeRequest,
    GetStatisticsRequest,
    GetTopicRuleRequest,
    GetTopicRuleDestinationRequest,
    GetV2LoggingOptionsRequest,
    ListActiveViolationsRequest,
    ListAttachedPoliciesRequest,
    ListAuditFindingsRequest,
    ListAuditMitigationActionsExecutionsRequest,
    ListAuditMitigationActionsTasksRequest,
    ListAuditSuppressionsRequest,
    ListAuditTasksRequest,
    ListAuthorizersRequest,
    ListBillingGroupsRequest,
    ListCACertificatesRequest,
    ListCertificatesRequest,
    ListCertificatesByCARequest,
    ListCustomMetricsRequest,
    ListDetectMitigationActionsExecutionsRequest,
    ListDetectMitigationActionsTasksRequest,
    ListDimensionsRequest,
    ListDomainConfigurationsRequest,
    ListFleetMetricsRequest,
    ListIndicesRequest,
    ListJobExecutionsForJobRequest,
    ListJobExecutionsForThingRequest,
    ListJobTemplatesRequest,
    ListJobsRequest,
    ListManagedJobTemplatesRequest,
    ListMitigationActionsRequest,
    ListOTAUpdatesRequest,
    ListOutgoingCertificatesRequest,
    ListPoliciesRequest,
    ListPolicyPrincipalsRequest,
    ListPolicyVersionsRequest,
    ListPrincipalPoliciesRequest,
    ListPrincipalThingsRequest,
    ListProvisioningTemplateVersionsRequest,
    ListProvisioningTemplatesRequest,
    ListRoleAliasesRequest,
    ListScheduledAuditsRequest,
    ListSecurityProfilesRequest,
    ListSecurityProfilesForTargetRequest,
    ListStreamsRequest,
    ListTagsForResourceRequest,
    ListTargetsForPolicyRequest,
    ListTargetsForSecurityProfileRequest,
    ListThingGroupsRequest,
    ListThingGroupsForThingRequest,
    ListThingPrincipalsRequest,
    ListThingRegistrationTaskReportsRequest,
    ListThingRegistrationTasksRequest,
    ListThingTypesRequest,
    ListThingsRequest,
    ListThingsInBillingGroupRequest,
    ListThingsInThingGroupRequest,
    ListTopicRuleDestinationsRequest,
    ListTopicRulesRequest,
    ListV2LoggingLevelsRequest,
    ListViolationEventsRequest,
    PutVerificationStateOnViolationRequest,
    RegisterCACertificateRequest,
    RegisterCertificateRequest,
    RegisterCertificateWithoutCARequest,
    RegisterThingRequest,
    RemoveThingFromBillingGroupRequest,
    RemoveThingFromThingGroupRequest,
    SearchIndexRequest,
    SetDefaultAuthorizerRequest,
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
    UpdateAccountAuditConfigurationRequest,
    UpdateAuditSuppressionRequest,
    UpdateAuthorizerRequest,
    UpdateBillingGroupRequest,
    UpdateCustomMetricRequest,
    UpdateDimensionRequest,
    UpdateDomainConfigurationRequest,
    UpdateDynamicThingGroupRequest,
    UpdateEventConfigurationsRequest,
    UpdateIndexingConfigurationRequest,
    UpdateMitigationActionRequest,
    UpdateProvisioningTemplateRequest,
    UpdateRoleAliasRequest,
    UpdateScheduledAuditRequest,
    UpdateSecurityProfileRequest,
    UpdateStreamRequest,
    UpdateThingRequest,
    UpdateThingGroupRequest,
    UpdateThingGroupsForThingRequest,
    UpdateTopicRuleDestinationRequest,
    ValidateSecurityProfileBehaviorsRequest,
    AddThingToBillingGroupResponse,
    AddThingToThingGroupResponse,
    AssociateTargetsWithJobResponse,
    AttachSecurityProfileResponse,
    AttachThingPrincipalResponse,
    CancelAuditMitigationActionsTaskResponse,
    CancelAuditTaskResponse,
    CancelDetectMitigationActionsTaskResponse,
    CancelJobResponse,
    ClearDefaultAuthorizerResponse,
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
    CreateKeysAndCertificateResponse,
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
    DeleteAccountAuditConfigurationResponse,
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
    DeleteRegistrationCodeResponse,
    DeleteRoleAliasResponse,
    DeleteScheduledAuditResponse,
    DeleteSecurityProfileResponse,
    DeleteStreamResponse,
    DeleteThingResponse,
    DeleteThingGroupResponse,
    DeleteThingTypeResponse,
    DeleteTopicRuleDestinationResponse,
    DeprecateThingTypeResponse,
    DescribeAccountAuditConfigurationResponse,
    DescribeAuditFindingResponse,
    DescribeAuditMitigationActionsTaskResponse,
    DescribeAuditSuppressionResponse,
    DescribeAuditTaskResponse,
    DescribeAuthorizerResponse,
    DescribeBillingGroupResponse,
    DescribeCACertificateResponse,
    DescribeCertificateResponse,
    DescribeCustomMetricResponse,
    DescribeDefaultAuthorizerResponse,
    DescribeDetectMitigationActionsTaskResponse,
    DescribeDimensionResponse,
    DescribeDomainConfigurationResponse,
    DescribeEndpointResponse,
    DescribeEventConfigurationsResponse,
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
    GetBehaviorModelTrainingSummariesResponse,
    GetBucketsAggregationResponse,
    GetCardinalityResponse,
    GetEffectivePoliciesResponse,
    GetIndexingConfigurationResponse,
    GetJobDocumentResponse,
    GetLoggingOptionsResponse,
    GetOTAUpdateResponse,
    GetPercentilesResponse,
    GetPolicyResponse,
    GetPolicyVersionResponse,
    GetRegistrationCodeResponse,
    GetStatisticsResponse,
    GetTopicRuleResponse,
    GetTopicRuleDestinationResponse,
    GetV2LoggingOptionsResponse,
    ListActiveViolationsResponse,
    ListAttachedPoliciesResponse,
    ListAuditFindingsResponse,
    ListAuditMitigationActionsExecutionsResponse,
    ListAuditMitigationActionsTasksResponse,
    ListAuditSuppressionsResponse,
    ListAuditTasksResponse,
    ListAuthorizersResponse,
    ListBillingGroupsResponse,
    ListCACertificatesResponse,
    ListCertificatesResponse,
    ListCertificatesByCAResponse,
    ListCustomMetricsResponse,
    ListDetectMitigationActionsExecutionsResponse,
    ListDetectMitigationActionsTasksResponse,
    ListDimensionsResponse,
    ListDomainConfigurationsResponse,
    ListFleetMetricsResponse,
    ListIndicesResponse,
    ListJobExecutionsForJobResponse,
    ListJobExecutionsForThingResponse,
    ListJobTemplatesResponse,
    ListJobsResponse,
    ListManagedJobTemplatesResponse,
    ListMitigationActionsResponse,
    ListOTAUpdatesResponse,
    ListOutgoingCertificatesResponse,
    ListPoliciesResponse,
    ListPolicyPrincipalsResponse,
    ListPolicyVersionsResponse,
    ListPrincipalPoliciesResponse,
    ListPrincipalThingsResponse,
    ListProvisioningTemplateVersionsResponse,
    ListProvisioningTemplatesResponse,
    ListRoleAliasesResponse,
    ListScheduledAuditsResponse,
    ListSecurityProfilesResponse,
    ListSecurityProfilesForTargetResponse,
    ListStreamsResponse,
    ListTagsForResourceResponse,
    ListTargetsForPolicyResponse,
    ListTargetsForSecurityProfileResponse,
    ListThingGroupsResponse,
    ListThingGroupsForThingResponse,
    ListThingPrincipalsResponse,
    ListThingRegistrationTaskReportsResponse,
    ListThingRegistrationTasksResponse,
    ListThingTypesResponse,
    ListThingsResponse,
    ListThingsInBillingGroupResponse,
    ListThingsInThingGroupResponse,
    ListTopicRuleDestinationsResponse,
    ListTopicRulesResponse,
    ListV2LoggingLevelsResponse,
    ListViolationEventsResponse,
    PutVerificationStateOnViolationResponse,
    RegisterCACertificateResponse,
    RegisterCertificateResponse,
    RegisterCertificateWithoutCAResponse,
    RegisterThingResponse,
    RemoveThingFromBillingGroupResponse,
    RemoveThingFromThingGroupResponse,
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
    UpdateAccountAuditConfigurationResponse,
    UpdateAuditSuppressionResponse,
    UpdateAuthorizerResponse,
    UpdateBillingGroupResponse,
    UpdateCustomMetricResponse,
    UpdateDimensionResponse,
    UpdateDomainConfigurationResponse,
    UpdateDynamicThingGroupResponse,
    UpdateEventConfigurationsResponse,
    UpdateIndexingConfigurationResponse,
    UpdateMitigationActionResponse,
    UpdateProvisioningTemplateResponse,
    UpdateRoleAliasResponse,
    UpdateScheduledAuditResponse,
    UpdateSecurityProfileResponse,
    UpdateStreamResponse,
    UpdateThingResponse,
    UpdateThingGroupResponse,
    UpdateThingGroupsForThingResponse,
    UpdateTopicRuleDestinationResponse,
    ValidateSecurityProfileBehaviorsResponse
} from "aws-sdk/clients/iot";
const schema = require("../apis/iot-2015-05-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iot.ThingPrincipalAttachment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iot.ThingPrincipalAttachment>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Iot()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeAddThingToBillingGroup(partialParams: ToOptional<{
      [K in keyof AddThingToBillingGroupRequest]: (AddThingToBillingGroupRequest)[K]
    }>): Request<AddThingToBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.addThingToBillingGroup(
          this.ops["AddThingToBillingGroup"].apply(partialParams)
        );
    }

    invokeAddThingToThingGroup(partialParams: ToOptional<{
      [K in keyof AddThingToThingGroupRequest]: (AddThingToThingGroupRequest)[K]
    }>): Request<AddThingToThingGroupResponse, AWSError> {
        this.boot();
        return this.client.addThingToThingGroup(
          this.ops["AddThingToThingGroup"].apply(partialParams)
        );
    }

    invokeAssociateTargetsWithJob(partialParams: ToOptional<{
      [K in keyof AssociateTargetsWithJobRequest]: (AssociateTargetsWithJobRequest)[K]
    }>): Request<AssociateTargetsWithJobResponse, AWSError> {
        this.boot();
        return this.client.associateTargetsWithJob(
          this.ops["AssociateTargetsWithJob"].apply(partialParams)
        );
    }

    invokeAttachSecurityProfile(partialParams: ToOptional<{
      [K in keyof AttachSecurityProfileRequest]: (AttachSecurityProfileRequest)[K]
    }>): Request<AttachSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.attachSecurityProfile(
          this.ops["AttachSecurityProfile"].apply(partialParams)
        );
    }

    invokeAttachThingPrincipal(partialParams: ToOptional<{
      [K in keyof AttachThingPrincipalRequest]: (AttachThingPrincipalRequest)[K]
    }>): Request<AttachThingPrincipalResponse, AWSError> {
        this.boot();
        return this.client.attachThingPrincipal(
          this.ops["AttachThingPrincipal"].apply(partialParams)
        );
    }

    invokeCancelAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof CancelAuditMitigationActionsTaskRequest]: (CancelAuditMitigationActionsTaskRequest)[K]
    }>): Request<CancelAuditMitigationActionsTaskResponse, AWSError> {
        this.boot();
        return this.client.cancelAuditMitigationActionsTask(
          this.ops["CancelAuditMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeCancelAuditTask(partialParams: ToOptional<{
      [K in keyof CancelAuditTaskRequest]: (CancelAuditTaskRequest)[K]
    }>): Request<CancelAuditTaskResponse, AWSError> {
        this.boot();
        return this.client.cancelAuditTask(
          this.ops["CancelAuditTask"].apply(partialParams)
        );
    }

    invokeCancelDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof CancelDetectMitigationActionsTaskRequest]: (CancelDetectMitigationActionsTaskRequest)[K]
    }>): Request<CancelDetectMitigationActionsTaskResponse, AWSError> {
        this.boot();
        return this.client.cancelDetectMitigationActionsTask(
          this.ops["CancelDetectMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest]: (CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeClearDefaultAuthorizer(partialParams: ToOptional<{
      [K in keyof ClearDefaultAuthorizerRequest]: (ClearDefaultAuthorizerRequest)[K]
    }>): Request<ClearDefaultAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.clearDefaultAuthorizer(
          this.ops["ClearDefaultAuthorizer"].apply(partialParams)
        );
    }

    invokeConfirmTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof ConfirmTopicRuleDestinationRequest]: (ConfirmTopicRuleDestinationRequest)[K]
    }>): Request<ConfirmTopicRuleDestinationResponse, AWSError> {
        this.boot();
        return this.client.confirmTopicRuleDestination(
          this.ops["ConfirmTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeCreateAuditSuppression(partialParams: ToOptional<{
      [K in keyof CreateAuditSuppressionRequest]: (CreateAuditSuppressionRequest)[K]
    }>): Request<CreateAuditSuppressionResponse, AWSError> {
        this.boot();
        return this.client.createAuditSuppression(
          this.ops["CreateAuditSuppression"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest)[K]
    }>): Request<CreateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateBillingGroup(partialParams: ToOptional<{
      [K in keyof CreateBillingGroupRequest]: (CreateBillingGroupRequest)[K]
    }>): Request<CreateBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.createBillingGroup(
          this.ops["CreateBillingGroup"].apply(partialParams)
        );
    }

    invokeCreateCertificateFromCsr(partialParams: ToOptional<{
      [K in keyof CreateCertificateFromCsrRequest]: (CreateCertificateFromCsrRequest)[K]
    }>): Request<CreateCertificateFromCsrResponse, AWSError> {
        this.boot();
        return this.client.createCertificateFromCsr(
          this.ops["CreateCertificateFromCsr"].apply(partialParams)
        );
    }

    invokeCreateCustomMetric(partialParams: ToOptional<{
      [K in keyof CreateCustomMetricRequest]: (CreateCustomMetricRequest)[K]
    }>): Request<CreateCustomMetricResponse, AWSError> {
        this.boot();
        return this.client.createCustomMetric(
          this.ops["CreateCustomMetric"].apply(partialParams)
        );
    }

    invokeCreateDimension(partialParams: ToOptional<{
      [K in keyof CreateDimensionRequest]: (CreateDimensionRequest)[K]
    }>): Request<CreateDimensionResponse, AWSError> {
        this.boot();
        return this.client.createDimension(
          this.ops["CreateDimension"].apply(partialParams)
        );
    }

    invokeCreateDomainConfiguration(partialParams: ToOptional<{
      [K in keyof CreateDomainConfigurationRequest]: (CreateDomainConfigurationRequest)[K]
    }>): Request<CreateDomainConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createDomainConfiguration(
          this.ops["CreateDomainConfiguration"].apply(partialParams)
        );
    }

    invokeCreateDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof CreateDynamicThingGroupRequest]: (CreateDynamicThingGroupRequest)[K]
    }>): Request<CreateDynamicThingGroupResponse, AWSError> {
        this.boot();
        return this.client.createDynamicThingGroup(
          this.ops["CreateDynamicThingGroup"].apply(partialParams)
        );
    }

    invokeCreateFleetMetric(partialParams: ToOptional<{
      [K in keyof CreateFleetMetricRequest]: (CreateFleetMetricRequest)[K]
    }>): Request<CreateFleetMetricResponse, AWSError> {
        this.boot();
        return this.client.createFleetMetric(
          this.ops["CreateFleetMetric"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest]: (CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateJobTemplate(partialParams: ToOptional<{
      [K in keyof CreateJobTemplateRequest]: (CreateJobTemplateRequest)[K]
    }>): Request<CreateJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.createJobTemplate(
          this.ops["CreateJobTemplate"].apply(partialParams)
        );
    }

    invokeCreateKeysAndCertificate(partialParams: ToOptional<{
      [K in keyof CreateKeysAndCertificateRequest]: (CreateKeysAndCertificateRequest)[K]
    }>): Request<CreateKeysAndCertificateResponse, AWSError> {
        this.boot();
        return this.client.createKeysAndCertificate(
          this.ops["CreateKeysAndCertificate"].apply(partialParams)
        );
    }

    invokeCreateMitigationAction(partialParams: ToOptional<{
      [K in keyof CreateMitigationActionRequest]: (CreateMitigationActionRequest)[K]
    }>): Request<CreateMitigationActionResponse, AWSError> {
        this.boot();
        return this.client.createMitigationAction(
          this.ops["CreateMitigationAction"].apply(partialParams)
        );
    }

    invokeCreateOTAUpdate(partialParams: ToOptional<{
      [K in keyof CreateOTAUpdateRequest]: (CreateOTAUpdateRequest)[K]
    }>): Request<CreateOTAUpdateResponse, AWSError> {
        this.boot();
        return this.client.createOTAUpdate(
          this.ops["CreateOTAUpdate"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest]: (CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeCreatePolicyVersion(partialParams: ToOptional<{
      [K in keyof CreatePolicyVersionRequest]: (CreatePolicyVersionRequest)[K]
    }>): Request<CreatePolicyVersionResponse, AWSError> {
        this.boot();
        return this.client.createPolicyVersion(
          this.ops["CreatePolicyVersion"].apply(partialParams)
        );
    }

    invokeCreateProvisioningClaim(partialParams: ToOptional<{
      [K in keyof CreateProvisioningClaimRequest]: (CreateProvisioningClaimRequest)[K]
    }>): Request<CreateProvisioningClaimResponse, AWSError> {
        this.boot();
        return this.client.createProvisioningClaim(
          this.ops["CreateProvisioningClaim"].apply(partialParams)
        );
    }

    invokeCreateProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof CreateProvisioningTemplateRequest]: (CreateProvisioningTemplateRequest)[K]
    }>): Request<CreateProvisioningTemplateResponse, AWSError> {
        this.boot();
        return this.client.createProvisioningTemplate(
          this.ops["CreateProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeCreateProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateProvisioningTemplateVersionRequest]: (CreateProvisioningTemplateVersionRequest)[K]
    }>): Request<CreateProvisioningTemplateVersionResponse, AWSError> {
        this.boot();
        return this.client.createProvisioningTemplateVersion(
          this.ops["CreateProvisioningTemplateVersion"].apply(partialParams)
        );
    }

    invokeCreateRoleAlias(partialParams: ToOptional<{
      [K in keyof CreateRoleAliasRequest]: (CreateRoleAliasRequest)[K]
    }>): Request<CreateRoleAliasResponse, AWSError> {
        this.boot();
        return this.client.createRoleAlias(
          this.ops["CreateRoleAlias"].apply(partialParams)
        );
    }

    invokeCreateScheduledAudit(partialParams: ToOptional<{
      [K in keyof CreateScheduledAuditRequest]: (CreateScheduledAuditRequest)[K]
    }>): Request<CreateScheduledAuditResponse, AWSError> {
        this.boot();
        return this.client.createScheduledAudit(
          this.ops["CreateScheduledAudit"].apply(partialParams)
        );
    }

    invokeCreateSecurityProfile(partialParams: ToOptional<{
      [K in keyof CreateSecurityProfileRequest]: (CreateSecurityProfileRequest)[K]
    }>): Request<CreateSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.createSecurityProfile(
          this.ops["CreateSecurityProfile"].apply(partialParams)
        );
    }

    invokeCreateStream(partialParams: ToOptional<{
      [K in keyof CreateStreamRequest]: (CreateStreamRequest)[K]
    }>): Request<CreateStreamResponse, AWSError> {
        this.boot();
        return this.client.createStream(
          this.ops["CreateStream"].apply(partialParams)
        );
    }

    invokeCreateThing(partialParams: ToOptional<{
      [K in keyof CreateThingRequest]: (CreateThingRequest)[K]
    }>): Request<CreateThingResponse, AWSError> {
        this.boot();
        return this.client.createThing(
          this.ops["CreateThing"].apply(partialParams)
        );
    }

    invokeCreateThingGroup(partialParams: ToOptional<{
      [K in keyof CreateThingGroupRequest]: (CreateThingGroupRequest)[K]
    }>): Request<CreateThingGroupResponse, AWSError> {
        this.boot();
        return this.client.createThingGroup(
          this.ops["CreateThingGroup"].apply(partialParams)
        );
    }

    invokeCreateThingType(partialParams: ToOptional<{
      [K in keyof CreateThingTypeRequest]: (CreateThingTypeRequest)[K]
    }>): Request<CreateThingTypeResponse, AWSError> {
        this.boot();
        return this.client.createThingType(
          this.ops["CreateThingType"].apply(partialParams)
        );
    }

    invokeCreateTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof CreateTopicRuleDestinationRequest]: (CreateTopicRuleDestinationRequest)[K]
    }>): Request<CreateTopicRuleDestinationResponse, AWSError> {
        this.boot();
        return this.client.createTopicRuleDestination(
          this.ops["CreateTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeDeleteAccountAuditConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteAccountAuditConfigurationRequest]: (DeleteAccountAuditConfigurationRequest)[K]
    }>): Request<DeleteAccountAuditConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteAccountAuditConfiguration(
          this.ops["DeleteAccountAuditConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteAuditSuppression(partialParams: ToOptional<{
      [K in keyof DeleteAuditSuppressionRequest]: (DeleteAuditSuppressionRequest)[K]
    }>): Request<DeleteAuditSuppressionResponse, AWSError> {
        this.boot();
        return this.client.deleteAuditSuppression(
          this.ops["DeleteAuditSuppression"].apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest)[K]
    }>): Request<DeleteAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.deleteAuthorizer(
          this.ops["DeleteAuthorizer"].apply(partialParams)
        );
    }

    invokeDeleteBillingGroup(partialParams: ToOptional<{
      [K in keyof DeleteBillingGroupRequest]: (DeleteBillingGroupRequest)[K]
    }>): Request<DeleteBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteBillingGroup(
          this.ops["DeleteBillingGroup"].apply(partialParams)
        );
    }

    invokeDeleteCACertificate(partialParams: ToOptional<{
      [K in keyof DeleteCACertificateRequest]: (DeleteCACertificateRequest)[K]
    }>): Request<DeleteCACertificateResponse, AWSError> {
        this.boot();
        return this.client.deleteCACertificate(
          this.ops["DeleteCACertificate"].apply(partialParams)
        );
    }

    invokeDeleteCustomMetric(partialParams: ToOptional<{
      [K in keyof DeleteCustomMetricRequest]: (DeleteCustomMetricRequest)[K]
    }>): Request<DeleteCustomMetricResponse, AWSError> {
        this.boot();
        return this.client.deleteCustomMetric(
          this.ops["DeleteCustomMetric"].apply(partialParams)
        );
    }

    invokeDeleteDimension(partialParams: ToOptional<{
      [K in keyof DeleteDimensionRequest]: (DeleteDimensionRequest)[K]
    }>): Request<DeleteDimensionResponse, AWSError> {
        this.boot();
        return this.client.deleteDimension(
          this.ops["DeleteDimension"].apply(partialParams)
        );
    }

    invokeDeleteDomainConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteDomainConfigurationRequest]: (DeleteDomainConfigurationRequest)[K]
    }>): Request<DeleteDomainConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteDomainConfiguration(
          this.ops["DeleteDomainConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof DeleteDynamicThingGroupRequest]: (DeleteDynamicThingGroupRequest)[K]
    }>): Request<DeleteDynamicThingGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteDynamicThingGroup(
          this.ops["DeleteDynamicThingGroup"].apply(partialParams)
        );
    }

    invokeDeleteMitigationAction(partialParams: ToOptional<{
      [K in keyof DeleteMitigationActionRequest]: (DeleteMitigationActionRequest)[K]
    }>): Request<DeleteMitigationActionResponse, AWSError> {
        this.boot();
        return this.client.deleteMitigationAction(
          this.ops["DeleteMitigationAction"].apply(partialParams)
        );
    }

    invokeDeleteOTAUpdate(partialParams: ToOptional<{
      [K in keyof DeleteOTAUpdateRequest]: (DeleteOTAUpdateRequest)[K]
    }>): Request<DeleteOTAUpdateResponse, AWSError> {
        this.boot();
        return this.client.deleteOTAUpdate(
          this.ops["DeleteOTAUpdate"].apply(partialParams)
        );
    }

    invokeDeleteProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningTemplateRequest]: (DeleteProvisioningTemplateRequest)[K]
    }>): Request<DeleteProvisioningTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteProvisioningTemplate(
          this.ops["DeleteProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeDeleteProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningTemplateVersionRequest]: (DeleteProvisioningTemplateVersionRequest)[K]
    }>): Request<DeleteProvisioningTemplateVersionResponse, AWSError> {
        this.boot();
        return this.client.deleteProvisioningTemplateVersion(
          this.ops["DeleteProvisioningTemplateVersion"].apply(partialParams)
        );
    }

    invokeDeleteRegistrationCode(partialParams: ToOptional<{
      [K in keyof DeleteRegistrationCodeRequest]: (DeleteRegistrationCodeRequest)[K]
    }>): Request<DeleteRegistrationCodeResponse, AWSError> {
        this.boot();
        return this.client.deleteRegistrationCode(
          this.ops["DeleteRegistrationCode"].apply(partialParams)
        );
    }

    invokeDeleteRoleAlias(partialParams: ToOptional<{
      [K in keyof DeleteRoleAliasRequest]: (DeleteRoleAliasRequest)[K]
    }>): Request<DeleteRoleAliasResponse, AWSError> {
        this.boot();
        return this.client.deleteRoleAlias(
          this.ops["DeleteRoleAlias"].apply(partialParams)
        );
    }

    invokeDeleteScheduledAudit(partialParams: ToOptional<{
      [K in keyof DeleteScheduledAuditRequest]: (DeleteScheduledAuditRequest)[K]
    }>): Request<DeleteScheduledAuditResponse, AWSError> {
        this.boot();
        return this.client.deleteScheduledAudit(
          this.ops["DeleteScheduledAudit"].apply(partialParams)
        );
    }

    invokeDeleteSecurityProfile(partialParams: ToOptional<{
      [K in keyof DeleteSecurityProfileRequest]: (DeleteSecurityProfileRequest)[K]
    }>): Request<DeleteSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.deleteSecurityProfile(
          this.ops["DeleteSecurityProfile"].apply(partialParams)
        );
    }

    invokeDeleteStream(partialParams: ToOptional<{
      [K in keyof DeleteStreamRequest]: (DeleteStreamRequest)[K]
    }>): Request<DeleteStreamResponse, AWSError> {
        this.boot();
        return this.client.deleteStream(
          this.ops["DeleteStream"].apply(partialParams)
        );
    }

    invokeDeleteThing(partialParams: ToOptional<{
      [K in keyof DeleteThingRequest]: (DeleteThingRequest)[K]
    }>): Request<DeleteThingResponse, AWSError> {
        this.boot();
        return this.client.deleteThing(
          this.ops["DeleteThing"].apply(partialParams)
        );
    }

    invokeDeleteThingGroup(partialParams: ToOptional<{
      [K in keyof DeleteThingGroupRequest]: (DeleteThingGroupRequest)[K]
    }>): Request<DeleteThingGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteThingGroup(
          this.ops["DeleteThingGroup"].apply(partialParams)
        );
    }

    invokeDeleteThingType(partialParams: ToOptional<{
      [K in keyof DeleteThingTypeRequest]: (DeleteThingTypeRequest)[K]
    }>): Request<DeleteThingTypeResponse, AWSError> {
        this.boot();
        return this.client.deleteThingType(
          this.ops["DeleteThingType"].apply(partialParams)
        );
    }

    invokeDeleteTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof DeleteTopicRuleDestinationRequest]: (DeleteTopicRuleDestinationRequest)[K]
    }>): Request<DeleteTopicRuleDestinationResponse, AWSError> {
        this.boot();
        return this.client.deleteTopicRuleDestination(
          this.ops["DeleteTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeDeprecateThingType(partialParams: ToOptional<{
      [K in keyof DeprecateThingTypeRequest]: (DeprecateThingTypeRequest)[K]
    }>): Request<DeprecateThingTypeResponse, AWSError> {
        this.boot();
        return this.client.deprecateThingType(
          this.ops["DeprecateThingType"].apply(partialParams)
        );
    }

    invokeDescribeAccountAuditConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAccountAuditConfigurationRequest]: (DescribeAccountAuditConfigurationRequest)[K]
    }>): Request<DescribeAccountAuditConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeAccountAuditConfiguration(
          this.ops["DescribeAccountAuditConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeAuditFinding(partialParams: ToOptional<{
      [K in keyof DescribeAuditFindingRequest]: (DescribeAuditFindingRequest)[K]
    }>): Request<DescribeAuditFindingResponse, AWSError> {
        this.boot();
        return this.client.describeAuditFinding(
          this.ops["DescribeAuditFinding"].apply(partialParams)
        );
    }

    invokeDescribeAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof DescribeAuditMitigationActionsTaskRequest]: (DescribeAuditMitigationActionsTaskRequest)[K]
    }>): Request<DescribeAuditMitigationActionsTaskResponse, AWSError> {
        this.boot();
        return this.client.describeAuditMitigationActionsTask(
          this.ops["DescribeAuditMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeDescribeAuditSuppression(partialParams: ToOptional<{
      [K in keyof DescribeAuditSuppressionRequest]: (DescribeAuditSuppressionRequest)[K]
    }>): Request<DescribeAuditSuppressionResponse, AWSError> {
        this.boot();
        return this.client.describeAuditSuppression(
          this.ops["DescribeAuditSuppression"].apply(partialParams)
        );
    }

    invokeDescribeAuditTask(partialParams: ToOptional<{
      [K in keyof DescribeAuditTaskRequest]: (DescribeAuditTaskRequest)[K]
    }>): Request<DescribeAuditTaskResponse, AWSError> {
        this.boot();
        return this.client.describeAuditTask(
          this.ops["DescribeAuditTask"].apply(partialParams)
        );
    }

    invokeDescribeAuthorizer(partialParams: ToOptional<{
      [K in keyof DescribeAuthorizerRequest]: (DescribeAuthorizerRequest)[K]
    }>): Request<DescribeAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.describeAuthorizer(
          this.ops["DescribeAuthorizer"].apply(partialParams)
        );
    }

    invokeDescribeBillingGroup(partialParams: ToOptional<{
      [K in keyof DescribeBillingGroupRequest]: (DescribeBillingGroupRequest)[K]
    }>): Request<DescribeBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.describeBillingGroup(
          this.ops["DescribeBillingGroup"].apply(partialParams)
        );
    }

    invokeDescribeCACertificate(partialParams: ToOptional<{
      [K in keyof DescribeCACertificateRequest]: (DescribeCACertificateRequest)[K]
    }>): Request<DescribeCACertificateResponse, AWSError> {
        this.boot();
        return this.client.describeCACertificate(
          this.ops["DescribeCACertificate"].apply(partialParams)
        );
    }

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof DescribeCertificateRequest]: (DescribeCertificateRequest)[K]
    }>): Request<DescribeCertificateResponse, AWSError> {
        this.boot();
        return this.client.describeCertificate(
          this.ops["DescribeCertificate"].apply(partialParams)
        );
    }

    invokeDescribeCustomMetric(partialParams: ToOptional<{
      [K in keyof DescribeCustomMetricRequest]: (DescribeCustomMetricRequest)[K]
    }>): Request<DescribeCustomMetricResponse, AWSError> {
        this.boot();
        return this.client.describeCustomMetric(
          this.ops["DescribeCustomMetric"].apply(partialParams)
        );
    }

    invokeDescribeDefaultAuthorizer(partialParams: ToOptional<{
      [K in keyof DescribeDefaultAuthorizerRequest]: (DescribeDefaultAuthorizerRequest)[K]
    }>): Request<DescribeDefaultAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.describeDefaultAuthorizer(
          this.ops["DescribeDefaultAuthorizer"].apply(partialParams)
        );
    }

    invokeDescribeDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof DescribeDetectMitigationActionsTaskRequest]: (DescribeDetectMitigationActionsTaskRequest)[K]
    }>): Request<DescribeDetectMitigationActionsTaskResponse, AWSError> {
        this.boot();
        return this.client.describeDetectMitigationActionsTask(
          this.ops["DescribeDetectMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeDescribeDimension(partialParams: ToOptional<{
      [K in keyof DescribeDimensionRequest]: (DescribeDimensionRequest)[K]
    }>): Request<DescribeDimensionResponse, AWSError> {
        this.boot();
        return this.client.describeDimension(
          this.ops["DescribeDimension"].apply(partialParams)
        );
    }

    invokeDescribeDomainConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeDomainConfigurationRequest]: (DescribeDomainConfigurationRequest)[K]
    }>): Request<DescribeDomainConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeDomainConfiguration(
          this.ops["DescribeDomainConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeEndpointRequest]: (DescribeEndpointRequest)[K]
    }>): Request<DescribeEndpointResponse, AWSError> {
        this.boot();
        return this.client.describeEndpoint(
          this.ops["DescribeEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeEventConfigurations(partialParams: ToOptional<{
      [K in keyof DescribeEventConfigurationsRequest]: (DescribeEventConfigurationsRequest)[K]
    }>): Request<DescribeEventConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.describeEventConfigurations(
          this.ops["DescribeEventConfigurations"].apply(partialParams)
        );
    }

    invokeDescribeFleetMetric(partialParams: ToOptional<{
      [K in keyof DescribeFleetMetricRequest]: (DescribeFleetMetricRequest)[K]
    }>): Request<DescribeFleetMetricResponse, AWSError> {
        this.boot();
        return this.client.describeFleetMetric(
          this.ops["DescribeFleetMetric"].apply(partialParams)
        );
    }

    invokeDescribeIndex(partialParams: ToOptional<{
      [K in keyof DescribeIndexRequest]: (DescribeIndexRequest)[K]
    }>): Request<DescribeIndexResponse, AWSError> {
        this.boot();
        return this.client.describeIndex(
          this.ops["DescribeIndex"].apply(partialParams)
        );
    }

    invokeDescribeJob(partialParams: ToOptional<{
      [K in keyof DescribeJobRequest]: (DescribeJobRequest)[K]
    }>): Request<DescribeJobResponse, AWSError> {
        this.boot();
        return this.client.describeJob(
          this.ops["DescribeJob"].apply(partialParams)
        );
    }

    invokeDescribeJobExecution(partialParams: ToOptional<{
      [K in keyof DescribeJobExecutionRequest]: (DescribeJobExecutionRequest)[K]
    }>): Request<DescribeJobExecutionResponse, AWSError> {
        this.boot();
        return this.client.describeJobExecution(
          this.ops["DescribeJobExecution"].apply(partialParams)
        );
    }

    invokeDescribeJobTemplate(partialParams: ToOptional<{
      [K in keyof DescribeJobTemplateRequest]: (DescribeJobTemplateRequest)[K]
    }>): Request<DescribeJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.describeJobTemplate(
          this.ops["DescribeJobTemplate"].apply(partialParams)
        );
    }

    invokeDescribeManagedJobTemplate(partialParams: ToOptional<{
      [K in keyof DescribeManagedJobTemplateRequest]: (DescribeManagedJobTemplateRequest)[K]
    }>): Request<DescribeManagedJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.describeManagedJobTemplate(
          this.ops["DescribeManagedJobTemplate"].apply(partialParams)
        );
    }

    invokeDescribeMitigationAction(partialParams: ToOptional<{
      [K in keyof DescribeMitigationActionRequest]: (DescribeMitigationActionRequest)[K]
    }>): Request<DescribeMitigationActionResponse, AWSError> {
        this.boot();
        return this.client.describeMitigationAction(
          this.ops["DescribeMitigationAction"].apply(partialParams)
        );
    }

    invokeDescribeProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningTemplateRequest]: (DescribeProvisioningTemplateRequest)[K]
    }>): Request<DescribeProvisioningTemplateResponse, AWSError> {
        this.boot();
        return this.client.describeProvisioningTemplate(
          this.ops["DescribeProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeDescribeProvisioningTemplateVersion(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningTemplateVersionRequest]: (DescribeProvisioningTemplateVersionRequest)[K]
    }>): Request<DescribeProvisioningTemplateVersionResponse, AWSError> {
        this.boot();
        return this.client.describeProvisioningTemplateVersion(
          this.ops["DescribeProvisioningTemplateVersion"].apply(partialParams)
        );
    }

    invokeDescribeRoleAlias(partialParams: ToOptional<{
      [K in keyof DescribeRoleAliasRequest]: (DescribeRoleAliasRequest)[K]
    }>): Request<DescribeRoleAliasResponse, AWSError> {
        this.boot();
        return this.client.describeRoleAlias(
          this.ops["DescribeRoleAlias"].apply(partialParams)
        );
    }

    invokeDescribeScheduledAudit(partialParams: ToOptional<{
      [K in keyof DescribeScheduledAuditRequest]: (DescribeScheduledAuditRequest)[K]
    }>): Request<DescribeScheduledAuditResponse, AWSError> {
        this.boot();
        return this.client.describeScheduledAudit(
          this.ops["DescribeScheduledAudit"].apply(partialParams)
        );
    }

    invokeDescribeSecurityProfile(partialParams: ToOptional<{
      [K in keyof DescribeSecurityProfileRequest]: (DescribeSecurityProfileRequest)[K]
    }>): Request<DescribeSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.describeSecurityProfile(
          this.ops["DescribeSecurityProfile"].apply(partialParams)
        );
    }

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamRequest]: (DescribeStreamRequest)[K]
    }>): Request<DescribeStreamResponse, AWSError> {
        this.boot();
        return this.client.describeStream(
          this.ops["DescribeStream"].apply(partialParams)
        );
    }

    invokeDescribeThing(partialParams: ToOptional<{
      [K in keyof DescribeThingRequest]: (DescribeThingRequest)[K]
    }>): Request<DescribeThingResponse, AWSError> {
        this.boot();
        return this.client.describeThing(
          this.ops["DescribeThing"].apply(partialParams)
        );
    }

    invokeDescribeThingGroup(partialParams: ToOptional<{
      [K in keyof DescribeThingGroupRequest]: (DescribeThingGroupRequest)[K]
    }>): Request<DescribeThingGroupResponse, AWSError> {
        this.boot();
        return this.client.describeThingGroup(
          this.ops["DescribeThingGroup"].apply(partialParams)
        );
    }

    invokeDescribeThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof DescribeThingRegistrationTaskRequest]: (DescribeThingRegistrationTaskRequest)[K]
    }>): Request<DescribeThingRegistrationTaskResponse, AWSError> {
        this.boot();
        return this.client.describeThingRegistrationTask(
          this.ops["DescribeThingRegistrationTask"].apply(partialParams)
        );
    }

    invokeDescribeThingType(partialParams: ToOptional<{
      [K in keyof DescribeThingTypeRequest]: (DescribeThingTypeRequest)[K]
    }>): Request<DescribeThingTypeResponse, AWSError> {
        this.boot();
        return this.client.describeThingType(
          this.ops["DescribeThingType"].apply(partialParams)
        );
    }

    invokeDetachSecurityProfile(partialParams: ToOptional<{
      [K in keyof DetachSecurityProfileRequest]: (DetachSecurityProfileRequest)[K]
    }>): Request<DetachSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.detachSecurityProfile(
          this.ops["DetachSecurityProfile"].apply(partialParams)
        );
    }

    invokeDetachThingPrincipal(partialParams: ToOptional<{
      [K in keyof DetachThingPrincipalRequest]: (DetachThingPrincipalRequest)[K]
    }>): Request<DetachThingPrincipalResponse, AWSError> {
        this.boot();
        return this.client.detachThingPrincipal(
          this.ops["DetachThingPrincipal"].apply(partialParams)
        );
    }

    invokeGetBehaviorModelTrainingSummaries(partialParams: ToOptional<{
      [K in keyof GetBehaviorModelTrainingSummariesRequest]: (GetBehaviorModelTrainingSummariesRequest)[K]
    }>): Request<GetBehaviorModelTrainingSummariesResponse, AWSError> {
        this.boot();
        return this.client.getBehaviorModelTrainingSummaries(
          this.ops["GetBehaviorModelTrainingSummaries"].apply(partialParams)
        );
    }

    invokeGetBucketsAggregation(partialParams: ToOptional<{
      [K in keyof GetBucketsAggregationRequest]: (GetBucketsAggregationRequest)[K]
    }>): Request<GetBucketsAggregationResponse, AWSError> {
        this.boot();
        return this.client.getBucketsAggregation(
          this.ops["GetBucketsAggregation"].apply(partialParams)
        );
    }

    invokeGetCardinality(partialParams: ToOptional<{
      [K in keyof GetCardinalityRequest]: (GetCardinalityRequest)[K]
    }>): Request<GetCardinalityResponse, AWSError> {
        this.boot();
        return this.client.getCardinality(
          this.ops["GetCardinality"].apply(partialParams)
        );
    }

    invokeGetEffectivePolicies(partialParams: ToOptional<{
      [K in keyof GetEffectivePoliciesRequest]: (GetEffectivePoliciesRequest)[K]
    }>): Request<GetEffectivePoliciesResponse, AWSError> {
        this.boot();
        return this.client.getEffectivePolicies(
          this.ops["GetEffectivePolicies"].apply(partialParams)
        );
    }

    invokeGetIndexingConfiguration(partialParams: ToOptional<{
      [K in keyof GetIndexingConfigurationRequest]: (GetIndexingConfigurationRequest)[K]
    }>): Request<GetIndexingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getIndexingConfiguration(
          this.ops["GetIndexingConfiguration"].apply(partialParams)
        );
    }

    invokeGetJobDocument(partialParams: ToOptional<{
      [K in keyof GetJobDocumentRequest]: (GetJobDocumentRequest)[K]
    }>): Request<GetJobDocumentResponse, AWSError> {
        this.boot();
        return this.client.getJobDocument(
          this.ops["GetJobDocument"].apply(partialParams)
        );
    }

    invokeGetLoggingOptions(partialParams: ToOptional<{
      [K in keyof GetLoggingOptionsRequest]: (GetLoggingOptionsRequest)[K]
    }>): Request<GetLoggingOptionsResponse, AWSError> {
        this.boot();
        return this.client.getLoggingOptions(
          this.ops["GetLoggingOptions"].apply(partialParams)
        );
    }

    invokeGetOTAUpdate(partialParams: ToOptional<{
      [K in keyof GetOTAUpdateRequest]: (GetOTAUpdateRequest)[K]
    }>): Request<GetOTAUpdateResponse, AWSError> {
        this.boot();
        return this.client.getOTAUpdate(
          this.ops["GetOTAUpdate"].apply(partialParams)
        );
    }

    invokeGetPercentiles(partialParams: ToOptional<{
      [K in keyof GetPercentilesRequest]: (GetPercentilesRequest)[K]
    }>): Request<GetPercentilesResponse, AWSError> {
        this.boot();
        return this.client.getPercentiles(
          this.ops["GetPercentiles"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetPolicyVersion(partialParams: ToOptional<{
      [K in keyof GetPolicyVersionRequest]: (GetPolicyVersionRequest)[K]
    }>): Request<GetPolicyVersionResponse, AWSError> {
        this.boot();
        return this.client.getPolicyVersion(
          this.ops["GetPolicyVersion"].apply(partialParams)
        );
    }

    invokeGetRegistrationCode(partialParams: ToOptional<{
      [K in keyof GetRegistrationCodeRequest]: (GetRegistrationCodeRequest)[K]
    }>): Request<GetRegistrationCodeResponse, AWSError> {
        this.boot();
        return this.client.getRegistrationCode(
          this.ops["GetRegistrationCode"].apply(partialParams)
        );
    }

    invokeGetStatistics(partialParams: ToOptional<{
      [K in keyof GetStatisticsRequest]: (GetStatisticsRequest)[K]
    }>): Request<GetStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getStatistics(
          this.ops["GetStatistics"].apply(partialParams)
        );
    }

    invokeGetTopicRule(partialParams: ToOptional<{
      [K in keyof GetTopicRuleRequest]: (GetTopicRuleRequest)[K]
    }>): Request<GetTopicRuleResponse, AWSError> {
        this.boot();
        return this.client.getTopicRule(
          this.ops["GetTopicRule"].apply(partialParams)
        );
    }

    invokeGetTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof GetTopicRuleDestinationRequest]: (GetTopicRuleDestinationRequest)[K]
    }>): Request<GetTopicRuleDestinationResponse, AWSError> {
        this.boot();
        return this.client.getTopicRuleDestination(
          this.ops["GetTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeGetV2LoggingOptions(partialParams: ToOptional<{
      [K in keyof GetV2LoggingOptionsRequest]: (GetV2LoggingOptionsRequest)[K]
    }>): Request<GetV2LoggingOptionsResponse, AWSError> {
        this.boot();
        return this.client.getV2LoggingOptions(
          this.ops["GetV2LoggingOptions"].apply(partialParams)
        );
    }

    invokeListActiveViolations(partialParams: ToOptional<{
      [K in keyof ListActiveViolationsRequest]: (ListActiveViolationsRequest)[K]
    }>): Request<ListActiveViolationsResponse, AWSError> {
        this.boot();
        return this.client.listActiveViolations(
          this.ops["ListActiveViolations"].apply(partialParams)
        );
    }

    invokeListAttachedPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedPoliciesRequest]: (ListAttachedPoliciesRequest)[K]
    }>): Request<ListAttachedPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedPolicies(
          this.ops["ListAttachedPolicies"].apply(partialParams)
        );
    }

    invokeListAuditFindings(partialParams: ToOptional<{
      [K in keyof ListAuditFindingsRequest]: (ListAuditFindingsRequest)[K]
    }>): Request<ListAuditFindingsResponse, AWSError> {
        this.boot();
        return this.client.listAuditFindings(
          this.ops["ListAuditFindings"].apply(partialParams)
        );
    }

    invokeListAuditMitigationActionsExecutions(partialParams: ToOptional<{
      [K in keyof ListAuditMitigationActionsExecutionsRequest]: (ListAuditMitigationActionsExecutionsRequest)[K]
    }>): Request<ListAuditMitigationActionsExecutionsResponse, AWSError> {
        this.boot();
        return this.client.listAuditMitigationActionsExecutions(
          this.ops["ListAuditMitigationActionsExecutions"].apply(partialParams)
        );
    }

    invokeListAuditMitigationActionsTasks(partialParams: ToOptional<{
      [K in keyof ListAuditMitigationActionsTasksRequest]: (ListAuditMitigationActionsTasksRequest)[K]
    }>): Request<ListAuditMitigationActionsTasksResponse, AWSError> {
        this.boot();
        return this.client.listAuditMitigationActionsTasks(
          this.ops["ListAuditMitigationActionsTasks"].apply(partialParams)
        );
    }

    invokeListAuditSuppressions(partialParams: ToOptional<{
      [K in keyof ListAuditSuppressionsRequest]: (ListAuditSuppressionsRequest)[K]
    }>): Request<ListAuditSuppressionsResponse, AWSError> {
        this.boot();
        return this.client.listAuditSuppressions(
          this.ops["ListAuditSuppressions"].apply(partialParams)
        );
    }

    invokeListAuditTasks(partialParams: ToOptional<{
      [K in keyof ListAuditTasksRequest]: (ListAuditTasksRequest)[K]
    }>): Request<ListAuditTasksResponse, AWSError> {
        this.boot();
        return this.client.listAuditTasks(
          this.ops["ListAuditTasks"].apply(partialParams)
        );
    }

    invokeListAuthorizers(partialParams: ToOptional<{
      [K in keyof ListAuthorizersRequest]: (ListAuthorizersRequest)[K]
    }>): Request<ListAuthorizersResponse, AWSError> {
        this.boot();
        return this.client.listAuthorizers(
          this.ops["ListAuthorizers"].apply(partialParams)
        );
    }

    invokeListBillingGroups(partialParams: ToOptional<{
      [K in keyof ListBillingGroupsRequest]: (ListBillingGroupsRequest)[K]
    }>): Request<ListBillingGroupsResponse, AWSError> {
        this.boot();
        return this.client.listBillingGroups(
          this.ops["ListBillingGroups"].apply(partialParams)
        );
    }

    invokeListCACertificates(partialParams: ToOptional<{
      [K in keyof ListCACertificatesRequest]: (ListCACertificatesRequest)[K]
    }>): Request<ListCACertificatesResponse, AWSError> {
        this.boot();
        return this.client.listCACertificates(
          this.ops["ListCACertificates"].apply(partialParams)
        );
    }

    invokeListCertificates(partialParams: ToOptional<{
      [K in keyof ListCertificatesRequest]: (ListCertificatesRequest)[K]
    }>): Request<ListCertificatesResponse, AWSError> {
        this.boot();
        return this.client.listCertificates(
          this.ops["ListCertificates"].apply(partialParams)
        );
    }

    invokeListCertificatesByCA(partialParams: ToOptional<{
      [K in keyof ListCertificatesByCARequest]: (ListCertificatesByCARequest)[K]
    }>): Request<ListCertificatesByCAResponse, AWSError> {
        this.boot();
        return this.client.listCertificatesByCA(
          this.ops["ListCertificatesByCA"].apply(partialParams)
        );
    }

    invokeListCustomMetrics(partialParams: ToOptional<{
      [K in keyof ListCustomMetricsRequest]: (ListCustomMetricsRequest)[K]
    }>): Request<ListCustomMetricsResponse, AWSError> {
        this.boot();
        return this.client.listCustomMetrics(
          this.ops["ListCustomMetrics"].apply(partialParams)
        );
    }

    invokeListDetectMitigationActionsExecutions(partialParams: ToOptional<{
      [K in keyof ListDetectMitigationActionsExecutionsRequest]: (ListDetectMitigationActionsExecutionsRequest)[K]
    }>): Request<ListDetectMitigationActionsExecutionsResponse, AWSError> {
        this.boot();
        return this.client.listDetectMitigationActionsExecutions(
          this.ops["ListDetectMitigationActionsExecutions"].apply(partialParams)
        );
    }

    invokeListDetectMitigationActionsTasks(partialParams: ToOptional<{
      [K in keyof ListDetectMitigationActionsTasksRequest]: (ListDetectMitigationActionsTasksRequest)[K]
    }>): Request<ListDetectMitigationActionsTasksResponse, AWSError> {
        this.boot();
        return this.client.listDetectMitigationActionsTasks(
          this.ops["ListDetectMitigationActionsTasks"].apply(partialParams)
        );
    }

    invokeListDimensions(partialParams: ToOptional<{
      [K in keyof ListDimensionsRequest]: (ListDimensionsRequest)[K]
    }>): Request<ListDimensionsResponse, AWSError> {
        this.boot();
        return this.client.listDimensions(
          this.ops["ListDimensions"].apply(partialParams)
        );
    }

    invokeListDomainConfigurations(partialParams: ToOptional<{
      [K in keyof ListDomainConfigurationsRequest]: (ListDomainConfigurationsRequest)[K]
    }>): Request<ListDomainConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listDomainConfigurations(
          this.ops["ListDomainConfigurations"].apply(partialParams)
        );
    }

    invokeListFleetMetrics(partialParams: ToOptional<{
      [K in keyof ListFleetMetricsRequest]: (ListFleetMetricsRequest)[K]
    }>): Request<ListFleetMetricsResponse, AWSError> {
        this.boot();
        return this.client.listFleetMetrics(
          this.ops["ListFleetMetrics"].apply(partialParams)
        );
    }

    invokeListIndices(partialParams: ToOptional<{
      [K in keyof ListIndicesRequest]: (ListIndicesRequest)[K]
    }>): Request<ListIndicesResponse, AWSError> {
        this.boot();
        return this.client.listIndices(
          this.ops["ListIndices"].apply(partialParams)
        );
    }

    invokeListJobExecutionsForJob(partialParams: ToOptional<{
      [K in keyof ListJobExecutionsForJobRequest]: (ListJobExecutionsForJobRequest)[K]
    }>): Request<ListJobExecutionsForJobResponse, AWSError> {
        this.boot();
        return this.client.listJobExecutionsForJob(
          this.ops["ListJobExecutionsForJob"].apply(partialParams)
        );
    }

    invokeListJobExecutionsForThing(partialParams: ToOptional<{
      [K in keyof ListJobExecutionsForThingRequest]: (ListJobExecutionsForThingRequest)[K]
    }>): Request<ListJobExecutionsForThingResponse, AWSError> {
        this.boot();
        return this.client.listJobExecutionsForThing(
          this.ops["ListJobExecutionsForThing"].apply(partialParams)
        );
    }

    invokeListJobTemplates(partialParams: ToOptional<{
      [K in keyof ListJobTemplatesRequest]: (ListJobTemplatesRequest)[K]
    }>): Request<ListJobTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listJobTemplates(
          this.ops["ListJobTemplates"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest]: (ListJobsRequest)[K]
    }>): Request<ListJobsResponse, AWSError> {
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListManagedJobTemplates(partialParams: ToOptional<{
      [K in keyof ListManagedJobTemplatesRequest]: (ListManagedJobTemplatesRequest)[K]
    }>): Request<ListManagedJobTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listManagedJobTemplates(
          this.ops["ListManagedJobTemplates"].apply(partialParams)
        );
    }

    invokeListMitigationActions(partialParams: ToOptional<{
      [K in keyof ListMitigationActionsRequest]: (ListMitigationActionsRequest)[K]
    }>): Request<ListMitigationActionsResponse, AWSError> {
        this.boot();
        return this.client.listMitigationActions(
          this.ops["ListMitigationActions"].apply(partialParams)
        );
    }

    invokeListOTAUpdates(partialParams: ToOptional<{
      [K in keyof ListOTAUpdatesRequest]: (ListOTAUpdatesRequest)[K]
    }>): Request<ListOTAUpdatesResponse, AWSError> {
        this.boot();
        return this.client.listOTAUpdates(
          this.ops["ListOTAUpdates"].apply(partialParams)
        );
    }

    invokeListOutgoingCertificates(partialParams: ToOptional<{
      [K in keyof ListOutgoingCertificatesRequest]: (ListOutgoingCertificatesRequest)[K]
    }>): Request<ListOutgoingCertificatesResponse, AWSError> {
        this.boot();
        return this.client.listOutgoingCertificates(
          this.ops["ListOutgoingCertificates"].apply(partialParams)
        );
    }

    invokeListPolicies(partialParams: ToOptional<{
      [K in keyof ListPoliciesRequest]: (ListPoliciesRequest)[K]
    }>): Request<ListPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listPolicies(
          this.ops["ListPolicies"].apply(partialParams)
        );
    }

    invokeListPolicyPrincipals(partialParams: ToOptional<{
      [K in keyof ListPolicyPrincipalsRequest]: (ListPolicyPrincipalsRequest)[K]
    }>): Request<ListPolicyPrincipalsResponse, AWSError> {
        this.boot();
        return this.client.listPolicyPrincipals(
          this.ops["ListPolicyPrincipals"].apply(partialParams)
        );
    }

    invokeListPolicyVersions(partialParams: ToOptional<{
      [K in keyof ListPolicyVersionsRequest]: (ListPolicyVersionsRequest)[K]
    }>): Request<ListPolicyVersionsResponse, AWSError> {
        this.boot();
        return this.client.listPolicyVersions(
          this.ops["ListPolicyVersions"].apply(partialParams)
        );
    }

    invokeListPrincipalPolicies(partialParams: ToOptional<{
      [K in keyof ListPrincipalPoliciesRequest]: (ListPrincipalPoliciesRequest)[K]
    }>): Request<ListPrincipalPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listPrincipalPolicies(
          this.ops["ListPrincipalPolicies"].apply(partialParams)
        );
    }

    invokeListPrincipalThings(partialParams: ToOptional<{
      [K in keyof ListPrincipalThingsRequest]: (ListPrincipalThingsRequest)[K]
    }>): Request<ListPrincipalThingsResponse, AWSError> {
        this.boot();
        return this.client.listPrincipalThings(
          this.ops["ListPrincipalThings"].apply(partialParams)
        );
    }

    invokeListProvisioningTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListProvisioningTemplateVersionsRequest]: (ListProvisioningTemplateVersionsRequest)[K]
    }>): Request<ListProvisioningTemplateVersionsResponse, AWSError> {
        this.boot();
        return this.client.listProvisioningTemplateVersions(
          this.ops["ListProvisioningTemplateVersions"].apply(partialParams)
        );
    }

    invokeListProvisioningTemplates(partialParams: ToOptional<{
      [K in keyof ListProvisioningTemplatesRequest]: (ListProvisioningTemplatesRequest)[K]
    }>): Request<ListProvisioningTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listProvisioningTemplates(
          this.ops["ListProvisioningTemplates"].apply(partialParams)
        );
    }

    invokeListRoleAliases(partialParams: ToOptional<{
      [K in keyof ListRoleAliasesRequest]: (ListRoleAliasesRequest)[K]
    }>): Request<ListRoleAliasesResponse, AWSError> {
        this.boot();
        return this.client.listRoleAliases(
          this.ops["ListRoleAliases"].apply(partialParams)
        );
    }

    invokeListScheduledAudits(partialParams: ToOptional<{
      [K in keyof ListScheduledAuditsRequest]: (ListScheduledAuditsRequest)[K]
    }>): Request<ListScheduledAuditsResponse, AWSError> {
        this.boot();
        return this.client.listScheduledAudits(
          this.ops["ListScheduledAudits"].apply(partialParams)
        );
    }

    invokeListSecurityProfiles(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesRequest]: (ListSecurityProfilesRequest)[K]
    }>): Request<ListSecurityProfilesResponse, AWSError> {
        this.boot();
        return this.client.listSecurityProfiles(
          this.ops["ListSecurityProfiles"].apply(partialParams)
        );
    }

    invokeListSecurityProfilesForTarget(partialParams: ToOptional<{
      [K in keyof ListSecurityProfilesForTargetRequest]: (ListSecurityProfilesForTargetRequest)[K]
    }>): Request<ListSecurityProfilesForTargetResponse, AWSError> {
        this.boot();
        return this.client.listSecurityProfilesForTarget(
          this.ops["ListSecurityProfilesForTarget"].apply(partialParams)
        );
    }

    invokeListStreams(partialParams: ToOptional<{
      [K in keyof ListStreamsRequest]: (ListStreamsRequest)[K]
    }>): Request<ListStreamsResponse, AWSError> {
        this.boot();
        return this.client.listStreams(
          this.ops["ListStreams"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest]: (ListTargetsForPolicyRequest)[K]
    }>): Request<ListTargetsForPolicyResponse, AWSError> {
        this.boot();
        return this.client.listTargetsForPolicy(
          this.ops["ListTargetsForPolicy"].apply(partialParams)
        );
    }

    invokeListTargetsForSecurityProfile(partialParams: ToOptional<{
      [K in keyof ListTargetsForSecurityProfileRequest]: (ListTargetsForSecurityProfileRequest)[K]
    }>): Request<ListTargetsForSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.listTargetsForSecurityProfile(
          this.ops["ListTargetsForSecurityProfile"].apply(partialParams)
        );
    }

    invokeListThingGroups(partialParams: ToOptional<{
      [K in keyof ListThingGroupsRequest]: (ListThingGroupsRequest)[K]
    }>): Request<ListThingGroupsResponse, AWSError> {
        this.boot();
        return this.client.listThingGroups(
          this.ops["ListThingGroups"].apply(partialParams)
        );
    }

    invokeListThingGroupsForThing(partialParams: ToOptional<{
      [K in keyof ListThingGroupsForThingRequest]: (ListThingGroupsForThingRequest)[K]
    }>): Request<ListThingGroupsForThingResponse, AWSError> {
        this.boot();
        return this.client.listThingGroupsForThing(
          this.ops["ListThingGroupsForThing"].apply(partialParams)
        );
    }

    invokeListThingPrincipals(partialParams: ToOptional<{
      [K in keyof ListThingPrincipalsRequest]: (ListThingPrincipalsRequest)[K]
    }>): Request<ListThingPrincipalsResponse, AWSError> {
        this.boot();
        return this.client.listThingPrincipals(
          this.ops["ListThingPrincipals"].apply(partialParams)
        );
    }

    invokeListThingRegistrationTaskReports(partialParams: ToOptional<{
      [K in keyof ListThingRegistrationTaskReportsRequest]: (ListThingRegistrationTaskReportsRequest)[K]
    }>): Request<ListThingRegistrationTaskReportsResponse, AWSError> {
        this.boot();
        return this.client.listThingRegistrationTaskReports(
          this.ops["ListThingRegistrationTaskReports"].apply(partialParams)
        );
    }

    invokeListThingRegistrationTasks(partialParams: ToOptional<{
      [K in keyof ListThingRegistrationTasksRequest]: (ListThingRegistrationTasksRequest)[K]
    }>): Request<ListThingRegistrationTasksResponse, AWSError> {
        this.boot();
        return this.client.listThingRegistrationTasks(
          this.ops["ListThingRegistrationTasks"].apply(partialParams)
        );
    }

    invokeListThingTypes(partialParams: ToOptional<{
      [K in keyof ListThingTypesRequest]: (ListThingTypesRequest)[K]
    }>): Request<ListThingTypesResponse, AWSError> {
        this.boot();
        return this.client.listThingTypes(
          this.ops["ListThingTypes"].apply(partialParams)
        );
    }

    invokeListThings(partialParams: ToOptional<{
      [K in keyof ListThingsRequest]: (ListThingsRequest)[K]
    }>): Request<ListThingsResponse, AWSError> {
        this.boot();
        return this.client.listThings(
          this.ops["ListThings"].apply(partialParams)
        );
    }

    invokeListThingsInBillingGroup(partialParams: ToOptional<{
      [K in keyof ListThingsInBillingGroupRequest]: (ListThingsInBillingGroupRequest)[K]
    }>): Request<ListThingsInBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.listThingsInBillingGroup(
          this.ops["ListThingsInBillingGroup"].apply(partialParams)
        );
    }

    invokeListThingsInThingGroup(partialParams: ToOptional<{
      [K in keyof ListThingsInThingGroupRequest]: (ListThingsInThingGroupRequest)[K]
    }>): Request<ListThingsInThingGroupResponse, AWSError> {
        this.boot();
        return this.client.listThingsInThingGroup(
          this.ops["ListThingsInThingGroup"].apply(partialParams)
        );
    }

    invokeListTopicRuleDestinations(partialParams: ToOptional<{
      [K in keyof ListTopicRuleDestinationsRequest]: (ListTopicRuleDestinationsRequest)[K]
    }>): Request<ListTopicRuleDestinationsResponse, AWSError> {
        this.boot();
        return this.client.listTopicRuleDestinations(
          this.ops["ListTopicRuleDestinations"].apply(partialParams)
        );
    }

    invokeListTopicRules(partialParams: ToOptional<{
      [K in keyof ListTopicRulesRequest]: (ListTopicRulesRequest)[K]
    }>): Request<ListTopicRulesResponse, AWSError> {
        this.boot();
        return this.client.listTopicRules(
          this.ops["ListTopicRules"].apply(partialParams)
        );
    }

    invokeListV2LoggingLevels(partialParams: ToOptional<{
      [K in keyof ListV2LoggingLevelsRequest]: (ListV2LoggingLevelsRequest)[K]
    }>): Request<ListV2LoggingLevelsResponse, AWSError> {
        this.boot();
        return this.client.listV2LoggingLevels(
          this.ops["ListV2LoggingLevels"].apply(partialParams)
        );
    }

    invokeListViolationEvents(partialParams: ToOptional<{
      [K in keyof ListViolationEventsRequest]: (ListViolationEventsRequest)[K]
    }>): Request<ListViolationEventsResponse, AWSError> {
        this.boot();
        return this.client.listViolationEvents(
          this.ops["ListViolationEvents"].apply(partialParams)
        );
    }

    invokePutVerificationStateOnViolation(partialParams: ToOptional<{
      [K in keyof PutVerificationStateOnViolationRequest]: (PutVerificationStateOnViolationRequest)[K]
    }>): Request<PutVerificationStateOnViolationResponse, AWSError> {
        this.boot();
        return this.client.putVerificationStateOnViolation(
          this.ops["PutVerificationStateOnViolation"].apply(partialParams)
        );
    }

    invokeRegisterCACertificate(partialParams: ToOptional<{
      [K in keyof RegisterCACertificateRequest]: (RegisterCACertificateRequest)[K]
    }>): Request<RegisterCACertificateResponse, AWSError> {
        this.boot();
        return this.client.registerCACertificate(
          this.ops["RegisterCACertificate"].apply(partialParams)
        );
    }

    invokeRegisterCertificate(partialParams: ToOptional<{
      [K in keyof RegisterCertificateRequest]: (RegisterCertificateRequest)[K]
    }>): Request<RegisterCertificateResponse, AWSError> {
        this.boot();
        return this.client.registerCertificate(
          this.ops["RegisterCertificate"].apply(partialParams)
        );
    }

    invokeRegisterCertificateWithoutCA(partialParams: ToOptional<{
      [K in keyof RegisterCertificateWithoutCARequest]: (RegisterCertificateWithoutCARequest)[K]
    }>): Request<RegisterCertificateWithoutCAResponse, AWSError> {
        this.boot();
        return this.client.registerCertificateWithoutCA(
          this.ops["RegisterCertificateWithoutCA"].apply(partialParams)
        );
    }

    invokeRegisterThing(partialParams: ToOptional<{
      [K in keyof RegisterThingRequest]: (RegisterThingRequest)[K]
    }>): Request<RegisterThingResponse, AWSError> {
        this.boot();
        return this.client.registerThing(
          this.ops["RegisterThing"].apply(partialParams)
        );
    }

    invokeRemoveThingFromBillingGroup(partialParams: ToOptional<{
      [K in keyof RemoveThingFromBillingGroupRequest]: (RemoveThingFromBillingGroupRequest)[K]
    }>): Request<RemoveThingFromBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.removeThingFromBillingGroup(
          this.ops["RemoveThingFromBillingGroup"].apply(partialParams)
        );
    }

    invokeRemoveThingFromThingGroup(partialParams: ToOptional<{
      [K in keyof RemoveThingFromThingGroupRequest]: (RemoveThingFromThingGroupRequest)[K]
    }>): Request<RemoveThingFromThingGroupResponse, AWSError> {
        this.boot();
        return this.client.removeThingFromThingGroup(
          this.ops["RemoveThingFromThingGroup"].apply(partialParams)
        );
    }

    invokeSearchIndex(partialParams: ToOptional<{
      [K in keyof SearchIndexRequest]: (SearchIndexRequest)[K]
    }>): Request<SearchIndexResponse, AWSError> {
        this.boot();
        return this.client.searchIndex(
          this.ops["SearchIndex"].apply(partialParams)
        );
    }

    invokeSetDefaultAuthorizer(partialParams: ToOptional<{
      [K in keyof SetDefaultAuthorizerRequest]: (SetDefaultAuthorizerRequest)[K]
    }>): Request<SetDefaultAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.setDefaultAuthorizer(
          this.ops["SetDefaultAuthorizer"].apply(partialParams)
        );
    }

    invokeStartAuditMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof StartAuditMitigationActionsTaskRequest]: (StartAuditMitigationActionsTaskRequest)[K]
    }>): Request<StartAuditMitigationActionsTaskResponse, AWSError> {
        this.boot();
        return this.client.startAuditMitigationActionsTask(
          this.ops["StartAuditMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeStartDetectMitigationActionsTask(partialParams: ToOptional<{
      [K in keyof StartDetectMitigationActionsTaskRequest]: (StartDetectMitigationActionsTaskRequest)[K]
    }>): Request<StartDetectMitigationActionsTaskResponse, AWSError> {
        this.boot();
        return this.client.startDetectMitigationActionsTask(
          this.ops["StartDetectMitigationActionsTask"].apply(partialParams)
        );
    }

    invokeStartOnDemandAuditTask(partialParams: ToOptional<{
      [K in keyof StartOnDemandAuditTaskRequest]: (StartOnDemandAuditTaskRequest)[K]
    }>): Request<StartOnDemandAuditTaskResponse, AWSError> {
        this.boot();
        return this.client.startOnDemandAuditTask(
          this.ops["StartOnDemandAuditTask"].apply(partialParams)
        );
    }

    invokeStartThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof StartThingRegistrationTaskRequest]: (StartThingRegistrationTaskRequest)[K]
    }>): Request<StartThingRegistrationTaskResponse, AWSError> {
        this.boot();
        return this.client.startThingRegistrationTask(
          this.ops["StartThingRegistrationTask"].apply(partialParams)
        );
    }

    invokeStopThingRegistrationTask(partialParams: ToOptional<{
      [K in keyof StopThingRegistrationTaskRequest]: (StopThingRegistrationTaskRequest)[K]
    }>): Request<StopThingRegistrationTaskResponse, AWSError> {
        this.boot();
        return this.client.stopThingRegistrationTask(
          this.ops["StopThingRegistrationTask"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestAuthorization(partialParams: ToOptional<{
      [K in keyof TestAuthorizationRequest]: (TestAuthorizationRequest)[K]
    }>): Request<TestAuthorizationResponse, AWSError> {
        this.boot();
        return this.client.testAuthorization(
          this.ops["TestAuthorization"].apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest)[K]
    }>): Request<TestInvokeAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.testInvokeAuthorizer(
          this.ops["TestInvokeAuthorizer"].apply(partialParams)
        );
    }

    invokeTransferCertificate(partialParams: ToOptional<{
      [K in keyof TransferCertificateRequest]: (TransferCertificateRequest)[K]
    }>): Request<TransferCertificateResponse, AWSError> {
        this.boot();
        return this.client.transferCertificate(
          this.ops["TransferCertificate"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccountAuditConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateAccountAuditConfigurationRequest]: (UpdateAccountAuditConfigurationRequest)[K]
    }>): Request<UpdateAccountAuditConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateAccountAuditConfiguration(
          this.ops["UpdateAccountAuditConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateAuditSuppression(partialParams: ToOptional<{
      [K in keyof UpdateAuditSuppressionRequest]: (UpdateAuditSuppressionRequest)[K]
    }>): Request<UpdateAuditSuppressionResponse, AWSError> {
        this.boot();
        return this.client.updateAuditSuppression(
          this.ops["UpdateAuditSuppression"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest)[K]
    }>): Request<UpdateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateBillingGroup(partialParams: ToOptional<{
      [K in keyof UpdateBillingGroupRequest]: (UpdateBillingGroupRequest)[K]
    }>): Request<UpdateBillingGroupResponse, AWSError> {
        this.boot();
        return this.client.updateBillingGroup(
          this.ops["UpdateBillingGroup"].apply(partialParams)
        );
    }

    invokeUpdateCustomMetric(partialParams: ToOptional<{
      [K in keyof UpdateCustomMetricRequest]: (UpdateCustomMetricRequest)[K]
    }>): Request<UpdateCustomMetricResponse, AWSError> {
        this.boot();
        return this.client.updateCustomMetric(
          this.ops["UpdateCustomMetric"].apply(partialParams)
        );
    }

    invokeUpdateDimension(partialParams: ToOptional<{
      [K in keyof UpdateDimensionRequest]: (UpdateDimensionRequest)[K]
    }>): Request<UpdateDimensionResponse, AWSError> {
        this.boot();
        return this.client.updateDimension(
          this.ops["UpdateDimension"].apply(partialParams)
        );
    }

    invokeUpdateDomainConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDomainConfigurationRequest]: (UpdateDomainConfigurationRequest)[K]
    }>): Request<UpdateDomainConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateDomainConfiguration(
          this.ops["UpdateDomainConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateDynamicThingGroup(partialParams: ToOptional<{
      [K in keyof UpdateDynamicThingGroupRequest]: (UpdateDynamicThingGroupRequest)[K]
    }>): Request<UpdateDynamicThingGroupResponse, AWSError> {
        this.boot();
        return this.client.updateDynamicThingGroup(
          this.ops["UpdateDynamicThingGroup"].apply(partialParams)
        );
    }

    invokeUpdateEventConfigurations(partialParams: ToOptional<{
      [K in keyof UpdateEventConfigurationsRequest]: (UpdateEventConfigurationsRequest)[K]
    }>): Request<UpdateEventConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.updateEventConfigurations(
          this.ops["UpdateEventConfigurations"].apply(partialParams)
        );
    }

    invokeUpdateIndexingConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateIndexingConfigurationRequest]: (UpdateIndexingConfigurationRequest)[K]
    }>): Request<UpdateIndexingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateIndexingConfiguration(
          this.ops["UpdateIndexingConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateMitigationAction(partialParams: ToOptional<{
      [K in keyof UpdateMitigationActionRequest]: (UpdateMitigationActionRequest)[K]
    }>): Request<UpdateMitigationActionResponse, AWSError> {
        this.boot();
        return this.client.updateMitigationAction(
          this.ops["UpdateMitigationAction"].apply(partialParams)
        );
    }

    invokeUpdateProvisioningTemplate(partialParams: ToOptional<{
      [K in keyof UpdateProvisioningTemplateRequest]: (UpdateProvisioningTemplateRequest)[K]
    }>): Request<UpdateProvisioningTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateProvisioningTemplate(
          this.ops["UpdateProvisioningTemplate"].apply(partialParams)
        );
    }

    invokeUpdateRoleAlias(partialParams: ToOptional<{
      [K in keyof UpdateRoleAliasRequest]: (UpdateRoleAliasRequest)[K]
    }>): Request<UpdateRoleAliasResponse, AWSError> {
        this.boot();
        return this.client.updateRoleAlias(
          this.ops["UpdateRoleAlias"].apply(partialParams)
        );
    }

    invokeUpdateScheduledAudit(partialParams: ToOptional<{
      [K in keyof UpdateScheduledAuditRequest]: (UpdateScheduledAuditRequest)[K]
    }>): Request<UpdateScheduledAuditResponse, AWSError> {
        this.boot();
        return this.client.updateScheduledAudit(
          this.ops["UpdateScheduledAudit"].apply(partialParams)
        );
    }

    invokeUpdateSecurityProfile(partialParams: ToOptional<{
      [K in keyof UpdateSecurityProfileRequest]: (UpdateSecurityProfileRequest)[K]
    }>): Request<UpdateSecurityProfileResponse, AWSError> {
        this.boot();
        return this.client.updateSecurityProfile(
          this.ops["UpdateSecurityProfile"].apply(partialParams)
        );
    }

    invokeUpdateStream(partialParams: ToOptional<{
      [K in keyof UpdateStreamRequest]: (UpdateStreamRequest)[K]
    }>): Request<UpdateStreamResponse, AWSError> {
        this.boot();
        return this.client.updateStream(
          this.ops["UpdateStream"].apply(partialParams)
        );
    }

    invokeUpdateThing(partialParams: ToOptional<{
      [K in keyof UpdateThingRequest]: (UpdateThingRequest)[K]
    }>): Request<UpdateThingResponse, AWSError> {
        this.boot();
        return this.client.updateThing(
          this.ops["UpdateThing"].apply(partialParams)
        );
    }

    invokeUpdateThingGroup(partialParams: ToOptional<{
      [K in keyof UpdateThingGroupRequest]: (UpdateThingGroupRequest)[K]
    }>): Request<UpdateThingGroupResponse, AWSError> {
        this.boot();
        return this.client.updateThingGroup(
          this.ops["UpdateThingGroup"].apply(partialParams)
        );
    }

    invokeUpdateThingGroupsForThing(partialParams: ToOptional<{
      [K in keyof UpdateThingGroupsForThingRequest]: (UpdateThingGroupsForThingRequest)[K]
    }>): Request<UpdateThingGroupsForThingResponse, AWSError> {
        this.boot();
        return this.client.updateThingGroupsForThing(
          this.ops["UpdateThingGroupsForThing"].apply(partialParams)
        );
    }

    invokeUpdateTopicRuleDestination(partialParams: ToOptional<{
      [K in keyof UpdateTopicRuleDestinationRequest]: (UpdateTopicRuleDestinationRequest)[K]
    }>): Request<UpdateTopicRuleDestinationResponse, AWSError> {
        this.boot();
        return this.client.updateTopicRuleDestination(
          this.ops["UpdateTopicRuleDestination"].apply(partialParams)
        );
    }

    invokeValidateSecurityProfileBehaviors(partialParams: ToOptional<{
      [K in keyof ValidateSecurityProfileBehaviorsRequest]: (ValidateSecurityProfileBehaviorsRequest)[K]
    }>): Request<ValidateSecurityProfileBehaviorsResponse, AWSError> {
        this.boot();
        return this.client.validateSecurityProfileBehaviors(
          this.ops["ValidateSecurityProfileBehaviors"].apply(partialParams)
        );
    }
}