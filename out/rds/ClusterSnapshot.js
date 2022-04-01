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
    invokeCreateCustomDBEngineVersion(partialParams) {
        this.boot();
        return this.client.createCustomDBEngineVersion(this.ops["CreateCustomDBEngineVersion"].apply(partialParams));
    }
    invokeCreateDBCluster(partialParams) {
        this.boot();
        return this.client.createDBCluster(this.ops["CreateDBCluster"].apply(partialParams));
    }
    invokeCreateDBInstance(partialParams) {
        this.boot();
        return this.client.createDBInstance(this.ops["CreateDBInstance"].apply(partialParams));
    }
    invokeDeleteCustomDBEngineVersion(partialParams) {
        this.boot();
        return this.client.deleteCustomDBEngineVersion(this.ops["DeleteCustomDBEngineVersion"].apply(partialParams));
    }
    invokeDescribeOrderableDBInstanceOptions(partialParams) {
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams));
    }
    invokeImportInstallationMedia(partialParams) {
        this.boot();
        return this.client.importInstallationMedia(this.ops["ImportInstallationMedia"].apply(partialParams));
    }
    invokeModifyCustomDBEngineVersion(partialParams) {
        this.boot();
        return this.client.modifyCustomDBEngineVersion(this.ops["ModifyCustomDBEngineVersion"].apply(partialParams));
    }
    invokeRestoreDBClusterFromS3(partialParams) {
        this.boot();
        return this.client.restoreDBClusterFromS3(this.ops["RestoreDBClusterFromS3"].apply(partialParams));
    }
    invokeRestoreDBClusterFromSnapshot(partialParams) {
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams));
    }
    invokeRestoreDBInstanceFromS3(partialParams) {
        this.boot();
        return this.client.restoreDBInstanceFromS3(this.ops["RestoreDBInstanceFromS3"].apply(partialParams));
    }
    invokeStartActivityStream(partialParams) {
        this.boot();
        return this.client.startActivityStream(this.ops["StartActivityStream"].apply(partialParams));
    }
    invokeStartExportTask(partialParams) {
        this.boot();
        return this.client.startExportTask(this.ops["StartExportTask"].apply(partialParams));
    }
}
exports.default = default_1;
