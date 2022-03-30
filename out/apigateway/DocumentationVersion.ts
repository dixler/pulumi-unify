
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

export default class extends aws.apigateway.DocumentationVersion {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.apigateway.DocumentationVersion>) {
        super(...args)
        this.client = new awssdk.APIGateway()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/apigateway-2015-07-09.normal.json"), this.client)
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest)[K]
    }>): Authorizer {
        return this.client.createAuthorizer(
            this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateBasePathMapping(partialParams: ToOptional<{
      [K in keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest]: (CreateBasePathMappingRequest & CreateBasePathMappingRequest & CreateBasePathMappingRequest)[K]
    }>): BasePathMapping {
        return this.client.createBasePathMapping(
            this.ops["CreateBasePathMapping"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): Deployment {
        return this.client.createDeployment(
            this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDocumentationPart(partialParams: ToOptional<{
      [K in keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest]: (CreateDocumentationPartRequest & CreateDocumentationPartRequest & CreateDocumentationPartRequest)[K]
    }>): DocumentationPart {
        return this.client.createDocumentationPart(
            this.ops["CreateDocumentationPart"].apply(partialParams)
        );
    }

    invokeCreateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest]: (CreateDocumentationVersionRequest & CreateDocumentationVersionRequest & CreateDocumentationVersionRequest)[K]
    }>): DocumentationVersion {
        return this.client.createDocumentationVersion(
            this.ops["CreateDocumentationVersion"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest]: (CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest)[K]
    }>): DomainName {
        return this.client.createDomainName(
            this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest]: (CreateModelRequest & CreateModelRequest & CreateModelRequest)[K]
    }>): Model {
        return this.client.createModel(
            this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateRequestValidator(partialParams: ToOptional<{
      [K in keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest]: (CreateRequestValidatorRequest & CreateRequestValidatorRequest & CreateRequestValidatorRequest)[K]
    }>): RequestValidator {
        return this.client.createRequestValidator(
            this.ops["CreateRequestValidator"].apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceRequest & keyof CreateResourceRequest & keyof CreateResourceRequest]: (CreateResourceRequest & CreateResourceRequest & CreateResourceRequest)[K]
    }>): Resource {
        return this.client.createResource(
            this.ops["CreateResource"].apply(partialParams)
        );
    }

    invokeCreateRestApi(partialParams: ToOptional<{
      [K in keyof CreateRestApiRequest & keyof CreateRestApiRequest & keyof CreateRestApiRequest]: (CreateRestApiRequest & CreateRestApiRequest & CreateRestApiRequest)[K]
    }>): RestApi {
        return this.client.createRestApi(
            this.ops["CreateRestApi"].apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest]: (CreateStageRequest & CreateStageRequest & CreateStageRequest)[K]
    }>): Stage {
        return this.client.createStage(
            this.ops["CreateStage"].apply(partialParams)
        );
    }

    invokeCreateUsagePlan(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest]: (CreateUsagePlanRequest & CreateUsagePlanRequest & CreateUsagePlanRequest)[K]
    }>): UsagePlan {
        return this.client.createUsagePlan(
            this.ops["CreateUsagePlan"].apply(partialParams)
        );
    }

    invokeCreateUsagePlanKey(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest]: (CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest)[K]
    }>): UsagePlanKey {
        return this.client.createUsagePlanKey(
            this.ops["CreateUsagePlanKey"].apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest)[K]
    }>): VpcLink {
        return this.client.createVpcLink(
            this.ops["CreateVpcLink"].apply(partialParams)
        );
    }

    invokeDeleteApiKey(partialParams: ToOptional<{
      [K in keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest]: (DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest)[K]
    }>): void {
        return this.client.deleteApiKey(
            this.ops["DeleteApiKey"].apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest)[K]
    }>): void {
        return this.client.deleteAuthorizer(
            this.ops["DeleteAuthorizer"].apply(partialParams)
        );
    }

    invokeDeleteBasePathMapping(partialParams: ToOptional<{
      [K in keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest]: (DeleteBasePathMappingRequest & DeleteBasePathMappingRequest & DeleteBasePathMappingRequest)[K]
    }>): void {
        return this.client.deleteBasePathMapping(
            this.ops["DeleteBasePathMapping"].apply(partialParams)
        );
    }

    invokeDeleteClientCertificate(partialParams: ToOptional<{
      [K in keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest]: (DeleteClientCertificateRequest & DeleteClientCertificateRequest & DeleteClientCertificateRequest)[K]
    }>): void {
        return this.client.deleteClientCertificate(
            this.ops["DeleteClientCertificate"].apply(partialParams)
        );
    }

    invokeDeleteDeployment(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest]: (DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest)[K]
    }>): void {
        return this.client.deleteDeployment(
            this.ops["DeleteDeployment"].apply(partialParams)
        );
    }

    invokeDeleteDocumentationPart(partialParams: ToOptional<{
      [K in keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest]: (DeleteDocumentationPartRequest & DeleteDocumentationPartRequest & DeleteDocumentationPartRequest)[K]
    }>): void {
        return this.client.deleteDocumentationPart(
            this.ops["DeleteDocumentationPart"].apply(partialParams)
        );
    }

    invokeDeleteDocumentationVersion(partialParams: ToOptional<{
      [K in keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest]: (DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest)[K]
    }>): void {
        return this.client.deleteDocumentationVersion(
            this.ops["DeleteDocumentationVersion"].apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest)[K]
    }>): void {
        return this.client.deleteDomainName(
            this.ops["DeleteDomainName"].apply(partialParams)
        );
    }

    invokeDeleteGatewayResponse(partialParams: ToOptional<{
      [K in keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest]: (DeleteGatewayResponseRequest & DeleteGatewayResponseRequest & DeleteGatewayResponseRequest)[K]
    }>): void {
        return this.client.deleteGatewayResponse(
            this.ops["DeleteGatewayResponse"].apply(partialParams)
        );
    }

    invokeDeleteIntegration(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest]: (DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest)[K]
    }>): void {
        return this.client.deleteIntegration(
            this.ops["DeleteIntegration"].apply(partialParams)
        );
    }

    invokeDeleteIntegrationResponse(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest]: (DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest)[K]
    }>): void {
        return this.client.deleteIntegrationResponse(
            this.ops["DeleteIntegrationResponse"].apply(partialParams)
        );
    }

    invokeDeleteMethod(partialParams: ToOptional<{
      [K in keyof DeleteMethodRequest & keyof DeleteMethodRequest & keyof DeleteMethodRequest]: (DeleteMethodRequest & DeleteMethodRequest & DeleteMethodRequest)[K]
    }>): void {
        return this.client.deleteMethod(
            this.ops["DeleteMethod"].apply(partialParams)
        );
    }

    invokeDeleteMethodResponse(partialParams: ToOptional<{
      [K in keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest]: (DeleteMethodResponseRequest & DeleteMethodResponseRequest & DeleteMethodResponseRequest)[K]
    }>): void {
        return this.client.deleteMethodResponse(
            this.ops["DeleteMethodResponse"].apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest]: (DeleteModelRequest & DeleteModelRequest & DeleteModelRequest)[K]
    }>): void {
        return this.client.deleteModel(
            this.ops["DeleteModel"].apply(partialParams)
        );
    }

    invokeDeleteRequestValidator(partialParams: ToOptional<{
      [K in keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest]: (DeleteRequestValidatorRequest & DeleteRequestValidatorRequest & DeleteRequestValidatorRequest)[K]
    }>): void {
        return this.client.deleteRequestValidator(
            this.ops["DeleteRequestValidator"].apply(partialParams)
        );
    }

    invokeDeleteResource(partialParams: ToOptional<{
      [K in keyof DeleteResourceRequest & keyof DeleteResourceRequest & keyof DeleteResourceRequest]: (DeleteResourceRequest & DeleteResourceRequest & DeleteResourceRequest)[K]
    }>): void {
        return this.client.deleteResource(
            this.ops["DeleteResource"].apply(partialParams)
        );
    }

    invokeDeleteRestApi(partialParams: ToOptional<{
      [K in keyof DeleteRestApiRequest & keyof DeleteRestApiRequest & keyof DeleteRestApiRequest]: (DeleteRestApiRequest & DeleteRestApiRequest & DeleteRestApiRequest)[K]
    }>): void {
        return this.client.deleteRestApi(
            this.ops["DeleteRestApi"].apply(partialParams)
        );
    }

    invokeDeleteStage(partialParams: ToOptional<{
      [K in keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest]: (DeleteStageRequest & DeleteStageRequest & DeleteStageRequest)[K]
    }>): void {
        return this.client.deleteStage(
            this.ops["DeleteStage"].apply(partialParams)
        );
    }

    invokeDeleteUsagePlan(partialParams: ToOptional<{
      [K in keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest]: (DeleteUsagePlanRequest & DeleteUsagePlanRequest & DeleteUsagePlanRequest)[K]
    }>): void {
        return this.client.deleteUsagePlan(
            this.ops["DeleteUsagePlan"].apply(partialParams)
        );
    }

    invokeDeleteUsagePlanKey(partialParams: ToOptional<{
      [K in keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest]: (DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest)[K]
    }>): void {
        return this.client.deleteUsagePlanKey(
            this.ops["DeleteUsagePlanKey"].apply(partialParams)
        );
    }

    invokeDeleteVpcLink(partialParams: ToOptional<{
      [K in keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest]: (DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest)[K]
    }>): void {
        return this.client.deleteVpcLink(
            this.ops["DeleteVpcLink"].apply(partialParams)
        );
    }

    invokeFlushStageAuthorizersCache(partialParams: ToOptional<{
      [K in keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest]: (FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest)[K]
    }>): void {
        return this.client.flushStageAuthorizersCache(
            this.ops["FlushStageAuthorizersCache"].apply(partialParams)
        );
    }

    invokeFlushStageCache(partialParams: ToOptional<{
      [K in keyof FlushStageCacheRequest & keyof FlushStageCacheRequest & keyof FlushStageCacheRequest]: (FlushStageCacheRequest & FlushStageCacheRequest & FlushStageCacheRequest)[K]
    }>): void {
        return this.client.flushStageCache(
            this.ops["FlushStageCache"].apply(partialParams)
        );
    }

    invokeGetApiKey(partialParams: ToOptional<{
      [K in keyof GetApiKeyRequest & keyof GetApiKeyRequest & keyof GetApiKeyRequest]: (GetApiKeyRequest & GetApiKeyRequest & GetApiKeyRequest)[K]
    }>): ApiKey {
        return this.client.getApiKey(
            this.ops["GetApiKey"].apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest]: (GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest)[K]
    }>): Authorizer {
        return this.client.getAuthorizer(
            this.ops["GetAuthorizer"].apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest]: (GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest)[K]
    }>): Authorizers {
        return this.client.getAuthorizers(
            this.ops["GetAuthorizers"].apply(partialParams)
        );
    }

    invokeGetBasePathMapping(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest]: (GetBasePathMappingRequest & GetBasePathMappingRequest & GetBasePathMappingRequest)[K]
    }>): BasePathMapping {
        return this.client.getBasePathMapping(
            this.ops["GetBasePathMapping"].apply(partialParams)
        );
    }

    invokeGetBasePathMappings(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest]: (GetBasePathMappingsRequest & GetBasePathMappingsRequest & GetBasePathMappingsRequest)[K]
    }>): BasePathMappings {
        return this.client.getBasePathMappings(
            this.ops["GetBasePathMappings"].apply(partialParams)
        );
    }

    invokeGetClientCertificate(partialParams: ToOptional<{
      [K in keyof GetClientCertificateRequest & keyof GetClientCertificateRequest & keyof GetClientCertificateRequest]: (GetClientCertificateRequest & GetClientCertificateRequest & GetClientCertificateRequest)[K]
    }>): ClientCertificate {
        return this.client.getClientCertificate(
            this.ops["GetClientCertificate"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): Deployment {
        return this.client.getDeployment(
            this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest]: (GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest)[K]
    }>): Deployments {
        return this.client.getDeployments(
            this.ops["GetDeployments"].apply(partialParams)
        );
    }

    invokeGetDocumentationPart(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest]: (GetDocumentationPartRequest & GetDocumentationPartRequest & GetDocumentationPartRequest)[K]
    }>): DocumentationPart {
        return this.client.getDocumentationPart(
            this.ops["GetDocumentationPart"].apply(partialParams)
        );
    }

    invokeGetDocumentationParts(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest]: (GetDocumentationPartsRequest & GetDocumentationPartsRequest & GetDocumentationPartsRequest)[K]
    }>): DocumentationParts {
        return this.client.getDocumentationParts(
            this.ops["GetDocumentationParts"].apply(partialParams)
        );
    }

    invokeGetDocumentationVersion(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest]: (GetDocumentationVersionRequest & GetDocumentationVersionRequest & GetDocumentationVersionRequest)[K]
    }>): DocumentationVersion {
        return this.client.getDocumentationVersion(
            this.ops["GetDocumentationVersion"].apply(partialParams)
        );
    }

    invokeGetDocumentationVersions(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest]: (GetDocumentationVersionsRequest & GetDocumentationVersionsRequest & GetDocumentationVersionsRequest)[K]
    }>): DocumentationVersions {
        return this.client.getDocumentationVersions(
            this.ops["GetDocumentationVersions"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest]: (GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest)[K]
    }>): DomainName {
        return this.client.getDomainName(
            this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetExport(partialParams: ToOptional<{
      [K in keyof GetExportRequest & keyof GetExportRequest & keyof GetExportRequest]: (GetExportRequest & GetExportRequest & GetExportRequest)[K]
    }>): ExportResponse {
        return this.client.getExport(
            this.ops["GetExport"].apply(partialParams)
        );
    }

    invokeGetGatewayResponse(partialParams: ToOptional<{
      [K in keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest]: (GetGatewayResponseRequest & GetGatewayResponseRequest & GetGatewayResponseRequest)[K]
    }>): GatewayResponse {
        return this.client.getGatewayResponse(
            this.ops["GetGatewayResponse"].apply(partialParams)
        );
    }

    invokeGetGatewayResponses(partialParams: ToOptional<{
      [K in keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest]: (GetGatewayResponsesRequest & GetGatewayResponsesRequest & GetGatewayResponsesRequest)[K]
    }>): GatewayResponses {
        return this.client.getGatewayResponses(
            this.ops["GetGatewayResponses"].apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest]: (GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest)[K]
    }>): Integration {
        return this.client.getIntegration(
            this.ops["GetIntegration"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest)[K]
    }>): IntegrationResponse {
        return this.client.getIntegrationResponse(
            this.ops["GetIntegrationResponse"].apply(partialParams)
        );
    }

    invokeGetMethod(partialParams: ToOptional<{
      [K in keyof GetMethodRequest & keyof GetMethodRequest & keyof GetMethodRequest]: (GetMethodRequest & GetMethodRequest & GetMethodRequest)[K]
    }>): Method {
        return this.client.getMethod(
            this.ops["GetMethod"].apply(partialParams)
        );
    }

    invokeGetMethodResponse(partialParams: ToOptional<{
      [K in keyof GetMethodResponseRequest & keyof GetMethodResponseRequest & keyof GetMethodResponseRequest]: (GetMethodResponseRequest & GetMethodResponseRequest & GetMethodResponseRequest)[K]
    }>): MethodResponse {
        return this.client.getMethodResponse(
            this.ops["GetMethodResponse"].apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest]: (GetModelRequest & GetModelRequest & GetModelRequest)[K]
    }>): Model {
        return this.client.getModel(
            this.ops["GetModel"].apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest]: (GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest)[K]
    }>): Template {
        return this.client.getModelTemplate(
            this.ops["GetModelTemplate"].apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest]: (GetModelsRequest & GetModelsRequest & GetModelsRequest)[K]
    }>): Models {
        return this.client.getModels(
            this.ops["GetModels"].apply(partialParams)
        );
    }

    invokeGetRequestValidator(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest]: (GetRequestValidatorRequest & GetRequestValidatorRequest & GetRequestValidatorRequest)[K]
    }>): RequestValidator {
        return this.client.getRequestValidator(
            this.ops["GetRequestValidator"].apply(partialParams)
        );
    }

    invokeGetRequestValidators(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest]: (GetRequestValidatorsRequest & GetRequestValidatorsRequest & GetRequestValidatorsRequest)[K]
    }>): RequestValidators {
        return this.client.getRequestValidators(
            this.ops["GetRequestValidators"].apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceRequest & keyof GetResourceRequest & keyof GetResourceRequest]: (GetResourceRequest & GetResourceRequest & GetResourceRequest)[K]
    }>): Resource {
        return this.client.getResource(
            this.ops["GetResource"].apply(partialParams)
        );
    }

    invokeGetResources(partialParams: ToOptional<{
      [K in keyof GetResourcesRequest & keyof GetResourcesRequest & keyof GetResourcesRequest]: (GetResourcesRequest & GetResourcesRequest & GetResourcesRequest)[K]
    }>): Resources {
        return this.client.getResources(
            this.ops["GetResources"].apply(partialParams)
        );
    }

    invokeGetRestApi(partialParams: ToOptional<{
      [K in keyof GetRestApiRequest & keyof GetRestApiRequest & keyof GetRestApiRequest]: (GetRestApiRequest & GetRestApiRequest & GetRestApiRequest)[K]
    }>): RestApi {
        return this.client.getRestApi(
            this.ops["GetRestApi"].apply(partialParams)
        );
    }

    invokeGetSdk(partialParams: ToOptional<{
      [K in keyof GetSdkRequest & keyof GetSdkRequest & keyof GetSdkRequest]: (GetSdkRequest & GetSdkRequest & GetSdkRequest)[K]
    }>): SdkResponse {
        return this.client.getSdk(
            this.ops["GetSdk"].apply(partialParams)
        );
    }

    invokeGetSdkType(partialParams: ToOptional<{
      [K in keyof GetSdkTypeRequest & keyof GetSdkTypeRequest & keyof GetSdkTypeRequest]: (GetSdkTypeRequest & GetSdkTypeRequest & GetSdkTypeRequest)[K]
    }>): SdkType {
        return this.client.getSdkType(
            this.ops["GetSdkType"].apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest]: (GetStageRequest & GetStageRequest & GetStageRequest)[K]
    }>): Stage {
        return this.client.getStage(
            this.ops["GetStage"].apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest]: (GetStagesRequest & GetStagesRequest & GetStagesRequest)[K]
    }>): Stages {
        return this.client.getStages(
            this.ops["GetStages"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest]: (GetTagsRequest & GetTagsRequest & GetTagsRequest)[K]
    }>): Tags {
        return this.client.getTags(
            this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetUsage(partialParams: ToOptional<{
      [K in keyof GetUsageRequest & keyof GetUsageRequest & keyof GetUsageRequest]: (GetUsageRequest & GetUsageRequest & GetUsageRequest)[K]
    }>): Usage {
        return this.client.getUsage(
            this.ops["GetUsage"].apply(partialParams)
        );
    }

    invokeGetUsagePlan(partialParams: ToOptional<{
      [K in keyof GetUsagePlanRequest & keyof GetUsagePlanRequest & keyof GetUsagePlanRequest]: (GetUsagePlanRequest & GetUsagePlanRequest & GetUsagePlanRequest)[K]
    }>): UsagePlan {
        return this.client.getUsagePlan(
            this.ops["GetUsagePlan"].apply(partialParams)
        );
    }

    invokeGetUsagePlanKey(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest]: (GetUsagePlanKeyRequest & GetUsagePlanKeyRequest & GetUsagePlanKeyRequest)[K]
    }>): UsagePlanKey {
        return this.client.getUsagePlanKey(
            this.ops["GetUsagePlanKey"].apply(partialParams)
        );
    }

    invokeGetUsagePlanKeys(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest]: (GetUsagePlanKeysRequest & GetUsagePlanKeysRequest & GetUsagePlanKeysRequest)[K]
    }>): UsagePlanKeys {
        return this.client.getUsagePlanKeys(
            this.ops["GetUsagePlanKeys"].apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest]: (GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest)[K]
    }>): VpcLink {
        return this.client.getVpcLink(
            this.ops["GetVpcLink"].apply(partialParams)
        );
    }

    invokeImportApiKeys(partialParams: ToOptional<{
      [K in keyof ImportApiKeysRequest & keyof ImportApiKeysRequest & keyof ImportApiKeysRequest]: (ImportApiKeysRequest & ImportApiKeysRequest & ImportApiKeysRequest)[K]
    }>): ApiKeyIds {
        return this.client.importApiKeys(
            this.ops["ImportApiKeys"].apply(partialParams)
        );
    }

    invokeImportDocumentationParts(partialParams: ToOptional<{
      [K in keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest]: (ImportDocumentationPartsRequest & ImportDocumentationPartsRequest & ImportDocumentationPartsRequest)[K]
    }>): DocumentationPartIds {
        return this.client.importDocumentationParts(
            this.ops["ImportDocumentationParts"].apply(partialParams)
        );
    }

    invokeImportRestApi(partialParams: ToOptional<{
      [K in keyof ImportRestApiRequest & keyof ImportRestApiRequest & keyof ImportRestApiRequest]: (ImportRestApiRequest & ImportRestApiRequest & ImportRestApiRequest)[K]
    }>): RestApi {
        return this.client.importRestApi(
            this.ops["ImportRestApi"].apply(partialParams)
        );
    }

    invokePutGatewayResponse(partialParams: ToOptional<{
      [K in keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest]: (PutGatewayResponseRequest & PutGatewayResponseRequest & PutGatewayResponseRequest)[K]
    }>): GatewayResponse {
        return this.client.putGatewayResponse(
            this.ops["PutGatewayResponse"].apply(partialParams)
        );
    }

    invokePutIntegration(partialParams: ToOptional<{
      [K in keyof PutIntegrationRequest & keyof PutIntegrationRequest & keyof PutIntegrationRequest]: (PutIntegrationRequest & PutIntegrationRequest & PutIntegrationRequest)[K]
    }>): Integration {
        return this.client.putIntegration(
            this.ops["PutIntegration"].apply(partialParams)
        );
    }

    invokePutIntegrationResponse(partialParams: ToOptional<{
      [K in keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest]: (PutIntegrationResponseRequest & PutIntegrationResponseRequest & PutIntegrationResponseRequest)[K]
    }>): IntegrationResponse {
        return this.client.putIntegrationResponse(
            this.ops["PutIntegrationResponse"].apply(partialParams)
        );
    }

    invokePutMethod(partialParams: ToOptional<{
      [K in keyof PutMethodRequest & keyof PutMethodRequest & keyof PutMethodRequest]: (PutMethodRequest & PutMethodRequest & PutMethodRequest)[K]
    }>): Method {
        return this.client.putMethod(
            this.ops["PutMethod"].apply(partialParams)
        );
    }

    invokePutMethodResponse(partialParams: ToOptional<{
      [K in keyof PutMethodResponseRequest & keyof PutMethodResponseRequest & keyof PutMethodResponseRequest]: (PutMethodResponseRequest & PutMethodResponseRequest & PutMethodResponseRequest)[K]
    }>): MethodResponse {
        return this.client.putMethodResponse(
            this.ops["PutMethodResponse"].apply(partialParams)
        );
    }

    invokePutRestApi(partialParams: ToOptional<{
      [K in keyof PutRestApiRequest & keyof PutRestApiRequest & keyof PutRestApiRequest]: (PutRestApiRequest & PutRestApiRequest & PutRestApiRequest)[K]
    }>): RestApi {
        return this.client.putRestApi(
            this.ops["PutRestApi"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest & keyof Omit<TestInvokeAuthorizerRequest, "restApiId"> & keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest & Omit<TestInvokeAuthorizerRequest, "restApiId"> & TestInvokeAuthorizerRequest)[K]
    }>): TestInvokeAuthorizerResponse {
        return this.client.testInvokeAuthorizer(
            this.ops["TestInvokeAuthorizer"].apply(partialParams)
        );
    }

    invokeTestInvokeMethod(partialParams: ToOptional<{
      [K in keyof TestInvokeMethodRequest & keyof Omit<TestInvokeMethodRequest, "restApiId"> & keyof TestInvokeMethodRequest]: (TestInvokeMethodRequest & Omit<TestInvokeMethodRequest, "restApiId"> & TestInvokeMethodRequest)[K]
    }>): TestInvokeMethodResponse {
        return this.client.testInvokeMethod(
            this.ops["TestInvokeMethod"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest]: (UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest)[K]
    }>): ApiKey {
        return this.client.updateApiKey(
            this.ops["UpdateApiKey"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof Omit<UpdateAuthorizerRequest, "restApiId"> & keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest & Omit<UpdateAuthorizerRequest, "restApiId"> & UpdateAuthorizerRequest)[K]
    }>): Authorizer {
        return this.client.updateAuthorizer(
            this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateBasePathMapping(partialParams: ToOptional<{
      [K in keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest]: (UpdateBasePathMappingRequest & UpdateBasePathMappingRequest & UpdateBasePathMappingRequest)[K]
    }>): BasePathMapping {
        return this.client.updateBasePathMapping(
            this.ops["UpdateBasePathMapping"].apply(partialParams)
        );
    }

    invokeUpdateClientCertificate(partialParams: ToOptional<{
      [K in keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest]: (UpdateClientCertificateRequest & UpdateClientCertificateRequest & UpdateClientCertificateRequest)[K]
    }>): ClientCertificate {
        return this.client.updateClientCertificate(
            this.ops["UpdateClientCertificate"].apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest & keyof Omit<UpdateDeploymentRequest, "restApiId"> & keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest & Omit<UpdateDeploymentRequest, "restApiId"> & UpdateDeploymentRequest)[K]
    }>): Deployment {
        return this.client.updateDeployment(
            this.ops["UpdateDeployment"].apply(partialParams)
        );
    }

    invokeUpdateDocumentationPart(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationPartRequest & keyof Omit<UpdateDocumentationPartRequest, "restApiId"> & keyof UpdateDocumentationPartRequest]: (UpdateDocumentationPartRequest & Omit<UpdateDocumentationPartRequest, "restApiId"> & UpdateDocumentationPartRequest)[K]
    }>): DocumentationPart {
        return this.client.updateDocumentationPart(
            this.ops["UpdateDocumentationPart"].apply(partialParams)
        );
    }

    invokeUpdateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationVersionRequest & keyof Omit<UpdateDocumentationVersionRequest, "restApiId"> & keyof UpdateDocumentationVersionRequest]: (UpdateDocumentationVersionRequest & Omit<UpdateDocumentationVersionRequest, "restApiId"> & UpdateDocumentationVersionRequest)[K]
    }>): DocumentationVersion {
        return this.client.updateDocumentationVersion(
            this.ops["UpdateDocumentationVersion"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest)[K]
    }>): DomainName {
        return this.client.updateDomainName(
            this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateGatewayResponse(partialParams: ToOptional<{
      [K in keyof UpdateGatewayResponseRequest & keyof Omit<UpdateGatewayResponseRequest, "restApiId"> & keyof UpdateGatewayResponseRequest]: (UpdateGatewayResponseRequest & Omit<UpdateGatewayResponseRequest, "restApiId"> & UpdateGatewayResponseRequest)[K]
    }>): GatewayResponse {
        return this.client.updateGatewayResponse(
            this.ops["UpdateGatewayResponse"].apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest & keyof Omit<UpdateIntegrationRequest, "restApiId"> & keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest & Omit<UpdateIntegrationRequest, "restApiId"> & UpdateIntegrationRequest)[K]
    }>): Integration {
        return this.client.updateIntegration(
            this.ops["UpdateIntegration"].apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest & keyof Omit<UpdateIntegrationResponseRequest, "restApiId"> & keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest & Omit<UpdateIntegrationResponseRequest, "restApiId"> & UpdateIntegrationResponseRequest)[K]
    }>): IntegrationResponse {
        return this.client.updateIntegrationResponse(
            this.ops["UpdateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeUpdateMethod(partialParams: ToOptional<{
      [K in keyof UpdateMethodRequest & keyof Omit<UpdateMethodRequest, "restApiId"> & keyof UpdateMethodRequest]: (UpdateMethodRequest & Omit<UpdateMethodRequest, "restApiId"> & UpdateMethodRequest)[K]
    }>): Method {
        return this.client.updateMethod(
            this.ops["UpdateMethod"].apply(partialParams)
        );
    }

    invokeUpdateMethodResponse(partialParams: ToOptional<{
      [K in keyof UpdateMethodResponseRequest & keyof Omit<UpdateMethodResponseRequest, "restApiId"> & keyof UpdateMethodResponseRequest]: (UpdateMethodResponseRequest & Omit<UpdateMethodResponseRequest, "restApiId"> & UpdateMethodResponseRequest)[K]
    }>): MethodResponse {
        return this.client.updateMethodResponse(
            this.ops["UpdateMethodResponse"].apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest & keyof Omit<UpdateModelRequest, "restApiId"> & keyof UpdateModelRequest]: (UpdateModelRequest & Omit<UpdateModelRequest, "restApiId"> & UpdateModelRequest)[K]
    }>): Model {
        return this.client.updateModel(
            this.ops["UpdateModel"].apply(partialParams)
        );
    }

    invokeUpdateRequestValidator(partialParams: ToOptional<{
      [K in keyof UpdateRequestValidatorRequest & keyof Omit<UpdateRequestValidatorRequest, "restApiId"> & keyof UpdateRequestValidatorRequest]: (UpdateRequestValidatorRequest & Omit<UpdateRequestValidatorRequest, "restApiId"> & UpdateRequestValidatorRequest)[K]
    }>): RequestValidator {
        return this.client.updateRequestValidator(
            this.ops["UpdateRequestValidator"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest & keyof Omit<UpdateResourceRequest, "restApiId"> & keyof UpdateResourceRequest]: (UpdateResourceRequest & Omit<UpdateResourceRequest, "restApiId"> & UpdateResourceRequest)[K]
    }>): Resource {
        return this.client.updateResource(
            this.ops["UpdateResource"].apply(partialParams)
        );
    }

    invokeUpdateRestApi(partialParams: ToOptional<{
      [K in keyof UpdateRestApiRequest & keyof Omit<UpdateRestApiRequest, "restApiId"> & keyof UpdateRestApiRequest]: (UpdateRestApiRequest & Omit<UpdateRestApiRequest, "restApiId"> & UpdateRestApiRequest)[K]
    }>): RestApi {
        return this.client.updateRestApi(
            this.ops["UpdateRestApi"].apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest & keyof Omit<UpdateStageRequest, "restApiId"> & keyof UpdateStageRequest]: (UpdateStageRequest & Omit<UpdateStageRequest, "restApiId"> & UpdateStageRequest)[K]
    }>): Stage {
        return this.client.updateStage(
            this.ops["UpdateStage"].apply(partialParams)
        );
    }

    invokeUpdateUsage(partialParams: ToOptional<{
      [K in keyof UpdateUsageRequest & keyof UpdateUsageRequest & keyof UpdateUsageRequest]: (UpdateUsageRequest & UpdateUsageRequest & UpdateUsageRequest)[K]
    }>): Usage {
        return this.client.updateUsage(
            this.ops["UpdateUsage"].apply(partialParams)
        );
    }

    invokeUpdateUsagePlan(partialParams: ToOptional<{
      [K in keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest]: (UpdateUsagePlanRequest & UpdateUsagePlanRequest & UpdateUsagePlanRequest)[K]
    }>): UsagePlan {
        return this.client.updateUsagePlan(
            this.ops["UpdateUsagePlan"].apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest)[K]
    }>): VpcLink {
        return this.client.updateVpcLink(
            this.ops["UpdateVpcLink"].apply(partialParams)
        );
    }
}