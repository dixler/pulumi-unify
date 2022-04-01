"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/elasticache-2015-02-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.elasticache.UserGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ElastiCache();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAddTagsToResource(partialParams) {
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeAuthorizeCacheSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.authorizeCacheSecurityGroupIngress(this.ops["AuthorizeCacheSecurityGroupIngress"].apply(partialParams));
    }
    invokeBatchApplyUpdateAction(partialParams) {
        this.boot();
        return this.client.batchApplyUpdateAction(this.ops["BatchApplyUpdateAction"].apply(partialParams));
    }
    invokeBatchStopUpdateAction(partialParams) {
        this.boot();
        return this.client.batchStopUpdateAction(this.ops["BatchStopUpdateAction"].apply(partialParams));
    }
    invokeCompleteMigration(partialParams) {
        this.boot();
        return this.client.completeMigration(this.ops["CompleteMigration"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        this.boot();
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateCacheCluster(partialParams) {
        this.boot();
        return this.client.createCacheCluster(this.ops["CreateCacheCluster"].apply(partialParams));
    }
    invokeCreateCacheParameterGroup(partialParams) {
        this.boot();
        return this.client.createCacheParameterGroup(this.ops["CreateCacheParameterGroup"].apply(partialParams));
    }
    invokeCreateCacheSecurityGroup(partialParams) {
        this.boot();
        return this.client.createCacheSecurityGroup(this.ops["CreateCacheSecurityGroup"].apply(partialParams));
    }
    invokeCreateCacheSubnetGroup(partialParams) {
        this.boot();
        return this.client.createCacheSubnetGroup(this.ops["CreateCacheSubnetGroup"].apply(partialParams));
    }
    invokeCreateGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.createGlobalReplicationGroup(this.ops["CreateGlobalReplicationGroup"].apply(partialParams));
    }
    invokeCreateReplicationGroup(partialParams) {
        this.boot();
        return this.client.createReplicationGroup(this.ops["CreateReplicationGroup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateUserGroup(partialParams) {
        this.boot();
        return this.client.createUserGroup(this.ops["CreateUserGroup"].apply(partialParams));
    }
    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeDecreaseReplicaCount(partialParams) {
        this.boot();
        return this.client.decreaseReplicaCount(this.ops["DecreaseReplicaCount"].apply(partialParams));
    }
    invokeDeleteCacheCluster(partialParams) {
        this.boot();
        return this.client.deleteCacheCluster(this.ops["DeleteCacheCluster"].apply(partialParams));
    }
    invokeDeleteGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.deleteGlobalReplicationGroup(this.ops["DeleteGlobalReplicationGroup"].apply(partialParams));
    }
    invokeDeleteReplicationGroup(partialParams) {
        this.boot();
        return this.client.deleteReplicationGroup(this.ops["DeleteReplicationGroup"].apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        this.boot();
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteUserGroup(partialParams) {
        this.boot();
        return this.client.deleteUserGroup(this.ops["DeleteUserGroup"].apply(partialParams));
    }
    invokeDescribeCacheClusters(partialParams) {
        this.boot();
        return this.client.describeCacheClusters(this.ops["DescribeCacheClusters"].apply(partialParams));
    }
    invokeDescribeCacheEngineVersions(partialParams) {
        this.boot();
        return this.client.describeCacheEngineVersions(this.ops["DescribeCacheEngineVersions"].apply(partialParams));
    }
    invokeDescribeCacheParameterGroups(partialParams) {
        this.boot();
        return this.client.describeCacheParameterGroups(this.ops["DescribeCacheParameterGroups"].apply(partialParams));
    }
    invokeDescribeCacheParameters(partialParams) {
        this.boot();
        return this.client.describeCacheParameters(this.ops["DescribeCacheParameters"].apply(partialParams));
    }
    invokeDescribeCacheSecurityGroups(partialParams) {
        this.boot();
        return this.client.describeCacheSecurityGroups(this.ops["DescribeCacheSecurityGroups"].apply(partialParams));
    }
    invokeDescribeCacheSubnetGroups(partialParams) {
        this.boot();
        return this.client.describeCacheSubnetGroups(this.ops["DescribeCacheSubnetGroups"].apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        this.boot();
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].apply(partialParams));
    }
    invokeDescribeEvents(partialParams) {
        this.boot();
        return this.client.describeEvents(this.ops["DescribeEvents"].apply(partialParams));
    }
    invokeDescribeGlobalReplicationGroups(partialParams) {
        this.boot();
        return this.client.describeGlobalReplicationGroups(this.ops["DescribeGlobalReplicationGroups"].apply(partialParams));
    }
    invokeDescribeReplicationGroups(partialParams) {
        this.boot();
        return this.client.describeReplicationGroups(this.ops["DescribeReplicationGroups"].apply(partialParams));
    }
    invokeDescribeReservedCacheNodes(partialParams) {
        this.boot();
        return this.client.describeReservedCacheNodes(this.ops["DescribeReservedCacheNodes"].apply(partialParams));
    }
    invokeDescribeReservedCacheNodesOfferings(partialParams) {
        this.boot();
        return this.client.describeReservedCacheNodesOfferings(this.ops["DescribeReservedCacheNodesOfferings"].apply(partialParams));
    }
    invokeDescribeServiceUpdates(partialParams) {
        this.boot();
        return this.client.describeServiceUpdates(this.ops["DescribeServiceUpdates"].apply(partialParams));
    }
    invokeDescribeSnapshots(partialParams) {
        this.boot();
        return this.client.describeSnapshots(this.ops["DescribeSnapshots"].apply(partialParams));
    }
    invokeDescribeUpdateActions(partialParams) {
        this.boot();
        return this.client.describeUpdateActions(this.ops["DescribeUpdateActions"].apply(partialParams));
    }
    invokeDescribeUserGroups(partialParams) {
        this.boot();
        return this.client.describeUserGroups(this.ops["DescribeUserGroups"].apply(partialParams));
    }
    invokeDescribeUsers(partialParams) {
        this.boot();
        return this.client.describeUsers(this.ops["DescribeUsers"].apply(partialParams));
    }
    invokeDisassociateGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams));
    }
    invokeFailoverGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.failoverGlobalReplicationGroup(this.ops["FailoverGlobalReplicationGroup"].apply(partialParams));
    }
    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeIncreaseReplicaCount(partialParams) {
        this.boot();
        return this.client.increaseReplicaCount(this.ops["IncreaseReplicaCount"].apply(partialParams));
    }
    invokeListAllowedNodeTypeModifications(partialParams) {
        this.boot();
        return this.client.listAllowedNodeTypeModifications(this.ops["ListAllowedNodeTypeModifications"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyCacheCluster(partialParams) {
        this.boot();
        return this.client.modifyCacheCluster(this.ops["ModifyCacheCluster"].apply(partialParams));
    }
    invokeModifyCacheParameterGroup(partialParams) {
        this.boot();
        return this.client.modifyCacheParameterGroup(this.ops["ModifyCacheParameterGroup"].apply(partialParams));
    }
    invokeModifyCacheSubnetGroup(partialParams) {
        this.boot();
        return this.client.modifyCacheSubnetGroup(this.ops["ModifyCacheSubnetGroup"].apply(partialParams));
    }
    invokeModifyGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.modifyGlobalReplicationGroup(this.ops["ModifyGlobalReplicationGroup"].apply(partialParams));
    }
    invokeModifyReplicationGroup(partialParams) {
        this.boot();
        return this.client.modifyReplicationGroup(this.ops["ModifyReplicationGroup"].apply(partialParams));
    }
    invokeModifyReplicationGroupShardConfiguration(partialParams) {
        this.boot();
        return this.client.modifyReplicationGroupShardConfiguration(this.ops["ModifyReplicationGroupShardConfiguration"].apply(partialParams));
    }
    invokeModifyUser(partialParams) {
        this.boot();
        return this.client.modifyUser(this.ops["ModifyUser"].apply(partialParams));
    }
    invokeModifyUserGroup(partialParams) {
        this.boot();
        return this.client.modifyUserGroup(this.ops["ModifyUserGroup"].apply(partialParams));
    }
    invokePurchaseReservedCacheNodesOffering(partialParams) {
        this.boot();
        return this.client.purchaseReservedCacheNodesOffering(this.ops["PurchaseReservedCacheNodesOffering"].apply(partialParams));
    }
    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.rebalanceSlotsInGlobalReplicationGroup(this.ops["RebalanceSlotsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeRebootCacheCluster(partialParams) {
        this.boot();
        return this.client.rebootCacheCluster(this.ops["RebootCacheCluster"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetCacheParameterGroup(partialParams) {
        this.boot();
        return this.client.resetCacheParameterGroup(this.ops["ResetCacheParameterGroup"].apply(partialParams));
    }
    invokeRevokeCacheSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.revokeCacheSecurityGroupIngress(this.ops["RevokeCacheSecurityGroupIngress"].apply(partialParams));
    }
    invokeStartMigration(partialParams) {
        this.boot();
        return this.client.startMigration(this.ops["StartMigration"].apply(partialParams));
    }
    invokeTestFailover(partialParams) {
        this.boot();
        return this.client.testFailover(this.ops["TestFailover"].apply(partialParams));
    }
}
exports.default = default_1;
