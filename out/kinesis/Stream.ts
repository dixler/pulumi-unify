
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DescribeStreamInput,
    DescribeStreamSummaryInput,
    DisableEnhancedMonitoringInput,
    EnableEnhancedMonitoringInput,
    GetShardIteratorInput,
    ListTagsForStreamInput,
    PutRecordInput,
    PutRecordsInput,
    UpdateShardCountInput,
    DescribeStreamOutput,
    DescribeStreamSummaryOutput,
    EnhancedMonitoringOutput,
    GetShardIteratorOutput,
    ListTagsForStreamOutput,
    PutRecordOutput,
    PutRecordsOutput,
    UpdateShardCountOutput
} from "aws-sdk/clients/kinesis";
const schema = require("../apis/kinesis-2013-12-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kinesis.Stream {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.kinesis.Stream>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Kinesis()
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

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamInput & keyof Omit<DescribeStreamInput, "StreamName">]: (DescribeStreamInput)[K]
    }>): Request<DescribeStreamOutput, AWSError> {
        this.boot();
        return this.client.describeStream(
          this.ops["DescribeStream"].apply(partialParams)
        );
    }

    invokeDescribeStreamSummary(partialParams: ToOptional<{
      [K in keyof DescribeStreamSummaryInput & keyof Omit<DescribeStreamSummaryInput, "StreamName">]: (DescribeStreamSummaryInput)[K]
    }>): Request<DescribeStreamSummaryOutput, AWSError> {
        this.boot();
        return this.client.describeStreamSummary(
          this.ops["DescribeStreamSummary"].apply(partialParams)
        );
    }

    invokeDisableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof DisableEnhancedMonitoringInput & keyof Omit<DisableEnhancedMonitoringInput, "StreamName">]: (DisableEnhancedMonitoringInput)[K]
    }>): Request<EnhancedMonitoringOutput, AWSError> {
        this.boot();
        return this.client.disableEnhancedMonitoring(
          this.ops["DisableEnhancedMonitoring"].apply(partialParams)
        );
    }

    invokeEnableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof EnableEnhancedMonitoringInput & keyof Omit<EnableEnhancedMonitoringInput, "StreamName">]: (EnableEnhancedMonitoringInput)[K]
    }>): Request<EnhancedMonitoringOutput, AWSError> {
        this.boot();
        return this.client.enableEnhancedMonitoring(
          this.ops["EnableEnhancedMonitoring"].apply(partialParams)
        );
    }

    invokeGetShardIterator(partialParams: ToOptional<{
      [K in keyof GetShardIteratorInput & keyof Omit<GetShardIteratorInput, "StreamName">]: (GetShardIteratorInput)[K]
    }>): Request<GetShardIteratorOutput, AWSError> {
        this.boot();
        return this.client.getShardIterator(
          this.ops["GetShardIterator"].apply(partialParams)
        );
    }

    invokeListTagsForStream(partialParams: ToOptional<{
      [K in keyof ListTagsForStreamInput & keyof Omit<ListTagsForStreamInput, "StreamName">]: (ListTagsForStreamInput)[K]
    }>): Request<ListTagsForStreamOutput, AWSError> {
        this.boot();
        return this.client.listTagsForStream(
          this.ops["ListTagsForStream"].apply(partialParams)
        );
    }

    invokePutRecord(partialParams: ToOptional<{
      [K in keyof PutRecordInput & keyof Omit<PutRecordInput, "StreamName">]: (PutRecordInput)[K]
    }>): Request<PutRecordOutput, AWSError> {
        this.boot();
        return this.client.putRecord(
          this.ops["PutRecord"].apply(partialParams)
        );
    }

    invokePutRecords(partialParams: ToOptional<{
      [K in keyof PutRecordsInput & keyof Omit<PutRecordsInput, "StreamName">]: (PutRecordsInput)[K]
    }>): Request<PutRecordsOutput, AWSError> {
        this.boot();
        return this.client.putRecords(
          this.ops["PutRecords"].apply(partialParams)
        );
    }

    invokeUpdateShardCount(partialParams: ToOptional<{
      [K in keyof UpdateShardCountInput & keyof Omit<UpdateShardCountInput, "StreamName">]: (UpdateShardCountInput)[K]
    }>): Request<UpdateShardCountOutput, AWSError> {
        this.boot();
        return this.client.updateShardCount(
          this.ops["UpdateShardCount"].apply(partialParams)
        );
    }
}