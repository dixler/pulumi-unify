
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsToResourceMessage,
    AuthorizeCacheSecurityGroupIngressMessage,
    BatchApplyUpdateActionMessage,
    BatchStopUpdateActionMessage,
    CompleteMigrationMessage,
    CopySnapshotMessage,
    CreateCacheClusterMessage,
    CreateCacheParameterGroupMessage,
    CreateCacheSecurityGroupMessage,
    CreateCacheSubnetGroupMessage,
    CreateGlobalReplicationGroupMessage,
    CreateReplicationGroupMessage,
    CreateSnapshotMessage,
    CreateUserMessage,
    CreateUserGroupMessage,
    DecreaseNodeGroupsInGlobalReplicationGroupMessage,
    DecreaseReplicaCountMessage,
    DeleteCacheClusterMessage,
    DeleteGlobalReplicationGroupMessage,
    DeleteReplicationGroupMessage,
    DeleteSnapshotMessage,
    DeleteUserMessage,
    DeleteUserGroupMessage,
    DescribeCacheClustersMessage,
    DescribeCacheEngineVersionsMessage,
    DescribeCacheParameterGroupsMessage,
    DescribeCacheParametersMessage,
    DescribeCacheSecurityGroupsMessage,
    DescribeCacheSubnetGroupsMessage,
    DescribeEngineDefaultParametersMessage,
    DescribeEventsMessage,
    DescribeGlobalReplicationGroupsMessage,
    DescribeReplicationGroupsMessage,
    DescribeReservedCacheNodesMessage,
    DescribeReservedCacheNodesOfferingsMessage,
    DescribeServiceUpdatesMessage,
    DescribeSnapshotsMessage,
    DescribeUpdateActionsMessage,
    DescribeUserGroupsMessage,
    DescribeUsersMessage,
    DisassociateGlobalReplicationGroupMessage,
    FailoverGlobalReplicationGroupMessage,
    IncreaseNodeGroupsInGlobalReplicationGroupMessage,
    IncreaseReplicaCountMessage,
    ListAllowedNodeTypeModificationsMessage,
    ListTagsForResourceMessage,
    ModifyCacheClusterMessage,
    ModifyCacheParameterGroupMessage,
    ModifyCacheSubnetGroupMessage,
    ModifyGlobalReplicationGroupMessage,
    ModifyReplicationGroupMessage,
    ModifyReplicationGroupShardConfigurationMessage,
    ModifyUserMessage,
    ModifyUserGroupMessage,
    PurchaseReservedCacheNodesOfferingMessage,
    RebalanceSlotsInGlobalReplicationGroupMessage,
    RebootCacheClusterMessage,
    RemoveTagsFromResourceMessage,
    ResetCacheParameterGroupMessage,
    RevokeCacheSecurityGroupIngressMessage,
    StartMigrationMessage,
    TestFailoverMessage,
    TagListMessage,
    AuthorizeCacheSecurityGroupIngressResult,
    UpdateActionResultsMessage,
    CompleteMigrationResponse,
    CopySnapshotResult,
    CreateCacheClusterResult,
    CreateCacheParameterGroupResult,
    CreateCacheSecurityGroupResult,
    CreateCacheSubnetGroupResult,
    CreateGlobalReplicationGroupResult,
    CreateReplicationGroupResult,
    CreateSnapshotResult,
    User,
    UserGroup,
    DecreaseNodeGroupsInGlobalReplicationGroupResult,
    DecreaseReplicaCountResult,
    DeleteCacheClusterResult,
    DeleteGlobalReplicationGroupResult,
    DeleteReplicationGroupResult,
    DeleteSnapshotResult,
    CacheClusterMessage,
    CacheEngineVersionMessage,
    CacheParameterGroupsMessage,
    CacheParameterGroupDetails,
    CacheSecurityGroupMessage,
    CacheSubnetGroupMessage,
    DescribeEngineDefaultParametersResult,
    EventsMessage,
    DescribeGlobalReplicationGroupsResult,
    ReplicationGroupMessage,
    ReservedCacheNodeMessage,
    ReservedCacheNodesOfferingMessage,
    ServiceUpdatesMessage,
    DescribeSnapshotsListMessage,
    UpdateActionsMessage,
    DescribeUserGroupsResult,
    DescribeUsersResult,
    DisassociateGlobalReplicationGroupResult,
    FailoverGlobalReplicationGroupResult,
    IncreaseNodeGroupsInGlobalReplicationGroupResult,
    IncreaseReplicaCountResult,
    AllowedNodeTypeModificationsMessage,
    ModifyCacheClusterResult,
    CacheParameterGroupNameMessage,
    ModifyCacheSubnetGroupResult,
    ModifyGlobalReplicationGroupResult,
    ModifyReplicationGroupResult,
    ModifyReplicationGroupShardConfigurationResult,
    PurchaseReservedCacheNodesOfferingResult,
    RebalanceSlotsInGlobalReplicationGroupResult,
    RebootCacheClusterResult,
    RevokeCacheSecurityGroupIngressResult,
    StartMigrationResponse,
    TestFailoverResult
} from "aws-sdk/clients/elasticache";
const schema = require("../apis/elasticache-2015-02-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticache.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticache.Cluster>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ElastiCache()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAuthorizeCacheSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeCacheSecurityGroupIngressMessage]: (AuthorizeCacheSecurityGroupIngressMessage)[K]
    }>): Request<AuthorizeCacheSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.authorizeCacheSecurityGroupIngress(
          this.ops["AuthorizeCacheSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeBatchApplyUpdateAction(partialParams: ToOptional<{
      [K in keyof BatchApplyUpdateActionMessage]: (BatchApplyUpdateActionMessage)[K]
    }>): Request<UpdateActionResultsMessage, AWSError> {
        this.boot();
        return this.client.batchApplyUpdateAction(
          this.ops["BatchApplyUpdateAction"].apply(partialParams)
        );
    }

    invokeBatchStopUpdateAction(partialParams: ToOptional<{
      [K in keyof BatchStopUpdateActionMessage]: (BatchStopUpdateActionMessage)[K]
    }>): Request<UpdateActionResultsMessage, AWSError> {
        this.boot();
        return this.client.batchStopUpdateAction(
          this.ops["BatchStopUpdateAction"].apply(partialParams)
        );
    }

    invokeCompleteMigration(partialParams: ToOptional<{
      [K in keyof CompleteMigrationMessage & keyof Omit<CompleteMigrationMessage, "ReplicationGroupId">]: (CompleteMigrationMessage)[K]
    }>): Request<CompleteMigrationResponse, AWSError> {
        this.boot();
        return this.client.completeMigration(
          this.ops["CompleteMigration"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotMessage]: (CopySnapshotMessage)[K]
    }>): Request<CopySnapshotResult, AWSError> {
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateCacheCluster(partialParams: ToOptional<{
      [K in keyof CreateCacheClusterMessage]: (CreateCacheClusterMessage)[K]
    }>): Request<CreateCacheClusterResult, AWSError> {
        this.boot();
        return this.client.createCacheCluster(
          this.ops["CreateCacheCluster"].apply(partialParams)
        );
    }

    invokeCreateCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheParameterGroupMessage]: (CreateCacheParameterGroupMessage)[K]
    }>): Request<CreateCacheParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createCacheParameterGroup(
          this.ops["CreateCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateCacheSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheSecurityGroupMessage]: (CreateCacheSecurityGroupMessage)[K]
    }>): Request<CreateCacheSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createCacheSecurityGroup(
          this.ops["CreateCacheSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheSubnetGroupMessage]: (CreateCacheSubnetGroupMessage)[K]
    }>): Request<CreateCacheSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.createCacheSubnetGroup(
          this.ops["CreateCacheSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateGlobalReplicationGroupMessage]: (CreateGlobalReplicationGroupMessage)[K]
    }>): Request<CreateGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.createGlobalReplicationGroup(
          this.ops["CreateGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeCreateReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationGroupMessage & keyof Omit<CreateReplicationGroupMessage, "ReplicationGroupId">]: (CreateReplicationGroupMessage)[K]
    }>): Request<CreateReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.createReplicationGroup(
          this.ops["CreateReplicationGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotMessage & keyof Omit<CreateSnapshotMessage, "SnapshotName">]: (CreateSnapshotMessage)[K]
    }>): Request<CreateSnapshotResult, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserMessage & keyof Omit<CreateUserMessage, "Engine">]: (CreateUserMessage)[K]
    }>): Request<User, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserGroup(partialParams: ToOptional<{
      [K in keyof CreateUserGroupMessage & keyof Omit<CreateUserGroupMessage, "Engine">]: (CreateUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.createUserGroup(
          this.ops["CreateUserGroup"].apply(partialParams)
        );
    }

    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage]: (DecreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): Request<DecreaseNodeGroupsInGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(
          this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeDecreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof DecreaseReplicaCountMessage & keyof Omit<DecreaseReplicaCountMessage, "ReplicationGroupId">]: (DecreaseReplicaCountMessage)[K]
    }>): Request<DecreaseReplicaCountResult, AWSError> {
        this.boot();
        return this.client.decreaseReplicaCount(
          this.ops["DecreaseReplicaCount"].apply(partialParams)
        );
    }

    invokeDeleteCacheCluster(partialParams: ToOptional<{
      [K in keyof DeleteCacheClusterMessage]: (DeleteCacheClusterMessage)[K]
    }>): Request<DeleteCacheClusterResult, AWSError> {
        this.boot();
        return this.client.deleteCacheCluster(
          this.ops["DeleteCacheCluster"].apply(partialParams)
        );
    }

    invokeDeleteGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteGlobalReplicationGroupMessage]: (DeleteGlobalReplicationGroupMessage)[K]
    }>): Request<DeleteGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.deleteGlobalReplicationGroup(
          this.ops["DeleteGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeDeleteReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationGroupMessage & keyof Omit<DeleteReplicationGroupMessage, "ReplicationGroupId">]: (DeleteReplicationGroupMessage)[K]
    }>): Request<DeleteReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.deleteReplicationGroup(
          this.ops["DeleteReplicationGroup"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotMessage & keyof Omit<DeleteSnapshotMessage, "SnapshotName">]: (DeleteSnapshotMessage)[K]
    }>): Request<DeleteSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserMessage]: (DeleteUserMessage)[K]
    }>): Request<User, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserGroupMessage]: (DeleteUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.deleteUserGroup(
          this.ops["DeleteUserGroup"].apply(partialParams)
        );
    }

    invokeDescribeCacheClusters(partialParams: ToOptional<{
      [K in keyof DescribeCacheClustersMessage]: (DescribeCacheClustersMessage)[K]
    }>): Request<CacheClusterMessage, AWSError> {
        this.boot();
        return this.client.describeCacheClusters(
          this.ops["DescribeCacheClusters"].apply(partialParams)
        );
    }

    invokeDescribeCacheEngineVersions(partialParams: ToOptional<{
      [K in keyof DescribeCacheEngineVersionsMessage]: (DescribeCacheEngineVersionsMessage)[K]
    }>): Request<CacheEngineVersionMessage, AWSError> {
        this.boot();
        return this.client.describeCacheEngineVersions(
          this.ops["DescribeCacheEngineVersions"].apply(partialParams)
        );
    }

    invokeDescribeCacheParameterGroups(partialParams: ToOptional<{
      [K in keyof DescribeCacheParameterGroupsMessage]: (DescribeCacheParameterGroupsMessage)[K]
    }>): Request<CacheParameterGroupsMessage, AWSError> {
        this.boot();
        return this.client.describeCacheParameterGroups(
          this.ops["DescribeCacheParameterGroups"].apply(partialParams)
        );
    }

    invokeDescribeCacheParameters(partialParams: ToOptional<{
      [K in keyof DescribeCacheParametersMessage]: (DescribeCacheParametersMessage)[K]
    }>): Request<CacheParameterGroupDetails, AWSError> {
        this.boot();
        return this.client.describeCacheParameters(
          this.ops["DescribeCacheParameters"].apply(partialParams)
        );
    }

    invokeDescribeCacheSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeCacheSecurityGroupsMessage]: (DescribeCacheSecurityGroupsMessage)[K]
    }>): Request<CacheSecurityGroupMessage, AWSError> {
        this.boot();
        return this.client.describeCacheSecurityGroups(
          this.ops["DescribeCacheSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeCacheSubnetGroups(partialParams: ToOptional<{
      [K in keyof DescribeCacheSubnetGroupsMessage]: (DescribeCacheSubnetGroupsMessage)[K]
    }>): Request<CacheSubnetGroupMessage, AWSError> {
        this.boot();
        return this.client.describeCacheSubnetGroups(
          this.ops["DescribeCacheSubnetGroups"].apply(partialParams)
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

    invokeDescribeEvents(partialParams: ToOptional<{
      [K in keyof DescribeEventsMessage]: (DescribeEventsMessage)[K]
    }>): Request<EventsMessage, AWSError> {
        this.boot();
        return this.client.describeEvents(
          this.ops["DescribeEvents"].apply(partialParams)
        );
    }

    invokeDescribeGlobalReplicationGroups(partialParams: ToOptional<{
      [K in keyof DescribeGlobalReplicationGroupsMessage]: (DescribeGlobalReplicationGroupsMessage)[K]
    }>): Request<DescribeGlobalReplicationGroupsResult, AWSError> {
        this.boot();
        return this.client.describeGlobalReplicationGroups(
          this.ops["DescribeGlobalReplicationGroups"].apply(partialParams)
        );
    }

    invokeDescribeReplicationGroups(partialParams: ToOptional<{
      [K in keyof DescribeReplicationGroupsMessage]: (DescribeReplicationGroupsMessage)[K]
    }>): Request<ReplicationGroupMessage, AWSError> {
        this.boot();
        return this.client.describeReplicationGroups(
          this.ops["DescribeReplicationGroups"].apply(partialParams)
        );
    }

    invokeDescribeReservedCacheNodes(partialParams: ToOptional<{
      [K in keyof DescribeReservedCacheNodesMessage]: (DescribeReservedCacheNodesMessage)[K]
    }>): Request<ReservedCacheNodeMessage, AWSError> {
        this.boot();
        return this.client.describeReservedCacheNodes(
          this.ops["DescribeReservedCacheNodes"].apply(partialParams)
        );
    }

    invokeDescribeReservedCacheNodesOfferings(partialParams: ToOptional<{
      [K in keyof DescribeReservedCacheNodesOfferingsMessage]: (DescribeReservedCacheNodesOfferingsMessage)[K]
    }>): Request<ReservedCacheNodesOfferingMessage, AWSError> {
        this.boot();
        return this.client.describeReservedCacheNodesOfferings(
          this.ops["DescribeReservedCacheNodesOfferings"].apply(partialParams)
        );
    }

    invokeDescribeServiceUpdates(partialParams: ToOptional<{
      [K in keyof DescribeServiceUpdatesMessage]: (DescribeServiceUpdatesMessage)[K]
    }>): Request<ServiceUpdatesMessage, AWSError> {
        this.boot();
        return this.client.describeServiceUpdates(
          this.ops["DescribeServiceUpdates"].apply(partialParams)
        );
    }

    invokeDescribeSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotsMessage]: (DescribeSnapshotsMessage)[K]
    }>): Request<DescribeSnapshotsListMessage, AWSError> {
        this.boot();
        return this.client.describeSnapshots(
          this.ops["DescribeSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeUpdateActions(partialParams: ToOptional<{
      [K in keyof DescribeUpdateActionsMessage]: (DescribeUpdateActionsMessage)[K]
    }>): Request<UpdateActionsMessage, AWSError> {
        this.boot();
        return this.client.describeUpdateActions(
          this.ops["DescribeUpdateActions"].apply(partialParams)
        );
    }

    invokeDescribeUserGroups(partialParams: ToOptional<{
      [K in keyof DescribeUserGroupsMessage]: (DescribeUserGroupsMessage)[K]
    }>): Request<DescribeUserGroupsResult, AWSError> {
        this.boot();
        return this.client.describeUserGroups(
          this.ops["DescribeUserGroups"].apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersMessage]: (DescribeUsersMessage)[K]
    }>): Request<DescribeUsersResult, AWSError> {
        this.boot();
        return this.client.describeUsers(
          this.ops["DescribeUsers"].apply(partialParams)
        );
    }

    invokeDisassociateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DisassociateGlobalReplicationGroupMessage & keyof Omit<DisassociateGlobalReplicationGroupMessage, "ReplicationGroupId">]: (DisassociateGlobalReplicationGroupMessage)[K]
    }>): Request<DisassociateGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(
          this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeFailoverGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof FailoverGlobalReplicationGroupMessage]: (FailoverGlobalReplicationGroupMessage)[K]
    }>): Request<FailoverGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.failoverGlobalReplicationGroup(
          this.ops["FailoverGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage]: (IncreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): Request<IncreaseNodeGroupsInGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(
          this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeIncreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof IncreaseReplicaCountMessage & keyof Omit<IncreaseReplicaCountMessage, "ReplicationGroupId">]: (IncreaseReplicaCountMessage)[K]
    }>): Request<IncreaseReplicaCountResult, AWSError> {
        this.boot();
        return this.client.increaseReplicaCount(
          this.ops["IncreaseReplicaCount"].apply(partialParams)
        );
    }

    invokeListAllowedNodeTypeModifications(partialParams: ToOptional<{
      [K in keyof ListAllowedNodeTypeModificationsMessage]: (ListAllowedNodeTypeModificationsMessage)[K]
    }>): Request<AllowedNodeTypeModificationsMessage, AWSError> {
        this.boot();
        return this.client.listAllowedNodeTypeModifications(
          this.ops["ListAllowedNodeTypeModifications"].apply(partialParams)
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

    invokeModifyCacheCluster(partialParams: ToOptional<{
      [K in keyof ModifyCacheClusterMessage]: (ModifyCacheClusterMessage)[K]
    }>): Request<ModifyCacheClusterResult, AWSError> {
        this.boot();
        return this.client.modifyCacheCluster(
          this.ops["ModifyCacheCluster"].apply(partialParams)
        );
    }

    invokeModifyCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyCacheParameterGroupMessage]: (ModifyCacheParameterGroupMessage)[K]
    }>): Request<CacheParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.modifyCacheParameterGroup(
          this.ops["ModifyCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyCacheSubnetGroupMessage]: (ModifyCacheSubnetGroupMessage)[K]
    }>): Request<ModifyCacheSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.modifyCacheSubnetGroup(
          this.ops["ModifyCacheSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyGlobalReplicationGroupMessage]: (ModifyGlobalReplicationGroupMessage)[K]
    }>): Request<ModifyGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.modifyGlobalReplicationGroup(
          this.ops["ModifyGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupMessage & keyof Omit<ModifyReplicationGroupMessage, "ReplicationGroupId">]: (ModifyReplicationGroupMessage)[K]
    }>): Request<ModifyReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.modifyReplicationGroup(
          this.ops["ModifyReplicationGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationGroupShardConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupShardConfigurationMessage & keyof Omit<ModifyReplicationGroupShardConfigurationMessage, "ReplicationGroupId">]: (ModifyReplicationGroupShardConfigurationMessage)[K]
    }>): Request<ModifyReplicationGroupShardConfigurationResult, AWSError> {
        this.boot();
        return this.client.modifyReplicationGroupShardConfiguration(
          this.ops["ModifyReplicationGroupShardConfiguration"].apply(partialParams)
        );
    }

    invokeModifyUser(partialParams: ToOptional<{
      [K in keyof ModifyUserMessage]: (ModifyUserMessage)[K]
    }>): Request<User, AWSError> {
        this.boot();
        return this.client.modifyUser(
          this.ops["ModifyUser"].apply(partialParams)
        );
    }

    invokeModifyUserGroup(partialParams: ToOptional<{
      [K in keyof ModifyUserGroupMessage]: (ModifyUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        this.boot();
        return this.client.modifyUserGroup(
          this.ops["ModifyUserGroup"].apply(partialParams)
        );
    }

    invokePurchaseReservedCacheNodesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedCacheNodesOfferingMessage]: (PurchaseReservedCacheNodesOfferingMessage)[K]
    }>): Request<PurchaseReservedCacheNodesOfferingResult, AWSError> {
        this.boot();
        return this.client.purchaseReservedCacheNodesOffering(
          this.ops["PurchaseReservedCacheNodesOffering"].apply(partialParams)
        );
    }

    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof RebalanceSlotsInGlobalReplicationGroupMessage]: (RebalanceSlotsInGlobalReplicationGroupMessage)[K]
    }>): Request<RebalanceSlotsInGlobalReplicationGroupResult, AWSError> {
        this.boot();
        return this.client.rebalanceSlotsInGlobalReplicationGroup(
          this.ops["RebalanceSlotsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeRebootCacheCluster(partialParams: ToOptional<{
      [K in keyof RebootCacheClusterMessage]: (RebootCacheClusterMessage)[K]
    }>): Request<RebootCacheClusterResult, AWSError> {
        this.boot();
        return this.client.rebootCacheCluster(
          this.ops["RebootCacheCluster"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetCacheParameterGroupMessage]: (ResetCacheParameterGroupMessage)[K]
    }>): Request<CacheParameterGroupNameMessage, AWSError> {
        this.boot();
        return this.client.resetCacheParameterGroup(
          this.ops["ResetCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeRevokeCacheSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeCacheSecurityGroupIngressMessage]: (RevokeCacheSecurityGroupIngressMessage)[K]
    }>): Request<RevokeCacheSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.revokeCacheSecurityGroupIngress(
          this.ops["RevokeCacheSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeStartMigration(partialParams: ToOptional<{
      [K in keyof StartMigrationMessage & keyof Omit<StartMigrationMessage, "ReplicationGroupId">]: (StartMigrationMessage)[K]
    }>): Request<StartMigrationResponse, AWSError> {
        this.boot();
        return this.client.startMigration(
          this.ops["StartMigration"].apply(partialParams)
        );
    }

    invokeTestFailover(partialParams: ToOptional<{
      [K in keyof TestFailoverMessage & keyof Omit<TestFailoverMessage, "ReplicationGroupId">]: (TestFailoverMessage)[K]
    }>): Request<TestFailoverResult, AWSError> {
        this.boot();
        return this.client.testFailover(
          this.ops["TestFailover"].apply(partialParams)
        );
    }
}