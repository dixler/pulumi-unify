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
const schema = require("../apis/dynamodb-2012-08-10.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.dynamodb.Tag {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DynamoDB();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeBatchExecuteStatement(partialParams) {
        this.boot();
        return this.client.batchExecuteStatement(this.ops["BatchExecuteStatement"].apply(partialParams));
    }
    invokeBatchGetItem(partialParams) {
        this.boot();
        return this.client.batchGetItem(this.ops["BatchGetItem"].apply(partialParams));
    }
    invokeBatchWriteItem(partialParams) {
        this.boot();
        return this.client.batchWriteItem(this.ops["BatchWriteItem"].apply(partialParams));
    }
    invokeCreateBackup(partialParams) {
        this.boot();
        return this.client.createBackup(this.ops["CreateBackup"].apply(partialParams));
    }
    invokeCreateGlobalTable(partialParams) {
        this.boot();
        return this.client.createGlobalTable(this.ops["CreateGlobalTable"].apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        this.boot();
        return this.client.createTable(this.ops["CreateTable"].apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        this.boot();
        return this.client.deleteBackup(this.ops["DeleteBackup"].apply(partialParams));
    }
    invokeDeleteItem(partialParams) {
        this.boot();
        return this.client.deleteItem(this.ops["DeleteItem"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDescribeBackup(partialParams) {
        this.boot();
        return this.client.describeBackup(this.ops["DescribeBackup"].apply(partialParams));
    }
    invokeDescribeContinuousBackups(partialParams) {
        this.boot();
        return this.client.describeContinuousBackups(this.ops["DescribeContinuousBackups"].apply(partialParams));
    }
    invokeDescribeContributorInsights(partialParams) {
        this.boot();
        return this.client.describeContributorInsights(this.ops["DescribeContributorInsights"].apply(partialParams));
    }
    invokeDescribeEndpoints(partialParams) {
        this.boot();
        return this.client.describeEndpoints(this.ops["DescribeEndpoints"].apply(partialParams));
    }
    invokeDescribeExport(partialParams) {
        this.boot();
        return this.client.describeExport(this.ops["DescribeExport"].apply(partialParams));
    }
    invokeDescribeGlobalTable(partialParams) {
        this.boot();
        return this.client.describeGlobalTable(this.ops["DescribeGlobalTable"].apply(partialParams));
    }
    invokeDescribeGlobalTableSettings(partialParams) {
        this.boot();
        return this.client.describeGlobalTableSettings(this.ops["DescribeGlobalTableSettings"].apply(partialParams));
    }
    invokeDescribeKinesisStreamingDestination(partialParams) {
        this.boot();
        return this.client.describeKinesisStreamingDestination(this.ops["DescribeKinesisStreamingDestination"].apply(partialParams));
    }
    invokeDescribeLimits(partialParams) {
        this.boot();
        return this.client.describeLimits(this.ops["DescribeLimits"].apply(partialParams));
    }
    invokeDescribeTable(partialParams) {
        this.boot();
        return this.client.describeTable(this.ops["DescribeTable"].apply(partialParams));
    }
    invokeDescribeTableReplicaAutoScaling(partialParams) {
        this.boot();
        return this.client.describeTableReplicaAutoScaling(this.ops["DescribeTableReplicaAutoScaling"].apply(partialParams));
    }
    invokeDescribeTimeToLive(partialParams) {
        this.boot();
        return this.client.describeTimeToLive(this.ops["DescribeTimeToLive"].apply(partialParams));
    }
    invokeDisableKinesisStreamingDestination(partialParams) {
        this.boot();
        return this.client.disableKinesisStreamingDestination(this.ops["DisableKinesisStreamingDestination"].apply(partialParams));
    }
    invokeEnableKinesisStreamingDestination(partialParams) {
        this.boot();
        return this.client.enableKinesisStreamingDestination(this.ops["EnableKinesisStreamingDestination"].apply(partialParams));
    }
    invokeExecuteStatement(partialParams) {
        this.boot();
        return this.client.executeStatement(this.ops["ExecuteStatement"].apply(partialParams));
    }
    invokeExecuteTransaction(partialParams) {
        this.boot();
        return this.client.executeTransaction(this.ops["ExecuteTransaction"].apply(partialParams));
    }
    invokeExportTableToPointInTime(partialParams) {
        this.boot();
        return this.client.exportTableToPointInTime(this.ops["ExportTableToPointInTime"].apply(partialParams));
    }
    invokeGetItem(partialParams) {
        this.boot();
        return this.client.getItem(this.ops["GetItem"].apply(partialParams));
    }
    invokeListBackups(partialParams) {
        this.boot();
        return this.client.listBackups(this.ops["ListBackups"].apply(partialParams));
    }
    invokeListContributorInsights(partialParams) {
        this.boot();
        return this.client.listContributorInsights(this.ops["ListContributorInsights"].apply(partialParams));
    }
    invokeListExports(partialParams) {
        this.boot();
        return this.client.listExports(this.ops["ListExports"].apply(partialParams));
    }
    invokeListGlobalTables(partialParams) {
        this.boot();
        return this.client.listGlobalTables(this.ops["ListGlobalTables"].apply(partialParams));
    }
    invokeListTables(partialParams) {
        this.boot();
        return this.client.listTables(this.ops["ListTables"].apply(partialParams));
    }
    invokeListTagsOfResource(partialParams) {
        this.boot();
        return this.client.listTagsOfResource(this.ops["ListTagsOfResource"].apply(partialParams));
    }
    invokePutItem(partialParams) {
        this.boot();
        return this.client.putItem(this.ops["PutItem"].apply(partialParams));
    }
    invokeQuery(partialParams) {
        this.boot();
        return this.client.query(this.ops["Query"].apply(partialParams));
    }
    invokeRestoreTableFromBackup(partialParams) {
        this.boot();
        return this.client.restoreTableFromBackup(this.ops["RestoreTableFromBackup"].apply(partialParams));
    }
    invokeRestoreTableToPointInTime(partialParams) {
        this.boot();
        return this.client.restoreTableToPointInTime(this.ops["RestoreTableToPointInTime"].apply(partialParams));
    }
    invokeScan(partialParams) {
        this.boot();
        return this.client.scan(this.ops["Scan"].apply(partialParams));
    }
    invokeTransactGetItems(partialParams) {
        this.boot();
        return this.client.transactGetItems(this.ops["TransactGetItems"].apply(partialParams));
    }
    invokeTransactWriteItems(partialParams) {
        this.boot();
        return this.client.transactWriteItems(this.ops["TransactWriteItems"].apply(partialParams));
    }
    invokeUpdateContinuousBackups(partialParams) {
        this.boot();
        return this.client.updateContinuousBackups(this.ops["UpdateContinuousBackups"].apply(partialParams));
    }
    invokeUpdateContributorInsights(partialParams) {
        this.boot();
        return this.client.updateContributorInsights(this.ops["UpdateContributorInsights"].apply(partialParams));
    }
    invokeUpdateGlobalTable(partialParams) {
        this.boot();
        return this.client.updateGlobalTable(this.ops["UpdateGlobalTable"].apply(partialParams));
    }
    invokeUpdateGlobalTableSettings(partialParams) {
        this.boot();
        return this.client.updateGlobalTableSettings(this.ops["UpdateGlobalTableSettings"].apply(partialParams));
    }
    invokeUpdateItem(partialParams) {
        this.boot();
        return this.client.updateItem(this.ops["UpdateItem"].apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        this.boot();
        return this.client.updateTable(this.ops["UpdateTable"].apply(partialParams));
    }
    invokeUpdateTableReplicaAutoScaling(partialParams) {
        this.boot();
        return this.client.updateTableReplicaAutoScaling(this.ops["UpdateTableReplicaAutoScaling"].apply(partialParams));
    }
    invokeUpdateTimeToLive(partialParams) {
        this.boot();
        return this.client.updateTimeToLive(this.ops["UpdateTimeToLive"].apply(partialParams));
    }
}
exports.default = default_1;
