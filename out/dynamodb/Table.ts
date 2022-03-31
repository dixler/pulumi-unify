
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
const schema = require("../apis/dynamodb-2012-08-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dynamodb.Table {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.dynamodb.Table>) {
        super(...args)
        this.client = new awssdk.DynamoDB()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeBatchExecuteStatement(partialParams: ToOptional<{
      [K in keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput & keyof BatchExecuteStatementInput]: (BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput & BatchExecuteStatementInput)[K]
    }>): Request<BatchExecuteStatementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchExecuteStatement(
          this.ops["BatchExecuteStatement"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetItem(partialParams: ToOptional<{
      [K in keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput & keyof BatchGetItemInput]: (BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput & BatchGetItemInput)[K]
    }>): Request<BatchGetItemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetItem(
          this.ops["BatchGetItem"].applicator.apply(partialParams)
        );
    }

    invokeBatchWriteItem(partialParams: ToOptional<{
      [K in keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput & keyof BatchWriteItemInput]: (BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput & BatchWriteItemInput)[K]
    }>): Request<BatchWriteItemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchWriteItem(
          this.ops["BatchWriteItem"].applicator.apply(partialParams)
        );
    }

    invokeCreateBackup(partialParams: ToOptional<{
      [K in keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput & keyof CreateBackupInput]: (CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput & CreateBackupInput)[K]
    }>): Request<CreateBackupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackup(
          this.ops["CreateBackup"].applicator.apply(partialParams)
        );
    }

    invokeCreateGlobalTable(partialParams: ToOptional<{
      [K in keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput & keyof CreateGlobalTableInput]: (CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput & CreateGlobalTableInput)[K]
    }>): Request<CreateGlobalTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGlobalTable(
          this.ops["CreateGlobalTable"].applicator.apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput & keyof CreateTableInput]: (CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput & CreateTableInput)[K]
    }>): Request<CreateTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTable(
          this.ops["CreateTable"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput & keyof DeleteBackupInput]: (DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput & DeleteBackupInput)[K]
    }>): Request<DeleteBackupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackup(
          this.ops["DeleteBackup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteItem(partialParams: ToOptional<{
      [K in keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput & keyof DeleteItemInput]: (DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput & DeleteItemInput)[K]
    }>): Request<DeleteItemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteItem(
          this.ops["DeleteItem"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput & keyof DeleteTableInput]: (DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput & DeleteTableInput)[K]
    }>): Request<DeleteTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBackup(partialParams: ToOptional<{
      [K in keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput & keyof DescribeBackupInput]: (DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput & DescribeBackupInput)[K]
    }>): Request<DescribeBackupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBackup(
          this.ops["DescribeBackup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContinuousBackups(partialParams: ToOptional<{
      [K in keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput & keyof DescribeContinuousBackupsInput]: (DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput & DescribeContinuousBackupsInput)[K]
    }>): Request<DescribeContinuousBackupsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContinuousBackups(
          this.ops["DescribeContinuousBackups"].applicator.apply(partialParams)
        );
    }

    invokeDescribeContributorInsights(partialParams: ToOptional<{
      [K in keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput & keyof DescribeContributorInsightsInput]: (DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput & DescribeContributorInsightsInput)[K]
    }>): Request<DescribeContributorInsightsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContributorInsights(
          this.ops["DescribeContributorInsights"].applicator.apply(partialParams)
        );
    }

    invokeDescribeExport(partialParams: ToOptional<{
      [K in keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput & keyof DescribeExportInput]: (DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput & DescribeExportInput)[K]
    }>): Request<DescribeExportOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExport(
          this.ops["DescribeExport"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGlobalTable(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput & keyof DescribeGlobalTableInput]: (DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput & DescribeGlobalTableInput)[K]
    }>): Request<DescribeGlobalTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGlobalTable(
          this.ops["DescribeGlobalTable"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput & keyof DescribeGlobalTableSettingsInput]: (DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput & DescribeGlobalTableSettingsInput)[K]
    }>): Request<DescribeGlobalTableSettingsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGlobalTableSettings(
          this.ops["DescribeGlobalTableSettings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput & keyof DescribeKinesisStreamingDestinationInput]: (DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput & DescribeKinesisStreamingDestinationInput)[K]
    }>): Request<DescribeKinesisStreamingDestinationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeKinesisStreamingDestination(
          this.ops["DescribeKinesisStreamingDestination"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTable(partialParams: ToOptional<{
      [K in keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput & keyof DescribeTableInput]: (DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput & DescribeTableInput)[K]
    }>): Request<DescribeTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTable(
          this.ops["DescribeTable"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput & keyof DescribeTableReplicaAutoScalingInput]: (DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput & DescribeTableReplicaAutoScalingInput)[K]
    }>): Request<DescribeTableReplicaAutoScalingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTableReplicaAutoScaling(
          this.ops["DescribeTableReplicaAutoScaling"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTimeToLive(partialParams: ToOptional<{
      [K in keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput & keyof DescribeTimeToLiveInput]: (DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput & DescribeTimeToLiveInput)[K]
    }>): Request<DescribeTimeToLiveOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTimeToLive(
          this.ops["DescribeTimeToLive"].applicator.apply(partialParams)
        );
    }

    invokeDisableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput]: (KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput)[K]
    }>): Request<KinesisStreamingDestinationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableKinesisStreamingDestination(
          this.ops["DisableKinesisStreamingDestination"].applicator.apply(partialParams)
        );
    }

    invokeEnableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput & keyof KinesisStreamingDestinationInput]: (KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput & KinesisStreamingDestinationInput)[K]
    }>): Request<KinesisStreamingDestinationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableKinesisStreamingDestination(
          this.ops["EnableKinesisStreamingDestination"].applicator.apply(partialParams)
        );
    }

    invokeExecuteStatement(partialParams: ToOptional<{
      [K in keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput & keyof ExecuteStatementInput]: (ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput & ExecuteStatementInput)[K]
    }>): Request<ExecuteStatementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeStatement(
          this.ops["ExecuteStatement"].applicator.apply(partialParams)
        );
    }

    invokeExecuteTransaction(partialParams: ToOptional<{
      [K in keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput & keyof ExecuteTransactionInput]: (ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput & ExecuteTransactionInput)[K]
    }>): Request<ExecuteTransactionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeTransaction(
          this.ops["ExecuteTransaction"].applicator.apply(partialParams)
        );
    }

    invokeExportTableToPointInTime(partialParams: ToOptional<{
      [K in keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput & keyof ExportTableToPointInTimeInput]: (ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput & ExportTableToPointInTimeInput)[K]
    }>): Request<ExportTableToPointInTimeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportTableToPointInTime(
          this.ops["ExportTableToPointInTime"].applicator.apply(partialParams)
        );
    }

    invokeGetItem(partialParams: ToOptional<{
      [K in keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput & keyof GetItemInput]: (GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput & GetItemInput)[K]
    }>): Request<GetItemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getItem(
          this.ops["GetItem"].applicator.apply(partialParams)
        );
    }

    invokeListTagsOfResource(partialParams: ToOptional<{
      [K in keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput & keyof ListTagsOfResourceInput]: (ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput & ListTagsOfResourceInput)[K]
    }>): Request<ListTagsOfResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsOfResource(
          this.ops["ListTagsOfResource"].applicator.apply(partialParams)
        );
    }

    invokePutItem(partialParams: ToOptional<{
      [K in keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput & keyof PutItemInput]: (PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput & PutItemInput)[K]
    }>): Request<PutItemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putItem(
          this.ops["PutItem"].applicator.apply(partialParams)
        );
    }

    invokeQuery(partialParams: ToOptional<{
      [K in keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput & keyof QueryInput]: (QueryInput & QueryInput & QueryInput & QueryInput & QueryInput & QueryInput & QueryInput & QueryInput & QueryInput & QueryInput & QueryInput)[K]
    }>): Request<QueryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.query(
          this.ops["Query"].applicator.apply(partialParams)
        );
    }

    invokeRestoreTableFromBackup(partialParams: ToOptional<{
      [K in keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput & keyof RestoreTableFromBackupInput]: (RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput & RestoreTableFromBackupInput)[K]
    }>): Request<RestoreTableFromBackupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreTableFromBackup(
          this.ops["RestoreTableFromBackup"].applicator.apply(partialParams)
        );
    }

    invokeRestoreTableToPointInTime(partialParams: ToOptional<{
      [K in keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput & keyof RestoreTableToPointInTimeInput]: (RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput & RestoreTableToPointInTimeInput)[K]
    }>): Request<RestoreTableToPointInTimeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreTableToPointInTime(
          this.ops["RestoreTableToPointInTime"].applicator.apply(partialParams)
        );
    }

    invokeScan(partialParams: ToOptional<{
      [K in keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput & keyof ScanInput]: (ScanInput & ScanInput & ScanInput & ScanInput & ScanInput & ScanInput & ScanInput & ScanInput & ScanInput & ScanInput & ScanInput)[K]
    }>): Request<ScanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.scan(
          this.ops["Scan"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTransactGetItems(partialParams: ToOptional<{
      [K in keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput & keyof TransactGetItemsInput]: (TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput & TransactGetItemsInput)[K]
    }>): Request<TransactGetItemsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.transactGetItems(
          this.ops["TransactGetItems"].applicator.apply(partialParams)
        );
    }

    invokeTransactWriteItems(partialParams: ToOptional<{
      [K in keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput & keyof TransactWriteItemsInput]: (TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput & TransactWriteItemsInput)[K]
    }>): Request<TransactWriteItemsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.transactWriteItems(
          this.ops["TransactWriteItems"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContinuousBackups(partialParams: ToOptional<{
      [K in keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput & keyof UpdateContinuousBackupsInput]: (UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput & UpdateContinuousBackupsInput)[K]
    }>): Request<UpdateContinuousBackupsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContinuousBackups(
          this.ops["UpdateContinuousBackups"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContributorInsights(partialParams: ToOptional<{
      [K in keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput & keyof UpdateContributorInsightsInput]: (UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput & UpdateContributorInsightsInput)[K]
    }>): Request<UpdateContributorInsightsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContributorInsights(
          this.ops["UpdateContributorInsights"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGlobalTable(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput & keyof UpdateGlobalTableInput]: (UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput & UpdateGlobalTableInput)[K]
    }>): Request<UpdateGlobalTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGlobalTable(
          this.ops["UpdateGlobalTable"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput & keyof UpdateGlobalTableSettingsInput]: (UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput & UpdateGlobalTableSettingsInput)[K]
    }>): Request<UpdateGlobalTableSettingsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGlobalTableSettings(
          this.ops["UpdateGlobalTableSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateItem(partialParams: ToOptional<{
      [K in keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput & keyof UpdateItemInput]: (UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput & UpdateItemInput)[K]
    }>): Request<UpdateItemOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateItem(
          this.ops["UpdateItem"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput & keyof UpdateTableInput]: (UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput & UpdateTableInput)[K]
    }>): Request<UpdateTableOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTable(
          this.ops["UpdateTable"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput & keyof UpdateTableReplicaAutoScalingInput]: (UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput & UpdateTableReplicaAutoScalingInput)[K]
    }>): Request<UpdateTableReplicaAutoScalingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTableReplicaAutoScaling(
          this.ops["UpdateTableReplicaAutoScaling"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTimeToLive(partialParams: ToOptional<{
      [K in keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput & keyof UpdateTimeToLiveInput]: (UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput & UpdateTimeToLiveInput)[K]
    }>): Request<UpdateTimeToLiveOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTimeToLive(
          this.ops["UpdateTimeToLive"].applicator.apply(partialParams)
        );
    }
}