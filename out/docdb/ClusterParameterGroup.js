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
const schema = require("../apis/docdb-2014-10-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.docdb.ClusterParameterGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DocDB();
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
    invokeCopyDBClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.copyDBClusterParameterGroup(this.ops["CopyDBClusterParameterGroup"].apply(partialParams));
    }
    invokeCopyDBClusterSnapshot(partialParams) {
        this.boot();
        return this.client.copyDBClusterSnapshot(this.ops["CopyDBClusterSnapshot"].apply(partialParams));
    }
    invokeCreateDBCluster(partialParams) {
        this.boot();
        return this.client.createDBCluster(this.ops["CreateDBCluster"].apply(partialParams));
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
    invokeDeleteDBCluster(partialParams) {
        this.boot();
        return this.client.deleteDBCluster(this.ops["DeleteDBCluster"].apply(partialParams));
    }
    invokeDeleteDBClusterSnapshot(partialParams) {
        this.boot();
        return this.client.deleteDBClusterSnapshot(this.ops["DeleteDBClusterSnapshot"].apply(partialParams));
    }
    invokeDeleteDBInstance(partialParams) {
        this.boot();
        return this.client.deleteDBInstance(this.ops["DeleteDBInstance"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        this.boot();
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDeleteGlobalCluster(partialParams) {
        this.boot();
        return this.client.deleteGlobalCluster(this.ops["DeleteGlobalCluster"].apply(partialParams));
    }
    invokeDescribeCertificates(partialParams) {
        this.boot();
        return this.client.describeCertificates(this.ops["DescribeCertificates"].apply(partialParams));
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
    invokeDescribeDBInstances(partialParams) {
        this.boot();
        return this.client.describeDBInstances(this.ops["DescribeDBInstances"].apply(partialParams));
    }
    invokeDescribeDBSubnetGroups(partialParams) {
        this.boot();
        return this.client.describeDBSubnetGroups(this.ops["DescribeDBSubnetGroups"].apply(partialParams));
    }
    invokeDescribeEngineDefaultClusterParameters(partialParams) {
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(this.ops["DescribeEngineDefaultClusterParameters"].apply(partialParams));
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
    invokeDescribeGlobalClusters(partialParams) {
        this.boot();
        return this.client.describeGlobalClusters(this.ops["DescribeGlobalClusters"].apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams));
    }
    invokeDescribePendingMaintenanceActions(partialParams) {
        this.boot();
        return this.client.describePendingMaintenanceActions(this.ops["DescribePendingMaintenanceActions"].apply(partialParams));
    }
    invokeFailoverDBCluster(partialParams) {
        this.boot();
        return this.client.failoverDBCluster(this.ops["FailoverDBCluster"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyDBCluster(partialParams) {
        this.boot();
        return this.client.modifyDBCluster(this.ops["ModifyDBCluster"].apply(partialParams));
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
    invokeRebootDBInstance(partialParams) {
        this.boot();
        return this.client.rebootDBInstance(this.ops["RebootDBInstance"].apply(partialParams));
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
    invokeRestoreDBClusterFromSnapshot(partialParams) {
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams));
    }
    invokeRestoreDBClusterToPointInTime(partialParams) {
        this.boot();
        return this.client.restoreDBClusterToPointInTime(this.ops["RestoreDBClusterToPointInTime"].apply(partialParams));
    }
    invokeStartDBCluster(partialParams) {
        this.boot();
        return this.client.startDBCluster(this.ops["StartDBCluster"].apply(partialParams));
    }
    invokeStopDBCluster(partialParams) {
        this.boot();
        return this.client.stopDBCluster(this.ops["StopDBCluster"].apply(partialParams));
    }
}
exports.default = default_1;
