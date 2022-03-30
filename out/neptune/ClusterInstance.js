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
class default_1 extends aws.neptune.ClusterInstance {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Neptune();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/neptune-2014-10-31.normal.json"), this.client);
    }
    invokeAddRoleToDBCluster(partialParams) {
        return this.client.addRoleToDBCluster(this.ops["AddRoleToDBCluster"].apply(partialParams));
    }
    invokeAddSourceIdentifierToSubscription(partialParams) {
        return this.client.addSourceIdentifierToSubscription(this.ops["AddSourceIdentifierToSubscription"].apply(partialParams));
    }
    invokeAddTagsToResource(partialParams) {
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeApplyPendingMaintenanceAction(partialParams) {
        return this.client.applyPendingMaintenanceAction(this.ops["ApplyPendingMaintenanceAction"].apply(partialParams));
    }
    invokeCopyDBClusterParameterGroup(partialParams) {
        return this.client.copyDBClusterParameterGroup(this.ops["CopyDBClusterParameterGroup"].apply(partialParams));
    }
    invokeCopyDBClusterSnapshot(partialParams) {
        return this.client.copyDBClusterSnapshot(this.ops["CopyDBClusterSnapshot"].apply(partialParams));
    }
    invokeCopyDBParameterGroup(partialParams) {
        return this.client.copyDBParameterGroup(this.ops["CopyDBParameterGroup"].apply(partialParams));
    }
    invokeCreateDBCluster(partialParams) {
        return this.client.createDBCluster(this.ops["CreateDBCluster"].apply(partialParams));
    }
    invokeCreateDBClusterEndpoint(partialParams) {
        return this.client.createDBClusterEndpoint(this.ops["CreateDBClusterEndpoint"].apply(partialParams));
    }
    invokeCreateDBClusterParameterGroup(partialParams) {
        return this.client.createDBClusterParameterGroup(this.ops["CreateDBClusterParameterGroup"].apply(partialParams));
    }
    invokeCreateDBClusterSnapshot(partialParams) {
        return this.client.createDBClusterSnapshot(this.ops["CreateDBClusterSnapshot"].apply(partialParams));
    }
    invokeCreateDBInstance(partialParams) {
        return this.client.createDBInstance(this.ops["CreateDBInstance"].apply(partialParams));
    }
    invokeCreateDBParameterGroup(partialParams) {
        return this.client.createDBParameterGroup(this.ops["CreateDBParameterGroup"].apply(partialParams));
    }
    invokeCreateDBSubnetGroup(partialParams) {
        return this.client.createDBSubnetGroup(this.ops["CreateDBSubnetGroup"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeDeleteDBCluster(partialParams) {
        return this.client.deleteDBCluster(this.ops["DeleteDBCluster"].apply(partialParams));
    }
    invokeDeleteDBClusterEndpoint(partialParams) {
        return this.client.deleteDBClusterEndpoint(this.ops["DeleteDBClusterEndpoint"].apply(partialParams));
    }
    invokeDeleteDBClusterParameterGroup(partialParams) {
        return this.client.deleteDBClusterParameterGroup(this.ops["DeleteDBClusterParameterGroup"].apply(partialParams));
    }
    invokeDeleteDBClusterSnapshot(partialParams) {
        return this.client.deleteDBClusterSnapshot(this.ops["DeleteDBClusterSnapshot"].apply(partialParams));
    }
    invokeDeleteDBInstance(partialParams) {
        return this.client.deleteDBInstance(this.ops["DeleteDBInstance"].apply(partialParams));
    }
    invokeDeleteDBParameterGroup(partialParams) {
        return this.client.deleteDBParameterGroup(this.ops["DeleteDBParameterGroup"].apply(partialParams));
    }
    invokeDeleteDBSubnetGroup(partialParams) {
        return this.client.deleteDBSubnetGroup(this.ops["DeleteDBSubnetGroup"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDescribeDBClusterParameters(partialParams) {
        return this.client.describeDBClusterParameters(this.ops["DescribeDBClusterParameters"].apply(partialParams));
    }
    invokeDescribeDBClusterSnapshotAttributes(partialParams) {
        return this.client.describeDBClusterSnapshotAttributes(this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams));
    }
    invokeDescribeDBParameters(partialParams) {
        return this.client.describeDBParameters(this.ops["DescribeDBParameters"].apply(partialParams));
    }
    invokeDescribeEngineDefaultClusterParameters(partialParams) {
        return this.client.describeEngineDefaultClusterParameters(this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams));
    }
    invokeDescribeValidDBInstanceModifications(partialParams) {
        return this.client.describeValidDBInstanceModifications(this.ops["DescribeValidDBInstanceModifications"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyDBCluster(partialParams) {
        return this.client.modifyDBCluster(this.ops["ModifyDBCluster"].apply(partialParams));
    }
    invokeModifyDBClusterEndpoint(partialParams) {
        return this.client.modifyDBClusterEndpoint(this.ops["ModifyDBClusterEndpoint"].apply(partialParams));
    }
    invokeModifyDBClusterParameterGroup(partialParams) {
        return this.client.modifyDBClusterParameterGroup(this.ops["ModifyDBClusterParameterGroup"].apply(partialParams));
    }
    invokeModifyDBClusterSnapshotAttribute(partialParams) {
        return this.client.modifyDBClusterSnapshotAttribute(this.ops["ModifyDBClusterSnapshotAttribute"].apply(partialParams));
    }
    invokeModifyDBInstance(partialParams) {
        return this.client.modifyDBInstance(this.ops["ModifyDBInstance"].apply(partialParams));
    }
    invokeModifyDBParameterGroup(partialParams) {
        return this.client.modifyDBParameterGroup(this.ops["ModifyDBParameterGroup"].apply(partialParams));
    }
    invokeModifyDBSubnetGroup(partialParams) {
        return this.client.modifyDBSubnetGroup(this.ops["ModifyDBSubnetGroup"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokePromoteReadReplicaDBCluster(partialParams) {
        return this.client.promoteReadReplicaDBCluster(this.ops["PromoteReadReplicaDBCluster"].apply(partialParams));
    }
    invokeRebootDBInstance(partialParams) {
        return this.client.rebootDBInstance(this.ops["RebootDBInstance"].apply(partialParams));
    }
    invokeRemoveRoleFromDBCluster(partialParams) {
        return this.client.removeRoleFromDBCluster(this.ops["RemoveRoleFromDBCluster"].apply(partialParams));
    }
    invokeRemoveSourceIdentifierFromSubscription(partialParams) {
        return this.client.removeSourceIdentifierFromSubscription(this.ops["RemoveSourceIdentifierFromSubscription"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetDBClusterParameterGroup(partialParams) {
        return this.client.resetDBClusterParameterGroup(this.ops["ResetDBClusterParameterGroup"].apply(partialParams));
    }
    invokeResetDBParameterGroup(partialParams) {
        return this.client.resetDBParameterGroup(this.ops["ResetDBParameterGroup"].apply(partialParams));
    }
    invokeRestoreDBClusterFromSnapshot(partialParams) {
        return this.client.restoreDBClusterFromSnapshot(this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams));
    }
    invokeRestoreDBClusterToPointInTime(partialParams) {
        return this.client.restoreDBClusterToPointInTime(this.ops["RestoreDBClusterToPointInTime"].apply(partialParams));
    }
    invokeStartDBCluster(partialParams) {
        return this.client.startDBCluster(this.ops["StartDBCluster"].apply(partialParams));
    }
    invokeStopDBCluster(partialParams) {
        return this.client.stopDBCluster(this.ops["StopDBCluster"].apply(partialParams));
    }
}
exports.default = default_1;
