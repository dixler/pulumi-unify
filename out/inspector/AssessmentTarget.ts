
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

export default class extends aws.inspector.AssessmentTarget {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.inspector.AssessmentTarget>) {
        super(...args)
        this.client = new awssdk.Inspector()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/inspector-2016-02-16.normal.json"), this.client)
    }

    invokeAddAttributesToFindings(partialParams: ToOptional<{
      [K in keyof AddAttributesToFindingsRequest & keyof AddAttributesToFindingsRequest & keyof AddAttributesToFindingsRequest]: (AddAttributesToFindingsRequest & AddAttributesToFindingsRequest & AddAttributesToFindingsRequest)[K]
    }>): AddAttributesToFindingsResponse {
        return this.client.addAttributesToFindings(
            this.ops["AddAttributesToFindings"].apply(partialParams)
        );
    }

    invokeCreateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof CreateAssessmentTargetRequest & keyof CreateAssessmentTargetRequest & keyof CreateAssessmentTargetRequest]: (CreateAssessmentTargetRequest & CreateAssessmentTargetRequest & CreateAssessmentTargetRequest)[K]
    }>): CreateAssessmentTargetResponse {
        return this.client.createAssessmentTarget(
            this.ops["CreateAssessmentTarget"].apply(partialParams)
        );
    }

    invokeCreateAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof Omit<CreateAssessmentTemplateRequest, "assessmentTargetArn"> & keyof CreateAssessmentTemplateRequest & keyof CreateAssessmentTemplateRequest]: (Omit<CreateAssessmentTemplateRequest, "assessmentTargetArn"> & CreateAssessmentTemplateRequest & CreateAssessmentTemplateRequest)[K]
    }>): CreateAssessmentTemplateResponse {
        return this.client.createAssessmentTemplate(
            this.ops["CreateAssessmentTemplate"].apply(partialParams)
        );
    }

    invokeCreateExclusionsPreview(partialParams: ToOptional<{
      [K in keyof Omit<CreateExclusionsPreviewRequest, "assessmentTemplateArn"> & keyof CreateExclusionsPreviewRequest & keyof CreateExclusionsPreviewRequest]: (Omit<CreateExclusionsPreviewRequest, "assessmentTemplateArn"> & CreateExclusionsPreviewRequest & CreateExclusionsPreviewRequest)[K]
    }>): CreateExclusionsPreviewResponse {
        return this.client.createExclusionsPreview(
            this.ops["CreateExclusionsPreview"].apply(partialParams)
        );
    }

    invokeCreateResourceGroup(partialParams: ToOptional<{
      [K in keyof CreateResourceGroupRequest & keyof CreateResourceGroupRequest & keyof CreateResourceGroupRequest]: (CreateResourceGroupRequest & CreateResourceGroupRequest & CreateResourceGroupRequest)[K]
    }>): CreateResourceGroupResponse {
        return this.client.createResourceGroup(
            this.ops["CreateResourceGroup"].apply(partialParams)
        );
    }

    invokeDeleteAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentRunRequest, "assessmentRunArn"> & keyof DeleteAssessmentRunRequest & keyof DeleteAssessmentRunRequest]: (Omit<DeleteAssessmentRunRequest, "assessmentRunArn"> & DeleteAssessmentRunRequest & DeleteAssessmentRunRequest)[K]
    }>): void {
        return this.client.deleteAssessmentRun(
            this.ops["DeleteAssessmentRun"].apply(partialParams)
        );
    }

    invokeDeleteAssessmentTarget(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentTargetRequest, "assessmentTargetArn"> & keyof DeleteAssessmentTargetRequest & keyof DeleteAssessmentTargetRequest]: (Omit<DeleteAssessmentTargetRequest, "assessmentTargetArn"> & DeleteAssessmentTargetRequest & DeleteAssessmentTargetRequest)[K]
    }>): void {
        return this.client.deleteAssessmentTarget(
            this.ops["DeleteAssessmentTarget"].apply(partialParams)
        );
    }

    invokeDeleteAssessmentTemplate(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAssessmentTemplateRequest, "assessmentTemplateArn"> & keyof DeleteAssessmentTemplateRequest & keyof DeleteAssessmentTemplateRequest]: (Omit<DeleteAssessmentTemplateRequest, "assessmentTemplateArn"> & DeleteAssessmentTemplateRequest & DeleteAssessmentTemplateRequest)[K]
    }>): void {
        return this.client.deleteAssessmentTemplate(
            this.ops["DeleteAssessmentTemplate"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentRuns(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentRunsRequest & keyof DescribeAssessmentRunsRequest & keyof DescribeAssessmentRunsRequest]: (DescribeAssessmentRunsRequest & DescribeAssessmentRunsRequest & DescribeAssessmentRunsRequest)[K]
    }>): DescribeAssessmentRunsResponse {
        return this.client.describeAssessmentRuns(
            this.ops["DescribeAssessmentRuns"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTargetsRequest & keyof DescribeAssessmentTargetsRequest & keyof DescribeAssessmentTargetsRequest]: (DescribeAssessmentTargetsRequest & DescribeAssessmentTargetsRequest & DescribeAssessmentTargetsRequest)[K]
    }>): DescribeAssessmentTargetsResponse {
        return this.client.describeAssessmentTargets(
            this.ops["DescribeAssessmentTargets"].apply(partialParams)
        );
    }

    invokeDescribeAssessmentTemplates(partialParams: ToOptional<{
      [K in keyof DescribeAssessmentTemplatesRequest & keyof DescribeAssessmentTemplatesRequest & keyof DescribeAssessmentTemplatesRequest]: (DescribeAssessmentTemplatesRequest & DescribeAssessmentTemplatesRequest & DescribeAssessmentTemplatesRequest)[K]
    }>): DescribeAssessmentTemplatesResponse {
        return this.client.describeAssessmentTemplates(
            this.ops["DescribeAssessmentTemplates"].apply(partialParams)
        );
    }

    invokeDescribeExclusions(partialParams: ToOptional<{
      [K in keyof DescribeExclusionsRequest & keyof DescribeExclusionsRequest & keyof DescribeExclusionsRequest]: (DescribeExclusionsRequest & DescribeExclusionsRequest & DescribeExclusionsRequest)[K]
    }>): DescribeExclusionsResponse {
        return this.client.describeExclusions(
            this.ops["DescribeExclusions"].apply(partialParams)
        );
    }

    invokeDescribeFindings(partialParams: ToOptional<{
      [K in keyof DescribeFindingsRequest & keyof DescribeFindingsRequest & keyof DescribeFindingsRequest]: (DescribeFindingsRequest & DescribeFindingsRequest & DescribeFindingsRequest)[K]
    }>): DescribeFindingsResponse {
        return this.client.describeFindings(
            this.ops["DescribeFindings"].apply(partialParams)
        );
    }

    invokeDescribeResourceGroups(partialParams: ToOptional<{
      [K in keyof DescribeResourceGroupsRequest & keyof DescribeResourceGroupsRequest & keyof DescribeResourceGroupsRequest]: (DescribeResourceGroupsRequest & DescribeResourceGroupsRequest & DescribeResourceGroupsRequest)[K]
    }>): DescribeResourceGroupsResponse {
        return this.client.describeResourceGroups(
            this.ops["DescribeResourceGroups"].apply(partialParams)
        );
    }

    invokeDescribeRulesPackages(partialParams: ToOptional<{
      [K in keyof DescribeRulesPackagesRequest & keyof DescribeRulesPackagesRequest & keyof DescribeRulesPackagesRequest]: (DescribeRulesPackagesRequest & DescribeRulesPackagesRequest & DescribeRulesPackagesRequest)[K]
    }>): DescribeRulesPackagesResponse {
        return this.client.describeRulesPackages(
            this.ops["DescribeRulesPackages"].apply(partialParams)
        );
    }

    invokeGetAssessmentReport(partialParams: ToOptional<{
      [K in keyof Omit<GetAssessmentReportRequest, "assessmentRunArn"> & keyof GetAssessmentReportRequest & keyof GetAssessmentReportRequest]: (Omit<GetAssessmentReportRequest, "assessmentRunArn"> & GetAssessmentReportRequest & GetAssessmentReportRequest)[K]
    }>): GetAssessmentReportResponse {
        return this.client.getAssessmentReport(
            this.ops["GetAssessmentReport"].apply(partialParams)
        );
    }

    invokeGetExclusionsPreview(partialParams: ToOptional<{
      [K in keyof Omit<GetExclusionsPreviewRequest, "assessmentTemplateArn"> & keyof GetExclusionsPreviewRequest & keyof GetExclusionsPreviewRequest]: (Omit<GetExclusionsPreviewRequest, "assessmentTemplateArn"> & GetExclusionsPreviewRequest & GetExclusionsPreviewRequest)[K]
    }>): GetExclusionsPreviewResponse {
        return this.client.getExclusionsPreview(
            this.ops["GetExclusionsPreview"].apply(partialParams)
        );
    }

    invokeGetTelemetryMetadata(partialParams: ToOptional<{
      [K in keyof Omit<GetTelemetryMetadataRequest, "assessmentRunArn"> & keyof GetTelemetryMetadataRequest & keyof GetTelemetryMetadataRequest]: (Omit<GetTelemetryMetadataRequest, "assessmentRunArn"> & GetTelemetryMetadataRequest & GetTelemetryMetadataRequest)[K]
    }>): GetTelemetryMetadataResponse {
        return this.client.getTelemetryMetadata(
            this.ops["GetTelemetryMetadata"].apply(partialParams)
        );
    }

    invokeListAssessmentRunAgents(partialParams: ToOptional<{
      [K in keyof Omit<ListAssessmentRunAgentsRequest, "assessmentRunArn"> & keyof ListAssessmentRunAgentsRequest & keyof ListAssessmentRunAgentsRequest]: (Omit<ListAssessmentRunAgentsRequest, "assessmentRunArn"> & ListAssessmentRunAgentsRequest & ListAssessmentRunAgentsRequest)[K]
    }>): ListAssessmentRunAgentsResponse {
        return this.client.listAssessmentRunAgents(
            this.ops["ListAssessmentRunAgents"].apply(partialParams)
        );
    }

    invokeListExclusions(partialParams: ToOptional<{
      [K in keyof Omit<ListExclusionsRequest, "assessmentRunArn"> & keyof ListExclusionsRequest & keyof ListExclusionsRequest]: (Omit<ListExclusionsRequest, "assessmentRunArn"> & ListExclusionsRequest & ListExclusionsRequest)[K]
    }>): ListExclusionsResponse {
        return this.client.listExclusions(
            this.ops["ListExclusions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "resourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "resourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePreviewAgents(partialParams: ToOptional<{
      [K in keyof Omit<PreviewAgentsRequest, "previewAgentsArn"> & keyof PreviewAgentsRequest & keyof PreviewAgentsRequest]: (Omit<PreviewAgentsRequest, "previewAgentsArn"> & PreviewAgentsRequest & PreviewAgentsRequest)[K]
    }>): PreviewAgentsResponse {
        return this.client.previewAgents(
            this.ops["PreviewAgents"].apply(partialParams)
        );
    }

    invokeRegisterCrossAccountAccessRole(partialParams: ToOptional<{
      [K in keyof Omit<RegisterCrossAccountAccessRoleRequest, "roleArn"> & keyof RegisterCrossAccountAccessRoleRequest & keyof RegisterCrossAccountAccessRoleRequest]: (Omit<RegisterCrossAccountAccessRoleRequest, "roleArn"> & RegisterCrossAccountAccessRoleRequest & RegisterCrossAccountAccessRoleRequest)[K]
    }>): void {
        return this.client.registerCrossAccountAccessRole(
            this.ops["RegisterCrossAccountAccessRole"].apply(partialParams)
        );
    }

    invokeRemoveAttributesFromFindings(partialParams: ToOptional<{
      [K in keyof RemoveAttributesFromFindingsRequest & keyof RemoveAttributesFromFindingsRequest & keyof RemoveAttributesFromFindingsRequest]: (RemoveAttributesFromFindingsRequest & RemoveAttributesFromFindingsRequest & RemoveAttributesFromFindingsRequest)[K]
    }>): RemoveAttributesFromFindingsResponse {
        return this.client.removeAttributesFromFindings(
            this.ops["RemoveAttributesFromFindings"].apply(partialParams)
        );
    }

    invokeSetTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<SetTagsForResourceRequest, "resourceArn"> & keyof SetTagsForResourceRequest & keyof SetTagsForResourceRequest]: (Omit<SetTagsForResourceRequest, "resourceArn"> & SetTagsForResourceRequest & SetTagsForResourceRequest)[K]
    }>): void {
        return this.client.setTagsForResource(
            this.ops["SetTagsForResource"].apply(partialParams)
        );
    }

    invokeStartAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<StartAssessmentRunRequest, "assessmentTemplateArn"> & keyof StartAssessmentRunRequest & keyof StartAssessmentRunRequest]: (Omit<StartAssessmentRunRequest, "assessmentTemplateArn"> & StartAssessmentRunRequest & StartAssessmentRunRequest)[K]
    }>): StartAssessmentRunResponse {
        return this.client.startAssessmentRun(
            this.ops["StartAssessmentRun"].apply(partialParams)
        );
    }

    invokeStopAssessmentRun(partialParams: ToOptional<{
      [K in keyof Omit<StopAssessmentRunRequest, "assessmentRunArn"> & keyof StopAssessmentRunRequest & keyof StopAssessmentRunRequest]: (Omit<StopAssessmentRunRequest, "assessmentRunArn"> & StopAssessmentRunRequest & StopAssessmentRunRequest)[K]
    }>): void {
        return this.client.stopAssessmentRun(
            this.ops["StopAssessmentRun"].apply(partialParams)
        );
    }

    invokeSubscribeToEvent(partialParams: ToOptional<{
      [K in keyof Omit<SubscribeToEventRequest, "resourceArn"|"topicArn"> & keyof SubscribeToEventRequest & keyof SubscribeToEventRequest]: (Omit<SubscribeToEventRequest, "resourceArn"|"topicArn"> & SubscribeToEventRequest & SubscribeToEventRequest)[K]
    }>): void {
        return this.client.subscribeToEvent(
            this.ops["SubscribeToEvent"].apply(partialParams)
        );
    }

    invokeUnsubscribeFromEvent(partialParams: ToOptional<{
      [K in keyof Omit<UnsubscribeFromEventRequest, "resourceArn"|"topicArn"> & keyof UnsubscribeFromEventRequest & keyof UnsubscribeFromEventRequest]: (Omit<UnsubscribeFromEventRequest, "resourceArn"|"topicArn"> & UnsubscribeFromEventRequest & UnsubscribeFromEventRequest)[K]
    }>): void {
        return this.client.unsubscribeFromEvent(
            this.ops["UnsubscribeFromEvent"].apply(partialParams)
        );
    }

    invokeUpdateAssessmentTarget(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAssessmentTargetRequest, "assessmentTargetArn"> & keyof UpdateAssessmentTargetRequest & keyof UpdateAssessmentTargetRequest]: (Omit<UpdateAssessmentTargetRequest, "assessmentTargetArn"> & UpdateAssessmentTargetRequest & UpdateAssessmentTargetRequest)[K]
    }>): void {
        return this.client.updateAssessmentTarget(
            this.ops["UpdateAssessmentTarget"].apply(partialParams)
        );
    }
}