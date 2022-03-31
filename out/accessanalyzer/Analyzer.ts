
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/accessanalyzer-2019-11-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.accessanalyzer.Analyzer {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.accessanalyzer.Analyzer>) {
        super(...args)
        this.client = new awssdk.AccessAnalyzer()
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

    invokeApplyArchiveRule(partialParams: ToOptional<{
      [K in keyof ApplyArchiveRuleRequest & keyof ApplyArchiveRuleRequest & keyof ApplyArchiveRuleRequest]: (ApplyArchiveRuleRequest & ApplyArchiveRuleRequest & ApplyArchiveRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applyArchiveRule(
          this.ops["ApplyArchiveRule"].applicator.apply(partialParams)
        );
    }

    invokeCancelPolicyGeneration(partialParams: ToOptional<{
      [K in keyof CancelPolicyGenerationRequest & keyof CancelPolicyGenerationRequest & keyof CancelPolicyGenerationRequest]: (CancelPolicyGenerationRequest & CancelPolicyGenerationRequest & CancelPolicyGenerationRequest)[K]
    }>): Request<CancelPolicyGenerationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelPolicyGeneration(
          this.ops["CancelPolicyGeneration"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccessPreview(partialParams: ToOptional<{
      [K in keyof CreateAccessPreviewRequest & keyof CreateAccessPreviewRequest & keyof CreateAccessPreviewRequest]: (CreateAccessPreviewRequest & CreateAccessPreviewRequest & CreateAccessPreviewRequest)[K]
    }>): Request<CreateAccessPreviewResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccessPreview(
          this.ops["CreateAccessPreview"].applicator.apply(partialParams)
        );
    }

    invokeCreateAnalyzer(partialParams: ToOptional<{
      [K in keyof CreateAnalyzerRequest & keyof CreateAnalyzerRequest & keyof CreateAnalyzerRequest]: (CreateAnalyzerRequest & CreateAnalyzerRequest & CreateAnalyzerRequest)[K]
    }>): Request<CreateAnalyzerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAnalyzer(
          this.ops["CreateAnalyzer"].applicator.apply(partialParams)
        );
    }

    invokeCreateArchiveRule(partialParams: ToOptional<{
      [K in keyof CreateArchiveRuleRequest & keyof CreateArchiveRuleRequest & keyof CreateArchiveRuleRequest]: (CreateArchiveRuleRequest & CreateArchiveRuleRequest & CreateArchiveRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createArchiveRule(
          this.ops["CreateArchiveRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAnalyzer(partialParams: ToOptional<{
      [K in keyof DeleteAnalyzerRequest & keyof DeleteAnalyzerRequest & keyof DeleteAnalyzerRequest]: (DeleteAnalyzerRequest & DeleteAnalyzerRequest & DeleteAnalyzerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAnalyzer(
          this.ops["DeleteAnalyzer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteArchiveRule(partialParams: ToOptional<{
      [K in keyof DeleteArchiveRuleRequest & keyof DeleteArchiveRuleRequest & keyof DeleteArchiveRuleRequest]: (DeleteArchiveRuleRequest & DeleteArchiveRuleRequest & DeleteArchiveRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteArchiveRule(
          this.ops["DeleteArchiveRule"].applicator.apply(partialParams)
        );
    }

    invokeGetAccessPreview(partialParams: ToOptional<{
      [K in keyof GetAccessPreviewRequest & keyof GetAccessPreviewRequest & keyof GetAccessPreviewRequest]: (GetAccessPreviewRequest & GetAccessPreviewRequest & GetAccessPreviewRequest)[K]
    }>): Request<GetAccessPreviewResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccessPreview(
          this.ops["GetAccessPreview"].applicator.apply(partialParams)
        );
    }

    invokeGetAnalyzedResource(partialParams: ToOptional<{
      [K in keyof GetAnalyzedResourceRequest & keyof GetAnalyzedResourceRequest & keyof GetAnalyzedResourceRequest]: (GetAnalyzedResourceRequest & GetAnalyzedResourceRequest & GetAnalyzedResourceRequest)[K]
    }>): Request<GetAnalyzedResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAnalyzedResource(
          this.ops["GetAnalyzedResource"].applicator.apply(partialParams)
        );
    }

    invokeGetAnalyzer(partialParams: ToOptional<{
      [K in keyof GetAnalyzerRequest & keyof GetAnalyzerRequest & keyof GetAnalyzerRequest]: (GetAnalyzerRequest & GetAnalyzerRequest & GetAnalyzerRequest)[K]
    }>): Request<GetAnalyzerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAnalyzer(
          this.ops["GetAnalyzer"].applicator.apply(partialParams)
        );
    }

    invokeGetArchiveRule(partialParams: ToOptional<{
      [K in keyof GetArchiveRuleRequest & keyof GetArchiveRuleRequest & keyof GetArchiveRuleRequest]: (GetArchiveRuleRequest & GetArchiveRuleRequest & GetArchiveRuleRequest)[K]
    }>): Request<GetArchiveRuleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getArchiveRule(
          this.ops["GetArchiveRule"].applicator.apply(partialParams)
        );
    }

    invokeGetFinding(partialParams: ToOptional<{
      [K in keyof GetFindingRequest & keyof GetFindingRequest & keyof GetFindingRequest]: (GetFindingRequest & GetFindingRequest & GetFindingRequest)[K]
    }>): Request<GetFindingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFinding(
          this.ops["GetFinding"].applicator.apply(partialParams)
        );
    }

    invokeGetGeneratedPolicy(partialParams: ToOptional<{
      [K in keyof GetGeneratedPolicyRequest & keyof GetGeneratedPolicyRequest & keyof GetGeneratedPolicyRequest]: (GetGeneratedPolicyRequest & GetGeneratedPolicyRequest & GetGeneratedPolicyRequest)[K]
    }>): Request<GetGeneratedPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGeneratedPolicy(
          this.ops["GetGeneratedPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListAccessPreviewFindings(partialParams: ToOptional<{
      [K in keyof ListAccessPreviewFindingsRequest & keyof ListAccessPreviewFindingsRequest & keyof ListAccessPreviewFindingsRequest]: (ListAccessPreviewFindingsRequest & ListAccessPreviewFindingsRequest & ListAccessPreviewFindingsRequest)[K]
    }>): Request<ListAccessPreviewFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAccessPreviewFindings(
          this.ops["ListAccessPreviewFindings"].applicator.apply(partialParams)
        );
    }

    invokeListAccessPreviews(partialParams: ToOptional<{
      [K in keyof ListAccessPreviewsRequest & keyof ListAccessPreviewsRequest & keyof ListAccessPreviewsRequest]: (ListAccessPreviewsRequest & ListAccessPreviewsRequest & ListAccessPreviewsRequest)[K]
    }>): Request<ListAccessPreviewsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAccessPreviews(
          this.ops["ListAccessPreviews"].applicator.apply(partialParams)
        );
    }

    invokeListAnalyzedResources(partialParams: ToOptional<{
      [K in keyof ListAnalyzedResourcesRequest & keyof ListAnalyzedResourcesRequest & keyof ListAnalyzedResourcesRequest]: (ListAnalyzedResourcesRequest & ListAnalyzedResourcesRequest & ListAnalyzedResourcesRequest)[K]
    }>): Request<ListAnalyzedResourcesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAnalyzedResources(
          this.ops["ListAnalyzedResources"].applicator.apply(partialParams)
        );
    }

    invokeListArchiveRules(partialParams: ToOptional<{
      [K in keyof ListArchiveRulesRequest & keyof ListArchiveRulesRequest & keyof ListArchiveRulesRequest]: (ListArchiveRulesRequest & ListArchiveRulesRequest & ListArchiveRulesRequest)[K]
    }>): Request<ListArchiveRulesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listArchiveRules(
          this.ops["ListArchiveRules"].applicator.apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest & keyof ListFindingsRequest & keyof ListFindingsRequest]: (ListFindingsRequest & ListFindingsRequest & ListFindingsRequest)[K]
    }>): Request<ListFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFindings(
          this.ops["ListFindings"].applicator.apply(partialParams)
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

    invokeStartPolicyGeneration(partialParams: ToOptional<{
      [K in keyof StartPolicyGenerationRequest & keyof StartPolicyGenerationRequest & keyof StartPolicyGenerationRequest]: (StartPolicyGenerationRequest & StartPolicyGenerationRequest & StartPolicyGenerationRequest)[K]
    }>): Request<StartPolicyGenerationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startPolicyGeneration(
          this.ops["StartPolicyGeneration"].applicator.apply(partialParams)
        );
    }

    invokeStartResourceScan(partialParams: ToOptional<{
      [K in keyof StartResourceScanRequest & keyof StartResourceScanRequest & keyof StartResourceScanRequest]: (StartResourceScanRequest & StartResourceScanRequest & StartResourceScanRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startResourceScan(
          this.ops["StartResourceScan"].applicator.apply(partialParams)
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

    invokeUpdateArchiveRule(partialParams: ToOptional<{
      [K in keyof Omit<UpdateArchiveRuleRequest, "analyzerName"> & keyof UpdateArchiveRuleRequest & keyof UpdateArchiveRuleRequest]: (Omit<UpdateArchiveRuleRequest, "analyzerName"> & UpdateArchiveRuleRequest & UpdateArchiveRuleRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateArchiveRule(
          this.ops["UpdateArchiveRule"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFindings(partialParams: ToOptional<{
      [K in keyof UpdateFindingsRequest & keyof UpdateFindingsRequest & keyof UpdateFindingsRequest]: (UpdateFindingsRequest & UpdateFindingsRequest & UpdateFindingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindings(
          this.ops["UpdateFindings"].applicator.apply(partialParams)
        );
    }

    invokeValidatePolicy(partialParams: ToOptional<{
      [K in keyof ValidatePolicyRequest & keyof ValidatePolicyRequest & keyof ValidatePolicyRequest]: (ValidatePolicyRequest & ValidatePolicyRequest & ValidatePolicyRequest)[K]
    }>): Request<ValidatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validatePolicy(
          this.ops["ValidatePolicy"].applicator.apply(partialParams)
        );
    }
}