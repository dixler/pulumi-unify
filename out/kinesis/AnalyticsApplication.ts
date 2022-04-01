
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DescribeLimitsInput,
    DescribeStreamInput,
    DescribeStreamConsumerInput,
    DescribeStreamSummaryInput,
    DisableEnhancedMonitoringInput,
    EnableEnhancedMonitoringInput,
    GetRecordsInput,
    GetShardIteratorInput,
    ListShardsInput,
    ListStreamConsumersInput,
    ListStreamsInput,
    ListTagsForStreamInput,
    PutRecordInput,
    PutRecordsInput,
    RegisterStreamConsumerInput,
    UpdateShardCountInput,
    DescribeLimitsOutput,
    DescribeStreamOutput,
    DescribeStreamConsumerOutput,
    DescribeStreamSummaryOutput,
    EnhancedMonitoringOutput,
    GetRecordsOutput,
    GetShardIteratorOutput,
    ListShardsOutput,
    ListStreamConsumersOutput,
    ListStreamsOutput,
    ListTagsForStreamOutput,
    PutRecordOutput,
    PutRecordsOutput,
    RegisterStreamConsumerOutput,
    UpdateShardCountOutput
} from "aws-sdk/clients/kinesis";
const schema = require("../apis/kinesis-2013-12-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kinesis.AnalyticsApplication {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.kinesis.AnalyticsApplication>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Kinesis()
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

    invokeDescribeLimits(partialParams: ToOptional<{
      [K in keyof DescribeLimitsInput]: (DescribeLimitsInput)[K]
    }>): Request<DescribeLimitsOutput, AWSError> {
        this.boot();
        return this.client.describeLimits(
          this.ops["DescribeLimits"].apply(partialParams)
        );
    }

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamInput]: (DescribeStreamInput)[K]
    }>): Request<DescribeStreamOutput, AWSError> {
        this.boot();
        return this.client.describeStream(
          this.ops["DescribeStream"].apply(partialParams)
        );
    }

    invokeDescribeStreamConsumer(partialParams: ToOptional<{
      [K in keyof DescribeStreamConsumerInput]: (DescribeStreamConsumerInput)[K]
    }>): Request<DescribeStreamConsumerOutput, AWSError> {
        this.boot();
        return this.client.describeStreamConsumer(
          this.ops["DescribeStreamConsumer"].apply(partialParams)
        );
    }

    invokeDescribeStreamSummary(partialParams: ToOptional<{
      [K in keyof DescribeStreamSummaryInput]: (DescribeStreamSummaryInput)[K]
    }>): Request<DescribeStreamSummaryOutput, AWSError> {
        this.boot();
        return this.client.describeStreamSummary(
          this.ops["DescribeStreamSummary"].apply(partialParams)
        );
    }

    invokeDisableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof DisableEnhancedMonitoringInput]: (DisableEnhancedMonitoringInput)[K]
    }>): Request<EnhancedMonitoringOutput, AWSError> {
        this.boot();
        return this.client.disableEnhancedMonitoring(
          this.ops["DisableEnhancedMonitoring"].apply(partialParams)
        );
    }

    invokeEnableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof EnableEnhancedMonitoringInput]: (EnableEnhancedMonitoringInput)[K]
    }>): Request<EnhancedMonitoringOutput, AWSError> {
        this.boot();
        return this.client.enableEnhancedMonitoring(
          this.ops["EnableEnhancedMonitoring"].apply(partialParams)
        );
    }

    invokeGetRecords(partialParams: ToOptional<{
      [K in keyof GetRecordsInput]: (GetRecordsInput)[K]
    }>): Request<GetRecordsOutput, AWSError> {
        this.boot();
        return this.client.getRecords(
          this.ops["GetRecords"].apply(partialParams)
        );
    }

    invokeGetShardIterator(partialParams: ToOptional<{
      [K in keyof GetShardIteratorInput]: (GetShardIteratorInput)[K]
    }>): Request<GetShardIteratorOutput, AWSError> {
        this.boot();
        return this.client.getShardIterator(
          this.ops["GetShardIterator"].apply(partialParams)
        );
    }

    invokeListShards(partialParams: ToOptional<{
      [K in keyof ListShardsInput]: (ListShardsInput)[K]
    }>): Request<ListShardsOutput, AWSError> {
        this.boot();
        return this.client.listShards(
          this.ops["ListShards"].apply(partialParams)
        );
    }

    invokeListStreamConsumers(partialParams: ToOptional<{
      [K in keyof ListStreamConsumersInput]: (ListStreamConsumersInput)[K]
    }>): Request<ListStreamConsumersOutput, AWSError> {
        this.boot();
        return this.client.listStreamConsumers(
          this.ops["ListStreamConsumers"].apply(partialParams)
        );
    }

    invokeListStreams(partialParams: ToOptional<{
      [K in keyof ListStreamsInput]: (ListStreamsInput)[K]
    }>): Request<ListStreamsOutput, AWSError> {
        this.boot();
        return this.client.listStreams(
          this.ops["ListStreams"].apply(partialParams)
        );
    }

    invokeListTagsForStream(partialParams: ToOptional<{
      [K in keyof ListTagsForStreamInput]: (ListTagsForStreamInput)[K]
    }>): Request<ListTagsForStreamOutput, AWSError> {
        this.boot();
        return this.client.listTagsForStream(
          this.ops["ListTagsForStream"].apply(partialParams)
        );
    }

    invokePutRecord(partialParams: ToOptional<{
      [K in keyof PutRecordInput]: (PutRecordInput)[K]
    }>): Request<PutRecordOutput, AWSError> {
        this.boot();
        return this.client.putRecord(
          this.ops["PutRecord"].apply(partialParams)
        );
    }

    invokePutRecords(partialParams: ToOptional<{
      [K in keyof PutRecordsInput]: (PutRecordsInput)[K]
    }>): Request<PutRecordsOutput, AWSError> {
        this.boot();
        return this.client.putRecords(
          this.ops["PutRecords"].apply(partialParams)
        );
    }

    invokeRegisterStreamConsumer(partialParams: ToOptional<{
      [K in keyof RegisterStreamConsumerInput]: (RegisterStreamConsumerInput)[K]
    }>): Request<RegisterStreamConsumerOutput, AWSError> {
        this.boot();
        return this.client.registerStreamConsumer(
          this.ops["RegisterStreamConsumer"].apply(partialParams)
        );
    }

    invokeUpdateShardCount(partialParams: ToOptional<{
      [K in keyof UpdateShardCountInput]: (UpdateShardCountInput)[K]
    }>): Request<UpdateShardCountOutput, AWSError> {
        this.boot();
        return this.client.updateShardCount(
          this.ops["UpdateShardCount"].apply(partialParams)
        );
    }
}