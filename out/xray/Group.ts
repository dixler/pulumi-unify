
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/xray-2016-04-12.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.xray.Group {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.xray.Group>) {
        super(...args)
        this.client = new awssdk.XRay()
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

    invokeBatchGetTraces(partialParams: ToOptional<{
      [K in keyof BatchGetTracesRequest & keyof BatchGetTracesRequest & keyof BatchGetTracesRequest]: (BatchGetTracesRequest & BatchGetTracesRequest & BatchGetTracesRequest)[K]
    }>): Request<BatchGetTracesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetTraces(
          this.ops["BatchGetTraces"].applicator.apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof CreateGroupRequest & keyof CreateGroupRequest]: (CreateGroupRequest & CreateGroupRequest & CreateGroupRequest)[K]
    }>): Request<CreateGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSamplingRule(partialParams: ToOptional<{
      [K in keyof CreateSamplingRuleRequest & keyof CreateSamplingRuleRequest & keyof CreateSamplingRuleRequest]: (CreateSamplingRuleRequest & CreateSamplingRuleRequest & CreateSamplingRuleRequest)[K]
    }>): Request<CreateSamplingRuleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSamplingRule(
          this.ops["CreateSamplingRule"].applicator.apply(partialParams)
        );
    }

    invokeGetInsight(partialParams: ToOptional<{
      [K in keyof GetInsightRequest & keyof GetInsightRequest & keyof GetInsightRequest]: (GetInsightRequest & GetInsightRequest & GetInsightRequest)[K]
    }>): Request<GetInsightResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsight(
          this.ops["GetInsight"].applicator.apply(partialParams)
        );
    }

    invokeGetInsightEvents(partialParams: ToOptional<{
      [K in keyof GetInsightEventsRequest & keyof GetInsightEventsRequest & keyof GetInsightEventsRequest]: (GetInsightEventsRequest & GetInsightEventsRequest & GetInsightEventsRequest)[K]
    }>): Request<GetInsightEventsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsightEvents(
          this.ops["GetInsightEvents"].applicator.apply(partialParams)
        );
    }

    invokeGetInsightImpactGraph(partialParams: ToOptional<{
      [K in keyof GetInsightImpactGraphRequest & keyof GetInsightImpactGraphRequest & keyof GetInsightImpactGraphRequest]: (GetInsightImpactGraphRequest & GetInsightImpactGraphRequest & GetInsightImpactGraphRequest)[K]
    }>): Request<GetInsightImpactGraphResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsightImpactGraph(
          this.ops["GetInsightImpactGraph"].applicator.apply(partialParams)
        );
    }

    invokeGetInsightSummaries(partialParams: ToOptional<{
      [K in keyof GetInsightSummariesRequest & keyof GetInsightSummariesRequest & keyof GetInsightSummariesRequest]: (GetInsightSummariesRequest & GetInsightSummariesRequest & GetInsightSummariesRequest)[K]
    }>): Request<GetInsightSummariesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsightSummaries(
          this.ops["GetInsightSummaries"].applicator.apply(partialParams)
        );
    }

    invokeGetSamplingTargets(partialParams: ToOptional<{
      [K in keyof GetSamplingTargetsRequest & keyof GetSamplingTargetsRequest & keyof GetSamplingTargetsRequest]: (GetSamplingTargetsRequest & GetSamplingTargetsRequest & GetSamplingTargetsRequest)[K]
    }>): Request<GetSamplingTargetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSamplingTargets(
          this.ops["GetSamplingTargets"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceGraph(partialParams: ToOptional<{
      [K in keyof GetServiceGraphRequest & keyof GetServiceGraphRequest & keyof GetServiceGraphRequest]: (GetServiceGraphRequest & GetServiceGraphRequest & GetServiceGraphRequest)[K]
    }>): Request<GetServiceGraphResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceGraph(
          this.ops["GetServiceGraph"].applicator.apply(partialParams)
        );
    }

    invokeGetTimeSeriesServiceStatistics(partialParams: ToOptional<{
      [K in keyof GetTimeSeriesServiceStatisticsRequest & keyof GetTimeSeriesServiceStatisticsRequest & keyof GetTimeSeriesServiceStatisticsRequest]: (GetTimeSeriesServiceStatisticsRequest & GetTimeSeriesServiceStatisticsRequest & GetTimeSeriesServiceStatisticsRequest)[K]
    }>): Request<GetTimeSeriesServiceStatisticsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTimeSeriesServiceStatistics(
          this.ops["GetTimeSeriesServiceStatistics"].applicator.apply(partialParams)
        );
    }

    invokeGetTraceGraph(partialParams: ToOptional<{
      [K in keyof GetTraceGraphRequest & keyof GetTraceGraphRequest & keyof GetTraceGraphRequest]: (GetTraceGraphRequest & GetTraceGraphRequest & GetTraceGraphRequest)[K]
    }>): Request<GetTraceGraphResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTraceGraph(
          this.ops["GetTraceGraph"].applicator.apply(partialParams)
        );
    }

    invokeGetTraceSummaries(partialParams: ToOptional<{
      [K in keyof GetTraceSummariesRequest & keyof GetTraceSummariesRequest & keyof GetTraceSummariesRequest]: (GetTraceSummariesRequest & GetTraceSummariesRequest & GetTraceSummariesRequest)[K]
    }>): Request<GetTraceSummariesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTraceSummaries(
          this.ops["GetTraceSummaries"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutEncryptionConfig(partialParams: ToOptional<{
      [K in keyof PutEncryptionConfigRequest & keyof PutEncryptionConfigRequest & keyof PutEncryptionConfigRequest]: (PutEncryptionConfigRequest & PutEncryptionConfigRequest & PutEncryptionConfigRequest)[K]
    }>): Request<PutEncryptionConfigResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEncryptionConfig(
          this.ops["PutEncryptionConfig"].applicator.apply(partialParams)
        );
    }

    invokePutTelemetryRecords(partialParams: ToOptional<{
      [K in keyof PutTelemetryRecordsRequest & keyof PutTelemetryRecordsRequest & keyof PutTelemetryRecordsRequest]: (PutTelemetryRecordsRequest & PutTelemetryRecordsRequest & PutTelemetryRecordsRequest)[K]
    }>): Request<PutTelemetryRecordsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putTelemetryRecords(
          this.ops["PutTelemetryRecords"].applicator.apply(partialParams)
        );
    }

    invokePutTraceSegments(partialParams: ToOptional<{
      [K in keyof PutTraceSegmentsRequest & keyof PutTraceSegmentsRequest & keyof PutTraceSegmentsRequest]: (PutTraceSegmentsRequest & PutTraceSegmentsRequest & PutTraceSegmentsRequest)[K]
    }>): Request<PutTraceSegmentsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putTraceSegments(
          this.ops["PutTraceSegments"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSamplingRule(partialParams: ToOptional<{
      [K in keyof UpdateSamplingRuleRequest & keyof UpdateSamplingRuleRequest & keyof UpdateSamplingRuleRequest]: (UpdateSamplingRuleRequest & UpdateSamplingRuleRequest & UpdateSamplingRuleRequest)[K]
    }>): Request<UpdateSamplingRuleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSamplingRule(
          this.ops["UpdateSamplingRule"].applicator.apply(partialParams)
        );
    }
}