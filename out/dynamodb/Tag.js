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
class default_1 extends aws.dynamodb.Tag {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DynamoDB();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/dynamodb-2012-08-10.normal.json"), this.client);
    }
    invokeBatchExecuteStatement(partialParams) {
        return this.client.batchExecuteStatement(this.ops["BatchExecuteStatement"].apply(partialParams));
    }
    invokeBatchGetItem(partialParams) {
        return this.client.batchGetItem(this.ops["BatchGetItem"].apply(partialParams));
    }
    invokeBatchWriteItem(partialParams) {
        return this.client.batchWriteItem(this.ops["BatchWriteItem"].apply(partialParams));
    }
    invokeCreateBackup(partialParams) {
        return this.client.createBackup(this.ops["CreateBackup"].apply(partialParams));
    }
    invokeCreateGlobalTable(partialParams) {
        return this.client.createGlobalTable(this.ops["CreateGlobalTable"].apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        return this.client.createTable(this.ops["CreateTable"].apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        return this.client.deleteBackup(this.ops["DeleteBackup"].apply(partialParams));
    }
    invokeDeleteItem(partialParams) {
        return this.client.deleteItem(this.ops["DeleteItem"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDescribeBackup(partialParams) {
        return this.client.describeBackup(this.ops["DescribeBackup"].apply(partialParams));
    }
    invokeDescribeContinuousBackups(partialParams) {
        return this.client.describeContinuousBackups(this.ops["DescribeContinuousBackups"].apply(partialParams));
    }
    invokeDescribeContributorInsights(partialParams) {
        return this.client.describeContributorInsights(this.ops["DescribeContributorInsights"].apply(partialParams));
    }
    invokeDescribeExport(partialParams) {
        return this.client.describeExport(this.ops["DescribeExport"].apply(partialParams));
    }
    invokeDescribeGlobalTable(partialParams) {
        return this.client.describeGlobalTable(this.ops["DescribeGlobalTable"].apply(partialParams));
    }
    invokeDescribeGlobalTableSettings(partialParams) {
        return this.client.describeGlobalTableSettings(this.ops["DescribeGlobalTableSettings"].apply(partialParams));
    }
    invokeDescribeKinesisStreamingDestination(partialParams) {
        return this.client.describeKinesisStreamingDestination(this.ops["DescribeKinesisStreamingDestination"].apply(partialParams));
    }
    invokeDescribeTable(partialParams) {
        return this.client.describeTable(this.ops["DescribeTable"].apply(partialParams));
    }
    invokeDescribeTableReplicaAutoScaling(partialParams) {
        return this.client.describeTableReplicaAutoScaling(this.ops["DescribeTableReplicaAutoScaling"].apply(partialParams));
    }
    invokeDescribeTimeToLive(partialParams) {
        return this.client.describeTimeToLive(this.ops["DescribeTimeToLive"].apply(partialParams));
    }
    invokeDisableKinesisStreamingDestination(partialParams) {
        return this.client.disableKinesisStreamingDestination(this.ops["DisableKinesisStreamingDestination"].apply(partialParams));
    }
    invokeEnableKinesisStreamingDestination(partialParams) {
        return this.client.enableKinesisStreamingDestination(this.ops["EnableKinesisStreamingDestination"].apply(partialParams));
    }
    invokeExecuteStatement(partialParams) {
        return this.client.executeStatement(this.ops["ExecuteStatement"].apply(partialParams));
    }
    invokeExecuteTransaction(partialParams) {
        return this.client.executeTransaction(this.ops["ExecuteTransaction"].apply(partialParams));
    }
    invokeExportTableToPointInTime(partialParams) {
        return this.client.exportTableToPointInTime(this.ops["ExportTableToPointInTime"].apply(partialParams));
    }
    invokeGetItem(partialParams) {
        return this.client.getItem(this.ops["GetItem"].apply(partialParams));
    }
    invokeListTagsOfResource(partialParams) {
        return this.client.listTagsOfResource(this.ops["ListTagsOfResource"].apply(partialParams));
    }
    invokePutItem(partialParams) {
        return this.client.putItem(this.ops["PutItem"].apply(partialParams));
    }
    invokeQuery(partialParams) {
        return this.client.query(this.ops["Query"].apply(partialParams));
    }
    invokeRestoreTableFromBackup(partialParams) {
        return this.client.restoreTableFromBackup(this.ops["RestoreTableFromBackup"].apply(partialParams));
    }
    invokeRestoreTableToPointInTime(partialParams) {
        return this.client.restoreTableToPointInTime(this.ops["RestoreTableToPointInTime"].apply(partialParams));
    }
    invokeScan(partialParams) {
        return this.client.scan(this.ops["Scan"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTransactGetItems(partialParams) {
        return this.client.transactGetItems(this.ops["TransactGetItems"].apply(partialParams));
    }
    invokeTransactWriteItems(partialParams) {
        return this.client.transactWriteItems(this.ops["TransactWriteItems"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateContinuousBackups(partialParams) {
        return this.client.updateContinuousBackups(this.ops["UpdateContinuousBackups"].apply(partialParams));
    }
    invokeUpdateContributorInsights(partialParams) {
        return this.client.updateContributorInsights(this.ops["UpdateContributorInsights"].apply(partialParams));
    }
    invokeUpdateGlobalTable(partialParams) {
        return this.client.updateGlobalTable(this.ops["UpdateGlobalTable"].apply(partialParams));
    }
    invokeUpdateGlobalTableSettings(partialParams) {
        return this.client.updateGlobalTableSettings(this.ops["UpdateGlobalTableSettings"].apply(partialParams));
    }
    invokeUpdateItem(partialParams) {
        return this.client.updateItem(this.ops["UpdateItem"].apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        return this.client.updateTable(this.ops["UpdateTable"].apply(partialParams));
    }
    invokeUpdateTableReplicaAutoScaling(partialParams) {
        return this.client.updateTableReplicaAutoScaling(this.ops["UpdateTableReplicaAutoScaling"].apply(partialParams));
    }
    invokeUpdateTimeToLive(partialParams) {
        return this.client.updateTimeToLive(this.ops["UpdateTimeToLive"].apply(partialParams));
    }
}
exports.default = default_1;
