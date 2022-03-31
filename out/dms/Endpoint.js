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
class default_1 extends aws.dms.Endpoint {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DMS();
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
    invokeCancelReplicationTaskAssessmentRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelReplicationTaskAssessmentRun(this.ops["CancelReplicationTaskAssessmentRun"].applicator.apply(partialParams));
    }
    invokeCreateEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpoint(this.ops["CreateEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].applicator.apply(partialParams));
    }
    invokeCreateReplicationInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationInstance(this.ops["CreateReplicationInstance"].applicator.apply(partialParams));
    }
    invokeCreateReplicationSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationSubnetGroup(this.ops["CreateReplicationSubnetGroup"].applicator.apply(partialParams));
    }
    invokeCreateReplicationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationTask(this.ops["CreateReplicationTask"].applicator.apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].applicator.apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].applicator.apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].applicator.apply(partialParams));
    }
    invokeDeleteReplicationInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationInstance(this.ops["DeleteReplicationInstance"].applicator.apply(partialParams));
    }
    invokeDeleteReplicationSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationSubnetGroup(this.ops["DeleteReplicationSubnetGroup"].applicator.apply(partialParams));
    }
    invokeDeleteReplicationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationTask(this.ops["DeleteReplicationTask"].applicator.apply(partialParams));
    }
    invokeDeleteReplicationTaskAssessmentRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationTaskAssessmentRun(this.ops["DeleteReplicationTaskAssessmentRun"].applicator.apply(partialParams));
    }
    invokeDescribeEndpointSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpointSettings(this.ops["DescribeEndpointSettings"].applicator.apply(partialParams));
    }
    invokeDescribeRefreshSchemasStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRefreshSchemasStatus(this.ops["DescribeRefreshSchemasStatus"].applicator.apply(partialParams));
    }
    invokeDescribeReplicationInstanceTaskLogs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeReplicationInstanceTaskLogs(this.ops["DescribeReplicationInstanceTaskLogs"].applicator.apply(partialParams));
    }
    invokeDescribeSchemas(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSchemas(this.ops["DescribeSchemas"].applicator.apply(partialParams));
    }
    invokeDescribeTableStatistics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTableStatistics(this.ops["DescribeTableStatistics"].applicator.apply(partialParams));
    }
    invokeImportCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importCertificate(this.ops["ImportCertificate"].applicator.apply(partialParams));
    }
    invokeModifyEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEndpoint(this.ops["ModifyEndpoint"].applicator.apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].applicator.apply(partialParams));
    }
    invokeModifyReplicationInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationInstance(this.ops["ModifyReplicationInstance"].applicator.apply(partialParams));
    }
    invokeModifyReplicationSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationSubnetGroup(this.ops["ModifyReplicationSubnetGroup"].applicator.apply(partialParams));
    }
    invokeModifyReplicationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationTask(this.ops["ModifyReplicationTask"].applicator.apply(partialParams));
    }
    invokeMoveReplicationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveReplicationTask(this.ops["MoveReplicationTask"].applicator.apply(partialParams));
    }
    invokeRebootReplicationInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootReplicationInstance(this.ops["RebootReplicationInstance"].applicator.apply(partialParams));
    }
    invokeRefreshSchemas(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.refreshSchemas(this.ops["RefreshSchemas"].applicator.apply(partialParams));
    }
    invokeReloadTables(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reloadTables(this.ops["ReloadTables"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].applicator.apply(partialParams));
    }
    invokeStartReplicationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReplicationTask(this.ops["StartReplicationTask"].applicator.apply(partialParams));
    }
    invokeStartReplicationTaskAssessment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReplicationTaskAssessment(this.ops["StartReplicationTaskAssessment"].applicator.apply(partialParams));
    }
    invokeStartReplicationTaskAssessmentRun(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReplicationTaskAssessmentRun(this.ops["StartReplicationTaskAssessmentRun"].applicator.apply(partialParams));
    }
    invokeStopReplicationTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopReplicationTask(this.ops["StopReplicationTask"].applicator.apply(partialParams));
    }
    invokeTestConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testConnection(this.ops["TestConnection"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
