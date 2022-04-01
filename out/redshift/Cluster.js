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
const schema = require("../apis/redshift-2012-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.redshift.Cluster {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Redshift();
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
    invokeAddPartner(partialParams) {
        this.boot();
        return this.client.addPartner(this.ops["AddPartner"].apply(partialParams));
    }
    invokeAuthorizeSnapshotAccess(partialParams) {
        this.boot();
        return this.client.authorizeSnapshotAccess(this.ops["AuthorizeSnapshotAccess"].apply(partialParams));
    }
    invokeCancelResize(partialParams) {
        this.boot();
        return this.client.cancelResize(this.ops["CancelResize"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateClusterSnapshot(partialParams) {
        this.boot();
        return this.client.createClusterSnapshot(this.ops["CreateClusterSnapshot"].apply(partialParams));
    }
    invokeCreateClusterSubnetGroup(partialParams) {
        this.boot();
        return this.client.createClusterSubnetGroup(this.ops["CreateClusterSubnetGroup"].apply(partialParams));
    }
    invokeCreateUsageLimit(partialParams) {
        this.boot();
        return this.client.createUsageLimit(this.ops["CreateUsageLimit"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteClusterSnapshot(partialParams) {
        this.boot();
        return this.client.deleteClusterSnapshot(this.ops["DeleteClusterSnapshot"].apply(partialParams));
    }
    invokeDeletePartner(partialParams) {
        this.boot();
        return this.client.deletePartner(this.ops["DeletePartner"].apply(partialParams));
    }
    invokeDescribeLoggingStatus(partialParams) {
        this.boot();
        return this.client.describeLoggingStatus(this.ops["DescribeLoggingStatus"].apply(partialParams));
    }
    invokeDescribePartners(partialParams) {
        this.boot();
        return this.client.describePartners(this.ops["DescribePartners"].apply(partialParams));
    }
    invokeDescribeResize(partialParams) {
        this.boot();
        return this.client.describeResize(this.ops["DescribeResize"].apply(partialParams));
    }
    invokeDisableLogging(partialParams) {
        this.boot();
        return this.client.disableLogging(this.ops["DisableLogging"].apply(partialParams));
    }
    invokeDisableSnapshotCopy(partialParams) {
        this.boot();
        return this.client.disableSnapshotCopy(this.ops["DisableSnapshotCopy"].apply(partialParams));
    }
    invokeEnableLogging(partialParams) {
        this.boot();
        return this.client.enableLogging(this.ops["EnableLogging"].apply(partialParams));
    }
    invokeEnableSnapshotCopy(partialParams) {
        this.boot();
        return this.client.enableSnapshotCopy(this.ops["EnableSnapshotCopy"].apply(partialParams));
    }
    invokeGetClusterCredentials(partialParams) {
        this.boot();
        return this.client.getClusterCredentials(this.ops["GetClusterCredentials"].apply(partialParams));
    }
    invokeModifyAquaConfiguration(partialParams) {
        this.boot();
        return this.client.modifyAquaConfiguration(this.ops["ModifyAquaConfiguration"].apply(partialParams));
    }
    invokeModifyCluster(partialParams) {
        this.boot();
        return this.client.modifyCluster(this.ops["ModifyCluster"].apply(partialParams));
    }
    invokeModifyClusterDbRevision(partialParams) {
        this.boot();
        return this.client.modifyClusterDbRevision(this.ops["ModifyClusterDbRevision"].apply(partialParams));
    }
    invokeModifyClusterIamRoles(partialParams) {
        this.boot();
        return this.client.modifyClusterIamRoles(this.ops["ModifyClusterIamRoles"].apply(partialParams));
    }
    invokeModifyClusterMaintenance(partialParams) {
        this.boot();
        return this.client.modifyClusterMaintenance(this.ops["ModifyClusterMaintenance"].apply(partialParams));
    }
    invokeModifyClusterSnapshot(partialParams) {
        this.boot();
        return this.client.modifyClusterSnapshot(this.ops["ModifyClusterSnapshot"].apply(partialParams));
    }
    invokeModifyClusterSubnetGroup(partialParams) {
        this.boot();
        return this.client.modifyClusterSubnetGroup(this.ops["ModifyClusterSubnetGroup"].apply(partialParams));
    }
    invokeModifySnapshotCopyRetentionPeriod(partialParams) {
        this.boot();
        return this.client.modifySnapshotCopyRetentionPeriod(this.ops["ModifySnapshotCopyRetentionPeriod"].apply(partialParams));
    }
    invokePauseCluster(partialParams) {
        this.boot();
        return this.client.pauseCluster(this.ops["PauseCluster"].apply(partialParams));
    }
    invokeRebootCluster(partialParams) {
        this.boot();
        return this.client.rebootCluster(this.ops["RebootCluster"].apply(partialParams));
    }
    invokeResizeCluster(partialParams) {
        this.boot();
        return this.client.resizeCluster(this.ops["ResizeCluster"].apply(partialParams));
    }
    invokeRestoreFromClusterSnapshot(partialParams) {
        this.boot();
        return this.client.restoreFromClusterSnapshot(this.ops["RestoreFromClusterSnapshot"].apply(partialParams));
    }
    invokeRestoreTableFromClusterSnapshot(partialParams) {
        this.boot();
        return this.client.restoreTableFromClusterSnapshot(this.ops["RestoreTableFromClusterSnapshot"].apply(partialParams));
    }
    invokeResumeCluster(partialParams) {
        this.boot();
        return this.client.resumeCluster(this.ops["ResumeCluster"].apply(partialParams));
    }
    invokeRevokeSnapshotAccess(partialParams) {
        this.boot();
        return this.client.revokeSnapshotAccess(this.ops["RevokeSnapshotAccess"].apply(partialParams));
    }
    invokeRotateEncryptionKey(partialParams) {
        this.boot();
        return this.client.rotateEncryptionKey(this.ops["RotateEncryptionKey"].apply(partialParams));
    }
    invokeUpdatePartnerStatus(partialParams) {
        this.boot();
        return this.client.updatePartnerStatus(this.ops["UpdatePartnerStatus"].apply(partialParams));
    }
}
exports.default = default_1;
