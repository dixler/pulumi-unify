
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateBackupInput,
    CreateTableInput,
    DeleteItemInput,
    DeleteTableInput,
    DescribeContinuousBackupsInput,
    DescribeContributorInsightsInput,
    DescribeKinesisStreamingDestinationInput,
    DescribeTableInput,
    DescribeTableReplicaAutoScalingInput,
    DescribeTimeToLiveInput,
    KinesisStreamingDestinationInput,
    GetItemInput,
    PutItemInput,
    QueryInput,
    ScanInput,
    UpdateContinuousBackupsInput,
    UpdateContributorInsightsInput,
    UpdateItemInput,
    UpdateTableInput,
    UpdateTableReplicaAutoScalingInput,
    UpdateTimeToLiveInput,
    CreateBackupOutput,
    CreateTableOutput,
    DeleteItemOutput,
    DeleteTableOutput,
    DescribeContinuousBackupsOutput,
    DescribeContributorInsightsOutput,
    DescribeKinesisStreamingDestinationOutput,
    DescribeTableOutput,
    DescribeTableReplicaAutoScalingOutput,
    DescribeTimeToLiveOutput,
    KinesisStreamingDestinationOutput,
    GetItemOutput,
    PutItemOutput,
    QueryOutput,
    ScanOutput,
    UpdateContinuousBackupsOutput,
    UpdateContributorInsightsOutput,
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

export default class extends aws.dynamodb.KinesisStreamingDestination {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dynamodb.KinesisStreamingDestination>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DynamoDB()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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

    invokeCreateBackup(partialParams: ToOptional<{
      [K in keyof CreateBackupInput & keyof Omit<CreateBackupInput, "TableName">]: (CreateBackupInput)[K]
    }>): Request<CreateBackupOutput, AWSError> {
        this.boot();
        return this.client.createBackup(
          this.ops["CreateBackup"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableInput & keyof Omit<CreateTableInput, "TableName">]: (CreateTableInput)[K]
    }>): Request<CreateTableOutput, AWSError> {
        this.boot();
        return this.client.createTable(
          this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeDeleteItem(partialParams: ToOptional<{
      [K in keyof DeleteItemInput & keyof Omit<DeleteItemInput, "TableName">]: (DeleteItemInput)[K]
    }>): Request<DeleteItemOutput, AWSError> {
        this.boot();
        return this.client.deleteItem(
          this.ops["DeleteItem"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableInput & keyof Omit<DeleteTableInput, "TableName">]: (DeleteTableInput)[K]
    }>): Request<DeleteTableOutput, AWSError> {
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDescribeContinuousBackups(partialParams: ToOptional<{
      [K in keyof DescribeContinuousBackupsInput & keyof Omit<DescribeContinuousBackupsInput, "TableName">]: (DescribeContinuousBackupsInput)[K]
    }>): Request<DescribeContinuousBackupsOutput, AWSError> {
        this.boot();
        return this.client.describeContinuousBackups(
          this.ops["DescribeContinuousBackups"].apply(partialParams)
        );
    }

    invokeDescribeContributorInsights(partialParams: ToOptional<{
      [K in keyof DescribeContributorInsightsInput & keyof Omit<DescribeContributorInsightsInput, "TableName">]: (DescribeContributorInsightsInput)[K]
    }>): Request<DescribeContributorInsightsOutput, AWSError> {
        this.boot();
        return this.client.describeContributorInsights(
          this.ops["DescribeContributorInsights"].apply(partialParams)
        );
    }

    invokeDescribeKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof DescribeKinesisStreamingDestinationInput & keyof Omit<DescribeKinesisStreamingDestinationInput, "TableName">]: (DescribeKinesisStreamingDestinationInput)[K]
    }>): Request<DescribeKinesisStreamingDestinationOutput, AWSError> {
        this.boot();
        return this.client.describeKinesisStreamingDestination(
          this.ops["DescribeKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeDescribeTable(partialParams: ToOptional<{
      [K in keyof DescribeTableInput & keyof Omit<DescribeTableInput, "TableName">]: (DescribeTableInput)[K]
    }>): Request<DescribeTableOutput, AWSError> {
        this.boot();
        return this.client.describeTable(
          this.ops["DescribeTable"].apply(partialParams)
        );
    }

    invokeDescribeTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTableReplicaAutoScalingInput & keyof Omit<DescribeTableReplicaAutoScalingInput, "TableName">]: (DescribeTableReplicaAutoScalingInput)[K]
    }>): Request<DescribeTableReplicaAutoScalingOutput, AWSError> {
        this.boot();
        return this.client.describeTableReplicaAutoScaling(
          this.ops["DescribeTableReplicaAutoScaling"].apply(partialParams)
        );
    }

    invokeDescribeTimeToLive(partialParams: ToOptional<{
      [K in keyof DescribeTimeToLiveInput & keyof Omit<DescribeTimeToLiveInput, "TableName">]: (DescribeTimeToLiveInput)[K]
    }>): Request<DescribeTimeToLiveOutput, AWSError> {
        this.boot();
        return this.client.describeTimeToLive(
          this.ops["DescribeTimeToLive"].apply(partialParams)
        );
    }

    invokeDisableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput & keyof Omit<KinesisStreamingDestinationInput, "TableName" | "StreamArn">]: (KinesisStreamingDestinationInput)[K]
    }>): Request<KinesisStreamingDestinationOutput, AWSError> {
        this.boot();
        return this.client.disableKinesisStreamingDestination(
          this.ops["DisableKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeEnableKinesisStreamingDestination(partialParams: ToOptional<{
      [K in keyof KinesisStreamingDestinationInput & keyof Omit<KinesisStreamingDestinationInput, "TableName" | "StreamArn">]: (KinesisStreamingDestinationInput)[K]
    }>): Request<KinesisStreamingDestinationOutput, AWSError> {
        this.boot();
        return this.client.enableKinesisStreamingDestination(
          this.ops["EnableKinesisStreamingDestination"].apply(partialParams)
        );
    }

    invokeGetItem(partialParams: ToOptional<{
      [K in keyof GetItemInput & keyof Omit<GetItemInput, "TableName">]: (GetItemInput)[K]
    }>): Request<GetItemOutput, AWSError> {
        this.boot();
        return this.client.getItem(
          this.ops["GetItem"].apply(partialParams)
        );
    }

    invokePutItem(partialParams: ToOptional<{
      [K in keyof PutItemInput & keyof Omit<PutItemInput, "TableName">]: (PutItemInput)[K]
    }>): Request<PutItemOutput, AWSError> {
        this.boot();
        return this.client.putItem(
          this.ops["PutItem"].apply(partialParams)
        );
    }

    invokeQuery(partialParams: ToOptional<{
      [K in keyof QueryInput & keyof Omit<QueryInput, "TableName">]: (QueryInput)[K]
    }>): Request<QueryOutput, AWSError> {
        this.boot();
        return this.client.query(
          this.ops["Query"].apply(partialParams)
        );
    }

    invokeScan(partialParams: ToOptional<{
      [K in keyof ScanInput & keyof Omit<ScanInput, "TableName">]: (ScanInput)[K]
    }>): Request<ScanOutput, AWSError> {
        this.boot();
        return this.client.scan(
          this.ops["Scan"].apply(partialParams)
        );
    }

    invokeUpdateContinuousBackups(partialParams: ToOptional<{
      [K in keyof UpdateContinuousBackupsInput & keyof Omit<UpdateContinuousBackupsInput, "TableName">]: (UpdateContinuousBackupsInput)[K]
    }>): Request<UpdateContinuousBackupsOutput, AWSError> {
        this.boot();
        return this.client.updateContinuousBackups(
          this.ops["UpdateContinuousBackups"].apply(partialParams)
        );
    }

    invokeUpdateContributorInsights(partialParams: ToOptional<{
      [K in keyof UpdateContributorInsightsInput & keyof Omit<UpdateContributorInsightsInput, "TableName">]: (UpdateContributorInsightsInput)[K]
    }>): Request<UpdateContributorInsightsOutput, AWSError> {
        this.boot();
        return this.client.updateContributorInsights(
          this.ops["UpdateContributorInsights"].apply(partialParams)
        );
    }

    invokeUpdateItem(partialParams: ToOptional<{
      [K in keyof UpdateItemInput & keyof Omit<UpdateItemInput, "TableName">]: (UpdateItemInput)[K]
    }>): Request<UpdateItemOutput, AWSError> {
        this.boot();
        return this.client.updateItem(
          this.ops["UpdateItem"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableInput & keyof Omit<UpdateTableInput, "TableName">]: (UpdateTableInput)[K]
    }>): Request<UpdateTableOutput, AWSError> {
        this.boot();
        return this.client.updateTable(
          this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateTableReplicaAutoScaling(partialParams: ToOptional<{
      [K in keyof UpdateTableReplicaAutoScalingInput & keyof Omit<UpdateTableReplicaAutoScalingInput, "TableName">]: (UpdateTableReplicaAutoScalingInput)[K]
    }>): Request<UpdateTableReplicaAutoScalingOutput, AWSError> {
        this.boot();
        return this.client.updateTableReplicaAutoScaling(
          this.ops["UpdateTableReplicaAutoScaling"].apply(partialParams)
        );
    }

    invokeUpdateTimeToLive(partialParams: ToOptional<{
      [K in keyof UpdateTimeToLiveInput & keyof Omit<UpdateTimeToLiveInput, "TableName">]: (UpdateTimeToLiveInput)[K]
    }>): Request<UpdateTimeToLiveOutput, AWSError> {
        this.boot();
        return this.client.updateTimeToLive(
          this.ops["UpdateTimeToLive"].apply(partialParams)
        );
    }
}