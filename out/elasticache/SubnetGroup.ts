
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
const schema = require("../apis/elasticache-2015-02-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticache.SubnetGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.elasticache.SubnetGroup>) {
        super(...args)
        this.client = new awssdk.ElastiCache()
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

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeCacheSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeCacheSecurityGroupIngressMessage & keyof AuthorizeCacheSecurityGroupIngressMessage & keyof AuthorizeCacheSecurityGroupIngressMessage]: (AuthorizeCacheSecurityGroupIngressMessage & AuthorizeCacheSecurityGroupIngressMessage & AuthorizeCacheSecurityGroupIngressMessage)[K]
    }>): Request<AuthorizeCacheSecurityGroupIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeCacheSecurityGroupIngress(
          this.ops["AuthorizeCacheSecurityGroupIngress"].applicator.apply(partialParams)
        );
    }

    invokeBatchApplyUpdateAction(partialParams: ToOptional<{
      [K in keyof BatchApplyUpdateActionMessage & keyof BatchApplyUpdateActionMessage & keyof BatchApplyUpdateActionMessage]: (BatchApplyUpdateActionMessage & BatchApplyUpdateActionMessage & BatchApplyUpdateActionMessage)[K]
    }>): Request<UpdateActionResultsMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchApplyUpdateAction(
          this.ops["BatchApplyUpdateAction"].applicator.apply(partialParams)
        );
    }

    invokeBatchStopUpdateAction(partialParams: ToOptional<{
      [K in keyof BatchStopUpdateActionMessage & keyof BatchStopUpdateActionMessage & keyof BatchStopUpdateActionMessage]: (BatchStopUpdateActionMessage & BatchStopUpdateActionMessage & BatchStopUpdateActionMessage)[K]
    }>): Request<UpdateActionResultsMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchStopUpdateAction(
          this.ops["BatchStopUpdateAction"].applicator.apply(partialParams)
        );
    }

    invokeCompleteMigration(partialParams: ToOptional<{
      [K in keyof CompleteMigrationMessage & keyof CompleteMigrationMessage & keyof CompleteMigrationMessage]: (CompleteMigrationMessage & CompleteMigrationMessage & CompleteMigrationMessage)[K]
    }>): Request<CompleteMigrationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMigration(
          this.ops["CompleteMigration"].applicator.apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotMessage & keyof CopySnapshotMessage & keyof CopySnapshotMessage]: (CopySnapshotMessage & CopySnapshotMessage & CopySnapshotMessage)[K]
    }>): Request<CopySnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateCacheCluster(partialParams: ToOptional<{
      [K in keyof CreateCacheClusterMessage & keyof CreateCacheClusterMessage & keyof CreateCacheClusterMessage]: (CreateCacheClusterMessage & CreateCacheClusterMessage & CreateCacheClusterMessage)[K]
    }>): Request<CreateCacheClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheCluster(
          this.ops["CreateCacheCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheParameterGroupMessage & keyof CreateCacheParameterGroupMessage & keyof CreateCacheParameterGroupMessage]: (CreateCacheParameterGroupMessage & CreateCacheParameterGroupMessage & CreateCacheParameterGroupMessage)[K]
    }>): Request<CreateCacheParameterGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheParameterGroup(
          this.ops["CreateCacheParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateCacheSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheSecurityGroupMessage & keyof CreateCacheSecurityGroupMessage & keyof CreateCacheSecurityGroupMessage]: (CreateCacheSecurityGroupMessage & CreateCacheSecurityGroupMessage & CreateCacheSecurityGroupMessage)[K]
    }>): Request<CreateCacheSecurityGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheSecurityGroup(
          this.ops["CreateCacheSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateCacheSubnetGroupMessage & keyof CreateCacheSubnetGroupMessage & keyof CreateCacheSubnetGroupMessage]: (CreateCacheSubnetGroupMessage & CreateCacheSubnetGroupMessage & CreateCacheSubnetGroupMessage)[K]
    }>): Request<CreateCacheSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheSubnetGroup(
          this.ops["CreateCacheSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateGlobalReplicationGroupMessage & keyof CreateGlobalReplicationGroupMessage & keyof CreateGlobalReplicationGroupMessage]: (CreateGlobalReplicationGroupMessage & CreateGlobalReplicationGroupMessage & CreateGlobalReplicationGroupMessage)[K]
    }>): Request<CreateGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGlobalReplicationGroup(
          this.ops["CreateGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateReplicationGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationGroupMessage & keyof CreateReplicationGroupMessage & keyof CreateReplicationGroupMessage]: (CreateReplicationGroupMessage & CreateReplicationGroupMessage & CreateReplicationGroupMessage)[K]
    }>): Request<CreateReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationGroup(
          this.ops["CreateReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotMessage & keyof CreateSnapshotMessage & keyof CreateSnapshotMessage]: (CreateSnapshotMessage & CreateSnapshotMessage & CreateSnapshotMessage)[K]
    }>): Request<CreateSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserMessage & keyof CreateUserMessage & keyof CreateUserMessage]: (CreateUserMessage & CreateUserMessage & CreateUserMessage)[K]
    }>): Request<User, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeCreateUserGroup(partialParams: ToOptional<{
      [K in keyof CreateUserGroupMessage & keyof CreateUserGroupMessage & keyof CreateUserGroupMessage]: (CreateUserGroupMessage & CreateUserGroupMessage & CreateUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserGroup(
          this.ops["CreateUserGroup"].applicator.apply(partialParams)
        );
    }

    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage & keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage & keyof DecreaseNodeGroupsInGlobalReplicationGroupMessage]: (DecreaseNodeGroupsInGlobalReplicationGroupMessage & DecreaseNodeGroupsInGlobalReplicationGroupMessage & DecreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): Request<DecreaseNodeGroupsInGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(
          this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeDecreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof DecreaseReplicaCountMessage & keyof DecreaseReplicaCountMessage & keyof DecreaseReplicaCountMessage]: (DecreaseReplicaCountMessage & DecreaseReplicaCountMessage & DecreaseReplicaCountMessage)[K]
    }>): Request<DecreaseReplicaCountResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseReplicaCount(
          this.ops["DecreaseReplicaCount"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCacheCluster(partialParams: ToOptional<{
      [K in keyof DeleteCacheClusterMessage & keyof DeleteCacheClusterMessage & keyof DeleteCacheClusterMessage]: (DeleteCacheClusterMessage & DeleteCacheClusterMessage & DeleteCacheClusterMessage)[K]
    }>): Request<DeleteCacheClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheCluster(
          this.ops["DeleteCacheCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteCacheParameterGroupMessage & keyof DeleteCacheParameterGroupMessage & keyof DeleteCacheParameterGroupMessage]: (DeleteCacheParameterGroupMessage & DeleteCacheParameterGroupMessage & DeleteCacheParameterGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheParameterGroup(
          this.ops["DeleteCacheParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCacheSecurityGroup(partialParams: ToOptional<{
      [K in keyof DeleteCacheSecurityGroupMessage & keyof DeleteCacheSecurityGroupMessage & keyof DeleteCacheSecurityGroupMessage]: (DeleteCacheSecurityGroupMessage & DeleteCacheSecurityGroupMessage & DeleteCacheSecurityGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheSecurityGroup(
          this.ops["DeleteCacheSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteCacheSubnetGroupMessage & keyof DeleteCacheSubnetGroupMessage & keyof DeleteCacheSubnetGroupMessage]: (DeleteCacheSubnetGroupMessage & DeleteCacheSubnetGroupMessage & DeleteCacheSubnetGroupMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheSubnetGroup(
          this.ops["DeleteCacheSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteGlobalReplicationGroupMessage & keyof DeleteGlobalReplicationGroupMessage & keyof DeleteGlobalReplicationGroupMessage]: (DeleteGlobalReplicationGroupMessage & DeleteGlobalReplicationGroupMessage & DeleteGlobalReplicationGroupMessage)[K]
    }>): Request<DeleteGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGlobalReplicationGroup(
          this.ops["DeleteGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReplicationGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationGroupMessage & keyof DeleteReplicationGroupMessage & keyof DeleteReplicationGroupMessage]: (DeleteReplicationGroupMessage & DeleteReplicationGroupMessage & DeleteReplicationGroupMessage)[K]
    }>): Request<DeleteReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationGroup(
          this.ops["DeleteReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotMessage & keyof DeleteSnapshotMessage & keyof DeleteSnapshotMessage]: (DeleteSnapshotMessage & DeleteSnapshotMessage & DeleteSnapshotMessage)[K]
    }>): Request<DeleteSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserMessage & keyof DeleteUserMessage & keyof DeleteUserMessage]: (DeleteUserMessage & DeleteUserMessage & DeleteUserMessage)[K]
    }>): Request<User, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserGroup(partialParams: ToOptional<{
      [K in keyof DeleteUserGroupMessage & keyof DeleteUserGroupMessage & keyof DeleteUserGroupMessage]: (DeleteUserGroupMessage & DeleteUserGroupMessage & DeleteUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserGroup(
          this.ops["DeleteUserGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCacheParameters(partialParams: ToOptional<{
      [K in keyof DescribeCacheParametersMessage & keyof DescribeCacheParametersMessage & keyof DescribeCacheParametersMessage]: (DescribeCacheParametersMessage & DescribeCacheParametersMessage & DescribeCacheParametersMessage)[K]
    }>): Request<CacheParameterGroupDetails, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCacheParameters(
          this.ops["DescribeCacheParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEngineDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage & keyof DescribeEngineDefaultParametersMessage]: (DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage & DescribeEngineDefaultParametersMessage)[K]
    }>): Request<DescribeEngineDefaultParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultParameters(
          this.ops["DescribeEngineDefaultParameters"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof DisassociateGlobalReplicationGroupMessage & keyof DisassociateGlobalReplicationGroupMessage & keyof DisassociateGlobalReplicationGroupMessage]: (DisassociateGlobalReplicationGroupMessage & DisassociateGlobalReplicationGroupMessage & DisassociateGlobalReplicationGroupMessage)[K]
    }>): Request<DisassociateGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(
          this.ops["DisassociateGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeFailoverGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof FailoverGlobalReplicationGroupMessage & keyof FailoverGlobalReplicationGroupMessage & keyof FailoverGlobalReplicationGroupMessage]: (FailoverGlobalReplicationGroupMessage & FailoverGlobalReplicationGroupMessage & FailoverGlobalReplicationGroupMessage)[K]
    }>): Request<FailoverGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverGlobalReplicationGroup(
          this.ops["FailoverGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage & keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage & keyof IncreaseNodeGroupsInGlobalReplicationGroupMessage]: (IncreaseNodeGroupsInGlobalReplicationGroupMessage & IncreaseNodeGroupsInGlobalReplicationGroupMessage & IncreaseNodeGroupsInGlobalReplicationGroupMessage)[K]
    }>): Request<IncreaseNodeGroupsInGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(
          this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeIncreaseReplicaCount(partialParams: ToOptional<{
      [K in keyof IncreaseReplicaCountMessage & keyof IncreaseReplicaCountMessage & keyof IncreaseReplicaCountMessage]: (IncreaseReplicaCountMessage & IncreaseReplicaCountMessage & IncreaseReplicaCountMessage)[K]
    }>): Request<IncreaseReplicaCountResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseReplicaCount(
          this.ops["IncreaseReplicaCount"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeModifyCacheCluster(partialParams: ToOptional<{
      [K in keyof ModifyCacheClusterMessage & keyof ModifyCacheClusterMessage & keyof ModifyCacheClusterMessage]: (ModifyCacheClusterMessage & ModifyCacheClusterMessage & ModifyCacheClusterMessage)[K]
    }>): Request<ModifyCacheClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCacheCluster(
          this.ops["ModifyCacheCluster"].applicator.apply(partialParams)
        );
    }

    invokeModifyCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof ModifyCacheParameterGroupMessage & keyof ModifyCacheParameterGroupMessage & keyof ModifyCacheParameterGroupMessage]: (ModifyCacheParameterGroupMessage & ModifyCacheParameterGroupMessage & ModifyCacheParameterGroupMessage)[K]
    }>): Request<CacheParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCacheParameterGroup(
          this.ops["ModifyCacheParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyCacheSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyCacheSubnetGroupMessage & keyof ModifyCacheSubnetGroupMessage & keyof ModifyCacheSubnetGroupMessage]: (ModifyCacheSubnetGroupMessage & ModifyCacheSubnetGroupMessage & ModifyCacheSubnetGroupMessage)[K]
    }>): Request<ModifyCacheSubnetGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCacheSubnetGroup(
          this.ops["ModifyCacheSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyGlobalReplicationGroupMessage & keyof ModifyGlobalReplicationGroupMessage & keyof ModifyGlobalReplicationGroupMessage]: (ModifyGlobalReplicationGroupMessage & ModifyGlobalReplicationGroupMessage & ModifyGlobalReplicationGroupMessage)[K]
    }>): Request<ModifyGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyGlobalReplicationGroup(
          this.ops["ModifyGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyReplicationGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupMessage & keyof ModifyReplicationGroupMessage & keyof ModifyReplicationGroupMessage]: (ModifyReplicationGroupMessage & ModifyReplicationGroupMessage & ModifyReplicationGroupMessage)[K]
    }>): Request<ModifyReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationGroup(
          this.ops["ModifyReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyReplicationGroupShardConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyReplicationGroupShardConfigurationMessage & keyof ModifyReplicationGroupShardConfigurationMessage & keyof ModifyReplicationGroupShardConfigurationMessage]: (ModifyReplicationGroupShardConfigurationMessage & ModifyReplicationGroupShardConfigurationMessage & ModifyReplicationGroupShardConfigurationMessage)[K]
    }>): Request<ModifyReplicationGroupShardConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationGroupShardConfiguration(
          this.ops["ModifyReplicationGroupShardConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeModifyUser(partialParams: ToOptional<{
      [K in keyof ModifyUserMessage & keyof ModifyUserMessage & keyof ModifyUserMessage]: (ModifyUserMessage & ModifyUserMessage & ModifyUserMessage)[K]
    }>): Request<User, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyUser(
          this.ops["ModifyUser"].applicator.apply(partialParams)
        );
    }

    invokeModifyUserGroup(partialParams: ToOptional<{
      [K in keyof ModifyUserGroupMessage & keyof ModifyUserGroupMessage & keyof ModifyUserGroupMessage]: (ModifyUserGroupMessage & ModifyUserGroupMessage & ModifyUserGroupMessage)[K]
    }>): Request<UserGroup, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyUserGroup(
          this.ops["ModifyUserGroup"].applicator.apply(partialParams)
        );
    }

    invokePurchaseReservedCacheNodesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedCacheNodesOfferingMessage & keyof PurchaseReservedCacheNodesOfferingMessage & keyof PurchaseReservedCacheNodesOfferingMessage]: (PurchaseReservedCacheNodesOfferingMessage & PurchaseReservedCacheNodesOfferingMessage & PurchaseReservedCacheNodesOfferingMessage)[K]
    }>): Request<PurchaseReservedCacheNodesOfferingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedCacheNodesOffering(
          this.ops["PurchaseReservedCacheNodesOffering"].applicator.apply(partialParams)
        );
    }

    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams: ToOptional<{
      [K in keyof RebalanceSlotsInGlobalReplicationGroupMessage & keyof RebalanceSlotsInGlobalReplicationGroupMessage & keyof RebalanceSlotsInGlobalReplicationGroupMessage]: (RebalanceSlotsInGlobalReplicationGroupMessage & RebalanceSlotsInGlobalReplicationGroupMessage & RebalanceSlotsInGlobalReplicationGroupMessage)[K]
    }>): Request<RebalanceSlotsInGlobalReplicationGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebalanceSlotsInGlobalReplicationGroup(
          this.ops["RebalanceSlotsInGlobalReplicationGroup"].applicator.apply(partialParams)
        );
    }

    invokeRebootCacheCluster(partialParams: ToOptional<{
      [K in keyof RebootCacheClusterMessage & keyof RebootCacheClusterMessage & keyof RebootCacheClusterMessage]: (RebootCacheClusterMessage & RebootCacheClusterMessage & RebootCacheClusterMessage)[K]
    }>): Request<RebootCacheClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootCacheCluster(
          this.ops["RebootCacheCluster"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): Request<TagListMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeResetCacheParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetCacheParameterGroupMessage & keyof ResetCacheParameterGroupMessage & keyof ResetCacheParameterGroupMessage]: (ResetCacheParameterGroupMessage & ResetCacheParameterGroupMessage & ResetCacheParameterGroupMessage)[K]
    }>): Request<CacheParameterGroupNameMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetCacheParameterGroup(
          this.ops["ResetCacheParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeRevokeCacheSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeCacheSecurityGroupIngressMessage & keyof RevokeCacheSecurityGroupIngressMessage & keyof RevokeCacheSecurityGroupIngressMessage]: (RevokeCacheSecurityGroupIngressMessage & RevokeCacheSecurityGroupIngressMessage & RevokeCacheSecurityGroupIngressMessage)[K]
    }>): Request<RevokeCacheSecurityGroupIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeCacheSecurityGroupIngress(
          this.ops["RevokeCacheSecurityGroupIngress"].applicator.apply(partialParams)
        );
    }

    invokeStartMigration(partialParams: ToOptional<{
      [K in keyof StartMigrationMessage & keyof StartMigrationMessage & keyof StartMigrationMessage]: (StartMigrationMessage & StartMigrationMessage & StartMigrationMessage)[K]
    }>): Request<StartMigrationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMigration(
          this.ops["StartMigration"].applicator.apply(partialParams)
        );
    }

    invokeTestFailover(partialParams: ToOptional<{
      [K in keyof TestFailoverMessage & keyof TestFailoverMessage & keyof TestFailoverMessage]: (TestFailoverMessage & TestFailoverMessage & TestFailoverMessage)[K]
    }>): Request<TestFailoverResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testFailover(
          this.ops["TestFailover"].applicator.apply(partialParams)
        );
    }
}