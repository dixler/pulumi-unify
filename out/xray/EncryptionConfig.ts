
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchGetTracesRequest,
    CreateGroupRequest,
    CreateSamplingRuleRequest,
    GetInsightRequest,
    GetInsightEventsRequest,
    GetInsightImpactGraphRequest,
    GetInsightSummariesRequest,
    GetSamplingTargetsRequest,
    GetServiceGraphRequest,
    GetTimeSeriesServiceStatisticsRequest,
    GetTraceGraphRequest,
    GetTraceSummariesRequest,
    ListTagsForResourceRequest,
    PutEncryptionConfigRequest,
    PutTelemetryRecordsRequest,
    PutTraceSegmentsRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateSamplingRuleRequest,
    BatchGetTracesResult,
    CreateGroupResult,
    CreateSamplingRuleResult,
    GetInsightResult,
    GetInsightEventsResult,
    GetInsightImpactGraphResult,
    GetInsightSummariesResult,
    GetSamplingTargetsResult,
    GetServiceGraphResult,
    GetTimeSeriesServiceStatisticsResult,
    GetTraceGraphResult,
    GetTraceSummariesResult,
    ListTagsForResourceResponse,
    PutEncryptionConfigResult,
    PutTelemetryRecordsResult,
    PutTraceSegmentsResult,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateSamplingRuleResult
} from "aws-sdk/clients/xray";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.xray.EncryptionConfig {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.xray.EncryptionConfig>) {
        super(...args)
        this.client = new awssdk.XRay()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/xray-2016-04-12.normal.json"), this.client)
    }

    invokeBatchGetTraces(partialParams: ToOptional<{
      [K in keyof BatchGetTracesRequest & keyof BatchGetTracesRequest]: (BatchGetTracesRequest & BatchGetTracesRequest)[K]
    }>): BatchGetTracesResult {
        return this.client.batchGetTraces(
            this.ops["BatchGetTraces"].apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof CreateGroupRequest]: (CreateGroupRequest & CreateGroupRequest)[K]
    }>): CreateGroupResult {
        return this.client.createGroup(
            this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateSamplingRule(partialParams: ToOptional<{
      [K in keyof CreateSamplingRuleRequest & keyof CreateSamplingRuleRequest]: (CreateSamplingRuleRequest & CreateSamplingRuleRequest)[K]
    }>): CreateSamplingRuleResult {
        return this.client.createSamplingRule(
            this.ops["CreateSamplingRule"].apply(partialParams)
        );
    }

    invokeGetInsight(partialParams: ToOptional<{
      [K in keyof GetInsightRequest & keyof GetInsightRequest]: (GetInsightRequest & GetInsightRequest)[K]
    }>): GetInsightResult {
        return this.client.getInsight(
            this.ops["GetInsight"].apply(partialParams)
        );
    }

    invokeGetInsightEvents(partialParams: ToOptional<{
      [K in keyof GetInsightEventsRequest & keyof GetInsightEventsRequest]: (GetInsightEventsRequest & GetInsightEventsRequest)[K]
    }>): GetInsightEventsResult {
        return this.client.getInsightEvents(
            this.ops["GetInsightEvents"].apply(partialParams)
        );
    }

    invokeGetInsightImpactGraph(partialParams: ToOptional<{
      [K in keyof GetInsightImpactGraphRequest & keyof GetInsightImpactGraphRequest]: (GetInsightImpactGraphRequest & GetInsightImpactGraphRequest)[K]
    }>): GetInsightImpactGraphResult {
        return this.client.getInsightImpactGraph(
            this.ops["GetInsightImpactGraph"].apply(partialParams)
        );
    }

    invokeGetInsightSummaries(partialParams: ToOptional<{
      [K in keyof GetInsightSummariesRequest & keyof GetInsightSummariesRequest]: (GetInsightSummariesRequest & GetInsightSummariesRequest)[K]
    }>): GetInsightSummariesResult {
        return this.client.getInsightSummaries(
            this.ops["GetInsightSummaries"].apply(partialParams)
        );
    }

    invokeGetSamplingTargets(partialParams: ToOptional<{
      [K in keyof GetSamplingTargetsRequest & keyof GetSamplingTargetsRequest]: (GetSamplingTargetsRequest & GetSamplingTargetsRequest)[K]
    }>): GetSamplingTargetsResult {
        return this.client.getSamplingTargets(
            this.ops["GetSamplingTargets"].apply(partialParams)
        );
    }

    invokeGetServiceGraph(partialParams: ToOptional<{
      [K in keyof GetServiceGraphRequest & keyof GetServiceGraphRequest]: (GetServiceGraphRequest & GetServiceGraphRequest)[K]
    }>): GetServiceGraphResult {
        return this.client.getServiceGraph(
            this.ops["GetServiceGraph"].apply(partialParams)
        );
    }

    invokeGetTimeSeriesServiceStatistics(partialParams: ToOptional<{
      [K in keyof GetTimeSeriesServiceStatisticsRequest & keyof GetTimeSeriesServiceStatisticsRequest]: (GetTimeSeriesServiceStatisticsRequest & GetTimeSeriesServiceStatisticsRequest)[K]
    }>): GetTimeSeriesServiceStatisticsResult {
        return this.client.getTimeSeriesServiceStatistics(
            this.ops["GetTimeSeriesServiceStatistics"].apply(partialParams)
        );
    }

    invokeGetTraceGraph(partialParams: ToOptional<{
      [K in keyof GetTraceGraphRequest & keyof GetTraceGraphRequest]: (GetTraceGraphRequest & GetTraceGraphRequest)[K]
    }>): GetTraceGraphResult {
        return this.client.getTraceGraph(
            this.ops["GetTraceGraph"].apply(partialParams)
        );
    }

    invokeGetTraceSummaries(partialParams: ToOptional<{
      [K in keyof GetTraceSummariesRequest & keyof GetTraceSummariesRequest]: (GetTraceSummariesRequest & GetTraceSummariesRequest)[K]
    }>): GetTraceSummariesResult {
        return this.client.getTraceSummaries(
            this.ops["GetTraceSummaries"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutEncryptionConfig(partialParams: ToOptional<{
      [K in keyof PutEncryptionConfigRequest & keyof Omit<PutEncryptionConfigRequest, "Type">]: (PutEncryptionConfigRequest & Omit<PutEncryptionConfigRequest, "Type">)[K]
    }>): PutEncryptionConfigResult {
        return this.client.putEncryptionConfig(
            this.ops["PutEncryptionConfig"].apply(partialParams)
        );
    }

    invokePutTelemetryRecords(partialParams: ToOptional<{
      [K in keyof PutTelemetryRecordsRequest & keyof PutTelemetryRecordsRequest]: (PutTelemetryRecordsRequest & PutTelemetryRecordsRequest)[K]
    }>): PutTelemetryRecordsResult {
        return this.client.putTelemetryRecords(
            this.ops["PutTelemetryRecords"].apply(partialParams)
        );
    }

    invokePutTraceSegments(partialParams: ToOptional<{
      [K in keyof PutTraceSegmentsRequest & keyof PutTraceSegmentsRequest]: (PutTraceSegmentsRequest & PutTraceSegmentsRequest)[K]
    }>): PutTraceSegmentsResult {
        return this.client.putTraceSegments(
            this.ops["PutTraceSegments"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateSamplingRule(partialParams: ToOptional<{
      [K in keyof UpdateSamplingRuleRequest & keyof UpdateSamplingRuleRequest]: (UpdateSamplingRuleRequest & UpdateSamplingRuleRequest)[K]
    }>): UpdateSamplingRuleResult {
        return this.client.updateSamplingRule(
            this.ops["UpdateSamplingRule"].apply(partialParams)
        );
    }
}