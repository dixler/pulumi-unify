
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchGetTracesRequest,
    CreateGroupRequest,
    CreateSamplingRuleRequest,
    DeleteGroupRequest,
    DeleteSamplingRuleRequest,
    GetEncryptionConfigRequest,
    GetGroupRequest,
    GetGroupsRequest,
    GetInsightRequest,
    GetInsightEventsRequest,
    GetInsightImpactGraphRequest,
    GetInsightSummariesRequest,
    GetSamplingRulesRequest,
    GetSamplingStatisticSummariesRequest,
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
    UpdateGroupRequest,
    UpdateSamplingRuleRequest,
    BatchGetTracesResult,
    CreateGroupResult,
    CreateSamplingRuleResult,
    DeleteGroupResult,
    DeleteSamplingRuleResult,
    GetEncryptionConfigResult,
    GetGroupResult,
    GetGroupsResult,
    GetInsightResult,
    GetInsightEventsResult,
    GetInsightImpactGraphResult,
    GetInsightSummariesResult,
    GetSamplingRulesResult,
    GetSamplingStatisticSummariesResult,
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
    UpdateGroupResult,
    UpdateSamplingRuleResult
} from "aws-sdk/clients/xray";
const schema = require("../apis/xray-2016-04-12.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.xray.SamplingRule {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.xray.SamplingRule>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.XRay()
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

    invokeBatchGetTraces(partialParams: ToOptional<{
      [K in keyof BatchGetTracesRequest]: (BatchGetTracesRequest)[K]
    }>): Request<BatchGetTracesResult, AWSError> {
        this.boot();
        return this.client.batchGetTraces(
          this.ops["BatchGetTraces"].apply(partialParams)
        );
    }

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest]: (CreateGroupRequest)[K]
    }>): Request<CreateGroupResult, AWSError> {
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateSamplingRule(partialParams: ToOptional<{
      [K in keyof CreateSamplingRuleRequest]: (CreateSamplingRuleRequest)[K]
    }>): Request<CreateSamplingRuleResult, AWSError> {
        this.boot();
        return this.client.createSamplingRule(
          this.ops["CreateSamplingRule"].apply(partialParams)
        );
    }

    invokeDeleteGroup(partialParams: ToOptional<{
      [K in keyof DeleteGroupRequest]: (DeleteGroupRequest)[K]
    }>): Request<DeleteGroupResult, AWSError> {
        this.boot();
        return this.client.deleteGroup(
          this.ops["DeleteGroup"].apply(partialParams)
        );
    }

    invokeDeleteSamplingRule(partialParams: ToOptional<{
      [K in keyof DeleteSamplingRuleRequest]: (DeleteSamplingRuleRequest)[K]
    }>): Request<DeleteSamplingRuleResult, AWSError> {
        this.boot();
        return this.client.deleteSamplingRule(
          this.ops["DeleteSamplingRule"].apply(partialParams)
        );
    }

    invokeGetEncryptionConfig(partialParams: ToOptional<{
      [K in keyof GetEncryptionConfigRequest]: (GetEncryptionConfigRequest)[K]
    }>): Request<GetEncryptionConfigResult, AWSError> {
        this.boot();
        return this.client.getEncryptionConfig(
          this.ops["GetEncryptionConfig"].apply(partialParams)
        );
    }

    invokeGetGroup(partialParams: ToOptional<{
      [K in keyof GetGroupRequest]: (GetGroupRequest)[K]
    }>): Request<GetGroupResult, AWSError> {
        this.boot();
        return this.client.getGroup(
          this.ops["GetGroup"].apply(partialParams)
        );
    }

    invokeGetGroups(partialParams: ToOptional<{
      [K in keyof GetGroupsRequest]: (GetGroupsRequest)[K]
    }>): Request<GetGroupsResult, AWSError> {
        this.boot();
        return this.client.getGroups(
          this.ops["GetGroups"].apply(partialParams)
        );
    }

    invokeGetInsight(partialParams: ToOptional<{
      [K in keyof GetInsightRequest]: (GetInsightRequest)[K]
    }>): Request<GetInsightResult, AWSError> {
        this.boot();
        return this.client.getInsight(
          this.ops["GetInsight"].apply(partialParams)
        );
    }

    invokeGetInsightEvents(partialParams: ToOptional<{
      [K in keyof GetInsightEventsRequest]: (GetInsightEventsRequest)[K]
    }>): Request<GetInsightEventsResult, AWSError> {
        this.boot();
        return this.client.getInsightEvents(
          this.ops["GetInsightEvents"].apply(partialParams)
        );
    }

    invokeGetInsightImpactGraph(partialParams: ToOptional<{
      [K in keyof GetInsightImpactGraphRequest]: (GetInsightImpactGraphRequest)[K]
    }>): Request<GetInsightImpactGraphResult, AWSError> {
        this.boot();
        return this.client.getInsightImpactGraph(
          this.ops["GetInsightImpactGraph"].apply(partialParams)
        );
    }

    invokeGetInsightSummaries(partialParams: ToOptional<{
      [K in keyof GetInsightSummariesRequest]: (GetInsightSummariesRequest)[K]
    }>): Request<GetInsightSummariesResult, AWSError> {
        this.boot();
        return this.client.getInsightSummaries(
          this.ops["GetInsightSummaries"].apply(partialParams)
        );
    }

    invokeGetSamplingRules(partialParams: ToOptional<{
      [K in keyof GetSamplingRulesRequest]: (GetSamplingRulesRequest)[K]
    }>): Request<GetSamplingRulesResult, AWSError> {
        this.boot();
        return this.client.getSamplingRules(
          this.ops["GetSamplingRules"].apply(partialParams)
        );
    }

    invokeGetSamplingStatisticSummaries(partialParams: ToOptional<{
      [K in keyof GetSamplingStatisticSummariesRequest]: (GetSamplingStatisticSummariesRequest)[K]
    }>): Request<GetSamplingStatisticSummariesResult, AWSError> {
        this.boot();
        return this.client.getSamplingStatisticSummaries(
          this.ops["GetSamplingStatisticSummaries"].apply(partialParams)
        );
    }

    invokeGetSamplingTargets(partialParams: ToOptional<{
      [K in keyof GetSamplingTargetsRequest]: (GetSamplingTargetsRequest)[K]
    }>): Request<GetSamplingTargetsResult, AWSError> {
        this.boot();
        return this.client.getSamplingTargets(
          this.ops["GetSamplingTargets"].apply(partialParams)
        );
    }

    invokeGetServiceGraph(partialParams: ToOptional<{
      [K in keyof GetServiceGraphRequest]: (GetServiceGraphRequest)[K]
    }>): Request<GetServiceGraphResult, AWSError> {
        this.boot();
        return this.client.getServiceGraph(
          this.ops["GetServiceGraph"].apply(partialParams)
        );
    }

    invokeGetTimeSeriesServiceStatistics(partialParams: ToOptional<{
      [K in keyof GetTimeSeriesServiceStatisticsRequest]: (GetTimeSeriesServiceStatisticsRequest)[K]
    }>): Request<GetTimeSeriesServiceStatisticsResult, AWSError> {
        this.boot();
        return this.client.getTimeSeriesServiceStatistics(
          this.ops["GetTimeSeriesServiceStatistics"].apply(partialParams)
        );
    }

    invokeGetTraceGraph(partialParams: ToOptional<{
      [K in keyof GetTraceGraphRequest]: (GetTraceGraphRequest)[K]
    }>): Request<GetTraceGraphResult, AWSError> {
        this.boot();
        return this.client.getTraceGraph(
          this.ops["GetTraceGraph"].apply(partialParams)
        );
    }

    invokeGetTraceSummaries(partialParams: ToOptional<{
      [K in keyof GetTraceSummariesRequest]: (GetTraceSummariesRequest)[K]
    }>): Request<GetTraceSummariesResult, AWSError> {
        this.boot();
        return this.client.getTraceSummaries(
          this.ops["GetTraceSummaries"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutEncryptionConfig(partialParams: ToOptional<{
      [K in keyof PutEncryptionConfigRequest]: (PutEncryptionConfigRequest)[K]
    }>): Request<PutEncryptionConfigResult, AWSError> {
        this.boot();
        return this.client.putEncryptionConfig(
          this.ops["PutEncryptionConfig"].apply(partialParams)
        );
    }

    invokePutTelemetryRecords(partialParams: ToOptional<{
      [K in keyof PutTelemetryRecordsRequest]: (PutTelemetryRecordsRequest)[K]
    }>): Request<PutTelemetryRecordsResult, AWSError> {
        this.boot();
        return this.client.putTelemetryRecords(
          this.ops["PutTelemetryRecords"].apply(partialParams)
        );
    }

    invokePutTraceSegments(partialParams: ToOptional<{
      [K in keyof PutTraceSegmentsRequest]: (PutTraceSegmentsRequest)[K]
    }>): Request<PutTraceSegmentsResult, AWSError> {
        this.boot();
        return this.client.putTraceSegments(
          this.ops["PutTraceSegments"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateGroup(partialParams: ToOptional<{
      [K in keyof UpdateGroupRequest]: (UpdateGroupRequest)[K]
    }>): Request<UpdateGroupResult, AWSError> {
        this.boot();
        return this.client.updateGroup(
          this.ops["UpdateGroup"].apply(partialParams)
        );
    }

    invokeUpdateSamplingRule(partialParams: ToOptional<{
      [K in keyof UpdateSamplingRuleRequest]: (UpdateSamplingRuleRequest)[K]
    }>): Request<UpdateSamplingRuleResult, AWSError> {
        this.boot();
        return this.client.updateSamplingRule(
          this.ops["UpdateSamplingRule"].apply(partialParams)
        );
    }
}