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
const schema = require("../apis/dms-2016-01-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.dms.ReplicationTask {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DMS();
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
    invokeApplyPendingMaintenanceAction(partialParams) {
        this.boot();
        return this.client.applyPendingMaintenanceAction(this.ops["ApplyPendingMaintenanceAction"].apply(partialParams));
    }
    invokeCreateReplicationTask(partialParams) {
        this.boot();
        return this.client.createReplicationTask(this.ops["CreateReplicationTask"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteReplicationInstance(partialParams) {
        this.boot();
        return this.client.deleteReplicationInstance(this.ops["DeleteReplicationInstance"].apply(partialParams));
    }
    invokeDeleteReplicationTask(partialParams) {
        this.boot();
        return this.client.deleteReplicationTask(this.ops["DeleteReplicationTask"].apply(partialParams));
    }
    invokeDescribeReplicationInstanceTaskLogs(partialParams) {
        this.boot();
        return this.client.describeReplicationInstanceTaskLogs(this.ops["DescribeReplicationInstanceTaskLogs"].apply(partialParams));
    }
    invokeDescribeTableStatistics(partialParams) {
        this.boot();
        return this.client.describeTableStatistics(this.ops["DescribeTableStatistics"].apply(partialParams));
    }
    invokeModifyReplicationInstance(partialParams) {
        this.boot();
        return this.client.modifyReplicationInstance(this.ops["ModifyReplicationInstance"].apply(partialParams));
    }
    invokeModifyReplicationTask(partialParams) {
        this.boot();
        return this.client.modifyReplicationTask(this.ops["ModifyReplicationTask"].apply(partialParams));
    }
    invokeMoveReplicationTask(partialParams) {
        this.boot();
        return this.client.moveReplicationTask(this.ops["MoveReplicationTask"].apply(partialParams));
    }
    invokeRebootReplicationInstance(partialParams) {
        this.boot();
        return this.client.rebootReplicationInstance(this.ops["RebootReplicationInstance"].apply(partialParams));
    }
    invokeRefreshSchemas(partialParams) {
        this.boot();
        return this.client.refreshSchemas(this.ops["RefreshSchemas"].apply(partialParams));
    }
    invokeReloadTables(partialParams) {
        this.boot();
        return this.client.reloadTables(this.ops["ReloadTables"].apply(partialParams));
    }
    invokeStartReplicationTask(partialParams) {
        this.boot();
        return this.client.startReplicationTask(this.ops["StartReplicationTask"].apply(partialParams));
    }
    invokeStartReplicationTaskAssessment(partialParams) {
        this.boot();
        return this.client.startReplicationTaskAssessment(this.ops["StartReplicationTaskAssessment"].apply(partialParams));
    }
    invokeStartReplicationTaskAssessmentRun(partialParams) {
        this.boot();
        return this.client.startReplicationTaskAssessmentRun(this.ops["StartReplicationTaskAssessmentRun"].apply(partialParams));
    }
    invokeStopReplicationTask(partialParams) {
        this.boot();
        return this.client.stopReplicationTask(this.ops["StopReplicationTask"].apply(partialParams));
    }
    invokeTestConnection(partialParams) {
        this.boot();
        return this.client.testConnection(this.ops["TestConnection"].apply(partialParams));
    }
}
exports.default = default_1;
