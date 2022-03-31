
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsToStreamInput,
    CreateStreamInput,
    DecreaseStreamRetentionPeriodInput,
    DeleteStreamInput,
    DescribeStreamInput,
    DescribeStreamSummaryInput,
    DisableEnhancedMonitoringInput,
    EnableEnhancedMonitoringInput,
    GetRecordsInput,
    GetShardIteratorInput,
    IncreaseStreamRetentionPeriodInput,
    ListStreamConsumersInput,
    ListTagsForStreamInput,
    MergeShardsInput,
    PutRecordInput,
    PutRecordsInput,
    RegisterStreamConsumerInput,
    RemoveTagsFromStreamInput,
    SplitShardInput,
    StartStreamEncryptionInput,
    StopStreamEncryptionInput,
    UpdateShardCountInput,
    UpdateStreamModeInput,
    DescribeStreamOutput,
    DescribeStreamSummaryOutput,
    EnhancedMonitoringOutput,
    GetRecordsOutput,
    GetShardIteratorOutput,
    ListStreamConsumersOutput,
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

export default class extends aws.kinesis.Stream {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.kinesis.Stream>) {
        super(...args)
        this.client = new awssdk.Kinesis()
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

    invokeAddTagsToStream(partialParams: ToOptional<{
      [K in keyof AddTagsToStreamInput & keyof AddTagsToStreamInput & keyof AddTagsToStreamInput & keyof AddTagsToStreamInput]: (AddTagsToStreamInput & AddTagsToStreamInput & AddTagsToStreamInput & AddTagsToStreamInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToStream(
          this.ops["AddTagsToStream"].applicator.apply(partialParams)
        );
    }

    invokeCreateStream(partialParams: ToOptional<{
      [K in keyof CreateStreamInput & keyof CreateStreamInput & keyof CreateStreamInput & keyof CreateStreamInput]: (CreateStreamInput & CreateStreamInput & CreateStreamInput & CreateStreamInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStream(
          this.ops["CreateStream"].applicator.apply(partialParams)
        );
    }

    invokeDecreaseStreamRetentionPeriod(partialParams: ToOptional<{
      [K in keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput]: (DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseStreamRetentionPeriod(
          this.ops["DecreaseStreamRetentionPeriod"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStream(partialParams: ToOptional<{
      [K in keyof DeleteStreamInput & keyof DeleteStreamInput & keyof DeleteStreamInput & keyof DeleteStreamInput]: (DeleteStreamInput & DeleteStreamInput & DeleteStreamInput & DeleteStreamInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStream(
          this.ops["DeleteStream"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamInput & keyof DescribeStreamInput & keyof DescribeStreamInput & keyof DescribeStreamInput]: (DescribeStreamInput & DescribeStreamInput & DescribeStreamInput & DescribeStreamInput)[K]
    }>): Request<DescribeStreamOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStream(
          this.ops["DescribeStream"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStreamSummary(partialParams: ToOptional<{
      [K in keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput]: (DescribeStreamSummaryInput & DescribeStreamSummaryInput & DescribeStreamSummaryInput & DescribeStreamSummaryInput)[K]
    }>): Request<DescribeStreamSummaryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStreamSummary(
          this.ops["DescribeStreamSummary"].applicator.apply(partialParams)
        );
    }

    invokeDisableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput]: (DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput)[K]
    }>): Request<EnhancedMonitoringOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableEnhancedMonitoring(
          this.ops["DisableEnhancedMonitoring"].applicator.apply(partialParams)
        );
    }

    invokeEnableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput]: (EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput)[K]
    }>): Request<EnhancedMonitoringOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableEnhancedMonitoring(
          this.ops["EnableEnhancedMonitoring"].applicator.apply(partialParams)
        );
    }

    invokeGetRecords(partialParams: ToOptional<{
      [K in keyof GetRecordsInput & keyof GetRecordsInput & keyof GetRecordsInput & keyof GetRecordsInput]: (GetRecordsInput & GetRecordsInput & GetRecordsInput & GetRecordsInput)[K]
    }>): Request<GetRecordsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRecords(
          this.ops["GetRecords"].applicator.apply(partialParams)
        );
    }

    invokeGetShardIterator(partialParams: ToOptional<{
      [K in keyof GetShardIteratorInput & keyof GetShardIteratorInput & keyof GetShardIteratorInput & keyof GetShardIteratorInput]: (GetShardIteratorInput & GetShardIteratorInput & GetShardIteratorInput & GetShardIteratorInput)[K]
    }>): Request<GetShardIteratorOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getShardIterator(
          this.ops["GetShardIterator"].applicator.apply(partialParams)
        );
    }

    invokeIncreaseStreamRetentionPeriod(partialParams: ToOptional<{
      [K in keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput]: (IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseStreamRetentionPeriod(
          this.ops["IncreaseStreamRetentionPeriod"].applicator.apply(partialParams)
        );
    }

    invokeListStreamConsumers(partialParams: ToOptional<{
      [K in keyof ListStreamConsumersInput & keyof ListStreamConsumersInput & keyof ListStreamConsumersInput & keyof ListStreamConsumersInput]: (ListStreamConsumersInput & ListStreamConsumersInput & ListStreamConsumersInput & ListStreamConsumersInput)[K]
    }>): Request<ListStreamConsumersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStreamConsumers(
          this.ops["ListStreamConsumers"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForStream(partialParams: ToOptional<{
      [K in keyof ListTagsForStreamInput & keyof ListTagsForStreamInput & keyof ListTagsForStreamInput & keyof ListTagsForStreamInput]: (ListTagsForStreamInput & ListTagsForStreamInput & ListTagsForStreamInput & ListTagsForStreamInput)[K]
    }>): Request<ListTagsForStreamOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForStream(
          this.ops["ListTagsForStream"].applicator.apply(partialParams)
        );
    }

    invokeMergeShards(partialParams: ToOptional<{
      [K in keyof MergeShardsInput & keyof MergeShardsInput & keyof MergeShardsInput & keyof MergeShardsInput]: (MergeShardsInput & MergeShardsInput & MergeShardsInput & MergeShardsInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeShards(
          this.ops["MergeShards"].applicator.apply(partialParams)
        );
    }

    invokePutRecord(partialParams: ToOptional<{
      [K in keyof PutRecordInput & keyof PutRecordInput & keyof PutRecordInput & keyof PutRecordInput]: (PutRecordInput & PutRecordInput & PutRecordInput & PutRecordInput)[K]
    }>): Request<PutRecordOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRecord(
          this.ops["PutRecord"].applicator.apply(partialParams)
        );
    }

    invokePutRecords(partialParams: ToOptional<{
      [K in keyof PutRecordsInput & keyof PutRecordsInput & keyof PutRecordsInput & keyof PutRecordsInput]: (PutRecordsInput & PutRecordsInput & PutRecordsInput & PutRecordsInput)[K]
    }>): Request<PutRecordsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRecords(
          this.ops["PutRecords"].applicator.apply(partialParams)
        );
    }

    invokeRegisterStreamConsumer(partialParams: ToOptional<{
      [K in keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput]: (RegisterStreamConsumerInput & RegisterStreamConsumerInput & RegisterStreamConsumerInput & RegisterStreamConsumerInput)[K]
    }>): Request<RegisterStreamConsumerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerStreamConsumer(
          this.ops["RegisterStreamConsumer"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromStream(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput]: (RemoveTagsFromStreamInput & RemoveTagsFromStreamInput & RemoveTagsFromStreamInput & RemoveTagsFromStreamInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromStream(
          this.ops["RemoveTagsFromStream"].applicator.apply(partialParams)
        );
    }

    invokeSplitShard(partialParams: ToOptional<{
      [K in keyof SplitShardInput & keyof SplitShardInput & keyof SplitShardInput & keyof SplitShardInput]: (SplitShardInput & SplitShardInput & SplitShardInput & SplitShardInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.splitShard(
          this.ops["SplitShard"].applicator.apply(partialParams)
        );
    }

    invokeStartStreamEncryption(partialParams: ToOptional<{
      [K in keyof StartStreamEncryptionInput & keyof Omit<StartStreamEncryptionInput, "EncryptionType"> & keyof StartStreamEncryptionInput & keyof StartStreamEncryptionInput]: (StartStreamEncryptionInput & Omit<StartStreamEncryptionInput, "EncryptionType"> & StartStreamEncryptionInput & StartStreamEncryptionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startStreamEncryption(
          this.ops["StartStreamEncryption"].applicator.apply(partialParams)
        );
    }

    invokeStopStreamEncryption(partialParams: ToOptional<{
      [K in keyof StopStreamEncryptionInput & keyof Omit<StopStreamEncryptionInput, "EncryptionType"> & keyof StopStreamEncryptionInput & keyof StopStreamEncryptionInput]: (StopStreamEncryptionInput & Omit<StopStreamEncryptionInput, "EncryptionType"> & StopStreamEncryptionInput & StopStreamEncryptionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopStreamEncryption(
          this.ops["StopStreamEncryption"].applicator.apply(partialParams)
        );
    }

    invokeUpdateShardCount(partialParams: ToOptional<{
      [K in keyof UpdateShardCountInput & keyof UpdateShardCountInput & keyof UpdateShardCountInput & keyof UpdateShardCountInput]: (UpdateShardCountInput & UpdateShardCountInput & UpdateShardCountInput & UpdateShardCountInput)[K]
    }>): Request<UpdateShardCountOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateShardCount(
          this.ops["UpdateShardCount"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStreamMode(partialParams: ToOptional<{
      [K in keyof UpdateStreamModeInput & keyof UpdateStreamModeInput & keyof UpdateStreamModeInput & keyof UpdateStreamModeInput]: (UpdateStreamModeInput & UpdateStreamModeInput & UpdateStreamModeInput & UpdateStreamModeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStreamMode(
          this.ops["UpdateStreamMode"].applicator.apply(partialParams)
        );
    }
}