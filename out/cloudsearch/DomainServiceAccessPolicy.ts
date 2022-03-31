
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/cloudsearch-2013-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudsearch.DomainServiceAccessPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.cloudsearch.DomainServiceAccessPolicy>) {
        super(...args)
        this.client = new awssdk.CloudSearch()
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

    invokeBuildSuggesters(partialParams: ToOptional<{
      [K in keyof BuildSuggestersRequest & keyof BuildSuggestersRequest]: (BuildSuggestersRequest & BuildSuggestersRequest)[K]
    }>): Request<BuildSuggestersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.buildSuggesters(
          this.ops["BuildSuggesters"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest)[K]
    }>): Request<CreateDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].applicator.apply(partialParams)
        );
    }

    invokeDefineAnalysisScheme(partialParams: ToOptional<{
      [K in keyof DefineAnalysisSchemeRequest & keyof DefineAnalysisSchemeRequest]: (DefineAnalysisSchemeRequest & DefineAnalysisSchemeRequest)[K]
    }>): Request<DefineAnalysisSchemeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineAnalysisScheme(
          this.ops["DefineAnalysisScheme"].applicator.apply(partialParams)
        );
    }

    invokeDefineExpression(partialParams: ToOptional<{
      [K in keyof DefineExpressionRequest & keyof DefineExpressionRequest]: (DefineExpressionRequest & DefineExpressionRequest)[K]
    }>): Request<DefineExpressionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineExpression(
          this.ops["DefineExpression"].applicator.apply(partialParams)
        );
    }

    invokeDefineIndexField(partialParams: ToOptional<{
      [K in keyof DefineIndexFieldRequest & keyof DefineIndexFieldRequest]: (DefineIndexFieldRequest & DefineIndexFieldRequest)[K]
    }>): Request<DefineIndexFieldResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineIndexField(
          this.ops["DefineIndexField"].applicator.apply(partialParams)
        );
    }

    invokeDefineSuggester(partialParams: ToOptional<{
      [K in keyof DefineSuggesterRequest & keyof DefineSuggesterRequest]: (DefineSuggesterRequest & DefineSuggesterRequest)[K]
    }>): Request<DefineSuggesterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.defineSuggester(
          this.ops["DefineSuggester"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAnalysisScheme(partialParams: ToOptional<{
      [K in keyof DeleteAnalysisSchemeRequest & keyof DeleteAnalysisSchemeRequest]: (DeleteAnalysisSchemeRequest & DeleteAnalysisSchemeRequest)[K]
    }>): Request<DeleteAnalysisSchemeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAnalysisScheme(
          this.ops["DeleteAnalysisScheme"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): Request<DeleteDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].applicator.apply(partialParams)
        );
    }

    invokeDeleteExpression(partialParams: ToOptional<{
      [K in keyof DeleteExpressionRequest & keyof DeleteExpressionRequest]: (DeleteExpressionRequest & DeleteExpressionRequest)[K]
    }>): Request<DeleteExpressionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteExpression(
          this.ops["DeleteExpression"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIndexField(partialParams: ToOptional<{
      [K in keyof DeleteIndexFieldRequest & keyof DeleteIndexFieldRequest]: (DeleteIndexFieldRequest & DeleteIndexFieldRequest)[K]
    }>): Request<DeleteIndexFieldResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIndexField(
          this.ops["DeleteIndexField"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSuggester(partialParams: ToOptional<{
      [K in keyof DeleteSuggesterRequest & keyof DeleteSuggesterRequest]: (DeleteSuggesterRequest & DeleteSuggesterRequest)[K]
    }>): Request<DeleteSuggesterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSuggester(
          this.ops["DeleteSuggester"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAnalysisSchemes(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisSchemesRequest & keyof DescribeAnalysisSchemesRequest]: (DescribeAnalysisSchemesRequest & DescribeAnalysisSchemesRequest)[K]
    }>): Request<DescribeAnalysisSchemesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAnalysisSchemes(
          this.ops["DescribeAnalysisSchemes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAvailabilityOptions(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityOptionsRequest & keyof DescribeAvailabilityOptionsRequest]: (DescribeAvailabilityOptionsRequest & DescribeAvailabilityOptionsRequest)[K]
    }>): Request<DescribeAvailabilityOptionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAvailabilityOptions(
          this.ops["DescribeAvailabilityOptions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDomainEndpointOptions(partialParams: ToOptional<{
      [K in keyof DescribeDomainEndpointOptionsRequest & keyof DescribeDomainEndpointOptionsRequest]: (DescribeDomainEndpointOptionsRequest & DescribeDomainEndpointOptionsRequest)[K]
    }>): Request<DescribeDomainEndpointOptionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomainEndpointOptions(
          this.ops["DescribeDomainEndpointOptions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeExpressions(partialParams: ToOptional<{
      [K in keyof DescribeExpressionsRequest & keyof DescribeExpressionsRequest]: (DescribeExpressionsRequest & DescribeExpressionsRequest)[K]
    }>): Request<DescribeExpressionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeExpressions(
          this.ops["DescribeExpressions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIndexFields(partialParams: ToOptional<{
      [K in keyof DescribeIndexFieldsRequest & keyof DescribeIndexFieldsRequest]: (DescribeIndexFieldsRequest & DescribeIndexFieldsRequest)[K]
    }>): Request<DescribeIndexFieldsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIndexFields(
          this.ops["DescribeIndexFields"].applicator.apply(partialParams)
        );
    }

    invokeDescribeScalingParameters(partialParams: ToOptional<{
      [K in keyof DescribeScalingParametersRequest & keyof DescribeScalingParametersRequest]: (DescribeScalingParametersRequest & DescribeScalingParametersRequest)[K]
    }>): Request<DescribeScalingParametersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScalingParameters(
          this.ops["DescribeScalingParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeServiceAccessPolicies(partialParams: ToOptional<{
      [K in keyof DescribeServiceAccessPoliciesRequest & keyof DescribeServiceAccessPoliciesRequest]: (DescribeServiceAccessPoliciesRequest & DescribeServiceAccessPoliciesRequest)[K]
    }>): Request<DescribeServiceAccessPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServiceAccessPolicies(
          this.ops["DescribeServiceAccessPolicies"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSuggesters(partialParams: ToOptional<{
      [K in keyof DescribeSuggestersRequest & keyof DescribeSuggestersRequest]: (DescribeSuggestersRequest & DescribeSuggestersRequest)[K]
    }>): Request<DescribeSuggestersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSuggesters(
          this.ops["DescribeSuggesters"].applicator.apply(partialParams)
        );
    }

    invokeIndexDocuments(partialParams: ToOptional<{
      [K in keyof IndexDocumentsRequest & keyof Omit<IndexDocumentsRequest, "DomainName">]: (IndexDocumentsRequest & Omit<IndexDocumentsRequest, "DomainName">)[K]
    }>): Request<IndexDocumentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.indexDocuments(
          this.ops["IndexDocuments"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAvailabilityOptions(partialParams: ToOptional<{
      [K in keyof UpdateAvailabilityOptionsRequest & keyof Omit<UpdateAvailabilityOptionsRequest, "DomainName">]: (UpdateAvailabilityOptionsRequest & Omit<UpdateAvailabilityOptionsRequest, "DomainName">)[K]
    }>): Request<UpdateAvailabilityOptionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAvailabilityOptions(
          this.ops["UpdateAvailabilityOptions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainEndpointOptions(partialParams: ToOptional<{
      [K in keyof UpdateDomainEndpointOptionsRequest & keyof Omit<UpdateDomainEndpointOptionsRequest, "DomainName">]: (UpdateDomainEndpointOptionsRequest & Omit<UpdateDomainEndpointOptionsRequest, "DomainName">)[K]
    }>): Request<UpdateDomainEndpointOptionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainEndpointOptions(
          this.ops["UpdateDomainEndpointOptions"].applicator.apply(partialParams)
        );
    }

    invokeUpdateScalingParameters(partialParams: ToOptional<{
      [K in keyof UpdateScalingParametersRequest & keyof Omit<UpdateScalingParametersRequest, "DomainName">]: (UpdateScalingParametersRequest & Omit<UpdateScalingParametersRequest, "DomainName">)[K]
    }>): Request<UpdateScalingParametersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateScalingParameters(
          this.ops["UpdateScalingParameters"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServiceAccessPolicies(partialParams: ToOptional<{
      [K in keyof UpdateServiceAccessPoliciesRequest & keyof Omit<UpdateServiceAccessPoliciesRequest, "DomainName">]: (UpdateServiceAccessPoliciesRequest & Omit<UpdateServiceAccessPoliciesRequest, "DomainName">)[K]
    }>): Request<UpdateServiceAccessPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceAccessPolicies(
          this.ops["UpdateServiceAccessPolicies"].applicator.apply(partialParams)
        );
    }
}