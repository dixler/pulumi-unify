
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApiMappingRequest,
    CreateAuthorizerRequest,
    CreateDeploymentRequest,
    CreateIntegrationRequest,
    CreateIntegrationResponseRequest,
    CreateModelRequest,
    CreateRouteRequest,
    CreateRouteResponseRequest,
    CreateStageRequest,
    ExportApiRequest,
    GetApiRequest,
    GetAuthorizerRequest,
    GetAuthorizersRequest,
    GetDeploymentRequest,
    GetDeploymentsRequest,
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
    ReimportApiRequest,
    UpdateApiRequest,
    UpdateApiMappingRequest,
    UpdateAuthorizerRequest,
    UpdateDeploymentRequest,
    UpdateIntegrationRequest,
    UpdateIntegrationResponseRequest,
    UpdateModelRequest,
    UpdateRouteRequest,
    UpdateRouteResponseRequest,
    UpdateStageRequest,
    CreateApiMappingResponse,
    CreateAuthorizerResponse,
    CreateDeploymentResponse,
    CreateIntegrationResult,
    CreateIntegrationResponseResponse,
    CreateModelResponse,
    CreateRouteResult,
    CreateRouteResponseResponse,
    CreateStageResponse,
    ExportApiResponse,
    GetApiResponse,
    GetAuthorizerResponse,
    GetAuthorizersResponse,
    GetDeploymentResponse,
    GetDeploymentsResponse,
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
    ReimportApiResponse,
    UpdateApiResponse,
    UpdateApiMappingResponse,
    UpdateAuthorizerResponse,
    UpdateDeploymentResponse,
    UpdateIntegrationResult,
    UpdateIntegrationResponseResponse,
    UpdateModelResponse,
    UpdateRouteResult,
    UpdateRouteResponseResponse,
    UpdateStageResponse
} from "aws-sdk/clients/apigatewayv2";
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.Route {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.Route>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ApiGatewayV2()
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

    invokeCreateApiMapping(partialParams: ToOptional<{
      [K in keyof CreateApiMappingRequest & keyof Omit<CreateApiMappingRequest, "ApiId">]: (CreateApiMappingRequest)[K]
    }>): Request<CreateApiMappingResponse, AWSError> {
        this.boot();
        return this.client.createApiMapping(
          this.ops["CreateApiMapping"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof Omit<CreateAuthorizerRequest, "ApiId">]: (CreateAuthorizerRequest)[K]
    }>): Request<CreateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof Omit<CreateDeploymentRequest, "ApiId">]: (CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResponse, AWSError> {
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateIntegration(partialParams: ToOptional<{
      [K in keyof CreateIntegrationRequest & keyof Omit<CreateIntegrationRequest, "ApiId">]: (CreateIntegrationRequest)[K]
    }>): Request<CreateIntegrationResult, AWSError> {
        this.boot();
        return this.client.createIntegration(
          this.ops["CreateIntegration"].apply(partialParams)
        );
    }

    invokeCreateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof CreateIntegrationResponseRequest & keyof Omit<CreateIntegrationResponseRequest, "ApiId">]: (CreateIntegrationResponseRequest)[K]
    }>): Request<CreateIntegrationResponseResponse, AWSError> {
        this.boot();
        return this.client.createIntegrationResponse(
          this.ops["CreateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest & keyof Omit<CreateModelRequest, "ApiId">]: (CreateModelRequest)[K]
    }>): Request<CreateModelResponse, AWSError> {
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest & keyof Omit<CreateRouteRequest, "ApiId" | "RouteKey">]: (CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateRouteResponse(partialParams: ToOptional<{
      [K in keyof CreateRouteResponseRequest & keyof Omit<CreateRouteResponseRequest, "ApiId">]: (CreateRouteResponseRequest)[K]
    }>): Request<CreateRouteResponseResponse, AWSError> {
        this.boot();
        return this.client.createRouteResponse(
          this.ops["CreateRouteResponse"].apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest & keyof Omit<CreateStageRequest, "ApiId">]: (CreateStageRequest)[K]
    }>): Request<CreateStageResponse, AWSError> {
        this.boot();
        return this.client.createStage(
          this.ops["CreateStage"].apply(partialParams)
        );
    }

    invokeExportApi(partialParams: ToOptional<{
      [K in keyof ExportApiRequest & keyof Omit<ExportApiRequest, "ApiId">]: (ExportApiRequest)[K]
    }>): Request<ExportApiResponse, AWSError> {
        this.boot();
        return this.client.exportApi(
          this.ops["ExportApi"].apply(partialParams)
        );
    }

    invokeGetApi(partialParams: ToOptional<{
      [K in keyof GetApiRequest & keyof Omit<GetApiRequest, "ApiId">]: (GetApiRequest)[K]
    }>): Request<GetApiResponse, AWSError> {
        this.boot();
        return this.client.getApi(
          this.ops["GetApi"].apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest & keyof Omit<GetAuthorizerRequest, "AuthorizerId" | "ApiId">]: (GetAuthorizerRequest)[K]
    }>): Request<GetAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.getAuthorizer(
          this.ops["GetAuthorizer"].apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest & keyof Omit<GetAuthorizersRequest, "ApiId">]: (GetAuthorizersRequest)[K]
    }>): Request<GetAuthorizersResponse, AWSError> {
        this.boot();
        return this.client.getAuthorizers(
          this.ops["GetAuthorizers"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof Omit<GetDeploymentRequest, "ApiId">]: (GetDeploymentRequest)[K]
    }>): Request<GetDeploymentResponse, AWSError> {
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest & keyof Omit<GetDeploymentsRequest, "ApiId">]: (GetDeploymentsRequest)[K]
    }>): Request<GetDeploymentsResponse, AWSError> {
        this.boot();
        return this.client.getDeployments(
          this.ops["GetDeployments"].apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest & keyof Omit<GetIntegrationRequest, "ApiId">]: (GetIntegrationRequest)[K]
    }>): Request<GetIntegrationResult, AWSError> {
        this.boot();
        return this.client.getIntegration(
          this.ops["GetIntegration"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest & keyof Omit<GetIntegrationResponseRequest, "ApiId">]: (GetIntegrationResponseRequest)[K]
    }>): Request<GetIntegrationResponseResponse, AWSError> {
        this.boot();
        return this.client.getIntegrationResponse(
          this.ops["GetIntegrationResponse"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponses(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponsesRequest & keyof Omit<GetIntegrationResponsesRequest, "ApiId">]: (GetIntegrationResponsesRequest)[K]
    }>): Request<GetIntegrationResponsesResponse, AWSError> {
        this.boot();
        return this.client.getIntegrationResponses(
          this.ops["GetIntegrationResponses"].apply(partialParams)
        );
    }

    invokeGetIntegrations(partialParams: ToOptional<{
      [K in keyof GetIntegrationsRequest & keyof Omit<GetIntegrationsRequest, "ApiId">]: (GetIntegrationsRequest)[K]
    }>): Request<GetIntegrationsResponse, AWSError> {
        this.boot();
        return this.client.getIntegrations(
          this.ops["GetIntegrations"].apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest & keyof Omit<GetModelRequest, "ApiId">]: (GetModelRequest)[K]
    }>): Request<GetModelResponse, AWSError> {
        this.boot();
        return this.client.getModel(
          this.ops["GetModel"].apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest & keyof Omit<GetModelTemplateRequest, "ApiId">]: (GetModelTemplateRequest)[K]
    }>): Request<GetModelTemplateResponse, AWSError> {
        this.boot();
        return this.client.getModelTemplate(
          this.ops["GetModelTemplate"].apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest & keyof Omit<GetModelsRequest, "ApiId">]: (GetModelsRequest)[K]
    }>): Request<GetModelsResponse, AWSError> {
        this.boot();
        return this.client.getModels(
          this.ops["GetModels"].apply(partialParams)
        );
    }

    invokeGetRoute(partialParams: ToOptional<{
      [K in keyof GetRouteRequest & keyof Omit<GetRouteRequest, "ApiId">]: (GetRouteRequest)[K]
    }>): Request<GetRouteResult, AWSError> {
        this.boot();
        return this.client.getRoute(
          this.ops["GetRoute"].apply(partialParams)
        );
    }

    invokeGetRouteResponse(partialParams: ToOptional<{
      [K in keyof GetRouteResponseRequest & keyof Omit<GetRouteResponseRequest, "ApiId">]: (GetRouteResponseRequest)[K]
    }>): Request<GetRouteResponseResponse, AWSError> {
        this.boot();
        return this.client.getRouteResponse(
          this.ops["GetRouteResponse"].apply(partialParams)
        );
    }

    invokeGetRouteResponses(partialParams: ToOptional<{
      [K in keyof GetRouteResponsesRequest & keyof Omit<GetRouteResponsesRequest, "ApiId">]: (GetRouteResponsesRequest)[K]
    }>): Request<GetRouteResponsesResponse, AWSError> {
        this.boot();
        return this.client.getRouteResponses(
          this.ops["GetRouteResponses"].apply(partialParams)
        );
    }

    invokeGetRoutes(partialParams: ToOptional<{
      [K in keyof GetRoutesRequest & keyof Omit<GetRoutesRequest, "ApiId">]: (GetRoutesRequest)[K]
    }>): Request<GetRoutesResponse, AWSError> {
        this.boot();
        return this.client.getRoutes(
          this.ops["GetRoutes"].apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest & keyof Omit<GetStageRequest, "ApiId">]: (GetStageRequest)[K]
    }>): Request<GetStageResponse, AWSError> {
        this.boot();
        return this.client.getStage(
          this.ops["GetStage"].apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest & keyof Omit<GetStagesRequest, "ApiId">]: (GetStagesRequest)[K]
    }>): Request<GetStagesResponse, AWSError> {
        this.boot();
        return this.client.getStages(
          this.ops["GetStages"].apply(partialParams)
        );
    }

    invokeReimportApi(partialParams: ToOptional<{
      [K in keyof ReimportApiRequest & keyof Omit<ReimportApiRequest, "ApiId">]: (ReimportApiRequest)[K]
    }>): Request<ReimportApiResponse, AWSError> {
        this.boot();
        return this.client.reimportApi(
          this.ops["ReimportApi"].apply(partialParams)
        );
    }

    invokeUpdateApi(partialParams: ToOptional<{
      [K in keyof UpdateApiRequest & keyof Omit<UpdateApiRequest, "ApiId">]: (UpdateApiRequest)[K]
    }>): Request<UpdateApiResponse, AWSError> {
        this.boot();
        return this.client.updateApi(
          this.ops["UpdateApi"].apply(partialParams)
        );
    }

    invokeUpdateApiMapping(partialParams: ToOptional<{
      [K in keyof UpdateApiMappingRequest & keyof Omit<UpdateApiMappingRequest, "ApiId">]: (UpdateApiMappingRequest)[K]
    }>): Request<UpdateApiMappingResponse, AWSError> {
        this.boot();
        return this.client.updateApiMapping(
          this.ops["UpdateApiMapping"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof Omit<UpdateAuthorizerRequest, "AuthorizerId" | "ApiId">]: (UpdateAuthorizerRequest)[K]
    }>): Request<UpdateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest & keyof Omit<UpdateDeploymentRequest, "ApiId">]: (UpdateDeploymentRequest)[K]
    }>): Request<UpdateDeploymentResponse, AWSError> {
        this.boot();
        return this.client.updateDeployment(
          this.ops["UpdateDeployment"].apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest & keyof Omit<UpdateIntegrationRequest, "ApiId">]: (UpdateIntegrationRequest)[K]
    }>): Request<UpdateIntegrationResult, AWSError> {
        this.boot();
        return this.client.updateIntegration(
          this.ops["UpdateIntegration"].apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest & keyof Omit<UpdateIntegrationResponseRequest, "ApiId">]: (UpdateIntegrationResponseRequest)[K]
    }>): Request<UpdateIntegrationResponseResponse, AWSError> {
        this.boot();
        return this.client.updateIntegrationResponse(
          this.ops["UpdateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest & keyof Omit<UpdateModelRequest, "ApiId">]: (UpdateModelRequest)[K]
    }>): Request<UpdateModelResponse, AWSError> {
        this.boot();
        return this.client.updateModel(
          this.ops["UpdateModel"].apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteRequest & keyof Omit<UpdateRouteRequest, "ApiId">]: (UpdateRouteRequest)[K]
    }>): Request<UpdateRouteResult, AWSError> {
        this.boot();
        return this.client.updateRoute(
          this.ops["UpdateRoute"].apply(partialParams)
        );
    }

    invokeUpdateRouteResponse(partialParams: ToOptional<{
      [K in keyof UpdateRouteResponseRequest & keyof Omit<UpdateRouteResponseRequest, "ApiId">]: (UpdateRouteResponseRequest)[K]
    }>): Request<UpdateRouteResponseResponse, AWSError> {
        this.boot();
        return this.client.updateRouteResponse(
          this.ops["UpdateRouteResponse"].apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest & keyof Omit<UpdateStageRequest, "ApiId">]: (UpdateStageRequest)[K]
    }>): Request<UpdateStageResponse, AWSError> {
        this.boot();
        return this.client.updateStage(
          this.ops["UpdateStage"].apply(partialParams)
        );
    }
}