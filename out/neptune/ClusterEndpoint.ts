
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddSourceIdentifierToSubscriptionMessage,
    ApplyPendingMaintenanceActionMessage,
    CopyDBClusterParameterGroupMessage,
    CopyDBClusterSnapshotMessage,
    CopyDBParameterGroupMessage,
    CreateDBClusterMessage,
    CreateDBClusterEndpointMessage,
    CreateDBClusterParameterGroupMessage,
    CreateDBClusterSnapshotMessage,
    CreateDBInstanceMessage,
    CreateDBParameterGroupMessage,
    CreateDBSubnetGroupMessage,
    CreateEventSubscriptionMessage,
    DeleteDBClusterMessage,
    DeleteDBClusterEndpointMessage,
    DeleteDBClusterSnapshotMessage,
    DeleteDBInstanceMessage,
    DeleteEventSubscriptionMessage,
    DescribeDBClusterEndpointsMessage,
    DescribeDBClusterParameterGroupsMessage,
    DescribeDBClusterParametersMessage,
    DescribeDBClusterSnapshotAttributesMessage,
    DescribeDBClusterSnapshotsMessage,
    DescribeDBClustersMessage,
    DescribeDBEngineVersionsMessage,
    DescribeDBInstancesMessage,
    DescribeDBParameterGroupsMessage,
    DescribeDBParametersMessage,
    DescribeDBSubnetGroupsMessage,
    DescribeEngineDefaultClusterParametersMessage,
    DescribeEngineDefaultParametersMessage,
    DescribeEventCategoriesMessage,
    DescribeEventSubscriptionsMessage,
    DescribeEventsMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    DescribePendingMaintenanceActionsMessage,
    DescribeValidDBInstanceModificationsMessage,
    FailoverDBClusterMessage,
    ListTagsForResourceMessage,
    ModifyDBClusterMessage,
    ModifyDBClusterEndpointMessage,
    ModifyDBClusterParameterGroupMessage,
    ModifyDBClusterSnapshotAttributeMessage,
    ModifyDBInstanceMessage,
    ModifyDBParameterGroupMessage,
    ModifyDBSubnetGroupMessage,
    ModifyEventSubscriptionMessage,
    PromoteReadReplicaDBClusterMessage,
    RebootDBInstanceMessage,
    RemoveSourceIdentifierFromSubscriptionMessage,
    ResetDBClusterParameterGroupMessage,
    ResetDBParameterGroupMessage,
    RestoreDBClusterFromSnapshotMessage,
    RestoreDBClusterToPointInTimeMessage,
    StartDBClusterMessage,
    StopDBClusterMessage,
    AddSourceIdentifierToSubscriptionResult,
    ApplyPendingMaintenanceActionResult,
    CopyDBClusterParameterGroupResult,
    CopyDBClusterSnapshotResult,
    CopyDBParameterGroupResult,
    CreateDBClusterResult,
    CreateDBClusterEndpointOutput,
    CreateDBClusterParameterGroupResult,
    CreateDBClusterSnapshotResult,
    CreateDBInstanceResult,
    CreateDBParameterGroupResult,
    CreateDBSubnetGroupResult,
    CreateEventSubscriptionResult,
    DeleteDBClusterResult,
    DeleteDBClusterEndpointOutput,
    DeleteDBClusterSnapshotResult,
    DeleteDBInstanceResult,
    DeleteEventSubscriptionResult,
    DBClusterEndpointMessage,
    DBClusterParameterGroupsMessage,
    DBClusterParameterGroupDetails,
    DescribeDBClusterSnapshotAttributesResult,
    DBClusterSnapshotMessage,
    DBClusterMessage,
    DBEngineVersionMessage,
    DBInstanceMessage,
    DBParameterGroupsMessage,
    DBParameterGroupDetails,
    DBSubnetGroupMessage,
    DescribeEngineDefaultClusterParametersResult,
    DescribeEngineDefaultParametersResult,
    EventCategoriesMessage,
    EventSubscriptionsMessage,
    EventsMessage,
    OrderableDBInstanceOptionsMessage,
    PendingMaintenanceActionsMessage,
    DescribeValidDBInstanceModificationsResult,
    FailoverDBClusterResult,
    TagListMessage,
    ModifyDBClusterResult,
    ModifyDBClusterEndpointOutput,
    DBClusterParameterGroupNameMessage,
    ModifyDBClusterSnapshotAttributeResult,
    ModifyDBInstanceResult,
    DBParameterGroupNameMessage,
    ModifyDBSubnetGroupResult,
    ModifyEventSubscriptionResult,
    PromoteReadReplicaDBClusterResult,
    RebootDBInstanceResult,
    RemoveSourceIdentifierFromSubscriptionResult,
    RestoreDBClusterFromSnapshotResult,
    RestoreDBClusterToPointInTimeResult,
    StartDBClusterResult,
    StopDBClusterResult
} from "aws-sdk/clients/neptune";
const schema = require("../apis/neptune-2014-10-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.neptune.ClusterEndpoint {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.neptune.ClusterEndpoint>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Neptune()
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

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage]: (CreateDBClusterMessage)[K]
    }>): Request<CreateDBClusterResult, AWSError> {
        this.boot();
        return this.client.createDBCluster(
          this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBClusterEndpointMessage & keyof Omit<CreateDBClusterEndpointMessage, "EndpointType">]: (CreateDBClusterEndpointMessage)[K]
    }>): Request<CreateDBClusterEndpointOutput, AWSError> {
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
      [K in keyof CreateDBInstanceMessage]: (CreateDBInstanceMessage)[K]
    }>): Request<CreateDBInstanceResult, AWSError> {
        this.boot();
        return this.client.createDBInstance(
          this.ops["CreateDBInstance"].apply(partialParams)
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
    }>): Request<DeleteDBClusterEndpointOutput, AWSError> {
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

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage)[K]
    }>): Request<DeleteEventSubscriptionResult, AWSError> {
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].apply(partialParams)
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

    invokeDescribeDBInstances(partialParams: ToOptional<{
      [K in keyof DescribeDBInstancesMessage]: (DescribeDBInstancesMessage)[K]
    }>): Request<DBInstanceMessage, AWSError> {
        this.boot();
        return this.client.describeDBInstances(
          this.ops["DescribeDBInstances"].apply(partialParams)
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

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage]: (DescribeOrderableDBInstanceOptionsMessage)[K]
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

    invokeDescribeValidDBInstanceModifications(partialParams: ToOptional<{
      [K in keyof DescribeValidDBInstanceModificationsMessage]: (DescribeValidDBInstanceModificationsMessage)[K]
    }>): Request<DescribeValidDBInstanceModificationsResult, AWSError> {
        this.boot();
        return this.client.describeValidDBInstanceModifications(
          this.ops["DescribeValidDBInstanceModifications"].apply(partialParams)
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

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
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
    }>): Request<ModifyDBClusterEndpointOutput, AWSError> {
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

    invokePromoteReadReplicaDBCluster(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaDBClusterMessage]: (PromoteReadReplicaDBClusterMessage)[K]
    }>): Request<PromoteReadReplicaDBClusterResult, AWSError> {
        this.boot();
        return this.client.promoteReadReplicaDBCluster(
          this.ops["PromoteReadReplicaDBCluster"].apply(partialParams)
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

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage]: (RestoreDBClusterFromSnapshotMessage)[K]
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

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage]: (StartDBClusterMessage)[K]
    }>): Request<StartDBClusterResult, AWSError> {
        this.boot();
        return this.client.startDBCluster(
          this.ops["StartDBCluster"].apply(partialParams)
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
}