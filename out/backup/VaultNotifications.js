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
        this.client = new awssdk.Backup();
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
    invokeCreateBackupPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackupPlan(this.ops["CreateBackupPlan"].applicator.apply(partialParams));
    }
    invokeCreateBackupSelection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackupSelection(this.ops["CreateBackupSelection"].applicator.apply(partialParams));
    }
    invokeCreateBackupVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackupVault(this.ops["CreateBackupVault"].applicator.apply(partialParams));
    }
    invokeCreateFramework(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFramework(this.ops["CreateFramework"].applicator.apply(partialParams));
    }
    invokeCreateReportPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReportPlan(this.ops["CreateReportPlan"].applicator.apply(partialParams));
    }
    invokeDeleteBackupPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupPlan(this.ops["DeleteBackupPlan"].applicator.apply(partialParams));
    }
    invokeDeleteBackupSelection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupSelection(this.ops["DeleteBackupSelection"].applicator.apply(partialParams));
    }
    invokeDeleteBackupVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVault(this.ops["DeleteBackupVault"].applicator.apply(partialParams));
    }
    invokeDeleteBackupVaultAccessPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVaultAccessPolicy(this.ops["DeleteBackupVaultAccessPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteBackupVaultLockConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVaultLockConfiguration(this.ops["DeleteBackupVaultLockConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteBackupVaultNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVaultNotifications(this.ops["DeleteBackupVaultNotifications"].applicator.apply(partialParams));
    }
    invokeDeleteFramework(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFramework(this.ops["DeleteFramework"].applicator.apply(partialParams));
    }
    invokeDeleteRecoveryPoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRecoveryPoint(this.ops["DeleteRecoveryPoint"].applicator.apply(partialParams));
    }
    invokeDeleteReportPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReportPlan(this.ops["DeleteReportPlan"].applicator.apply(partialParams));
    }
    invokeDescribeBackupJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBackupJob(this.ops["DescribeBackupJob"].applicator.apply(partialParams));
    }
    invokeDescribeBackupVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBackupVault(this.ops["DescribeBackupVault"].applicator.apply(partialParams));
    }
    invokeDescribeCopyJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCopyJob(this.ops["DescribeCopyJob"].applicator.apply(partialParams));
    }
    invokeDescribeFramework(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFramework(this.ops["DescribeFramework"].applicator.apply(partialParams));
    }
    invokeDescribeProtectedResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProtectedResource(this.ops["DescribeProtectedResource"].applicator.apply(partialParams));
    }
    invokeDescribeRecoveryPoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRecoveryPoint(this.ops["DescribeRecoveryPoint"].applicator.apply(partialParams));
    }
    invokeDescribeReportJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeReportJob(this.ops["DescribeReportJob"].applicator.apply(partialParams));
    }
    invokeDescribeReportPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeReportPlan(this.ops["DescribeReportPlan"].applicator.apply(partialParams));
    }
    invokeDescribeRestoreJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRestoreJob(this.ops["DescribeRestoreJob"].applicator.apply(partialParams));
    }
    invokeDisassociateRecoveryPoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateRecoveryPoint(this.ops["DisassociateRecoveryPoint"].applicator.apply(partialParams));
    }
    invokeExportBackupPlanTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportBackupPlanTemplate(this.ops["ExportBackupPlanTemplate"].applicator.apply(partialParams));
    }
    invokeGetBackupPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupPlan(this.ops["GetBackupPlan"].applicator.apply(partialParams));
    }
    invokeGetBackupPlanFromJSON(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupPlanFromJSON(this.ops["GetBackupPlanFromJSON"].applicator.apply(partialParams));
    }
    invokeGetBackupPlanFromTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupPlanFromTemplate(this.ops["GetBackupPlanFromTemplate"].applicator.apply(partialParams));
    }
    invokeGetBackupSelection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupSelection(this.ops["GetBackupSelection"].applicator.apply(partialParams));
    }
    invokeGetBackupVaultAccessPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupVaultAccessPolicy(this.ops["GetBackupVaultAccessPolicy"].applicator.apply(partialParams));
    }
    invokeGetBackupVaultNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupVaultNotifications(this.ops["GetBackupVaultNotifications"].applicator.apply(partialParams));
    }
    invokeGetRecoveryPointRestoreMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRecoveryPointRestoreMetadata(this.ops["GetRecoveryPointRestoreMetadata"].applicator.apply(partialParams));
    }
    invokeListBackupPlanVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBackupPlanVersions(this.ops["ListBackupPlanVersions"].applicator.apply(partialParams));
    }
    invokeListBackupSelections(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBackupSelections(this.ops["ListBackupSelections"].applicator.apply(partialParams));
    }
    invokeListRecoveryPointsByBackupVault(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRecoveryPointsByBackupVault(this.ops["ListRecoveryPointsByBackupVault"].applicator.apply(partialParams));
    }
    invokeListRecoveryPointsByResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRecoveryPointsByResource(this.ops["ListRecoveryPointsByResource"].applicator.apply(partialParams));
    }
    invokeListTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(this.ops["ListTags"].applicator.apply(partialParams));
    }
    invokePutBackupVaultAccessPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBackupVaultAccessPolicy(this.ops["PutBackupVaultAccessPolicy"].applicator.apply(partialParams));
    }
    invokePutBackupVaultLockConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBackupVaultLockConfiguration(this.ops["PutBackupVaultLockConfiguration"].applicator.apply(partialParams));
    }
    invokePutBackupVaultNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBackupVaultNotifications(this.ops["PutBackupVaultNotifications"].applicator.apply(partialParams));
    }
    invokeStartBackupJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBackupJob(this.ops["StartBackupJob"].applicator.apply(partialParams));
    }
    invokeStartCopyJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCopyJob(this.ops["StartCopyJob"].applicator.apply(partialParams));
    }
    invokeStartReportJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReportJob(this.ops["StartReportJob"].applicator.apply(partialParams));
    }
    invokeStartRestoreJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startRestoreJob(this.ops["StartRestoreJob"].applicator.apply(partialParams));
    }
    invokeStopBackupJob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBackupJob(this.ops["StopBackupJob"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateBackupPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBackupPlan(this.ops["UpdateBackupPlan"].applicator.apply(partialParams));
    }
    invokeUpdateFramework(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFramework(this.ops["UpdateFramework"].applicator.apply(partialParams));
    }
    invokeUpdateRecoveryPointLifecycle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRecoveryPointLifecycle(this.ops["UpdateRecoveryPointLifecycle"].applicator.apply(partialParams));
    }
    invokeUpdateReportPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateReportPlan(this.ops["UpdateReportPlan"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
