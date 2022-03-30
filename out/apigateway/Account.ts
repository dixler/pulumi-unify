
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
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
    DeleteApiKeyRequest,
    DeleteAuthorizerRequest,
    DeleteBasePathMappingRequest,
    DeleteClientCertificateRequest,
    DeleteDeploymentRequest,
    DeleteDocumentationPartRequest,
    DeleteDocumentationVersionRequest,
    DeleteDomainNameRequest,
    DeleteGatewayResponseRequest,
    DeleteIntegrationRequest,
    DeleteIntegrationResponseRequest,
    DeleteMethodRequest,
    DeleteMethodResponseRequest,
    DeleteModelRequest,
    DeleteRequestValidatorRequest,
    DeleteResourceRequest,
    DeleteRestApiRequest,
    DeleteStageRequest,
    DeleteUsagePlanRequest,
    DeleteUsagePlanKeyRequest,
    DeleteVpcLinkRequest,
    FlushStageAuthorizersCacheRequest,
    FlushStageCacheRequest,
    GetApiKeyRequest,
    GetAuthorizerRequest,
    GetAuthorizersRequest,
    GetBasePathMappingRequest,
    GetBasePathMappingsRequest,
    GetClientCertificateRequest,
    GetDeploymentRequest,
    GetDeploymentsRequest,
    GetDocumentationPartRequest,
    GetDocumentationPartsRequest,
    GetDocumentationVersionRequest,
    GetDocumentationVersionsRequest,
    GetDomainNameRequest,
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
    GetSdkRequest,
    GetSdkTypeRequest,
    GetStageRequest,
    GetStagesRequest,
    GetTagsRequest,
    GetUsageRequest,
    GetUsagePlanRequest,
    GetUsagePlanKeyRequest,
    GetUsagePlanKeysRequest,
    GetVpcLinkRequest,
    ImportApiKeysRequest,
    ImportDocumentationPartsRequest,
    ImportRestApiRequest,
    PutGatewayResponseRequest,
    PutIntegrationRequest,
    PutIntegrationResponseRequest,
    PutMethodRequest,
    PutMethodResponseRequest,
    PutRestApiRequest,
    TagResourceRequest,
    TestInvokeAuthorizerRequest,
    TestInvokeMethodRequest,
    UntagResourceRequest,
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
    ApiKey,
    Authorizers,
    BasePathMappings,
    ClientCertificate,
    Deployments,
    DocumentationParts,
    DocumentationVersions,
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
    SdkResponse,
    SdkType,
    Stages,
    Tags,
    Usage,
    UsagePlanKeys,
    ApiKeyIds,
    DocumentationPartIds,
    TestInvokeAuthorizerResponse,
    TestInvokeMethodResponse
} from "aws-sdk/clients/apigateway";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigateway.Account {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.apigateway.Account>) {
        super(...args)
        this.client = new awssdk.APIGateway()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/apigateway-2015-07-09.normal.json"), this.client)
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest)[K]
    }>): Authorizer {
        return this.client.createAuthorizer(
            this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateBasePathMapping(partialParams: ToOptional<{
      [K in keyof CreateBasePathMappingRequest]: (CreateBasePathMappingRequest)[K]
    }>): BasePathMapping {
        return this.client.createBasePathMapping(
            this.ops["CreateBasePathMapping"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest]: (CreateDeploymentRequest)[K]
    }>): Deployment {
        return this.client.createDeployment(
            this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDocumentationPart(partialParams: ToOptional<{
      [K in keyof CreateDocumentationPartRequest]: (CreateDocumentationPartRequest)[K]
    }>): DocumentationPart {
        return this.client.createDocumentationPart(
            this.ops["CreateDocumentationPart"].apply(partialParams)
        );
    }

    invokeCreateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof CreateDocumentationVersionRequest]: (CreateDocumentationVersionRequest)[K]
    }>): DocumentationVersion {
        return this.client.createDocumentationVersion(
            this.ops["CreateDocumentationVersion"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest]: (CreateDomainNameRequest)[K]
    }>): DomainName {
        return this.client.createDomainName(
            this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest]: (CreateModelRequest)[K]
    }>): Model {
        return this.client.createModel(
            this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateRequestValidator(partialParams: ToOptional<{
      [K in keyof CreateRequestValidatorRequest]: (CreateRequestValidatorRequest)[K]
    }>): RequestValidator {
        return this.client.createRequestValidator(
            this.ops["CreateRequestValidator"].apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceRequest]: (CreateResourceRequest)[K]
    }>): Resource {
        return this.client.createResource(
            this.ops["CreateResource"].apply(partialParams)
        );
    }

    invokeCreateRestApi(partialParams: ToOptional<{
      [K in keyof CreateRestApiRequest]: (CreateRestApiRequest)[K]
    }>): RestApi {
        return this.client.createRestApi(
            this.ops["CreateRestApi"].apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest]: (CreateStageRequest)[K]
    }>): Stage {
        return this.client.createStage(
            this.ops["CreateStage"].apply(partialParams)
        );
    }

    invokeCreateUsagePlan(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanRequest]: (CreateUsagePlanRequest)[K]
    }>): UsagePlan {
        return this.client.createUsagePlan(
            this.ops["CreateUsagePlan"].apply(partialParams)
        );
    }

    invokeCreateUsagePlanKey(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanKeyRequest]: (CreateUsagePlanKeyRequest)[K]
    }>): UsagePlanKey {
        return this.client.createUsagePlanKey(
            this.ops["CreateUsagePlanKey"].apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest)[K]
    }>): VpcLink {
        return this.client.createVpcLink(
            this.ops["CreateVpcLink"].apply(partialParams)
        );
    }

    invokeDeleteApiKey(partialParams: ToOptional<{
      [K in keyof DeleteApiKeyRequest]: (DeleteApiKeyRequest)[K]
    }>): void {
        return this.client.deleteApiKey(
            this.ops["DeleteApiKey"].apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest)[K]
    }>): void {
        return this.client.deleteAuthorizer(
            this.ops["DeleteAuthorizer"].apply(partialParams)
        );
    }

    invokeDeleteBasePathMapping(partialParams: ToOptional<{
      [K in keyof DeleteBasePathMappingRequest]: (DeleteBasePathMappingRequest)[K]
    }>): void {
        return this.client.deleteBasePathMapping(
            this.ops["DeleteBasePathMapping"].apply(partialParams)
        );
    }

    invokeDeleteClientCertificate(partialParams: ToOptional<{
      [K in keyof DeleteClientCertificateRequest]: (DeleteClientCertificateRequest)[K]
    }>): void {
        return this.client.deleteClientCertificate(
            this.ops["DeleteClientCertificate"].apply(partialParams)
        );
    }

    invokeDeleteDeployment(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentRequest]: (DeleteDeploymentRequest)[K]
    }>): void {
        return this.client.deleteDeployment(
            this.ops["DeleteDeployment"].apply(partialParams)
        );
    }

    invokeDeleteDocumentationPart(partialParams: ToOptional<{
      [K in keyof DeleteDocumentationPartRequest]: (DeleteDocumentationPartRequest)[K]
    }>): void {
        return this.client.deleteDocumentationPart(
            this.ops["DeleteDocumentationPart"].apply(partialParams)
        );
    }

    invokeDeleteDocumentationVersion(partialParams: ToOptional<{
      [K in keyof DeleteDocumentationVersionRequest]: (DeleteDocumentationVersionRequest)[K]
    }>): void {
        return this.client.deleteDocumentationVersion(
            this.ops["DeleteDocumentationVersion"].apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest)[K]
    }>): void {
        return this.client.deleteDomainName(
            this.ops["DeleteDomainName"].apply(partialParams)
        );
    }

    invokeDeleteGatewayResponse(partialParams: ToOptional<{
      [K in keyof DeleteGatewayResponseRequest]: (DeleteGatewayResponseRequest)[K]
    }>): void {
        return this.client.deleteGatewayResponse(
            this.ops["DeleteGatewayResponse"].apply(partialParams)
        );
    }

    invokeDeleteIntegration(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationRequest]: (DeleteIntegrationRequest)[K]
    }>): void {
        return this.client.deleteIntegration(
            this.ops["DeleteIntegration"].apply(partialParams)
        );
    }

    invokeDeleteIntegrationResponse(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationResponseRequest]: (DeleteIntegrationResponseRequest)[K]
    }>): void {
        return this.client.deleteIntegrationResponse(
            this.ops["DeleteIntegrationResponse"].apply(partialParams)
        );
    }

    invokeDeleteMethod(partialParams: ToOptional<{
      [K in keyof DeleteMethodRequest]: (DeleteMethodRequest)[K]
    }>): void {
        return this.client.deleteMethod(
            this.ops["DeleteMethod"].apply(partialParams)
        );
    }

    invokeDeleteMethodResponse(partialParams: ToOptional<{
      [K in keyof DeleteMethodResponseRequest]: (DeleteMethodResponseRequest)[K]
    }>): void {
        return this.client.deleteMethodResponse(
            this.ops["DeleteMethodResponse"].apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelRequest]: (DeleteModelRequest)[K]
    }>): void {
        return this.client.deleteModel(
            this.ops["DeleteModel"].apply(partialParams)
        );
    }

    invokeDeleteRequestValidator(partialParams: ToOptional<{
      [K in keyof DeleteRequestValidatorRequest]: (DeleteRequestValidatorRequest)[K]
    }>): void {
        return this.client.deleteRequestValidator(
            this.ops["DeleteRequestValidator"].apply(partialParams)
        );
    }

    invokeDeleteResource(partialParams: ToOptional<{
      [K in keyof DeleteResourceRequest]: (DeleteResourceRequest)[K]
    }>): void {
        return this.client.deleteResource(
            this.ops["DeleteResource"].apply(partialParams)
        );
    }

    invokeDeleteRestApi(partialParams: ToOptional<{
      [K in keyof DeleteRestApiRequest]: (DeleteRestApiRequest)[K]
    }>): void {
        return this.client.deleteRestApi(
            this.ops["DeleteRestApi"].apply(partialParams)
        );
    }

    invokeDeleteStage(partialParams: ToOptional<{
      [K in keyof DeleteStageRequest]: (DeleteStageRequest)[K]
    }>): void {
        return this.client.deleteStage(
            this.ops["DeleteStage"].apply(partialParams)
        );
    }

    invokeDeleteUsagePlan(partialParams: ToOptional<{
      [K in keyof DeleteUsagePlanRequest]: (DeleteUsagePlanRequest)[K]
    }>): void {
        return this.client.deleteUsagePlan(
            this.ops["DeleteUsagePlan"].apply(partialParams)
        );
    }

    invokeDeleteUsagePlanKey(partialParams: ToOptional<{
      [K in keyof DeleteUsagePlanKeyRequest]: (DeleteUsagePlanKeyRequest)[K]
    }>): void {
        return this.client.deleteUsagePlanKey(
            this.ops["DeleteUsagePlanKey"].apply(partialParams)
        );
    }

    invokeDeleteVpcLink(partialParams: ToOptional<{
      [K in keyof DeleteVpcLinkRequest]: (DeleteVpcLinkRequest)[K]
    }>): void {
        return this.client.deleteVpcLink(
            this.ops["DeleteVpcLink"].apply(partialParams)
        );
    }

    invokeFlushStageAuthorizersCache(partialParams: ToOptional<{
      [K in keyof FlushStageAuthorizersCacheRequest]: (FlushStageAuthorizersCacheRequest)[K]
    }>): void {
        return this.client.flushStageAuthorizersCache(
            this.ops["FlushStageAuthorizersCache"].apply(partialParams)
        );
    }

    invokeFlushStageCache(partialParams: ToOptional<{
      [K in keyof FlushStageCacheRequest]: (FlushStageCacheRequest)[K]
    }>): void {
        return this.client.flushStageCache(
            this.ops["FlushStageCache"].apply(partialParams)
        );
    }

    invokeGetApiKey(partialParams: ToOptional<{
      [K in keyof GetApiKeyRequest]: (GetApiKeyRequest)[K]
    }>): ApiKey {
        return this.client.getApiKey(
            this.ops["GetApiKey"].apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest]: (GetAuthorizerRequest)[K]
    }>): Authorizer {
        return this.client.getAuthorizer(
            this.ops["GetAuthorizer"].apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest]: (GetAuthorizersRequest)[K]
    }>): Authorizers {
        return this.client.getAuthorizers(
            this.ops["GetAuthorizers"].apply(partialParams)
        );
    }

    invokeGetBasePathMapping(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingRequest]: (GetBasePathMappingRequest)[K]
    }>): BasePathMapping {
        return this.client.getBasePathMapping(
            this.ops["GetBasePathMapping"].apply(partialParams)
        );
    }

    invokeGetBasePathMappings(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingsRequest]: (GetBasePathMappingsRequest)[K]
    }>): BasePathMappings {
        return this.client.getBasePathMappings(
            this.ops["GetBasePathMappings"].apply(partialParams)
        );
    }

    invokeGetClientCertificate(partialParams: ToOptional<{
      [K in keyof GetClientCertificateRequest]: (GetClientCertificateRequest)[K]
    }>): ClientCertificate {
        return this.client.getClientCertificate(
            this.ops["GetClientCertificate"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest]: (GetDeploymentRequest)[K]
    }>): Deployment {
        return this.client.getDeployment(
            this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest]: (GetDeploymentsRequest)[K]
    }>): Deployments {
        return this.client.getDeployments(
            this.ops["GetDeployments"].apply(partialParams)
        );
    }

    invokeGetDocumentationPart(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartRequest]: (GetDocumentationPartRequest)[K]
    }>): DocumentationPart {
        return this.client.getDocumentationPart(
            this.ops["GetDocumentationPart"].apply(partialParams)
        );
    }

    invokeGetDocumentationParts(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartsRequest]: (GetDocumentationPartsRequest)[K]
    }>): DocumentationParts {
        return this.client.getDocumentationParts(
            this.ops["GetDocumentationParts"].apply(partialParams)
        );
    }

    invokeGetDocumentationVersion(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionRequest]: (GetDocumentationVersionRequest)[K]
    }>): DocumentationVersion {
        return this.client.getDocumentationVersion(
            this.ops["GetDocumentationVersion"].apply(partialParams)
        );
    }

    invokeGetDocumentationVersions(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionsRequest]: (GetDocumentationVersionsRequest)[K]
    }>): DocumentationVersions {
        return this.client.getDocumentationVersions(
            this.ops["GetDocumentationVersions"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest]: (GetDomainNameRequest)[K]
    }>): DomainName {
        return this.client.getDomainName(
            this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetExport(partialParams: ToOptional<{
      [K in keyof GetExportRequest]: (GetExportRequest)[K]
    }>): ExportResponse {
        return this.client.getExport(
            this.ops["GetExport"].apply(partialParams)
        );
    }

    invokeGetGatewayResponse(partialParams: ToOptional<{
      [K in keyof GetGatewayResponseRequest]: (GetGatewayResponseRequest)[K]
    }>): GatewayResponse {
        return this.client.getGatewayResponse(
            this.ops["GetGatewayResponse"].apply(partialParams)
        );
    }

    invokeGetGatewayResponses(partialParams: ToOptional<{
      [K in keyof GetGatewayResponsesRequest]: (GetGatewayResponsesRequest)[K]
    }>): GatewayResponses {
        return this.client.getGatewayResponses(
            this.ops["GetGatewayResponses"].apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest]: (GetIntegrationRequest)[K]
    }>): Integration {
        return this.client.getIntegration(
            this.ops["GetIntegration"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest)[K]
    }>): IntegrationResponse {
        return this.client.getIntegrationResponse(
            this.ops["GetIntegrationResponse"].apply(partialParams)
        );
    }

    invokeGetMethod(partialParams: ToOptional<{
      [K in keyof GetMethodRequest]: (GetMethodRequest)[K]
    }>): Method {
        return this.client.getMethod(
            this.ops["GetMethod"].apply(partialParams)
        );
    }

    invokeGetMethodResponse(partialParams: ToOptional<{
      [K in keyof GetMethodResponseRequest]: (GetMethodResponseRequest)[K]
    }>): MethodResponse {
        return this.client.getMethodResponse(
            this.ops["GetMethodResponse"].apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest]: (GetModelRequest)[K]
    }>): Model {
        return this.client.getModel(
            this.ops["GetModel"].apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest]: (GetModelTemplateRequest)[K]
    }>): Template {
        return this.client.getModelTemplate(
            this.ops["GetModelTemplate"].apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest]: (GetModelsRequest)[K]
    }>): Models {
        return this.client.getModels(
            this.ops["GetModels"].apply(partialParams)
        );
    }

    invokeGetRequestValidator(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorRequest]: (GetRequestValidatorRequest)[K]
    }>): RequestValidator {
        return this.client.getRequestValidator(
            this.ops["GetRequestValidator"].apply(partialParams)
        );
    }

    invokeGetRequestValidators(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorsRequest]: (GetRequestValidatorsRequest)[K]
    }>): RequestValidators {
        return this.client.getRequestValidators(
            this.ops["GetRequestValidators"].apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceRequest]: (GetResourceRequest)[K]
    }>): Resource {
        return this.client.getResource(
            this.ops["GetResource"].apply(partialParams)
        );
    }

    invokeGetResources(partialParams: ToOptional<{
      [K in keyof GetResourcesRequest]: (GetResourcesRequest)[K]
    }>): Resources {
        return this.client.getResources(
            this.ops["GetResources"].apply(partialParams)
        );
    }

    invokeGetRestApi(partialParams: ToOptional<{
      [K in keyof GetRestApiRequest]: (GetRestApiRequest)[K]
    }>): RestApi {
        return this.client.getRestApi(
            this.ops["GetRestApi"].apply(partialParams)
        );
    }

    invokeGetSdk(partialParams: ToOptional<{
      [K in keyof GetSdkRequest]: (GetSdkRequest)[K]
    }>): SdkResponse {
        return this.client.getSdk(
            this.ops["GetSdk"].apply(partialParams)
        );
    }

    invokeGetSdkType(partialParams: ToOptional<{
      [K in keyof GetSdkTypeRequest]: (GetSdkTypeRequest)[K]
    }>): SdkType {
        return this.client.getSdkType(
            this.ops["GetSdkType"].apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest]: (GetStageRequest)[K]
    }>): Stage {
        return this.client.getStage(
            this.ops["GetStage"].apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest]: (GetStagesRequest)[K]
    }>): Stages {
        return this.client.getStages(
            this.ops["GetStages"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest]: (GetTagsRequest)[K]
    }>): Tags {
        return this.client.getTags(
            this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetUsage(partialParams: ToOptional<{
      [K in keyof GetUsageRequest]: (GetUsageRequest)[K]
    }>): Usage {
        return this.client.getUsage(
            this.ops["GetUsage"].apply(partialParams)
        );
    }

    invokeGetUsagePlan(partialParams: ToOptional<{
      [K in keyof GetUsagePlanRequest]: (GetUsagePlanRequest)[K]
    }>): UsagePlan {
        return this.client.getUsagePlan(
            this.ops["GetUsagePlan"].apply(partialParams)
        );
    }

    invokeGetUsagePlanKey(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeyRequest]: (GetUsagePlanKeyRequest)[K]
    }>): UsagePlanKey {
        return this.client.getUsagePlanKey(
            this.ops["GetUsagePlanKey"].apply(partialParams)
        );
    }

    invokeGetUsagePlanKeys(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeysRequest]: (GetUsagePlanKeysRequest)[K]
    }>): UsagePlanKeys {
        return this.client.getUsagePlanKeys(
            this.ops["GetUsagePlanKeys"].apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest]: (GetVpcLinkRequest)[K]
    }>): VpcLink {
        return this.client.getVpcLink(
            this.ops["GetVpcLink"].apply(partialParams)
        );
    }

    invokeImportApiKeys(partialParams: ToOptional<{
      [K in keyof ImportApiKeysRequest]: (ImportApiKeysRequest)[K]
    }>): ApiKeyIds {
        return this.client.importApiKeys(
            this.ops["ImportApiKeys"].apply(partialParams)
        );
    }

    invokeImportDocumentationParts(partialParams: ToOptional<{
      [K in keyof ImportDocumentationPartsRequest]: (ImportDocumentationPartsRequest)[K]
    }>): DocumentationPartIds {
        return this.client.importDocumentationParts(
            this.ops["ImportDocumentationParts"].apply(partialParams)
        );
    }

    invokeImportRestApi(partialParams: ToOptional<{
      [K in keyof ImportRestApiRequest]: (ImportRestApiRequest)[K]
    }>): RestApi {
        return this.client.importRestApi(
            this.ops["ImportRestApi"].apply(partialParams)
        );
    }

    invokePutGatewayResponse(partialParams: ToOptional<{
      [K in keyof PutGatewayResponseRequest]: (PutGatewayResponseRequest)[K]
    }>): GatewayResponse {
        return this.client.putGatewayResponse(
            this.ops["PutGatewayResponse"].apply(partialParams)
        );
    }

    invokePutIntegration(partialParams: ToOptional<{
      [K in keyof PutIntegrationRequest]: (PutIntegrationRequest)[K]
    }>): Integration {
        return this.client.putIntegration(
            this.ops["PutIntegration"].apply(partialParams)
        );
    }

    invokePutIntegrationResponse(partialParams: ToOptional<{
      [K in keyof PutIntegrationResponseRequest]: (PutIntegrationResponseRequest)[K]
    }>): IntegrationResponse {
        return this.client.putIntegrationResponse(
            this.ops["PutIntegrationResponse"].apply(partialParams)
        );
    }

    invokePutMethod(partialParams: ToOptional<{
      [K in keyof PutMethodRequest]: (PutMethodRequest)[K]
    }>): Method {
        return this.client.putMethod(
            this.ops["PutMethod"].apply(partialParams)
        );
    }

    invokePutMethodResponse(partialParams: ToOptional<{
      [K in keyof PutMethodResponseRequest]: (PutMethodResponseRequest)[K]
    }>): MethodResponse {
        return this.client.putMethodResponse(
            this.ops["PutMethodResponse"].apply(partialParams)
        );
    }

    invokePutRestApi(partialParams: ToOptional<{
      [K in keyof PutRestApiRequest]: (PutRestApiRequest)[K]
    }>): RestApi {
        return this.client.putRestApi(
            this.ops["PutRestApi"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest)[K]
    }>): TestInvokeAuthorizerResponse {
        return this.client.testInvokeAuthorizer(
            this.ops["TestInvokeAuthorizer"].apply(partialParams)
        );
    }

    invokeTestInvokeMethod(partialParams: ToOptional<{
      [K in keyof TestInvokeMethodRequest]: (TestInvokeMethodRequest)[K]
    }>): TestInvokeMethodResponse {
        return this.client.testInvokeMethod(
            this.ops["TestInvokeMethod"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof UpdateApiKeyRequest]: (UpdateApiKeyRequest)[K]
    }>): ApiKey {
        return this.client.updateApiKey(
            this.ops["UpdateApiKey"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest)[K]
    }>): Authorizer {
        return this.client.updateAuthorizer(
            this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateBasePathMapping(partialParams: ToOptional<{
      [K in keyof UpdateBasePathMappingRequest]: (UpdateBasePathMappingRequest)[K]
    }>): BasePathMapping {
        return this.client.updateBasePathMapping(
            this.ops["UpdateBasePathMapping"].apply(partialParams)
        );
    }

    invokeUpdateClientCertificate(partialParams: ToOptional<{
      [K in keyof UpdateClientCertificateRequest]: (UpdateClientCertificateRequest)[K]
    }>): ClientCertificate {
        return this.client.updateClientCertificate(
            this.ops["UpdateClientCertificate"].apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest)[K]
    }>): Deployment {
        return this.client.updateDeployment(
            this.ops["UpdateDeployment"].apply(partialParams)
        );
    }

    invokeUpdateDocumentationPart(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationPartRequest]: (UpdateDocumentationPartRequest)[K]
    }>): DocumentationPart {
        return this.client.updateDocumentationPart(
            this.ops["UpdateDocumentationPart"].apply(partialParams)
        );
    }

    invokeUpdateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationVersionRequest]: (UpdateDocumentationVersionRequest)[K]
    }>): DocumentationVersion {
        return this.client.updateDocumentationVersion(
            this.ops["UpdateDocumentationVersion"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest)[K]
    }>): DomainName {
        return this.client.updateDomainName(
            this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateGatewayResponse(partialParams: ToOptional<{
      [K in keyof UpdateGatewayResponseRequest]: (UpdateGatewayResponseRequest)[K]
    }>): GatewayResponse {
        return this.client.updateGatewayResponse(
            this.ops["UpdateGatewayResponse"].apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest)[K]
    }>): Integration {
        return this.client.updateIntegration(
            this.ops["UpdateIntegration"].apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest)[K]
    }>): IntegrationResponse {
        return this.client.updateIntegrationResponse(
            this.ops["UpdateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeUpdateMethod(partialParams: ToOptional<{
      [K in keyof UpdateMethodRequest]: (UpdateMethodRequest)[K]
    }>): Method {
        return this.client.updateMethod(
            this.ops["UpdateMethod"].apply(partialParams)
        );
    }

    invokeUpdateMethodResponse(partialParams: ToOptional<{
      [K in keyof UpdateMethodResponseRequest]: (UpdateMethodResponseRequest)[K]
    }>): MethodResponse {
        return this.client.updateMethodResponse(
            this.ops["UpdateMethodResponse"].apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest]: (UpdateModelRequest)[K]
    }>): Model {
        return this.client.updateModel(
            this.ops["UpdateModel"].apply(partialParams)
        );
    }

    invokeUpdateRequestValidator(partialParams: ToOptional<{
      [K in keyof UpdateRequestValidatorRequest]: (UpdateRequestValidatorRequest)[K]
    }>): RequestValidator {
        return this.client.updateRequestValidator(
            this.ops["UpdateRequestValidator"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest]: (UpdateResourceRequest)[K]
    }>): Resource {
        return this.client.updateResource(
            this.ops["UpdateResource"].apply(partialParams)
        );
    }

    invokeUpdateRestApi(partialParams: ToOptional<{
      [K in keyof UpdateRestApiRequest]: (UpdateRestApiRequest)[K]
    }>): RestApi {
        return this.client.updateRestApi(
            this.ops["UpdateRestApi"].apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest]: (UpdateStageRequest)[K]
    }>): Stage {
        return this.client.updateStage(
            this.ops["UpdateStage"].apply(partialParams)
        );
    }

    invokeUpdateUsage(partialParams: ToOptional<{
      [K in keyof UpdateUsageRequest]: (UpdateUsageRequest)[K]
    }>): Usage {
        return this.client.updateUsage(
            this.ops["UpdateUsage"].apply(partialParams)
        );
    }

    invokeUpdateUsagePlan(partialParams: ToOptional<{
      [K in keyof UpdateUsagePlanRequest]: (UpdateUsagePlanRequest)[K]
    }>): UsagePlan {
        return this.client.updateUsagePlan(
            this.ops["UpdateUsagePlan"].apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest)[K]
    }>): VpcLink {
        return this.client.updateVpcLink(
            this.ops["UpdateVpcLink"].apply(partialParams)
        );
    }
}