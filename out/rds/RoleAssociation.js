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
class default_1 extends aws.rds.RoleAssociation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.RDS();
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
    invokeAddRoleToDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToDBCluster(this.ops["AddRoleToDBCluster"].applicator.apply(partialParams));
    }
    invokeAddRoleToDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addRoleToDBInstance(this.ops["AddRoleToDBInstance"].applicator.apply(partialParams));
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
    invokeAuthorizeDBSecurityGroupIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeDBSecurityGroupIngress(this.ops["AuthorizeDBSecurityGroupIngress"].applicator.apply(partialParams));
    }
    invokeBacktrackDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.backtrackDBCluster(this.ops["BacktrackDBCluster"].applicator.apply(partialParams));
    }
    invokeCancelExportTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelExportTask(this.ops["CancelExportTask"].applicator.apply(partialParams));
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
    invokeCopyDBParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBParameterGroup(this.ops["CopyDBParameterGroup"].applicator.apply(partialParams));
    }
    invokeCopyDBSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyDBSnapshot(this.ops["CopyDBSnapshot"].applicator.apply(partialParams));
    }
    invokeCopyOptionGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyOptionGroup(this.ops["CopyOptionGroup"].applicator.apply(partialParams));
    }
    invokeCreateCustomAvailabilityZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomAvailabilityZone(this.ops["CreateCustomAvailabilityZone"].applicator.apply(partialParams));
    }
    invokeCreateCustomDBEngineVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomDBEngineVersion(this.ops["CreateCustomDBEngineVersion"].applicator.apply(partialParams));
    }
    invokeCreateDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBCluster(this.ops["CreateDBCluster"].applicator.apply(partialParams));
    }
    invokeCreateDBClusterEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBClusterEndpoint(this.ops["CreateDBClusterEndpoint"].applicator.apply(partialParams));
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
    invokeCreateDBInstanceReadReplica(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBInstanceReadReplica(this.ops["CreateDBInstanceReadReplica"].applicator.apply(partialParams));
    }
    invokeCreateDBParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBParameterGroup(this.ops["CreateDBParameterGroup"].applicator.apply(partialParams));
    }
    invokeCreateDBProxy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBProxy(this.ops["CreateDBProxy"].applicator.apply(partialParams));
    }
    invokeCreateDBProxyEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBProxyEndpoint(this.ops["CreateDBProxyEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateDBSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSecurityGroup(this.ops["CreateDBSecurityGroup"].applicator.apply(partialParams));
    }
    invokeCreateDBSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDBSnapshot(this.ops["CreateDBSnapshot"].applicator.apply(partialParams));
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
    invokeCreateOptionGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOptionGroup(this.ops["CreateOptionGroup"].applicator.apply(partialParams));
    }
    invokeDeleteCustomAvailabilityZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomAvailabilityZone(this.ops["DeleteCustomAvailabilityZone"].applicator.apply(partialParams));
    }
    invokeDeleteCustomDBEngineVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomDBEngineVersion(this.ops["DeleteCustomDBEngineVersion"].applicator.apply(partialParams));
    }
    invokeDeleteDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBCluster(this.ops["DeleteDBCluster"].applicator.apply(partialParams));
    }
    invokeDeleteDBClusterEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBClusterEndpoint(this.ops["DeleteDBClusterEndpoint"].applicator.apply(partialParams));
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
    invokeDeleteDBParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBParameterGroup(this.ops["DeleteDBParameterGroup"].applicator.apply(partialParams));
    }
    invokeDeleteDBProxy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBProxy(this.ops["DeleteDBProxy"].applicator.apply(partialParams));
    }
    invokeDeleteDBProxyEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBProxyEndpoint(this.ops["DeleteDBProxyEndpoint"].applicator.apply(partialParams));
    }
    invokeDeleteDBSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSecurityGroup(this.ops["DeleteDBSecurityGroup"].applicator.apply(partialParams));
    }
    invokeDeleteDBSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDBSnapshot(this.ops["DeleteDBSnapshot"].applicator.apply(partialParams));
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
    invokeDeleteInstallationMedia(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstallationMedia(this.ops["DeleteInstallationMedia"].applicator.apply(partialParams));
    }
    invokeDeleteOptionGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOptionGroup(this.ops["DeleteOptionGroup"].applicator.apply(partialParams));
    }
    invokeDeregisterDBProxyTargets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterDBProxyTargets(this.ops["DeregisterDBProxyTargets"].applicator.apply(partialParams));
    }
    invokeDescribeDBClusterBacktracks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBClusterBacktracks(this.ops["DescribeDBClusterBacktracks"].applicator.apply(partialParams));
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
    invokeDescribeDBLogFiles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBLogFiles(this.ops["DescribeDBLogFiles"].applicator.apply(partialParams));
    }
    invokeDescribeDBParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBParameters(this.ops["DescribeDBParameters"].applicator.apply(partialParams));
    }
    invokeDescribeDBProxyTargetGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBProxyTargetGroups(this.ops["DescribeDBProxyTargetGroups"].applicator.apply(partialParams));
    }
    invokeDescribeDBProxyTargets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBProxyTargets(this.ops["DescribeDBProxyTargets"].applicator.apply(partialParams));
    }
    invokeDescribeDBSnapshotAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDBSnapshotAttributes(this.ops["DescribeDBSnapshotAttributes"].applicator.apply(partialParams));
    }
    invokeDescribeEngineDefaultClusterParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultClusterParameters(this.ops["DescribeEngineDefaultClusterParameters"].applicator.apply(partialParams));
    }
    invokeDescribeEngineDefaultParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEngineDefaultParameters(this.ops["DescribeEngineDefaultParameters"].applicator.apply(partialParams));
    }
    invokeDescribeOptionGroupOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOptionGroupOptions(this.ops["DescribeOptionGroupOptions"].applicator.apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].applicator.apply(partialParams));
    }
    invokeDescribeValidDBInstanceModifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeValidDBInstanceModifications(this.ops["DescribeValidDBInstanceModifications"].applicator.apply(partialParams));
    }
    invokeDownloadDBLogFilePortion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.downloadDBLogFilePortion(this.ops["DownloadDBLogFilePortion"].applicator.apply(partialParams));
    }
    invokeFailoverDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverDBCluster(this.ops["FailoverDBCluster"].applicator.apply(partialParams));
    }
    invokeFailoverGlobalCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverGlobalCluster(this.ops["FailoverGlobalCluster"].applicator.apply(partialParams));
    }
    invokeImportInstallationMedia(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importInstallationMedia(this.ops["ImportInstallationMedia"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeModifyCurrentDBClusterCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCurrentDBClusterCapacity(this.ops["ModifyCurrentDBClusterCapacity"].applicator.apply(partialParams));
    }
    invokeModifyCustomDBEngineVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCustomDBEngineVersion(this.ops["ModifyCustomDBEngineVersion"].applicator.apply(partialParams));
    }
    invokeModifyDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBCluster(this.ops["ModifyDBCluster"].applicator.apply(partialParams));
    }
    invokeModifyDBClusterEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBClusterEndpoint(this.ops["ModifyDBClusterEndpoint"].applicator.apply(partialParams));
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
    invokeModifyDBParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBParameterGroup(this.ops["ModifyDBParameterGroup"].applicator.apply(partialParams));
    }
    invokeModifyDBProxy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBProxy(this.ops["ModifyDBProxy"].applicator.apply(partialParams));
    }
    invokeModifyDBProxyEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBProxyEndpoint(this.ops["ModifyDBProxyEndpoint"].applicator.apply(partialParams));
    }
    invokeModifyDBProxyTargetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBProxyTargetGroup(this.ops["ModifyDBProxyTargetGroup"].applicator.apply(partialParams));
    }
    invokeModifyDBSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSnapshot(this.ops["ModifyDBSnapshot"].applicator.apply(partialParams));
    }
    invokeModifyDBSnapshotAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDBSnapshotAttribute(this.ops["ModifyDBSnapshotAttribute"].applicator.apply(partialParams));
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
    invokeModifyOptionGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyOptionGroup(this.ops["ModifyOptionGroup"].applicator.apply(partialParams));
    }
    invokePromoteReadReplica(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteReadReplica(this.ops["PromoteReadReplica"].applicator.apply(partialParams));
    }
    invokePromoteReadReplicaDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteReadReplicaDBCluster(this.ops["PromoteReadReplicaDBCluster"].applicator.apply(partialParams));
    }
    invokePurchaseReservedDBInstancesOffering(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedDBInstancesOffering(this.ops["PurchaseReservedDBInstancesOffering"].applicator.apply(partialParams));
    }
    invokeRebootDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootDBCluster(this.ops["RebootDBCluster"].applicator.apply(partialParams));
    }
    invokeRebootDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootDBInstance(this.ops["RebootDBInstance"].applicator.apply(partialParams));
    }
    invokeRegisterDBProxyTargets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDBProxyTargets(this.ops["RegisterDBProxyTargets"].applicator.apply(partialParams));
    }
    invokeRemoveRoleFromDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromDBCluster(this.ops["RemoveRoleFromDBCluster"].applicator.apply(partialParams));
    }
    invokeRemoveRoleFromDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeRoleFromDBInstance(this.ops["RemoveRoleFromDBInstance"].applicator.apply(partialParams));
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
    invokeResetDBParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetDBParameterGroup(this.ops["ResetDBParameterGroup"].applicator.apply(partialParams));
    }
    invokeRestoreDBClusterFromS3(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBClusterFromS3(this.ops["RestoreDBClusterFromS3"].applicator.apply(partialParams));
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
    invokeRestoreDBInstanceFromDBSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBInstanceFromDBSnapshot(this.ops["RestoreDBInstanceFromDBSnapshot"].applicator.apply(partialParams));
    }
    invokeRestoreDBInstanceFromS3(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBInstanceFromS3(this.ops["RestoreDBInstanceFromS3"].applicator.apply(partialParams));
    }
    invokeRestoreDBInstanceToPointInTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDBInstanceToPointInTime(this.ops["RestoreDBInstanceToPointInTime"].applicator.apply(partialParams));
    }
    invokeRevokeDBSecurityGroupIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeDBSecurityGroupIngress(this.ops["RevokeDBSecurityGroupIngress"].applicator.apply(partialParams));
    }
    invokeStartActivityStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startActivityStream(this.ops["StartActivityStream"].applicator.apply(partialParams));
    }
    invokeStartDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBCluster(this.ops["StartDBCluster"].applicator.apply(partialParams));
    }
    invokeStartDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBInstance(this.ops["StartDBInstance"].applicator.apply(partialParams));
    }
    invokeStartDBInstanceAutomatedBackupsReplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDBInstanceAutomatedBackupsReplication(this.ops["StartDBInstanceAutomatedBackupsReplication"].applicator.apply(partialParams));
    }
    invokeStartExportTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startExportTask(this.ops["StartExportTask"].applicator.apply(partialParams));
    }
    invokeStopActivityStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopActivityStream(this.ops["StopActivityStream"].applicator.apply(partialParams));
    }
    invokeStopDBCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBCluster(this.ops["StopDBCluster"].applicator.apply(partialParams));
    }
    invokeStopDBInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBInstance(this.ops["StopDBInstance"].applicator.apply(partialParams));
    }
    invokeStopDBInstanceAutomatedBackupsReplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDBInstanceAutomatedBackupsReplication(this.ops["StopDBInstanceAutomatedBackupsReplication"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
