
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
    DescribeDomainsRequest,
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
    DescribeDomainsResponse,
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

export default class extends aws.cloudsearch.Domain {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudsearch.Domain>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudSearch()
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

    invokeBuildSuggesters(partialParams: ToOptional<{
      [K in keyof BuildSuggestersRequest & keyof Omit<BuildSuggestersRequest, "DomainName">]: (BuildSuggestersRequest)[K]
    }>): Request<BuildSuggestersResponse, AWSError> {
        this.boot();
        return this.client.buildSuggesters(
          this.ops["BuildSuggesters"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof Omit<CreateDomainRequest, "DomainName">]: (CreateDomainRequest)[K]
    }>): Request<CreateDomainResponse, AWSError> {
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeDefineAnalysisScheme(partialParams: ToOptional<{
      [K in keyof DefineAnalysisSchemeRequest & keyof Omit<DefineAnalysisSchemeRequest, "DomainName">]: (DefineAnalysisSchemeRequest)[K]
    }>): Request<DefineAnalysisSchemeResponse, AWSError> {
        this.boot();
        return this.client.defineAnalysisScheme(
          this.ops["DefineAnalysisScheme"].apply(partialParams)
        );
    }

    invokeDefineExpression(partialParams: ToOptional<{
      [K in keyof DefineExpressionRequest & keyof Omit<DefineExpressionRequest, "DomainName">]: (DefineExpressionRequest)[K]
    }>): Request<DefineExpressionResponse, AWSError> {
        this.boot();
        return this.client.defineExpression(
          this.ops["DefineExpression"].apply(partialParams)
        );
    }

    invokeDefineIndexField(partialParams: ToOptional<{
      [K in keyof DefineIndexFieldRequest & keyof Omit<DefineIndexFieldRequest, "DomainName">]: (DefineIndexFieldRequest)[K]
    }>): Request<DefineIndexFieldResponse, AWSError> {
        this.boot();
        return this.client.defineIndexField(
          this.ops["DefineIndexField"].apply(partialParams)
        );
    }

    invokeDefineSuggester(partialParams: ToOptional<{
      [K in keyof DefineSuggesterRequest & keyof Omit<DefineSuggesterRequest, "DomainName">]: (DefineSuggesterRequest)[K]
    }>): Request<DefineSuggesterResponse, AWSError> {
        this.boot();
        return this.client.defineSuggester(
          this.ops["DefineSuggester"].apply(partialParams)
        );
    }

    invokeDeleteAnalysisScheme(partialParams: ToOptional<{
      [K in keyof DeleteAnalysisSchemeRequest & keyof Omit<DeleteAnalysisSchemeRequest, "DomainName">]: (DeleteAnalysisSchemeRequest)[K]
    }>): Request<DeleteAnalysisSchemeResponse, AWSError> {
        this.boot();
        return this.client.deleteAnalysisScheme(
          this.ops["DeleteAnalysisScheme"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof Omit<DeleteDomainRequest, "DomainName">]: (DeleteDomainRequest)[K]
    }>): Request<DeleteDomainResponse, AWSError> {
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteExpression(partialParams: ToOptional<{
      [K in keyof DeleteExpressionRequest & keyof Omit<DeleteExpressionRequest, "DomainName">]: (DeleteExpressionRequest)[K]
    }>): Request<DeleteExpressionResponse, AWSError> {
        this.boot();
        return this.client.deleteExpression(
          this.ops["DeleteExpression"].apply(partialParams)
        );
    }

    invokeDeleteIndexField(partialParams: ToOptional<{
      [K in keyof DeleteIndexFieldRequest & keyof Omit<DeleteIndexFieldRequest, "DomainName">]: (DeleteIndexFieldRequest)[K]
    }>): Request<DeleteIndexFieldResponse, AWSError> {
        this.boot();
        return this.client.deleteIndexField(
          this.ops["DeleteIndexField"].apply(partialParams)
        );
    }

    invokeDeleteSuggester(partialParams: ToOptional<{
      [K in keyof DeleteSuggesterRequest & keyof Omit<DeleteSuggesterRequest, "DomainName">]: (DeleteSuggesterRequest)[K]
    }>): Request<DeleteSuggesterResponse, AWSError> {
        this.boot();
        return this.client.deleteSuggester(
          this.ops["DeleteSuggester"].apply(partialParams)
        );
    }

    invokeDescribeAnalysisSchemes(partialParams: ToOptional<{
      [K in keyof DescribeAnalysisSchemesRequest & keyof Omit<DescribeAnalysisSchemesRequest, "DomainName">]: (DescribeAnalysisSchemesRequest)[K]
    }>): Request<DescribeAnalysisSchemesResponse, AWSError> {
        this.boot();
        return this.client.describeAnalysisSchemes(
          this.ops["DescribeAnalysisSchemes"].apply(partialParams)
        );
    }

    invokeDescribeAvailabilityOptions(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityOptionsRequest & keyof Omit<DescribeAvailabilityOptionsRequest, "DomainName">]: (DescribeAvailabilityOptionsRequest)[K]
    }>): Request<DescribeAvailabilityOptionsResponse, AWSError> {
        this.boot();
        return this.client.describeAvailabilityOptions(
          this.ops["DescribeAvailabilityOptions"].apply(partialParams)
        );
    }

    invokeDescribeDomainEndpointOptions(partialParams: ToOptional<{
      [K in keyof DescribeDomainEndpointOptionsRequest & keyof Omit<DescribeDomainEndpointOptionsRequest, "DomainName">]: (DescribeDomainEndpointOptionsRequest)[K]
    }>): Request<DescribeDomainEndpointOptionsResponse, AWSError> {
        this.boot();
        return this.client.describeDomainEndpointOptions(
          this.ops["DescribeDomainEndpointOptions"].apply(partialParams)
        );
    }

    invokeDescribeDomains(partialParams: ToOptional<{
      [K in keyof DescribeDomainsRequest]: (DescribeDomainsRequest)[K]
    }>): Request<DescribeDomainsResponse, AWSError> {
        this.boot();
        return this.client.describeDomains(
          this.ops["DescribeDomains"].apply(partialParams)
        );
    }

    invokeDescribeExpressions(partialParams: ToOptional<{
      [K in keyof DescribeExpressionsRequest & keyof Omit<DescribeExpressionsRequest, "DomainName">]: (DescribeExpressionsRequest)[K]
    }>): Request<DescribeExpressionsResponse, AWSError> {
        this.boot();
        return this.client.describeExpressions(
          this.ops["DescribeExpressions"].apply(partialParams)
        );
    }

    invokeDescribeIndexFields(partialParams: ToOptional<{
      [K in keyof DescribeIndexFieldsRequest & keyof Omit<DescribeIndexFieldsRequest, "DomainName">]: (DescribeIndexFieldsRequest)[K]
    }>): Request<DescribeIndexFieldsResponse, AWSError> {
        this.boot();
        return this.client.describeIndexFields(
          this.ops["DescribeIndexFields"].apply(partialParams)
        );
    }

    invokeDescribeScalingParameters(partialParams: ToOptional<{
      [K in keyof DescribeScalingParametersRequest & keyof Omit<DescribeScalingParametersRequest, "DomainName">]: (DescribeScalingParametersRequest)[K]
    }>): Request<DescribeScalingParametersResponse, AWSError> {
        this.boot();
        return this.client.describeScalingParameters(
          this.ops["DescribeScalingParameters"].apply(partialParams)
        );
    }

    invokeDescribeServiceAccessPolicies(partialParams: ToOptional<{
      [K in keyof DescribeServiceAccessPoliciesRequest & keyof Omit<DescribeServiceAccessPoliciesRequest, "DomainName">]: (DescribeServiceAccessPoliciesRequest)[K]
    }>): Request<DescribeServiceAccessPoliciesResponse, AWSError> {
        this.boot();
        return this.client.describeServiceAccessPolicies(
          this.ops["DescribeServiceAccessPolicies"].apply(partialParams)
        );
    }

    invokeDescribeSuggesters(partialParams: ToOptional<{
      [K in keyof DescribeSuggestersRequest & keyof Omit<DescribeSuggestersRequest, "DomainName">]: (DescribeSuggestersRequest)[K]
    }>): Request<DescribeSuggestersResponse, AWSError> {
        this.boot();
        return this.client.describeSuggesters(
          this.ops["DescribeSuggesters"].apply(partialParams)
        );
    }

    invokeIndexDocuments(partialParams: ToOptional<{
      [K in keyof IndexDocumentsRequest & keyof Omit<IndexDocumentsRequest, "DomainName">]: (IndexDocumentsRequest)[K]
    }>): Request<IndexDocumentsResponse, AWSError> {
        this.boot();
        return this.client.indexDocuments(
          this.ops["IndexDocuments"].apply(partialParams)
        );
    }

    invokeUpdateAvailabilityOptions(partialParams: ToOptional<{
      [K in keyof UpdateAvailabilityOptionsRequest & keyof Omit<UpdateAvailabilityOptionsRequest, "DomainName">]: (UpdateAvailabilityOptionsRequest)[K]
    }>): Request<UpdateAvailabilityOptionsResponse, AWSError> {
        this.boot();
        return this.client.updateAvailabilityOptions(
          this.ops["UpdateAvailabilityOptions"].apply(partialParams)
        );
    }

    invokeUpdateDomainEndpointOptions(partialParams: ToOptional<{
      [K in keyof UpdateDomainEndpointOptionsRequest & keyof Omit<UpdateDomainEndpointOptionsRequest, "DomainName">]: (UpdateDomainEndpointOptionsRequest)[K]
    }>): Request<UpdateDomainEndpointOptionsResponse, AWSError> {
        this.boot();
        return this.client.updateDomainEndpointOptions(
          this.ops["UpdateDomainEndpointOptions"].apply(partialParams)
        );
    }

    invokeUpdateScalingParameters(partialParams: ToOptional<{
      [K in keyof UpdateScalingParametersRequest & keyof Omit<UpdateScalingParametersRequest, "DomainName">]: (UpdateScalingParametersRequest)[K]
    }>): Request<UpdateScalingParametersResponse, AWSError> {
        this.boot();
        return this.client.updateScalingParameters(
          this.ops["UpdateScalingParameters"].apply(partialParams)
        );
    }

    invokeUpdateServiceAccessPolicies(partialParams: ToOptional<{
      [K in keyof UpdateServiceAccessPoliciesRequest & keyof Omit<UpdateServiceAccessPoliciesRequest, "DomainName">]: (UpdateServiceAccessPoliciesRequest)[K]
    }>): Request<UpdateServiceAccessPoliciesResponse, AWSError> {
        this.boot();
        return this.client.updateServiceAccessPolicies(
          this.ops["UpdateServiceAccessPolicies"].apply(partialParams)
        );
    }
}