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
    invokeAddTagsToResource(partialParams) {
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeApplyPendingMaintenanceAction(partialParams) {
        this.boot();
        return this.client.applyPendingMaintenanceAction(this.ops["ApplyPendingMaintenanceAction"].apply(partialParams));
    }
    invokeCancelReplicationTaskAssessmentRun(partialParams) {
        this.boot();
        return this.client.cancelReplicationTaskAssessmentRun(this.ops["CancelReplicationTaskAssessmentRun"].apply(partialParams));
    }
    invokeCreateEndpoint(partialParams) {
        this.boot();
        return this.client.createEndpoint(this.ops["CreateEndpoint"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        this.boot();
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeCreateReplicationInstance(partialParams) {
        this.boot();
        return this.client.createReplicationInstance(this.ops["CreateReplicationInstance"].apply(partialParams));
    }
    invokeCreateReplicationSubnetGroup(partialParams) {
        this.boot();
        return this.client.createReplicationSubnetGroup(this.ops["CreateReplicationSubnetGroup"].apply(partialParams));
    }
    invokeCreateReplicationTask(partialParams) {
        this.boot();
        return this.client.createReplicationTask(this.ops["CreateReplicationTask"].apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        this.boot();
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        this.boot();
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        this.boot();
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDeleteReplicationInstance(partialParams) {
        this.boot();
        return this.client.deleteReplicationInstance(this.ops["DeleteReplicationInstance"].apply(partialParams));
    }
    invokeDeleteReplicationSubnetGroup(partialParams) {
        this.boot();
        return this.client.deleteReplicationSubnetGroup(this.ops["DeleteReplicationSubnetGroup"].apply(partialParams));
    }
    invokeDeleteReplicationTask(partialParams) {
        this.boot();
        return this.client.deleteReplicationTask(this.ops["DeleteReplicationTask"].apply(partialParams));
    }
    invokeDeleteReplicationTaskAssessmentRun(partialParams) {
        this.boot();
        return this.client.deleteReplicationTaskAssessmentRun(this.ops["DeleteReplicationTaskAssessmentRun"].apply(partialParams));
    }
    invokeDescribeAccountAttributes(partialParams) {
        this.boot();
        return this.client.describeAccountAttributes(this.ops["DescribeAccountAttributes"].apply(partialParams));
    }
    invokeDescribeApplicableIndividualAssessments(partialParams) {
        this.boot();
        return this.client.describeApplicableIndividualAssessments(this.ops["DescribeApplicableIndividualAssessments"].apply(partialParams));
    }
    invokeDescribeCertificates(partialParams) {
        this.boot();
        return this.client.describeCertificates(this.ops["DescribeCertificates"].apply(partialParams));
    }
    invokeDescribeConnections(partialParams) {
        this.boot();
        return this.client.describeConnections(this.ops["DescribeConnections"].apply(partialParams));
    }
    invokeDescribeEndpointSettings(partialParams) {
        this.boot();
        return this.client.describeEndpointSettings(this.ops["DescribeEndpointSettings"].apply(partialParams));
    }
    invokeDescribeEndpointTypes(partialParams) {
        this.boot();
        return this.client.describeEndpointTypes(this.ops["DescribeEndpointTypes"].apply(partialParams));
    }
    invokeDescribeEndpoints(partialParams) {
        this.boot();
        return this.client.describeEndpoints(this.ops["DescribeEndpoints"].apply(partialParams));
    }
    invokeDescribeEventCategories(partialParams) {
        this.boot();
        return this.client.describeEventCategories(this.ops["DescribeEventCategories"].apply(partialParams));
    }
    invokeDescribeEventSubscriptions(partialParams) {
        this.boot();
        return this.client.describeEventSubscriptions(this.ops["DescribeEventSubscriptions"].apply(partialParams));
    }
    invokeDescribeEvents(partialParams) {
        this.boot();
        return this.client.describeEvents(this.ops["DescribeEvents"].apply(partialParams));
    }
    invokeDescribeOrderableReplicationInstances(partialParams) {
        this.boot();
        return this.client.describeOrderableReplicationInstances(this.ops["DescribeOrderableReplicationInstances"].apply(partialParams));
    }
    invokeDescribePendingMaintenanceActions(partialParams) {
        this.boot();
        return this.client.describePendingMaintenanceActions(this.ops["DescribePendingMaintenanceActions"].apply(partialParams));
    }
    invokeDescribeRefreshSchemasStatus(partialParams) {
        this.boot();
        return this.client.describeRefreshSchemasStatus(this.ops["DescribeRefreshSchemasStatus"].apply(partialParams));
    }
    invokeDescribeReplicationInstanceTaskLogs(partialParams) {
        this.boot();
        return this.client.describeReplicationInstanceTaskLogs(this.ops["DescribeReplicationInstanceTaskLogs"].apply(partialParams));
    }
    invokeDescribeReplicationInstances(partialParams) {
        this.boot();
        return this.client.describeReplicationInstances(this.ops["DescribeReplicationInstances"].apply(partialParams));
    }
    invokeDescribeReplicationSubnetGroups(partialParams) {
        this.boot();
        return this.client.describeReplicationSubnetGroups(this.ops["DescribeReplicationSubnetGroups"].apply(partialParams));
    }
    invokeDescribeReplicationTaskAssessmentResults(partialParams) {
        this.boot();
        return this.client.describeReplicationTaskAssessmentResults(this.ops["DescribeReplicationTaskAssessmentResults"].apply(partialParams));
    }
    invokeDescribeReplicationTaskAssessmentRuns(partialParams) {
        this.boot();
        return this.client.describeReplicationTaskAssessmentRuns(this.ops["DescribeReplicationTaskAssessmentRuns"].apply(partialParams));
    }
    invokeDescribeReplicationTaskIndividualAssessments(partialParams) {
        this.boot();
        return this.client.describeReplicationTaskIndividualAssessments(this.ops["DescribeReplicationTaskIndividualAssessments"].apply(partialParams));
    }
    invokeDescribeReplicationTasks(partialParams) {
        this.boot();
        return this.client.describeReplicationTasks(this.ops["DescribeReplicationTasks"].apply(partialParams));
    }
    invokeDescribeSchemas(partialParams) {
        this.boot();
        return this.client.describeSchemas(this.ops["DescribeSchemas"].apply(partialParams));
    }
    invokeDescribeTableStatistics(partialParams) {
        this.boot();
        return this.client.describeTableStatistics(this.ops["DescribeTableStatistics"].apply(partialParams));
    }
    invokeImportCertificate(partialParams) {
        this.boot();
        return this.client.importCertificate(this.ops["ImportCertificate"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyEndpoint(partialParams) {
        this.boot();
        return this.client.modifyEndpoint(this.ops["ModifyEndpoint"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        this.boot();
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokeModifyReplicationInstance(partialParams) {
        this.boot();
        return this.client.modifyReplicationInstance(this.ops["ModifyReplicationInstance"].apply(partialParams));
    }
    invokeModifyReplicationSubnetGroup(partialParams) {
        this.boot();
        return this.client.modifyReplicationSubnetGroup(this.ops["ModifyReplicationSubnetGroup"].apply(partialParams));
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
    invokeRemoveTagsFromResource(partialParams) {
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
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
