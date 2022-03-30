
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.inspector.ResourceGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.inspector.ResourceGroup>) {
        super(...args)
        this.client = new awssdk.Inspector()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/inspector-2016-02-16.normal.json"), this.client)
    }

    invokeAddAttributesToFindings(partialParams: ToOptional<{
      [K in keyof AddAttributesToFindingsRequest]: (AddAttributesToFindingsRequest)[K]
    }>): AddAttributesToFindingsResponse {
        return this.client.addAttributesToFindings(
            this.ops["AddAttributesToFindings"].apply(partialParams)
        );
    }

    invokeCreateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof CreateAssessmentTargetRequest]: (CreateAssessmentTargetRequest)[K]
    }>): CreateAssessmentTargetResponse {
        return this.client.createAssessmentTarget(
            this.ops["CreateAssessmentTarget"].apply(partialParams)
        );
    }

    invokeCreateAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof Omit<CreateAssessmentTemplateRequest, "assessmentTargetArn">]: (Omit<CreateAssessmentTemplateRequest, "assessmentTargetArn">)[K]
    }>): CreateAssessmentTemplateResponse {
        return this.client.createAssessmentTemplate(
            this.ops["CreateAssessmentTemplate"].apply(partialParams)
        );
    }

    invokeCreateExclusionsPreview(partialParams: ToOptional<{
      [K in keyof Omit<CreateExclusionsPreviewRequest, "assessmentTemplateArn">]: (Omit<CreateExclusionsPreviewRequest, "assessmentTemplateArn">)[K]
    }>): CreateExclusionsPreviewResponse {
        return this.client.createExclusionsPreview(
            this.ops["CreateExclusionsPreview"].apply(partialParams)
        );
    }

    invokeCreateResourceGroup(partialParams: ToOptional<{
      [K in keyof CreateResourceGroupRequest]: (CreateResourceGroupRequest)[K]
    }>): CreateResourceGroupResponse {
        return this.client.createResourceGroup(
            this.ops["CreateResourceGroup"].apply(partialParams)
        );
    }

    invokeDeleteAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentRunRequest, "assessmentRunArn">]: (Omit<DeleteAssessmentRunRequest, "assessmentRunArn">)[K]
    }>): void {
        return this.client.deleteAssessmentRun(
            this.ops["DeleteAssessmentRun"].apply(partialParams)
        );
    }

    invokeDeleteAssessmentTarget(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentTargetRequest, "assessmentTargetArn">]: (Omit<DeleteAssessmentTargetRequest, "assessmentTargetArn">)[K]
    }>): void {
        return this.client.deleteAssessmentTarget(
            this.ops["DeleteAssessmentTarget"].apply(partialParams)
        );
    }

    invokeDeleteAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentTemplateRequest, "assessmentTemplateArn">]: (Omit<DeleteAssessmentTemplateRequest, "assessmentTemplateArn">)[K]
    }>): void {
        return this.client.deleteAssessmentTemplate(
            this.ops["DeleteAssessmentTemplate"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentRuns(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentRunsRequest]: (DescribeAssessmentRunsRequest)[K]
    }>): DescribeAssessmentRunsResponse {
        return this.client.describeAssessmentRuns(
            this.ops["DescribeAssessmentRuns"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTargetsRequest]: (DescribeAssessmentTargetsRequest)[K]
    }>): DescribeAssessmentTargetsResponse {
        return this.client.describeAssessmentTargets(
            this.ops["DescribeAssessmentTargets"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentTemplates(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTemplatesRequest]: (DescribeAssessmentTemplatesRequest)[K]
    }>): DescribeAssessmentTemplatesResponse {
        return this.client.describeAssessmentTemplates(
            this.ops["DescribeAssessmentTemplates"].apply(partialParams)
        );
    }

    invokeDescribeExclusions(partialParams: ToOptional<{
      [K in keyof DescribeExclusionsRequest]: (DescribeExclusionsRequest)[K]
    }>): DescribeExclusionsResponse {
        return this.client.describeExclusions(
            this.ops["DescribeExclusions"].apply(partialParams)
        );
    }

    invokeDescribeFindings(partialParams: ToOptional<{
      [K in keyof DescribeFindingsRequest]: (DescribeFindingsRequest)[K]
    }>): DescribeFindingsResponse {
        return this.client.describeFindings(
            this.ops["DescribeFindings"].apply(partialParams)
        );
    }

    invokeDescribeResourceGroups(partialParams: ToOptional<{
      [K in keyof DescribeResourceGroupsRequest]: (DescribeResourceGroupsRequest)[K]
    }>): DescribeResourceGroupsResponse {
        return this.client.describeResourceGroups(
            this.ops["DescribeResourceGroups"].apply(partialParams)
        );
    }

    invokeDescribeRulesPackages(partialParams: ToOptional<{
      [K in keyof DescribeRulesPackagesRequest]: (DescribeRulesPackagesRequest)[K]
    }>): DescribeRulesPackagesResponse {
        return this.client.describeRulesPackages(
            this.ops["DescribeRulesPackages"].apply(partialParams)
        );
    }

    invokeGetAssessmentReport(partialParams: ToOptional<{
      [K in keyof Omit<GetAssessmentReportRequest, "assessmentRunArn">]: (Omit<GetAssessmentReportRequest, "assessmentRunArn">)[K]
    }>): GetAssessmentReportResponse {
        return this.client.getAssessmentReport(
            this.ops["GetAssessmentReport"].apply(partialParams)
        );
    }

    invokeGetExclusionsPreview(partialParams: ToOptional<{
      [K in keyof Omit<GetExclusionsPreviewRequest, "assessmentTemplateArn">]: (Omit<GetExclusionsPreviewRequest, "assessmentTemplateArn">)[K]
    }>): GetExclusionsPreviewResponse {
        return this.client.getExclusionsPreview(
            this.ops["GetExclusionsPreview"].apply(partialParams)
        );
    }

    invokeGetTelemetryMetadata(partialParams: ToOptional<{
      [K in keyof Omit<GetTelemetryMetadataRequest, "assessmentRunArn">]: (Omit<GetTelemetryMetadataRequest, "assessmentRunArn">)[K]
    }>): GetTelemetryMetadataResponse {
        return this.client.getTelemetryMetadata(
            this.ops["GetTelemetryMetadata"].apply(partialParams)
        );
    }

    invokeListAssessmentRunAgents(partialParams: ToOptional<{
      [K in keyof Omit<ListAssessmentRunAgentsRequest, "assessmentRunArn">]: (Omit<ListAssessmentRunAgentsRequest, "assessmentRunArn">)[K]
    }>): ListAssessmentRunAgentsResponse {
        return this.client.listAssessmentRunAgents(
            this.ops["ListAssessmentRunAgents"].apply(partialParams)
        );
    }

    invokeListExclusions(partialParams: ToOptional<{
      [K in keyof Omit<ListExclusionsRequest, "assessmentRunArn">]: (Omit<ListExclusionsRequest, "assessmentRunArn">)[K]
    }>): ListExclusionsResponse {
        return this.client.listExclusions(
            this.ops["ListExclusions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "resourceArn">]: (Omit<ListTagsForResourceRequest, "resourceArn">)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePreviewAgents(partialParams: ToOptional<{
      [K in keyof Omit<PreviewAgentsRequest, "previewAgentsArn">]: (Omit<PreviewAgentsRequest, "previewAgentsArn">)[K]
    }>): PreviewAgentsResponse {
        return this.client.previewAgents(
            this.ops["PreviewAgents"].apply(partialParams)
        );
    }

    invokeRegisterCrossAccountAccessRole(partialParams: ToOptional<{
      [K in keyof Omit<RegisterCrossAccountAccessRoleRequest, "roleArn">]: (Omit<RegisterCrossAccountAccessRoleRequest, "roleArn">)[K]
    }>): void {
        return this.client.registerCrossAccountAccessRole(
            this.ops["RegisterCrossAccountAccessRole"].apply(partialParams)
        );
    }

    invokeRemoveAttributesFromFindings(partialParams: ToOptional<{
      [K in keyof RemoveAttributesFromFindingsRequest]: (RemoveAttributesFromFindingsRequest)[K]
    }>): RemoveAttributesFromFindingsResponse {
        return this.client.removeAttributesFromFindings(
            this.ops["RemoveAttributesFromFindings"].apply(partialParams)
        );
    }

    invokeSetTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<SetTagsForResourceRequest, "resourceArn">]: (Omit<SetTagsForResourceRequest, "resourceArn">)[K]
    }>): void {
        return this.client.setTagsForResource(
            this.ops["SetTagsForResource"].apply(partialParams)
        );
    }

    invokeStartAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<StartAssessmentRunRequest, "assessmentTemplateArn">]: (Omit<StartAssessmentRunRequest, "assessmentTemplateArn">)[K]
    }>): StartAssessmentRunResponse {
        return this.client.startAssessmentRun(
            this.ops["StartAssessmentRun"].apply(partialParams)
        );
    }

    invokeStopAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<StopAssessmentRunRequest, "assessmentRunArn">]: (Omit<StopAssessmentRunRequest, "assessmentRunArn">)[K]
    }>): void {
        return this.client.stopAssessmentRun(
            this.ops["StopAssessmentRun"].apply(partialParams)
        );
    }

    invokeSubscribeToEvent(partialParams: ToOptional<{
      [K in keyof Omit<SubscribeToEventRequest, "resourceArn"|"topicArn">]: (Omit<SubscribeToEventRequest, "resourceArn"|"topicArn">)[K]
    }>): void {
        return this.client.subscribeToEvent(
            this.ops["SubscribeToEvent"].apply(partialParams)
        );
    }

    invokeUnsubscribeFromEvent(partialParams: ToOptional<{
      [K in keyof Omit<UnsubscribeFromEventRequest, "resourceArn"|"topicArn">]: (Omit<UnsubscribeFromEventRequest, "resourceArn"|"topicArn">)[K]
    }>): void {
        return this.client.unsubscribeFromEvent(
            this.ops["UnsubscribeFromEvent"].apply(partialParams)
        );
    }

    invokeUpdateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAssessmentTargetRequest, "assessmentTargetArn">]: (Omit<UpdateAssessmentTargetRequest, "assessmentTargetArn">)[K]
    }>): void {
        return this.client.updateAssessmentTarget(
            this.ops["UpdateAssessmentTarget"].apply(partialParams)
        );
    }
}