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
const schema = require("../apis/backup-2018-11-15.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.backup.VaultNotifications {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Backup();
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
    invokeCreateBackupVault(partialParams) {
        this.boot();
        return this.client.createBackupVault(this.ops["CreateBackupVault"].apply(partialParams));
    }
    invokeDescribeBackupVault(partialParams) {
        this.boot();
        return this.client.describeBackupVault(this.ops["DescribeBackupVault"].apply(partialParams));
    }
    invokeDescribeRecoveryPoint(partialParams) {
        this.boot();
        return this.client.describeRecoveryPoint(this.ops["DescribeRecoveryPoint"].apply(partialParams));
    }
    invokeGetBackupVaultAccessPolicy(partialParams) {
        this.boot();
        return this.client.getBackupVaultAccessPolicy(this.ops["GetBackupVaultAccessPolicy"].apply(partialParams));
    }
    invokeGetBackupVaultNotifications(partialParams) {
        this.boot();
        return this.client.getBackupVaultNotifications(this.ops["GetBackupVaultNotifications"].apply(partialParams));
    }
    invokeGetRecoveryPointRestoreMetadata(partialParams) {
        this.boot();
        return this.client.getRecoveryPointRestoreMetadata(this.ops["GetRecoveryPointRestoreMetadata"].apply(partialParams));
    }
    invokeListRecoveryPointsByBackupVault(partialParams) {
        this.boot();
        return this.client.listRecoveryPointsByBackupVault(this.ops["ListRecoveryPointsByBackupVault"].apply(partialParams));
    }
    invokeStartBackupJob(partialParams) {
        this.boot();
        return this.client.startBackupJob(this.ops["StartBackupJob"].apply(partialParams));
    }
    invokeUpdateRecoveryPointLifecycle(partialParams) {
        this.boot();
        return this.client.updateRecoveryPointLifecycle(this.ops["UpdateRecoveryPointLifecycle"].apply(partialParams));
    }
}
exports.default = default_1;
