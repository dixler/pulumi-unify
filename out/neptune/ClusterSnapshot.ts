
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddRoleToDBClusterMessage,
    AddSourceIdentifierToSubscriptionMessage,
    AddTagsToResourceMessage,
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
    DeleteDBClusterParameterGroupMessage,
    DeleteDBClusterSnapshotMessage,
    DeleteDBInstanceMessage,
    DeleteDBParameterGroupMessage,
    DeleteDBSubnetGroupMessage,
    DeleteEventSubscriptionMessage,
    DescribeDBClusterParametersMessage,
    DescribeDBClusterSnapshotAttributesMessage,
    DescribeDBParametersMessage,
    DescribeEngineDefaultClusterParametersMessage,
    DescribeEngineDefaultParametersMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    DescribeValidDBInstanceModificationsMessage,
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
    RemoveRoleFromDBClusterMessage,
    RemoveSourceIdentifierFromSubscriptionMessage,
    RemoveTagsFromResourceMessage,
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
    DBClusterParameterGroupDetails,
    DescribeDBClusterSnapshotAttributesResult,
    DBParameterGroupDetails,
    DescribeEngineDefaultClusterParametersResult,
    DescribeEngineDefaultParametersResult,
    OrderableDBInstanceOptionsMessage,
    DescribeValidDBInstanceModificationsResult,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.neptune.ClusterSnapshot {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.neptune.ClusterSnapshot>) {
        super(...args)
        this.client = new awssdk.Neptune()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/neptune-2014-10-31.normal.json"), this.client)
    }

    invokeAddRoleToDBCluster(partialParams: ToOptional<{
      [K in keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage]: (AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage)[K]
    }>): void {
        return this.client.addRoleToDBCluster(
            this.ops["AddRoleToDBCluster"].apply(partialParams)
        );
    }

    invokeAddSourceIdentifierToSubscription(partialParams: ToOptional<{
      [K in keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage]: (AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage)[K]
    }>): AddSourceIdentifierToSubscriptionResult {
        return this.client.addSourceIdentifierToSubscription(
            this.ops["AddSourceIdentifierToSubscription"].apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): void {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): ApplyPendingMaintenanceActionResult {
        return this.client.applyPendingMaintenanceAction(
            this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeCopyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage]: (CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage)[K]
    }>): CopyDBClusterParameterGroupResult {
        return this.client.copyDBClusterParameterGroup(
            this.ops["CopyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCopyDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage]: (CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage)[K]
    }>): CopyDBClusterSnapshotResult {
        return this.client.copyDBClusterSnapshot(
            this.ops["CopyDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCopyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage]: (CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage)[K]
    }>): CopyDBParameterGroupResult {
        return this.client.copyDBParameterGroup(
            this.ops["CopyDBParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage]: (CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage)[K]
    }>): CreateDBClusterResult {
        return this.client.createDBCluster(
            this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage]: (CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage)[K]
    }>): CreateDBClusterEndpointOutput {
        return this.client.createDBClusterEndpoint(
            this.ops["CreateDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage]: (CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage)[K]
    }>): CreateDBClusterParameterGroupResult {
        return this.client.createDBClusterParameterGroup(
            this.ops["CreateDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage]: (CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage)[K]
    }>): CreateDBClusterSnapshotResult {
        return this.client.createDBClusterSnapshot(
            this.ops["CreateDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage]: (CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage)[K]
    }>): CreateDBInstanceResult {
        return this.client.createDBInstance(
            this.ops["CreateDBInstance"].apply(partialParams)
        );
    }

    invokeCreateDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage]: (CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage)[K]
    }>): CreateDBParameterGroupResult {
        return this.client.createDBParameterGroup(
            this.ops["CreateDBParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage]: (CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage)[K]
    }>): CreateDBSubnetGroupResult {
        return this.client.createDBSubnetGroup(
            this.ops["CreateDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): CreateEventSubscriptionResult {
        return this.client.createEventSubscription(
            this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteDBCluster(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage]: (DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage)[K]
    }>): DeleteDBClusterResult {
        return this.client.deleteDBCluster(
            this.ops["DeleteDBCluster"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage]: (DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage)[K]
    }>): DeleteDBClusterEndpointOutput {
        return this.client.deleteDBClusterEndpoint(
            this.ops["DeleteDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage]: (DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteDBClusterParameterGroup(
            this.ops["DeleteDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage]: (DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage)[K]
    }>): DeleteDBClusterSnapshotResult {
        return this.client.deleteDBClusterSnapshot(
            this.ops["DeleteDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDBInstance(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage]: (DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage)[K]
    }>): DeleteDBInstanceResult {
        return this.client.deleteDBInstance(
            this.ops["DeleteDBInstance"].apply(partialParams)
        );
    }

    invokeDeleteDBParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage]: (DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteDBParameterGroup(
            this.ops["DeleteDBParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage]: (DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage)[K]
    }>): void {
        return this.client.deleteDBSubnetGroup(
            this.ops["DeleteDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): DeleteEventSubscriptionResult {
        return this.client.deleteEventSubscription(
            this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage]: (DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage)[K]
    }>): DBClusterParameterGroupDetails {
        return this.client.describeDBClusterParameters(
            this.ops["DescribeDBClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage]: (DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage)[K]
    }>): DescribeDBClusterSnapshotAttributesResult {
        return this.client.describeDBClusterSnapshotAttributes(
            this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams)
        );
    }

    invokeDescribeDBParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage]: (DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage)[K]
    }>): DBParameterGroupDetails {
        return this.client.describeDBParameters(
            this.ops["DescribeDBParameters"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage]: (DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage)[K]
    }>): DescribeEngineDefaultClusterParametersResult {
        return this.client.describeEngineDefaultClusterParameters(
            this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage)[K]
    }>): DescribeEngineDefaultParametersResult {
        return this.client.describeEngineDefaultParameters(
            this.ops["DescribeEngineDefaultParameters"].apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage]: (DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): OrderableDBInstanceOptionsMessage {
        return this.client.describeOrderableDBInstanceOptions(
            this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams)
        );
    }

    invokeDescribeValidDBInstanceModifications(partialParams: ToOptional<{
      [K in keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage]: (DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage)[K]
    }>): DescribeValidDBInstanceModificationsResult {
        return this.client.describeValidDBInstanceModifications(
            this.ops["DescribeValidDBInstanceModifications"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): TagListMessage {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyDBCluster(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage]: (ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage)[K]
    }>): ModifyDBClusterResult {
        return this.client.modifyDBCluster(
            this.ops["ModifyDBCluster"].apply(partialParams)
        );
    }

    invokeModifyDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage]: (ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage)[K]
    }>): ModifyDBClusterEndpointOutput {
        return this.client.modifyDBClusterEndpoint(
            this.ops["ModifyDBClusterEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage]: (ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage)[K]
    }>): DBClusterParameterGroupNameMessage {
        return this.client.modifyDBClusterParameterGroup(
            this.ops["ModifyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBClusterSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage]: (ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage)[K]
    }>): ModifyDBClusterSnapshotAttributeResult {
        return this.client.modifyDBClusterSnapshotAttribute(
            this.ops["ModifyDBClusterSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifyDBInstance(partialParams: ToOptional<{
      [K in keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage]: (ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage)[K]
    }>): ModifyDBInstanceResult {
        return this.client.modifyDBInstance(
            this.ops["ModifyDBInstance"].apply(partialParams)
        );
    }

    invokeModifyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage]: (ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage)[K]
    }>): DBParameterGroupNameMessage {
        return this.client.modifyDBParameterGroup(
            this.ops["ModifyDBParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage]: (ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage)[K]
    }>): ModifyDBSubnetGroupResult {
        return this.client.modifyDBSubnetGroup(
            this.ops["ModifyDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): ModifyEventSubscriptionResult {
        return this.client.modifyEventSubscription(
            this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokePromoteReadReplicaDBCluster(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage]: (PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage)[K]
    }>): PromoteReadReplicaDBClusterResult {
        return this.client.promoteReadReplicaDBCluster(
            this.ops["PromoteReadReplicaDBCluster"].apply(partialParams)
        );
    }

    invokeRebootDBInstance(partialParams: ToOptional<{
      [K in keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage]: (RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage)[K]
    }>): RebootDBInstanceResult {
        return this.client.rebootDBInstance(
            this.ops["RebootDBInstance"].apply(partialParams)
        );
    }

    invokeRemoveRoleFromDBCluster(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage]: (RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage)[K]
    }>): void {
        return this.client.removeRoleFromDBCluster(
            this.ops["RemoveRoleFromDBCluster"].apply(partialParams)
        );
    }

    invokeRemoveSourceIdentifierFromSubscription(partialParams: ToOptional<{
      [K in keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage]: (RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage)[K]
    }>): RemoveSourceIdentifierFromSubscriptionResult {
        return this.client.removeSourceIdentifierFromSubscription(
            this.ops["RemoveSourceIdentifierFromSubscription"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): void {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage]: (ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage)[K]
    }>): DBClusterParameterGroupNameMessage {
        return this.client.resetDBClusterParameterGroup(
            this.ops["ResetDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeResetDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage]: (ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage)[K]
    }>): DBParameterGroupNameMessage {
        return this.client.resetDBParameterGroup(
            this.ops["ResetDBParameterGroup"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage]: (RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage)[K]
    }>): RestoreDBClusterFromSnapshotResult {
        return this.client.restoreDBClusterFromSnapshot(
            this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage]: (RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage)[K]
    }>): RestoreDBClusterToPointInTimeResult {
        return this.client.restoreDBClusterToPointInTime(
            this.ops["RestoreDBClusterToPointInTime"].apply(partialParams)
        );
    }

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage]: (StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage)[K]
    }>): StartDBClusterResult {
        return this.client.startDBCluster(
            this.ops["StartDBCluster"].apply(partialParams)
        );
    }

    invokeStopDBCluster(partialParams: ToOptional<{
      [K in keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage]: (StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage)[K]
    }>): StopDBClusterResult {
        return this.client.stopDBCluster(
            this.ops["StopDBCluster"].apply(partialParams)
        );
    }
}