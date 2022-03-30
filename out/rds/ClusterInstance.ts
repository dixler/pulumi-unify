
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddRoleToDBClusterMessage,
    AddRoleToDBInstanceMessage,
    AddSourceIdentifierToSubscriptionMessage,
    AddTagsToResourceMessage,
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
    CreateOptionGroupMessage,
    DeleteCustomAvailabilityZoneMessage,
    DeleteCustomDBEngineVersionMessage,
    DeleteDBClusterMessage,
    DeleteDBClusterEndpointMessage,
    DeleteDBClusterParameterGroupMessage,
    DeleteDBClusterSnapshotMessage,
    DeleteDBInstanceMessage,
    DeleteDBParameterGroupMessage,
    DeleteDBProxyRequest,
    DeleteDBProxyEndpointRequest,
    DeleteDBSecurityGroupMessage,
    DeleteDBSnapshotMessage,
    DeleteDBSubnetGroupMessage,
    DeleteEventSubscriptionMessage,
    DeleteGlobalClusterMessage,
    DeleteInstallationMediaMessage,
    DeleteOptionGroupMessage,
    DeregisterDBProxyTargetsRequest,
    DescribeDBClusterBacktracksMessage,
    DescribeDBClusterParametersMessage,
    DescribeDBClusterSnapshotAttributesMessage,
    DescribeDBLogFilesMessage,
    DescribeDBParametersMessage,
    DescribeDBProxyTargetGroupsRequest,
    DescribeDBProxyTargetsRequest,
    DescribeDBSnapshotAttributesMessage,
    DescribeEngineDefaultClusterParametersMessage,
    DescribeEngineDefaultParametersMessage,
    DescribeOptionGroupOptionsMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    DescribeValidDBInstanceModificationsMessage,
    DownloadDBLogFilePortionMessage,
    FailoverDBClusterMessage,
    FailoverGlobalClusterMessage,
    ImportInstallationMediaMessage,
    ListTagsForResourceMessage,
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
    ModifyOptionGroupMessage,
    PromoteReadReplicaMessage,
    PromoteReadReplicaDBClusterMessage,
    PurchaseReservedDBInstancesOfferingMessage,
    RebootDBClusterMessage,
    RebootDBInstanceMessage,
    RegisterDBProxyTargetsRequest,
    RemoveRoleFromDBClusterMessage,
    RemoveRoleFromDBInstanceMessage,
    RemoveSourceIdentifierFromSubscriptionMessage,
    RemoveTagsFromResourceMessage,
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
    CreateOptionGroupResult,
    DeleteCustomAvailabilityZoneResult,
    DeleteDBClusterResult,
    DeleteDBClusterSnapshotResult,
    DeleteDBInstanceResult,
    DeleteDBProxyResponse,
    DeleteDBProxyEndpointResponse,
    DeleteDBSnapshotResult,
    DeleteEventSubscriptionResult,
    DeleteGlobalClusterResult,
    InstallationMedia,
    DeregisterDBProxyTargetsResponse,
    DBClusterBacktrackMessage,
    DBClusterParameterGroupDetails,
    DescribeDBClusterSnapshotAttributesResult,
    DescribeDBLogFilesResponse,
    DBParameterGroupDetails,
    DescribeDBProxyTargetGroupsResponse,
    DescribeDBProxyTargetsResponse,
    DescribeDBSnapshotAttributesResult,
    DescribeEngineDefaultClusterParametersResult,
    DescribeEngineDefaultParametersResult,
    OptionGroupOptionsMessage,
    OrderableDBInstanceOptionsMessage,
    DescribeValidDBInstanceModificationsResult,
    DownloadDBLogFilePortionDetails,
    FailoverDBClusterResult,
    FailoverGlobalClusterResult,
    TagListMessage,
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
    ModifyOptionGroupResult,
    PromoteReadReplicaResult,
    PromoteReadReplicaDBClusterResult,
    PurchaseReservedDBInstancesOfferingResult,
    RebootDBClusterResult,
    RebootDBInstanceResult,
    RegisterDBProxyTargetsResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.rds.ClusterInstance {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.rds.ClusterInstance>) {
        super(...args)
        this.client = new awssdk.RDS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/rds-2014-10-31.normal.json"), this.client)
    }

    invokeAddRoleToDBCluster(partialParams: ToOptional<{
      [K in keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage]: (AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage)[K]
    }>): void {
        return this.client.addRoleToDBCluster(
            this.ops["AddRoleToDBCluster"].apply(partialParams)
        );
    }

    invokeAddRoleToDBInstance(partialParams: ToOptional<{
      [K in keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage]: (AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage)[K]
    }>): void {
        return this.client.addRoleToDBInstance(
            this.ops["AddRoleToDBInstance"].apply(partialParams)
        );
    }

    invokeAddSourceIdentifierToSubscription(partialParams: ToOptional<{
      [K in keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage]: (AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage)[K]
    }>): AddSourceIdentifierToSubscriptionResult {
        return this.client.addSourceIdentifierToSubscription(
            this.ops["AddSourceIdentifierToSubscription"].apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): void {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): ApplyPendingMaintenanceActionResult {
        return this.client.applyPendingMaintenanceAction(
            this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeAuthorizeDBSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage]: (AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage)[K]
    }>): AuthorizeDBSecurityGroupIngressResult {
        return this.client.authorizeDBSecurityGroupIngress(
            this.ops["AuthorizeDBSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeBacktrackDBCluster(partialParams: ToOptional<{
      [K in keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage]: (BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage)[K]
    }>): DBClusterBacktrack {
        return this.client.backtrackDBCluster(
            this.ops["BacktrackDBCluster"].apply(partialParams)
        );
    }

    invokeCancelExportTask(partialParams: ToOptional<{
      [K in keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage]: (CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage)[K]
    }>): ExportTask {
        return this.client.cancelExportTask(
            this.ops["CancelExportTask"].apply(partialParams)
        );
    }

    invokeCopyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage]: (CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage)[K]
    }>): CopyDBClusterParameterGroupResult {
        return this.client.copyDBClusterParameterGroup(
            this.ops["CopyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCopyDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage]: (CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage)[K]
    }>): CopyDBClusterSnapshotResult {
        return this.client.copyDBClusterSnapshot(
            this.ops["CopyDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCopyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage]: (CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage)[K]
    }>): CopyDBParameterGroupResult {
        return this.client.copyDBParameterGroup(
            this.ops["CopyDBParameterGroup"].apply(partialParams)
        );
    }

    invokeCopyDBSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage]: (CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage)[K]
    }>): CopyDBSnapshotResult {
        return this.client.copyDBSnapshot(
            this.ops["CopyDBSnapshot"].apply(partialParams)
        );
    }

    invokeCopyOptionGroup(partialParams: ToOptional<{
      [K in keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage]: (CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage)[K]
    }>): CopyOptionGroupResult {
        return this.client.copyOptionGroup(
            this.ops["CopyOptionGroup"].apply(partialParams)
        );
    }

    invokeCreateCustomAvailabilityZone(partialParams: ToOptional<{
      [K in keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage]: (CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage)[K]
    }>): CreateCustomAvailabilityZoneResult {
        return this.client.createCustomAvailabilityZone(
            this.ops["CreateCustomAvailabilityZone"].apply(partialParams)
        );
    }

    invokeCreateCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage]: (CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage)[K]
    }>): DBEngineVersion {
        return this.client.createCustomDBEngineVersion(
            this.ops["CreateCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage]: (CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage)[K]
    }>): CreateDBClusterResult {
        return this.client.createDBCluster(
            this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage]: (CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage)[K]
    }>): DBClusterEndpoint {
        return this.client.createDBClusterEndpoint(
            this.ops["CreateDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage]: (CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage)[K]
    }>): CreateDBClusterParameterGroupResult {
        return this.client.createDBClusterParameterGroup(
            this.ops["CreateDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage]: (CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage)[K]
    }>): CreateDBClusterSnapshotResult {
        return this.client.createDBClusterSnapshot(
            this.ops["CreateDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage]: (CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage)[K]
    }>): CreateDBInstanceResult {
        return this.client.createDBInstance(
            this.ops["CreateDBInstance"].apply(partialParams)
        );
    }

    invokeCreateDBInstanceReadReplica(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage]: (CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage)[K]
    }>): CreateDBInstanceReadReplicaResult {
        return this.client.createDBInstanceReadReplica(
            this.ops["CreateDBInstanceReadReplica"].apply(partialParams)
        );
    }

    invokeCreateDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage]: (CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage)[K]
    }>): CreateDBParameterGroupResult {
        return this.client.createDBParameterGroup(
            this.ops["CreateDBParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBProxy(partialParams: ToOptional<{
      [K in keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest]: (CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest)[K]
    }>): CreateDBProxyResponse {
        return this.client.createDBProxy(
            this.ops["CreateDBProxy"].apply(partialParams)
        );
    }

    invokeCreateDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest]: (CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest)[K]
    }>): CreateDBProxyEndpointResponse {
        return this.client.createDBProxyEndpoint(
            this.ops["CreateDBProxyEndpoint"].apply(partialParams)
        );
    }

    invokeCreateDBSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage]: (CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage)[K]
    }>): CreateDBSecurityGroupResult {
        return this.client.createDBSecurityGroup(
            this.ops["CreateDBSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateDBSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage]: (CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage)[K]
    }>): CreateDBSnapshotResult {
        return this.client.createDBSnapshot(
            this.ops["CreateDBSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage]: (CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage)[K]
    }>): CreateDBSubnetGroupResult {
        return this.client.createDBSubnetGroup(
            this.ops["CreateDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): CreateEventSubscriptionResult {
        return this.client.createEventSubscription(
            this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeCreateOptionGroup(partialParams: ToOptional<{
      [K in keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage]: (CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage)[K]
    }>): CreateOptionGroupResult {
        return this.client.createOptionGroup(
            this.ops["CreateOptionGroup"].apply(partialParams)
        );
    }

    invokeDeleteCustomAvailabilityZone(partialParams: ToOptional<{
      [K in keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage]: (DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage)[K]
    }>): DeleteCustomAvailabilityZoneResult {
        return this.client.deleteCustomAvailabilityZone(
            this.ops["DeleteCustomAvailabilityZone"].apply(partialParams)
        );
    }

    invokeDeleteCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof Omit<DeleteCustomDBEngineVersionMessage, "Engine"> & keyof Omit<DeleteCustomDBEngineVersionMessage, "EngineVersion"> & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage]: (DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & Omit<DeleteCustomDBEngineVersionMessage, "Engine"> & Omit<DeleteCustomDBEngineVersionMessage, "EngineVersion"> & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage)[K]
    }>): DBEngineVersion {
        return this.client.deleteCustomDBEngineVersion(
            this.ops["DeleteCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeDeleteDBCluster(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage]: (DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage)[K]
    }>): DeleteDBClusterResult {
        return this.client.deleteDBCluster(
            this.ops["DeleteDBCluster"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage]: (DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage)[K]
    }>): DBClusterEndpoint {
        return this.client.deleteDBClusterEndpoint(
            this.ops["DeleteDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage]: (DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteDBClusterParameterGroup(
            this.ops["DeleteDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage]: (DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage)[K]
    }>): DeleteDBClusterSnapshotResult {
        return this.client.deleteDBClusterSnapshot(
            this.ops["DeleteDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDBInstance(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage]: (DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage)[K]
    }>): DeleteDBInstanceResult {
        return this.client.deleteDBInstance(
            this.ops["DeleteDBInstance"].apply(partialParams)
        );
    }

    invokeDeleteDBParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage]: (DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteDBParameterGroup(
            this.ops["DeleteDBParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteDBProxy(partialParams: ToOptional<{
      [K in keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest]: (DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest)[K]
    }>): DeleteDBProxyResponse {
        return this.client.deleteDBProxy(
            this.ops["DeleteDBProxy"].apply(partialParams)
        );
    }

    invokeDeleteDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest]: (DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest)[K]
    }>): DeleteDBProxyEndpointResponse {
        return this.client.deleteDBProxyEndpoint(
            this.ops["DeleteDBProxyEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteDBSecurityGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage]: (DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage)[K]
    }>): void {
        return this.client.deleteDBSecurityGroup(
            this.ops["DeleteDBSecurityGroup"].apply(partialParams)
        );
    }

    invokeDeleteDBSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage]: (DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage)[K]
    }>): DeleteDBSnapshotResult {
        return this.client.deleteDBSnapshot(
            this.ops["DeleteDBSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage]: (DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage)[K]
    }>): void {
        return this.client.deleteDBSubnetGroup(
            this.ops["DeleteDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): DeleteEventSubscriptionResult {
        return this.client.deleteEventSubscription(
            this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteGlobalCluster(partialParams: ToOptional<{
      [K in keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage]: (DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage)[K]
    }>): DeleteGlobalClusterResult {
        return this.client.deleteGlobalCluster(
            this.ops["DeleteGlobalCluster"].apply(partialParams)
        );
    }

    invokeDeleteInstallationMedia(partialParams: ToOptional<{
      [K in keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage]: (DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage)[K]
    }>): InstallationMedia {
        return this.client.deleteInstallationMedia(
            this.ops["DeleteInstallationMedia"].apply(partialParams)
        );
    }

    invokeDeleteOptionGroup(partialParams: ToOptional<{
      [K in keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage]: (DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage)[K]
    }>): void {
        return this.client.deleteOptionGroup(
            this.ops["DeleteOptionGroup"].apply(partialParams)
        );
    }

    invokeDeregisterDBProxyTargets(partialParams: ToOptional<{
      [K in keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest]: (DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest)[K]
    }>): DeregisterDBProxyTargetsResponse {
        return this.client.deregisterDBProxyTargets(
            this.ops["DeregisterDBProxyTargets"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterBacktracks(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage]: (DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage)[K]
    }>): DBClusterBacktrackMessage {
        return this.client.describeDBClusterBacktracks(
            this.ops["DescribeDBClusterBacktracks"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage]: (DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage)[K]
    }>): DBClusterParameterGroupDetails {
        return this.client.describeDBClusterParameters(
            this.ops["DescribeDBClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage]: (DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage)[K]
    }>): DescribeDBClusterSnapshotAttributesResult {
        return this.client.describeDBClusterSnapshotAttributes(
            this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams)
        );
    }

    invokeDescribeDBLogFiles(partialParams: ToOptional<{
      [K in keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage]: (DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage)[K]
    }>): DescribeDBLogFilesResponse {
        return this.client.describeDBLogFiles(
            this.ops["DescribeDBLogFiles"].apply(partialParams)
        );
    }

    invokeDescribeDBParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage]: (DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage)[K]
    }>): DBParameterGroupDetails {
        return this.client.describeDBParameters(
            this.ops["DescribeDBParameters"].apply(partialParams)
        );
    }

    invokeDescribeDBProxyTargetGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest]: (DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest)[K]
    }>): DescribeDBProxyTargetGroupsResponse {
        return this.client.describeDBProxyTargetGroups(
            this.ops["DescribeDBProxyTargetGroups"].apply(partialParams)
        );
    }

    invokeDescribeDBProxyTargets(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest]: (DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest)[K]
    }>): DescribeDBProxyTargetsResponse {
        return this.client.describeDBProxyTargets(
            this.ops["DescribeDBProxyTargets"].apply(partialParams)
        );
    }

    invokeDescribeDBSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage]: (DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage)[K]
    }>): DescribeDBSnapshotAttributesResult {
        return this.client.describeDBSnapshotAttributes(
            this.ops["DescribeDBSnapshotAttributes"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage]: (DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage)[K]
    }>): DescribeEngineDefaultClusterParametersResult {
        return this.client.describeEngineDefaultClusterParameters(
            this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage)[K]
    }>): DescribeEngineDefaultParametersResult {
        return this.client.describeEngineDefaultParameters(
            this.ops["DescribeEngineDefaultParameters"].apply(partialParams)
        );
    }

    invokeDescribeOptionGroupOptions(partialParams: ToOptional<{
      [K in keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage]: (DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage)[K]
    }>): OptionGroupOptionsMessage {
        return this.client.describeOptionGroupOptions(
            this.ops["DescribeOptionGroupOptions"].apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage]: (DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): OrderableDBInstanceOptionsMessage {
        return this.client.describeOrderableDBInstanceOptions(
            this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams)
        );
    }

    invokeDescribeValidDBInstanceModifications(partialParams: ToOptional<{
      [K in keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage]: (DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage)[K]
    }>): DescribeValidDBInstanceModificationsResult {
        return this.client.describeValidDBInstanceModifications(
            this.ops["DescribeValidDBInstanceModifications"].apply(partialParams)
        );
    }

    invokeDownloadDBLogFilePortion(partialParams: ToOptional<{
      [K in keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage]: (DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage)[K]
    }>): DownloadDBLogFilePortionDetails {
        return this.client.downloadDBLogFilePortion(
            this.ops["DownloadDBLogFilePortion"].apply(partialParams)
        );
    }

    invokeFailoverDBCluster(partialParams: ToOptional<{
      [K in keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage]: (FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage)[K]
    }>): FailoverDBClusterResult {
        return this.client.failoverDBCluster(
            this.ops["FailoverDBCluster"].apply(partialParams)
        );
    }

    invokeFailoverGlobalCluster(partialParams: ToOptional<{
      [K in keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage]: (FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage)[K]
    }>): FailoverGlobalClusterResult {
        return this.client.failoverGlobalCluster(
            this.ops["FailoverGlobalCluster"].apply(partialParams)
        );
    }

    invokeImportInstallationMedia(partialParams: ToOptional<{
      [K in keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage]: (ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage)[K]
    }>): InstallationMedia {
        return this.client.importInstallationMedia(
            this.ops["ImportInstallationMedia"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): TagListMessage {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyCurrentDBClusterCapacity(partialParams: ToOptional<{
      [K in keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage]: (ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage)[K]
    }>): DBClusterCapacityInfo {
        return this.client.modifyCurrentDBClusterCapacity(
            this.ops["ModifyCurrentDBClusterCapacity"].apply(partialParams)
        );
    }

    invokeModifyCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof Omit<ModifyCustomDBEngineVersionMessage, "Engine"> & keyof Omit<ModifyCustomDBEngineVersionMessage, "EngineVersion"> & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage]: (ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & Omit<ModifyCustomDBEngineVersionMessage, "Engine"> & Omit<ModifyCustomDBEngineVersionMessage, "EngineVersion"> & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage)[K]
    }>): DBEngineVersion {
        return this.client.modifyCustomDBEngineVersion(
            this.ops["ModifyCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeModifyDBCluster(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage]: (ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage)[K]
    }>): ModifyDBClusterResult {
        return this.client.modifyDBCluster(
            this.ops["ModifyDBCluster"].apply(partialParams)
        );
    }

    invokeModifyDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage]: (ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage)[K]
    }>): DBClusterEndpoint {
        return this.client.modifyDBClusterEndpoint(
            this.ops["ModifyDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage]: (ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage)[K]
    }>): DBClusterParameterGroupNameMessage {
        return this.client.modifyDBClusterParameterGroup(
            this.ops["ModifyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBClusterSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage]: (ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage)[K]
    }>): ModifyDBClusterSnapshotAttributeResult {
        return this.client.modifyDBClusterSnapshotAttribute(
            this.ops["ModifyDBClusterSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifyDBInstance(partialParams: ToOptional<{
      [K in keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage]: (ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage)[K]
    }>): ModifyDBInstanceResult {
        return this.client.modifyDBInstance(
            this.ops["ModifyDBInstance"].apply(partialParams)
        );
    }

    invokeModifyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage]: (ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage)[K]
    }>): DBParameterGroupNameMessage {
        return this.client.modifyDBParameterGroup(
            this.ops["ModifyDBParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBProxy(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest]: (ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest)[K]
    }>): ModifyDBProxyResponse {
        return this.client.modifyDBProxy(
            this.ops["ModifyDBProxy"].apply(partialParams)
        );
    }

    invokeModifyDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest]: (ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest)[K]
    }>): ModifyDBProxyEndpointResponse {
        return this.client.modifyDBProxyEndpoint(
            this.ops["ModifyDBProxyEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDBProxyTargetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest]: (ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest)[K]
    }>): ModifyDBProxyTargetGroupResponse {
        return this.client.modifyDBProxyTargetGroup(
            this.ops["ModifyDBProxyTargetGroup"].apply(partialParams)
        );
    }

    invokeModifyDBSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage]: (ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage)[K]
    }>): ModifyDBSnapshotResult {
        return this.client.modifyDBSnapshot(
            this.ops["ModifyDBSnapshot"].apply(partialParams)
        );
    }

    invokeModifyDBSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage]: (ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage)[K]
    }>): ModifyDBSnapshotAttributeResult {
        return this.client.modifyDBSnapshotAttribute(
            this.ops["ModifyDBSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifyDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage]: (ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage)[K]
    }>): ModifyDBSubnetGroupResult {
        return this.client.modifyDBSubnetGroup(
            this.ops["ModifyDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): ModifyEventSubscriptionResult {
        return this.client.modifyEventSubscription(
            this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokeModifyOptionGroup(partialParams: ToOptional<{
      [K in keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage]: (ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage)[K]
    }>): ModifyOptionGroupResult {
        return this.client.modifyOptionGroup(
            this.ops["ModifyOptionGroup"].apply(partialParams)
        );
    }

    invokePromoteReadReplica(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage]: (PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage)[K]
    }>): PromoteReadReplicaResult {
        return this.client.promoteReadReplica(
            this.ops["PromoteReadReplica"].apply(partialParams)
        );
    }

    invokePromoteReadReplicaDBCluster(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage]: (PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage)[K]
    }>): PromoteReadReplicaDBClusterResult {
        return this.client.promoteReadReplicaDBCluster(
            this.ops["PromoteReadReplicaDBCluster"].apply(partialParams)
        );
    }

    invokePurchaseReservedDBInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage]: (PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage)[K]
    }>): PurchaseReservedDBInstancesOfferingResult {
        return this.client.purchaseReservedDBInstancesOffering(
            this.ops["PurchaseReservedDBInstancesOffering"].apply(partialParams)
        );
    }

    invokeRebootDBCluster(partialParams: ToOptional<{
      [K in keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage]: (RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage)[K]
    }>): RebootDBClusterResult {
        return this.client.rebootDBCluster(
            this.ops["RebootDBCluster"].apply(partialParams)
        );
    }

    invokeRebootDBInstance(partialParams: ToOptional<{
      [K in keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage]: (RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage)[K]
    }>): RebootDBInstanceResult {
        return this.client.rebootDBInstance(
            this.ops["RebootDBInstance"].apply(partialParams)
        );
    }

    invokeRegisterDBProxyTargets(partialParams: ToOptional<{
      [K in keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest]: (RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest)[K]
    }>): RegisterDBProxyTargetsResponse {
        return this.client.registerDBProxyTargets(
            this.ops["RegisterDBProxyTargets"].apply(partialParams)
        );
    }

    invokeRemoveRoleFromDBCluster(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage]: (RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage)[K]
    }>): void {
        return this.client.removeRoleFromDBCluster(
            this.ops["RemoveRoleFromDBCluster"].apply(partialParams)
        );
    }

    invokeRemoveRoleFromDBInstance(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage]: (RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage)[K]
    }>): void {
        return this.client.removeRoleFromDBInstance(
            this.ops["RemoveRoleFromDBInstance"].apply(partialParams)
        );
    }

    invokeRemoveSourceIdentifierFromSubscription(partialParams: ToOptional<{
      [K in keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage]: (RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage)[K]
    }>): RemoveSourceIdentifierFromSubscriptionResult {
        return this.client.removeSourceIdentifierFromSubscription(
            this.ops["RemoveSourceIdentifierFromSubscription"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): void {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage]: (ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage)[K]
    }>): DBClusterParameterGroupNameMessage {
        return this.client.resetDBClusterParameterGroup(
            this.ops["ResetDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeResetDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage]: (ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage)[K]
    }>): DBParameterGroupNameMessage {
        return this.client.resetDBParameterGroup(
            this.ops["ResetDBParameterGroup"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message]: (RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message)[K]
    }>): RestoreDBClusterFromS3Result {
        return this.client.restoreDBClusterFromS3(
            this.ops["RestoreDBClusterFromS3"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage]: (RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage)[K]
    }>): RestoreDBClusterFromSnapshotResult {
        return this.client.restoreDBClusterFromSnapshot(
            this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage]: (RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage)[K]
    }>): RestoreDBClusterToPointInTimeResult {
        return this.client.restoreDBClusterToPointInTime(
            this.ops["RestoreDBClusterToPointInTime"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromDBSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage]: (RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage)[K]
    }>): RestoreDBInstanceFromDBSnapshotResult {
        return this.client.restoreDBInstanceFromDBSnapshot(
            this.ops["RestoreDBInstanceFromDBSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message]: (RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message)[K]
    }>): RestoreDBInstanceFromS3Result {
        return this.client.restoreDBInstanceFromS3(
            this.ops["RestoreDBInstanceFromS3"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage]: (RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage)[K]
    }>): RestoreDBInstanceToPointInTimeResult {
        return this.client.restoreDBInstanceToPointInTime(
            this.ops["RestoreDBInstanceToPointInTime"].apply(partialParams)
        );
    }

    invokeRevokeDBSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage]: (RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage)[K]
    }>): RevokeDBSecurityGroupIngressResult {
        return this.client.revokeDBSecurityGroupIngress(
            this.ops["RevokeDBSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeStartActivityStream(partialParams: ToOptional<{
      [K in keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest]: (StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest)[K]
    }>): StartActivityStreamResponse {
        return this.client.startActivityStream(
            this.ops["StartActivityStream"].apply(partialParams)
        );
    }

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage]: (StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage)[K]
    }>): StartDBClusterResult {
        return this.client.startDBCluster(
            this.ops["StartDBCluster"].apply(partialParams)
        );
    }

    invokeStartDBInstance(partialParams: ToOptional<{
      [K in keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage]: (StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage)[K]
    }>): StartDBInstanceResult {
        return this.client.startDBInstance(
            this.ops["StartDBInstance"].apply(partialParams)
        );
    }

    invokeStartDBInstanceAutomatedBackupsReplication(partialParams: ToOptional<{
      [K in keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage]: (StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage)[K]
    }>): StartDBInstanceAutomatedBackupsReplicationResult {
        return this.client.startDBInstanceAutomatedBackupsReplication(
            this.ops["StartDBInstanceAutomatedBackupsReplication"].apply(partialParams)
        );
    }

    invokeStartExportTask(partialParams: ToOptional<{
      [K in keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage]: (StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage)[K]
    }>): ExportTask {
        return this.client.startExportTask(
            this.ops["StartExportTask"].apply(partialParams)
        );
    }

    invokeStopActivityStream(partialParams: ToOptional<{
      [K in keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest]: (StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest)[K]
    }>): StopActivityStreamResponse {
        return this.client.stopActivityStream(
            this.ops["StopActivityStream"].apply(partialParams)
        );
    }

    invokeStopDBCluster(partialParams: ToOptional<{
      [K in keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage]: (StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage)[K]
    }>): StopDBClusterResult {
        return this.client.stopDBCluster(
            this.ops["StopDBCluster"].apply(partialParams)
        );
    }

    invokeStopDBInstance(partialParams: ToOptional<{
      [K in keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage]: (StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage)[K]
    }>): StopDBInstanceResult {
        return this.client.stopDBInstance(
            this.ops["StopDBInstance"].apply(partialParams)
        );
    }

    invokeStopDBInstanceAutomatedBackupsReplication(partialParams: ToOptional<{
      [K in keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage]: (StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage)[K]
    }>): StopDBInstanceAutomatedBackupsReplicationResult {
        return this.client.stopDBInstanceAutomatedBackupsReplication(
            this.ops["StopDBInstanceAutomatedBackupsReplication"].apply(partialParams)
        );
    }
}