
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BuildSuggestersRequest,
    CreateDomainRequest,
    DefineAnalysisSchemeRequest,
    DefineExpressionRequest,
    DefineIndexFieldRequest,
    DefineSuggesterRequest,
    DeleteAnalysisSchemeRequest,
    DeleteDomainRequest,
    DeleteExpressionRequest,
    DeleteIndexFieldRequest,
    DeleteSuggesterRequest,
    DescribeAnalysisSchemesRequest,
    DescribeAvailabilityOptionsRequest,
    DescribeDomainEndpointOptionsRequest,
    DescribeExpressionsRequest,
    DescribeIndexFieldsRequest,
    DescribeScalingParametersRequest,
    DescribeServiceAccessPoliciesRequest,
    DescribeSuggestersRequest,
    IndexDocumentsRequest,
    UpdateAvailabilityOptionsRequest,
    UpdateDomainEndpointOptionsRequest,
    UpdateScalingParametersRequest,
    UpdateServiceAccessPoliciesRequest,
    BuildSuggestersResponse,
    CreateDomainResponse,
    DefineAnalysisSchemeResponse,
    DefineExpressionResponse,
    DefineIndexFieldResponse,
    DefineSuggesterResponse,
    DeleteAnalysisSchemeResponse,
    DeleteDomainResponse,
    DeleteExpressionResponse,
    DeleteIndexFieldResponse,
    DeleteSuggesterResponse,
    DescribeAnalysisSchemesResponse,
    DescribeAvailabilityOptionsResponse,
    DescribeDomainEndpointOptionsResponse,
    DescribeExpressionsResponse,
    DescribeIndexFieldsResponse,
    DescribeScalingParametersResponse,
    DescribeServiceAccessPoliciesResponse,
    DescribeSuggestersResponse,
    IndexDocumentsResponse,
    UpdateAvailabilityOptionsResponse,
    UpdateDomainEndpointOptionsResponse,
    UpdateScalingParametersResponse,
    UpdateServiceAccessPoliciesResponse
} from "aws-sdk/clients/cloudsearch";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudsearch.DomainServiceAccessPolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudsearch.DomainServiceAccessPolicy>) {
        super(...args)
        this.client = new awssdk.CloudSearch()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudsearch-2013-01-01.normal.json"), this.client)
    }

    invokeBuildSuggesters(partialParams: ToOptional<{
      [K in keyof BuildSuggestersRequest & keyof BuildSuggestersRequest]: (BuildSuggestersRequest & BuildSuggestersRequest)[K]
    }>): BuildSuggestersResponse {
        return this.client.buildSuggesters(
            this.ops["BuildSuggesters"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest)[K]
    }>): CreateDomainResponse {
        return this.client.createDomain(
            this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeDefineAnalysisScheme(partialParams: ToOptional<{
      [K in keyof DefineAnalysisSchemeRequest & keyof DefineAnalysisSchemeRequest]: (DefineAnalysisSchemeRequest & DefineAnalysisSchemeRequest)[K]
    }>): DefineAnalysisSchemeResponse {
        return this.client.defineAnalysisScheme(
            this.ops["DefineAnalysisScheme"].apply(partialParams)
        );
    }

    invokeDefineExpression(partialParams: ToOptional<{
      [K in keyof DefineExpressionRequest & keyof DefineExpressionRequest]: (DefineExpressionRequest & DefineExpressionRequest)[K]
    }>): DefineExpressionResponse {
        return this.client.defineExpression(
            this.ops["DefineExpression"].apply(partialParams)
        );
    }

    invokeDefineIndexField(partialParams: ToOptional<{
      [K in keyof DefineIndexFieldRequest & keyof DefineIndexFieldRequest]: (DefineIndexFieldRequest & DefineIndexFieldRequest)[K]
    }>): DefineIndexFieldResponse {
        return this.client.defineIndexField(
            this.ops["DefineIndexField"].apply(partialParams)
        );
    }

    invokeDefineSuggester(partialParams: ToOptional<{
      [K in keyof DefineSuggesterRequest & keyof DefineSuggesterRequest]: (DefineSuggesterRequest & DefineSuggesterRequest)[K]
    }>): DefineSuggesterResponse {
        return this.client.defineSuggester(
            this.ops["DefineSuggester"].apply(partialParams)
        );
    }

    invokeDeleteAnalysisScheme(partialParams: ToOptional<{
      [K in keyof DeleteAnalysisSchemeRequest & keyof DeleteAnalysisSchemeRequest]: (DeleteAnalysisSchemeRequest & DeleteAnalysisSchemeRequest)[K]
    }>): DeleteAnalysisSchemeResponse {
        return this.client.deleteAnalysisScheme(
            this.ops["DeleteAnalysisScheme"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): DeleteDomainResponse {
        return this.client.deleteDomain(
            this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteExpression(partialParams: ToOptional<{
      [K in keyof DeleteExpressionRequest & keyof DeleteExpressionRequest]: (DeleteExpressionRequest & DeleteExpressionRequest)[K]
    }>): DeleteExpressionResponse {
        return this.client.deleteExpression(
            this.ops["DeleteExpression"].apply(partialParams)
        );
    }

    invokeDeleteIndexField(partialParams: ToOptional<{
      [K in keyof DeleteIndexFieldRequest & keyof DeleteIndexFieldRequest]: (DeleteIndexFieldRequest & DeleteIndexFieldRequest)[K]
    }>): DeleteIndexFieldResponse {
        return this.client.deleteIndexField(
            this.ops["DeleteIndexField"].apply(partialParams)
        );
    }

    invokeDeleteSuggester(partialParams: ToOptional<{
      [K in keyof DeleteSuggesterRequest & keyof DeleteSuggesterRequest]: (DeleteSuggesterRequest & DeleteSuggesterRequest)[K]
    }>): DeleteSuggesterResponse {
        return this.client.deleteSuggester(
            this.ops["DeleteSuggester"].apply(partialParams)
        );
    }

    invokeDescribeAnalysisSchemes(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisSchemesRequest & keyof DescribeAnalysisSchemesRequest]: (DescribeAnalysisSchemesRequest & DescribeAnalysisSchemesRequest)[K]
    }>): DescribeAnalysisSchemesResponse {
        return this.client.describeAnalysisSchemes(
            this.ops["DescribeAnalysisSchemes"].apply(partialParams)
        );
    }

    invokeDescribeAvailabilityOptions(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityOptionsRequest & keyof DescribeAvailabilityOptionsRequest]: (DescribeAvailabilityOptionsRequest & DescribeAvailabilityOptionsRequest)[K]
    }>): DescribeAvailabilityOptionsResponse {
        return this.client.describeAvailabilityOptions(
            this.ops["DescribeAvailabilityOptions"].apply(partialParams)
        );
    }

    invokeDescribeDomainEndpointOptions(partialParams: ToOptional<{
      [K in keyof DescribeDomainEndpointOptionsRequest & keyof DescribeDomainEndpointOptionsRequest]: (DescribeDomainEndpointOptionsRequest & DescribeDomainEndpointOptionsRequest)[K]
    }>): DescribeDomainEndpointOptionsResponse {
        return this.client.describeDomainEndpointOptions(
            this.ops["DescribeDomainEndpointOptions"].apply(partialParams)
        );
    }

    invokeDescribeExpressions(partialParams: ToOptional<{
      [K in keyof DescribeExpressionsRequest & keyof DescribeExpressionsRequest]: (DescribeExpressionsRequest & DescribeExpressionsRequest)[K]
    }>): DescribeExpressionsResponse {
        return this.client.describeExpressions(
            this.ops["DescribeExpressions"].apply(partialParams)
        );
    }

    invokeDescribeIndexFields(partialParams: ToOptional<{
      [K in keyof DescribeIndexFieldsRequest & keyof DescribeIndexFieldsRequest]: (DescribeIndexFieldsRequest & DescribeIndexFieldsRequest)[K]
    }>): DescribeIndexFieldsResponse {
        return this.client.describeIndexFields(
            this.ops["DescribeIndexFields"].apply(partialParams)
        );
    }

    invokeDescribeScalingParameters(partialParams: ToOptional<{
      [K in keyof DescribeScalingParametersRequest & keyof DescribeScalingParametersRequest]: (DescribeScalingParametersRequest & DescribeScalingParametersRequest)[K]
    }>): DescribeScalingParametersResponse {
        return this.client.describeScalingParameters(
            this.ops["DescribeScalingParameters"].apply(partialParams)
        );
    }

    invokeDescribeServiceAccessPolicies(partialParams: ToOptional<{
      [K in keyof DescribeServiceAccessPoliciesRequest & keyof DescribeServiceAccessPoliciesRequest]: (DescribeServiceAccessPoliciesRequest & DescribeServiceAccessPoliciesRequest)[K]
    }>): DescribeServiceAccessPoliciesResponse {
        return this.client.describeServiceAccessPolicies(
            this.ops["DescribeServiceAccessPolicies"].apply(partialParams)
        );
    }

    invokeDescribeSuggesters(partialParams: ToOptional<{
      [K in keyof DescribeSuggestersRequest & keyof DescribeSuggestersRequest]: (DescribeSuggestersRequest & DescribeSuggestersRequest)[K]
    }>): DescribeSuggestersResponse {
        return this.client.describeSuggesters(
            this.ops["DescribeSuggesters"].apply(partialParams)
        );
    }

    invokeIndexDocuments(partialParams: ToOptional<{
      [K in keyof IndexDocumentsRequest & keyof Omit<IndexDocumentsRequest, "DomainName">]: (IndexDocumentsRequest & Omit<IndexDocumentsRequest, "DomainName">)[K]
    }>): IndexDocumentsResponse {
        return this.client.indexDocuments(
            this.ops["IndexDocuments"].apply(partialParams)
        );
    }

    invokeUpdateAvailabilityOptions(partialParams: ToOptional<{
      [K in keyof UpdateAvailabilityOptionsRequest & keyof Omit<UpdateAvailabilityOptionsRequest, "DomainName">]: (UpdateAvailabilityOptionsRequest & Omit<UpdateAvailabilityOptionsRequest, "DomainName">)[K]
    }>): UpdateAvailabilityOptionsResponse {
        return this.client.updateAvailabilityOptions(
            this.ops["UpdateAvailabilityOptions"].apply(partialParams)
        );
    }

    invokeUpdateDomainEndpointOptions(partialParams: ToOptional<{
      [K in keyof UpdateDomainEndpointOptionsRequest & keyof Omit<UpdateDomainEndpointOptionsRequest, "DomainName">]: (UpdateDomainEndpointOptionsRequest & Omit<UpdateDomainEndpointOptionsRequest, "DomainName">)[K]
    }>): UpdateDomainEndpointOptionsResponse {
        return this.client.updateDomainEndpointOptions(
            this.ops["UpdateDomainEndpointOptions"].apply(partialParams)
        );
    }

    invokeUpdateScalingParameters(partialParams: ToOptional<{
      [K in keyof UpdateScalingParametersRequest & keyof Omit<UpdateScalingParametersRequest, "DomainName">]: (UpdateScalingParametersRequest & Omit<UpdateScalingParametersRequest, "DomainName">)[K]
    }>): UpdateScalingParametersResponse {
        return this.client.updateScalingParameters(
            this.ops["UpdateScalingParameters"].apply(partialParams)
        );
    }

    invokeUpdateServiceAccessPolicies(partialParams: ToOptional<{
      [K in keyof UpdateServiceAccessPoliciesRequest & keyof Omit<UpdateServiceAccessPoliciesRequest, "DomainName">]: (UpdateServiceAccessPoliciesRequest & Omit<UpdateServiceAccessPoliciesRequest, "DomainName">)[K]
    }>): UpdateServiceAccessPoliciesResponse {
        return this.client.updateServiceAccessPolicies(
            this.ops["UpdateServiceAccessPolicies"].apply(partialParams)
        );
    }
}