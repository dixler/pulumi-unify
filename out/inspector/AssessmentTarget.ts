
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddAttributesToFindingsRequest,
    CreateAssessmentTargetRequest,
    CreateAssessmentTemplateRequest,
    CreateExclusionsPreviewRequest,
    CreateResourceGroupRequest,
    DescribeAssessmentRunsRequest,
    DescribeAssessmentTargetsRequest,
    DescribeAssessmentTemplatesRequest,
    DescribeExclusionsRequest,
    DescribeFindingsRequest,
    DescribeResourceGroupsRequest,
    DescribeRulesPackagesRequest,
    GetAssessmentReportRequest,
    GetExclusionsPreviewRequest,
    GetTelemetryMetadataRequest,
    ListAssessmentRunAgentsRequest,
    ListAssessmentRunsRequest,
    ListAssessmentTargetsRequest,
    ListAssessmentTemplatesRequest,
    ListEventSubscriptionsRequest,
    ListExclusionsRequest,
    ListFindingsRequest,
    ListRulesPackagesRequest,
    ListTagsForResourceRequest,
    PreviewAgentsRequest,
    RemoveAttributesFromFindingsRequest,
    StartAssessmentRunRequest,
    AddAttributesToFindingsResponse,
    CreateAssessmentTargetResponse,
    CreateAssessmentTemplateResponse,
    CreateExclusionsPreviewResponse,
    CreateResourceGroupResponse,
    DescribeAssessmentRunsResponse,
    DescribeAssessmentTargetsResponse,
    DescribeAssessmentTemplatesResponse,
    DescribeExclusionsResponse,
    DescribeFindingsResponse,
    DescribeResourceGroupsResponse,
    DescribeRulesPackagesResponse,
    GetAssessmentReportResponse,
    GetExclusionsPreviewResponse,
    GetTelemetryMetadataResponse,
    ListAssessmentRunAgentsResponse,
    ListAssessmentRunsResponse,
    ListAssessmentTargetsResponse,
    ListAssessmentTemplatesResponse,
    ListEventSubscriptionsResponse,
    ListExclusionsResponse,
    ListFindingsResponse,
    ListRulesPackagesResponse,
    ListTagsForResourceResponse,
    PreviewAgentsResponse,
    RemoveAttributesFromFindingsResponse,
    StartAssessmentRunResponse
} from "aws-sdk/clients/inspector";
const schema = require("../apis/inspector-2016-02-16.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.inspector.AssessmentTarget {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.inspector.AssessmentTarget>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Inspector()
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

    invokeAddAttributesToFindings(partialParams: ToOptional<{
      [K in keyof AddAttributesToFindingsRequest]: (AddAttributesToFindingsRequest)[K]
    }>): Request<AddAttributesToFindingsResponse, AWSError> {
        this.boot();
        return this.client.addAttributesToFindings(
          this.ops["AddAttributesToFindings"].apply(partialParams)
        );
    }

    invokeCreateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof CreateAssessmentTargetRequest]: (CreateAssessmentTargetRequest)[K]
    }>): Request<CreateAssessmentTargetResponse, AWSError> {
        this.boot();
        return this.client.createAssessmentTarget(
          this.ops["CreateAssessmentTarget"].apply(partialParams)
        );
    }

    invokeCreateAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof CreateAssessmentTemplateRequest]: (CreateAssessmentTemplateRequest)[K]
    }>): Request<CreateAssessmentTemplateResponse, AWSError> {
        this.boot();
        return this.client.createAssessmentTemplate(
          this.ops["CreateAssessmentTemplate"].apply(partialParams)
        );
    }

    invokeCreateExclusionsPreview(partialParams: ToOptional<{
      [K in keyof CreateExclusionsPreviewRequest]: (CreateExclusionsPreviewRequest)[K]
    }>): Request<CreateExclusionsPreviewResponse, AWSError> {
        this.boot();
        return this.client.createExclusionsPreview(
          this.ops["CreateExclusionsPreview"].apply(partialParams)
        );
    }

    invokeCreateResourceGroup(partialParams: ToOptional<{
      [K in keyof CreateResourceGroupRequest]: (CreateResourceGroupRequest)[K]
    }>): Request<CreateResourceGroupResponse, AWSError> {
        this.boot();
        return this.client.createResourceGroup(
          this.ops["CreateResourceGroup"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentRuns(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentRunsRequest]: (DescribeAssessmentRunsRequest)[K]
    }>): Request<DescribeAssessmentRunsResponse, AWSError> {
        this.boot();
        return this.client.describeAssessmentRuns(
          this.ops["DescribeAssessmentRuns"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTargetsRequest]: (DescribeAssessmentTargetsRequest)[K]
    }>): Request<DescribeAssessmentTargetsResponse, AWSError> {
        this.boot();
        return this.client.describeAssessmentTargets(
          this.ops["DescribeAssessmentTargets"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentTemplates(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTemplatesRequest]: (DescribeAssessmentTemplatesRequest)[K]
    }>): Request<DescribeAssessmentTemplatesResponse, AWSError> {
        this.boot();
        return this.client.describeAssessmentTemplates(
          this.ops["DescribeAssessmentTemplates"].apply(partialParams)
        );
    }

    invokeDescribeExclusions(partialParams: ToOptional<{
      [K in keyof DescribeExclusionsRequest]: (DescribeExclusionsRequest)[K]
    }>): Request<DescribeExclusionsResponse, AWSError> {
        this.boot();
        return this.client.describeExclusions(
          this.ops["DescribeExclusions"].apply(partialParams)
        );
    }

    invokeDescribeFindings(partialParams: ToOptional<{
      [K in keyof DescribeFindingsRequest]: (DescribeFindingsRequest)[K]
    }>): Request<DescribeFindingsResponse, AWSError> {
        this.boot();
        return this.client.describeFindings(
          this.ops["DescribeFindings"].apply(partialParams)
        );
    }

    invokeDescribeResourceGroups(partialParams: ToOptional<{
      [K in keyof DescribeResourceGroupsRequest]: (DescribeResourceGroupsRequest)[K]
    }>): Request<DescribeResourceGroupsResponse, AWSError> {
        this.boot();
        return this.client.describeResourceGroups(
          this.ops["DescribeResourceGroups"].apply(partialParams)
        );
    }

    invokeDescribeRulesPackages(partialParams: ToOptional<{
      [K in keyof DescribeRulesPackagesRequest]: (DescribeRulesPackagesRequest)[K]
    }>): Request<DescribeRulesPackagesResponse, AWSError> {
        this.boot();
        return this.client.describeRulesPackages(
          this.ops["DescribeRulesPackages"].apply(partialParams)
        );
    }

    invokeGetAssessmentReport(partialParams: ToOptional<{
      [K in keyof GetAssessmentReportRequest]: (GetAssessmentReportRequest)[K]
    }>): Request<GetAssessmentReportResponse, AWSError> {
        this.boot();
        return this.client.getAssessmentReport(
          this.ops["GetAssessmentReport"].apply(partialParams)
        );
    }

    invokeGetExclusionsPreview(partialParams: ToOptional<{
      [K in keyof GetExclusionsPreviewRequest]: (GetExclusionsPreviewRequest)[K]
    }>): Request<GetExclusionsPreviewResponse, AWSError> {
        this.boot();
        return this.client.getExclusionsPreview(
          this.ops["GetExclusionsPreview"].apply(partialParams)
        );
    }

    invokeGetTelemetryMetadata(partialParams: ToOptional<{
      [K in keyof GetTelemetryMetadataRequest]: (GetTelemetryMetadataRequest)[K]
    }>): Request<GetTelemetryMetadataResponse, AWSError> {
        this.boot();
        return this.client.getTelemetryMetadata(
          this.ops["GetTelemetryMetadata"].apply(partialParams)
        );
    }

    invokeListAssessmentRunAgents(partialParams: ToOptional<{
      [K in keyof ListAssessmentRunAgentsRequest]: (ListAssessmentRunAgentsRequest)[K]
    }>): Request<ListAssessmentRunAgentsResponse, AWSError> {
        this.boot();
        return this.client.listAssessmentRunAgents(
          this.ops["ListAssessmentRunAgents"].apply(partialParams)
        );
    }

    invokeListAssessmentRuns(partialParams: ToOptional<{
      [K in keyof ListAssessmentRunsRequest]: (ListAssessmentRunsRequest)[K]
    }>): Request<ListAssessmentRunsResponse, AWSError> {
        this.boot();
        return this.client.listAssessmentRuns(
          this.ops["ListAssessmentRuns"].apply(partialParams)
        );
    }

    invokeListAssessmentTargets(partialParams: ToOptional<{
      [K in keyof ListAssessmentTargetsRequest]: (ListAssessmentTargetsRequest)[K]
    }>): Request<ListAssessmentTargetsResponse, AWSError> {
        this.boot();
        return this.client.listAssessmentTargets(
          this.ops["ListAssessmentTargets"].apply(partialParams)
        );
    }

    invokeListAssessmentTemplates(partialParams: ToOptional<{
      [K in keyof ListAssessmentTemplatesRequest]: (ListAssessmentTemplatesRequest)[K]
    }>): Request<ListAssessmentTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listAssessmentTemplates(
          this.ops["ListAssessmentTemplates"].apply(partialParams)
        );
    }

    invokeListEventSubscriptions(partialParams: ToOptional<{
      [K in keyof ListEventSubscriptionsRequest]: (ListEventSubscriptionsRequest)[K]
    }>): Request<ListEventSubscriptionsResponse, AWSError> {
        this.boot();
        return this.client.listEventSubscriptions(
          this.ops["ListEventSubscriptions"].apply(partialParams)
        );
    }

    invokeListExclusions(partialParams: ToOptional<{
      [K in keyof ListExclusionsRequest]: (ListExclusionsRequest)[K]
    }>): Request<ListExclusionsResponse, AWSError> {
        this.boot();
        return this.client.listExclusions(
          this.ops["ListExclusions"].apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest]: (ListFindingsRequest)[K]
    }>): Request<ListFindingsResponse, AWSError> {
        this.boot();
        return this.client.listFindings(
          this.ops["ListFindings"].apply(partialParams)
        );
    }

    invokeListRulesPackages(partialParams: ToOptional<{
      [K in keyof ListRulesPackagesRequest]: (ListRulesPackagesRequest)[K]
    }>): Request<ListRulesPackagesResponse, AWSError> {
        this.boot();
        return this.client.listRulesPackages(
          this.ops["ListRulesPackages"].apply(partialParams)
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

    invokePreviewAgents(partialParams: ToOptional<{
      [K in keyof PreviewAgentsRequest]: (PreviewAgentsRequest)[K]
    }>): Request<PreviewAgentsResponse, AWSError> {
        this.boot();
        return this.client.previewAgents(
          this.ops["PreviewAgents"].apply(partialParams)
        );
    }

    invokeRemoveAttributesFromFindings(partialParams: ToOptional<{
      [K in keyof RemoveAttributesFromFindingsRequest]: (RemoveAttributesFromFindingsRequest)[K]
    }>): Request<RemoveAttributesFromFindingsResponse, AWSError> {
        this.boot();
        return this.client.removeAttributesFromFindings(
          this.ops["RemoveAttributesFromFindings"].apply(partialParams)
        );
    }

    invokeStartAssessmentRun(partialParams: ToOptional<{
      [K in keyof StartAssessmentRunRequest]: (StartAssessmentRunRequest)[K]
    }>): Request<StartAssessmentRunResponse, AWSError> {
        this.boot();
        return this.client.startAssessmentRun(
          this.ops["StartAssessmentRun"].apply(partialParams)
        );
    }
}