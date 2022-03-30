
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AcceptReservedNodeExchangeInputMessage,
    PartnerIntegrationInputMessage,
    AssociateDataShareConsumerMessage,
    AuthorizeClusterSecurityGroupIngressMessage,
    AuthorizeDataShareMessage,
    AuthorizeEndpointAccessMessage,
    AuthorizeSnapshotAccessMessage,
    BatchDeleteClusterSnapshotsRequest,
    BatchModifyClusterSnapshotsMessage,
    CancelResizeMessage,
    CopyClusterSnapshotMessage,
    CreateAuthenticationProfileMessage,
    CreateClusterMessage,
    CreateClusterParameterGroupMessage,
    CreateClusterSecurityGroupMessage,
    CreateClusterSnapshotMessage,
    CreateClusterSubnetGroupMessage,
    CreateEndpointAccessMessage,
    CreateEventSubscriptionMessage,
    CreateHsmClientCertificateMessage,
    CreateHsmConfigurationMessage,
    CreateScheduledActionMessage,
    CreateSnapshotCopyGrantMessage,
    CreateTagsMessage,
    CreateUsageLimitMessage,
    DeauthorizeDataShareMessage,
    DeleteAuthenticationProfileMessage,
    DeleteClusterMessage,
    DeleteClusterParameterGroupMessage,
    DeleteClusterSecurityGroupMessage,
    DeleteClusterSnapshotMessage,
    DeleteClusterSubnetGroupMessage,
    DeleteEndpointAccessMessage,
    DeleteEventSubscriptionMessage,
    DeleteHsmClientCertificateMessage,
    DeleteHsmConfigurationMessage,
    DeleteScheduledActionMessage,
    DeleteSnapshotCopyGrantMessage,
    DeleteSnapshotScheduleMessage,
    DeleteTagsMessage,
    DeleteUsageLimitMessage,
    DescribeClusterParametersMessage,
    DescribeDefaultClusterParametersMessage,
    DescribeLoggingStatusMessage,
    DescribeNodeConfigurationOptionsMessage,
    DescribePartnersInputMessage,
    DescribeResizeMessage,
    DisableLoggingMessage,
    DisableSnapshotCopyMessage,
    DisassociateDataShareConsumerMessage,
    EnableLoggingMessage,
    EnableSnapshotCopyMessage,
    GetClusterCredentialsMessage,
    GetReservedNodeExchangeConfigurationOptionsInputMessage,
    GetReservedNodeExchangeOfferingsInputMessage,
    ModifyAquaInputMessage,
    ModifyAuthenticationProfileMessage,
    ModifyClusterMessage,
    ModifyClusterDbRevisionMessage,
    ModifyClusterIamRolesMessage,
    ModifyClusterMaintenanceMessage,
    ModifyClusterParameterGroupMessage,
    ModifyClusterSnapshotMessage,
    ModifyClusterSnapshotScheduleMessage,
    ModifyClusterSubnetGroupMessage,
    ModifyEndpointAccessMessage,
    ModifyEventSubscriptionMessage,
    ModifyScheduledActionMessage,
    ModifySnapshotCopyRetentionPeriodMessage,
    ModifySnapshotScheduleMessage,
    ModifyUsageLimitMessage,
    PauseClusterMessage,
    PurchaseReservedNodeOfferingMessage,
    RebootClusterMessage,
    RejectDataShareMessage,
    ResetClusterParameterGroupMessage,
    ResizeClusterMessage,
    RestoreFromClusterSnapshotMessage,
    RestoreTableFromClusterSnapshotMessage,
    ResumeClusterMessage,
    RevokeClusterSecurityGroupIngressMessage,
    RevokeSnapshotAccessMessage,
    RotateEncryptionKeyMessage,
    UpdatePartnerStatusInputMessage,
    AcceptReservedNodeExchangeOutputMessage,
    PartnerIntegrationOutputMessage,
    DataShare,
    AuthorizeClusterSecurityGroupIngressResult,
    EndpointAuthorization,
    AuthorizeSnapshotAccessResult,
    BatchDeleteClusterSnapshotsResult,
    BatchModifyClusterSnapshotsOutputMessage,
    ResizeProgressMessage,
    CopyClusterSnapshotResult,
    CreateAuthenticationProfileResult,
    CreateClusterResult,
    CreateClusterParameterGroupResult,
    CreateClusterSecurityGroupResult,
    CreateClusterSnapshotResult,
    CreateClusterSubnetGroupResult,
    EndpointAccess,
    CreateEventSubscriptionResult,
    CreateHsmClientCertificateResult,
    CreateHsmConfigurationResult,
    ScheduledAction,
    CreateSnapshotCopyGrantResult,
    UsageLimit,
    DeleteAuthenticationProfileResult,
    DeleteClusterResult,
    DeleteClusterSnapshotResult,
    ClusterParameterGroupDetails,
    DescribeDefaultClusterParametersResult,
    LoggingStatus,
    NodeConfigurationOptionsMessage,
    DescribePartnersOutputMessage,
    DisableSnapshotCopyResult,
    EnableSnapshotCopyResult,
    ClusterCredentials,
    GetReservedNodeExchangeConfigurationOptionsOutputMessage,
    GetReservedNodeExchangeOfferingsOutputMessage,
    ModifyAquaOutputMessage,
    ModifyAuthenticationProfileResult,
    ModifyClusterResult,
    ModifyClusterDbRevisionResult,
    ModifyClusterIamRolesResult,
    ModifyClusterMaintenanceResult,
    ClusterParameterGroupNameMessage,
    ModifyClusterSnapshotResult,
    ModifyClusterSubnetGroupResult,
    ModifyEventSubscriptionResult,
    ModifySnapshotCopyRetentionPeriodResult,
    SnapshotSchedule,
    PauseClusterResult,
    PurchaseReservedNodeOfferingResult,
    RebootClusterResult,
    ResizeClusterResult,
    RestoreFromClusterSnapshotResult,
    RestoreTableFromClusterSnapshotResult,
    ResumeClusterResult,
    RevokeClusterSecurityGroupIngressResult,
    RevokeSnapshotAccessResult,
    RotateEncryptionKeyResult
} from "aws-sdk/clients/redshift";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.redshift.SnapshotCopyGrant {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.redshift.SnapshotCopyGrant>) {
        super(...args)
        this.client = new awssdk.Redshift()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/redshift-2012-12-01.normal.json"), this.client)
    }

    invokeAcceptReservedNodeExchange(partialParams: ToOptional<{
      [K in keyof AcceptReservedNodeExchangeInputMessage & keyof AcceptReservedNodeExchangeInputMessage & keyof AcceptReservedNodeExchangeInputMessage]: (AcceptReservedNodeExchangeInputMessage & AcceptReservedNodeExchangeInputMessage & AcceptReservedNodeExchangeInputMessage)[K]
    }>): AcceptReservedNodeExchangeOutputMessage {
        return this.client.acceptReservedNodeExchange(
            this.ops["AcceptReservedNodeExchange"].apply(partialParams)
        );
    }

    invokeAddPartner(partialParams: ToOptional<{
      [K in keyof PartnerIntegrationInputMessage & keyof PartnerIntegrationInputMessage & keyof PartnerIntegrationInputMessage]: (PartnerIntegrationInputMessage & PartnerIntegrationInputMessage & PartnerIntegrationInputMessage)[K]
    }>): PartnerIntegrationOutputMessage {
        return this.client.addPartner(
            this.ops["AddPartner"].apply(partialParams)
        );
    }

    invokeAssociateDataShareConsumer(partialParams: ToOptional<{
      [K in keyof AssociateDataShareConsumerMessage & keyof AssociateDataShareConsumerMessage & keyof AssociateDataShareConsumerMessage]: (AssociateDataShareConsumerMessage & AssociateDataShareConsumerMessage & AssociateDataShareConsumerMessage)[K]
    }>): DataShare {
        return this.client.associateDataShareConsumer(
            this.ops["AssociateDataShareConsumer"].apply(partialParams)
        );
    }

    invokeAuthorizeClusterSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClusterSecurityGroupIngressMessage & keyof AuthorizeClusterSecurityGroupIngressMessage & keyof AuthorizeClusterSecurityGroupIngressMessage]: (AuthorizeClusterSecurityGroupIngressMessage & AuthorizeClusterSecurityGroupIngressMessage & AuthorizeClusterSecurityGroupIngressMessage)[K]
    }>): AuthorizeClusterSecurityGroupIngressResult {
        return this.client.authorizeClusterSecurityGroupIngress(
            this.ops["AuthorizeClusterSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeAuthorizeDataShare(partialParams: ToOptional<{
      [K in keyof AuthorizeDataShareMessage & keyof AuthorizeDataShareMessage & keyof AuthorizeDataShareMessage]: (AuthorizeDataShareMessage & AuthorizeDataShareMessage & AuthorizeDataShareMessage)[K]
    }>): DataShare {
        return this.client.authorizeDataShare(
            this.ops["AuthorizeDataShare"].apply(partialParams)
        );
    }

    invokeAuthorizeEndpointAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeEndpointAccessMessage & keyof AuthorizeEndpointAccessMessage & keyof AuthorizeEndpointAccessMessage]: (AuthorizeEndpointAccessMessage & AuthorizeEndpointAccessMessage & AuthorizeEndpointAccessMessage)[K]
    }>): EndpointAuthorization {
        return this.client.authorizeEndpointAccess(
            this.ops["AuthorizeEndpointAccess"].apply(partialParams)
        );
    }

    invokeAuthorizeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeSnapshotAccessMessage & keyof AuthorizeSnapshotAccessMessage & keyof AuthorizeSnapshotAccessMessage]: (AuthorizeSnapshotAccessMessage & AuthorizeSnapshotAccessMessage & AuthorizeSnapshotAccessMessage)[K]
    }>): AuthorizeSnapshotAccessResult {
        return this.client.authorizeSnapshotAccess(
            this.ops["AuthorizeSnapshotAccess"].apply(partialParams)
        );
    }

    invokeBatchDeleteClusterSnapshots(partialParams: ToOptional<{
      [K in keyof BatchDeleteClusterSnapshotsRequest & keyof BatchDeleteClusterSnapshotsRequest & keyof BatchDeleteClusterSnapshotsRequest]: (BatchDeleteClusterSnapshotsRequest & BatchDeleteClusterSnapshotsRequest & BatchDeleteClusterSnapshotsRequest)[K]
    }>): BatchDeleteClusterSnapshotsResult {
        return this.client.batchDeleteClusterSnapshots(
            this.ops["BatchDeleteClusterSnapshots"].apply(partialParams)
        );
    }

    invokeBatchModifyClusterSnapshots(partialParams: ToOptional<{
      [K in keyof BatchModifyClusterSnapshotsMessage & keyof BatchModifyClusterSnapshotsMessage & keyof BatchModifyClusterSnapshotsMessage]: (BatchModifyClusterSnapshotsMessage & BatchModifyClusterSnapshotsMessage & BatchModifyClusterSnapshotsMessage)[K]
    }>): BatchModifyClusterSnapshotsOutputMessage {
        return this.client.batchModifyClusterSnapshots(
            this.ops["BatchModifyClusterSnapshots"].apply(partialParams)
        );
    }

    invokeCancelResize(partialParams: ToOptional<{
      [K in keyof CancelResizeMessage & keyof CancelResizeMessage & keyof CancelResizeMessage]: (CancelResizeMessage & CancelResizeMessage & CancelResizeMessage)[K]
    }>): ResizeProgressMessage {
        return this.client.cancelResize(
            this.ops["CancelResize"].apply(partialParams)
        );
    }

    invokeCopyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyClusterSnapshotMessage & keyof CopyClusterSnapshotMessage & keyof CopyClusterSnapshotMessage]: (CopyClusterSnapshotMessage & CopyClusterSnapshotMessage & CopyClusterSnapshotMessage)[K]
    }>): CopyClusterSnapshotResult {
        return this.client.copyClusterSnapshot(
            this.ops["CopyClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof CreateAuthenticationProfileMessage & keyof CreateAuthenticationProfileMessage & keyof CreateAuthenticationProfileMessage]: (CreateAuthenticationProfileMessage & CreateAuthenticationProfileMessage & CreateAuthenticationProfileMessage)[K]
    }>): CreateAuthenticationProfileResult {
        return this.client.createAuthenticationProfile(
            this.ops["CreateAuthenticationProfile"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterMessage & keyof CreateClusterMessage & keyof CreateClusterMessage]: (CreateClusterMessage & CreateClusterMessage & CreateClusterMessage)[K]
    }>): CreateClusterResult {
        return this.client.createCluster(
            this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterParameterGroupMessage & keyof CreateClusterParameterGroupMessage & keyof CreateClusterParameterGroupMessage]: (CreateClusterParameterGroupMessage & CreateClusterParameterGroupMessage & CreateClusterParameterGroupMessage)[K]
    }>): CreateClusterParameterGroupResult {
        return this.client.createClusterParameterGroup(
            this.ops["CreateClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateClusterSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSecurityGroupMessage & keyof CreateClusterSecurityGroupMessage & keyof CreateClusterSecurityGroupMessage]: (CreateClusterSecurityGroupMessage & CreateClusterSecurityGroupMessage & CreateClusterSecurityGroupMessage)[K]
    }>): CreateClusterSecurityGroupResult {
        return this.client.createClusterSecurityGroup(
            this.ops["CreateClusterSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateClusterSnapshotMessage & keyof CreateClusterSnapshotMessage & keyof CreateClusterSnapshotMessage]: (CreateClusterSnapshotMessage & CreateClusterSnapshotMessage & CreateClusterSnapshotMessage)[K]
    }>): CreateClusterSnapshotResult {
        return this.client.createClusterSnapshot(
            this.ops["CreateClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSubnetGroupMessage & keyof CreateClusterSubnetGroupMessage & keyof CreateClusterSubnetGroupMessage]: (CreateClusterSubnetGroupMessage & CreateClusterSubnetGroupMessage & CreateClusterSubnetGroupMessage)[K]
    }>): CreateClusterSubnetGroupResult {
        return this.client.createClusterSubnetGroup(
            this.ops["CreateClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateEndpointAccess(partialParams: ToOptional<{
      [K in keyof CreateEndpointAccessMessage & keyof CreateEndpointAccessMessage & keyof CreateEndpointAccessMessage]: (CreateEndpointAccessMessage & CreateEndpointAccessMessage & CreateEndpointAccessMessage)[K]
    }>): EndpointAccess {
        return this.client.createEndpointAccess(
            this.ops["CreateEndpointAccess"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): CreateEventSubscriptionResult {
        return this.client.createEventSubscription(
            this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeCreateHsmClientCertificate(partialParams: ToOptional<{
      [K in keyof CreateHsmClientCertificateMessage & keyof CreateHsmClientCertificateMessage & keyof CreateHsmClientCertificateMessage]: (CreateHsmClientCertificateMessage & CreateHsmClientCertificateMessage & CreateHsmClientCertificateMessage)[K]
    }>): CreateHsmClientCertificateResult {
        return this.client.createHsmClientCertificate(
            this.ops["CreateHsmClientCertificate"].apply(partialParams)
        );
    }

    invokeCreateHsmConfiguration(partialParams: ToOptional<{
      [K in keyof CreateHsmConfigurationMessage & keyof CreateHsmConfigurationMessage & keyof CreateHsmConfigurationMessage]: (CreateHsmConfigurationMessage & CreateHsmConfigurationMessage & CreateHsmConfigurationMessage)[K]
    }>): CreateHsmConfigurationResult {
        return this.client.createHsmConfiguration(
            this.ops["CreateHsmConfiguration"].apply(partialParams)
        );
    }

    invokeCreateScheduledAction(partialParams: ToOptional<{
      [K in keyof CreateScheduledActionMessage & keyof CreateScheduledActionMessage & keyof CreateScheduledActionMessage]: (CreateScheduledActionMessage & CreateScheduledActionMessage & CreateScheduledActionMessage)[K]
    }>): ScheduledAction {
        return this.client.createScheduledAction(
            this.ops["CreateScheduledAction"].apply(partialParams)
        );
    }

    invokeCreateSnapshotCopyGrant(partialParams: ToOptional<{
      [K in keyof CreateSnapshotCopyGrantMessage & keyof CreateSnapshotCopyGrantMessage & keyof CreateSnapshotCopyGrantMessage]: (CreateSnapshotCopyGrantMessage & CreateSnapshotCopyGrantMessage & CreateSnapshotCopyGrantMessage)[K]
    }>): CreateSnapshotCopyGrantResult {
        return this.client.createSnapshotCopyGrant(
            this.ops["CreateSnapshotCopyGrant"].apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsMessage & keyof CreateTagsMessage & keyof CreateTagsMessage]: (CreateTagsMessage & CreateTagsMessage & CreateTagsMessage)[K]
    }>): void {
        return this.client.createTags(
            this.ops["CreateTags"].apply(partialParams)
        );
    }

    invokeCreateUsageLimit(partialParams: ToOptional<{
      [K in keyof CreateUsageLimitMessage & keyof CreateUsageLimitMessage & keyof CreateUsageLimitMessage]: (CreateUsageLimitMessage & CreateUsageLimitMessage & CreateUsageLimitMessage)[K]
    }>): UsageLimit {
        return this.client.createUsageLimit(
            this.ops["CreateUsageLimit"].apply(partialParams)
        );
    }

    invokeDeauthorizeDataShare(partialParams: ToOptional<{
      [K in keyof DeauthorizeDataShareMessage & keyof DeauthorizeDataShareMessage & keyof DeauthorizeDataShareMessage]: (DeauthorizeDataShareMessage & DeauthorizeDataShareMessage & DeauthorizeDataShareMessage)[K]
    }>): DataShare {
        return this.client.deauthorizeDataShare(
            this.ops["DeauthorizeDataShare"].apply(partialParams)
        );
    }

    invokeDeleteAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof DeleteAuthenticationProfileMessage & keyof DeleteAuthenticationProfileMessage & keyof DeleteAuthenticationProfileMessage]: (DeleteAuthenticationProfileMessage & DeleteAuthenticationProfileMessage & DeleteAuthenticationProfileMessage)[K]
    }>): DeleteAuthenticationProfileResult {
        return this.client.deleteAuthenticationProfile(
            this.ops["DeleteAuthenticationProfile"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterMessage & keyof DeleteClusterMessage & keyof DeleteClusterMessage]: (DeleteClusterMessage & DeleteClusterMessage & DeleteClusterMessage)[K]
    }>): DeleteClusterResult {
        return this.client.deleteCluster(
            this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteClusterParameterGroupMessage & keyof DeleteClusterParameterGroupMessage & keyof DeleteClusterParameterGroupMessage]: (DeleteClusterParameterGroupMessage & DeleteClusterParameterGroupMessage & DeleteClusterParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteClusterParameterGroup(
            this.ops["DeleteClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteClusterSecurityGroup(partialParams: ToOptional<{
      [K in keyof DeleteClusterSecurityGroupMessage & keyof DeleteClusterSecurityGroupMessage & keyof DeleteClusterSecurityGroupMessage]: (DeleteClusterSecurityGroupMessage & DeleteClusterSecurityGroupMessage & DeleteClusterSecurityGroupMessage)[K]
    }>): void {
        return this.client.deleteClusterSecurityGroup(
            this.ops["DeleteClusterSecurityGroup"].apply(partialParams)
        );
    }

    invokeDeleteClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteClusterSnapshotMessage & keyof DeleteClusterSnapshotMessage & keyof DeleteClusterSnapshotMessage]: (DeleteClusterSnapshotMessage & DeleteClusterSnapshotMessage & DeleteClusterSnapshotMessage)[K]
    }>): DeleteClusterSnapshotResult {
        return this.client.deleteClusterSnapshot(
            this.ops["DeleteClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteClusterSubnetGroupMessage & keyof DeleteClusterSubnetGroupMessage & keyof DeleteClusterSubnetGroupMessage]: (DeleteClusterSubnetGroupMessage & DeleteClusterSubnetGroupMessage & DeleteClusterSubnetGroupMessage)[K]
    }>): void {
        return this.client.deleteClusterSubnetGroup(
            this.ops["DeleteClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteEndpointAccess(partialParams: ToOptional<{
      [K in keyof DeleteEndpointAccessMessage & keyof DeleteEndpointAccessMessage & keyof DeleteEndpointAccessMessage]: (DeleteEndpointAccessMessage & DeleteEndpointAccessMessage & DeleteEndpointAccessMessage)[K]
    }>): EndpointAccess {
        return this.client.deleteEndpointAccess(
            this.ops["DeleteEndpointAccess"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): void {
        return this.client.deleteEventSubscription(
            this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteHsmClientCertificate(partialParams: ToOptional<{
      [K in keyof DeleteHsmClientCertificateMessage & keyof DeleteHsmClientCertificateMessage & keyof DeleteHsmClientCertificateMessage]: (DeleteHsmClientCertificateMessage & DeleteHsmClientCertificateMessage & DeleteHsmClientCertificateMessage)[K]
    }>): void {
        return this.client.deleteHsmClientCertificate(
            this.ops["DeleteHsmClientCertificate"].apply(partialParams)
        );
    }

    invokeDeleteHsmConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteHsmConfigurationMessage & keyof DeleteHsmConfigurationMessage & keyof DeleteHsmConfigurationMessage]: (DeleteHsmConfigurationMessage & DeleteHsmConfigurationMessage & DeleteHsmConfigurationMessage)[K]
    }>): void {
        return this.client.deleteHsmConfiguration(
            this.ops["DeleteHsmConfiguration"].apply(partialParams)
        );
    }

    invokeDeletePartner(partialParams: ToOptional<{
      [K in keyof PartnerIntegrationInputMessage & keyof PartnerIntegrationInputMessage & keyof PartnerIntegrationInputMessage]: (PartnerIntegrationInputMessage & PartnerIntegrationInputMessage & PartnerIntegrationInputMessage)[K]
    }>): PartnerIntegrationOutputMessage {
        return this.client.deletePartner(
            this.ops["DeletePartner"].apply(partialParams)
        );
    }

    invokeDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof DeleteScheduledActionMessage & keyof DeleteScheduledActionMessage & keyof DeleteScheduledActionMessage]: (DeleteScheduledActionMessage & DeleteScheduledActionMessage & DeleteScheduledActionMessage)[K]
    }>): void {
        return this.client.deleteScheduledAction(
            this.ops["DeleteScheduledAction"].apply(partialParams)
        );
    }

    invokeDeleteSnapshotCopyGrant(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotCopyGrantMessage & keyof DeleteSnapshotCopyGrantMessage & keyof DeleteSnapshotCopyGrantMessage]: (DeleteSnapshotCopyGrantMessage & DeleteSnapshotCopyGrantMessage & DeleteSnapshotCopyGrantMessage)[K]
    }>): void {
        return this.client.deleteSnapshotCopyGrant(
            this.ops["DeleteSnapshotCopyGrant"].apply(partialParams)
        );
    }

    invokeDeleteSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotScheduleMessage & keyof DeleteSnapshotScheduleMessage & keyof DeleteSnapshotScheduleMessage]: (DeleteSnapshotScheduleMessage & DeleteSnapshotScheduleMessage & DeleteSnapshotScheduleMessage)[K]
    }>): void {
        return this.client.deleteSnapshotSchedule(
            this.ops["DeleteSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsMessage & keyof DeleteTagsMessage & keyof DeleteTagsMessage]: (DeleteTagsMessage & DeleteTagsMessage & DeleteTagsMessage)[K]
    }>): void {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteUsageLimit(partialParams: ToOptional<{
      [K in keyof DeleteUsageLimitMessage & keyof DeleteUsageLimitMessage & keyof DeleteUsageLimitMessage]: (DeleteUsageLimitMessage & DeleteUsageLimitMessage & DeleteUsageLimitMessage)[K]
    }>): void {
        return this.client.deleteUsageLimit(
            this.ops["DeleteUsageLimit"].apply(partialParams)
        );
    }

    invokeDescribeClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeClusterParametersMessage & keyof DescribeClusterParametersMessage & keyof DescribeClusterParametersMessage]: (DescribeClusterParametersMessage & DescribeClusterParametersMessage & DescribeClusterParametersMessage)[K]
    }>): ClusterParameterGroupDetails {
        return this.client.describeClusterParameters(
            this.ops["DescribeClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDefaultClusterParametersMessage & keyof DescribeDefaultClusterParametersMessage & keyof DescribeDefaultClusterParametersMessage]: (DescribeDefaultClusterParametersMessage & DescribeDefaultClusterParametersMessage & DescribeDefaultClusterParametersMessage)[K]
    }>): DescribeDefaultClusterParametersResult {
        return this.client.describeDefaultClusterParameters(
            this.ops["DescribeDefaultClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeLoggingStatus(partialParams: ToOptional<{
      [K in keyof DescribeLoggingStatusMessage & keyof DescribeLoggingStatusMessage & keyof DescribeLoggingStatusMessage]: (DescribeLoggingStatusMessage & DescribeLoggingStatusMessage & DescribeLoggingStatusMessage)[K]
    }>): LoggingStatus {
        return this.client.describeLoggingStatus(
            this.ops["DescribeLoggingStatus"].apply(partialParams)
        );
    }

    invokeDescribeNodeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof DescribeNodeConfigurationOptionsMessage & keyof DescribeNodeConfigurationOptionsMessage & keyof DescribeNodeConfigurationOptionsMessage]: (DescribeNodeConfigurationOptionsMessage & DescribeNodeConfigurationOptionsMessage & DescribeNodeConfigurationOptionsMessage)[K]
    }>): NodeConfigurationOptionsMessage {
        return this.client.describeNodeConfigurationOptions(
            this.ops["DescribeNodeConfigurationOptions"].apply(partialParams)
        );
    }

    invokeDescribePartners(partialParams: ToOptional<{
      [K in keyof DescribePartnersInputMessage & keyof DescribePartnersInputMessage & keyof DescribePartnersInputMessage]: (DescribePartnersInputMessage & DescribePartnersInputMessage & DescribePartnersInputMessage)[K]
    }>): DescribePartnersOutputMessage {
        return this.client.describePartners(
            this.ops["DescribePartners"].apply(partialParams)
        );
    }

    invokeDescribeResize(partialParams: ToOptional<{
      [K in keyof DescribeResizeMessage & keyof DescribeResizeMessage & keyof DescribeResizeMessage]: (DescribeResizeMessage & DescribeResizeMessage & DescribeResizeMessage)[K]
    }>): ResizeProgressMessage {
        return this.client.describeResize(
            this.ops["DescribeResize"].apply(partialParams)
        );
    }

    invokeDisableLogging(partialParams: ToOptional<{
      [K in keyof DisableLoggingMessage & keyof DisableLoggingMessage & keyof DisableLoggingMessage]: (DisableLoggingMessage & DisableLoggingMessage & DisableLoggingMessage)[K]
    }>): LoggingStatus {
        return this.client.disableLogging(
            this.ops["DisableLogging"].apply(partialParams)
        );
    }

    invokeDisableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof DisableSnapshotCopyMessage & keyof DisableSnapshotCopyMessage & keyof DisableSnapshotCopyMessage]: (DisableSnapshotCopyMessage & DisableSnapshotCopyMessage & DisableSnapshotCopyMessage)[K]
    }>): DisableSnapshotCopyResult {
        return this.client.disableSnapshotCopy(
            this.ops["DisableSnapshotCopy"].apply(partialParams)
        );
    }

    invokeDisassociateDataShareConsumer(partialParams: ToOptional<{
      [K in keyof DisassociateDataShareConsumerMessage & keyof DisassociateDataShareConsumerMessage & keyof DisassociateDataShareConsumerMessage]: (DisassociateDataShareConsumerMessage & DisassociateDataShareConsumerMessage & DisassociateDataShareConsumerMessage)[K]
    }>): DataShare {
        return this.client.disassociateDataShareConsumer(
            this.ops["DisassociateDataShareConsumer"].apply(partialParams)
        );
    }

    invokeEnableLogging(partialParams: ToOptional<{
      [K in keyof EnableLoggingMessage & keyof EnableLoggingMessage & keyof EnableLoggingMessage]: (EnableLoggingMessage & EnableLoggingMessage & EnableLoggingMessage)[K]
    }>): LoggingStatus {
        return this.client.enableLogging(
            this.ops["EnableLogging"].apply(partialParams)
        );
    }

    invokeEnableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof EnableSnapshotCopyMessage & keyof EnableSnapshotCopyMessage & keyof EnableSnapshotCopyMessage]: (EnableSnapshotCopyMessage & EnableSnapshotCopyMessage & EnableSnapshotCopyMessage)[K]
    }>): EnableSnapshotCopyResult {
        return this.client.enableSnapshotCopy(
            this.ops["EnableSnapshotCopy"].apply(partialParams)
        );
    }

    invokeGetClusterCredentials(partialParams: ToOptional<{
      [K in keyof GetClusterCredentialsMessage & keyof GetClusterCredentialsMessage & keyof GetClusterCredentialsMessage]: (GetClusterCredentialsMessage & GetClusterCredentialsMessage & GetClusterCredentialsMessage)[K]
    }>): ClusterCredentials {
        return this.client.getClusterCredentials(
            this.ops["GetClusterCredentials"].apply(partialParams)
        );
    }

    invokeGetReservedNodeExchangeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof GetReservedNodeExchangeConfigurationOptionsInputMessage & keyof GetReservedNodeExchangeConfigurationOptionsInputMessage & keyof GetReservedNodeExchangeConfigurationOptionsInputMessage]: (GetReservedNodeExchangeConfigurationOptionsInputMessage & GetReservedNodeExchangeConfigurationOptionsInputMessage & GetReservedNodeExchangeConfigurationOptionsInputMessage)[K]
    }>): GetReservedNodeExchangeConfigurationOptionsOutputMessage {
        return this.client.getReservedNodeExchangeConfigurationOptions(
            this.ops["GetReservedNodeExchangeConfigurationOptions"].apply(partialParams)
        );
    }

    invokeGetReservedNodeExchangeOfferings(partialParams: ToOptional<{
      [K in keyof GetReservedNodeExchangeOfferingsInputMessage & keyof GetReservedNodeExchangeOfferingsInputMessage & keyof GetReservedNodeExchangeOfferingsInputMessage]: (GetReservedNodeExchangeOfferingsInputMessage & GetReservedNodeExchangeOfferingsInputMessage & GetReservedNodeExchangeOfferingsInputMessage)[K]
    }>): GetReservedNodeExchangeOfferingsOutputMessage {
        return this.client.getReservedNodeExchangeOfferings(
            this.ops["GetReservedNodeExchangeOfferings"].apply(partialParams)
        );
    }

    invokeModifyAquaConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyAquaInputMessage & keyof ModifyAquaInputMessage & keyof ModifyAquaInputMessage]: (ModifyAquaInputMessage & ModifyAquaInputMessage & ModifyAquaInputMessage)[K]
    }>): ModifyAquaOutputMessage {
        return this.client.modifyAquaConfiguration(
            this.ops["ModifyAquaConfiguration"].apply(partialParams)
        );
    }

    invokeModifyAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof ModifyAuthenticationProfileMessage & keyof ModifyAuthenticationProfileMessage & keyof ModifyAuthenticationProfileMessage]: (ModifyAuthenticationProfileMessage & ModifyAuthenticationProfileMessage & ModifyAuthenticationProfileMessage)[K]
    }>): ModifyAuthenticationProfileResult {
        return this.client.modifyAuthenticationProfile(
            this.ops["ModifyAuthenticationProfile"].apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof ModifyClusterMessage & keyof ModifyClusterMessage & keyof ModifyClusterMessage]: (ModifyClusterMessage & ModifyClusterMessage & ModifyClusterMessage)[K]
    }>): ModifyClusterResult {
        return this.client.modifyCluster(
            this.ops["ModifyCluster"].apply(partialParams)
        );
    }

    invokeModifyClusterDbRevision(partialParams: ToOptional<{
      [K in keyof ModifyClusterDbRevisionMessage & keyof ModifyClusterDbRevisionMessage & keyof ModifyClusterDbRevisionMessage]: (ModifyClusterDbRevisionMessage & ModifyClusterDbRevisionMessage & ModifyClusterDbRevisionMessage)[K]
    }>): ModifyClusterDbRevisionResult {
        return this.client.modifyClusterDbRevision(
            this.ops["ModifyClusterDbRevision"].apply(partialParams)
        );
    }

    invokeModifyClusterIamRoles(partialParams: ToOptional<{
      [K in keyof ModifyClusterIamRolesMessage & keyof ModifyClusterIamRolesMessage & keyof ModifyClusterIamRolesMessage]: (ModifyClusterIamRolesMessage & ModifyClusterIamRolesMessage & ModifyClusterIamRolesMessage)[K]
    }>): ModifyClusterIamRolesResult {
        return this.client.modifyClusterIamRoles(
            this.ops["ModifyClusterIamRoles"].apply(partialParams)
        );
    }

    invokeModifyClusterMaintenance(partialParams: ToOptional<{
      [K in keyof ModifyClusterMaintenanceMessage & keyof ModifyClusterMaintenanceMessage & keyof ModifyClusterMaintenanceMessage]: (ModifyClusterMaintenanceMessage & ModifyClusterMaintenanceMessage & ModifyClusterMaintenanceMessage)[K]
    }>): ModifyClusterMaintenanceResult {
        return this.client.modifyClusterMaintenance(
            this.ops["ModifyClusterMaintenance"].apply(partialParams)
        );
    }

    invokeModifyClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterParameterGroupMessage & keyof ModifyClusterParameterGroupMessage & keyof ModifyClusterParameterGroupMessage]: (ModifyClusterParameterGroupMessage & ModifyClusterParameterGroupMessage & ModifyClusterParameterGroupMessage)[K]
    }>): ClusterParameterGroupNameMessage {
        return this.client.modifyClusterParameterGroup(
            this.ops["ModifyClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyClusterSnapshotMessage & keyof ModifyClusterSnapshotMessage & keyof ModifyClusterSnapshotMessage]: (ModifyClusterSnapshotMessage & ModifyClusterSnapshotMessage & ModifyClusterSnapshotMessage)[K]
    }>): ModifyClusterSnapshotResult {
        return this.client.modifyClusterSnapshot(
            this.ops["ModifyClusterSnapshot"].apply(partialParams)
        );
    }

    invokeModifyClusterSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof ModifyClusterSnapshotScheduleMessage & keyof ModifyClusterSnapshotScheduleMessage & keyof ModifyClusterSnapshotScheduleMessage]: (ModifyClusterSnapshotScheduleMessage & ModifyClusterSnapshotScheduleMessage & ModifyClusterSnapshotScheduleMessage)[K]
    }>): void {
        return this.client.modifyClusterSnapshotSchedule(
            this.ops["ModifyClusterSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeModifyClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterSubnetGroupMessage & keyof ModifyClusterSubnetGroupMessage & keyof ModifyClusterSubnetGroupMessage]: (ModifyClusterSubnetGroupMessage & ModifyClusterSubnetGroupMessage & ModifyClusterSubnetGroupMessage)[K]
    }>): ModifyClusterSubnetGroupResult {
        return this.client.modifyClusterSubnetGroup(
            this.ops["ModifyClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyEndpointAccess(partialParams: ToOptional<{
      [K in keyof ModifyEndpointAccessMessage & keyof ModifyEndpointAccessMessage & keyof ModifyEndpointAccessMessage]: (ModifyEndpointAccessMessage & ModifyEndpointAccessMessage & ModifyEndpointAccessMessage)[K]
    }>): EndpointAccess {
        return this.client.modifyEndpointAccess(
            this.ops["ModifyEndpointAccess"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): ModifyEventSubscriptionResult {
        return this.client.modifyEventSubscription(
            this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokeModifyScheduledAction(partialParams: ToOptional<{
      [K in keyof ModifyScheduledActionMessage & keyof ModifyScheduledActionMessage & keyof ModifyScheduledActionMessage]: (ModifyScheduledActionMessage & ModifyScheduledActionMessage & ModifyScheduledActionMessage)[K]
    }>): ScheduledAction {
        return this.client.modifyScheduledAction(
            this.ops["ModifyScheduledAction"].apply(partialParams)
        );
    }

    invokeModifySnapshotCopyRetentionPeriod(partialParams: ToOptional<{
      [K in keyof ModifySnapshotCopyRetentionPeriodMessage & keyof ModifySnapshotCopyRetentionPeriodMessage & keyof ModifySnapshotCopyRetentionPeriodMessage]: (ModifySnapshotCopyRetentionPeriodMessage & ModifySnapshotCopyRetentionPeriodMessage & ModifySnapshotCopyRetentionPeriodMessage)[K]
    }>): ModifySnapshotCopyRetentionPeriodResult {
        return this.client.modifySnapshotCopyRetentionPeriod(
            this.ops["ModifySnapshotCopyRetentionPeriod"].apply(partialParams)
        );
    }

    invokeModifySnapshotSchedule(partialParams: ToOptional<{
      [K in keyof ModifySnapshotScheduleMessage & keyof ModifySnapshotScheduleMessage & keyof ModifySnapshotScheduleMessage]: (ModifySnapshotScheduleMessage & ModifySnapshotScheduleMessage & ModifySnapshotScheduleMessage)[K]
    }>): SnapshotSchedule {
        return this.client.modifySnapshotSchedule(
            this.ops["ModifySnapshotSchedule"].apply(partialParams)
        );
    }

    invokeModifyUsageLimit(partialParams: ToOptional<{
      [K in keyof ModifyUsageLimitMessage & keyof ModifyUsageLimitMessage & keyof ModifyUsageLimitMessage]: (ModifyUsageLimitMessage & ModifyUsageLimitMessage & ModifyUsageLimitMessage)[K]
    }>): UsageLimit {
        return this.client.modifyUsageLimit(
            this.ops["ModifyUsageLimit"].apply(partialParams)
        );
    }

    invokePauseCluster(partialParams: ToOptional<{
      [K in keyof PauseClusterMessage & keyof PauseClusterMessage & keyof PauseClusterMessage]: (PauseClusterMessage & PauseClusterMessage & PauseClusterMessage)[K]
    }>): PauseClusterResult {
        return this.client.pauseCluster(
            this.ops["PauseCluster"].apply(partialParams)
        );
    }

    invokePurchaseReservedNodeOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedNodeOfferingMessage & keyof PurchaseReservedNodeOfferingMessage & keyof PurchaseReservedNodeOfferingMessage]: (PurchaseReservedNodeOfferingMessage & PurchaseReservedNodeOfferingMessage & PurchaseReservedNodeOfferingMessage)[K]
    }>): PurchaseReservedNodeOfferingResult {
        return this.client.purchaseReservedNodeOffering(
            this.ops["PurchaseReservedNodeOffering"].apply(partialParams)
        );
    }

    invokeRebootCluster(partialParams: ToOptional<{
      [K in keyof RebootClusterMessage & keyof RebootClusterMessage & keyof RebootClusterMessage]: (RebootClusterMessage & RebootClusterMessage & RebootClusterMessage)[K]
    }>): RebootClusterResult {
        return this.client.rebootCluster(
            this.ops["RebootCluster"].apply(partialParams)
        );
    }

    invokeRejectDataShare(partialParams: ToOptional<{
      [K in keyof RejectDataShareMessage & keyof RejectDataShareMessage & keyof RejectDataShareMessage]: (RejectDataShareMessage & RejectDataShareMessage & RejectDataShareMessage)[K]
    }>): DataShare {
        return this.client.rejectDataShare(
            this.ops["RejectDataShare"].apply(partialParams)
        );
    }

    invokeResetClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetClusterParameterGroupMessage & keyof ResetClusterParameterGroupMessage & keyof ResetClusterParameterGroupMessage]: (ResetClusterParameterGroupMessage & ResetClusterParameterGroupMessage & ResetClusterParameterGroupMessage)[K]
    }>): ClusterParameterGroupNameMessage {
        return this.client.resetClusterParameterGroup(
            this.ops["ResetClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeResizeCluster(partialParams: ToOptional<{
      [K in keyof ResizeClusterMessage & keyof ResizeClusterMessage & keyof ResizeClusterMessage]: (ResizeClusterMessage & ResizeClusterMessage & ResizeClusterMessage)[K]
    }>): ResizeClusterResult {
        return this.client.resizeCluster(
            this.ops["ResizeCluster"].apply(partialParams)
        );
    }

    invokeRestoreFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreFromClusterSnapshotMessage & keyof RestoreFromClusterSnapshotMessage & keyof RestoreFromClusterSnapshotMessage]: (RestoreFromClusterSnapshotMessage & RestoreFromClusterSnapshotMessage & RestoreFromClusterSnapshotMessage)[K]
    }>): RestoreFromClusterSnapshotResult {
        return this.client.restoreFromClusterSnapshot(
            this.ops["RestoreFromClusterSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreTableFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreTableFromClusterSnapshotMessage & keyof RestoreTableFromClusterSnapshotMessage & keyof RestoreTableFromClusterSnapshotMessage]: (RestoreTableFromClusterSnapshotMessage & RestoreTableFromClusterSnapshotMessage & RestoreTableFromClusterSnapshotMessage)[K]
    }>): RestoreTableFromClusterSnapshotResult {
        return this.client.restoreTableFromClusterSnapshot(
            this.ops["RestoreTableFromClusterSnapshot"].apply(partialParams)
        );
    }

    invokeResumeCluster(partialParams: ToOptional<{
      [K in keyof ResumeClusterMessage & keyof ResumeClusterMessage & keyof ResumeClusterMessage]: (ResumeClusterMessage & ResumeClusterMessage & ResumeClusterMessage)[K]
    }>): ResumeClusterResult {
        return this.client.resumeCluster(
            this.ops["ResumeCluster"].apply(partialParams)
        );
    }

    invokeRevokeClusterSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeClusterSecurityGroupIngressMessage & keyof RevokeClusterSecurityGroupIngressMessage & keyof RevokeClusterSecurityGroupIngressMessage]: (RevokeClusterSecurityGroupIngressMessage & RevokeClusterSecurityGroupIngressMessage & RevokeClusterSecurityGroupIngressMessage)[K]
    }>): RevokeClusterSecurityGroupIngressResult {
        return this.client.revokeClusterSecurityGroupIngress(
            this.ops["RevokeClusterSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeRevokeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof RevokeSnapshotAccessMessage & keyof RevokeSnapshotAccessMessage & keyof RevokeSnapshotAccessMessage]: (RevokeSnapshotAccessMessage & RevokeSnapshotAccessMessage & RevokeSnapshotAccessMessage)[K]
    }>): RevokeSnapshotAccessResult {
        return this.client.revokeSnapshotAccess(
            this.ops["RevokeSnapshotAccess"].apply(partialParams)
        );
    }

    invokeRotateEncryptionKey(partialParams: ToOptional<{
      [K in keyof RotateEncryptionKeyMessage & keyof RotateEncryptionKeyMessage & keyof RotateEncryptionKeyMessage]: (RotateEncryptionKeyMessage & RotateEncryptionKeyMessage & RotateEncryptionKeyMessage)[K]
    }>): RotateEncryptionKeyResult {
        return this.client.rotateEncryptionKey(
            this.ops["RotateEncryptionKey"].apply(partialParams)
        );
    }

    invokeUpdatePartnerStatus(partialParams: ToOptional<{
      [K in keyof UpdatePartnerStatusInputMessage & keyof UpdatePartnerStatusInputMessage & keyof UpdatePartnerStatusInputMessage]: (UpdatePartnerStatusInputMessage & UpdatePartnerStatusInputMessage & UpdatePartnerStatusInputMessage)[K]
    }>): PartnerIntegrationOutputMessage {
        return this.client.updatePartnerStatus(
            this.ops["UpdatePartnerStatus"].apply(partialParams)
        );
    }
}