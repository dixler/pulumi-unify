
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    constructor(...args: ConstructorParameters<typeof aws.rds.ClusterInstance>) {
        super(...args)
        this.client = new awssdk.RDS()
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

    invokeAddRoleToDBCluster(partialParams: ToOptional<{
      [K in keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage]: (AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToDBCluster(
          this.ops["AddRoleToDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeAddRoleToDBInstance(partialParams: ToOptional<{
      [K in keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage & keyof AddRoleToDBInstanceMessage]: (AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage & AddRoleToDBInstanceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToDBInstance(
          this.ops["AddRoleToDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeAddSourceIdentifierToSubscription(partialParams: ToOptional<{
      [K in keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage]: (AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage)[K]
    }>): Request<AddSourceIdentifierToSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addSourceIdentifierToSubscription(
          this.ops["AddSourceIdentifierToSubscription"].applicator.apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): Request<ApplyPendingMaintenanceActionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applyPendingMaintenanceAction(
          this.ops["ApplyPendingMaintenanceAction"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeDBSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage & keyof AuthorizeDBSecurityGroupIngressMessage]: (AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage & AuthorizeDBSecurityGroupIngressMessage)[K]
    }>): Request<AuthorizeDBSecurityGroupIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeDBSecurityGroupIngress(
          this.ops["AuthorizeDBSecurityGroupIngress"].applicator.apply(partialParams)
        );
    }

    invokeBacktrackDBCluster(partialParams: ToOptional<{
      [K in keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage & keyof BacktrackDBClusterMessage]: (BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage & BacktrackDBClusterMessage)[K]
    }>): Request<DBClusterBacktrack, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.backtrackDBCluster(
          this.ops["BacktrackDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeCancelExportTask(partialParams: ToOptional<{
      [K in keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage & keyof CancelExportTaskMessage]: (CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage & CancelExportTaskMessage)[K]
    }>): Request<ExportTask, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelExportTask(
          this.ops["CancelExportTask"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage]: (CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage)[K]
    }>): Request<CopyDBClusterParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBClusterParameterGroup(
          this.ops["CopyDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage]: (CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage)[K]
    }>): Request<CopyDBClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBClusterSnapshot(
          this.ops["CopyDBClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage]: (CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage)[K]
    }>): Request<CopyDBParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBParameterGroup(
          this.ops["CopyDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage & keyof CopyDBSnapshotMessage]: (CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage & CopyDBSnapshotMessage)[K]
    }>): Request<CopyDBSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBSnapshot(
          this.ops["CopyDBSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCopyOptionGroup(partialParams: ToOptional<{
      [K in keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage & keyof CopyOptionGroupMessage]: (CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage & CopyOptionGroupMessage)[K]
    }>): Request<CopyOptionGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyOptionGroup(
          this.ops["CopyOptionGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomAvailabilityZone(partialParams: ToOptional<{
      [K in keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage & keyof CreateCustomAvailabilityZoneMessage]: (CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage & CreateCustomAvailabilityZoneMessage)[K]
    }>): Request<CreateCustomAvailabilityZoneResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomAvailabilityZone(
          this.ops["CreateCustomAvailabilityZone"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage & keyof CreateCustomDBEngineVersionMessage]: (CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage & CreateCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomDBEngineVersion(
          this.ops["CreateCustomDBEngineVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage]: (CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage)[K]
    }>): Request<CreateDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBCluster(
          this.ops["CreateDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage]: (CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage)[K]
    }>): Request<DBClusterEndpoint, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterEndpoint(
          this.ops["CreateDBClusterEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage]: (CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage)[K]
    }>): Request<CreateDBClusterParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterParameterGroup(
          this.ops["CreateDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage]: (CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage)[K]
    }>): Request<CreateDBClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterSnapshot(
          this.ops["CreateDBClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage]: (CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage)[K]
    }>): Request<CreateDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBInstance(
          this.ops["CreateDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBInstanceReadReplica(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage & keyof CreateDBInstanceReadReplicaMessage]: (CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage & CreateDBInstanceReadReplicaMessage)[K]
    }>): Request<CreateDBInstanceReadReplicaResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBInstanceReadReplica(
          this.ops["CreateDBInstanceReadReplica"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage]: (CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage)[K]
    }>): Request<CreateDBParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBParameterGroup(
          this.ops["CreateDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBProxy(partialParams: ToOptional<{
      [K in keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest & keyof CreateDBProxyRequest]: (CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest & CreateDBProxyRequest)[K]
    }>): Request<CreateDBProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBProxy(
          this.ops["CreateDBProxy"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest & keyof CreateDBProxyEndpointRequest]: (CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest & CreateDBProxyEndpointRequest)[K]
    }>): Request<CreateDBProxyEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBProxyEndpoint(
          this.ops["CreateDBProxyEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage & keyof CreateDBSecurityGroupMessage]: (CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage & CreateDBSecurityGroupMessage)[K]
    }>): Request<CreateDBSecurityGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSecurityGroup(
          this.ops["CreateDBSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage & keyof CreateDBSnapshotMessage]: (CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage & CreateDBSnapshotMessage)[K]
    }>): Request<CreateDBSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSnapshot(
          this.ops["CreateDBSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage]: (CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage)[K]
    }>): Request<CreateDBSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSubnetGroup(
          this.ops["CreateDBSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeCreateOptionGroup(partialParams: ToOptional<{
      [K in keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage & keyof CreateOptionGroupMessage]: (CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage & CreateOptionGroupMessage)[K]
    }>): Request<CreateOptionGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOptionGroup(
          this.ops["CreateOptionGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomAvailabilityZone(partialParams: ToOptional<{
      [K in keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage & keyof DeleteCustomAvailabilityZoneMessage]: (DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage & DeleteCustomAvailabilityZoneMessage)[K]
    }>): Request<DeleteCustomAvailabilityZoneResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomAvailabilityZone(
          this.ops["DeleteCustomAvailabilityZone"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof Omit<DeleteCustomDBEngineVersionMessage, "Engine"> & keyof Omit<DeleteCustomDBEngineVersionMessage, "EngineVersion"> & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage & keyof DeleteCustomDBEngineVersionMessage]: (DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & Omit<DeleteCustomDBEngineVersionMessage, "Engine"> & Omit<DeleteCustomDBEngineVersionMessage, "EngineVersion"> & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage & DeleteCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomDBEngineVersion(
          this.ops["DeleteCustomDBEngineVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBCluster(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage]: (DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage)[K]
    }>): Request<DeleteDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBCluster(
          this.ops["DeleteDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage]: (DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage)[K]
    }>): Request<DBClusterEndpoint, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterEndpoint(
          this.ops["DeleteDBClusterEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage]: (DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterParameterGroup(
          this.ops["DeleteDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage]: (DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage)[K]
    }>): Request<DeleteDBClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterSnapshot(
          this.ops["DeleteDBClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBInstance(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage]: (DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage)[K]
    }>): Request<DeleteDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBInstance(
          this.ops["DeleteDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage]: (DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBParameterGroup(
          this.ops["DeleteDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBProxy(partialParams: ToOptional<{
      [K in keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest & keyof DeleteDBProxyRequest]: (DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest & DeleteDBProxyRequest)[K]
    }>): Request<DeleteDBProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBProxy(
          this.ops["DeleteDBProxy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest & keyof DeleteDBProxyEndpointRequest]: (DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest & DeleteDBProxyEndpointRequest)[K]
    }>): Request<DeleteDBProxyEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBProxyEndpoint(
          this.ops["DeleteDBProxyEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBSecurityGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage & keyof DeleteDBSecurityGroupMessage]: (DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage & DeleteDBSecurityGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSecurityGroup(
          this.ops["DeleteDBSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage & keyof DeleteDBSnapshotMessage]: (DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage & DeleteDBSnapshotMessage)[K]
    }>): Request<DeleteDBSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSnapshot(
          this.ops["DeleteDBSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage]: (DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSubnetGroup(
          this.ops["DeleteDBSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): Request<DeleteEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGlobalCluster(partialParams: ToOptional<{
      [K in keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage]: (DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage)[K]
    }>): Request<DeleteGlobalClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGlobalCluster(
          this.ops["DeleteGlobalCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstallationMedia(partialParams: ToOptional<{
      [K in keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage & keyof DeleteInstallationMediaMessage]: (DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage & DeleteInstallationMediaMessage)[K]
    }>): Request<InstallationMedia, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstallationMedia(
          this.ops["DeleteInstallationMedia"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOptionGroup(partialParams: ToOptional<{
      [K in keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage & keyof DeleteOptionGroupMessage]: (DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage & DeleteOptionGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOptionGroup(
          this.ops["DeleteOptionGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterDBProxyTargets(partialParams: ToOptional<{
      [K in keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest & keyof DeregisterDBProxyTargetsRequest]: (DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest & DeregisterDBProxyTargetsRequest)[K]
    }>): Request<DeregisterDBProxyTargetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterDBProxyTargets(
          this.ops["DeregisterDBProxyTargets"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBClusterBacktracks(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage & keyof DescribeDBClusterBacktracksMessage]: (DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage & DescribeDBClusterBacktracksMessage)[K]
    }>): Request<DBClusterBacktrackMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterBacktracks(
          this.ops["DescribeDBClusterBacktracks"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage]: (DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage)[K]
    }>): Request<DBClusterParameterGroupDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterParameters(
          this.ops["DescribeDBClusterParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage]: (DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage)[K]
    }>): Request<DescribeDBClusterSnapshotAttributesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterSnapshotAttributes(
          this.ops["DescribeDBClusterSnapshotAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBLogFiles(partialParams: ToOptional<{
      [K in keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage & keyof DescribeDBLogFilesMessage]: (DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage & DescribeDBLogFilesMessage)[K]
    }>): Request<DescribeDBLogFilesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBLogFiles(
          this.ops["DescribeDBLogFiles"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage]: (DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage)[K]
    }>): Request<DBParameterGroupDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBParameters(
          this.ops["DescribeDBParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBProxyTargetGroups(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest & keyof DescribeDBProxyTargetGroupsRequest]: (DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest & DescribeDBProxyTargetGroupsRequest)[K]
    }>): Request<DescribeDBProxyTargetGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBProxyTargetGroups(
          this.ops["DescribeDBProxyTargetGroups"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBProxyTargets(partialParams: ToOptional<{
      [K in keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest & keyof DescribeDBProxyTargetsRequest]: (DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest & DescribeDBProxyTargetsRequest)[K]
    }>): Request<DescribeDBProxyTargetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBProxyTargets(
          this.ops["DescribeDBProxyTargets"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage & keyof DescribeDBSnapshotAttributesMessage]: (DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage & DescribeDBSnapshotAttributesMessage)[K]
    }>): Request<DescribeDBSnapshotAttributesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBSnapshotAttributes(
          this.ops["DescribeDBSnapshotAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage]: (DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage)[K]
    }>): Request<DescribeEngineDefaultClusterParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(
          this.ops["DescribeEngineDefaultClusterParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage)[K]
    }>): Request<DescribeEngineDefaultParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultParameters(
          this.ops["DescribeEngineDefaultParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeOptionGroupOptions(partialParams: ToOptional<{
      [K in keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage & keyof DescribeOptionGroupOptionsMessage]: (DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage & DescribeOptionGroupOptionsMessage)[K]
    }>): Request<OptionGroupOptionsMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOptionGroupOptions(
          this.ops["DescribeOptionGroupOptions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage]: (DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): Request<OrderableDBInstanceOptionsMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(
          this.ops["DescribeOrderableDBInstanceOptions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeValidDBInstanceModifications(partialParams: ToOptional<{
      [K in keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage]: (DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage)[K]
    }>): Request<DescribeValidDBInstanceModificationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeValidDBInstanceModifications(
          this.ops["DescribeValidDBInstanceModifications"].applicator.apply(partialParams)
        );
    }

    invokeDownloadDBLogFilePortion(partialParams: ToOptional<{
      [K in keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage & keyof DownloadDBLogFilePortionMessage]: (DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage & DownloadDBLogFilePortionMessage)[K]
    }>): Request<DownloadDBLogFilePortionDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.downloadDBLogFilePortion(
          this.ops["DownloadDBLogFilePortion"].applicator.apply(partialParams)
        );
    }

    invokeFailoverDBCluster(partialParams: ToOptional<{
      [K in keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage & keyof FailoverDBClusterMessage]: (FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage & FailoverDBClusterMessage)[K]
    }>): Request<FailoverDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverDBCluster(
          this.ops["FailoverDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeFailoverGlobalCluster(partialParams: ToOptional<{
      [K in keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage & keyof FailoverGlobalClusterMessage]: (FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage & FailoverGlobalClusterMessage)[K]
    }>): Request<FailoverGlobalClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverGlobalCluster(
          this.ops["FailoverGlobalCluster"].applicator.apply(partialParams)
        );
    }

    invokeImportInstallationMedia(partialParams: ToOptional<{
      [K in keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage & keyof ImportInstallationMediaMessage]: (ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage & ImportInstallationMediaMessage)[K]
    }>): Request<InstallationMedia, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importInstallationMedia(
          this.ops["ImportInstallationMedia"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeModifyCurrentDBClusterCapacity(partialParams: ToOptional<{
      [K in keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage & keyof ModifyCurrentDBClusterCapacityMessage]: (ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage & ModifyCurrentDBClusterCapacityMessage)[K]
    }>): Request<DBClusterCapacityInfo, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCurrentDBClusterCapacity(
          this.ops["ModifyCurrentDBClusterCapacity"].applicator.apply(partialParams)
        );
    }

    invokeModifyCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof Omit<ModifyCustomDBEngineVersionMessage, "Engine"> & keyof Omit<ModifyCustomDBEngineVersionMessage, "EngineVersion"> & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage & keyof ModifyCustomDBEngineVersionMessage]: (ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & Omit<ModifyCustomDBEngineVersionMessage, "Engine"> & Omit<ModifyCustomDBEngineVersionMessage, "EngineVersion"> & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage & ModifyCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCustomDBEngineVersion(
          this.ops["ModifyCustomDBEngineVersion"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBCluster(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage]: (ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage)[K]
    }>): Request<ModifyDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBCluster(
          this.ops["ModifyDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage]: (ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage)[K]
    }>): Request<DBClusterEndpoint, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterEndpoint(
          this.ops["ModifyDBClusterEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage]: (ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage)[K]
    }>): Request<DBClusterParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterParameterGroup(
          this.ops["ModifyDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBClusterSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage]: (ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage)[K]
    }>): Request<ModifyDBClusterSnapshotAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterSnapshotAttribute(
          this.ops["ModifyDBClusterSnapshotAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBInstance(partialParams: ToOptional<{
      [K in keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage]: (ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage)[K]
    }>): Request<ModifyDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBInstance(
          this.ops["ModifyDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage]: (ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage)[K]
    }>): Request<DBParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBParameterGroup(
          this.ops["ModifyDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBProxy(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest & keyof ModifyDBProxyRequest]: (ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest & ModifyDBProxyRequest)[K]
    }>): Request<ModifyDBProxyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBProxy(
          this.ops["ModifyDBProxy"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBProxyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest & keyof ModifyDBProxyEndpointRequest]: (ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest & ModifyDBProxyEndpointRequest)[K]
    }>): Request<ModifyDBProxyEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBProxyEndpoint(
          this.ops["ModifyDBProxyEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBProxyTargetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest & keyof ModifyDBProxyTargetGroupRequest]: (ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest & ModifyDBProxyTargetGroupRequest)[K]
    }>): Request<ModifyDBProxyTargetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBProxyTargetGroup(
          this.ops["ModifyDBProxyTargetGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage & keyof ModifyDBSnapshotMessage]: (ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage & ModifyDBSnapshotMessage)[K]
    }>): Request<ModifyDBSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSnapshot(
          this.ops["ModifyDBSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage & keyof ModifyDBSnapshotAttributeMessage]: (ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage & ModifyDBSnapshotAttributeMessage)[K]
    }>): Request<ModifyDBSnapshotAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSnapshotAttribute(
          this.ops["ModifyDBSnapshotAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage]: (ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage)[K]
    }>): Request<ModifyDBSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSubnetGroup(
          this.ops["ModifyDBSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): Request<ModifyEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(
          this.ops["ModifyEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeModifyOptionGroup(partialParams: ToOptional<{
      [K in keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage & keyof ModifyOptionGroupMessage]: (ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage & ModifyOptionGroupMessage)[K]
    }>): Request<ModifyOptionGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyOptionGroup(
          this.ops["ModifyOptionGroup"].applicator.apply(partialParams)
        );
    }

    invokePromoteReadReplica(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage & keyof PromoteReadReplicaMessage]: (PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage & PromoteReadReplicaMessage)[K]
    }>): Request<PromoteReadReplicaResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteReadReplica(
          this.ops["PromoteReadReplica"].applicator.apply(partialParams)
        );
    }

    invokePromoteReadReplicaDBCluster(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage]: (PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage)[K]
    }>): Request<PromoteReadReplicaDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteReadReplicaDBCluster(
          this.ops["PromoteReadReplicaDBCluster"].applicator.apply(partialParams)
        );
    }

    invokePurchaseReservedDBInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage & keyof PurchaseReservedDBInstancesOfferingMessage]: (PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage & PurchaseReservedDBInstancesOfferingMessage)[K]
    }>): Request<PurchaseReservedDBInstancesOfferingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedDBInstancesOffering(
          this.ops["PurchaseReservedDBInstancesOffering"].applicator.apply(partialParams)
        );
    }

    invokeRebootDBCluster(partialParams: ToOptional<{
      [K in keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage & keyof RebootDBClusterMessage]: (RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage & RebootDBClusterMessage)[K]
    }>): Request<RebootDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootDBCluster(
          this.ops["RebootDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeRebootDBInstance(partialParams: ToOptional<{
      [K in keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage]: (RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage)[K]
    }>): Request<RebootDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootDBInstance(
          this.ops["RebootDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeRegisterDBProxyTargets(partialParams: ToOptional<{
      [K in keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest & keyof RegisterDBProxyTargetsRequest]: (RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest & RegisterDBProxyTargetsRequest)[K]
    }>): Request<RegisterDBProxyTargetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDBProxyTargets(
          this.ops["RegisterDBProxyTargets"].applicator.apply(partialParams)
        );
    }

    invokeRemoveRoleFromDBCluster(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage]: (RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromDBCluster(
          this.ops["RemoveRoleFromDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeRemoveRoleFromDBInstance(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage & keyof RemoveRoleFromDBInstanceMessage]: (RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage & RemoveRoleFromDBInstanceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromDBInstance(
          this.ops["RemoveRoleFromDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeRemoveSourceIdentifierFromSubscription(partialParams: ToOptional<{
      [K in keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage]: (RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage)[K]
    }>): Request<RemoveSourceIdentifierFromSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeSourceIdentifierFromSubscription(
          this.ops["RemoveSourceIdentifierFromSubscription"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeResetDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage]: (ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage)[K]
    }>): Request<DBClusterParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetDBClusterParameterGroup(
          this.ops["ResetDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeResetDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage]: (ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage)[K]
    }>): Request<DBParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetDBParameterGroup(
          this.ops["ResetDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message & keyof RestoreDBClusterFromS3Message]: (RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message & RestoreDBClusterFromS3Message)[K]
    }>): Request<RestoreDBClusterFromS3Result, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterFromS3(
          this.ops["RestoreDBClusterFromS3"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage]: (RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage)[K]
    }>): Request<RestoreDBClusterFromSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(
          this.ops["RestoreDBClusterFromSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBClusterToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage]: (RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage)[K]
    }>): Request<RestoreDBClusterToPointInTimeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterToPointInTime(
          this.ops["RestoreDBClusterToPointInTime"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromDBSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage & keyof RestoreDBInstanceFromDBSnapshotMessage]: (RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage & RestoreDBInstanceFromDBSnapshotMessage)[K]
    }>): Request<RestoreDBInstanceFromDBSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBInstanceFromDBSnapshot(
          this.ops["RestoreDBInstanceFromDBSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message & keyof RestoreDBInstanceFromS3Message]: (RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message & RestoreDBInstanceFromS3Message)[K]
    }>): Request<RestoreDBInstanceFromS3Result, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBInstanceFromS3(
          this.ops["RestoreDBInstanceFromS3"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBInstanceToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage & keyof RestoreDBInstanceToPointInTimeMessage]: (RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage & RestoreDBInstanceToPointInTimeMessage)[K]
    }>): Request<RestoreDBInstanceToPointInTimeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBInstanceToPointInTime(
          this.ops["RestoreDBInstanceToPointInTime"].applicator.apply(partialParams)
        );
    }

    invokeRevokeDBSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage & keyof RevokeDBSecurityGroupIngressMessage]: (RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage & RevokeDBSecurityGroupIngressMessage)[K]
    }>): Request<RevokeDBSecurityGroupIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeDBSecurityGroupIngress(
          this.ops["RevokeDBSecurityGroupIngress"].applicator.apply(partialParams)
        );
    }

    invokeStartActivityStream(partialParams: ToOptional<{
      [K in keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest & keyof StartActivityStreamRequest]: (StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest & StartActivityStreamRequest)[K]
    }>): Request<StartActivityStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startActivityStream(
          this.ops["StartActivityStream"].applicator.apply(partialParams)
        );
    }

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage]: (StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage)[K]
    }>): Request<StartDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBCluster(
          this.ops["StartDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeStartDBInstance(partialParams: ToOptional<{
      [K in keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage & keyof StartDBInstanceMessage]: (StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage & StartDBInstanceMessage)[K]
    }>): Request<StartDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBInstance(
          this.ops["StartDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeStartDBInstanceAutomatedBackupsReplication(partialParams: ToOptional<{
      [K in keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage & keyof StartDBInstanceAutomatedBackupsReplicationMessage]: (StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage & StartDBInstanceAutomatedBackupsReplicationMessage)[K]
    }>): Request<StartDBInstanceAutomatedBackupsReplicationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBInstanceAutomatedBackupsReplication(
          this.ops["StartDBInstanceAutomatedBackupsReplication"].applicator.apply(partialParams)
        );
    }

    invokeStartExportTask(partialParams: ToOptional<{
      [K in keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage & keyof StartExportTaskMessage]: (StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage & StartExportTaskMessage)[K]
    }>): Request<ExportTask, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startExportTask(
          this.ops["StartExportTask"].applicator.apply(partialParams)
        );
    }

    invokeStopActivityStream(partialParams: ToOptional<{
      [K in keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest & keyof StopActivityStreamRequest]: (StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest & StopActivityStreamRequest)[K]
    }>): Request<StopActivityStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopActivityStream(
          this.ops["StopActivityStream"].applicator.apply(partialParams)
        );
    }

    invokeStopDBCluster(partialParams: ToOptional<{
      [K in keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage]: (StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage)[K]
    }>): Request<StopDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBCluster(
          this.ops["StopDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeStopDBInstance(partialParams: ToOptional<{
      [K in keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage & keyof StopDBInstanceMessage]: (StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage & StopDBInstanceMessage)[K]
    }>): Request<StopDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBInstance(
          this.ops["StopDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeStopDBInstanceAutomatedBackupsReplication(partialParams: ToOptional<{
      [K in keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage & keyof StopDBInstanceAutomatedBackupsReplicationMessage]: (StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage & StopDBInstanceAutomatedBackupsReplicationMessage)[K]
    }>): Request<StopDBInstanceAutomatedBackupsReplicationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBInstanceAutomatedBackupsReplication(
          this.ops["StopDBInstanceAutomatedBackupsReplication"].applicator.apply(partialParams)
        );
    }
}