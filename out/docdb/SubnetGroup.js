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
class default_1 extends aws.docdb.SubnetGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DocDB();
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
    invokeAddSourceIdentifierToSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addSourceIdentifierToSubscription(this.ops["AddSourceIdentifierToSubscription"].applicator.apply(partialParams));
    }
    invokeAddTagsToResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].applicator.apply(partialParams));
    }
    invokeApplyPendingMaintenanceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applyPendingMaintenanceAction(this.ops["ApplyPendingMaintenanceAction"].applicator.apply(partialParams));
    }
    invokeCopyDBClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBClusterParameterGroup(this.ops["CopyDBClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeCopyDBClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBClusterSnapshot(this.ops["CopyDBClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBCluster(this.ops["CreateDBCluster"].applicator.apply(partialParams));
    }
    invokeCreateDBClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterParameterGroup(this.ops["CreateDBClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeCreateDBClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterSnapshot(this.ops["CreateDBClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBInstance(this.ops["CreateDBInstance"].applicator.apply(partialParams));
    }
    invokeCreateDBSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSubnetGroup(this.ops["CreateDBSubnetGroup"].applicator.apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].applicator.apply(partialParams));
    }
    invokeCreateGlobalCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGlobalCluster(this.ops["CreateGlobalCluster"].applicator.apply(partialParams));
    }
    invokeDeleteDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBCluster(this.ops["DeleteDBCluster"].applicator.apply(partialParams));
    }
    invokeDeleteDBClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterParameterGroup(this.ops["DeleteDBClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeDeleteDBClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterSnapshot(this.ops["DeleteDBClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBInstance(this.ops["DeleteDBInstance"].applicator.apply(partialParams));
    }
    invokeDeleteDBSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSubnetGroup(this.ops["DeleteDBSubnetGroup"].applicator.apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].applicator.apply(partialParams));
    }
    invokeDeleteGlobalCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGlobalCluster(this.ops["DeleteGlobalCluster"].applicator.apply(partialParams));
    }
    invokeDescribeDBClusterParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterParameters(this.ops["DescribeDBClusterParameters"].applicator.apply(partialParams));
    }
    invokeDescribeDBClusterSnapshotAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterSnapshotAttributes(this.ops["DescribeDBClusterSnapshotAttributes"].applicator.apply(partialParams));
    }
    invokeDescribeEngineDefaultClusterParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(this.ops["DescribeEngineDefaultClusterParameters"].applicator.apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeModifyDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBCluster(this.ops["ModifyDBCluster"].applicator.apply(partialParams));
    }
    invokeModifyDBClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterParameterGroup(this.ops["ModifyDBClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeModifyDBClusterSnapshotAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterSnapshotAttribute(this.ops["ModifyDBClusterSnapshotAttribute"].applicator.apply(partialParams));
    }
    invokeModifyDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBInstance(this.ops["ModifyDBInstance"].applicator.apply(partialParams));
    }
    invokeModifyDBSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSubnetGroup(this.ops["ModifyDBSubnetGroup"].applicator.apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].applicator.apply(partialParams));
    }
    invokeModifyGlobalCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyGlobalCluster(this.ops["ModifyGlobalCluster"].applicator.apply(partialParams));
    }
    invokeRebootDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootDBInstance(this.ops["RebootDBInstance"].applicator.apply(partialParams));
    }
    invokeRemoveFromGlobalCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeFromGlobalCluster(this.ops["RemoveFromGlobalCluster"].applicator.apply(partialParams));
    }
    invokeRemoveSourceIdentifierFromSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeSourceIdentifierFromSubscription(this.ops["RemoveSourceIdentifierFromSubscription"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].applicator.apply(partialParams));
    }
    invokeResetDBClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetDBClusterParameterGroup(this.ops["ResetDBClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeRestoreDBClusterFromSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(this.ops["RestoreDBClusterFromSnapshot"].applicator.apply(partialParams));
    }
    invokeRestoreDBClusterToPointInTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterToPointInTime(this.ops["RestoreDBClusterToPointInTime"].applicator.apply(partialParams));
    }
    invokeStartDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBCluster(this.ops["StartDBCluster"].applicator.apply(partialParams));
    }
    invokeStopDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBCluster(this.ops["StopDBCluster"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
