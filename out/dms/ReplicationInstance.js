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
class default_1 extends aws.dms.ReplicationInstance {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DMS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/dms-2016-01-01.normal.json"), this.client);
    }
    invokeAddTagsToResource(partialParams) {
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeApplyPendingMaintenanceAction(partialParams) {
        return this.client.applyPendingMaintenanceAction(this.ops["ApplyPendingMaintenanceAction"].apply(partialParams));
    }
    invokeCancelReplicationTaskAssessmentRun(partialParams) {
        return this.client.cancelReplicationTaskAssessmentRun(this.ops["CancelReplicationTaskAssessmentRun"].apply(partialParams));
    }
    invokeCreateEndpoint(partialParams) {
        return this.client.createEndpoint(this.ops["CreateEndpoint"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeCreateReplicationInstance(partialParams) {
        return this.client.createReplicationInstance(this.ops["CreateReplicationInstance"].apply(partialParams));
    }
    invokeCreateReplicationSubnetGroup(partialParams) {
        return this.client.createReplicationSubnetGroup(this.ops["CreateReplicationSubnetGroup"].apply(partialParams));
    }
    invokeCreateReplicationTask(partialParams) {
        return this.client.createReplicationTask(this.ops["CreateReplicationTask"].apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDeleteReplicationInstance(partialParams) {
        return this.client.deleteReplicationInstance(this.ops["DeleteReplicationInstance"].apply(partialParams));
    }
    invokeDeleteReplicationSubnetGroup(partialParams) {
        return this.client.deleteReplicationSubnetGroup(this.ops["DeleteReplicationSubnetGroup"].apply(partialParams));
    }
    invokeDeleteReplicationTask(partialParams) {
        return this.client.deleteReplicationTask(this.ops["DeleteReplicationTask"].apply(partialParams));
    }
    invokeDeleteReplicationTaskAssessmentRun(partialParams) {
        return this.client.deleteReplicationTaskAssessmentRun(this.ops["DeleteReplicationTaskAssessmentRun"].apply(partialParams));
    }
    invokeDescribeEndpointSettings(partialParams) {
        return this.client.describeEndpointSettings(this.ops["DescribeEndpointSettings"].apply(partialParams));
    }
    invokeDescribeRefreshSchemasStatus(partialParams) {
        return this.client.describeRefreshSchemasStatus(this.ops["DescribeRefreshSchemasStatus"].apply(partialParams));
    }
    invokeDescribeReplicationInstanceTaskLogs(partialParams) {
        return this.client.describeReplicationInstanceTaskLogs(this.ops["DescribeReplicationInstanceTaskLogs"].apply(partialParams));
    }
    invokeDescribeSchemas(partialParams) {
        return this.client.describeSchemas(this.ops["DescribeSchemas"].apply(partialParams));
    }
    invokeDescribeTableStatistics(partialParams) {
        return this.client.describeTableStatistics(this.ops["DescribeTableStatistics"].apply(partialParams));
    }
    invokeImportCertificate(partialParams) {
        return this.client.importCertificate(this.ops["ImportCertificate"].apply(partialParams));
    }
    invokeModifyEndpoint(partialParams) {
        return this.client.modifyEndpoint(this.ops["ModifyEndpoint"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokeModifyReplicationInstance(partialParams) {
        return this.client.modifyReplicationInstance(this.ops["ModifyReplicationInstance"].apply(partialParams));
    }
    invokeModifyReplicationSubnetGroup(partialParams) {
        return this.client.modifyReplicationSubnetGroup(this.ops["ModifyReplicationSubnetGroup"].apply(partialParams));
    }
    invokeModifyReplicationTask(partialParams) {
        return this.client.modifyReplicationTask(this.ops["ModifyReplicationTask"].apply(partialParams));
    }
    invokeMoveReplicationTask(partialParams) {
        return this.client.moveReplicationTask(this.ops["MoveReplicationTask"].apply(partialParams));
    }
    invokeRebootReplicationInstance(partialParams) {
        return this.client.rebootReplicationInstance(this.ops["RebootReplicationInstance"].apply(partialParams));
    }
    invokeRefreshSchemas(partialParams) {
        return this.client.refreshSchemas(this.ops["RefreshSchemas"].apply(partialParams));
    }
    invokeReloadTables(partialParams) {
        return this.client.reloadTables(this.ops["ReloadTables"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeStartReplicationTask(partialParams) {
        return this.client.startReplicationTask(this.ops["StartReplicationTask"].apply(partialParams));
    }
    invokeStartReplicationTaskAssessment(partialParams) {
        return this.client.startReplicationTaskAssessment(this.ops["StartReplicationTaskAssessment"].apply(partialParams));
    }
    invokeStartReplicationTaskAssessmentRun(partialParams) {
        return this.client.startReplicationTaskAssessmentRun(this.ops["StartReplicationTaskAssessmentRun"].apply(partialParams));
    }
    invokeStopReplicationTask(partialParams) {
        return this.client.stopReplicationTask(this.ops["StopReplicationTask"].apply(partialParams));
    }
    invokeTestConnection(partialParams) {
        return this.client.testConnection(this.ops["TestConnection"].apply(partialParams));
    }
}
exports.default = default_1;
