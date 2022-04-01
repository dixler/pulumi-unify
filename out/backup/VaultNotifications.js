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
    invokeCreateBackupPlan(partialParams) {
        this.boot();
        return this.client.createBackupPlan(this.ops["CreateBackupPlan"].apply(partialParams));
    }
    invokeCreateBackupSelection(partialParams) {
        this.boot();
        return this.client.createBackupSelection(this.ops["CreateBackupSelection"].apply(partialParams));
    }
    invokeCreateBackupVault(partialParams) {
        this.boot();
        return this.client.createBackupVault(this.ops["CreateBackupVault"].apply(partialParams));
    }
    invokeCreateFramework(partialParams) {
        this.boot();
        return this.client.createFramework(this.ops["CreateFramework"].apply(partialParams));
    }
    invokeCreateReportPlan(partialParams) {
        this.boot();
        return this.client.createReportPlan(this.ops["CreateReportPlan"].apply(partialParams));
    }
    invokeDeleteBackupPlan(partialParams) {
        this.boot();
        return this.client.deleteBackupPlan(this.ops["DeleteBackupPlan"].apply(partialParams));
    }
    invokeDescribeBackupJob(partialParams) {
        this.boot();
        return this.client.describeBackupJob(this.ops["DescribeBackupJob"].apply(partialParams));
    }
    invokeDescribeBackupVault(partialParams) {
        this.boot();
        return this.client.describeBackupVault(this.ops["DescribeBackupVault"].apply(partialParams));
    }
    invokeDescribeCopyJob(partialParams) {
        this.boot();
        return this.client.describeCopyJob(this.ops["DescribeCopyJob"].apply(partialParams));
    }
    invokeDescribeFramework(partialParams) {
        this.boot();
        return this.client.describeFramework(this.ops["DescribeFramework"].apply(partialParams));
    }
    invokeDescribeGlobalSettings(partialParams) {
        this.boot();
        return this.client.describeGlobalSettings(this.ops["DescribeGlobalSettings"].apply(partialParams));
    }
    invokeDescribeProtectedResource(partialParams) {
        this.boot();
        return this.client.describeProtectedResource(this.ops["DescribeProtectedResource"].apply(partialParams));
    }
    invokeDescribeRecoveryPoint(partialParams) {
        this.boot();
        return this.client.describeRecoveryPoint(this.ops["DescribeRecoveryPoint"].apply(partialParams));
    }
    invokeDescribeRegionSettings(partialParams) {
        this.boot();
        return this.client.describeRegionSettings(this.ops["DescribeRegionSettings"].apply(partialParams));
    }
    invokeDescribeReportJob(partialParams) {
        this.boot();
        return this.client.describeReportJob(this.ops["DescribeReportJob"].apply(partialParams));
    }
    invokeDescribeReportPlan(partialParams) {
        this.boot();
        return this.client.describeReportPlan(this.ops["DescribeReportPlan"].apply(partialParams));
    }
    invokeDescribeRestoreJob(partialParams) {
        this.boot();
        return this.client.describeRestoreJob(this.ops["DescribeRestoreJob"].apply(partialParams));
    }
    invokeExportBackupPlanTemplate(partialParams) {
        this.boot();
        return this.client.exportBackupPlanTemplate(this.ops["ExportBackupPlanTemplate"].apply(partialParams));
    }
    invokeGetBackupPlan(partialParams) {
        this.boot();
        return this.client.getBackupPlan(this.ops["GetBackupPlan"].apply(partialParams));
    }
    invokeGetBackupPlanFromJSON(partialParams) {
        this.boot();
        return this.client.getBackupPlanFromJSON(this.ops["GetBackupPlanFromJSON"].apply(partialParams));
    }
    invokeGetBackupPlanFromTemplate(partialParams) {
        this.boot();
        return this.client.getBackupPlanFromTemplate(this.ops["GetBackupPlanFromTemplate"].apply(partialParams));
    }
    invokeGetBackupSelection(partialParams) {
        this.boot();
        return this.client.getBackupSelection(this.ops["GetBackupSelection"].apply(partialParams));
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
    invokeListBackupJobs(partialParams) {
        this.boot();
        return this.client.listBackupJobs(this.ops["ListBackupJobs"].apply(partialParams));
    }
    invokeListBackupPlanTemplates(partialParams) {
        this.boot();
        return this.client.listBackupPlanTemplates(this.ops["ListBackupPlanTemplates"].apply(partialParams));
    }
    invokeListBackupPlanVersions(partialParams) {
        this.boot();
        return this.client.listBackupPlanVersions(this.ops["ListBackupPlanVersions"].apply(partialParams));
    }
    invokeListBackupPlans(partialParams) {
        this.boot();
        return this.client.listBackupPlans(this.ops["ListBackupPlans"].apply(partialParams));
    }
    invokeListBackupSelections(partialParams) {
        this.boot();
        return this.client.listBackupSelections(this.ops["ListBackupSelections"].apply(partialParams));
    }
    invokeListBackupVaults(partialParams) {
        this.boot();
        return this.client.listBackupVaults(this.ops["ListBackupVaults"].apply(partialParams));
    }
    invokeListCopyJobs(partialParams) {
        this.boot();
        return this.client.listCopyJobs(this.ops["ListCopyJobs"].apply(partialParams));
    }
    invokeListFrameworks(partialParams) {
        this.boot();
        return this.client.listFrameworks(this.ops["ListFrameworks"].apply(partialParams));
    }
    invokeListProtectedResources(partialParams) {
        this.boot();
        return this.client.listProtectedResources(this.ops["ListProtectedResources"].apply(partialParams));
    }
    invokeListRecoveryPointsByBackupVault(partialParams) {
        this.boot();
        return this.client.listRecoveryPointsByBackupVault(this.ops["ListRecoveryPointsByBackupVault"].apply(partialParams));
    }
    invokeListRecoveryPointsByResource(partialParams) {
        this.boot();
        return this.client.listRecoveryPointsByResource(this.ops["ListRecoveryPointsByResource"].apply(partialParams));
    }
    invokeListReportJobs(partialParams) {
        this.boot();
        return this.client.listReportJobs(this.ops["ListReportJobs"].apply(partialParams));
    }
    invokeListReportPlans(partialParams) {
        this.boot();
        return this.client.listReportPlans(this.ops["ListReportPlans"].apply(partialParams));
    }
    invokeListRestoreJobs(partialParams) {
        this.boot();
        return this.client.listRestoreJobs(this.ops["ListRestoreJobs"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeStartBackupJob(partialParams) {
        this.boot();
        return this.client.startBackupJob(this.ops["StartBackupJob"].apply(partialParams));
    }
    invokeStartCopyJob(partialParams) {
        this.boot();
        return this.client.startCopyJob(this.ops["StartCopyJob"].apply(partialParams));
    }
    invokeStartReportJob(partialParams) {
        this.boot();
        return this.client.startReportJob(this.ops["StartReportJob"].apply(partialParams));
    }
    invokeStartRestoreJob(partialParams) {
        this.boot();
        return this.client.startRestoreJob(this.ops["StartRestoreJob"].apply(partialParams));
    }
    invokeUpdateBackupPlan(partialParams) {
        this.boot();
        return this.client.updateBackupPlan(this.ops["UpdateBackupPlan"].apply(partialParams));
    }
    invokeUpdateFramework(partialParams) {
        this.boot();
        return this.client.updateFramework(this.ops["UpdateFramework"].apply(partialParams));
    }
    invokeUpdateRecoveryPointLifecycle(partialParams) {
        this.boot();
        return this.client.updateRecoveryPointLifecycle(this.ops["UpdateRecoveryPointLifecycle"].apply(partialParams));
    }
    invokeUpdateReportPlan(partialParams) {
        this.boot();
        return this.client.updateReportPlan(this.ops["UpdateReportPlan"].apply(partialParams));
    }
}
exports.default = default_1;
