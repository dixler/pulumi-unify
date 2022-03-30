
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchExecuteStatementInput,
    BatchGetItemInput,
    BatchWriteItemInput,
    CreateBackupInput,
    CreateGlobalTableInput,
    CreateTableInput,
    DeleteBackupInput,
    DeleteItemInput,
    DeleteTableInput,
    DescribeBackupInput,
    DescribeContinuousBackupsInput,
    DescribeContributorInsightsInput,
    DescribeExportInput,
    DescribeGlobalTableInput,
    DescribeGlobalTableSettingsInput,
    DescribeKinesisStreamingDestinationInput,
    DescribeTableInput,
    DescribeTableReplicaAutoScalingInput,
    DescribeTimeToLiveInput,
    KinesisStreamingDestinationInput,
    ExecuteStatementInput,
    ExecuteTransactionInput,
    ExportTableToPointInTimeInput,
    GetItemInput,
    ListTagsOfResourceInput,
    PutItemInput,
    QueryInput,
    RestoreTableFromBackupInput,
    RestoreTableToPointInTimeInput,
    ScanInput,
    TagResourceInput,
    TransactGetItemsInput,
    TransactWriteItemsInput,
    UntagResourceInput,
    UpdateContinuousBackupsInput,
    UpdateContributorInsightsInput,
    UpdateGlobalTableInput,
    UpdateGlobalTableSettingsInput,
    UpdateItemInput,
    UpdateTableInput,
    UpdateTableReplicaAutoScalingInput,
    UpdateTimeToLiveInput,
    BatchExecuteStatementOutput,
    BatchGetItemOutput,
    BatchWriteItemOutput,
    CreateBackupOutput,
    CreateGlobalTableOutput,
    CreateTableOutput,
    DeleteBackupOutput,
    DeleteItemOutput,
    DeleteTableOutput,
    DescribeBackupOutput,
    DescribeContinuousBackupsOutput,
    DescribeContributorInsightsOutput,
    DescribeExportOutput,
    DescribeGlobalTableOutput,
    DescribeGlobalTableSettingsOutput,
    DescribeKinesisStreamingDestinationOutput,
    DescribeTableOutput,
    DescribeTableReplicaAutoScalingOutput,
    DescribeTimeToLiveOutput,
    KinesisStreamingDestinationOutput,
    ExecuteStatementOutput,
    ExecuteTransactionOutput,
    ExportTableToPointInTimeOutput,
    GetItemOutput,
    ListTagsOfResourceOutput,
    PutItemOutput,
    QueryOutput,
    RestoreTableFromBackupOutput,
    RestoreTableToPointInTimeOutput,
    ScanOutput,
    TransactGetItemsOutput,
    TransactWriteItemsOutput,
    UpdateContinuousBackupsOutput,
    UpdateContributorInsightsOutput,
    UpdateGlobalTableOutput,
    UpdateGlobalTableSettingsOutput,
    UpdateItemOutput,
    UpdateTableOutput,
    UpdateTableReplicaAutoScalingOutput,
    UpdateTimeToLiveOutput
} from "aws-sdk/clients/dynamodb";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dynamodb.KinesisStreamingDestination {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.dynamodb.KinesisStreamingDestination>) {
        super(...args)
        this.client = new awssdk.DynamoDB()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/dynamodb-2012-08-10.normal.json"), this.client)
    }

    invokeBatchExecuteStatement(partialParams: ToOptional<{
      [K in keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput]: (BatchExecuteStatementInput & BatchExecuteStatementInput)[K]
    }>): BatchExecuteStatementOutput {
        return this.client.batchExecuteStatement(
            this.ops["BatchExecuteStatement"].apply(partialParams)
        );
    }

    invokeBatchGetItem(partialParams: ToOptional<{
      [K in keyof BatchGetItemInput & keyof BatchGetItemInput]: (BatchGetItemInput & BatchGetItemInput)[K]
    }>): BatchGetItemOutput {
        return this.client.batchGetItem(
            this.ops["BatchGetItem"].apply(partialParams)
        );
    }

    invokeBatchWriteItem(partialParams: ToOptional<{
      [K in keyof BatchWriteItemInput & keyof BatchWriteItemInput]: (BatchWriteItemInput & BatchWriteItemInput)[K]
    }>): BatchWriteItemOutput {
        return this.client.batchWriteItem(
            this.ops["BatchWriteItem"].apply(partialParams)
        );
    }

    invokeCreateBackup(partialParams: ToOptional<{
      [K in keyof CreateBackupInput & keyof CreateBackupInput]: (CreateBackupInput & CreateBackupInput)[K]
    }>): CreateBackupOutput {
        return this.client.createBackup(
            this.ops["CreateBackup"].apply(partialParams)
        );
    }

    invokeCreateGlobalTable(partialParams: ToOptional<{
      [K in keyof CreateGlobalTableInput & keyof CreateGlobalTableInput]: (CreateGlobalTableInput & CreateGlobalTableInput)[K]
    }>): CreateGlobalTableOutput {
        return this.client.createGlobalTable(
            this.ops["CreateGlobalTable"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableInput & keyof CreateTableInput]: (CreateTableInput & CreateTableInput)[K]
    }>): CreateTableOutput {
        return this.client.createTable(
            this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupInput & keyof DeleteBackupInput]: (DeleteBackupInput & DeleteBackupInput)[K]
    }>): DeleteBackupOutput {
        return this.client.deleteBackup(
            this.ops["DeleteBackup"].apply(partialParams)
        );
    }

    invokeDeleteItem(partialParams: ToOptional<{
      [K in keyof DeleteItemInput & keyof DeleteItemInput]: (DeleteItemInput & DeleteItemInput)[K]
    }>): DeleteItemOutput {
        return this.client.deleteItem(
            this.ops["DeleteItem"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableInput & keyof DeleteTableInput]: (DeleteTableInput & DeleteTableInput)[K]
    }>): DeleteTableOutput {
        return this.client.deleteTable(
            this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDescribeBackup(partialParams: ToOptional<{
      [K in keyof DescribeBackupInput & keyof DescribeBackupInput]: (DescribeBackupInput & DescribeBackupInput)[K]
    }>): DescribeBackupOutput {
        return this.client.describeBackup(
            this.ops["DescribeBackup"].apply(partialParams)
        );
    }

    invokeDescribeContinuousBackups(partialParams: ToOptional<{
      [K in keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput]: (DescribeContinuousBackupsInput & DescribeContinuousBackupsInput)[K]
    }>): DescribeContinuousBackupsOutput {
        return this.client.describeContinuousBackups(
            this.ops["DescribeContinuousBackups"].apply(partialParams)
        );
    }

    invokeDescribeContributorInsights(partialParams: ToOptional<{
      [K in keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput]: (DescribeContributorInsightsInput & DescribeContributorInsightsInput)[K]
    }>): DescribeContributorInsightsOutput {
        return this.client.describeContributorInsights(
            this.ops["DescribeContributorInsights"].apply(partialParams)
        );
    }

    invokeDescribeExport(partialParams: ToOptional<{
      [K in keyof DescribeExportInput & keyof DescribeExportInput]: (DescribeExportInput & DescribeExportInput)[K]
    }>): DescribeExportOutput {
        return this.client.describeExport(
            this.ops["DescribeExport"].apply(partialParams)
        );
    }

    invokeDescribeGlobalTable(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput]: (DescribeGlobalTableInput & DescribeGlobalTableInput)[K]
    }>): DescribeGlobalTableOutput {
        return this.client.describeGlobalTable(
            this.ops["DescribeGlobalTable"].apply(partialParams)
        );
    }

    invokeDescribeGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput]: (DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput)[K]
    }>): DescribeGlobalTableSettingsOutput {
        return this.client.describeGlobalTableSettings(
            this.ops["DescribeGlobalTableSettings"].apply(partialParams)
        );
    }

    invokeDescribeKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput]: (DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput)[K]
    }>): DescribeKinesisStreamingDestinationOutput {
        return this.client.describeKinesisStreamingDestination(
            this.ops["DescribeKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeDescribeTable(partialParams: ToOptional<{
      [K in keyof DescribeTableInput & keyof DescribeTableInput]: (DescribeTableInput & DescribeTableInput)[K]
    }>): DescribeTableOutput {
        return this.client.describeTable(
            this.ops["DescribeTable"].apply(partialParams)
        );
    }

    invokeDescribeTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput]: (DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput)[K]
    }>): DescribeTableReplicaAutoScalingOutput {
        return this.client.describeTableReplicaAutoScaling(
            this.ops["DescribeTableReplicaAutoScaling"].apply(partialParams)
        );
    }

    invokeDescribeTimeToLive(partialParams: ToOptional<{
      [K in keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput]: (DescribeTimeToLiveInput & DescribeTimeToLiveInput)[K]
    }>): DescribeTimeToLiveOutput {
        return this.client.describeTimeToLive(
            this.ops["DescribeTimeToLive"].apply(partialParams)
        );
    }

    invokeDisableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput]: (KinesisStreamingDestinationInput & KinesisStreamingDestinationInput)[K]
    }>): KinesisStreamingDestinationOutput {
        return this.client.disableKinesisStreamingDestination(
            this.ops["DisableKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeEnableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput]: (KinesisStreamingDestinationInput & KinesisStreamingDestinationInput)[K]
    }>): KinesisStreamingDestinationOutput {
        return this.client.enableKinesisStreamingDestination(
            this.ops["EnableKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeExecuteStatement(partialParams: ToOptional<{
      [K in keyof ExecuteStatementInput & keyof ExecuteStatementInput]: (ExecuteStatementInput & ExecuteStatementInput)[K]
    }>): ExecuteStatementOutput {
        return this.client.executeStatement(
            this.ops["ExecuteStatement"].apply(partialParams)
        );
    }

    invokeExecuteTransaction(partialParams: ToOptional<{
      [K in keyof ExecuteTransactionInput & keyof ExecuteTransactionInput]: (ExecuteTransactionInput & ExecuteTransactionInput)[K]
    }>): ExecuteTransactionOutput {
        return this.client.executeTransaction(
            this.ops["ExecuteTransaction"].apply(partialParams)
        );
    }

    invokeExportTableToPointInTime(partialParams: ToOptional<{
      [K in keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput]: (ExportTableToPointInTimeInput & ExportTableToPointInTimeInput)[K]
    }>): ExportTableToPointInTimeOutput {
        return this.client.exportTableToPointInTime(
            this.ops["ExportTableToPointInTime"].apply(partialParams)
        );
    }

    invokeGetItem(partialParams: ToOptional<{
      [K in keyof GetItemInput & keyof GetItemInput]: (GetItemInput & GetItemInput)[K]
    }>): GetItemOutput {
        return this.client.getItem(
            this.ops["GetItem"].apply(partialParams)
        );
    }

    invokeListTagsOfResource(partialParams: ToOptional<{
      [K in keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput]: (ListTagsOfResourceInput & ListTagsOfResourceInput)[K]
    }>): ListTagsOfResourceOutput {
        return this.client.listTagsOfResource(
            this.ops["ListTagsOfResource"].apply(partialParams)
        );
    }

    invokePutItem(partialParams: ToOptional<{
      [K in keyof PutItemInput & keyof PutItemInput]: (PutItemInput & PutItemInput)[K]
    }>): PutItemOutput {
        return this.client.putItem(
            this.ops["PutItem"].apply(partialParams)
        );
    }

    invokeQuery(partialParams: ToOptional<{
      [K in keyof QueryInput & keyof QueryInput]: (QueryInput & QueryInput)[K]
    }>): QueryOutput {
        return this.client.query(
            this.ops["Query"].apply(partialParams)
        );
    }

    invokeRestoreTableFromBackup(partialParams: ToOptional<{
      [K in keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput]: (RestoreTableFromBackupInput & RestoreTableFromBackupInput)[K]
    }>): RestoreTableFromBackupOutput {
        return this.client.restoreTableFromBackup(
            this.ops["RestoreTableFromBackup"].apply(partialParams)
        );
    }

    invokeRestoreTableToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput]: (RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput)[K]
    }>): RestoreTableToPointInTimeOutput {
        return this.client.restoreTableToPointInTime(
            this.ops["RestoreTableToPointInTime"].apply(partialParams)
        );
    }

    invokeScan(partialParams: ToOptional<{
      [K in keyof ScanInput & keyof ScanInput]: (ScanInput & ScanInput)[K]
    }>): ScanOutput {
        return this.client.scan(
            this.ops["Scan"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTransactGetItems(partialParams: ToOptional<{
      [K in keyof TransactGetItemsInput & keyof TransactGetItemsInput]: (TransactGetItemsInput & TransactGetItemsInput)[K]
    }>): TransactGetItemsOutput {
        return this.client.transactGetItems(
            this.ops["TransactGetItems"].apply(partialParams)
        );
    }

    invokeTransactWriteItems(partialParams: ToOptional<{
      [K in keyof TransactWriteItemsInput & keyof TransactWriteItemsInput]: (TransactWriteItemsInput & TransactWriteItemsInput)[K]
    }>): TransactWriteItemsOutput {
        return this.client.transactWriteItems(
            this.ops["TransactWriteItems"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateContinuousBackups(partialParams: ToOptional<{
      [K in keyof UpdateContinuousBackupsInput & keyof Omit<UpdateContinuousBackupsInput, "TableName">]: (UpdateContinuousBackupsInput & Omit<UpdateContinuousBackupsInput, "TableName">)[K]
    }>): UpdateContinuousBackupsOutput {
        return this.client.updateContinuousBackups(
            this.ops["UpdateContinuousBackups"].apply(partialParams)
        );
    }

    invokeUpdateContributorInsights(partialParams: ToOptional<{
      [K in keyof UpdateContributorInsightsInput & keyof Omit<UpdateContributorInsightsInput, "TableName">]: (UpdateContributorInsightsInput & Omit<UpdateContributorInsightsInput, "TableName">)[K]
    }>): UpdateContributorInsightsOutput {
        return this.client.updateContributorInsights(
            this.ops["UpdateContributorInsights"].apply(partialParams)
        );
    }

    invokeUpdateGlobalTable(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableInput & keyof Omit<UpdateGlobalTableInput, "GlobalTableName">]: (UpdateGlobalTableInput & Omit<UpdateGlobalTableInput, "GlobalTableName">)[K]
    }>): UpdateGlobalTableOutput {
        return this.client.updateGlobalTable(
            this.ops["UpdateGlobalTable"].apply(partialParams)
        );
    }

    invokeUpdateGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableSettingsInput & keyof Omit<UpdateGlobalTableSettingsInput, "GlobalTableName">]: (UpdateGlobalTableSettingsInput & Omit<UpdateGlobalTableSettingsInput, "GlobalTableName">)[K]
    }>): UpdateGlobalTableSettingsOutput {
        return this.client.updateGlobalTableSettings(
            this.ops["UpdateGlobalTableSettings"].apply(partialParams)
        );
    }

    invokeUpdateItem(partialParams: ToOptional<{
      [K in keyof UpdateItemInput & keyof Omit<UpdateItemInput, "TableName">]: (UpdateItemInput & Omit<UpdateItemInput, "TableName">)[K]
    }>): UpdateItemOutput {
        return this.client.updateItem(
            this.ops["UpdateItem"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableInput & keyof Omit<UpdateTableInput, "TableName">]: (UpdateTableInput & Omit<UpdateTableInput, "TableName">)[K]
    }>): UpdateTableOutput {
        return this.client.updateTable(
            this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof UpdateTableReplicaAutoScalingInput & keyof Omit<UpdateTableReplicaAutoScalingInput, "TableName">]: (UpdateTableReplicaAutoScalingInput & Omit<UpdateTableReplicaAutoScalingInput, "TableName">)[K]
    }>): UpdateTableReplicaAutoScalingOutput {
        return this.client.updateTableReplicaAutoScaling(
            this.ops["UpdateTableReplicaAutoScaling"].apply(partialParams)
        );
    }

    invokeUpdateTimeToLive(partialParams: ToOptional<{
      [K in keyof UpdateTimeToLiveInput & keyof Omit<UpdateTimeToLiveInput, "TableName">]: (UpdateTimeToLiveInput & Omit<UpdateTimeToLiveInput, "TableName">)[K]
    }>): UpdateTimeToLiveOutput {
        return this.client.updateTimeToLive(
            this.ops["UpdateTimeToLive"].apply(partialParams)
        );
    }
}