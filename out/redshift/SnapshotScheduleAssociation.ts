
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/redshift-2012-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.redshift.SnapshotScheduleAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.redshift.SnapshotScheduleAssociation>) {
        super(...args)
        this.client = new awssdk.Redshift()
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

    invokeAcceptReservedNodeExchange(partialParams: ToOptional<{
      [K in keyof AcceptReservedNodeExchangeInputMessage & keyof AcceptReservedNodeExchangeInputMessage]: (AcceptReservedNodeExchangeInputMessage & AcceptReservedNodeExchangeInputMessage)[K]
    }>): Request<AcceptReservedNodeExchangeOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptReservedNodeExchange(
          this.ops["AcceptReservedNodeExchange"].applicator.apply(partialParams)
        );
    }

    invokeAddPartner(partialParams: ToOptional<{
      [K in keyof Omit<PartnerIntegrationInputMessage, "ClusterIdentifier"> & keyof PartnerIntegrationInputMessage]: (Omit<PartnerIntegrationInputMessage, "ClusterIdentifier"> & PartnerIntegrationInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPartner(
          this.ops["AddPartner"].applicator.apply(partialParams)
        );
    }

    invokeAssociateDataShareConsumer(partialParams: ToOptional<{
      [K in keyof AssociateDataShareConsumerMessage & keyof AssociateDataShareConsumerMessage]: (AssociateDataShareConsumerMessage & AssociateDataShareConsumerMessage)[K]
    }>): Request<DataShare, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDataShareConsumer(
          this.ops["AssociateDataShareConsumer"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeClusterSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClusterSecurityGroupIngressMessage & keyof AuthorizeClusterSecurityGroupIngressMessage]: (AuthorizeClusterSecurityGroupIngressMessage & AuthorizeClusterSecurityGroupIngressMessage)[K]
    }>): Request<AuthorizeClusterSecurityGroupIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeClusterSecurityGroupIngress(
          this.ops["AuthorizeClusterSecurityGroupIngress"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeDataShare(partialParams: ToOptional<{
      [K in keyof AuthorizeDataShareMessage & keyof AuthorizeDataShareMessage]: (AuthorizeDataShareMessage & AuthorizeDataShareMessage)[K]
    }>): Request<DataShare, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeDataShare(
          this.ops["AuthorizeDataShare"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeEndpointAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeEndpointAccessMessage & keyof AuthorizeEndpointAccessMessage]: (AuthorizeEndpointAccessMessage & AuthorizeEndpointAccessMessage)[K]
    }>): Request<EndpointAuthorization, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeEndpointAccess(
          this.ops["AuthorizeEndpointAccess"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeSnapshotAccessMessage & keyof AuthorizeSnapshotAccessMessage]: (AuthorizeSnapshotAccessMessage & AuthorizeSnapshotAccessMessage)[K]
    }>): Request<AuthorizeSnapshotAccessResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeSnapshotAccess(
          this.ops["AuthorizeSnapshotAccess"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeleteClusterSnapshots(partialParams: ToOptional<{
      [K in keyof BatchDeleteClusterSnapshotsRequest & keyof BatchDeleteClusterSnapshotsRequest]: (BatchDeleteClusterSnapshotsRequest & BatchDeleteClusterSnapshotsRequest)[K]
    }>): Request<BatchDeleteClusterSnapshotsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteClusterSnapshots(
          this.ops["BatchDeleteClusterSnapshots"].applicator.apply(partialParams)
        );
    }

    invokeBatchModifyClusterSnapshots(partialParams: ToOptional<{
      [K in keyof BatchModifyClusterSnapshotsMessage & keyof BatchModifyClusterSnapshotsMessage]: (BatchModifyClusterSnapshotsMessage & BatchModifyClusterSnapshotsMessage)[K]
    }>): Request<BatchModifyClusterSnapshotsOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchModifyClusterSnapshots(
          this.ops["BatchModifyClusterSnapshots"].applicator.apply(partialParams)
        );
    }

    invokeCancelResize(partialParams: ToOptional<{
      [K in keyof CancelResizeMessage & keyof CancelResizeMessage]: (CancelResizeMessage & CancelResizeMessage)[K]
    }>): Request<ResizeProgressMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelResize(
          this.ops["CancelResize"].applicator.apply(partialParams)
        );
    }

    invokeCopyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyClusterSnapshotMessage & keyof CopyClusterSnapshotMessage]: (CopyClusterSnapshotMessage & CopyClusterSnapshotMessage)[K]
    }>): Request<CopyClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyClusterSnapshot(
          this.ops["CopyClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof CreateAuthenticationProfileMessage & keyof CreateAuthenticationProfileMessage]: (CreateAuthenticationProfileMessage & CreateAuthenticationProfileMessage)[K]
    }>): Request<CreateAuthenticationProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthenticationProfile(
          this.ops["CreateAuthenticationProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterMessage & keyof CreateClusterMessage]: (CreateClusterMessage & CreateClusterMessage)[K]
    }>): Request<CreateClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterParameterGroupMessage & keyof CreateClusterParameterGroupMessage]: (CreateClusterParameterGroupMessage & CreateClusterParameterGroupMessage)[K]
    }>): Request<CreateClusterParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterParameterGroup(
          this.ops["CreateClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateClusterSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSecurityGroupMessage & keyof CreateClusterSecurityGroupMessage]: (CreateClusterSecurityGroupMessage & CreateClusterSecurityGroupMessage)[K]
    }>): Request<CreateClusterSecurityGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterSecurityGroup(
          this.ops["CreateClusterSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateClusterSnapshotMessage & keyof CreateClusterSnapshotMessage]: (CreateClusterSnapshotMessage & CreateClusterSnapshotMessage)[K]
    }>): Request<CreateClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterSnapshot(
          this.ops["CreateClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSubnetGroupMessage & keyof CreateClusterSubnetGroupMessage]: (CreateClusterSubnetGroupMessage & CreateClusterSubnetGroupMessage)[K]
    }>): Request<CreateClusterSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterSubnetGroup(
          this.ops["CreateClusterSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateEndpointAccess(partialParams: ToOptional<{
      [K in keyof CreateEndpointAccessMessage & keyof CreateEndpointAccessMessage]: (CreateEndpointAccessMessage & CreateEndpointAccessMessage)[K]
    }>): Request<EndpointAccess, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpointAccess(
          this.ops["CreateEndpointAccess"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeCreateHsmClientCertificate(partialParams: ToOptional<{
      [K in keyof CreateHsmClientCertificateMessage & keyof CreateHsmClientCertificateMessage]: (CreateHsmClientCertificateMessage & CreateHsmClientCertificateMessage)[K]
    }>): Request<CreateHsmClientCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHsmClientCertificate(
          this.ops["CreateHsmClientCertificate"].applicator.apply(partialParams)
        );
    }

    invokeCreateHsmConfiguration(partialParams: ToOptional<{
      [K in keyof CreateHsmConfigurationMessage & keyof CreateHsmConfigurationMessage]: (CreateHsmConfigurationMessage & CreateHsmConfigurationMessage)[K]
    }>): Request<CreateHsmConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHsmConfiguration(
          this.ops["CreateHsmConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateScheduledAction(partialParams: ToOptional<{
      [K in keyof CreateScheduledActionMessage & keyof CreateScheduledActionMessage]: (CreateScheduledActionMessage & CreateScheduledActionMessage)[K]
    }>): Request<ScheduledAction, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createScheduledAction(
          this.ops["CreateScheduledAction"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshotCopyGrant(partialParams: ToOptional<{
      [K in keyof CreateSnapshotCopyGrantMessage & keyof CreateSnapshotCopyGrantMessage]: (CreateSnapshotCopyGrantMessage & CreateSnapshotCopyGrantMessage)[K]
    }>): Request<CreateSnapshotCopyGrantResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshotCopyGrant(
          this.ops["CreateSnapshotCopyGrant"].applicator.apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsMessage & keyof CreateTagsMessage]: (CreateTagsMessage & CreateTagsMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(
          this.ops["CreateTags"].applicator.apply(partialParams)
        );
    }

    invokeCreateUsageLimit(partialParams: ToOptional<{
      [K in keyof CreateUsageLimitMessage & keyof CreateUsageLimitMessage]: (CreateUsageLimitMessage & CreateUsageLimitMessage)[K]
    }>): Request<UsageLimit, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUsageLimit(
          this.ops["CreateUsageLimit"].applicator.apply(partialParams)
        );
    }

    invokeDeauthorizeDataShare(partialParams: ToOptional<{
      [K in keyof DeauthorizeDataShareMessage & keyof DeauthorizeDataShareMessage]: (DeauthorizeDataShareMessage & DeauthorizeDataShareMessage)[K]
    }>): Request<DataShare, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deauthorizeDataShare(
          this.ops["DeauthorizeDataShare"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof DeleteAuthenticationProfileMessage & keyof DeleteAuthenticationProfileMessage]: (DeleteAuthenticationProfileMessage & DeleteAuthenticationProfileMessage)[K]
    }>): Request<DeleteAuthenticationProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthenticationProfile(
          this.ops["DeleteAuthenticationProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterMessage & keyof DeleteClusterMessage]: (DeleteClusterMessage & DeleteClusterMessage)[K]
    }>): Request<DeleteClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteClusterParameterGroupMessage & keyof DeleteClusterParameterGroupMessage]: (DeleteClusterParameterGroupMessage & DeleteClusterParameterGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterParameterGroup(
          this.ops["DeleteClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClusterSecurityGroup(partialParams: ToOptional<{
      [K in keyof DeleteClusterSecurityGroupMessage & keyof DeleteClusterSecurityGroupMessage]: (DeleteClusterSecurityGroupMessage & DeleteClusterSecurityGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterSecurityGroup(
          this.ops["DeleteClusterSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteClusterSnapshotMessage & keyof DeleteClusterSnapshotMessage]: (DeleteClusterSnapshotMessage & DeleteClusterSnapshotMessage)[K]
    }>): Request<DeleteClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterSnapshot(
          this.ops["DeleteClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteClusterSubnetGroupMessage & keyof DeleteClusterSubnetGroupMessage]: (DeleteClusterSubnetGroupMessage & DeleteClusterSubnetGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterSubnetGroup(
          this.ops["DeleteClusterSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpointAccess(partialParams: ToOptional<{
      [K in keyof DeleteEndpointAccessMessage & keyof DeleteEndpointAccessMessage]: (DeleteEndpointAccessMessage & DeleteEndpointAccessMessage)[K]
    }>): Request<EndpointAccess, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpointAccess(
          this.ops["DeleteEndpointAccess"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHsmClientCertificate(partialParams: ToOptional<{
      [K in keyof DeleteHsmClientCertificateMessage & keyof DeleteHsmClientCertificateMessage]: (DeleteHsmClientCertificateMessage & DeleteHsmClientCertificateMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHsmClientCertificate(
          this.ops["DeleteHsmClientCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHsmConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteHsmConfigurationMessage & keyof DeleteHsmConfigurationMessage]: (DeleteHsmConfigurationMessage & DeleteHsmConfigurationMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHsmConfiguration(
          this.ops["DeleteHsmConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeletePartner(partialParams: ToOptional<{
      [K in keyof Omit<PartnerIntegrationInputMessage, "ClusterIdentifier"> & keyof PartnerIntegrationInputMessage]: (Omit<PartnerIntegrationInputMessage, "ClusterIdentifier"> & PartnerIntegrationInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePartner(
          this.ops["DeletePartner"].applicator.apply(partialParams)
        );
    }

    invokeDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof DeleteScheduledActionMessage & keyof DeleteScheduledActionMessage]: (DeleteScheduledActionMessage & DeleteScheduledActionMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScheduledAction(
          this.ops["DeleteScheduledAction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshotCopyGrant(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotCopyGrantMessage & keyof DeleteSnapshotCopyGrantMessage]: (DeleteSnapshotCopyGrantMessage & DeleteSnapshotCopyGrantMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshotCopyGrant(
          this.ops["DeleteSnapshotCopyGrant"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotScheduleMessage & keyof DeleteSnapshotScheduleMessage]: (DeleteSnapshotScheduleMessage & DeleteSnapshotScheduleMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshotSchedule(
          this.ops["DeleteSnapshotSchedule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsMessage & keyof DeleteTagsMessage]: (DeleteTagsMessage & DeleteTagsMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUsageLimit(partialParams: ToOptional<{
      [K in keyof DeleteUsageLimitMessage & keyof DeleteUsageLimitMessage]: (DeleteUsageLimitMessage & DeleteUsageLimitMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUsageLimit(
          this.ops["DeleteUsageLimit"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeClusterParametersMessage & keyof DescribeClusterParametersMessage]: (DescribeClusterParametersMessage & DescribeClusterParametersMessage)[K]
    }>): Request<ClusterParameterGroupDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClusterParameters(
          this.ops["DescribeClusterParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDefaultClusterParametersMessage & keyof DescribeDefaultClusterParametersMessage]: (DescribeDefaultClusterParametersMessage & DescribeDefaultClusterParametersMessage)[K]
    }>): Request<DescribeDefaultClusterParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDefaultClusterParameters(
          this.ops["DescribeDefaultClusterParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLoggingStatus(partialParams: ToOptional<{
      [K in keyof DescribeLoggingStatusMessage & keyof DescribeLoggingStatusMessage]: (DescribeLoggingStatusMessage & DescribeLoggingStatusMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoggingStatus(
          this.ops["DescribeLoggingStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNodeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof DescribeNodeConfigurationOptionsMessage & keyof DescribeNodeConfigurationOptionsMessage]: (DescribeNodeConfigurationOptionsMessage & DescribeNodeConfigurationOptionsMessage)[K]
    }>): Request<NodeConfigurationOptionsMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNodeConfigurationOptions(
          this.ops["DescribeNodeConfigurationOptions"].applicator.apply(partialParams)
        );
    }

    invokeDescribePartners(partialParams: ToOptional<{
      [K in keyof DescribePartnersInputMessage & keyof DescribePartnersInputMessage]: (DescribePartnersInputMessage & DescribePartnersInputMessage)[K]
    }>): Request<DescribePartnersOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePartners(
          this.ops["DescribePartners"].applicator.apply(partialParams)
        );
    }

    invokeDescribeResize(partialParams: ToOptional<{
      [K in keyof DescribeResizeMessage & keyof DescribeResizeMessage]: (DescribeResizeMessage & DescribeResizeMessage)[K]
    }>): Request<ResizeProgressMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeResize(
          this.ops["DescribeResize"].applicator.apply(partialParams)
        );
    }

    invokeDisableLogging(partialParams: ToOptional<{
      [K in keyof DisableLoggingMessage & keyof DisableLoggingMessage]: (DisableLoggingMessage & DisableLoggingMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableLogging(
          this.ops["DisableLogging"].applicator.apply(partialParams)
        );
    }

    invokeDisableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof DisableSnapshotCopyMessage & keyof DisableSnapshotCopyMessage]: (DisableSnapshotCopyMessage & DisableSnapshotCopyMessage)[K]
    }>): Request<DisableSnapshotCopyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableSnapshotCopy(
          this.ops["DisableSnapshotCopy"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateDataShareConsumer(partialParams: ToOptional<{
      [K in keyof DisassociateDataShareConsumerMessage & keyof DisassociateDataShareConsumerMessage]: (DisassociateDataShareConsumerMessage & DisassociateDataShareConsumerMessage)[K]
    }>): Request<DataShare, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateDataShareConsumer(
          this.ops["DisassociateDataShareConsumer"].applicator.apply(partialParams)
        );
    }

    invokeEnableLogging(partialParams: ToOptional<{
      [K in keyof EnableLoggingMessage & keyof EnableLoggingMessage]: (EnableLoggingMessage & EnableLoggingMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableLogging(
          this.ops["EnableLogging"].applicator.apply(partialParams)
        );
    }

    invokeEnableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof EnableSnapshotCopyMessage & keyof EnableSnapshotCopyMessage]: (EnableSnapshotCopyMessage & EnableSnapshotCopyMessage)[K]
    }>): Request<EnableSnapshotCopyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableSnapshotCopy(
          this.ops["EnableSnapshotCopy"].applicator.apply(partialParams)
        );
    }

    invokeGetClusterCredentials(partialParams: ToOptional<{
      [K in keyof GetClusterCredentialsMessage & keyof GetClusterCredentialsMessage]: (GetClusterCredentialsMessage & GetClusterCredentialsMessage)[K]
    }>): Request<ClusterCredentials, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getClusterCredentials(
          this.ops["GetClusterCredentials"].applicator.apply(partialParams)
        );
    }

    invokeGetReservedNodeExchangeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof GetReservedNodeExchangeConfigurationOptionsInputMessage & keyof GetReservedNodeExchangeConfigurationOptionsInputMessage]: (GetReservedNodeExchangeConfigurationOptionsInputMessage & GetReservedNodeExchangeConfigurationOptionsInputMessage)[K]
    }>): Request<GetReservedNodeExchangeConfigurationOptionsOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReservedNodeExchangeConfigurationOptions(
          this.ops["GetReservedNodeExchangeConfigurationOptions"].applicator.apply(partialParams)
        );
    }

    invokeGetReservedNodeExchangeOfferings(partialParams: ToOptional<{
      [K in keyof GetReservedNodeExchangeOfferingsInputMessage & keyof GetReservedNodeExchangeOfferingsInputMessage]: (GetReservedNodeExchangeOfferingsInputMessage & GetReservedNodeExchangeOfferingsInputMessage)[K]
    }>): Request<GetReservedNodeExchangeOfferingsOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReservedNodeExchangeOfferings(
          this.ops["GetReservedNodeExchangeOfferings"].applicator.apply(partialParams)
        );
    }

    invokeModifyAquaConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyAquaInputMessage & keyof ModifyAquaInputMessage]: (ModifyAquaInputMessage & ModifyAquaInputMessage)[K]
    }>): Request<ModifyAquaOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAquaConfiguration(
          this.ops["ModifyAquaConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeModifyAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof ModifyAuthenticationProfileMessage & keyof ModifyAuthenticationProfileMessage]: (ModifyAuthenticationProfileMessage & ModifyAuthenticationProfileMessage)[K]
    }>): Request<ModifyAuthenticationProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAuthenticationProfile(
          this.ops["ModifyAuthenticationProfile"].applicator.apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof ModifyClusterMessage & keyof ModifyClusterMessage]: (ModifyClusterMessage & ModifyClusterMessage)[K]
    }>): Request<ModifyClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCluster(
          this.ops["ModifyCluster"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterDbRevision(partialParams: ToOptional<{
      [K in keyof ModifyClusterDbRevisionMessage & keyof ModifyClusterDbRevisionMessage]: (ModifyClusterDbRevisionMessage & ModifyClusterDbRevisionMessage)[K]
    }>): Request<ModifyClusterDbRevisionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterDbRevision(
          this.ops["ModifyClusterDbRevision"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterIamRoles(partialParams: ToOptional<{
      [K in keyof ModifyClusterIamRolesMessage & keyof ModifyClusterIamRolesMessage]: (ModifyClusterIamRolesMessage & ModifyClusterIamRolesMessage)[K]
    }>): Request<ModifyClusterIamRolesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterIamRoles(
          this.ops["ModifyClusterIamRoles"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterMaintenance(partialParams: ToOptional<{
      [K in keyof ModifyClusterMaintenanceMessage & keyof ModifyClusterMaintenanceMessage]: (ModifyClusterMaintenanceMessage & ModifyClusterMaintenanceMessage)[K]
    }>): Request<ModifyClusterMaintenanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterMaintenance(
          this.ops["ModifyClusterMaintenance"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterParameterGroupMessage & keyof ModifyClusterParameterGroupMessage]: (ModifyClusterParameterGroupMessage & ModifyClusterParameterGroupMessage)[K]
    }>): Request<ClusterParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterParameterGroup(
          this.ops["ModifyClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyClusterSnapshotMessage & keyof ModifyClusterSnapshotMessage]: (ModifyClusterSnapshotMessage & ModifyClusterSnapshotMessage)[K]
    }>): Request<ModifyClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterSnapshot(
          this.ops["ModifyClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof ModifyClusterSnapshotScheduleMessage & keyof ModifyClusterSnapshotScheduleMessage]: (ModifyClusterSnapshotScheduleMessage & ModifyClusterSnapshotScheduleMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterSnapshotSchedule(
          this.ops["ModifyClusterSnapshotSchedule"].applicator.apply(partialParams)
        );
    }

    invokeModifyClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterSubnetGroupMessage & keyof ModifyClusterSubnetGroupMessage]: (ModifyClusterSubnetGroupMessage & ModifyClusterSubnetGroupMessage)[K]
    }>): Request<ModifyClusterSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterSubnetGroup(
          this.ops["ModifyClusterSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyEndpointAccess(partialParams: ToOptional<{
      [K in keyof ModifyEndpointAccessMessage & keyof ModifyEndpointAccessMessage]: (ModifyEndpointAccessMessage & ModifyEndpointAccessMessage)[K]
    }>): Request<EndpointAccess, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEndpointAccess(
          this.ops["ModifyEndpointAccess"].applicator.apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): Request<ModifyEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(
          this.ops["ModifyEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeModifyScheduledAction(partialParams: ToOptional<{
      [K in keyof ModifyScheduledActionMessage & keyof ModifyScheduledActionMessage]: (ModifyScheduledActionMessage & ModifyScheduledActionMessage)[K]
    }>): Request<ScheduledAction, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyScheduledAction(
          this.ops["ModifyScheduledAction"].applicator.apply(partialParams)
        );
    }

    invokeModifySnapshotCopyRetentionPeriod(partialParams: ToOptional<{
      [K in keyof ModifySnapshotCopyRetentionPeriodMessage & keyof ModifySnapshotCopyRetentionPeriodMessage]: (ModifySnapshotCopyRetentionPeriodMessage & ModifySnapshotCopyRetentionPeriodMessage)[K]
    }>): Request<ModifySnapshotCopyRetentionPeriodResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotCopyRetentionPeriod(
          this.ops["ModifySnapshotCopyRetentionPeriod"].applicator.apply(partialParams)
        );
    }

    invokeModifySnapshotSchedule(partialParams: ToOptional<{
      [K in keyof ModifySnapshotScheduleMessage & keyof ModifySnapshotScheduleMessage]: (ModifySnapshotScheduleMessage & ModifySnapshotScheduleMessage)[K]
    }>): Request<SnapshotSchedule, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotSchedule(
          this.ops["ModifySnapshotSchedule"].applicator.apply(partialParams)
        );
    }

    invokeModifyUsageLimit(partialParams: ToOptional<{
      [K in keyof ModifyUsageLimitMessage & keyof ModifyUsageLimitMessage]: (ModifyUsageLimitMessage & ModifyUsageLimitMessage)[K]
    }>): Request<UsageLimit, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyUsageLimit(
          this.ops["ModifyUsageLimit"].applicator.apply(partialParams)
        );
    }

    invokePauseCluster(partialParams: ToOptional<{
      [K in keyof PauseClusterMessage & keyof PauseClusterMessage]: (PauseClusterMessage & PauseClusterMessage)[K]
    }>): Request<PauseClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pauseCluster(
          this.ops["PauseCluster"].applicator.apply(partialParams)
        );
    }

    invokePurchaseReservedNodeOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedNodeOfferingMessage & keyof PurchaseReservedNodeOfferingMessage]: (PurchaseReservedNodeOfferingMessage & PurchaseReservedNodeOfferingMessage)[K]
    }>): Request<PurchaseReservedNodeOfferingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedNodeOffering(
          this.ops["PurchaseReservedNodeOffering"].applicator.apply(partialParams)
        );
    }

    invokeRebootCluster(partialParams: ToOptional<{
      [K in keyof RebootClusterMessage & keyof RebootClusterMessage]: (RebootClusterMessage & RebootClusterMessage)[K]
    }>): Request<RebootClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootCluster(
          this.ops["RebootCluster"].applicator.apply(partialParams)
        );
    }

    invokeRejectDataShare(partialParams: ToOptional<{
      [K in keyof RejectDataShareMessage & keyof RejectDataShareMessage]: (RejectDataShareMessage & RejectDataShareMessage)[K]
    }>): Request<DataShare, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectDataShare(
          this.ops["RejectDataShare"].applicator.apply(partialParams)
        );
    }

    invokeResetClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetClusterParameterGroupMessage & keyof ResetClusterParameterGroupMessage]: (ResetClusterParameterGroupMessage & ResetClusterParameterGroupMessage)[K]
    }>): Request<ClusterParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetClusterParameterGroup(
          this.ops["ResetClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeResizeCluster(partialParams: ToOptional<{
      [K in keyof ResizeClusterMessage & keyof ResizeClusterMessage]: (ResizeClusterMessage & ResizeClusterMessage)[K]
    }>): Request<ResizeClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resizeCluster(
          this.ops["ResizeCluster"].applicator.apply(partialParams)
        );
    }

    invokeRestoreFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreFromClusterSnapshotMessage & keyof RestoreFromClusterSnapshotMessage]: (RestoreFromClusterSnapshotMessage & RestoreFromClusterSnapshotMessage)[K]
    }>): Request<RestoreFromClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreFromClusterSnapshot(
          this.ops["RestoreFromClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeRestoreTableFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreTableFromClusterSnapshotMessage & keyof RestoreTableFromClusterSnapshotMessage]: (RestoreTableFromClusterSnapshotMessage & RestoreTableFromClusterSnapshotMessage)[K]
    }>): Request<RestoreTableFromClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreTableFromClusterSnapshot(
          this.ops["RestoreTableFromClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeResumeCluster(partialParams: ToOptional<{
      [K in keyof ResumeClusterMessage & keyof ResumeClusterMessage]: (ResumeClusterMessage & ResumeClusterMessage)[K]
    }>): Request<ResumeClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeCluster(
          this.ops["ResumeCluster"].applicator.apply(partialParams)
        );
    }

    invokeRevokeClusterSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeClusterSecurityGroupIngressMessage & keyof RevokeClusterSecurityGroupIngressMessage]: (RevokeClusterSecurityGroupIngressMessage & RevokeClusterSecurityGroupIngressMessage)[K]
    }>): Request<RevokeClusterSecurityGroupIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeClusterSecurityGroupIngress(
          this.ops["RevokeClusterSecurityGroupIngress"].applicator.apply(partialParams)
        );
    }

    invokeRevokeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof RevokeSnapshotAccessMessage & keyof RevokeSnapshotAccessMessage]: (RevokeSnapshotAccessMessage & RevokeSnapshotAccessMessage)[K]
    }>): Request<RevokeSnapshotAccessResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeSnapshotAccess(
          this.ops["RevokeSnapshotAccess"].applicator.apply(partialParams)
        );
    }

    invokeRotateEncryptionKey(partialParams: ToOptional<{
      [K in keyof RotateEncryptionKeyMessage & keyof RotateEncryptionKeyMessage]: (RotateEncryptionKeyMessage & RotateEncryptionKeyMessage)[K]
    }>): Request<RotateEncryptionKeyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rotateEncryptionKey(
          this.ops["RotateEncryptionKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePartnerStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdatePartnerStatusInputMessage, "ClusterIdentifier"> & keyof UpdatePartnerStatusInputMessage]: (Omit<UpdatePartnerStatusInputMessage, "ClusterIdentifier"> & UpdatePartnerStatusInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePartnerStatus(
          this.ops["UpdatePartnerStatus"].applicator.apply(partialParams)
        );
    }
}