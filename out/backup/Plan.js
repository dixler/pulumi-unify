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
class default_1 extends aws.backup.Plan {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Backup();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/backup-2018-11-15.normal.json"), this.client);
    }
    invokeCreateBackupPlan(partialParams) {
        return this.client.createBackupPlan(this.ops["CreateBackupPlan"].apply(partialParams));
    }
    invokeCreateBackupSelection(partialParams) {
        return this.client.createBackupSelection(this.ops["CreateBackupSelection"].apply(partialParams));
    }
    invokeCreateBackupVault(partialParams) {
        return this.client.createBackupVault(this.ops["CreateBackupVault"].apply(partialParams));
    }
    invokeCreateFramework(partialParams) {
        return this.client.createFramework(this.ops["CreateFramework"].apply(partialParams));
    }
    invokeCreateReportPlan(partialParams) {
        return this.client.createReportPlan(this.ops["CreateReportPlan"].apply(partialParams));
    }
    invokeDeleteBackupPlan(partialParams) {
        return this.client.deleteBackupPlan(this.ops["DeleteBackupPlan"].apply(partialParams));
    }
    invokeDeleteBackupSelection(partialParams) {
        return this.client.deleteBackupSelection(this.ops["DeleteBackupSelection"].apply(partialParams));
    }
    invokeDeleteBackupVault(partialParams) {
        return this.client.deleteBackupVault(this.ops["DeleteBackupVault"].apply(partialParams));
    }
    invokeDeleteBackupVaultAccessPolicy(partialParams) {
        return this.client.deleteBackupVaultAccessPolicy(this.ops["DeleteBackupVaultAccessPolicy"].apply(partialParams));
    }
    invokeDeleteBackupVaultLockConfiguration(partialParams) {
        return this.client.deleteBackupVaultLockConfiguration(this.ops["DeleteBackupVaultLockConfiguration"].apply(partialParams));
    }
    invokeDeleteBackupVaultNotifications(partialParams) {
        return this.client.deleteBackupVaultNotifications(this.ops["DeleteBackupVaultNotifications"].apply(partialParams));
    }
    invokeDeleteFramework(partialParams) {
        return this.client.deleteFramework(this.ops["DeleteFramework"].apply(partialParams));
    }
    invokeDeleteRecoveryPoint(partialParams) {
        return this.client.deleteRecoveryPoint(this.ops["DeleteRecoveryPoint"].apply(partialParams));
    }
    invokeDeleteReportPlan(partialParams) {
        return this.client.deleteReportPlan(this.ops["DeleteReportPlan"].apply(partialParams));
    }
    invokeDescribeBackupJob(partialParams) {
        return this.client.describeBackupJob(this.ops["DescribeBackupJob"].apply(partialParams));
    }
    invokeDescribeBackupVault(partialParams) {
        return this.client.describeBackupVault(this.ops["DescribeBackupVault"].apply(partialParams));
    }
    invokeDescribeCopyJob(partialParams) {
        return this.client.describeCopyJob(this.ops["DescribeCopyJob"].apply(partialParams));
    }
    invokeDescribeFramework(partialParams) {
        return this.client.describeFramework(this.ops["DescribeFramework"].apply(partialParams));
    }
    invokeDescribeProtectedResource(partialParams) {
        return this.client.describeProtectedResource(this.ops["DescribeProtectedResource"].apply(partialParams));
    }
    invokeDescribeRecoveryPoint(partialParams) {
        return this.client.describeRecoveryPoint(this.ops["DescribeRecoveryPoint"].apply(partialParams));
    }
    invokeDescribeReportJob(partialParams) {
        return this.client.describeReportJob(this.ops["DescribeReportJob"].apply(partialParams));
    }
    invokeDescribeReportPlan(partialParams) {
        return this.client.describeReportPlan(this.ops["DescribeReportPlan"].apply(partialParams));
    }
    invokeDescribeRestoreJob(partialParams) {
        return this.client.describeRestoreJob(this.ops["DescribeRestoreJob"].apply(partialParams));
    }
    invokeDisassociateRecoveryPoint(partialParams) {
        return this.client.disassociateRecoveryPoint(this.ops["DisassociateRecoveryPoint"].apply(partialParams));
    }
    invokeExportBackupPlanTemplate(partialParams) {
        return this.client.exportBackupPlanTemplate(this.ops["ExportBackupPlanTemplate"].apply(partialParams));
    }
    invokeGetBackupPlan(partialParams) {
        return this.client.getBackupPlan(this.ops["GetBackupPlan"].apply(partialParams));
    }
    invokeGetBackupPlanFromJSON(partialParams) {
        return this.client.getBackupPlanFromJSON(this.ops["GetBackupPlanFromJSON"].apply(partialParams));
    }
    invokeGetBackupPlanFromTemplate(partialParams) {
        return this.client.getBackupPlanFromTemplate(this.ops["GetBackupPlanFromTemplate"].apply(partialParams));
    }
    invokeGetBackupSelection(partialParams) {
        return this.client.getBackupSelection(this.ops["GetBackupSelection"].apply(partialParams));
    }
    invokeGetBackupVaultAccessPolicy(partialParams) {
        return this.client.getBackupVaultAccessPolicy(this.ops["GetBackupVaultAccessPolicy"].apply(partialParams));
    }
    invokeGetBackupVaultNotifications(partialParams) {
        return this.client.getBackupVaultNotifications(this.ops["GetBackupVaultNotifications"].apply(partialParams));
    }
    invokeGetRecoveryPointRestoreMetadata(partialParams) {
        return this.client.getRecoveryPointRestoreMetadata(this.ops["GetRecoveryPointRestoreMetadata"].apply(partialParams));
    }
    invokeListBackupPlanVersions(partialParams) {
        return this.client.listBackupPlanVersions(this.ops["ListBackupPlanVersions"].apply(partialParams));
    }
    invokeListBackupSelections(partialParams) {
        return this.client.listBackupSelections(this.ops["ListBackupSelections"].apply(partialParams));
    }
    invokeListRecoveryPointsByBackupVault(partialParams) {
        return this.client.listRecoveryPointsByBackupVault(this.ops["ListRecoveryPointsByBackupVault"].apply(partialParams));
    }
    invokeListRecoveryPointsByResource(partialParams) {
        return this.client.listRecoveryPointsByResource(this.ops["ListRecoveryPointsByResource"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokePutBackupVaultAccessPolicy(partialParams) {
        return this.client.putBackupVaultAccessPolicy(this.ops["PutBackupVaultAccessPolicy"].apply(partialParams));
    }
    invokePutBackupVaultLockConfiguration(partialParams) {
        return this.client.putBackupVaultLockConfiguration(this.ops["PutBackupVaultLockConfiguration"].apply(partialParams));
    }
    invokePutBackupVaultNotifications(partialParams) {
        return this.client.putBackupVaultNotifications(this.ops["PutBackupVaultNotifications"].apply(partialParams));
    }
    invokeStartBackupJob(partialParams) {
        return this.client.startBackupJob(this.ops["StartBackupJob"].apply(partialParams));
    }
    invokeStartCopyJob(partialParams) {
        return this.client.startCopyJob(this.ops["StartCopyJob"].apply(partialParams));
    }
    invokeStartReportJob(partialParams) {
        return this.client.startReportJob(this.ops["StartReportJob"].apply(partialParams));
    }
    invokeStartRestoreJob(partialParams) {
        return this.client.startRestoreJob(this.ops["StartRestoreJob"].apply(partialParams));
    }
    invokeStopBackupJob(partialParams) {
        return this.client.stopBackupJob(this.ops["StopBackupJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateBackupPlan(partialParams) {
        return this.client.updateBackupPlan(this.ops["UpdateBackupPlan"].apply(partialParams));
    }
    invokeUpdateFramework(partialParams) {
        return this.client.updateFramework(this.ops["UpdateFramework"].apply(partialParams));
    }
    invokeUpdateRecoveryPointLifecycle(partialParams) {
        return this.client.updateRecoveryPointLifecycle(this.ops["UpdateRecoveryPointLifecycle"].apply(partialParams));
    }
    invokeUpdateReportPlan(partialParams) {
        return this.client.updateReportPlan(this.ops["UpdateReportPlan"].apply(partialParams));
    }
}
exports.default = default_1;
