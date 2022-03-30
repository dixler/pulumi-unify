
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ApplyArchiveRuleRequest,
    CancelPolicyGenerationRequest,
    CreateAccessPreviewRequest,
    CreateAnalyzerRequest,
    CreateArchiveRuleRequest,
    DeleteAnalyzerRequest,
    DeleteArchiveRuleRequest,
    GetAccessPreviewRequest,
    GetAnalyzedResourceRequest,
    GetAnalyzerRequest,
    GetArchiveRuleRequest,
    GetFindingRequest,
    GetGeneratedPolicyRequest,
    ListAccessPreviewFindingsRequest,
    ListAccessPreviewsRequest,
    ListAnalyzedResourcesRequest,
    ListArchiveRulesRequest,
    ListFindingsRequest,
    ListTagsForResourceRequest,
    StartPolicyGenerationRequest,
    StartResourceScanRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateArchiveRuleRequest,
    UpdateFindingsRequest,
    ValidatePolicyRequest,
    CancelPolicyGenerationResponse,
    CreateAccessPreviewResponse,
    CreateAnalyzerResponse,
    GetAccessPreviewResponse,
    GetAnalyzedResourceResponse,
    GetAnalyzerResponse,
    GetArchiveRuleResponse,
    GetFindingResponse,
    GetGeneratedPolicyResponse,
    ListAccessPreviewFindingsResponse,
    ListAccessPreviewsResponse,
    ListAnalyzedResourcesResponse,
    ListArchiveRulesResponse,
    ListFindingsResponse,
    ListTagsForResourceResponse,
    StartPolicyGenerationResponse,
    TagResourceResponse,
    UntagResourceResponse,
    ValidatePolicyResponse
} from "aws-sdk/clients/accessanalyzer";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.accessanalyzer.Analyzer {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.accessanalyzer.Analyzer>) {
        super(...args)
        this.client = new awssdk.AccessAnalyzer()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/accessanalyzer-2019-11-01.normal.json"), this.client)
    }

    invokeApplyArchiveRule(partialParams: ToOptional<{
      [K in keyof ApplyArchiveRuleRequest & keyof ApplyArchiveRuleRequest & keyof ApplyArchiveRuleRequest]: (ApplyArchiveRuleRequest & ApplyArchiveRuleRequest & ApplyArchiveRuleRequest)[K]
    }>): void {
        return this.client.applyArchiveRule(
            this.ops["ApplyArchiveRule"].apply(partialParams)
        );
    }

    invokeCancelPolicyGeneration(partialParams: ToOptional<{
      [K in keyof CancelPolicyGenerationRequest & keyof CancelPolicyGenerationRequest & keyof CancelPolicyGenerationRequest]: (CancelPolicyGenerationRequest & CancelPolicyGenerationRequest & CancelPolicyGenerationRequest)[K]
    }>): CancelPolicyGenerationResponse {
        return this.client.cancelPolicyGeneration(
            this.ops["CancelPolicyGeneration"].apply(partialParams)
        );
    }

    invokeCreateAccessPreview(partialParams: ToOptional<{
      [K in keyof CreateAccessPreviewRequest & keyof CreateAccessPreviewRequest & keyof CreateAccessPreviewRequest]: (CreateAccessPreviewRequest & CreateAccessPreviewRequest & CreateAccessPreviewRequest)[K]
    }>): CreateAccessPreviewResponse {
        return this.client.createAccessPreview(
            this.ops["CreateAccessPreview"].apply(partialParams)
        );
    }

    invokeCreateAnalyzer(partialParams: ToOptional<{
      [K in keyof CreateAnalyzerRequest & keyof CreateAnalyzerRequest & keyof CreateAnalyzerRequest]: (CreateAnalyzerRequest & CreateAnalyzerRequest & CreateAnalyzerRequest)[K]
    }>): CreateAnalyzerResponse {
        return this.client.createAnalyzer(
            this.ops["CreateAnalyzer"].apply(partialParams)
        );
    }

    invokeCreateArchiveRule(partialParams: ToOptional<{
      [K in keyof CreateArchiveRuleRequest & keyof CreateArchiveRuleRequest & keyof CreateArchiveRuleRequest]: (CreateArchiveRuleRequest & CreateArchiveRuleRequest & CreateArchiveRuleRequest)[K]
    }>): void {
        return this.client.createArchiveRule(
            this.ops["CreateArchiveRule"].apply(partialParams)
        );
    }

    invokeDeleteAnalyzer(partialParams: ToOptional<{
      [K in keyof DeleteAnalyzerRequest & keyof DeleteAnalyzerRequest & keyof DeleteAnalyzerRequest]: (DeleteAnalyzerRequest & DeleteAnalyzerRequest & DeleteAnalyzerRequest)[K]
    }>): void {
        return this.client.deleteAnalyzer(
            this.ops["DeleteAnalyzer"].apply(partialParams)
        );
    }

    invokeDeleteArchiveRule(partialParams: ToOptional<{
      [K in keyof DeleteArchiveRuleRequest & keyof DeleteArchiveRuleRequest & keyof DeleteArchiveRuleRequest]: (DeleteArchiveRuleRequest & DeleteArchiveRuleRequest & DeleteArchiveRuleRequest)[K]
    }>): void {
        return this.client.deleteArchiveRule(
            this.ops["DeleteArchiveRule"].apply(partialParams)
        );
    }

    invokeGetAccessPreview(partialParams: ToOptional<{
      [K in keyof GetAccessPreviewRequest & keyof GetAccessPreviewRequest & keyof GetAccessPreviewRequest]: (GetAccessPreviewRequest & GetAccessPreviewRequest & GetAccessPreviewRequest)[K]
    }>): GetAccessPreviewResponse {
        return this.client.getAccessPreview(
            this.ops["GetAccessPreview"].apply(partialParams)
        );
    }

    invokeGetAnalyzedResource(partialParams: ToOptional<{
      [K in keyof GetAnalyzedResourceRequest & keyof GetAnalyzedResourceRequest & keyof GetAnalyzedResourceRequest]: (GetAnalyzedResourceRequest & GetAnalyzedResourceRequest & GetAnalyzedResourceRequest)[K]
    }>): GetAnalyzedResourceResponse {
        return this.client.getAnalyzedResource(
            this.ops["GetAnalyzedResource"].apply(partialParams)
        );
    }

    invokeGetAnalyzer(partialParams: ToOptional<{
      [K in keyof GetAnalyzerRequest & keyof GetAnalyzerRequest & keyof GetAnalyzerRequest]: (GetAnalyzerRequest & GetAnalyzerRequest & GetAnalyzerRequest)[K]
    }>): GetAnalyzerResponse {
        return this.client.getAnalyzer(
            this.ops["GetAnalyzer"].apply(partialParams)
        );
    }

    invokeGetArchiveRule(partialParams: ToOptional<{
      [K in keyof GetArchiveRuleRequest & keyof GetArchiveRuleRequest & keyof GetArchiveRuleRequest]: (GetArchiveRuleRequest & GetArchiveRuleRequest & GetArchiveRuleRequest)[K]
    }>): GetArchiveRuleResponse {
        return this.client.getArchiveRule(
            this.ops["GetArchiveRule"].apply(partialParams)
        );
    }

    invokeGetFinding(partialParams: ToOptional<{
      [K in keyof GetFindingRequest & keyof GetFindingRequest & keyof GetFindingRequest]: (GetFindingRequest & GetFindingRequest & GetFindingRequest)[K]
    }>): GetFindingResponse {
        return this.client.getFinding(
            this.ops["GetFinding"].apply(partialParams)
        );
    }

    invokeGetGeneratedPolicy(partialParams: ToOptional<{
      [K in keyof GetGeneratedPolicyRequest & keyof GetGeneratedPolicyRequest & keyof GetGeneratedPolicyRequest]: (GetGeneratedPolicyRequest & GetGeneratedPolicyRequest & GetGeneratedPolicyRequest)[K]
    }>): GetGeneratedPolicyResponse {
        return this.client.getGeneratedPolicy(
            this.ops["GetGeneratedPolicy"].apply(partialParams)
        );
    }

    invokeListAccessPreviewFindings(partialParams: ToOptional<{
      [K in keyof ListAccessPreviewFindingsRequest & keyof ListAccessPreviewFindingsRequest & keyof ListAccessPreviewFindingsRequest]: (ListAccessPreviewFindingsRequest & ListAccessPreviewFindingsRequest & ListAccessPreviewFindingsRequest)[K]
    }>): ListAccessPreviewFindingsResponse {
        return this.client.listAccessPreviewFindings(
            this.ops["ListAccessPreviewFindings"].apply(partialParams)
        );
    }

    invokeListAccessPreviews(partialParams: ToOptional<{
      [K in keyof ListAccessPreviewsRequest & keyof ListAccessPreviewsRequest & keyof ListAccessPreviewsRequest]: (ListAccessPreviewsRequest & ListAccessPreviewsRequest & ListAccessPreviewsRequest)[K]
    }>): ListAccessPreviewsResponse {
        return this.client.listAccessPreviews(
            this.ops["ListAccessPreviews"].apply(partialParams)
        );
    }

    invokeListAnalyzedResources(partialParams: ToOptional<{
      [K in keyof ListAnalyzedResourcesRequest & keyof ListAnalyzedResourcesRequest & keyof ListAnalyzedResourcesRequest]: (ListAnalyzedResourcesRequest & ListAnalyzedResourcesRequest & ListAnalyzedResourcesRequest)[K]
    }>): ListAnalyzedResourcesResponse {
        return this.client.listAnalyzedResources(
            this.ops["ListAnalyzedResources"].apply(partialParams)
        );
    }

    invokeListArchiveRules(partialParams: ToOptional<{
      [K in keyof ListArchiveRulesRequest & keyof ListArchiveRulesRequest & keyof ListArchiveRulesRequest]: (ListArchiveRulesRequest & ListArchiveRulesRequest & ListArchiveRulesRequest)[K]
    }>): ListArchiveRulesResponse {
        return this.client.listArchiveRules(
            this.ops["ListArchiveRules"].apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest & keyof ListFindingsRequest & keyof ListFindingsRequest]: (ListFindingsRequest & ListFindingsRequest & ListFindingsRequest)[K]
    }>): ListFindingsResponse {
        return this.client.listFindings(
            this.ops["ListFindings"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartPolicyGeneration(partialParams: ToOptional<{
      [K in keyof StartPolicyGenerationRequest & keyof StartPolicyGenerationRequest & keyof StartPolicyGenerationRequest]: (StartPolicyGenerationRequest & StartPolicyGenerationRequest & StartPolicyGenerationRequest)[K]
    }>): StartPolicyGenerationResponse {
        return this.client.startPolicyGeneration(
            this.ops["StartPolicyGeneration"].apply(partialParams)
        );
    }

    invokeStartResourceScan(partialParams: ToOptional<{
      [K in keyof StartResourceScanRequest & keyof StartResourceScanRequest & keyof StartResourceScanRequest]: (StartResourceScanRequest & StartResourceScanRequest & StartResourceScanRequest)[K]
    }>): void {
        return this.client.startResourceScan(
            this.ops["StartResourceScan"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateArchiveRule(partialParams: ToOptional<{
      [K in keyof Omit<UpdateArchiveRuleRequest, "analyzerName"> & keyof UpdateArchiveRuleRequest & keyof UpdateArchiveRuleRequest]: (Omit<UpdateArchiveRuleRequest, "analyzerName"> & UpdateArchiveRuleRequest & UpdateArchiveRuleRequest)[K]
    }>): void {
        return this.client.updateArchiveRule(
            this.ops["UpdateArchiveRule"].apply(partialParams)
        );
    }

    invokeUpdateFindings(partialParams: ToOptional<{
      [K in keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest]: (UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest)[K]
    }>): void {
        return this.client.updateFindings(
            this.ops["UpdateFindings"].apply(partialParams)
        );
    }

    invokeValidatePolicy(partialParams: ToOptional<{
      [K in keyof ValidatePolicyRequest & keyof ValidatePolicyRequest & keyof ValidatePolicyRequest]: (ValidatePolicyRequest & ValidatePolicyRequest & ValidatePolicyRequest)[K]
    }>): ValidatePolicyResponse {
        return this.client.validatePolicy(
            this.ops["ValidatePolicy"].apply(partialParams)
        );
    }
}