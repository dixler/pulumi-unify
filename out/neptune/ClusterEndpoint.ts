
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    constructor(...args: ConstructorParameters<typeof aws.neptune.ClusterEndpoint>) {
        super(...args)
        this.client = new awssdk.Neptune()
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
      [K in keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage & keyof AddRoleToDBClusterMessage]: (AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage & AddRoleToDBClusterMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToDBCluster(
          this.ops["AddRoleToDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeAddSourceIdentifierToSubscription(partialParams: ToOptional<{
      [K in keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage & keyof AddSourceIdentifierToSubscriptionMessage]: (AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage & AddSourceIdentifierToSubscriptionMessage)[K]
    }>): Request<AddSourceIdentifierToSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addSourceIdentifierToSubscription(
          this.ops["AddSourceIdentifierToSubscription"].applicator.apply(partialParams)
        );
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): Request<ApplyPendingMaintenanceActionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applyPendingMaintenanceAction(
          this.ops["ApplyPendingMaintenanceAction"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage & keyof CopyDBClusterParameterGroupMessage]: (CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage & CopyDBClusterParameterGroupMessage)[K]
    }>): Request<CopyDBClusterParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBClusterParameterGroup(
          this.ops["CopyDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage & keyof CopyDBClusterSnapshotMessage]: (CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage & CopyDBClusterSnapshotMessage)[K]
    }>): Request<CopyDBClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBClusterSnapshot(
          this.ops["CopyDBClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCopyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage & keyof CopyDBParameterGroupMessage]: (CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage & CopyDBParameterGroupMessage)[K]
    }>): Request<CopyDBParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBParameterGroup(
          this.ops["CopyDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage & keyof CreateDBClusterMessage]: (CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage & CreateDBClusterMessage)[K]
    }>): Request<CreateDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBCluster(
          this.ops["CreateDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage & keyof CreateDBClusterEndpointMessage]: (CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage & CreateDBClusterEndpointMessage)[K]
    }>): Request<CreateDBClusterEndpointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterEndpoint(
          this.ops["CreateDBClusterEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage & keyof CreateDBClusterParameterGroupMessage]: (CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage & CreateDBClusterParameterGroupMessage)[K]
    }>): Request<CreateDBClusterParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterParameterGroup(
          this.ops["CreateDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage & keyof CreateDBClusterSnapshotMessage]: (CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage & CreateDBClusterSnapshotMessage)[K]
    }>): Request<CreateDBClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterSnapshot(
          this.ops["CreateDBClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage & keyof CreateDBInstanceMessage]: (CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage & CreateDBInstanceMessage)[K]
    }>): Request<CreateDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBInstance(
          this.ops["CreateDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage & keyof CreateDBParameterGroupMessage]: (CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage & CreateDBParameterGroupMessage)[K]
    }>): Request<CreateDBParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBParameterGroup(
          this.ops["CreateDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage & keyof CreateDBSubnetGroupMessage]: (CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage & CreateDBSubnetGroupMessage)[K]
    }>): Request<CreateDBSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSubnetGroup(
          this.ops["CreateDBSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBCluster(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage & keyof DeleteDBClusterMessage]: (DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage & DeleteDBClusterMessage)[K]
    }>): Request<DeleteDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBCluster(
          this.ops["DeleteDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage & keyof DeleteDBClusterEndpointMessage]: (DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage & DeleteDBClusterEndpointMessage)[K]
    }>): Request<DeleteDBClusterEndpointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterEndpoint(
          this.ops["DeleteDBClusterEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage & keyof DeleteDBClusterParameterGroupMessage]: (DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage & DeleteDBClusterParameterGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterParameterGroup(
          this.ops["DeleteDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage & keyof DeleteDBClusterSnapshotMessage]: (DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage & DeleteDBClusterSnapshotMessage)[K]
    }>): Request<DeleteDBClusterSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterSnapshot(
          this.ops["DeleteDBClusterSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBInstance(partialParams: ToOptional<{
      [K in keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage & keyof DeleteDBInstanceMessage]: (DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage & DeleteDBInstanceMessage)[K]
    }>): Request<DeleteDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBInstance(
          this.ops["DeleteDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage & keyof DeleteDBParameterGroupMessage]: (DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage & DeleteDBParameterGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBParameterGroup(
          this.ops["DeleteDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage & keyof DeleteDBSubnetGroupMessage]: (DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage & DeleteDBSubnetGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSubnetGroup(
          this.ops["DeleteDBSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): Request<DeleteEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage & keyof DescribeDBClusterParametersMessage]: (DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage & DescribeDBClusterParametersMessage)[K]
    }>): Request<DBClusterParameterGroupDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterParameters(
          this.ops["DescribeDBClusterParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBClusterSnapshotAttributes(partialParams: ToOptional<{
      [K in keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage & keyof DescribeDBClusterSnapshotAttributesMessage]: (DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage & DescribeDBClusterSnapshotAttributesMessage)[K]
    }>): Request<DescribeDBClusterSnapshotAttributesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterSnapshotAttributes(
          this.ops["DescribeDBClusterSnapshotAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDBParameters(partialParams: ToOptional<{
      [K in keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage & keyof DescribeDBParametersMessage]: (DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage & DescribeDBParametersMessage)[K]
    }>): Request<DBParameterGroupDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBParameters(
          this.ops["DescribeDBParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultClusterParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage & keyof DescribeEngineDefaultClusterParametersMessage]: (DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage & DescribeEngineDefaultClusterParametersMessage)[K]
    }>): Request<DescribeEngineDefaultClusterParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(
          this.ops["DescribeEngineDefaultClusterParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage)[K]
    }>): Request<DescribeEngineDefaultParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultParameters(
          this.ops["DescribeEngineDefaultParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage & keyof DescribeOrderableDBInstanceOptionsMessage]: (DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage & DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): Request<OrderableDBInstanceOptionsMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(
          this.ops["DescribeOrderableDBInstanceOptions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeValidDBInstanceModifications(partialParams: ToOptional<{
      [K in keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage & keyof DescribeValidDBInstanceModificationsMessage]: (DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage & DescribeValidDBInstanceModificationsMessage)[K]
    }>): Request<DescribeValidDBInstanceModificationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeValidDBInstanceModifications(
          this.ops["DescribeValidDBInstanceModifications"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBCluster(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage & keyof ModifyDBClusterMessage]: (ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage & ModifyDBClusterMessage)[K]
    }>): Request<ModifyDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBCluster(
          this.ops["ModifyDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBClusterEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage & keyof ModifyDBClusterEndpointMessage]: (ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage & ModifyDBClusterEndpointMessage)[K]
    }>): Request<ModifyDBClusterEndpointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterEndpoint(
          this.ops["ModifyDBClusterEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage & keyof ModifyDBClusterParameterGroupMessage]: (ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage & ModifyDBClusterParameterGroupMessage)[K]
    }>): Request<DBClusterParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterParameterGroup(
          this.ops["ModifyDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBClusterSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage & keyof ModifyDBClusterSnapshotAttributeMessage]: (ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage & ModifyDBClusterSnapshotAttributeMessage)[K]
    }>): Request<ModifyDBClusterSnapshotAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterSnapshotAttribute(
          this.ops["ModifyDBClusterSnapshotAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBInstance(partialParams: ToOptional<{
      [K in keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage & keyof ModifyDBInstanceMessage]: (ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage & ModifyDBInstanceMessage)[K]
    }>): Request<ModifyDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBInstance(
          this.ops["ModifyDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage & keyof ModifyDBParameterGroupMessage]: (ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage & ModifyDBParameterGroupMessage)[K]
    }>): Request<DBParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBParameterGroup(
          this.ops["ModifyDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyDBSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage & keyof ModifyDBSubnetGroupMessage]: (ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage & ModifyDBSubnetGroupMessage)[K]
    }>): Request<ModifyDBSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSubnetGroup(
          this.ops["ModifyDBSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): Request<ModifyEventSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(
          this.ops["ModifyEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokePromoteReadReplicaDBCluster(partialParams: ToOptional<{
      [K in keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage & keyof PromoteReadReplicaDBClusterMessage]: (PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage & PromoteReadReplicaDBClusterMessage)[K]
    }>): Request<PromoteReadReplicaDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteReadReplicaDBCluster(
          this.ops["PromoteReadReplicaDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeRebootDBInstance(partialParams: ToOptional<{
      [K in keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage & keyof RebootDBInstanceMessage]: (RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage & RebootDBInstanceMessage)[K]
    }>): Request<RebootDBInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootDBInstance(
          this.ops["RebootDBInstance"].applicator.apply(partialParams)
        );
    }

    invokeRemoveRoleFromDBCluster(partialParams: ToOptional<{
      [K in keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage & keyof RemoveRoleFromDBClusterMessage]: (RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage & RemoveRoleFromDBClusterMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromDBCluster(
          this.ops["RemoveRoleFromDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeRemoveSourceIdentifierFromSubscription(partialParams: ToOptional<{
      [K in keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage & keyof RemoveSourceIdentifierFromSubscriptionMessage]: (RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage & RemoveSourceIdentifierFromSubscriptionMessage)[K]
    }>): Request<RemoveSourceIdentifierFromSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeSourceIdentifierFromSubscription(
          this.ops["RemoveSourceIdentifierFromSubscription"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeResetDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage & keyof ResetDBClusterParameterGroupMessage]: (ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage & ResetDBClusterParameterGroupMessage)[K]
    }>): Request<DBClusterParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetDBClusterParameterGroup(
          this.ops["ResetDBClusterParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeResetDBParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage & keyof ResetDBParameterGroupMessage]: (ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage & ResetDBParameterGroupMessage)[K]
    }>): Request<DBParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetDBParameterGroup(
          this.ops["ResetDBParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage & keyof RestoreDBClusterFromSnapshotMessage]: (RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage & RestoreDBClusterFromSnapshotMessage)[K]
    }>): Request<RestoreDBClusterFromSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(
          this.ops["RestoreDBClusterFromSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDBClusterToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage & keyof RestoreDBClusterToPointInTimeMessage]: (RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage & RestoreDBClusterToPointInTimeMessage)[K]
    }>): Request<RestoreDBClusterToPointInTimeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterToPointInTime(
          this.ops["RestoreDBClusterToPointInTime"].applicator.apply(partialParams)
        );
    }

    invokeStartDBCluster(partialParams: ToOptional<{
      [K in keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage & keyof StartDBClusterMessage]: (StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage & StartDBClusterMessage)[K]
    }>): Request<StartDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBCluster(
          this.ops["StartDBCluster"].applicator.apply(partialParams)
        );
    }

    invokeStopDBCluster(partialParams: ToOptional<{
      [K in keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage & keyof StopDBClusterMessage]: (StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage & StopDBClusterMessage)[K]
    }>): Request<StopDBClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBCluster(
          this.ops["StopDBCluster"].applicator.apply(partialParams)
        );
    }
}