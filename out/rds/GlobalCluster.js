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
class default_1 extends aws.rds.GlobalCluster {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.RDS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/rds-2014-10-31.normal.json"), this.client);
    }
    invokeAddRoleToDBCluster(partialParams) {
        return this.client.addRoleToDBCluster(this.ops["AddRoleToDBCluster"].apply(partialParams));
    }
    invokeAddRoleToDBInstance(partialParams) {
        return this.client.addRoleToDBInstance(this.ops["AddRoleToDBInstance"].apply(partialParams));
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
    invokeAuthorizeDBSecurityGroupIngress(partialParams) {
        return this.client.authorizeDBSecurityGroupIngress(this.ops["AuthorizeDBSecurityGroupIngress"].apply(partialParams));
    }
    invokeBacktrackDBCluster(partialParams) {
        return this.client.backtrackDBCluster(this.ops["BacktrackDBCluster"].apply(partialParams));
    }
    invokeCancelExportTask(partialParams) {
        return this.client.cancelExportTask(this.ops["CancelExportTask"].apply(partialParams));
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
    invokeCopyDBSnapshot(partialParams) {
        return this.client.copyDBSnapshot(this.ops["CopyDBSnapshot"].apply(partialParams));
    }
    invokeCopyOptionGroup(partialParams) {
        return this.client.copyOptionGroup(this.ops["CopyOptionGroup"].apply(partialParams));
    }
    invokeCreateCustomAvailabilityZone(partialParams) {
        return this.client.createCustomAvailabilityZone(this.ops["CreateCustomAvailabilityZone"].apply(partialParams));
    }
    invokeCreateCustomDBEngineVersion(partialParams) {
        return this.client.createCustomDBEngineVersion(this.ops["CreateCustomDBEngineVersion"].apply(partialParams));
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
    invokeCreateDBInstanceReadReplica(partialParams) {
        return this.client.createDBInstanceReadReplica(this.ops["CreateDBInstanceReadReplica"].apply(partialParams));
    }
    invokeCreateDBParameterGroup(partialParams) {
        return this.client.createDBParameterGroup(this.ops["CreateDBParameterGroup"].apply(partialParams));
    }
    invokeCreateDBProxy(partialParams) {
        return this.client.createDBProxy(this.ops["CreateDBProxy"].apply(partialParams));
    }
    invokeCreateDBProxyEndpoint(partialParams) {
        return this.client.createDBProxyEndpoint(this.ops["CreateDBProxyEndpoint"].apply(partialParams));
    }
    invokeCreateDBSecurityGroup(partialParams) {
        return this.client.createDBSecurityGroup(this.ops["CreateDBSecurityGroup"].apply(partialParams));
    }
    invokeCreateDBSnapshot(partialParams) {
        return this.client.createDBSnapshot(this.ops["CreateDBSnapshot"].apply(partialParams));
    }
    invokeCreateDBSubnetGroup(partialParams) {
        return this.client.createDBSubnetGroup(this.ops["CreateDBSubnetGroup"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeCreateOptionGroup(partialParams) {
        return this.client.createOptionGroup(this.ops["CreateOptionGroup"].apply(partialParams));
    }
    invokeDeleteCustomAvailabilityZone(partialParams) {
        return this.client.deleteCustomAvailabilityZone(this.ops["DeleteCustomAvailabilityZone"].apply(partialParams));
    }
    invokeDeleteCustomDBEngineVersion(partialParams) {
        return this.client.deleteCustomDBEngineVersion(this.ops["DeleteCustomDBEngineVersion"].apply(partialParams));
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
    invokeDeleteDBProxy(partialParams) {
        return this.client.deleteDBProxy(this.ops["DeleteDBProxy"].apply(partialParams));
    }
    invokeDeleteDBProxyEndpoint(partialParams) {
        return this.client.deleteDBProxyEndpoint(this.ops["DeleteDBProxyEndpoint"].apply(partialParams));
    }
    invokeDeleteDBSecurityGroup(partialParams) {
        return this.client.deleteDBSecurityGroup(this.ops["DeleteDBSecurityGroup"].apply(partialParams));
    }
    invokeDeleteDBSnapshot(partialParams) {
        return this.client.deleteDBSnapshot(this.ops["DeleteDBSnapshot"].apply(partialParams));
    }
    invokeDeleteDBSubnetGroup(partialParams) {
        return this.client.deleteDBSubnetGroup(this.ops["DeleteDBSubnetGroup"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDeleteGlobalCluster(partialParams) {
        return this.client.deleteGlobalCluster(this.ops["DeleteGlobalCluster"].apply(partialParams));
    }
    invokeDeleteInstallationMedia(partialParams) {
        return this.client.deleteInstallationMedia(this.ops["DeleteInstallationMedia"].apply(partialParams));
    }
    invokeDeleteOptionGroup(partialParams) {
        return this.client.deleteOptionGroup(this.ops["DeleteOptionGroup"].apply(partialParams));
    }
    invokeDeregisterDBProxyTargets(partialParams) {
        return this.client.deregisterDBProxyTargets(this.ops["DeregisterDBProxyTargets"].apply(partialParams));
    }
    invokeDescribeDBClusterBacktracks(partialParams) {
        return this.client.describeDBClusterBacktracks(this.ops["DescribeDBClusterBacktracks"].apply(partialParams));
    }
    invokeDescribeDBClusterParameters(partialParams) {
        return this.client.describeDBClusterParameters(this.ops["DescribeDBClusterParameters"].apply(partialParams));
    }
    invokeDescribeDBClusterSnapshotAttributes(partialParams) {
        return this.client.describeDBClusterSnapshotAttributes(this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams));
    }
    invokeDescribeDBLogFiles(partialParams) {
        return this.client.describeDBLogFiles(this.ops["DescribeDBLogFiles"].apply(partialParams));
    }
    invokeDescribeDBParameters(partialParams) {
        return this.client.describeDBParameters(this.ops["DescribeDBParameters"].apply(partialParams));
    }
    invokeDescribeDBProxyTargetGroups(partialParams) {
        return this.client.describeDBProxyTargetGroups(this.ops["DescribeDBProxyTargetGroups"].apply(partialParams));
    }
    invokeDescribeDBProxyTargets(partialParams) {
        return this.client.describeDBProxyTargets(this.ops["DescribeDBProxyTargets"].apply(partialParams));
    }
    invokeDescribeDBSnapshotAttributes(partialParams) {
        return this.client.describeDBSnapshotAttributes(this.ops["DescribeDBSnapshotAttributes"].apply(partialParams));
    }
    invokeDescribeEngineDefaultClusterParameters(partialParams) {
        return this.client.describeEngineDefaultClusterParameters(this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].apply(partialParams));
    }
    invokeDescribeOptionGroupOptions(partialParams) {
        return this.client.describeOptionGroupOptions(this.ops["DescribeOptionGroupOptions"].apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams));
    }
    invokeDescribeValidDBInstanceModifications(partialParams) {
        return this.client.describeValidDBInstanceModifications(this.ops["DescribeValidDBInstanceModifications"].apply(partialParams));
    }
    invokeDownloadDBLogFilePortion(partialParams) {
        return this.client.downloadDBLogFilePortion(this.ops["DownloadDBLogFilePortion"].apply(partialParams));
    }
    invokeFailoverDBCluster(partialParams) {
        return this.client.failoverDBCluster(this.ops["FailoverDBCluster"].apply(partialParams));
    }
    invokeFailoverGlobalCluster(partialParams) {
        return this.client.failoverGlobalCluster(this.ops["FailoverGlobalCluster"].apply(partialParams));
    }
    invokeImportInstallationMedia(partialParams) {
        return this.client.importInstallationMedia(this.ops["ImportInstallationMedia"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyCurrentDBClusterCapacity(partialParams) {
        return this.client.modifyCurrentDBClusterCapacity(this.ops["ModifyCurrentDBClusterCapacity"].apply(partialParams));
    }
    invokeModifyCustomDBEngineVersion(partialParams) {
        return this.client.modifyCustomDBEngineVersion(this.ops["ModifyCustomDBEngineVersion"].apply(partialParams));
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
    invokeModifyDBProxy(partialParams) {
        return this.client.modifyDBProxy(this.ops["ModifyDBProxy"].apply(partialParams));
    }
    invokeModifyDBProxyEndpoint(partialParams) {
        return this.client.modifyDBProxyEndpoint(this.ops["ModifyDBProxyEndpoint"].apply(partialParams));
    }
    invokeModifyDBProxyTargetGroup(partialParams) {
        return this.client.modifyDBProxyTargetGroup(this.ops["ModifyDBProxyTargetGroup"].apply(partialParams));
    }
    invokeModifyDBSnapshot(partialParams) {
        return this.client.modifyDBSnapshot(this.ops["ModifyDBSnapshot"].apply(partialParams));
    }
    invokeModifyDBSnapshotAttribute(partialParams) {
        return this.client.modifyDBSnapshotAttribute(this.ops["ModifyDBSnapshotAttribute"].apply(partialParams));
    }
    invokeModifyDBSubnetGroup(partialParams) {
        return this.client.modifyDBSubnetGroup(this.ops["ModifyDBSubnetGroup"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokeModifyOptionGroup(partialParams) {
        return this.client.modifyOptionGroup(this.ops["ModifyOptionGroup"].apply(partialParams));
    }
    invokePromoteReadReplica(partialParams) {
        return this.client.promoteReadReplica(this.ops["PromoteReadReplica"].apply(partialParams));
    }
    invokePromoteReadReplicaDBCluster(partialParams) {
        return this.client.promoteReadReplicaDBCluster(this.ops["PromoteReadReplicaDBCluster"].apply(partialParams));
    }
    invokePurchaseReservedDBInstancesOffering(partialParams) {
        return this.client.purchaseReservedDBInstancesOffering(this.ops["PurchaseReservedDBInstancesOffering"].apply(partialParams));
    }
    invokeRebootDBCluster(partialParams) {
        return this.client.rebootDBCluster(this.ops["RebootDBCluster"].apply(partialParams));
    }
    invokeRebootDBInstance(partialParams) {
        return this.client.rebootDBInstance(this.ops["RebootDBInstance"].apply(partialParams));
    }
    invokeRegisterDBProxyTargets(partialParams) {
        return this.client.registerDBProxyTargets(this.ops["RegisterDBProxyTargets"].apply(partialParams));
    }
    invokeRemoveRoleFromDBCluster(partialParams) {
        return this.client.removeRoleFromDBCluster(this.ops["RemoveRoleFromDBCluster"].apply(partialParams));
    }
    invokeRemoveRoleFromDBInstance(partialParams) {
        return this.client.removeRoleFromDBInstance(this.ops["RemoveRoleFromDBInstance"].apply(partialParams));
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
    invokeRestoreDBClusterFromS3(partialParams) {
        return this.client.restoreDBClusterFromS3(this.ops["RestoreDBClusterFromS3"].apply(partialParams));
    }
    invokeRestoreDBClusterFromSnapshot(partialParams) {
        return this.client.restoreDBClusterFromSnapshot(this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams));
    }
    invokeRestoreDBClusterToPointInTime(partialParams) {
        return this.client.restoreDBClusterToPointInTime(this.ops["RestoreDBClusterToPointInTime"].apply(partialParams));
    }
    invokeRestoreDBInstanceFromDBSnapshot(partialParams) {
        return this.client.restoreDBInstanceFromDBSnapshot(this.ops["RestoreDBInstanceFromDBSnapshot"].apply(partialParams));
    }
    invokeRestoreDBInstanceFromS3(partialParams) {
        return this.client.restoreDBInstanceFromS3(this.ops["RestoreDBInstanceFromS3"].apply(partialParams));
    }
    invokeRestoreDBInstanceToPointInTime(partialParams) {
        return this.client.restoreDBInstanceToPointInTime(this.ops["RestoreDBInstanceToPointInTime"].apply(partialParams));
    }
    invokeRevokeDBSecurityGroupIngress(partialParams) {
        return this.client.revokeDBSecurityGroupIngress(this.ops["RevokeDBSecurityGroupIngress"].apply(partialParams));
    }
    invokeStartActivityStream(partialParams) {
        return this.client.startActivityStream(this.ops["StartActivityStream"].apply(partialParams));
    }
    invokeStartDBCluster(partialParams) {
        return this.client.startDBCluster(this.ops["StartDBCluster"].apply(partialParams));
    }
    invokeStartDBInstance(partialParams) {
        return this.client.startDBInstance(this.ops["StartDBInstance"].apply(partialParams));
    }
    invokeStartDBInstanceAutomatedBackupsReplication(partialParams) {
        return this.client.startDBInstanceAutomatedBackupsReplication(this.ops["StartDBInstanceAutomatedBackupsReplication"].apply(partialParams));
    }
    invokeStartExportTask(partialParams) {
        return this.client.startExportTask(this.ops["StartExportTask"].apply(partialParams));
    }
    invokeStopActivityStream(partialParams) {
        return this.client.stopActivityStream(this.ops["StopActivityStream"].apply(partialParams));
    }
    invokeStopDBCluster(partialParams) {
        return this.client.stopDBCluster(this.ops["StopDBCluster"].apply(partialParams));
    }
    invokeStopDBInstance(partialParams) {
        return this.client.stopDBInstance(this.ops["StopDBInstance"].apply(partialParams));
    }
    invokeStopDBInstanceAutomatedBackupsReplication(partialParams) {
        return this.client.stopDBInstanceAutomatedBackupsReplication(this.ops["StopDBInstanceAutomatedBackupsReplication"].apply(partialParams));
    }
}
exports.default = default_1;
