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
class default_1 extends aws.dynamodb.GlobalTable {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DynamoDB();
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
    invokeBatchExecuteStatement(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchExecuteStatement(this.ops["BatchExecuteStatement"].applicator.apply(partialParams));
    }
    invokeBatchGetItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetItem(this.ops["BatchGetItem"].applicator.apply(partialParams));
    }
    invokeBatchWriteItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchWriteItem(this.ops["BatchWriteItem"].applicator.apply(partialParams));
    }
    invokeCreateBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackup(this.ops["CreateBackup"].applicator.apply(partialParams));
    }
    invokeCreateGlobalTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGlobalTable(this.ops["CreateGlobalTable"].applicator.apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTable(this.ops["CreateTable"].applicator.apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackup(this.ops["DeleteBackup"].applicator.apply(partialParams));
    }
    invokeDeleteItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteItem(this.ops["DeleteItem"].applicator.apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].applicator.apply(partialParams));
    }
    invokeDescribeBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBackup(this.ops["DescribeBackup"].applicator.apply(partialParams));
    }
    invokeDescribeContinuousBackups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContinuousBackups(this.ops["DescribeContinuousBackups"].applicator.apply(partialParams));
    }
    invokeDescribeContributorInsights(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContributorInsights(this.ops["DescribeContributorInsights"].applicator.apply(partialParams));
    }
    invokeDescribeExport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExport(this.ops["DescribeExport"].applicator.apply(partialParams));
    }
    invokeDescribeGlobalTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGlobalTable(this.ops["DescribeGlobalTable"].applicator.apply(partialParams));
    }
    invokeDescribeGlobalTableSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGlobalTableSettings(this.ops["DescribeGlobalTableSettings"].applicator.apply(partialParams));
    }
    invokeDescribeKinesisStreamingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeKinesisStreamingDestination(this.ops["DescribeKinesisStreamingDestination"].applicator.apply(partialParams));
    }
    invokeDescribeTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTable(this.ops["DescribeTable"].applicator.apply(partialParams));
    }
    invokeDescribeTableReplicaAutoScaling(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTableReplicaAutoScaling(this.ops["DescribeTableReplicaAutoScaling"].applicator.apply(partialParams));
    }
    invokeDescribeTimeToLive(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTimeToLive(this.ops["DescribeTimeToLive"].applicator.apply(partialParams));
    }
    invokeDisableKinesisStreamingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableKinesisStreamingDestination(this.ops["DisableKinesisStreamingDestination"].applicator.apply(partialParams));
    }
    invokeEnableKinesisStreamingDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableKinesisStreamingDestination(this.ops["EnableKinesisStreamingDestination"].applicator.apply(partialParams));
    }
    invokeExecuteStatement(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeStatement(this.ops["ExecuteStatement"].applicator.apply(partialParams));
    }
    invokeExecuteTransaction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeTransaction(this.ops["ExecuteTransaction"].applicator.apply(partialParams));
    }
    invokeExportTableToPointInTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportTableToPointInTime(this.ops["ExportTableToPointInTime"].applicator.apply(partialParams));
    }
    invokeGetItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getItem(this.ops["GetItem"].applicator.apply(partialParams));
    }
    invokeListTagsOfResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsOfResource(this.ops["ListTagsOfResource"].applicator.apply(partialParams));
    }
    invokePutItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putItem(this.ops["PutItem"].applicator.apply(partialParams));
    }
    invokeQuery(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.query(this.ops["Query"].applicator.apply(partialParams));
    }
    invokeRestoreTableFromBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreTableFromBackup(this.ops["RestoreTableFromBackup"].applicator.apply(partialParams));
    }
    invokeRestoreTableToPointInTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreTableToPointInTime(this.ops["RestoreTableToPointInTime"].applicator.apply(partialParams));
    }
    invokeScan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.scan(this.ops["Scan"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTransactGetItems(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.transactGetItems(this.ops["TransactGetItems"].applicator.apply(partialParams));
    }
    invokeTransactWriteItems(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.transactWriteItems(this.ops["TransactWriteItems"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateContinuousBackups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContinuousBackups(this.ops["UpdateContinuousBackups"].applicator.apply(partialParams));
    }
    invokeUpdateContributorInsights(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContributorInsights(this.ops["UpdateContributorInsights"].applicator.apply(partialParams));
    }
    invokeUpdateGlobalTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGlobalTable(this.ops["UpdateGlobalTable"].applicator.apply(partialParams));
    }
    invokeUpdateGlobalTableSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGlobalTableSettings(this.ops["UpdateGlobalTableSettings"].applicator.apply(partialParams));
    }
    invokeUpdateItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateItem(this.ops["UpdateItem"].applicator.apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTable(this.ops["UpdateTable"].applicator.apply(partialParams));
    }
    invokeUpdateTableReplicaAutoScaling(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTableReplicaAutoScaling(this.ops["UpdateTableReplicaAutoScaling"].applicator.apply(partialParams));
    }
    invokeUpdateTimeToLive(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTimeToLive(this.ops["UpdateTimeToLive"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
