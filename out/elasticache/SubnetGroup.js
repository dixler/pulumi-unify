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
class default_1 extends aws.elasticache.SubnetGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ElastiCache();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAddTagsToResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].applicator.apply(partialParams));
    }
    invokeAuthorizeCacheSecurityGroupIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeCacheSecurityGroupIngress(this.ops["AuthorizeCacheSecurityGroupIngress"].applicator.apply(partialParams));
    }
    invokeBatchApplyUpdateAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchApplyUpdateAction(this.ops["BatchApplyUpdateAction"].applicator.apply(partialParams));
    }
    invokeBatchStopUpdateAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchStopUpdateAction(this.ops["BatchStopUpdateAction"].applicator.apply(partialParams));
    }
    invokeCompleteMigration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeMigration(this.ops["CompleteMigration"].applicator.apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(this.ops["CopySnapshot"].applicator.apply(partialParams));
    }
    invokeCreateCacheCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheCluster(this.ops["CreateCacheCluster"].applicator.apply(partialParams));
    }
    invokeCreateCacheParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheParameterGroup(this.ops["CreateCacheParameterGroup"].applicator.apply(partialParams));
    }
    invokeCreateCacheSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheSecurityGroup(this.ops["CreateCacheSecurityGroup"].applicator.apply(partialParams));
    }
    invokeCreateCacheSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCacheSubnetGroup(this.ops["CreateCacheSubnetGroup"].applicator.apply(partialParams));
    }
    invokeCreateGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGlobalReplicationGroup(this.ops["CreateGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeCreateReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationGroup(this.ops["CreateReplicationGroup"].applicator.apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].applicator.apply(partialParams));
    }
    invokeCreateUserGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserGroup(this.ops["CreateUserGroup"].applicator.apply(partialParams));
    }
    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeDecreaseReplicaCount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseReplicaCount(this.ops["DecreaseReplicaCount"].applicator.apply(partialParams));
    }
    invokeDeleteCacheCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheCluster(this.ops["DeleteCacheCluster"].applicator.apply(partialParams));
    }
    invokeDeleteCacheParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheParameterGroup(this.ops["DeleteCacheParameterGroup"].applicator.apply(partialParams));
    }
    invokeDeleteCacheSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheSecurityGroup(this.ops["DeleteCacheSecurityGroup"].applicator.apply(partialParams));
    }
    invokeDeleteCacheSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCacheSubnetGroup(this.ops["DeleteCacheSubnetGroup"].applicator.apply(partialParams));
    }
    invokeDeleteGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGlobalReplicationGroup(this.ops["DeleteGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeDeleteReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationGroup(this.ops["DeleteReplicationGroup"].applicator.apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].applicator.apply(partialParams));
    }
    invokeDeleteUserGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserGroup(this.ops["DeleteUserGroup"].applicator.apply(partialParams));
    }
    invokeDescribeCacheParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCacheParameters(this.ops["DescribeCacheParameters"].applicator.apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].applicator.apply(partialParams));
    }
    invokeDisassociateGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(this.ops["DisassociateGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeFailoverGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverGlobalReplicationGroup(this.ops["FailoverGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeIncreaseReplicaCount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseReplicaCount(this.ops["IncreaseReplicaCount"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeModifyCacheCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCacheCluster(this.ops["ModifyCacheCluster"].applicator.apply(partialParams));
    }
    invokeModifyCacheParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCacheParameterGroup(this.ops["ModifyCacheParameterGroup"].applicator.apply(partialParams));
    }
    invokeModifyCacheSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCacheSubnetGroup(this.ops["ModifyCacheSubnetGroup"].applicator.apply(partialParams));
    }
    invokeModifyGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyGlobalReplicationGroup(this.ops["ModifyGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeModifyReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationGroup(this.ops["ModifyReplicationGroup"].applicator.apply(partialParams));
    }
    invokeModifyReplicationGroupShardConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationGroupShardConfiguration(this.ops["ModifyReplicationGroupShardConfiguration"].applicator.apply(partialParams));
    }
    invokeModifyUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyUser(this.ops["ModifyUser"].applicator.apply(partialParams));
    }
    invokeModifyUserGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyUserGroup(this.ops["ModifyUserGroup"].applicator.apply(partialParams));
    }
    invokePurchaseReservedCacheNodesOffering(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedCacheNodesOffering(this.ops["PurchaseReservedCacheNodesOffering"].applicator.apply(partialParams));
    }
    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebalanceSlotsInGlobalReplicationGroup(this.ops["RebalanceSlotsInGlobalReplicationGroup"].applicator.apply(partialParams));
    }
    invokeRebootCacheCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootCacheCluster(this.ops["RebootCacheCluster"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].applicator.apply(partialParams));
    }
    invokeResetCacheParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetCacheParameterGroup(this.ops["ResetCacheParameterGroup"].applicator.apply(partialParams));
    }
    invokeRevokeCacheSecurityGroupIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeCacheSecurityGroupIngress(this.ops["RevokeCacheSecurityGroupIngress"].applicator.apply(partialParams));
    }
    invokeStartMigration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMigration(this.ops["StartMigration"].applicator.apply(partialParams));
    }
    invokeTestFailover(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testFailover(this.ops["TestFailover"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
