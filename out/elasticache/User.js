"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.elasticache.User {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ElastiCache();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/elasticache-2015-02-02.normal.json"), this.client);
    }
    invokeAddTagsToResource(partialParams) {
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeAuthorizeCacheSecurityGroupIngress(partialParams) {
        return this.client.authorizeCacheSecurityGroupIngress(this.ops["AuthorizeCacheSecurityGroupIngress"].apply(partialParams));
    }
    invokeBatchApplyUpdateAction(partialParams) {
        return this.client.batchApplyUpdateAction(this.ops["BatchApplyUpdateAction"].apply(partialParams));
    }
    invokeBatchStopUpdateAction(partialParams) {
        return this.client.batchStopUpdateAction(this.ops["BatchStopUpdateAction"].apply(partialParams));
    }
    invokeCompleteMigration(partialParams) {
        return this.client.completeMigration(this.ops["CompleteMigration"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateCacheCluster(partialParams) {
        return this.client.createCacheCluster(this.ops["CreateCacheCluster"].apply(partialParams));
    }
    invokeCreateCacheParameterGroup(partialParams) {
        return this.client.createCacheParameterGroup(this.ops["CreateCacheParameterGroup"].apply(partialParams));
    }
    invokeCreateCacheSecurityGroup(partialParams) {
        return this.client.createCacheSecurityGroup(this.ops["CreateCacheSecurityGroup"].apply(partialParams));
    }
    invokeCreateCacheSubnetGroup(partialParams) {
        return this.client.createCacheSubnetGroup(this.ops["CreateCacheSubnetGroup"].apply(partialParams));
    }
    invokeCreateGlobalReplicationGroup(partialParams) {
        return this.client.createGlobalReplicationGroup(this.ops["CreateGlobalReplicationGroup"].apply(partialParams));
    }
    invokeCreateReplicationGroup(partialParams) {
        return this.client.createReplicationGroup(this.ops["CreateReplicationGroup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateUserGroup(partialParams) {
        return this.client.createUserGroup(this.ops["CreateUserGroup"].apply(partialParams));
    }
    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeDecreaseReplicaCount(partialParams) {
        return this.client.decreaseReplicaCount(this.ops["DecreaseReplicaCount"].apply(partialParams));
    }
    invokeDeleteCacheCluster(partialParams) {
        return this.client.deleteCacheCluster(this.ops["DeleteCacheCluster"].apply(partialParams));
    }
    invokeDeleteCacheParameterGroup(partialParams) {
        return this.client.deleteCacheParameterGroup(this.ops["DeleteCacheParameterGroup"].apply(partialParams));
    }
    invokeDeleteCacheSecurityGroup(partialParams) {
        return this.client.deleteCacheSecurityGroup(this.ops["DeleteCacheSecurityGroup"].apply(partialParams));
    }
    invokeDeleteCacheSubnetGroup(partialParams) {
        return this.client.deleteCacheSubnetGroup(this.ops["DeleteCacheSubnetGroup"].apply(partialParams));
    }
    invokeDeleteGlobalReplicationGroup(partialParams) {
        return this.client.deleteGlobalReplicationGroup(this.ops["DeleteGlobalReplicationGroup"].apply(partialParams));
    }
    invokeDeleteReplicationGroup(partialParams) {
        return this.client.deleteReplicationGroup(this.ops["DeleteReplicationGroup"].apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteUserGroup(partialParams) {
        return this.client.deleteUserGroup(this.ops["DeleteUserGroup"].apply(partialParams));
    }
    invokeDescribeCacheParameters(partialParams) {
        return this.client.describeCacheParameters(this.ops["DescribeCacheParameters"].apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].apply(partialParams));
    }
    invokeDisassociateGlobalReplicationGroup(partialParams) {
        return this.client.disassociateGlobalReplicationGroup(this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams));
    }
    invokeFailoverGlobalReplicationGroup(partialParams) {
        return this.client.failoverGlobalReplicationGroup(this.ops["FailoverGlobalReplicationGroup"].apply(partialParams));
    }
    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeIncreaseReplicaCount(partialParams) {
        return this.client.increaseReplicaCount(this.ops["IncreaseReplicaCount"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyCacheCluster(partialParams) {
        return this.client.modifyCacheCluster(this.ops["ModifyCacheCluster"].apply(partialParams));
    }
    invokeModifyCacheParameterGroup(partialParams) {
        return this.client.modifyCacheParameterGroup(this.ops["ModifyCacheParameterGroup"].apply(partialParams));
    }
    invokeModifyCacheSubnetGroup(partialParams) {
        return this.client.modifyCacheSubnetGroup(this.ops["ModifyCacheSubnetGroup"].apply(partialParams));
    }
    invokeModifyGlobalReplicationGroup(partialParams) {
        return this.client.modifyGlobalReplicationGroup(this.ops["ModifyGlobalReplicationGroup"].apply(partialParams));
    }
    invokeModifyReplicationGroup(partialParams) {
        return this.client.modifyReplicationGroup(this.ops["ModifyReplicationGroup"].apply(partialParams));
    }
    invokeModifyReplicationGroupShardConfiguration(partialParams) {
        return this.client.modifyReplicationGroupShardConfiguration(this.ops["ModifyReplicationGroupShardConfiguration"].apply(partialParams));
    }
    invokeModifyUser(partialParams) {
        return this.client.modifyUser(this.ops["ModifyUser"].apply(partialParams));
    }
    invokeModifyUserGroup(partialParams) {
        return this.client.modifyUserGroup(this.ops["ModifyUserGroup"].apply(partialParams));
    }
    invokePurchaseReservedCacheNodesOffering(partialParams) {
        return this.client.purchaseReservedCacheNodesOffering(this.ops["PurchaseReservedCacheNodesOffering"].apply(partialParams));
    }
    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams) {
        return this.client.rebalanceSlotsInGlobalReplicationGroup(this.ops["RebalanceSlotsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeRebootCacheCluster(partialParams) {
        return this.client.rebootCacheCluster(this.ops["RebootCacheCluster"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetCacheParameterGroup(partialParams) {
        return this.client.resetCacheParameterGroup(this.ops["ResetCacheParameterGroup"].apply(partialParams));
    }
    invokeRevokeCacheSecurityGroupIngress(partialParams) {
        return this.client.revokeCacheSecurityGroupIngress(this.ops["RevokeCacheSecurityGroupIngress"].apply(partialParams));
    }
    invokeStartMigration(partialParams) {
        return this.client.startMigration(this.ops["StartMigration"].apply(partialParams));
    }
    invokeTestFailover(partialParams) {
        return this.client.testFailover(this.ops["TestFailover"].apply(partialParams));
    }
}
exports.default = default_1;
