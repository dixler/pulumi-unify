
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddSourceIdentifierToSubscriptionMessage,
    AddTagsToResourceMessage,
    ApplyPendingMaintenanceActionMessage,
    CopyDBClusterParameterGroupMessage,
    CopyDBClusterSnapshotMessage,
    CreateDBClusterMessage,
    CreateDBClusterParameterGroupMessage,
    CreateDBClusterSnapshotMessage,
    CreateDBInstanceMessage,
    CreateDBSubnetGroupMessage,
    CreateEventSubscriptionMessage,
    CreateGlobalClusterMessage,
    DeleteDBClusterMessage,
    DeleteDBClusterParameterGroupMessage,
    DeleteDBClusterSnapshotMessage,
    DeleteDBInstanceMessage,
    DeleteDBSubnetGroupMessage,
    DeleteEventSubscriptionMessage,
    DeleteGlobalClusterMessage,
    DescribeDBClusterParametersMessage,
    DescribeDBClusterSnapshotAttributesMessage,
    DescribeEngineDefaultClusterParametersMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    ListTagsForResourceMessage,
    ModifyDBClusterMessage,
    ModifyDBClusterParameterGroupMessage,
    ModifyDBClusterSnapshotAttributeMessage,
    ModifyDBInstanceMessage,
    ModifyDBSubnetGroupMessage,
    ModifyEventSubscriptionMessage,
    ModifyGlobalClusterMessage,
    RebootDBInstanceMessage,
    RemoveFromGlobalClusterMessage,
    RemoveSourceIdentifierFromSubscriptionMessage,
    RemoveTagsFromResourceMessage,
    ResetDBClusterParameterGroupMessage,
    RestoreDBClusterFromSnapshotMessage,
    RestoreDBClusterToPointInTimeMessage,
    StartDBClusterMessage,
    StopDBClusterMessage,
    AddSourceIdentifierToSubscriptionResult,
    ApplyPendingMaintenanceActionResult,
    CopyDBClusterParameterGroupResult,
    CopyDBClusterSnapshotResult,
    CreateDBClusterResult,
    CreateDBClusterParameterGroupResult,
    CreateDBClusterSnapshotResult,
    CreateDBInstanceResult,
    CreateDBSubnetGroupResult,
    CreateEventSubscriptionResult,
    CreateGlobalClusterResult,
    DeleteDBClusterResult,
    DeleteDBClusterSnapshotResult,
    DeleteDBInstanceResult,
    DeleteEventSubscriptionResult,
    DeleteGlobalClusterResult,
    DBClusterParameterGroupDetails,
    DescribeDBClusterSnapshotAttributesResult,
    DescribeEngineDefaultClusterParametersResult,
    OrderableDBInstanceOptionsMessage,
    TagListMessage,
    ModifyDBClusterResult,
    DBClusterParameterGroupNameMessage,
    ModifyDBClusterSnapshotAttributeResult,
    ModifyDBInstanceResult,
    ModifyDBSubnetGroupResult,
    ModifyEventSubscriptionResult,
    ModifyGlobalClusterResult,
    RebootDBInstanceResult,
    RemoveFromGlobalClusterResult,
    RemoveSourceIdentifierFromSubscriptionResult,
    RestoreDBClusterFromSnapshotResult,
    RestoreDBClusterToPointInTimeResult,
    StartDBClusterResult,
    StopDBClusterResult
} from "aws-sdk/clients/docdb";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.docdb.SubnetGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.docdb.SubnetGroup>) {
        super(...args)
        this.client = new awssdk.DocDB()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/docdb-2014-10-31.normal.json"), this.client)
    }

    invokeAddSourceIdentifierToSubscription(partialParams: ToOptional<{
      [K in keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage]: (AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage)[K]
    }>): AddSourceIdentifierToSubscriptionResult {
        return this.client.addSourceIdentifierToSubscription(
            this.ops["AddSourceIdentifierToSubscription"].apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): void {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): ApplyPendingMaintenanceActionResult {
        return this.client.applyPendingMaintenanceAction(
            this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeCopyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage]: (CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage)[K]
    }>): CopyDBClusterParameterGroupResult {
        return this.client.copyDBClusterParameterGroup(
            this.ops["CopyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCopyDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage]: (CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage)[K]
    }>): CopyDBClusterSnapshotResult {
        return this.client.copyDBClusterSnapshot(
            this.ops["CopyDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage]: (CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage)[K]
    }>): CreateDBClusterResult {
        return this.client.createDBCluster(
            this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage]: (CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage)[K]
    }>): CreateDBClusterParameterGroupResult {
        return this.client.createDBClusterParameterGroup(
            this.ops["CreateDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage]: (CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage)[K]
    }>): CreateDBClusterSnapshotResult {
        return this.client.createDBClusterSnapshot(
            this.ops["CreateDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage]: (CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage)[K]
    }>): CreateDBInstanceResult {
        return this.client.createDBInstance(
            this.ops["CreateDBInstance"].apply(partialParams)
        );
    }

    invokeCreateDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage]: (CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage)[K]
    }>): CreateDBSubnetGroupResult {
        return this.client.createDBSubnetGroup(
            this.ops["CreateDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): CreateEventSubscriptionResult {
        return this.client.createEventSubscription(
            this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeCreateGlobalCluster(partialParams: ToOptional<{
      [K in keyof CreateGlobalClusterMessage & keyof CreateGlobalClusterMessage & keyof CreateGlobalClusterMessage & keyof CreateGlobalClusterMessage]: (CreateGlobalClusterMessage & CreateGlobalClusterMessage & CreateGlobalClusterMessage & CreateGlobalClusterMessage)[K]
    }>): CreateGlobalClusterResult {
        return this.client.createGlobalCluster(
            this.ops["CreateGlobalCluster"].apply(partialParams)
        );
    }

    invokeDeleteDBCluster(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage]: (DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage)[K]
    }>): DeleteDBClusterResult {
        return this.client.deleteDBCluster(
            this.ops["DeleteDBCluster"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage]: (DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteDBClusterParameterGroup(
            this.ops["DeleteDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage]: (DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage)[K]
    }>): DeleteDBClusterSnapshotResult {
        return this.client.deleteDBClusterSnapshot(
            this.ops["DeleteDBClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDBInstance(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage]: (DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage)[K]
    }>): DeleteDBInstanceResult {
        return this.client.deleteDBInstance(
            this.ops["DeleteDBInstance"].apply(partialParams)
        );
    }

    invokeDeleteDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage]: (DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage)[K]
    }>): void {
        return this.client.deleteDBSubnetGroup(
            this.ops["DeleteDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): DeleteEventSubscriptionResult {
        return this.client.deleteEventSubscription(
            this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteGlobalCluster(partialParams: ToOptional<{
      [K in keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage & keyof DeleteGlobalClusterMessage]: (DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage & DeleteGlobalClusterMessage)[K]
    }>): DeleteGlobalClusterResult {
        return this.client.deleteGlobalCluster(
            this.ops["DeleteGlobalCluster"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage]: (DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage)[K]
    }>): DBClusterParameterGroupDetails {
        return this.client.describeDBClusterParameters(
            this.ops["DescribeDBClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage]: (DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage)[K]
    }>): DescribeDBClusterSnapshotAttributesResult {
        return this.client.describeDBClusterSnapshotAttributes(
            this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage]: (DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage)[K]
    }>): DescribeEngineDefaultClusterParametersResult {
        return this.client.describeEngineDefaultClusterParameters(
            this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage]: (DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): OrderableDBInstanceOptionsMessage {
        return this.client.describeOrderableDBInstanceOptions(
            this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): TagListMessage {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyDBCluster(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage]: (ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage)[K]
    }>): ModifyDBClusterResult {
        return this.client.modifyDBCluster(
            this.ops["ModifyDBCluster"].apply(partialParams)
        );
    }

    invokeModifyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage]: (ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage)[K]
    }>): DBClusterParameterGroupNameMessage {
        return this.client.modifyDBClusterParameterGroup(
            this.ops["ModifyDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyDBClusterSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage]: (ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage)[K]
    }>): ModifyDBClusterSnapshotAttributeResult {
        return this.client.modifyDBClusterSnapshotAttribute(
            this.ops["ModifyDBClusterSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifyDBInstance(partialParams: ToOptional<{
      [K in keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage]: (ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage)[K]
    }>): ModifyDBInstanceResult {
        return this.client.modifyDBInstance(
            this.ops["ModifyDBInstance"].apply(partialParams)
        );
    }

    invokeModifyDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage]: (ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage)[K]
    }>): ModifyDBSubnetGroupResult {
        return this.client.modifyDBSubnetGroup(
            this.ops["ModifyDBSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): ModifyEventSubscriptionResult {
        return this.client.modifyEventSubscription(
            this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokeModifyGlobalCluster(partialParams: ToOptional<{
      [K in keyof ModifyGlobalClusterMessage & keyof ModifyGlobalClusterMessage & keyof ModifyGlobalClusterMessage & keyof ModifyGlobalClusterMessage]: (ModifyGlobalClusterMessage & ModifyGlobalClusterMessage & ModifyGlobalClusterMessage & ModifyGlobalClusterMessage)[K]
    }>): ModifyGlobalClusterResult {
        return this.client.modifyGlobalCluster(
            this.ops["ModifyGlobalCluster"].apply(partialParams)
        );
    }

    invokeRebootDBInstance(partialParams: ToOptional<{
      [K in keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage]: (RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage)[K]
    }>): RebootDBInstanceResult {
        return this.client.rebootDBInstance(
            this.ops["RebootDBInstance"].apply(partialParams)
        );
    }

    invokeRemoveFromGlobalCluster(partialParams: ToOptional<{
      [K in keyof RemoveFromGlobalClusterMessage & keyof RemoveFromGlobalClusterMessage & keyof RemoveFromGlobalClusterMessage & keyof RemoveFromGlobalClusterMessage]: (RemoveFromGlobalClusterMessage & RemoveFromGlobalClusterMessage & RemoveFromGlobalClusterMessage & RemoveFromGlobalClusterMessage)[K]
    }>): RemoveFromGlobalClusterResult {
        return this.client.removeFromGlobalCluster(
            this.ops["RemoveFromGlobalCluster"].apply(partialParams)
        );
    }

    invokeRemoveSourceIdentifierFromSubscription(partialParams: ToOptional<{
      [K in keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage]: (RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage)[K]
    }>): RemoveSourceIdentifierFromSubscriptionResult {
        return this.client.removeSourceIdentifierFromSubscription(
            this.ops["RemoveSourceIdentifierFromSubscription"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): void {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage]: (ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage)[K]
    }>): DBClusterParameterGroupNameMessage {
        return this.client.resetDBClusterParameterGroup(
            this.ops["ResetDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage]: (RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage)[K]
    }>): RestoreDBClusterFromSnapshotResult {
        return this.client.restoreDBClusterFromSnapshot(
            this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage]: (RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage)[K]
    }>): RestoreDBClusterToPointInTimeResult {
        return this.client.restoreDBClusterToPointInTime(
            this.ops["RestoreDBClusterToPointInTime"].apply(partialParams)
        );
    }

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage]: (StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage)[K]
    }>): StartDBClusterResult {
        return this.client.startDBCluster(
            this.ops["StartDBCluster"].apply(partialParams)
        );
    }

    invokeStopDBCluster(partialParams: ToOptional<{
      [K in keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage]: (StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage)[K]
    }>): StopDBClusterResult {
        return this.client.stopDBCluster(
            this.ops["StopDBCluster"].apply(partialParams)
        );
    }
}