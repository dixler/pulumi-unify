
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApiKeyRequest,
    CreateAuthorizerRequest,
    CreateBasePathMappingRequest,
    CreateDeploymentRequest,
    CreateDocumentationPartRequest,
    CreateDocumentationVersionRequest,
    CreateDomainNameRequest,
    CreateModelRequest,
    CreateRequestValidatorRequest,
    CreateResourceRequest,
    CreateRestApiRequest,
    CreateStageRequest,
    CreateUsagePlanRequest,
    CreateUsagePlanKeyRequest,
    CreateVpcLinkRequest,
    GenerateClientCertificateRequest,
    GetAccountRequest,
    GetApiKeyRequest,
    GetApiKeysRequest,
    GetAuthorizerRequest,
    GetAuthorizersRequest,
    GetBasePathMappingRequest,
    GetBasePathMappingsRequest,
    GetClientCertificateRequest,
    GetClientCertificatesRequest,
    GetDeploymentRequest,
    GetDeploymentsRequest,
    GetDocumentationPartRequest,
    GetDocumentationPartsRequest,
    GetDocumentationVersionRequest,
    GetDocumentationVersionsRequest,
    GetDomainNameRequest,
    GetDomainNamesRequest,
    GetExportRequest,
    GetGatewayResponseRequest,
    GetGatewayResponsesRequest,
    GetIntegrationRequest,
    GetIntegrationResponseRequest,
    GetMethodRequest,
    GetMethodResponseRequest,
    GetModelRequest,
    GetModelTemplateRequest,
    GetModelsRequest,
    GetRequestValidatorRequest,
    GetRequestValidatorsRequest,
    GetResourceRequest,
    GetResourcesRequest,
    GetRestApiRequest,
    GetRestApisRequest,
    GetSdkRequest,
    GetSdkTypeRequest,
    GetSdkTypesRequest,
    GetStageRequest,
    GetStagesRequest,
    GetTagsRequest,
    GetUsageRequest,
    GetUsagePlanRequest,
    GetUsagePlanKeyRequest,
    GetUsagePlanKeysRequest,
    GetUsagePlansRequest,
    GetVpcLinkRequest,
    GetVpcLinksRequest,
    ImportApiKeysRequest,
    ImportDocumentationPartsRequest,
    ImportRestApiRequest,
    PutGatewayResponseRequest,
    PutIntegrationRequest,
    PutIntegrationResponseRequest,
    PutMethodRequest,
    PutMethodResponseRequest,
    PutRestApiRequest,
    TestInvokeAuthorizerRequest,
    TestInvokeMethodRequest,
    UpdateAccountRequest,
    UpdateApiKeyRequest,
    UpdateAuthorizerRequest,
    UpdateBasePathMappingRequest,
    UpdateClientCertificateRequest,
    UpdateDeploymentRequest,
    UpdateDocumentationPartRequest,
    UpdateDocumentationVersionRequest,
    UpdateDomainNameRequest,
    UpdateGatewayResponseRequest,
    UpdateIntegrationRequest,
    UpdateIntegrationResponseRequest,
    UpdateMethodRequest,
    UpdateMethodResponseRequest,
    UpdateModelRequest,
    UpdateRequestValidatorRequest,
    UpdateResourceRequest,
    UpdateRestApiRequest,
    UpdateStageRequest,
    UpdateUsageRequest,
    UpdateUsagePlanRequest,
    UpdateVpcLinkRequest,
    ApiKey,
    Authorizer,
    BasePathMapping,
    Deployment,
    DocumentationPart,
    DocumentationVersion,
    DomainName,
    Model,
    RequestValidator,
    Resource,
    RestApi,
    Stage,
    UsagePlan,
    UsagePlanKey,
    VpcLink,
    ClientCertificate,
    Account,
    ApiKeys,
    Authorizers,
    BasePathMappings,
    ClientCertificates,
    Deployments,
    DocumentationParts,
    DocumentationVersions,
    DomainNames,
    ExportResponse,
    GatewayResponse,
    GatewayResponses,
    Integration,
    IntegrationResponse,
    Method,
    MethodResponse,
    Template,
    Models,
    RequestValidators,
    Resources,
    RestApis,
    SdkResponse,
    SdkType,
    SdkTypes,
    Stages,
    Tags,
    Usage,
    UsagePlanKeys,
    UsagePlans,
    VpcLinks,
    ApiKeyIds,
    DocumentationPartIds,
    TestInvokeAuthorizerResponse,
    TestInvokeMethodResponse
} from "aws-sdk/clients/apigateway";
const schema = require("../apis/apigateway-2015-07-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigateway.UsagePlan {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apigateway.UsagePlan>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.APIGateway()
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

    invokeCreateApiKey(partialParams: ToOptional<{
      [K in keyof CreateApiKeyRequest]: (CreateApiKeyRequest)[K]
    }>): Request<ApiKey, AWSError> {
        this.boot();
        return this.client.createApiKey(
          this.ops["CreateApiKey"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest)[K]
    }>): Request<Authorizer, AWSError> {
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateBasePathMapping(partialParams: ToOptional<{
      [K in keyof CreateBasePathMappingRequest]: (CreateBasePathMappingRequest)[K]
    }>): Request<BasePathMapping, AWSError> {
        this.boot();
        return this.client.createBasePathMapping(
          this.ops["CreateBasePathMapping"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest]: (CreateDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDocumentationPart(partialParams: ToOptional<{
      [K in keyof CreateDocumentationPartRequest]: (CreateDocumentationPartRequest)[K]
    }>): Request<DocumentationPart, AWSError> {
        this.boot();
        return this.client.createDocumentationPart(
          this.ops["CreateDocumentationPart"].apply(partialParams)
        );
    }

    invokeCreateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof CreateDocumentationVersionRequest]: (CreateDocumentationVersionRequest)[K]
    }>): Request<DocumentationVersion, AWSError> {
        this.boot();
        return this.client.createDocumentationVersion(
          this.ops["CreateDocumentationVersion"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest]: (CreateDomainNameRequest)[K]
    }>): Request<DomainName, AWSError> {
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest]: (CreateModelRequest)[K]
    }>): Request<Model, AWSError> {
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateRequestValidator(partialParams: ToOptional<{
      [K in keyof CreateRequestValidatorRequest]: (CreateRequestValidatorRequest)[K]
    }>): Request<RequestValidator, AWSError> {
        this.boot();
        return this.client.createRequestValidator(
          this.ops["CreateRequestValidator"].apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceRequest]: (CreateResourceRequest)[K]
    }>): Request<Resource, AWSError> {
        this.boot();
        return this.client.createResource(
          this.ops["CreateResource"].apply(partialParams)
        );
    }

    invokeCreateRestApi(partialParams: ToOptional<{
      [K in keyof CreateRestApiRequest]: (CreateRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        this.boot();
        return this.client.createRestApi(
          this.ops["CreateRestApi"].apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest]: (CreateStageRequest)[K]
    }>): Request<Stage, AWSError> {
        this.boot();
        return this.client.createStage(
          this.ops["CreateStage"].apply(partialParams)
        );
    }

    invokeCreateUsagePlan(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanRequest]: (CreateUsagePlanRequest)[K]
    }>): Request<UsagePlan, AWSError> {
        this.boot();
        return this.client.createUsagePlan(
          this.ops["CreateUsagePlan"].apply(partialParams)
        );
    }

    invokeCreateUsagePlanKey(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanKeyRequest]: (CreateUsagePlanKeyRequest)[K]
    }>): Request<UsagePlanKey, AWSError> {
        this.boot();
        return this.client.createUsagePlanKey(
          this.ops["CreateUsagePlanKey"].apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest)[K]
    }>): Request<VpcLink, AWSError> {
        this.boot();
        return this.client.createVpcLink(
          this.ops["CreateVpcLink"].apply(partialParams)
        );
    }

    invokeGenerateClientCertificate(partialParams: ToOptional<{
      [K in keyof GenerateClientCertificateRequest]: (GenerateClientCertificateRequest)[K]
    }>): Request<ClientCertificate, AWSError> {
        this.boot();
        return this.client.generateClientCertificate(
          this.ops["GenerateClientCertificate"].apply(partialParams)
        );
    }

    invokeGetAccount(partialParams: ToOptional<{
      [K in keyof GetAccountRequest]: (GetAccountRequest)[K]
    }>): Request<Account, AWSError> {
        this.boot();
        return this.client.getAccount(
          this.ops["GetAccount"].apply(partialParams)
        );
    }

    invokeGetApiKey(partialParams: ToOptional<{
      [K in keyof GetApiKeyRequest]: (GetApiKeyRequest)[K]
    }>): Request<ApiKey, AWSError> {
        this.boot();
        return this.client.getApiKey(
          this.ops["GetApiKey"].apply(partialParams)
        );
    }

    invokeGetApiKeys(partialParams: ToOptional<{
      [K in keyof GetApiKeysRequest]: (GetApiKeysRequest)[K]
    }>): Request<ApiKeys, AWSError> {
        this.boot();
        return this.client.getApiKeys(
          this.ops["GetApiKeys"].apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest]: (GetAuthorizerRequest)[K]
    }>): Request<Authorizer, AWSError> {
        this.boot();
        return this.client.getAuthorizer(
          this.ops["GetAuthorizer"].apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest]: (GetAuthorizersRequest)[K]
    }>): Request<Authorizers, AWSError> {
        this.boot();
        return this.client.getAuthorizers(
          this.ops["GetAuthorizers"].apply(partialParams)
        );
    }

    invokeGetBasePathMapping(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingRequest]: (GetBasePathMappingRequest)[K]
    }>): Request<BasePathMapping, AWSError> {
        this.boot();
        return this.client.getBasePathMapping(
          this.ops["GetBasePathMapping"].apply(partialParams)
        );
    }

    invokeGetBasePathMappings(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingsRequest]: (GetBasePathMappingsRequest)[K]
    }>): Request<BasePathMappings, AWSError> {
        this.boot();
        return this.client.getBasePathMappings(
          this.ops["GetBasePathMappings"].apply(partialParams)
        );
    }

    invokeGetClientCertificate(partialParams: ToOptional<{
      [K in keyof GetClientCertificateRequest]: (GetClientCertificateRequest)[K]
    }>): Request<ClientCertificate, AWSError> {
        this.boot();
        return this.client.getClientCertificate(
          this.ops["GetClientCertificate"].apply(partialParams)
        );
    }

    invokeGetClientCertificates(partialParams: ToOptional<{
      [K in keyof GetClientCertificatesRequest]: (GetClientCertificatesRequest)[K]
    }>): Request<ClientCertificates, AWSError> {
        this.boot();
        return this.client.getClientCertificates(
          this.ops["GetClientCertificates"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest]: (GetDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest]: (GetDeploymentsRequest)[K]
    }>): Request<Deployments, AWSError> {
        this.boot();
        return this.client.getDeployments(
          this.ops["GetDeployments"].apply(partialParams)
        );
    }

    invokeGetDocumentationPart(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartRequest]: (GetDocumentationPartRequest)[K]
    }>): Request<DocumentationPart, AWSError> {
        this.boot();
        return this.client.getDocumentationPart(
          this.ops["GetDocumentationPart"].apply(partialParams)
        );
    }

    invokeGetDocumentationParts(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartsRequest]: (GetDocumentationPartsRequest)[K]
    }>): Request<DocumentationParts, AWSError> {
        this.boot();
        return this.client.getDocumentationParts(
          this.ops["GetDocumentationParts"].apply(partialParams)
        );
    }

    invokeGetDocumentationVersion(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionRequest]: (GetDocumentationVersionRequest)[K]
    }>): Request<DocumentationVersion, AWSError> {
        this.boot();
        return this.client.getDocumentationVersion(
          this.ops["GetDocumentationVersion"].apply(partialParams)
        );
    }

    invokeGetDocumentationVersions(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionsRequest]: (GetDocumentationVersionsRequest)[K]
    }>): Request<DocumentationVersions, AWSError> {
        this.boot();
        return this.client.getDocumentationVersions(
          this.ops["GetDocumentationVersions"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest]: (GetDomainNameRequest)[K]
    }>): Request<DomainName, AWSError> {
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetDomainNames(partialParams: ToOptional<{
      [K in keyof GetDomainNamesRequest]: (GetDomainNamesRequest)[K]
    }>): Request<DomainNames, AWSError> {
        this.boot();
        return this.client.getDomainNames(
          this.ops["GetDomainNames"].apply(partialParams)
        );
    }

    invokeGetExport(partialParams: ToOptional<{
      [K in keyof GetExportRequest]: (GetExportRequest)[K]
    }>): Request<ExportResponse, AWSError> {
        this.boot();
        return this.client.getExport(
          this.ops["GetExport"].apply(partialParams)
        );
    }

    invokeGetGatewayResponse(partialParams: ToOptional<{
      [K in keyof GetGatewayResponseRequest]: (GetGatewayResponseRequest)[K]
    }>): Request<GatewayResponse, AWSError> {
        this.boot();
        return this.client.getGatewayResponse(
          this.ops["GetGatewayResponse"].apply(partialParams)
        );
    }

    invokeGetGatewayResponses(partialParams: ToOptional<{
      [K in keyof GetGatewayResponsesRequest]: (GetGatewayResponsesRequest)[K]
    }>): Request<GatewayResponses, AWSError> {
        this.boot();
        return this.client.getGatewayResponses(
          this.ops["GetGatewayResponses"].apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest]: (GetIntegrationRequest)[K]
    }>): Request<Integration, AWSError> {
        this.boot();
        return this.client.getIntegration(
          this.ops["GetIntegration"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest)[K]
    }>): Request<IntegrationResponse, AWSError> {
        this.boot();
        return this.client.getIntegrationResponse(
          this.ops["GetIntegrationResponse"].apply(partialParams)
        );
    }

    invokeGetMethod(partialParams: ToOptional<{
      [K in keyof GetMethodRequest]: (GetMethodRequest)[K]
    }>): Request<Method, AWSError> {
        this.boot();
        return this.client.getMethod(
          this.ops["GetMethod"].apply(partialParams)
        );
    }

    invokeGetMethodResponse(partialParams: ToOptional<{
      [K in keyof GetMethodResponseRequest]: (GetMethodResponseRequest)[K]
    }>): Request<MethodResponse, AWSError> {
        this.boot();
        return this.client.getMethodResponse(
          this.ops["GetMethodResponse"].apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest]: (GetModelRequest)[K]
    }>): Request<Model, AWSError> {
        this.boot();
        return this.client.getModel(
          this.ops["GetModel"].apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest]: (GetModelTemplateRequest)[K]
    }>): Request<Template, AWSError> {
        this.boot();
        return this.client.getModelTemplate(
          this.ops["GetModelTemplate"].apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest]: (GetModelsRequest)[K]
    }>): Request<Models, AWSError> {
        this.boot();
        return this.client.getModels(
          this.ops["GetModels"].apply(partialParams)
        );
    }

    invokeGetRequestValidator(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorRequest]: (GetRequestValidatorRequest)[K]
    }>): Request<RequestValidator, AWSError> {
        this.boot();
        return this.client.getRequestValidator(
          this.ops["GetRequestValidator"].apply(partialParams)
        );
    }

    invokeGetRequestValidators(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorsRequest]: (GetRequestValidatorsRequest)[K]
    }>): Request<RequestValidators, AWSError> {
        this.boot();
        return this.client.getRequestValidators(
          this.ops["GetRequestValidators"].apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceRequest]: (GetResourceRequest)[K]
    }>): Request<Resource, AWSError> {
        this.boot();
        return this.client.getResource(
          this.ops["GetResource"].apply(partialParams)
        );
    }

    invokeGetResources(partialParams: ToOptional<{
      [K in keyof GetResourcesRequest]: (GetResourcesRequest)[K]
    }>): Request<Resources, AWSError> {
        this.boot();
        return this.client.getResources(
          this.ops["GetResources"].apply(partialParams)
        );
    }

    invokeGetRestApi(partialParams: ToOptional<{
      [K in keyof GetRestApiRequest]: (GetRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        this.boot();
        return this.client.getRestApi(
          this.ops["GetRestApi"].apply(partialParams)
        );
    }

    invokeGetRestApis(partialParams: ToOptional<{
      [K in keyof GetRestApisRequest]: (GetRestApisRequest)[K]
    }>): Request<RestApis, AWSError> {
        this.boot();
        return this.client.getRestApis(
          this.ops["GetRestApis"].apply(partialParams)
        );
    }

    invokeGetSdk(partialParams: ToOptional<{
      [K in keyof GetSdkRequest]: (GetSdkRequest)[K]
    }>): Request<SdkResponse, AWSError> {
        this.boot();
        return this.client.getSdk(
          this.ops["GetSdk"].apply(partialParams)
        );
    }

    invokeGetSdkType(partialParams: ToOptional<{
      [K in keyof GetSdkTypeRequest]: (GetSdkTypeRequest)[K]
    }>): Request<SdkType, AWSError> {
        this.boot();
        return this.client.getSdkType(
          this.ops["GetSdkType"].apply(partialParams)
        );
    }

    invokeGetSdkTypes(partialParams: ToOptional<{
      [K in keyof GetSdkTypesRequest]: (GetSdkTypesRequest)[K]
    }>): Request<SdkTypes, AWSError> {
        this.boot();
        return this.client.getSdkTypes(
          this.ops["GetSdkTypes"].apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest]: (GetStageRequest)[K]
    }>): Request<Stage, AWSError> {
        this.boot();
        return this.client.getStage(
          this.ops["GetStage"].apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest]: (GetStagesRequest)[K]
    }>): Request<Stages, AWSError> {
        this.boot();
        return this.client.getStages(
          this.ops["GetStages"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest]: (GetTagsRequest)[K]
    }>): Request<Tags, AWSError> {
        this.boot();
        return this.client.getTags(
          this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetUsage(partialParams: ToOptional<{
      [K in keyof GetUsageRequest]: (GetUsageRequest)[K]
    }>): Request<Usage, AWSError> {
        this.boot();
        return this.client.getUsage(
          this.ops["GetUsage"].apply(partialParams)
        );
    }

    invokeGetUsagePlan(partialParams: ToOptional<{
      [K in keyof GetUsagePlanRequest]: (GetUsagePlanRequest)[K]
    }>): Request<UsagePlan, AWSError> {
        this.boot();
        return this.client.getUsagePlan(
          this.ops["GetUsagePlan"].apply(partialParams)
        );
    }

    invokeGetUsagePlanKey(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeyRequest]: (GetUsagePlanKeyRequest)[K]
    }>): Request<UsagePlanKey, AWSError> {
        this.boot();
        return this.client.getUsagePlanKey(
          this.ops["GetUsagePlanKey"].apply(partialParams)
        );
    }

    invokeGetUsagePlanKeys(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeysRequest]: (GetUsagePlanKeysRequest)[K]
    }>): Request<UsagePlanKeys, AWSError> {
        this.boot();
        return this.client.getUsagePlanKeys(
          this.ops["GetUsagePlanKeys"].apply(partialParams)
        );
    }

    invokeGetUsagePlans(partialParams: ToOptional<{
      [K in keyof GetUsagePlansRequest]: (GetUsagePlansRequest)[K]
    }>): Request<UsagePlans, AWSError> {
        this.boot();
        return this.client.getUsagePlans(
          this.ops["GetUsagePlans"].apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest]: (GetVpcLinkRequest)[K]
    }>): Request<VpcLink, AWSError> {
        this.boot();
        return this.client.getVpcLink(
          this.ops["GetVpcLink"].apply(partialParams)
        );
    }

    invokeGetVpcLinks(partialParams: ToOptional<{
      [K in keyof GetVpcLinksRequest]: (GetVpcLinksRequest)[K]
    }>): Request<VpcLinks, AWSError> {
        this.boot();
        return this.client.getVpcLinks(
          this.ops["GetVpcLinks"].apply(partialParams)
        );
    }

    invokeImportApiKeys(partialParams: ToOptional<{
      [K in keyof ImportApiKeysRequest]: (ImportApiKeysRequest)[K]
    }>): Request<ApiKeyIds, AWSError> {
        this.boot();
        return this.client.importApiKeys(
          this.ops["ImportApiKeys"].apply(partialParams)
        );
    }

    invokeImportDocumentationParts(partialParams: ToOptional<{
      [K in keyof ImportDocumentationPartsRequest]: (ImportDocumentationPartsRequest)[K]
    }>): Request<DocumentationPartIds, AWSError> {
        this.boot();
        return this.client.importDocumentationParts(
          this.ops["ImportDocumentationParts"].apply(partialParams)
        );
    }

    invokeImportRestApi(partialParams: ToOptional<{
      [K in keyof ImportRestApiRequest]: (ImportRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        this.boot();
        return this.client.importRestApi(
          this.ops["ImportRestApi"].apply(partialParams)
        );
    }

    invokePutGatewayResponse(partialParams: ToOptional<{
      [K in keyof PutGatewayResponseRequest]: (PutGatewayResponseRequest)[K]
    }>): Request<GatewayResponse, AWSError> {
        this.boot();
        return this.client.putGatewayResponse(
          this.ops["PutGatewayResponse"].apply(partialParams)
        );
    }

    invokePutIntegration(partialParams: ToOptional<{
      [K in keyof PutIntegrationRequest]: (PutIntegrationRequest)[K]
    }>): Request<Integration, AWSError> {
        this.boot();
        return this.client.putIntegration(
          this.ops["PutIntegration"].apply(partialParams)
        );
    }

    invokePutIntegrationResponse(partialParams: ToOptional<{
      [K in keyof PutIntegrationResponseRequest]: (PutIntegrationResponseRequest)[K]
    }>): Request<IntegrationResponse, AWSError> {
        this.boot();
        return this.client.putIntegrationResponse(
          this.ops["PutIntegrationResponse"].apply(partialParams)
        );
    }

    invokePutMethod(partialParams: ToOptional<{
      [K in keyof PutMethodRequest]: (PutMethodRequest)[K]
    }>): Request<Method, AWSError> {
        this.boot();
        return this.client.putMethod(
          this.ops["PutMethod"].apply(partialParams)
        );
    }

    invokePutMethodResponse(partialParams: ToOptional<{
      [K in keyof PutMethodResponseRequest]: (PutMethodResponseRequest)[K]
    }>): Request<MethodResponse, AWSError> {
        this.boot();
        return this.client.putMethodResponse(
          this.ops["PutMethodResponse"].apply(partialParams)
        );
    }

    invokePutRestApi(partialParams: ToOptional<{
      [K in keyof PutRestApiRequest]: (PutRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        this.boot();
        return this.client.putRestApi(
          this.ops["PutRestApi"].apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest)[K]
    }>): Request<TestInvokeAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.testInvokeAuthorizer(
          this.ops["TestInvokeAuthorizer"].apply(partialParams)
        );
    }

    invokeTestInvokeMethod(partialParams: ToOptional<{
      [K in keyof TestInvokeMethodRequest]: (TestInvokeMethodRequest)[K]
    }>): Request<TestInvokeMethodResponse, AWSError> {
        this.boot();
        return this.client.testInvokeMethod(
          this.ops["TestInvokeMethod"].apply(partialParams)
        );
    }

    invokeUpdateAccount(partialParams: ToOptional<{
      [K in keyof UpdateAccountRequest]: (UpdateAccountRequest)[K]
    }>): Request<Account, AWSError> {
        this.boot();
        return this.client.updateAccount(
          this.ops["UpdateAccount"].apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof UpdateApiKeyRequest]: (UpdateApiKeyRequest)[K]
    }>): Request<ApiKey, AWSError> {
        this.boot();
        return this.client.updateApiKey(
          this.ops["UpdateApiKey"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest)[K]
    }>): Request<Authorizer, AWSError> {
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateBasePathMapping(partialParams: ToOptional<{
      [K in keyof UpdateBasePathMappingRequest]: (UpdateBasePathMappingRequest)[K]
    }>): Request<BasePathMapping, AWSError> {
        this.boot();
        return this.client.updateBasePathMapping(
          this.ops["UpdateBasePathMapping"].apply(partialParams)
        );
    }

    invokeUpdateClientCertificate(partialParams: ToOptional<{
      [K in keyof UpdateClientCertificateRequest]: (UpdateClientCertificateRequest)[K]
    }>): Request<ClientCertificate, AWSError> {
        this.boot();
        return this.client.updateClientCertificate(
          this.ops["UpdateClientCertificate"].apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        this.boot();
        return this.client.updateDeployment(
          this.ops["UpdateDeployment"].apply(partialParams)
        );
    }

    invokeUpdateDocumentationPart(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationPartRequest]: (UpdateDocumentationPartRequest)[K]
    }>): Request<DocumentationPart, AWSError> {
        this.boot();
        return this.client.updateDocumentationPart(
          this.ops["UpdateDocumentationPart"].apply(partialParams)
        );
    }

    invokeUpdateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationVersionRequest]: (UpdateDocumentationVersionRequest)[K]
    }>): Request<DocumentationVersion, AWSError> {
        this.boot();
        return this.client.updateDocumentationVersion(
          this.ops["UpdateDocumentationVersion"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest)[K]
    }>): Request<DomainName, AWSError> {
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateGatewayResponse(partialParams: ToOptional<{
      [K in keyof UpdateGatewayResponseRequest]: (UpdateGatewayResponseRequest)[K]
    }>): Request<GatewayResponse, AWSError> {
        this.boot();
        return this.client.updateGatewayResponse(
          this.ops["UpdateGatewayResponse"].apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest)[K]
    }>): Request<Integration, AWSError> {
        this.boot();
        return this.client.updateIntegration(
          this.ops["UpdateIntegration"].apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest)[K]
    }>): Request<IntegrationResponse, AWSError> {
        this.boot();
        return this.client.updateIntegrationResponse(
          this.ops["UpdateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeUpdateMethod(partialParams: ToOptional<{
      [K in keyof UpdateMethodRequest]: (UpdateMethodRequest)[K]
    }>): Request<Method, AWSError> {
        this.boot();
        return this.client.updateMethod(
          this.ops["UpdateMethod"].apply(partialParams)
        );
    }

    invokeUpdateMethodResponse(partialParams: ToOptional<{
      [K in keyof UpdateMethodResponseRequest]: (UpdateMethodResponseRequest)[K]
    }>): Request<MethodResponse, AWSError> {
        this.boot();
        return this.client.updateMethodResponse(
          this.ops["UpdateMethodResponse"].apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest]: (UpdateModelRequest)[K]
    }>): Request<Model, AWSError> {
        this.boot();
        return this.client.updateModel(
          this.ops["UpdateModel"].apply(partialParams)
        );
    }

    invokeUpdateRequestValidator(partialParams: ToOptional<{
      [K in keyof UpdateRequestValidatorRequest]: (UpdateRequestValidatorRequest)[K]
    }>): Request<RequestValidator, AWSError> {
        this.boot();
        return this.client.updateRequestValidator(
          this.ops["UpdateRequestValidator"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest]: (UpdateResourceRequest)[K]
    }>): Request<Resource, AWSError> {
        this.boot();
        return this.client.updateResource(
          this.ops["UpdateResource"].apply(partialParams)
        );
    }

    invokeUpdateRestApi(partialParams: ToOptional<{
      [K in keyof UpdateRestApiRequest]: (UpdateRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        this.boot();
        return this.client.updateRestApi(
          this.ops["UpdateRestApi"].apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest]: (UpdateStageRequest)[K]
    }>): Request<Stage, AWSError> {
        this.boot();
        return this.client.updateStage(
          this.ops["UpdateStage"].apply(partialParams)
        );
    }

    invokeUpdateUsage(partialParams: ToOptional<{
      [K in keyof UpdateUsageRequest]: (UpdateUsageRequest)[K]
    }>): Request<Usage, AWSError> {
        this.boot();
        return this.client.updateUsage(
          this.ops["UpdateUsage"].apply(partialParams)
        );
    }

    invokeUpdateUsagePlan(partialParams: ToOptional<{
      [K in keyof UpdateUsagePlanRequest]: (UpdateUsagePlanRequest)[K]
    }>): Request<UsagePlan, AWSError> {
        this.boot();
        return this.client.updateUsagePlan(
          this.ops["UpdateUsagePlan"].apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest)[K]
    }>): Request<VpcLink, AWSError> {
        this.boot();
        return this.client.updateVpcLink(
          this.ops["UpdateVpcLink"].apply(partialParams)
        );
    }
}