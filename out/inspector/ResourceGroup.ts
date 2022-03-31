
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
    DeleteAssessmentRunRequest,
    DeleteAssessmentTargetRequest,
    DeleteAssessmentTemplateRequest,
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
    ListExclusionsRequest,
    ListTagsForResourceRequest,
    PreviewAgentsRequest,
    RegisterCrossAccountAccessRoleRequest,
    RemoveAttributesFromFindingsRequest,
    SetTagsForResourceRequest,
    StartAssessmentRunRequest,
    StopAssessmentRunRequest,
    SubscribeToEventRequest,
    UnsubscribeFromEventRequest,
    UpdateAssessmentTargetRequest,
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
    ListExclusionsResponse,
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

export default class extends aws.inspector.ResourceGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.inspector.ResourceGroup>) {
        super(...args)
        this.client = new awssdk.Inspector()
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

    invokeAddAttributesToFindings(partialParams: ToOptional<{
      [K in keyof AddAttributesToFindingsRequest]: (AddAttributesToFindingsRequest)[K]
    }>): Request<AddAttributesToFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addAttributesToFindings(
          this.ops["AddAttributesToFindings"].applicator.apply(partialParams)
        );
    }

    invokeCreateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof CreateAssessmentTargetRequest]: (CreateAssessmentTargetRequest)[K]
    }>): Request<CreateAssessmentTargetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssessmentTarget(
          this.ops["CreateAssessmentTarget"].applicator.apply(partialParams)
        );
    }

    invokeCreateAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof Omit<CreateAssessmentTemplateRequest, "assessmentTargetArn">]: (Omit<CreateAssessmentTemplateRequest, "assessmentTargetArn">)[K]
    }>): Request<CreateAssessmentTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssessmentTemplate(
          this.ops["CreateAssessmentTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateExclusionsPreview(partialParams: ToOptional<{
      [K in keyof Omit<CreateExclusionsPreviewRequest, "assessmentTemplateArn">]: (Omit<CreateExclusionsPreviewRequest, "assessmentTemplateArn">)[K]
    }>): Request<CreateExclusionsPreviewResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createExclusionsPreview(
          this.ops["CreateExclusionsPreview"].applicator.apply(partialParams)
        );
    }

    invokeCreateResourceGroup(partialParams: ToOptional<{
      [K in keyof CreateResourceGroupRequest]: (CreateResourceGroupRequest)[K]
    }>): Request<CreateResourceGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResourceGroup(
          this.ops["CreateResourceGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentRunRequest, "assessmentRunArn">]: (Omit<DeleteAssessmentRunRequest, "assessmentRunArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssessmentRun(
          this.ops["DeleteAssessmentRun"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAssessmentTarget(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentTargetRequest, "assessmentTargetArn">]: (Omit<DeleteAssessmentTargetRequest, "assessmentTargetArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssessmentTarget(
          this.ops["DeleteAssessmentTarget"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentTemplateRequest, "assessmentTemplateArn">]: (Omit<DeleteAssessmentTemplateRequest, "assessmentTemplateArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAssessmentTemplate(
          this.ops["DeleteAssessmentTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAssessmentRuns(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentRunsRequest]: (DescribeAssessmentRunsRequest)[K]
    }>): Request<DescribeAssessmentRunsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssessmentRuns(
          this.ops["DescribeAssessmentRuns"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAssessmentTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTargetsRequest]: (DescribeAssessmentTargetsRequest)[K]
    }>): Request<DescribeAssessmentTargetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssessmentTargets(
          this.ops["DescribeAssessmentTargets"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAssessmentTemplates(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTemplatesRequest]: (DescribeAssessmentTemplatesRequest)[K]
    }>): Request<DescribeAssessmentTemplatesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssessmentTemplates(
          this.ops["DescribeAssessmentTemplates"].applicator.apply(partialParams)
        );
    }

    invokeDescribeExclusions(partialParams: ToOptional<{
      [K in keyof DescribeExclusionsRequest]: (DescribeExclusionsRequest)[K]
    }>): Request<DescribeExclusionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExclusions(
          this.ops["DescribeExclusions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFindings(partialParams: ToOptional<{
      [K in keyof DescribeFindingsRequest]: (DescribeFindingsRequest)[K]
    }>): Request<DescribeFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFindings(
          this.ops["DescribeFindings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeResourceGroups(partialParams: ToOptional<{
      [K in keyof DescribeResourceGroupsRequest]: (DescribeResourceGroupsRequest)[K]
    }>): Request<DescribeResourceGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeResourceGroups(
          this.ops["DescribeResourceGroups"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRulesPackages(partialParams: ToOptional<{
      [K in keyof DescribeRulesPackagesRequest]: (DescribeRulesPackagesRequest)[K]
    }>): Request<DescribeRulesPackagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRulesPackages(
          this.ops["DescribeRulesPackages"].applicator.apply(partialParams)
        );
    }

    invokeGetAssessmentReport(partialParams: ToOptional<{
      [K in keyof Omit<GetAssessmentReportRequest, "assessmentRunArn">]: (Omit<GetAssessmentReportRequest, "assessmentRunArn">)[K]
    }>): Request<GetAssessmentReportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAssessmentReport(
          this.ops["GetAssessmentReport"].applicator.apply(partialParams)
        );
    }

    invokeGetExclusionsPreview(partialParams: ToOptional<{
      [K in keyof Omit<GetExclusionsPreviewRequest, "assessmentTemplateArn">]: (Omit<GetExclusionsPreviewRequest, "assessmentTemplateArn">)[K]
    }>): Request<GetExclusionsPreviewResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExclusionsPreview(
          this.ops["GetExclusionsPreview"].applicator.apply(partialParams)
        );
    }

    invokeGetTelemetryMetadata(partialParams: ToOptional<{
      [K in keyof Omit<GetTelemetryMetadataRequest, "assessmentRunArn">]: (Omit<GetTelemetryMetadataRequest, "assessmentRunArn">)[K]
    }>): Request<GetTelemetryMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTelemetryMetadata(
          this.ops["GetTelemetryMetadata"].applicator.apply(partialParams)
        );
    }

    invokeListAssessmentRunAgents(partialParams: ToOptional<{
      [K in keyof Omit<ListAssessmentRunAgentsRequest, "assessmentRunArn">]: (Omit<ListAssessmentRunAgentsRequest, "assessmentRunArn">)[K]
    }>): Request<ListAssessmentRunAgentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssessmentRunAgents(
          this.ops["ListAssessmentRunAgents"].applicator.apply(partialParams)
        );
    }

    invokeListExclusions(partialParams: ToOptional<{
      [K in keyof Omit<ListExclusionsRequest, "assessmentRunArn">]: (Omit<ListExclusionsRequest, "assessmentRunArn">)[K]
    }>): Request<ListExclusionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listExclusions(
          this.ops["ListExclusions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "resourceArn">]: (Omit<ListTagsForResourceRequest, "resourceArn">)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePreviewAgents(partialParams: ToOptional<{
      [K in keyof Omit<PreviewAgentsRequest, "previewAgentsArn">]: (Omit<PreviewAgentsRequest, "previewAgentsArn">)[K]
    }>): Request<PreviewAgentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.previewAgents(
          this.ops["PreviewAgents"].applicator.apply(partialParams)
        );
    }

    invokeRegisterCrossAccountAccessRole(partialParams: ToOptional<{
      [K in keyof Omit<RegisterCrossAccountAccessRoleRequest, "roleArn">]: (Omit<RegisterCrossAccountAccessRoleRequest, "roleArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCrossAccountAccessRole(
          this.ops["RegisterCrossAccountAccessRole"].applicator.apply(partialParams)
        );
    }

    invokeRemoveAttributesFromFindings(partialParams: ToOptional<{
      [K in keyof RemoveAttributesFromFindingsRequest]: (RemoveAttributesFromFindingsRequest)[K]
    }>): Request<RemoveAttributesFromFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeAttributesFromFindings(
          this.ops["RemoveAttributesFromFindings"].applicator.apply(partialParams)
        );
    }

    invokeSetTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<SetTagsForResourceRequest, "resourceArn">]: (Omit<SetTagsForResourceRequest, "resourceArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTagsForResource(
          this.ops["SetTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeStartAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<StartAssessmentRunRequest, "assessmentTemplateArn">]: (Omit<StartAssessmentRunRequest, "assessmentTemplateArn">)[K]
    }>): Request<StartAssessmentRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAssessmentRun(
          this.ops["StartAssessmentRun"].applicator.apply(partialParams)
        );
    }

    invokeStopAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<StopAssessmentRunRequest, "assessmentRunArn">]: (Omit<StopAssessmentRunRequest, "assessmentRunArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAssessmentRun(
          this.ops["StopAssessmentRun"].applicator.apply(partialParams)
        );
    }

    invokeSubscribeToEvent(partialParams: ToOptional<{
      [K in keyof Omit<SubscribeToEventRequest, "resourceArn"|"topicArn">]: (Omit<SubscribeToEventRequest, "resourceArn"|"topicArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.subscribeToEvent(
          this.ops["SubscribeToEvent"].applicator.apply(partialParams)
        );
    }

    invokeUnsubscribeFromEvent(partialParams: ToOptional<{
      [K in keyof Omit<UnsubscribeFromEventRequest, "resourceArn"|"topicArn">]: (Omit<UnsubscribeFromEventRequest, "resourceArn"|"topicArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unsubscribeFromEvent(
          this.ops["UnsubscribeFromEvent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAssessmentTargetRequest, "assessmentTargetArn">]: (Omit<UpdateAssessmentTargetRequest, "assessmentTargetArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssessmentTarget(
          this.ops["UpdateAssessmentTarget"].applicator.apply(partialParams)
        );
    }
}