
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddSourceIdentifierToSubscriptionMessage,
    ApplyPendingMaintenanceActionMessage,
    AuthorizeDBSecurityGroupIngressMessage,
    BacktrackDBClusterMessage,
    CancelExportTaskMessage,
    CopyDBClusterParameterGroupMessage,
    CopyDBClusterSnapshotMessage,
    CopyDBParameterGroupMessage,
    CopyDBSnapshotMessage,
    CopyOptionGroupMessage,
    CreateCustomAvailabilityZoneMessage,
    CreateCustomDBEngineVersionMessage,
    CreateDBClusterMessage,
    CreateDBClusterEndpointMessage,
    CreateDBClusterParameterGroupMessage,
    CreateDBClusterSnapshotMessage,
    CreateDBInstanceMessage,
    CreateDBInstanceReadReplicaMessage,
    CreateDBParameterGroupMessage,
    CreateDBProxyRequest,
    CreateDBProxyEndpointRequest,
    CreateDBSecurityGroupMessage,
    CreateDBSnapshotMessage,
    CreateDBSubnetGroupMessage,
    CreateEventSubscriptionMessage,
    CreateGlobalClusterMessage,
    CreateOptionGroupMessage,
    DeleteCustomAvailabilityZoneMessage,
    DeleteCustomDBEngineVersionMessage,
    DeleteDBClusterMessage,
    DeleteDBClusterEndpointMessage,
    DeleteDBClusterSnapshotMessage,
    DeleteDBInstanceMessage,
    DeleteDBInstanceAutomatedBackupMessage,
    DeleteDBProxyRequest,
    DeleteDBProxyEndpointRequest,
    DeleteDBSnapshotMessage,
    DeleteEventSubscriptionMessage,
    DeleteGlobalClusterMessage,
    DeleteInstallationMediaMessage,
    DeregisterDBProxyTargetsRequest,
    DescribeAccountAttributesMessage,
    DescribeCertificatesMessage,
    DescribeCustomAvailabilityZonesMessage,
    DescribeDBClusterBacktracksMessage,
    DescribeDBClusterEndpointsMessage,
    DescribeDBClusterParameterGroupsMessage,
    DescribeDBClusterParametersMessage,
    DescribeDBClusterSnapshotAttributesMessage,
    DescribeDBClusterSnapshotsMessage,
    DescribeDBClustersMessage,
    DescribeDBEngineVersionsMessage,
    DescribeDBInstanceAutomatedBackupsMessage,
    DescribeDBInstancesMessage,
    DescribeDBLogFilesMessage,
    DescribeDBParameterGroupsMessage,
    DescribeDBParametersMessage,
    DescribeDBProxiesRequest,
    DescribeDBProxyEndpointsRequest,
    DescribeDBProxyTargetGroupsRequest,
    DescribeDBProxyTargetsRequest,
    DescribeDBSecurityGroupsMessage,
    DescribeDBSnapshotAttributesMessage,
    DescribeDBSnapshotsMessage,
    DescribeDBSubnetGroupsMessage,
    DescribeEngineDefaultClusterParametersMessage,
    DescribeEngineDefaultParametersMessage,
    DescribeEventCategoriesMessage,
    DescribeEventSubscriptionsMessage,
    DescribeEventsMessage,
    DescribeExportTasksMessage,
    DescribeGlobalClustersMessage,
    DescribeInstallationMediaMessage,
    DescribeOptionGroupOptionsMessage,
    DescribeOptionGroupsMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    DescribePendingMaintenanceActionsMessage,
    DescribeReservedDBInstancesMessage,
    DescribeReservedDBInstancesOfferingsMessage,
    DescribeSourceRegionsMessage,
    DescribeValidDBInstanceModificationsMessage,
    DownloadDBLogFilePortionMessage,
    FailoverDBClusterMessage,
    FailoverGlobalClusterMessage,
    ImportInstallationMediaMessage,
    ListTagsForResourceMessage,
    ModifyCertificatesMessage,
    ModifyCurrentDBClusterCapacityMessage,
    ModifyCustomDBEngineVersionMessage,
    ModifyDBClusterMessage,
    ModifyDBClusterEndpointMessage,
    ModifyDBClusterParameterGroupMessage,
    ModifyDBClusterSnapshotAttributeMessage,
    ModifyDBInstanceMessage,
    ModifyDBParameterGroupMessage,
    ModifyDBProxyRequest,
    ModifyDBProxyEndpointRequest,
    ModifyDBProxyTargetGroupRequest,
    ModifyDBSnapshotMessage,
    ModifyDBSnapshotAttributeMessage,
    ModifyDBSubnetGroupMessage,
    ModifyEventSubscriptionMessage,
    ModifyGlobalClusterMessage,
    ModifyOptionGroupMessage,
    PromoteReadReplicaMessage,
    PromoteReadReplicaDBClusterMessage,
    PurchaseReservedDBInstancesOfferingMessage,
    RebootDBClusterMessage,
    RebootDBInstanceMessage,
    RegisterDBProxyTargetsRequest,
    RemoveFromGlobalClusterMessage,
    RemoveSourceIdentifierFromSubscriptionMessage,
    ResetDBClusterParameterGroupMessage,
    ResetDBParameterGroupMessage,
    RestoreDBClusterFromS3Message,
    RestoreDBClusterFromSnapshotMessage,
    RestoreDBClusterToPointInTimeMessage,
    RestoreDBInstanceFromDBSnapshotMessage,
    RestoreDBInstanceFromS3Message,
    RestoreDBInstanceToPointInTimeMessage,
    RevokeDBSecurityGroupIngressMessage,
    StartActivityStreamRequest,
    StartDBClusterMessage,
    StartDBInstanceMessage,
    StartDBInstanceAutomatedBackupsReplicationMessage,
    StartExportTaskMessage,
    StopActivityStreamRequest,
    StopDBClusterMessage,
    StopDBInstanceMessage,
    StopDBInstanceAutomatedBackupsReplicationMessage,
    AddSourceIdentifierToSubscriptionResult,
    ApplyPendingMaintenanceActionResult,
    AuthorizeDBSecurityGroupIngressResult,
    DBClusterBacktrack,
    ExportTask,
    CopyDBClusterParameterGroupResult,
    CopyDBClusterSnapshotResult,
    CopyDBParameterGroupResult,
    CopyDBSnapshotResult,
    CopyOptionGroupResult,
    CreateCustomAvailabilityZoneResult,
    DBEngineVersion,
    CreateDBClusterResult,
    DBClusterEndpoint,
    CreateDBClusterParameterGroupResult,
    CreateDBClusterSnapshotResult,
    CreateDBInstanceResult,
    CreateDBInstanceReadReplicaResult,
    CreateDBParameterGroupResult,
    CreateDBProxyResponse,
    CreateDBProxyEndpointResponse,
    CreateDBSecurityGroupResult,
    CreateDBSnapshotResult,
    CreateDBSubnetGroupResult,
    CreateEventSubscriptionResult,
    CreateGlobalClusterResult,
    CreateOptionGroupResult,
    DeleteCustomAvailabilityZoneResult,
    DeleteDBClusterResult,
    DeleteDBClusterSnapshotResult,
    DeleteDBInstanceResult,
    DeleteDBInstanceAutomatedBackupResult,
    DeleteDBProxyResponse,
    DeleteDBProxyEndpointResponse,
    DeleteDBSnapshotResult,
    DeleteEventSubscriptionResult,
    DeleteGlobalClusterResult,
    InstallationMedia,
    DeregisterDBProxyTargetsResponse,
    AccountAttributesMessage,
    CertificateMessage,
    CustomAvailabilityZoneMessage,
    DBClusterBacktrackMessage,
    DBClusterEndpointMessage,
    DBClusterParameterGroupsMessage,
    DBClusterParameterGroupDetails,
    DescribeDBClusterSnapshotAttributesResult,
    DBClusterSnapshotMessage,
    DBClusterMessage,
    DBEngineVersionMessage,
    DBInstanceAutomatedBackupMessage,
    DBInstanceMessage,
    DescribeDBLogFilesResponse,
    DBParameterGroupsMessage,
    DBParameterGroupDetails,
    DescribeDBProxiesResponse,
    DescribeDBProxyEndpointsResponse,
    DescribeDBProxyTargetGroupsResponse,
    DescribeDBProxyTargetsResponse,
    DBSecurityGroupMessage,
    DescribeDBSnapshotAttributesResult,
    DBSnapshotMessage,
    DBSubnetGroupMessage,
    DescribeEngineDefaultClusterParametersResult,
    DescribeEngineDefaultParametersResult,
    EventCategoriesMessage,
    EventSubscriptionsMessage,
    EventsMessage,
    ExportTasksMessage,
    GlobalClustersMessage,
    InstallationMediaMessage,
    OptionGroupOptionsMessage,
    OptionGroups,
    OrderableDBInstanceOptionsMessage,
    PendingMaintenanceActionsMessage,
    ReservedDBInstanceMessage,
    ReservedDBInstancesOfferingMessage,
    SourceRegionMessage,
    DescribeValidDBInstanceModificationsResult,
    DownloadDBLogFilePortionDetails,
    FailoverDBClusterResult,
    FailoverGlobalClusterResult,
    TagListMessage,
    ModifyCertificatesResult,
    DBClusterCapacityInfo,
    ModifyDBClusterResult,
    DBClusterParameterGroupNameMessage,
    ModifyDBClusterSnapshotAttributeResult,
    ModifyDBInstanceResult,
    DBParameterGroupNameMessage,
    ModifyDBProxyResponse,
    ModifyDBProxyEndpointResponse,
    ModifyDBProxyTargetGroupResponse,
    ModifyDBSnapshotResult,
    ModifyDBSnapshotAttributeResult,
    ModifyDBSubnetGroupResult,
    ModifyEventSubscriptionResult,
    ModifyGlobalClusterResult,
    ModifyOptionGroupResult,
    PromoteReadReplicaResult,
    PromoteReadReplicaDBClusterResult,
    PurchaseReservedDBInstancesOfferingResult,
    RebootDBClusterResult,
    RebootDBInstanceResult,
    RegisterDBProxyTargetsResponse,
    RemoveFromGlobalClusterResult,
    RemoveSourceIdentifierFromSubscriptionResult,
    RestoreDBClusterFromS3Result,
    RestoreDBClusterFromSnapshotResult,
    RestoreDBClusterToPointInTimeResult,
    RestoreDBInstanceFromDBSnapshotResult,
    RestoreDBInstanceFromS3Result,
    RestoreDBInstanceToPointInTimeResult,
    RevokeDBSecurityGroupIngressResult,
    StartActivityStreamResponse,
    StartDBClusterResult,
    StartDBInstanceResult,
    StartDBInstanceAutomatedBackupsReplicationResult,
    StopActivityStreamResponse,
    StopDBClusterResult,
    StopDBInstanceResult,
    StopDBInstanceAutomatedBackupsReplicationResult
} from "aws-sdk/clients/rds";
const schema = require("../apis/rds-2014-10-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.rds.ClusterInstance {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.rds.ClusterInstance>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.RDS()
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

    invokeAddSourceIdentifierToSubscription(partialParams: ToOptional<{
      [K in keyof AddSourceIdentifierToSubscriptionMessage]: (AddSourceIdentifierToSubscriptionMessage)[K]
    }>): Request<AddSourceIdentifierToSubscriptionResult, AWSError> {
        this.boot();
        return this.client.addSourceIdentifierToSubscription(
          this.ops["AddSourceIdentifierToSubscription"].apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage)[K]
    }>): Request<ApplyPendingMaintenanceActionResult, AWSError> {
        this.boot();
        return this.client.applyPendingMaintenanceAction(
          this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeAuthorizeDBSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeDBSecurityGroupIngressMessage]: (AuthorizeDBSecurityGroupIngressMessage)[K]
    }>): Request<AuthorizeDBSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.authorizeDBSecurityGroupIngress(
          this.ops["AuthorizeDBSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeBacktrackDBCluster(partialParams: ToOptional<{
      [K in keyof BacktrackDBClusterMessage]: (BacktrackDBClusterMessage)[K]
    }>): Request<DBClusterBacktrack, AWSError> {
        this.boot();
        return this.client.backtrackDBCluster(
          this.ops["BacktrackDBCluster"].apply(partialParams)
        );
    }

    invokeCancelExportTask(partialParams: ToOptional<{
      [K in keyof CancelExportTaskMessage]: (CancelExportTaskMessage)[K]
    }>): Request<ExportTask, AWSError> {
        this.boot();
        return this.client.cancelExportTask(
          this.ops["CancelExportTask"].apply(partialParams)
        );
    }

    invokeCopyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBClusterParameterGroupMessage]: (CopyDBClusterParameterGroupMessage)[K]
    }>): Request<CopyDBClusterParameterGroupResult, AWSError> {
        this.boot();
        return this.client.copyDBClusterParameterGroup(
          this.ops["CopyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCopyDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBClusterSnapshotMessage]: (CopyDBClusterSnapshotMessage)[K]
    }>): Request<CopyDBClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.copyDBClusterSnapshot(
          this.ops["CopyDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCopyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBParameterGroupMessage]: (CopyDBParameterGroupMessage)[K]
    }>): Request<CopyDBParameterGroupResult, AWSError> {
        this.boot();
        return this.client.copyDBParameterGroup(
          this.ops["CopyDBParameterGroup"].apply(partialParams)
        );
    }

    invokeCopyDBSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBSnapshotMessage]: (CopyDBSnapshotMessage)[K]
    }>): Request<CopyDBSnapshotResult, AWSError> {
        this.boot();
        return this.client.copyDBSnapshot(
          this.ops["CopyDBSnapshot"].apply(partialParams)
        );
    }

    invokeCopyOptionGroup(partialParams: ToOptional<{
      [K in keyof CopyOptionGroupMessage]: (CopyOptionGroupMessage)[K]
    }>): Request<CopyOptionGroupResult, AWSError> {
        this.boot();
        return this.client.copyOptionGroup(
          this.ops["CopyOptionGroup"].apply(partialParams)
        );
    }

    invokeCreateCustomAvailabilityZone(partialParams: ToOptional<{
      [K in keyof CreateCustomAvailabilityZoneMessage]: (CreateCustomAvailabilityZoneMessage)[K]
    }>): Request<CreateCustomAvailabilityZoneResult, AWSError> {
        this.boot();
        return this.client.createCustomAvailabilityZone(
          this.ops["CreateCustomAvailabilityZone"].apply(partialParams)
        );
    }

    invokeCreateCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof CreateCustomDBEngineVersionMessage & keyof Omit<CreateCustomDBEngineVersionMessage, "Engine" | "EngineVersion">]: (CreateCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        this.boot();
        return this.client.createCustomDBEngineVersion(
          this.ops["CreateCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof Omit<CreateDBClusterMessage, "Engine">]: (CreateDBClusterMessage)[K]
    }>): Request<CreateDBClusterResult, AWSError> {
        this.boot();
        return this.client.createDBCluster(
          this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBClusterEndpointMessage]: (CreateDBClusterEndpointMessage)[K]
    }>): Request<DBClusterEndpoint, AWSError> {
        this.boot();
        return this.client.createDBClusterEndpoint(
          this.ops["CreateDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage]: (CreateDBClusterParameterGroupMessage)[K]
    }>): Request<CreateDBClusterParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createDBClusterParameterGroup(
          this.ops["CreateDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBClusterSnapshotMessage]: (CreateDBClusterSnapshotMessage)[K]
    }>): Request<CreateDBClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.createDBClusterSnapshot(
          this.ops["CreateDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof Omit<CreateDBInstanceMessage, "Engine">]: (CreateDBInstanceMessage)[K]
    }>): Request<CreateDBInstanceResult, AWSError> {
        this.boot();
        return this.client.createDBInstance(
          this.ops["CreateDBInstance"].apply(partialParams)
        );
    }

    invokeCreateDBInstanceReadReplica(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceReadReplicaMessage]: (CreateDBInstanceReadReplicaMessage)[K]
    }>): Request<CreateDBInstanceReadReplicaResult, AWSError> {
        this.boot();
        return this.client.createDBInstanceReadReplica(
          this.ops["CreateDBInstanceReadReplica"].apply(partialParams)
        );
    }

    invokeCreateDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBParameterGroupMessage]: (CreateDBParameterGroupMessage)[K]
    }>): Request<CreateDBParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createDBParameterGroup(
          this.ops["CreateDBParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBProxy(partialParams: ToOptional<{
      [K in keyof CreateDBProxyRequest]: (CreateDBProxyRequest)[K]
    }>): Request<CreateDBProxyResponse, AWSError> {
        this.boot();
        return this.client.createDBProxy(
          this.ops["CreateDBProxy"].apply(partialParams)
        );
    }

    invokeCreateDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBProxyEndpointRequest]: (CreateDBProxyEndpointRequest)[K]
    }>): Request<CreateDBProxyEndpointResponse, AWSError> {
        this.boot();
        return this.client.createDBProxyEndpoint(
          this.ops["CreateDBProxyEndpoint"].apply(partialParams)
        );
    }

    invokeCreateDBSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSecurityGroupMessage]: (CreateDBSecurityGroupMessage)[K]
    }>): Request<CreateDBSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createDBSecurityGroup(
          this.ops["CreateDBSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateDBSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBSnapshotMessage]: (CreateDBSnapshotMessage)[K]
    }>): Request<CreateDBSnapshotResult, AWSError> {
        this.boot();
        return this.client.createDBSnapshot(
          this.ops["CreateDBSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSubnetGroupMessage]: (CreateDBSubnetGroupMessage)[K]
    }>): Request<CreateDBSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.createDBSubnetGroup(
          this.ops["CreateDBSubnetGroup"].apply(partialParams)
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

    invokeCreateGlobalCluster(partialParams: ToOptional<{
      [K in keyof CreateGlobalClusterMessage]: (CreateGlobalClusterMessage)[K]
    }>): Request<CreateGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.createGlobalCluster(
          this.ops["CreateGlobalCluster"].apply(partialParams)
        );
    }

    invokeCreateOptionGroup(partialParams: ToOptional<{
      [K in keyof CreateOptionGroupMessage]: (CreateOptionGroupMessage)[K]
    }>): Request<CreateOptionGroupResult, AWSError> {
        this.boot();
        return this.client.createOptionGroup(
          this.ops["CreateOptionGroup"].apply(partialParams)
        );
    }

    invokeDeleteCustomAvailabilityZone(partialParams: ToOptional<{
      [K in keyof DeleteCustomAvailabilityZoneMessage]: (DeleteCustomAvailabilityZoneMessage)[K]
    }>): Request<DeleteCustomAvailabilityZoneResult, AWSError> {
        this.boot();
        return this.client.deleteCustomAvailabilityZone(
          this.ops["DeleteCustomAvailabilityZone"].apply(partialParams)
        );
    }

    invokeDeleteCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof DeleteCustomDBEngineVersionMessage & keyof Omit<DeleteCustomDBEngineVersionMessage, "Engine" | "EngineVersion">]: (DeleteCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        this.boot();
        return this.client.deleteCustomDBEngineVersion(
          this.ops["DeleteCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeDeleteDBCluster(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterMessage]: (DeleteDBClusterMessage)[K]
    }>): Request<DeleteDBClusterResult, AWSError> {
        this.boot();
        return this.client.deleteDBCluster(
          this.ops["DeleteDBCluster"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterEndpointMessage]: (DeleteDBClusterEndpointMessage)[K]
    }>): Request<DBClusterEndpoint, AWSError> {
        this.boot();
        return this.client.deleteDBClusterEndpoint(
          this.ops["DeleteDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterSnapshotMessage]: (DeleteDBClusterSnapshotMessage)[K]
    }>): Request<DeleteDBClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteDBClusterSnapshot(
          this.ops["DeleteDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDBInstance(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceMessage]: (DeleteDBInstanceMessage)[K]
    }>): Request<DeleteDBInstanceResult, AWSError> {
        this.boot();
        return this.client.deleteDBInstance(
          this.ops["DeleteDBInstance"].apply(partialParams)
        );
    }

    invokeDeleteDBInstanceAutomatedBackup(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceAutomatedBackupMessage]: (DeleteDBInstanceAutomatedBackupMessage)[K]
    }>): Request<DeleteDBInstanceAutomatedBackupResult, AWSError> {
        this.boot();
        return this.client.deleteDBInstanceAutomatedBackup(
          this.ops["DeleteDBInstanceAutomatedBackup"].apply(partialParams)
        );
    }

    invokeDeleteDBProxy(partialParams: ToOptional<{
      [K in keyof DeleteDBProxyRequest]: (DeleteDBProxyRequest)[K]
    }>): Request<DeleteDBProxyResponse, AWSError> {
        this.boot();
        return this.client.deleteDBProxy(
          this.ops["DeleteDBProxy"].apply(partialParams)
        );
    }

    invokeDeleteDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBProxyEndpointRequest]: (DeleteDBProxyEndpointRequest)[K]
    }>): Request<DeleteDBProxyEndpointResponse, AWSError> {
        this.boot();
        return this.client.deleteDBProxyEndpoint(
          this.ops["DeleteDBProxyEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteDBSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBSnapshotMessage]: (DeleteDBSnapshotMessage)[K]
    }>): Request<DeleteDBSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteDBSnapshot(
          this.ops["DeleteDBSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage)[K]
    }>): Request<DeleteEventSubscriptionResult, AWSError> {
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteGlobalCluster(partialParams: ToOptional<{
      [K in keyof DeleteGlobalClusterMessage]: (DeleteGlobalClusterMessage)[K]
    }>): Request<DeleteGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.deleteGlobalCluster(
          this.ops["DeleteGlobalCluster"].apply(partialParams)
        );
    }

    invokeDeleteInstallationMedia(partialParams: ToOptional<{
      [K in keyof DeleteInstallationMediaMessage]: (DeleteInstallationMediaMessage)[K]
    }>): Request<InstallationMedia, AWSError> {
        this.boot();
        return this.client.deleteInstallationMedia(
          this.ops["DeleteInstallationMedia"].apply(partialParams)
        );
    }

    invokeDeregisterDBProxyTargets(partialParams: ToOptional<{
      [K in keyof DeregisterDBProxyTargetsRequest]: (DeregisterDBProxyTargetsRequest)[K]
    }>): Request<DeregisterDBProxyTargetsResponse, AWSError> {
        this.boot();
        return this.client.deregisterDBProxyTargets(
          this.ops["DeregisterDBProxyTargets"].apply(partialParams)
        );
    }

    invokeDescribeAccountAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAccountAttributesMessage]: (DescribeAccountAttributesMessage)[K]
    }>): Request<AccountAttributesMessage, AWSError> {
        this.boot();
        return this.client.describeAccountAttributes(
          this.ops["DescribeAccountAttributes"].apply(partialParams)
        );
    }

    invokeDescribeCertificates(partialParams: ToOptional<{
      [K in keyof DescribeCertificatesMessage]: (DescribeCertificatesMessage)[K]
    }>): Request<CertificateMessage, AWSError> {
        this.boot();
        return this.client.describeCertificates(
          this.ops["DescribeCertificates"].apply(partialParams)
        );
    }

    invokeDescribeCustomAvailabilityZones(partialParams: ToOptional<{
      [K in keyof DescribeCustomAvailabilityZonesMessage]: (DescribeCustomAvailabilityZonesMessage)[K]
    }>): Request<CustomAvailabilityZoneMessage, AWSError> {
        this.boot();
        return this.client.describeCustomAvailabilityZones(
          this.ops["DescribeCustomAvailabilityZones"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterBacktracks(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterBacktracksMessage]: (DescribeDBClusterBacktracksMessage)[K]
    }>): Request<DBClusterBacktrackMessage, AWSError> {
        this.boot();
        return this.client.describeDBClusterBacktracks(
          this.ops["DescribeDBClusterBacktracks"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterEndpointsMessage]: (DescribeDBClusterEndpointsMessage)[K]
    }>): Request<DBClusterEndpointMessage, AWSError> {
        this.boot();
        return this.client.describeDBClusterEndpoints(
          this.ops["DescribeDBClusterEndpoints"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameterGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParameterGroupsMessage]: (DescribeDBClusterParameterGroupsMessage)[K]
    }>): Request<DBClusterParameterGroupsMessage, AWSError> {
        this.boot();
        return this.client.describeDBClusterParameterGroups(
          this.ops["DescribeDBClusterParameterGroups"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParametersMessage]: (DescribeDBClusterParametersMessage)[K]
    }>): Request<DBClusterParameterGroupDetails, AWSError> {
        this.boot();
        return this.client.describeDBClusterParameters(
          this.ops["DescribeDBClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotAttributesMessage]: (DescribeDBClusterSnapshotAttributesMessage)[K]
    }>): Request<DescribeDBClusterSnapshotAttributesResult, AWSError> {
        this.boot();
        return this.client.describeDBClusterSnapshotAttributes(
          this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotsMessage]: (DescribeDBClusterSnapshotsMessage)[K]
    }>): Request<DBClusterSnapshotMessage, AWSError> {
        this.boot();
        return this.client.describeDBClusterSnapshots(
          this.ops["DescribeDBClusterSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeDBClusters(partialParams: ToOptional<{
      [K in keyof DescribeDBClustersMessage]: (DescribeDBClustersMessage)[K]
    }>): Request<DBClusterMessage, AWSError> {
        this.boot();
        return this.client.describeDBClusters(
          this.ops["DescribeDBClusters"].apply(partialParams)
        );
    }

    invokeDescribeDBEngineVersions(partialParams: ToOptional<{
      [K in keyof DescribeDBEngineVersionsMessage]: (DescribeDBEngineVersionsMessage)[K]
    }>): Request<DBEngineVersionMessage, AWSError> {
        this.boot();
        return this.client.describeDBEngineVersions(
          this.ops["DescribeDBEngineVersions"].apply(partialParams)
        );
    }

    invokeDescribeDBInstanceAutomatedBackups(partialParams: ToOptional<{
      [K in keyof DescribeDBInstanceAutomatedBackupsMessage]: (DescribeDBInstanceAutomatedBackupsMessage)[K]
    }>): Request<DBInstanceAutomatedBackupMessage, AWSError> {
        this.boot();
        return this.client.describeDBInstanceAutomatedBackups(
          this.ops["DescribeDBInstanceAutomatedBackups"].apply(partialParams)
        );
    }

    invokeDescribeDBInstances(partialParams: ToOptional<{
      [K in keyof DescribeDBInstancesMessage]: (DescribeDBInstancesMessage)[K]
    }>): Request<DBInstanceMessage, AWSError> {
        this.boot();
        return this.client.describeDBInstances(
          this.ops["DescribeDBInstances"].apply(partialParams)
        );
    }

    invokeDescribeDBLogFiles(partialParams: ToOptional<{
      [K in keyof DescribeDBLogFilesMessage]: (DescribeDBLogFilesMessage)[K]
    }>): Request<DescribeDBLogFilesResponse, AWSError> {
        this.boot();
        return this.client.describeDBLogFiles(
          this.ops["DescribeDBLogFiles"].apply(partialParams)
        );
    }

    invokeDescribeDBParameterGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBParameterGroupsMessage]: (DescribeDBParameterGroupsMessage)[K]
    }>): Request<DBParameterGroupsMessage, AWSError> {
        this.boot();
        return this.client.describeDBParameterGroups(
          this.ops["DescribeDBParameterGroups"].apply(partialParams)
        );
    }

    invokeDescribeDBParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBParametersMessage]: (DescribeDBParametersMessage)[K]
    }>): Request<DBParameterGroupDetails, AWSError> {
        this.boot();
        return this.client.describeDBParameters(
          this.ops["DescribeDBParameters"].apply(partialParams)
        );
    }

    invokeDescribeDBProxies(partialParams: ToOptional<{
      [K in keyof DescribeDBProxiesRequest]: (DescribeDBProxiesRequest)[K]
    }>): Request<DescribeDBProxiesResponse, AWSError> {
        this.boot();
        return this.client.describeDBProxies(
          this.ops["DescribeDBProxies"].apply(partialParams)
        );
    }

    invokeDescribeDBProxyEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyEndpointsRequest]: (DescribeDBProxyEndpointsRequest)[K]
    }>): Request<DescribeDBProxyEndpointsResponse, AWSError> {
        this.boot();
        return this.client.describeDBProxyEndpoints(
          this.ops["DescribeDBProxyEndpoints"].apply(partialParams)
        );
    }

    invokeDescribeDBProxyTargetGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyTargetGroupsRequest]: (DescribeDBProxyTargetGroupsRequest)[K]
    }>): Request<DescribeDBProxyTargetGroupsResponse, AWSError> {
        this.boot();
        return this.client.describeDBProxyTargetGroups(
          this.ops["DescribeDBProxyTargetGroups"].apply(partialParams)
        );
    }

    invokeDescribeDBProxyTargets(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyTargetsRequest]: (DescribeDBProxyTargetsRequest)[K]
    }>): Request<DescribeDBProxyTargetsResponse, AWSError> {
        this.boot();
        return this.client.describeDBProxyTargets(
          this.ops["DescribeDBProxyTargets"].apply(partialParams)
        );
    }

    invokeDescribeDBSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBSecurityGroupsMessage]: (DescribeDBSecurityGroupsMessage)[K]
    }>): Request<DBSecurityGroupMessage, AWSError> {
        this.boot();
        return this.client.describeDBSecurityGroups(
          this.ops["DescribeDBSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeDBSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBSnapshotAttributesMessage]: (DescribeDBSnapshotAttributesMessage)[K]
    }>): Request<DescribeDBSnapshotAttributesResult, AWSError> {
        this.boot();
        return this.client.describeDBSnapshotAttributes(
          this.ops["DescribeDBSnapshotAttributes"].apply(partialParams)
        );
    }

    invokeDescribeDBSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeDBSnapshotsMessage]: (DescribeDBSnapshotsMessage)[K]
    }>): Request<DBSnapshotMessage, AWSError> {
        this.boot();
        return this.client.describeDBSnapshots(
          this.ops["DescribeDBSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeDBSubnetGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBSubnetGroupsMessage]: (DescribeDBSubnetGroupsMessage)[K]
    }>): Request<DBSubnetGroupMessage, AWSError> {
        this.boot();
        return this.client.describeDBSubnetGroups(
          this.ops["DescribeDBSubnetGroups"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultClusterParametersMessage]: (DescribeEngineDefaultClusterParametersMessage)[K]
    }>): Request<DescribeEngineDefaultClusterParametersResult, AWSError> {
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(
          this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage)[K]
    }>): Request<DescribeEngineDefaultParametersResult, AWSError> {
        this.boot();
        return this.client.describeEngineDefaultParameters(
          this.ops["DescribeEngineDefaultParameters"].apply(partialParams)
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

    invokeDescribeExportTasks(partialParams: ToOptional<{
      [K in keyof DescribeExportTasksMessage]: (DescribeExportTasksMessage)[K]
    }>): Request<ExportTasksMessage, AWSError> {
        this.boot();
        return this.client.describeExportTasks(
          this.ops["DescribeExportTasks"].apply(partialParams)
        );
    }

    invokeDescribeGlobalClusters(partialParams: ToOptional<{
      [K in keyof DescribeGlobalClustersMessage]: (DescribeGlobalClustersMessage)[K]
    }>): Request<GlobalClustersMessage, AWSError> {
        this.boot();
        return this.client.describeGlobalClusters(
          this.ops["DescribeGlobalClusters"].apply(partialParams)
        );
    }

    invokeDescribeInstallationMedia(partialParams: ToOptional<{
      [K in keyof DescribeInstallationMediaMessage]: (DescribeInstallationMediaMessage)[K]
    }>): Request<InstallationMediaMessage, AWSError> {
        this.boot();
        return this.client.describeInstallationMedia(
          this.ops["DescribeInstallationMedia"].apply(partialParams)
        );
    }

    invokeDescribeOptionGroupOptions(partialParams: ToOptional<{
      [K in keyof DescribeOptionGroupOptionsMessage]: (DescribeOptionGroupOptionsMessage)[K]
    }>): Request<OptionGroupOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeOptionGroupOptions(
          this.ops["DescribeOptionGroupOptions"].apply(partialParams)
        );
    }

    invokeDescribeOptionGroups(partialParams: ToOptional<{
      [K in keyof DescribeOptionGroupsMessage]: (DescribeOptionGroupsMessage)[K]
    }>): Request<OptionGroups, AWSError> {
        this.boot();
        return this.client.describeOptionGroups(
          this.ops["DescribeOptionGroups"].apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof Omit<DescribeOrderableDBInstanceOptionsMessage, "Engine">]: (DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): Request<OrderableDBInstanceOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(
          this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams)
        );
    }

    invokeDescribePendingMaintenanceActions(partialParams: ToOptional<{
      [K in keyof DescribePendingMaintenanceActionsMessage]: (DescribePendingMaintenanceActionsMessage)[K]
    }>): Request<PendingMaintenanceActionsMessage, AWSError> {
        this.boot();
        return this.client.describePendingMaintenanceActions(
          this.ops["DescribePendingMaintenanceActions"].apply(partialParams)
        );
    }

    invokeDescribeReservedDBInstances(partialParams: ToOptional<{
      [K in keyof DescribeReservedDBInstancesMessage]: (DescribeReservedDBInstancesMessage)[K]
    }>): Request<ReservedDBInstanceMessage, AWSError> {
        this.boot();
        return this.client.describeReservedDBInstances(
          this.ops["DescribeReservedDBInstances"].apply(partialParams)
        );
    }

    invokeDescribeReservedDBInstancesOfferings(partialParams: ToOptional<{
      [K in keyof DescribeReservedDBInstancesOfferingsMessage]: (DescribeReservedDBInstancesOfferingsMessage)[K]
    }>): Request<ReservedDBInstancesOfferingMessage, AWSError> {
        this.boot();
        return this.client.describeReservedDBInstancesOfferings(
          this.ops["DescribeReservedDBInstancesOfferings"].apply(partialParams)
        );
    }

    invokeDescribeSourceRegions(partialParams: ToOptional<{
      [K in keyof DescribeSourceRegionsMessage]: (DescribeSourceRegionsMessage)[K]
    }>): Request<SourceRegionMessage, AWSError> {
        this.boot();
        return this.client.describeSourceRegions(
          this.ops["DescribeSourceRegions"].apply(partialParams)
        );
    }

    invokeDescribeValidDBInstanceModifications(partialParams: ToOptional<{
      [K in keyof DescribeValidDBInstanceModificationsMessage]: (DescribeValidDBInstanceModificationsMessage)[K]
    }>): Request<DescribeValidDBInstanceModificationsResult, AWSError> {
        this.boot();
        return this.client.describeValidDBInstanceModifications(
          this.ops["DescribeValidDBInstanceModifications"].apply(partialParams)
        );
    }

    invokeDownloadDBLogFilePortion(partialParams: ToOptional<{
      [K in keyof DownloadDBLogFilePortionMessage]: (DownloadDBLogFilePortionMessage)[K]
    }>): Request<DownloadDBLogFilePortionDetails, AWSError> {
        this.boot();
        return this.client.downloadDBLogFilePortion(
          this.ops["DownloadDBLogFilePortion"].apply(partialParams)
        );
    }

    invokeFailoverDBCluster(partialParams: ToOptional<{
      [K in keyof FailoverDBClusterMessage]: (FailoverDBClusterMessage)[K]
    }>): Request<FailoverDBClusterResult, AWSError> {
        this.boot();
        return this.client.failoverDBCluster(
          this.ops["FailoverDBCluster"].apply(partialParams)
        );
    }

    invokeFailoverGlobalCluster(partialParams: ToOptional<{
      [K in keyof FailoverGlobalClusterMessage]: (FailoverGlobalClusterMessage)[K]
    }>): Request<FailoverGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.failoverGlobalCluster(
          this.ops["FailoverGlobalCluster"].apply(partialParams)
        );
    }

    invokeImportInstallationMedia(partialParams: ToOptional<{
      [K in keyof ImportInstallationMediaMessage & keyof Omit<ImportInstallationMediaMessage, "Engine" | "EngineVersion">]: (ImportInstallationMediaMessage)[K]
    }>): Request<InstallationMedia, AWSError> {
        this.boot();
        return this.client.importInstallationMedia(
          this.ops["ImportInstallationMedia"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyCertificates(partialParams: ToOptional<{
      [K in keyof ModifyCertificatesMessage]: (ModifyCertificatesMessage)[K]
    }>): Request<ModifyCertificatesResult, AWSError> {
        this.boot();
        return this.client.modifyCertificates(
          this.ops["ModifyCertificates"].apply(partialParams)
        );
    }

    invokeModifyCurrentDBClusterCapacity(partialParams: ToOptional<{
      [K in keyof ModifyCurrentDBClusterCapacityMessage]: (ModifyCurrentDBClusterCapacityMessage)[K]
    }>): Request<DBClusterCapacityInfo, AWSError> {
        this.boot();
        return this.client.modifyCurrentDBClusterCapacity(
          this.ops["ModifyCurrentDBClusterCapacity"].apply(partialParams)
        );
    }

    invokeModifyCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof ModifyCustomDBEngineVersionMessage & keyof Omit<ModifyCustomDBEngineVersionMessage, "Engine" | "EngineVersion">]: (ModifyCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        this.boot();
        return this.client.modifyCustomDBEngineVersion(
          this.ops["ModifyCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeModifyDBCluster(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterMessage]: (ModifyDBClusterMessage)[K]
    }>): Request<ModifyDBClusterResult, AWSError> {
        this.boot();
        return this.client.modifyDBCluster(
          this.ops["ModifyDBCluster"].apply(partialParams)
        );
    }

    invokeModifyDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterEndpointMessage]: (ModifyDBClusterEndpointMessage)[K]
    }>): Request<DBClusterEndpoint, AWSError> {
        this.boot();
        return this.client.modifyDBClusterEndpoint(
          this.ops["ModifyDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterParameterGroupMessage]: (ModifyDBClusterParameterGroupMessage)[K]
    }>): Request<DBClusterParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.modifyDBClusterParameterGroup(
          this.ops["ModifyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBClusterSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterSnapshotAttributeMessage]: (ModifyDBClusterSnapshotAttributeMessage)[K]
    }>): Request<ModifyDBClusterSnapshotAttributeResult, AWSError> {
        this.boot();
        return this.client.modifyDBClusterSnapshotAttribute(
          this.ops["ModifyDBClusterSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifyDBInstance(partialParams: ToOptional<{
      [K in keyof ModifyDBInstanceMessage]: (ModifyDBInstanceMessage)[K]
    }>): Request<ModifyDBInstanceResult, AWSError> {
        this.boot();
        return this.client.modifyDBInstance(
          this.ops["ModifyDBInstance"].apply(partialParams)
        );
    }

    invokeModifyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBParameterGroupMessage]: (ModifyDBParameterGroupMessage)[K]
    }>): Request<DBParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.modifyDBParameterGroup(
          this.ops["ModifyDBParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBProxy(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyRequest]: (ModifyDBProxyRequest)[K]
    }>): Request<ModifyDBProxyResponse, AWSError> {
        this.boot();
        return this.client.modifyDBProxy(
          this.ops["ModifyDBProxy"].apply(partialParams)
        );
    }

    invokeModifyDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyEndpointRequest]: (ModifyDBProxyEndpointRequest)[K]
    }>): Request<ModifyDBProxyEndpointResponse, AWSError> {
        this.boot();
        return this.client.modifyDBProxyEndpoint(
          this.ops["ModifyDBProxyEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDBProxyTargetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyTargetGroupRequest]: (ModifyDBProxyTargetGroupRequest)[K]
    }>): Request<ModifyDBProxyTargetGroupResponse, AWSError> {
        this.boot();
        return this.client.modifyDBProxyTargetGroup(
          this.ops["ModifyDBProxyTargetGroup"].apply(partialParams)
        );
    }

    invokeModifyDBSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyDBSnapshotMessage]: (ModifyDBSnapshotMessage)[K]
    }>): Request<ModifyDBSnapshotResult, AWSError> {
        this.boot();
        return this.client.modifyDBSnapshot(
          this.ops["ModifyDBSnapshot"].apply(partialParams)
        );
    }

    invokeModifyDBSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBSnapshotAttributeMessage]: (ModifyDBSnapshotAttributeMessage)[K]
    }>): Request<ModifyDBSnapshotAttributeResult, AWSError> {
        this.boot();
        return this.client.modifyDBSnapshotAttribute(
          this.ops["ModifyDBSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifyDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBSubnetGroupMessage]: (ModifyDBSubnetGroupMessage)[K]
    }>): Request<ModifyDBSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.modifyDBSubnetGroup(
          this.ops["ModifyDBSubnetGroup"].apply(partialParams)
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

    invokeModifyGlobalCluster(partialParams: ToOptional<{
      [K in keyof ModifyGlobalClusterMessage]: (ModifyGlobalClusterMessage)[K]
    }>): Request<ModifyGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.modifyGlobalCluster(
          this.ops["ModifyGlobalCluster"].apply(partialParams)
        );
    }

    invokeModifyOptionGroup(partialParams: ToOptional<{
      [K in keyof ModifyOptionGroupMessage]: (ModifyOptionGroupMessage)[K]
    }>): Request<ModifyOptionGroupResult, AWSError> {
        this.boot();
        return this.client.modifyOptionGroup(
          this.ops["ModifyOptionGroup"].apply(partialParams)
        );
    }

    invokePromoteReadReplica(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaMessage]: (PromoteReadReplicaMessage)[K]
    }>): Request<PromoteReadReplicaResult, AWSError> {
        this.boot();
        return this.client.promoteReadReplica(
          this.ops["PromoteReadReplica"].apply(partialParams)
        );
    }

    invokePromoteReadReplicaDBCluster(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaDBClusterMessage]: (PromoteReadReplicaDBClusterMessage)[K]
    }>): Request<PromoteReadReplicaDBClusterResult, AWSError> {
        this.boot();
        return this.client.promoteReadReplicaDBCluster(
          this.ops["PromoteReadReplicaDBCluster"].apply(partialParams)
        );
    }

    invokePurchaseReservedDBInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedDBInstancesOfferingMessage]: (PurchaseReservedDBInstancesOfferingMessage)[K]
    }>): Request<PurchaseReservedDBInstancesOfferingResult, AWSError> {
        this.boot();
        return this.client.purchaseReservedDBInstancesOffering(
          this.ops["PurchaseReservedDBInstancesOffering"].apply(partialParams)
        );
    }

    invokeRebootDBCluster(partialParams: ToOptional<{
      [K in keyof RebootDBClusterMessage]: (RebootDBClusterMessage)[K]
    }>): Request<RebootDBClusterResult, AWSError> {
        this.boot();
        return this.client.rebootDBCluster(
          this.ops["RebootDBCluster"].apply(partialParams)
        );
    }

    invokeRebootDBInstance(partialParams: ToOptional<{
      [K in keyof RebootDBInstanceMessage]: (RebootDBInstanceMessage)[K]
    }>): Request<RebootDBInstanceResult, AWSError> {
        this.boot();
        return this.client.rebootDBInstance(
          this.ops["RebootDBInstance"].apply(partialParams)
        );
    }

    invokeRegisterDBProxyTargets(partialParams: ToOptional<{
      [K in keyof RegisterDBProxyTargetsRequest]: (RegisterDBProxyTargetsRequest)[K]
    }>): Request<RegisterDBProxyTargetsResponse, AWSError> {
        this.boot();
        return this.client.registerDBProxyTargets(
          this.ops["RegisterDBProxyTargets"].apply(partialParams)
        );
    }

    invokeRemoveFromGlobalCluster(partialParams: ToOptional<{
      [K in keyof RemoveFromGlobalClusterMessage]: (RemoveFromGlobalClusterMessage)[K]
    }>): Request<RemoveFromGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.removeFromGlobalCluster(
          this.ops["RemoveFromGlobalCluster"].apply(partialParams)
        );
    }

    invokeRemoveSourceIdentifierFromSubscription(partialParams: ToOptional<{
      [K in keyof RemoveSourceIdentifierFromSubscriptionMessage]: (RemoveSourceIdentifierFromSubscriptionMessage)[K]
    }>): Request<RemoveSourceIdentifierFromSubscriptionResult, AWSError> {
        this.boot();
        return this.client.removeSourceIdentifierFromSubscription(
          this.ops["RemoveSourceIdentifierFromSubscription"].apply(partialParams)
        );
    }

    invokeResetDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBClusterParameterGroupMessage]: (ResetDBClusterParameterGroupMessage)[K]
    }>): Request<DBClusterParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.resetDBClusterParameterGroup(
          this.ops["ResetDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeResetDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBParameterGroupMessage]: (ResetDBParameterGroupMessage)[K]
    }>): Request<DBParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.resetDBParameterGroup(
          this.ops["ResetDBParameterGroup"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromS3Message & keyof Omit<RestoreDBClusterFromS3Message, "Engine">]: (RestoreDBClusterFromS3Message)[K]
    }>): Request<RestoreDBClusterFromS3Result, AWSError> {
        this.boot();
        return this.client.restoreDBClusterFromS3(
          this.ops["RestoreDBClusterFromS3"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof Omit<RestoreDBClusterFromSnapshotMessage, "Engine">]: (RestoreDBClusterFromSnapshotMessage)[K]
    }>): Request<RestoreDBClusterFromSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(
          this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterToPointInTimeMessage]: (RestoreDBClusterToPointInTimeMessage)[K]
    }>): Request<RestoreDBClusterToPointInTimeResult, AWSError> {
        this.boot();
        return this.client.restoreDBClusterToPointInTime(
          this.ops["RestoreDBClusterToPointInTime"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromDBSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromDBSnapshotMessage]: (RestoreDBInstanceFromDBSnapshotMessage)[K]
    }>): Request<RestoreDBInstanceFromDBSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreDBInstanceFromDBSnapshot(
          this.ops["RestoreDBInstanceFromDBSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromS3Message & keyof Omit<RestoreDBInstanceFromS3Message, "Engine">]: (RestoreDBInstanceFromS3Message)[K]
    }>): Request<RestoreDBInstanceFromS3Result, AWSError> {
        this.boot();
        return this.client.restoreDBInstanceFromS3(
          this.ops["RestoreDBInstanceFromS3"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceToPointInTimeMessage]: (RestoreDBInstanceToPointInTimeMessage)[K]
    }>): Request<RestoreDBInstanceToPointInTimeResult, AWSError> {
        this.boot();
        return this.client.restoreDBInstanceToPointInTime(
          this.ops["RestoreDBInstanceToPointInTime"].apply(partialParams)
        );
    }

    invokeRevokeDBSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeDBSecurityGroupIngressMessage]: (RevokeDBSecurityGroupIngressMessage)[K]
    }>): Request<RevokeDBSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.revokeDBSecurityGroupIngress(
          this.ops["RevokeDBSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeStartActivityStream(partialParams: ToOptional<{
      [K in keyof StartActivityStreamRequest & keyof Omit<StartActivityStreamRequest, "KmsKeyId">]: (StartActivityStreamRequest)[K]
    }>): Request<StartActivityStreamResponse, AWSError> {
        this.boot();
        return this.client.startActivityStream(
          this.ops["StartActivityStream"].apply(partialParams)
        );
    }

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage]: (StartDBClusterMessage)[K]
    }>): Request<StartDBClusterResult, AWSError> {
        this.boot();
        return this.client.startDBCluster(
          this.ops["StartDBCluster"].apply(partialParams)
        );
    }

    invokeStartDBInstance(partialParams: ToOptional<{
      [K in keyof StartDBInstanceMessage]: (StartDBInstanceMessage)[K]
    }>): Request<StartDBInstanceResult, AWSError> {
        this.boot();
        return this.client.startDBInstance(
          this.ops["StartDBInstance"].apply(partialParams)
        );
    }

    invokeStartDBInstanceAutomatedBackupsReplication(partialParams: ToOptional<{
      [K in keyof StartDBInstanceAutomatedBackupsReplicationMessage]: (StartDBInstanceAutomatedBackupsReplicationMessage)[K]
    }>): Request<StartDBInstanceAutomatedBackupsReplicationResult, AWSError> {
        this.boot();
        return this.client.startDBInstanceAutomatedBackupsReplication(
          this.ops["StartDBInstanceAutomatedBackupsReplication"].apply(partialParams)
        );
    }

    invokeStartExportTask(partialParams: ToOptional<{
      [K in keyof StartExportTaskMessage & keyof Omit<StartExportTaskMessage, "KmsKeyId">]: (StartExportTaskMessage)[K]
    }>): Request<ExportTask, AWSError> {
        this.boot();
        return this.client.startExportTask(
          this.ops["StartExportTask"].apply(partialParams)
        );
    }

    invokeStopActivityStream(partialParams: ToOptional<{
      [K in keyof StopActivityStreamRequest]: (StopActivityStreamRequest)[K]
    }>): Request<StopActivityStreamResponse, AWSError> {
        this.boot();
        return this.client.stopActivityStream(
          this.ops["StopActivityStream"].apply(partialParams)
        );
    }

    invokeStopDBCluster(partialParams: ToOptional<{
      [K in keyof StopDBClusterMessage]: (StopDBClusterMessage)[K]
    }>): Request<StopDBClusterResult, AWSError> {
        this.boot();
        return this.client.stopDBCluster(
          this.ops["StopDBCluster"].apply(partialParams)
        );
    }

    invokeStopDBInstance(partialParams: ToOptional<{
      [K in keyof StopDBInstanceMessage]: (StopDBInstanceMessage)[K]
    }>): Request<StopDBInstanceResult, AWSError> {
        this.boot();
        return this.client.stopDBInstance(
          this.ops["StopDBInstance"].apply(partialParams)
        );
    }

    invokeStopDBInstanceAutomatedBackupsReplication(partialParams: ToOptional<{
      [K in keyof StopDBInstanceAutomatedBackupsReplicationMessage]: (StopDBInstanceAutomatedBackupsReplicationMessage)[K]
    }>): Request<StopDBInstanceAutomatedBackupsReplicationResult, AWSError> {
        this.boot();
        return this.client.stopDBInstanceAutomatedBackupsReplication(
          this.ops["StopDBInstanceAutomatedBackupsReplication"].apply(partialParams)
        );
    }
}