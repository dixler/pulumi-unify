
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateApiRequest,
    CreateApiMappingRequest,
    CreateAuthorizerRequest,
    CreateDeploymentRequest,
    CreateDomainNameRequest,
    CreateIntegrationRequest,
    CreateIntegrationResponseRequest,
    CreateModelRequest,
    CreateRouteRequest,
    CreateRouteResponseRequest,
    CreateStageRequest,
    CreateVpcLinkRequest,
    DeleteAccessLogSettingsRequest,
    DeleteApiRequest,
    DeleteApiMappingRequest,
    DeleteAuthorizerRequest,
    DeleteCorsConfigurationRequest,
    DeleteDeploymentRequest,
    DeleteDomainNameRequest,
    DeleteIntegrationRequest,
    DeleteIntegrationResponseRequest,
    DeleteModelRequest,
    DeleteRouteRequest,
    DeleteRouteRequestParameterRequest,
    DeleteRouteResponseRequest,
    DeleteRouteSettingsRequest,
    DeleteStageRequest,
    DeleteVpcLinkRequest,
    ExportApiRequest,
    ResetAuthorizersCacheRequest,
    GetApiRequest,
    GetApiMappingRequest,
    GetApiMappingsRequest,
    GetAuthorizerRequest,
    GetAuthorizersRequest,
    GetDeploymentRequest,
    GetDeploymentsRequest,
    GetDomainNameRequest,
    GetIntegrationRequest,
    GetIntegrationResponseRequest,
    GetIntegrationResponsesRequest,
    GetIntegrationsRequest,
    GetModelRequest,
    GetModelTemplateRequest,
    GetModelsRequest,
    GetRouteRequest,
    GetRouteResponseRequest,
    GetRouteResponsesRequest,
    GetRoutesRequest,
    GetStageRequest,
    GetStagesRequest,
    GetTagsRequest,
    GetVpcLinkRequest,
    ImportApiRequest,
    ReimportApiRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApiRequest,
    UpdateApiMappingRequest,
    UpdateAuthorizerRequest,
    UpdateDeploymentRequest,
    UpdateDomainNameRequest,
    UpdateIntegrationRequest,
    UpdateIntegrationResponseRequest,
    UpdateModelRequest,
    UpdateRouteRequest,
    UpdateRouteResponseRequest,
    UpdateStageRequest,
    UpdateVpcLinkRequest,
    CreateApiResponse,
    CreateApiMappingResponse,
    CreateAuthorizerResponse,
    CreateDeploymentResponse,
    CreateDomainNameResponse,
    CreateIntegrationResult,
    CreateIntegrationResponseResponse,
    CreateModelResponse,
    CreateRouteResult,
    CreateRouteResponseResponse,
    CreateStageResponse,
    CreateVpcLinkResponse,
    DeleteVpcLinkResponse,
    ExportApiResponse,
    GetApiResponse,
    GetApiMappingResponse,
    GetApiMappingsResponse,
    GetAuthorizerResponse,
    GetAuthorizersResponse,
    GetDeploymentResponse,
    GetDeploymentsResponse,
    GetDomainNameResponse,
    GetIntegrationResult,
    GetIntegrationResponseResponse,
    GetIntegrationResponsesResponse,
    GetIntegrationsResponse,
    GetModelResponse,
    GetModelTemplateResponse,
    GetModelsResponse,
    GetRouteResult,
    GetRouteResponseResponse,
    GetRouteResponsesResponse,
    GetRoutesResponse,
    GetStageResponse,
    GetStagesResponse,
    GetTagsResponse,
    GetVpcLinkResponse,
    ImportApiResponse,
    ReimportApiResponse,
    TagResourceResponse,
    UpdateApiResponse,
    UpdateApiMappingResponse,
    UpdateAuthorizerResponse,
    UpdateDeploymentResponse,
    UpdateDomainNameResponse,
    UpdateIntegrationResult,
    UpdateIntegrationResponseResponse,
    UpdateModelResponse,
    UpdateRouteResult,
    UpdateRouteResponseResponse,
    UpdateStageResponse,
    UpdateVpcLinkResponse
} from "aws-sdk/clients/apigatewayv2";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.IntegrationResponse {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.IntegrationResponse>) {
        super(...args)
        this.client = new awssdk.ApiGatewayV2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/apigatewayv2-2018-11-29.normal.json"), this.client)
    }

    invokeCreateApi(partialParams: ToOptional<{
      [K in keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest]: (CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest)[K]
    }>): CreateApiResponse {
        return this.client.createApi(
            this.ops["CreateApi"].apply(partialParams)
        );
    }

    invokeCreateApiMapping(partialParams: ToOptional<{
      [K in keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest]: (CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest)[K]
    }>): CreateApiMappingResponse {
        return this.client.createApiMapping(
            this.ops["CreateApiMapping"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest)[K]
    }>): CreateAuthorizerResponse {
        return this.client.createAuthorizer(
            this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): CreateDeploymentResponse {
        return this.client.createDeployment(
            this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest]: (CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest)[K]
    }>): CreateDomainNameResponse {
        return this.client.createDomainName(
            this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateIntegration(partialParams: ToOptional<{
      [K in keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest]: (CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest)[K]
    }>): CreateIntegrationResult {
        return this.client.createIntegration(
            this.ops["CreateIntegration"].apply(partialParams)
        );
    }

    invokeCreateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest]: (CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest)[K]
    }>): CreateIntegrationResponseResponse {
        return this.client.createIntegrationResponse(
            this.ops["CreateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest]: (CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest)[K]
    }>): CreateModelResponse {
        return this.client.createModel(
            this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest]: (CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest)[K]
    }>): CreateRouteResult {
        return this.client.createRoute(
            this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateRouteResponse(partialParams: ToOptional<{
      [K in keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest]: (CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest)[K]
    }>): CreateRouteResponseResponse {
        return this.client.createRouteResponse(
            this.ops["CreateRouteResponse"].apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest]: (CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest)[K]
    }>): CreateStageResponse {
        return this.client.createStage(
            this.ops["CreateStage"].apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest)[K]
    }>): CreateVpcLinkResponse {
        return this.client.createVpcLink(
            this.ops["CreateVpcLink"].apply(partialParams)
        );
    }

    invokeDeleteAccessLogSettings(partialParams: ToOptional<{
      [K in keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest]: (DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest)[K]
    }>): void {
        return this.client.deleteAccessLogSettings(
            this.ops["DeleteAccessLogSettings"].apply(partialParams)
        );
    }

    invokeDeleteApi(partialParams: ToOptional<{
      [K in keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest]: (DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest)[K]
    }>): void {
        return this.client.deleteApi(
            this.ops["DeleteApi"].apply(partialParams)
        );
    }

    invokeDeleteApiMapping(partialParams: ToOptional<{
      [K in keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest]: (DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest)[K]
    }>): void {
        return this.client.deleteApiMapping(
            this.ops["DeleteApiMapping"].apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest)[K]
    }>): void {
        return this.client.deleteAuthorizer(
            this.ops["DeleteAuthorizer"].apply(partialParams)
        );
    }

    invokeDeleteCorsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest]: (DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest)[K]
    }>): void {
        return this.client.deleteCorsConfiguration(
            this.ops["DeleteCorsConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteDeployment(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest]: (DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest)[K]
    }>): void {
        return this.client.deleteDeployment(
            this.ops["DeleteDeployment"].apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest)[K]
    }>): void {
        return this.client.deleteDomainName(
            this.ops["DeleteDomainName"].apply(partialParams)
        );
    }

    invokeDeleteIntegration(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest]: (DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest)[K]
    }>): void {
        return this.client.deleteIntegration(
            this.ops["DeleteIntegration"].apply(partialParams)
        );
    }

    invokeDeleteIntegrationResponse(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest]: (DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest)[K]
    }>): void {
        return this.client.deleteIntegrationResponse(
            this.ops["DeleteIntegrationResponse"].apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest]: (DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest)[K]
    }>): void {
        return this.client.deleteModel(
            this.ops["DeleteModel"].apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest]: (DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest)[K]
    }>): void {
        return this.client.deleteRoute(
            this.ops["DeleteRoute"].apply(partialParams)
        );
    }

    invokeDeleteRouteRequestParameter(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest]: (DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest)[K]
    }>): void {
        return this.client.deleteRouteRequestParameter(
            this.ops["DeleteRouteRequestParameter"].apply(partialParams)
        );
    }

    invokeDeleteRouteResponse(partialParams: ToOptional<{
      [K in keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest]: (DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest)[K]
    }>): void {
        return this.client.deleteRouteResponse(
            this.ops["DeleteRouteResponse"].apply(partialParams)
        );
    }

    invokeDeleteRouteSettings(partialParams: ToOptional<{
      [K in keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest]: (DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest)[K]
    }>): void {
        return this.client.deleteRouteSettings(
            this.ops["DeleteRouteSettings"].apply(partialParams)
        );
    }

    invokeDeleteStage(partialParams: ToOptional<{
      [K in keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest]: (DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest)[K]
    }>): void {
        return this.client.deleteStage(
            this.ops["DeleteStage"].apply(partialParams)
        );
    }

    invokeDeleteVpcLink(partialParams: ToOptional<{
      [K in keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest]: (DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest)[K]
    }>): DeleteVpcLinkResponse {
        return this.client.deleteVpcLink(
            this.ops["DeleteVpcLink"].apply(partialParams)
        );
    }

    invokeExportApi(partialParams: ToOptional<{
      [K in keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest]: (ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest)[K]
    }>): ExportApiResponse {
        return this.client.exportApi(
            this.ops["ExportApi"].apply(partialParams)
        );
    }

    invokeResetAuthorizersCache(partialParams: ToOptional<{
      [K in keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest]: (ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest)[K]
    }>): void {
        return this.client.resetAuthorizersCache(
            this.ops["ResetAuthorizersCache"].apply(partialParams)
        );
    }

    invokeGetApi(partialParams: ToOptional<{
      [K in keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest]: (GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest)[K]
    }>): GetApiResponse {
        return this.client.getApi(
            this.ops["GetApi"].apply(partialParams)
        );
    }

    invokeGetApiMapping(partialParams: ToOptional<{
      [K in keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest]: (GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest)[K]
    }>): GetApiMappingResponse {
        return this.client.getApiMapping(
            this.ops["GetApiMapping"].apply(partialParams)
        );
    }

    invokeGetApiMappings(partialParams: ToOptional<{
      [K in keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest]: (GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest)[K]
    }>): GetApiMappingsResponse {
        return this.client.getApiMappings(
            this.ops["GetApiMappings"].apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest]: (GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest)[K]
    }>): GetAuthorizerResponse {
        return this.client.getAuthorizer(
            this.ops["GetAuthorizer"].apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest]: (GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest)[K]
    }>): GetAuthorizersResponse {
        return this.client.getAuthorizers(
            this.ops["GetAuthorizers"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): GetDeploymentResponse {
        return this.client.getDeployment(
            this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest]: (GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest)[K]
    }>): GetDeploymentsResponse {
        return this.client.getDeployments(
            this.ops["GetDeployments"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest]: (GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest)[K]
    }>): GetDomainNameResponse {
        return this.client.getDomainName(
            this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest]: (GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest)[K]
    }>): GetIntegrationResult {
        return this.client.getIntegration(
            this.ops["GetIntegration"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest)[K]
    }>): GetIntegrationResponseResponse {
        return this.client.getIntegrationResponse(
            this.ops["GetIntegrationResponse"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponses(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest]: (GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest)[K]
    }>): GetIntegrationResponsesResponse {
        return this.client.getIntegrationResponses(
            this.ops["GetIntegrationResponses"].apply(partialParams)
        );
    }

    invokeGetIntegrations(partialParams: ToOptional<{
      [K in keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest]: (GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest)[K]
    }>): GetIntegrationsResponse {
        return this.client.getIntegrations(
            this.ops["GetIntegrations"].apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest]: (GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest)[K]
    }>): GetModelResponse {
        return this.client.getModel(
            this.ops["GetModel"].apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest]: (GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest)[K]
    }>): GetModelTemplateResponse {
        return this.client.getModelTemplate(
            this.ops["GetModelTemplate"].apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest]: (GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest)[K]
    }>): GetModelsResponse {
        return this.client.getModels(
            this.ops["GetModels"].apply(partialParams)
        );
    }

    invokeGetRoute(partialParams: ToOptional<{
      [K in keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest]: (GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest)[K]
    }>): GetRouteResult {
        return this.client.getRoute(
            this.ops["GetRoute"].apply(partialParams)
        );
    }

    invokeGetRouteResponse(partialParams: ToOptional<{
      [K in keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest]: (GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest)[K]
    }>): GetRouteResponseResponse {
        return this.client.getRouteResponse(
            this.ops["GetRouteResponse"].apply(partialParams)
        );
    }

    invokeGetRouteResponses(partialParams: ToOptional<{
      [K in keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest]: (GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest)[K]
    }>): GetRouteResponsesResponse {
        return this.client.getRouteResponses(
            this.ops["GetRouteResponses"].apply(partialParams)
        );
    }

    invokeGetRoutes(partialParams: ToOptional<{
      [K in keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest]: (GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest)[K]
    }>): GetRoutesResponse {
        return this.client.getRoutes(
            this.ops["GetRoutes"].apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest]: (GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest)[K]
    }>): GetStageResponse {
        return this.client.getStage(
            this.ops["GetStage"].apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest]: (GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest)[K]
    }>): GetStagesResponse {
        return this.client.getStages(
            this.ops["GetStages"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest]: (GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest)[K]
    }>): GetTagsResponse {
        return this.client.getTags(
            this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest]: (GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest)[K]
    }>): GetVpcLinkResponse {
        return this.client.getVpcLink(
            this.ops["GetVpcLink"].apply(partialParams)
        );
    }

    invokeImportApi(partialParams: ToOptional<{
      [K in keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest]: (ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest)[K]
    }>): ImportApiResponse {
        return this.client.importApi(
            this.ops["ImportApi"].apply(partialParams)
        );
    }

    invokeReimportApi(partialParams: ToOptional<{
      [K in keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest]: (ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest)[K]
    }>): ReimportApiResponse {
        return this.client.reimportApi(
            this.ops["ReimportApi"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApi(partialParams: ToOptional<{
      [K in keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest]: (UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest)[K]
    }>): UpdateApiResponse {
        return this.client.updateApi(
            this.ops["UpdateApi"].apply(partialParams)
        );
    }

    invokeUpdateApiMapping(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApiMappingRequest, "ApiId"> & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest]: (Omit<UpdateApiMappingRequest, "ApiId"> & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest)[K]
    }>): UpdateApiMappingResponse {
        return this.client.updateApiMapping(
            this.ops["UpdateApiMapping"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest)[K]
    }>): UpdateAuthorizerResponse {
        return this.client.updateAuthorizer(
            this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest)[K]
    }>): UpdateDeploymentResponse {
        return this.client.updateDeployment(
            this.ops["UpdateDeployment"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest)[K]
    }>): UpdateDomainNameResponse {
        return this.client.updateDomainName(
            this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest)[K]
    }>): UpdateIntegrationResult {
        return this.client.updateIntegration(
            this.ops["UpdateIntegration"].apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest)[K]
    }>): UpdateIntegrationResponseResponse {
        return this.client.updateIntegrationResponse(
            this.ops["UpdateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest]: (UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest)[K]
    }>): UpdateModelResponse {
        return this.client.updateModel(
            this.ops["UpdateModel"].apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest]: (UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest)[K]
    }>): UpdateRouteResult {
        return this.client.updateRoute(
            this.ops["UpdateRoute"].apply(partialParams)
        );
    }

    invokeUpdateRouteResponse(partialParams: ToOptional<{
      [K in keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest]: (UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest)[K]
    }>): UpdateRouteResponseResponse {
        return this.client.updateRouteResponse(
            this.ops["UpdateRouteResponse"].apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest]: (UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest)[K]
    }>): UpdateStageResponse {
        return this.client.updateStage(
            this.ops["UpdateStage"].apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest)[K]
    }>): UpdateVpcLinkResponse {
        return this.client.updateVpcLink(
            this.ops["UpdateVpcLink"].apply(partialParams)
        );
    }
}