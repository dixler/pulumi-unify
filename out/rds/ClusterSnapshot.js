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
const schema = require("../apis/rds-2014-10-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.rds.ClusterSnapshot {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.RDS();
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
    invokeAddSourceIdentifierToSubscription(partialParams) {
        this.boot();
        return this.client.addSourceIdentifierToSubscription(this.ops["AddSourceIdentifierToSubscription"].apply(partialParams));
    }
    invokeApplyPendingMaintenanceAction(partialParams) {
        this.boot();
        return this.client.applyPendingMaintenanceAction(this.ops["ApplyPendingMaintenanceAction"].apply(partialParams));
    }
    invokeAuthorizeDBSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.authorizeDBSecurityGroupIngress(this.ops["AuthorizeDBSecurityGroupIngress"].apply(partialParams));
    }
    invokeBacktrackDBCluster(partialParams) {
        this.boot();
        return this.client.backtrackDBCluster(this.ops["BacktrackDBCluster"].apply(partialParams));
    }
    invokeCancelExportTask(partialParams) {
        this.boot();
        return this.client.cancelExportTask(this.ops["CancelExportTask"].apply(partialParams));
    }
    invokeCopyDBClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.copyDBClusterParameterGroup(this.ops["CopyDBClusterParameterGroup"].apply(partialParams));
    }
    invokeCopyDBClusterSnapshot(partialParams) {
        this.boot();
        return this.client.copyDBClusterSnapshot(this.ops["CopyDBClusterSnapshot"].apply(partialParams));
    }
    invokeCopyDBParameterGroup(partialParams) {
        this.boot();
        return this.client.copyDBParameterGroup(this.ops["CopyDBParameterGroup"].apply(partialParams));
    }
    invokeCopyDBSnapshot(partialParams) {
        this.boot();
        return this.client.copyDBSnapshot(this.ops["CopyDBSnapshot"].apply(partialParams));
    }
    invokeCopyOptionGroup(partialParams) {
        this.boot();
        return this.client.copyOptionGroup(this.ops["CopyOptionGroup"].apply(partialParams));
    }
    invokeCreateCustomAvailabilityZone(partialParams) {
        this.boot();
        return this.client.createCustomAvailabilityZone(this.ops["CreateCustomAvailabilityZone"].apply(partialParams));
    }
    invokeCreateCustomDBEngineVersion(partialParams) {
        this.boot();
        return this.client.createCustomDBEngineVersion(this.ops["CreateCustomDBEngineVersion"].apply(partialParams));
    }
    invokeCreateDBCluster(partialParams) {
        this.boot();
        return this.client.createDBCluster(this.ops["CreateDBCluster"].apply(partialParams));
    }
    invokeCreateDBClusterEndpoint(partialParams) {
        this.boot();
        return this.client.createDBClusterEndpoint(this.ops["CreateDBClusterEndpoint"].apply(partialParams));
    }
    invokeCreateDBClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.createDBClusterParameterGroup(this.ops["CreateDBClusterParameterGroup"].apply(partialParams));
    }
    invokeCreateDBClusterSnapshot(partialParams) {
        this.boot();
        return this.client.createDBClusterSnapshot(this.ops["CreateDBClusterSnapshot"].apply(partialParams));
    }
    invokeCreateDBInstance(partialParams) {
        this.boot();
        return this.client.createDBInstance(this.ops["CreateDBInstance"].apply(partialParams));
    }
    invokeCreateDBInstanceReadReplica(partialParams) {
        this.boot();
        return this.client.createDBInstanceReadReplica(this.ops["CreateDBInstanceReadReplica"].apply(partialParams));
    }
    invokeCreateDBParameterGroup(partialParams) {
        this.boot();
        return this.client.createDBParameterGroup(this.ops["CreateDBParameterGroup"].apply(partialParams));
    }
    invokeCreateDBProxy(partialParams) {
        this.boot();
        return this.client.createDBProxy(this.ops["CreateDBProxy"].apply(partialParams));
    }
    invokeCreateDBProxyEndpoint(partialParams) {
        this.boot();
        return this.client.createDBProxyEndpoint(this.ops["CreateDBProxyEndpoint"].apply(partialParams));
    }
    invokeCreateDBSecurityGroup(partialParams) {
        this.boot();
        return this.client.createDBSecurityGroup(this.ops["CreateDBSecurityGroup"].apply(partialParams));
    }
    invokeCreateDBSnapshot(partialParams) {
        this.boot();
        return this.client.createDBSnapshot(this.ops["CreateDBSnapshot"].apply(partialParams));
    }
    invokeCreateDBSubnetGroup(partialParams) {
        this.boot();
        return this.client.createDBSubnetGroup(this.ops["CreateDBSubnetGroup"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        this.boot();
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeCreateGlobalCluster(partialParams) {
        this.boot();
        return this.client.createGlobalCluster(this.ops["CreateGlobalCluster"].apply(partialParams));
    }
    invokeCreateOptionGroup(partialParams) {
        this.boot();
        return this.client.createOptionGroup(this.ops["CreateOptionGroup"].apply(partialParams));
    }
    invokeDeleteCustomAvailabilityZone(partialParams) {
        this.boot();
        return this.client.deleteCustomAvailabilityZone(this.ops["DeleteCustomAvailabilityZone"].apply(partialParams));
    }
    invokeDeleteCustomDBEngineVersion(partialParams) {
        this.boot();
        return this.client.deleteCustomDBEngineVersion(this.ops["DeleteCustomDBEngineVersion"].apply(partialParams));
    }
    invokeDeleteDBCluster(partialParams) {
        this.boot();
        return this.client.deleteDBCluster(this.ops["DeleteDBCluster"].apply(partialParams));
    }
    invokeDeleteDBClusterEndpoint(partialParams) {
        this.boot();
        return this.client.deleteDBClusterEndpoint(this.ops["DeleteDBClusterEndpoint"].apply(partialParams));
    }
    invokeDeleteDBClusterSnapshot(partialParams) {
        this.boot();
        return this.client.deleteDBClusterSnapshot(this.ops["DeleteDBClusterSnapshot"].apply(partialParams));
    }
    invokeDeleteDBInstance(partialParams) {
        this.boot();
        return this.client.deleteDBInstance(this.ops["DeleteDBInstance"].apply(partialParams));
    }
    invokeDeleteDBInstanceAutomatedBackup(partialParams) {
        this.boot();
        return this.client.deleteDBInstanceAutomatedBackup(this.ops["DeleteDBInstanceAutomatedBackup"].apply(partialParams));
    }
    invokeDeleteDBProxy(partialParams) {
        this.boot();
        return this.client.deleteDBProxy(this.ops["DeleteDBProxy"].apply(partialParams));
    }
    invokeDeleteDBProxyEndpoint(partialParams) {
        this.boot();
        return this.client.deleteDBProxyEndpoint(this.ops["DeleteDBProxyEndpoint"].apply(partialParams));
    }
    invokeDeleteDBSnapshot(partialParams) {
        this.boot();
        return this.client.deleteDBSnapshot(this.ops["DeleteDBSnapshot"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        this.boot();
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDeleteGlobalCluster(partialParams) {
        this.boot();
        return this.client.deleteGlobalCluster(this.ops["DeleteGlobalCluster"].apply(partialParams));
    }
    invokeDeleteInstallationMedia(partialParams) {
        this.boot();
        return this.client.deleteInstallationMedia(this.ops["DeleteInstallationMedia"].apply(partialParams));
    }
    invokeDeregisterDBProxyTargets(partialParams) {
        this.boot();
        return this.client.deregisterDBProxyTargets(this.ops["DeregisterDBProxyTargets"].apply(partialParams));
    }
    invokeDescribeAccountAttributes(partialParams) {
        this.boot();
        return this.client.describeAccountAttributes(this.ops["DescribeAccountAttributes"].apply(partialParams));
    }
    invokeDescribeCertificates(partialParams) {
        this.boot();
        return this.client.describeCertificates(this.ops["DescribeCertificates"].apply(partialParams));
    }
    invokeDescribeCustomAvailabilityZones(partialParams) {
        this.boot();
        return this.client.describeCustomAvailabilityZones(this.ops["DescribeCustomAvailabilityZones"].apply(partialParams));
    }
    invokeDescribeDBClusterBacktracks(partialParams) {
        this.boot();
        return this.client.describeDBClusterBacktracks(this.ops["DescribeDBClusterBacktracks"].apply(partialParams));
    }
    invokeDescribeDBClusterEndpoints(partialParams) {
        this.boot();
        return this.client.describeDBClusterEndpoints(this.ops["DescribeDBClusterEndpoints"].apply(partialParams));
    }
    invokeDescribeDBClusterParameterGroups(partialParams) {
        this.boot();
        return this.client.describeDBClusterParameterGroups(this.ops["DescribeDBClusterParameterGroups"].apply(partialParams));
    }
    invokeDescribeDBClusterParameters(partialParams) {
        this.boot();
        return this.client.describeDBClusterParameters(this.ops["DescribeDBClusterParameters"].apply(partialParams));
    }
    invokeDescribeDBClusterSnapshotAttributes(partialParams) {
        this.boot();
        return this.client.describeDBClusterSnapshotAttributes(this.ops["DescribeDBClusterSnapshotAttributes"].apply(partialParams));
    }
    invokeDescribeDBClusterSnapshots(partialParams) {
        this.boot();
        return this.client.describeDBClusterSnapshots(this.ops["DescribeDBClusterSnapshots"].apply(partialParams));
    }
    invokeDescribeDBClusters(partialParams) {
        this.boot();
        return this.client.describeDBClusters(this.ops["DescribeDBClusters"].apply(partialParams));
    }
    invokeDescribeDBEngineVersions(partialParams) {
        this.boot();
        return this.client.describeDBEngineVersions(this.ops["DescribeDBEngineVersions"].apply(partialParams));
    }
    invokeDescribeDBInstanceAutomatedBackups(partialParams) {
        this.boot();
        return this.client.describeDBInstanceAutomatedBackups(this.ops["DescribeDBInstanceAutomatedBackups"].apply(partialParams));
    }
    invokeDescribeDBInstances(partialParams) {
        this.boot();
        return this.client.describeDBInstances(this.ops["DescribeDBInstances"].apply(partialParams));
    }
    invokeDescribeDBLogFiles(partialParams) {
        this.boot();
        return this.client.describeDBLogFiles(this.ops["DescribeDBLogFiles"].apply(partialParams));
    }
    invokeDescribeDBParameterGroups(partialParams) {
        this.boot();
        return this.client.describeDBParameterGroups(this.ops["DescribeDBParameterGroups"].apply(partialParams));
    }
    invokeDescribeDBParameters(partialParams) {
        this.boot();
        return this.client.describeDBParameters(this.ops["DescribeDBParameters"].apply(partialParams));
    }
    invokeDescribeDBProxies(partialParams) {
        this.boot();
        return this.client.describeDBProxies(this.ops["DescribeDBProxies"].apply(partialParams));
    }
    invokeDescribeDBProxyEndpoints(partialParams) {
        this.boot();
        return this.client.describeDBProxyEndpoints(this.ops["DescribeDBProxyEndpoints"].apply(partialParams));
    }
    invokeDescribeDBProxyTargetGroups(partialParams) {
        this.boot();
        return this.client.describeDBProxyTargetGroups(this.ops["DescribeDBProxyTargetGroups"].apply(partialParams));
    }
    invokeDescribeDBProxyTargets(partialParams) {
        this.boot();
        return this.client.describeDBProxyTargets(this.ops["DescribeDBProxyTargets"].apply(partialParams));
    }
    invokeDescribeDBSecurityGroups(partialParams) {
        this.boot();
        return this.client.describeDBSecurityGroups(this.ops["DescribeDBSecurityGroups"].apply(partialParams));
    }
    invokeDescribeDBSnapshotAttributes(partialParams) {
        this.boot();
        return this.client.describeDBSnapshotAttributes(this.ops["DescribeDBSnapshotAttributes"].apply(partialParams));
    }
    invokeDescribeDBSnapshots(partialParams) {
        this.boot();
        return this.client.describeDBSnapshots(this.ops["DescribeDBSnapshots"].apply(partialParams));
    }
    invokeDescribeDBSubnetGroups(partialParams) {
        this.boot();
        return this.client.describeDBSubnetGroups(this.ops["DescribeDBSubnetGroups"].apply(partialParams));
    }
    invokeDescribeEngineDefaultClusterParameters(partialParams) {
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        this.boot();
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].apply(partialParams));
    }
    invokeDescribeEventCategories(partialParams) {
        this.boot();
        return this.client.describeEventCategories(this.ops["DescribeEventCategories"].apply(partialParams));
    }
    invokeDescribeEventSubscriptions(partialParams) {
        this.boot();
        return this.client.describeEventSubscriptions(this.ops["DescribeEventSubscriptions"].apply(partialParams));
    }
    invokeDescribeEvents(partialParams) {
        this.boot();
        return this.client.describeEvents(this.ops["DescribeEvents"].apply(partialParams));
    }
    invokeDescribeExportTasks(partialParams) {
        this.boot();
        return this.client.describeExportTasks(this.ops["DescribeExportTasks"].apply(partialParams));
    }
    invokeDescribeGlobalClusters(partialParams) {
        this.boot();
        return this.client.describeGlobalClusters(this.ops["DescribeGlobalClusters"].apply(partialParams));
    }
    invokeDescribeInstallationMedia(partialParams) {
        this.boot();
        return this.client.describeInstallationMedia(this.ops["DescribeInstallationMedia"].apply(partialParams));
    }
    invokeDescribeOptionGroupOptions(partialParams) {
        this.boot();
        return this.client.describeOptionGroupOptions(this.ops["DescribeOptionGroupOptions"].apply(partialParams));
    }
    invokeDescribeOptionGroups(partialParams) {
        this.boot();
        return this.client.describeOptionGroups(this.ops["DescribeOptionGroups"].apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams));
    }
    invokeDescribePendingMaintenanceActions(partialParams) {
        this.boot();
        return this.client.describePendingMaintenanceActions(this.ops["DescribePendingMaintenanceActions"].apply(partialParams));
    }
    invokeDescribeReservedDBInstances(partialParams) {
        this.boot();
        return this.client.describeReservedDBInstances(this.ops["DescribeReservedDBInstances"].apply(partialParams));
    }
    invokeDescribeReservedDBInstancesOfferings(partialParams) {
        this.boot();
        return this.client.describeReservedDBInstancesOfferings(this.ops["DescribeReservedDBInstancesOfferings"].apply(partialParams));
    }
    invokeDescribeSourceRegions(partialParams) {
        this.boot();
        return this.client.describeSourceRegions(this.ops["DescribeSourceRegions"].apply(partialParams));
    }
    invokeDescribeValidDBInstanceModifications(partialParams) {
        this.boot();
        return this.client.describeValidDBInstanceModifications(this.ops["DescribeValidDBInstanceModifications"].apply(partialParams));
    }
    invokeDownloadDBLogFilePortion(partialParams) {
        this.boot();
        return this.client.downloadDBLogFilePortion(this.ops["DownloadDBLogFilePortion"].apply(partialParams));
    }
    invokeFailoverDBCluster(partialParams) {
        this.boot();
        return this.client.failoverDBCluster(this.ops["FailoverDBCluster"].apply(partialParams));
    }
    invokeFailoverGlobalCluster(partialParams) {
        this.boot();
        return this.client.failoverGlobalCluster(this.ops["FailoverGlobalCluster"].apply(partialParams));
    }
    invokeImportInstallationMedia(partialParams) {
        this.boot();
        return this.client.importInstallationMedia(this.ops["ImportInstallationMedia"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyCertificates(partialParams) {
        this.boot();
        return this.client.modifyCertificates(this.ops["ModifyCertificates"].apply(partialParams));
    }
    invokeModifyCurrentDBClusterCapacity(partialParams) {
        this.boot();
        return this.client.modifyCurrentDBClusterCapacity(this.ops["ModifyCurrentDBClusterCapacity"].apply(partialParams));
    }
    invokeModifyCustomDBEngineVersion(partialParams) {
        this.boot();
        return this.client.modifyCustomDBEngineVersion(this.ops["ModifyCustomDBEngineVersion"].apply(partialParams));
    }
    invokeModifyDBCluster(partialParams) {
        this.boot();
        return this.client.modifyDBCluster(this.ops["ModifyDBCluster"].apply(partialParams));
    }
    invokeModifyDBClusterEndpoint(partialParams) {
        this.boot();
        return this.client.modifyDBClusterEndpoint(this.ops["ModifyDBClusterEndpoint"].apply(partialParams));
    }
    invokeModifyDBClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.modifyDBClusterParameterGroup(this.ops["ModifyDBClusterParameterGroup"].apply(partialParams));
    }
    invokeModifyDBClusterSnapshotAttribute(partialParams) {
        this.boot();
        return this.client.modifyDBClusterSnapshotAttribute(this.ops["ModifyDBClusterSnapshotAttribute"].apply(partialParams));
    }
    invokeModifyDBInstance(partialParams) {
        this.boot();
        return this.client.modifyDBInstance(this.ops["ModifyDBInstance"].apply(partialParams));
    }
    invokeModifyDBParameterGroup(partialParams) {
        this.boot();
        return this.client.modifyDBParameterGroup(this.ops["ModifyDBParameterGroup"].apply(partialParams));
    }
    invokeModifyDBProxy(partialParams) {
        this.boot();
        return this.client.modifyDBProxy(this.ops["ModifyDBProxy"].apply(partialParams));
    }
    invokeModifyDBProxyEndpoint(partialParams) {
        this.boot();
        return this.client.modifyDBProxyEndpoint(this.ops["ModifyDBProxyEndpoint"].apply(partialParams));
    }
    invokeModifyDBProxyTargetGroup(partialParams) {
        this.boot();
        return this.client.modifyDBProxyTargetGroup(this.ops["ModifyDBProxyTargetGroup"].apply(partialParams));
    }
    invokeModifyDBSnapshot(partialParams) {
        this.boot();
        return this.client.modifyDBSnapshot(this.ops["ModifyDBSnapshot"].apply(partialParams));
    }
    invokeModifyDBSnapshotAttribute(partialParams) {
        this.boot();
        return this.client.modifyDBSnapshotAttribute(this.ops["ModifyDBSnapshotAttribute"].apply(partialParams));
    }
    invokeModifyDBSubnetGroup(partialParams) {
        this.boot();
        return this.client.modifyDBSubnetGroup(this.ops["ModifyDBSubnetGroup"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        this.boot();
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokeModifyGlobalCluster(partialParams) {
        this.boot();
        return this.client.modifyGlobalCluster(this.ops["ModifyGlobalCluster"].apply(partialParams));
    }
    invokeModifyOptionGroup(partialParams) {
        this.boot();
        return this.client.modifyOptionGroup(this.ops["ModifyOptionGroup"].apply(partialParams));
    }
    invokePromoteReadReplica(partialParams) {
        this.boot();
        return this.client.promoteReadReplica(this.ops["PromoteReadReplica"].apply(partialParams));
    }
    invokePromoteReadReplicaDBCluster(partialParams) {
        this.boot();
        return this.client.promoteReadReplicaDBCluster(this.ops["PromoteReadReplicaDBCluster"].apply(partialParams));
    }
    invokePurchaseReservedDBInstancesOffering(partialParams) {
        this.boot();
        return this.client.purchaseReservedDBInstancesOffering(this.ops["PurchaseReservedDBInstancesOffering"].apply(partialParams));
    }
    invokeRebootDBCluster(partialParams) {
        this.boot();
        return this.client.rebootDBCluster(this.ops["RebootDBCluster"].apply(partialParams));
    }
    invokeRebootDBInstance(partialParams) {
        this.boot();
        return this.client.rebootDBInstance(this.ops["RebootDBInstance"].apply(partialParams));
    }
    invokeRegisterDBProxyTargets(partialParams) {
        this.boot();
        return this.client.registerDBProxyTargets(this.ops["RegisterDBProxyTargets"].apply(partialParams));
    }
    invokeRemoveFromGlobalCluster(partialParams) {
        this.boot();
        return this.client.removeFromGlobalCluster(this.ops["RemoveFromGlobalCluster"].apply(partialParams));
    }
    invokeRemoveSourceIdentifierFromSubscription(partialParams) {
        this.boot();
        return this.client.removeSourceIdentifierFromSubscription(this.ops["RemoveSourceIdentifierFromSubscription"].apply(partialParams));
    }
    invokeResetDBClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.resetDBClusterParameterGroup(this.ops["ResetDBClusterParameterGroup"].apply(partialParams));
    }
    invokeResetDBParameterGroup(partialParams) {
        this.boot();
        return this.client.resetDBParameterGroup(this.ops["ResetDBParameterGroup"].apply(partialParams));
    }
    invokeRestoreDBClusterFromS3(partialParams) {
        this.boot();
        return this.client.restoreDBClusterFromS3(this.ops["RestoreDBClusterFromS3"].apply(partialParams));
    }
    invokeRestoreDBClusterFromSnapshot(partialParams) {
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams));
    }
    invokeRestoreDBClusterToPointInTime(partialParams) {
        this.boot();
        return this.client.restoreDBClusterToPointInTime(this.ops["RestoreDBClusterToPointInTime"].apply(partialParams));
    }
    invokeRestoreDBInstanceFromDBSnapshot(partialParams) {
        this.boot();
        return this.client.restoreDBInstanceFromDBSnapshot(this.ops["RestoreDBInstanceFromDBSnapshot"].apply(partialParams));
    }
    invokeRestoreDBInstanceFromS3(partialParams) {
        this.boot();
        return this.client.restoreDBInstanceFromS3(this.ops["RestoreDBInstanceFromS3"].apply(partialParams));
    }
    invokeRestoreDBInstanceToPointInTime(partialParams) {
        this.boot();
        return this.client.restoreDBInstanceToPointInTime(this.ops["RestoreDBInstanceToPointInTime"].apply(partialParams));
    }
    invokeRevokeDBSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.revokeDBSecurityGroupIngress(this.ops["RevokeDBSecurityGroupIngress"].apply(partialParams));
    }
    invokeStartActivityStream(partialParams) {
        this.boot();
        return this.client.startActivityStream(this.ops["StartActivityStream"].apply(partialParams));
    }
    invokeStartDBCluster(partialParams) {
        this.boot();
        return this.client.startDBCluster(this.ops["StartDBCluster"].apply(partialParams));
    }
    invokeStartDBInstance(partialParams) {
        this.boot();
        return this.client.startDBInstance(this.ops["StartDBInstance"].apply(partialParams));
    }
    invokeStartDBInstanceAutomatedBackupsReplication(partialParams) {
        this.boot();
        return this.client.startDBInstanceAutomatedBackupsReplication(this.ops["StartDBInstanceAutomatedBackupsReplication"].apply(partialParams));
    }
    invokeStartExportTask(partialParams) {
        this.boot();
        return this.client.startExportTask(this.ops["StartExportTask"].apply(partialParams));
    }
    invokeStopActivityStream(partialParams) {
        this.boot();
        return this.client.stopActivityStream(this.ops["StopActivityStream"].apply(partialParams));
    }
    invokeStopDBCluster(partialParams) {
        this.boot();
        return this.client.stopDBCluster(this.ops["StopDBCluster"].apply(partialParams));
    }
    invokeStopDBInstance(partialParams) {
        this.boot();
        return this.client.stopDBInstance(this.ops["StopDBInstance"].apply(partialParams));
    }
    invokeStopDBInstanceAutomatedBackupsReplication(partialParams) {
        this.boot();
        return this.client.stopDBInstanceAutomatedBackupsReplication(this.ops["StopDBInstanceAutomatedBackupsReplication"].apply(partialParams));
    }
}
exports.default = default_1;
