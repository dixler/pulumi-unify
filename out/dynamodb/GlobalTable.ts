
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    DescribeEndpointsRequest,
    DescribeExportInput,
    DescribeGlobalTableInput,
    DescribeGlobalTableSettingsInput,
    DescribeKinesisStreamingDestinationInput,
    DescribeLimitsInput,
    DescribeTableInput,
    DescribeTableReplicaAutoScalingInput,
    DescribeTimeToLiveInput,
    KinesisStreamingDestinationInput,
    ExecuteStatementInput,
    ExecuteTransactionInput,
    ExportTableToPointInTimeInput,
    GetItemInput,
    ListBackupsInput,
    ListContributorInsightsInput,
    ListExportsInput,
    ListGlobalTablesInput,
    ListTablesInput,
    ListTagsOfResourceInput,
    PutItemInput,
    QueryInput,
    RestoreTableFromBackupInput,
    RestoreTableToPointInTimeInput,
    ScanInput,
    TransactGetItemsInput,
    TransactWriteItemsInput,
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
    DescribeEndpointsResponse,
    DescribeExportOutput,
    DescribeGlobalTableOutput,
    DescribeGlobalTableSettingsOutput,
    DescribeKinesisStreamingDestinationOutput,
    DescribeLimitsOutput,
    DescribeTableOutput,
    DescribeTableReplicaAutoScalingOutput,
    DescribeTimeToLiveOutput,
    KinesisStreamingDestinationOutput,
    ExecuteStatementOutput,
    ExecuteTransactionOutput,
    ExportTableToPointInTimeOutput,
    GetItemOutput,
    ListBackupsOutput,
    ListContributorInsightsOutput,
    ListExportsOutput,
    ListGlobalTablesOutput,
    ListTablesOutput,
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
const schema = require("../apis/dynamodb-2012-08-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dynamodb.GlobalTable {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dynamodb.GlobalTable>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DynamoDB()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeBatchExecuteStatement(partialParams: ToOptional<{
      [K in keyof BatchExecuteStatementInput]: (BatchExecuteStatementInput)[K]
    }>): Request<BatchExecuteStatementOutput, AWSError> {
        this.boot();
        return this.client.batchExecuteStatement(
          this.ops["BatchExecuteStatement"].apply(partialParams)
        );
    }

    invokeBatchGetItem(partialParams: ToOptional<{
      [K in keyof BatchGetItemInput]: (BatchGetItemInput)[K]
    }>): Request<BatchGetItemOutput, AWSError> {
        this.boot();
        return this.client.batchGetItem(
          this.ops["BatchGetItem"].apply(partialParams)
        );
    }

    invokeBatchWriteItem(partialParams: ToOptional<{
      [K in keyof BatchWriteItemInput]: (BatchWriteItemInput)[K]
    }>): Request<BatchWriteItemOutput, AWSError> {
        this.boot();
        return this.client.batchWriteItem(
          this.ops["BatchWriteItem"].apply(partialParams)
        );
    }

    invokeCreateBackup(partialParams: ToOptional<{
      [K in keyof CreateBackupInput]: (CreateBackupInput)[K]
    }>): Request<CreateBackupOutput, AWSError> {
        this.boot();
        return this.client.createBackup(
          this.ops["CreateBackup"].apply(partialParams)
        );
    }

    invokeCreateGlobalTable(partialParams: ToOptional<{
      [K in keyof CreateGlobalTableInput & keyof Omit<CreateGlobalTableInput, "GlobalTableName">]: (CreateGlobalTableInput)[K]
    }>): Request<CreateGlobalTableOutput, AWSError> {
        this.boot();
        return this.client.createGlobalTable(
          this.ops["CreateGlobalTable"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableInput]: (CreateTableInput)[K]
    }>): Request<CreateTableOutput, AWSError> {
        this.boot();
        return this.client.createTable(
          this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupInput]: (DeleteBackupInput)[K]
    }>): Request<DeleteBackupOutput, AWSError> {
        this.boot();
        return this.client.deleteBackup(
          this.ops["DeleteBackup"].apply(partialParams)
        );
    }

    invokeDeleteItem(partialParams: ToOptional<{
      [K in keyof DeleteItemInput]: (DeleteItemInput)[K]
    }>): Request<DeleteItemOutput, AWSError> {
        this.boot();
        return this.client.deleteItem(
          this.ops["DeleteItem"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableInput]: (DeleteTableInput)[K]
    }>): Request<DeleteTableOutput, AWSError> {
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDescribeBackup(partialParams: ToOptional<{
      [K in keyof DescribeBackupInput]: (DescribeBackupInput)[K]
    }>): Request<DescribeBackupOutput, AWSError> {
        this.boot();
        return this.client.describeBackup(
          this.ops["DescribeBackup"].apply(partialParams)
        );
    }

    invokeDescribeContinuousBackups(partialParams: ToOptional<{
      [K in keyof DescribeContinuousBackupsInput]: (DescribeContinuousBackupsInput)[K]
    }>): Request<DescribeContinuousBackupsOutput, AWSError> {
        this.boot();
        return this.client.describeContinuousBackups(
          this.ops["DescribeContinuousBackups"].apply(partialParams)
        );
    }

    invokeDescribeContributorInsights(partialParams: ToOptional<{
      [K in keyof DescribeContributorInsightsInput]: (DescribeContributorInsightsInput)[K]
    }>): Request<DescribeContributorInsightsOutput, AWSError> {
        this.boot();
        return this.client.describeContributorInsights(
          this.ops["DescribeContributorInsights"].apply(partialParams)
        );
    }

    invokeDescribeEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeEndpointsRequest]: (DescribeEndpointsRequest)[K]
    }>): Request<DescribeEndpointsResponse, AWSError> {
        this.boot();
        return this.client.describeEndpoints(
          this.ops["DescribeEndpoints"].apply(partialParams)
        );
    }

    invokeDescribeExport(partialParams: ToOptional<{
      [K in keyof DescribeExportInput]: (DescribeExportInput)[K]
    }>): Request<DescribeExportOutput, AWSError> {
        this.boot();
        return this.client.describeExport(
          this.ops["DescribeExport"].apply(partialParams)
        );
    }

    invokeDescribeGlobalTable(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableInput & keyof Omit<DescribeGlobalTableInput, "GlobalTableName">]: (DescribeGlobalTableInput)[K]
    }>): Request<DescribeGlobalTableOutput, AWSError> {
        this.boot();
        return this.client.describeGlobalTable(
          this.ops["DescribeGlobalTable"].apply(partialParams)
        );
    }

    invokeDescribeGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableSettingsInput & keyof Omit<DescribeGlobalTableSettingsInput, "GlobalTableName">]: (DescribeGlobalTableSettingsInput)[K]
    }>): Request<DescribeGlobalTableSettingsOutput, AWSError> {
        this.boot();
        return this.client.describeGlobalTableSettings(
          this.ops["DescribeGlobalTableSettings"].apply(partialParams)
        );
    }

    invokeDescribeKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof DescribeKinesisStreamingDestinationInput]: (DescribeKinesisStreamingDestinationInput)[K]
    }>): Request<DescribeKinesisStreamingDestinationOutput, AWSError> {
        this.boot();
        return this.client.describeKinesisStreamingDestination(
          this.ops["DescribeKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeDescribeLimits(partialParams: ToOptional<{
      [K in keyof DescribeLimitsInput]: (DescribeLimitsInput)[K]
    }>): Request<DescribeLimitsOutput, AWSError> {
        this.boot();
        return this.client.describeLimits(
          this.ops["DescribeLimits"].apply(partialParams)
        );
    }

    invokeDescribeTable(partialParams: ToOptional<{
      [K in keyof DescribeTableInput]: (DescribeTableInput)[K]
    }>): Request<DescribeTableOutput, AWSError> {
        this.boot();
        return this.client.describeTable(
          this.ops["DescribeTable"].apply(partialParams)
        );
    }

    invokeDescribeTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTableReplicaAutoScalingInput]: (DescribeTableReplicaAutoScalingInput)[K]
    }>): Request<DescribeTableReplicaAutoScalingOutput, AWSError> {
        this.boot();
        return this.client.describeTableReplicaAutoScaling(
          this.ops["DescribeTableReplicaAutoScaling"].apply(partialParams)
        );
    }

    invokeDescribeTimeToLive(partialParams: ToOptional<{
      [K in keyof DescribeTimeToLiveInput]: (DescribeTimeToLiveInput)[K]
    }>): Request<DescribeTimeToLiveOutput, AWSError> {
        this.boot();
        return this.client.describeTimeToLive(
          this.ops["DescribeTimeToLive"].apply(partialParams)
        );
    }

    invokeDisableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput]: (KinesisStreamingDestinationInput)[K]
    }>): Request<KinesisStreamingDestinationOutput, AWSError> {
        this.boot();
        return this.client.disableKinesisStreamingDestination(
          this.ops["DisableKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeEnableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput]: (KinesisStreamingDestinationInput)[K]
    }>): Request<KinesisStreamingDestinationOutput, AWSError> {
        this.boot();
        return this.client.enableKinesisStreamingDestination(
          this.ops["EnableKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeExecuteStatement(partialParams: ToOptional<{
      [K in keyof ExecuteStatementInput]: (ExecuteStatementInput)[K]
    }>): Request<ExecuteStatementOutput, AWSError> {
        this.boot();
        return this.client.executeStatement(
          this.ops["ExecuteStatement"].apply(partialParams)
        );
    }

    invokeExecuteTransaction(partialParams: ToOptional<{
      [K in keyof ExecuteTransactionInput]: (ExecuteTransactionInput)[K]
    }>): Request<ExecuteTransactionOutput, AWSError> {
        this.boot();
        return this.client.executeTransaction(
          this.ops["ExecuteTransaction"].apply(partialParams)
        );
    }

    invokeExportTableToPointInTime(partialParams: ToOptional<{
      [K in keyof ExportTableToPointInTimeInput]: (ExportTableToPointInTimeInput)[K]
    }>): Request<ExportTableToPointInTimeOutput, AWSError> {
        this.boot();
        return this.client.exportTableToPointInTime(
          this.ops["ExportTableToPointInTime"].apply(partialParams)
        );
    }

    invokeGetItem(partialParams: ToOptional<{
      [K in keyof GetItemInput]: (GetItemInput)[K]
    }>): Request<GetItemOutput, AWSError> {
        this.boot();
        return this.client.getItem(
          this.ops["GetItem"].apply(partialParams)
        );
    }

    invokeListBackups(partialParams: ToOptional<{
      [K in keyof ListBackupsInput]: (ListBackupsInput)[K]
    }>): Request<ListBackupsOutput, AWSError> {
        this.boot();
        return this.client.listBackups(
          this.ops["ListBackups"].apply(partialParams)
        );
    }

    invokeListContributorInsights(partialParams: ToOptional<{
      [K in keyof ListContributorInsightsInput]: (ListContributorInsightsInput)[K]
    }>): Request<ListContributorInsightsOutput, AWSError> {
        this.boot();
        return this.client.listContributorInsights(
          this.ops["ListContributorInsights"].apply(partialParams)
        );
    }

    invokeListExports(partialParams: ToOptional<{
      [K in keyof ListExportsInput]: (ListExportsInput)[K]
    }>): Request<ListExportsOutput, AWSError> {
        this.boot();
        return this.client.listExports(
          this.ops["ListExports"].apply(partialParams)
        );
    }

    invokeListGlobalTables(partialParams: ToOptional<{
      [K in keyof ListGlobalTablesInput]: (ListGlobalTablesInput)[K]
    }>): Request<ListGlobalTablesOutput, AWSError> {
        this.boot();
        return this.client.listGlobalTables(
          this.ops["ListGlobalTables"].apply(partialParams)
        );
    }

    invokeListTables(partialParams: ToOptional<{
      [K in keyof ListTablesInput]: (ListTablesInput)[K]
    }>): Request<ListTablesOutput, AWSError> {
        this.boot();
        return this.client.listTables(
          this.ops["ListTables"].apply(partialParams)
        );
    }

    invokeListTagsOfResource(partialParams: ToOptional<{
      [K in keyof ListTagsOfResourceInput]: (ListTagsOfResourceInput)[K]
    }>): Request<ListTagsOfResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsOfResource(
          this.ops["ListTagsOfResource"].apply(partialParams)
        );
    }

    invokePutItem(partialParams: ToOptional<{
      [K in keyof PutItemInput]: (PutItemInput)[K]
    }>): Request<PutItemOutput, AWSError> {
        this.boot();
        return this.client.putItem(
          this.ops["PutItem"].apply(partialParams)
        );
    }

    invokeQuery(partialParams: ToOptional<{
      [K in keyof QueryInput]: (QueryInput)[K]
    }>): Request<QueryOutput, AWSError> {
        this.boot();
        return this.client.query(
          this.ops["Query"].apply(partialParams)
        );
    }

    invokeRestoreTableFromBackup(partialParams: ToOptional<{
      [K in keyof RestoreTableFromBackupInput]: (RestoreTableFromBackupInput)[K]
    }>): Request<RestoreTableFromBackupOutput, AWSError> {
        this.boot();
        return this.client.restoreTableFromBackup(
          this.ops["RestoreTableFromBackup"].apply(partialParams)
        );
    }

    invokeRestoreTableToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreTableToPointInTimeInput]: (RestoreTableToPointInTimeInput)[K]
    }>): Request<RestoreTableToPointInTimeOutput, AWSError> {
        this.boot();
        return this.client.restoreTableToPointInTime(
          this.ops["RestoreTableToPointInTime"].apply(partialParams)
        );
    }

    invokeScan(partialParams: ToOptional<{
      [K in keyof ScanInput]: (ScanInput)[K]
    }>): Request<ScanOutput, AWSError> {
        this.boot();
        return this.client.scan(
          this.ops["Scan"].apply(partialParams)
        );
    }

    invokeTransactGetItems(partialParams: ToOptional<{
      [K in keyof TransactGetItemsInput]: (TransactGetItemsInput)[K]
    }>): Request<TransactGetItemsOutput, AWSError> {
        this.boot();
        return this.client.transactGetItems(
          this.ops["TransactGetItems"].apply(partialParams)
        );
    }

    invokeTransactWriteItems(partialParams: ToOptional<{
      [K in keyof TransactWriteItemsInput]: (TransactWriteItemsInput)[K]
    }>): Request<TransactWriteItemsOutput, AWSError> {
        this.boot();
        return this.client.transactWriteItems(
          this.ops["TransactWriteItems"].apply(partialParams)
        );
    }

    invokeUpdateContinuousBackups(partialParams: ToOptional<{
      [K in keyof UpdateContinuousBackupsInput]: (UpdateContinuousBackupsInput)[K]
    }>): Request<UpdateContinuousBackupsOutput, AWSError> {
        this.boot();
        return this.client.updateContinuousBackups(
          this.ops["UpdateContinuousBackups"].apply(partialParams)
        );
    }

    invokeUpdateContributorInsights(partialParams: ToOptional<{
      [K in keyof UpdateContributorInsightsInput]: (UpdateContributorInsightsInput)[K]
    }>): Request<UpdateContributorInsightsOutput, AWSError> {
        this.boot();
        return this.client.updateContributorInsights(
          this.ops["UpdateContributorInsights"].apply(partialParams)
        );
    }

    invokeUpdateGlobalTable(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableInput & keyof Omit<UpdateGlobalTableInput, "GlobalTableName">]: (UpdateGlobalTableInput)[K]
    }>): Request<UpdateGlobalTableOutput, AWSError> {
        this.boot();
        return this.client.updateGlobalTable(
          this.ops["UpdateGlobalTable"].apply(partialParams)
        );
    }

    invokeUpdateGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableSettingsInput & keyof Omit<UpdateGlobalTableSettingsInput, "GlobalTableName">]: (UpdateGlobalTableSettingsInput)[K]
    }>): Request<UpdateGlobalTableSettingsOutput, AWSError> {
        this.boot();
        return this.client.updateGlobalTableSettings(
          this.ops["UpdateGlobalTableSettings"].apply(partialParams)
        );
    }

    invokeUpdateItem(partialParams: ToOptional<{
      [K in keyof UpdateItemInput]: (UpdateItemInput)[K]
    }>): Request<UpdateItemOutput, AWSError> {
        this.boot();
        return this.client.updateItem(
          this.ops["UpdateItem"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableInput]: (UpdateTableInput)[K]
    }>): Request<UpdateTableOutput, AWSError> {
        this.boot();
        return this.client.updateTable(
          this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof UpdateTableReplicaAutoScalingInput]: (UpdateTableReplicaAutoScalingInput)[K]
    }>): Request<UpdateTableReplicaAutoScalingOutput, AWSError> {
        this.boot();
        return this.client.updateTableReplicaAutoScaling(
          this.ops["UpdateTableReplicaAutoScaling"].apply(partialParams)
        );
    }

    invokeUpdateTimeToLive(partialParams: ToOptional<{
      [K in keyof UpdateTimeToLiveInput]: (UpdateTimeToLiveInput)[K]
    }>): Request<UpdateTimeToLiveOutput, AWSError> {
        this.boot();
        return this.client.updateTimeToLive(
          this.ops["UpdateTimeToLive"].apply(partialParams)
        );
    }
}