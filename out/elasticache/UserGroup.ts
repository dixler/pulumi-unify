
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    DeleteCacheParameterGroupMessage,
    DeleteCacheSecurityGroupMessage,
    DeleteCacheSubnetGroupMessage,
    DeleteGlobalReplicationGroupMessage,
    DeleteReplicationGroupMessage,
    DeleteSnapshotMessage,
    DeleteUserMessage,
    DeleteUserGroupMessage,
    DescribeCacheParametersMessage,
    DescribeEngineDefaultParametersMessage,
    DisassociateGlobalReplicationGroupMessage,
    FailoverGlobalReplicationGroupMessage,
    IncreaseNodeGroupsInGlobalReplicationGroupMessage,
    IncreaseReplicaCountMessage,
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
    CacheParameterGroupDetails,
    DescribeEngineDefaultParametersResult,
    DisassociateGlobalReplicationGroupResult,
    FailoverGlobalReplicationGroupResult,
    IncreaseNodeGroupsInGlobalReplicationGroupResult,
    IncreaseReplicaCountResult,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticache.UserGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.elasticache.UserGroup>) {
        super(...args)
        this.client = new awssdk.ElastiCache()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/elasticache-2015-02-02.normal.json"), this.client)
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): TagListMessage {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAuthorizeCacheSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeCacheSecurityGroupIngressMessage & keyof AuthorizeCacheSecurityGroupIngressMessage & keyof AuthorizeCacheSecurityGroupIngressMessage]: (AuthorizeCacheSecurityGroupIngressMessage & AuthorizeCacheSecurityGroupIngressMessage & AuthorizeCacheSecurityGroupIngressMessage)[K]
    }>): AuthorizeCacheSecurityGroupIngressResult {
        return this.client.authorizeCacheSecurityGroupIngress(
            this.ops["AuthorizeCacheSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeBatchApplyUpdateAction(partialParams: ToOptional<{
      [K in keyof BatchApplyUpdateActionMessage & keyof BatchApplyUpdateActionMessage & keyof BatchApplyUpdateActionMessage]: (BatchApplyUpdateActionMessage & BatchApplyUpdateActionMessage & BatchApplyUpdateActionMessage)[K]
    }>): UpdateActionResultsMessage {
        return this.client.batchApplyUpdateAction(
            this.ops["BatchApplyUpdateAction"].apply(partialParams)
        );
    }

    invokeBatchStopUpdateAction(partialParams: ToOptional<{
      [K in keyof BatchStopUpdateActionMessage & keyof BatchStopUpdateActionMessage & keyof BatchStopUpdateActionMessage]: (BatchStopUpdateActionMessage & BatchStopUpdateActionMessage & BatchStopUpdateActionMessage)[K]
    }>): UpdateActionResultsMessage {
        return this.client.batchStopUpdateAction(
            this.ops["BatchStopUpdateAction"].apply(partialParams)
        );
    }

    invokeCompleteMigration(partialParams: ToOptional<{
      [K in keyof CompleteMigrationMessage & keyof CompleteMigrationMessage & keyof CompleteMigrationMessage]: (CompleteMigrationMessage & CompleteMigrationMessage & CompleteMigrationMessage)[K]
    }>): CompleteMigrationResponse {
        return this.client.completeMigration(
            this.ops["CompleteMigration"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotMessage & keyof CopySnapshotMessage & keyof CopySnapshotMessage]: (CopySnapshotMessage & CopySnapshotMessage & CopySnapshotMessage)[K]
    }>): CopySnapshotResult {
        return this.client.copySnapshot(
            this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateCacheCluster(partialParams: ToOptional<{
      [K in keyof CreateCacheClusterMessage & keyof CreateCacheClusterMessage & keyof CreateCacheClusterMessage]: (CreateCacheClusterMessage & CreateCacheClusterMessage & CreateCacheClusterMessage)[K]
    }>): CreateCacheClusterResult {
        return this.client.createCacheCluster(
            this.ops["CreateCacheCluster"].apply(partialParams)
        );
    }

    invokeCreateCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheParameterGroupMessage & keyof CreateCacheParameterGroupMessage & keyof CreateCacheParameterGroupMessage]: (CreateCacheParameterGroupMessage & CreateCacheParameterGroupMessage & CreateCacheParameterGroupMessage)[K]
    }>): CreateCacheParameterGroupResult {
        return this.client.createCacheParameterGroup(
            this.ops["CreateCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateCacheSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheSecurityGroupMessage & keyof CreateCacheSecurityGroupMessage & keyof CreateCacheSecurityGroupMessage]: (CreateCacheSecurityGroupMessage & CreateCacheSecurityGroupMessage & CreateCacheSecurityGroupMessage)[K]
    }>): CreateCacheSecurityGroupResult {
        return this.client.createCacheSecurityGroup(
            this.ops["CreateCacheSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheSubnetGroupMessage & keyof CreateCacheSubnetGroupMessage & keyof CreateCacheSubnetGroupMessage]: (CreateCacheSubnetGroupMessage & CreateCacheSubnetGroupMessage & CreateCacheSubnetGroupMessage)[K]
    }>): CreateCacheSubnetGroupResult {
        return this.client.createCacheSubnetGroup(
            this.ops["CreateCacheSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateGlobalReplicationGroupMessage & keyof CreateGlobalReplicationGroupMessage & keyof CreateGlobalReplicationGroupMessage]: (CreateGlobalReplicationGroupMessage & CreateGlobalReplicationGroupMessage & CreateGlobalReplicationGroupMessage)[K]
    }>): CreateGlobalReplicationGroupResult {
        return this.client.createGlobalReplicationGroup(
            this.ops["CreateGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeCreateReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationGroupMessage & keyof CreateReplicationGroupMessage & keyof CreateReplicationGroupMessage]: (CreateReplicationGroupMessage & CreateReplicationGroupMessage & CreateReplicationGroupMessage)[K]
    }>): CreateReplicationGroupResult {
        return this.client.createReplicationGroup(
            this.ops["CreateReplicationGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotMessage & keyof CreateSnapshotMessage & keyof CreateSnapshotMessage]: (CreateSnapshotMessage & CreateSnapshotMessage & CreateSnapshotMessage)[K]
    }>): CreateSnapshotResult {
        return this.client.createSnapshot(
            this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserMessage & keyof CreateUserMessage & keyof CreateUserMessage]: (CreateUserMessage & CreateUserMessage & CreateUserMessage)[K]
    }>): User {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeCreateUserGroup(partialParams: ToOptional<{
      [K in keyof CreateUserGroupMessage & keyof CreateUserGroupMessage & keyof CreateUserGroupMessage]: (CreateUserGroupMessage & CreateUserGroupMessage & CreateUserGroupMessage)[K]
    }>): UserGroup {
        return this.client.createUserGroup(
            this.ops["CreateUserGroup"].apply(partialParams)
        );
    }

    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage & keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage & keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage]: (DecreaseNodeGroupsInGlobalReplicationGroupMessage & DecreaseNodeGroupsInGlobalReplicationGroupMessage & DecreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): DecreaseNodeGroupsInGlobalReplicationGroupResult {
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(
            this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeDecreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof DecreaseReplicaCountMessage & keyof DecreaseReplicaCountMessage & keyof DecreaseReplicaCountMessage]: (DecreaseReplicaCountMessage & DecreaseReplicaCountMessage & DecreaseReplicaCountMessage)[K]
    }>): DecreaseReplicaCountResult {
        return this.client.decreaseReplicaCount(
            this.ops["DecreaseReplicaCount"].apply(partialParams)
        );
    }

    invokeDeleteCacheCluster(partialParams: ToOptional<{
      [K in keyof DeleteCacheClusterMessage & keyof DeleteCacheClusterMessage & keyof DeleteCacheClusterMessage]: (DeleteCacheClusterMessage & DeleteCacheClusterMessage & DeleteCacheClusterMessage)[K]
    }>): DeleteCacheClusterResult {
        return this.client.deleteCacheCluster(
            this.ops["DeleteCacheCluster"].apply(partialParams)
        );
    }

    invokeDeleteCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteCacheParameterGroupMessage & keyof DeleteCacheParameterGroupMessage & keyof DeleteCacheParameterGroupMessage]: (DeleteCacheParameterGroupMessage & DeleteCacheParameterGroupMessage & DeleteCacheParameterGroupMessage)[K]
    }>): void {
        return this.client.deleteCacheParameterGroup(
            this.ops["DeleteCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteCacheSecurityGroup(partialParams: ToOptional<{
      [K in keyof DeleteCacheSecurityGroupMessage & keyof DeleteCacheSecurityGroupMessage & keyof DeleteCacheSecurityGroupMessage]: (DeleteCacheSecurityGroupMessage & DeleteCacheSecurityGroupMessage & DeleteCacheSecurityGroupMessage)[K]
    }>): void {
        return this.client.deleteCacheSecurityGroup(
            this.ops["DeleteCacheSecurityGroup"].apply(partialParams)
        );
    }

    invokeDeleteCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteCacheSubnetGroupMessage & keyof DeleteCacheSubnetGroupMessage & keyof DeleteCacheSubnetGroupMessage]: (DeleteCacheSubnetGroupMessage & DeleteCacheSubnetGroupMessage & DeleteCacheSubnetGroupMessage)[K]
    }>): void {
        return this.client.deleteCacheSubnetGroup(
            this.ops["DeleteCacheSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteGlobalReplicationGroupMessage & keyof DeleteGlobalReplicationGroupMessage & keyof DeleteGlobalReplicationGroupMessage]: (DeleteGlobalReplicationGroupMessage & DeleteGlobalReplicationGroupMessage & DeleteGlobalReplicationGroupMessage)[K]
    }>): DeleteGlobalReplicationGroupResult {
        return this.client.deleteGlobalReplicationGroup(
            this.ops["DeleteGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeDeleteReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationGroupMessage & keyof DeleteReplicationGroupMessage & keyof DeleteReplicationGroupMessage]: (DeleteReplicationGroupMessage & DeleteReplicationGroupMessage & DeleteReplicationGroupMessage)[K]
    }>): DeleteReplicationGroupResult {
        return this.client.deleteReplicationGroup(
            this.ops["DeleteReplicationGroup"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotMessage & keyof DeleteSnapshotMessage & keyof DeleteSnapshotMessage]: (DeleteSnapshotMessage & DeleteSnapshotMessage & DeleteSnapshotMessage)[K]
    }>): DeleteSnapshotResult {
        return this.client.deleteSnapshot(
            this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserMessage & keyof DeleteUserMessage & keyof DeleteUserMessage]: (DeleteUserMessage & DeleteUserMessage & DeleteUserMessage)[K]
    }>): User {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDeleteUserGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserGroupMessage & keyof DeleteUserGroupMessage & keyof DeleteUserGroupMessage]: (DeleteUserGroupMessage & DeleteUserGroupMessage & DeleteUserGroupMessage)[K]
    }>): UserGroup {
        return this.client.deleteUserGroup(
            this.ops["DeleteUserGroup"].apply(partialParams)
        );
    }

    invokeDescribeCacheParameters(partialParams: ToOptional<{
      [K in keyof DescribeCacheParametersMessage & keyof DescribeCacheParametersMessage & keyof DescribeCacheParametersMessage]: (DescribeCacheParametersMessage & DescribeCacheParametersMessage & DescribeCacheParametersMessage)[K]
    }>): CacheParameterGroupDetails {
        return this.client.describeCacheParameters(
            this.ops["DescribeCacheParameters"].apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage)[K]
    }>): DescribeEngineDefaultParametersResult {
        return this.client.describeEngineDefaultParameters(
            this.ops["DescribeEngineDefaultParameters"].apply(partialParams)
        );
    }

    invokeDisassociateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DisassociateGlobalReplicationGroupMessage & keyof DisassociateGlobalReplicationGroupMessage & keyof DisassociateGlobalReplicationGroupMessage]: (DisassociateGlobalReplicationGroupMessage & DisassociateGlobalReplicationGroupMessage & DisassociateGlobalReplicationGroupMessage)[K]
    }>): DisassociateGlobalReplicationGroupResult {
        return this.client.disassociateGlobalReplicationGroup(
            this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeFailoverGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof FailoverGlobalReplicationGroupMessage & keyof FailoverGlobalReplicationGroupMessage & keyof FailoverGlobalReplicationGroupMessage]: (FailoverGlobalReplicationGroupMessage & FailoverGlobalReplicationGroupMessage & FailoverGlobalReplicationGroupMessage)[K]
    }>): FailoverGlobalReplicationGroupResult {
        return this.client.failoverGlobalReplicationGroup(
            this.ops["FailoverGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage & keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage & keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage]: (IncreaseNodeGroupsInGlobalReplicationGroupMessage & IncreaseNodeGroupsInGlobalReplicationGroupMessage & IncreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): IncreaseNodeGroupsInGlobalReplicationGroupResult {
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(
            this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeIncreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof IncreaseReplicaCountMessage & keyof IncreaseReplicaCountMessage & keyof IncreaseReplicaCountMessage]: (IncreaseReplicaCountMessage & IncreaseReplicaCountMessage & IncreaseReplicaCountMessage)[K]
    }>): IncreaseReplicaCountResult {
        return this.client.increaseReplicaCount(
            this.ops["IncreaseReplicaCount"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): TagListMessage {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyCacheCluster(partialParams: ToOptional<{
      [K in keyof ModifyCacheClusterMessage & keyof ModifyCacheClusterMessage & keyof ModifyCacheClusterMessage]: (ModifyCacheClusterMessage & ModifyCacheClusterMessage & ModifyCacheClusterMessage)[K]
    }>): ModifyCacheClusterResult {
        return this.client.modifyCacheCluster(
            this.ops["ModifyCacheCluster"].apply(partialParams)
        );
    }

    invokeModifyCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyCacheParameterGroupMessage & keyof ModifyCacheParameterGroupMessage & keyof ModifyCacheParameterGroupMessage]: (ModifyCacheParameterGroupMessage & ModifyCacheParameterGroupMessage & ModifyCacheParameterGroupMessage)[K]
    }>): CacheParameterGroupNameMessage {
        return this.client.modifyCacheParameterGroup(
            this.ops["ModifyCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeModifyCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyCacheSubnetGroupMessage & keyof ModifyCacheSubnetGroupMessage & keyof ModifyCacheSubnetGroupMessage]: (ModifyCacheSubnetGroupMessage & ModifyCacheSubnetGroupMessage & ModifyCacheSubnetGroupMessage)[K]
    }>): ModifyCacheSubnetGroupResult {
        return this.client.modifyCacheSubnetGroup(
            this.ops["ModifyCacheSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyGlobalReplicationGroupMessage & keyof ModifyGlobalReplicationGroupMessage & keyof ModifyGlobalReplicationGroupMessage]: (ModifyGlobalReplicationGroupMessage & ModifyGlobalReplicationGroupMessage & ModifyGlobalReplicationGroupMessage)[K]
    }>): ModifyGlobalReplicationGroupResult {
        return this.client.modifyGlobalReplicationGroup(
            this.ops["ModifyGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupMessage & keyof ModifyReplicationGroupMessage & keyof ModifyReplicationGroupMessage]: (ModifyReplicationGroupMessage & ModifyReplicationGroupMessage & ModifyReplicationGroupMessage)[K]
    }>): ModifyReplicationGroupResult {
        return this.client.modifyReplicationGroup(
            this.ops["ModifyReplicationGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationGroupShardConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupShardConfigurationMessage & keyof ModifyReplicationGroupShardConfigurationMessage & keyof ModifyReplicationGroupShardConfigurationMessage]: (ModifyReplicationGroupShardConfigurationMessage & ModifyReplicationGroupShardConfigurationMessage & ModifyReplicationGroupShardConfigurationMessage)[K]
    }>): ModifyReplicationGroupShardConfigurationResult {
        return this.client.modifyReplicationGroupShardConfiguration(
            this.ops["ModifyReplicationGroupShardConfiguration"].apply(partialParams)
        );
    }

    invokeModifyUser(partialParams: ToOptional<{
      [K in keyof ModifyUserMessage & keyof ModifyUserMessage & keyof ModifyUserMessage]: (ModifyUserMessage & ModifyUserMessage & ModifyUserMessage)[K]
    }>): User {
        return this.client.modifyUser(
            this.ops["ModifyUser"].apply(partialParams)
        );
    }

    invokeModifyUserGroup(partialParams: ToOptional<{
      [K in keyof ModifyUserGroupMessage & keyof ModifyUserGroupMessage & keyof ModifyUserGroupMessage]: (ModifyUserGroupMessage & ModifyUserGroupMessage & ModifyUserGroupMessage)[K]
    }>): UserGroup {
        return this.client.modifyUserGroup(
            this.ops["ModifyUserGroup"].apply(partialParams)
        );
    }

    invokePurchaseReservedCacheNodesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedCacheNodesOfferingMessage & keyof PurchaseReservedCacheNodesOfferingMessage & keyof PurchaseReservedCacheNodesOfferingMessage]: (PurchaseReservedCacheNodesOfferingMessage & PurchaseReservedCacheNodesOfferingMessage & PurchaseReservedCacheNodesOfferingMessage)[K]
    }>): PurchaseReservedCacheNodesOfferingResult {
        return this.client.purchaseReservedCacheNodesOffering(
            this.ops["PurchaseReservedCacheNodesOffering"].apply(partialParams)
        );
    }

    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof RebalanceSlotsInGlobalReplicationGroupMessage & keyof RebalanceSlotsInGlobalReplicationGroupMessage & keyof RebalanceSlotsInGlobalReplicationGroupMessage]: (RebalanceSlotsInGlobalReplicationGroupMessage & RebalanceSlotsInGlobalReplicationGroupMessage & RebalanceSlotsInGlobalReplicationGroupMessage)[K]
    }>): RebalanceSlotsInGlobalReplicationGroupResult {
        return this.client.rebalanceSlotsInGlobalReplicationGroup(
            this.ops["RebalanceSlotsInGlobalReplicationGroup"].apply(partialParams)
        );
    }

    invokeRebootCacheCluster(partialParams: ToOptional<{
      [K in keyof RebootCacheClusterMessage & keyof RebootCacheClusterMessage & keyof RebootCacheClusterMessage]: (RebootCacheClusterMessage & RebootCacheClusterMessage & RebootCacheClusterMessage)[K]
    }>): RebootCacheClusterResult {
        return this.client.rebootCacheCluster(
            this.ops["RebootCacheCluster"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): TagListMessage {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetCacheParameterGroupMessage & keyof ResetCacheParameterGroupMessage & keyof ResetCacheParameterGroupMessage]: (ResetCacheParameterGroupMessage & ResetCacheParameterGroupMessage & ResetCacheParameterGroupMessage)[K]
    }>): CacheParameterGroupNameMessage {
        return this.client.resetCacheParameterGroup(
            this.ops["ResetCacheParameterGroup"].apply(partialParams)
        );
    }

    invokeRevokeCacheSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeCacheSecurityGroupIngressMessage & keyof RevokeCacheSecurityGroupIngressMessage & keyof RevokeCacheSecurityGroupIngressMessage]: (RevokeCacheSecurityGroupIngressMessage & RevokeCacheSecurityGroupIngressMessage & RevokeCacheSecurityGroupIngressMessage)[K]
    }>): RevokeCacheSecurityGroupIngressResult {
        return this.client.revokeCacheSecurityGroupIngress(
            this.ops["RevokeCacheSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeStartMigration(partialParams: ToOptional<{
      [K in keyof StartMigrationMessage & keyof StartMigrationMessage & keyof StartMigrationMessage]: (StartMigrationMessage & StartMigrationMessage & StartMigrationMessage)[K]
    }>): StartMigrationResponse {
        return this.client.startMigration(
            this.ops["StartMigration"].apply(partialParams)
        );
    }

    invokeTestFailover(partialParams: ToOptional<{
      [K in keyof TestFailoverMessage & keyof TestFailoverMessage & keyof TestFailoverMessage]: (TestFailoverMessage & TestFailoverMessage & TestFailoverMessage)[K]
    }>): TestFailoverResult {
        return this.client.testFailover(
            this.ops["TestFailover"].apply(partialParams)
        );
    }
}