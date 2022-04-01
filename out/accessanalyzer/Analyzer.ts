
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelPolicyGenerationRequest,
    CreateAccessPreviewRequest,
    CreateAnalyzerRequest,
    GetAccessPreviewRequest,
    GetAnalyzedResourceRequest,
    GetAnalyzerRequest,
    GetArchiveRuleRequest,
    GetFindingRequest,
    GetGeneratedPolicyRequest,
    ListAccessPreviewFindingsRequest,
    ListAccessPreviewsRequest,
    ListAnalyzedResourcesRequest,
    ListAnalyzersRequest,
    ListArchiveRulesRequest,
    ListFindingsRequest,
    ListPolicyGenerationsRequest,
    ListTagsForResourceRequest,
    StartPolicyGenerationRequest,
    TagResourceRequest,
    UntagResourceRequest,
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
    ListAnalyzersResponse,
    ListArchiveRulesResponse,
    ListFindingsResponse,
    ListPolicyGenerationsResponse,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.accessanalyzer.Analyzer>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AccessAnalyzer()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeCancelPolicyGeneration(partialParams: ToOptional<{
      [K in keyof CancelPolicyGenerationRequest]: (CancelPolicyGenerationRequest)[K]
    }>): Request<CancelPolicyGenerationResponse, AWSError> {
        this.boot();
        return this.client.cancelPolicyGeneration(
          this.ops["CancelPolicyGeneration"].apply(partialParams)
        );
    }

    invokeCreateAccessPreview(partialParams: ToOptional<{
      [K in keyof CreateAccessPreviewRequest]: (CreateAccessPreviewRequest)[K]
    }>): Request<CreateAccessPreviewResponse, AWSError> {
        this.boot();
        return this.client.createAccessPreview(
          this.ops["CreateAccessPreview"].apply(partialParams)
        );
    }

    invokeCreateAnalyzer(partialParams: ToOptional<{
      [K in keyof CreateAnalyzerRequest]: (CreateAnalyzerRequest)[K]
    }>): Request<CreateAnalyzerResponse, AWSError> {
        this.boot();
        return this.client.createAnalyzer(
          this.ops["CreateAnalyzer"].apply(partialParams)
        );
    }

    invokeGetAccessPreview(partialParams: ToOptional<{
      [K in keyof GetAccessPreviewRequest]: (GetAccessPreviewRequest)[K]
    }>): Request<GetAccessPreviewResponse, AWSError> {
        this.boot();
        return this.client.getAccessPreview(
          this.ops["GetAccessPreview"].apply(partialParams)
        );
    }

    invokeGetAnalyzedResource(partialParams: ToOptional<{
      [K in keyof GetAnalyzedResourceRequest]: (GetAnalyzedResourceRequest)[K]
    }>): Request<GetAnalyzedResourceResponse, AWSError> {
        this.boot();
        return this.client.getAnalyzedResource(
          this.ops["GetAnalyzedResource"].apply(partialParams)
        );
    }

    invokeGetAnalyzer(partialParams: ToOptional<{
      [K in keyof GetAnalyzerRequest]: (GetAnalyzerRequest)[K]
    }>): Request<GetAnalyzerResponse, AWSError> {
        this.boot();
        return this.client.getAnalyzer(
          this.ops["GetAnalyzer"].apply(partialParams)
        );
    }

    invokeGetArchiveRule(partialParams: ToOptional<{
      [K in keyof GetArchiveRuleRequest]: (GetArchiveRuleRequest)[K]
    }>): Request<GetArchiveRuleResponse, AWSError> {
        this.boot();
        return this.client.getArchiveRule(
          this.ops["GetArchiveRule"].apply(partialParams)
        );
    }

    invokeGetFinding(partialParams: ToOptional<{
      [K in keyof GetFindingRequest]: (GetFindingRequest)[K]
    }>): Request<GetFindingResponse, AWSError> {
        this.boot();
        return this.client.getFinding(
          this.ops["GetFinding"].apply(partialParams)
        );
    }

    invokeGetGeneratedPolicy(partialParams: ToOptional<{
      [K in keyof GetGeneratedPolicyRequest]: (GetGeneratedPolicyRequest)[K]
    }>): Request<GetGeneratedPolicyResponse, AWSError> {
        this.boot();
        return this.client.getGeneratedPolicy(
          this.ops["GetGeneratedPolicy"].apply(partialParams)
        );
    }

    invokeListAccessPreviewFindings(partialParams: ToOptional<{
      [K in keyof ListAccessPreviewFindingsRequest]: (ListAccessPreviewFindingsRequest)[K]
    }>): Request<ListAccessPreviewFindingsResponse, AWSError> {
        this.boot();
        return this.client.listAccessPreviewFindings(
          this.ops["ListAccessPreviewFindings"].apply(partialParams)
        );
    }

    invokeListAccessPreviews(partialParams: ToOptional<{
      [K in keyof ListAccessPreviewsRequest]: (ListAccessPreviewsRequest)[K]
    }>): Request<ListAccessPreviewsResponse, AWSError> {
        this.boot();
        return this.client.listAccessPreviews(
          this.ops["ListAccessPreviews"].apply(partialParams)
        );
    }

    invokeListAnalyzedResources(partialParams: ToOptional<{
      [K in keyof ListAnalyzedResourcesRequest]: (ListAnalyzedResourcesRequest)[K]
    }>): Request<ListAnalyzedResourcesResponse, AWSError> {
        this.boot();
        return this.client.listAnalyzedResources(
          this.ops["ListAnalyzedResources"].apply(partialParams)
        );
    }

    invokeListAnalyzers(partialParams: ToOptional<{
      [K in keyof ListAnalyzersRequest]: (ListAnalyzersRequest)[K]
    }>): Request<ListAnalyzersResponse, AWSError> {
        this.boot();
        return this.client.listAnalyzers(
          this.ops["ListAnalyzers"].apply(partialParams)
        );
    }

    invokeListArchiveRules(partialParams: ToOptional<{
      [K in keyof ListArchiveRulesRequest]: (ListArchiveRulesRequest)[K]
    }>): Request<ListArchiveRulesResponse, AWSError> {
        this.boot();
        return this.client.listArchiveRules(
          this.ops["ListArchiveRules"].apply(partialParams)
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

    invokeListPolicyGenerations(partialParams: ToOptional<{
      [K in keyof ListPolicyGenerationsRequest]: (ListPolicyGenerationsRequest)[K]
    }>): Request<ListPolicyGenerationsResponse, AWSError> {
        this.boot();
        return this.client.listPolicyGenerations(
          this.ops["ListPolicyGenerations"].apply(partialParams)
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

    invokeStartPolicyGeneration(partialParams: ToOptional<{
      [K in keyof StartPolicyGenerationRequest]: (StartPolicyGenerationRequest)[K]
    }>): Request<StartPolicyGenerationResponse, AWSError> {
        this.boot();
        return this.client.startPolicyGeneration(
          this.ops["StartPolicyGeneration"].apply(partialParams)
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

    invokeValidatePolicy(partialParams: ToOptional<{
      [K in keyof ValidatePolicyRequest]: (ValidatePolicyRequest)[K]
    }>): Request<ValidatePolicyResponse, AWSError> {
        this.boot();
        return this.client.validatePolicy(
          this.ops["ValidatePolicy"].apply(partialParams)
        );
    }
}