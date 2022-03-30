
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kinesis.FirehoseDeliveryStream {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.kinesis.FirehoseDeliveryStream>) {
        super(...args)
        this.client = new awssdk.Kinesis()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/kinesis-2013-12-02.normal.json"), this.client)
    }

    invokeAddTagsToStream(partialParams: ToOptional<{
      [K in keyof AddTagsToStreamInput & keyof AddTagsToStreamInput & keyof AddTagsToStreamInput & keyof AddTagsToStreamInput & keyof AddTagsToStreamInput]: (AddTagsToStreamInput & AddTagsToStreamInput & AddTagsToStreamInput & AddTagsToStreamInput & AddTagsToStreamInput)[K]
    }>): void {
        return this.client.addTagsToStream(
            this.ops["AddTagsToStream"].apply(partialParams)
        );
    }

    invokeCreateStream(partialParams: ToOptional<{
      [K in keyof CreateStreamInput & keyof CreateStreamInput & keyof CreateStreamInput & keyof CreateStreamInput & keyof CreateStreamInput]: (CreateStreamInput & CreateStreamInput & CreateStreamInput & CreateStreamInput & CreateStreamInput)[K]
    }>): void {
        return this.client.createStream(
            this.ops["CreateStream"].apply(partialParams)
        );
    }

    invokeDecreaseStreamRetentionPeriod(partialParams: ToOptional<{
      [K in keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput & keyof DecreaseStreamRetentionPeriodInput]: (DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput & DecreaseStreamRetentionPeriodInput)[K]
    }>): void {
        return this.client.decreaseStreamRetentionPeriod(
            this.ops["DecreaseStreamRetentionPeriod"].apply(partialParams)
        );
    }

    invokeDeleteStream(partialParams: ToOptional<{
      [K in keyof DeleteStreamInput & keyof DeleteStreamInput & keyof DeleteStreamInput & keyof DeleteStreamInput & keyof DeleteStreamInput]: (DeleteStreamInput & DeleteStreamInput & DeleteStreamInput & DeleteStreamInput & DeleteStreamInput)[K]
    }>): void {
        return this.client.deleteStream(
            this.ops["DeleteStream"].apply(partialParams)
        );
    }

    invokeDescribeStream(partialParams: ToOptional<{
      [K in keyof DescribeStreamInput & keyof DescribeStreamInput & keyof DescribeStreamInput & keyof DescribeStreamInput & keyof DescribeStreamInput]: (DescribeStreamInput & DescribeStreamInput & DescribeStreamInput & DescribeStreamInput & DescribeStreamInput)[K]
    }>): DescribeStreamOutput {
        return this.client.describeStream(
            this.ops["DescribeStream"].apply(partialParams)
        );
    }

    invokeDescribeStreamSummary(partialParams: ToOptional<{
      [K in keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput & keyof DescribeStreamSummaryInput]: (DescribeStreamSummaryInput & DescribeStreamSummaryInput & DescribeStreamSummaryInput & DescribeStreamSummaryInput & DescribeStreamSummaryInput)[K]
    }>): DescribeStreamSummaryOutput {
        return this.client.describeStreamSummary(
            this.ops["DescribeStreamSummary"].apply(partialParams)
        );
    }

    invokeDisableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput & keyof DisableEnhancedMonitoringInput]: (DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput & DisableEnhancedMonitoringInput)[K]
    }>): EnhancedMonitoringOutput {
        return this.client.disableEnhancedMonitoring(
            this.ops["DisableEnhancedMonitoring"].apply(partialParams)
        );
    }

    invokeEnableEnhancedMonitoring(partialParams: ToOptional<{
      [K in keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput & keyof EnableEnhancedMonitoringInput]: (EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput & EnableEnhancedMonitoringInput)[K]
    }>): EnhancedMonitoringOutput {
        return this.client.enableEnhancedMonitoring(
            this.ops["EnableEnhancedMonitoring"].apply(partialParams)
        );
    }

    invokeGetRecords(partialParams: ToOptional<{
      [K in keyof GetRecordsInput & keyof GetRecordsInput & keyof GetRecordsInput & keyof GetRecordsInput & keyof GetRecordsInput]: (GetRecordsInput & GetRecordsInput & GetRecordsInput & GetRecordsInput & GetRecordsInput)[K]
    }>): GetRecordsOutput {
        return this.client.getRecords(
            this.ops["GetRecords"].apply(partialParams)
        );
    }

    invokeGetShardIterator(partialParams: ToOptional<{
      [K in keyof GetShardIteratorInput & keyof GetShardIteratorInput & keyof GetShardIteratorInput & keyof GetShardIteratorInput & keyof GetShardIteratorInput]: (GetShardIteratorInput & GetShardIteratorInput & GetShardIteratorInput & GetShardIteratorInput & GetShardIteratorInput)[K]
    }>): GetShardIteratorOutput {
        return this.client.getShardIterator(
            this.ops["GetShardIterator"].apply(partialParams)
        );
    }

    invokeIncreaseStreamRetentionPeriod(partialParams: ToOptional<{
      [K in keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput & keyof IncreaseStreamRetentionPeriodInput]: (IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput & IncreaseStreamRetentionPeriodInput)[K]
    }>): void {
        return this.client.increaseStreamRetentionPeriod(
            this.ops["IncreaseStreamRetentionPeriod"].apply(partialParams)
        );
    }

    invokeListStreamConsumers(partialParams: ToOptional<{
      [K in keyof ListStreamConsumersInput & keyof ListStreamConsumersInput & keyof ListStreamConsumersInput & keyof ListStreamConsumersInput & keyof ListStreamConsumersInput]: (ListStreamConsumersInput & ListStreamConsumersInput & ListStreamConsumersInput & ListStreamConsumersInput & ListStreamConsumersInput)[K]
    }>): ListStreamConsumersOutput {
        return this.client.listStreamConsumers(
            this.ops["ListStreamConsumers"].apply(partialParams)
        );
    }

    invokeListTagsForStream(partialParams: ToOptional<{
      [K in keyof ListTagsForStreamInput & keyof ListTagsForStreamInput & keyof ListTagsForStreamInput & keyof ListTagsForStreamInput & keyof ListTagsForStreamInput]: (ListTagsForStreamInput & ListTagsForStreamInput & ListTagsForStreamInput & ListTagsForStreamInput & ListTagsForStreamInput)[K]
    }>): ListTagsForStreamOutput {
        return this.client.listTagsForStream(
            this.ops["ListTagsForStream"].apply(partialParams)
        );
    }

    invokeMergeShards(partialParams: ToOptional<{
      [K in keyof MergeShardsInput & keyof MergeShardsInput & keyof MergeShardsInput & keyof MergeShardsInput & keyof MergeShardsInput]: (MergeShardsInput & MergeShardsInput & MergeShardsInput & MergeShardsInput & MergeShardsInput)[K]
    }>): void {
        return this.client.mergeShards(
            this.ops["MergeShards"].apply(partialParams)
        );
    }

    invokePutRecord(partialParams: ToOptional<{
      [K in keyof PutRecordInput & keyof PutRecordInput & keyof PutRecordInput & keyof PutRecordInput & keyof PutRecordInput]: (PutRecordInput & PutRecordInput & PutRecordInput & PutRecordInput & PutRecordInput)[K]
    }>): PutRecordOutput {
        return this.client.putRecord(
            this.ops["PutRecord"].apply(partialParams)
        );
    }

    invokePutRecords(partialParams: ToOptional<{
      [K in keyof PutRecordsInput & keyof PutRecordsInput & keyof PutRecordsInput & keyof PutRecordsInput & keyof PutRecordsInput]: (PutRecordsInput & PutRecordsInput & PutRecordsInput & PutRecordsInput & PutRecordsInput)[K]
    }>): PutRecordsOutput {
        return this.client.putRecords(
            this.ops["PutRecords"].apply(partialParams)
        );
    }

    invokeRegisterStreamConsumer(partialParams: ToOptional<{
      [K in keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput & keyof RegisterStreamConsumerInput]: (RegisterStreamConsumerInput & RegisterStreamConsumerInput & RegisterStreamConsumerInput & RegisterStreamConsumerInput & RegisterStreamConsumerInput)[K]
    }>): RegisterStreamConsumerOutput {
        return this.client.registerStreamConsumer(
            this.ops["RegisterStreamConsumer"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromStream(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput & keyof RemoveTagsFromStreamInput]: (RemoveTagsFromStreamInput & RemoveTagsFromStreamInput & RemoveTagsFromStreamInput & RemoveTagsFromStreamInput & RemoveTagsFromStreamInput)[K]
    }>): void {
        return this.client.removeTagsFromStream(
            this.ops["RemoveTagsFromStream"].apply(partialParams)
        );
    }

    invokeSplitShard(partialParams: ToOptional<{
      [K in keyof SplitShardInput & keyof SplitShardInput & keyof SplitShardInput & keyof SplitShardInput & keyof SplitShardInput]: (SplitShardInput & SplitShardInput & SplitShardInput & SplitShardInput & SplitShardInput)[K]
    }>): void {
        return this.client.splitShard(
            this.ops["SplitShard"].apply(partialParams)
        );
    }

    invokeStartStreamEncryption(partialParams: ToOptional<{
      [K in keyof StartStreamEncryptionInput & keyof StartStreamEncryptionInput & keyof StartStreamEncryptionInput & keyof StartStreamEncryptionInput & keyof StartStreamEncryptionInput]: (StartStreamEncryptionInput & StartStreamEncryptionInput & StartStreamEncryptionInput & StartStreamEncryptionInput & StartStreamEncryptionInput)[K]
    }>): void {
        return this.client.startStreamEncryption(
            this.ops["StartStreamEncryption"].apply(partialParams)
        );
    }

    invokeStopStreamEncryption(partialParams: ToOptional<{
      [K in keyof StopStreamEncryptionInput & keyof StopStreamEncryptionInput & keyof StopStreamEncryptionInput & keyof StopStreamEncryptionInput & keyof StopStreamEncryptionInput]: (StopStreamEncryptionInput & StopStreamEncryptionInput & StopStreamEncryptionInput & StopStreamEncryptionInput & StopStreamEncryptionInput)[K]
    }>): void {
        return this.client.stopStreamEncryption(
            this.ops["StopStreamEncryption"].apply(partialParams)
        );
    }

    invokeUpdateShardCount(partialParams: ToOptional<{
      [K in keyof UpdateShardCountInput & keyof UpdateShardCountInput & keyof UpdateShardCountInput & keyof UpdateShardCountInput & keyof UpdateShardCountInput]: (UpdateShardCountInput & UpdateShardCountInput & UpdateShardCountInput & UpdateShardCountInput & UpdateShardCountInput)[K]
    }>): UpdateShardCountOutput {
        return this.client.updateShardCount(
            this.ops["UpdateShardCount"].apply(partialParams)
        );
    }

    invokeUpdateStreamMode(partialParams: ToOptional<{
      [K in keyof UpdateStreamModeInput & keyof UpdateStreamModeInput & keyof UpdateStreamModeInput & keyof UpdateStreamModeInput & keyof UpdateStreamModeInput]: (UpdateStreamModeInput & UpdateStreamModeInput & UpdateStreamModeInput & UpdateStreamModeInput & UpdateStreamModeInput)[K]
    }>): void {
        return this.client.updateStreamMode(
            this.ops["UpdateStreamMode"].apply(partialParams)
        );
    }
}