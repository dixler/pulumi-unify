
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
    CreateSnapshotScheduleMessage,
    CreateUsageLimitMessage,
    DeauthorizeDataShareMessage,
    DeleteAuthenticationProfileMessage,
    DeleteClusterMessage,
    DeleteClusterSnapshotMessage,
    DeleteEndpointAccessMessage,
    DescribeAccountAttributesMessage,
    DescribeAuthenticationProfilesMessage,
    DescribeClusterDbRevisionsMessage,
    DescribeClusterParameterGroupsMessage,
    DescribeClusterParametersMessage,
    DescribeClusterSecurityGroupsMessage,
    DescribeClusterSnapshotsMessage,
    DescribeClusterSubnetGroupsMessage,
    DescribeClusterTracksMessage,
    DescribeClusterVersionsMessage,
    DescribeClustersMessage,
    DescribeDataSharesMessage,
    DescribeDataSharesForConsumerMessage,
    DescribeDataSharesForProducerMessage,
    DescribeDefaultClusterParametersMessage,
    DescribeEndpointAccessMessage,
    DescribeEndpointAuthorizationMessage,
    DescribeEventCategoriesMessage,
    DescribeEventSubscriptionsMessage,
    DescribeEventsMessage,
    DescribeHsmClientCertificatesMessage,
    DescribeHsmConfigurationsMessage,
    DescribeLoggingStatusMessage,
    DescribeNodeConfigurationOptionsMessage,
    DescribeOrderableClusterOptionsMessage,
    DescribePartnersInputMessage,
    DescribeReservedNodeExchangeStatusInputMessage,
    DescribeReservedNodeOfferingsMessage,
    DescribeReservedNodesMessage,
    DescribeResizeMessage,
    DescribeScheduledActionsMessage,
    DescribeSnapshotCopyGrantsMessage,
    DescribeSnapshotSchedulesMessage,
    DescribeTableRestoreStatusMessage,
    DescribeTagsMessage,
    DescribeUsageLimitsMessage,
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
    RevokeEndpointAccessMessage,
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
    SnapshotSchedule,
    UsageLimit,
    DeleteAuthenticationProfileResult,
    DeleteClusterResult,
    DeleteClusterSnapshotResult,
    AccountAttributeList,
    DescribeAuthenticationProfilesResult,
    ClusterDbRevisionsMessage,
    ClusterParameterGroupsMessage,
    ClusterParameterGroupDetails,
    ClusterSecurityGroupMessage,
    SnapshotMessage,
    ClusterSubnetGroupMessage,
    TrackListMessage,
    ClusterVersionsMessage,
    ClustersMessage,
    DescribeDataSharesResult,
    DescribeDataSharesForConsumerResult,
    DescribeDataSharesForProducerResult,
    DescribeDefaultClusterParametersResult,
    EndpointAccessList,
    EndpointAuthorizationList,
    EventCategoriesMessage,
    EventSubscriptionsMessage,
    EventsMessage,
    HsmClientCertificateMessage,
    HsmConfigurationMessage,
    LoggingStatus,
    NodeConfigurationOptionsMessage,
    OrderableClusterOptionsMessage,
    DescribePartnersOutputMessage,
    DescribeReservedNodeExchangeStatusOutputMessage,
    ReservedNodeOfferingsMessage,
    ReservedNodesMessage,
    ScheduledActionsMessage,
    SnapshotCopyGrantMessage,
    DescribeSnapshotSchedulesOutputMessage,
    TableRestoreStatusMessage,
    TaggedResourceListMessage,
    UsageLimitList,
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

export default class extends aws.redshift.SnapshotSchedule {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.redshift.SnapshotSchedule>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Redshift()
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

    invokeAcceptReservedNodeExchange(partialParams: ToOptional<{
      [K in keyof AcceptReservedNodeExchangeInputMessage]: (AcceptReservedNodeExchangeInputMessage)[K]
    }>): Request<AcceptReservedNodeExchangeOutputMessage, AWSError> {
        this.boot();
        return this.client.acceptReservedNodeExchange(
          this.ops["AcceptReservedNodeExchange"].apply(partialParams)
        );
    }

    invokeAddPartner(partialParams: ToOptional<{
      [K in keyof PartnerIntegrationInputMessage]: (PartnerIntegrationInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.addPartner(
          this.ops["AddPartner"].apply(partialParams)
        );
    }

    invokeAssociateDataShareConsumer(partialParams: ToOptional<{
      [K in keyof AssociateDataShareConsumerMessage]: (AssociateDataShareConsumerMessage)[K]
    }>): Request<DataShare, AWSError> {
        this.boot();
        return this.client.associateDataShareConsumer(
          this.ops["AssociateDataShareConsumer"].apply(partialParams)
        );
    }

    invokeAuthorizeClusterSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClusterSecurityGroupIngressMessage]: (AuthorizeClusterSecurityGroupIngressMessage)[K]
    }>): Request<AuthorizeClusterSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.authorizeClusterSecurityGroupIngress(
          this.ops["AuthorizeClusterSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeAuthorizeDataShare(partialParams: ToOptional<{
      [K in keyof AuthorizeDataShareMessage]: (AuthorizeDataShareMessage)[K]
    }>): Request<DataShare, AWSError> {
        this.boot();
        return this.client.authorizeDataShare(
          this.ops["AuthorizeDataShare"].apply(partialParams)
        );
    }

    invokeAuthorizeEndpointAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeEndpointAccessMessage]: (AuthorizeEndpointAccessMessage)[K]
    }>): Request<EndpointAuthorization, AWSError> {
        this.boot();
        return this.client.authorizeEndpointAccess(
          this.ops["AuthorizeEndpointAccess"].apply(partialParams)
        );
    }

    invokeAuthorizeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeSnapshotAccessMessage]: (AuthorizeSnapshotAccessMessage)[K]
    }>): Request<AuthorizeSnapshotAccessResult, AWSError> {
        this.boot();
        return this.client.authorizeSnapshotAccess(
          this.ops["AuthorizeSnapshotAccess"].apply(partialParams)
        );
    }

    invokeBatchDeleteClusterSnapshots(partialParams: ToOptional<{
      [K in keyof BatchDeleteClusterSnapshotsRequest]: (BatchDeleteClusterSnapshotsRequest)[K]
    }>): Request<BatchDeleteClusterSnapshotsResult, AWSError> {
        this.boot();
        return this.client.batchDeleteClusterSnapshots(
          this.ops["BatchDeleteClusterSnapshots"].apply(partialParams)
        );
    }

    invokeBatchModifyClusterSnapshots(partialParams: ToOptional<{
      [K in keyof BatchModifyClusterSnapshotsMessage]: (BatchModifyClusterSnapshotsMessage)[K]
    }>): Request<BatchModifyClusterSnapshotsOutputMessage, AWSError> {
        this.boot();
        return this.client.batchModifyClusterSnapshots(
          this.ops["BatchModifyClusterSnapshots"].apply(partialParams)
        );
    }

    invokeCancelResize(partialParams: ToOptional<{
      [K in keyof CancelResizeMessage]: (CancelResizeMessage)[K]
    }>): Request<ResizeProgressMessage, AWSError> {
        this.boot();
        return this.client.cancelResize(
          this.ops["CancelResize"].apply(partialParams)
        );
    }

    invokeCopyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyClusterSnapshotMessage]: (CopyClusterSnapshotMessage)[K]
    }>): Request<CopyClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.copyClusterSnapshot(
          this.ops["CopyClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof CreateAuthenticationProfileMessage]: (CreateAuthenticationProfileMessage)[K]
    }>): Request<CreateAuthenticationProfileResult, AWSError> {
        this.boot();
        return this.client.createAuthenticationProfile(
          this.ops["CreateAuthenticationProfile"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterMessage]: (CreateClusterMessage)[K]
    }>): Request<CreateClusterResult, AWSError> {
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterParameterGroupMessage & keyof Omit<CreateClusterParameterGroupMessage, "Description">]: (CreateClusterParameterGroupMessage)[K]
    }>): Request<CreateClusterParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterParameterGroup(
          this.ops["CreateClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateClusterSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSecurityGroupMessage & keyof Omit<CreateClusterSecurityGroupMessage, "Description">]: (CreateClusterSecurityGroupMessage)[K]
    }>): Request<CreateClusterSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterSecurityGroup(
          this.ops["CreateClusterSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateClusterSnapshotMessage]: (CreateClusterSnapshotMessage)[K]
    }>): Request<CreateClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.createClusterSnapshot(
          this.ops["CreateClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSubnetGroupMessage & keyof Omit<CreateClusterSubnetGroupMessage, "Description">]: (CreateClusterSubnetGroupMessage)[K]
    }>): Request<CreateClusterSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterSubnetGroup(
          this.ops["CreateClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateEndpointAccess(partialParams: ToOptional<{
      [K in keyof CreateEndpointAccessMessage]: (CreateEndpointAccessMessage)[K]
    }>): Request<EndpointAccess, AWSError> {
        this.boot();
        return this.client.createEndpointAccess(
          this.ops["CreateEndpointAccess"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeCreateHsmClientCertificate(partialParams: ToOptional<{
      [K in keyof CreateHsmClientCertificateMessage]: (CreateHsmClientCertificateMessage)[K]
    }>): Request<CreateHsmClientCertificateResult, AWSError> {
        this.boot();
        return this.client.createHsmClientCertificate(
          this.ops["CreateHsmClientCertificate"].apply(partialParams)
        );
    }

    invokeCreateHsmConfiguration(partialParams: ToOptional<{
      [K in keyof CreateHsmConfigurationMessage & keyof Omit<CreateHsmConfigurationMessage, "Description">]: (CreateHsmConfigurationMessage)[K]
    }>): Request<CreateHsmConfigurationResult, AWSError> {
        this.boot();
        return this.client.createHsmConfiguration(
          this.ops["CreateHsmConfiguration"].apply(partialParams)
        );
    }

    invokeCreateScheduledAction(partialParams: ToOptional<{
      [K in keyof CreateScheduledActionMessage]: (CreateScheduledActionMessage)[K]
    }>): Request<ScheduledAction, AWSError> {
        this.boot();
        return this.client.createScheduledAction(
          this.ops["CreateScheduledAction"].apply(partialParams)
        );
    }

    invokeCreateSnapshotCopyGrant(partialParams: ToOptional<{
      [K in keyof CreateSnapshotCopyGrantMessage]: (CreateSnapshotCopyGrantMessage)[K]
    }>): Request<CreateSnapshotCopyGrantResult, AWSError> {
        this.boot();
        return this.client.createSnapshotCopyGrant(
          this.ops["CreateSnapshotCopyGrant"].apply(partialParams)
        );
    }

    invokeCreateSnapshotSchedule(partialParams: ToOptional<{
      [K in keyof CreateSnapshotScheduleMessage]: (CreateSnapshotScheduleMessage)[K]
    }>): Request<SnapshotSchedule, AWSError> {
        this.boot();
        return this.client.createSnapshotSchedule(
          this.ops["CreateSnapshotSchedule"].apply(partialParams)
        );
    }

    invokeCreateUsageLimit(partialParams: ToOptional<{
      [K in keyof CreateUsageLimitMessage]: (CreateUsageLimitMessage)[K]
    }>): Request<UsageLimit, AWSError> {
        this.boot();
        return this.client.createUsageLimit(
          this.ops["CreateUsageLimit"].apply(partialParams)
        );
    }

    invokeDeauthorizeDataShare(partialParams: ToOptional<{
      [K in keyof DeauthorizeDataShareMessage]: (DeauthorizeDataShareMessage)[K]
    }>): Request<DataShare, AWSError> {
        this.boot();
        return this.client.deauthorizeDataShare(
          this.ops["DeauthorizeDataShare"].apply(partialParams)
        );
    }

    invokeDeleteAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof DeleteAuthenticationProfileMessage]: (DeleteAuthenticationProfileMessage)[K]
    }>): Request<DeleteAuthenticationProfileResult, AWSError> {
        this.boot();
        return this.client.deleteAuthenticationProfile(
          this.ops["DeleteAuthenticationProfile"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterMessage]: (DeleteClusterMessage)[K]
    }>): Request<DeleteClusterResult, AWSError> {
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteClusterSnapshotMessage]: (DeleteClusterSnapshotMessage)[K]
    }>): Request<DeleteClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteClusterSnapshot(
          this.ops["DeleteClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteEndpointAccess(partialParams: ToOptional<{
      [K in keyof DeleteEndpointAccessMessage]: (DeleteEndpointAccessMessage)[K]
    }>): Request<EndpointAccess, AWSError> {
        this.boot();
        return this.client.deleteEndpointAccess(
          this.ops["DeleteEndpointAccess"].apply(partialParams)
        );
    }

    invokeDeletePartner(partialParams: ToOptional<{
      [K in keyof PartnerIntegrationInputMessage]: (PartnerIntegrationInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.deletePartner(
          this.ops["DeletePartner"].apply(partialParams)
        );
    }

    invokeDescribeAccountAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAccountAttributesMessage]: (DescribeAccountAttributesMessage)[K]
    }>): Request<AccountAttributeList, AWSError> {
        this.boot();
        return this.client.describeAccountAttributes(
          this.ops["DescribeAccountAttributes"].apply(partialParams)
        );
    }

    invokeDescribeAuthenticationProfiles(partialParams: ToOptional<{
      [K in keyof DescribeAuthenticationProfilesMessage]: (DescribeAuthenticationProfilesMessage)[K]
    }>): Request<DescribeAuthenticationProfilesResult, AWSError> {
        this.boot();
        return this.client.describeAuthenticationProfiles(
          this.ops["DescribeAuthenticationProfiles"].apply(partialParams)
        );
    }

    invokeDescribeClusterDbRevisions(partialParams: ToOptional<{
      [K in keyof DescribeClusterDbRevisionsMessage]: (DescribeClusterDbRevisionsMessage)[K]
    }>): Request<ClusterDbRevisionsMessage, AWSError> {
        this.boot();
        return this.client.describeClusterDbRevisions(
          this.ops["DescribeClusterDbRevisions"].apply(partialParams)
        );
    }

    invokeDescribeClusterParameterGroups(partialParams: ToOptional<{
      [K in keyof DescribeClusterParameterGroupsMessage]: (DescribeClusterParameterGroupsMessage)[K]
    }>): Request<ClusterParameterGroupsMessage, AWSError> {
        this.boot();
        return this.client.describeClusterParameterGroups(
          this.ops["DescribeClusterParameterGroups"].apply(partialParams)
        );
    }

    invokeDescribeClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeClusterParametersMessage]: (DescribeClusterParametersMessage)[K]
    }>): Request<ClusterParameterGroupDetails, AWSError> {
        this.boot();
        return this.client.describeClusterParameters(
          this.ops["DescribeClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeClusterSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeClusterSecurityGroupsMessage]: (DescribeClusterSecurityGroupsMessage)[K]
    }>): Request<ClusterSecurityGroupMessage, AWSError> {
        this.boot();
        return this.client.describeClusterSecurityGroups(
          this.ops["DescribeClusterSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeClusterSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeClusterSnapshotsMessage]: (DescribeClusterSnapshotsMessage)[K]
    }>): Request<SnapshotMessage, AWSError> {
        this.boot();
        return this.client.describeClusterSnapshots(
          this.ops["DescribeClusterSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeClusterSubnetGroups(partialParams: ToOptional<{
      [K in keyof DescribeClusterSubnetGroupsMessage]: (DescribeClusterSubnetGroupsMessage)[K]
    }>): Request<ClusterSubnetGroupMessage, AWSError> {
        this.boot();
        return this.client.describeClusterSubnetGroups(
          this.ops["DescribeClusterSubnetGroups"].apply(partialParams)
        );
    }

    invokeDescribeClusterTracks(partialParams: ToOptional<{
      [K in keyof DescribeClusterTracksMessage]: (DescribeClusterTracksMessage)[K]
    }>): Request<TrackListMessage, AWSError> {
        this.boot();
        return this.client.describeClusterTracks(
          this.ops["DescribeClusterTracks"].apply(partialParams)
        );
    }

    invokeDescribeClusterVersions(partialParams: ToOptional<{
      [K in keyof DescribeClusterVersionsMessage]: (DescribeClusterVersionsMessage)[K]
    }>): Request<ClusterVersionsMessage, AWSError> {
        this.boot();
        return this.client.describeClusterVersions(
          this.ops["DescribeClusterVersions"].apply(partialParams)
        );
    }

    invokeDescribeClusters(partialParams: ToOptional<{
      [K in keyof DescribeClustersMessage]: (DescribeClustersMessage)[K]
    }>): Request<ClustersMessage, AWSError> {
        this.boot();
        return this.client.describeClusters(
          this.ops["DescribeClusters"].apply(partialParams)
        );
    }

    invokeDescribeDataShares(partialParams: ToOptional<{
      [K in keyof DescribeDataSharesMessage]: (DescribeDataSharesMessage)[K]
    }>): Request<DescribeDataSharesResult, AWSError> {
        this.boot();
        return this.client.describeDataShares(
          this.ops["DescribeDataShares"].apply(partialParams)
        );
    }

    invokeDescribeDataSharesForConsumer(partialParams: ToOptional<{
      [K in keyof DescribeDataSharesForConsumerMessage]: (DescribeDataSharesForConsumerMessage)[K]
    }>): Request<DescribeDataSharesForConsumerResult, AWSError> {
        this.boot();
        return this.client.describeDataSharesForConsumer(
          this.ops["DescribeDataSharesForConsumer"].apply(partialParams)
        );
    }

    invokeDescribeDataSharesForProducer(partialParams: ToOptional<{
      [K in keyof DescribeDataSharesForProducerMessage]: (DescribeDataSharesForProducerMessage)[K]
    }>): Request<DescribeDataSharesForProducerResult, AWSError> {
        this.boot();
        return this.client.describeDataSharesForProducer(
          this.ops["DescribeDataSharesForProducer"].apply(partialParams)
        );
    }

    invokeDescribeDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDefaultClusterParametersMessage]: (DescribeDefaultClusterParametersMessage)[K]
    }>): Request<DescribeDefaultClusterParametersResult, AWSError> {
        this.boot();
        return this.client.describeDefaultClusterParameters(
          this.ops["DescribeDefaultClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeEndpointAccess(partialParams: ToOptional<{
      [K in keyof DescribeEndpointAccessMessage]: (DescribeEndpointAccessMessage)[K]
    }>): Request<EndpointAccessList, AWSError> {
        this.boot();
        return this.client.describeEndpointAccess(
          this.ops["DescribeEndpointAccess"].apply(partialParams)
        );
    }

    invokeDescribeEndpointAuthorization(partialParams: ToOptional<{
      [K in keyof DescribeEndpointAuthorizationMessage]: (DescribeEndpointAuthorizationMessage)[K]
    }>): Request<EndpointAuthorizationList, AWSError> {
        this.boot();
        return this.client.describeEndpointAuthorization(
          this.ops["DescribeEndpointAuthorization"].apply(partialParams)
        );
    }

    invokeDescribeEventCategories(partialParams: ToOptional<{
      [K in keyof DescribeEventCategoriesMessage]: (DescribeEventCategoriesMessage)[K]
    }>): Request<EventCategoriesMessage, AWSError> {
        this.boot();
        return this.client.describeEventCategories(
          this.ops["DescribeEventCategories"].apply(partialParams)
        );
    }

    invokeDescribeEventSubscriptions(partialParams: ToOptional<{
      [K in keyof DescribeEventSubscriptionsMessage]: (DescribeEventSubscriptionsMessage)[K]
    }>): Request<EventSubscriptionsMessage, AWSError> {
        this.boot();
        return this.client.describeEventSubscriptions(
          this.ops["DescribeEventSubscriptions"].apply(partialParams)
        );
    }

    invokeDescribeEvents(partialParams: ToOptional<{
      [K in keyof DescribeEventsMessage]: (DescribeEventsMessage)[K]
    }>): Request<EventsMessage, AWSError> {
        this.boot();
        return this.client.describeEvents(
          this.ops["DescribeEvents"].apply(partialParams)
        );
    }

    invokeDescribeHsmClientCertificates(partialParams: ToOptional<{
      [K in keyof DescribeHsmClientCertificatesMessage]: (DescribeHsmClientCertificatesMessage)[K]
    }>): Request<HsmClientCertificateMessage, AWSError> {
        this.boot();
        return this.client.describeHsmClientCertificates(
          this.ops["DescribeHsmClientCertificates"].apply(partialParams)
        );
    }

    invokeDescribeHsmConfigurations(partialParams: ToOptional<{
      [K in keyof DescribeHsmConfigurationsMessage]: (DescribeHsmConfigurationsMessage)[K]
    }>): Request<HsmConfigurationMessage, AWSError> {
        this.boot();
        return this.client.describeHsmConfigurations(
          this.ops["DescribeHsmConfigurations"].apply(partialParams)
        );
    }

    invokeDescribeLoggingStatus(partialParams: ToOptional<{
      [K in keyof DescribeLoggingStatusMessage]: (DescribeLoggingStatusMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        this.boot();
        return this.client.describeLoggingStatus(
          this.ops["DescribeLoggingStatus"].apply(partialParams)
        );
    }

    invokeDescribeNodeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof DescribeNodeConfigurationOptionsMessage]: (DescribeNodeConfigurationOptionsMessage)[K]
    }>): Request<NodeConfigurationOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeNodeConfigurationOptions(
          this.ops["DescribeNodeConfigurationOptions"].apply(partialParams)
        );
    }

    invokeDescribeOrderableClusterOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableClusterOptionsMessage]: (DescribeOrderableClusterOptionsMessage)[K]
    }>): Request<OrderableClusterOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeOrderableClusterOptions(
          this.ops["DescribeOrderableClusterOptions"].apply(partialParams)
        );
    }

    invokeDescribePartners(partialParams: ToOptional<{
      [K in keyof DescribePartnersInputMessage]: (DescribePartnersInputMessage)[K]
    }>): Request<DescribePartnersOutputMessage, AWSError> {
        this.boot();
        return this.client.describePartners(
          this.ops["DescribePartners"].apply(partialParams)
        );
    }

    invokeDescribeReservedNodeExchangeStatus(partialParams: ToOptional<{
      [K in keyof DescribeReservedNodeExchangeStatusInputMessage]: (DescribeReservedNodeExchangeStatusInputMessage)[K]
    }>): Request<DescribeReservedNodeExchangeStatusOutputMessage, AWSError> {
        this.boot();
        return this.client.describeReservedNodeExchangeStatus(
          this.ops["DescribeReservedNodeExchangeStatus"].apply(partialParams)
        );
    }

    invokeDescribeReservedNodeOfferings(partialParams: ToOptional<{
      [K in keyof DescribeReservedNodeOfferingsMessage]: (DescribeReservedNodeOfferingsMessage)[K]
    }>): Request<ReservedNodeOfferingsMessage, AWSError> {
        this.boot();
        return this.client.describeReservedNodeOfferings(
          this.ops["DescribeReservedNodeOfferings"].apply(partialParams)
        );
    }

    invokeDescribeReservedNodes(partialParams: ToOptional<{
      [K in keyof DescribeReservedNodesMessage]: (DescribeReservedNodesMessage)[K]
    }>): Request<ReservedNodesMessage, AWSError> {
        this.boot();
        return this.client.describeReservedNodes(
          this.ops["DescribeReservedNodes"].apply(partialParams)
        );
    }

    invokeDescribeResize(partialParams: ToOptional<{
      [K in keyof DescribeResizeMessage]: (DescribeResizeMessage)[K]
    }>): Request<ResizeProgressMessage, AWSError> {
        this.boot();
        return this.client.describeResize(
          this.ops["DescribeResize"].apply(partialParams)
        );
    }

    invokeDescribeScheduledActions(partialParams: ToOptional<{
      [K in keyof DescribeScheduledActionsMessage]: (DescribeScheduledActionsMessage)[K]
    }>): Request<ScheduledActionsMessage, AWSError> {
        this.boot();
        return this.client.describeScheduledActions(
          this.ops["DescribeScheduledActions"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotCopyGrants(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotCopyGrantsMessage]: (DescribeSnapshotCopyGrantsMessage)[K]
    }>): Request<SnapshotCopyGrantMessage, AWSError> {
        this.boot();
        return this.client.describeSnapshotCopyGrants(
          this.ops["DescribeSnapshotCopyGrants"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotSchedules(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotSchedulesMessage]: (DescribeSnapshotSchedulesMessage)[K]
    }>): Request<DescribeSnapshotSchedulesOutputMessage, AWSError> {
        this.boot();
        return this.client.describeSnapshotSchedules(
          this.ops["DescribeSnapshotSchedules"].apply(partialParams)
        );
    }

    invokeDescribeTableRestoreStatus(partialParams: ToOptional<{
      [K in keyof DescribeTableRestoreStatusMessage]: (DescribeTableRestoreStatusMessage)[K]
    }>): Request<TableRestoreStatusMessage, AWSError> {
        this.boot();
        return this.client.describeTableRestoreStatus(
          this.ops["DescribeTableRestoreStatus"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsMessage]: (DescribeTagsMessage)[K]
    }>): Request<TaggedResourceListMessage, AWSError> {
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDescribeUsageLimits(partialParams: ToOptional<{
      [K in keyof DescribeUsageLimitsMessage]: (DescribeUsageLimitsMessage)[K]
    }>): Request<UsageLimitList, AWSError> {
        this.boot();
        return this.client.describeUsageLimits(
          this.ops["DescribeUsageLimits"].apply(partialParams)
        );
    }

    invokeDisableLogging(partialParams: ToOptional<{
      [K in keyof DisableLoggingMessage]: (DisableLoggingMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        this.boot();
        return this.client.disableLogging(
          this.ops["DisableLogging"].apply(partialParams)
        );
    }

    invokeDisableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof DisableSnapshotCopyMessage]: (DisableSnapshotCopyMessage)[K]
    }>): Request<DisableSnapshotCopyResult, AWSError> {
        this.boot();
        return this.client.disableSnapshotCopy(
          this.ops["DisableSnapshotCopy"].apply(partialParams)
        );
    }

    invokeDisassociateDataShareConsumer(partialParams: ToOptional<{
      [K in keyof DisassociateDataShareConsumerMessage]: (DisassociateDataShareConsumerMessage)[K]
    }>): Request<DataShare, AWSError> {
        this.boot();
        return this.client.disassociateDataShareConsumer(
          this.ops["DisassociateDataShareConsumer"].apply(partialParams)
        );
    }

    invokeEnableLogging(partialParams: ToOptional<{
      [K in keyof EnableLoggingMessage]: (EnableLoggingMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        this.boot();
        return this.client.enableLogging(
          this.ops["EnableLogging"].apply(partialParams)
        );
    }

    invokeEnableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof EnableSnapshotCopyMessage]: (EnableSnapshotCopyMessage)[K]
    }>): Request<EnableSnapshotCopyResult, AWSError> {
        this.boot();
        return this.client.enableSnapshotCopy(
          this.ops["EnableSnapshotCopy"].apply(partialParams)
        );
    }

    invokeGetClusterCredentials(partialParams: ToOptional<{
      [K in keyof GetClusterCredentialsMessage]: (GetClusterCredentialsMessage)[K]
    }>): Request<ClusterCredentials, AWSError> {
        this.boot();
        return this.client.getClusterCredentials(
          this.ops["GetClusterCredentials"].apply(partialParams)
        );
    }

    invokeGetReservedNodeExchangeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof GetReservedNodeExchangeConfigurationOptionsInputMessage]: (GetReservedNodeExchangeConfigurationOptionsInputMessage)[K]
    }>): Request<GetReservedNodeExchangeConfigurationOptionsOutputMessage, AWSError> {
        this.boot();
        return this.client.getReservedNodeExchangeConfigurationOptions(
          this.ops["GetReservedNodeExchangeConfigurationOptions"].apply(partialParams)
        );
    }

    invokeGetReservedNodeExchangeOfferings(partialParams: ToOptional<{
      [K in keyof GetReservedNodeExchangeOfferingsInputMessage]: (GetReservedNodeExchangeOfferingsInputMessage)[K]
    }>): Request<GetReservedNodeExchangeOfferingsOutputMessage, AWSError> {
        this.boot();
        return this.client.getReservedNodeExchangeOfferings(
          this.ops["GetReservedNodeExchangeOfferings"].apply(partialParams)
        );
    }

    invokeModifyAquaConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyAquaInputMessage]: (ModifyAquaInputMessage)[K]
    }>): Request<ModifyAquaOutputMessage, AWSError> {
        this.boot();
        return this.client.modifyAquaConfiguration(
          this.ops["ModifyAquaConfiguration"].apply(partialParams)
        );
    }

    invokeModifyAuthenticationProfile(partialParams: ToOptional<{
      [K in keyof ModifyAuthenticationProfileMessage]: (ModifyAuthenticationProfileMessage)[K]
    }>): Request<ModifyAuthenticationProfileResult, AWSError> {
        this.boot();
        return this.client.modifyAuthenticationProfile(
          this.ops["ModifyAuthenticationProfile"].apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof ModifyClusterMessage]: (ModifyClusterMessage)[K]
    }>): Request<ModifyClusterResult, AWSError> {
        this.boot();
        return this.client.modifyCluster(
          this.ops["ModifyCluster"].apply(partialParams)
        );
    }

    invokeModifyClusterDbRevision(partialParams: ToOptional<{
      [K in keyof ModifyClusterDbRevisionMessage]: (ModifyClusterDbRevisionMessage)[K]
    }>): Request<ModifyClusterDbRevisionResult, AWSError> {
        this.boot();
        return this.client.modifyClusterDbRevision(
          this.ops["ModifyClusterDbRevision"].apply(partialParams)
        );
    }

    invokeModifyClusterIamRoles(partialParams: ToOptional<{
      [K in keyof ModifyClusterIamRolesMessage]: (ModifyClusterIamRolesMessage)[K]
    }>): Request<ModifyClusterIamRolesResult, AWSError> {
        this.boot();
        return this.client.modifyClusterIamRoles(
          this.ops["ModifyClusterIamRoles"].apply(partialParams)
        );
    }

    invokeModifyClusterMaintenance(partialParams: ToOptional<{
      [K in keyof ModifyClusterMaintenanceMessage]: (ModifyClusterMaintenanceMessage)[K]
    }>): Request<ModifyClusterMaintenanceResult, AWSError> {
        this.boot();
        return this.client.modifyClusterMaintenance(
          this.ops["ModifyClusterMaintenance"].apply(partialParams)
        );
    }

    invokeModifyClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterParameterGroupMessage]: (ModifyClusterParameterGroupMessage)[K]
    }>): Request<ClusterParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.modifyClusterParameterGroup(
          this.ops["ModifyClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyClusterSnapshotMessage]: (ModifyClusterSnapshotMessage)[K]
    }>): Request<ModifyClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.modifyClusterSnapshot(
          this.ops["ModifyClusterSnapshot"].apply(partialParams)
        );
    }

    invokeModifyClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterSubnetGroupMessage]: (ModifyClusterSubnetGroupMessage)[K]
    }>): Request<ModifyClusterSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.modifyClusterSubnetGroup(
          this.ops["ModifyClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyEndpointAccess(partialParams: ToOptional<{
      [K in keyof ModifyEndpointAccessMessage]: (ModifyEndpointAccessMessage)[K]
    }>): Request<EndpointAccess, AWSError> {
        this.boot();
        return this.client.modifyEndpointAccess(
          this.ops["ModifyEndpointAccess"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage)[K]
    }>): Request<ModifyEventSubscriptionResult, AWSError> {
        this.boot();
        return this.client.modifyEventSubscription(
          this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokeModifyScheduledAction(partialParams: ToOptional<{
      [K in keyof ModifyScheduledActionMessage]: (ModifyScheduledActionMessage)[K]
    }>): Request<ScheduledAction, AWSError> {
        this.boot();
        return this.client.modifyScheduledAction(
          this.ops["ModifyScheduledAction"].apply(partialParams)
        );
    }

    invokeModifySnapshotCopyRetentionPeriod(partialParams: ToOptional<{
      [K in keyof ModifySnapshotCopyRetentionPeriodMessage]: (ModifySnapshotCopyRetentionPeriodMessage)[K]
    }>): Request<ModifySnapshotCopyRetentionPeriodResult, AWSError> {
        this.boot();
        return this.client.modifySnapshotCopyRetentionPeriod(
          this.ops["ModifySnapshotCopyRetentionPeriod"].apply(partialParams)
        );
    }

    invokeModifySnapshotSchedule(partialParams: ToOptional<{
      [K in keyof ModifySnapshotScheduleMessage]: (ModifySnapshotScheduleMessage)[K]
    }>): Request<SnapshotSchedule, AWSError> {
        this.boot();
        return this.client.modifySnapshotSchedule(
          this.ops["ModifySnapshotSchedule"].apply(partialParams)
        );
    }

    invokeModifyUsageLimit(partialParams: ToOptional<{
      [K in keyof ModifyUsageLimitMessage]: (ModifyUsageLimitMessage)[K]
    }>): Request<UsageLimit, AWSError> {
        this.boot();
        return this.client.modifyUsageLimit(
          this.ops["ModifyUsageLimit"].apply(partialParams)
        );
    }

    invokePauseCluster(partialParams: ToOptional<{
      [K in keyof PauseClusterMessage]: (PauseClusterMessage)[K]
    }>): Request<PauseClusterResult, AWSError> {
        this.boot();
        return this.client.pauseCluster(
          this.ops["PauseCluster"].apply(partialParams)
        );
    }

    invokePurchaseReservedNodeOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedNodeOfferingMessage]: (PurchaseReservedNodeOfferingMessage)[K]
    }>): Request<PurchaseReservedNodeOfferingResult, AWSError> {
        this.boot();
        return this.client.purchaseReservedNodeOffering(
          this.ops["PurchaseReservedNodeOffering"].apply(partialParams)
        );
    }

    invokeRebootCluster(partialParams: ToOptional<{
      [K in keyof RebootClusterMessage]: (RebootClusterMessage)[K]
    }>): Request<RebootClusterResult, AWSError> {
        this.boot();
        return this.client.rebootCluster(
          this.ops["RebootCluster"].apply(partialParams)
        );
    }

    invokeRejectDataShare(partialParams: ToOptional<{
      [K in keyof RejectDataShareMessage]: (RejectDataShareMessage)[K]
    }>): Request<DataShare, AWSError> {
        this.boot();
        return this.client.rejectDataShare(
          this.ops["RejectDataShare"].apply(partialParams)
        );
    }

    invokeResetClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetClusterParameterGroupMessage]: (ResetClusterParameterGroupMessage)[K]
    }>): Request<ClusterParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.resetClusterParameterGroup(
          this.ops["ResetClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeResizeCluster(partialParams: ToOptional<{
      [K in keyof ResizeClusterMessage]: (ResizeClusterMessage)[K]
    }>): Request<ResizeClusterResult, AWSError> {
        this.boot();
        return this.client.resizeCluster(
          this.ops["ResizeCluster"].apply(partialParams)
        );
    }

    invokeRestoreFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreFromClusterSnapshotMessage]: (RestoreFromClusterSnapshotMessage)[K]
    }>): Request<RestoreFromClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreFromClusterSnapshot(
          this.ops["RestoreFromClusterSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreTableFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreTableFromClusterSnapshotMessage]: (RestoreTableFromClusterSnapshotMessage)[K]
    }>): Request<RestoreTableFromClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreTableFromClusterSnapshot(
          this.ops["RestoreTableFromClusterSnapshot"].apply(partialParams)
        );
    }

    invokeResumeCluster(partialParams: ToOptional<{
      [K in keyof ResumeClusterMessage]: (ResumeClusterMessage)[K]
    }>): Request<ResumeClusterResult, AWSError> {
        this.boot();
        return this.client.resumeCluster(
          this.ops["ResumeCluster"].apply(partialParams)
        );
    }

    invokeRevokeClusterSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeClusterSecurityGroupIngressMessage]: (RevokeClusterSecurityGroupIngressMessage)[K]
    }>): Request<RevokeClusterSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.revokeClusterSecurityGroupIngress(
          this.ops["RevokeClusterSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeRevokeEndpointAccess(partialParams: ToOptional<{
      [K in keyof RevokeEndpointAccessMessage]: (RevokeEndpointAccessMessage)[K]
    }>): Request<EndpointAuthorization, AWSError> {
        this.boot();
        return this.client.revokeEndpointAccess(
          this.ops["RevokeEndpointAccess"].apply(partialParams)
        );
    }

    invokeRevokeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof RevokeSnapshotAccessMessage]: (RevokeSnapshotAccessMessage)[K]
    }>): Request<RevokeSnapshotAccessResult, AWSError> {
        this.boot();
        return this.client.revokeSnapshotAccess(
          this.ops["RevokeSnapshotAccess"].apply(partialParams)
        );
    }

    invokeRotateEncryptionKey(partialParams: ToOptional<{
      [K in keyof RotateEncryptionKeyMessage]: (RotateEncryptionKeyMessage)[K]
    }>): Request<RotateEncryptionKeyResult, AWSError> {
        this.boot();
        return this.client.rotateEncryptionKey(
          this.ops["RotateEncryptionKey"].apply(partialParams)
        );
    }

    invokeUpdatePartnerStatus(partialParams: ToOptional<{
      [K in keyof UpdatePartnerStatusInputMessage]: (UpdatePartnerStatusInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.updatePartnerStatus(
          this.ops["UpdatePartnerStatus"].apply(partialParams)
        );
    }
}